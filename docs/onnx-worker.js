!function(n){var t={};function e(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(r,a,function(t){return n[t]}.bind(null,a));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(n,t){var e,r,a=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(n){if(e===setTimeout)return setTimeout(n,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(n){e=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(n){r=i}}();var s,f=[],l=!1,c=-1;function p(){l&&s&&(l=!1,s.length?f=s.concat(f):c=-1,f.length&&m())}function m(){if(!l){var n=u(p);l=!0;for(var t=f.length;t;){for(s=f,f=[];++c<t;)s&&s[c].run();c=-1,t=f.length}s=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function y(n,t){this.fun=n,this.array=t}function h(){}a.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];f.push(new y(n,t)),1!==f.length||l||u(m)},y.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(n){return[]},a.binding=function(n){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(n){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(n,t,e){"use strict";var r,a=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o,i=e(2),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return a(t,n),t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t}(i.WasmBinding);i.init().then(function(){o=u.getInstance(),postMessage({type:"init-success"})}),onmessage=function(n){if(!(n&&n.data&&n.data.type))throw new Error("missing message type from main thread");if("ccall"!==n.data.type)throw new Error("unknown message type from main thread: "+n.data.type);var t=n.data.func,e=n.data.buffer,r=o.ccallRaw(t,new Uint8Array(e));postMessage({type:"ccall",buffer:e,perfData:r},[e])}},function(n,t,e){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0});var a=!1,o=!1;t.init=function(){if(a)return Promise.resolve();if(o)throw new Error("multiple calls to 'init()' detected.");return o=!0,new Promise(function(n,t){(r=e(3))(r).then(function(){n(),o=!1,a=!0},function(n){o=!1,t(n)})})};var i=function(){function n(){this.ptr8=0,this.numBytesAllocated=0}return n.prototype.ccall=function(e){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(!a)throw new Error("wasm not initialized. please ensure 'init()' is called.");var u=t.now(),s=[],f=n.calculateOffsets(s,o);f>this.numBytesAllocated&&this.expandMemory(f),n.ccallSerialize(r.HEAPU8.subarray(this.ptr8,this.ptr8+f),s,o);var l=t.now();this.func(e,this.ptr8);var c=t.now();return n.ccallDeserialize(r.HEAPU8.subarray(this.ptr8,this.ptr8+f),s,o),{startTime:u,endTime:t.now(),startTimeFunc:l,endTimeFunc:c}},n.prototype.ccallRaw=function(n,e){if(!a)throw new Error("wasm not initialized. please ensure 'init()' is called.");var o=t.now(),i=e.byteLength;i>this.numBytesAllocated&&this.expandMemory(i),r.HEAPU8.subarray(this.ptr8,this.ptr8+i).set(e);var u=t.now();this.func(n,this.ptr8);var s=t.now();return e.set(r.HEAPU8.subarray(this.ptr8,this.ptr8+i)),{startTime:o,endTime:t.now(),startTimeFunc:u,endTimeFunc:s}},n.prototype.func=function(n,t){(0,r[n])(t)},n.calculateOffsets=function(n,t){for(var e=4+4*t.length,r=0;r<t.length;r++){var a=t[r],o=a[0],i=a[1],u=a[2],s=0;switch(i){case"bool":case"int32":case"float32":s=4;break;case"float64":s=8;break;case"boolptr":if(!o){n.push(0);continue}if(!Array.isArray(o)&&!ArrayBuffer.isView(o))throw new Error("boolptr requires boolean array or Uint8Array");s=4*Math.ceil(o.length/4);break;case"int32ptr":case"float32ptr":if(!o){n.push(0);continue}if(Array.isArray(o)){if("inout"===u||"out"===u)throw new TypeError("inout/out parameters must be ArrayBufferView for ptr types.");s=4*o.length}else{if(!ArrayBuffer.isView(o))throw new TypeError("unsupported data type in 'ccall()'");s=o.byteLength}break;default:throw new Error("not supported parameter type: "+i)}n.push(e),e+=s}return e},n.ccallSerialize=function(n,t,e){var r=new Int32Array(n.buffer,n.byteOffset),a=new Uint32Array(n.buffer,n.byteOffset),o=new Float32Array(n.buffer,n.byteOffset);a[0]=e.length;for(var i=0;i<e.length;i++){var u=e[i],s=u[0],f=u[1],l=u[2],c=t[i],p=c>>2;if(a[i+1]=c,"out"!==l&&0!==c)switch(f){case"bool":n[c]=!0===s?1:0;break;case"int32":r[p]=s;break;case"float32":o[p]=s;break;case"boolptr":var m=s;n.subarray(c,c+m.length).set(s);break;case"int32ptr":var y=s;r.subarray(p,p+y.length).set(y);break;case"float32ptr":var h=s;o.subarray(p,p+h.length).set(h);break;default:throw new Error("not supported parameter type: "+f)}}},n.ccallDeserialize=function(n,t,e){for(var r=new Float32Array(n.buffer,n.byteOffset),a=new Uint8Array(n.buffer,n.byteOffset),o=0;o<e.length;o++){var i=e[o],u=i[0],s=i[1],f=i[2],l=t[o],c=l>>2;if("out"===f||"inout"===f)switch(s){case"float32ptr":var p=u;p.set(r.subarray(c,c+p.length));break;case"boolptr":var m=u;m.set(a.subarray(l,l+m.length));break;default:throw new Error("not supported parameter type: "+s)}}},n.prototype.expandMemory=function(n){if(0!==this.ptr8&&r._free(this.ptr8),this.numBytesAllocated=2*n,this.ptr8=r._malloc(this.numBytesAllocated),0===this.ptr8)throw new Error("Unable to allocate requested amount of memory. Failing.")},n.prototype.dispose=function(){if(!a)throw new Error("wasm not initialized. please ensure 'init()' is called.");0!==this.ptr8&&r._free(this.ptr8)},n}();t.WasmBinding=i,t.now="undefined"!=typeof performance&&performance.now?function(){return performance.now()}:Date.now},function(n,t,e){(function(t,r){var a,o=(a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){n=void 0!==(n=n||{})?n:{};var o,i={};for(o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.arguments=[],n.thisProgram="./this.program",n.quit=function(n,t){throw t},n.preRun=[],n.postRun=[];var u,s,f=!1,l=!1;f="object"==typeof window,l="function"==typeof importScripts,u="object"==typeof t&&!f&&!l,s=!f&&!u&&!l;var c,p,m="";function y(t){return n.locateFile?n.locateFile(t,m):m+t}u?(m=r+"/",n.read=function(n,t){var r;return c||(c=e(4)),p||(p=e(5)),n=p.normalize(n),r=c.readFileSync(n),t?r:r.toString()},n.readBinary=function(t){var e=n.read(t,!0);return e.buffer||(e=new Uint8Array(e)),T(e.buffer),e},t.argv.length>1&&(n.thisProgram=t.argv[1].replace(/\\/g,"/")),n.arguments=t.argv.slice(2),t.on("uncaughtException",function(n){if(!(n instanceof mn))throw n}),t.on("unhandledRejection",hn),n.quit=function(n){t.exit(n)},n.inspect=function(){return"[Emscripten Module object]"}):s?("undefined"!=typeof read&&(n.read=function(n){return read(n)}),n.readBinary=function(n){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(T("object"==typeof(t=read(n,"binary"))),t)},"undefined"!=typeof scriptArgs?n.arguments=scriptArgs:void 0!==arguments&&(n.arguments=arguments),"function"==typeof quit&&(n.quit=function(n){quit(n)})):(f||l)&&(l?m=self.location.href:document.currentScript&&(m=document.currentScript.src),a&&(m=a),m=0!==m.indexOf("blob:")?m.substr(0,m.lastIndexOf("/")+1):"",n.read=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},l&&(n.readBinary=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),n.readAsync=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)},n.setWindowTitle=function(n){document.title=n});var h=n.print||("undefined"!=typeof console?console.log.bind(console):"undefined"!=typeof print?print:null),_=n.printErr||("undefined"!=typeof printErr?printErr:"undefined"!=typeof console&&console.warn.bind(console)||h);for(o in i)i.hasOwnProperty(o)&&(n[o]=i[o]);i=void 0;var d=16;function b(n,t){return t||(t=d),n=Math.ceil(n/t)*t}var v={"f64-rem":function(n,t){return n%t},debugger:function(){}};new Array(0);var g=0,w=function(n){g=n},A=!1;function T(n,t){n||hn("Assertion failed: "+t)}function E(n,t){if(0===t||!n)return"";for(var e,r=0,a=0;r|=e=O[n+a>>0],(0!=e||t)&&(a++,!t||a!=t););t||(t=a);var o="";if(r<128){for(var i;t>0;)i=String.fromCharCode.apply(String,O.subarray(n,n+Math.min(t,1024))),o=o?o+i:i,n+=1024,t-=1024;return o}return function(n){return x(O,n)}(n)}var S="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function x(n,t){for(var e=t;n[e];)++e;if(e-t>16&&n.subarray&&S)return S.decode(n.subarray(t,e));for(var r,a,o,i,u,s="";;){if(!(r=n[t++]))return s;if(128&r)if(a=63&n[t++],192!=(224&r))if(o=63&n[t++],224==(240&r)?r=(15&r)<<12|a<<6|o:(i=63&n[t++],240==(248&r)?r=(7&r)<<18|a<<12|o<<6|i:(u=63&n[t++],r=248==(252&r)?(3&r)<<24|a<<18|o<<12|i<<6|u:(1&r)<<30|a<<24|o<<18|i<<12|u<<6|63&n[t++])),r<65536)s+=String.fromCharCode(r);else{var f=r-65536;s+=String.fromCharCode(55296|f>>10,56320|1023&f)}else s+=String.fromCharCode((31&r)<<6|a);else s+=String.fromCharCode(r)}}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var C,M,O,R,I,P,B,k,L,j,F=65536,W=16777216,z=16777216;function D(n,t){return n%t>0&&(n+=t-n%t),n}function U(t){n.buffer=C=t}function H(){n.HEAP8=M=new Int8Array(C),n.HEAP16=new Int16Array(C),n.HEAP32=R=new Int32Array(C),n.HEAPU8=O=new Uint8Array(C),n.HEAPU16=new Uint16Array(C),n.HEAPU32=new Uint32Array(C),n.HEAPF32=new Float32Array(C),n.HEAPF64=new Float64Array(C)}function N(){var t=n.usingWasm?F:W,e=2147483648-t;if(R[j>>2]>e)return!1;var r=q;for(q=Math.max(q,z);q<R[j>>2];)q=q<=536870912?D(2*q,t):Math.min(D((3*q+2147483648)/4,t),e);var a=n.reallocBuffer(q);return a&&a.byteLength==q?(U(a),H(),!0):(q=r,!1)}I=j=0,n.reallocBuffer||(n.reallocBuffer=function(n){var t;try{var e=M;t=new ArrayBuffer(n),new Int8Array(t).set(e)}catch(n){return!1}return!!cn(t)&&t});try{Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get)(new ArrayBuffer(4))}catch(n){}var G=n.TOTAL_STACK||5242880,q=n.TOTAL_MEMORY||16777216;function X(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?n.dynCall_v(r):n.dynCall_vi(r,e.arg):r(void 0===e.arg?null:e.arg)}else e()}}q<G&&_("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+q+"! (TOTAL_STACK="+G+")"),n.buffer?C=n.buffer:("object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(n.wasmMemory=new WebAssembly.Memory({initial:q/F}),C=n.wasmMemory.buffer):C=new ArrayBuffer(q),n.buffer=C),H();var Y=[],K=[],V=[],Z=[],J=[],$=!1;Math.abs,Math.ceil,Math.floor,Math.min;var Q=0,nn=null,tn=null;n.preloadedImages={},n.preloadedAudios={};var en="data:application/octet-stream;base64,";function rn(n){return String.prototype.startsWith?n.startsWith(en):0===n.indexOf(en)}!function(){var t="onnx-wasm.wast",e="onnx-wasm.wasm",r="onnx-wasm.temp.asm.js";rn(t)||(t=y(t)),rn(e)||(e=y(e)),rn(r)||(r=y(r));var a={global:null,env:null,asm2wasm:v,parent:n},o=null;function i(){try{if(n.wasmBinary)return new Uint8Array(n.wasmBinary);if(n.readBinary)return n.readBinary(e);throw"both async and sync fetching of the wasm failed"}catch(n){hn(n)}}function u(t,r,u){if("object"!=typeof WebAssembly)return _("no native wasm support detected"),!1;if(!(n.wasmMemory instanceof WebAssembly.Memory))return _("no native wasm Memory in use"),!1;function s(t,e){(o=t.exports).memory&&function(t){var e=n.buffer;t.byteLength<e.byteLength&&_("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var r=new Int8Array(e);new Int8Array(t).set(r),U(t),H()}(o.memory),n.asm=o,n.usingWasm=!0,function(t){if(Q--,n.monitorRunDependencies&&n.monitorRunDependencies(Q),0==Q&&(null!==nn&&(clearInterval(nn),nn=null),tn)){var e=tn;tn=null,e()}}()}if(r.memory=n.wasmMemory,a.global={NaN:NaN,Infinity:1/0},a["global.Math"]=Math,a.env=r,Q++,n.monitorRunDependencies&&n.monitorRunDependencies(Q),n.instantiateWasm)try{return n.instantiateWasm(a,s)}catch(n){return _("Module.instantiateWasm callback failed with error: "+n),!1}function c(n){s(n.instance,n.module)}function p(t){(n.wasmBinary||!f&&!l||"function"!=typeof fetch?new Promise(function(n,t){n(i())}):fetch(e,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+e+"'";return n.arrayBuffer()}).catch(function(){return i()})).then(function(n){return WebAssembly.instantiate(n,a)}).then(t,function(n){_("failed to asynchronously prepare wasm: "+n),hn(n)})}return n.wasmBinary||"function"!=typeof WebAssembly.instantiateStreaming||rn(e)||"function"!=typeof fetch?p(c):WebAssembly.instantiateStreaming(fetch(e,{credentials:"same-origin"}),a).then(c,function(n){_("wasm streaming compile failed: "+n),_("falling back to ArrayBuffer instantiation"),p(c)}),{}}n.asmPreload=n.asm;var s=n.reallocBuffer;n.reallocBuffer=function(t){return"asmjs"===c?s(t):function(t){t=D(t,n.usingWasm?F:W);var e=n.buffer.byteLength;if(n.usingWasm)try{return-1!==n.wasmMemory.grow((t-e)/65536)?n.buffer=n.wasmMemory.buffer:null}catch(n){return null}}(t)};var c="";n.asm=function(t,e,r){if(!e.table){var a=n.wasmTableSize;void 0===a&&(a=1024);var o=n.wasmMaxTableSize;"object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?e.table=void 0!==o?new WebAssembly.Table({initial:a,maximum:o,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):e.table=new Array(a),n.wasmTable=e.table}var i;return e.__memory_base||(e.__memory_base=n.STATIC_BASE),e.__table_base||(e.__table_base=0),T(i=u(0,e),"no binaryen method succeeded."),i}}(),I=6096,K.push(),n.STATIC_BASE=1024,n.STATIC_BUMP=5072;var an=I;function on(){return!!on.uncaught_exception}I+=16;var un={last:0,caught:[],infos:{},deAdjust:function(n){if(!n||un.infos[n])return n;for(var t in un.infos)for(var e=+t,r=un.infos[e].adjusted,a=r.length,o=0;o<a;o++)if(r[o]===n)return e;return n},addRef:function(n){n&&un.infos[n].refcount++},decRef:function(t){if(t){var e=un.infos[t];T(e.refcount>0),e.refcount--,0!==e.refcount||e.rethrown||(e.destructor&&n.dynCall_vi(e.destructor,t),delete un.infos[t],___cxa_free_exception(t))}},clearRef:function(n){n&&(un.infos[n].refcount=0)}},sn={buffers:[null,[],[]],printChar:function(n,t){var e=sn.buffers[n];T(e),0===t||10===t?((1===n?h:_)(x(e,0)),e.length=0):e.push(t)},varargs:0,get:function(n){return sn.varargs+=4,R[sn.varargs-4>>2]},getStr:function(){return E(sn.get())},get64:function(){var n=sn.get(),t=sn.get();return T(n>=0?0===t:-1===t),n},getZero:function(){T(0===sn.get())}};function fn(){var t=n._fflush;t&&t(0);var e=sn.buffers;e[1].length&&sn.printChar(1,10),e[2].length&&sn.printChar(2,10)}Z.push(fn),j=I,P=B=b(I=I+4+15&-16),L=b(k=P+G),R[j>>2]=L,n.wasmTableSize=41,n.wasmMaxTableSize=41,n.asmGlobalArg={},n.asmLibraryArg={abort:hn,assert:T,enlargeMemory:N,getTotalMemory:function(){return q},setTempRet0:w,getTempRet0:function(){return g},abortOnCannotGrowMemory:function(){hn("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+q+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},__ZSt18uncaught_exceptionv:on,___assert_fail:function(n,t,e,r){hn("Assertion failed: "+E(n)+", at: "+[t?E(t):"unknown filename",e,r?E(r):"unknown function"])},___cxa_allocate_exception:function(n){return pn(n)},___cxa_find_matching_catch:function t(){var e=un.last;if(!e)return 0|(w(0),0);var r=un.infos[e],a=r.type;if(!a)return 0|(w(0),e);var o=Array.prototype.slice.call(arguments);n.___cxa_is_pointer_type(a),t.buffer||(t.buffer=pn(4)),R[t.buffer>>2]=e,e=t.buffer;for(var i=0;i<o.length;i++)if(o[i]&&n.___cxa_can_catch(o[i],a,e))return e=R[e>>2],r.adjusted.push(e),0|(w(o[i]),e);return e=R[e>>2],0|(w(a),e)},___cxa_throw:function(n,t,e){throw un.infos[n]={ptr:n,adjusted:[n],type:t,destructor:e,refcount:0,caught:!1,rethrown:!1},un.last=n,"uncaught_exception"in on?on.uncaught_exception++:on.uncaught_exception=1,n+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},___gxx_personality_v0:function(){},___lock:function(){},___resumeException:function(n){throw un.last||(un.last=n),n+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch."},___setErrNo:function(t){return n.___errno_location&&(R[n.___errno_location()>>2]=t),t},___syscall140:function(n,t){sn.varargs=t;try{var e=sn.getStreamFromFD(),r=(sn.get(),sn.get()),a=sn.get(),o=sn.get(),i=r;return FS.llseek(e,i,o),R[a>>2]=e.position,e.getdents&&0===i&&0===o&&(e.getdents=null),0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||hn(n),-n.errno}},___syscall146:function(n,t){sn.varargs=t;try{for(var e=sn.get(),r=sn.get(),a=sn.get(),o=0,i=0;i<a;i++){for(var u=R[r+8*i>>2],s=R[r+(8*i+4)>>2],f=0;f<s;f++)sn.printChar(e,O[u+f]);o+=s}return o}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||hn(n),-n.errno}},___syscall54:function(n,t){sn.varargs=t;try{return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||hn(n),-n.errno}},___syscall6:function(n,t){sn.varargs=t;try{var e=sn.getStreamFromFD();return FS.close(e),0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||hn(n),-n.errno}},___unlock:function(){},_abort:function(){n.abort()},_emscripten_memcpy_big:function(n,t,e){return O.set(O.subarray(t,t+e),n),n},_llvm_trap:function(){hn("trap!")},flush_NO_FILESYSTEM:fn,DYNAMICTOP_PTR:j,tempDoublePtr:an,STACKTOP:B,STACK_MAX:k};var ln=n.asm(n.asmGlobalArg,n.asmLibraryArg,C);n.asm=ln,n.___errno_location=function(){return n.asm.___errno_location.apply(null,arguments)},n._add_f32=function(){return n.asm._add_f32.apply(null,arguments)},n._and_u8=function(){return n.asm._and_u8.apply(null,arguments)},n._average_pool_f32=function(){return n.asm._average_pool_f32.apply(null,arguments)},n._batch_normalization_f32=function(){return n.asm._batch_normalization_f32.apply(null,arguments)},n._conv_f32=function(){return n.asm._conv_f32.apply(null,arguments)},n._div_f32=function(){return n.asm._div_f32.apply(null,arguments)};var cn=n._emscripten_replace_memory=function(){return n.asm._emscripten_replace_memory.apply(null,arguments)},pn=(n._fflush=function(){return n.asm._fflush.apply(null,arguments)},n._free=function(){return n.asm._free.apply(null,arguments)},n._gemm_f32=function(){return n.asm._gemm_f32.apply(null,arguments)},n._malloc=function(){return n.asm._malloc.apply(null,arguments)});function mn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function yn(t){function e(){n.calledRun||(n.calledRun=!0,A||($||($=!0,X(K)),X(V),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)t=n.postRun.shift(),J.unshift(t);var t;X(J)}()))}t=t||n.arguments,Q>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)t=n.preRun.shift(),Y.unshift(t);var t;X(Y)}(),Q>0||n.calledRun||(n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),e()},1)):e()))}function hn(t){throw n.onAbort&&n.onAbort(t),void 0!==t?(h(t),_(t),t=JSON.stringify(t)):t="",A=!0,"abort("+t+"). Build with -s ASSERTIONS=1 for more info."}if(n._matmul_f32=function(){return n.asm._matmul_f32.apply(null,arguments)},n._max_pool_f32=function(){return n.asm._max_pool_f32.apply(null,arguments)},n._memcpy=function(){return n.asm._memcpy.apply(null,arguments)},n._memset=function(){return n.asm._memset.apply(null,arguments)},n._mul_f32=function(){return n.asm._mul_f32.apply(null,arguments)},n._or_u8=function(){return n.asm._or_u8.apply(null,arguments)},n._prelu_f32=function(){return n.asm._prelu_f32.apply(null,arguments)},n._sbrk=function(){return n.asm._sbrk.apply(null,arguments)},n._softmax_f32=function(){return n.asm._softmax_f32.apply(null,arguments)},n._sub_f32=function(){return n.asm._sub_f32.apply(null,arguments)},n._sum_f32=function(){return n.asm._sum_f32.apply(null,arguments)},n._xor_u8=function(){return n.asm._xor_u8.apply(null,arguments)},n.establishStackSpace=function(){return n.asm.establishStackSpace.apply(null,arguments)},n.setThrew=function(){return n.asm.setThrew.apply(null,arguments)},n.stackAlloc=function(){return n.asm.stackAlloc.apply(null,arguments)},n.stackRestore=function(){return n.asm.stackRestore.apply(null,arguments)},n.stackSave=function(){return n.asm.stackSave.apply(null,arguments)},n.dynCall_ii=function(){return n.asm.dynCall_ii.apply(null,arguments)},n.dynCall_iiii=function(){return n.asm.dynCall_iiii.apply(null,arguments)},n.dynCall_v=function(){return n.asm.dynCall_v.apply(null,arguments)},n.dynCall_vi=function(){return n.asm.dynCall_vi.apply(null,arguments)},n.dynCall_viiii=function(){return n.asm.dynCall_viiii.apply(null,arguments)},n.dynCall_viiiii=function(){return n.asm.dynCall_viiiii.apply(null,arguments)},n.dynCall_viiiiii=function(){return n.asm.dynCall_viiiiii.apply(null,arguments)},n.asm=ln,n.then=function(t){if(n.calledRun)t(n);else{var e=n.onRuntimeInitialized;n.onRuntimeInitialized=function(){e&&e(),t(n)}}return n},mn.prototype=new Error,mn.prototype.constructor=mn,tn=function t(){n.calledRun||yn(),n.calledRun||(tn=t)},n.run=yn,n.abort=hn,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return yn(),n});n.exports=o}).call(this,e(0),"/")},function(n,t){},function(n,t,e){(function(n){function e(n,t){for(var e=0,r=n.length-1;r>=0;r--){var a=n[r];"."===a?n.splice(r,1):".."===a?(n.splice(r,1),e++):e&&(n.splice(r,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,a=function(n){return r.exec(n).slice(1)};function o(n,t){if(n.filter)return n.filter(t);for(var e=[],r=0;r<n.length;r++)t(n[r],r,n)&&e.push(n[r]);return e}t.resolve=function(){for(var t="",r=!1,a=arguments.length-1;a>=-1&&!r;a--){var i=a>=0?arguments[a]:n.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return(r?"/":"")+(t=e(o(t.split("/"),function(n){return!!n}),!r).join("/"))||"."},t.normalize=function(n){var r=t.isAbsolute(n),a="/"===i(n,-1);return(n=e(o(n.split("/"),function(n){return!!n}),!r).join("/"))||r||(n="."),n&&a&&(n+="/"),(r?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(o(n,function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))},t.relative=function(n,e){function r(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=t.resolve(n).substr(1),e=t.resolve(e).substr(1);for(var a=r(n.split("/")),o=r(e.split("/")),i=Math.min(a.length,o.length),u=i,s=0;s<i;s++)if(a[s]!==o[s]){u=s;break}var f=[];for(s=u;s<a.length;s++)f.push("..");return(f=f.concat(o.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){var t=a(n),e=t[0],r=t[1];return e||r?(r&&(r=r.substr(0,r.length-1)),e+r):"."},t.basename=function(n,t){var e=a(n)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(n){return a(n)[3]};var i="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)}}).call(this,e(0))}]);
//# sourceMappingURL=onnx-worker.js.map