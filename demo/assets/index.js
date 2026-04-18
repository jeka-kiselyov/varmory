(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const pt={},ca=[],En=()=>{},Hd=()=>!1,gr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),vr=e=>e.startsWith("onUpdate:"),It=Object.assign,ml=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xh=Object.prototype.hasOwnProperty,ct=(e,t)=>xh.call(e,t),Ne=Array.isArray,ua=e=>xa(e)==="[object Map]",Ud=e=>xa(e)==="[object Set]",Sc=e=>xa(e)==="[object Date]",Ch=e=>xa(e)==="[object RegExp]",Ye=e=>typeof e=="function",yt=e=>typeof e=="string",on=e=>typeof e=="symbol",dt=e=>e!==null&&typeof e=="object",Wd=e=>(dt(e)||Ye(e))&&Ye(e.then)&&Ye(e.catch),Jd=Object.prototype.toString,xa=e=>Jd.call(e),Qh=e=>xa(e).slice(8,-1),Gd=e=>xa(e)==="[object Object]",br=e=>yt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ha=pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ah=/-\w/g,Ht=_r(e=>e.replace(Ah,t=>t.slice(1).toUpperCase())),Ih=/\B([A-Z])/g,Vo=_r(e=>e.replace(Ih,"-$1").toLowerCase()),yr=_r(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gr=_r(e=>e?`on${yr(e)}`:""),qn=(e,t)=>!Object.is(e,t),da=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Yd=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},hl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},qh=e=>{const t=yt(e)?Number(e):NaN;return isNaN(t)?e:t};let kc;const wr=()=>kc||(kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Dn(e){if(Ne(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],o=yt(a)?Dh(a):Dn(a);if(o)for(const i in o)t[i]=o[i]}return t}else if(yt(e)||dt(e))return e}const Th=/;(?![^(]*\))/g,Lh=/:([^]+)/,Eh=/\/\*[^]*?\*\//g;function Dh(e){const t={};return e.replace(Eh,"").split(Th).forEach(n=>{if(n){const a=n.split(Lh);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function ft(e){let t="";if(yt(e))t=e;else if(Ne(e))for(let n=0;n<e.length;n++){const a=ft(e[n]);a&&(t+=a+" ")}else if(dt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ph=pl(Bh);function Kd(e){return!!e||e===""}function Mh(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=gl(e[a],t[a]);return n}function gl(e,t){if(e===t)return!0;let n=Sc(e),a=Sc(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=on(e),a=on(t),n||a)return e===t;if(n=Ne(e),a=Ne(t),n||a)return n&&a?Mh(e,t):!1;if(n=dt(e),a=dt(t),n||a){if(!n||!a)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const r in e){const s=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(s&&!l||!s&&l||!gl(e[r],t[r]))return!1}}return String(e)===String(t)}const Zd=e=>!!(e&&e.__v_isRef===!0),xe=e=>yt(e)?e:e==null?"":Ne(e)||dt(e)&&(e.toString===Jd||!Ye(e.toString))?Zd(e)?xe(e.value):JSON.stringify(e,Xd,2):String(e),Xd=(e,t)=>Zd(t)?Xd(e,t.value):ua(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,o],i)=>(n[Yr(a,i)+" =>"]=o,n),{})}:Ud(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Yr(n))}:on(t)?Yr(t):dt(t)&&!Ne(t)&&!Gd(t)?String(t):t,Yr=(e,t="")=>{var n;return on(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class ef{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=$t,!t&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=$t;try{return $t=this,t()}finally{$t=n}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function tf(e){return new ef(e)}function nf(){return $t}function jh(e,t=!1){$t&&$t.cleanups.push(e)}let vt;const Kr=new WeakSet;class of{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kr.has(this)&&(Kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xc(this),sf(this);const t=vt,n=vn;vt=this,vn=!0;try{return this.fn()}finally{lf(this),vt=t,vn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_l(t);this.deps=this.depsTail=void 0,xc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rs(this)&&this.run()}get dirty(){return Rs(this)}}let af=0,Ua,Wa;function rf(e,t=!1){if(e.flags|=8,t){e.next=Wa,Wa=e;return}e.next=Ua,Ua=e}function vl(){af++}function bl(){if(--af>0)return;if(Wa){let t=Wa;for(Wa=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ua;){let t=Ua;for(Ua=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function sf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function lf(e){let t,n=e.depsTail,a=n;for(;a;){const o=a.prevDep;a.version===-1?(a===n&&(n=o),_l(a),$h(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=o}e.deps=t,e.depsTail=n}function Rs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(cf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function cf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Xa)||(e.globalVersion=Xa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Rs(e))))return;e.flags|=2;const t=e.dep,n=vt,a=vn;vt=e,vn=!0;try{sf(e);const o=e.fn(e._value);(t.version===0||qn(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{vt=n,vn=a,lf(e),e.flags&=-3}}function _l(e,t=!1){const{dep:n,prevSub:a,nextSub:o}=e;if(a&&(a.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)_l(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function $h(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let vn=!0;const uf=[];function Gn(){uf.push(vn),vn=!1}function Yn(){const e=uf.pop();vn=e===void 0?!0:e}function xc(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=vt;vt=void 0;try{t()}finally{vt=n}}}let Xa=0;class Rh{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!vt||!vn||vt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==vt)n=this.activeLink=new Rh(vt,this),vt.deps?(n.prevDep=vt.depsTail,vt.depsTail.nextDep=n,vt.depsTail=n):vt.deps=vt.depsTail=n,df(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=vt.depsTail,n.nextDep=void 0,vt.depsTail.nextDep=n,vt.depsTail=n,vt.deps===n&&(vt.deps=a)}return n}trigger(t){this.version++,Xa++,this.notify(t)}notify(t){vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bl()}}}function df(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)df(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Oi=new WeakMap,Mo=Symbol(""),Os=Symbol(""),ei=Symbol("");function Rt(e,t,n){if(vn&&vt){let a=Oi.get(e);a||Oi.set(e,a=new Map);let o=a.get(n);o||(a.set(n,o=new yl),o.map=a,o.key=n),o.track()}}function Un(e,t,n,a,o,i){const r=Oi.get(e);if(!r){Xa++;return}const s=l=>{l&&l.trigger()};if(vl(),t==="clear")r.forEach(s);else{const l=Ne(e),u=l&&br(n);if(l&&n==="length"){const c=Number(a);r.forEach((d,p)=>{(p==="length"||p===ei||!on(p)&&p>=c)&&s(d)})}else switch((n!==void 0||r.has(void 0))&&s(r.get(n)),u&&s(r.get(ei)),t){case"add":l?u&&s(r.get("length")):(s(r.get(Mo)),ua(e)&&s(r.get(Os)));break;case"delete":l||(s(r.get(Mo)),ua(e)&&s(r.get(Os)));break;case"set":ua(e)&&s(r.get(Mo));break}}bl()}function Oh(e,t){const n=Oi.get(e);return n&&n.get(t)}function Wo(e){const t=Ze(e);return t===e?t:(Rt(t,"iterate",ei),nn(e)?t:t.map(bn))}function Sr(e){return Rt(e=Ze(e),"iterate",ei),e}function Qn(e,t){return Kn(e)?_a(Jn(e)?bn(t):t):bn(t)}const Fh={__proto__:null,[Symbol.iterator](){return Zr(this,Symbol.iterator,e=>Qn(this,e))},concat(...e){return Wo(this).concat(...e.map(t=>Ne(t)?Wo(t):t))},entries(){return Zr(this,"entries",e=>(e[1]=Qn(this,e[1]),e))},every(e,t){return On(this,"every",e,t,void 0,arguments)},filter(e,t){return On(this,"filter",e,t,n=>n.map(a=>Qn(this,a)),arguments)},find(e,t){return On(this,"find",e,t,n=>Qn(this,n),arguments)},findIndex(e,t){return On(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return On(this,"findLast",e,t,n=>Qn(this,n),arguments)},findLastIndex(e,t){return On(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return On(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xr(this,"includes",e)},indexOf(...e){return Xr(this,"indexOf",e)},join(e){return Wo(this).join(e)},lastIndexOf(...e){return Xr(this,"lastIndexOf",e)},map(e,t){return On(this,"map",e,t,void 0,arguments)},pop(){return Ta(this,"pop")},push(...e){return Ta(this,"push",e)},reduce(e,...t){return Cc(this,"reduce",e,t)},reduceRight(e,...t){return Cc(this,"reduceRight",e,t)},shift(){return Ta(this,"shift")},some(e,t){return On(this,"some",e,t,void 0,arguments)},splice(...e){return Ta(this,"splice",e)},toReversed(){return Wo(this).toReversed()},toSorted(e){return Wo(this).toSorted(e)},toSpliced(...e){return Wo(this).toSpliced(...e)},unshift(...e){return Ta(this,"unshift",e)},values(){return Zr(this,"values",e=>Qn(this,e))}};function Zr(e,t,n){const a=Sr(e),o=a[t]();return a!==e&&!nn(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=n(i.value)),i}),o}const Vh=Array.prototype;function On(e,t,n,a,o,i){const r=Sr(e),s=r!==e&&!nn(e),l=r[t];if(l!==Vh[t]){const d=l.apply(e,i);return s?bn(d):d}let u=n;r!==e&&(s?u=function(d,p){return n.call(this,Qn(e,d),p,e)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,e)}));const c=l.call(r,u,a);return s&&o?o(c):c}function Cc(e,t,n,a){const o=Sr(e),i=o!==e&&!nn(e);let r=n,s=!1;o!==e&&(i?(s=a.length===0,r=function(u,c,d){return s&&(s=!1,u=Qn(e,u)),n.call(this,u,Qn(e,c),d,e)}):n.length>3&&(r=function(u,c,d){return n.call(this,u,c,d,e)}));const l=o[t](r,...a);return s?Qn(e,l):l}function Xr(e,t,n){const a=Ze(e);Rt(a,"iterate",ei);const o=a[t](...n);return(o===-1||o===!1)&&kr(n[0])?(n[0]=Ze(n[0]),a[t](...n)):o}function Ta(e,t,n=[]){Gn(),vl();const a=Ze(e)[t].apply(e,n);return bl(),Yn(),a}const Nh=pl("__proto__,__v_isRef,__isVue"),ff=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(on));function zh(e){on(e)||(e=String(e));const t=Ze(this);return Rt(t,"has",e),t.hasOwnProperty(e)}class pf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return a===(o?i?eg:vf:i?gf:hf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const r=Ne(t);if(!o){let l;if(r&&(l=Fh[n]))return l;if(n==="hasOwnProperty")return zh}const s=Reflect.get(t,n,St(t)?t:a);if((on(n)?ff.has(n):Nh(n))||(o||Rt(t,"get",n),i))return s;if(St(s)){const l=r&&br(n)?s:s.value;return o&&dt(l)?Vs(l):l}return dt(s)?o?Vs(s):No(s):s}}class mf extends pf{constructor(t=!1){super(!1,t)}set(t,n,a,o){let i=t[n];const r=Ne(t)&&br(n);if(!this._isShallow){const u=Kn(i);if(!nn(a)&&!Kn(a)&&(i=Ze(i),a=Ze(a)),!r&&St(i)&&!St(a))return u||(i.value=a),!0}const s=r?Number(n)<t.length:ct(t,n),l=Reflect.set(t,n,a,St(t)?t:o);return t===Ze(o)&&(s?qn(a,i)&&Un(t,"set",n,a):Un(t,"add",n,a)),l}deleteProperty(t,n){const a=ct(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&a&&Un(t,"delete",n,void 0),o}has(t,n){const a=Reflect.has(t,n);return(!on(n)||!ff.has(n))&&Rt(t,"has",n),a}ownKeys(t){return Rt(t,"iterate",Ne(t)?"length":Mo),Reflect.ownKeys(t)}}class Hh extends pf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Uh=new mf,Wh=new Hh,Jh=new mf(!0);const Fs=e=>e,hi=e=>Reflect.getPrototypeOf(e);function Gh(e,t,n){return function(...a){const o=this.__v_raw,i=Ze(o),r=ua(i),s=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,u=o[e](...a),c=n?Fs:t?_a:bn;return!t&&Rt(i,"iterate",l?Os:Mo),It(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function gi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yh(e,t){const n={get(o){const i=this.__v_raw,r=Ze(i),s=Ze(o);e||(qn(o,s)&&Rt(r,"get",o),Rt(r,"get",s));const{has:l}=hi(r),u=t?Fs:e?_a:bn;if(l.call(r,o))return u(i.get(o));if(l.call(r,s))return u(i.get(s));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!e&&Rt(Ze(o),"iterate",Mo),o.size},has(o){const i=this.__v_raw,r=Ze(i),s=Ze(o);return e||(qn(o,s)&&Rt(r,"has",o),Rt(r,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const r=this,s=r.__v_raw,l=Ze(s),u=t?Fs:e?_a:bn;return!e&&Rt(l,"iterate",Mo),s.forEach((c,d)=>o.call(i,u(c),u(d),r))}};return It(n,e?{add:gi("add"),set:gi("set"),delete:gi("delete"),clear:gi("clear")}:{add(o){const i=Ze(this),r=hi(i),s=Ze(o),l=!t&&!nn(o)&&!Kn(o)?s:o;return r.has.call(i,l)||qn(o,l)&&r.has.call(i,o)||qn(s,l)&&r.has.call(i,s)||(i.add(l),Un(i,"add",l,l)),this},set(o,i){!t&&!nn(i)&&!Kn(i)&&(i=Ze(i));const r=Ze(this),{has:s,get:l}=hi(r);let u=s.call(r,o);u||(o=Ze(o),u=s.call(r,o));const c=l.call(r,o);return r.set(o,i),u?qn(i,c)&&Un(r,"set",o,i):Un(r,"add",o,i),this},delete(o){const i=Ze(this),{has:r,get:s}=hi(i);let l=r.call(i,o);l||(o=Ze(o),l=r.call(i,o)),s&&s.call(i,o);const u=i.delete(o);return l&&Un(i,"delete",o,void 0),u},clear(){const o=Ze(this),i=o.size!==0,r=o.clear();return i&&Un(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Gh(o,e,t)}),n}function wl(e,t){const n=Yh(e,t);return(a,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(ct(n,o)&&o in a?n:a,o,i)}const Kh={get:wl(!1,!1)},Zh={get:wl(!1,!0)},Xh={get:wl(!0,!1)};const hf=new WeakMap,gf=new WeakMap,vf=new WeakMap,eg=new WeakMap;function tg(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ng(e){return e.__v_skip||!Object.isExtensible(e)?0:tg(Qh(e))}function No(e){return Kn(e)?e:Sl(e,!1,Uh,Kh,hf)}function og(e){return Sl(e,!1,Jh,Zh,gf)}function Vs(e){return Sl(e,!0,Wh,Xh,vf)}function Sl(e,t,n,a,o){if(!dt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=ng(e);if(i===0)return e;const r=o.get(e);if(r)return r;const s=new Proxy(e,i===2?a:n);return o.set(e,s),s}function Jn(e){return Kn(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function Kn(e){return!!(e&&e.__v_isReadonly)}function nn(e){return!!(e&&e.__v_isShallow)}function kr(e){return e?!!e.__v_raw:!1}function Ze(e){const t=e&&e.__v_raw;return t?Ze(t):e}function Ca(e){return!ct(e,"__v_skip")&&Object.isExtensible(e)&&Yd(e,"__v_skip",!0),e}const bn=e=>dt(e)?No(e):e,_a=e=>dt(e)?Vs(e):e;function St(e){return e?e.__v_isRef===!0:!1}function ge(e){return ag(e,!1)}function ag(e,t){return St(e)?e:new ig(e,t)}class ig{constructor(t,n){this.dep=new yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ze(t),this._value=n?t:bn(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||nn(t)||Kn(t);t=a?t:Ze(t),qn(t,n)&&(this._rawValue=t,this._value=a?t:bn(t),this.dep.trigger())}}function kl(e){return St(e)?e.value:e}const rg={get:(e,t,n)=>t==="__v_raw"?e:kl(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const o=e[t];return St(o)&&!St(n)?(o.value=n,!0):Reflect.set(e,t,n,a)}};function bf(e){return Jn(e)?e:new Proxy(e,rg)}function sg(e){const t=Ne(e)?new Array(e.length):{};for(const n in e)t[n]=cg(e,n);return t}class lg{constructor(t,n,a){this._object=t,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0,this._key=on(n)?n:String(n),this._raw=Ze(t);let o=!0,i=t;if(!Ne(t)||on(this._key)||!br(this._key))do o=!kr(i)||nn(i);while(o&&(i=i.__v_raw));this._shallow=o}get value(){let t=this._object[this._key];return this._shallow&&(t=kl(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&St(this._raw[this._key])){const n=this._object[this._key];if(St(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Oh(this._raw,this._key)}}function cg(e,t,n){return new lg(e,t,n)}class ug{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return rf(this,!0),!0}get value(){const t=this.dep.track();return cf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dg(e,t,n=!1){let a,o;return Ye(e)?a=e:(a=e.get,o=e.set),new ug(a,o,n)}const vi={},Fi=new WeakMap;let Lo;function fg(e,t=!1,n=Lo){if(n){let a=Fi.get(n);a||Fi.set(n,a=[]),a.push(e)}}function pg(e,t,n=pt){const{immediate:a,deep:o,once:i,scheduler:r,augmentJob:s,call:l}=n,u=m=>o?m:nn(m)||o===!1||o===0?Wn(m,1):Wn(m);let c,d,p,g,_=!1,I=!1;if(St(e)?(d=()=>e.value,_=nn(e)):Jn(e)?(d=()=>u(e),_=!0):Ne(e)?(I=!0,_=e.some(m=>Jn(m)||nn(m)),d=()=>e.map(m=>{if(St(m))return m.value;if(Jn(m))return u(m);if(Ye(m))return l?l(m,2):m()})):Ye(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){Gn();try{p()}finally{Yn()}}const m=Lo;Lo=c;try{return l?l(e,3,[g]):e(g)}finally{Lo=m}}:d=En,t&&o){const m=d,x=o===!0?1/0:o;d=()=>Wn(m(),x)}const C=nf(),b=()=>{c.stop(),C&&C.active&&ml(C.effects,c)};if(i&&t){const m=t;t=(...x)=>{m(...x),b()}}let w=I?new Array(e.length).fill(vi):vi;const y=m=>{if(!(!(c.flags&1)||!c.dirty&&!m))if(t){const x=c.run();if(o||_||(I?x.some((B,T)=>qn(B,w[T])):qn(x,w))){p&&p();const B=Lo;Lo=c;try{const T=[x,w===vi?void 0:I&&w[0]===vi?[]:w,g];w=x,l?l(t,3,T):t(...T)}finally{Lo=B}}}else c.run()};return s&&s(y),c=new of(d),c.scheduler=r?()=>r(y,!1):y,g=m=>fg(m,!1,c),p=c.onStop=()=>{const m=Fi.get(c);if(m){if(l)l(m,4);else for(const x of m)x();Fi.delete(c)}},t?a?y(!0):w=c.run():r?r(y.bind(null,!0),!0):c.run(),b.pause=c.pause.bind(c),b.resume=c.resume.bind(c),b.stop=b,b}function Wn(e,t=1/0,n){if(t<=0||!dt(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,St(e))Wn(e.value,t,n);else if(Ne(e))for(let a=0;a<e.length;a++)Wn(e[a],t,n);else if(Ud(e)||ua(e))e.forEach(a=>{Wn(a,t,n)});else if(Gd(e)){for(const a in e)Wn(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Wn(e[a],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function di(e,t,n,a){try{return a?e(...a):e()}catch(o){xr(o,t,n)}}function _n(e,t,n,a){if(Ye(e)){const o=di(e,t,n,a);return o&&Wd(o)&&o.catch(i=>{xr(i,t,n)}),o}if(Ne(e)){const o=[];for(let i=0;i<e.length;i++)o.push(_n(e[i],t,n,a));return o}}function xr(e,t,n,a=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||pt;if(t){let s=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}s=s.parent}if(i){Gn(),di(i,null,10,[e,l,u]),Yn();return}}mg(e,n,o,a,r)}function mg(e,t,n,a=!0,o=!1){if(o)throw e;console.error(e)}const Vt=[];let xn=-1;const fa=[];let fo=null,aa=0;const _f=Promise.resolve();let Vi=null;function bt(e){const t=Vi||_f;return e?t.then(this?e.bind(this):e):t}function hg(e){let t=xn+1,n=Vt.length;for(;t<n;){const a=t+n>>>1,o=Vt[a],i=ti(o);i<e||i===e&&o.flags&2?t=a+1:n=a}return t}function xl(e){if(!(e.flags&1)){const t=ti(e),n=Vt[Vt.length-1];!n||!(e.flags&2)&&t>=ti(n)?Vt.push(e):Vt.splice(hg(t),0,e),e.flags|=1,yf()}}function yf(){Vi||(Vi=_f.then(Sf))}function gg(e){Ne(e)?fa.push(...e):fo&&e.id===-1?fo.splice(aa+1,0,e):e.flags&1||(fa.push(e),e.flags|=1),yf()}function Qc(e,t,n=xn+1){for(;n<Vt.length;n++){const a=Vt[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Vt.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function wf(e){if(fa.length){const t=[...new Set(fa)].sort((n,a)=>ti(n)-ti(a));if(fa.length=0,fo){fo.push(...t);return}for(fo=t,aa=0;aa<fo.length;aa++){const n=fo[aa];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fo=null,aa=0}}const ti=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Sf(e){try{for(xn=0;xn<Vt.length;xn++){const t=Vt[xn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),di(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;xn<Vt.length;xn++){const t=Vt[xn];t&&(t.flags&=-2)}xn=-1,Vt.length=0,wf(),Vi=null,(Vt.length||fa.length)&&Sf()}}let Pt=null,kf=null;function Ni(e){const t=Pt;return Pt=e,kf=e&&e.type.__scopeId||null,t}function S(e,t=Pt,n){if(!t||e._n)return e;const a=(...o)=>{a._d&&Ji(-1);const i=Ni(t);let r;try{r=e(...o)}finally{Ni(i),a._d&&Ji(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function we(e,t){if(Pt===null)return e;const n=Er(Pt),a=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,r,s,l=pt]=t[o];i&&(Ye(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(r),a.push({dir:i,instance:n,value:r,oldValue:void 0,arg:s,modifiers:l}))}return e}function Qo(e,t,n,a){const o=e.dirs,i=t&&t.dirs;for(let r=0;r<o.length;r++){const s=o[r];i&&(s.oldValue=i[r].value);let l=s.dir[a];l&&(Gn(),_n(l,n,8,[e.el,s,e,t]),Yn())}}function xf(e,t){if(Ot){let n=Ot.provides;const a=Ot.parent&&Ot.parent.provides;a===n&&(n=Ot.provides=Object.create(a)),n[e]=t}}function vo(e,t,n=!1){const a=Je();if(a||jo){let o=jo?jo._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Ye(t)?t.call(a&&a.proxy):t}}function vg(){return!!(Je()||jo)}const bg=Symbol.for("v-scx"),_g=()=>vo(bg);function Oe(e,t,n){return Cf(e,t,n)}function Cf(e,t,n=pt){const{immediate:a,deep:o,flush:i,once:r}=n,s=It({},n),l=t&&a||!t&&i!=="post";let u;if(ai){if(i==="sync"){const g=_g();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=En,g.resume=En,g.pause=En,g}}const c=Ot;s.call=(g,_,I)=>_n(g,c,_,I);let d=!1;i==="post"?s.scheduler=g=>{qt(g,c&&c.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(g,_)=>{_?g():xl(g)}),s.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const p=pg(e,t,s);return ai&&(u?u.push(p):l&&p()),p}function yg(e,t,n){const a=this.proxy,o=yt(e)?e.includes(".")?Qf(a,e):()=>a[e]:e.bind(a,a);let i;Ye(t)?i=t:(i=t.handler,n=t);const r=fi(this),s=Cf(o,i.bind(a),n);return r(),s}function Qf(e,t){const n=t.split(".");return()=>{let a=e;for(let o=0;o<n.length&&a;o++)a=a[n[o]];return a}}const Ao=new WeakMap,Af=Symbol("_vte"),If=e=>e.__isTeleport,Eo=e=>e&&(e.disabled||e.disabled===""),wg=e=>e&&(e.defer||e.defer===""),Ac=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ic=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ns=(e,t)=>{const n=e&&e.to;return yt(n)?t?t(n):null:n},Sg={name:"Teleport",__isTeleport:!0,process(e,t,n,a,o,i,r,s,l,u){const{mc:c,pc:d,pbc:p,o:{insert:g,querySelector:_,createText:I,createComment:C}}=u,b=Eo(t.props);let{dynamicChildren:w}=t;const y=(B,T,E)=>{B.shapeFlag&16&&c(B.children,T,E,o,i,r,s,l)},m=(B=t)=>{const T=Eo(B.props),E=B.target=Ns(B.props,_),O=zs(E,B,I,g);E&&(r!=="svg"&&Ac(E)?r="svg":r!=="mathml"&&Ic(E)&&(r="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(E),T||(y(B,E,O),ja(B,!1)))},x=B=>{const T=()=>{Ao.get(B)===T&&(Ao.delete(B),Eo(B.props)&&(y(B,n,B.anchor),ja(B,!0)),m(B))};Ao.set(B,T),qt(T,i)};if(e==null){const B=t.el=I(""),T=t.anchor=I("");if(g(B,n,a),g(T,n,a),wg(t.props)||i&&i.pendingBranch){x(t);return}b&&(y(t,n,T),ja(t,!0)),m()}else{t.el=e.el;const B=t.anchor=e.anchor,T=Ao.get(e);if(T){T.flags|=8,Ao.delete(e),x(t);return}t.targetStart=e.targetStart;const E=t.target=e.target,O=t.targetAnchor=e.targetAnchor,F=Eo(e.props),V=F?n:E,j=F?B:O;if(r==="svg"||Ac(E)?r="svg":(r==="mathml"||Ic(E))&&(r="mathml"),w?(p(e.dynamicChildren,w,V,o,i,r,s),Tl(e,t,!0)):l||d(e,t,V,j,o,i,r,s,!1),b)F?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):bi(t,n,B,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const U=t.target=Ns(t.props,_);U&&bi(t,U,null,u,0)}else F&&bi(t,E,O,u,1);ja(t,b)}},remove(e,t,n,{um:a,o:{remove:o}},i){const{shapeFlag:r,children:s,anchor:l,targetStart:u,targetAnchor:c,target:d,props:p}=e;let g=i||!Eo(p);const _=Ao.get(e);if(_&&(_.flags|=8,Ao.delete(e),g=!1),d&&(o(u),o(c)),i&&o(l),r&16)for(let I=0;I<s.length;I++){const C=s[I];a(C,t,n,g,!!C.dynamicChildren)}},move:bi,hydrate:kg};function bi(e,t,n,{o:{insert:a},m:o},i=2){i===0&&a(e.targetAnchor,t,n);const{el:r,anchor:s,shapeFlag:l,children:u,props:c}=e,d=i===2;if(d&&a(r,t,n),(!d||Eo(c))&&l&16)for(let p=0;p<u.length;p++)o(u[p],t,n,2);d&&a(s,t,n)}function kg(e,t,n,a,o,i,{o:{nextSibling:r,parentNode:s,querySelector:l,insert:u,createText:c}},d){function p(C,b){let w=b;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")t.targetStart=w;else if(w.data==="teleport anchor"){t.targetAnchor=w,C._lpa=t.targetAnchor&&r(t.targetAnchor);break}}w=r(w)}}function g(C,b){b.anchor=d(r(C),b,s(C),n,a,o,i)}const _=t.target=Ns(t.props,l),I=Eo(t.props);if(_){const C=_._lpa||_.firstChild;t.shapeFlag&16&&(I?(g(e,t),p(_,C),t.targetAnchor||zs(_,t,c,u,s(e)===_?e:null)):(t.anchor=r(e),p(_,C),t.targetAnchor||zs(_,t,c,u),d(C&&r(C),t,_,n,a,o,i))),ja(t,I)}else I&&t.shapeFlag&16&&(g(e,t),t.targetStart=e,t.targetAnchor=r(e));return t.anchor&&r(t.anchor)}const xg=Sg;function ja(e,t){const n=e.ctx;if(n&&n.ut){let a,o;for(t?(a=e.el,o=e.anchor):(a=e.targetStart,o=e.targetAnchor);a&&a!==o;)a.nodeType===1&&a.setAttribute("data-v-owner",n.uid),a=a.nextSibling;n.ut()}}function zs(e,t,n,a,o=null){const i=t.targetStart=n(""),r=t.targetAnchor=n("");return i[Af]=r,e&&(a(i,e,o),a(r,e,o)),r}const Cn=Symbol("_leaveCb"),La=Symbol("_enterCb");function qf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zt(()=>{e.isMounted=!0}),wt(()=>{e.isUnmounting=!0}),e}const rn=[Function,Array],Tf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},Lf=e=>{const t=e.subTree;return t.component?Lf(t.component):t},Cg={name:"BaseTransition",props:Tf,setup(e,{slots:t}){const n=Je(),a=qf();return()=>{const o=t.default&&Cl(t.default(),!0);if(!o||!o.length)return;const i=Ef(o),r=Ze(e),{mode:s}=r;if(a.isLeaving)return es(i);const l=qc(i);if(!l)return es(i);let u=ni(l,r,a,n,d=>u=d);l.type!==Bt&&_o(l,u);let c=n.subTree&&qc(n.subTree);if(c&&c.type!==Bt&&!mo(c,l)&&Lf(n).type!==Bt){let d=ni(c,r,a,n);if(_o(c,d),s==="out-in"&&l.type!==Bt)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},es(i);s==="in-out"&&l.type!==Bt?d.delayLeave=(p,g,_)=>{const I=Df(a,c);I[String(c.key)]=c,p[Cn]=()=>{g(),p[Cn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function Ef(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Bt){t=n;break}}return t}const Qg=Cg;function Df(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function ni(e,t,n,a,o){const{appear:i,mode:r,persisted:s=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:_,onLeaveCancelled:I,onBeforeAppear:C,onAppear:b,onAfterAppear:w,onAppearCancelled:y}=t,m=String(e.key),x=Df(n,e),B=(O,F)=>{O&&_n(O,a,9,F)},T=(O,F)=>{const V=F[1];B(O,F),Ne(O)?O.every(j=>j.length<=1)&&V():O.length<=1&&V()},E={mode:r,persisted:s,beforeEnter(O){let F=l;if(!n.isMounted)if(i)F=C||l;else return;O[Cn]&&O[Cn](!0);const V=x[m];V&&mo(e,V)&&V.el[Cn]&&V.el[Cn](),B(F,[O])},enter(O){if(x[m]===e)return;let F=u,V=c,j=d;if(!n.isMounted)if(i)F=b||u,V=w||c,j=y||d;else return;let U=!1;O[La]=R=>{U||(U=!0,R?B(j,[O]):B(V,[O]),E.delayedLeave&&E.delayedLeave(),O[La]=void 0)};const D=O[La].bind(null,!1);F?T(F,[O,D]):D()},leave(O,F){const V=String(e.key);if(O[La]&&O[La](!0),n.isUnmounting)return F();B(p,[O]);let j=!1;O[Cn]=D=>{j||(j=!0,F(),D?B(I,[O]):B(_,[O]),O[Cn]=void 0,x[V]===e&&delete x[V])};const U=O[Cn].bind(null,!1);x[V]=e,g?T(g,[O,U]):U()},clone(O){const F=ni(O,t,n,a,o);return o&&o(F),F}};return E}function es(e){if(Cr(e))return e=Zn(e),e.children=null,e}function qc(e){if(!Cr(e))return If(e.type)&&e.children?Ef(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Ye(n.default))return n.default()}}function _o(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_o(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Cl(e,t=!1,n){let a=[],o=0;for(let i=0;i<e.length;i++){let r=e[i];const s=n==null?r.key:String(n)+String(r.key!=null?r.key:i);r.type===Ve?(r.patchFlag&128&&o++,a=a.concat(Cl(r.children,t,s))):(t||r.type!==Bt)&&a.push(s!=null?Zn(r,{key:s}):r)}if(o>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Bf(e,t){return Ye(e)?It({name:e.name},t,{setup:e}):e}function Pf(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Tc(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const zi=new WeakMap;function Ja(e,t,n,a,o=!1){if(Ne(e)){e.forEach((I,C)=>Ja(I,t&&(Ne(t)?t[C]:t),n,a,o));return}if(bo(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Ja(e,t,n,a.component.subTree);return}const i=a.shapeFlag&4?Er(a.component):a.el,r=o?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===pt?s.refs={}:s.refs,d=s.setupState,p=Ze(d),g=d===pt?Hd:I=>Tc(c,I)?!1:ct(p,I),_=(I,C)=>!(C&&Tc(c,C));if(u!=null&&u!==l){if(Lc(t),yt(u))c[u]=null,g(u)&&(d[u]=null);else if(St(u)){const I=t;_(u,I.k)&&(u.value=null),I.k&&(c[I.k]=null)}}if(Ye(l))di(l,s,12,[r,c]);else{const I=yt(l),C=St(l);if(I||C){const b=()=>{if(e.f){const w=I?g(l)?d[l]:c[l]:_()||!e.k?l.value:c[e.k];if(o)Ne(w)&&ml(w,i);else if(Ne(w))w.includes(i)||w.push(i);else if(I)c[l]=[i],g(l)&&(d[l]=c[l]);else{const y=[i];_(l,e.k)&&(l.value=y),e.k&&(c[e.k]=y)}}else I?(c[l]=r,g(l)&&(d[l]=r)):C&&(_(l,e.k)&&(l.value=r),e.k&&(c[e.k]=r))};if(r){const w=()=>{b(),zi.delete(e)};w.id=-1,zi.set(e,w),qt(w,n)}else Lc(e),b()}}}function Lc(e){const t=zi.get(e);t&&(t.flags|=8,zi.delete(e))}wr().requestIdleCallback;wr().cancelIdleCallback;const bo=e=>!!e.type.__asyncLoader,Cr=e=>e.type.__isKeepAlive,Ag={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Je(),a=n.ctx;if(!a.renderer)return()=>{const w=t.default&&t.default();return w&&w.length===1?w[0]:w};const o=new Map,i=new Set;let r=null;const s=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:d}}}=a,p=d("div");a.activate=(w,y,m,x,B)=>{const T=w.component;u(w,y,m,0,s),l(T.vnode,w,y,m,T,s,x,w.slotScopeIds,B),qt(()=>{T.isDeactivated=!1,T.a&&da(T.a);const E=w.props&&w.props.onVnodeMounted;E&&ln(E,T.parent,w)},s)},a.deactivate=w=>{const y=w.component;Ui(y.m),Ui(y.a),u(w,p,null,1,s),qt(()=>{y.da&&da(y.da);const m=w.props&&w.props.onVnodeUnmounted;m&&ln(m,y.parent,w),y.isDeactivated=!0},s)};function g(w){ts(w),c(w,n,s,!0)}function _(w){o.forEach((y,m)=>{const x=Ys(bo(y)?y.type.__asyncResolved||{}:y.type);x&&!w(x)&&I(m)})}function I(w){const y=o.get(w);y&&(!r||!mo(y,r))?g(y):r&&ts(r),o.delete(w),i.delete(w)}Oe(()=>[e.include,e.exclude],([w,y])=>{w&&_(m=>$a(w,m)),y&&_(m=>!$a(y,m))},{flush:"post",deep:!0});let C=null;const b=()=>{C!=null&&(Wi(n.subTree.type)?qt(()=>{o.set(C,_i(n.subTree))},n.subTree.suspense):o.set(C,_i(n.subTree)))};return Zt(b),qr(b),wt(()=>{o.forEach(w=>{const{subTree:y,suspense:m}=n,x=_i(y);if(w.type===x.type&&w.key===x.key){ts(x);const B=x.component.da;B&&qt(B,m);return}g(w)})}),()=>{if(C=null,!t.default)return r=null;const w=t.default(),y=w[0];if(w.length>1)return r=null,w;if(!ya(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return r=null,y;let m=_i(y);if(m.type===Bt)return r=null,m;const x=m.type,B=Ys(bo(m)?m.type.__asyncResolved||{}:x),{include:T,exclude:E,max:O}=e;if(T&&(!B||!$a(T,B))||E&&B&&$a(E,B))return m.shapeFlag&=-257,r=m,y;const F=m.key==null?x:m.key,V=o.get(F);return m.el&&(m=Zn(m),y.shapeFlag&128&&(y.ssContent=m)),C=F,V?(m.el=V.el,m.component=V.component,m.transition&&_o(m,m.transition),m.shapeFlag|=512,i.delete(F),i.add(F)):(i.add(F),O&&i.size>parseInt(O,10)&&I(i.values().next().value)),m.shapeFlag|=256,r=m,Wi(y.type)?y:m}}},Ig=Ag;function $a(e,t){return Ne(e)?e.some(n=>$a(n,t)):yt(e)?e.split(",").includes(t):Ch(e)?(e.lastIndex=0,e.test(t)):!1}function Qr(e,t){Mf(e,"a",t)}function Qa(e,t){Mf(e,"da",t)}function Mf(e,t,n=Ot){const a=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ar(t,a,n),n){let o=n.parent;for(;o&&o.parent;)Cr(o.parent.vnode)&&qg(a,t,n,o),o=o.parent}}function qg(e,t,n,a){const o=Ar(t,e,a,!0);Al(()=>{ml(a[t],o)},n)}function ts(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function _i(e){return e.shapeFlag&128?e.ssContent:e}function Ar(e,t,n=Ot,a=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Gn();const s=fi(n),l=_n(t,n,e,r);return s(),Yn(),l});return a?o.unshift(i):o.push(i),i}}const to=e=>(t,n=Ot)=>{(!ai||e==="sp")&&Ar(e,(...a)=>t(...a),n)},Ql=to("bm"),Zt=to("m"),Ir=to("bu"),qr=to("u"),wt=to("bum"),Al=to("um"),Tg=to("sp"),Lg=to("rtg"),Eg=to("rtc");function Dg(e,t=Ot){Ar("ec",e,t)}const jf="components";function X(e,t){return Rf(jf,e,!0,t)||e}const $f=Symbol.for("v-ndc");function Bg(e){return yt(e)?Rf(jf,e,!1)||e:e||$f}function Rf(e,t,n=!0,a=!1){const o=Pt||Ot;if(o){const i=o.type;{const s=Ys(i,!1);if(s&&(s===t||s===Ht(t)||s===yr(Ht(t))))return i}const r=Ec(o[e]||i[e],t)||Ec(o.appContext[e],t);return!r&&a?i:r}}function Ec(e,t){return e&&(e[t]||e[Ht(t)]||e[yr(Ht(t))])}function ut(e,t,n,a){let o;const i=n,r=Ne(e);if(r||yt(e)){const s=r&&Jn(e);let l=!1,u=!1;s&&(l=!nn(e),u=Kn(e),e=Sr(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?_a(bn(e[c])):bn(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,i)}else if(dt(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>t(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,u=s.length;l<u;l++){const c=s[l];o[l]=t(e[c],c,l,i)}}else o=[];return o}function Of(e,t){for(let n=0;n<t.length;n++){const a=t[n];if(Ne(a))for(let o=0;o<a.length;o++)e[a[o].name]=a[o].fn;else a&&(e[a.name]=a.key?(...o)=>{const i=a.fn(...o);return i&&(i.key=a.key),i}:a.fn)}return e}function Dt(e,t,n={},a,o){if(Pt.ce||Pt.parent&&bo(Pt.parent)&&Pt.parent.ce){const u=Object.keys(n).length>0;return t!=="default"&&(n.name=t),M(),_e(Ve,null,[f("slot",n,a&&a())],u?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),M();const r=i&&Ff(i(n)),s=n.key||r&&r.key,l=_e(Ve,{key:(s&&!on(s)?s:`_${t}`)+(!r&&a?"_fb":"")},r||(a?a():[]),r&&e._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Ff(e){return e.some(t=>ya(t)?!(t.type===Bt||t.type===Ve&&!Ff(t.children)):!0)?e:null}const Hs=e=>e?ip(e)?Er(e):Hs(e.parent):null,Ga=It(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hs(e.parent),$root:e=>Hs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Nf(e),$forceUpdate:e=>e.f||(e.f=()=>{xl(e.update)}),$nextTick:e=>e.n||(e.n=bt.bind(e.proxy)),$watch:e=>yg.bind(e)}),ns=(e,t)=>e!==pt&&!e.__isScriptSetup&&ct(e,t),Pg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:o,props:i,accessCache:r,type:s,appContext:l}=e;if(t[0]!=="$"){const p=r[t];if(p!==void 0)switch(p){case 1:return a[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(ns(a,t))return r[t]=1,a[t];if(o!==pt&&ct(o,t))return r[t]=2,o[t];if(ct(i,t))return r[t]=3,i[t];if(n!==pt&&ct(n,t))return r[t]=4,n[t];Us&&(r[t]=0)}}const u=Ga[t];let c,d;if(u)return t==="$attrs"&&Rt(e.attrs,"get",""),u(e);if((c=s.__cssModules)&&(c=c[t]))return c;if(n!==pt&&ct(n,t))return r[t]=4,n[t];if(d=l.config.globalProperties,ct(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:o,ctx:i}=e;return ns(o,t)?(o[t]=n,!0):a!==pt&&ct(a,t)?(a[t]=n,!0):ct(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:o,props:i,type:r}},s){let l;return!!(n[s]||e!==pt&&s[0]!=="$"&&ct(e,s)||ns(t,s)||ct(i,s)||ct(a,s)||ct(Ga,s)||ct(o.config.globalProperties,s)||(l=r.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ct(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Dc(e){return Ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Us=!0;function Mg(e){const t=Nf(e),n=e.proxy,a=e.ctx;Us=!1,t.beforeCreate&&Bc(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:r,watch:s,provide:l,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:_,activated:I,deactivated:C,beforeDestroy:b,beforeUnmount:w,destroyed:y,unmounted:m,render:x,renderTracked:B,renderTriggered:T,errorCaptured:E,serverPrefetch:O,expose:F,inheritAttrs:V,components:j,directives:U,filters:D}=t;if(u&&jg(u,a,null),r)for(const Z in r){const G=r[Z];Ye(G)&&(a[Z]=G.bind(n))}if(o){const Z=o.call(n,n);dt(Z)&&(e.data=No(Z))}if(Us=!0,i)for(const Z in i){const G=i[Z],be=Ye(G)?G.bind(n,n):Ye(G.get)?G.get.bind(n,n):En,$e=!Ye(G)&&Ye(G.set)?G.set.bind(n):En,J=Q({get:be,set:$e});Object.defineProperty(a,Z,{enumerable:!0,configurable:!0,get:()=>J.value,set:H=>J.value=H})}if(s)for(const Z in s)Vf(s[Z],a,n,Z);if(l){const Z=Ye(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(G=>{xf(G,Z[G])})}c&&Bc(c,e,"c");function ae(Z,G){Ne(G)?G.forEach(be=>Z(be.bind(n))):G&&Z(G.bind(n))}if(ae(Ql,d),ae(Zt,p),ae(Ir,g),ae(qr,_),ae(Qr,I),ae(Qa,C),ae(Dg,E),ae(Eg,B),ae(Lg,T),ae(wt,w),ae(Al,m),ae(Tg,O),Ne(F))if(F.length){const Z=e.exposed||(e.exposed={});F.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:be=>n[G]=be,enumerable:!0})})}else e.exposed||(e.exposed={});x&&e.render===En&&(e.render=x),V!=null&&(e.inheritAttrs=V),j&&(e.components=j),U&&(e.directives=U),O&&Pf(e)}function jg(e,t,n=En){Ne(e)&&(e=Ws(e));for(const a in e){const o=e[a];let i;dt(o)?"default"in o?i=vo(o.from||a,o.default,!0):i=vo(o.from||a):i=vo(o),St(i)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[a]=i}}function Bc(e,t,n){_n(Ne(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vf(e,t,n,a){let o=a.includes(".")?Qf(n,a):()=>n[a];if(yt(e)){const i=t[e];Ye(i)&&Oe(o,i)}else if(Ye(e))Oe(o,e.bind(n));else if(dt(e))if(Ne(e))e.forEach(i=>Vf(i,t,n,a));else{const i=Ye(e.handler)?e.handler.bind(n):t[e.handler];Ye(i)&&Oe(o,i,e)}}function Nf(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,s=i.get(t);let l;return s?l=s:!o.length&&!n&&!a?l=t:(l={},o.length&&o.forEach(u=>Hi(l,u,r,!0)),Hi(l,t,r)),dt(t)&&i.set(t,l),l}function Hi(e,t,n,a=!1){const{mixins:o,extends:i}=t;i&&Hi(e,i,n,!0),o&&o.forEach(r=>Hi(e,r,n,!0));for(const r in t)if(!(a&&r==="expose")){const s=$g[r]||n&&n[r];e[r]=s?s(e[r],t[r]):t[r]}return e}const $g={data:Pc,props:Mc,emits:Mc,methods:Ra,computed:Ra,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Ra,directives:Ra,watch:Og,provide:Pc,inject:Rg};function Pc(e,t){return t?e?function(){return It(Ye(e)?e.call(this,this):e,Ye(t)?t.call(this,this):t)}:t:e}function Rg(e,t){return Ra(Ws(e),Ws(t))}function Ws(e){if(Ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ft(e,t){return e?[...new Set([].concat(e,t))]:t}function Ra(e,t){return e?It(Object.create(null),e,t):t}function Mc(e,t){return e?Ne(e)&&Ne(t)?[...new Set([...e,...t])]:It(Object.create(null),Dc(e),Dc(t??{})):t}function Og(e,t){if(!e)return t;if(!t)return e;const n=It(Object.create(null),e);for(const a in t)n[a]=Ft(e[a],t[a]);return n}function zf(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fg=0;function Vg(e,t){return function(a,o=null){Ye(a)||(a=It({},a)),o!=null&&!dt(o)&&(o=null);const i=zf(),r=new WeakSet,s=[];let l=!1;const u=i.app={_uid:Fg++,_component:a,_props:o,_container:null,_context:i,_instance:null,version:bv,get config(){return i.config},set config(c){},use(c,...d){return r.has(c)||(c&&Ye(c.install)?(r.add(c),c.install(u,...d)):Ye(c)&&(r.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,p){if(!l){const g=u._ceVNode||f(a,o);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(g,c,p),l=!0,u._container=c,c.__vue_app__=u,Er(g.component)}},onUnmount(c){s.push(c)},unmount(){l&&(_n(s,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=jo;jo=u;try{return c()}finally{jo=d}}};return u}}let jo=null;const Ng=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ht(t)}Modifiers`]||e[`${Vo(t)}Modifiers`];function zg(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||pt;let o=n;const i=t.startsWith("update:"),r=i&&Ng(a,t.slice(7));r&&(r.trim&&(o=n.map(c=>yt(c)?c.trim():c)),r.number&&(o=n.map(hl)));let s,l=a[s=Gr(t)]||a[s=Gr(Ht(t))];!l&&i&&(l=a[s=Gr(Vo(t))]),l&&_n(l,e,6,o);const u=a[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,_n(u,e,6,o)}}const Hg=new WeakMap;function Hf(e,t,n=!1){const a=n?Hg:t.emitsCache,o=a.get(e);if(o!==void 0)return o;const i=e.emits;let r={},s=!1;if(!Ye(e)){const l=u=>{const c=Hf(u,t,!0);c&&(s=!0,It(r,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(dt(e)&&a.set(e,null),null):(Ne(i)?i.forEach(l=>r[l]=null):It(r,i),dt(e)&&a.set(e,r),r)}function Tr(e,t){return!e||!gr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ct(e,t[0].toLowerCase()+t.slice(1))||ct(e,Vo(t))||ct(e,t))}function jc(e){const{type:t,vnode:n,proxy:a,withProxy:o,propsOptions:[i],slots:r,attrs:s,emit:l,render:u,renderCache:c,props:d,data:p,setupState:g,ctx:_,inheritAttrs:I}=e,C=Ni(e);let b,w;try{if(n.shapeFlag&4){const m=o||a,x=m;b=An(u.call(x,m,c,d,g,p,_)),w=s}else{const m=t;b=An(m.length>1?m(d,{attrs:s,slots:r,emit:l}):m(d,null)),w=t.props?s:Ug(s)}}catch(m){Ya.length=0,xr(m,e,1),b=f(Bt)}let y=b;if(w&&I!==!1){const m=Object.keys(w),{shapeFlag:x}=y;m.length&&x&7&&(i&&m.some(vr)&&(w=Wg(w,i)),y=Zn(y,w,!1,!0))}return n.dirs&&(y=Zn(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&_o(y,n.transition),b=y,Ni(C),b}const Ug=e=>{let t;for(const n in e)(n==="class"||n==="style"||gr(n))&&((t||(t={}))[n]=e[n]);return t},Wg=(e,t)=>{const n={};for(const a in e)(!vr(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function Jg(e,t,n){const{props:a,children:o,component:i}=e,{props:r,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?$c(a,r,u):!!r;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(Uf(r,a,p)&&!Tr(u,p))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:a===r?!1:a?r?$c(a,r,u):!0:!!r;return!1}function $c(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const i=a[o];if(Uf(t,e,i)&&!Tr(n,i))return!0}return!1}function Uf(e,t,n){const a=e[n],o=t[n];return n==="style"&&dt(a)&&dt(o)?!gl(a,o):a!==o}function Gg({vnode:e,parent:t,suspense:n},a){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=a,e=o),o===e)(e=t.vnode).el=a,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=a)}const Wf={},Jf=()=>Object.create(Wf),Gf=e=>Object.getPrototypeOf(e)===Wf;function Yg(e,t,n,a=!1){const o={},i=Jf();e.propsDefaults=Object.create(null),Yf(e,t,o,i);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=a?o:og(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Kg(e,t,n,a){const{props:o,attrs:i,vnode:{patchFlag:r}}=e,s=Ze(o),[l]=e.propsOptions;let u=!1;if((a||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Tr(e.emitsOptions,p))continue;const g=t[p];if(l)if(ct(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=Ht(p);o[_]=Js(l,s,_,g,e,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Yf(e,t,o,i)&&(u=!0);let c;for(const d in s)(!t||!ct(t,d)&&((c=Vo(d))===d||!ct(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=Js(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!t||!ct(t,d))&&(delete i[d],u=!0)}u&&Un(e.attrs,"set","")}function Yf(e,t,n,a){const[o,i]=e.propsOptions;let r=!1,s;if(t)for(let l in t){if(Ha(l))continue;const u=t[l];let c;o&&ct(o,c=Ht(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:Tr(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,r=!0)}if(i){const l=Ze(n),u=s||pt;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Js(o,l,d,u[d],e,!ct(u,d))}}return r}function Js(e,t,n,a,o,i){const r=e[n];if(r!=null){const s=ct(r,"default");if(s&&a===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&Ye(l)){const{propsDefaults:u}=o;if(n in u)a=u[n];else{const c=fi(o);a=u[n]=l.call(null,t),c()}}else a=l;o.ce&&o.ce._setProp(n,a)}r[0]&&(i&&!s?a=!1:r[1]&&(a===""||a===Vo(n))&&(a=!0))}return a}const Zg=new WeakMap;function Kf(e,t,n=!1){const a=n?Zg:t.propsCache,o=a.get(e);if(o)return o;const i=e.props,r={},s=[];let l=!1;if(!Ye(e)){const c=d=>{l=!0;const[p,g]=Kf(d,t,!0);It(r,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return dt(e)&&a.set(e,ca),ca;if(Ne(i))for(let c=0;c<i.length;c++){const d=Ht(i[c]);Rc(d)&&(r[d]=pt)}else if(i)for(const c in i){const d=Ht(c);if(Rc(d)){const p=i[c],g=r[d]=Ne(p)||Ye(p)?{type:p}:It({},p),_=g.type;let I=!1,C=!0;if(Ne(_))for(let b=0;b<_.length;++b){const w=_[b],y=Ye(w)&&w.name;if(y==="Boolean"){I=!0;break}else y==="String"&&(C=!1)}else I=Ye(_)&&_.name==="Boolean";g[0]=I,g[1]=C,(I||ct(g,"default"))&&s.push(d)}}const u=[r,s];return dt(e)&&a.set(e,u),u}function Rc(e){return e[0]!=="$"&&!Ha(e)}const Il=e=>e==="_"||e==="_ctx"||e==="$stable",ql=e=>Ne(e)?e.map(An):[An(e)],Xg=(e,t,n)=>{if(t._n)return t;const a=S((...o)=>ql(t(...o)),n);return a._c=!1,a},Zf=(e,t,n)=>{const a=e._ctx;for(const o in e){if(Il(o))continue;const i=e[o];if(Ye(i))t[o]=Xg(o,i,a);else if(i!=null){const r=ql(i);t[o]=()=>r}}},Xf=(e,t)=>{const n=ql(t);e.slots.default=()=>n},ep=(e,t,n)=>{for(const a in t)(n||!Il(a))&&(e[a]=t[a])},ev=(e,t,n)=>{const a=e.slots=Jf();if(e.vnode.shapeFlag&32){const o=t._;o?(ep(a,t,n),n&&Yd(a,"_",o,!0)):Zf(t,a)}else t&&Xf(e,t)},tv=(e,t,n)=>{const{vnode:a,slots:o}=e;let i=!0,r=pt;if(a.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:ep(o,t,n):(i=!t.$stable,Zf(t,o)),r=t}else t&&(Xf(e,t),r={default:1});if(i)for(const s in o)!Il(s)&&r[s]==null&&delete o[s]},qt=rv;function nv(e){return ov(e)}function ov(e,t){const n=wr();n.__VUE__=!0;const{insert:a,remove:o,patchProp:i,createElement:r,createText:s,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=En,insertStaticContent:_}=e,I=(A,$,te,fe=null,ue=null,ce=null,Se=void 0,ye=null,ve=!!$.dynamicChildren)=>{if(A===$)return;A&&!mo(A,$)&&(fe=h(A),H(A,ue,ce,!0),A=null),$.patchFlag===-2&&(ve=!1,$.dynamicChildren=null);const{type:le,ref:oe,shapeFlag:ie}=$;switch(le){case Lr:C(A,$,te,fe);break;case Bt:b(A,$,te,fe);break;case as:A==null&&w($,te,fe,Se);break;case Ve:j(A,$,te,fe,ue,ce,Se,ye,ve);break;default:ie&1?x(A,$,te,fe,ue,ce,Se,ye,ve):ie&6?U(A,$,te,fe,ue,ce,Se,ye,ve):(ie&64||ie&128)&&le.process(A,$,te,fe,ue,ce,Se,ye,ve,Y)}oe!=null&&ue?Ja(oe,A&&A.ref,ce,$||A,!$):oe==null&&A&&A.ref!=null&&Ja(A.ref,null,ce,A,!0)},C=(A,$,te,fe)=>{if(A==null)a($.el=s($.children),te,fe);else{const ue=$.el=A.el;$.children!==A.children&&u(ue,$.children)}},b=(A,$,te,fe)=>{A==null?a($.el=l($.children||""),te,fe):$.el=A.el},w=(A,$,te,fe)=>{[A.el,A.anchor]=_(A.children,$,te,fe,A.el,A.anchor)},y=({el:A,anchor:$},te,fe)=>{let ue;for(;A&&A!==$;)ue=p(A),a(A,te,fe),A=ue;a($,te,fe)},m=({el:A,anchor:$})=>{let te;for(;A&&A!==$;)te=p(A),o(A),A=te;o($)},x=(A,$,te,fe,ue,ce,Se,ye,ve)=>{if($.type==="svg"?Se="svg":$.type==="math"&&(Se="mathml"),A==null)B($,te,fe,ue,ce,Se,ye,ve);else{const le=A.el&&A.el._isVueCE?A.el:null;try{le&&le._beginPatch(),O(A,$,ue,ce,Se,ye,ve)}finally{le&&le._endPatch()}}},B=(A,$,te,fe,ue,ce,Se,ye)=>{let ve,le;const{props:oe,shapeFlag:ie,transition:me,dirs:Ce}=A;if(ve=A.el=r(A.type,ce,oe&&oe.is,oe),ie&8?c(ve,A.children):ie&16&&E(A.children,ve,null,fe,ue,os(A,ce),Se,ye),Ce&&Qo(A,null,fe,"created"),T(ve,A,A.scopeId,Se,fe),oe){for(const Ie in oe)Ie!=="value"&&!Ha(Ie)&&i(ve,Ie,null,oe[Ie],ce,fe);"value"in oe&&i(ve,"value",null,oe.value,ce),(le=oe.onVnodeBeforeMount)&&ln(le,fe,A)}Ce&&Qo(A,null,fe,"beforeMount");const je=av(ue,me);je&&me.beforeEnter(ve),a(ve,$,te),((le=oe&&oe.onVnodeMounted)||je||Ce)&&qt(()=>{try{le&&ln(le,fe,A),je&&me.enter(ve),Ce&&Qo(A,null,fe,"mounted")}finally{}},ue)},T=(A,$,te,fe,ue)=>{if(te&&g(A,te),fe)for(let ce=0;ce<fe.length;ce++)g(A,fe[ce]);if(ue){let ce=ue.subTree;if($===ce||Wi(ce.type)&&(ce.ssContent===$||ce.ssFallback===$)){const Se=ue.vnode;T(A,Se,Se.scopeId,Se.slotScopeIds,ue.parent)}}},E=(A,$,te,fe,ue,ce,Se,ye,ve=0)=>{for(let le=ve;le<A.length;le++){const oe=A[le]=ye?Hn(A[le]):An(A[le]);I(null,oe,$,te,fe,ue,ce,Se,ye)}},O=(A,$,te,fe,ue,ce,Se)=>{const ye=$.el=A.el;let{patchFlag:ve,dynamicChildren:le,dirs:oe}=$;ve|=A.patchFlag&16;const ie=A.props||pt,me=$.props||pt;let Ce;if(te&&Io(te,!1),(Ce=me.onVnodeBeforeUpdate)&&ln(Ce,te,$,A),oe&&Qo($,A,te,"beforeUpdate"),te&&Io(te,!0),(ie.innerHTML&&me.innerHTML==null||ie.textContent&&me.textContent==null)&&c(ye,""),le?F(A.dynamicChildren,le,ye,te,fe,os($,ue),ce):Se||G(A,$,ye,null,te,fe,os($,ue),ce,!1),ve>0){if(ve&16)V(ye,ie,me,te,ue);else if(ve&2&&ie.class!==me.class&&i(ye,"class",null,me.class,ue),ve&4&&i(ye,"style",ie.style,me.style,ue),ve&8){const je=$.dynamicProps;for(let Ie=0;Ie<je.length;Ie++){const De=je[Ie],Ue=ie[De],Ke=me[De];(Ke!==Ue||De==="value")&&i(ye,De,Ue,Ke,ue,te)}}ve&1&&A.children!==$.children&&c(ye,$.children)}else!Se&&le==null&&V(ye,ie,me,te,ue);((Ce=me.onVnodeUpdated)||oe)&&qt(()=>{Ce&&ln(Ce,te,$,A),oe&&Qo($,A,te,"updated")},fe)},F=(A,$,te,fe,ue,ce,Se)=>{for(let ye=0;ye<$.length;ye++){const ve=A[ye],le=$[ye],oe=ve.el&&(ve.type===Ve||!mo(ve,le)||ve.shapeFlag&198)?d(ve.el):te;I(ve,le,oe,null,fe,ue,ce,Se,!0)}},V=(A,$,te,fe,ue)=>{if($!==te){if($!==pt)for(const ce in $)!Ha(ce)&&!(ce in te)&&i(A,ce,$[ce],null,ue,fe);for(const ce in te){if(Ha(ce))continue;const Se=te[ce],ye=$[ce];Se!==ye&&ce!=="value"&&i(A,ce,ye,Se,ue,fe)}"value"in te&&i(A,"value",$.value,te.value,ue)}},j=(A,$,te,fe,ue,ce,Se,ye,ve)=>{const le=$.el=A?A.el:s(""),oe=$.anchor=A?A.anchor:s("");let{patchFlag:ie,dynamicChildren:me,slotScopeIds:Ce}=$;Ce&&(ye=ye?ye.concat(Ce):Ce),A==null?(a(le,te,fe),a(oe,te,fe),E($.children||[],te,oe,ue,ce,Se,ye,ve)):ie>0&&ie&64&&me&&A.dynamicChildren&&A.dynamicChildren.length===me.length?(F(A.dynamicChildren,me,te,ue,ce,Se,ye),($.key!=null||ue&&$===ue.subTree)&&Tl(A,$,!0)):G(A,$,te,oe,ue,ce,Se,ye,ve)},U=(A,$,te,fe,ue,ce,Se,ye,ve)=>{$.slotScopeIds=ye,A==null?$.shapeFlag&512?ue.ctx.activate($,te,fe,Se,ve):D($,te,fe,ue,ce,Se,ve):R(A,$,ve)},D=(A,$,te,fe,ue,ce,Se)=>{const ye=A.component=fv(A,fe,ue);if(Cr(A)&&(ye.ctx.renderer=Y),pv(ye,!1,Se),ye.asyncDep){if(ue&&ue.registerDep(ye,ae,Se),!A.el){const ve=ye.subTree=f(Bt);b(null,ve,$,te),A.placeholder=ve.el}}else ae(ye,A,$,te,ue,ce,Se)},R=(A,$,te)=>{const fe=$.component=A.component;if(Jg(A,$,te))if(fe.asyncDep&&!fe.asyncResolved){Z(fe,$,te);return}else fe.next=$,fe.update();else $.el=A.el,fe.vnode=$},ae=(A,$,te,fe,ue,ce,Se)=>{const ye=()=>{if(A.isMounted){let{next:ie,bu:me,u:Ce,parent:je,vnode:Ie}=A;{const he=tp(A);if(he){ie&&(ie.el=Ie.el,Z(A,ie,Se)),he.asyncDep.then(()=>{qt(()=>{A.isUnmounted||le()},ue)});return}}let De=ie,Ue;Io(A,!1),ie?(ie.el=Ie.el,Z(A,ie,Se)):ie=Ie,me&&da(me),(Ue=ie.props&&ie.props.onVnodeBeforeUpdate)&&ln(Ue,je,ie,Ie),Io(A,!0);const Ke=jc(A),re=A.subTree;A.subTree=Ke,I(re,Ke,d(re.el),h(re),A,ue,ce),ie.el=Ke.el,De===null&&Gg(A,Ke.el),Ce&&qt(Ce,ue),(Ue=ie.props&&ie.props.onVnodeUpdated)&&qt(()=>ln(Ue,je,ie,Ie),ue)}else{let ie;const{el:me,props:Ce}=$,{bm:je,m:Ie,parent:De,root:Ue,type:Ke}=A,re=bo($);Io(A,!1),je&&da(je),!re&&(ie=Ce&&Ce.onVnodeBeforeMount)&&ln(ie,De,$),Io(A,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ke,A.parent?A.parent.type:void 0);const he=A.subTree=jc(A);I(null,he,te,fe,A,ue,ce),$.el=he.el}if(Ie&&qt(Ie,ue),!re&&(ie=Ce&&Ce.onVnodeMounted)){const he=$;qt(()=>ln(ie,De,he),ue)}($.shapeFlag&256||De&&bo(De.vnode)&&De.vnode.shapeFlag&256)&&A.a&&qt(A.a,ue),A.isMounted=!0,$=te=fe=null}};A.scope.on();const ve=A.effect=new of(ye);A.scope.off();const le=A.update=ve.run.bind(ve),oe=A.job=ve.runIfDirty.bind(ve);oe.i=A,oe.id=A.uid,ve.scheduler=()=>xl(oe),Io(A,!0),le()},Z=(A,$,te)=>{$.component=A;const fe=A.vnode.props;A.vnode=$,A.next=null,Kg(A,$.props,fe,te),tv(A,$.children,te),Gn(),Qc(A),Yn()},G=(A,$,te,fe,ue,ce,Se,ye,ve=!1)=>{const le=A&&A.children,oe=A?A.shapeFlag:0,ie=$.children,{patchFlag:me,shapeFlag:Ce}=$;if(me>0){if(me&128){$e(le,ie,te,fe,ue,ce,Se,ye,ve);return}else if(me&256){be(le,ie,te,fe,ue,ce,Se,ye,ve);return}}Ce&8?(oe&16&&de(le,ue,ce),ie!==le&&c(te,ie)):oe&16?Ce&16?$e(le,ie,te,fe,ue,ce,Se,ye,ve):de(le,ue,ce,!0):(oe&8&&c(te,""),Ce&16&&E(ie,te,fe,ue,ce,Se,ye,ve))},be=(A,$,te,fe,ue,ce,Se,ye,ve)=>{A=A||ca,$=$||ca;const le=A.length,oe=$.length,ie=Math.min(le,oe);let me;for(me=0;me<ie;me++){const Ce=$[me]=ve?Hn($[me]):An($[me]);I(A[me],Ce,te,null,ue,ce,Se,ye,ve)}le>oe?de(A,ue,ce,!0,!1,ie):E($,te,fe,ue,ce,Se,ye,ve,ie)},$e=(A,$,te,fe,ue,ce,Se,ye,ve)=>{let le=0;const oe=$.length;let ie=A.length-1,me=oe-1;for(;le<=ie&&le<=me;){const Ce=A[le],je=$[le]=ve?Hn($[le]):An($[le]);if(mo(Ce,je))I(Ce,je,te,null,ue,ce,Se,ye,ve);else break;le++}for(;le<=ie&&le<=me;){const Ce=A[ie],je=$[me]=ve?Hn($[me]):An($[me]);if(mo(Ce,je))I(Ce,je,te,null,ue,ce,Se,ye,ve);else break;ie--,me--}if(le>ie){if(le<=me){const Ce=me+1,je=Ce<oe?$[Ce].el:fe;for(;le<=me;)I(null,$[le]=ve?Hn($[le]):An($[le]),te,je,ue,ce,Se,ye,ve),le++}}else if(le>me)for(;le<=ie;)H(A[le],ue,ce,!0),le++;else{const Ce=le,je=le,Ie=new Map;for(le=je;le<=me;le++){const Qe=$[le]=ve?Hn($[le]):An($[le]);Qe.key!=null&&Ie.set(Qe.key,le)}let De,Ue=0;const Ke=me-je+1;let re=!1,he=0;const ne=new Array(Ke);for(le=0;le<Ke;le++)ne[le]=0;for(le=Ce;le<=ie;le++){const Qe=A[le];if(Ue>=Ke){H(Qe,ue,ce,!0);continue}let He;if(Qe.key!=null)He=Ie.get(Qe.key);else for(De=je;De<=me;De++)if(ne[De-je]===0&&mo(Qe,$[De])){He=De;break}He===void 0?H(Qe,ue,ce,!0):(ne[He-je]=le+1,He>=he?he=He:re=!0,I(Qe,$[He],te,null,ue,ce,Se,ye,ve),Ue++)}const ke=re?iv(ne):ca;for(De=ke.length-1,le=Ke-1;le>=0;le--){const Qe=je+le,He=$[Qe],Re=$[Qe+1],et=Qe+1<oe?Re.el||np(Re):fe;ne[le]===0?I(null,He,te,et,ue,ce,Se,ye,ve):re&&(De<0||le!==ke[De]?J(He,te,et,2):De--)}}},J=(A,$,te,fe,ue=null)=>{const{el:ce,type:Se,transition:ye,children:ve,shapeFlag:le}=A;if(le&6){J(A.component.subTree,$,te,fe);return}if(le&128){A.suspense.move($,te,fe);return}if(le&64){Se.move(A,$,te,Y);return}if(Se===Ve){a(ce,$,te);for(let ie=0;ie<ve.length;ie++)J(ve[ie],$,te,fe);a(A.anchor,$,te);return}if(Se===as){y(A,$,te);return}if(fe!==2&&le&1&&ye)if(fe===0)ye.beforeEnter(ce),a(ce,$,te),qt(()=>ye.enter(ce),ue);else{const{leave:ie,delayLeave:me,afterLeave:Ce}=ye,je=()=>{A.ctx.isUnmounted?o(ce):a(ce,$,te)},Ie=()=>{ce._isLeaving&&ce[Cn](!0),ie(ce,()=>{je(),Ce&&Ce()})};me?me(ce,je,Ie):Ie()}else a(ce,$,te)},H=(A,$,te,fe=!1,ue=!1)=>{const{type:ce,props:Se,ref:ye,children:ve,dynamicChildren:le,shapeFlag:oe,patchFlag:ie,dirs:me,cacheIndex:Ce,memo:je}=A;if(ie===-2&&(ue=!1),ye!=null&&(Gn(),Ja(ye,null,te,A,!0),Yn()),Ce!=null&&($.renderCache[Ce]=void 0),oe&256){$.ctx.deactivate(A);return}const Ie=oe&1&&me,De=!bo(A);let Ue;if(De&&(Ue=Se&&Se.onVnodeBeforeUnmount)&&ln(Ue,$,A),oe&6)Me(A.component,te,fe);else{if(oe&128){A.suspense.unmount(te,fe);return}Ie&&Qo(A,null,$,"beforeUnmount"),oe&64?A.type.remove(A,$,te,Y,fe):le&&!le.hasOnce&&(ce!==Ve||ie>0&&ie&64)?de(le,$,te,!1,!0):(ce===Ve&&ie&384||!ue&&oe&16)&&de(ve,$,te),fe&&pe(A)}const Ke=je!=null&&Ce==null;(De&&(Ue=Se&&Se.onVnodeUnmounted)||Ie||Ke)&&qt(()=>{Ue&&ln(Ue,$,A),Ie&&Qo(A,null,$,"unmounted"),Ke&&(A.el=null)},te)},pe=A=>{const{type:$,el:te,anchor:fe,transition:ue}=A;if($===Ve){Le(te,fe);return}if($===as){m(A);return}const ce=()=>{o(te),ue&&!ue.persisted&&ue.afterLeave&&ue.afterLeave()};if(A.shapeFlag&1&&ue&&!ue.persisted){const{leave:Se,delayLeave:ye}=ue,ve=()=>Se(te,ce);ye?ye(A.el,ce,ve):ve()}else ce()},Le=(A,$)=>{let te;for(;A!==$;)te=p(A),o(A),A=te;o($)},Me=(A,$,te)=>{const{bum:fe,scope:ue,job:ce,subTree:Se,um:ye,m:ve,a:le}=A;Ui(ve),Ui(le),fe&&da(fe),ue.stop(),ce&&(ce.flags|=8,H(Se,A,$,te)),ye&&qt(ye,$),qt(()=>{A.isUnmounted=!0},$)},de=(A,$,te,fe=!1,ue=!1,ce=0)=>{for(let Se=ce;Se<A.length;Se++)H(A[Se],$,te,fe,ue)},h=A=>{if(A.shapeFlag&6)return h(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const $=p(A.anchor||A.el),te=$&&$[Af];return te?p(te):$};let k=!1;const q=(A,$,te)=>{let fe;A==null?$._vnode&&(H($._vnode,null,null,!0),fe=$._vnode.component):I($._vnode||null,A,$,null,null,null,te),$._vnode=A,k||(k=!0,Qc(fe),wf(),k=!1)},Y={p:I,um:H,m:J,r:pe,mt:D,mc:E,pc:G,pbc:F,n:h,o:e};return{render:q,hydrate:void 0,createApp:Vg(q)}}function os({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Io({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function av(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Tl(e,t,n=!1){const a=e.children,o=t.children;if(Ne(a)&&Ne(o))for(let i=0;i<a.length;i++){const r=a[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=Hn(o[i]),s.el=r.el),!n&&s.patchFlag!==-2&&Tl(r,s)),s.type===Lr&&(s.patchFlag===-1&&(s=o[i]=Hn(s)),s.el=r.el),s.type===Bt&&!s.el&&(s.el=r.el)}}function iv(e){const t=e.slice(),n=[0];let a,o,i,r,s;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(o=n[n.length-1],e[o]<u){t[a]=o,n.push(a);continue}for(i=0,r=n.length-1;i<r;)s=i+r>>1,e[n[s]]<u?i=s+1:r=s;u<e[n[i]]&&(i>0&&(t[a]=n[i-1]),n[i]=a)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function tp(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:tp(t)}function Ui(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function np(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?np(t.subTree):null}const Wi=e=>e.__isSuspense;function rv(e,t){t&&t.pendingBranch?Ne(e)?t.effects.push(...e):t.effects.push(e):gg(e)}const Ve=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Ya=[];let en=null;function M(e=!1){Ya.push(en=e?null:[])}function sv(){Ya.pop(),en=Ya[Ya.length-1]||null}let oi=1;function Ji(e,t=!1){oi+=e,e<0&&en&&t&&(en.hasOnce=!0)}function op(e){return e.dynamicChildren=oi>0?en||ca:null,sv(),oi>0&&en&&en.push(e),e}function ee(e,t,n,a,o,i){return op(v(e,t,n,a,o,i,!0))}function _e(e,t,n,a,o){return op(f(e,t,n,a,o,!0))}function ya(e){return e?e.__v_isVNode===!0:!1}function mo(e,t){return e.type===t.type&&e.key===t.key}const ap=({key:e})=>e??null,Ti=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?yt(e)||St(e)||Ye(e)?{i:Pt,r:e,k:t,f:!!n}:e:null);function v(e,t=null,n=null,a=0,o=null,i=e===Ve?0:1,r=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ap(t),ref:t&&Ti(t),scopeId:kf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Pt};return s?(Ll(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=yt(n)?8:16),oi>0&&!r&&en&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&en.push(l),l}const f=lv;function lv(e,t=null,n=null,a=0,o=null,i=!1){if((!e||e===$f)&&(e=Bt),ya(e)){const s=Zn(e,t,!0);return n&&Ll(s,n),oi>0&&!i&&en&&(s.shapeFlag&6?en[en.indexOf(e)]=s:en.push(s)),s.patchFlag=-2,s}if(vv(e)&&(e=e.__vccOpts),t){t=cv(t);let{class:s,style:l}=t;s&&!yt(s)&&(t.class=ft(s)),dt(l)&&(kr(l)&&!Ne(l)&&(l=It({},l)),t.style=Dn(l))}const r=yt(e)?1:Wi(e)?128:If(e)?64:dt(e)?4:Ye(e)?2:0;return v(e,t,n,a,o,r,i,!0)}function cv(e){return e?kr(e)||Gf(e)?It({},e):e:null}function Zn(e,t,n=!1,a=!1){const{props:o,ref:i,patchFlag:r,children:s,transition:l}=e,u=t?El(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ap(u),ref:t&&t.ref?n&&i?Ne(i)?i.concat(Ti(t)):[i,Ti(t)]:Ti(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ve?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zn(e.ssContent),ssFallback:e.ssFallback&&Zn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&_o(c,l.clone(c)),c}function K(e=" ",t=0){return f(Lr,null,e,t)}function Ge(e="",t=!1){return t?(M(),_e(Bt,null,e)):f(Bt,null,e)}function An(e){return e==null||typeof e=="boolean"?f(Bt):Ne(e)?f(Ve,null,e.slice()):ya(e)?Hn(e):f(Lr,null,String(e))}function Hn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zn(e)}function Ll(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(Ne(t))n=16;else if(typeof t=="object")if(a&65){const o=t.default;o&&(o._c&&(o._d=!1),Ll(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Gf(t)?t._ctx=Pt:o===3&&Pt&&(Pt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Ye(t)?(t={default:t,_ctx:Pt},n=32):(t=String(t),a&64?(n=16,t=[K(t)]):n=8);e.children=t,e.shapeFlag|=n}function El(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const o in a)if(o==="class")t.class!==a.class&&(t.class=ft([t.class,a.class]));else if(o==="style")t.style=Dn([t.style,a.style]);else if(gr(o)){const i=t[o],r=a[o];r&&i!==r&&!(Ne(i)&&i.includes(r))?t[o]=i?[].concat(i,r):r:r==null&&i==null&&!vr(o)&&(t[o]=r)}else o!==""&&(t[o]=a[o])}return t}function ln(e,t,n,a=null){_n(e,t,7,[n,a])}const uv=zf();let dv=0;function fv(e,t,n){const a=e.type,o=(t?t.appContext:e.appContext)||uv,i={uid:dv++,vnode:e,type:a,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ef(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kf(a,o),emitsOptions:Hf(a,o),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:a.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=zg.bind(null,i),e.ce&&e.ce(i),i}let Ot=null;const Je=()=>Ot||Pt;let Gi,Gs;{const e=wr(),t=(n,a)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(a),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};Gi=t("__VUE_INSTANCE_SETTERS__",n=>Ot=n),Gs=t("__VUE_SSR_SETTERS__",n=>ai=n)}const fi=e=>{const t=Ot;return Gi(e),e.scope.on(),()=>{e.scope.off(),Gi(t)}},Oc=()=>{Ot&&Ot.scope.off(),Gi(null)};function ip(e){return e.vnode.shapeFlag&4}let ai=!1;function pv(e,t=!1,n=!1){t&&Gs(t);const{props:a,children:o}=e.vnode,i=ip(e);Yg(e,a,i,t),ev(e,o,n||t);const r=i?mv(e,t):void 0;return t&&Gs(!1),r}function mv(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pg);const{setup:a}=n;if(a){Gn();const o=e.setupContext=a.length>1?gv(e):null,i=fi(e),r=di(a,e,0,[e.props,o]),s=Wd(r);if(Yn(),i(),(s||e.sp)&&!bo(e)&&Pf(e),s){if(r.then(Oc,Oc),t)return r.then(l=>{Fc(e,l)}).catch(l=>{xr(l,e,0)});e.asyncDep=r}else Fc(e,r)}else rp(e)}function Fc(e,t,n){Ye(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:dt(t)&&(e.setupState=bf(t)),rp(e)}function rp(e,t,n){const a=e.type;e.render||(e.render=a.render||En);{const o=fi(e);Gn();try{Mg(e)}finally{Yn(),o()}}}const hv={get(e,t){return Rt(e,"get",""),e[t]}};function gv(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,hv),slots:e.slots,emit:e.emit,expose:t}}function Er(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(bf(Ca(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ga)return Ga[n](e)},has(t,n){return n in t||n in Ga}})):e.proxy}function Ys(e,t=!0){return Ye(e)?e.displayName||e.name:e.name||t&&e.__name}function vv(e){return Ye(e)&&"__vccOpts"in e}const Q=(e,t)=>dg(e,t,ai);function L(e,t,n){try{Ji(-1);const a=arguments.length;return a===2?dt(t)&&!Ne(t)?ya(t)?f(e,null,[t]):f(e,t):f(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&ya(n)&&(n=[n]),f(e,t,n))}finally{Ji(1)}}const bv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ks;const Vc=typeof window<"u"&&window.trustedTypes;if(Vc)try{Ks=Vc.createPolicy("vue",{createHTML:e=>e})}catch{}const sp=Ks?e=>Ks.createHTML(e):e=>e,_v="http://www.w3.org/2000/svg",yv="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,Nc=zn&&zn.createElement("template"),wv={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const o=t==="svg"?zn.createElementNS(_v,e):t==="mathml"?zn.createElementNS(yv,e):n?zn.createElement(e,{is:n}):zn.createElement(e);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>zn.createTextNode(e),createComment:e=>zn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,o,i){const r=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Nc.innerHTML=sp(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const s=Nc.content;if(a==="svg"||a==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},io="transition",Ea="animation",wa=Symbol("_vtc"),lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cp=It({},Tf,lp),Sv=e=>(e.displayName="Transition",e.props=cp,e),Lt=Sv((e,{slots:t})=>L(Qg,up(e),t)),qo=(e,t=[])=>{Ne(e)?e.forEach(n=>n(...t)):e&&e(...t)},zc=e=>e?Ne(e)?e.some(t=>t.length>1):e.length>1:!1;function up(e){const t={};for(const j in e)j in lp||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:a,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=r,appearToClass:c=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=kv(o),I=_&&_[0],C=_&&_[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:y,onLeave:m,onLeaveCancelled:x,onBeforeAppear:B=b,onAppear:T=w,onAppearCancelled:E=y}=t,O=(j,U,D,R)=>{j._enterCancelled=R,lo(j,U?c:s),lo(j,U?u:r),D&&D()},F=(j,U)=>{j._isLeaving=!1,lo(j,d),lo(j,g),lo(j,p),U&&U()},V=j=>(U,D)=>{const R=j?T:w,ae=()=>O(U,j,D);qo(R,[U,ae]),Hc(()=>{lo(U,j?l:i),wn(U,j?c:s),zc(R)||Uc(U,a,I,ae)})};return It(t,{onBeforeEnter(j){qo(b,[j]),wn(j,i),wn(j,r)},onBeforeAppear(j){qo(B,[j]),wn(j,l),wn(j,u)},onEnter:V(!1),onAppear:V(!0),onLeave(j,U){j._isLeaving=!0;const D=()=>F(j,U);wn(j,d),j._enterCancelled?(wn(j,p),Zs(j)):(Zs(j),wn(j,p)),Hc(()=>{j._isLeaving&&(lo(j,d),wn(j,g),zc(m)||Uc(j,a,C,D))}),qo(m,[j,D])},onEnterCancelled(j){O(j,!1,void 0,!0),qo(y,[j])},onAppearCancelled(j){O(j,!0,void 0,!0),qo(E,[j])},onLeaveCancelled(j){F(j),qo(x,[j])}})}function kv(e){if(e==null)return null;if(dt(e))return[is(e.enter),is(e.leave)];{const t=is(e);return[t,t]}}function is(e){return qh(e)}function wn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[wa]||(e[wa]=new Set)).add(t)}function lo(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[wa];n&&(n.delete(t),n.size||(e[wa]=void 0))}function Hc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xv=0;function Uc(e,t,n,a){const o=e._endId=++xv,i=()=>{o===e._endId&&a()};if(n!=null)return setTimeout(i,n);const{type:r,timeout:s,propCount:l}=dp(e,t);if(!r)return a();const u=r+"end";let c=0;const d=()=>{e.removeEventListener(u,p),i()},p=g=>{g.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(u,p)}function dp(e,t){const n=window.getComputedStyle(e),a=_=>(n[_]||"").split(", "),o=a(`${io}Delay`),i=a(`${io}Duration`),r=Wc(o,i),s=a(`${Ea}Delay`),l=a(`${Ea}Duration`),u=Wc(s,l);let c=null,d=0,p=0;t===io?r>0&&(c=io,d=r,p=i.length):t===Ea?u>0&&(c=Ea,d=u,p=l.length):(d=Math.max(r,u),c=d>0?r>u?io:Ea:null,p=c?c===io?i.length:l.length:0);const g=c===io&&/\b(?:transform|all)(?:,|$)/.test(a(`${io}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:g}}function Wc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>Jc(n)+Jc(e[a])))}function Jc(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Zs(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cv(e,t,n){const a=e[wa];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Gc=Symbol("_vod"),Qv=Symbol("_vsh"),Av=Symbol(""),Iv=/(?:^|;)\s*display\s*:/;function qv(e,t,n){const a=e.style,o=yt(n);let i=!1;if(n&&!o){if(t)if(yt(t))for(const r of t.split(";")){const s=r.slice(0,r.indexOf(":")).trim();n[s]==null&&Li(a,s,"")}else for(const r in t)n[r]==null&&Li(a,r,"");for(const r in n)r==="display"&&(i=!0),Li(a,r,n[r])}else if(o){if(t!==n){const r=a[Av];r&&(n+=";"+r),a.cssText=n,i=Iv.test(n)}}else t&&e.removeAttribute("style");Gc in e&&(e[Gc]=i?a.display:"",e[Qv]&&(a.display="none"))}const Yc=/\s*!important$/;function Li(e,t,n){if(Ne(n))n.forEach(a=>Li(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Tv(e,t);Yc.test(n)?e.setProperty(Vo(a),n.replace(Yc,""),"important"):e[a]=n}}const Kc=["Webkit","Moz","ms"],rs={};function Tv(e,t){const n=rs[t];if(n)return n;let a=Ht(t);if(a!=="filter"&&a in e)return rs[t]=a;a=yr(a);for(let o=0;o<Kc.length;o++){const i=Kc[o]+a;if(i in e)return rs[t]=i}return t}const Zc="http://www.w3.org/1999/xlink";function Xc(e,t,n,a,o,i=Ph(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Zc,t.slice(6,t.length)):e.setAttributeNS(Zc,t,n):n==null||i&&!Kd(n)?e.removeAttribute(t):e.setAttribute(t,i?"":on(n)?String(n):n)}function eu(e,t,n,a,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?sp(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(s!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Kd(n):n==null&&s==="string"?(n="",r=!0):s==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function ia(e,t,n,a){e.addEventListener(t,n,a)}function Lv(e,t,n,a){e.removeEventListener(t,n,a)}const tu=Symbol("_vei");function Ev(e,t,n,a,o=null){const i=e[tu]||(e[tu]={}),r=i[t];if(a&&r)r.value=a;else{const[s,l]=Dv(t);if(a){const u=i[t]=Mv(a,o);ia(e,s,u,l)}else r&&(Lv(e,s,r,l),i[t]=void 0)}}const nu=/(?:Once|Passive|Capture)$/;function Dv(e){let t;if(nu.test(e)){t={};let a;for(;a=e.match(nu);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vo(e.slice(2)),t]}let ss=0;const Bv=Promise.resolve(),Pv=()=>ss||(Bv.then(()=>ss=0),ss=Date.now());function Mv(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;_n(jv(a,n.value),t,5,[a])};return n.value=e,n.attached=Pv(),n}function jv(e,t){if(Ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>o=>!o._stopped&&a&&a(o))}else return t}const ou=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$v=(e,t,n,a,o,i)=>{const r=o==="svg";t==="class"?Cv(e,a,r):t==="style"?qv(e,n,a):gr(t)?vr(t)||Ev(e,t,n,a,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Rv(e,t,a,r))?(eu(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Xc(e,t,a,r,i,t!=="value")):e._isVueCE&&(Ov(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!yt(a)))?eu(e,Ht(t),a,i,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Xc(e,t,a,r))};function Rv(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&ou(t)&&Ye(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ou(t)&&yt(n)?!1:t in e}function Ov(e,t){const n=e._def.props;if(!n)return!1;const a=Ht(t);return Array.isArray(n)?n.some(o=>Ht(o)===a):Object.keys(n).some(o=>Ht(o)===a)}const fp=new WeakMap,pp=new WeakMap,Yi=Symbol("_moveCb"),au=Symbol("_enterCb"),Fv=e=>(delete e.props.mode,e),Vv=Fv({name:"TransitionGroup",props:It({},cp,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Je(),a=qf();let o,i;return qr(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!Uv(o[0].el,n.vnode.el,r)){o=[];return}o.forEach(Nv),o.forEach(zv);const s=o.filter(Hv);Zs(n.vnode.el),s.forEach(l=>{const u=l.el,c=u.style;wn(u,r),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[Yi]=p=>{p&&p.target!==u||(!p||p.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[Yi]=null,lo(u,r))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const r=Ze(e),s=up(r);let l=r.tag||Ve;if(o=[],i)for(let u=0;u<i.length;u++){const c=i[u];c.el&&c.el instanceof Element&&(o.push(c),_o(c,ni(c,s,a,n)),fp.set(c,hp(c.el)))}i=t.default?Cl(t.default()):[];for(let u=0;u<i.length;u++){const c=i[u];c.key!=null&&_o(c,ni(c,s,a,n))}return f(l,null,i)}}}),mp=Vv;function Nv(e){const t=e.el;t[Yi]&&t[Yi](),t[au]&&t[au]()}function zv(e){pp.set(e,hp(e.el))}function Hv(e){const t=fp.get(e),n=pp.get(e),a=t.left-n.left,o=t.top-n.top;if(a||o){const i=e.el,r=i.style,s=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=s.width/i.offsetWidth),i.offsetHeight&&(u=s.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),r.transform=r.webkitTransform=`translate(${a/l}px,${o/u}px)`,r.transitionDuration="0s",e}}function hp(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Uv(e,t,n){const a=e.cloneNode(),o=e[wa];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&a.classList.remove(l))}),n.split(/\s+/).forEach(s=>s&&a.classList.add(s)),a.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(a);const{hasTransform:r}=dp(a);return i.removeChild(a),r}const iu=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Ne(t)?n=>da(t,n):t};function Wv(e){e.target.composing=!0}function ru(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ls=Symbol("_assign");function su(e,t,n){return t&&(e=e.trim()),n&&(e=hl(e)),e}const Jv={created(e,{modifiers:{lazy:t,trim:n,number:a}},o){e[ls]=iu(o);const i=a||o.props&&o.props.type==="number";ia(e,t?"change":"input",r=>{r.target.composing||e[ls](su(e.value,n,i))}),(n||i)&&ia(e,"change",()=>{e.value=su(e.value,n,i)}),t||(ia(e,"compositionstart",Wv),ia(e,"compositionend",ru),ia(e,"change",ru))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:o,number:i}},r){if(e[ls]=iu(r),e.composing)return;const s=(i||e.type==="number")&&!/^0\d/.test(e.value)?hl(e.value):e.value,l=t??"";if(s===l)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(a&&t===n||o&&e.value.trim()===l)||(e.value=l)}},Gv=It({patchProp:$v},wv);let lu;function Yv(){return lu||(lu=nv(Gv))}const gp=(...e)=>{const t=Yv().createApp(...e),{mount:n}=t;return t.mount=a=>{const o=Zv(a);if(!o)return;const i=t._component;!Ye(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,Kv(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Kv(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zv(e){return yt(e)?document.querySelector(e):e}function Aa(e,t,n,a){return Object.defineProperty(e,t,{get:n,set:a,enumerable:!0}),e}const Xn=ge(!1);let Xs;function Xv(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function eb(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const vp="ontouchstart"in window||window.navigator.maxTouchPoints>0;function tb(e){const t=e.toLowerCase(),n=eb(t),a=Xv(t,n),o={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};a.browser&&(o[a.browser]=!0,o.version=a.version,o.versionNumber=parseInt(a.version,10)),a.platform&&(o[a.platform]=!0);const i=o.android||o.ios||o.bb||o.blackberry||o.ipad||o.iphone||o.ipod||o.kindle||o.playbook||o.silk||o["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?o.mobile=!0:o.desktop=!0,o["windows phone"]&&(o.winphone=!0,delete o["windows phone"]),o.edga||o.edgios||o.edg?(o.edge=!0,a.browser="edge"):o.crios?(o.chrome=!0,a.browser="chrome"):o.fxios&&(o.firefox=!0,a.browser="firefox"),(o.ipod||o.ipad||o.iphone)&&(o.ios=!0),o.vivaldi&&(a.browser="vivaldi",o.vivaldi=!0),(o.chrome||o.opr||o.safari||o.vivaldi||o.mobile===!0&&o.ios!==!0&&i!==!0)&&(o.webkit=!0),o.opr&&(a.browser="opera",o.opera=!0),o.safari&&(o.blackberry||o.bb?(a.browser="blackberry",o.blackberry=!0):o.playbook?(a.browser="playbook",o.playbook=!0):o.android?(a.browser="android",o.android=!0):o.kindle?(a.browser="kindle",o.kindle=!0):o.silk&&(a.browser="silk",o.silk=!0)),o.name=a.browser,o.platform=a.platform,t.indexOf("electron")!==-1)o.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)o.bex=!0;else{if(window.Capacitor!==void 0?(o.capacitor=!0,o.nativeMobile=!0,o.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(o.cordova=!0,o.nativeMobile=!0,o.nativeMobileWrapper="cordova"),Xn.value===!0&&(Xs={is:{...o}}),vp===!0&&o.mac===!0&&(o.desktop===!0&&o.safari===!0||o.nativeMobile===!0&&o.android!==!0&&o.ios!==!0&&o.ipad!==!0)){delete o.mac,delete o.desktop;const r=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(o,{mobile:!0,ios:!0,platform:r,[r]:!0})}o.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete o.desktop,o.mobile=!0)}return o}const cu=navigator.userAgent||navigator.vendor||window.opera,nb={has:{touch:!1,webStorage:!1},within:{iframe:!1}},st={userAgent:cu,is:tb(cu),has:{touch:vp},within:{iframe:window.self!==window.top}},Ki={install(e){const{$q:t}=e;Xn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,st),Xn.value=!1}),t.platform=No(this)):t.platform=this}};{let e;Aa(st.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(Ki,st),Xn.value===!0&&(Object.assign(Ki,Xs,nb),Xs=null)}function Fe(e){return Ca(Bf(e))}function Dr(e){return Ca(e)}const Br=(e,t)=>{const n=No(e);for(const a in e)Aa(t,a,()=>n[a],o=>{n[a]=o});return t},Tt={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(Tt,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Yt(){}function bp(e){return e.button===0}function eo(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function ob(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function Jt(e){e.stopPropagation()}function Nt(e){e.cancelable!==!1&&e.preventDefault()}function rt(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function pa(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?a=>{a.__dragPrevented=!0,a.addEventListener("dragstart",Nt,Tt.notPassiveCapture)}:a=>{delete a.__dragPrevented,a.removeEventListener("dragstart",Nt,Tt.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function tn(e,t,n){const a=`__q_${t}_evt`;e[a]=e[a]!==void 0?e[a].concat(n):n,n.forEach(o=>{o[0].addEventListener(o[1],e[o[2]],Tt[o[3]])})}function Bn(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(a=>{a[0].removeEventListener(a[1],e[a[2]],Tt[a[3]])}),e[n]=void 0)}function Dl(e,t=250,n){let a=null;function o(){const i=arguments,r=()=>{a=null,e.apply(this,i)};a!==null&&clearTimeout(a),a=setTimeout(r,t)}return o.cancel=()=>{a!==null&&clearTimeout(a)},o}const cs=["sm","md","lg","xl"],{passive:uu}=Tt,ab=Br({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Yt,setDebounce:Yt,install({$q:e,onSSRHydrated:t}){var d;if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,a=n||window,o=document.scrollingElement||document.documentElement,i=n===void 0||st.is.mobile===!0?()=>[Math.max(window.innerWidth,o.clientWidth),Math.max(window.innerHeight,o.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-o.clientWidth,n.height*n.scale+window.innerHeight-o.clientHeight],r=((d=e.config.screen)==null?void 0:d.bodyClasses)===!0;this.__update=p=>{const[g,_]=i();if(_!==this.height&&(this.height=_),g!==this.width)this.width=g;else if(p!==!0)return;let I=this.sizes;this.gt.xs=g>=I.sm,this.gt.sm=g>=I.md,this.gt.md=g>=I.lg,this.gt.lg=g>=I.xl,this.lt.sm=g<I.sm,this.lt.md=g<I.md,this.lt.lg=g<I.lg,this.lt.xl=g<I.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,I=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",I!==this.name&&(r===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${I}`)),this.name=I)};let s,l={},u=16;this.setSizes=p=>{cs.forEach(g=>{p[g]!==void 0&&(l[g]=p[g])})},this.setDebounce=p=>{u=p};const c=()=>{const p=getComputedStyle(document.body);p.getPropertyValue("--q-size-sm")&&cs.forEach(g=>{this.sizes[g]=parseInt(p.getPropertyValue(`--q-size-${g}`),10)}),this.setSizes=g=>{cs.forEach(_=>{g[_]&&(this.sizes[_]=g[_])}),this.__update(!0)},this.setDebounce=g=>{s!==void 0&&a.removeEventListener("resize",s,uu),s=g>0?Dl(this.__update,g):this.__update,a.addEventListener("resize",s,uu)},this.setDebounce(u),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),r===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Xn.value===!0?t.push(c):c()}}),At=Br({isActive:!1,mode:!1},{__media:void 0,set(e){At.mode=e,e==="auto"?(At.__media===void 0&&(At.__media=window.matchMedia("(prefers-color-scheme: dark)"),At.__updateMedia=()=>{At.set("auto")},At.__media.addListener(At.__updateMedia)),e=At.__media.matches):At.__media!==void 0&&(At.__media.removeListener(At.__updateMedia),At.__media=void 0),At.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){At.set(At.isActive===!1)},install({$q:e,ssrContext:t}){const n=e.config.dark;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function ib(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let _p=!1;function rb(e){_p=e.isComposing===!0}function Pr(e){return _p===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Mn(e,t){return Pr(e)===!0?!1:[].concat(t).includes(e.keyCode)}function yp(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function sb({is:e,has:t,within:n},a){const o=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=yp(e);i!==void 0&&o.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;o.push(i),o.push("native-mobile"),e.ios===!0&&(a[i]===void 0||a[i].iosStatusBarPadding!==!1)&&o.push("q-ios-padding")}else e.electron===!0?o.push("electron"):e.bex===!0&&o.push("bex");return n.iframe===!0&&o.push("within-iframe"),o}function lb(){const{is:e}=st,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const o=yp(e);o!==void 0&&n.add(`platform-${o}`)}}st.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),st.within.iframe===!0&&n.add("within-iframe");const a=Array.from(n).join(" ");t!==a&&(document.body.className=a)}function cb(e){for(const t in e)ib(t,e[t])}const ub={install(e){if(this.__installed!==!0){if(Xn.value===!0)lb();else{const{$q:t}=e;t.config.brand!==void 0&&cb(t.config.brand);const n=sb(st,t.config);document.body.classList.add.apply(document.body.classList,n)}st.is.ios===!0&&document.body.addEventListener("touchstart",Yt),window.addEventListener("keydown",rb,!0)}}},wp=()=>!0;function db(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function fb(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function pb(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return wp;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(db).map(fb)),()=>t.includes(window.location.hash)}const el={__history:[],add:Yt,remove:Yt,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=st.is;if(t!==!0&&n!==!0)return;const a=e.config[t===!0?"cordova":"capacitor"];if((a==null?void 0:a.backButton)===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=r=>{r.condition===void 0&&(r.condition=wp),this.__history.push(r)},this.remove=r=>{const s=this.__history.indexOf(r);s>=0&&this.__history.splice(s,1)};const o=pb(Object.assign({backButtonExit:!0},a)),i=()=>{if(this.__history.length){const r=this.__history[this.__history.length-1];r.condition()===!0&&(this.__history.pop(),r.handler())}else o()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},tl={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function du(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const In=Br({__qLang:{}},{getLocale:du,set(e=tl,t){const n={...e,rtl:e.rtl===!0,getLocale:du};{if(n.set=In.set,In.__langConfig===void 0||In.__langConfig.noHtmlAttrs!==!0){const a=document.documentElement;a.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),a.setAttribute("lang",n.isoName)}Object.assign(In.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=In.__qLang,In.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(a){return Reflect.ownKeys(a).filter(o=>o!=="set"&&o!=="getLocale")}}),this.set(t||tl))}}),mb={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Zi=Br({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Zi.set,Object.assign(Zi.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Aa(e,"iconMapFn",()=>this.iconMapFn,a=>{this.iconMapFn=a}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(a){return Reflect.ownKeys(a).filter(o=>o!=="set")}}),this.set(t||mb))}}),Sp="_q_",hb="_q_fo_",kp="_q_tabs_";function us(){}const Xi={};let xp=!1;function gb(){xp=!0}function ho(e,t){if(e===t)return!0;if(e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,a;if(e.constructor===Array){if(n=e.length,n!==t.length)return!1;for(a=n;a--!==0;)if(ho(e[a],t[a])!==!0)return!1;return!0}if(e.constructor===Map){if(e.size!==t.size)return!1;let i=e.entries();for(a=i.next();a.done!==!0;){if(t.has(a.value[0])!==!0)return!1;a=i.next()}for(i=e.entries(),a=i.next();a.done!==!0;){if(ho(a.value[1],t.get(a.value[0]))!==!0)return!1;a=i.next()}return!0}if(e.constructor===Set){if(e.size!==t.size)return!1;const i=e.entries();for(a=i.next();a.done!==!0;){if(t.has(a.value[0])!==!0)return!1;a=i.next()}return!0}if(e.buffer!=null&&e.buffer.constructor===ArrayBuffer){if(n=e.length,n!==t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const o=Object.keys(e).filter(i=>e[i]!==void 0);if(n=o.length,n!==Object.keys(t).filter(i=>t[i]!==void 0).length)return!1;for(a=n;a--!==0;){const i=o[a];if(ho(e[i],t[i])!==!0)return!1}return!0}return e!==e&&t!==t}function zt(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}function vb(e){return Object.prototype.toString.call(e)==="[object Date]"}function bb(e){return Object.prototype.toString.call(e)==="[object RegExp]"}function _b(e){return typeof e=="number"&&isFinite(e)}const fu=[Ki,ub,At,ab,el,In,Zi];function yb(e,t){const n=gp(e);n.config.globalProperties=t.config.globalProperties;const{reload:a,...o}=t._context;return Object.assign(n._context,o),n}function pu(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function wb(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(Sp,n.$q),pu(n,fu),t.components!==void 0&&Object.values(t.components).forEach(a=>{zt(a)===!0&&a.name!==void 0&&e.component(a.name,a)}),t.directives!==void 0&&Object.values(t.directives).forEach(a=>{zt(a)===!0&&a.name!==void 0&&e.directive(a.name,a)}),t.plugins!==void 0&&pu(n,Object.values(t.plugins).filter(a=>typeof a.install=="function"&&fu.includes(a)===!1)),Xn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(a=>{a()}),n.$q.onSSRHydrated=()=>{}})}const Sb=function(t,n={}){const a={version:"2.19.3"};xp===!1?(n.config!==void 0&&Object.assign(Xi,n.config),a.config={...Xi},gb()):a.config=n.config||{},wb(t,n,{parentApp:t,$q:a,lang:n.lang,iconSet:n.iconSet,onSSRHydrated:[]})},Cp={name:"Quasar",version:"2.19.3",install:Sb,lang:In,iconSet:Zi},nl={xs:18,sm:24,md:32,lg:38,xl:46},wo={size:String};function So(e,t=nl){return Q(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function mt(e,t){return e!==void 0&&e()||t}function kb(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function dn(e,t){return e!==void 0?t.concat(e()):t}function Bl(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function Pl(e,t,n,a,o,i){t.key=a+o;const r=L(e,t,n);return o===!0?we(r,i()):r}const mu="0 0 24 24",ds=e=>e,fs=e=>`ionicons ${e}`,Qp={"mdi-":e=>`mdi ${e}`,"icon-":ds,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":fs,"ion-ios":fs,"ion-logo":fs,"iconfont ":ds,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":ds},Ap={o_:"-outlined",r_:"-round",s_:"-sharp"},Ip={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},xb=new RegExp("^("+Object.keys(Qp).join("|")+")"),Cb=new RegExp("^("+Object.keys(Ap).join("|")+")"),hu=new RegExp("^("+Object.keys(Ip).join("|")+")"),Qb=/^[Mm]\s?[-+]?\.?\d/,Ab=/^img:/,Ib=/^svguse:/,qb=/^ion-/,Tb=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,nt=Fe({name:"QIcon",props:{...wo,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Je(),a=So(e),o=Q(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=Q(()=>{let r,s=e.name;if(s==="none"||!s)return{none:!0};if(n.iconMapFn!==null){const c=n.iconMapFn(s);if(c!==void 0)if(c.icon!==void 0){if(s=c.icon,s==="none"||!s)return{none:!0}}else return{cls:c.cls,content:c.content!==void 0?c.content:" "}}if(Qb.test(s)===!0){const[c,d=mu]=s.split("|");return{svg:!0,viewBox:d,nodes:c.split("&&").map(p=>{const[g,_,I]=p.split("@@");return L("path",{style:_,d:g,transform:I})})}}if(Ab.test(s)===!0)return{img:!0,src:s.substring(4)};if(Ib.test(s)===!0){const[c,d=mu]=s.split("|");return{svguse:!0,src:c.substring(7),viewBox:d}}let l=" ";const u=s.match(xb);if(u!==null)r=Qp[u[1]](s);else if(Tb.test(s)===!0)r=s;else if(qb.test(s)===!0)r=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${s.substring(3)}`;else if(hu.test(s)===!0){r="notranslate material-symbols";const c=s.match(hu);c!==null&&(s=s.substring(6),r+=Ip[c[1]]),l=s}else{r="notranslate material-icons";const c=s.match(Cb);c!==null&&(s=s.substring(2),r+=Ap[c[1]]),l=s}return{cls:r,content:l}});return()=>{const r={class:o.value,style:a.value,"aria-hidden":"true"};return i.value.none===!0?L(e.tag,r,mt(t.default)):i.value.img===!0?L(e.tag,r,dn(t.default,[L("img",{src:i.value.src})])):i.value.svg===!0?L(e.tag,r,dn(t.default,[L("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?L(e.tag,r,dn(t.default,[L("svg",{viewBox:i.value.viewBox},[L("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(r.class+=" "+i.value.cls),L(e.tag,r,dn(t.default,[i.value.content])))}}}),ze=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n},Lb={name:"JPanel",components:{QIcon:nt},props:{title:{type:String,default:null},icon:{type:String,default:null},iconColor:{type:String,default:"var(--q-primary)"},footerText:{type:String,default:null},square:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1},accent:{type:[Boolean,String],default:!1}}},Eb={class:"jPanel_header"},Db={key:0,class:"jPanel_title q-pa-md non-selectable"},Bb={key:1,class:"jPanel_headerSlot"},Pb={key:2,class:"jPanel_headerAction q-pa-md"},Mb={key:1,class:"jPanel_scroll"},jb={key:2,class:"jPanel_content"},$b={key:3,class:"jPanel_footer q-px-md q-py-xs"},Rb={key:0,class:"jPanel_footerText"};function Ob(e,t,n,a,o,i){const r=X("QIcon");return M(),ee("div",{class:ft(["jPanel",{jPanel_square:n.square,fullscreen:n.fullscreen,varmoryBackgroundAccent:n.accent===!0,jPanel_accentedHeader:n.accent=="header"}])},[v("div",{class:ft({varmoryBackgroundAccentContainer:n.accent===!0})},[n.title||e.$slots.title||n.icon||e.$slots.header||e.$slots["header-action"]?(M(),ee("div",{key:0,class:ft({varmoryBackgroundAccent:n.accent==="header"})},[v("div",{class:ft({varmoryBackgroundAccentContainer:n.accent==="header"})},[v("div",Eb,[n.title||n.icon||e.$slots.title?(M(),ee("div",Db,[n.icon?(M(),_e(r,{key:0,name:n.icon,size:"14px",class:"jPanel_icon",style:Dn({color:n.iconColor})},null,8,["name","style"])):Ge("",!0),Dt(e.$slots,"title",{},()=>[v("span",null,xe(n.title),1)])])):Ge("",!0),e.$slots.header?(M(),ee("div",Bb,[Dt(e.$slots,"header",{},void 0)])):Ge("",!0),e.$slots["header-action"]?(M(),ee("div",Pb,[Dt(e.$slots,"header-action",{},void 0)])):Ge("",!0)])],2)],2)):Ge("",!0),n.scroll?(M(),ee("div",Mb,[Dt(e.$slots,"default",{},void 0)])):(M(),ee("div",jb,[Dt(e.$slots,"default",{},void 0)])),e.$slots.footer||n.footerText?(M(),ee("div",$b,[n.footerText?(M(),ee("span",Rb,xe(n.footerText),1)):Ge("",!0),Dt(e.$slots,"footer",{},void 0)])):Ge("",!0)],2)],2)}const no=ze(Lb,[["render",Ob],["__scopeId","data-v-ea84a222"]]),$o=[];function qp(e){$o[$o.length-1](e)}function Ml(e){st.is.desktop===!0&&($o.push(e),$o.length===1&&document.body.addEventListener("focusin",qp))}function er(e){const t=$o.indexOf(e);t!==-1&&($o.splice(t,1),$o.length===0&&document.body.removeEventListener("focusin",qp))}function Fb(e){const t=document.createElement("textarea");t.value=e,t.contentEditable="true",t.style.position="fixed";const n=()=>{};Ml(n),document.body.appendChild(t),t.focus(),t.select();const a=document.execCommand("copy");return t.remove(),er(n),a}function Tp(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((t,n)=>{const a=Fb(e);a?t(!0):n(a)})}const Ut={size:{type:[String,Number],default:"1em"},color:String};function Wt(e){return{cSize:Q(()=>e.size in nl?`${nl[e.size]}px`:e.size),classes:Q(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Vb='<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>',Lp=Fe({name:"QSpinnerOrbit",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:Vb})}}),Nb={name:"ApiDocSection",components:{QIcon:nt,QSpinnerOrbit:Lp},inject:["__apiDoc","showcaseCopy"],props:{group:{type:String,default:null},hideImport:{type:Boolean,default:!1}},computed:{doc(){return this.__apiDoc},propsList(){return this.group?this.doc.propsList.filter(e=>e.group===this.group):this.doc.propsList},slotsList(){return this.group?this.doc.slotsList.filter(e=>e.group===this.group):this.doc.slotsList},eventsList(){return this.group?this.doc.eventsList.filter(e=>e.group===this.group):this.doc.eventsList},importNames(){const e=this.doc.importName;return Array.isArray(e)?e:[e]},importLine(){return this.importNames.map(e=>`import { ${e} } from '${this.doc.importFrom}';`).join(`
`)},hasGroups(){const e=[...this.propsList,...this.slotsList,...this.eventsList];return new Set(e.map(n=>n.group).filter(Boolean)).size>1}},methods:{copy(e){this.showcaseCopy(e)}}},zb={class:"apiDoc"},Hb={key:0,class:"apiDocLoading"},Ub={key:0,class:"apiDocImport"},Wb=["onClick"],Jb={class:"apiDocImportString"},Gb={key:1,class:"apiDocSection"},Yb={class:"apiDocSectionHeader"},Kb={class:"apiDocTable"},Zb=["onClick"],Xb={class:"apiDocRow"},e_=["onClick"],t_={class:"apiDocPropType"},n_={class:"apiDocPropDesc"},o_={key:0,class:"apiDocPropDefault"},a_={key:2,class:"apiDocSection"},i_={class:"apiDocSectionHeader"},r_={class:"apiDocTable"},s_=["onClick"],l_={class:"apiDocRow"},c_=["onClick"],u_={class:"apiDocPropDesc"},d_={key:3,class:"apiDocSection"},f_={class:"apiDocSectionHeader"},p_={class:"apiDocTable"},m_=["onClick"],h_={class:"apiDocRow"},g_=["onClick"],v_={class:"apiDocPropDesc"},b_={key:2,class:"apiDocError"};function __(e,t,n,a,o,i){const r=X("QSpinnerOrbit"),s=X("QIcon");return M(),ee("div",zb,[i.doc.loading?(M(),ee("div",Hb,[f(r,{size:"24px",color:"accent"}),t[0]||(t[0]=v("span",null,"Loading API…",-1))])):i.doc.apiData||i.doc.importName&&i.doc.importFrom?(M(),ee(Ve,{key:1},[!n.hideImport&&i.doc.importName&&i.doc.importFrom?(M(),ee("div",Ub,[(M(!0),ee(Ve,null,ut(i.importNames,l=>(M(),ee("code",{key:l,class:"apiDocCopyable",onClick:u=>{i.copy(`import { ${l} } from '${i.doc.importFrom}';`)}},[t[1]||(t[1]=v("span",{class:"apiDocImportKeyword"},"import",-1)),K(" { "+xe(l)+" } ",1),t[2]||(t[2]=v("span",{class:"apiDocImportKeyword"},"from",-1)),t[3]||(t[3]=K()),v("span",Jb,"'"+xe(i.doc.importFrom)+"'",1),t[4]||(t[4]=K(";",-1)),t[5]||(t[5]=v("br",null,null,-1))],8,Wb))),128))])):Ge("",!0),i.propsList.length?(M(),ee("div",Gb,[v("div",Yb,[f(s,{name:"tune",size:"16px"}),t[6]||(t[6]=v("span",null,"PROPS",-1))]),v("div",Kb,[(M(!0),ee(Ve,null,ut(i.propsList,(l,u)=>(M(),ee(Ve,{key:l.group+"/"+l.name},[i.hasGroups&&l.group&&(u===0||i.propsList[u-1].group!==l.group)?(M(),ee("div",{key:0,class:"apiDocGroupLabel apiDocCopyable",onClick:c=>i.copy("<"+l.group+">")},xe(l.group),9,Zb)):Ge("",!0),v("div",Xb,[v("div",{class:"apiDocPropName apiDocCopyable",onClick:c=>i.copy(l.name)},xe(l.name),9,e_),v("div",t_,xe(l.typeLabel),1),v("div",n_,xe(l.desc),1),l.default!==void 0?(M(),ee("div",o_,[t[7]||(t[7]=K(" default: ",-1)),v("code",null,xe(l.default),1)])):Ge("",!0)])],64))),128))])])):Ge("",!0),i.slotsList.length?(M(),ee("div",a_,[v("div",i_,[f(s,{name:"inventory_2",size:"16px"}),t[8]||(t[8]=v("span",null,"SLOTS",-1))]),v("div",r_,[(M(!0),ee(Ve,null,ut(i.slotsList,(l,u)=>(M(),ee(Ve,{key:l.group+"/"+l.name},[i.hasGroups&&l.group&&(u===0||i.slotsList[u-1].group!==l.group)?(M(),ee("div",{key:0,class:"apiDocGroupLabel apiDocCopyable",onClick:c=>i.copy("<"+l.group+">")},xe(l.group),9,s_)):Ge("",!0),v("div",l_,[v("div",{class:"apiDocPropName apiDocCopyable",onClick:c=>i.copy("#"+l.name)},"#"+xe(l.name),9,c_),v("div",u_,xe(l.desc),1)])],64))),128))])])):Ge("",!0),i.eventsList.length?(M(),ee("div",d_,[v("div",f_,[f(s,{name:"electric_bolt",size:"16px"}),t[9]||(t[9]=v("span",null,"EVENTS",-1))]),v("div",p_,[(M(!0),ee(Ve,null,ut(i.eventsList,(l,u)=>(M(),ee(Ve,{key:l.group+"/"+l.name},[i.hasGroups&&l.group&&(u===0||i.eventsList[u-1].group!==l.group)?(M(),ee("div",{key:0,class:"apiDocGroupLabel apiDocCopyable",onClick:c=>i.copy("<"+l.group+">")},xe(l.group),9,m_)):Ge("",!0),v("div",h_,[v("div",{class:"apiDocPropName apiDocCopyable",onClick:c=>i.copy("@"+l.name)},"@"+xe(l.name),9,g_),v("div",v_,xe(l.desc),1)])],64))),128))])])):Ge("",!0)],64)):i.doc.error?(M(),ee("div",b_,[f(s,{name:"error_outline",size:"14px"}),v("span",null,xe(i.doc.error),1)])):Ge("",!0)])}const Ep=ze(Nb,[["render",__],["__scopeId","data-v-8f8b14ce"]]),y_={components:{ApiDocSection:Ep},provide(){return{__apiDoc:Q(()=>({loading:this.apiLoading,error:this.apiError,apiData:this.apiData,groups:this.apiGroups,docsUrl:this.apiDocsUrl,propsList:this.apiPropsList,slotsList:this.apiSlotsList,eventsList:this.apiEventsList,importName:this.apiImportName,importFrom:this.apiImportFrom}))}},data(){return{apiUrl:this.$options.apiUrl||null,apiJson:this.$options.apiJson||null,apiFetchedData:null,apiLoading:!1,apiError:null,apiImportName:null,apiImportFrom:null}},computed:{apiData(){return this.apiJson||this.apiFetchedData},apiGroups(){const e=this.apiData;return e?Array.isArray(e)?e.map(t=>({name:t.name||null,data:t.json||t})):[{name:null,data:e}]:[]},apiTagName(){for(const e of this.apiGroups)if(e.name)return e.name;return this.apiDocsUrl?"Q"+(this.apiDocsUrl.split("/").pop()||"").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):null},apiDocsUrl(){var e,t;for(const n of this.apiGroups){const a=(t=(e=n.data)==null?void 0:e.meta)==null?void 0:t.docsUrl;if(a)return a}return null},apiPropsList(){return this.apiGroups.flatMap(e=>{var n;const t=(n=e.data)==null?void 0:n.props;return t?Object.entries(t).map(([a,o])=>({name:a,group:e.name,typeLabel:Array.isArray(o.type)?o.type.join(" | "):o.type||"—",desc:o.desc||"",default:o.default})):[]})},apiSlotsList(){return this.apiGroups.flatMap(e=>{var n;const t=(n=e.data)==null?void 0:n.slots;return t?Object.entries(t).map(([a,o])=>({name:a,group:e.name,desc:o.desc||""})):[]})},apiEventsList(){return this.apiGroups.flatMap(e=>{var n;const t=(n=e.data)==null?void 0:n.events;return t?Object.entries(t).map(([a,o])=>({name:a,group:e.name,desc:o.desc||""})):[]})}},watch:{apiUrl:{immediate:!0,handler(e){e&&this.apiFetch(e)}}},methods:{async apiFetch(e){this.apiLoading=!0,this.apiError=null;try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);this.apiFetchedData=await t.json()}catch(t){this.apiError=`Failed to load API: ${t.message}`}finally{this.apiLoading=!1}}}},w_={name:"ShowcaseNav",components:{JPanel:no,QIcon:nt},props:{activeTab:{type:String,required:!0},selectedName:{type:String,default:null},categories:{type:Object,required:!0},docPages:{type:Array,default:()=>[]},activeDoc:{type:String,default:null}},emits:["select","select-doc"],data(){const e={};for(const t of Object.keys(this.categories))e[t]=t===this.activeTab;return{query:"",expandedCats:e,docsExpanded:this.activeDoc&&this.activeDoc!=="README"}},computed:{subDocPages(){return this.docPages.filter(e=>e!=="README")},categoryIcons(){const e={};for(const[t,n]of Object.entries(this.categories)){const a={};let o={};for(const l of n){const u=l.icon;if(!u)continue;a[u]=(a[u]||0)+1;const c=l.order??999;(!(u in o)||c<o[u])&&(o[u]=c)}let i=null,r=0,s=1/0;for(const[l,u]of Object.entries(a))(u>r||u===r&&o[l]<s)&&(i=l,r=u,s=o[l]);e[t]=i||"folder"}return e},tabs(){return Object.keys(this.categories)},searchIndex(){var t;const e=[];for(const[n,a]of Object.entries(this.categories))for(const o of a)(t=o.component)==null||t.apiJson,e.push({category:n,name:o.name,label:o.label,searchable:(n+" "+o.name+" "+o.label+" "+(o.code||"")+"").toLowerCase()});return e},searchResults(){const e=this.query.trim().toLowerCase();if(!e)return[];const t=e.split(/\s+/);return this.searchIndex.filter(n=>t.every(a=>n.searchable.includes(a)))}},methods:{categoryItems(e){return this.categories[e]||[]},slideEnter(e){e.style.overflow="hidden",e.style.height="0",e.offsetHeight,e.style.transition="height 0.25s ease",e.style.height=e.scrollHeight+"px"},slideAfterEnter(e){e.style.height="",e.style.overflow="",e.style.transition=""},slideLeave(e){e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.offsetHeight,e.style.transition="height 0.25s ease",e.style.height="0"},slideAfterLeave(e){e.style.height="",e.style.overflow="",e.style.transition=""},toggleDocs(){this.subDocPages.length&&(this.docsExpanded=!this.docsExpanded),this.$emit("select-doc","README")},toggleCategory(e){const t=!this.expandedCats[e];this.expandedCats[e]=t,t&&(clearTimeout(this._collapseTimer),this._collapseTimer=setTimeout(()=>{for(const a in this.expandedCats)a!==e&&(this.expandedCats[a]=!1)},500));const n=this.categoryItems(e);n.length&&this.$emit("select",{category:e,name:n[0].name})}},watch:{activeTab(e){this.expandedCats[e]||(this.expandedCats[e]=!0)},categories(e){for(const t of Object.keys(e))t in this.expandedCats||(this.expandedCats[t]=!1)},activeDoc(e){e&&e!=="README"&&(this.docsExpanded=!0)}}},S_={class:"showcaseNav_col"},k_={class:"showcaseNav_search"},x_={key:0,class:"showcaseNav_list showcaseNav_docs"},C_={key:0,class:"showcaseNav_children"},Q_=["onClick"],A_={key:1,class:"showcaseNav_list"},I_=["onClick"],q_={class:"showcaseNav_result"},T_={class:"showcaseNav_resultCat"},L_={key:0,class:"showcaseNav_empty"},E_={key:2,class:"showcaseNav_list"},D_=["onClick"],B_={class:"showcaseNav_count"},P_={key:0,class:"showcaseNav_children"},M_=["onClick"];function j_(e,t,n,a,o,i){const r=X("QIcon"),s=X("JPanel");return M(),ee("div",S_,[f(s,{title:"COMPONENTS",icon:"widgets","icon-color":"var(--q-secondary)"},{default:S(()=>[v("div",k_,[f(r,{name:"search",size:"20px",class:"showcaseNav_searchIcon"}),we(v("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.query=l),class:"showcaseNav_searchInput",placeholder:"Search components…",spellcheck:"false"},null,512),[[Jv,o.query]]),o.query?(M(),_e(r,{key:0,name:"close",size:"20px",class:"showcaseNav_searchClear",onClick:t[1]||(t[1]=l=>o.query="")})):Ge("",!0)]),n.docPages&&n.docPages.length?(M(),ee("div",x_,[v("div",{class:ft(["showcaseNav_categoryHeader",{expanded:o.docsExpanded||n.activeDoc}]),onClick:t[2]||(t[2]=(...l)=>i.toggleDocs&&i.toggleDocs(...l))},[f(r,{name:"menu_book",size:"18px"}),t[3]||(t[3]=v("span",null,"Readme",-1)),t[4]||(t[4]=v("span",{class:"showcaseNav_spacer"},null,-1)),i.subDocPages.length?(M(),_e(r,{key:0,name:"expand_more",size:"16px",class:ft(["showcaseNav_chevron",{rotated:o.docsExpanded}])},null,8,["class"])):Ge("",!0)],2),f(Lt,{onEnter:i.slideEnter,onAfterEnter:i.slideAfterEnter,onLeave:i.slideLeave,onAfterLeave:i.slideAfterLeave},{default:S(()=>[o.docsExpanded&&i.subDocPages.length?(M(),ee("div",C_,[(M(!0),ee(Ve,null,ut(i.subDocPages,l=>(M(),ee("div",{key:"doc-"+l,class:ft(["showcaseNav_item showcaseNav_child",{active:n.activeDoc===l}]),onClick:u=>e.$emit("select-doc",l)},[v("span",null,xe(l),1)],10,Q_))),128))])):Ge("",!0)]),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])])):Ge("",!0),o.query?(M(),ee("div",A_,[(M(!0),ee(Ve,null,ut(i.searchResults,l=>(M(),ee("div",{key:l.category+"/"+l.name,class:ft(["showcaseNav_item",{active:n.activeTab===l.category&&n.selectedName===l.name}]),onClick:u=>e.$emit("select",{category:l.category,name:l.name})},[f(r,{name:i.categoryIcons[l.category]||"folder",size:"18px"},null,8,["name"]),v("div",q_,[v("span",null,xe(l.label),1),v("span",T_,xe(l.category),1)])],10,I_))),128)),i.searchResults.length?Ge("",!0):(M(),ee("div",L_," No results "))])):(M(),ee("div",E_,[(M(!0),ee(Ve,null,ut(i.tabs,l=>(M(),ee("div",{key:l,class:"showcaseNav_category"},[v("div",{class:ft(["showcaseNav_categoryHeader",{expanded:o.expandedCats[l]}]),onClick:u=>i.toggleCategory(l)},[f(r,{name:i.categoryIcons[l]||"folder",size:"18px"},null,8,["name"]),v("span",null,xe(l),1),v("span",B_,xe(i.categoryItems(l).length),1),f(r,{name:"expand_more",size:"16px",class:ft(["showcaseNav_chevron",{rotated:o.expandedCats[l]}])},null,8,["class"])],10,D_),f(Lt,{onEnter:i.slideEnter,onAfterEnter:i.slideAfterEnter,onLeave:i.slideLeave,onAfterLeave:i.slideAfterLeave},{default:S(()=>[o.expandedCats[l]?(M(),ee("div",P_,[(M(!0),ee(Ve,null,ut(i.categoryItems(l),u=>(M(),ee("div",{key:u.name,class:ft(["showcaseNav_item showcaseNav_child",{active:n.activeTab===l&&n.selectedName===u.name}]),onClick:c=>e.$emit("select",{category:l,name:u.name})},[v("span",null,xe(u.label),1)],10,M_))),128))])):Ge("",!0)]),_:2},1032,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]))),128))]))]),_:1})])}const $_=ze(w_,[["render",j_],["__scopeId","data-v-73581c83"]]),R_={name:"ShowcaseMain",components:{JPanel:no},props:{item:{type:Object,default:null}}},O_={class:"showcaseMain"},F_={key:0,class:"showcaseMain_content"},V_={key:1,class:"showcaseMain_empty"};function N_(e,t,n,a,o,i){var s;const r=X("JPanel");return M(),ee("div",O_,[f(r,{title:((s=n.item)==null?void 0:s.label)||"COMPONENT",icon:"widgets","icon-color":"var(--q-accent)"},{default:S(()=>[n.item?(M(),ee("div",F_,[(M(),_e(Bg(n.item.component)))])):(M(),ee("div",V_," Select a component from the sidebar "))]),_:1},8,["title"])])}const z_=ze(R_,[["render",N_],["__scopeId","data-v-e6c850be"]]),yo=Fe({name:"QSpinner",props:{...Ut,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[L("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ol(e,t){const n=e.style;for(const a in t)n[a]=t[a]}function H_(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=kl(e);if(t)return t.$el||t}function Dp(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function U_(e,t=250){let n=!1,a;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),a=e.apply(this,arguments)),a}}function gu(e,t,n,a){n.modifiers.stop===!0&&Jt(e);const o=n.modifiers.color;let i=n.modifiers.center;i=i===!0||a===!0;const r=document.createElement("span"),s=document.createElement("span"),l=eo(e),{left:u,top:c,width:d,height:p}=t.getBoundingClientRect(),g=Math.sqrt(d*d+p*p),_=g/2,I=`${(d-g)/2}px`,C=i?I:`${l.left-u-_}px`,b=`${(p-g)/2}px`,w=i?b:`${l.top-c-_}px`;s.className="q-ripple__inner",ol(s,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${C},${w},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${o?" text-"+o:""}`,r.setAttribute("dir","ltr"),r.appendChild(s),t.appendChild(r);const y=()=>{r.remove(),clearTimeout(m)};n.abort.push(y);let m=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${I},${b},0) scale3d(1,1,1)`,s.style.opacity=.2,m=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,m=setTimeout(()=>{r.remove(),n.abort.splice(n.abort.indexOf(y),1)},275)},250)},50)}function vu(e,{modifiers:t,value:n,arg:a}){const o=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||a,keyCodes:[].concat(o.keyCodes||13)}}const Kt=Dr({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const a={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(o){a.enabled===!0&&o.qSkipRipple!==!0&&o.type===(a.modifiers.early===!0?"pointerdown":"click")&&gu(o,e,a,o.qKeyEvent===!0)},keystart:U_(o=>{a.enabled===!0&&o.qSkipRipple!==!0&&Mn(o,a.modifiers.keyCodes)===!0&&o.type===`key${a.modifiers.early===!0?"down":"up"}`&&gu(o,e,a,!0)},300)};vu(a,t),e.__qripple=a,tn(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&vu(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),Bn(t,"main"),delete e._qripple)}}),Bp={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},W_=Object.keys(Bp),Pp={align:{type:String,validator:e=>W_.includes(e)}};function Mp(e){return Q(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Bp[t]}`})}function Ei(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function jp(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{jp(e,n)}):e.add(t)}function J_(e){const t=new Set;return e.forEach(n=>{jp(t,n)}),Array.from(t)}function $p(e){return e.appContext.config.globalProperties.$router!==void 0}function jl(e){return e.isUnmounted===!0||e.isDeactivated===!0}function bu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _u(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function G_(e,t){for(const n in t){const a=t[n],o=e[n];if(typeof a=="string"){if(a!==o)return!1}else if(Array.isArray(o)===!1||o.length!==a.length||a.some((i,r)=>i!==o[r]))return!1}return!0}function yu(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Y_(e,t){return Array.isArray(e)===!0?yu(e,t):Array.isArray(t)===!0?yu(t,e):e===t}function K_(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Y_(e[n],t[n])===!1)return!1;return!0}const Rp={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Z_={...Rp,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Op({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Je(),{props:a,proxy:o,emit:i}=n,r=$p(n),s=Q(()=>a.disable!==!0&&a.href!==void 0),l=Q(t===!0?()=>r===!0&&a.disable!==!0&&s.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!=="":()=>r===!0&&s.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),u=Q(()=>l.value===!0?w(a.to):null),c=Q(()=>u.value!==null),d=Q(()=>s.value===!0||c.value===!0),p=Q(()=>a.type==="a"||d.value===!0?"a":a.tag||e||"div"),g=Q(()=>s.value===!0?{href:a.href,target:a.target}:c.value===!0?{href:u.value.href,target:a.target}:{}),_=Q(()=>{if(c.value===!1)return-1;const{matched:x}=u.value,{length:B}=x,T=x[B-1];if(T===void 0)return-1;const E=o.$route.matched;if(E.length===0)return-1;const O=E.findIndex(_u.bind(null,T));if(O!==-1)return O;const F=bu(x[B-2]);return B>1&&bu(T)===F&&E[E.length-1].path!==F?E.findIndex(_u.bind(null,x[B-2])):O}),I=Q(()=>c.value===!0&&_.value!==-1&&G_(o.$route.params,u.value.params)),C=Q(()=>I.value===!0&&_.value===o.$route.matched.length-1&&K_(o.$route.params,u.value.params)),b=Q(()=>c.value===!0?C.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":I.value===!0?` ${a.activeClass}`:"":"");function w(x){try{return o.$router.resolve(x)}catch{}return null}function y(x,{returnRouterError:B,to:T=a.to,replace:E=a.replace}={}){if(a.disable===!0)return x.preventDefault(),Promise.resolve(!1);if(x.metaKey||x.altKey||x.ctrlKey||x.shiftKey||x.button!==void 0&&x.button!==0||a.target==="_blank")return Promise.resolve(!1);x.preventDefault();const O=o.$router[E===!0?"replace":"push"](T);return B===!0?O:O.then(()=>{}).catch(()=>{})}function m(x){if(c.value===!0){const B=T=>y(x,T);i("click",x,B),x.defaultPrevented!==!0&&B()}else i("click",x)}return{hasRouterLink:c,hasHrefLink:s,hasLink:d,linkTag:p,resolvedLink:u,linkIsActive:I,linkIsExactActive:C,linkClass:b,linkAttrs:g,getLink:w,navigateToRouterLink:y,navigateOnClick:m}}const wu={none:0,xs:4,sm:8,md:16,lg:24,xl:32},X_={xs:8,sm:10,md:14,lg:20,xl:24},ey=["button","submit","reset"],ty=/[^\s]\/[^\s]/,ny=["flat","outline","push","unelevated"];function Fp(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}function Vp(e){const t=Fp(e);return t!==void 0?{[t]:!0}:{}}const $l={...wo,...Rp,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ny.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Pp.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},oy={...$l,round:Boolean};function ay(e){const t=So(e,X_),n=Mp(e),{hasRouterLink:a,hasLink:o,linkTag:i,linkAttrs:r,navigateOnClick:s}=Op({fallbackTag:"button"}),l=Q(()=>{const C=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},C,{padding:e.padding.split(/\s+/).map(b=>b in wu?wu[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):C}),u=Q(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),c=Q(()=>e.disable!==!0&&e.loading!==!0),d=Q(()=>c.value===!0?e.tabindex||0:-1),p=Q(()=>Fp(e,"standard")),g=Q(()=>{const C={tabindex:d.value};return o.value===!0?Object.assign(C,r.value):ey.includes(e.type)===!0&&(C.type=e.type),i.value==="a"?(e.disable===!0?C["aria-disabled"]="true":C.href===void 0&&(C.role="button"),a.value!==!0&&ty.test(e.type)===!0&&(C.type=e.type)):e.disable===!0&&(C.disabled="",C["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(C,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),C}),_=Q(()=>{let C;e.color!==void 0?e.flat===!0||e.outline===!0?C=`text-${e.textColor||e.color}`:C=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(C=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${b}`+(C!==void 0?" "+C:"")+(c.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),I=Q(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:_,style:l,innerClasses:I,attributes:g,hasLink:o,linkTag:i,navigateOnClick:s,isActionable:c}}const{passiveCapture:sn}=Tt;let Jo=null,Go=null,Yo=null;const it=Fe({name:"QBtn",props:{...oy,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:a}=Je(),{classes:o,style:i,innerClasses:r,attributes:s,hasLink:l,linkTag:u,navigateOnClick:c,isActionable:d}=ay(e),p=ge(null),g=ge(null);let _=null,I,C=null;const b=Q(()=>e.label!==void 0&&e.label!==null&&e.label!==""),w=Q(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),y=Q(()=>({center:e.round})),m=Q(()=>{const D=Math.max(0,Math.min(100,e.percentage));return D>0?{transition:"transform 0.6s",transform:`translateX(${D-100}%)`}:{}}),x=Q(()=>{if(e.loading===!0)return{onMousedown:U,onTouchstart:U,onClick:U,onKeydown:U,onKeyup:U};if(d.value===!0){const D={onClick:T,onKeydown:E,onMousedown:F};if(a.$q.platform.has.touch===!0){const R=e.onTouchstart!==void 0?"":"Passive";D[`onTouchstart${R}`]=O}return D}return{onClick:rt}}),B=Q(()=>({ref:p,class:"q-btn q-btn-item non-selectable no-outline "+o.value,style:i.value,...s.value,...x.value}));function T(D){if(p.value!==null){if(D!==void 0){if(D.defaultPrevented===!0)return;const R=document.activeElement;if(e.type==="submit"&&R!==document.body&&p.value.contains(R)===!1&&R.contains(p.value)===!1){D.qAvoidFocus!==!0&&p.value.focus();const ae=()=>{var Z;document.removeEventListener("keydown",rt,!0),document.removeEventListener("keyup",ae,sn),(Z=p.value)==null||Z.removeEventListener("blur",ae,sn)};document.addEventListener("keydown",rt,!0),document.addEventListener("keyup",ae,sn),p.value.addEventListener("blur",ae,sn)}}c(D)}}function E(D){p.value!==null&&(n("keydown",D),Mn(D,[13,32])===!0&&Go!==p.value&&(Go!==null&&j(),D.defaultPrevented!==!0&&(D.qAvoidFocus!==!0&&p.value.focus(),Go=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("keyup",V,!0),p.value.addEventListener("blur",V,sn)),rt(D)))}function O(D){p.value!==null&&(n("touchstart",D),D.defaultPrevented!==!0&&(Jo!==p.value&&(Jo!==null&&j(),Jo=p.value,_=D.target,_.addEventListener("touchcancel",V,sn),_.addEventListener("touchend",V,sn)),I=!0,C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,I=!1},200)))}function F(D){p.value!==null&&(D.qSkipRipple=I===!0,n("mousedown",D),D.defaultPrevented!==!0&&Yo!==p.value&&(Yo!==null&&j(),Yo=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("mouseup",V,sn)))}function V(D){if(p.value!==null&&!((D==null?void 0:D.type)==="blur"&&document.activeElement===p.value)){if((D==null?void 0:D.type)==="keyup"){if(Go===p.value&&Mn(D,[13,32])===!0){const R=new MouseEvent("click",D);R.qKeyEvent=!0,D.defaultPrevented===!0&&Nt(R),D.cancelBubble===!0&&Jt(R),p.value.dispatchEvent(R),rt(D),D.qKeyEvent=!0}n("keyup",D)}j()}}function j(D){var ae,Z;const R=g.value;D!==!0&&(Jo===p.value||Yo===p.value)&&R!==null&&R!==document.activeElement&&(R.setAttribute("tabindex",-1),R.focus()),Jo===p.value&&(_!==null&&(_.removeEventListener("touchcancel",V,sn),_.removeEventListener("touchend",V,sn)),Jo=_=null),Yo===p.value&&(document.removeEventListener("mouseup",V,sn),Yo=null),Go===p.value&&(document.removeEventListener("keyup",V,!0),(ae=p.value)==null||ae.removeEventListener("blur",V,sn),Go=null),(Z=p.value)==null||Z.classList.remove("q-btn--active")}function U(D){rt(D),D.qSkipRipple=!0}return wt(()=>{j(!0)}),Object.assign(a,{click:D=>{d.value===!0&&T(D)}}),()=>{let D=[];e.icon!==void 0&&D.push(L(nt,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&D.push(L("span",{class:"block"},[e.label])),D=dn(t.default,D),e.iconRight!==void 0&&e.round===!1&&D.push(L(nt,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const R=[L("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&R.push(L("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[L("span",{class:"q-btn__progress-indicator fit block",style:m.value})])),R.push(L("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},D)),e.loading!==null&&R.push(L(Lt,{name:"q-transition--fade"},()=>e.loading===!0?[L("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[L(yo)])]:null)),we(L(u.value,B.value,R),[[Kt,w.value,void 0,y.value]])}}});function iy(){return vo(Sp)}function ii(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ki.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Np={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},ry={...Np,contextMenu:Boolean};function zp({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:a,proxy:o,emit:i}=Je(),r=ge(null);let s=null;function l(g){return r.value===null?!1:g===void 0||g.touches===void 0||g.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(g){o.hide(g)},toggle(g){o.toggle(g),g.qAnchorHandled=!0},toggleKey(g){Mn(g,13)===!0&&u.toggle(g)},contextClick(g){o.hide(g),Nt(g),bt(()=>{o.show(g),g.qAnchorHandled=!0})},prevent:Nt,mobileTouch(g){if(u.mobileCleanup(g),l(g)!==!0)return;o.hide(g),r.value.classList.add("non-selectable");const _=g.target;tn(u,"anchor",[[_,"touchmove","mobileCleanup","passive"],[_,"touchend","mobileCleanup","passive"],[_,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,o.show(g),g.qAnchorHandled=!0},300)},mobileCleanup(g){r.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&g!==void 0&&ii()}}),n=function(_=a.contextMenu){if(a.noParentEvent===!0||r.value===null)return;let I;_===!0?o.$q.platform.is.mobile===!0?I=[[r.value,"touchstart","mobileTouch","passive"]]:I=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:I=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],tn(u,"anchor",I)});function c(){Bn(u,"anchor")}function d(g){for(r.value=g;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;n()}function p(){if(a.target===!1||a.target===""||o.$el.parentNode===null)r.value=null;else if(a.target===!0)d(o.$el.parentNode);else{let g=a.target;if(typeof a.target=="string")try{g=document.querySelector(a.target)}catch{g=void 0}g!=null?(r.value=g.$el||g,n()):(r.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return Oe(()=>a.contextMenu,g=>{r.value!==null&&(c(),n(g))}),Oe(()=>a.target,()=>{r.value!==null&&c(),p()}),Oe(()=>a.noParentEvent,g=>{r.value!==null&&(g===!0?c():n())}),Zt(()=>{p(),t!==!0&&a.modelValue===!0&&r.value===null&&i("update:modelValue",!1)}),wt(()=>{s!==null&&clearTimeout(s),c()}),{anchorEl:r,canShow:l,anchorEvents:u}}function Hp(e,t){const n=ge(null);let a;function o(s,l){const u=`${l!==void 0?"add":"remove"}EventListener`,c=l!==void 0?l:a;s!==window&&s[u]("scroll",c,Tt.passive),window[u]("scroll",c,Tt.passive),a=l}function i(){n.value!==null&&(o(n.value),n.value=null)}const r=Oe(()=>e.noParentEvent,()=>{n.value!==null&&(i(),t())});return wt(r),{localScrollTarget:n,unconfigureScrollTarget:i,changeScrollEvent:o}}const Rl={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ol=["beforeShow","show","beforeHide","hide"];function Fl({showing:e,canShow:t,hideOnRouteChange:n,handleShow:a,handleHide:o,processOnMount:i}){const r=Je(),{props:s,emit:l,proxy:u}=r;let c;function d(w){e.value===!0?_(w):p(w)}function p(w){if(s.disable===!0||(w==null?void 0:w.qAnchorHandled)===!0||t!==void 0&&t(w)!==!0)return;const y=s["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!0),c=w,bt(()=>{c===w&&(c=void 0)})),(s.modelValue===null||y===!1)&&g(w)}function g(w){e.value!==!0&&(e.value=!0,l("beforeShow",w),a!==void 0?a(w):l("show",w))}function _(w){if(s.disable===!0)return;const y=s["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!1),c=w,bt(()=>{c===w&&(c=void 0)})),(s.modelValue===null||y===!1)&&I(w)}function I(w){e.value!==!1&&(e.value=!1,l("beforeHide",w),o!==void 0?o(w):l("hide",w))}function C(w){s.disable===!0&&w===!0?s["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):w===!0!==e.value&&(w===!0?g:I)(c)}Oe(()=>s.modelValue,C),n!==void 0&&$p(r)===!0&&Oe(()=>u.$route.fullPath,()=>{n.value===!0&&e.value===!0&&_()}),Zt(()=>{C(s.modelValue)});const b={show:p,hide:_,toggle:d};return Object.assign(u,b),b}let Bo=[],ri=[];function Up(e){ri=ri.filter(t=>t!==e)}function sy(e){Up(e),ri.push(e)}function Su(e){Up(e),ri.length===0&&Bo.length!==0&&(Bo[Bo.length-1](),Bo=[])}function Mr(e){ri.length===0?e():Bo.push(e)}function ly(e){Bo=Bo.filter(t=>t!==e)}let cy=1,uy=document.body;function Wp(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${cy++}`:e,Xi.globalNodes!==void 0){const a=Xi.globalNodes.class;a!==void 0&&(n.className=a)}return uy.appendChild(n),n}function dy(e){e.remove()}const ma=[];function fy(e){return ma.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Jp(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return Ei(e)}else if(e.__qPortal===!0){const n=Ei(e);return(n==null?void 0:n.$options.name)==="QPopupProxy"?(e.hide(t),n):e}e=Ei(e)}while(e!=null)}function py(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Jp(e,t);continue}e.hide(t)}e=Ei(e)}}const my=Fe({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function hy(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Vl(e,t,n,a){const o=ge(!1),i=ge(!1);let r=null;const s={},l=a==="dialog"&&hy(e);function u(d){if(d===!0){Su(s),i.value=!0;return}i.value=!1,o.value===!1&&(l===!1&&r===null&&(r=Wp(!1,a)),o.value=!0,ma.push(e.proxy),sy(s))}function c(d){if(i.value=!1,d!==!0)return;Su(s),o.value=!1;const p=ma.indexOf(e.proxy);p!==-1&&ma.splice(p,1),r!==null&&(dy(r),r=null)}return Al(()=>{c(!0)}),e.proxy.__qPortal=!0,Aa(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:c,portalIsActive:o,portalIsAccessible:i,renderPortal:()=>l===!0?n():o.value===!0?[L(xg,{to:r},L(my,n))]:void 0}}const Ro={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function jr(e,t=()=>{},n=()=>{}){return{transitionProps:Q(()=>{const a=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:Q(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ha(){let e;const t=Je();function n(){e=void 0}return Qa(n),wt(n),{removeTick:n,registerTick(a){e=a,bt(()=>{e===a&&(jl(t)===!1&&e(),e=void 0)})}}}function Sa(){let e=null;const t=Je();function n(){e!==null&&(clearTimeout(e),e=null)}return Qa(n),wt(n),{removeTimeout:n,registerTimeout(a,o){n(),jl(t)===!1&&(e=setTimeout(()=>{e=null,a()},o))}}}const Gp=[Element,String],gy=[null,document,document.body,document.scrollingElement,document.documentElement];function Yp(e,t){let n=H_(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return gy.includes(n)?window:n}function vy(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function by(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let yi;function _y(){if(yi!==void 0)return yi;const e=document.createElement("p"),t=document.createElement("div");ol(e,{width:"100%",height:"200px"}),ol(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=t.clientWidth),t.remove(),yi=n-a,yi}function yy(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{notPassiveCapture:tr}=Tt,Oo=[];function nr(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=ma.length-1;for(;n>=0;){const a=ma[n].$;if(a.type.name==="QTooltip"){n--;continue}if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;n--}for(let a=Oo.length-1;a>=0;a--){const o=Oo[a];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Kp(e){Oo.push(e),Oo.length===1&&(document.addEventListener("mousedown",nr,tr),document.addEventListener("touchstart",nr,tr))}function or(e){const t=Oo.findIndex(n=>n===e);t!==-1&&(Oo.splice(t,1),Oo.length===0&&(document.removeEventListener("mousedown",nr,tr),document.removeEventListener("touchstart",nr,tr)))}let ku,xu;function ar(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Zp(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const al={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{al[`${e}#ltr`]=e,al[`${e}#rtl`]=e});function ir(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:al[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function wy(e,t){let{top:n,left:a,right:o,bottom:i,width:r,height:s}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],a-=t[0],i+=t[1],o+=t[0],r+=t[0],s+=t[1]),{top:n,bottom:i,height:s,left:a,right:o,width:r,middle:a+(o-a)/2,center:n+(i-n)/2}}function Sy(e,t,n){let{top:a,left:o}=e.getBoundingClientRect();return a+=t.top,o+=t.left,n!==void 0&&(a+=n[1],o+=n[0]),{top:a,bottom:a+1,height:1,left:o,right:o+1,width:1,middle:o,center:a}}function ky(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function Cu(e,t,n,a){return{top:e[n.vertical]-t[a.vertical],left:e[n.horizontal]-t[a.horizontal]}}function Nl(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Nl(e,t+1)},10);return}const{targetEl:n,offset:a,anchorEl:o,anchorOrigin:i,selfOrigin:r,absoluteOffset:s,fit:l,cover:u,maxHeight:c,maxWidth:d}=e;if(st.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:T,offsetTop:E}=window.visualViewport;T!==ku&&(B.setProperty("--q-pe-left",T+"px"),ku=T),E!==xu&&(B.setProperty("--q-pe-top",E+"px"),xu=E)}const{scrollLeft:p,scrollTop:g}=n,_=s===void 0?wy(o,u===!0?[0,0]:a):Sy(o,s,a);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:d,maxHeight:c,visibility:"visible"});const{offsetWidth:I,offsetHeight:C}=n,{elWidth:b,elHeight:w}=l===!0||u===!0?{elWidth:Math.max(_.width,I),elHeight:u===!0?Math.max(_.height,C):C}:{elWidth:I,elHeight:C};let y={maxWidth:d,maxHeight:c};(l===!0||u===!0)&&(y.minWidth=_.width+"px",u===!0&&(y.minHeight=_.height+"px")),Object.assign(n.style,y);const m=ky(b,w);let x=Cu(_,m,i,r);if(s===void 0||a===void 0)ps(x,_,m,i,r);else{const{top:B,left:T}=x;ps(x,_,m,i,r);let E=!1;if(x.top!==B){E=!0;const O=2*a[1];_.center=_.top-=O,_.bottom-=O+2}if(x.left!==T){E=!0;const O=2*a[0];_.middle=_.left-=O,_.right-=O+2}E===!0&&(x=Cu(_,m,i,r),ps(x,_,m,i,r))}y={top:x.top+"px",left:x.left+"px"},x.maxHeight!==void 0&&(y.maxHeight=x.maxHeight+"px",_.height>x.maxHeight&&(y.minHeight=y.maxHeight)),x.maxWidth!==void 0&&(y.maxWidth=x.maxWidth+"px",_.width>x.maxWidth&&(y.minWidth=y.maxWidth)),Object.assign(n.style,y),n.scrollTop!==g&&(n.scrollTop=g),n.scrollLeft!==p&&(n.scrollLeft=p)}function ps(e,t,n,a,o){const i=n.bottom,r=n.right,s=_y(),l=window.innerHeight-s,u=document.body.clientWidth;if(e.top<0||e.top+i>l)if(o.vertical==="center")e.top=t[a.vertical]>l/2?Math.max(0,l-i):0,e.maxHeight=Math.min(i,l);else if(t[a.vertical]>l/2){const c=Math.min(l,a.vertical==="center"?t.center:a.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(i,c),e.top=Math.max(0,c-i)}else e.top=Math.max(0,a.vertical==="center"?t.center:a.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(i,l-e.top);if(e.left<0||e.left+r>u)if(e.maxWidth=Math.min(r,u),o.horizontal==="middle")e.left=t[a.horizontal]>u/2?Math.max(0,u-r):0;else if(t[a.horizontal]>u/2){const c=Math.min(u,a.horizontal==="middle"?t.middle:a.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(r,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?t.middle:a.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(r,u-e.left)}const xy=Fe({name:"QTooltip",inheritAttrs:!1,props:{...Np,...Rl,...Ro,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...Ro.transitionShow,default:"jump-down"},transitionHide:{...Ro.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ar},self:{type:String,default:"top middle",validator:ar},offset:{type:Array,default:()=>[14,14],validator:Zp},scrollTarget:Gp,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Ol],setup(e,{slots:t,emit:n,attrs:a}){let o,i;const r=Je(),{proxy:{$q:s}}=r,l=ge(null),u=ge(!1),c=Q(()=>ir(e.anchor,s.lang.rtl)),d=Q(()=>ir(e.self,s.lang.rtl)),p=Q(()=>e.persistent!==!0),{registerTick:g,removeTick:_}=ha(),{registerTimeout:I}=Sa(),{transitionProps:C,transitionStyle:b}=jr(e),{localScrollTarget:w,changeScrollEvent:y,unconfigureScrollTarget:m}=Hp(e,$e),{anchorEl:x,canShow:B,anchorEvents:T}=zp({showing:u,configureAnchorEl:be}),{show:E,hide:O}=Fl({showing:u,canShow:B,handleShow:U,handleHide:D,hideOnRouteChange:p,processOnMount:!0});Object.assign(T,{delayShow:Z,delayHide:G});const{showPortal:F,hidePortal:V,renderPortal:j}=Vl(r,l,H,"tooltip");if(s.platform.is.mobile===!0){const pe={anchorEl:x,innerRef:l,onClickOutside(Me){return O(Me),Me.target.classList.contains("q-dialog__backdrop")&&rt(Me),!0}},Le=Q(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);Oe(Le,Me=>{(Me===!0?Kp:or)(pe)}),wt(()=>{or(pe)})}function U(pe){F(),g(()=>{i=new MutationObserver(()=>ae()),i.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),ae(),$e()}),o===void 0&&(o=Oe(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,ae)),I(()=>{F(!0),n("show",pe)},e.transitionDuration)}function D(pe){_(),V(),R(),I(()=>{V(!0),n("hide",pe)},e.transitionDuration)}function R(){i!==void 0&&(i.disconnect(),i=void 0),o!==void 0&&(o(),o=void 0),m(),Bn(T,"tooltipTemp")}function ae(){Nl({targetEl:l.value,offset:e.offset,anchorEl:x.value,anchorOrigin:c.value,selfOrigin:d.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Z(pe){if(s.platform.is.mobile===!0){ii(),document.body.classList.add("non-selectable");const Le=x.value,Me=["touchmove","touchcancel","touchend","click"].map(de=>[Le,de,"delayHide","passiveCapture"]);tn(T,"tooltipTemp",Me)}I(()=>{E(pe)},e.delay)}function G(pe){s.platform.is.mobile===!0&&(Bn(T,"tooltipTemp"),ii(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),I(()=>{O(pe)},e.hideDelay)}function be(){if(e.noParentEvent===!0||x.value===null)return;const pe=s.platform.is.mobile===!0?[[x.value,"touchstart","delayShow","passive"]]:[[x.value,"mouseenter","delayShow","passive"],[x.value,"mouseleave","delayHide","passive"]];tn(T,"anchor",pe)}function $e(){if(x.value!==null||e.scrollTarget!==void 0){w.value=Yp(x.value,e.scrollTarget);const pe=e.noParentEvent===!0?ae:O;y(w.value,pe)}}function J(){return u.value===!0?L("div",{...a,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,b.value],role:"tooltip"},mt(t.default)):null}function H(){return L(Lt,C.value,J)}return wt(R),Object.assign(r.proxy,{updatePosition:ae}),j}});/*!
 * @quasar/quasar-ui-qmarkdown v2.0.5
 * (c) 2025 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cy(e){var t;return e.__esModule?e:(t=Object.defineProperty({},"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}),t)}var lt={},Qy="Á",Ay="á",Iy="Ă",qy="ă",Ty="∾",Ly="∿",Ey="∾̳",Dy="Â",By="â",Py="´",My="А",jy="а",$y="Æ",Ry="æ",Oy="⁡",Fy="𝔄",Vy="𝔞",Ny="À",zy="à",Hy="ℵ",Uy="ℵ",Wy="Α",Jy="α",Gy="Ā",Yy="ā",Ky="⨿",Zy="&",Xy="&",e1="⩕",t1="⩓",n1="∧",o1="⩜",a1="⩘",i1="⩚",r1="∠",s1="⦤",l1="∠",c1="⦨",u1="⦩",d1="⦪",f1="⦫",p1="⦬",m1="⦭",h1="⦮",g1="⦯",v1="∡",b1="∟",_1="⊾",y1="⦝",w1="∢",S1="Å",k1="⍼",x1="Ą",C1="ą",Q1="𝔸",A1="𝕒",I1="⩯",q1="≈",T1="⩰",L1="≊",E1="≋",D1="'",B1="⁡",P1="≈",M1="≊",j1="Å",$1="å",R1="𝒜",O1="𝒶",F1="≔",V1="*",N1="≈",z1="≍",H1="Ã",U1="ã",W1="Ä",J1="ä",G1="∳",Y1="⨑",K1="≌",Z1="϶",X1="‵",e0="∽",t0="⋍",n0="∖",o0="⫧",a0="⊽",i0="⌅",r0="⌆",s0="⌅",l0="⎵",c0="⎶",u0="≌",d0="Б",f0="б",p0="„",m0="∵",h0="∵",g0="∵",v0="⦰",b0="϶",_0="ℬ",y0="ℬ",w0="Β",S0="β",k0="ℶ",x0="≬",C0="𝔅",Q0="𝔟",A0="⋂",I0="◯",q0="⋃",T0="⨀",L0="⨁",E0="⨂",D0="⨆",B0="★",P0="▽",M0="△",j0="⨄",$0="⋁",R0="⋀",O0="⤍",F0="⧫",V0="▪",N0="▴",z0="▾",H0="◂",U0="▸",W0="␣",J0="▒",G0="░",Y0="▓",K0="█",Z0="=⃥",X0="≡⃥",ew="⫭",tw="⌐",nw="𝔹",ow="𝕓",aw="⊥",iw="⊥",rw="⋈",sw="⧉",lw="┐",cw="╕",uw="╖",dw="╗",fw="┌",pw="╒",mw="╓",hw="╔",gw="─",vw="═",bw="┬",_w="╤",yw="╥",ww="╦",Sw="┴",kw="╧",xw="╨",Cw="╩",Qw="⊟",Aw="⊞",Iw="⊠",qw="┘",Tw="╛",Lw="╜",Ew="╝",Dw="└",Bw="╘",Pw="╙",Mw="╚",jw="│",$w="║",Rw="┼",Ow="╪",Fw="╫",Vw="╬",Nw="┤",zw="╡",Hw="╢",Uw="╣",Ww="├",Jw="╞",Gw="╟",Yw="╠",Kw="‵",Zw="˘",Xw="˘",eS="¦",tS="𝒷",nS="ℬ",oS="⁏",aS="∽",iS="⋍",rS="⧅",sS="\\",lS="⟈",cS="•",uS="•",dS="≎",fS="⪮",pS="≏",mS="≎",hS="≏",gS="Ć",vS="ć",bS="⩄",_S="⩉",yS="⩋",wS="∩",SS="⋒",kS="⩇",xS="⩀",CS="ⅅ",QS="∩︀",AS="⁁",IS="ˇ",qS="ℭ",TS="⩍",LS="Č",ES="č",DS="Ç",BS="ç",PS="Ĉ",MS="ĉ",jS="∰",$S="⩌",RS="⩐",OS="Ċ",FS="ċ",VS="¸",NS="¸",zS="⦲",HS="¢",US="·",WS="·",JS="𝔠",GS="ℭ",YS="Ч",KS="ч",ZS="✓",XS="✓",ek="Χ",tk="χ",nk="ˆ",ok="≗",ak="↺",ik="↻",rk="⊛",sk="⊚",lk="⊝",ck="⊙",uk="®",dk="Ⓢ",fk="⊖",pk="⊕",mk="⊗",hk="○",gk="⧃",vk="≗",bk="⨐",_k="⫯",yk="⧂",wk="∲",Sk="”",kk="’",xk="♣",Ck="♣",Qk=":",Ak="∷",Ik="⩴",qk="≔",Tk="≔",Lk=",",Ek="@",Dk="∁",Bk="∘",Pk="∁",Mk="ℂ",jk="≅",$k="⩭",Rk="≡",Ok="∮",Fk="∯",Vk="∮",Nk="𝕔",zk="ℂ",Hk="∐",Uk="∐",Wk="©",Jk="©",Gk="℗",Yk="∳",Kk="↵",Zk="✗",Xk="⨯",ex="𝒞",tx="𝒸",nx="⫏",ox="⫑",ax="⫐",ix="⫒",rx="⋯",sx="⤸",lx="⤵",cx="⋞",ux="⋟",dx="↶",fx="⤽",px="⩈",mx="⩆",hx="≍",gx="∪",vx="⋓",bx="⩊",_x="⊍",yx="⩅",wx="∪︀",Sx="↷",kx="⤼",xx="⋞",Cx="⋟",Qx="⋎",Ax="⋏",Ix="¤",qx="↶",Tx="↷",Lx="⋎",Ex="⋏",Dx="∲",Bx="∱",Px="⌭",Mx="†",jx="‡",$x="ℸ",Rx="↓",Ox="↡",Fx="⇓",Vx="‐",Nx="⫤",zx="⊣",Hx="⤏",Ux="˝",Wx="Ď",Jx="ď",Gx="Д",Yx="д",Kx="‡",Zx="⇊",Xx="ⅅ",e2="ⅆ",t2="⤑",n2="⩷",o2="°",a2="∇",i2="Δ",r2="δ",s2="⦱",l2="⥿",c2="𝔇",u2="𝔡",d2="⥥",f2="⇃",p2="⇂",m2="´",h2="˙",g2="˝",v2="`",b2="˜",_2="⋄",y2="⋄",w2="⋄",S2="♦",k2="♦",x2="¨",C2="ⅆ",Q2="ϝ",A2="⋲",I2="÷",q2="÷",T2="⋇",L2="⋇",E2="Ђ",D2="ђ",B2="⌞",P2="⌍",M2="$",j2="𝔻",$2="𝕕",R2="¨",O2="˙",F2="⃜",V2="≐",N2="≑",z2="≐",H2="∸",U2="∔",W2="⊡",J2="⌆",G2="∯",Y2="¨",K2="⇓",Z2="⇐",X2="⇔",eC="⫤",tC="⟸",nC="⟺",oC="⟹",aC="⇒",iC="⊨",rC="⇑",sC="⇕",lC="∥",cC="⤓",uC="↓",dC="↓",fC="⇓",pC="⇵",mC="̑",hC="⇊",gC="⇃",vC="⇂",bC="⥐",_C="⥞",yC="⥖",wC="↽",SC="⥟",kC="⥗",xC="⇁",CC="↧",QC="⊤",AC="⤐",IC="⌟",qC="⌌",TC="𝒟",LC="𝒹",EC="Ѕ",DC="ѕ",BC="⧶",PC="Đ",MC="đ",jC="⋱",$C="▿",RC="▾",OC="⇵",FC="⥯",VC="⦦",NC="Џ",zC="џ",HC="⟿",UC="É",WC="é",JC="⩮",GC="Ě",YC="ě",KC="Ê",ZC="ê",XC="≖",e3="≕",t3="Э",n3="э",o3="⩷",a3="Ė",i3="ė",r3="≑",s3="ⅇ",l3="≒",c3="𝔈",u3="𝔢",d3="⪚",f3="È",p3="è",m3="⪖",h3="⪘",g3="⪙",v3="∈",b3="⏧",_3="ℓ",y3="⪕",w3="⪗",S3="Ē",k3="ē",x3="∅",C3="∅",Q3="◻",A3="∅",I3="▫",q3=" ",T3=" ",L3=" ",E3="Ŋ",D3="ŋ",B3=" ",P3="Ę",M3="ę",j3="𝔼",$3="𝕖",R3="⋕",O3="⧣",F3="⩱",V3="ε",N3="Ε",z3="ε",H3="ϵ",U3="≖",W3="≕",J3="≂",G3="⪖",Y3="⪕",K3="⩵",Z3="=",X3="≂",eQ="≟",tQ="⇌",nQ="≡",oQ="⩸",aQ="⧥",iQ="⥱",rQ="≓",sQ="ℯ",lQ="ℰ",cQ="≐",uQ="⩳",dQ="≂",fQ="Η",pQ="η",mQ="Ð",hQ="ð",gQ="Ë",vQ="ë",bQ="€",_Q="!",yQ="∃",wQ="∃",SQ="ℰ",kQ="ⅇ",xQ="ⅇ",CQ="≒",QQ="Ф",AQ="ф",IQ="♀",qQ="ﬃ",TQ="ﬀ",LQ="ﬄ",EQ="𝔉",DQ="𝔣",BQ="ﬁ",PQ="◼",MQ="▪",jQ="fj",$Q="♭",RQ="ﬂ",OQ="▱",FQ="ƒ",VQ="𝔽",NQ="𝕗",zQ="∀",HQ="∀",UQ="⋔",WQ="⫙",JQ="ℱ",GQ="⨍",YQ="½",KQ="⅓",ZQ="¼",XQ="⅕",e4="⅙",t4="⅛",n4="⅔",o4="⅖",a4="¾",i4="⅗",r4="⅜",s4="⅘",l4="⅚",c4="⅝",u4="⅞",d4="⁄",f4="⌢",p4="𝒻",m4="ℱ",h4="ǵ",g4="Γ",v4="γ",b4="Ϝ",_4="ϝ",y4="⪆",w4="Ğ",S4="ğ",k4="Ģ",x4="Ĝ",C4="ĝ",Q4="Г",A4="г",I4="Ġ",q4="ġ",T4="≥",L4="≧",E4="⪌",D4="⋛",B4="≥",P4="≧",M4="⩾",j4="⪩",$4="⩾",R4="⪀",O4="⪂",F4="⪄",V4="⋛︀",N4="⪔",z4="𝔊",H4="𝔤",U4="≫",W4="⋙",J4="⋙",G4="ℷ",Y4="Ѓ",K4="ѓ",Z4="⪥",X4="≷",eA="⪒",tA="⪤",nA="⪊",oA="⪊",aA="⪈",iA="≩",rA="⪈",sA="≩",lA="⋧",cA="𝔾",uA="𝕘",dA="`",fA="≥",pA="⋛",mA="≧",hA="⪢",gA="≷",vA="⩾",bA="≳",_A="𝒢",yA="ℊ",wA="≳",SA="⪎",kA="⪐",xA="⪧",CA="⩺",QA=">",AA=">",IA="≫",qA="⋗",TA="⦕",LA="⩼",EA="⪆",DA="⥸",BA="⋗",PA="⋛",MA="⪌",jA="≷",$A="≳",RA="≩︀",OA="≩︀",FA="ˇ",VA=" ",NA="½",zA="ℋ",HA="Ъ",UA="ъ",WA="⥈",JA="↔",GA="⇔",YA="↭",KA="^",ZA="ℏ",XA="Ĥ",e5="ĥ",t5="♥",n5="♥",o5="…",a5="⊹",i5="𝔥",r5="ℌ",s5="ℋ",l5="⤥",c5="⤦",u5="⇿",d5="∻",f5="↩",p5="↪",m5="𝕙",h5="ℍ",g5="―",v5="─",b5="𝒽",_5="ℋ",y5="ℏ",w5="Ħ",S5="ħ",k5="≎",x5="≏",C5="⁃",Q5="‐",A5="Í",I5="í",q5="⁣",T5="Î",L5="î",E5="И",D5="и",B5="İ",P5="Е",M5="е",j5="¡",$5="⇔",R5="𝔦",O5="ℑ",F5="Ì",V5="ì",N5="ⅈ",z5="⨌",H5="∭",U5="⧜",W5="℩",J5="Ĳ",G5="ĳ",Y5="Ī",K5="ī",Z5="ℑ",X5="ⅈ",eI="ℐ",tI="ℑ",nI="ı",oI="ℑ",aI="⊷",iI="Ƶ",rI="⇒",sI="℅",lI="∞",cI="⧝",uI="ı",dI="⊺",fI="∫",pI="∬",mI="ℤ",hI="∫",gI="⊺",vI="⋂",bI="⨗",_I="⨼",yI="⁣",wI="⁢",SI="Ё",kI="ё",xI="Į",CI="į",QI="𝕀",AI="𝕚",II="Ι",qI="ι",TI="⨼",LI="¿",EI="𝒾",DI="ℐ",BI="∈",PI="⋵",MI="⋹",jI="⋴",$I="⋳",RI="∈",OI="⁢",FI="Ĩ",VI="ĩ",NI="І",zI="і",HI="Ï",UI="ï",WI="Ĵ",JI="ĵ",GI="Й",YI="й",KI="𝔍",ZI="𝔧",XI="ȷ",eq="𝕁",tq="𝕛",nq="𝒥",oq="𝒿",aq="Ј",iq="ј",rq="Є",sq="є",lq="Κ",cq="κ",uq="ϰ",dq="Ķ",fq="ķ",pq="К",mq="к",hq="𝔎",gq="𝔨",vq="ĸ",bq="Х",_q="х",yq="Ќ",wq="ќ",Sq="𝕂",kq="𝕜",xq="𝒦",Cq="𝓀",Qq="⇚",Aq="Ĺ",Iq="ĺ",qq="⦴",Tq="ℒ",Lq="Λ",Eq="λ",Dq="⟨",Bq="⟪",Pq="⦑",Mq="⟨",jq="⪅",$q="ℒ",Rq="«",Oq="⇤",Fq="⤟",Vq="←",Nq="↞",zq="⇐",Hq="⤝",Uq="↩",Wq="↫",Jq="⤹",Gq="⥳",Yq="↢",Kq="⤙",Zq="⤛",Xq="⪫",e6="⪭",t6="⪭︀",n6="⤌",o6="⤎",a6="❲",i6="{",r6="[",s6="⦋",l6="⦏",c6="⦍",u6="Ľ",d6="ľ",f6="Ļ",p6="ļ",m6="⌈",h6="{",g6="Л",v6="л",b6="⤶",_6="“",y6="„",w6="⥧",S6="⥋",k6="↲",x6="≤",C6="≦",Q6="⟨",A6="⇤",I6="←",q6="←",T6="⇐",L6="⇆",E6="↢",D6="⌈",B6="⟦",P6="⥡",M6="⥙",j6="⇃",$6="⌊",R6="↽",O6="↼",F6="⇇",V6="↔",N6="↔",z6="⇔",H6="⇆",U6="⇋",W6="↭",J6="⥎",G6="↤",Y6="⊣",K6="⥚",Z6="⋋",X6="⧏",eT="⊲",tT="⊴",nT="⥑",oT="⥠",aT="⥘",iT="↿",rT="⥒",sT="↼",lT="⪋",cT="⋚",uT="≤",dT="≦",fT="⩽",pT="⪨",mT="⩽",hT="⩿",gT="⪁",vT="⪃",bT="⋚︀",_T="⪓",yT="⪅",wT="⋖",ST="⋚",kT="⪋",xT="⋚",CT="≦",QT="≶",AT="≶",IT="⪡",qT="≲",TT="⩽",LT="≲",ET="⥼",DT="⌊",BT="𝔏",PT="𝔩",MT="≶",jT="⪑",$T="⥢",RT="↽",OT="↼",FT="⥪",VT="▄",NT="Љ",zT="љ",HT="⇇",UT="≪",WT="⋘",JT="⌞",GT="⇚",YT="⥫",KT="◺",ZT="Ŀ",XT="ŀ",e8="⎰",t8="⎰",n8="⪉",o8="⪉",a8="⪇",i8="≨",r8="⪇",s8="≨",l8="⋦",c8="⟬",u8="⇽",d8="⟦",f8="⟵",p8="⟵",m8="⟸",h8="⟷",g8="⟷",v8="⟺",b8="⟼",_8="⟶",y8="⟶",w8="⟹",S8="↫",k8="↬",x8="⦅",C8="𝕃",Q8="𝕝",A8="⨭",I8="⨴",q8="∗",T8="_",L8="↙",E8="↘",D8="◊",B8="◊",P8="⧫",M8="(",j8="⦓",$8="⇆",R8="⌟",O8="⇋",F8="⥭",V8="‎",N8="⊿",z8="‹",H8="𝓁",U8="ℒ",W8="↰",J8="↰",G8="≲",Y8="⪍",K8="⪏",Z8="[",X8="‘",eL="‚",tL="Ł",nL="ł",oL="⪦",aL="⩹",iL="<",rL="<",sL="≪",lL="⋖",cL="⋋",uL="⋉",dL="⥶",fL="⩻",pL="◃",mL="⊴",hL="◂",gL="⦖",vL="⥊",bL="⥦",_L="≨︀",yL="≨︀",wL="¯",SL="♂",kL="✠",xL="✠",CL="↦",QL="↦",AL="↧",IL="↤",qL="↥",TL="▮",LL="⨩",EL="М",DL="м",BL="—",PL="∺",ML="∡",jL=" ",$L="ℳ",RL="𝔐",OL="𝔪",FL="℧",VL="µ",NL="*",zL="⫰",HL="∣",UL="·",WL="⊟",JL="−",GL="∸",YL="⨪",KL="∓",ZL="⫛",XL="…",eE="∓",tE="⊧",nE="𝕄",oE="𝕞",aE="∓",iE="𝓂",rE="ℳ",sE="∾",lE="Μ",cE="μ",uE="⊸",dE="⊸",fE="∇",pE="Ń",mE="ń",hE="∠⃒",gE="≉",vE="⩰̸",bE="≋̸",_E="ŉ",yE="≉",wE="♮",SE="ℕ",kE="♮",xE=" ",CE="≎̸",QE="≏̸",AE="⩃",IE="Ň",qE="ň",TE="Ņ",LE="ņ",EE="≇",DE="⩭̸",BE="⩂",PE="Н",ME="н",jE="–",$E="⤤",RE="↗",OE="⇗",FE="↗",VE="≠",NE="≐̸",zE="​",HE="​",UE="​",WE="​",JE="≢",GE="⤨",YE="≂̸",KE="≫",ZE="≪",XE=`
`,eD="∄",tD="∄",nD="𝔑",oD="𝔫",aD="≧̸",iD="≱",rD="≱",sD="≧̸",lD="⩾̸",cD="⩾̸",uD="⋙̸",dD="≵",fD="≫⃒",pD="≯",mD="≯",hD="≫̸",gD="↮",vD="⇎",bD="⫲",_D="∋",yD="⋼",wD="⋺",SD="∋",kD="Њ",xD="њ",CD="↚",QD="⇍",AD="‥",ID="≦̸",qD="≰",TD="↚",LD="⇍",ED="↮",DD="⇎",BD="≰",PD="≦̸",MD="⩽̸",jD="⩽̸",$D="≮",RD="⋘̸",OD="≴",FD="≪⃒",VD="≮",ND="⋪",zD="⋬",HD="≪̸",UD="∤",WD="⁠",JD=" ",GD="𝕟",YD="ℕ",KD="⫬",ZD="¬",XD="≢",eB="≭",tB="∦",nB="∉",oB="≠",aB="≂̸",iB="∄",rB="≯",sB="≱",lB="≧̸",cB="≫̸",uB="≹",dB="⩾̸",fB="≵",pB="≎̸",mB="≏̸",hB="∉",gB="⋵̸",vB="⋹̸",bB="∉",_B="⋷",yB="⋶",wB="⧏̸",SB="⋪",kB="⋬",xB="≮",CB="≰",QB="≸",AB="≪̸",IB="⩽̸",qB="≴",TB="⪢̸",LB="⪡̸",EB="∌",DB="∌",BB="⋾",PB="⋽",MB="⊀",jB="⪯̸",$B="⋠",RB="∌",OB="⧐̸",FB="⋫",VB="⋭",NB="⊏̸",zB="⋢",HB="⊐̸",UB="⋣",WB="⊂⃒",JB="⊈",GB="⊁",YB="⪰̸",KB="⋡",ZB="≿̸",XB="⊃⃒",e9="⊉",t9="≁",n9="≄",o9="≇",a9="≉",i9="∤",r9="∦",s9="∦",l9="⫽⃥",c9="∂̸",u9="⨔",d9="⊀",f9="⋠",p9="⊀",m9="⪯̸",h9="⪯̸",g9="⤳̸",v9="↛",b9="⇏",_9="↝̸",y9="↛",w9="⇏",S9="⋫",k9="⋭",x9="⊁",C9="⋡",Q9="⪰̸",A9="𝒩",I9="𝓃",q9="∤",T9="∦",L9="≁",E9="≄",D9="≄",B9="∤",P9="∦",M9="⋢",j9="⋣",$9="⊄",R9="⫅̸",O9="⊈",F9="⊂⃒",V9="⊈",N9="⫅̸",z9="⊁",H9="⪰̸",U9="⊅",W9="⫆̸",J9="⊉",G9="⊃⃒",Y9="⊉",K9="⫆̸",Z9="≹",X9="Ñ",eP="ñ",tP="≸",nP="⋪",oP="⋬",aP="⋫",iP="⋭",rP="Ν",sP="ν",lP="#",cP="№",uP=" ",dP="≍⃒",fP="⊬",pP="⊭",mP="⊮",hP="⊯",gP="≥⃒",vP=">⃒",bP="⤄",_P="⧞",yP="⤂",wP="≤⃒",SP="<⃒",kP="⊴⃒",xP="⤃",CP="⊵⃒",QP="∼⃒",AP="⤣",IP="↖",qP="⇖",TP="↖",LP="⤧",EP="Ó",DP="ó",BP="⊛",PP="Ô",MP="ô",jP="⊚",$P="О",RP="о",OP="⊝",FP="Ő",VP="ő",NP="⨸",zP="⊙",HP="⦼",UP="Œ",WP="œ",JP="⦿",GP="𝔒",YP="𝔬",KP="˛",ZP="Ò",XP="ò",eM="⧁",tM="⦵",nM="Ω",oM="∮",aM="↺",iM="⦾",rM="⦻",sM="‾",lM="⧀",cM="Ō",uM="ō",dM="Ω",fM="ω",pM="Ο",mM="ο",hM="⦶",gM="⊖",vM="𝕆",bM="𝕠",_M="⦷",yM="“",wM="‘",SM="⦹",kM="⊕",xM="↻",CM="⩔",QM="∨",AM="⩝",IM="ℴ",qM="ℴ",TM="ª",LM="º",EM="⊶",DM="⩖",BM="⩗",PM="⩛",MM="Ⓢ",jM="𝒪",$M="ℴ",RM="Ø",OM="ø",FM="⊘",VM="Õ",NM="õ",zM="⨶",HM="⨷",UM="⊗",WM="Ö",JM="ö",GM="⌽",YM="‾",KM="⏞",ZM="⎴",XM="⏜",e7="¶",t7="∥",n7="∥",o7="⫳",a7="⫽",i7="∂",r7="∂",s7="П",l7="п",c7="%",u7=".",d7="‰",f7="⊥",p7="‱",m7="𝔓",h7="𝔭",g7="Φ",v7="φ",b7="ϕ",_7="ℳ",y7="☎",w7="Π",S7="π",k7="⋔",x7="ϖ",C7="ℏ",Q7="ℎ",A7="ℏ",I7="⨣",q7="⊞",T7="⨢",L7="+",E7="∔",D7="⨥",B7="⩲",P7="±",M7="±",j7="⨦",$7="⨧",R7="±",O7="ℌ",F7="⨕",V7="𝕡",N7="ℙ",z7="£",H7="⪷",U7="⪻",W7="≺",J7="≼",G7="⪷",Y7="≺",K7="≼",Z7="≺",X7="⪯",ej="≼",tj="≾",nj="⪯",oj="⪹",aj="⪵",ij="⋨",rj="⪯",sj="⪳",lj="≾",cj="′",uj="″",dj="ℙ",fj="⪹",pj="⪵",mj="⋨",hj="∏",gj="∏",vj="⌮",bj="⌒",_j="⌓",yj="∝",wj="∝",Sj="∷",kj="∝",xj="≾",Cj="⊰",Qj="𝒫",Aj="𝓅",Ij="Ψ",qj="ψ",Tj=" ",Lj="𝔔",Ej="𝔮",Dj="⨌",Bj="𝕢",Pj="ℚ",Mj="⁗",jj="𝒬",$j="𝓆",Rj="ℍ",Oj="⨖",Fj="?",Vj="≟",Nj='"',zj='"',Hj="⇛",Uj="∽̱",Wj="Ŕ",Jj="ŕ",Gj="√",Yj="⦳",Kj="⟩",Zj="⟫",Xj="⦒",e$="⦥",t$="⟩",n$="»",o$="⥵",a$="⇥",i$="⤠",r$="⤳",s$="→",l$="↠",c$="⇒",u$="⤞",d$="↪",f$="↬",p$="⥅",m$="⥴",h$="⤖",g$="↣",v$="↝",b$="⤚",_$="⤜",y$="∶",w$="ℚ",S$="⤍",k$="⤏",x$="⤐",C$="❳",Q$="}",A$="]",I$="⦌",q$="⦎",T$="⦐",L$="Ř",E$="ř",D$="Ŗ",B$="ŗ",P$="⌉",M$="}",j$="Р",$$="р",R$="⤷",O$="⥩",F$="”",V$="”",N$="↳",z$="ℜ",H$="ℛ",U$="ℜ",W$="ℝ",J$="ℜ",G$="▭",Y$="®",K$="®",Z$="∋",X$="⇋",eR="⥯",tR="⥽",nR="⌋",oR="𝔯",aR="ℜ",iR="⥤",rR="⇁",sR="⇀",lR="⥬",cR="Ρ",uR="ρ",dR="ϱ",fR="⟩",pR="⇥",mR="→",hR="→",gR="⇒",vR="⇄",bR="↣",_R="⌉",yR="⟧",wR="⥝",SR="⥕",kR="⇂",xR="⌋",CR="⇁",QR="⇀",AR="⇄",IR="⇌",qR="⇉",TR="↝",LR="↦",ER="⊢",DR="⥛",BR="⋌",PR="⧐",MR="⊳",jR="⊵",$R="⥏",RR="⥜",OR="⥔",FR="↾",VR="⥓",NR="⇀",zR="˚",HR="≓",UR="⇄",WR="⇌",JR="‏",GR="⎱",YR="⎱",KR="⫮",ZR="⟭",XR="⇾",eO="⟧",tO="⦆",nO="𝕣",oO="ℝ",aO="⨮",iO="⨵",rO="⥰",sO=")",lO="⦔",cO="⨒",uO="⇉",dO="⇛",fO="›",pO="𝓇",mO="ℛ",hO="↱",gO="↱",vO="]",bO="’",_O="’",yO="⋌",wO="⋊",SO="▹",kO="⊵",xO="▸",CO="⧎",QO="⧴",AO="⥨",IO="℞",qO="Ś",TO="ś",LO="‚",EO="⪸",DO="Š",BO="š",PO="⪼",MO="≻",jO="≽",$O="⪰",RO="⪴",OO="Ş",FO="ş",VO="Ŝ",NO="ŝ",zO="⪺",HO="⪶",UO="⋩",WO="⨓",JO="≿",GO="С",YO="с",KO="⊡",ZO="⋅",XO="⩦",eF="⤥",tF="↘",nF="⇘",oF="↘",aF="§",iF=";",rF="⤩",sF="∖",lF="∖",cF="✶",uF="𝔖",dF="𝔰",fF="⌢",pF="♯",mF="Щ",hF="щ",gF="Ш",vF="ш",bF="↓",_F="←",yF="∣",wF="∥",SF="→",kF="↑",xF="­",CF="Σ",QF="σ",AF="ς",IF="ς",qF="∼",TF="⩪",LF="≃",EF="≃",DF="⪞",BF="⪠",PF="⪝",MF="⪟",jF="≆",$F="⨤",RF="⥲",OF="←",FF="∘",VF="∖",NF="⨳",zF="⧤",HF="∣",UF="⌣",WF="⪪",JF="⪬",GF="⪬︀",YF="Ь",KF="ь",ZF="⌿",XF="⧄",eV="/",tV="𝕊",nV="𝕤",oV="♠",aV="♠",iV="∥",rV="⊓",sV="⊓︀",lV="⊔",cV="⊔︀",uV="√",dV="⊏",fV="⊑",pV="⊏",mV="⊑",hV="⊐",gV="⊒",vV="⊐",bV="⊒",_V="□",yV="□",wV="⊓",SV="⊏",kV="⊑",xV="⊐",CV="⊒",QV="⊔",AV="▪",IV="□",qV="▪",TV="→",LV="𝒮",EV="𝓈",DV="∖",BV="⌣",PV="⋆",MV="⋆",jV="☆",$V="★",RV="ϵ",OV="ϕ",FV="¯",VV="⊂",NV="⋐",zV="⪽",HV="⫅",UV="⊆",WV="⫃",JV="⫁",GV="⫋",YV="⊊",KV="⪿",ZV="⥹",XV="⊂",eN="⋐",tN="⊆",nN="⫅",oN="⊆",aN="⊊",iN="⫋",rN="⫇",sN="⫕",lN="⫓",cN="⪸",uN="≻",dN="≽",fN="≻",pN="⪰",mN="≽",hN="≿",gN="⪰",vN="⪺",bN="⪶",_N="⋩",yN="≿",wN="∋",SN="∑",kN="∑",xN="♪",CN="¹",QN="²",AN="³",IN="⊃",qN="⋑",TN="⪾",LN="⫘",EN="⫆",DN="⊇",BN="⫄",PN="⊃",MN="⊇",jN="⟉",$N="⫗",RN="⥻",ON="⫂",FN="⫌",VN="⊋",NN="⫀",zN="⊃",HN="⋑",UN="⊇",WN="⫆",JN="⊋",GN="⫌",YN="⫈",KN="⫔",ZN="⫖",XN="⤦",ez="↙",tz="⇙",nz="↙",oz="⤪",az="ß",iz="	",rz="⌖",sz="Τ",lz="τ",cz="⎴",uz="Ť",dz="ť",fz="Ţ",pz="ţ",mz="Т",hz="т",gz="⃛",vz="⌕",bz="𝔗",_z="𝔱",yz="∴",wz="∴",Sz="∴",kz="Θ",xz="θ",Cz="ϑ",Qz="ϑ",Az="≈",Iz="∼",qz="  ",Tz=" ",Lz=" ",Ez="≈",Dz="∼",Bz="Þ",Pz="þ",Mz="˜",jz="∼",$z="≃",Rz="≅",Oz="≈",Fz="⨱",Vz="⊠",Nz="×",zz="⨰",Hz="∭",Uz="⤨",Wz="⌶",Jz="⫱",Gz="⊤",Yz="𝕋",Kz="𝕥",Zz="⫚",Xz="⤩",eH="‴",tH="™",nH="™",oH="▵",aH="▿",iH="◃",rH="⊴",sH="≜",lH="▹",cH="⊵",uH="◬",dH="≜",fH="⨺",pH="⃛",mH="⨹",hH="⧍",gH="⨻",vH="⏢",bH="𝒯",_H="𝓉",yH="Ц",wH="ц",SH="Ћ",kH="ћ",xH="Ŧ",CH="ŧ",QH="≬",AH="↞",IH="↠",qH="Ú",TH="ú",LH="↑",EH="↟",DH="⇑",BH="⥉",PH="Ў",MH="ў",jH="Ŭ",$H="ŭ",RH="Û",OH="û",FH="У",VH="у",NH="⇅",zH="Ű",HH="ű",UH="⥮",WH="⥾",JH="𝔘",GH="𝔲",YH="Ù",KH="ù",ZH="⥣",XH="↿",eU="↾",tU="▀",nU="⌜",oU="⌜",aU="⌏",iU="◸",rU="Ū",sU="ū",lU="¨",cU="_",uU="⏟",dU="⎵",fU="⏝",pU="⋃",mU="⊎",hU="Ų",gU="ų",vU="𝕌",bU="𝕦",_U="⤒",yU="↑",wU="↑",SU="⇑",kU="⇅",xU="↕",CU="↕",QU="⇕",AU="⥮",IU="↿",qU="↾",TU="⊎",LU="↖",EU="↗",DU="υ",BU="ϒ",PU="ϒ",MU="Υ",jU="υ",$U="↥",RU="⊥",OU="⇈",FU="⌝",VU="⌝",NU="⌎",zU="Ů",HU="ů",UU="◹",WU="𝒰",JU="𝓊",GU="⋰",YU="Ũ",KU="ũ",ZU="▵",XU="▴",eW="⇈",tW="Ü",nW="ü",oW="⦧",aW="⦜",iW="ϵ",rW="ϰ",sW="∅",lW="ϕ",cW="ϖ",uW="∝",dW="↕",fW="⇕",pW="ϱ",mW="ς",hW="⊊︀",gW="⫋︀",vW="⊋︀",bW="⫌︀",_W="ϑ",yW="⊲",wW="⊳",SW="⫨",kW="⫫",xW="⫩",CW="В",QW="в",AW="⊢",IW="⊨",qW="⊩",TW="⊫",LW="⫦",EW="⊻",DW="∨",BW="⋁",PW="≚",MW="⋮",jW="|",$W="‖",RW="|",OW="‖",FW="∣",VW="|",NW="❘",zW="≀",HW=" ",UW="𝔙",WW="𝔳",JW="⊲",GW="⊂⃒",YW="⊃⃒",KW="𝕍",ZW="𝕧",XW="∝",eJ="⊳",tJ="𝒱",nJ="𝓋",oJ="⫋︀",aJ="⊊︀",iJ="⫌︀",rJ="⊋︀",sJ="⊪",lJ="⦚",cJ="Ŵ",uJ="ŵ",dJ="⩟",fJ="∧",pJ="⋀",mJ="≙",hJ="℘",gJ="𝔚",vJ="𝔴",bJ="𝕎",_J="𝕨",yJ="℘",wJ="≀",SJ="≀",kJ="𝒲",xJ="𝓌",CJ="⋂",QJ="◯",AJ="⋃",IJ="▽",qJ="𝔛",TJ="𝔵",LJ="⟷",EJ="⟺",DJ="Ξ",BJ="ξ",PJ="⟵",MJ="⟸",jJ="⟼",$J="⋻",RJ="⨀",OJ="𝕏",FJ="𝕩",VJ="⨁",NJ="⨂",zJ="⟶",HJ="⟹",UJ="𝒳",WJ="𝓍",JJ="⨆",GJ="⨄",YJ="△",KJ="⋁",ZJ="⋀",XJ="Ý",eG="ý",tG="Я",nG="я",oG="Ŷ",aG="ŷ",iG="Ы",rG="ы",sG="¥",lG="𝔜",cG="𝔶",uG="Ї",dG="ї",fG="𝕐",pG="𝕪",mG="𝒴",hG="𝓎",gG="Ю",vG="ю",bG="ÿ",_G="Ÿ",yG="Ź",wG="ź",SG="Ž",kG="ž",xG="З",CG="з",QG="Ż",AG="ż",IG="ℨ",qG="​",TG="Ζ",LG="ζ",EG="𝔷",DG="ℨ",BG="Ж",PG="ж",MG="⇝",jG="𝕫",$G="ℤ",RG="𝒵",OG="𝓏",FG="‍",VG="‌",NG={Aacute:Qy,aacute:Ay,Abreve:Iy,abreve:qy,ac:Ty,acd:Ly,acE:Ey,Acirc:Dy,acirc:By,acute:Py,Acy:My,acy:jy,AElig:$y,aelig:Ry,af:Oy,Afr:Fy,afr:Vy,Agrave:Ny,agrave:zy,alefsym:Hy,aleph:Uy,Alpha:Wy,alpha:Jy,Amacr:Gy,amacr:Yy,amalg:Ky,amp:Zy,AMP:Xy,andand:e1,And:t1,and:n1,andd:o1,andslope:a1,andv:i1,ang:r1,ange:s1,angle:l1,angmsdaa:c1,angmsdab:u1,angmsdac:d1,angmsdad:f1,angmsdae:p1,angmsdaf:m1,angmsdag:h1,angmsdah:g1,angmsd:v1,angrt:b1,angrtvb:_1,angrtvbd:y1,angsph:w1,angst:S1,angzarr:k1,Aogon:x1,aogon:C1,Aopf:Q1,aopf:A1,apacir:I1,ap:q1,apE:T1,ape:L1,apid:E1,apos:D1,ApplyFunction:B1,approx:P1,approxeq:M1,Aring:j1,aring:$1,Ascr:R1,ascr:O1,Assign:F1,ast:V1,asymp:N1,asympeq:z1,Atilde:H1,atilde:U1,Auml:W1,auml:J1,awconint:G1,awint:Y1,backcong:K1,backepsilon:Z1,backprime:X1,backsim:e0,backsimeq:t0,Backslash:n0,Barv:o0,barvee:a0,barwed:i0,Barwed:r0,barwedge:s0,bbrk:l0,bbrktbrk:c0,bcong:u0,Bcy:d0,bcy:f0,bdquo:p0,becaus:m0,because:h0,Because:g0,bemptyv:v0,bepsi:b0,bernou:_0,Bernoullis:y0,Beta:w0,beta:S0,beth:k0,between:x0,Bfr:C0,bfr:Q0,bigcap:A0,bigcirc:I0,bigcup:q0,bigodot:T0,bigoplus:L0,bigotimes:E0,bigsqcup:D0,bigstar:B0,bigtriangledown:P0,bigtriangleup:M0,biguplus:j0,bigvee:$0,bigwedge:R0,bkarow:O0,blacklozenge:F0,blacksquare:V0,blacktriangle:N0,blacktriangledown:z0,blacktriangleleft:H0,blacktriangleright:U0,blank:W0,blk12:J0,blk14:G0,blk34:Y0,block:K0,bne:Z0,bnequiv:X0,bNot:ew,bnot:tw,Bopf:nw,bopf:ow,bot:aw,bottom:iw,bowtie:rw,boxbox:sw,boxdl:lw,boxdL:cw,boxDl:uw,boxDL:dw,boxdr:fw,boxdR:pw,boxDr:mw,boxDR:hw,boxh:gw,boxH:vw,boxhd:bw,boxHd:_w,boxhD:yw,boxHD:ww,boxhu:Sw,boxHu:kw,boxhU:xw,boxHU:Cw,boxminus:Qw,boxplus:Aw,boxtimes:Iw,boxul:qw,boxuL:Tw,boxUl:Lw,boxUL:Ew,boxur:Dw,boxuR:Bw,boxUr:Pw,boxUR:Mw,boxv:jw,boxV:$w,boxvh:Rw,boxvH:Ow,boxVh:Fw,boxVH:Vw,boxvl:Nw,boxvL:zw,boxVl:Hw,boxVL:Uw,boxvr:Ww,boxvR:Jw,boxVr:Gw,boxVR:Yw,bprime:Kw,breve:Zw,Breve:Xw,brvbar:eS,bscr:tS,Bscr:nS,bsemi:oS,bsim:aS,bsime:iS,bsolb:rS,bsol:sS,bsolhsub:lS,bull:cS,bullet:uS,bump:dS,bumpE:fS,bumpe:pS,Bumpeq:mS,bumpeq:hS,Cacute:gS,cacute:vS,capand:bS,capbrcup:_S,capcap:yS,cap:wS,Cap:SS,capcup:kS,capdot:xS,CapitalDifferentialD:CS,caps:QS,caret:AS,caron:IS,Cayleys:qS,ccaps:TS,Ccaron:LS,ccaron:ES,Ccedil:DS,ccedil:BS,Ccirc:PS,ccirc:MS,Cconint:jS,ccups:$S,ccupssm:RS,Cdot:OS,cdot:FS,cedil:VS,Cedilla:NS,cemptyv:zS,cent:HS,centerdot:US,CenterDot:WS,cfr:JS,Cfr:GS,CHcy:YS,chcy:KS,check:ZS,checkmark:XS,Chi:ek,chi:tk,circ:nk,circeq:ok,circlearrowleft:ak,circlearrowright:ik,circledast:rk,circledcirc:sk,circleddash:lk,CircleDot:ck,circledR:uk,circledS:dk,CircleMinus:fk,CirclePlus:pk,CircleTimes:mk,cir:hk,cirE:gk,cire:vk,cirfnint:bk,cirmid:_k,cirscir:yk,ClockwiseContourIntegral:wk,CloseCurlyDoubleQuote:Sk,CloseCurlyQuote:kk,clubs:xk,clubsuit:Ck,colon:Qk,Colon:Ak,Colone:Ik,colone:qk,coloneq:Tk,comma:Lk,commat:Ek,comp:Dk,compfn:Bk,complement:Pk,complexes:Mk,cong:jk,congdot:$k,Congruent:Rk,conint:Ok,Conint:Fk,ContourIntegral:Vk,copf:Nk,Copf:zk,coprod:Hk,Coproduct:Uk,copy:Wk,COPY:Jk,copysr:Gk,CounterClockwiseContourIntegral:Yk,crarr:Kk,cross:Zk,Cross:Xk,Cscr:ex,cscr:tx,csub:nx,csube:ox,csup:ax,csupe:ix,ctdot:rx,cudarrl:sx,cudarrr:lx,cuepr:cx,cuesc:ux,cularr:dx,cularrp:fx,cupbrcap:px,cupcap:mx,CupCap:hx,cup:gx,Cup:vx,cupcup:bx,cupdot:_x,cupor:yx,cups:wx,curarr:Sx,curarrm:kx,curlyeqprec:xx,curlyeqsucc:Cx,curlyvee:Qx,curlywedge:Ax,curren:Ix,curvearrowleft:qx,curvearrowright:Tx,cuvee:Lx,cuwed:Ex,cwconint:Dx,cwint:Bx,cylcty:Px,dagger:Mx,Dagger:jx,daleth:$x,darr:Rx,Darr:Ox,dArr:Fx,dash:Vx,Dashv:Nx,dashv:zx,dbkarow:Hx,dblac:Ux,Dcaron:Wx,dcaron:Jx,Dcy:Gx,dcy:Yx,ddagger:Kx,ddarr:Zx,DD:Xx,dd:e2,DDotrahd:t2,ddotseq:n2,deg:o2,Del:a2,Delta:i2,delta:r2,demptyv:s2,dfisht:l2,Dfr:c2,dfr:u2,dHar:d2,dharl:f2,dharr:p2,DiacriticalAcute:m2,DiacriticalDot:h2,DiacriticalDoubleAcute:g2,DiacriticalGrave:v2,DiacriticalTilde:b2,diam:_2,diamond:y2,Diamond:w2,diamondsuit:S2,diams:k2,die:x2,DifferentialD:C2,digamma:Q2,disin:A2,div:I2,divide:q2,divideontimes:T2,divonx:L2,DJcy:E2,djcy:D2,dlcorn:B2,dlcrop:P2,dollar:M2,Dopf:j2,dopf:$2,Dot:R2,dot:O2,DotDot:F2,doteq:V2,doteqdot:N2,DotEqual:z2,dotminus:H2,dotplus:U2,dotsquare:W2,doublebarwedge:J2,DoubleContourIntegral:G2,DoubleDot:Y2,DoubleDownArrow:K2,DoubleLeftArrow:Z2,DoubleLeftRightArrow:X2,DoubleLeftTee:eC,DoubleLongLeftArrow:tC,DoubleLongLeftRightArrow:nC,DoubleLongRightArrow:oC,DoubleRightArrow:aC,DoubleRightTee:iC,DoubleUpArrow:rC,DoubleUpDownArrow:sC,DoubleVerticalBar:lC,DownArrowBar:cC,downarrow:uC,DownArrow:dC,Downarrow:fC,DownArrowUpArrow:pC,DownBreve:mC,downdownarrows:hC,downharpoonleft:gC,downharpoonright:vC,DownLeftRightVector:bC,DownLeftTeeVector:_C,DownLeftVectorBar:yC,DownLeftVector:wC,DownRightTeeVector:SC,DownRightVectorBar:kC,DownRightVector:xC,DownTeeArrow:CC,DownTee:QC,drbkarow:AC,drcorn:IC,drcrop:qC,Dscr:TC,dscr:LC,DScy:EC,dscy:DC,dsol:BC,Dstrok:PC,dstrok:MC,dtdot:jC,dtri:$C,dtrif:RC,duarr:OC,duhar:FC,dwangle:VC,DZcy:NC,dzcy:zC,dzigrarr:HC,Eacute:UC,eacute:WC,easter:JC,Ecaron:GC,ecaron:YC,Ecirc:KC,ecirc:ZC,ecir:XC,ecolon:e3,Ecy:t3,ecy:n3,eDDot:o3,Edot:a3,edot:i3,eDot:r3,ee:s3,efDot:l3,Efr:c3,efr:u3,eg:d3,Egrave:f3,egrave:p3,egs:m3,egsdot:h3,el:g3,Element:v3,elinters:b3,ell:_3,els:y3,elsdot:w3,Emacr:S3,emacr:k3,empty:x3,emptyset:C3,EmptySmallSquare:Q3,emptyv:A3,EmptyVerySmallSquare:I3,emsp13:q3,emsp14:T3,emsp:L3,ENG:E3,eng:D3,ensp:B3,Eogon:P3,eogon:M3,Eopf:j3,eopf:$3,epar:R3,eparsl:O3,eplus:F3,epsi:V3,Epsilon:N3,epsilon:z3,epsiv:H3,eqcirc:U3,eqcolon:W3,eqsim:J3,eqslantgtr:G3,eqslantless:Y3,Equal:K3,equals:Z3,EqualTilde:X3,equest:eQ,Equilibrium:tQ,equiv:nQ,equivDD:oQ,eqvparsl:aQ,erarr:iQ,erDot:rQ,escr:sQ,Escr:lQ,esdot:cQ,Esim:uQ,esim:dQ,Eta:fQ,eta:pQ,ETH:mQ,eth:hQ,Euml:gQ,euml:vQ,euro:bQ,excl:_Q,exist:yQ,Exists:wQ,expectation:SQ,exponentiale:kQ,ExponentialE:xQ,fallingdotseq:CQ,Fcy:QQ,fcy:AQ,female:IQ,ffilig:qQ,fflig:TQ,ffllig:LQ,Ffr:EQ,ffr:DQ,filig:BQ,FilledSmallSquare:PQ,FilledVerySmallSquare:MQ,fjlig:jQ,flat:$Q,fllig:RQ,fltns:OQ,fnof:FQ,Fopf:VQ,fopf:NQ,forall:zQ,ForAll:HQ,fork:UQ,forkv:WQ,Fouriertrf:JQ,fpartint:GQ,frac12:YQ,frac13:KQ,frac14:ZQ,frac15:XQ,frac16:e4,frac18:t4,frac23:n4,frac25:o4,frac34:a4,frac35:i4,frac38:r4,frac45:s4,frac56:l4,frac58:c4,frac78:u4,frasl:d4,frown:f4,fscr:p4,Fscr:m4,gacute:h4,Gamma:g4,gamma:v4,Gammad:b4,gammad:_4,gap:y4,Gbreve:w4,gbreve:S4,Gcedil:k4,Gcirc:x4,gcirc:C4,Gcy:Q4,gcy:A4,Gdot:I4,gdot:q4,ge:T4,gE:L4,gEl:E4,gel:D4,geq:B4,geqq:P4,geqslant:M4,gescc:j4,ges:$4,gesdot:R4,gesdoto:O4,gesdotol:F4,gesl:V4,gesles:N4,Gfr:z4,gfr:H4,gg:U4,Gg:W4,ggg:J4,gimel:G4,GJcy:Y4,gjcy:K4,gla:Z4,gl:X4,glE:eA,glj:tA,gnap:nA,gnapprox:oA,gne:aA,gnE:iA,gneq:rA,gneqq:sA,gnsim:lA,Gopf:cA,gopf:uA,grave:dA,GreaterEqual:fA,GreaterEqualLess:pA,GreaterFullEqual:mA,GreaterGreater:hA,GreaterLess:gA,GreaterSlantEqual:vA,GreaterTilde:bA,Gscr:_A,gscr:yA,gsim:wA,gsime:SA,gsiml:kA,gtcc:xA,gtcir:CA,gt:QA,GT:AA,Gt:IA,gtdot:qA,gtlPar:TA,gtquest:LA,gtrapprox:EA,gtrarr:DA,gtrdot:BA,gtreqless:PA,gtreqqless:MA,gtrless:jA,gtrsim:$A,gvertneqq:RA,gvnE:OA,Hacek:FA,hairsp:VA,half:NA,hamilt:zA,HARDcy:HA,hardcy:UA,harrcir:WA,harr:JA,hArr:GA,harrw:YA,Hat:KA,hbar:ZA,Hcirc:XA,hcirc:e5,hearts:t5,heartsuit:n5,hellip:o5,hercon:a5,hfr:i5,Hfr:r5,HilbertSpace:s5,hksearow:l5,hkswarow:c5,hoarr:u5,homtht:d5,hookleftarrow:f5,hookrightarrow:p5,hopf:m5,Hopf:h5,horbar:g5,HorizontalLine:v5,hscr:b5,Hscr:_5,hslash:y5,Hstrok:w5,hstrok:S5,HumpDownHump:k5,HumpEqual:x5,hybull:C5,hyphen:Q5,Iacute:A5,iacute:I5,ic:q5,Icirc:T5,icirc:L5,Icy:E5,icy:D5,Idot:B5,IEcy:P5,iecy:M5,iexcl:j5,iff:$5,ifr:R5,Ifr:O5,Igrave:F5,igrave:V5,ii:N5,iiiint:z5,iiint:H5,iinfin:U5,iiota:W5,IJlig:J5,ijlig:G5,Imacr:Y5,imacr:K5,image:Z5,ImaginaryI:X5,imagline:eI,imagpart:tI,imath:nI,Im:oI,imof:aI,imped:iI,Implies:rI,incare:sI,in:"∈",infin:lI,infintie:cI,inodot:uI,intcal:dI,int:fI,Int:pI,integers:mI,Integral:hI,intercal:gI,Intersection:vI,intlarhk:bI,intprod:_I,InvisibleComma:yI,InvisibleTimes:wI,IOcy:SI,iocy:kI,Iogon:xI,iogon:CI,Iopf:QI,iopf:AI,Iota:II,iota:qI,iprod:TI,iquest:LI,iscr:EI,Iscr:DI,isin:BI,isindot:PI,isinE:MI,isins:jI,isinsv:$I,isinv:RI,it:OI,Itilde:FI,itilde:VI,Iukcy:NI,iukcy:zI,Iuml:HI,iuml:UI,Jcirc:WI,jcirc:JI,Jcy:GI,jcy:YI,Jfr:KI,jfr:ZI,jmath:XI,Jopf:eq,jopf:tq,Jscr:nq,jscr:oq,Jsercy:aq,jsercy:iq,Jukcy:rq,jukcy:sq,Kappa:lq,kappa:cq,kappav:uq,Kcedil:dq,kcedil:fq,Kcy:pq,kcy:mq,Kfr:hq,kfr:gq,kgreen:vq,KHcy:bq,khcy:_q,KJcy:yq,kjcy:wq,Kopf:Sq,kopf:kq,Kscr:xq,kscr:Cq,lAarr:Qq,Lacute:Aq,lacute:Iq,laemptyv:qq,lagran:Tq,Lambda:Lq,lambda:Eq,lang:Dq,Lang:Bq,langd:Pq,langle:Mq,lap:jq,Laplacetrf:$q,laquo:Rq,larrb:Oq,larrbfs:Fq,larr:Vq,Larr:Nq,lArr:zq,larrfs:Hq,larrhk:Uq,larrlp:Wq,larrpl:Jq,larrsim:Gq,larrtl:Yq,latail:Kq,lAtail:Zq,lat:Xq,late:e6,lates:t6,lbarr:n6,lBarr:o6,lbbrk:a6,lbrace:i6,lbrack:r6,lbrke:s6,lbrksld:l6,lbrkslu:c6,Lcaron:u6,lcaron:d6,Lcedil:f6,lcedil:p6,lceil:m6,lcub:h6,Lcy:g6,lcy:v6,ldca:b6,ldquo:_6,ldquor:y6,ldrdhar:w6,ldrushar:S6,ldsh:k6,le:x6,lE:C6,LeftAngleBracket:Q6,LeftArrowBar:A6,leftarrow:I6,LeftArrow:q6,Leftarrow:T6,LeftArrowRightArrow:L6,leftarrowtail:E6,LeftCeiling:D6,LeftDoubleBracket:B6,LeftDownTeeVector:P6,LeftDownVectorBar:M6,LeftDownVector:j6,LeftFloor:$6,leftharpoondown:R6,leftharpoonup:O6,leftleftarrows:F6,leftrightarrow:V6,LeftRightArrow:N6,Leftrightarrow:z6,leftrightarrows:H6,leftrightharpoons:U6,leftrightsquigarrow:W6,LeftRightVector:J6,LeftTeeArrow:G6,LeftTee:Y6,LeftTeeVector:K6,leftthreetimes:Z6,LeftTriangleBar:X6,LeftTriangle:eT,LeftTriangleEqual:tT,LeftUpDownVector:nT,LeftUpTeeVector:oT,LeftUpVectorBar:aT,LeftUpVector:iT,LeftVectorBar:rT,LeftVector:sT,lEg:lT,leg:cT,leq:uT,leqq:dT,leqslant:fT,lescc:pT,les:mT,lesdot:hT,lesdoto:gT,lesdotor:vT,lesg:bT,lesges:_T,lessapprox:yT,lessdot:wT,lesseqgtr:ST,lesseqqgtr:kT,LessEqualGreater:xT,LessFullEqual:CT,LessGreater:QT,lessgtr:AT,LessLess:IT,lesssim:qT,LessSlantEqual:TT,LessTilde:LT,lfisht:ET,lfloor:DT,Lfr:BT,lfr:PT,lg:MT,lgE:jT,lHar:$T,lhard:RT,lharu:OT,lharul:FT,lhblk:VT,LJcy:NT,ljcy:zT,llarr:HT,ll:UT,Ll:WT,llcorner:JT,Lleftarrow:GT,llhard:YT,lltri:KT,Lmidot:ZT,lmidot:XT,lmoustache:e8,lmoust:t8,lnap:n8,lnapprox:o8,lne:a8,lnE:i8,lneq:r8,lneqq:s8,lnsim:l8,loang:c8,loarr:u8,lobrk:d8,longleftarrow:f8,LongLeftArrow:p8,Longleftarrow:m8,longleftrightarrow:h8,LongLeftRightArrow:g8,Longleftrightarrow:v8,longmapsto:b8,longrightarrow:_8,LongRightArrow:y8,Longrightarrow:w8,looparrowleft:S8,looparrowright:k8,lopar:x8,Lopf:C8,lopf:Q8,loplus:A8,lotimes:I8,lowast:q8,lowbar:T8,LowerLeftArrow:L8,LowerRightArrow:E8,loz:D8,lozenge:B8,lozf:P8,lpar:M8,lparlt:j8,lrarr:$8,lrcorner:R8,lrhar:O8,lrhard:F8,lrm:V8,lrtri:N8,lsaquo:z8,lscr:H8,Lscr:U8,lsh:W8,Lsh:J8,lsim:G8,lsime:Y8,lsimg:K8,lsqb:Z8,lsquo:X8,lsquor:eL,Lstrok:tL,lstrok:nL,ltcc:oL,ltcir:aL,lt:iL,LT:rL,Lt:sL,ltdot:lL,lthree:cL,ltimes:uL,ltlarr:dL,ltquest:fL,ltri:pL,ltrie:mL,ltrif:hL,ltrPar:gL,lurdshar:vL,luruhar:bL,lvertneqq:_L,lvnE:yL,macr:wL,male:SL,malt:kL,maltese:xL,Map:"⤅",map:CL,mapsto:QL,mapstodown:AL,mapstoleft:IL,mapstoup:qL,marker:TL,mcomma:LL,Mcy:EL,mcy:DL,mdash:BL,mDDot:PL,measuredangle:ML,MediumSpace:jL,Mellintrf:$L,Mfr:RL,mfr:OL,mho:FL,micro:VL,midast:NL,midcir:zL,mid:HL,middot:UL,minusb:WL,minus:JL,minusd:GL,minusdu:YL,MinusPlus:KL,mlcp:ZL,mldr:XL,mnplus:eE,models:tE,Mopf:nE,mopf:oE,mp:aE,mscr:iE,Mscr:rE,mstpos:sE,Mu:lE,mu:cE,multimap:uE,mumap:dE,nabla:fE,Nacute:pE,nacute:mE,nang:hE,nap:gE,napE:vE,napid:bE,napos:_E,napprox:yE,natural:wE,naturals:SE,natur:kE,nbsp:xE,nbump:CE,nbumpe:QE,ncap:AE,Ncaron:IE,ncaron:qE,Ncedil:TE,ncedil:LE,ncong:EE,ncongdot:DE,ncup:BE,Ncy:PE,ncy:ME,ndash:jE,nearhk:$E,nearr:RE,neArr:OE,nearrow:FE,ne:VE,nedot:NE,NegativeMediumSpace:zE,NegativeThickSpace:HE,NegativeThinSpace:UE,NegativeVeryThinSpace:WE,nequiv:JE,nesear:GE,nesim:YE,NestedGreaterGreater:KE,NestedLessLess:ZE,NewLine:XE,nexist:eD,nexists:tD,Nfr:nD,nfr:oD,ngE:aD,nge:iD,ngeq:rD,ngeqq:sD,ngeqslant:lD,nges:cD,nGg:uD,ngsim:dD,nGt:fD,ngt:pD,ngtr:mD,nGtv:hD,nharr:gD,nhArr:vD,nhpar:bD,ni:_D,nis:yD,nisd:wD,niv:SD,NJcy:kD,njcy:xD,nlarr:CD,nlArr:QD,nldr:AD,nlE:ID,nle:qD,nleftarrow:TD,nLeftarrow:LD,nleftrightarrow:ED,nLeftrightarrow:DD,nleq:BD,nleqq:PD,nleqslant:MD,nles:jD,nless:$D,nLl:RD,nlsim:OD,nLt:FD,nlt:VD,nltri:ND,nltrie:zD,nLtv:HD,nmid:UD,NoBreak:WD,NonBreakingSpace:JD,nopf:GD,Nopf:YD,Not:KD,not:ZD,NotCongruent:XD,NotCupCap:eB,NotDoubleVerticalBar:tB,NotElement:nB,NotEqual:oB,NotEqualTilde:aB,NotExists:iB,NotGreater:rB,NotGreaterEqual:sB,NotGreaterFullEqual:lB,NotGreaterGreater:cB,NotGreaterLess:uB,NotGreaterSlantEqual:dB,NotGreaterTilde:fB,NotHumpDownHump:pB,NotHumpEqual:mB,notin:hB,notindot:gB,notinE:vB,notinva:bB,notinvb:_B,notinvc:yB,NotLeftTriangleBar:wB,NotLeftTriangle:SB,NotLeftTriangleEqual:kB,NotLess:xB,NotLessEqual:CB,NotLessGreater:QB,NotLessLess:AB,NotLessSlantEqual:IB,NotLessTilde:qB,NotNestedGreaterGreater:TB,NotNestedLessLess:LB,notni:EB,notniva:DB,notnivb:BB,notnivc:PB,NotPrecedes:MB,NotPrecedesEqual:jB,NotPrecedesSlantEqual:$B,NotReverseElement:RB,NotRightTriangleBar:OB,NotRightTriangle:FB,NotRightTriangleEqual:VB,NotSquareSubset:NB,NotSquareSubsetEqual:zB,NotSquareSuperset:HB,NotSquareSupersetEqual:UB,NotSubset:WB,NotSubsetEqual:JB,NotSucceeds:GB,NotSucceedsEqual:YB,NotSucceedsSlantEqual:KB,NotSucceedsTilde:ZB,NotSuperset:XB,NotSupersetEqual:e9,NotTilde:t9,NotTildeEqual:n9,NotTildeFullEqual:o9,NotTildeTilde:a9,NotVerticalBar:i9,nparallel:r9,npar:s9,nparsl:l9,npart:c9,npolint:u9,npr:d9,nprcue:f9,nprec:p9,npreceq:m9,npre:h9,nrarrc:g9,nrarr:v9,nrArr:b9,nrarrw:_9,nrightarrow:y9,nRightarrow:w9,nrtri:S9,nrtrie:k9,nsc:x9,nsccue:C9,nsce:Q9,Nscr:A9,nscr:I9,nshortmid:q9,nshortparallel:T9,nsim:L9,nsime:E9,nsimeq:D9,nsmid:B9,nspar:P9,nsqsube:M9,nsqsupe:j9,nsub:$9,nsubE:R9,nsube:O9,nsubset:F9,nsubseteq:V9,nsubseteqq:N9,nsucc:z9,nsucceq:H9,nsup:U9,nsupE:W9,nsupe:J9,nsupset:G9,nsupseteq:Y9,nsupseteqq:K9,ntgl:Z9,Ntilde:X9,ntilde:eP,ntlg:tP,ntriangleleft:nP,ntrianglelefteq:oP,ntriangleright:aP,ntrianglerighteq:iP,Nu:rP,nu:sP,num:lP,numero:cP,numsp:uP,nvap:dP,nvdash:fP,nvDash:pP,nVdash:mP,nVDash:hP,nvge:gP,nvgt:vP,nvHarr:bP,nvinfin:_P,nvlArr:yP,nvle:wP,nvlt:SP,nvltrie:kP,nvrArr:xP,nvrtrie:CP,nvsim:QP,nwarhk:AP,nwarr:IP,nwArr:qP,nwarrow:TP,nwnear:LP,Oacute:EP,oacute:DP,oast:BP,Ocirc:PP,ocirc:MP,ocir:jP,Ocy:$P,ocy:RP,odash:OP,Odblac:FP,odblac:VP,odiv:NP,odot:zP,odsold:HP,OElig:UP,oelig:WP,ofcir:JP,Ofr:GP,ofr:YP,ogon:KP,Ograve:ZP,ograve:XP,ogt:eM,ohbar:tM,ohm:nM,oint:oM,olarr:aM,olcir:iM,olcross:rM,oline:sM,olt:lM,Omacr:cM,omacr:uM,Omega:dM,omega:fM,Omicron:pM,omicron:mM,omid:hM,ominus:gM,Oopf:vM,oopf:bM,opar:_M,OpenCurlyDoubleQuote:yM,OpenCurlyQuote:wM,operp:SM,oplus:kM,orarr:xM,Or:CM,or:QM,ord:AM,order:IM,orderof:qM,ordf:TM,ordm:LM,origof:EM,oror:DM,orslope:BM,orv:PM,oS:MM,Oscr:jM,oscr:$M,Oslash:RM,oslash:OM,osol:FM,Otilde:VM,otilde:NM,otimesas:zM,Otimes:HM,otimes:UM,Ouml:WM,ouml:JM,ovbar:GM,OverBar:YM,OverBrace:KM,OverBracket:ZM,OverParenthesis:XM,para:e7,parallel:t7,par:n7,parsim:o7,parsl:a7,part:i7,PartialD:r7,Pcy:s7,pcy:l7,percnt:c7,period:u7,permil:d7,perp:f7,pertenk:p7,Pfr:m7,pfr:h7,Phi:g7,phi:v7,phiv:b7,phmmat:_7,phone:y7,Pi:w7,pi:S7,pitchfork:k7,piv:x7,planck:C7,planckh:Q7,plankv:A7,plusacir:I7,plusb:q7,pluscir:T7,plus:L7,plusdo:E7,plusdu:D7,pluse:B7,PlusMinus:P7,plusmn:M7,plussim:j7,plustwo:$7,pm:R7,Poincareplane:O7,pointint:F7,popf:V7,Popf:N7,pound:z7,prap:H7,Pr:U7,pr:W7,prcue:J7,precapprox:G7,prec:Y7,preccurlyeq:K7,Precedes:Z7,PrecedesEqual:X7,PrecedesSlantEqual:ej,PrecedesTilde:tj,preceq:nj,precnapprox:oj,precneqq:aj,precnsim:ij,pre:rj,prE:sj,precsim:lj,prime:cj,Prime:uj,primes:dj,prnap:fj,prnE:pj,prnsim:mj,prod:hj,Product:gj,profalar:vj,profline:bj,profsurf:_j,prop:yj,Proportional:wj,Proportion:Sj,propto:kj,prsim:xj,prurel:Cj,Pscr:Qj,pscr:Aj,Psi:Ij,psi:qj,puncsp:Tj,Qfr:Lj,qfr:Ej,qint:Dj,qopf:Bj,Qopf:Pj,qprime:Mj,Qscr:jj,qscr:$j,quaternions:Rj,quatint:Oj,quest:Fj,questeq:Vj,quot:Nj,QUOT:zj,rAarr:Hj,race:Uj,Racute:Wj,racute:Jj,radic:Gj,raemptyv:Yj,rang:Kj,Rang:Zj,rangd:Xj,range:e$,rangle:t$,raquo:n$,rarrap:o$,rarrb:a$,rarrbfs:i$,rarrc:r$,rarr:s$,Rarr:l$,rArr:c$,rarrfs:u$,rarrhk:d$,rarrlp:f$,rarrpl:p$,rarrsim:m$,Rarrtl:h$,rarrtl:g$,rarrw:v$,ratail:b$,rAtail:_$,ratio:y$,rationals:w$,rbarr:S$,rBarr:k$,RBarr:x$,rbbrk:C$,rbrace:Q$,rbrack:A$,rbrke:I$,rbrksld:q$,rbrkslu:T$,Rcaron:L$,rcaron:E$,Rcedil:D$,rcedil:B$,rceil:P$,rcub:M$,Rcy:j$,rcy:$$,rdca:R$,rdldhar:O$,rdquo:F$,rdquor:V$,rdsh:N$,real:z$,realine:H$,realpart:U$,reals:W$,Re:J$,rect:G$,reg:Y$,REG:K$,ReverseElement:Z$,ReverseEquilibrium:X$,ReverseUpEquilibrium:eR,rfisht:tR,rfloor:nR,rfr:oR,Rfr:aR,rHar:iR,rhard:rR,rharu:sR,rharul:lR,Rho:cR,rho:uR,rhov:dR,RightAngleBracket:fR,RightArrowBar:pR,rightarrow:mR,RightArrow:hR,Rightarrow:gR,RightArrowLeftArrow:vR,rightarrowtail:bR,RightCeiling:_R,RightDoubleBracket:yR,RightDownTeeVector:wR,RightDownVectorBar:SR,RightDownVector:kR,RightFloor:xR,rightharpoondown:CR,rightharpoonup:QR,rightleftarrows:AR,rightleftharpoons:IR,rightrightarrows:qR,rightsquigarrow:TR,RightTeeArrow:LR,RightTee:ER,RightTeeVector:DR,rightthreetimes:BR,RightTriangleBar:PR,RightTriangle:MR,RightTriangleEqual:jR,RightUpDownVector:$R,RightUpTeeVector:RR,RightUpVectorBar:OR,RightUpVector:FR,RightVectorBar:VR,RightVector:NR,ring:zR,risingdotseq:HR,rlarr:UR,rlhar:WR,rlm:JR,rmoustache:GR,rmoust:YR,rnmid:KR,roang:ZR,roarr:XR,robrk:eO,ropar:tO,ropf:nO,Ropf:oO,roplus:aO,rotimes:iO,RoundImplies:rO,rpar:sO,rpargt:lO,rppolint:cO,rrarr:uO,Rrightarrow:dO,rsaquo:fO,rscr:pO,Rscr:mO,rsh:hO,Rsh:gO,rsqb:vO,rsquo:bO,rsquor:_O,rthree:yO,rtimes:wO,rtri:SO,rtrie:kO,rtrif:xO,rtriltri:CO,RuleDelayed:QO,ruluhar:AO,rx:IO,Sacute:qO,sacute:TO,sbquo:LO,scap:EO,Scaron:DO,scaron:BO,Sc:PO,sc:MO,sccue:jO,sce:$O,scE:RO,Scedil:OO,scedil:FO,Scirc:VO,scirc:NO,scnap:zO,scnE:HO,scnsim:UO,scpolint:WO,scsim:JO,Scy:GO,scy:YO,sdotb:KO,sdot:ZO,sdote:XO,searhk:eF,searr:tF,seArr:nF,searrow:oF,sect:aF,semi:iF,seswar:rF,setminus:sF,setmn:lF,sext:cF,Sfr:uF,sfr:dF,sfrown:fF,sharp:pF,SHCHcy:mF,shchcy:hF,SHcy:gF,shcy:vF,ShortDownArrow:bF,ShortLeftArrow:_F,shortmid:yF,shortparallel:wF,ShortRightArrow:SF,ShortUpArrow:kF,shy:xF,Sigma:CF,sigma:QF,sigmaf:AF,sigmav:IF,sim:qF,simdot:TF,sime:LF,simeq:EF,simg:DF,simgE:BF,siml:PF,simlE:MF,simne:jF,simplus:$F,simrarr:RF,slarr:OF,SmallCircle:FF,smallsetminus:VF,smashp:NF,smeparsl:zF,smid:HF,smile:UF,smt:WF,smte:JF,smtes:GF,SOFTcy:YF,softcy:KF,solbar:ZF,solb:XF,sol:eV,Sopf:tV,sopf:nV,spades:oV,spadesuit:aV,spar:iV,sqcap:rV,sqcaps:sV,sqcup:lV,sqcups:cV,Sqrt:uV,sqsub:dV,sqsube:fV,sqsubset:pV,sqsubseteq:mV,sqsup:hV,sqsupe:gV,sqsupset:vV,sqsupseteq:bV,square:_V,Square:yV,SquareIntersection:wV,SquareSubset:SV,SquareSubsetEqual:kV,SquareSuperset:xV,SquareSupersetEqual:CV,SquareUnion:QV,squarf:AV,squ:IV,squf:qV,srarr:TV,Sscr:LV,sscr:EV,ssetmn:DV,ssmile:BV,sstarf:PV,Star:MV,star:jV,starf:$V,straightepsilon:RV,straightphi:OV,strns:FV,sub:VV,Sub:NV,subdot:zV,subE:HV,sube:UV,subedot:WV,submult:JV,subnE:GV,subne:YV,subplus:KV,subrarr:ZV,subset:XV,Subset:eN,subseteq:tN,subseteqq:nN,SubsetEqual:oN,subsetneq:aN,subsetneqq:iN,subsim:rN,subsub:sN,subsup:lN,succapprox:cN,succ:uN,succcurlyeq:dN,Succeeds:fN,SucceedsEqual:pN,SucceedsSlantEqual:mN,SucceedsTilde:hN,succeq:gN,succnapprox:vN,succneqq:bN,succnsim:_N,succsim:yN,SuchThat:wN,sum:SN,Sum:kN,sung:xN,sup1:CN,sup2:QN,sup3:AN,sup:IN,Sup:qN,supdot:TN,supdsub:LN,supE:EN,supe:DN,supedot:BN,Superset:PN,SupersetEqual:MN,suphsol:jN,suphsub:$N,suplarr:RN,supmult:ON,supnE:FN,supne:VN,supplus:NN,supset:zN,Supset:HN,supseteq:UN,supseteqq:WN,supsetneq:JN,supsetneqq:GN,supsim:YN,supsub:KN,supsup:ZN,swarhk:XN,swarr:ez,swArr:tz,swarrow:nz,swnwar:oz,szlig:az,Tab:iz,target:rz,Tau:sz,tau:lz,tbrk:cz,Tcaron:uz,tcaron:dz,Tcedil:fz,tcedil:pz,Tcy:mz,tcy:hz,tdot:gz,telrec:vz,Tfr:bz,tfr:_z,there4:yz,therefore:wz,Therefore:Sz,Theta:kz,theta:xz,thetasym:Cz,thetav:Qz,thickapprox:Az,thicksim:Iz,ThickSpace:qz,ThinSpace:Tz,thinsp:Lz,thkap:Ez,thksim:Dz,THORN:Bz,thorn:Pz,tilde:Mz,Tilde:jz,TildeEqual:$z,TildeFullEqual:Rz,TildeTilde:Oz,timesbar:Fz,timesb:Vz,times:Nz,timesd:zz,tint:Hz,toea:Uz,topbot:Wz,topcir:Jz,top:Gz,Topf:Yz,topf:Kz,topfork:Zz,tosa:Xz,tprime:eH,trade:tH,TRADE:nH,triangle:oH,triangledown:aH,triangleleft:iH,trianglelefteq:rH,triangleq:sH,triangleright:lH,trianglerighteq:cH,tridot:uH,trie:dH,triminus:fH,TripleDot:pH,triplus:mH,trisb:hH,tritime:gH,trpezium:vH,Tscr:bH,tscr:_H,TScy:yH,tscy:wH,TSHcy:SH,tshcy:kH,Tstrok:xH,tstrok:CH,twixt:QH,twoheadleftarrow:AH,twoheadrightarrow:IH,Uacute:qH,uacute:TH,uarr:LH,Uarr:EH,uArr:DH,Uarrocir:BH,Ubrcy:PH,ubrcy:MH,Ubreve:jH,ubreve:$H,Ucirc:RH,ucirc:OH,Ucy:FH,ucy:VH,udarr:NH,Udblac:zH,udblac:HH,udhar:UH,ufisht:WH,Ufr:JH,ufr:GH,Ugrave:YH,ugrave:KH,uHar:ZH,uharl:XH,uharr:eU,uhblk:tU,ulcorn:nU,ulcorner:oU,ulcrop:aU,ultri:iU,Umacr:rU,umacr:sU,uml:lU,UnderBar:cU,UnderBrace:uU,UnderBracket:dU,UnderParenthesis:fU,Union:pU,UnionPlus:mU,Uogon:hU,uogon:gU,Uopf:vU,uopf:bU,UpArrowBar:_U,uparrow:yU,UpArrow:wU,Uparrow:SU,UpArrowDownArrow:kU,updownarrow:xU,UpDownArrow:CU,Updownarrow:QU,UpEquilibrium:AU,upharpoonleft:IU,upharpoonright:qU,uplus:TU,UpperLeftArrow:LU,UpperRightArrow:EU,upsi:DU,Upsi:BU,upsih:PU,Upsilon:MU,upsilon:jU,UpTeeArrow:$U,UpTee:RU,upuparrows:OU,urcorn:FU,urcorner:VU,urcrop:NU,Uring:zU,uring:HU,urtri:UU,Uscr:WU,uscr:JU,utdot:GU,Utilde:YU,utilde:KU,utri:ZU,utrif:XU,uuarr:eW,Uuml:tW,uuml:nW,uwangle:oW,vangrt:aW,varepsilon:iW,varkappa:rW,varnothing:sW,varphi:lW,varpi:cW,varpropto:uW,varr:dW,vArr:fW,varrho:pW,varsigma:mW,varsubsetneq:hW,varsubsetneqq:gW,varsupsetneq:vW,varsupsetneqq:bW,vartheta:_W,vartriangleleft:yW,vartriangleright:wW,vBar:SW,Vbar:kW,vBarv:xW,Vcy:CW,vcy:QW,vdash:AW,vDash:IW,Vdash:qW,VDash:TW,Vdashl:LW,veebar:EW,vee:DW,Vee:BW,veeeq:PW,vellip:MW,verbar:jW,Verbar:$W,vert:RW,Vert:OW,VerticalBar:FW,VerticalLine:VW,VerticalSeparator:NW,VerticalTilde:zW,VeryThinSpace:HW,Vfr:UW,vfr:WW,vltri:JW,vnsub:GW,vnsup:YW,Vopf:KW,vopf:ZW,vprop:XW,vrtri:eJ,Vscr:tJ,vscr:nJ,vsubnE:oJ,vsubne:aJ,vsupnE:iJ,vsupne:rJ,Vvdash:sJ,vzigzag:lJ,Wcirc:cJ,wcirc:uJ,wedbar:dJ,wedge:fJ,Wedge:pJ,wedgeq:mJ,weierp:hJ,Wfr:gJ,wfr:vJ,Wopf:bJ,wopf:_J,wp:yJ,wr:wJ,wreath:SJ,Wscr:kJ,wscr:xJ,xcap:CJ,xcirc:QJ,xcup:AJ,xdtri:IJ,Xfr:qJ,xfr:TJ,xharr:LJ,xhArr:EJ,Xi:DJ,xi:BJ,xlarr:PJ,xlArr:MJ,xmap:jJ,xnis:$J,xodot:RJ,Xopf:OJ,xopf:FJ,xoplus:VJ,xotime:NJ,xrarr:zJ,xrArr:HJ,Xscr:UJ,xscr:WJ,xsqcup:JJ,xuplus:GJ,xutri:YJ,xvee:KJ,xwedge:ZJ,Yacute:XJ,yacute:eG,YAcy:tG,yacy:nG,Ycirc:oG,ycirc:aG,Ycy:iG,ycy:rG,yen:sG,Yfr:lG,yfr:cG,YIcy:uG,yicy:dG,Yopf:fG,yopf:pG,Yscr:mG,yscr:hG,YUcy:gG,yucy:vG,yuml:bG,Yuml:_G,Zacute:yG,zacute:wG,Zcaron:SG,zcaron:kG,Zcy:xG,zcy:CG,Zdot:QG,zdot:AG,zeetrf:IG,ZeroWidthSpace:qG,Zeta:TG,zeta:LG,zfr:EG,Zfr:DG,ZHcy:BG,zhcy:PG,zigrarr:MG,zopf:jG,Zopf:$G,Zscr:RG,zscr:OG,zwj:FG,zwnj:VG},Xp=NG,il=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,la={},Au={};function zG(e){var t,n,a=Au[e];if(!a){for(a=Au[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),/^[0-9a-z]$/i.test(n)?a.push(n):a.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2));for(t=0;t<e.length;t++)a[e.charCodeAt(t)]=e[t]}return a}function rr(e,t,n){var a,o,i,r,s="";for(typeof t!="string"&&(n=t,t=rr.defaultChars),typeof n>"u"&&(n=!0),r=zG(t),a=0,o=e.length;a<o;a++)i=e.charCodeAt(a),n&&i===37&&a+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(a+1,a+3))?(s+=e.slice(a,a+3),a+=2):i<128?s+=r[i]:i>=55296&&i<=57343?i>=55296&&i<=56319&&a+1<o&&(i=e.charCodeAt(a+1),i>=56320)&&i<=57343?(s+=encodeURIComponent(e[a]+e[a+1]),a++):s+="%EF%BF%BD":s+=encodeURIComponent(e[a]);return s}rr.defaultChars=";/?:@&=+$,-_.!~*'()#",rr.componentChars="-_.!~*'()";var HG=rr,Iu={};function UG(e){var t,n,a=Iu[e];if(!a){for(a=Iu[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),a.push(n);for(t=0;t<e.length;t++)n=e.charCodeAt(t),a[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return a}function sr(e,t){var n;return typeof t!="string"&&(t=sr.defaultChars),n=UG(t),e.replace(/(%[a-f0-9]{2})+/gi,function(a){for(var o,i,r,s,l,u="",c=0,d=a.length;c<d;c+=3)o=parseInt(a.slice(c+1,c+3),16),o<128?u+=n[o]:(224&o)===192&&c+3<d&&(i=parseInt(a.slice(c+4,c+6),16),(192&i)===128)?(l=o<<6&1984|63&i,u+=l<128?"��":String.fromCharCode(l),c+=3):(240&o)===224&&c+6<d&&(i=parseInt(a.slice(c+4,c+6),16),r=parseInt(a.slice(c+7,c+9),16),(192&i)===128)&&(192&r)===128?(l=o<<12&61440|i<<6&4032|63&r,u+=l<2048||l>=55296&&l<=57343?"���":String.fromCharCode(l),c+=6):(248&o)===240&&c+9<d&&(i=parseInt(a.slice(c+4,c+6),16),r=parseInt(a.slice(c+7,c+9),16),s=parseInt(a.slice(c+10,c+12),16),(192&i)===128)&&(192&r)===128&&(192&s)===128?(l=o<<18&1835008|i<<12&258048|r<<6&4032|63&s,l<65536||l>1114111?u+="����":(l-=65536,u+=String.fromCharCode(55296+(l>>10),56320+(1023&l))),c+=9):u+="�";return u})}sr.defaultChars=";/?:@&=+$,#",sr.componentChars="";var WG=sr,JG=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function lr(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var GG=/^([a-z0-9.+-]+:)/i,YG=/:[0-9]*$/,KG=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ZG=["<",">",'"',"`"," ","\r",`
`,"	"],XG=["{","}","|","\\","^","`"].concat(ZG),eY=["'"].concat(XG),qu=["%","/","?",";","#"].concat(eY),Tu=["/","?","#"],tY=255,Lu=/^[+a-z0-9A-Z_-]{0,63}$/,nY=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Eu={javascript:!0,"javascript:":!0},Du={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function oY(e,t){var n;return e&&e instanceof lr?e:(n=new lr,n.parse(e,t),n)}lr.prototype.parse=function(b,t){var n,a,o=b;if(o=o.trim(),!t&&b.split("#").length===1&&(b=KG.exec(o),b))return this.pathname=b[1],b[2]&&(this.search=b[2]),this;if(b=GG.exec(o),b&&(b=b[0],n=b.toLowerCase(),this.protocol=b,o=o.substr(b.length)),(t||b||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(C=o.substr(0,2)==="//",!C||b&&Eu[b]||(o=o.substr(2),this.slashes=!0)),!Eu[b]&&(C||b&&!Du[b])){var i=-1;for(s=0;s<Tu.length;s++)a=o.indexOf(Tu[s]),a!==-1&&(i===-1||a<i)&&(i=a);for(t=i===-1?o.lastIndexOf("@"):o.lastIndexOf("@",i),t!==-1&&(C=o.slice(0,t),o=o.slice(t+1),this.auth=C),i=-1,s=0;s<qu.length;s++)a=o.indexOf(qu[s]),a!==-1&&(i===-1||a<i)&&(i=a);if(i===-1&&(i=o.length),o[i-1]===":"&&i--,b=o.slice(0,i),o=o.slice(i),t=(this.parseHost(b),this.hostname=this.hostname||"",this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]"),!t)for(var r=this.hostname.split(/\./),s=0,l=r.length;s<l;s++){var u=r[s];if(u&&!u.match(Lu)){for(var c="",d=0,p=u.length;d<p;d++)u.charCodeAt(d)>127?c+="x":c+=u[d];if(!c.match(Lu)){var g=r.slice(0,s),_=r.slice(s+1),I=u.match(nY);I&&(g.push(I[1]),_.unshift(I[2])),_.length&&(o=_.join(".")+o),this.hostname=g.join(".");break}}}this.hostname.length>tY&&(this.hostname=""),t&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var C=o.indexOf("#"),b=(C!==-1&&(this.hash=o.substr(C),o=o.slice(0,C)),o.indexOf("?"));return b!==-1&&(this.search=o.substr(b),o=o.slice(0,b)),o&&(this.pathname=o),Du[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this},lr.prototype.parseHost=function(e){var t=YG.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var aY=oY,Ko=(la.encode=HG,la.decode=WG,la.format=JG,la.parse=aY,{}),em=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,tm=/[\0-\x1F\x7F-\x9F]/,iY=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,nm=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Di=(Ko.Any=em,Ko.Cc=tm,Ko.Cf=iY,Ko.P=il,Ko.Z=nm,function(e){function t(D){return Object.prototype.toString.call(D)}function n(D){return t(D)==="[object String]"}var a=Object.prototype.hasOwnProperty;function o(D,R){return a.call(D,R)}function i(D){var R=Array.prototype.slice.call(arguments,1);return R.forEach(function(ae){if(ae){if(typeof ae!="object")throw new TypeError(ae+"must be object");Object.keys(ae).forEach(function(Z){D[Z]=ae[Z]})}}),D}function r(D,R,ae){return[].concat(D.slice(0,R),ae,D.slice(R+1))}function s(D){return!(D>=55296&&D<=57343)&&!(D>=64976&&D<=65007)&&(65535&D)!==65535&&(65535&D)!==65534&&!(D>=0&&D<=8)&&D!==11&&!(D>=14&&D<=31)&&!(D>=127&&D<=159)&&!(D>1114111)}function l(D){var R,ae;return D>65535?(D-=65536,R=55296+(D>>10),ae=56320+(1023&D),String.fromCharCode(R,ae)):String.fromCharCode(D)}var u=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,c=/&([a-z#][a-z0-9]{1,31});/gi,d=new RegExp(u.source+"|"+c.source,"gi"),p=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,g=Xp;function _(D,R){var ae=0;return o(g,R)?g[R]:R.charCodeAt(0)===35&&p.test(R)&&(ae=R[1].toLowerCase()==="x"?parseInt(R.slice(2),16):parseInt(R.slice(1),10),s(ae))?l(ae):D}function I(D){return D.indexOf("\\")<0?D:D.replace(u,"$1")}function C(D){return D.indexOf("\\")<0&&D.indexOf("&")<0?D:D.replace(d,function(R,ae,Z){return ae||_(R,Z)})}var b=/[&<>"]/,w=/[&<>"]/g,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function m(D){return y[D]}function x(D){return b.test(D)?D.replace(w,m):D}var B=/[.?*+^$[\]\\(){}|-]/g;function T(D){return D.replace(B,"\\$&")}function E(D){switch(D){case 9:case 32:return!0}return!1}function O(D){if(D>=8192&&D<=8202)return!0;switch(D){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var F=il;function V(D){return F.test(D)}function j(D){switch(D){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function U(D){return D=D.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(D=D.replace(/ẞ/g,"ß")),D.toLowerCase().toUpperCase()}e.lib={},e.lib.mdurl=la,e.lib.ucmicro=Ko,e.assign=i,e.isString=n,e.has=o,e.unescapeMd=I,e.unescapeAll=C,e.isValidEntityCode=s,e.fromCodePoint=l,e.escapeHtml=x,e.arrayReplaceAt=r,e.isSpace=E,e.isWhiteSpace=O,e.isMdAsciiPunct=j,e.isPunctChar=V,e.escapeRE=T,e.normalizeReference=U}(lt),{}),rY=function(e,t,n){var a,o,i,r,s=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,a=1;e.pos<l;){if(i=e.src.charCodeAt(e.pos),i===93&&(a--,a===0)){o=!0;break}if(r=e.pos,e.md.inline.skipToken(e),i===91){if(r===e.pos-1)a++;else if(n)return e.pos=u,-1}}return o&&(s=e.pos),e.pos=u,s},Bu=lt.unescapeAll,sY=function(e,t,n){var a,o,i=0,r=t,s={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(t)===60)for(t++;t<n;){if(a=e.charCodeAt(t),a===10||a===60)return s;if(a===62)return s.pos=t+1,s.str=Bu(e.slice(r+1,t)),s.ok=!0,s;a===92&&t+1<n?t+=2:t++}else{for(o=0;t<n&&(a=e.charCodeAt(t),!(a===32||a<32||a===127));)if(a===92&&t+1<n){if(e.charCodeAt(t+1)===32)break;t+=2}else{if(a===40&&(o++,o>32))return s;if(a===41){if(o===0)break;o--}t++}r!==t&&o===0&&(s.str=Bu(e.slice(r,t)),s.lines=i,s.pos=t,s.ok=!0)}return s},lY=lt.unescapeAll,cY=function(e,t,n){var a,o,i=0,r=t,s={ok:!1,pos:0,lines:0,str:""};if(!(t>=n)&&(o=e.charCodeAt(t),o===34||o===39||o===40))for(t++,o===40&&(o=41);t<n;){if(a=e.charCodeAt(t),a===o)return s.pos=t+1,s.lines=i,s.str=lY(e.slice(r+1,t)),s.ok=!0,s;if(a===40&&o===41)return s;(a===10||a===92&&t+1<n&&(t++,e.charCodeAt(t)===10))&&i++,t++}return s},uY=(Di.parseLinkLabel=rY,Di.parseLinkDestination=sY,Di.parseLinkTitle=cY,lt.assign),dY=lt.unescapeAll,Zo=lt.escapeHtml,Sn={};function ra(){this.rules=uY({},Sn)}Sn.code_inline=function(e,t,n,a,o){var i=e[t];return"<code"+o.renderAttrs(i)+">"+Zo(e[t].content)+"</code>"},Sn.code_block=function(e,t,n,a,o){var i=e[t];return"<pre"+o.renderAttrs(i)+"><code>"+Zo(e[t].content)+`</code></pre>
`},Sn.fence=function(r,s,n,a,o){var i,r=r[s],s=r.info?dY(r.info).trim():"",l="",u="";return s&&(i=s.split(/(\s+)/g),l=i[0],u=i.slice(2).join("")),i=n.highlight&&n.highlight(r.content,l,u)||Zo(r.content),i.indexOf("<pre")===0?i+`
`:s?(u=r.attrIndex("class"),s=r.attrs?r.attrs.slice():[],u<0?s.push(["class",n.langPrefix+l]):(s[u]=s[u].slice(),s[u][1]+=" "+n.langPrefix+l),u={attrs:s},"<pre><code"+o.renderAttrs(u)+">"+i+`</code></pre>
`):"<pre><code"+o.renderAttrs(r)+">"+i+`</code></pre>
`},Sn.image=function(e,t,n,a,o){var i=e[t];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,n,a),o.renderToken(e,t,n)},Sn.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},Sn.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},Sn.text=function(e,t){return Zo(e[t].content)},Sn.html_block=function(e,t){return e[t].content},Sn.html_inline=function(e,t){return e[t].content},ra.prototype.renderAttrs=function(e){var t,n,a;if(!e.attrs)return"";for(a="",t=0,n=e.attrs.length;t<n;t++)a+=" "+Zo(e.attrs[t][0])+'="'+Zo(e.attrs[t][1])+'"';return a},ra.prototype.renderToken=function(e,t,n){var a="",o=!1,i=e[t];return i.hidden?"":(i.block&&i.nesting!==-1&&t&&e[t-1].hidden&&(a+=`
`),a+=(i.nesting===-1?"</":"<")+i.tag,a+=this.renderAttrs(i),i.nesting===0&&n.xhtmlOut&&(a+=" /"),i.block&&(o=!0,i.nesting===1)&&t+1<e.length&&(n=e[t+1],n.type==="inline"||n.hidden||n.nesting===-1&&n.tag===i.tag)&&(o=!1),a+=o?`>
`:">",a)},ra.prototype.renderInline=function(e,t,n){for(var a,o="",i=this.rules,r=0,s=e.length;r<s;r++)a=e[r].type,typeof i[a]<"u"?o+=i[a](e,r,t,n,this):o+=this.renderToken(e,r,t);return o},ra.prototype.renderInlineAsText=function(e,t,n){for(var a="",o=0,i=e.length;o<i;o++)e[o].type==="text"?a+=e[o].content:e[o].type==="image"?a+=this.renderInlineAsText(e[o].children,t,n):e[o].type==="softbreak"&&(a+=`
`);return a},ra.prototype.render=function(e,t,n){for(var a,o="",i=this.rules,r=0,s=e.length;r<s;r++)a=e[r].type,a==="inline"?o+=this.renderInline(e[r].children,t,n):typeof i[a]<"u"?o+=i[e[r].type](e,r,t,n,this):o+=this.renderToken(e,r,t,n);return o};var fY=ra;function mn(){this.__rules__=[],this.__cache__=null}mn.prototype.__find__=function(e){for(var t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},mn.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(a){t.indexOf(a)<0&&t.push(a)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(a){!a.enabled||n&&a.alt.indexOf(n)<0||e.__cache__[n].push(a.fn)})})},mn.prototype.at=function(e,t,o){var a=this.__find__(e),o=o||{};if(a===-1)throw new Error("Parser rule not found: "+e);this.__rules__[a].fn=t,this.__rules__[a].alt=o.alt||[],this.__cache__=null},mn.prototype.before=function(e,t,n,i){var o=this.__find__(e),i=i||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},mn.prototype.after=function(e,t,n,i){var o=this.__find__(e),i=i||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},mn.prototype.push=function(e,t,n){n=n||{},this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},mn.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);var n=[];return e.forEach(function(a){var o=this.__find__(a);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+a)}this.__rules__[o].enabled=!0,n.push(a)},this),this.__cache__=null,n},mn.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)},mn.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);var n=[];return e.forEach(function(a){var o=this.__find__(a);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+a)}this.__rules__[o].enabled=!1,n.push(a)},this),this.__cache__=null,n},mn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};var zl=mn,pY=/\r\n?|\n/g,mY=/\0/g,hY=function(e){var t=e.src.replace(pY,`
`);t=t.replace(mY,"�"),e.src=t},gY=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},vY=function(e){for(var t,n=e.tokens,a=0,o=n.length;a<o;a++)t=n[a],t.type==="inline"&&e.md.inline.parse(t.content,e.md,e.env,t.children)},bY=lt.arrayReplaceAt;function _Y(e){return/^<a[>\s]/i.test(e)}function yY(e){return/^<\/a\s*>/i.test(e)}var wY=function(e){var t,n,a,o,i,r,s,l,u,c,d,p,g,_,I,C,b=e.tokens;if(e.md.options.linkify){for(n=0,a=b.length;n<a;n++)if(b[n].type==="inline"&&e.md.linkify.pretest(b[n].content)){for(o=b[n].children,g=0,t=o.length-1;t>=0;t--)if(r=o[t],r.type==="link_close")for(t--;o[t].level!==r.level&&o[t].type!=="link_open";)t--;else if(r.type==="html_inline"&&(_Y(r.content)&&g>0&&g--,yY(r.content))&&g++,!(g>0)&&r.type==="text"&&e.md.linkify.test(r.content)){for(u=r.content,C=e.md.linkify.match(u),s=[],p=r.level,d=0,l=0;l<C.length;l++)_=C[l].url,_=e.md.normalizeLink(_),e.md.validateLink(_)&&(I=C[l].text,I=C[l].schema?C[l].schema!=="mailto:"||/^mailto:/i.test(I)?e.md.normalizeLinkText(I):e.md.normalizeLinkText("mailto:"+I).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+I).replace(/^http:\/\//,""),c=C[l].index,c>d&&(i=new e.Token("text","",0),i.content=u.slice(d,c),i.level=p,s.push(i)),i=new e.Token("link_open","a",1),i.attrs=[["href",_]],i.level=p++,i.markup="linkify",i.info="auto",s.push(i),i=new e.Token("text","",0),i.content=I,i.level=p,s.push(i),i=new e.Token("link_close","a",-1),i.level=--p,i.markup="linkify",i.info="auto",s.push(i),d=C[l].lastIndex);d<u.length&&(i=new e.Token("text","",0),i.content=u.slice(d),i.level=p,s.push(i)),b[n].children=o=bY(o,t,s)}}}},om=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,SY=/\((c|tm|r|p)\)/i,kY=/\((c|tm|r|p)\)/gi,xY={c:"©",r:"®",p:"§",tm:"™"};function CY(e,t){return xY[t.toLowerCase()]}function QY(e){for(var t,n=0,a=e.length-1;a>=0;a--)t=e[a],t.type!=="text"||n||(t.content=t.content.replace(kY,CY)),t.type==="link_open"&&t.info==="auto"&&n--,t.type==="link_close"&&t.info==="auto"&&n++}function AY(e){for(var t,n=0,a=e.length-1;a>=0;a--)t=e[a],t.type!=="text"||n||om.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/gm,"$1—").replace(/(^|\s)--(?=\s|$)/gm,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,"$1–")),t.type==="link_open"&&t.info==="auto"&&n--,t.type==="link_close"&&t.info==="auto"&&n++}var IY=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(SY.test(e.tokens[t].content)&&QY(e.tokens[t].children),om.test(e.tokens[t].content))&&AY(e.tokens[t].children)},Pu=lt.isWhiteSpace,Mu=lt.isPunctChar,ju=lt.isMdAsciiPunct,qY=/['"]/,$u=/['"]/g,Ru="’";function wi(e,t,n){return e.substr(0,t)+n+e.substr(t+1)}function TY(e,t){for(var n,a,o,i,r,s,l,u,c,d,p,g,_,I,C,b,w,y,m,x=[],B=0;B<e.length;B++){for(n=e[B],s=e[B].level,b=x.length-1;b>=0&&!(x[b].level<=s);b--);if(x.length=b+1,n.type==="text"){a=n.content,i=0,r=a.length;e:for(;i<r&&($u.lastIndex=i,o=$u.exec(a),!!o);){if(I=C=!0,i=o.index+1,w=o[0]==="'",u=32,o.index-1>=0)u=a.charCodeAt(o.index-1);else for(b=B-1;b>=0&&!(e[b].type==="softbreak"||e[b].type==="hardbreak");b--)if(e[b].content){u=e[b].content.charCodeAt(e[b].content.length-1);break}if(c=32,i<r)c=a.charCodeAt(i);else for(b=B+1;b<e.length&&!(e[b].type==="softbreak"||e[b].type==="hardbreak");b++)if(e[b].content){c=e[b].content.charCodeAt(0);break}if(d=ju(u)||Mu(String.fromCharCode(u)),p=ju(c)||Mu(String.fromCharCode(c)),g=Pu(u),_=Pu(c),!_&&(!p||g||d)||(I=!1),!g&&(!d||_||p)||(C=!1),c===34&&o[0]==='"'&&u>=48&&u<=57&&(C=I=!1),I&&C&&(I=d,C=p),I||C){if(C){for(b=x.length-1;b>=0&&(l=x[b],!(x[b].level<s));b--)if(l.single===w&&x[b].level===s){l=x[b],m=w?(y=t.md.options.quotes[2],t.md.options.quotes[3]):(y=t.md.options.quotes[0],t.md.options.quotes[1]),n.content=wi(n.content,o.index,m),e[l.token].content=wi(e[l.token].content,l.pos,y),i+=m.length-1,l.token===B&&(i+=y.length-1),a=n.content,r=a.length,x.length=b;continue e}}I?x.push({token:B,pos:o.index,single:w,level:s}):C&&w&&(n.content=wi(n.content,o.index,Ru))}else w&&(n.content=wi(n.content,o.index,Ru))}}}}var LY=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&qY.test(e.tokens[t].content)&&TY(e.tokens[t].children,e)};function sa(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}sa.prototype.attrIndex=function(e){var t,n,a;if(this.attrs){for(t=this.attrs,n=0,a=t.length;n<a;n++)if(t[n][0]===e)return n}return-1},sa.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},sa.prototype.attrSet=function(a,t){var n=this.attrIndex(a),a=[a,t];n<0?this.attrPush(a):this.attrs[n]=a},sa.prototype.attrGet=function(t){var t=this.attrIndex(t),n=null;return t>=0&&(n=this.attrs[t][1]),n},sa.prototype.attrJoin=function(e,t){var n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t};var Hl=sa,EY=Hl;function am(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}am.prototype.Token=EY;var DY=am,BY=zl,ms=[["normalize",hY],["block",gY],["inline",vY],["linkify",wY],["replacements",IY],["smartquotes",LY]];function rl(){this.ruler=new BY;for(var e=0;e<ms.length;e++)this.ruler.push(ms[e][0],ms[e][1])}rl.prototype.process=function(e){for(var t=this.ruler.getRules(""),n=0,a=t.length;n<a;n++)t[n](e)},rl.prototype.State=DY;var PY=rl,hs=lt.isSpace;function gs(e,a){var n=e.bMarks[a]+e.tShift[a],a=e.eMarks[a];return e.src.substr(n,a-n)}function Ou(e){for(var t=[],n=0,a=e.length,o=!1,i=0,r="",s=e.charCodeAt(n);n<a;)s===124&&(i=o?(r+=e.substring(i,n-1),n):(t.push(r+e.substring(i,n)),r="",n+1)),o=s===92,n++,s=e.charCodeAt(n);return t.push(r+e.substring(i)),t}var MY=function(e,t,n,a){var o,i,r,s,l,u,c,d,p,g,_,I,C,b,w,y;if(t+2>n||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(r=e.bMarks[u]+e.tShift[u],r>=e.eMarks[u])||(w=e.src.charCodeAt(r++),w!==124&&w!==45&&w!==58)||r>=e.eMarks[u]||(y=e.src.charCodeAt(r++),y!==124&&y!==45&&y!==58&&!hs(y))||w===45&&hs(y))return!1;for(;r<e.eMarks[u];){if(o=e.src.charCodeAt(r),o!==124&&o!==45&&o!==58&&!hs(o))return!1;r++}for(i=gs(e,t+1),c=i.split("|"),g=[],s=0;s<c.length;s++){if(_=c[s].trim(),!_){if(s===0||s===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;_.charCodeAt(_.length-1)===58?g.push(_.charCodeAt(0)===58?"center":"right"):_.charCodeAt(0)===58?g.push("left"):g.push("")}if(i=gs(e,t).trim(),i.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(c=Ou(i),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),d=c.length,d===0||d!==g.length))return!1;if(!a){for(w=e.parentType,e.parentType="table",b=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),p.map=y=[t,0],p=e.push("thead_open","thead",1),p.map=[t,t+1],p=e.push("tr_open","tr",1),p.map=[t,t+1],s=0;s<c.length;s++)p=e.push("th_open","th",1),g[s]&&(p.attrs=[["style","text-align:"+g[s]]]),p=e.push("inline","",0),p.content=c[s].trim(),p.children=[],p=e.push("th_close","th",-1);for(p=e.push("tr_close","tr",-1),p=e.push("thead_close","thead",-1),u=t+2;u<n&&!(e.sCount[u]<e.blkIndent);u++){for(C=!1,s=0,l=b.length;s<l;s++)if(b[s](e,u,n,!0)){C=!0;break}if(C||(i=gs(e,u).trim(),!i)||e.sCount[u]-e.blkIndent>=4)break;for(c=Ou(i),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),u===t+2&&(p=e.push("tbody_open","tbody",1),p.map=I=[t+2,0]),p=e.push("tr_open","tr",1),p.map=[u,u+1],s=0;s<d;s++)p=e.push("td_open","td",1),g[s]&&(p.attrs=[["style","text-align:"+g[s]]]),p=e.push("inline","",0),p.content=c[s]?c[s].trim():"",p.children=[],p=e.push("td_close","td",-1);p=e.push("tr_close","tr",-1)}I&&(p=e.push("tbody_close","tbody",-1),I[1]=u),p=e.push("table_close","table",-1),y[1]=u,e.parentType=w,e.line=u}return!0},jY=function(e,t,n){var a,o,i;if(e.sCount[t]-e.blkIndent<4)return!1;for(o=a=t+1;a<n;)if(e.isEmpty(a))a++;else{if(!(e.sCount[a]-e.blkIndent>=4))break;a++,o=a}return e.line=o,i=e.push("code_block","code",0),i.content=e.getLines(t,o,4+e.blkIndent,!1)+`
`,i.map=[t,e.line],!0},$Y=function(e,t,n,a){var o,i,r,s,l,u,c=!1,d=e.bMarks[t]+e.tShift[t],p=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||d+3>p||(o=e.src.charCodeAt(d),o!==126&&o!==96)||(l=d,d=e.skipChars(d,o),i=d-l,i<3)||(u=e.src.slice(l,d),r=e.src.slice(d,p),o===96&&r.indexOf(String.fromCharCode(o))>=0))return!1;if(!a){for(s=t;s++,!(s>=n||(d=l=e.bMarks[s]+e.tShift[s],p=e.eMarks[s],d<p&&e.sCount[s]<e.blkIndent));)if(e.src.charCodeAt(d)===o&&!(e.sCount[s]-e.blkIndent>=4)&&(d=e.skipChars(d,o),!(d-l<i))&&(d=e.skipSpaces(d),!(d<p))){c=!0;break}i=e.sCount[t],e.line=s+(c?1:0),a=e.push("fence","code",0),a.info=r,a.content=e.getLines(t+1,s,i,!0),a.markup=u,a.map=[t,e.line]}return!0},Fu=lt.isSpace,RY=function(e,t,n,a){var o,i,r,s,l,u,c,d,p,g,_,I,C,b,w,y,m,x,B,T=e.lineMax,E=e.bMarks[t]+e.tShift[t],O=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(E++)!==62)return!1;if(!a){for(s=p=e.sCount[t]+1,e.src.charCodeAt(E)===32?(E++,s++,p++,o=!1,w=!0):e.src.charCodeAt(E)===9?(w=!0,o=(e.bsCount[t]+p)%4!==3||(E++,s++,p++,!1)):w=!1,g=[e.bMarks[t]],e.bMarks[t]=E;E<O&&(i=e.src.charCodeAt(E),!!Fu(i));)i===9?p+=4-(p+e.bsCount[t]+(o?1:0))%4:p++,E++;for(_=[e.bsCount[t]],e.bsCount[t]=e.sCount[t]+1+(w?1:0),u=E>=O,C=[e.sCount[t]],e.sCount[t]=p-s,b=[e.tShift[t]],e.tShift[t]=E-e.bMarks[t],m=e.md.block.ruler.getRules("blockquote"),a=e.parentType,e.parentType="blockquote",d=t+1;d<n&&(B=e.sCount[d]<e.blkIndent,E=e.bMarks[d]+e.tShift[d],O=e.eMarks[d],!(E>=O));d++)if(e.src.charCodeAt(E++)!==62||B){if(u)break;for(y=!1,r=0,l=m.length;r<l;r++)if(m[r](e,d,n,!0)){y=!0;break}if(y){e.lineMax=d,e.blkIndent!==0&&(g.push(e.bMarks[d]),_.push(e.bsCount[d]),b.push(e.tShift[d]),C.push(e.sCount[d]),e.sCount[d]-=e.blkIndent);break}g.push(e.bMarks[d]),_.push(e.bsCount[d]),b.push(e.tShift[d]),C.push(e.sCount[d]),e.sCount[d]=-1}else{for(s=p=e.sCount[d]+1,e.src.charCodeAt(E)===32?(E++,s++,p++,o=!1,w=!0):e.src.charCodeAt(E)===9?(w=!0,o=(e.bsCount[d]+p)%4!==3||(E++,s++,p++,!1)):w=!1,g.push(e.bMarks[d]),e.bMarks[d]=E;E<O&&(i=e.src.charCodeAt(E),!!Fu(i));)i===9?p+=4-(p+e.bsCount[d]+(o?1:0))%4:p++,E++;u=E>=O,_.push(e.bsCount[d]),e.bsCount[d]=e.sCount[d]+1+(w?1:0),C.push(e.sCount[d]),e.sCount[d]=p-s,b.push(e.tShift[d]),e.tShift[d]=E-e.bMarks[d]}for(I=e.blkIndent,e.blkIndent=0,x=e.push("blockquote_open","blockquote",1),x.markup=">",x.map=c=[t,0],e.md.block.tokenize(e,t,d),x=e.push("blockquote_close","blockquote",-1),x.markup=">",e.lineMax=T,e.parentType=a,c[1]=e.line,r=0;r<b.length;r++)e.bMarks[r+t]=g[r],e.tShift[r+t]=b[r],e.sCount[r+t]=C[r],e.bsCount[r+t]=_[r];e.blkIndent=I}return!0},OY=lt.isSpace,FY=function(e,t,n,a){var o,i,r,s=e.bMarks[t]+e.tShift[t],l=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(o=e.src.charCodeAt(s++),o!==42&&o!==45&&o!==95))return!1;for(i=1;s<l;){if(r=e.src.charCodeAt(s++),r!==o&&!OY(r))return!1;r===o&&i++}return!(i<3)&&(a||(e.line=t+1,a=e.push("hr","hr",0),a.map=[t,e.line],a.markup=Array(i+1).join(String.fromCharCode(o))),!0)},im=lt.isSpace;function Vu(e,a){var n=e.bMarks[a]+e.tShift[a],a=e.eMarks[a],o=e.src.charCodeAt(n++);return o!==42&&o!==45&&o!==43||n<a&&(o=e.src.charCodeAt(n),!im(o))?-1:n}function Nu(e,t){var n,a=e.bMarks[t]+e.tShift[t],o=a,i=e.eMarks[t];if(o+1>=i||(n=e.src.charCodeAt(o++),n<48||n>57))return-1;for(;;){if(o>=i)return-1;if(n=e.src.charCodeAt(o++),!(n>=48&&n<=57)){if(n===41||n===46)break;return-1}if(o-a>=10)return-1}return o<i&&(n=e.src.charCodeAt(o),!im(n))?-1:o}function VY(e,t){for(var n=e.level+2,a=t+2,o=e.tokens.length-2;a<o;a++)e.tokens[a].level===n&&e.tokens[a].type==="paragraph_open"&&(e.tokens[a+2].hidden=!0,e.tokens[a].hidden=!0,a+=2)}var NY=function(e,t,n,a){var o,i,r,s,l,u,c,d,p,g,_,I,C,b,w,y,m,x,B,T,E,O,F,V=!1,j=!0;if(e.sCount[t]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[t]-e.listIndent>=4&&e.sCount[t]<e.blkIndent)return!1;if(a&&e.parentType==="paragraph"&&e.sCount[t]>=e.blkIndent&&(V=!0),(x=Nu(e,t))>=0){if(l=!0,T=e.bMarks[t]+e.tShift[t],C=Number(e.src.slice(T,x-1)),V&&C!==1)return!1}else{if(!((x=Vu(e,t))>=0))return!1;l=!1}if(V&&e.skipSpaces(x)>=e.eMarks[t])return!1;if(d=e.src.charCodeAt(x-1),!a){for(V=e.tokens.length,l?(F=e.push("ordered_list_open","ol",1),C!==1&&(F.attrs=[["start",C]])):F=e.push("bullet_list_open","ul",1),F.map=a=[t,0],F.markup=String.fromCharCode(d),g=t,B=!1,O=e.md.block.ruler.getRules("list"),C=e.parentType,e.parentType="list";g<n;){for(m=x,p=e.eMarks[g],s=_=e.sCount[g]+x-(e.bMarks[t]+e.tShift[t]);m<p;){if(o=e.src.charCodeAt(m),o===9)_+=4-(_+e.bsCount[g])%4;else{if(o!==32)break;_++}m++}if(i=m,u=i>=p?1:_-s,u>4&&(u=1),s=s+u,F=e.push("list_item_open","li",1),F.markup=String.fromCharCode(d),F.map=u=[t,0],l&&(F.info=e.src.slice(T,x-1)),y=e.tight,w=e.tShift[t],b=e.sCount[t],I=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=s,e.tight=!0,e.tShift[t]=i-e.bMarks[t],e.sCount[t]=_,i>=p&&e.isEmpty(t+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,t,n,!0),e.tight&&!B||(j=!1),B=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=I,e.tShift[t]=w,e.sCount[t]=b,e.tight=y,F=e.push("list_item_close","li",-1),F.markup=String.fromCharCode(d),g=t=e.line,u[1]=g,i=e.bMarks[t],g>=n||e.sCount[g]<e.blkIndent||e.sCount[t]-e.blkIndent>=4)break;for(E=!1,r=0,c=O.length;r<c;r++)if(O[r](e,g,n,!0)){E=!0;break}if(E)break;if(l){if(x=Nu(e,g),x<0)break;T=e.bMarks[g]+e.tShift[g]}else if(x=Vu(e,g),x<0)break;if(d!==e.src.charCodeAt(x-1))break}F=l?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),F.markup=String.fromCharCode(d),a[1]=g,e.line=g,e.parentType=C,j&&VY(e,V)}return!0},zY=lt.normalizeReference,Si=lt.isSpace,HY=function(e,t,n,a){var o,i,r,s,l,u,c,d,p,g,_,I,C,b,w,y=0,m=e.bMarks[t]+e.tShift[t],x=e.eMarks[t],B=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(m)!==91)return!1;for(;++m<x;)if(e.src.charCodeAt(m)===93&&e.src.charCodeAt(m-1)!==92){if(m+1===x||e.src.charCodeAt(m+1)!==58)return!1;break}for(s=e.lineMax,b=e.md.block.ruler.getRules("reference"),p=e.parentType,e.parentType="reference";B<s&&!e.isEmpty(B);B++)if(!(e.sCount[B]-e.blkIndent>3)&&!(e.sCount[B]<0)){for(C=!1,u=0,c=b.length;u<c;u++)if(b[u](e,B,s,!0)){C=!0;break}if(C)break}for(I=e.getLines(t,B,e.blkIndent,!1).trim(),x=I.length,m=1;m<x;m++){if(o=I.charCodeAt(m),o===91)return!1;if(o===93){d=m;break}(o===10||o===92&&(m++,m<x)&&I.charCodeAt(m)===10)&&y++}if(d<0||I.charCodeAt(d+1)!==58)return!1;for(m=d+2;m<x;m++)if(o=I.charCodeAt(m),o===10)y++;else if(!Si(o))break;if(g=e.md.helpers.parseLinkDestination(I,m,x),!g.ok||(l=e.md.normalizeLink(g.str),!e.md.validateLink(l)))return!1;for(m=g.pos,y+=g.lines,i=m,r=y,_=m;m<x;m++)if(o=I.charCodeAt(m),o===10)y++;else if(!Si(o))break;for(g=e.md.helpers.parseLinkTitle(I,m,x),m<x&&_!==m&&g.ok?(w=g.str,m=g.pos,y+=g.lines):(w="",m=i,y=r);m<x&&(o=I.charCodeAt(m),!!Si(o));)m++;if(m<x&&I.charCodeAt(m)!==10&&w)for(w="",m=i,y=r;m<x&&(o=I.charCodeAt(m),!!Si(o));)m++;return!(m<x&&I.charCodeAt(m)!==10)&&(_=zY(I.slice(1,d)),!!_)&&(a||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:w,href:l}),e.parentType=p,e.line=t+y+1),!0)},UY=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cr={},WY="[a-zA-Z_:][a-zA-Z0-9:._-]*",JY="[^\"'=<>`\\x00-\\x20]+",GY="'[^']*'",YY='"[^"]*"',KY="(?:"+JY+"|"+GY+"|"+YY+")",ZY="(?:\\s+"+WY+"(?:\\s*=\\s*"+KY+")?)",rm="<[A-Za-z][A-Za-z0-9\\-]*"+ZY+"*\\s*\\/?>",sm="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",XY="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",eK="<[?][\\s\\S]*?[?]>",tK="<![A-Z]+\\s+[^>]*>",nK="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",oK=new RegExp("^(?:"+rm+"|"+sm+"|"+XY+"|"+eK+"|"+tK+"|"+nK+")"),aK=new RegExp("^(?:"+rm+"|"+sm+")"),iK=(cr.HTML_TAG_RE=oK,cr.HTML_OPEN_CLOSE_TAG_RE=aK,UY),rK=cr.HTML_OPEN_CLOSE_TAG_RE,Xo=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+iK.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(rK.source+"\\s*$"),/^$/,!1]],sK=function(e,t,n,a){var o,i,r,s=e.bMarks[t]+e.tShift[t],l=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(s)!==60)return!1;for(r=e.src.slice(s,l),o=0;o<Xo.length&&!Xo[o][0].test(r);o++);if(o===Xo.length)return!1;if(a)return Xo[o][2];if(i=t+1,!Xo[o][1].test(r)){for(;i<n&&!(e.sCount[i]<e.blkIndent);i++)if(s=e.bMarks[i]+e.tShift[i],l=e.eMarks[i],r=e.src.slice(s,l),Xo[o][1].test(r)){r.length!==0&&i++;break}}return e.line=i,a=e.push("html_block","",0),a.map=[t,i],a.content=e.getLines(t,i,e.blkIndent,!0),!0},zu=lt.isSpace,lK=function(e,t,n,a){var o,i,r=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(o=e.src.charCodeAt(r),o!==35||r>=s))return!1;for(i=1,o=e.src.charCodeAt(++r);o===35&&r<s&&i<=6;)i++,o=e.src.charCodeAt(++r);return!(i>6||r<s&&!zu(o))&&(a||(s=e.skipSpacesBack(s,r),a=e.skipCharsBack(s,35,r),a>r&&zu(e.src.charCodeAt(a-1))&&(s=a),e.line=t+1,a=e.push("heading_open","h"+String(i),1),a.markup="########".slice(0,i),a.map=[t,e.line],a=e.push("inline","",0),a.content=e.src.slice(r,s).trim(),a.map=[t,e.line],a.children=[],a=e.push("heading_close","h"+String(i),-1),a.markup="########".slice(0,i)),!0)},cK=function(e,t,n){var a,o,i,r,s,l,u,c,d,p,g=t+1,_=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(p=e.parentType,e.parentType="paragraph";g<n&&!e.isEmpty(g);g++)if(!(e.sCount[g]-e.blkIndent>3)){if(e.sCount[g]>=e.blkIndent&&(l=e.bMarks[g]+e.tShift[g],u=e.eMarks[g],l<u)&&(d=e.src.charCodeAt(l),d===45||d===61)&&(l=e.skipChars(l,d),l=e.skipSpaces(l),l>=u)){c=d===61?1:2;break}if(!(e.sCount[g]<0)){for(o=!1,i=0,r=_.length;i<r;i++)if(_[i](e,g,n,!0)){o=!0;break}if(o)break}}return!!c&&(a=e.getLines(t,g,e.blkIndent,!1).trim(),e.line=g+1,s=e.push("heading_open","h"+String(c),1),s.markup=String.fromCharCode(d),s.map=[t,e.line],s=e.push("inline","",0),s.content=a,s.map=[t,e.line-1],s.children=[],s=e.push("heading_close","h"+String(c),-1),s.markup=String.fromCharCode(d),e.parentType=p,!0)},uK=function(e,t){var n,a,o,i,r,s=t+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax,c=e.parentType;for(e.parentType="paragraph";s<u&&!e.isEmpty(s);s++)if(!(e.sCount[s]-e.blkIndent>3)&&!(e.sCount[s]<0)){for(a=!1,o=0,i=l.length;o<i;o++)if(l[o](e,s,u,!0)){a=!0;break}if(a)break}return n=e.getLines(t,s,e.blkIndent,!1).trim(),e.line=s,r=e.push("paragraph_open","p",1),r.map=[t,e.line],r=e.push("inline","",0),r.content=n,r.map=[t,e.line],r.children=[],r=e.push("paragraph_close","p",-1),e.parentType=c,!0},Hu=Hl,Bi=lt.isSpace;function kn(e,t,n,a){var o,i,r,s,l,u,c,d;for(this.src=e,this.md=t,this.env=n,this.tokens=a,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,d=!1,r=s=u=c=0,l=i.length;s<l;s++){if(o=i.charCodeAt(s),!d){if(Bi(o)){u++,o===9?c+=4-c%4:c++;continue}d=!0}o!==10&&s!==l-1||(o!==10&&s++,this.bMarks.push(r),this.eMarks.push(s),this.tShift.push(u),this.sCount.push(c),this.bsCount.push(0),d=!1,u=0,c=0,r=s+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}kn.prototype.push=function(e,t,n){return e=new Hu(e,t,n),e.block=!0,n<0&&this.level--,e.level=this.level,n>0&&this.level++,this.tokens.push(e),e},kn.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},kn.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},kn.prototype.skipSpaces=function(e){for(var t,n=this.src.length;e<n&&(t=this.src.charCodeAt(e),!!Bi(t));e++);return e},kn.prototype.skipSpacesBack=function(e,t){if(!(e<=t)){for(;e>t;)if(!Bi(this.src.charCodeAt(--e)))return e+1}return e},kn.prototype.skipChars=function(e,t){for(var n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},kn.prototype.skipCharsBack=function(e,t,n){if(!(e<=n)){for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1}return e},kn.prototype.getLines=function(e,t,n,a){var o,i,r,s,l,u,c,d=e;if(e>=t)return"";for(u=new Array(t-e),o=0;d<t;d++,o++){for(i=0,c=s=this.bMarks[d],l=d+1<t||a?this.eMarks[d]+1:this.eMarks[d];s<l&&i<n;){if(r=this.src.charCodeAt(s),Bi(r))r===9?i+=4-(i+this.bsCount[d])%4:i++;else{if(!(s-c<this.tShift[d]))break;i++}s++}u[o]=i>n?new Array(i-n+1).join(" ")+this.src.slice(s,l):this.src.slice(s,l)}return u.join("")},kn.prototype.Token=Hu;var dK=kn,fK=zl,ki=[["table",MY,["paragraph","reference"]],["code",jY],["fence",$Y,["paragraph","reference","blockquote","list"]],["blockquote",RY,["paragraph","reference","blockquote","list"]],["hr",FY,["paragraph","reference","blockquote","list"]],["list",NY,["paragraph","reference","blockquote"]],["reference",HY],["html_block",sK,["paragraph","reference","blockquote"]],["heading",lK,["paragraph","reference","blockquote"]],["lheading",cK],["paragraph",uK]];function Pi(){this.ruler=new fK;for(var e=0;e<ki.length;e++)this.ruler.push(ki[e][0],ki[e][1],{alt:(ki[e][2]||[]).slice()})}Pi.prototype.tokenize=function(e,t,n){for(var a,o,i=this.ruler.getRules(""),r=i.length,s=t,l=!1,u=e.md.options.maxNesting;s<n&&(e.line=s=e.skipEmptyLines(s),!(s>=n||e.sCount[s]<e.blkIndent));){if(e.level>=u){e.line=n;break}for(o=0;o<r&&(a=i[o](e,s,n,!1),!a);o++);e.tight=!l,e.isEmpty(e.line-1)&&(l=!0),s=e.line,s<n&&e.isEmpty(s)&&(l=!0,s++,e.line=s)}},Pi.prototype.parse=function(e,t,n,a){e&&(e=new this.State(e,t,n,a),this.tokenize(e,e.line,e.lineMax))},Pi.prototype.State=dK;var pK=Pi;function mK(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}for(var hK=function(e,t){for(var n=e.pos;n<e.posMax&&!mK(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)},gK=lt.isSpace,vK=function(e,t){var n,a,o,i=e.pos;if(e.src.charCodeAt(i)!==10)return!1;if(n=e.pending.length-1,a=e.posMax,!t)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){for(o=n-1;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(i++;i<a&&gK(e.src.charCodeAt(i));)i++;return e.pos=i,!0},bK=lt.isSpace,Ul=[],Uu=0;Uu<256;Uu++)Ul.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Ul[e.charCodeAt(0)]=1});var _K=function(e,t){var n,a=e.pos,o=e.posMax;if(e.src.charCodeAt(a)!==92)return!1;if(a++,a<o){if(n=e.src.charCodeAt(a),n<256&&Ul[n]!==0)return t||(e.pending+=e.src[a]),e.pos+=2,!0;if(n===10){for(t||e.push("hardbreak","br",0),a++;a<o&&(n=e.src.charCodeAt(a),!!bK(n));)a++;return e.pos=a,!0}}return t||(e.pending+="\\"),e.pos++,!0},yK=function(e,t){var n,a,o,i,r,s,l,u=e.pos,c=e.src.charCodeAt(u);if(c!==96)return!1;for(c=u,u++,n=e.posMax;u<n&&e.src.charCodeAt(u)===96;)u++;if(a=e.src.slice(c,u),s=a.length,!(e.backticksScanned&&(e.backticks[s]||0)<=c)){for(i=r=u;(i=e.src.indexOf("`",r))!==-1;){for(r=i+1;r<n&&e.src.charCodeAt(r)===96;)r++;if(l=r-i,l===s)return t||(o=e.push("code_inline","code",0),o.markup=a,o.content=e.src.slice(u,i).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=r,!0;e.backticks[l]=i}e.backticksScanned=!0}return t||(e.pending+=a),e.pos+=s,!0},ur={};function Wu(e,t){for(var n,a,o,i,r=[],s=t.length,l=0;l<s;l++)a=t[l],a.marker===126&&a.end!==-1&&(o=t[a.end],i=e.tokens[a.token],i.type="s_open",i.tag="s",i.nesting=1,i.markup="~~",i.content="",i=e.tokens[o.token],i.type="s_close",i.tag="s",i.nesting=-1,i.markup="~~",i.content="",e.tokens[o.token-1].type==="text")&&e.tokens[o.token-1].content==="~"&&r.push(o.token-1);for(;r.length;){for(l=r.pop(),n=l+1;n<e.tokens.length&&e.tokens[n].type==="s_close";)n++;n--,l!==n&&(i=e.tokens[n],e.tokens[n]=e.tokens[l],e.tokens[l]=i)}}ur.tokenize=function(e,t){var n,a,o,i,r,s=e.pos,l=e.src.charCodeAt(s);if(t||l!==126||(a=e.scanDelims(e.pos,!0),i=a.length,r=String.fromCharCode(l),i<2))return!1;for(i%2&&(o=e.push("text","",0),o.content=r,i--),n=0;n<i;n+=2)o=e.push("text","",0),o.content=r+r,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close});return e.pos+=a.length,!0},ur.postProcess=function(e){var t,n=e.tokens_meta,a=e.tokens_meta.length;for(Wu(e,e.delimiters),t=0;t<a;t++)n[t]&&n[t].delimiters&&Wu(e,n[t].delimiters)};var dr={};function Ju(e,t){for(var n,a,o,i,r,s=t.length,l=s-1;l>=0;l--)n=t[l],n.marker!==95&&n.marker!==42||n.end!==-1&&(a=t[n.end],r=l>0&&t[l-1].end===n.end+1&&t[l-1].marker===n.marker&&t[l-1].token===n.token-1&&t[n.end+1].token===a.token+1,i=String.fromCharCode(n.marker),o=e.tokens[n.token],o.type=r?"strong_open":"em_open",o.tag=r?"strong":"em",o.nesting=1,o.markup=r?i+i:i,o.content="",o=e.tokens[a.token],o.type=r?"strong_close":"em_close",o.tag=r?"strong":"em",o.nesting=-1,o.markup=r?i+i:i,o.content="",r)&&(e.tokens[t[l-1].token].content="",e.tokens[t[n.end+1].token].content="",l--)}dr.tokenize=function(e,t){var n,a,o,i=e.pos,r=e.src.charCodeAt(i);if(t||r!==95&&r!==42)return!1;for(a=e.scanDelims(e.pos,r===42),n=0;n<a.length;n++)o=e.push("text","",0),o.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:a.length,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close});return e.pos+=a.length,!0},dr.postProcess=function(e){var t,n=e.tokens_meta,a=e.tokens_meta.length;for(Ju(e,e.delimiters),t=0;t<a;t++)n[t]&&n[t].delimiters&&Ju(e,n[t].delimiters)};var wK=lt.normalizeReference,vs=lt.isSpace,SK=function(e,t){var n,a,o,i,r,s,l="",u="",c=e.pos,d=e.posMax,p=e.pos,g=!0;if(e.src.charCodeAt(e.pos)!==91||(i=e.pos+1,o=e.md.helpers.parseLinkLabel(e,e.pos,!0),o<0))return!1;if(r=o+1,r<d&&e.src.charCodeAt(r)===40){for(g=!1,r++;r<d&&(n=e.src.charCodeAt(r),!(!vs(n)&&n!==10));r++);if(r>=d)return!1;if(p=r,s=e.md.helpers.parseLinkDestination(e.src,r,e.posMax),s.ok){for(l=e.md.normalizeLink(s.str),e.md.validateLink(l)?r=s.pos:l="",p=r;r<d&&(n=e.src.charCodeAt(r),!(!vs(n)&&n!==10));r++);if(s=e.md.helpers.parseLinkTitle(e.src,r,e.posMax),r<d&&p!==r&&s.ok)for(u=s.str,r=s.pos;r<d&&(n=e.src.charCodeAt(r),!(!vs(n)&&n!==10));r++);}(r>=d||e.src.charCodeAt(r)!==41)&&(g=!0),r++}if(g){if(typeof e.env.references>"u")return!1;if(r<d&&e.src.charCodeAt(r)===91&&(p=r+1,r=e.md.helpers.parseLinkLabel(e,r),r>=0)?a=e.src.slice(p,r++):r=o+1,a=a||e.src.slice(i,o),s=e.env.references[wK(a)],!s)return e.pos=c,!1;l=s.href,u=s.title}return t||(e.pos=i,e.posMax=o,g=e.push("link_open","a",1),g.attrs=p=[["href",l]],u&&p.push(["title",u]),e.md.inline.tokenize(e),g=e.push("link_close","a",-1)),e.pos=r,e.posMax=d,!0},kK=lt.normalizeReference,bs=lt.isSpace,xK=function(e,t){var n,a,o,i,r,s,l,u,c="",d=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(o=e.pos+2,a=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),a<0))return!1;if(i=a+1,i<p&&e.src.charCodeAt(i)===40){for(i++;i<p&&(n=e.src.charCodeAt(i),!(!bs(n)&&n!==10));i++);if(i>=p)return!1;for(u=i,r=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),r.ok&&(c=e.md.normalizeLink(r.str),e.md.validateLink(c)?i=r.pos:c=""),u=i;i<p&&(n=e.src.charCodeAt(i),!(!bs(n)&&n!==10));i++);if(r=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<p&&u!==i&&r.ok)for(s=r.str,i=r.pos;i<p&&(n=e.src.charCodeAt(i),!(!bs(n)&&n!==10));i++);else s="";if(i>=p||e.src.charCodeAt(i)!==41)return e.pos=d,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<p&&e.src.charCodeAt(i)===91&&(u=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0)?l=e.src.slice(u,i++):i=a+1,l=l||e.src.slice(o,a),r=e.env.references[kK(l)],!r)return e.pos=d,!1;c=r.href,s=r.title}return t||(u=e.src.slice(o,a),e.md.inline.parse(u,e.md,e.env,l=[]),d=e.push("image","img",0),d.attrs=r=[["src",c],["alt",""]],d.children=l,d.content=u,s&&r.push(["title",s])),e.pos=i,e.posMax=p,!0},CK=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,QK=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,AK=function(e,t){var n,a,o,i,r,s=e.pos;if(e.src.charCodeAt(s)!==60)return!1;for(i=e.pos,r=e.posMax;;){if(++s>=r||(o=e.src.charCodeAt(s),o===60))return!1;if(o===62)break}return i=e.src.slice(i+1,s),QK.test(i)?(n=e.md.normalizeLink(i),!!e.md.validateLink(n)&&(t||(a=e.push("link_open","a",1),a.attrs=[["href",n]],a.markup="autolink",a.info="auto",a=e.push("text","",0),a.content=e.md.normalizeLinkText(i),a=e.push("link_close","a",-1),a.markup="autolink",a.info="auto"),e.pos+=i.length+2,!0)):!!CK.test(i)&&(n=e.md.normalizeLink("mailto:"+i),!!e.md.validateLink(n))&&(t||(a=e.push("link_open","a",1),a.attrs=[["href",n]],a.markup="autolink",a.info="auto",a=e.push("text","",0),a.content=e.md.normalizeLinkText(i),a=e.push("link_close","a",-1),a.markup="autolink",a.info="auto"),e.pos+=i.length+2,!0)},IK=cr.HTML_TAG_RE;function qK(e){return e|=32,e>=97&&e<=122}var TK=function(e,t){var n,a=e.pos;return!!e.md.options.html&&(n=e.posMax,!(e.src.charCodeAt(a)!==60||a+2>=n))&&(n=e.src.charCodeAt(a+1),!(n!==33&&n!==63&&n!==47&&!qK(n)))&&(n=e.src.slice(a).match(IK),!!n)&&(t||(t=e.push("html_inline","",0),t.content=e.src.slice(a,a+n[0].length)),e.pos+=n[0].length,!0)},Gu=Xp,LK=lt.has,EK=lt.isValidEntityCode,Yu=lt.fromCodePoint,DK=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,BK=/^&([a-z][a-z0-9]{1,31});/i,PK=function(e,t){var n,a=e.pos,o=e.posMax;if(e.src.charCodeAt(a)!==38)return!1;if(a+1<o){if(o=e.src.charCodeAt(a+1),o===35){if(n=e.src.slice(a).match(DK),n)return t||(o=n[1][0].toLowerCase()==="x"?parseInt(n[1].slice(1),16):parseInt(n[1],10),e.pending+=EK(o)?Yu(o):Yu(65533)),e.pos+=n[0].length,!0}else if(n=e.src.slice(a).match(BK),n&&LK(Gu,n[1]))return t||(e.pending+=Gu[n[1]]),e.pos+=n[0].length,!0}return t||(e.pending+="&"),e.pos++,!0};function Ku(e,t){var n,a,o,i,r,s,l={},u=t.length;if(u){for(var c=0,d=-2,p=[],g=0;g<u;g++)if(a=t[g],p.push(0),t[c].marker===a.marker&&d===a.token-1||(c=g),d=a.token,a.length=a.length||0,a.close){for(l.hasOwnProperty(a.marker)||(l[a.marker]=[-1,-1,-1,-1,-1,-1]),i=l[a.marker][(a.open?3:0)+a.length%3],n=c-p[c]-1,r=n;n>i;n-=p[n]+1)if(o=t[n],o.marker===a.marker&&o.open&&o.end<0&&(s=!1,!o.close&&!a.open||(o.length+a.length)%3!==0||o.length%3===0&&a.length%3===0||(s=!0),!s)){s=n>0&&!t[n-1].open?p[n-1]+1:0,p[g]=g-n+s,p[n]=s,a.open=!1,o.end=g,o.close=!1,r=-1,d=-2;break}r!==-1&&(l[a.marker][(a.open?3:0)+(a.length||0)%3]=r)}}}var MK=function(e){var t,n=e.tokens_meta,a=e.tokens_meta.length;for(Ku(e,e.delimiters),t=0;t<a;t++)n[t]&&n[t].delimiters&&Ku(e,n[t].delimiters)},jK=function(e){for(var t,n=0,a=e.tokens,o=e.tokens.length,i=t=0;i<o;i++)a[i].nesting<0&&n--,a[i].level=n,a[i].nesting>0&&n++,a[i].type==="text"&&i+1<o&&a[i+1].type==="text"?a[i+1].content=a[i].content+a[i+1].content:(i!==t&&(a[t]=a[i]),t++);i!==t&&(a.length=t)},_s=Hl,Zu=lt.isWhiteSpace,Xu=lt.isPunctChar,ed=lt.isMdAsciiPunct;function Oa(e,t,n,a){this.src=e,this.env=n,this.md=t,this.tokens=a,this.tokens_meta=Array(a.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}Oa.prototype.pushPending=function(){var e=new _s("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},Oa.prototype.push=function(e,t,n){return this.pending&&this.pushPending(),e=new _s(e,t,n),t=null,n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),e.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],t={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(e),this.tokens_meta.push(t),e},Oa.prototype.scanDelims=function(e,t){for(var n,a,o,i,r=e,s=!0,l=!0,u=this.posMax,c=this.src.charCodeAt(e),d=e>0?this.src.charCodeAt(e-1):32;r<u&&this.src.charCodeAt(r)===c;)r++;return e=r-e,o=r<u?this.src.charCodeAt(r):32,a=ed(d)||Xu(String.fromCharCode(d)),i=ed(o)||Xu(String.fromCharCode(o)),d=Zu(d),o=Zu(o),(o||i&&!d&&!a)&&(s=!1),(d||a&&!o&&!i)&&(l=!1),d=t?(n=s,l):(n=s&&(!l||a),l&&(!s||i)),{can_open:n,can_close:d,length:e}},Oa.prototype.Token=_s;var $K=Oa,td=zl,ys=[["text",hK],["newline",vK],["escape",_K],["backticks",yK],["strikethrough",ur.tokenize],["emphasis",dr.tokenize],["link",SK],["image",xK],["autolink",AK],["html_inline",TK],["entity",PK]],ws=[["balance_pairs",MK],["strikethrough",ur.postProcess],["emphasis",dr.postProcess],["text_collapse",jK]];function Fa(){var e;for(this.ruler=new td,e=0;e<ys.length;e++)this.ruler.push(ys[e][0],ys[e][1]);for(this.ruler2=new td,e=0;e<ws.length;e++)this.ruler2.push(ws[e][0],ws[e][1])}Fa.prototype.skipToken=function(e){var t,n,a=e.pos,o=this.ruler.getRules(""),i=o.length,r=e.md.options.maxNesting,s=e.cache;if(typeof s[a]<"u")e.pos=s[a];else{if(e.level<r)for(n=0;n<i&&(e.level++,t=o[n](e,!0),e.level--,!t);n++);else e.pos=e.posMax;t||e.pos++,s[a]=e.pos}},Fa.prototype.tokenize=function(e){for(var t,n,a=this.ruler.getRules(""),o=a.length,i=e.posMax,r=e.md.options.maxNesting;e.pos<i;){if(e.level<r)for(n=0;n<o&&(t=a[n](e,!1),!t);n++);if(t){if(e.pos>=i)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},Fa.prototype.parse=function(e,t,n,a){var o,i,r,s=new this.State(e,t,n,a);for(this.tokenize(s),i=this.ruler2.getRules(""),r=i.length,o=0;o<r;o++)i[o](s)},Fa.prototype.State=$K;var RK=Fa,OK=function(e){var t={},n=(t.src_Any=em.source,t.src_Cc=tm.source,t.src_Z=nm.source,t.src_P=il.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|"),"[><｜]");return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+").|;(?!"+t.src_ZCc+").|\\!+(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t};function sl(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(n){n&&Object.keys(n).forEach(function(a){e[a]=n[a]})}),e}function $r(e){return Object.prototype.toString.call(e)}function FK(e){return $r(e)==="[object String]"}function VK(e){return $r(e)==="[object Object]"}function NK(e){return $r(e)==="[object RegExp]"}function nd(e){return $r(e)==="[object Function]"}function zK(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var lm={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function HK(e){return Object.keys(e||{}).reduce(function(t,n){return t||lm.hasOwnProperty(n)},!1)}var UK={"http:":{validate:function(e,t,n){return e=e.slice(t),n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(e)?e.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){var a=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),!n.re.no_http.test(a)||t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:a.match(n.re.no_http)[0].length}},"mailto:":{validate:function(e,t,n){return e=e.slice(t),n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(e)?e.match(n.re.mailto)[0].length:0}}},WK="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",JK="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function GK(e){e.__index__=-1,e.__text_cache__=""}function YK(e){return function(t,n){return t=t.slice(n),e.test(t)?t.match(e)[0].length:0}}function od(){return function(e,t){t.normalize(e)}}function Mi(e){var t=e.re=OK(e.__opts__),n=e.__tlds__.slice();function a(r){return r.replace("%TLDS%",t.src_tlds)}e.onCompile(),e.__tlds_replaced__||n.push(WK),n.push(t.src_xn),t.src_tlds=n.join("|"),t.email_fuzzy=RegExp(a(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(a(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(a(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(a(t.tpl_host_fuzzy_test),"i");var o=[];function i(r,s){throw new Error('(LinkifyIt) Invalid schema "'+r+'": '+s)}e.__compiled__={},Object.keys(e.__schemas__).forEach(function(r){var s,l=e.__schemas__[r];l!==null&&(s={validate:null,link:null},e.__compiled__[r]=s,VK(l)?(NK(l.validate)?s.validate=YK(l.validate):nd(l.validate)?s.validate=l.validate:i(r,l),nd(l.normalize)?s.normalize=l.normalize:l.normalize?i(r,l):s.normalize=od()):FK(l)?o.push(r):i(r,l))}),o.forEach(function(r){e.__compiled__[e.__schemas__[r]]&&(e.__compiled__[r].validate=e.__compiled__[e.__schemas__[r]].validate,e.__compiled__[r].normalize=e.__compiled__[e.__schemas__[r]].normalize)}),e.__compiled__[""]={validate:null,normalize:od()},n=Object.keys(e.__compiled__).filter(function(r){return r.length>0&&e.__compiled__[r]}).map(zK).join("|"),e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+n+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+n+")","ig"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),GK(e)}function KK(e,t){var n=e.__index__,a=e.__last_index__,o=e.__text_cache__.slice(n,a);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=a+t,this.raw=o,this.text=o,this.url=o}function ad(e,t){return t=new KK(e,t),e.__compiled__[t.schema].normalize(t,e),t}function cn(e,t){if(!(this instanceof cn))return new cn(e,t);t||HK(e)&&(t=e,e={}),this.__opts__=sl({},lm,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=sl({},UK,e),this.__compiled__={},this.__tlds__=JK,this.__tlds_replaced__=!1,this.re={},Mi(this)}cn.prototype.add=function(e,t){return this.__schemas__[e]=t,Mi(this),this},cn.prototype.set=function(e){return this.__opts__=sl(this.__opts__,e),this},cn.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,n,a,o,i;if(this.re.schema_test.test(e)){for(o=this.re.schema_search,o.lastIndex=0;(t=o.exec(e))!==null;)if(n=this.testSchemaAt(e,t[2],o.lastIndex),n){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(i=e.search(this.re.host_fuzzy_test),i>=0)&&(this.__index__<0||i<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=i.index+i[1].length,this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=i.index+i[0].length),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(i=e.indexOf("@"),i>=0)&&(i=e.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,i=i.index+i[0].length,this.__index__<0||a<this.__index__||a===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=i),this.__index__>=0},cn.prototype.pretest=function(e){return this.re.pretest.test(e)},cn.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},cn.prototype.match=function(e){for(var t=0,n=[],a=(this.__index__>=0&&this.__text_cache__===e&&(n.push(ad(this,t)),t=this.__last_index__),t?e.slice(t):e);this.test(a);)n.push(ad(this,t)),a=a.slice(this.__last_index__),t+=this.__last_index__;return n.length?n:null},cn.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(n,a,o){return n!==o[a-1]}).reverse(),Mi(this)):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Mi(this)),this},cn.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema!=="mailto:"||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},cn.prototype.onCompile=function(){};var ZK=cn;const ga=2147483647,Tn=36,Wl=1,si=26,XK=38,eZ=700,cm=72,um=128,dm="-",tZ=/^xn--/,nZ=/[^\0-\x7F]/,oZ=/[\x2E\u3002\uFF0E\uFF61]/g,aZ={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Ss=Tn-Wl,Ln=Math.floor,ks=String.fromCharCode;function po(e){throw new RangeError(aZ[e])}function iZ(e,t){const n=[];let a=e.length;for(;a--;)n[a]=t(e[a]);return n}function fm(e,t){const n=e.split("@");let a="";n.length>1&&(a=n[0]+"@",e=n[1]),e=e.replace(oZ,".");const o=e.split("."),i=iZ(o,t).join(".");return a+i}function Jl(e){const t=[];let n=0;const a=e.length;for(;n<a;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const i=e.charCodeAt(n++);(64512&i)==56320?t.push(((1023&o)<<10)+(1023&i)+65536):(t.push(o),n--)}else t.push(o)}return t}const pm=e=>String.fromCodePoint(...e),rZ=function(e){return e>=48&&e<58?e-48+26:e>=65&&e<91?e-65:e>=97&&e<123?e-97:Tn},id=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},mm=function(e,t,n){let a=0;for(e=n?Ln(e/eZ):e>>1,e+=Ln(e/t);e>Ss*si>>1;a+=Tn)e=Ln(e/Ss);return Ln(a+(Ss+1)*e/(e+XK))},Gl=function(e){const t=[],n=e.length;let a=0,o=um,i=cm,r=e.lastIndexOf(dm);r<0&&(r=0);for(let s=0;s<r;++s)e.charCodeAt(s)>=128&&po("not-basic"),t.push(e.charCodeAt(s));for(let s=r>0?r+1:0;s<n;){const l=a;for(let c=1,d=Tn;;d+=Tn){s>=n&&po("invalid-input");const p=rZ(e.charCodeAt(s++)),g=(p>=Tn&&po("invalid-input"),p>Ln((ga-a)/c)&&po("overflow"),a+=p*c,d<=i?Wl:d>=i+si?si:d-i);if(p<g)break;const _=Tn-g;c>Ln(ga/_)&&po("overflow"),c*=_}const u=t.length+1;i=mm(a-l,u,l==0),Ln(a/u)>ga-o&&po("overflow"),o+=Ln(a/u),a%=u,t.splice(a++,0,o)}return String.fromCodePoint(...t)},Yl=function(e){const t=[],n=(e=Jl(e),e.length);let a=um,o=0,i=cm;for(var r of e)r<128&&t.push(ks(r));const s=t.length;let l=s;for(s&&t.push(dm);l<n;){let d=ga;for(var u of e)u>=a&&u<d&&(d=u);const p=l+1;d-a>Ln((ga-o)/p)&&po("overflow"),o+=(d-a)*p,a=d;for(var c of e)if(c<a&&++o>ga&&po("overflow"),c===a){let g=o;for(let _=Tn;;_+=Tn){const I=_<=i?Wl:_>=i+si?si:_-i;if(g<I)break;const C=g-I,b=Tn-I;t.push(ks(id(I+C%b,0))),g=Ln(C/b)}t.push(ks(id(g,0))),i=mm(o,p,l===s),o=0,++l}++o,++a}return t.join("")},hm=function(e){return fm(e,function(t){return tZ.test(t)?Gl(t.slice(4).toLowerCase()):t})},gm=function(e){return fm(e,function(t){return nZ.test(t)?"xn--"+Yl(t):t})},sZ={version:"2.3.1",ucs2:{decode:Jl,encode:pm},decode:Gl,encode:Yl,toASCII:gm,toUnicode:hm};var lZ=Object.freeze({__proto__:null,ucs2decode:Jl,ucs2encode:pm,decode:Gl,encode:Yl,toASCII:gm,toUnicode:hm,default:sZ}),cZ=Cy(lZ),uZ={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},dZ={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},fZ={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},Ka=lt,pZ=Di,mZ=fY,hZ=PY,gZ=pK,vZ=RK,bZ=ZK,Po=la,vm=cZ,_Z={default:uZ,zero:dZ,commonmark:fZ},yZ=/^(vbscript|javascript|file|data):/,wZ=/^data:image\/(gif|png|jpeg|webp);/;function SZ(e){return e=e.trim().toLowerCase(),!yZ.test(e)||!!wZ.test(e)}var bm=["http:","https:","mailto:"];function kZ(e){if(e=Po.parse(e,!0),e.hostname&&(!e.protocol||bm.indexOf(e.protocol)>=0))try{e.hostname=vm.toASCII(e.hostname)}catch{}return Po.encode(Po.format(e))}function xZ(e){if(e=Po.parse(e,!0),e.hostname&&(!e.protocol||bm.indexOf(e.protocol)>=0))try{e.hostname=vm.toUnicode(e.hostname)}catch{}return Po.decode(Po.format(e),Po.decode.defaultChars+"%")}function un(e,t){if(!(this instanceof un))return new un(e,t);t||Ka.isString(e)||(t=e||{},e="default"),this.inline=new vZ,this.block=new gZ,this.core=new hZ,this.renderer=new mZ,this.linkify=new bZ,this.validateLink=SZ,this.normalizeLink=kZ,this.normalizeLinkText=xZ,this.utils=Ka,this.helpers=Ka.assign({},pZ),this.options={},this.configure(e),t&&this.set(t)}un.prototype.set=function(e){return Ka.assign(this.options,e),this},un.prototype.configure=function(e){var t,n=this;if(Ka.isString(e)&&(t=e,e=_Z[t],!e))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(e)return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(a){e.components[a].rules&&n[a].ruler.enableOnly(e.components[a].rules),e.components[a].rules2&&n[a].ruler2.enableOnly(e.components[a].rules2)}),this;throw new Error("Wrong `markdown-it` preset, can't be empty")},un.prototype.enable=function(e,t){var n=[],a=(Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0)),e.filter(function(o){return n.indexOf(o)<0}));if(a.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+a);return this},un.prototype.disable=function(e,t){var n=[],a=(Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0)),e.filter(function(o){return n.indexOf(o)<0}));if(a.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+a);return this},un.prototype.use=function(e){var t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},un.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");return e=new this.core.State(e,this,t),this.core.process(e),e.tokens},un.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},un.prototype.parseInline=function(e,t){return e=new this.core.State(e,this,t),e.inlineMode=!0,this.core.process(e),e.tokens},un.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};var CZ=un,QZ=CZ,rd={exports:{}},AZ=(function(e){(function(t){e.exports=t()})(function(){return function(t){var n={};function a(o){var i;return(n[o]||(i=n[o]={exports:{},id:o,loaded:!1},t[o].call(i.exports,i,i.exports,a),i.loaded=!0,i)).exports}return a.m=t,a.c=n,a.p="",a(0)}([function(t,n,a){var o=a(2),i=a(1);function r(s,l){return function(u,c){var d,p,g,_,I,C,b,w="",y="",m="",x=u.pos,B=u.posMax;if(u.src.charCodeAt(u.pos)!==33||u.src.charCodeAt(u.pos+1)!==91||(g=u.pos+2,p=s.helpers.parseLinkLabel(u,u.pos+1,!1),p<0))return!1;if(_=p+1,_<B&&u.src.charCodeAt(_)===40){for(_++;_<B&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(_>=B)return!1;for(b=_,I=s.helpers.parseLinkDestination(u.src,_,u.posMax),I.ok&&(m=u.md.normalizeLink(I.str),u.md.validateLink(m)?_=I.pos:m=""),b=_;_<B&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(I=s.helpers.parseLinkTitle(u.src,_,u.posMax),_<B&&b!==_&&I.ok)for(C=I.str,_=I.pos;_<B&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);else C="";if(_-1>=0&&(d=u.src.charCodeAt(_-1),d===32)&&(I=i(u.src,_,u.posMax),I.ok))for(w=I.width,y=I.height,_=I.pos;_<B&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(_>=B||u.src.charCodeAt(_)!==41)return u.pos=x,!1;_++}else{if(typeof u.env.references>"u")return!1;for(;_<B&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(_<B&&u.src.charCodeAt(_)===91&&(b=_+1,_=s.helpers.parseLinkLabel(u,_),_>=0)?T=u.src.slice(b,_++):_=p+1,T=T||u.src.slice(g,p),I=u.env.references[s.utils.normalizeReference(T)],!I)return u.pos=x,!1;m=I.href,C=I.title}if(!c){u.pos=g,u.posMax=p;var T=new u.md.inline.State(u.src.slice(g,p),u.md,u.env,b=[]);if(T.md.inline.tokenize(T),l&&l.autofill&&w===""&&y==="")try{var E=o(m),w=E.width,y=E.height}catch{}x=u.push("image","img",0),x.attrs=I=[["src",m],["alt",""]],x.children=b,C&&I.push(["title",C]),w!==""&&I.push(["width",w]),y!==""&&I.push(["height",y])}return u.pos=_,u.posMax=B,!0}}t.exports=function(s,l){s.inline.ruler.before("emphasis","image",r(s,l))}},function(t,n,a){function o(i,r,s){for(var l=r,u={ok:!1,pos:r,value:""},c=i.charCodeAt(r);r<s&&c>=48&&c<=57||c===37;)c=i.charCodeAt(++r);return u.ok=!0,u.pos=r,u.value=i.slice(l,r),u}t.exports=function(i,r,s){var l,u,c={ok:!1,pos:0,width:"",height:""};return r>=s||(u=i.charCodeAt(r),u!==61)||(r++,u=i.charCodeAt(r),u!==120&&(u<48||u>57))||(l=o(i,r,s),r=l.pos,u=i.charCodeAt(r),u===120&&(r++,u=o(i,r,s),r=u.pos,c.width=l.value,c.height=u.value,c.pos=r,c.ok=!0)),c}},function(t,n,a){(function(o){var i=a(16),r=a(6),s=a(3),l={},u=a(5),c=(u.forEach(function(_){l[_]=a(4)("./"+_)}),131072);function d(_,I){var C=s(_,I);if(C in l&&(_=l[C].calculate(_,I),_!==!1))return _.type=C,_;throw new TypeError("Unsupported file type")}function p(_,I){i.open(_,"r",function(w,b){if(w)return I(w);var w=i.fstatSync(b).size,w=Math.min(w,c),y=new o(w);i.read(b,y,0,w,0,function(m){if(m)return I(m);i.close(b,function(x){I(x,y)})})})}function g(I){var I=i.openSync(I,"r"),C=i.fstatSync(I).size,C=Math.min(C,c),b=new o(C);return i.readSync(I,b,0,C,0),i.closeSync(I),b}t.exports=function(_,I){if(typeof _!="string")throw new TypeError("Input must be file name");var C=r.resolve(_);if(typeof I!="function")return _=g(C),d(_,C);p(C,function(b,w){if(b)return I(b);var y;try{y=d(w,C)}catch(m){b=m}I(b,y)})}}).call(n,a(7).Buffer)},function(t,n,a){var o={},i=a(5);i.forEach(function(r){o[r]=a(4)("./"+r).detect}),t.exports=function(r,s){var l,u;for(l in o)if(l in o&&(u=o[l](r,s),u))return l;throw new TypeError("Unsupported type")}},function(t,n,a){var o={"./bmp":8,"./bmp.js":8,"./gif":9,"./gif.js":9,"./jpg":10,"./jpg.js":10,"./png":11,"./png.js":11,"./psd":12,"./psd.js":12,"./svg":13,"./svg.js":13,"./tiff":14,"./tiff.js":14,"./webp":15,"./webp.js":15};function i(s){return a(r(s))}function r(s){return o[s]||function(){throw new Error("Cannot find module '"+s+"'.")}()}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=4},function(t,n,a){t.exports=["bmp","gif","jpg","png","tiff"]},function(t,n,a){(function(o){function i(c,d){for(var p=0,g=c.length-1;g>=0;g--){var _=c[g];_==="."?c.splice(g,1):_===".."?(c.splice(g,1),p++):p&&(c.splice(g,1),p--)}if(d)for(;p--;p)c.unshift("..");return c}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,s=function(c){return r.exec(c).slice(1)};function l(c,d){if(c.filter)return c.filter(d);for(var p=[],g=0;g<c.length;g++)d(c[g],g,c)&&p.push(c[g]);return p}n.resolve=function(){for(var c="",d=!1,p=arguments.length-1;p>=-1&&!d;p--){var g=p>=0?arguments[p]:o.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");g&&(c=g+"/"+c,d=g.charAt(0)==="/")}return c=i(l(c.split("/"),function(_){return!!_}),!d).join("/"),(d?"/":"")+c||"."},n.normalize=function(c){var d=n.isAbsolute(c),p=u(c,-1)==="/";return c=i(l(c.split("/"),function(g){return!!g}),!d).join("/"),c||d||(c="."),c&&p&&(c+="/"),(d?"/":"")+c},n.isAbsolute=function(c){return c.charAt(0)==="/"},n.join=function(){var c=Array.prototype.slice.call(arguments,0);return n.normalize(l(c,function(d,p){if(typeof d!="string")throw new TypeError("Arguments to path.join must be strings");return d}).join("/"))},n.relative=function(c,d){function p(y){for(var m=0;m<y.length&&y[m]==="";m++);for(var x=y.length-1;x>=0&&y[x]==="";x--);return m>x?[]:y.slice(m,x-m+1)}c=n.resolve(c).substr(1),d=n.resolve(d).substr(1);for(var g=p(c.split("/")),_=p(d.split("/")),I=Math.min(g.length,_.length),C=I,b=0;b<I;b++)if(g[b]!==_[b]){C=b;break}for(var w=[],b=C;b<g.length;b++)w.push("..");return w=w.concat(_.slice(C)),w.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(p){var p=s(p),d=p[0],p=p[1];return d||p?(p=p&&p.substr(0,p.length-1),d+p):"."},n.basename=function(c,d){return c=s(c)[2],d&&c.substr(-1*d.length)===d&&(c=c.substr(0,c.length-d.length)),c},n.extname=function(c){return s(c)[3]};var u="ab".substr(-1)==="b"?function(c,d,p){return c.substr(d,p)}:function(c,d,p){return d<0&&(d=c.length+d),c.substr(d,p)}}).call(n,a(18))},function(t,n,a){(function(c){var i=a(21),r=a(19),s=a(20),l=(n.Buffer=c,n.SlowBuffer=d,n.INSPECT_MAX_BYTES=50,c.poolSize=8192,1073741823),u={};function c(h,k){var q=this;if(!(q instanceof c))return new c(h,k);var Y,z,A=typeof h;if(A==="number")Y=+h;else if(A==="string")Y=c.byteLength(h,k);else{if(A!=="object"||h===null)throw new TypeError("must start with number, buffer, array or string");h.type==="Buffer"&&s(h.data)&&(h=h.data),Y=+h.length}if(Y>l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");if(Y<0?Y=0:Y>>>=0,c.TYPED_ARRAY_SUPPORT?q=c._augment(new Uint8Array(Y)):(q.length=Y,q._isBuffer=!0),c.TYPED_ARRAY_SUPPORT&&typeof h.byteLength=="number")q._set(h);else if(be(h))if(c.isBuffer(h))for(z=0;z<Y;z++)q[z]=h.readUInt8(z);else for(z=0;z<Y;z++)q[z]=(h[z]%256+256)%256;else if(A==="string")q.write(h,0,k);else if(A==="number"&&!c.TYPED_ARRAY_SUPPORT)for(z=0;z<Y;z++)q[z]=0;return Y>0&&Y<=c.poolSize&&(q.parent=u),q}function d(h,k){var q;return this instanceof d?(q=new c(h,k),delete q.parent,q):new d(h,k)}function p(h,k,q,Y){q=Number(q)||0;var z=h.length-q,z=((!Y||(Y=Number(Y),Y>z))&&(Y=z),k.length);if(z%2!==0)throw new Error("Invalid hex string");Y>z/2&&(Y=z/2);for(var A=0;A<Y;A++){var $=parseInt(k.substr(2*A,2),16);if(isNaN($))throw new Error("Invalid hex string");h[q+A]=$}return A}function g(h,k,q,Y){return k=Me(J(k,h.length-q),h,q,Y),k}function _(h,k,q,Y){return k=Me(H(k),h,q,Y),k}function I(h,k,q,Y){return _(h,k,q,Y)}function C(h,k,q,Y){return k=Me(Le(k),h,q,Y),k}function b(h,k,q,Y){return k=Me(pe(k,h.length-q),h,q,Y),k}function w(h,k,q){return k===0&&q===h.length?i.fromByteArray(h):i.fromByteArray(h.slice(k,q))}function y(h,k,q){var Y="",z="";q=Math.min(h.length,q);for(var A=k;A<q;A++)h[A]<=127?(Y+=de(z)+String.fromCharCode(h[A]),z=""):z+="%"+h[A].toString(16);return Y+de(z)}function m(h,k,q){var Y="";q=Math.min(h.length,q);for(var z=k;z<q;z++)Y+=String.fromCharCode(127&h[z]);return Y}function x(h,k,q){var Y="";q=Math.min(h.length,q);for(var z=k;z<q;z++)Y+=String.fromCharCode(h[z]);return Y}function B(h,k,q){for(var Y=h.length,z=((!k||k<0)&&(k=0),(!q||q<0||q>Y)&&(q=Y),""),A=k;A<q;A++)z+=$e(h[A]);return z}function T(h,k,q){for(var Y=h.slice(k,q),z="",A=0;A<Y.length;A+=2)z+=String.fromCharCode(Y[A]+256*Y[A+1]);return z}function E(h,k,q){if(h%1!==0||h<0)throw new RangeError("offset is not uint");if(h+k>q)throw new RangeError("Trying to access beyond buffer length")}function O(h,k,q,Y,z,A){if(!c.isBuffer(h))throw new TypeError("buffer must be a Buffer instance");if(k>z||k<A)throw new RangeError("value is out of bounds");if(q+Y>h.length)throw new RangeError("index out of range")}function F(h,k,q,Y){k<0&&(k=65535+k+1);for(var z=0,A=Math.min(h.length-q,2);z<A;z++)h[q+z]=(k&255<<8*(Y?z:1-z))>>>8*(Y?z:1-z)}function V(h,k,q,Y){k<0&&(k=4294967295+k+1);for(var z=0,A=Math.min(h.length-q,4);z<A;z++)h[q+z]=k>>>8*(Y?z:3-z)&255}function j(h,k,q,Y,z,A){if(k>z||k<A)throw new RangeError("value is out of bounds");if(q+Y>h.length)throw new RangeError("index out of range");if(q<0)throw new RangeError("index out of range")}function U(h,k,q,Y,z){return z||j(h,k,q,4,34028234663852886e22,-34028234663852886e22),r.write(h,k,q,Y,23,4),q+4}function D(h,k,q,Y,z){return z||j(h,k,q,8,17976931348623157e292,-17976931348623157e292),r.write(h,k,q,Y,52,8),q+8}c.TYPED_ARRAY_SUPPORT=function(){try{var h=new ArrayBuffer(0),k=new Uint8Array(h);return k.foo=function(){return 42},k.foo()===42&&typeof k.subarray=="function"&&new Uint8Array(1).subarray(1,1).byteLength===0}catch{return!1}}(),c.isBuffer=function(h){return!(h==null||!h._isBuffer)},c.compare=function(h,k){if(!c.isBuffer(h)||!c.isBuffer(k))throw new TypeError("Arguments must be Buffers");if(h===k)return 0;for(var q=h.length,Y=k.length,z=0,A=Math.min(q,Y);z<A&&h[z]===k[z];z++);return z!==A&&(q=h[z],Y=k[z]),q<Y?-1:Y<q?1:0},c.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(h,k){if(!s(h))throw new TypeError("list argument must be an Array of Buffers.");if(h.length===0)return new c(0);if(h.length===1)return h[0];if(k===void 0)for(k=0,z=0;z<h.length;z++)k+=h[z].length;for(var q=new c(k),Y=0,z=0;z<h.length;z++){var A=h[z];A.copy(q,Y),Y+=A.length}return q},c.byteLength=function(h,k){var q;switch(h+="",k||"utf8"){case"ascii":case"binary":case"raw":q=h.length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":q=2*h.length;break;case"hex":q=h.length>>>1;break;case"utf8":case"utf-8":q=J(h).length;break;case"base64":q=Le(h).length;break;default:q=h.length}return q},c.prototype.length=void 0,c.prototype.parent=void 0,c.prototype.toString=function(h,k,q){var Y=!1;if(k>>>=0,q=q===void 0||q===1/0?this.length:q>>>0,h=h||"utf8",k<0&&(k=0),q>this.length&&(q=this.length),q<=k)return"";for(;;)switch(h){case"hex":return B(this,k,q);case"utf8":case"utf-8":return y(this,k,q);case"ascii":return m(this,k,q);case"binary":return x(this,k,q);case"base64":return w(this,k,q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,k,q);default:if(Y)throw new TypeError("Unknown encoding: "+h);h=(h+"").toLowerCase(),Y=!0}},c.prototype.equals=function(h){if(c.isBuffer(h))return this===h||c.compare(this,h)===0;throw new TypeError("Argument must be a Buffer")},c.prototype.inspect=function(){var h="",k=n.INSPECT_MAX_BYTES;return this.length>0&&(h=this.toString("hex",0,k).match(/.{2}/g).join(" "),this.length>k)&&(h+=" ... "),"<Buffer "+h+">"},c.prototype.compare=function(h){if(c.isBuffer(h))return this===h?0:c.compare(this,h);throw new TypeError("Argument must be a Buffer")},c.prototype.indexOf=function(h,k){if(k>2147483647?k=2147483647:k<-2147483648&&(k=-2147483648),k>>=0,this.length===0||k>=this.length)return-1;if(k<0&&(k=Math.max(this.length+k,0)),typeof h=="string")return h.length===0?-1:String.prototype.indexOf.call(this,h,k);if(c.isBuffer(h))return q(this,h,k);if(typeof h=="number")return c.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==="function"?Uint8Array.prototype.indexOf.call(this,h,k):q(this,[h],k);function q(Y,z,A){for(var $=-1,te=0;A+te<Y.length;te++)if(Y[A+te]===z[$===-1?0:te-$]){if($===-1&&($=te),te-$+1===z.length)return A+$}else $=-1;return-1}throw new TypeError("val must be string, number or Buffer")},c.prototype.get=function(h){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(h)},c.prototype.set=function(h,k){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(h,k)},c.prototype.write=function(h,k,q,Y){if(isFinite(k)?isFinite(q)||(Y=q,q=void 0):(A=Y,Y=k,k=q,q=A),k=Number(k)||0,q<0||k<0||k>this.length)throw new RangeError("attempt to write outside buffer bounds");var z,A=this.length-k;switch((!q||(q=Number(q),q>A))&&(q=A),Y=String(Y||"utf8").toLowerCase(),Y){case"hex":z=p(this,h,k,q);break;case"utf8":case"utf-8":z=g(this,h,k,q);break;case"ascii":z=_(this,h,k,q);break;case"binary":z=I(this,h,k,q);break;case"base64":z=C(this,h,k,q);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":z=b(this,h,k,q);break;default:throw new TypeError("Unknown encoding: "+Y)}return z},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.slice=function(h,k){var q=this.length;if(h=~~h,k=k===void 0?q:~~k,h<0?(h+=q,h<0&&(h=0)):h>q&&(h=q),k<0?(k+=q,k<0&&(k=0)):k>q&&(k=q),k<h&&(k=h),c.TYPED_ARRAY_SUPPORT)z=c._augment(this.subarray(h,k));else for(var Y=k-h,z=new c(Y,void 0),A=0;A<Y;A++)z[A]=this[A+h];return z.length&&(z.parent=this.parent||this),z},c.prototype.readUIntLE=function(h,k,q){h>>>=0,k>>>=0,q||E(h,k,this.length);for(var Y=this[h],z=1,A=0;++A<k&&(z*=256);)Y+=this[h+A]*z;return Y},c.prototype.readUIntBE=function(h,k,q){h>>>=0,k>>>=0,q||E(h,k,this.length);for(var Y=this[h+--k],z=1;k>0&&(z*=256);)Y+=this[h+--k]*z;return Y},c.prototype.readUInt8=function(h,k){return k||E(h,1,this.length),this[h]},c.prototype.readUInt16LE=function(h,k){return k||E(h,2,this.length),this[h]|this[h+1]<<8},c.prototype.readUInt16BE=function(h,k){return k||E(h,2,this.length),this[h]<<8|this[h+1]},c.prototype.readUInt32LE=function(h,k){return k||E(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+16777216*this[h+3]},c.prototype.readUInt32BE=function(h,k){return k||E(h,4,this.length),16777216*this[h]+(this[h+1]<<16|this[h+2]<<8|this[h+3])},c.prototype.readIntLE=function(h,k,q){h>>>=0,k>>>=0,q||E(h,k,this.length);for(var Y=this[h],z=1,A=0;++A<k&&(z*=256);)Y+=this[h+A]*z;return z*=128,Y>=z&&(Y-=Math.pow(2,8*k)),Y},c.prototype.readIntBE=function(h,k,q){h>>>=0,k>>>=0,q||E(h,k,this.length);for(var Y=k,z=1,A=this[h+--Y];Y>0&&(z*=256);)A+=this[h+--Y]*z;return z*=128,A>=z&&(A-=Math.pow(2,8*k)),A},c.prototype.readInt8=function(h,k){return k||E(h,1,this.length),128&this[h]?-1*(255-this[h]+1):this[h]},c.prototype.readInt16LE=function(h,k){return k||E(h,2,this.length),k=this[h]|this[h+1]<<8,32768&k?4294901760|k:k},c.prototype.readInt16BE=function(h,k){return k||E(h,2,this.length),k=this[h+1]|this[h]<<8,32768&k?4294901760|k:k},c.prototype.readInt32LE=function(h,k){return k||E(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},c.prototype.readInt32BE=function(h,k){return k||E(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},c.prototype.readFloatLE=function(h,k){return k||E(h,4,this.length),r.read(this,h,!0,23,4)},c.prototype.readFloatBE=function(h,k){return k||E(h,4,this.length),r.read(this,h,!1,23,4)},c.prototype.readDoubleLE=function(h,k){return k||E(h,8,this.length),r.read(this,h,!0,52,8)},c.prototype.readDoubleBE=function(h,k){return k||E(h,8,this.length),r.read(this,h,!1,52,8)},c.prototype.writeUIntLE=function(h,k,q,Y){h=+h,k>>>=0,q>>>=0,Y||O(this,h,k,q,Math.pow(2,8*q),0);var z=1,A=0;for(this[k]=255&h;++A<q&&(z*=256);)this[k+A]=h/z>>>0&255;return k+q},c.prototype.writeUIntBE=function(h,k,q,Y){h=+h,k>>>=0,q>>>=0,Y||O(this,h,k,q,Math.pow(2,8*q),0);var z=q-1,A=1;for(this[k+z]=255&h;--z>=0&&(A*=256);)this[k+z]=h/A>>>0&255;return k+q},c.prototype.writeUInt8=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,1,255,0),c.TYPED_ARRAY_SUPPORT||(h=Math.floor(h)),this[k]=h,k+1},c.prototype.writeUInt16LE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[k]=h,this[k+1]=h>>>8):F(this,h,k,!0),k+2},c.prototype.writeUInt16BE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[k]=h>>>8,this[k+1]=h):F(this,h,k,!1),k+2},c.prototype.writeUInt32LE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[k+3]=h>>>24,this[k+2]=h>>>16,this[k+1]=h>>>8,this[k]=h):V(this,h,k,!0),k+4},c.prototype.writeUInt32BE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[k]=h>>>24,this[k+1]=h>>>16,this[k+2]=h>>>8,this[k+3]=h):V(this,h,k,!1),k+4},c.prototype.writeIntLE=function(h,k,q,Y){h=+h,k>>>=0,Y||O(this,h,k,q,Math.pow(2,8*q-1)-1,-Math.pow(2,8*q-1));var z=0,A=1,$=h<0?1:0;for(this[k]=255&h;++z<q&&(A*=256);)this[k+z]=(h/A>>0)-$&255;return k+q},c.prototype.writeIntBE=function(h,k,q,Y){h=+h,k>>>=0,Y||O(this,h,k,q,Math.pow(2,8*q-1)-1,-Math.pow(2,8*q-1));var z=q-1,A=1,$=h<0?1:0;for(this[k+z]=255&h;--z>=0&&(A*=256);)this[k+z]=(h/A>>0)-$&255;return k+q},c.prototype.writeInt8=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,1,127,-128),c.TYPED_ARRAY_SUPPORT||(h=Math.floor(h)),h<0&&(h=255+h+1),this[k]=h,k+1},c.prototype.writeInt16LE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[k]=h,this[k+1]=h>>>8):F(this,h,k,!0),k+2},c.prototype.writeInt16BE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[k]=h>>>8,this[k+1]=h):F(this,h,k,!1),k+2},c.prototype.writeInt32LE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[k]=h,this[k+1]=h>>>8,this[k+2]=h>>>16,this[k+3]=h>>>24):V(this,h,k,!0),k+4},c.prototype.writeInt32BE=function(h,k,q){return h=+h,k>>>=0,q||O(this,h,k,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),c.TYPED_ARRAY_SUPPORT?(this[k]=h>>>24,this[k+1]=h>>>16,this[k+2]=h>>>8,this[k+3]=h):V(this,h,k,!1),k+4},c.prototype.writeFloatLE=function(h,k,q){return U(this,h,k,!0,q)},c.prototype.writeFloatBE=function(h,k,q){return U(this,h,k,!1,q)},c.prototype.writeDoubleLE=function(h,k,q){return D(this,h,k,!0,q)},c.prototype.writeDoubleBE=function(h,k,q){return D(this,h,k,!1,q)},c.prototype.copy=function(h,k,q,Y){if(q=q||0,Y||Y===0||(Y=this.length),k>=h.length&&(k=h.length),k=k||0,Y>0&&Y<q&&(Y=q),Y===q||h.length===0||this.length===0)return 0;if(k<0)throw new RangeError("targetStart out of bounds");if(q<0||q>=this.length)throw new RangeError("sourceStart out of bounds");if(Y<0)throw new RangeError("sourceEnd out of bounds");Y>this.length&&(Y=this.length),h.length-k<Y-q&&(Y=h.length-k+q);var z=Y-q;if(z<1e3||!c.TYPED_ARRAY_SUPPORT)for(var A=0;A<z;A++)h[A+k]=this[A+q];else h._set(this.subarray(q,q+z),k);return z},c.prototype.fill=function(h,k,q){if(h=h||0,k=k||0,q=q||this.length,q<k)throw new RangeError("end < start");if(q!==k&&this.length!==0){if(k<0||k>=this.length)throw new RangeError("start out of bounds");if(q<0||q>this.length)throw new RangeError("end out of bounds");if(typeof h=="number")for(A=k;A<q;A++)this[A]=h;else for(var Y=J(h.toString()),z=Y.length,A=k;A<q;A++)this[A]=Y[A%z];return this}},c.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new TypeError("Buffer.toArrayBuffer not supported in this browser");if(c.TYPED_ARRAY_SUPPORT)return new c(this).buffer;for(var h=new Uint8Array(this.length),k=0,q=h.length;k<q;k+=1)h[k]=this[k];return h.buffer};var R=c.prototype,ae=(c._augment=function(h){return h.constructor=c,h._isBuffer=!0,h._set=h.set,h.get=R.get,h.set=R.set,h.write=R.write,h.toString=R.toString,h.toLocaleString=R.toString,h.toJSON=R.toJSON,h.equals=R.equals,h.compare=R.compare,h.indexOf=R.indexOf,h.copy=R.copy,h.slice=R.slice,h.readUIntLE=R.readUIntLE,h.readUIntBE=R.readUIntBE,h.readUInt8=R.readUInt8,h.readUInt16LE=R.readUInt16LE,h.readUInt16BE=R.readUInt16BE,h.readUInt32LE=R.readUInt32LE,h.readUInt32BE=R.readUInt32BE,h.readIntLE=R.readIntLE,h.readIntBE=R.readIntBE,h.readInt8=R.readInt8,h.readInt16LE=R.readInt16LE,h.readInt16BE=R.readInt16BE,h.readInt32LE=R.readInt32LE,h.readInt32BE=R.readInt32BE,h.readFloatLE=R.readFloatLE,h.readFloatBE=R.readFloatBE,h.readDoubleLE=R.readDoubleLE,h.readDoubleBE=R.readDoubleBE,h.writeUInt8=R.writeUInt8,h.writeUIntLE=R.writeUIntLE,h.writeUIntBE=R.writeUIntBE,h.writeUInt16LE=R.writeUInt16LE,h.writeUInt16BE=R.writeUInt16BE,h.writeUInt32LE=R.writeUInt32LE,h.writeUInt32BE=R.writeUInt32BE,h.writeIntLE=R.writeIntLE,h.writeIntBE=R.writeIntBE,h.writeInt8=R.writeInt8,h.writeInt16LE=R.writeInt16LE,h.writeInt16BE=R.writeInt16BE,h.writeInt32LE=R.writeInt32LE,h.writeInt32BE=R.writeInt32BE,h.writeFloatLE=R.writeFloatLE,h.writeFloatBE=R.writeFloatBE,h.writeDoubleLE=R.writeDoubleLE,h.writeDoubleBE=R.writeDoubleBE,h.fill=R.fill,h.inspect=R.inspect,h.toArrayBuffer=R.toArrayBuffer,h},/[^+\/0-9A-z\-]/g);function Z(h){if(h=G(h).replace(ae,""),h.length<2)return"";for(;h.length%4!==0;)h+="=";return h}function G(h){return h.trim?h.trim():h.replace(/^\s+|\s+$/g,"")}function be(h){return s(h)||c.isBuffer(h)||h&&typeof h=="object"&&typeof h.length=="number"}function $e(h){return h<16?"0"+h.toString(16):h.toString(16)}function J(h,k){k=k||1/0;for(var q,Y=h.length,z=null,A=[],$=0;$<Y;$++){if(q=h.charCodeAt($),q>55295&&q<57344){if(!z){if(q>56319){(k-=3)>-1&&A.push(239,191,189);continue}if($+1===Y){(k-=3)>-1&&A.push(239,191,189);continue}z=q;continue}if(q<56320){(k-=3)>-1&&A.push(239,191,189),z=q;continue}q=z-55296<<10|q-56320|65536,z=null}else z&&((k-=3)>-1&&A.push(239,191,189),z=null);if(q<128){if(--k<0)break;A.push(q)}else if(q<2048){if((k-=2)<0)break;A.push(q>>6|192,63&q|128)}else if(q<65536){if((k-=3)<0)break;A.push(q>>12|224,q>>6&63|128,63&q|128)}else{if(!(q<2097152))throw new Error("Invalid code point");if((k-=4)<0)break;A.push(q>>18|240,q>>12&63|128,q>>6&63|128,63&q|128)}}return A}function H(h){for(var k=[],q=0;q<h.length;q++)k.push(255&h.charCodeAt(q));return k}function pe(h,k){for(var q,Y,z=[],A=0;A<h.length&&!((k-=2)<0);A++)Y=h.charCodeAt(A),q=Y>>8,Y=Y%256,z.push(Y),z.push(q);return z}function Le(h){return i.toByteArray(Z(h))}function Me(h,k,q,Y){for(var z=0;z<Y&&!(z+q>=k.length||z>=h.length);z++)k[z+q]=h[z];return z}function de(h){try{return decodeURIComponent(h)}catch{return"�"}}}).call(n,a(7).Buffer)},function(t,n,a){function o(r){return r.toString("ascii",0,2)==="BM"}function i(r){return{width:r.readUInt32LE(18),height:r.readUInt32LE(22)}}t.exports={detect:o,calculate:i}},function(t,n,a){var o=/^GIF8[7,9]a/;function i(s){return s=s.toString("ascii",0,6),o.test(s)}function r(s){return{width:s.readUInt16LE(6),height:s.readUInt16LE(8)}}t.exports={detect:i,calculate:r}},function(t,n,a){var o={ffdb:"0001010101",ffe0:"4a46494600",ffe1:"4578696600",ffe2:"4943435f50",ffe3:"",ffe8:"5350494646",ffec:"4475636b79",ffed:"50686f746f",ffee:"41646f6265"},i=["\x1B[31m","\x1B[39m"];function r(c){var d=c.toString("hex",0,2),p=c.toString("hex",2,4);return d==="ffd8"&&(d=c.toString("hex",6,11),c=p&&o[p],c===""?(console.warn(i[0]+`this looks like a unrecognised jpeg
please report the issue here
`+i[1],`	https://github.com/netroy/image-size/issues/new
`),!1):d===c||p==="ffdb")}function s(c,d){return{height:c.readUInt16BE(d),width:c.readUInt16BE(d+2)}}function l(c,d){if(d>c.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(c[d]!==255)throw new TypeError("Invalid JPG, marker table corrupted")}function u(c){var d,p;for(c=c.slice(4);c.length;){if(d=c.readUInt16BE(0),l(c,d),p=c[d+1],p===192||p===194)return s(c,d+5);c=c.slice(d+2)}throw new TypeError("Invalid JPG, no size found")}t.exports={detect:r,calculate:u}},function(t,n,a){var o=`PNG\r

`;function i(s){if(o===s.toString("ascii",1,8)){if(s.toString("ascii",12,16)!=="IHDR")throw new TypeError("invalid png");return!0}}function r(s){return{width:s.readUInt32BE(16),height:s.readUInt32BE(20)}}t.exports={detect:i,calculate:r}},function(t,n,a){function o(r){return r.toString("ascii",0,4)==="8BPS"}function i(r){return{width:r.readUInt32BE(18),height:r.readUInt32BE(14)}}t.exports={detect:o,calculate:i}},function(t,n,a){var o=/<svg[^>]+[^>]*>/;function i(c){return o.test(c)}var r={root:/<svg [^>]+>/,width:/(^|\s)width\s*=\s*"(.+?)"/i,height:/(^|\s)height\s*=\s*"(.+?)"/i,viewbox:/(^|\s)viewbox\s*=\s*"(.+?)"/i};function s(c){var d=1;return c&&c[2]&&(c=c[2].split(/\s/g),c.length===4)&&(c=c.map(function(p){return parseInt(p,10)}),d=(c[2]-c[0])/(c[3]-c[1])),d}function l(g){var d,p,g=g.toString().replace(/[\r\n\s]+/g," "),g=g.match(r.root),g=g&&g[0];if(g)return d=g.match(r.width),p=g.match(r.height),g=g.match(r.viewbox),g=s(g),{width:parseInt(d&&d[2],10)||0,height:parseInt(p&&p[2],10)||0,ratio:g}}function u(g){var g=l(g),d=g.width,p=g.height,g=g.ratio;if(d&&p)return{width:d,height:p};if(d)return{width:d,height:Math.floor(d/g)};if(p)return{width:Math.floor(p*g),height:p};throw new TypeError("invalid svg")}t.exports={detect:i,calculate:u}},function(t,n,a){(function(o){var i=a(16),r=a(17);function s(_){return _=_.toString("hex",0,4),_==="49492a00"||_==="4d4d002a"}function l(b,m,w){var b=r(b,32,4,w),w=1024,y=i.statSync(m).size,y=(b+w>y&&(w=y-b-10),new o(w)),m=i.openSync(m,"r"),m=(i.readSync(m,y,0,w,b),y.slice(2));return m}function u(b,I){var C=r(b,16,8,I),b=r(b,16,10,I);return(b<<16)+C}function c(_){if(_.length>24)return _.slice(12)}function d(_,I){for(var C,b,w,y={};_&&_.length&&(C=r(_,16,0,I),b=r(_,16,2,I),w=r(_,32,4,I),C!==0);)w===1&&b===3&&(y[C]=u(_,I)),_=c(_);return y}function p(_){return _=_.toString("ascii",0,2),_==="II"?"LE":_==="MM"?"BE":void 0}function g(b,C){if(!C)throw new TypeError("Tiff doesn't support buffer");var w=p(b)==="BE",b=l(b,C,w),C=d(b,w),b=C[256],w=C[257];if(b&&w)return{width:b,height:w};throw new TypeError("Invalid Tiff, missing tags")}t.exports={detect:s,calculate:g}}).call(n,a(7).Buffer)},function(t,n,a){function o(d){var u=d.toString("ascii",0,4)==="RIFF",c=d.toString("ascii",8,12)==="WEBP",d=d.toString("ascii",12,15)==="VP8";return u&&c&&d}function i(l){var u,c=l.toString("ascii",12,16);return l=l.slice(20,30),c==="VP8 "&&l[0]!==47?s(l):(u=l.toString("hex",3,6),c==="VP8L"&&u!=="9d012a"&&r(l))}function r(l){return{width:1+((63&l[2])<<8|l[1]),height:1+((15&l[4])<<10|l[3]<<2|(192&l[2])>>6)}}function s(l){return{width:16383&l.readInt16LE(6),height:16383&l.readInt16LE(8)}}t.exports={detect:o,calculate:i}},function(t,n,a){},function(t,n,a){t.exports=function(o,i,r,s){return r=r||0,s=s?"BE":"LE",i=o["readUInt"+i+s],i.call(o,r)}},function(o,n,a){var o=o.exports={},i=[],r=!1;function s(){if(!r){r=!0;for(var u,c=i.length;c;){u=i,i=[];for(var d=-1;++d<c;)u[d]();c=i.length}r=!1}}function l(){}o.nextTick=function(u){i.push(u),r||setTimeout(s,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=l,o.addListener=l,o.once=l,o.off=l,o.removeListener=l,o.removeAllListeners=l,o.emit=l,o.binding=function(u){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(u){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,n,a){n.read=function(o,i,r,s,b){var u,c,d=8*b-s-1,p=(1<<d)-1,g=p>>1,_=-7,I=r?b-1:0,C=r?-1:1,b=o[i+I];for(I+=C,u=b&(1<<-_)-1,b>>=-_,_+=d;_>0;u=256*u+o[i+I],I+=C,_-=8);for(c=u&(1<<-_)-1,u>>=-_,_+=s;_>0;c=256*c+o[i+I],I+=C,_-=8);if(u===0)u=1-g;else{if(u===p)return c?NaN:1/0*(b?-1:1);c+=Math.pow(2,s),u-=g}return(b?-1:1)*c*Math.pow(2,u-s)},n.write=function(o,i,r,s,l,w){var c,d,p=8*w-l-1,g=(1<<p)-1,_=g>>1,I=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,C=s?0:w-1,b=s?1:-1,w=i<0||i===0&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(d=isNaN(i)?1:0,c=g):(c=Math.floor(Math.log(i)/Math.LN2),i*(s=Math.pow(2,-c))<1&&(c--,s*=2),i+=c+_>=1?I/s:I*Math.pow(2,1-_),i*s>=2&&(c++,s/=2),c+_>=g?(d=0,c=g):c+_>=1?(d=(i*s-1)*Math.pow(2,l),c+=_):(d=i*Math.pow(2,_-1)*Math.pow(2,l),c=0));l>=8;o[r+C]=255&d,C+=b,d/=256,l-=8);for(c=c<<l|d,p+=l;p>0;o[r+C]=255&c,C+=b,c/=256,p-=8);o[r+C-b]|=128*w}},function(t,n,a){var o=Array.isArray,i=Object.prototype.toString;t.exports=o||function(r){return!!r&&i.call(r)=="[object Array]"}},function(t,n,a){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";(function(i){var r=typeof Uint8Array<"u"?Uint8Array:Array,s=43,l=47,u=48,c=97,d=65,p=45,g=95;function _(b){return b=b.charCodeAt(0),b===s||b===p?62:b===l||b===g?63:b<u?-1:b<u+10?b-u+26+26:b<d+26?b-d:b<c+26?b-c+26:void 0}function I(b){var w,y,m;if(b.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var x=b.length,x=b.charAt(x-2)==="="?2:b.charAt(x-1)==="="?1:0,B=new r(3*b.length/4-x),T=x>0?b.length-4:b.length,E=0;function O(F){B[E++]=F}for(w=0,y=0;w<T;w+=4,y+=3)m=_(b.charAt(w))<<18|_(b.charAt(w+1))<<12|_(b.charAt(w+2))<<6|_(b.charAt(w+3)),O((16711680&m)>>16),O((65280&m)>>8),O(255&m);return x===2?(m=_(b.charAt(w))<<2|_(b.charAt(w+1))>>4,O(255&m)):x===1&&(m=_(b.charAt(w))<<10|_(b.charAt(w+1))<<4|_(b.charAt(w+2))>>2,O(m>>8&255),O(255&m)),B}function C(b){var w,y,m,x=b.length%3,B="";function T(O){return o.charAt(O)}function E(O){return T(O>>18&63)+T(O>>12&63)+T(O>>6&63)+T(63&O)}for(w=0,m=b.length-x;w<m;w+=3)y=(b[w]<<16)+(b[w+1]<<8)+b[w+2],B+=E(y);switch(x){case 1:y=b[b.length-1],B+=T(y>>2),B+=T(y<<4&63),B+="==";break;case 2:y=(b[b.length-2]<<8)+b[b.length-1],B+=T(y>>10),B+=T(y>>4&63),B+=T(y<<2&63),B+="=";break}return B}i.toByteArray=I,i.fromByteArray=C})(n)}])})}(rd),rd.exports),sd={exports:{}},IZ=(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},n=function(a){var o,i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,s={},l={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function b(w){return w instanceof u?new u(w.type,b(w.content),w.alias):Array.isArray(w)?w.map(b):w.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++r}),b.__id},clone:function b(w,y){var m,x;switch(y=y||{},l.util.type(w)){case"Object":if(x=l.util.objId(w),y[x])return y[x];for(var B in m={},y[x]=m,w)w.hasOwnProperty(B)&&(m[B]=b(w[B],y));return m;case"Array":return x=l.util.objId(w),y[x]?y[x]:(m=[],y[x]=m,w.forEach(function(T,E){m[E]=b(T,y)}),m);default:return w}},getLanguage:function(b){for(;b;){var w=i.exec(b.className);if(w)return w[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,w){b.className=b.className.replace(RegExp(i,"gi"),""),b.classList.add("language-"+w)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(m){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(m.stack)||[])[1];if(b){var w,y=document.getElementsByTagName("script");for(w in y)if(y[w].src==b)return y[w]}return null}},isActive:function(b,w,y){for(var m="no-"+w;b;){var x=b.classList;if(x.contains(w))return!0;if(x.contains(m))return!1;b=b.parentElement}return!!y}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(b,w){var y,m=l.util.clone(l.languages[b]);for(y in w)m[y]=w[y];return m},insertBefore:function(b,w,y,m){m=m||l.languages;var x,B=m[b],T={};for(x in B)if(B.hasOwnProperty(x)){if(x==w)for(var E in y)y.hasOwnProperty(E)&&(T[E]=y[E]);y.hasOwnProperty(x)||(T[x]=B[x])}var O=m[b];return m[b]=T,l.languages.DFS(l.languages,function(F,V){V===O&&F!=b&&(this[F]=T)}),T},DFS:function b(w,y,m,x){x=x||{};var B,T,E,O=l.util.objId;for(B in w)w.hasOwnProperty(B)&&(y.call(w,B,w[B],m||B),T=w[B],E=l.util.type(T),E!=="Object"||x[O(T)]?E!=="Array"||x[O(T)]||(x[O(T)]=!0,b(T,y,B,x)):(x[O(T)]=!0,b(T,y,null,x)))}},plugins:{},highlightAll:function(b,w){l.highlightAllUnder(document,b,w)},highlightAllUnder:function(b,w,y){var m={callback:y,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",m),m.elements=Array.prototype.slice.apply(m.container.querySelectorAll(m.selector)),l.hooks.run("before-all-elements-highlight",m);for(var x,B=0;x=m.elements[B++];)l.highlightElement(x,w===!0,m.callback)},highlightElement:function(b,w,y){var m=l.util.getLanguage(b),x=l.languages[m],B=(l.util.setLanguage(b,m),b.parentElement),T=(B&&B.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(B,m),b.textContent),E={element:b,language:m,grammar:x,code:T};function O(F){E.highlightedCode=F,l.hooks.run("before-insert",E),E.element.innerHTML=E.highlightedCode,l.hooks.run("after-highlight",E),l.hooks.run("complete",E),y&&y.call(E.element)}l.hooks.run("before-sanity-check",E),B=E.element.parentElement,B&&B.nodeName.toLowerCase()==="pre"&&!B.hasAttribute("tabindex")&&B.setAttribute("tabindex","0"),E.code?(l.hooks.run("before-highlight",E),E.grammar?w&&a.Worker?(b=new Worker(l.filename),b.onmessage=function(F){O(F.data)},b.postMessage(JSON.stringify({language:E.language,code:E.code,immediateClose:!0}))):O(l.highlight(E.code,E.grammar,E.language)):O(l.util.encode(E.code))):(l.hooks.run("complete",E),y&&y.call(E.element))},highlight:function(b,w,y){if(b={code:b,grammar:w,language:y},l.hooks.run("before-tokenize",b),b.grammar)return b.tokens=l.tokenize(b.code,b.grammar),l.hooks.run("after-tokenize",b),u.stringify(l.util.encode(b.tokens),b.language);throw new Error('The language "'+b.language+'" has no grammar.')},tokenize:function(b,w){var y=w.rest;if(y){for(var m in y)w[m]=y[m];delete w.rest}var x=new p;return g(x,x.head,b),d(b,x,w,x.head,0),I(x)},hooks:{all:{},add:function(b,w){var y=l.hooks.all;y[b]=y[b]||[],y[b].push(w)},run:function(b,w){var y=l.hooks.all[b];if(y&&y.length)for(var m,x=0;m=y[x++];)m(w)}},Token:u};function u(b,w,y,m){this.type=b,this.content=w,this.alias=y,this.length=0|(m||"").length}function c(b,w,y,m){return b.lastIndex=w,w=b.exec(y),w&&m&&w[1]&&(b=w[1].length,w.index+=b,w[0]=w[0].slice(b)),w}function d(b,w,y,m,x,B){for(var T in y)if(y.hasOwnProperty(T)&&y[T])for(var E=y[T],E=Array.isArray(E)?E:[E],O=0;O<E.length;++O){if(B&&B.cause==T+","+O)return;for(var F,V=E[O],j=V.inside,U=!!V.lookbehind,D=!!V.greedy,R=V.alias,ae=(D&&!V.pattern.global&&(F=V.pattern.toString().match(/[imsuy]*$/)[0],V.pattern=RegExp(V.pattern.source,F+"g")),V.pattern||V),Z=m.next,G=x;Z!==w.tail&&!(B&&G>=B.reach);G+=Z.value.length,Z=Z.next){var be=Z.value;if(w.length>b.length)return;if(!(be instanceof u)){var $e,J=1;if(D){if($e=c(ae,G,b,U),!$e||$e.index>=b.length)break;var Me=$e.index,H=$e.index+$e[0].length,pe=G;for(pe+=Z.value.length;Me>=pe;)Z=Z.next,pe+=Z.value.length;if(pe-=Z.value.length,G=pe,Z.value instanceof u)continue;for(var Le=Z;Le!==w.tail&&(pe<H||typeof Le.value=="string");Le=Le.next)J++,pe+=Le.value.length;J--,be=b.slice(G,pe),$e.index-=G}else if($e=c(ae,0,be,U),!$e)continue;var Me=$e.index,de=$e[0],q=be.slice(0,Me),h=be.slice(Me+de.length),be=G+be.length,k=(B&&be>B.reach&&(B.reach=be),Z.prev),q=(q&&(k=g(w,k,q),G+=q.length),_(w,k,J),new u(T,j?l.tokenize(de,j):de,R,de)),Z=g(w,k,q);h&&g(w,Z,h),J>1&&(de={cause:T+","+O,reach:be},d(b,w,y,Z.prev,G,de),B)&&de.reach>B.reach&&(B.reach=de.reach)}}}}function p(){var b={value:null,prev:null,next:null},w={value:null,prev:b,next:null};b.next=w,this.head=b,this.tail=w,this.length=0}function g(b,w,x){var m=w.next,x={value:x,prev:w,next:m};return w.next=x,m.prev=x,b.length++,x}function _(b,w,y){for(var m=w.next,x=0;x<y&&m!==b.tail;x++)m=m.next;w.next=m,m.prev=w,b.length-=x}function I(b){for(var w=[],y=b.head.next;y!==b.tail;)w.push(y.value),y=y.next;return w}return a.Prism=l,u.stringify=function b(T,y){if(typeof T=="string")return T;var m;if(Array.isArray(T))return m="",T.forEach(function(O){m+=b(O,y)}),m;var x,B={type:T.type,content:b(T.content,y),tag:"span",classes:["token",T.type],attributes:{},language:y},T=T.alias,E=(T&&(Array.isArray(T)?Array.prototype.push.apply(B.classes,T):B.classes.push(T)),l.hooks.run("wrap",B),"");for(x in B.attributes)E+=" "+x+'="'+(B.attributes[x]||"").replace(/"/g,"&quot;")+'"';return"<"+B.tag+' class="'+B.classes.join(" ")+'"'+E+">"+B.content+"</"+B.tag+">"},a.document?(s=l.util.currentScript(),s&&(l.filename=s.src,s.hasAttribute("data-manual"))&&(l.manual=!0),l.manual||(o=document.readyState,o==="loading"||o==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16))):a.addEventListener&&!l.disableWorkerMessageHandler&&a.addEventListener("message",function(m){var m=JSON.parse(m.data),w=m.language,y=m.code,m=m.immediateClose;a.postMessage(l.highlight(y,l.languages[w],w)),m&&a.close()},!1),l;function C(){l.manual||l.highlightAll()}}(t);e.exports&&(e.exports=n),typeof Qu<"u"&&(Qu.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(a,r){var i={},i=(i["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[r]},i.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}}),r=(i["language-"+r]={pattern:/[\s\S]+/,inside:n.languages[r]},{});r[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,o=(a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup);o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){var a,o,i,r,s,l,u,c,d,p;function g(I,C,b){var w=new XMLHttpRequest;w.open("GET",I,!0),w.onreadystatechange=function(){w.readyState==4&&(w.status<400&&w.responseText?C(w.responseText):w.status>=400?b(o(w.status,w.statusText)):b(i))},w.send(null)}function _(w){var C,b,w=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(w)return C=Number(w[1]),b=w[2],w=w[3],b?w?[C,Number(w)]:[C,void 0]:[C,C]}typeof n<"u"&&typeof document<"u"&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),a="Loading…",o=function(I,C){return"✖ Error "+I+" while fetching file: "+C},i="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",l="loading",u="loaded",c="failed",d="pre[data-src]:not(["+s+'="'+u+'"]):not(['+s+'="'+l+'"])',n.hooks.add("before-highlightall",function(I){I.selector+=", "+d}),n.hooks.add("before-sanity-check",function(I){var C,b,w,y=I.element;y.matches(d)&&(I.code="",y.setAttribute(s,l),C=y.appendChild(document.createElement("CODE")),C.textContent=a,b=y.getAttribute("data-src"),I=I.language,I==="none"&&(w=(/\.(\w+)$/.exec(b)||[,"none"])[1],I=r[w]||w),n.util.setLanguage(C,I),n.util.setLanguage(y,I),w=n.plugins.autoloader,w&&w.loadLanguages(I),g(b,function(m){y.setAttribute(s,u);var x,B,T=_(y.getAttribute("data-range"));T&&(x=m.split(/\r\n?|\n/g),B=T[0],T=T[1]==null?x.length:T[1],B<0&&(B+=x.length),B=Math.max(0,Math.min(B-1,x.length)),T<0&&(T+=x.length),T=Math.max(0,Math.min(T,x.length)),m=x.slice(B,T).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(B+1))),C.textContent=m,n.highlightElement(C)},function(m){y.setAttribute(s,c),C.textContent=m}))}),n.plugins.fileHighlight={highlight:function(I){for(var C,b=(I||document).querySelectorAll(d),w=0;C=b[w++];)n.highlightElement(C)}},p=!1,n.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)})}()}(sd),sd.exports);function qZ(e,t,n){if(n===""?n="js":n==="vue"&&(n="html"),e.languages[n]===void 0)return"";{const a=e.highlight(t,e.languages[n],n);return`<pre class="q-markdown--code q-markdown--code__inner language-${n}"><code>${a}</code></pre>
`}}function TZ(e){e.renderer.rules.blockquote_open=(t,n,a,o,i)=>(t[n].attrSet("class","q-markdown--note"),i.renderToken(t,n,a))}function _m(e,t,n){function a(p){return p.trim().split(" ",2)[0]===t}function o(p,g,_,I,C){return p[g].nesting===1&&p[g].attrPush(["class",t]),C.renderToken(p,g,_,I,C)}n=n||{};const i=3,r=n.marker||":",s=r.charCodeAt(0),l=r.length,u=n.validate||a,c=n.render||o;function d(p,g,_,I){let C,b,w,y=!1,m=p.bMarks[g]+p.tShift[g],x=p.eMarks[g];if(s!==p.src.charCodeAt(m))return!1;for(C=m+1;C<=x&&r[(C-m)%l]===p.src[C];C++);const B=Math.floor((C-m)/l);if(B<i)return!1;C-=(C-m)%l;const T=p.src.slice(m,C),E=p.src.slice(C,x);if(!u(E))return!1;if(!I){for(b=g;b++,!(b>=_||(m=p.bMarks[b]+p.tShift[b],x=p.eMarks[b],m<x&&p.sCount[b]<p.blkIndent));)if(s===p.src.charCodeAt(m)&&!(p.sCount[b]-p.blkIndent>=4)){for(C=m+1;C<=x&&r[(C-m)%l]===p.src[C];C++);if(!(Math.floor((C-m)/l)<B)&&(C-=(C-m)%l,C=p.skipSpaces(C),!(C<x))){y=!0;break}}const O=p.parentType,F=p.lineMax;p.parentType="container",p.lineMax=b,w=p.push("container_"+t+"_open","div",1),w.markup=T,w.block=!0,w.info=E,w.map=[g,b],p.md.block.tokenize(p,g+1,b),w=p.push("container_"+t+"_close","div",-1),w.markup=p.src.slice(m,C),w.block=!0,p.parentType=O,p.lineMax=F,p.line=b+(y?1:0)}return!0}e.block.ruler.before("fence","container_"+t,d,{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules["container_"+t+"_open"]=c,e.renderer.rules["container_"+t+"_close"]=c}function Da(e,t){return[_m,e,{render(n,a){const o=n[a],i=o.info.trim().slice(e.length).trim();return o.nesting===1?`<div class="q-markdown--note q-markdown--note--${e}"><p class="q-markdown--note-title">${i||t}</p>
`:`</div>
`}}]}function LZ(e){e.use(...Da("info","INFO")),e.use(...Da("tip","TIP")),e.use(...Da("warning","WARNING")),e.use(...Da("danger","IMPORTANT")),e.use(...Da("","")),e.use(_m,"v-pre",{render:(t,n)=>t[n].nesting===1?`<div v-pre>
`:`</div>
`})}function ym(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}function EZ(e,t){return t.type==="emoji"?Object.assign(new e,t,{content:t.markup}):t}function DZ(e,t=[],n=!1,a=1,o=3,i=!1){let r;e.core.ruler.push("headingLinks",function(s){r=r||s.Token}),e.renderer.rules.heading_open=(s,l,u,c,d)=>{const p=s[l],g=parseInt(p.tag[1]),_=s[l+1].children,I=_.reduce((m,x)=>m+x.content,""),C=[],b=(C.push("q-markdown--heading"),C.push("q-markdown--heading-"+p.tag),p.markup==="="?C.push("q-markdown--title-heavy"):p.markup==="-"&&C.push("q-markdown--title-light"),i!==!0&&a&&o&&a<=o&&g>=a&&g<=o&&C.push("q-markdown--heading--anchor-link"),EZ.bind(null,r)),w=e.renderer.renderInline(_.map(b),u,c),y=ym(w.replace(/[<>]/g,"").toLowerCase());if(p.attrSet("id",y),p.attrSet("name",y),p.attrSet("class",C.join(" ")),n&&a&&o&&a<=o&&g>=a&&g<=o&&t.push({id:y,label:I,level:g,children:[]}),i!==!0&&g<=o){const m=new r("link_open","a",1),x=(m.attrSet("href","#"+y),m.attrSet("aria-hidden","true"),new r("link_close","a",-1)),B=_.slice();return s[l+1].children=[m,...B,x],e.renderer.renderToken(s,l,u,c,d)}return d.renderToken(s,l,u)}}function BZ(e){e.renderer.rules.image=(t,n,a,o,i)=>{const r=t[n];return r.attrSet("class","q-markdown--image"),Array.isArray(r.children)&&r.children.length>0&&r.children[0].type==="text"&&r.attrSet("alt",r.children[0].content),i.renderToken(t,n,a)}}function PZ(e,{noopener:t=!0,noreferrer:n=!0}){e.renderer.rules.link_open=(a,o,i,r,s)=>{const l=a[o],u=l.attrIndex("href");if(l.attrs[u][1][0]==="#"&&typeof location<"u"&&(l.attrs[u][1]=location.pathname+l.attrs[u][1]),l.attrs[u][1]==="")l.attrSet("class","q-markdown--link q-markdown--link-local"),a[o+1]&&a[o+1].type==="text"&&a[o+1].content&&l.attrSet("id",ym(a[o+1].content));else if(l.attrs[u][1][0]==="/"||l.attrs[u][1][0]==="#"||l.attrs[u][1].startsWith(".."))l.attrSet("class","q-markdown--link q-markdown--link-local");else if(l.attrSet("class","q-markdown--link q-markdown--link-external"),l.attrSet("target","_blank"),t===!0||n===!0){const c=[];t===!0&&c.push("noopener"),n===!0&&c.push("noreferrer"),l.attrSet("rel",c.join(" "))}return s.renderToken(a,o,i)}}function MZ(e){e.renderer.rules.table_open=(t,n,a,o,i)=>(t[n].attrSet("class","q-markdown--table"),i.renderToken(t,n,a))}function jZ(e){const t=e.renderer.rules.code_inline;e.renderer.rules.code_inline=(n,a,o,i,r)=>(n[a].attrSet("class","q-markdown--token"),t(n,a,o,i,r))}function $Z(e,t){const n=e.renderer.rules.fence;e.renderer.rules.fence=(...a)=>{const o=n(...a),i=o.slice(o.indexOf("<code>")+6,o.indexOf("</code>")),r=i.trim().split(`
`),s=[...Array(r.length)].map((c,d)=>`<div class="q-markup--line-number">${t===void 0?d+1:t}</div>`).join(""),l=`<div class="q-markdown--line-numbers non-selectable">${s}</div><div class="q-markdown--code-wrapper">${o}</div>`;return`<div class="q-markdown--line-numbers-wrapper">${r.length<3?o:l}</div>`}}const RZ=No({});var wm=Bf({name:"QMarkdown",props:{src:{type:String,default:""},noBlockquote:Boolean,noBreaks:Boolean,noContainer:Boolean,noHighlight:Boolean,noHtml:Boolean,noImage:Boolean,noLineNumbers:Boolean,noLink:Boolean,noLinkify:Boolean,noHeadingAnchorLinks:Boolean,noTypographer:Boolean,lineNumberAlt:{type:String,validator:e=>e.length===1},toc:Boolean,tocStart:{type:Number,default:1,validator:e=>e>=1&&e<=6},tocEnd:{type:Number,default:3,validator:e=>e>=1&&e<=6},contentStyle:[Object,Array,String],contentClass:[Object,Array,String],noNoopener:Boolean,noNoreferrer:Boolean,showCopy:Boolean,copyIcon:String,noCopyTooltip:Boolean,doneIcon:String,copyTooltipText:{type:String,default:"Copy to clipboard"},copyResponseText:{type:String,default:"Copied to clipboard"},fixCr:Boolean,plugins:{type:Array,default:()=>[]}},emits:["data"],setup(e,{slots:t,emit:n,expose:a}){const o=iy(),i=ge(null),r=ge(null),s=ge(null),l=(Ql(()=>{l.value.src&&l.value.src.length>0&&(r.value=l.value.fixCr?l.value.src.replace(/\\n/gi,`
`):l.value.src)}),Q(()=>({...e,...RZ}))),u=Q(()=>{let b="";return l.value.src&&l.value.src.length>0&&(b=l.value.fixCr?l.value.src.replace(/\\n/gi,`
`):l.value.src),t.default!==void 0&&t.default()[0].children.trim().length>0&&(b=t.default()[0].children),b}),c=Q(()=>l.value.copyIcon||"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"),d=Q(()=>l.value.doneIcon||"M0 0h24v24H0z@@fill:none;&&M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z");function p(b){return b===void 0||b===!1}function g(b){const w=[];let y=null;const m=x=>{if(x.level===l.value.tocStart)y=x,w.push(x);else if(x.level===l.value.tocStart+1)y.children.push(x);else{let B=y;for(let T=0;T<x.level-(l.value.tocStart+1);++T)B=B.children[B.children.length-1];B&&B.children.push(x)}};for(let x=0;x<b.length;++x)m(b[x]);return w}function _(){Tp(s.value.innerText),o.notify&&o.notify({message:l.value.copyResponseText,color:o.dark.isActive?"grey-10":"white",textColor:o.dark.isActive?"amber":"primary",icon:d.value,position:"top",timeout:2e3})}function I(){if(l.value.showCopy===!0)return L(it,{class:"q-markdown__copy",color:o.dark.isActive?"amber":"primary",dense:!0,flat:!0,round:!0,icon:c.value,onClick:b=>{_()}},()=>[l.value.noCopyTooltip!==!0&&L(xy,()=>l.value.copyTooltipText)])}function C(){if(i.value===null){const y=[],m=u.value||"",x=(O,F)=>p(l.value.noHighlight)?qZ(IZ,O,F):O,B={html:p(l.value.noHtml),linkify:p(l.value.noLinkify),typographer:p(l.value.noTypographer),breaks:p(l.value.noBreaks),highlight:x},T=QZ(B),E=(p(l.value.noImage)&&T.use(AZ),TZ(T),DZ(T,y,l.value.toc,l.value.tocStart,l.value.tocEnd,l.value.noHeadingAnchorLinks),BZ(T),PZ(T,{noopener:!l.value.noNoopener,noreferrer:!l.value.noNoreferrer}),MZ(T),jZ(T),p(l.value.noContainer)&&LZ(T),p(l.value.noLineNumbers)&&$Z(T,l.value.lineNumberAlt),[]);p(l.value.noImage)||E.push("image"),p(l.value.noLink)||E.push("link"),p(l.value.noBlockquote)||E.push("blockquote"),E.length>0&&T.disable(E),l.value.plugins.length>0&&l.value.plugins.forEach(O=>{O instanceof Function?T.use(O):O.plugin instanceof Function&&O.options&&T.use(O.plugin,O.options)}),i.value=T.render(m),l.value.toc&&y.length>0&&n("data",y)}const b=L("div",{ref:s,class:["q-markdown",l.value.contentClass],style:l.value.contentStyle,innerHTML:i.value}),w=L("div",{style:{position:"relative"}},[b,I()]);return l.value.showCopy!==!0?b:w}return Oe(()=>l.value.src,b=>{r.value=l.value.fixCr?l.value.src.replace(/\\n/gi,`
`):l.value.src,i.value=null}),Oe(()=>[l.value.noBlockquote,l.value.noBreaks,l.value.noContainer,l.value.noHighlight,l.value.noHtml,l.value.noImage,l.value.noLineNumbers,l.value.noLink,l.value.noLinkify,l.value.noHeadingAnchorLinks,l.value.noTypographer,l.value.lineNumberAlt,l.value.toc,l.value.tocStart,l.value.tocEnd,l.value.contentStyle,l.value.contentClass,l.value.noNoopener,l.value.noNoreferrer,l.value.plugins],()=>{i.value=null}),a({makeTree:g}),()=>C()}});const OZ={name:"ShowcaseReference",components:{QMarkdown:wm,QBtn:it,JPanel:no,ApiDocSection:Ep,QIcon:nt},inject:["showcaseCopy","__apiDoc"],props:{code:{type:String,default:""},codeKey:{type:String,default:""},hasApi:{type:Boolean,default:!1},docsUrl:{type:String,default:null},title:{type:String,default:"REFERENCE"},isTagName:{type:Boolean,default:!1}},computed:{apiGroups(){var e;return((e=this.__apiDoc)==null?void 0:e.groups)||[]},activeGroupData(){return this.apiGroups.find(e=>e.name===this.activeGroup)||this.apiGroups[0]||null},activeGroupName(){var e;return this.apiGroups.length>1&&((e=this.activeGroupData)!=null&&e.name)?this.activeGroupData.name:this.title},activeDocsUrl(){var e,t;return this.apiGroups.length>1&&this.activeGroupData?((t=(e=this.activeGroupData.data)==null?void 0:e.meta)==null?void 0:t.docsUrl)||null:this.docsUrl},activeComponentName(){const e=this.activeDocsUrl;return e?(e.split("/").pop()||"").split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "):""},importFrom(){var e;return((e=this.__apiDoc)==null?void 0:e.importFrom)||null},importNames(){var t;const e=(t=this.__apiDoc)==null?void 0:t.importName;return!e||!this.importFrom?[]:Array.isArray(e)?e:[e]},componentName(){return this.docsUrl?(this.docsUrl.split("/").pop()||"").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""},codeMd(){return"```html\n"+this.code+"\n```"}},methods:{copy(e){this.showcaseCopy(e)},copyCode(){this.copy(this.code)}},data(){return{activeTab:"code",activeGroup:null,showCodeCopyButton:!1}},watch:{hasApi:{immediate:!0,handler(e){this.activeTab=e?"api":"code"}},apiGroups:{immediate:!0,handler(e){e.length>0&&(this.activeGroup=e[0].name)}}}},FZ={class:"showcaseCodeCol"},VZ={class:"rightTabs"},NZ={key:0,class:"apiBlock"},zZ={key:0,class:"apiDocImport"},HZ=["onClick"],UZ={class:"apiDocImportString"},WZ={key:1,class:"componentTabs"},JZ=["onClick"],GZ={class:"q-ma-sm"};function YZ(e,t,n,a,o,i){const r=X("QIcon"),s=X("QBtn"),l=X("ApiDocSection"),u=X("QMarkdown"),c=X("JPanel");return M(),ee("div",FZ,[f(c,{title:n.isTagName?null:n.title},Of({footer:S(()=>[]),"header-action":S(()=>[v("div",VZ,[v("span",{class:ft(["rightTab",{active:o.activeTab==="api",disabled:!n.hasApi}]),onClick:t[1]||(t[1]=d=>n.hasApi&&(o.activeTab="api"))},[f(r,{name:"description",size:"20px"}),t[6]||(t[6]=K(" API ",-1))],2),v("span",{class:ft(["rightTab",{active:o.activeTab==="code"}]),onClick:t[2]||(t[2]=d=>o.activeTab="code")},[f(r,{name:"code",size:"20px"}),t[7]||(t[7]=K(" CODE ",-1))],2)])]),default:S(()=>[o.activeTab==="api"&&n.hasApi?(M(),ee("div",NZ,[i.importNames.length?(M(),ee("div",zZ,[(M(!0),ee(Ve,null,ut(i.importNames,d=>(M(),ee("code",{key:d,class:"apiDocCopyable",onClick:p=>{i.copy(`import { ${d} } from '${i.importFrom}';`)}},[t[8]||(t[8]=v("span",{class:"apiDocImportKeyword"},"import",-1)),K(" { "+xe(d)+" } ",1),t[9]||(t[9]=v("span",{class:"apiDocImportKeyword"},"from",-1)),t[10]||(t[10]=K()),v("span",UZ,"'"+xe(i.importFrom)+"'",1),t[11]||(t[11]=K(";",-1)),t[12]||(t[12]=v("br",null,null,-1))],8,HZ))),128))])):Ge("",!0),i.apiGroups.length>1?(M(),ee("div",WZ,[(M(!0),ee(Ve,null,ut(i.apiGroups,d=>(M(),ee("span",{key:d.name,class:ft(["componentTab",{active:o.activeGroup===d.name}]),onClick:p=>o.activeGroup=d.name},xe(d.name),11,JZ))),128))])):Ge("",!0),f(l,{group:i.apiGroups.length>1?o.activeGroup:null,"hide-import":""},null,8,["group"])])):(M(),ee("div",{key:1,class:"codeBlock relative-position",onMouseenter:t[3]||(t[3]=d=>o.showCodeCopyButton=!0),onMouseleave:t[4]||(t[4]=d=>o.showCodeCopyButton=!1)},[f(Lt,{name:"codeFade",mode:"out-in"},{default:S(()=>[f(c,{style:{"max-height":"70vh"},scroll:""},{default:S(()=>[v("div",GZ,[f(u,{src:i.codeMd},null,8,["src"])])]),_:1})]),_:1}),f(Lt,{name:"codeFade",mode:"out-in"},{default:S(()=>[o.showCodeCopyButton?(M(),_e(s,{key:0,color:"primary",icon:"content_copy",size:"sm",round:"",onClick:i.copyCode,style:{position:"absolute",top:"32px",right:"32px"}},null,8,["onClick"])):Ge("",!0)]),_:1})],32))]),_:2},[n.isTagName?{name:"title",fn:S(()=>[v("div",null,[v("span",{class:"showcaseReference_tagName",onClick:t[0]||(t[0]=d=>i.copy("<"+i.activeGroupName+">"))},[f(r,{name:"view_module",size:"24px",class:"jPanel_icon",color:"secondary"}),K(" "+xe(i.activeGroupName),1)]),t[5]||(t[5]=K("  ",-1)),i.activeDocsUrl?(M(),_e(s,{key:0,color:"accent",outline:"",icon:"open_in_new",label:`Full ${i.activeComponentName} Docs`,href:i.activeDocsUrl,target:"_blank",size:"md",dense:""},null,8,["label","href"])):Ge("",!0)])]),key:"0"}:void 0]),1032,["title"])])}const KZ=ze(OZ,[["render",YZ],["__scopeId","data-v-30126468"]]);let ZZ=0;const XZ={name:"ShowcaseToast",props:{position:{type:String,default:"bottom",validator:e=>["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"].includes(e)}},computed:{positionClass(){return"showcaseToasts_"+this.position}},data(){return{toasts:[]}},methods:{notify(e,t="info"){const n=++ZZ;this.toasts.push({id:n,message:e,icon:t}),setTimeout(()=>{const a=this.toasts.findIndex(o=>o.id===n);a>=0&&this.toasts.splice(a,1)},2500)}}},eX={class:"showcaseToast_icon material-icons"},tX={class:"showcaseToast_text"};function nX(e,t,n,a,o,i){return M(),_e(mp,{name:"showcaseToast",tag:"div",class:ft(["showcaseToasts",i.positionClass])},{default:S(()=>[(M(!0),ee(Ve,null,ut(o.toasts,r=>(M(),ee("div",{key:r.id,class:"showcaseToast"},[v("span",eX,xe(r.icon),1),v("span",tX,xe(r.message),1)]))),128))]),_:1},8,["class"])}const oX=ze(XZ,[["render",nX],["__scopeId","data-v-486aa922"]]),aX={name:"ShowcaseDocs",components:{QMarkdown:wm,JPanel:no},props:{docs:{type:Object,required:!0},activePage:{type:String,default:"README"}},emits:["navigate"],computed:{currentContent(){return this.docs[this.activePage]||""},currentTitle(){return this.activePage==="README"?"README":this.activePage}},methods:{resolveDocName(e){const t=e.match(/(?:\.\/)?docs\/([^/]+)\.md(?:#.*)?$/);if(t&&this.docs[t[1]])return t[1];const n=e.match(/\/?([\w.-]+)\.md(?:#.*)?$/);return n&&this.docs[n[1]]?n[1]:null},handleClick(e){const t=e.target.closest("a");if(!t)return;const n=this.resolveDocName(t.getAttribute("href")||"")||this.resolveDocName(t.href||"");n&&(e.preventDefault(),e.stopPropagation(),this.$emit("navigate",n),this.$el.scrollIntoView({behavior:"smooth",block:"start"}))}}},iX={class:"showcaseDocs"};function rX(e,t,n,a,o,i){const r=X("QMarkdown"),s=X("JPanel");return M(),ee("div",iX,[f(s,{title:i.currentTitle,icon:"description","icon-color":"var(--q-info)"},{default:S(()=>[v("div",{class:"showcaseDocs_content",onClick:t[0]||(t[0]=(...l)=>i.handleClick&&i.handleClick(...l))},[f(r,{src:i.currentContent,"no-heading-anchor-links":""},null,8,["src"])])]),_:1},8,["title"])])}const sX=ze(aX,[["render",rX],["__scopeId","data-v-6e8259d6"]]);function lX(e){if(!e)return"";const t=e.indexOf("<template");if(t===-1)return"";const n=e.indexOf(">",t)+1;let a=1,o=n;for(;o<e.length&&a>0;){const i=e.indexOf("<template",o),r=e.indexOf("</template>",o);if(r===-1)break;if(i!==-1&&i<r)a++,o=i+9;else{if(a--,a===0){const l=e.slice(n,r).replace(/^\n|\n$/g,"").split(`
`),u=Math.min(...l.filter(c=>c.trim()).map(c=>c.match(/^(\s*)/)[1].length));return l.map(c=>c.slice(u)).join(`
`).trim()}o=r+11}}return""}const cX=`# Accent Background

Varmory ships a global CSS hook, \`varmoryBackgroundAccent\`, that each theme paints with its own signature background (molten cracks in **rpg**, scanlines in **space**, a warm surface tint in **default**, etc.). It's the mechanism behind JPanel's \`accent\` prop and can also be applied to any custom component that needs to stand out from the surrounding layout.

## JPanel \`accent\` prop

\`accent\` accepts three values:

| Value      | Effect                                                                 |
| ---------- | ---------------------------------------------------------------------- |
| \`false\`    | Default panel (gradient surface + border). No themed background.       |
| \`true\`     | The entire panel uses the themed accent background.                    |
| \`'header'\` | Only the header strip uses the accent background; body stays neutral.  |

\`\`\`html
<!-- Plain panel -->
<JPanel title="Users" icon="people">…</JPanel>

<!-- Fully accented panel — stands out on the page -->
<JPanel title="Hero stats" icon="star" accent>…</JPanel>

<!-- Accented header only — subtle emphasis -->
<JPanel title="Actions" icon="bolt" accent="header">…</JPanel>
\`\`\`

Use \`accent\` sparingly — one or two accented panels per screen read as "primary" or "featured". Too many and the emphasis flattens out.

## The CSS classes

\`varmoryBackgroundAccent\` is paired with a child \`varmoryBackgroundAccentContainer\` element. The outer class paints the base background; the container hosts theme-specific overlays (top highlight line, radial glows, etc.) via \`::before\` / \`::after\` pseudo-elements.

\`\`\`html
<div class="varmoryBackgroundAccent">
	<div class="varmoryBackgroundAccentContainer">
		<!-- your content -->
	</div>
</div>
\`\`\`

Both halves are required. Without the container, themes that rely on pseudo-element overlays (rpg, space, finance) will render a flat background and lose their signature detail.

### Compact variant

Add \`varmoryBackgroundAccentCompact\` alongside \`varmoryBackgroundAccent\` to switch to a tighter, low-profile styling — themes typically move the highlight line from the top to the bottom and simplify overlays. Used by \`PortfolioHeader\` when it collapses on scroll.

\`\`\`html
<div class="varmoryBackgroundAccent varmoryBackgroundAccentCompact">
	<div class="varmoryBackgroundAccentContainer">…</div>
</div>
\`\`\`

## When to use it outside JPanel

Reach for \`varmoryBackgroundAccent\` directly when you're building a custom component that isn't a panel but still wants the themed "this is important" treatment — page headers, hero banners, highlighted sidebars, call-out cards. For anything panel-shaped, prefer \`<JPanel accent>\` so you also get the consistent border, radius, header, and footer treatment.

## Theming notes

Each theme defines its own \`.varmoryBackgroundAccent\` rule in \`src/varmory/styles/themes/<theme>/common.css\`. If you're authoring a new theme, implement at minimum:

- \`.varmoryBackgroundAccent\` — the base background
- \`.varmoryBackgroundAccent .varmoryBackgroundAccentContainer\` — \`position: relative; overflow: hidden;\` so pseudo-element overlays clip cleanly
- Optional: \`::before\` / \`::after\` overlays on the container for highlights, glows, scanlines, etc.
- Optional: \`.varmoryBackgroundAccentCompact.varmoryBackgroundAccent …\` overrides for the compact variant
`,uX=`# Building Custom Components with Varmory

Guide for AI agents and developers building Vue 3 components on top of varmory.

## API style

Prefer **Vue Options API** unless the user explicitly asks for Composition API (\`<script setup>\`). Use **tab indentation** unless the user specifies otherwise.

Split complex components into smaller, focused child components. Define shared CSS classes in the parent component if they can be reused across few children (avoid \`scoped\` on the parent when children need its classes, or use deep selectors).

## CSS variables, not hardcoded colors

Never hardcode colors. All styling goes through CSS variables that the theme system controls:

\`\`\`css
/* Brand:    --q-primary, --q-secondary, --q-accent */
/* Status:   --q-positive, --q-negative, --q-info, --q-warning */
/* Surfaces: --q-surface-0 .. --q-surface-3, --q-surface-border, --q-body-bg */
/* Text:     --q-text-bright, --q-text, --q-text-muted, --q-text-faint */
/* Panels:   --q-panel-gradient, --q-panel-compact-gradient */
/* Effects:  --q-glow-primary, --q-glow-accent, --q-shadow-drop, --q-shadow-inset */
/* Fonts:    --font-display (headers), --font-body (text), --font-mono (code/labels) */
/* Sizes:    --q-text-size-small (12px), --q-text-size-default (14px), --q-text-size-readable (18px), --q-text-size-large (20px) */
/* Spacing:  --q-gap-xs (4px), --q-gap-sm (8px), --q-gap-md (16px), --q-gap-lg (24px), --q-gap-xl (40px) */
/* Radii:    --q-radius-sm (2px), --q-radius-md (4px), --q-radius-lg (8px) */
/* Motion:   --q-transition-fast (0.15s), --q-transition-normal (0.25s) */
\`\`\`

See the **AllColors** showcase for the full list of variables and their values per theme.

### Tints and transparency

Use \`color-mix()\` to derive tints from theme colors:

\`\`\`css
color-mix(in srgb, var(--q-primary) 20%, transparent)   /* 20% primary overlay */
color-mix(in srgb, var(--q-primary) 50%, black)          /* darker primary */
color-mix(in srgb, var(--q-primary) 50%, white)          /* lighter primary */
color-mix(in srgb, var(--q-surface-2) 60%, transparent)  /* semi-transparent surface */
\`\`\`

## Layout patterns

Use flexbox. Quasar's grid classes (\`row\`, \`col-*\`, \`q-gutter-*\`, \`q-pa-*\`, \`q-ma-*\`) are available globally.

**Flex row with wrapping:**
\`\`\`html
<div class="row items-center q-gutter-sm">
	<QBtn label="One" />
	<QBtn label="Two" />
</div>
\`\`\`

**Responsive grid (Quasar classes):**
\`\`\`html
<div class="row q-col-gutter-md">
	<div class="col-12 col-md-6">Left</div>
	<div class="col-12 col-md-6">Right</div>
</div>
\`\`\`

## Component composition

### JPanel — the standard container

\`\`\`html
<JPanel title="Users" icon="people" footer-text="3 results">
	<!-- content here -->
</JPanel>
\`\`\`

By default, JPanel applies no padding to its content (so you can drop wide components like QTabPanels directly inside). You'll usually want to add margin to the content yourself:

\`\`\`html
<JPanel title="Users" icon="people" footer-text="3 results">
	<div class="q-ma-md">
		Content
	</div>
</JPanel>
\`\`\`

Props: \`title\`, \`icon\`, \`iconColor\`, \`accent\`, \`footerText\`, \`square\`, \`fullscreen\`, \`scroll\`
Slots: \`default\`, \`title\`, \`header\`, \`header-action\`, \`footer\`

Use the \`accent\` prop to give the panel a themed background so it stands out from the surrounding layout. See [AccentBackground.md](./AccentBackground.md) for details and the underlying \`varmoryBackgroundAccent\` CSS hook.

\`\`\`html
<JPanel title="Actions" accent>
	<template #header-action>
		<QBtn flat round icon="refresh" size="sm" />
	</template>
	<!-- content -->
</JPanel>
\`\`\`

### Quasar components (commonly used)

**Buttons:**
\`\`\`html
<QBtn color="primary" label="Save" icon="save" />
<QBtn flat color="primary" label="Cancel" />
<QBtn outline color="negative" label="Delete" icon="delete" />
<QBtn round icon="settings" class="ghost" />   <!-- ghost = minimal, no bg -->
\`\`\`

**Inputs:**
\`\`\`html
<QInput v-model="name" label="Name" outlined />
<QSelect v-model="role" :options="roles" label="Role" outlined />
<QToggle v-model="active" label="Active" />
\`\`\`

**Lists:**
\`\`\`html
<QList>
	<QItem v-for="item in items" :key="item.id" clickable>
		<QItemSection avatar>
			<QIcon :name="item.icon" />
		</QItemSection>
		<QItemSection>
			<QItemLabel>{{ item.name }}</QItemLabel>
			<QItemLabel caption>{{ item.desc }}</QItemLabel>
		</QItemSection>
		<QItemSection side>
			<QBadge color="primary" :label="item.count" />
		</QItemSection>
	</QItem>
</QList>
\`\`\`

**Dialogs:**
\`\`\`html
<QDialog v-model="showDialog">
	<JPanel title="Confirm" style="min-width: 350px">
		<p>Are you sure?</p>
		<template #footer>
			<QBtn flat label="Cancel" v-close-popup />
			<QBtn color="primary" label="OK" v-close-popup />
		</template>
	</JPanel>
</QDialog>
\`\`\`

**Other:** \`QIcon\`, \`QChip\`, \`QBanner\`, \`QSpinner\`, \`QCircularProgress\`, \`QTabs\`/\`QTab\`, \`QMenu\`

## CSS class naming

Follow \`ComponentName_elementName\` convention:

\`\`\`css
.myWidget { }
.myWidget_header { }
.myWidget_title { }
.myWidget_body { }
.myWidget_footer { }
\`\`\`

## Styling rules

1. All colors via CSS variables — never hardcode hex values
2. Use \`var(--font-display)\` for headings, \`var(--font-body)\` for text, \`var(--font-mono)\` for labels/code
3. Use \`var(--q-transition-fast)\` or \`var(--q-transition-normal)\` for transitions
4. Use \`var(--q-surface-border)\` for borders, \`var(--q-radius-md)\` for border-radius
5. Use \`var(--q-gap-*)\` for spacing in flex/grid layouts
6. Support dark mode — use \`.body--dark\` selector when you need mode-specific overrides

**Example custom component style:**

\`\`\`css
.myWidget {
	background: var(--q-panel-gradient);
	border: 1px solid var(--q-surface-border);
	border-radius: var(--q-radius-md);
	padding: var(--q-gap-md);
	color: var(--q-text);
	font-family: var(--font-body);
	transition: box-shadow var(--q-transition-fast);
}

.myWidget:hover {
	box-shadow: 0 0 12px var(--q-glow-primary);
}

.myWidget_title {
	font-family: var(--font-display);
	color: var(--q-text-bright);
	font-size: var(--q-text-size-large);
	margin-bottom: var(--q-gap-sm);
}

.myWidget_caption {
	font-family: var(--font-mono);
	color: var(--q-text-muted);
	font-size: var(--q-text-size-small);
	text-transform: uppercase;
	letter-spacing: 2px;
}
\`\`\`

## Dark mode

The theme store manages dark/light mode. Quasar adds \`.body--dark\` to \`<body>\` automatically. CSS variables swap values per-mode, so most of the time you don't need mode-specific CSS. When you do:

\`\`\`css
.body--dark .myWidget {
	border-color: rgba(255, 255, 255, 0.06);
}
\`\`\`

Programmatic access:

\`\`\`js
import { useThemeStore } from 'varmory';

const theme = useThemeStore();
theme.isDark       // boolean
theme.toggleDark()
\`\`\`

## Full example

\`\`\`vue
<template>
	<JPanel title="Team Members" icon="groups" :footer-text="\`\${members.length} members\`">
		<template #header-action>
			<QBtn flat round icon="person_add" size="sm" color="primary" @click="showAdd = true" />
		</template>

		<QList>
			<QItem v-for="m in members" :key="m.id" clickable>
				<QItemSection avatar>
					<QIcon name="person" color="primary" />
				</QItemSection>
				<QItemSection>
					<QItemLabel>{{ m.name }}</QItemLabel>
					<QItemLabel caption>{{ m.role }}</QItemLabel>
				</QItemSection>
				<QItemSection side>
					<QChip :label="m.status" :color="m.status === 'active' ? 'positive' : 'warning'" dense />
				</QItemSection>
			</QItem>
		</QList>
	</JPanel>
</template>

<script>
export default {
	data() {
		return {
			showAdd: false,
			members: [
				{ id: 1, name: 'Alice', role: 'Engineer', status: 'active' },
				{ id: 2, name: 'Bob', role: 'Designer', status: 'away' },
			],
		};
	},
};
<\/script>

<style scoped>
.q-item:hover {
	background: color-mix(in srgb, var(--q-primary) 8%, transparent);
}
</style>
\`\`\`
`,dX=`# MCP Server

An Streamable HTTP [MCP](https://modelcontextprotocol.io/) server that exposes the component library's showcase data — docs, components, and API definitions — to AI agents like Claude Code.

## Hosted Server

A public instance of Streamable HTTP MCP server is available at:

\`\`\`
https://varmory-dec8b20a1b83.herokuapp.com/mcp
\`\`\`

Transport: Streamable HTTP.

\`\`\`bash
claude mcp add --transport http varmory https://varmory-dec8b20a1b83.herokuapp.com/mcp
\`\`\`

Once added, you can simply ask Claude to build any web app using varmory, e.g. "Build me a to-do app using Varmory". Claude will discover available components, docs, and API definitions through the MCP server automatically.

To launch MCP server of your own set of components/DOC files, set up the MCP server ( or use the one defined in \`mcp/server.js\` that hosts both MCP and Component Showcase app ).

## Quick Start

\`\`\`bash
npm install varmory @modelcontextprotocol/sdk zod
\`\`\`

\`\`\`js
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import attachShowcase from 'varmory/mcp';

const server = new McpServer({ name: 'my-server', version: '1.0.0' });

attachShowcase(server, {
    rootDir: './node_modules/varmory',
});

const transport = new StdioServerTransport();
await server.connect(transport);
\`\`\`

This creates an MCP server with all showcase resources and tools from the library, connected over stdio.

## Dependencies

The MCP server is a self-contained subpackage in \`mcp/\` with its own dependencies (\`@modelcontextprotocol/sdk\`, \`zod\`). These are **not** dependencies of the main library.

## \`attachShowcase(server, options?)\`

The core export. Takes an MCP server instance, attaches resources and tools, and returns it. This lets you embed the showcase into your own MCP server.

\`\`\`js
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import attachShowcase from './mcp/showcaseMcp.js';

const server = new McpServer({ name: 'my-server', version: '1.0.0' });
attachShowcase(server);
\`\`\`

### Options

| Option | Type | Description |
|--------|------|-------------|
| \`rootDir\` | \`string\` | Absolute path to the library root. Defaults to one level up from the mcp/ directory. |
| \`files\` | \`string[]\` | Explicit list of file paths. Files are auto-classified by extension (see below). |

When both \`rootDir\` and \`files\` are provided, the file list is merged on top of the auto-discovered content.

When only \`files\` is provided, no auto-discovery happens — only the listed files are loaded.

### File classification

Files passed via the \`files\` option are classified by extension:

- \`.vue\` — parsed as showcase components. Grouped into categories by parent folder name (numeric prefixes stripped, e.g. \`04 Buttons/Btn.vue\` → category "Buttons").
- \`.md\` — loaded as doc pages. The filename without extension becomes the page name (\`README.md\` → \`README\`).
- \`.json\` — loaded as API definitions in Quasar docs format.

### Examples

\`\`\`js
// Auto-discover everything from default location
attachShowcase(server);

// Point to a specific root
attachShowcase(server, { rootDir: '/path/to/varmory' });

// Explicit files only
attachShowcase(server, {
    files: [
        'src/showcase/categories/04 Buttons/Btn.vue',
        'docs/THEMING.md',
        'definitions/QBtn.json',
    ],
});

// Auto-discover + extra files merged on top
attachShowcase(server, {
    rootDir: '/path/to/lib',
    files: ['extra/MyWidget.vue', 'extra/GUIDE.md'],
});
\`\`\`

## Resources

| URI | Description |
|-----|-------------|
| \`showcase://docs\` | Lists all available doc page names |
| \`showcase://docs/{name}\` | Returns the markdown content of a doc page |
| \`showcase://components\` | Lists all categories and their components |
| \`showcase://definitions\` | Lists all available API definition names |

## Tools

| Tool | Parameters | Description |
|------|-----------|-------------|
| \`search_components\` | \`query: string\` | Fuzzy search across component names and labels |
| \`search_docs\` | \`query: string\` | Search documentation pages by name or content |
| \`get_component\` | \`name: string\` | Returns a component's template code, category, and import info |
| \`get_api\` | \`name: string\` | Returns a component's API definition (props, slots, events) |
| \`get_doc\` | \`name: string\` | Returns the full markdown content of a doc page |

All tools are annotated as read-only, non-destructive, and idempotent.


## Testing with MCP Inspector

Use the official [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) to browse and test the server:

\`\`\`bash
npx @modelcontextprotocol/inspector
\`\`\`

Then in the browser at \`http://localhost:6274\`:

1. Set **Transport Type** to "Streamable HTTP"
2. Enter the server URL (e.g. \`http://localhost:3000/mcp\` or the hosted URL above)
3. Set **Connection Type** to "Proxy"
4. Click **Connect**

The Inspector provides panels to browse resources, call tools, and inspect raw JSON-RPC messages.
`,fX=`# JComponentShowcase

Interactive documentation browser for your components. Includes a nav sidebar, live preview, and code/API reference panel.

There are two variants:

- **\`JComponentShowcase\`** — bare shell with no built-in content. You pass \`components\` and \`docs\` directly.
- **\`JComponentShowcaseWithContent\`** — includes the library's built-in categories and docs. Extra \`components\` and \`docs\` are merged with the defaults.

## JComponentShowcaseWithContent

The quickest way to get started. Includes all built-in showcase categories and documentation pages out of the box:

\`\`\`html
<JComponentShowcaseWithContent />
\`\`\`

Pass extra components or docs to merge them with the defaults:

\`\`\`html
<JComponentShowcaseWithContent :components="myComponents" :docs="myDocs" />
\`\`\`

## JComponentShowcase (bare)

Use this when you want full control over what's displayed — nothing is included by default:

\`\`\`html
<JComponentShowcase :components="categories" :docs="docs" />
\`\`\`

The \`import-from\` prop controls the package name shown in code samples (defaults to \`'varmory'\`):

\`\`\`html
<JComponentShowcase import-from="my-lib" :components="categories" :docs="docs" />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`components\` | Object | \`{}\` | Categories of showcase items. Keys are category names, values are arrays of Vue components or item objects. |
| \`docs\` | Object | \`{}\` | Markdown doc pages. Keys are page names, values are raw markdown strings. |
| \`import-from\` | String | \`'varmory'\` | Package name shown in code reference panel. |

## Built-in categories

The showcase auto-discovers \`.vue\` files from \`showcase/categories/*/\`. Categories are folder names — numeric prefixes control order and are stripped from display:

\`\`\`
showcase/categories/
  01 Colors/
    AllColors.vue
  02 Typography/
    Typography.vue
    HelperClasses.vue
  04 Buttons/
    Btn.vue
    BtnDropdown.vue
  06 Helpers/
    CurrentYear.vue
    DarkSwitcher.vue
\`\`\`

## Adding your own categories

Pass \`components\` to inject app-specific components. With \`JComponentShowcaseWithContent\`, these are merged with the built-in categories. Numeric prefixes work the same way for ordering:

\`\`\`html
<JComponentShowcaseWithContent :components="components" />
\`\`\`

\`\`\`js
import MyComponent from './components/MyComponent.vue';

components: {
    '50 My App': [ShowcaseMyComponent],        // name is taken from component's \`name\` export
    '51 Widgets': [WidgetA, WidgetB],  // multiple items in a category
}
\`\`\`

## Adding custom docs

Pass \`docs\` to add markdown pages to the showcase's Readme section. With \`JComponentShowcaseWithContent\`, these are merged with the built-in docs (README.md, THEMING.md, etc.):

\`\`\`html
<JComponentShowcaseWithContent :docs="docs" />
\`\`\`

\`\`\`js
import myGuide from './docs/MY_GUIDE.md?raw';

docs: {
    'MY_GUIDE': myGuide,
}
\`\`\`

The key \`README\` is special — it's used as the default landing page when the showcase loads. Name your index/home doc \`README\` to make it appear first.

Links between doc pages, e.g. (THEMING.md) or [README](README.md) are automatically intercepted and navigate within the showcase instead of opening a new tab.

## Writing a showcase entry

Each \`.vue\` file in a category folder is a showcase entry. The component's default export controls how it appears in the nav:

\`\`\`js
export default {
    name: 'ShowcaseMyComponent',
    components: { MyComponent }, // component to showcase, use it in template of this to show MyComponent in action
    label: 'My Component',       // display name in nav, if empty — derived from component name
    icon: 'widgets',             // Material icon (optional)
    order: 1,                    // sort within category (default 999)
    importName: 'MyComponent',   // shown in code reference panel
    importFrom: 'quasar',       // override package name for import line (optional, defaults to showcase's import-from)
    apiJson: null,               // JSON API definition, follows Quasar docs format (optional)
    code: null,                  // custom code sample (optional, auto-extracted from template if null)
};
\`\`\`

For real examples, look at the existing showcase entries in \`showcase/categories/\` — they cover common patterns like prop variants, slot usage, and interactive demos.

Use the standard CSS classes for consistent layout:

\`\`\`html
<template>
<div class="jShowcase_row jShowcase_column">
    <div class="jShowcase_info">
        <p>Description of the component.</p>
    </div>
    <div class="jShowcase_group">
        <span class="jShowcase_title">Variant Name</span>
        <div class="jShowcase_items">
            <MyComponent />
            <MyComponent color="primary" />
        </div>
    </div>
</div>
</template>
\`\`\`

## Navigation

The showcase uses URL hashes for navigation (\`#Category/ItemName\`). You can link between showcase entries:

\`\`\`html
<a class="jShowcase_infoLink" href="#Buttons/Btn">QBtn</a>
\`\`\`
`,pX=`# Theming

The library ships with four built-in themes: \`default\`, \`rpg\`, \`space\`, and \`finance\`.

Each theme is a set of three CSS files:

| File | Purpose |
|------|---------|
| \`common.css\` | Common component-specific styling (backgrounds, borders, decorative effects), fonts imports, etc |
| \`dark.css\` | Optional CSS for dark mode |
| \`light.css\` | Optional CSS for light mode |

## Disabling theming

To use the library without the theme system (no theme store initialization, no CSS loading), pass \`themes: null\` or \`themes: false\`:

\`\`\`js
app.use(install, { themes: null });
\`\`\`

Components will still render — you can style them yourself by targeting their CSS class names (e.g. \`.jPanel\`, \`.jPanel_header\`, \`.portfolioHeader_frame\`) and defining the CSS variables they reference (\`--q-primary\`, \`--q-surface-border\`, \`--font-display\`, etc.) in your own stylesheets.

Dark/light mode toggling via \`themeStore.toggleDark()\` and \`JDarkSwitcher\` still works — Quasar adds the \`.body--dark\` class to \`<body>\`. You can use this to define your own dark/light styles:

\`\`\`css
:root {
    --q-surface-border: #ddd;
}

.body--dark {
    --q-surface-border: #1a3a6a;
}

.body--dark .jPanel_header {
    border-bottom-color: rgba(255, 255, 255, 0.06);
}
\`\`\`

## Selecting a built-in theme

\`\`\`js
app.use(install, { theme: 'rpg' });
\`\`\`

## Custom themes

A theme is an object with async CSS loaders: \`{ common, dark, light }\`.

To use a single custom theme, pass it directly to \`theme\`:

\`\`\`js
app.use(install, {
    theme: {
        common: () => import('./themes/brand/common.css?inline'),
        dark:   () => import('./themes/brand/dark.css?inline'),
        light:  () => import('./themes/brand/light.css?inline'),
    },
});
\`\`\`

To add custom themes alongside the built-in ones, use \`themes\`:

\`\`\`js
app.use(install, {
    theme: 'myBrand',
    themes: {
        myBrand: {
            common: () => import('./themes/myBrand/common.css?inline'),
            dark:   () => import('./themes/myBrand/dark.css?inline'),
            light:  () => import('./themes/myBrand/light.css?inline'),
        },
    },
});
\`\`\`

These are merged with built-in themes.

## Writing a theme

Each theme is a folder with three files: \`common.css\` (common css for theme, vars, fonts + component styling), \`dark.css\` and \`light.css\` (CSS variables for each mode). Use the built-in themes as a reference:

- [space](../src/varmory/styles/themes/space/) — sci-fi with scanlines and glow effects
- [rpg](../src/varmory/styles/themes/rpg/) — medieval fantasy
- [default](../src/varmory/styles/themes/default/) — clean modern
- [finance](../src/varmory/styles/themes/finance/) — corporate

Copy any of these as a starting point and adjust the values.

When implementing \`common.css\`, see [AccentBackground.md](./AccentBackground.md) for the \`varmoryBackgroundAccent\` contract — it's the shared hook themes use to paint signature backgrounds on JPanel's \`accent\` variant and on components like \`PortfolioHeader\`.

## Theme store

You can control theming programmatically via the Pinia store:

\`\`\`js
import { useThemeStore } from 'varmory';

const themeStore = useThemeStore();

themeStore.currentTheme   // 'space' | 'rpg' | ...
themeStore.isDark          // boolean
themeStore.themeLocked     // true when only one theme is available
themeStore.ready           // true when CSS + fonts are loaded

themeStore.toggleDark()
themeStore.applyTheme('rpg', true) // (themeName, isDark)
\`\`\`

## Optional UI components

The library includes ready-made components for theme control, but they are entirely optional. You can build your own UI using the theme store directly.

**JThemeSwitcher** — theme selector + dark/light toggle. Automatically hides the theme selector when only one theme is available.

\`\`\`html
<JThemeSwitcher />
\`\`\`

**JDarkSwitcher** — single round button, toggles dark/light. Accepts all \`QBtn\` props.

\`\`\`html
<JDarkSwitcher />
<JDarkSwitcher size="lg" outline />
\`\`\`
`,mX=`# Usage

Varmory wraps [Quasar](https://quasar.dev/) (Vue 3). When you install varmory via \`app.use()\`, varmory's own components (\`JPanel\`, \`PortfolioHeader\`, etc.) are registered globally.

Quasar components (\`QBtn\`, \`QInput\`, \`QIcon\`, etc.) are registered separately by \`@quasar/vite-plugin\` in your Vite config:

\`\`\`js
// vite.config.js
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default {
	plugins: [
		vue({ template: { transformAssetUrls } }),
		quasar({ autoImportComponentCase: 'pascal' }),
	],
};
\`\`\`

On the App's main file, like \`main.js\` you need to initialize Varmory as a Vue plugin, additionally loading Quasar's base and icons css, and set Quasar plugins you may need in your application

\`\`\`js
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { install } from './varmory';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { createPinia } from 'pinia';

import {
	Dialog, LocalStorage, SessionStorage, Notify,
} from 'quasar';

createApp(App).use(createPinia()).use(install, { theme: 'space', plugins: { Notify, Dialog, LocalStorage, SessionStorage } }).mount('#app');
\`\`\`

Alternatively, you can attach Quasar plugin on the app side. Expected to work very same, as Quasar is deduped peerDependency of the Varmory:

\`\`\`js
...
import { Quasar } from 'quasar';
createApp(App).use(createPinia()).use(Quasar, { plugins: { Notify } }).use(install, { theme: 'space' }).mount('#app');
\`\`\`

Note that Quasar's css and icons css expected to be included on the App's side (as you may want to use different sets there).

When building the app and its components with varmory, follow the conventions in [CustomComponents.md](CustomComponents.md) — API style, CSS variables, class naming, and component structure.
`,hX=`# varmory

Vue 3 + Quasar component showcase library with multi-theme support and an MCP server for AI agents.

Drop in an interactive component browser, expose your components to AI via the Model Context Protocol, and ship with built-in theming — dark/light mode, multiple themes, or bring your own.

## Installation

\`\`\`bash
npm install varmory
\`\`\`

Peer dependencies:

\`\`\`bash
npm install vue@^3 quasar@^2 pinia@^3 @quasar/extras@^1
\`\`\`

## Setup

\`\`\`js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { install as Varmory } from 'varmory';

const app = createApp(App);
app.use(createPinia());
app.use(Varmory, {
	theme: 'space', // optional. Default is 'default'
});
\`\`\`

## Docs

- [Usage](docs/USAGE.md) — setting up a fresh app using varmory for UI, Vite config, and Quasar plugin setup
- [Building Components](docs/CustomComponents.md) — API style, CSS variables, layout patterns, component composition, and styling conventions
- [Theming](docs/THEMING.md) — built-in themes, custom themes, writing your own, theme store API, and UI components
- [Showcase](docs/SHOWCASE.md) — interactive component browser, adding categories, custom docs, writing showcase entries, and navigation
- [MCP Server](docs/MCP.md) — expose showcase data to AI agents via the Model Context Protocol
`,gX=["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"];function vX(e){const t=n=>({name:n,varName:`class="bg-${n}"`,bgClass:`bg-${n}`});return[t(e),t(`${e}-1`),{separator:!0,name:`${e}-sep1`},t(`${e}-7`),{separator:!0,name:`${e}-sep2`},t(`${e}-14`)]}const Sm=[{label:"BRAND",colors:[{name:"primary",varName:"--q-primary",var:"var(--q-primary)"},{name:"secondary",varName:"--q-secondary",var:"var(--q-secondary)"},{name:"accent",varName:"--q-accent",var:"var(--q-accent)"},{name:"dark",varName:"--q-dark",var:"var(--q-dark)"},{name:"positive",varName:"--q-positive",var:"var(--q-positive)"},{name:"negative",varName:"--q-negative",var:"var(--q-negative)"},{name:"info",varName:"--q-info",var:"var(--q-info)"},{name:"warning",varName:"--q-warning",var:"var(--q-warning)"}]},{label:"BRAND MIXES",colors:[{name:"color-mix(in srgb, var(--q-primary), transparent 50%)",varName:" ",var:"color-mix(in srgb, var(--q-primary), transparent 50%)"},{name:"color-mix(in srgb, var(--q-secondary), transparent 70%)",varName:" ",var:"color-mix(in srgb, var(--q-secondary), transparent 70%)"},{name:"color-mix(in srgb, var(--q-accent), black 70%)",varName:" ",var:"color-mix(in srgb, var(--q-accent), black 70%)"}]},{label:"TEXT",colors:[{name:"text-bright",varName:"--q-text-bright",var:"var(--q-text-bright)"},{name:"text",varName:"--q-text",var:"var(--q-text)"},{name:"text-muted",varName:"--q-text-muted",var:"var(--q-text-muted)"},{name:"text-faint",varName:"--q-text-faint",var:"var(--q-text-faint)"}]},{label:"SURFACES",colors:[{name:"surface-0",varName:"--q-surface-0",var:"var(--q-surface-0)"},{name:"surface-1",varName:"--q-surface-1",var:"var(--q-surface-1)"},{name:"surface-2",varName:"--q-surface-2",var:"var(--q-surface-2)"},{name:"surface-3",varName:"--q-surface-3",var:"var(--q-surface-3)"},{name:"surface-border",varName:"--q-surface-border",var:"var(--q-surface-border)"},{name:"surface-overlay",varName:"--q-surface-overlay",var:"var(--q-surface-overlay)"},{name:"body-bg",varName:"--q-body-bg",var:"var(--q-body-bg)"}]},{label:"GLOWS & SHADOWS",colors:[{name:"glow-primary",varName:"--q-glow-primary",var:"var(--q-glow-primary)"},{name:"glow-accent",varName:"--q-glow-accent",var:"var(--q-glow-accent)"},{name:"glow-warning",varName:"--q-glow-warning",var:"var(--q-glow-warning)"},{name:"shadow-drop",varName:"--q-shadow-drop",var:"var(--q-shadow-drop)"},{name:"shadow-inset",varName:"--q-shadow-inset",var:"var(--q-shadow-inset)"}]},{label:"QUASAR PALETTE",rows:gX.map(e=>vX(e))}],bX=Sm.map(e=>{let t=[];if(e.label=="BRAND")t=e.colors.map(n=>{const a=Math.floor(Math.random()*1e4%3);return a==0?`  <div class="text-${n.name}">...</div>`:a==1?`  <div class="bg-${n.name}">...</div>`:`  <div style="color: var(--q-${n.name})">...</div>`}).join(`,
`);else{if(e.label=="TEXT")return`${e.label}: 
<div class="text-bright">...</div> 
<div style="color: var(--q-text-bright)">...</div> 
<div class="text-muted">...</div>
<div style="color: var(--q-text-muted)">...</div>  
<div class="text-faint">...</div>
<div style="color: var(--q-text-faint)">...</div>
  `;e.label=="QUASAR PALETTE"?t=e.rows.flat().filter(n=>!n.separator).slice(0,6).map(n=>`  <div class="bg-${n.name}">...</div>`).join(`,
`):t=(e.colors||[]).map(n=>{const a=Math.floor(Math.random()*1e4%3);return a==0?`  <div style="background-color: var(--q-${n.name})">...</div>`:a==1?`  <div style="color: var(--q-${n.name})">...</div>`:`  <div style="color: var(--q-${n.name})">...</div>`}).join(`,
`)}return`${e.label}:
${t}`}).join(`

`),_X={inject:["showcaseCopy"],name:"ShowcaseAllColors",label:"All Colors",icon:"palette",data(){return{groups:Sm}},code:bX,methods:{onColorClick(e){this.showcaseCopy(e.name)}}},yX={class:"colorSections"},wX={class:"colorGroupLabel"},SX={key:0,class:"colorRows non-selectable"},kX={key:0,class:"colorSeparator"},xX=["onClick"],CX={class:"colorInfo"},QX={class:"colorName text-truncate"},AX={class:"colorVar text-truncate"},IX={key:1,class:"colorGrid non-selectable"},qX={key:0,class:"colorSeparator"},TX=["onClick"],LX={class:"colorInfo"},EX={class:"colorName"},DX={class:"colorVar"};function BX(e,t,n,a,o,i){return M(),ee("div",yX,[(M(!0),ee(Ve,null,ut(o.groups,r=>(M(),ee("div",{key:r.label,class:"colorGroup"},[v("div",wX,xe(r.label),1),r.rows?(M(),ee("div",SX,[(M(!0),ee(Ve,null,ut(r.rows,(s,l)=>(M(),ee("div",{key:l,class:"colorRow"},[(M(!0),ee(Ve,null,ut(s,u=>(M(),ee(Ve,{key:u.name},[u.separator?(M(),ee("div",kX,"⋯")):(M(),ee("div",{key:1,class:"colorSwatch",onClick:c=>i.onColorClick(u)},[v("div",{class:ft(["colorBox",u.bgClass]),style:Dn(u.var?{background:u.var}:{})},null,6),v("div",CX,[v("span",QX,xe(u.name),1),v("span",AX,xe(u.varName),1)])],8,xX))],64))),128))]))),128))])):(M(),ee("div",IX,[(M(!0),ee(Ve,null,ut(r.colors,s=>(M(),ee(Ve,{key:s.name},[s.separator?(M(),ee("div",qX,"⋯")):(M(),ee("div",{key:1,class:"colorSwatch",onClick:l=>i.onColorClick(s)},[v("div",{class:ft(["colorBox",s.bgClass]),style:Dn(s.var?{background:s.var}:{})},null,6),v("div",LX,[v("span",EX,xe(s.name),1),v("span",DX,xe(s.varName),1)])],8,TX))],64))),128))]))]))),128))])}const PX=ze(_X,[["render",BX],["__scopeId","data-v-f014264e"]]),MX=Object.freeze(Object.defineProperty({__proto__:null,default:PX},Symbol.toStringTag,{value:"Module"})),jX={name:"ShowcaseHelperClasses",label:"Helper Classes",icon:"text_fields",inject:["showcaseCopy"],code:`MOUSE:
<div class="non-selectable">...</div>
<div class="no-pointer-events">...</div>
<div class="all-pointer-events">...</div>
<div class="cursor-pointer">...</div>
<div class="cursor-not-allowed">...</div>
<div class="cursor-inherit">...</div>
<div class="cursor-none">...</div>

SCROLL:
<div class="scroll">...</div>
<div class="no-scroll">...</div>
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-hidden-y">...</div>
<div class="hide-scrollbar">...</div>

SIZE:
<div class="fit">...</div>
<div class="full-height">...</div>
<div class="full-width">...</div>
<div class="window-height">...</div>
<div class="window-width">...</div>
<div class="block">...</div>

ORIENTATION:
<div class="rotate-45">...</div>
<div class="rotate-90">...</div>
<div class="rotate-180">...</div>
<div class="rotate-270">...</div>
<div class="flip-horizontal">...</div>
<div class="flip-vertical">...</div>

POSITIONING:
<div class="fullscreen">...</div>
<div class="fixed-center">...</div>
<div class="fixed-top-right">...</div>
<div class="absolute-full">...</div>
<div class="absolute-center">...</div>
<div class="absolute-bottom-right">...</div>
<div class="relative-position">...</div>
<div class="z-top">...</div>
<div class="z-max">...</div>

BORDER:
<div class="no-border">...</div>
<div class="no-border-radius">...</div>
<div class="no-box-shadow">...</div>
<div class="no-outline">...</div>
<div class="rounded-borders">...</div>
<div class="border-radius-inherit">...</div>`,data(){return{groups:[{label:"MOUSE",items:[{cls:"non-selectable",desc:"User cannot select the DOM node or its text"},{cls:"no-pointer-events",desc:"Element does not become a target of mouse events"},{cls:"all-pointer-events",desc:"Restores pointer events (inverse of no-pointer-events)"},{cls:"cursor-pointer",desc:"Changes cursor to pointer (clickable)"},{cls:"cursor-not-allowed",desc:"Changes cursor to not-allowed"},{cls:"cursor-inherit",desc:"Cursor inherits from parent element"},{cls:"cursor-none",desc:"Hides the mouse cursor"}]},{label:"SCROLL",items:[{cls:"scroll",desc:"Applies CSS tweaks for optimal scroll on all platforms"},{cls:"no-scroll",desc:"Hides scrollbars on the element"},{cls:"overflow-auto",desc:"Sets overflow to auto"},{cls:"overflow-hidden",desc:"Sets overflow to hidden"},{cls:"overflow-hidden-y",desc:"Hides overflow on the vertical axis only"},{cls:"hide-scrollbar",desc:"Removes the scrollbar while keeping scroll functional"}]},{label:"SIZE",items:[{cls:"fit",desc:"Width and height set to 100%"},{cls:"full-height",desc:"Height set to 100%"},{cls:"full-width",desc:"Width set to 100%, left and right margins 0"},{cls:"window-height",desc:"Height set to 100vh, top and bottom margins 0"},{cls:"window-width",desc:"Width set to 100vw, left and right margins 0"},{cls:"block",desc:"Sets display to block"}]},{label:"ORIENTATION",items:[{cls:"rotate-45",desc:"Rotate element 45 degrees"},{cls:"rotate-90",desc:"Rotate element 90 degrees"},{cls:"rotate-135",desc:"Rotate element 135 degrees"},{cls:"rotate-180",desc:"Rotate element 180 degrees"},{cls:"rotate-225",desc:"Rotate element 225 degrees"},{cls:"rotate-270",desc:"Rotate element 270 degrees"},{cls:"rotate-315",desc:"Rotate element 315 degrees"},{cls:"flip-horizontal",desc:"Flip element horizontally"},{cls:"flip-vertical",desc:"Flip element vertically"}]},{label:"POSITIONING",items:[{cls:"fullscreen",desc:"Fix position covering the full window"},{cls:"fixed",desc:"Sets position to fixed (without coordinates)"},{cls:"fixed-full",desc:"Sets position to fixed covering the full window"},{cls:"fixed-center",desc:"Sets position to fixed but centered in window"},{cls:"fixed-bottom",desc:"Fixed position at bottom of window"},{cls:"fixed-left",desc:"Fixed position at left of window"},{cls:"fixed-right",desc:"Fixed position at right of window"},{cls:"fixed-top",desc:"Fixed position at top of window"},{cls:"fixed-top-left",desc:"Fixed position at top-left of window"},{cls:"fixed-top-right",desc:"Fixed position at top-right of window"},{cls:"fixed-bottom-left",desc:"Fixed position at bottom-left of window"},{cls:"fixed-bottom-right",desc:"Fixed position at bottom-right of window"},{cls:"absolute",desc:"Sets position to absolute (without coordinates)"},{cls:"absolute-full",desc:"Sets position to absolute covering the full parent"},{cls:"absolute-center",desc:"Sets position to absolute but centered in parent"},{cls:"absolute-bottom",desc:"Absolute position at bottom of parent"},{cls:"absolute-left",desc:"Absolute position at left of parent"},{cls:"absolute-right",desc:"Absolute position at right of parent"},{cls:"absolute-top",desc:"Absolute position at top of parent"},{cls:"absolute-top-left",desc:"Absolute position at top-left of parent"},{cls:"absolute-top-right",desc:"Absolute position at top-right of parent"},{cls:"absolute-bottom-left",desc:"Absolute position at bottom-left of parent"},{cls:"absolute-bottom-right",desc:"Absolute position at bottom-right of parent"},{cls:"relative-position",desc:"Sets position to relative"},{cls:"z-top",desc:"Sets z-index to the top (z-index: 7000)"},{cls:"z-max",desc:"Sets z-index to the maximum (z-index: 9998)"}]},{label:"BORDER",items:[{cls:"no-border",desc:"Removes any border"},{cls:"no-border-radius",desc:"Removes any border radius"},{cls:"no-box-shadow",desc:"Removes any box shadow"},{cls:"no-outline",desc:"Removes any outline"},{cls:"rounded-borders",desc:"Applies a generic border radius"},{cls:"border-radius-inherit",desc:"Inherits border radius from parent"}]}]}},methods:{copy(e){this.showcaseCopy(e)}}},$X={class:"helperClasses"},RX={class:"helperClasses_sectionLabel"},OX={class:"helperClasses_table"},FX={class:"helperClasses_tags"},VX=["onClick"],NX={class:"helperClasses_desc"};function zX(e,t,n,a,o,i){return M(),ee("div",$X,[(M(!0),ee(Ve,null,ut(o.groups,r=>(M(),ee("div",{key:r.label,class:"helperClasses_section"},[v("div",RX,xe(r.label),1),v("div",OX,[(M(!0),ee(Ve,null,ut(r.items,s=>(M(),ee("div",{key:s.cls,class:"helperClasses_row"},[v("div",FX,[v("span",{class:"helperClasses_tag",onClick:l=>i.copy(s.cls)},xe(s.cls),9,VX)]),v("div",NX,xe(s.desc),1)]))),128))])]))),128))])}const HX=ze(jX,[["render",zX],["__scopeId","data-v-8c9d4a39"]]),UX=Object.freeze(Object.defineProperty({__proto__:null,default:HX},Symbol.toStringTag,{value:"Module"})),ea="Lorem Ipsum is simply dummy text of the printing and typesetting industry.",WX="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",JX="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.",GX={inject:["showcaseCopy"],name:"ShowcaseTypography",label:"Typography",icon:"text_fields",order:0,code:`HEADINGS:
<div class="text-h1">Headline 1</div>
<h1>Headline 1</h1>
<div class="text-h2">Headline 2</div>
<h2>Headline 2</h2>
<div class="text-h6">Headline 6</div>
<h6>Headline 6</h6>
<div class="text-subtitle1">Subtitle 1</div>
<div class="text-subtitle2">Subtitle 2</div>
<div class="text-body1">Body 1</div>
<div class="text-body2">Body 2</div>
<div class="text-caption">Caption</div>
<div class="text-overline">Overline</div>

FONT WEIGHTS:
<div class="text-weight-thin">...</div>
<div class="text-weight-light">...</div>
<div class="text-weight-regular">...</div>
<div class="text-weight-medium">...</div>
<div class="text-weight-bold">...</div>
<div class="text-weight-bolder">...</div>

CSS HELPERS:
<div class="text-right">...</div>
<div class="text-center">...</div>
<div class="text-justify">...</div>
<div class="text-bold">...</div>
<div class="text-italic">...</div>
<div class="text-no-wrap">...</div>
<div class="text-strike">...</div>
<div class="text-uppercase">...</div>
<div class="text-lowercase">...</div>
<div class="text-capitalize">...</div>`,data(){return{headings:[{cls:"text-h1",el:"h1",text:"Headline 1"},{cls:"text-h2",el:"h2",text:"Headline 2"},{cls:"text-h3",el:"h3",text:"Headline 3"},{cls:"text-h4",el:"h4",text:"Headline 4"},{cls:"text-h5",el:"h5",text:"Headline 5"},{cls:"text-h6",el:"h6",text:"Headline 6"},{cls:"text-subtitle1",el:null,text:"Subtitle 1"},{cls:"text-subtitle2",el:null,text:"Subtitle 2"},{cls:"text-body1",el:null,text:"Body 1. "+WX},{cls:"text-body2",el:null,text:"Body 2. "+JX},{cls:"text-caption",el:null,text:"Caption text"},{cls:"text-overline",el:null,text:"Overline"}],weights:[{cls:"text-weight-thin",text:ea},{cls:"text-weight-light",text:ea},{cls:"text-weight-regular",text:ea},{cls:"text-weight-medium",text:ea},{cls:"text-weight-bold",text:ea},{cls:"text-weight-bolder",text:ea}],helpers:[{cls:"text-right",desc:"Align text to the right"},{cls:"text-left",desc:"Align text to the left"},{cls:"text-center",desc:"Align text to the center"},{cls:"text-justify",desc:"Text will be justified"},{cls:"text-bold",desc:"Text will be in bold"},{cls:"text-italic",desc:"Text will be in italic"},{cls:"text-no-wrap",desc:"Non wrappable text",descBefore:"Non wrappable text (applies ",css:"white-space: nowrap",descAfter:")"},{cls:"text-strike",desc:"Applies text-decoration: line-through",descBefore:"Applies ",css:"text-decoration: line-through",descAfter:""},{cls:"text-uppercase",desc:"Transform text to uppercase"},{cls:"text-lowercase",desc:"Transform text to lowercase"},{cls:"text-capitalize",desc:"Capitalize first letter of the text"}]}},methods:{copy(e){this.showcaseCopy(e)}}},YX={class:"typoSections"},KX={class:"typoSection"},ZX={class:"typoRows"},XX={class:"typoTags"},eee=["onClick"],tee=["onClick"],nee={class:"typoSection"},oee={class:"typoRows"},aee={class:"typoTags"},iee=["onClick"],ree={class:"typoSection"},see={class:"typoTable"},lee={class:"typoTags"},cee=["onClick"],uee={class:"typoDesc"},dee={class:"typoCssBadge"};function fee(e,t,n,a,o,i){return M(),ee("div",YX,[v("div",KX,[t[0]||(t[0]=v("div",{class:"typoSectionLabel"},"HEADINGS",-1)),v("div",ZX,[(M(!0),ee(Ve,null,ut(o.headings,r=>(M(),ee("div",{key:r.cls,class:"typoRow"},[v("div",XX,[v("span",{class:"typoTag",onClick:s=>i.copy(r.cls)},xe(r.cls),9,eee),r.el?(M(),ee("span",{key:0,class:"typoTag",onClick:s=>i.copy(r.el)},xe(r.el),9,tee)):Ge("",!0)]),v("div",{class:ft(["typoSample",r.cls])},xe(r.text),3)]))),128))])]),v("div",nee,[t[1]||(t[1]=v("div",{class:"typoSectionLabel"},"FONT WEIGHTS",-1)),v("div",oee,[(M(!0),ee(Ve,null,ut(o.weights,r=>(M(),ee("div",{key:r.cls,class:"typoRow"},[v("div",aee,[v("span",{class:"typoTag",onClick:s=>i.copy(r.cls)},xe(r.cls),9,iee)]),v("div",{class:ft(["typoSample",r.cls])},xe(r.text),3)]))),128))])]),v("div",ree,[t[3]||(t[3]=v("div",{class:"typoSectionLabel"},"CSS HELPER CLASSES",-1)),v("div",see,[t[2]||(t[2]=v("div",{class:"typoTableHeader"},[v("span",null,"Class Name"),v("span",null,"Description")],-1)),(M(!0),ee(Ve,null,ut(o.helpers,r=>(M(),ee("div",{key:r.cls,class:"typoTableRow"},[v("div",lee,[v("span",{class:"typoTag",onClick:s=>i.copy(r.cls)},xe(r.cls),9,cee)]),v("div",uee,[r.css?(M(),ee(Ve,{key:0},[K(xe(r.descBefore),1),v("span",dee,xe(r.css),1),K(xe(r.descAfter),1)],64)):(M(),ee(Ve,{key:1},[K(xe(r.desc),1)],64))])]))),128))])])])}const pee=ze(GX,[["render",fee],["__scopeId","data-v-5849c564"]]),mee=Object.freeze(Object.defineProperty({__proto__:null,default:pee},Symbol.toStringTag,{value:"Module"}));let xs,xi=0;const Et=new Array(256);for(let e=0;e<256;e++)Et[e]=(e+256).toString(16).substring(1);const hee=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let a=t;a>0;a--)n.push(Math.floor(Math.random()*256));return n}})(),ld=4096;function ll(){(xs===void 0||xi+16>ld)&&(xi=0,xs=hee(ld));const e=Array.prototype.slice.call(xs,xi,xi+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,Et[e[0]]+Et[e[1]]+Et[e[2]]+Et[e[3]]+"-"+Et[e[4]]+Et[e[5]]+"-"+Et[e[6]]+Et[e[7]]+"-"+Et[e[8]]+Et[e[9]]+"-"+Et[e[10]]+Et[e[11]]+Et[e[12]]+Et[e[13]]+Et[e[14]]+Et[e[15]]}function gee(e){return e??null}function cd(e,t){return e??(t===!0?`f_${ll()}`:null)}function km({getValue:e,required:t=!0}={}){if(Xn.value===!0){const n=ge(e!==void 0?gee(e()):null);return t===!0&&n.value===null&&Zt(()=>{n.value=`f_${ll()}`}),e!==void 0&&Oe(e,a=>{n.value=cd(a,t)}),n}return e!==void 0?Q(()=>cd(e(),t)):ge(`f_${ll()}`)}const ud=/^on[A-Z]/;function vee(){const{attrs:e,vnode:t}=Je(),n={listeners:ge({}),attributes:ge({})};function a(){const o={},i={};for(const r in e)r!=="class"&&r!=="style"&&ud.test(r)===!1&&(o[r]=e[r]);for(const r in t.props)ud.test(r)===!0&&(i[r]=t.props[r]);n.attributes.value=o,n.listeners.value=i}return Ir(a),a(),n}const Mt={dark:{type:Boolean,default:null}};function jt(e,t){return Q(()=>e.dark===null?t.dark.isActive:e.dark)}function bee({validate:e,resetValidation:t,requiresQForm:n}){const a=vo(hb,!1);if(a!==!1){const{props:o,proxy:i}=Je();Object.assign(i,{validate:e,resetValidation:t}),Oe(()=>o.disable,r=>{r===!0?(typeof t=="function"&&t(),a.unbindComponent(i)):a.bindComponent(i)}),Zt(()=>{o.disable!==!0&&a.bindComponent(i)}),wt(()=>{o.disable!==!0&&a.unbindComponent(i)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const dd=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fd=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,pd=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Ci=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Qi=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Cs={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>dd.test(e),hexaColor:e=>fd.test(e),hexOrHexaColor:e=>pd.test(e),rgbColor:e=>Ci.test(e),rgbaColor:e=>Qi.test(e),rgbOrRgbaColor:e=>Ci.test(e)||Qi.test(e),hexOrRgbColor:e=>dd.test(e)||Ci.test(e),hexaOrRgbaColor:e=>fd.test(e)||Qi.test(e),anyColor:e=>pd.test(e)||Ci.test(e)||Qi.test(e)},_ee=[!0,!1,"ondemand"],yee={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>_ee.includes(e)}};function wee(e,t){const{props:n,proxy:a}=Je(),o=ge(!1),i=ge(null),r=ge(!1);bee({validate:I,resetValidation:_});let s=0,l;const u=Q(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),c=Q(()=>n.disable!==!0&&u.value===!0&&t.value===!1),d=Q(()=>n.error===!0||o.value===!0),p=Q(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:i.value);Oe(()=>n.modelValue,()=>{r.value=!0,c.value===!0&&n.lazyRules===!1&&C()});function g(){n.lazyRules!=="ondemand"&&c.value===!0&&r.value===!0&&C()}Oe(()=>n.reactiveRules,b=>{b===!0?l===void 0&&(l=Oe(()=>n.rules,g,{immediate:!0,deep:!0})):l!==void 0&&(l(),l=void 0)},{immediate:!0}),Oe(()=>n.lazyRules,g),Oe(e,b=>{b===!0?r.value=!0:c.value===!0&&n.lazyRules!=="ondemand"&&C()});function _(){s++,t.value=!1,r.value=!1,o.value=!1,i.value=null,C.cancel()}function I(b=n.modelValue){if(n.disable===!0||u.value===!1)return!0;const w=++s,y=t.value!==!0?()=>{r.value=!0}:()=>{},m=(B,T)=>{B===!0&&y(),o.value=B,i.value=T||null,t.value=!1},x=[];for(let B=0;B<n.rules.length;B++){const T=n.rules[B];let E;if(typeof T=="function"?E=T(b,Cs):typeof T=="string"&&Cs[T]!==void 0&&(E=Cs[T](b)),E===!1||typeof E=="string")return m(!0,E),!1;E!==!0&&E!==void 0&&x.push(E)}return x.length===0?(m(!1),!0):(t.value=!0,Promise.all(x).then(B=>{if(B===void 0||Array.isArray(B)===!1||B.length===0)return w===s&&m(!1),!0;const T=B.find(E=>E===!1||typeof E=="string");return w===s&&m(T!==void 0,T),T===void 0},B=>(w===s&&(console.error(B),m(!0)),!1)))}const C=Dl(I,0);return wt(()=>{l==null||l(),C.cancel()}),Object.assign(a,{resetValidation:_,validate:I}),Aa(a,"hasError",()=>d.value),{isDirtyModel:r,hasRules:u,hasError:d,errorMessage:p,validate:I,resetValidation:_}}function li(e){return e!=null&&String(e).length!==0}const See={...Mt,...yee,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},Rr={...See,maxlength:[Number,String]},Kl=["update:modelValue","clear","focus","blur"];function Zl({requiredForAttr:e=!0,tagProp:t,changeEvent:n=!1}={}){const{props:a,proxy:o}=Je(),i=jt(a,o.$q),r=km({required:e,getValue:()=>a.for});return{requiredForAttr:e,changeEvent:n,tag:t===!0?Q(()=>a.tag):{value:"label"},isDark:i,editable:Q(()=>a.disable!==!0&&a.readonly!==!0),innerLoading:ge(!1),focused:ge(!1),hasPopupOpen:!1,splitAttrs:vee(),targetUid:r,rootRef:ge(null),targetRef:ge(null),controlRef:ge(null)}}function Xl(e){const{props:t,emit:n,slots:a,attrs:o,proxy:i}=Je(),{$q:r}=i;let s=null;e.hasValue===void 0&&(e.hasValue=Q(()=>li(t.modelValue))),e.emitValue===void 0&&(e.emitValue=G=>{n("update:modelValue",G)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:O,onFocusout:F}),Object.assign(e,{clearValue:V,onControlFocusin:O,onControlFocusout:F,focus:T}),e.computedCounter===void 0&&(e.computedCounter=Q(()=>{if(t.counter!==!1){const G=typeof t.modelValue=="string"||typeof t.modelValue=="number"?String(t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,be=t.maxlength!==void 0?t.maxlength:t.maxValues;return G+(be!==void 0?" / "+be:"")}}));const{isDirtyModel:l,hasRules:u,hasError:c,errorMessage:d,resetValidation:p}=wee(e.focused,e.innerLoading),g=e.floatingLabel!==void 0?Q(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):Q(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=Q(()=>t.bottomSlots===!0||t.hint!==void 0||u.value===!0||t.counter===!0||t.error!==null),I=Q(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),C=Q(()=>`q-field row no-wrap items-start q-field--${I.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(g.value===!0?" q-field--float":"")+(w.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(c.value===!0?" q-field--error":"")+(c.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),b=Q(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(c.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),w=Q(()=>t.labelSlot===!0||t.label!==void 0),y=Q(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&c.value!==!0?` text-${t.labelColor}`:"")),m=Q(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:g.value,modelValue:t.modelValue,emitValue:e.emitValue})),x=Q(()=>{const G={};return e.targetUid.value&&(G.for=e.targetUid.value),t.disable===!0&&(G["aria-disabled"]="true"),G});function B(){var $e;const G=document.activeElement;let be=($e=e.targetRef)==null?void 0:$e.value;be&&(G===null||G.id!==e.targetUid.value)&&(be.hasAttribute("tabindex")!==!0&&(be=be.querySelector("[tabindex]")),be!==G&&(be==null||be.focus({preventScroll:!0})))}function T(){Mr(B)}function E(){ly(B);const G=document.activeElement;G!==null&&e.rootRef.value.contains(G)&&G.blur()}function O(G){s!==null&&(clearTimeout(s),s=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",G))}function F(G,be){s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",G)),be==null||be())})}function V(G){var be;rt(G),r.platform.is.mobile!==!0?(((be=e.targetRef)==null?void 0:be.value)||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),e.changeEvent===!0&&n("change",null),n("clear",t.modelValue),bt(()=>{const $e=l.value;p(),l.value=$e})}function j(G){[13,32].includes(G.keyCode)&&V(G)}function U(){const G=[];return a.prepend!==void 0&&G.push(L("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Nt},a.prepend())),G.push(L("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},D())),c.value===!0&&t.noErrorIcon===!1&&G.push(ae("error",[L(nt,{name:r.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?G.push(ae("inner-loading-append",a.loading!==void 0?a.loading():[L(yo,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&G.push(ae("inner-clearable-append",[L(nt,{class:"q-field__focusable-action",name:t.clearIcon||r.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":r.lang.label.clear,onKeyup:j,onClick:V})])),a.append!==void 0&&G.push(L("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Nt},a.append())),e.getInnerAppend!==void 0&&G.push(ae("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&G.push(e.getControlChild()),G}function D(){const G=[];return t.prefix!==void 0&&t.prefix!==null&&G.push(L("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&G.push(e.getShadowControl()),w.value===!0&&G.push(L("div",{class:y.value},mt(a.label,t.label))),e.getControl!==void 0?G.push(e.getControl()):a.rawControl!==void 0?G.push(a.rawControl()):a.control!==void 0&&G.push(L("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},a.control(m.value))),t.suffix!==void 0&&t.suffix!==null&&G.push(L("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),G.concat(mt(a.default))}function R(){let G,be;c.value===!0?d.value!==null?(G=[L("div",{role:"alert"},d.value)],be=`q--slot-error-${d.value}`):(G=mt(a.error),be="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(G=[L("div",t.hint)],be=`q--slot-hint-${t.hint}`):(G=mt(a.hint),be="q--slot-hint"));const $e=t.counter===!0||a.counter!==void 0;if(t.hideBottomSpace===!0&&$e===!1&&G===void 0)return;const J=L("div",{key:be,class:"q-field__messages col"},G);return L("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:Nt},[t.hideBottomSpace===!0?J:L(Lt,{name:"q-transition--field-message"},()=>J),$e===!0?L("div",{class:"q-field__counter"},a.counter!==void 0?a.counter():e.computedCounter.value):null])}function ae(G,be){return be===null?null:L("div",{key:G,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},be)}let Z=!1;return Qa(()=>{Z=!0}),Qr(()=>{Z===!0&&t.autofocus===!0&&i.focus()}),t.autofocus===!0&&Zt(()=>{i.focus()}),wt(()=>{s!==null&&clearTimeout(s)}),Object.assign(i,{focus:T,blur:E}),function(){const be=e.getControl===void 0&&a.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...x.value}:x.value;return L(e.tag.value,{ref:e.rootRef,class:[C.value,o.class],style:o.style,...be},[a.before!==void 0?L("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Nt},a.before()):null,L("div",{class:"q-field__inner relative-position col self-stretch"},[L("div",{ref:e.controlRef,class:b.value,tabindex:-1,...e.controlEvents},U()),_.value===!0?R():null]),a.after!==void 0?L("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Nt},a.after()):null])}}const md={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},{tokenMap:hd,tokenKeys:kee}=xm({"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}});function xm(e){const t=Object.keys(e),n={};return t.forEach(a=>{const o=e[a];n[a]={...o,regex:new RegExp(o.pattern)}}),{tokenMap:n,tokenKeys:t}}function Cm(e){return new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+e.join("")+"])|(.)","g")}const gd=/[.*+?^${}()|[\]\\]/g,xee=Cm(kee),Qt="",Cee={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean,maskTokens:Object};function Qee(e,t,n,a){let o,i,r,s,l,u;const c=Q(()=>{if(e.maskTokens===void 0||e.maskTokens===null)return{tokenMap:hd,tokenRegexMask:xee};const{tokenMap:F}=xm(e.maskTokens),V={...hd,...F};return{tokenMap:V,tokenRegexMask:Cm(Object.keys(V))}}),d=ge(null),p=ge(_());function g(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Oe(()=>e.type+e.autogrow,C),Oe(()=>e.mask,F=>{if(F!==void 0)b(p.value,!0);else{const V=E(p.value);C(),e.modelValue!==V&&t("update:modelValue",V)}}),Oe(()=>e.fillMask+e.reverseFillMask,()=>{d.value===!0&&b(p.value,!0)}),Oe(()=>e.unmaskedValue,()=>{d.value===!0&&b(p.value)});function _(){if(C(),d.value===!0){const F=B(E(e.modelValue));return e.fillMask!==!1?O(F):F}return e.modelValue}function I(F){if(F<o.length)return o.slice(-F);let V="",j=o;const U=j.indexOf(Qt);if(U!==-1){for(let D=F-j.length;D>0;D--)V+=Qt;j=j.slice(0,U)+V+j.slice(U)}return j}function C(){if(d.value=e.mask!==void 0&&e.mask.length!==0&&g(),d.value===!1){s=void 0,o="",i="";return}const F=md[e.mask]===void 0?e.mask:md[e.mask],V=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",j=V.replace(gd,"\\$&"),U=[],D=[],R=[];let ae=e.reverseFillMask===!0,Z="",G="";F.replace(c.value.tokenRegexMask,(H,pe,Le,Me,de)=>{if(Me!==void 0){const h=c.value.tokenMap[Me];R.push(h),G=h.negate,ae===!0&&(D.push("(?:"+G+"+)?("+h.pattern+"+)?(?:"+G+"+)?("+h.pattern+"+)?"),ae=!1),D.push("(?:"+G+"+)?("+h.pattern+")?")}else if(Le!==void 0)Z="\\"+(Le==="\\"?"":Le),R.push(Le),U.push("([^"+Z+"]+)?"+Z+"?");else{const h=pe!==void 0?pe:de;Z=h==="\\"?"\\\\\\\\":h.replace(gd,"\\\\$&"),R.push(h),U.push("([^"+Z+"]+)?"+Z+"?")}});const be=new RegExp("^"+U.join("")+"("+(Z===""?".":"[^"+Z+"]")+"+)?"+(Z===""?"":"["+Z+"]*")+"$"),$e=D.length-1,J=D.map((H,pe)=>pe===0&&e.reverseFillMask===!0?new RegExp("^"+j+"*"+H):pe===$e?new RegExp("^"+H+"("+(G===""?".":G)+"+)?"+(e.reverseFillMask===!0?"$":j+"*")):new RegExp("^"+H));r=R,s=H=>{const pe=be.exec(e.reverseFillMask===!0?H:H.slice(0,R.length+1));pe!==null&&(H=pe.slice(1).join(""));const Le=[],Me=J.length;for(let de=0,h=H;de<Me;de++){const k=J[de].exec(h);if(k===null)break;h=h.slice(k.shift().length),Le.push(...k)}return Le.length!==0?Le.join(""):H},o=R.map(H=>typeof H=="string"?H:Qt).join(""),i=o.split(Qt).join(V)}function b(F,V,j){const U=a.value,D=U.selectionEnd,R=U.value.length-D,ae=E(F);V===!0&&C();const Z=B(ae,V),G=e.fillMask!==!1?O(Z):Z,be=p.value!==G;U.value!==G&&(U.value=G),be===!0&&(p.value=G),document.activeElement===U&&bt(()=>{if(G===i){const J=e.reverseFillMask===!0?i.length:0;U.setSelectionRange(J,J,"forward");return}if(j==="insertFromPaste"&&e.reverseFillMask!==!0){const J=U.selectionEnd;let H=D-1;for(let pe=l;pe<=H&&pe<J;pe++)o[pe]!==Qt&&H++;y.right(U,H);return}if(["deleteContentBackward","deleteContentForward"].indexOf(j)!==-1){const J=e.reverseFillMask===!0?D===0?G.length>Z.length?1:0:Math.max(0,G.length-(G===i?0:Math.min(Z.length,R)+1))+1:D;U.setSelectionRange(J,J,"forward");return}if(e.reverseFillMask===!0)if(be===!0){const J=Math.max(0,G.length-(G===i?0:Math.min(Z.length,R+1)));J===1&&D===1?U.setSelectionRange(J,J,"forward"):y.rightReverse(U,J)}else{const J=G.length-R;U.setSelectionRange(J,J,"backward")}else if(be===!0){const J=Math.max(0,o.indexOf(Qt),Math.min(Z.length,D)-1);y.right(U,J)}else{const J=D-1;y.right(U,J)}});const $e=e.unmaskedValue===!0?E(G):G;String(e.modelValue)!==$e&&(e.modelValue!==null||$e!=="")&&n($e,!0)}function w(F,V,j){const U=B(E(F.value));V=Math.max(0,o.indexOf(Qt),Math.min(U.length,V)),l=V,F.setSelectionRange(V,j,"forward")}const y={left(F,V){const j=o.slice(V-1).indexOf(Qt)===-1;let U=Math.max(0,V-1);for(;U>=0;U--)if(o[U]===Qt){V=U,j===!0&&V++;break}if(U<0&&o[V]!==void 0&&o[V]!==Qt)return y.right(F,0);V>=0&&F.setSelectionRange(V,V,"backward")},right(F,V){const j=F.value.length;let U=Math.min(j,V+1);for(;U<=j;U++)if(o[U]===Qt){V=U;break}else o[U-1]===Qt&&(V=U);if(U>j&&o[V-1]!==void 0&&o[V-1]!==Qt)return y.left(F,j);F.setSelectionRange(V,V,"forward")},leftReverse(F,V){const j=I(F.value.length);let U=Math.max(0,V-1);for(;U>=0;U--)if(j[U-1]===Qt){V=U;break}else if(j[U]===Qt&&(V=U,U===0))break;if(U<0&&j[V]!==void 0&&j[V]!==Qt)return y.rightReverse(F,0);V>=0&&F.setSelectionRange(V,V,"backward")},rightReverse(F,V){const j=F.value.length,U=I(j),D=U.slice(0,V+1).indexOf(Qt)===-1;let R=Math.min(j,V+1);for(;R<=j;R++)if(U[R-1]===Qt){V=R,V>0&&D===!0&&V--;break}if(R>j&&U[V-1]!==void 0&&U[V-1]!==Qt)return y.leftReverse(F,j);F.setSelectionRange(V,V,"forward")}};function m(F){t("click",F),u=void 0}function x(F){if(t("keydown",F),Pr(F)===!0||F.altKey===!0)return;const V=a.value,j=V.selectionStart,U=V.selectionEnd;if(F.shiftKey||(u=void 0),F.keyCode===37||F.keyCode===39){F.shiftKey&&u===void 0&&(u=V.selectionDirection==="forward"?j:U);const D=y[(F.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(F.preventDefault(),D(V,u===j?U:j),F.shiftKey){const R=V.selectionStart;V.setSelectionRange(Math.min(u,R),Math.max(u,R),"forward")}}else F.keyCode===8&&e.reverseFillMask!==!0&&j===U?(y.left(V,j),V.setSelectionRange(V.selectionStart,U,"backward")):F.keyCode===46&&e.reverseFillMask===!0&&j===U&&(y.rightReverse(V,U),V.setSelectionRange(j,V.selectionEnd,"forward"))}function B(F,V){if(F==null||F==="")return"";if(e.reverseFillMask===!0)return T(F,V);const j=r;let U=0,D="";for(let R=0;R<j.length;R++){const ae=F[U],Z=j[R];if(typeof Z=="string")D+=Z,V===!0&&ae===Z&&U++;else if(ae!==void 0&&Z.regex.test(ae))D+=Z.transform!==void 0?Z.transform(ae):ae,U++;else return D}return D}function T(F,V){const j=r,U=o.indexOf(Qt);let D=F.length-1,R="";for(let ae=j.length-1;ae>=0&&D!==-1;ae--){const Z=j[ae];let G=F[D];if(typeof Z=="string")R=Z+R,V===!0&&G===Z&&D--;else if(G!==void 0&&Z.regex.test(G))do R=(Z.transform!==void 0?Z.transform(G):G)+R,D--,G=F[D];while(U===ae&&G!==void 0&&Z.regex.test(G));else return R}return R}function E(F){return typeof F!="string"||s===void 0?typeof F=="number"?s(String(F)):F:s(F)}function O(F){return i.length-F.length<=0?F:e.reverseFillMask===!0&&F.length!==0?i.slice(0,-F.length)+F:F+i.slice(F.length)}return{innerValue:p,hasMask:d,moveCursorForPaste:w,updateMaskValue:b,onMaskedKeydown:x,onMaskedClick:m}}const oo={name:String};function Or(e){return Q(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function zo(e={}){return(t,n,a)=>{t[n](L("input",{class:"hidden"+(a||""),...e.value}))}}function Qm(e){return Q(()=>e.name||e.for)}function Aee(e,t){function n(){const a=e.modelValue;try{const o="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(a)===a&&("length"in a?Array.from(a):[a]).forEach(i=>{o.items.add(i)}),{files:o.files}}catch{return{files:void 0}}}return Q(()=>{if(e.type==="file")return n()})}const Iee=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,qee=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Tee=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Lee=/[a-z0-9_ -]$/i;function Am(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(st.is.firefox===!0?Lee.test(n.data)===!1:Iee.test(n.data)===!0||qee.test(n.data)===!0||Tee.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}const Fr=Fe({name:"QInput",inheritAttrs:!1,props:{...Rr,...Cee,...oo,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Kl,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:a}=Je(),{$q:o}=a,i={};let r=NaN,s,l,u=null,c;const d=ge(null),p=Qm(e),{innerValue:g,hasMask:_,moveCursorForPaste:I,updateMaskValue:C,onMaskedKeydown:b,onMaskedClick:w}=Qee(e,t,ae,d),y=Aee(e),m=Q(()=>li(g.value)),x=Am(D),B=Zl({changeEvent:!0}),T=Q(()=>e.type==="textarea"||e.autogrow===!0),E=Q(()=>T.value===!0||["text","search","url","tel","password"].includes(e.type)),O=Q(()=>{const H={...B.splitAttrs.listeners.value,onInput:D,onPaste:U,onChange:G,onBlur:be,onFocus:Jt};return H.onCompositionstart=H.onCompositionupdate=H.onCompositionend=x,_.value===!0&&(H.onKeydown=b,H.onClick=w),e.autogrow===!0&&(H.onAnimationend=R),H}),F=Q(()=>{const H={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:p.value,...B.splitAttrs.attributes.value,id:B.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return T.value===!1&&(H.type=e.type),e.autogrow===!0&&(H.rows=1),H});Oe(()=>e.type,()=>{d.value&&(d.value.value=e.modelValue)}),Oe(()=>e.modelValue,H=>{if(_.value===!0){if(l===!0&&(l=!1,String(H)===r))return;C(H)}else g.value!==H&&(g.value=H,e.type==="number"&&i.hasOwnProperty("value")===!0&&(s===!0?s=!1:delete i.value));e.autogrow===!0&&bt(Z)}),Oe(()=>e.autogrow,H=>{H===!0?bt(Z):d.value!==null&&n.rows>0&&(d.value.style.height="auto")}),Oe(()=>e.dense,()=>{e.autogrow===!0&&bt(Z)});function V(){Mr(()=>{const H=document.activeElement;d.value!==null&&d.value!==H&&(H===null||H.id!==B.targetUid.value)&&d.value.focus({preventScroll:!0})})}function j(){var H;(H=d.value)==null||H.select()}function U(H){if(_.value===!0&&e.reverseFillMask!==!0){const pe=H.target;I(pe,pe.selectionStart,pe.selectionEnd)}t("paste",H)}function D(H){if(!H||!H.target)return;if(e.type==="file"){t("update:modelValue",H.target.files);return}const pe=H.target.value;if(H.target.qComposing===!0){i.value=pe;return}if(_.value===!0)C(pe,!1,H.inputType);else if(ae(pe),E.value===!0&&H.target===document.activeElement){const{selectionStart:Le,selectionEnd:Me}=H.target;Le!==void 0&&Me!==void 0&&bt(()=>{H.target===document.activeElement&&pe.indexOf(H.target.value)===0&&H.target.setSelectionRange(Le,Me)})}e.autogrow===!0&&Z()}function R(H){t("animationend",H),Z()}function ae(H,pe){c=()=>{u=null,e.type!=="number"&&i.hasOwnProperty("value")===!0&&delete i.value,e.modelValue!==H&&r!==H&&(r=H,pe===!0&&(l=!0),t("update:modelValue",H),bt(()=>{r===H&&(r=NaN)})),c=void 0},e.type==="number"&&(s=!0,i.value=H),e.debounce!==void 0?(u!==null&&clearTimeout(u),i.value=H,u=setTimeout(c,e.debounce)):c()}function Z(){requestAnimationFrame(()=>{const H=d.value;if(H!==null){const pe=H.parentNode.style,{scrollTop:Le}=H,{overflowY:Me,maxHeight:de}=o.platform.is.firefox===!0?{}:window.getComputedStyle(H),h=Me!==void 0&&Me!=="scroll";h===!0&&(H.style.overflowY="hidden"),pe.marginBottom=H.scrollHeight-1+"px",H.style.height="1px",H.style.height=H.scrollHeight+"px",h===!0&&(H.style.overflowY=parseInt(de,10)<H.scrollHeight?"auto":"hidden"),pe.marginBottom="",H.scrollTop=Le}})}function G(H){x(H),u!==null&&(clearTimeout(u),u=null),c==null||c(),t("change",H.target.value)}function be(H){H!==void 0&&Jt(H),u!==null&&(clearTimeout(u),u=null),c==null||c(),s=!1,l=!1,delete i.value,e.type!=="file"&&setTimeout(()=>{d.value!==null&&(d.value.value=g.value!==void 0?g.value:"")})}function $e(){return i.hasOwnProperty("value")===!0?i.value:g.value!==void 0?g.value:""}wt(()=>{be()}),Zt(()=>{e.autogrow===!0&&Z()}),Object.assign(B,{innerValue:g,fieldClass:Q(()=>`q-${T.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:Q(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:d,emitValue:ae,hasValue:m,floatingLabel:Q(()=>m.value===!0&&(e.type!=="number"||isNaN(g.value)===!1)||li(e.displayValue)),getControl:()=>L(T.value===!0?"textarea":"input",{ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...F.value,...O.value,...e.type!=="file"?{value:$e()}:y.value}),getShadowControl:()=>L("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(T.value===!0?"":" text-no-wrap")},[L("span",{class:"invisible"},$e()),L("span",e.shadowText)])});const J=Xl(B);return Object.assign(a,{focus:V,select:j,getNativeElement:()=>d.value}),Aa(a,"nativeEl",()=>d.value),J}});function Eee(){const e=ge(!Xn.value);return e.value===!1&&Zt(()=>{e.value=!0}),{isHydrated:e}}const Im=typeof ResizeObserver<"u",vd=Im===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},Dee=Fe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n=null,a,o={width:-1,height:-1};function i(l){l===!0||e.debounce===0||e.debounce==="0"?r():n===null&&(n=setTimeout(r,e.debounce))}function r(){if(n!==null&&(clearTimeout(n),n=null),a){const{offsetWidth:l,offsetHeight:u}=a;(l!==o.width||u!==o.height)&&(o={width:l,height:u},t("resize",o))}}const{proxy:s}=Je();if(s.trigger=i,Im===!0){let l;const u=c=>{a=s.$el.parentNode,a?(l=new ResizeObserver(i),l.observe(a),r()):c!==!0&&bt(()=>{u(!0)})};return Zt(()=>{u()}),wt(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():a&&l.unobserve(a))}),Yt}else{let l=function(){n!==null&&(clearTimeout(n),n=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",i,Tt.passive),d=void 0)},u=function(){l(),a!=null&&a.contentDocument&&(d=a.contentDocument.defaultView,d.addEventListener("resize",i,Tt.passive),r())};const{isHydrated:c}=Eee();let d;return Zt(()=>{bt(()=>{a=s.$el,a&&u()})}),wt(l),()=>{if(c.value===!0)return L("object",{class:"q--avoid-card-border",style:vd.style,tabindex:-1,type:"text/html",data:vd.url,"aria-hidden":"true",onLoad:u})}}}});let ci=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,ci=e.scrollLeft>=0,e.remove()}function Bee(e,t,n){const a=n===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const Pee=["left","center","right","justify"],ec=Fe({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Pee.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:n}){const{proxy:a}=Je(),{$q:o}=a,{registerTick:i}=ha(),{registerTick:r}=ha(),{registerTick:s}=ha(),{registerTimeout:l,removeTimeout:u}=Sa(),{registerTimeout:c,removeTimeout:d}=Sa(),p=ge(null),g=ge(null),_=ge(e.modelValue),I=ge(!1),C=ge(!0),b=ge(!1),w=ge(!1),y=[],m=ge(0),x=ge(!1);let B=null,T=null,E;const O=Q(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Bee(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),F=Q(()=>{const oe=m.value,ie=_.value;for(let me=0;me<oe;me++)if(y[me].name.value===ie)return!0;return!1}),V=Q(()=>`q-tabs__content--align-${I.value===!0?"left":w.value===!0?"justify":e.align}`),j=Q(()=>`q-tabs row no-wrap items-center q-tabs--${I.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),U=Q(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+V.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),D=Q(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),R=Q(()=>e.vertical!==!0&&o.lang.rtl===!0),ae=Q(()=>ci===!1&&R.value===!0);Oe(R,H),Oe(()=>e.modelValue,oe=>{Z({name:oe,setCurrent:!0,skipEmit:!0})}),Oe(()=>e.outsideArrows,G);function Z({name:oe,setCurrent:ie,skipEmit:me}){_.value!==oe&&(me!==!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",oe),(ie===!0||e["onUpdate:modelValue"]===void 0)&&($e(_.value,oe),_.value=oe))}function G(){i(()=>{p.value&&be({width:p.value.offsetWidth,height:p.value.offsetHeight})})}function be(oe){if(D.value===void 0||g.value===null)return;const ie=oe[D.value.container],me=Math.min(g.value[D.value.scroll],Array.prototype.reduce.call(g.value.children,(je,Ie)=>je+(Ie[D.value.content]||0),0)),Ce=ie>0&&me>ie;I.value=Ce,Ce===!0&&r(H),w.value=ie<parseInt(e.breakpoint,10)}function $e(oe,ie){const me=oe!=null&&oe!==""?y.find(je=>je.name.value===oe):null,Ce=ie!=null&&ie!==""?y.find(je=>je.name.value===ie):null;if(le===!0)le=!1;else if(me&&Ce){const je=me.tabIndicatorRef.value,Ie=Ce.tabIndicatorRef.value;B!==null&&(clearTimeout(B),B=null),je.style.transition="none",je.style.transform="none",Ie.style.transition="none",Ie.style.transform="none";const De=je.getBoundingClientRect(),Ue=Ie.getBoundingClientRect();Ie.style.transform=e.vertical===!0?`translate3d(0,${De.top-Ue.top}px,0) scale3d(1,${Ue.height?De.height/Ue.height:1},1)`:`translate3d(${De.left-Ue.left}px,0,0) scale3d(${Ue.width?De.width/Ue.width:1},1,1)`,s(()=>{B=setTimeout(()=>{B=null,Ie.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",Ie.style.transform="none"},70)})}Ce&&I.value===!0&&J(Ce.rootRef.value)}function J(oe){const{left:ie,width:me,top:Ce,height:je}=g.value.getBoundingClientRect(),Ie=oe.getBoundingClientRect();let De=e.vertical===!0?Ie.top-Ce:Ie.left-ie;if(De<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(De),H();return}De+=e.vertical===!0?Ie.height-je:Ie.width-me,De>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(De),H())}function H(){const oe=g.value;if(oe===null)return;const ie=oe.getBoundingClientRect(),me=e.vertical===!0?oe.scrollTop:Math.abs(oe.scrollLeft);R.value===!0?(C.value=Math.ceil(me+ie.width)<oe.scrollWidth-1,b.value=me>0):(C.value=me>0,b.value=e.vertical===!0?Math.ceil(me+ie.height)<oe.scrollHeight:Math.ceil(me+ie.width)<oe.scrollWidth)}function pe(oe){T!==null&&clearInterval(T),T=setInterval(()=>{q(oe)===!0&&de()},5)}function Le(){pe(ae.value===!0?Number.MAX_SAFE_INTEGER:0)}function Me(){pe(ae.value===!0?0:Number.MAX_SAFE_INTEGER)}function de(){T!==null&&(clearInterval(T),T=null)}function h(oe,ie){const me=Array.prototype.filter.call(g.value.children,Ue=>Ue===ie||Ue.matches&&Ue.matches(".q-tab.q-focusable")===!0),Ce=me.length;if(Ce===0)return;if(oe===36)return J(me[0]),me[0].focus(),!0;if(oe===35)return J(me[Ce-1]),me[Ce-1].focus(),!0;const je=oe===(e.vertical===!0?38:37),Ie=oe===(e.vertical===!0?40:39),De=je===!0?-1:Ie===!0?1:void 0;if(De!==void 0){const Ue=R.value===!0?-1:1,Ke=me.indexOf(ie)+De*Ue;return Ke>=0&&Ke<Ce&&(J(me[Ke]),me[Ke].focus({preventScroll:!0})),!0}}const k=Q(()=>ae.value===!0?{get:oe=>Math.abs(oe.scrollLeft),set:(oe,ie)=>{oe.scrollLeft=-ie}}:e.vertical===!0?{get:oe=>oe.scrollTop,set:(oe,ie)=>{oe.scrollTop=ie}}:{get:oe=>oe.scrollLeft,set:(oe,ie)=>{oe.scrollLeft=ie}});function q(oe){const ie=g.value,{get:me,set:Ce}=k.value;let je=!1,Ie=me(ie);const De=oe<Ie?-1:1;return Ie+=De*5,Ie<0?(je=!0,Ie=0):(De===-1&&Ie<=oe||De===1&&Ie>=oe)&&(je=!0,Ie=oe),Ce(ie,Ie),H(),je}function Y(oe,ie){for(const me in oe)if(oe[me]!==ie[me])return!1;return!0}function z(){let oe=null,ie={matchedLen:0,queryDiff:9999,hrefLen:0};const me=y.filter(De=>{var Ue;return((Ue=De.routeData)==null?void 0:Ue.hasRouterLink.value)===!0}),{hash:Ce,query:je}=a.$route,Ie=Object.keys(je).length;for(const De of me){const Ue=De.routeData.exact.value===!0;if(De.routeData[Ue===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Ke,query:re,matched:he,href:ne}=De.routeData.resolvedLink.value,ke=Object.keys(re).length;if(Ue===!0){if(Ke!==Ce||ke!==Ie||Y(je,re)===!1)continue;oe=De.name.value;break}if(Ke!==""&&Ke!==Ce||ke!==0&&Y(re,je)===!1)continue;const Qe={matchedLen:he.length,queryDiff:Ie-ke,hrefLen:ne.length-Ke.length};if(Qe.matchedLen>ie.matchedLen){oe=De.name.value,ie=Qe;continue}else if(Qe.matchedLen!==ie.matchedLen)continue;if(Qe.queryDiff<ie.queryDiff)oe=De.name.value,ie=Qe;else if(Qe.queryDiff!==ie.queryDiff)continue;Qe.hrefLen>ie.hrefLen&&(oe=De.name.value,ie=Qe)}if(oe===null&&y.some(De=>De.routeData===void 0&&De.name.value===_.value)===!0){le=!1;return}Z({name:oe,setCurrent:!0})}function A(oe){if(u(),x.value!==!0&&p.value!==null&&oe.target&&typeof oe.target.closest=="function"){const ie=oe.target.closest(".q-tab");ie&&p.value.contains(ie)===!0&&(x.value=!0,I.value===!0&&J(ie))}}function $(){l(()=>{x.value=!1},30)}function te(){Se.avoidRouteWatcher===!1?c(z):d()}function fe(){if(E===void 0){const oe=Oe(()=>a.$route.fullPath,te);E=()=>{oe(),E=void 0}}}function ue(oe){y.push(oe),m.value++,G(),oe.routeData===void 0||a.$route===void 0?c(()=>{if(I.value===!0){const ie=_.value,me=ie!=null&&ie!==""?y.find(Ce=>Ce.name.value===ie):null;me&&J(me.rootRef.value)}}):(fe(),oe.routeData.hasRouterLink.value===!0&&te())}function ce(oe){y.splice(y.indexOf(oe),1),m.value--,G(),E!==void 0&&oe.routeData!==void 0&&(y.every(ie=>ie.routeData===void 0)===!0&&E(),te())}const Se={currentModel:_,tabProps:O,hasFocus:x,hasActiveTab:F,registerTab:ue,unregisterTab:ce,verifyRouteModel:te,updateModel:Z,onKbdNavigate:h,avoidRouteWatcher:!1};xf(kp,Se);function ye(){B!==null&&clearTimeout(B),de(),E==null||E()}let ve,le;return wt(ye),Qa(()=>{ve=E!==void 0,ye()}),Qr(()=>{ve===!0&&(fe(),le=!0,te()),G()}),()=>L("div",{ref:p,class:j.value,role:"tablist",onFocusin:A,onFocusout:$},[L(Dee,{onResize:be}),L("div",{ref:g,class:U.value,onScroll:H},mt(t.default)),L(nt,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(C.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Le,onTouchstartPassive:Le,onMouseupPassive:de,onMouseleavePassive:de,onTouchendPassive:de}),L(nt,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(b.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Me,onTouchstartPassive:Me,onMouseupPassive:de,onMouseleavePassive:de,onTouchendPassive:de})])}});let Mee=0;const jee=["click","keydown"],$ee={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Mee++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ree(e,t,n,a){const o=vo(kp,us);if(o===us)return console.error("QTab/QRouteTab component needs to be child of QTabs"),us;const{proxy:i}=Je(),r=ge(null),s=ge(null),l=ge(null),u=Q(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),c=Q(()=>o.currentModel.value===e.name),d=Q(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(c.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),p=Q(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=Q(()=>e.disable===!0||o.hasFocus.value===!0||c.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function _(y,m){var x;if(m!==!0&&(y==null?void 0:y.qAvoidFocus)!==!0&&((x=r.value)==null||x.focus()),e.disable!==!0){o.updateModel({name:e.name}),n("click",y);return}}function I(y){Mn(y,[13,32])?_(y,!0):Pr(y)!==!0&&y.keyCode>=35&&y.keyCode<=40&&y.altKey!==!0&&y.metaKey!==!0&&o.onKbdNavigate(y.keyCode,i.$el)===!0&&rt(y),n("keydown",y)}function C(){const y=o.tabProps.value.narrowIndicator,m=[],x=L("div",{ref:l,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&m.push(L(nt,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&m.push(L("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&m.push(e.alertIcon!==void 0?L(nt,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):L("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),y===!0&&m.push(x);const B=[L("div",{class:"q-focus-helper",tabindex:-1,ref:r}),L("div",{class:p.value},dn(t.default,m))];return y===!1&&B.push(x),B}const b={name:Q(()=>e.name),rootRef:s,tabIndicatorRef:l,routeData:a};wt(()=>{o.unregisterTab(b)}),Zt(()=>{o.registerTab(b)});function w(y,m){const x={ref:s,class:d.value,tabindex:g.value,role:"tab","aria-selected":c.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:_,onKeydown:I,...m};return we(L(y,x,C()),[[Kt,u.value]])}return{renderTab:w,$tabs:o}}const tc=Fe({name:"QTab",props:$ee,emits:jee,setup(e,{slots:t,emit:n}){const{renderTab:a}=Ree(e,t,n);return()=>a("div")}}),Oee="component",Fee={docsUrl:"https://v2.quasar.dev/vue-components/icon"},Vee={size:{type:"String",desc:"Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",examples:["'16px'","'2rem'","'xs'","'md'"],category:"style"},tag:{type:"String",desc:"HTML tag to render, unless no icon is supplied or it's an svg icon",category:"content",default:"'i'",examples:["'div'","'i'"],required:!1},name:{type:"String",desc:"Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",examples:["'map'","'ion-add'","'img:https://cdn.quasar.dev/logo-v2/svg/logo.svg'","'img:path/to/some_image.png'"],category:"model"},color:{type:"String",tsType:"NamedColor",desc:"Color name for component from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},left:{type:"Boolean",desc:"Useful if icon is on the left side of something: applies a standard margin on the right side of Icon",category:"content"},right:{type:"Boolean",desc:"Useful if icon is on the right side of something: applies a standard margin on the left side of Icon",category:"content"}},Nee={default:{desc:"Suggestions: QTooltip or QMenu"}},zee={type:Oee,meta:Fee,props:Vee,slots:Nee},qm=[["search","action",859581],["home","action",793300],["account_circle","action",641729],["settings","action",607621],["done","action",527325],["info","action",464431],["close","navigation",430400],["check_circle","action",419522],["delete","action",386596],["person","social",377620],["menu","navigation",370920],["expand_more","navigation",356074],["add","content",350933],["visibility","action",329374],["shopping_cart","action",319349],["edit","image",313061],["favorite","action",283286],["email","communication",276632],["description","action",267345],["logout","action",259477],["arrow_back","navigation",249506],["favorite_border","action",228557],["chevron_right","navigation",224130],["local_shipping","maps",223405],["lock","action",223334],["location_on","communication",210762],["schedule","action",208045],["notifications","social",207712],["call","communication",191429],["language","action",189405],["file_download","file",183107],["arrow_forward_ios","navigation",176941],["cancel","navigation",176704],["groups","social",176571],["arrow_back_ios","navigation",175592],["help_outline","action",169919],["arrow_drop_down","navigation",164477],["verified","action",161941],["face","action",160976],["manage_accounts","action",159982],["play_arrow","av",157971],["place","maps",153592],["more_vert","navigation",150883],["thumb_up","action",150152],["add_circle_outline","content",149778],["filter_alt","action",147450],["dashboard","action",143560],["star","toggle",143336],["event","action",143177],["fingerprint","action",141621],["list","action",141323],["content_copy","content",140096],["people","social",137305],["check_circle_outline","action",136080],["visibility_off","action",134054],["add_circle","content",133955],["login","action",132225],["arrow_forward","navigation",130656],["send","content",130600],["warning","alert",129646],["chevron_left","navigation",129009],["check_box","toggle",128614],["calendar_today","action",128151],["share","social",126061],["highlight_off","action",124863],["navigate_next","image",121275],["phone","communication",119594],["help","action",118957],["paid","action",115732],["task_alt","action",114533],["question_answer","action",112316],["expand_less","navigation",110665],["check","navigation",110611],["error","alert",110603],["clear","content",109430],["article","action",107858],["date_range","action",107269],["open_in_new","action",104950],["photo_camera","image",104019],["check_box_outline_blank","toggle",103937],["more_horiz","navigation",103446],["image","image",100657],["school","social",100028],["refresh","navigation",99113],["shopping_bag","action",98844],["support_agent","notification",98712],["lightbulb","action",97947],["person_outline","social",97001],["credit_card","action",95696],["history","action",95314],["file_upload","file",94856],["perm_identity","action",94263],["trending_up","action",92677],["account_balance","action",92123],["delete_outline","action",91483],["attach_money","editor",90693],["person_add","social",89762],["save","content",88994],["public","social",88481],["verified_user","action",87426],["error_outline","alert",87010],["radio_button_unchecked","toggle",86414],["assignment","action",86264],["mail","content",86019],["fact_check","action",85987],["report_problem","action",84903],["link","content",83661],["emoji_events","social",81591],["star_rate","action",81137],["download","file",79832],["remove","content",79009],["play_circle_filled","av",78977],["calendar_month","action",78850],["business","communication",77933],["apps","navigation",75666],["arrow_right_alt","action",75418],["chat","communication",75386],["filter_list","content",75173],["menu_book","maps",74776],["folder","file",74642],["payments","navigation",74453],["account_balance_wallet","action",73570],["autorenew","action",73518],["build","action",72992],["keyboard_arrow_down","hardware",72633],["view_list","action",71600],["tune","image",70169],["print","action",70103],["store","action",70067],["work","action",70065],["analytics","action",69578],["delete_forever","action",69533],["videocam","av",69308],["play_circle","av",68699],["radio_button_checked","toggle",68506],["mail_outline","communication",68398],["phone_iphone","hardware",68236],["arrow_upward","navigation",66840],["today","action",66245],["admin_panel_settings","action",66146],["grid_view","file",65550],["picture_as_pdf","image",65255],["east","navigation",64723],["group","social",64180],["mic","av",64120],["lock_open","action",63810],["watch_later","action",63087],["receipt_long","image",62716],["volume_up","av",62577],["inventory_2","content",62286],["grade","action",62180],["local_offer","maps",61615],["update","action",61566],["circle","image",61524],["badge","maps",61053],["inventory","content",61036],["edit_note","editor",60584],["savings","action",60478],["map","maps",60098],["code","action",60049],["room","action",59933],["light_mode","device",59343],["add_shopping_cart","action",59192],["contact_support","action",58567],["category","maps",58432],["insights","content",58355],["receipt","action",57894],["campaign","navigation",57277],["warning_amber","alert",57188],["power_settings_new","action",57103],["format_list_bulleted","editor",56311],["star_border","toggle",55672],["pause","av",55616],["done_all","action",55286],["restart_alt","device",55243],["remove_circle_outline","content",54585],["pets","action",54315],["arrow_back_ios_new","navigation",54204],["wifi","notification",53802],["list_alt","communication",53610],["engineering","social",53370],["storefront","places",53040],["mode_edit","editor",52331],["bolt","content",52320],["notifications_active","social",52291],["toggle_on","toggle",52233],["construction","social",52046],["dark_mode","device",51777],["sort","content",51744],["arrow_downward","navigation",51149],["qr_code_scanner","communication",51095],["explore","action",50868],["attach_file","editor",50583],["bookmark","action",50396],["account_box","action",50184],["monetization_on","editor",49749],["note_add","action",49554],["vpn_key","communication",49322],["timer","image",49068],["pending_actions","action",48563],["reorder","action",48295],["upload_file","file",48256],["arrow_right","navigation",48221],["account_tree","notification",47857],["bookmark_border","action",47575],["flag","content",47224],["apartment","places",46983],["smartphone","hardware",46964],["sync","notification",46675],["shopping_basket","action",46617],["payment","action",46500],["auto_awesome","image",46427],["people_alt","social",46296],["restaurant","maps",45980],["play_circle_outline","av",45622],["reply","content",45492],["task","device",45442],["launch","action",45220],["manage_search","search",45184],["touch_app","action",44755],["add_box","content",44745],["supervisor_account","action",44640],["drag_indicator","action",44591],["pending","action",44590],["menu_open","navigation",44395],["directions_car","maps",44128],["push_pin","content",44068],["zoom_in","action",43861],["priority_high","notification",43733],["group_add","social",43695],["local_fire_department","maps",43552],["assessment","action",43475],["remove_circle","content",43456],["leaderboard","action",43296],["block","content",43263],["summarize","device",42637],["thumb_up_off_alt","action",42634],["event_available","notification",42231],["chat_bubble_outline","communication",42095],["auto_stories","image",41486],["feed","search",41287],["open_in_full","action",41142],["calculate","content",41136],["post_add","editor",40723],["cloud_upload","file",40630],["bar_chart","editor",40133],["alternate_email","communication",39865],["assignment_ind","action",39706],["create","content",39418],["preview","action",39332],["done_outline","action",39297],["password","device",39283],["psychology","social",39198],["checklist","editor",39134],["exit_to_app","action",39113],["published_with_changes","action",38945],["collections","image",38741],["volunteer_activism","maps",38700],["card_giftcard","action",38194],["star_outline","toggle",38163],["sell","device",37505],["navigate_before","image",37473],["undo","content",37456],["tips_and_updates","action",37175],["thumb_up_alt","social",37084],["view_in_ar","action",36878],["add_a_photo","image",36826],["fullscreen","navigation",36779],["health_and_safety","social",36287],["keyboard_arrow_right","hardware",36112],["arrow_drop_up","navigation",35878],["water_drop","social",35818],["feedback","action",35780],["label","action",35717],["swap_horiz","action",35656],["computer","hardware",35600],["unfold_more","navigation",35372],["travel_explore","social",35355],["palette","image",35165],["assignment_turned_in","action",34964],["timeline","action",34934],["stars","action",34824],["replay","av",34793],["sync_alt","action",34682],["notifications_none","social",34537],["library_books","av",34509],["dns","action",34436],["how_to_reg","content",34372],["double_arrow","navigation",34310],["flight_takeoff","action",34253],["skip_next","av",34234],["volume_off","av",34233],["signal_cellular_alt","device",34207],["forum","communication",34180],["work_outline","action",34133],["remove_red_eye","image",33966],["emoji_emotions","social",33754],["devices","device",33728],["security","hardware",33714],["folder_open","file",33663],["chat_bubble","communication",33630],["fiber_manual_record","av",33555],["content_paste","content",33503],["cloud","file",33490],["maps_home_work","navigation",33061],["text_snippet","file",33037],["my_location","maps",32886],["alarm","action",32801],["sports_esports","social",32686],["request_quote","file",32402],["workspace_premium","social",32395],["settings_suggest","device",32130],["speed","av",31998],["rocket_launch","action",31993],["cached","action",31985],["textsms","communication",31943],["toggle_off","toggle",31909],["space_dashboard","action",31782],["question_mark","action",31619],["stop","av",31504],["report","content",31474],["sentiment_very_satisfied","social",31462],["book","action",31455],["bug_report","action",31445],["contact_page","action",31416],["translate","action",31355],["gavel","action",31261],["edit_calendar","action",31164],["file_copy","content",31029],["cloud_download","file",31022],["person_search","communication",30958],["pan_tool","action",30941],["quiz","device",30917],["sentiment_satisfied_alt","communication",30576],["supervised_user_circle","action",30538],["qr_code","communication",30476],["contact_mail","communication",30449],["desktop_windows","hardware",30383],["minimize","action",30369],["location_city","social",30065],["extension","action",29898],["widgets","device",29761],["flight","maps",29442],["ios_share","social",29408],["precision_manufacturing","social",29252],["fitness_center","places",29052],["qr_code_2","communication",28953],["music_note","image",28941],["local_mall","maps",28920],["android","action",28426],["backspace","content",28212],["near_me","maps",28206],["record_voice_over","action",28123],["smart_display","hardware",28050],["drag_handle","editor",28026],["storage","device",28010],["accessibility","action",27963],["shield","content",27953],["get_app","action",27935],["insert_drive_file","editor",27874],["message","communication",27823],["add_task","action",27798],["show_chart","editor",27475],["hourglass_empty","action",27457],["science","social",27449],["handyman","maps",27439],["west","navigation",27424],["help_center","action",27196],["drive_file_rename_outline","file",27178],["person_add_alt","social",27040],["sentiment_satisfied","social",27027],["military_tech","social",27010],["directions_run","maps",26891],["trending_flat","action",26771],["rule","action",26506],["emoji_objects","social",26300],["movie","av",26233],["thumb_down","action",26119],["accessibility_new","action",26070],["confirmation_number","notification",25631],["event_note","notification",25568],["comment","communication",25457],["format_quote","editor",25417],["ads_click","action",25401],["contacts","communication",25352],["swap_vert","action",25193],["business_center","places",25156],["upload","file",25141],["archive","content",25074],["add_photo_alternate","image",25001],["settings_applications","action",24908],["history_edu","social",24891],["skip_previous","av",24887],["query_stats","editor",24807],["restaurant_menu","maps",24728],["save_alt","content",24696],["source","action",24696],["sticky_note_2","action",24638],["find_in_page","action",24625],["cake","social",24427],["credit_score","device",24404],["arrow_circle_right","action",24373],["dashboard_customize","action",24370],["handshake","social",24205],["new_releases","av",24203],["playlist_add","av",24100],["announcement","action",24070],["redeem","action",23967],["loyalty","action",23898],["key","communication",23870],["spa","places",23864],["support","action",23770],["wb_sunny","image",23695],["layers","maps",23694],["attachment","file",23670],["close_fullscreen","action",23642],["thermostat","device",23600],["flutter_dash","action",23514],["format_list_numbered","editor",23296],["restore","action",23247],["expand_circle_down","navigation",23175],["phone_android","hardware",23147],["currency_exchange","action",23106],["view_headline","action",22916],["keyboard_backspace","hardware",22913],["medical_services","maps",22864],["dangerous","action",22676],["policy","content",22646],["directions_walk","maps",22629],["sms","notification",22418],["sentiment_dissatisfied","social",22201],["keyboard_arrow_up","hardware",22184],["table_chart","editor",21794],["sensors","action",21695],["border_color","editor",21645],["euro_symbol","action",21627],["keyboard_double_arrow_right","hardware",21627],["meeting_room","places",21464],["keyboard_return","hardware",21379],["sentiment_very_dissatisfied","social",21363],["compare_arrows","action",21336],["table_view","action",21257],["brush","image",21250],["gps_fixed","device",21243],["group_work","action",21204],["change_circle","content",21194],["battery_full","device",21133],["notification_important","alert",21043],["arrow_left","navigation",20926],["celebration","maps",20911],["house","places",20890],["local_hospital","maps",20873],["disabled_by_default","action",20857],["south","navigation",20709],["smart_toy","hardware",20630],["tag","content",20622],["loop","av",20593],["import_contacts","communication",20518],["subject","action",20507],["laptop","hardware",20384],["lunch_dining","maps",20376],["privacy_tip","action",20243],["app_registration","communication",20147],["equalizer","av",19987],["local_library","maps",19896],["euro","image",19895],["corporate_fare","places",19831],["price_check","device",19804],["flash_on","image",19743],["ac_unit","places",19679],["nightlight_round","action",19643],["auto_fix_high","image",19623],["keyboard_arrow_left","hardware",19584],["pin_drop","maps",19568],["arrow_circle_up","action",19492],["bookmarks","action",19416],["input","action",19416],["newspaper","file",19409],["https","action",19376],["live_tv","notification",19370],["contact_phone","communication",19354],["track_changes","action",19327],["toc","action",19239],["view_module","action",19234],["api","action",19193],["park","maps",19159],["import_export","communication",19149],["self_improvement","social",19144],["emoji_people","social",19139],["pie_chart","editor",19045],["medication","device",18962],["download_for_offline","file",18929],["grading","action",18925],["looks_one","image",18823],["fast_forward","av",18795],["query_builder","action",18765],["copyright","action",18689],["live_help","communication",18670],["perm_media","action",18662],["pin","device",18653],["build_circle","action",18577],["forward_to_inbox","communication",18550],["person_remove","social",18536],["local_atm","maps",18463],["directions_bus","maps",18459],["hourglass_bottom","communication",18342],["coronavirus","social",18340],["redo","content",18319],["north_east","navigation",18269],["memory","hardware",18248],["web","av",18204],["gpp_good","device",18172],["forward","content",18097],["local_activity","maps",18010],["design_services","maps",17964],["star_half","toggle",17876],["playlist_add_check","av",17863],["hourglass_top","communication",17849],["north","navigation",17822],["person_pin","maps",17791],["video_library","av",17762],["perm_contact_calendar","action",17710],["zoom_out","action",17649],["headphones","hardware",17553],["settings_phone","action",17545],["backup","action",17456],["poll","social",17430],["ondemand_video","notification",17394],["circle_notifications","action",17350],["content_cut","content",17333],["point_of_sale","hardware",17315],["first_page","navigation",17300],["local_cafe","maps",17258],["open_with","action",17251],["home_work","navigation",17241],["rate_review","maps",17208],["cottage","places",17178],["whatshot","social",17162],["keyboard","hardware",17105],["delivery_dining","maps",16989],["rss_feed","communication",16967],["control_point","image",16861],["headset_mic","hardware",16840],["notes","editor",16837],["perm_phone_msg","action",16790],["style","image",16763],["label_important","action",16716],["create_new_folder","file",16708],["speaker_notes","action",16642],["wysiwyg","action",16630],["card_membership","action",16600],["arrow_circle_down","action",16597],["indeterminate_check_box","toggle",16564],["battery_charging_full","device",16542],["file_present","action",16476],["outlined_flag","content",16461],["sports_soccer","social",16412],["mark_email_read","communication",16373],["fullscreen_exit","navigation",16365],["adjust","image",16327],["book_online","action",16301],["price_change","device",16214],["percent","action",16142],["library_add","av",16131],["fmd_good","device",16128],["domain","social",16047],["pageview","action",16038],["local_police","maps",16013],["pause_circle","av",15941],["tv","hardware",15913],["inbox","content",15832],["straighten","image",15811],["recommend","social",15750],["stop_circle","av",15730],["chair","search",15709],["reviews","device",15616],["drive_eta","notification",15612],["trending_down","action",15578],["link_off","content",15569],["fastfood","maps",15513],["mic_off","av",15511],["people_outline","social",15496],["checklist_rtl","editor",15486],["directions_bike","maps",15486],["change_history","action",15480],["mood","social",15473],["upgrade","action",15439],["integration_instructions","action",15413],["3d_rotation","action",15316],["directions_car_filled","maps",15310],["home_repair_service","maps",15237],["tungsten","device",15234],["cleaning_services","maps",15169],["recycling","social",15074],["text_fields","editor",15068],["table_rows","editor",15006],["zoom_out_map","maps",14985],["subscriptions","av",14951],["format_bold","editor",14910],["repeat","av",14900],["ballot","content",14895],["wifi_off","notification",14856],["hub","communication",14835],["publish","editor",14830],["bed","search",14826],["hotel","maps",14814],["accessible","action",14801],["family_restroom","places",14798],["biotech","content",14794],["auto_graph","editor",14755],["volume_mute","av",14752],["drafts","content",14724],["arrow_circle_left","action",14723],["arrow_drop_down_circle","navigation",14697],["female","social",14659],["class","action",14648],["last_page","navigation",14630],["air","device",14624],["video_call","av",14609],["swipe","action",14577],["person_off","social",14571],["g_translate","action",14562],["title","editor",14541],["settings_backup_restore","action",14412],["offline_bolt","action",14402],["expand","action",14400],["insert_emoticon","editor",14374],["settings_accessibility","action",14356],["local_grocery_store","maps",14305],["photo_library","image",14305],["keyboard_double_arrow_left","hardware",14275],["production_quantity_limits","action",14262],["downloading","file",14250],["report_gmailerrorred","content",14157],["local_phone","maps",14156],["not_interested","av",14150],["event_busy","notification",14136],["note_alt","device",14069],["draw","editor",14052],["insert_chart_outlined","editor",14012],["miscellaneous_services","maps",13930],["camera","image",13929],["view_column","action",13890],["camera_alt","image",13829],["insert_photo","editor",13801],["aspect_ratio","action",13697],["unfold_less","navigation",13627],["checkroom","places",13618],["model_training","action",13604],["shuffle","av",13603],["monitor_heart","device",13506],["donut_large","action",13426],["diamond","maps",13410],["male","social",13369],["access_time","device",13345],["delete_sweep","content",13307],["bluetooth","device",13268],["portrait","image",13249],["segment","action",13180],["other_houses","places",13141],["navigation","maps",13101],["graphic_eq","device",13094],["folder_shared","file",13069],["document_scanner","communication",13017],["train","maps",12968],["audiotrack","image",12966],["local_gas_station","maps",12957],["mode","editor",12940],["alarm_on","action",12931],["person_add_alt_1","social",12930],["read_more","communication",12920],["schedule_send","action",12769],["factory","maps",12719],["calendar_view_month","action",12718],["more_time","communication",12638],["dvr","device",12612],["do_not_disturb_on","notification",12608],["stacked_bar_chart","content",12554],["maximize","action",12505],["cloud_done","file",12479],["local_florist","maps",12472],["square_foot","content",12431],["settings_ethernet","action",12419],["mode_comment","editor",12355],["local_parking","maps",12353],["thumbs_up_down","action",12353],["bookmark_add","action",12347],["markunread","content",12244],["subdirectory_arrow_right","navigation",12226],["person_pin_circle","maps",12219],["theaters","action",12195],["sort_by_alpha","av",12159],["view_agenda","action",12145],["thumb_down_off_alt","action",12129],["keyboard_double_arrow_down","hardware",12075],["all_inclusive","places",12012],["mark_email_unread","communication",12e3],["connect_without_contact","social",11962],["functions","editor",11950],["grass","places",11947],["sentiment_neutral","social",11917],["thumb_down_alt","social",11873],["back_hand","social",11852],["real_estate_agent","social",11841],["wc","notification",11841],["call_end","communication",11836],["airport_shuttle","places",11835],["cloud_queue","file",11827],["waving_hand","social",11802],["money","maps",11639],["important_devices","action",11631],["hiking","social",11602],["architecture","social",11576],["podcasts","search",11541],["local_post_office","maps",11526],["notifications_off","social",11502],["unpublished","action",11487],["clear_all","communication",11484],["color_lens","image",11465],["two_wheeler","maps",11454],["workspaces","file",11437],["directions","maps",11415],["system_update_alt","action",11386],["shopping_cart_checkout","action",11372],["insert_link","editor",11296],["open_in_browser","action",11279],["opacity","action",11233],["commute","action",11219],["sports_score","device",11208],["nightlight","device",11206],["route","maps",11199],["fast_rewind","av",11192],["warehouse","maps",11185],["coffee","search",11179],["mouse","hardware",11163],["grid_on","image",11126],["luggage","social",11119],["no_accounts","action",11099],["child_care","places",11068],["history_toggle_off","action",11057],["mode_edit_outline","editor",11053],["invert_colors","action",11020],["horizontal_rule","editor",11011],["addchart","action",10988],["masks","social",10982],["add_business","maps",10977],["timelapse","image",10954],["rotate_right","image",10937],["mic_none","av",10927],["currency_rupee","image",10851],["insert_invitation","editor",10819],["front_hand","social",10805],["crop_free","image",10792],["library_music","av",10783],["video_camera_front","image",10775],["electrical_services","maps",10773],["view_week","action",10760],["developer_board","hardware",10737],["topic","file",10682],["vaccines","social",10649],["traffic","maps",10644],["keyboard_voice","hardware",10616],["format_align_left","editor",10612],["shower","search",10590],["directions_boat","maps",10564],["tour","action",10451],["balance","action",10377],["beach_access","places",10336],["youtube_searched_for","action",10324],["format_italic","editor",10322],["yard","search",10317],["format_color_fill","editor",10311],["start","hardware",10297],["filter_alt_off","action",10293],["more","notification",10278],["add_link","content",10236],["search_off","action",10191],["hide_source","action",10143],["approval","file",10129],["local_bar","maps",10119],["diversity_3","social",10113],["panorama_fish_eye","image",10110],["landscape","image",10100],["power","notification",10087],["volume_down","av",10084],["slideshow","image",10062],["alt_route","maps",10061],["emergency","maps",10038],["water","device",10013],["beenhere","maps",10010],["agriculture","maps",10009],["not_started","action",9998],["bookmark_added","action",9957],["star_purple500","toggle",9933],["router","hardware",9932],["add_comment","editor",9923],["looks_two","image",9914],["copy_all","content",9888],["plagiarism","action",9865],["assignment_return","action",9853],["dialpad","communication",9850],["shop","action",9842],["mark_as_unread","action",9840],["download_done","file",9838],["crop_square","image",9833],["compost","social",9820],["mood_bad","social",9804],["hotel_class","action",9794],["pool","places",9790],["dynamic_feed","content",9785],["settings_input_antenna","action",9745],["collections_bookmark","image",9732],["flight_land","action",9728],["recent_actors","av",9714],["stream","content",9714],["videocam_off","av",9691],["lens","image",9690],["turned_in","action",9688],["cloud_off","file",9650],["move_to_inbox","content",9641],["assignment_late","action",9608],["where_to_vote","content",9565],["videogame_asset","hardware",9551],["pedal_bike","maps",9538],["emoji_nature","social",9492],["360","maps",9451],["switch_account","social",9450],["do_not_disturb","notification",9385],["share_location","device",9366],["rocket","action",9315],["casino","places",9299],["gpp_maybe","device",9297],["contactless","action",9263],["file_open","file",9261],["donut_small","action",9251],["content_paste_search","content",9246],["kitchen","places",9229],["insert_chart","editor",9174],["saved_search","action",9136],["keyboard_double_arrow_up","hardware",9131],["highlight_alt","action",9125],["waves","content",9116],["library_add_check","av",9093],["settings_input_component","action",9077],["web_asset","av",9041],["all_inbox","action",9013],["sync_problem","notification",9013],["liquor","maps",8990],["view_carousel","action",8983],["hearing","av",8975],["view_quilt","action",8975],["terminal","action",8967],["holiday_village","places",8965],["phone_enabled","communication",8923],["anchor","action",8897],["settings_remote","action",8873],["queue_music","av",8848],["interests","social",8826],["hourglass_full","action",8818],["nights_stay","social",8806],["fit_screen","action",8790],["mediation","action",8789],["edit_off","action",8765],["drive_file_move","file",8742],["linear_scale","editor",8740],["cable","device",8739],["looks_3","image",8701],["remove_shopping_cart","action",8645],["pause_circle_outline","av",8621],["turned_in_not","action",8618],["flaky","action",8599],["stacked_line_chart","editor",8598],["moving","maps",8577],["king_bed","social",8566],["pause_circle_filled","av",8558],["fiber_new","av",8551],["unarchive","content",8516],["device_hub","hardware",8500],["location_searching","device",8481],["lock_reset","action",8477],["cast_for_education","hardware",8414],["note","av",8410],["catching_pokemon","social",8407],["subtitles","av",8405],["swap_horizontal_circle","action",8404],["time_to_leave","notification",8402],["format_size","editor",8391],["toll","action",8390],["local_airport","maps",8357],["view_sidebar","action",8351],["compare","image",8348],["money_off","editor",8346],["lock_clock","action",8328],["discount","device",8320],["3p","communication",8316],["cameraswitch","device",8301],["cancel_presentation","communication",8292],["assistant","image",8277],["mark_chat_unread","communication",8260],["filter_vintage","image",8258],["data_exploration","action",8252],["sailing","maps",8251],["room_service","places",8240],["add_location_alt","maps",8222],["vertical_align_bottom","editor",8192],["reply_all","content",8184],["insert_comment","editor",8162],["vertical_split","action",8146],["bubble_chart","editor",8130],["album","av",8122],["av_timer","av",8120],["format_underlined","editor",8115],["select_all","content",8100],["device_thermostat","device",8090],["roofing","places",8087],["settings_voice","action",8060],["airplane_ticket","device",8059],["shortcut","device",8059],["radar","device",8048],["online_prediction","action",8039],["event_seat","action",8001],["image_search","image",7991],["headset","hardware",7986],["schema","editor",7984],["drive_folder_upload","file",7952],["filter_drama","image",7939],["height","editor",7927],["window","search",7927],["call_made","communication",7898],["next_plan","action",7894],["local_dining","maps",7870],["sports_basketball","social",7840],["wallpaper","device",7833],["laptop_mac","hardware",7813],["healing","image",7791],["token","action",7779],["restore_from_trash","action",7770],["maps_ugc","maps",7741],["do_disturb_on","notification",7736],["gpp_bad","device",7736],["local_taxi","maps",7710],["pregnant_woman","action",7707],["file_download_done","file",7705],["cloud_sync","file",7689],["center_focus_strong","image",7688],["playlist_play","av",7682],["rotate_left","image",7667],["request_page","action",7655],["camera_enhance","action",7649],["trip_origin","maps",7645],["data_usage","device",7623],["local_laundry_service","maps",7622],["low_priority","content",7604],["notification_add","social",7591],["vertical_align_top","editor",7575],["cast","hardware",7559],["room_preferences","places",7558],["dynamic_form","action",7541],["face_retouching_natural","image",7532],["save_as","content",7518],["directions_bus_filled","maps",7516],["view_stream","action",7503],["queue","av",7498],["tab","action",7463],["star_border_purple500","toggle",7460],["markunread_mailbox","action",7459],["blur_on","image",7457],["auto_awesome_motion","image",7445],["calendar_view_week","action",7444],["replay_circle_filled","av",7442],["ramen_dining","maps",7427],["games","av",7423],["local_drink","maps",7418],["radio","av",7417],["cruelty_free","social",7401],["forest","maps",7383],["local_printshop","maps",7374],["monitor_weight","device",7374],["hail","maps",7372],["crop","image",7360],["wb_incandescent","image",7336],["theater_comedy","maps",7329],["screen_share","communication",7284],["electric_bolt","home",7273],["vpn_lock","notification",7259],["sensor_door","home",7249],["density_medium","action",7224],["smart_button","action",7211],["square","editor",7198],["add_alert","alert",7188],["signal_wifi_4_bar","device",7186],["sports_bar","places",7167],["remove_done","action",7166],["call_split","communication",7162],["accessible_forward","action",7142],["man","social",7131],["text_format","content",7119],["add_card","action",7079],["branding_watermark","av",7064],["watch","hardware",7061],["settings_power","action",7060],["broken_image","image",7047],["local_pizza","maps",7026],["work_history","action",6984],["desktop_mac","hardware",6957],["auto_delete","alert",6944],["developer_mode","device",6943],["free_breakfast","places",6938],["format_align_center","editor",6934],["cases","image",6903],["add_to_drive","action",6887],["flare","image",6885],["diversity_1","social",6879],["sports_kabaddi","social",6852],["try","action",6840],["escalator_warning","places",6823],["forward_10","av",6806],["wb_cloudy","image",6793],["assured_workload","action",6780],["outbox","action",6771],["add_location","maps",6770],["sports","social",6768],["wallet","social",6762],["not_listed_location","maps",6749],["filter_none","image",6745],["running_with_errors","notification",6742],["tablet_mac","hardware",6736],["font_download","content",6735],["area_chart","editor",6724],["mode_night","device",6720],["card_travel","action",6713],["bathtub","places",6711],["colorize","image",6694],["reduce_capacity","social",6678],["transfer_within_a_station","maps",6678],["emoji_food_beverage","social",6670],["devices_other","hardware",6669],["compress","action",6662],["auto_fix_normal","image",6656],["sick","social",6640],["fax","action",6629],["wifi_tethering","device",6628],["child_friendly","places",6604],["123","action",6603],["dehaze","image",6603],["offline_pin","action",6602],["dinner_dining","maps",6601],["folder_special","notification",6599],["weekend","content",6591],["bakery_dining","maps",6570],["heart_broken","social",6570],["format_paint","editor",6566],["crop_original","image",6551],["bloodtype","device",6537],["filter_center_focus","image",6524],["enhanced_encryption","notification",6509],["emoji_symbols","social",6508],["legend_toggle","navigation",6507],["assignment_returned","action",6502],["find_replace","action",6500],["cookie","social",6497],["replay_10","av",6485],["lan","device",6483],["emoji_transportation","social",6479],["battery_std","device",6468],["light","search",6416],["door_front","search",6396],["generating_tokens","action",6386],["how_to_vote","content",6382],["chrome_reader_mode","action",6381],["access_time_filled","device",6371],["brightness_4","image",6341],["calendar_view_day","action",6330],["add_reaction","social",6314],["rowing","action",6304],["pan_tool_alt","action",6300],["photo","image",6284],["free_cancellation","action",6270],["nature_people","image",6259],["sports_tennis","social",6250],["garage","search",6246],["wine_bar","maps",6245],["outlet","action",6244],["http","action",6226],["terrain","maps",6226],["new_label","action",6217],["attach_email","file",6194],["personal_injury","social",6194],["south_east","navigation",6170],["event_repeat","action",6164],["multiple_stop","maps",6151],["woman","social",6142],["noise_control_off","action",6130],["backup_table","action",6124],["gesture","content",6118],["add_moderator","social",6110],["upcoming","content",6106],["format_color_text","editor",6090],["scale","social",6073],["elderly","social",6068],["settings_brightness","action",6063],["restore_page","action",6049],["spellcheck","action",6026],["format_align_right","editor",6024],["display_settings","action",6015],["flash_off","image",6006],["credit_card_off","action",5995],["unsubscribe","communication",5986],["alarm_add","action",5976],["co_present","communication",5976],["app_settings_alt","navigation",5967],["foundation","places",5952],["data_object","editor",5950],["scatter_plot","editor",5943],["keyboard_tab","hardware",5915],["transgender","social",5906],["wifi_protected_setup","action",5899],["view_timeline","action",5897],["disabled_visible","action",5891],["outdoor_grill","social",5886],["manage_history","action",5877],["brightness_1","image",5828],["play_for_work","action",5827],["tag_faces","image",5817],["auto_awesome_mosaic","image",5795],["subdirectory_arrow_left","navigation",5785],["assistant_direction","navigation",5764],["deck","social",5761],["signal_cellular_4_bar","device",5758],["format_list_numbered_rtl","editor",5743],["laptop_chromebook","hardware",5735],["takeout_dining","maps",5734],["monitor","hardware",5727],["store_mall_directory","maps",5724],["attribution","content",5711],["follow_the_signs","social",5700],["grain","image",5687],["brightness_6","image",5675],["settings_overscan","action",5665],["outbound","action",5652],["food_bank","places",5637],["phonelink","hardware",5624],["brightness_5","image",5622],["do_disturb","notification",5622],["fmd_bad","device",5620],["plus_one","social",5614],["troubleshoot","action",5593],["details","image",5576],["flip_camera_android","image",5574],["social_distance","social",5569],["view_comfy","image",5564],["flashlight_on","device",5555],["switch_access_shortcut","action",5551],["icecream","maps",5546],["closed_caption","av",5540],["highlight","editor",5540],["webhook","action",5527],["domain_verification","communication",5524],["splitscreen","device",5524],["museum","maps",5502],["fireplace","social",5483],["flip","image",5477],["satellite_alt","action",5472],["north_west","navigation",5461],["bedtime","image",5445],["cancel_schedule_send","action",5440],["gite","places",5436],["image_not_supported","image",5422],["swap_vertical_circle","action",5388],["network_wifi","device",5381],["format_align_justify","editor",5378],["nightlife","maps",5368],["local_pharmacy","maps",5366],["hardware","maps",5362],["sms_failed","notification",5351],["gif","action",5339],["network_check","notification",5336],["phone_callback","notification",5333],["airplanemode_active","device",5332],["sim_card_download","device",5329],["loupe","image",5328],["villa","places",5321],["dining","search",5320],["video_settings","av",5318],["mark_chat_read","communication",5317],["switch_left","navigation",5315],["present_to_all","communication",5312],["pix","social",5309],["waterfall_chart","navigation",5299],["groups_2","social",5294],["settings_input_composite","action",5284],["high_quality","av",5276],["psychology_alt","social",5257],["quickreply","action",5252],["night_shelter","places",5234],["departure_board","maps",5212],["clean_hands","social",5199],["view_day","action",5198],["mobile_friendly","device",5193],["comment_bank","action",5173],["set_meal","maps",5171],["rule_folder","file",5159],["add_road","maps",5152],["filter_1","image",5152],["add_ic_call","communication",5144],["ev_station","maps",5143],["folder_zip","file",5140],["folder_copy","file",5133],["flag_circle","content",5124],["usb","device",5106],["flatware","search",5095],["line_weight","action",5090],["output","action",5086],["piano","social",5071],["adb","notification",5020],["golf_course","places",5020],["sports_motorsports","social",5014],["hive","social",5006],["phonelink_ring","communication",5003],["flip_camera_ios","image",4997],["add_chart","editor",4981],["horizontal_split","action",4979],["content_paste_go","content",4964],["sanitizer","social",4955],["surfing","social",4952],["send_to_mobile","device",4928],["merge_type","editor",4926],["featured_play_list","av",4925],["power_off","notification",4922],["medical_information","maps",4919],["phone_forwarded","notification",4912],["call_received","communication",4908],["batch_prediction","action",4876],["picture_in_picture","action",4866],["electric_car","maps",4863],["add_to_photos","image",4850],["polymer","action",4832],["battery_alert","device",4828],["speaker","hardware",4814],["looks_4","image",4796],["festival","maps",4795],["html","action",4792],["numbers","editor",4778],["system_update","notification",4775],["stay_current_portrait","communication",4771],["sports_handball","social",4768],["local_see","maps",4765],["send_and_archive","action",4737],["sports_baseball","social",4733],["movie_creation","image",4732],["code_off","action",4705],["personal_video","notification",4693],["plumbing","maps",4691],["playlist_add_check_circle","av",4686],["bookmark_remove","action",4677],["lens_blur","device",4659],["animation","image",4658],["center_focus_weak","image",4629],["toys","hardware",4627],["energy_savings_leaf","home",4608],["panorama","image",4591],["settings_bluetooth","action",4586],["car_rental","maps",4579],["cloud_circle","file",4576],["movie_filter","image",4572],["coffee_maker","search",4571],["edit_notifications","social",4568],["screen_search_desktop","device",4558],["gamepad","hardware",4557],["cell_tower","communication",4510],["no_photography","places",4510],["playlist_remove","av",4510],["south_west","navigation",4497],["stairs","places",4487],["zoom_in_map","maps",4480],["format_shapes","editor",4472],["attractions","maps",4454],["control_camera","av",4454],["layers_clear","maps",4446],["sim_card","hardware",4438],["signal_wifi_statusbar_4_bar","device",4429],["screen_rotation","device",4422],["diversity_2","social",4417],["table_restaurant","search",4402],["phonelink_lock","communication",4391],["currency_yen","image",4339],["currency_bitcoin","image",4338],["edit_location","maps",4327],["signal_wifi_statusbar_connected_no_internet_4","device",4324],["difference","file",4319],["blender","search",4317],["flip_to_front","action",4308],["backpack","places",4305],["sports_volleyball","social",4294],["shop_two","action",4287],["crop_din","image",4283],["pest_control","maps",4278],["pivot_table_chart","navigation",4266],["microwave","places",4246],["phone_disabled","communication",4223],["gps_not_fixed","device",4220],["filter_list_off","content",4188],["keyboard_alt","hardware",4188],["church","maps",4184],["view_compact","image",4182],["filter","image",4178],["incomplete_circle","image",4173],["control_point_duplicate","image",4170],["arrow_outward","action",4167],["eject","action",4163],["speaker_notes_off","action",4162],["auto_mode","home",4161],["ring_volume","communication",4159],["brightness_7","image",4150],["gif_box","action",4148],["run_circle","maps",4137],["local_convenience_store","maps",4135],["leak_add","image",4128],["pages","social",4124],["switch_right","navigation",4112],["dry_cleaning","maps",4108],["nature","image",4076],["system_security_update_good","device",4076],["location_off","communication",4075],["voice_chat","notification",4071],["airline_seat_recline_normal","notification",4053],["vibration","notification",4047],["texture","image",4028],["snippet_folder","file",4013],["alarm_off","action",4010],["edit_attributes","maps",4010],["sports_football","social",3990],["perm_data_setting","action",3985],["edit_road","maps",3981],["switch_access_shortcut_add","action",3975],["money_off_csred","editor",3972],["edit_location_alt","maps",3960],["contrast","image",3953],["bluetooth_connected","device",3946],["slow_motion_video","av",3929],["settings_input_hdmi","action",3923],["phonelink_setup","communication",3922],["battery_5_bar","device",3921],["add_to_queue","av",3914],["do_disturb_alt","notification",3908],["hourglass_disabled","action",3907],["move_up","editor",3893],["bedroom_parent","search",3873],["next_week","content",3865],["pie_chart_outline","editor",3858],["connected_tv","hardware",3856],["solar_power","home",3849],["timer_off","image",3843],["bedroom_baby","search",3835],["nfc","device",3835],["perm_scan_wifi","action",3835],["format_indent_increase","editor",3828],["work_off","action",3826],["lightbulb_circle","action",3814],["join_full","action",3809],["car_repair","maps",3808],["group_remove","social",3804],["camera_indoor","search",3801],["elevator","places",3790],["sensors_off","action",3782],["short_text","editor",3779],["sensor_window","home",3778],["video_camera_back","image",3777],["duo","communication",3776],["downhill_skiing","social",3767],["co2","social",3764],["transform","image",3757],["abc","action",3753],["mode_standby","device",3751],["kayaking","social",3739],["photo_size_select_actual","image",3739],["remember_me","device",3739],["picture_in_picture_alt","action",3733],["app_blocking","action",3720],["public_off","social",3714],["app_shortcut","action",3711],["repeat_one","av",3711],["bathroom","search",3710],["local_movies","maps",3696],["wrong_location","maps",3693],["settings_cell","action",3675],["moped","maps",3671],["door_sliding","search",3664],["boy","social",3663],["javascript","action",3661],["perm_device_information","action",3659],["smoking_rooms","places",3658],["wash","places",3657],["single_bed","social",3648],["remove_moderator","social",3642],["pattern","device",3640],["swap_calls","communication",3640],["looks_5","image",3637],["do_not_disturb_alt","notification",3615],["signpost","maps",3615],["chair_alt","search",3610],["domain_add","social",3604],["directions_boat_filled","maps",3602],["line_style","action",3597],["airplay","av",3595],["crisis_alert","maps",3594],["stay_primary_portrait","communication",3588],["tablet_android","hardware",3584],["brightness_high","device",3581],["notifications_paused","social",3548],["format_color_reset","editor",3545],["motion_photos_on","image",3544],["laptop_windows","hardware",3543],["cabin","places",3538],["house_siding","places",3530],["camera_outdoor","search",3524],["cast_connected","hardware",3517],["hot_tub","places",3511],["fitbit","social",3510],["call_to_action","av",3506],["strikethrough_s","editor",3503],["satellite","maps",3501],["soup_kitchen","maps",3491],["swipe_left","action",3490],["skateboarding","social",3484],["update_disabled","action",3483],["hexagon","editor",3482],["door_back","search",3477],["rotate_90_degrees_ccw","image",3465],["battery_saver","device",3458],["sync_disabled","notification",3455],["subtitles_off","action",3454],["vertical_align_center","editor",3449],["play_lesson","device",3431],["voicemail","communication",3431],["align_horizontal_left","editor",3413],["snooze","av",3409],["photo_camera_front","image",3396],["merge","maps",3392],["countertops","places",3391],["person_remove_alt_1","social",3386],["data_saver_off","device",3384],["wb_twilight","image",3379],["living","search",3377],["safety_divider","social",3377],["tram","maps",3372],["mic_external_on","image",3371],["thunderstorm","social",3366],["rectangle","editor",3361],["apps_outage","navigation",3357],["private_connectivity","action",3357],["browser_updated","hardware",3356],["install_desktop","action",3333],["hd","av",3325],["currency_pound","image",3324],["join_inner","action",3323],["voice_over_off","action",3312],["storm","device",3311],["groups_3","social",3307],["assistant_photo","image",3294],["taxi_alert","maps",3287],["ssid_chart","device",3286],["breakfast_dining","maps",3274],["device_unknown","hardware",3271],["gradient","image",3270],["move_down","editor",3270],["straight","maps",3265],["content_paste_off","content",3257],["replay_30","av",3256],["repeat_on","av",3255],["fire_extinguisher","places",3251],["tap_and_play","notification",3251],["data_saver_on","device",3248],["file_download_off","file",3247],["grid_4x4","device",3242],["bluetooth_searching","device",3239],["brightness_medium","device",3237],["doorbell","search",3236],["water_damage","places",3226],["signal_wifi_0_bar","device",3224],["carpenter","places",3213],["brightness_low","device",3212],["charging_station","places",3209],["ad_units","device",3201],["baby_changing_station","places",3190],["swipe_right","action",3190],["rv_hookup","places",3182],["battery_4_bar","device",3179],["bluetooth_disabled","device",3163],["closed_caption_off","av",3161],["group_off","social",3154],["battery_0_bar","device",3152],["subway","maps",3152],["table_bar","search",3142],["mobiledata_off","device",3117],["offline_share","navigation",3115],["swipe_up","action",3099],["bedroom_child","search",3095],["network_cell","device",3094],["hide_image","image",3091],["no_encryption","notification",3088],["atm","maps",3087],["soap","places",3087],["screenshot","device",3080],["sports_martial_arts","social",3079],["multiline_chart","editor",3078],["sd_card","notification",3066],["web_stories","content",3055],["lock_person","action",3043],["hdr_auto","device",3040],["polyline","editor",3037],["settings_input_svideo","action",3036],["sports_cricket","social",3030],["sports_mma","social",3021],["call_merge","communication",3018],["exposure_plus_1","image",3018],["wifi_calling_3","device",3018],["crop_16_9","image",2997],["music_off","image",2995],["phone_missed","notification",2992],["flip_to_back","action",2971],["shield_moon","home",2967],["filter_2","image",2960],["transit_enterexit","maps",2956],["audio_file","av",2954],["density_small","action",2938],["brunch_dining","maps",2929],["keyboard_hide","hardware",2918],["connecting_airports","maps",2917],["view_array","action",2915],["phonelink_erase","communication",2903],["mobile_screen_share","communication",2899],["thermostat_auto","image",2898],["security_update_good","device",2897],["exposure","image",2895],["smoke_free","places",2889],["border_all","editor",2888],["face_6","social",2882],["open_in_new_off","action",2879],["all_out","action",2876],["battery_unknown","device",2876],["girl","social",2876],["text_increase","editor",2875],["interpreter_mode","av",2865],["data_thresholding","action",2863],["shutter_speed","image",2862],["photo_album","image",2858],["featured_video","av",2849],["filter_tilt_shift","image",2847],["hvac","maps",2846],["umbrella","places",2845],["scanner","hardware",2833],["sports_gymnastics","social",2833],["sports_golf","social",2829],["score","editor",2825],["nordic_walking","social",2824],["face_3","social",2823],["safety_check","maps",2820],["shuffle_on","av",2814],["battery_6_bar","device",2806],["egg","maps",2793],["folder_delete","file",2793],["shop_2","action",2787],["electric_bike","maps",2780],["commit","action",2752],["contact_emergency","communication",2751],["signal_wifi_off","device",2750],["access_alarm","device",2749],["directions_transit","maps",2743],["looks_6","image",2738],["airline_seat_recline_extra","notification",2736],["brightness_3","image",2732],["linked_camera","image",2729],["label_off","action",2727],["looks","image",2726],["settings_system_daydream","device",2714],["do_not_touch","places",2712],["tablet","hardware",2708],["access_alarms","device",2705],["forward_30","av",2690],["format_indent_decrease","editor",2686],["hdr_strong","image",2686],["vrpano","image",2668],["playlist_add_circle","av",2664],["5g","av",2661],["paragliding","social",2653],["photo_filter","image",2651],["battery_3_bar","device",2649],["blur_circular","image",2644],["music_video","av",2641],["local_hotel","maps",2636],["stadium","maps",2628],["tab_unselected","action",2627],["video_file","av",2627],["crop_portrait","image",2623],["domain_disabled","communication",2622],["tapas","places",2622],["person_add_disabled","communication",2621],["electric_scooter","maps",2603],["bus_alert","maps",2593],["drive_file_move_rtl","file",2589],["rice_bowl","places",2584],["rounded_corner","action",2584],["flash_auto","image",2580],["view_kanban","action",2580],["mode_of_travel","maps",2573],["fence","places",2569],["signal_wifi_bad","device",2569],["local_car_wash","maps",2545],["format_clear","editor",2538],["spoke","communication",2538],["candlestick_chart","editor",2536],["party_mode","social",2533],["queue_play_next","av",2530],["castle","maps",2529],["tty","places",2527],["motion_photos_auto","image",2522],["space_bar","editor",2521],["install_mobile","action",2516],["replay_5","av",2515],["mark_unread_chat_alt","communication",2510],["format_line_spacing","editor",2508],["spatial_audio_off","action",2499],["call_missed_outgoing","communication",2489],["desktop_access_disabled","communication",2489],["snowboarding","social",2485],["wind_power","home",2485],["sensor_occupied","home",2482],["car_crash","maps",2481],["oil_barrel","home",2480],["6_ft_apart","social",2479],["balcony","places",2477],["iso","image",2474],["crop_7_5","image",2464],["text_rotate_vertical","action",2460],["brightness_2","image",2453],["signal_wifi_connected_no_internet_4","device",2453],["speaker_phone","communication",2447],["rotate_90_degrees_cw","image",2429],["art_track","av",2428],["swipe_down","action",2424],["css","action",2422],["kitesurfing","social",2421],["no_food","places",2418],["filter_hdr","image",2417],["houseboat","places",2414],["cell_wifi","communication",2412],["explore_off","action",2412],["photo_size_select_small","image",2405],["horizontal_distribute","editor",2403],["tonality","image",2398],["battery_1_bar","device",2391],["report_off","content",2383],["aod","device",2372],["align_vertical_bottom","editor",2370],["currency_ruble","image",2366],["medication_liquid","device",2365],["bento","places",2357],["exposure_zero","image",2348],["noise_aware","action",2341],["text_rotation_none","action",2328],["south_america","social",2324],["join_left","action",2322],["filter_3","image",2320],["imagesearch_roller","notification",2320],["punch_clock","device",2317],["flashlight_off","device",2314],["signal_cellular_0_bar","device",2313],["photo_size_select_large","image",2309],["hearing_disabled","av",2308],["wheelchair_pickup","places",2302],["crop_rotate","image",2301],["dataset","device",2300],["add_to_home_screen","device",2299],["forward_5","av",2287],["stop_screen_share","communication",2284],["person_2","social",2281],["align_horizontal_center","editor",2274],["print_disabled","communication",2274],["electric_meter","home",2267],["mms","notification",2264],["iron","places",2248],["signal_wifi_statusbar_null","device",2245],["not_accessible","action",2238],["snowshoeing","social",2236],["pinch","action",2228],["speaker_group","hardware",2221],["gps_off","device",2213],["security_update","device",2213],["pin_invoke","action",2210],["camera_front","image",2207],["heat_pump","home",2197],["call_missed","communication",2192],["swipe_vertical","action",2190],["hdr_weak","image",2189],["streetview","maps",2188],["crop_5_4","image",2183],["elderly_woman","social",2181],["earbuds","hardware",2180],["bungalow","places",2178],["vertical_distribute","editor",2168],["sports_hockey","social",2165],["data_array","editor",2156],["explicit","av",2156],["ice_skating","social",2148],["mosque","maps",2148],["sd_storage","device",2145],["align_horizontal_right","editor",2132],["extension_off","action",2124],["keyboard_capslock","hardware",2123],["view_cozy","action",2108],["pause_presentation","communication",2107],["face_2","social",2106],["format_strikethrough","editor",2101],["grid_3x3","device",2091],["perm_camera_mic","action",2087],["burst_mode","image",2083],["directions_subway","maps",2080],["superscript","editor",2074],["scoreboard","social",2065],["join_right","action",2061],["comments_disabled","communication",2055],["reset_tv","device",2055],["logo_dev","image",2052],["sports_rugby","social",2051],["filter_frames","image",2046],["video_label","av",2041],["turn_right","maps",2040],["4g_mobiledata","device",2035],["4k","av",2033],["face_4","social",2030],["compass_calibration","maps",2019],["brightness_auto","device",2014],["battery_2_bar","device",2011],["sync_lock","notification",2008],["fiber_smart_record","av",2001],["headset_off","hardware",1999],["electric_rickshaw","maps",1995],["screenshot_monitor","device",1988],["crib","places",1984],["airline_stops","maps",1981],["pin_end","action",1979],["swipe_right_alt","action",1979],["margin","editor",1978],["camera_roll","image",1972],["chalet","places",1969],["dialer_sip","communication",1966],["deselect","content",1955],["no_encryption_gmailerrorred","notification",1951],["signal_cellular_connected_no_internet_4_bar","device",1949],["disc_full","notification",1947],["invert_colors_off","communication",1935],["pentagon","editor",1933],["sledding","social",1905],["blur_linear","image",1900],["wifi_lock","device",1900],["do_not_disturb_on_total_silence","device",1894],["gas_meter","home",1894],["phishing","device",1894],["bluetooth_audio","notification",1884],["crop_3_2","image",1881],["fork_right","maps",1872],["rtt","communication",1864],["wifi_calling","communication",1862],["crop_landscape","image",1861],["filter_b_and_w","image",1860],["nearby_error","device",1859],["airplanemode_inactive","device",1833],["mail_lock","communication",1830],["keyboard_command_key","hardware",1818],["portable_wifi_off","communication",1815],["1x_mobiledata","device",1813],["no_crash","maps",1809],["security_update_warning","device",1807],["directions_railway","maps",1802],["do_not_step","places",1802],["browse_gallery","action",1799],["add_home_work","navigation",1796],["add_home","action",1793],["send_time_extension","communication",1793],["wrap_text","editor",1786],["align_vertical_top","editor",1781],["sd_card_alert","notification",1780],["repeat_one_on","av",1777],["folder_off","file",1769],["view_comfy_alt","action",1762],["sign_language","social",1761],["text_decrease","editor",1760],["no_meeting_room","places",1750],["border_clear","editor",1748],["no_meals","maps",1746],["signal_cellular_connected_no_internet_0_bar","device",1745],["align_vertical_center","editor",1744],["switch_camera","image",1743],["php","action",1739],["subscript","editor",1729],["sim_card_alert","notification",1724],["escalator","places",1712],["switch_video","image",1704],["filter_7","image",1698],["text_rotate_up","action",1697],["filter_4","image",1696],["local_play","maps",1693],["railway_alert","maps",1686],["dry","places",1683],["screen_lock_portrait","device",1683],["text_rotation_angledown","action",1681],["font_download_off","content",1679],["wifi_password","device",1679],["unfold_more_double","action",1678],["airline_seat_individual_suite","notification",1672],["electric_moped","maps",1667],["turn_left","maps",1666],["filter_9_plus","image",1665],["exposure_plus_2","image",1654],["home_max","hardware",1654],["do_not_disturb_off","notification",1653],["text_rotation_angleup","action",1651],["network_ping","action",1647],["cyclone","social",1643],["surround_sound","av",1643],["u_turn_left","maps",1642],["remove_from_queue","av",1640],["view_compact_alt","action",1639],["phone_paused","notification",1637],["text_rotation_down","action",1636],["closed_caption_disabled","av",1627],["wb_iridescent","image",1613],["grid_off","image",1608],["stroller","places",1607],["play_disabled","av",1603],["border_style","editor",1600],["web_asset_off","av",1583],["system_security_update_warning","device",1579],["photo_camera_back","image",1575],["person_4","social",1562],["system_security_update","device",1556],["wifi_tethering_off","device",1554],["auto_fix_off","image",1552],["person_3","social",1551],["swipe_down_alt","action",1551],["key_off","communication",1549],["line_axis","editor",1549],["pest_control_rodent","maps",1546],["airlines","maps",1540],["lyrics","av",1540],["filter_5","image",1538],["stay_current_landscape","communication",1536],["edgesensor_high","device",1532],["motion_photos_paused","image",1532],["egg_alt","maps",1531],["monochrome_photos","image",1527],["on_device_training","action",1525],["dock","hardware",1521],["sip","communication",1518],["airline_seat_flat","notification",1517],["headphones_battery","hardware",1513],["network_wifi_1_bar","device",1507],["power_input","hardware",1506],["smart_screen","hardware",1502],["exposure_neg_1","image",1498],["do_disturb_off","notification",1496],["nat","communication",1494],["tire_repair","maps",1492],["browser_not_supported","hardware",1483],["no_drinks","places",1479],["border_outer","editor",1478],["face_5","social",1478],["spatial_tracking","action",1474],["density_large","action",1470],["bike_scooter","maps",1468],["propane_tank","home",1463],["face_retouching_off","image",1460],["sos","maps",1459],["padding","editor",1450],["add_alarm","device",1449],["phone_locked","notification",1449],["network_locked","notification",1435],["sd","av",1435],["minor_crash","maps",1434],["swipe_left_alt","action",1421],["network_wifi_3_bar","device",1415],["near_me_disabled","maps",1411],["signal_cellular_nodata","device",1407],["stay_primary_landscape","communication",1403],["snowmobile","maps",1399],["wifi_find","device",1398],["spatial_audio","action",1397],["30fps","device",1393],["flood","social",1389],["no_sim","communication",1386],["directions_transit_filled","maps",1375],["signal_cellular_off","device",1375],["earbuds_battery","hardware",1371],["signal_wifi_4_bar_lock","device",1369],["panorama_photosphere","image",1368],["fire_truck","maps",1366],["insert_page_break","editor",1366],["location_disabled","device",1364],["signal_cellular_null","device",1356],["lte_mobiledata","device",1354],["swipe_up_alt","action",1354],["10k","av",1353],["4g_plus_mobiledata","device",1353],["mobile_off","device",1353],["phonelink_off","hardware",1353],["leak_remove","image",1351],["missed_video_call","av",1346],["filter_8","image",1341],["bluetooth_drive","device",1339],["adf_scanner","hardware",1333],["filter_9","image",1332],["kebab_dining","maps",1319],["no_luggage","social",1317],["fort","maps",1313],["media_bluetooth_on","device",1300],["timer_10","image",1299],["mode_fan_off","home",1296],["no_transfer","maps",1295],["home_mini","hardware",1290],["dataset_linked","device",1288],["emergency_share","maps",1287],["flight_class","maps",1279],["temple_buddhist","maps",1278],["video_stable","image",1267],["deblur","image",1266],["filter_6","image",1264],["directions_subway_filled","maps",1259],["raw_on","image",1251],["blur_off","image",1234],["rsvp","device",1233],["motion_photos_off","image",1230],["motion_photos_pause","image",1227],["wb_shade","image",1227],["vpn_key_off","communication",1224],["directions_railway_filled","maps",1221],["edgesensor_low","device",1217],["grid_goldenratio","device",1215],["network_wifi_2_bar","device",1215],["tv_off","notification",1211],["scuba_diving","social",1207],["tsunami","social",1207],["vignette","image",1205],["phone_bluetooth_speaker","notification",1198],["developer_board_off","hardware",1192],["3g_mobiledata","device",1187],["usb_off","device",1185],["fiber_pin","av",1184],["airline_seat_flat_angled","notification",1183],["signal_cellular_alt_1_bar","device",1181],["hdr_on","image",1175],["wifi_2_bar","device",1172],["dirty_lens","image",1171],["u_turn_right","maps",1169],["severe_cold","social",1167],["panorama_horizontal","image",1163],["no_cell","places",1159],["image_aspect_ratio","image",1158],["screen_lock_rotation","device",1151],["screen_lock_landscape","device",1147],["signal_cellular_alt_2_bar","device",1145],["60fps","device",1140],["30fps_select","image",1133],["shape_line","editor",1132],["repartition","action",1130],["unfold_less_double","action",1121],["currency_lira","image",1119],["currency_yuan","image",1118],["camera_rear","image",1115],["lte_plus_mobiledata","device",1110],["timer_10_select","device",1108],["piano_off","social",1107],["wifi_tethering_error","device",1103],["fork_left","maps",1098],["screen_rotation_alt","maps",1082],["timer_3","image",1079],["width_full","action",1079],["temple_hindu","maps",1078],["videogame_asset_off","hardware",1068],["60fps_select","image",1060],["airline_seat_legroom_normal","notification",1059],["synagogue","maps",1058],["directions_off","notification",1054],["transcribe","action",1051],["panorama_wide_angle_select","image",1050],["tornado","social",1049],["signal_cellular_no_sim","device",1043],["fiber_dvr","av",1041],["keyboard_control_key","hardware",1038],["roller_shades","home",1035],["24mp","image",1034],["wifi_1_bar","device",1034],["remove_road","maps",1032],["roller_skating","social",1030],["assist_walker","social",1024],["exposure_neg_2","image",1020],["airline_seat_legroom_extra","notification",1017],["border_inner","editor",1008],["turn_sharp_right","maps",1007],["man_2","social",997],["width_normal","action",991],["landslide","social",989],["no_flash","places",983],["4k_plus","av",975],["g_mobiledata","device",975],["autofps_select","image",974],["1k","av",961],["woman_2","social",961],["airline_seat_legroom_reduced","notification",959],["border_left","editor",956],["wifi_channel","device",956],["roundabout_right","maps",955],["turn_slight_right","maps",947],["border_bottom","editor",942],["width_wide","action",939],["format_textdirection_l_to_r","editor",931],["blind","social",918],["broadcast_on_personal","home",906],["turn_slight_left","maps",902],["border_vertical","editor",900],["timer_3_select","device",898],["no_backpack","places",890],["propane","home",889],["panorama_horizontal_select","image",884],["panorama_wide_angle","image",884],["border_horizontal","editor",883],["2k","av",882],["1k_plus","av",880],["wb_auto","image",875],["panorama_photosphere_select","image",872],["h_mobiledata","device",870],["18_up_rating","social",867],["hdr_plus","image",860],["blinds","home",859],["format_textdirection_r_to_l","editor",856],["panorama_vertical_select","image",855],["border_top","editor",854],["volcano","social",852],["mic_external_off","image",850],["video_chat","notification",845],["border_right","editor",830],["e_mobiledata","device",824],["no_stroller","places",821],["media_bluetooth_off","device",820],["8k","av",819],["currency_franc","image",814],["hls_off","action",812],["hls","action",811],["r_mobiledata","device",810],["vaping_rooms","places",808],["desk","places",805],["12mp","image",792],["mp","image",788],["panorama_vertical","image",786],["no_adult_content","social",784],["roller_shades_closed","home",782],["curtains","home",779],["emergency_recording","maps",771],["h_plus_mobiledata","device",762],["watch_off","hardware",754],["blinds_closed","home",748],["hdr_enhanced_select","image",746],["broadcast_on_home","home",744],["5k","av",742],["hevc","image",742],["9k_plus","av",738],["8k_plus","av",737],["format_overline","file",736],["bedtime_off","image",735],["keyboard_option_key","hardware",734],["vertical_shades","home",729],["curtains_closed","home",725],["hdr_on_select","device",724],["nest_cam_wired_stand","home",724],["roundabout_left","maps",721],["vertical_shades_closed","home",721],["3k","av",720],["devices_fold","device",719],["10mp","image",705],["turn_sharp_left","maps",702],["18mp","image",699],["hdr_auto_select","device",685],["5k_plus","av",683],["23mp","image",677],["7k","av",677],["raw_off","image",676],["nearby_off","device",673],["2k_plus","av",670],["3k_plus","av",668],["9k","av",668],["man_4","social",663],["hdr_off","image",657],["6k","av",656],["7k_plus","av",653],["6k_plus","av",652],["type_specimen","editor",647],["hdr_off_select","device",646],["vape_free","places",635],["11mp","image",633],["20mp","image",629],["3mp","image",615],["5mp","image",612],["15mp","image",603],["fluorescent","device",602],["13mp","image",601],["16mp","image",597],["2mp","image",597],["21mp","image",593],["22mp","image",593],["7mp","image",587],["17mp","image",583],["14mp","image",579],["19mp","image",577],["ramp_left","maps",573],["4mp","image",571],["8mp","image",571],["9mp","image",564],["6mp","image",562],["ramp_right","maps",546],["man_3","social",523],["fire_hydrant_alt","maps",512],["macro_off","device",354]],Hee=[...new Set(qm.map(e=>e[1]))].sort(),Uee={inject:["showcaseCopy"],name:"ShowcaseIcon",label:"Material Icons",icon:"emoji_symbols",components:{QIcon:nt,QInput:Fr,QTabs:ec,QTab:tc},apiJson:zee,importName:"QIcon",importFrom:"quasar",code:`<QIcon name="home" size="24px" />
<QIcon name="star" color="primary" size="32px" />
<QIcon name="settings" size="24px" />

<!-- With color -->
<QIcon name="favorite" color="negative" />

<!-- In a button -->
<QBtn icon="send" label="Send" />`,data(){return{search:"",category:"all",allCategories:Hee}},computed:{filtered(){let e=qm;if(this.category!=="all"&&(e=e.filter(t=>t[1]===this.category)),this.search){const t=this.search.toLowerCase().replace(/\s+/g,"_");e=e.filter(n=>n[0].includes(t))}return e}},watch:{search(e){e&&(this.category="all")}},methods:{onCopy(e){this.showcaseCopy(e[0],e[0])}}},Wee={class:"iconShowcase"},Jee={class:"iconControls"},Gee={class:"iconStats"},Yee={class:"iconGrid non-selectable"},Kee=["onClick"],Zee={class:"iconLabel text-truncate"};function Xee(e,t,n,a,o,i){const r=X("QIcon"),s=X("QInput"),l=X("QTab"),u=X("QTabs");return M(),ee("div",Wee,[v("div",Jee,[f(s,{modelValue:o.search,"onUpdate:modelValue":t[1]||(t[1]=c=>o.search=c),dense:"",outlined:"",placeholder:"Filter icons...",color:"accent",class:"iconSearch"},Of({prepend:S(()=>[f(r,{name:"search",size:"16px"})]),_:2},[o.search?{name:"append",fn:S(()=>[f(r,{name:"close",size:"14px",class:"cursor-pointer",onClick:t[0]||(t[0]=c=>o.search="")})]),key:"0"}:void 0]),1032,["modelValue"]),f(u,{modelValue:o.category,"onUpdate:modelValue":t[2]||(t[2]=c=>o.category=c),dense:"","active-color":"accent","indicator-color":"accent",align:"left","narrow-indicator":"","no-caps":"",class:"iconTabs"},{default:S(()=>[f(l,{name:"all",label:"All"}),(M(!0),ee(Ve,null,ut(o.allCategories,c=>(M(),_e(l,{key:c,name:c,label:c},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),v("div",Gee,xe(i.filtered.length)+" icons ",1),v("div",Yee,[(M(!0),ee(Ve,null,ut(i.filtered,c=>(M(),ee("div",{key:c[0],class:"iconCell",onClick:d=>i.onCopy(c)},[f(r,{name:c[0],size:"36px"},null,8,["name"]),v("span",Zee,xe(c[0]),1)],8,Kee))),128))])])}const ete=ze(Uee,[["render",Xee],["__scopeId","data-v-28313718"]]),tte=Object.freeze(Object.defineProperty({__proto__:null,default:ete},Symbol.toStringTag,{value:"Module"})),nte="component",ote={docsUrl:"https://v2.quasar.dev/vue-components/button"},ate={type:{type:"String",default:"'button'",desc:"Native type attribute (submit, reset, button) or 'a' for link behavior",category:"general"},label:{type:["String","Number"],desc:"Text shown on the button",category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},"icon-right":{type:"String",desc:"Icon name following Quasar convention; placed on the right side",category:"content"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"text-color":{type:"String",desc:"Overrides text color (if needed); Color name from the Quasar Color Palette",category:"style"},flat:{type:"Boolean",desc:"Use flat design (no background)",category:"style"},outline:{type:"Boolean",desc:"Use outline design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},round:{type:"Boolean",desc:"Makes a circle shaped button",category:"style"},push:{type:"Boolean",desc:"Use push design",category:"style"},square:{type:"Boolean",desc:"Removes border-radius so borders are squared",category:"style"},glossy:{type:"Boolean",desc:"Applies a glossy effect",category:"style"},fab:{type:"Boolean",desc:"Makes button size and shape fit a Floating Action Button",category:"style"},"fab-mini":{type:"Boolean",desc:"Makes button size and shape fit a small Floating Action Button",category:"style"},padding:{type:"String",desc:"Custom padding (vertical [horizontal]); CSS units or size names (none|xs|sm|md|lg|xl)",category:"style"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps",category:"content"},"no-wrap":{type:"Boolean",desc:"Avoid label text wrapping",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},stack:{type:"Boolean",desc:"Stack icon and label vertically",category:"content"},stretch:{type:"Boolean",desc:"When on flexbox parent, stretches to parent's height",category:"content"},loading:{type:["Boolean","null"],default:"null",desc:"Put button into loading state (displays a QSpinner)",category:"behavior"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},href:{type:"String",desc:"Native <a> link href attribute; has priority over 'to' and 'replace'",category:"navigation"},target:{type:"String",desc:"Native <a> link target attribute; use with 'to' or 'href'",category:"navigation"},to:{type:["String","Object"],desc:"Equivalent to Vue Router <router-link> 'to' property",category:"navigation"},replace:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'replace' property",category:"navigation"},percentage:{type:"Number",desc:"Percentage (0–100); used with 'loading' to display a progress bar on the background",category:"behavior"},"dark-percentage":{type:"Boolean",desc:"Progress bar should have dark color; used with 'percentage' and 'loading'",category:"behavior"},ripple:{type:["Boolean","Object"],default:"true",desc:"Configure material ripple",category:"style"},size:{type:"String",desc:"Size in CSS units, including unit name, or standard size name (xs|sm|md|lg|xl)",category:"style"},align:{type:"String",default:"'center'",desc:"Label or content alignment",category:"content"},tabindex:{type:["Number","String"],desc:"Tabindex HTML attribute value",category:"general"}},ite={default:{desc:"Custom content, instead of relying on 'icon' and 'label' props"},loading:{desc:"Override the default QSpinner when in loading state"}},rte={click:{desc:"Emitted when the component is clicked"}},Tm={type:nte,meta:ote,props:ate,slots:ite,events:rte},ste={name:"ShowcaseQuasarBtn",components:{QBtn:it},label:"Quasar Btn",icon:"smart_button",apiJson:Tm,importName:"QBtn",importFrom:"quasar"},lte={class:"jShowcase_row jShowcase_column"},cte={class:"jShowcase_group"},ute={class:"jShowcase_items"},dte={class:"jShowcase_group"},fte={class:"jShowcase_items"},pte={class:"jShowcase_group"},mte={class:"jShowcase_items"},hte={class:"jShowcase_group"},gte={class:"jShowcase_items"},vte={class:"jShowcase_group"},bte={class:"jShowcase_items"},_te={class:"jShowcase_group"},yte={class:"jShowcase_items"},wte={class:"jShowcase_group"},Ste={class:"jShowcase_items"};function kte(e,t,n,a,o,i){const r=X("QBtn");return M(),ee("div",lte,[v("div",cte,[t[0]||(t[0]=v("span",{class:"jShowcase_title"},"Variants",-1)),v("div",ute,[f(r,{color:"primary",label:"Default"}),f(r,{flat:"",color:"primary",label:"Flat"}),f(r,{outline:"",color:"primary",label:"Outline"}),f(r,{unelevated:"",color:"primary",label:"Unelevated"}),f(r,{push:"",color:"primary",label:"Push"}),f(r,{glossy:"",color:"primary",label:"Glossy"})])]),v("div",dte,[t[1]||(t[1]=v("span",{class:"jShowcase_title"},"Custom Variants",-1)),v("div",fte,[f(r,{class:"ghost",label:"Ghost",icon:"settings"})])]),v("div",pte,[t[2]||(t[2]=v("span",{class:"jShowcase_title"},"Shapes",-1)),v("div",mte,[f(r,{color:"accent",label:"Rounded",rounded:""}),f(r,{color:"accent",label:"Square",square:""}),f(r,{color:"accent",icon:"star",round:""}),f(r,{color:"accent",icon:"rocket_launch",label:"FAB",fab:""}),f(r,{color:"accent",icon:"add","fab-mini":""})])]),v("div",hte,[t[3]||(t[3]=v("span",{class:"jShowcase_title"},"Icons",-1)),v("div",gte,[f(r,{color:"secondary",icon:"flight_takeoff",label:"Launch"}),f(r,{color:"secondary",label:"Deploy","icon-right":"send"}),f(r,{color:"secondary",icon:"shield",label:"Shield","icon-right":"chevron_right"}),f(r,{outline:"",color:"secondary",icon:"settings",round:""})])]),v("div",vte,[t[4]||(t[4]=v("span",{class:"jShowcase_title"},"Colors",-1)),v("div",bte,[f(r,{color:"primary",label:"Primary"}),f(r,{color:"secondary",label:"Secondary"}),f(r,{color:"accent",label:"Accent"}),f(r,{color:"positive",label:"Positive"}),f(r,{color:"negative",label:"Negative"}),f(r,{color:"info",label:"Info"}),f(r,{color:"warning",label:"Warning"})])]),v("div",_te,[t[5]||(t[5]=v("span",{class:"jShowcase_title"},"Sizes",-1)),v("div",yte,[f(r,{color:"primary",label:"xs",size:"xs"}),f(r,{color:"primary",label:"sm",size:"sm"}),f(r,{color:"primary",label:"md",size:"md"}),f(r,{color:"primary",label:"lg",size:"lg"}),f(r,{color:"primary",label:"xl",size:"xl"})])]),v("div",wte,[t[6]||(t[6]=v("span",{class:"jShowcase_title"},"States",-1)),v("div",Ste,[f(r,{color:"info",label:"Loading",loading:""}),f(r,{color:"negative",label:"Disabled",disable:""}),f(r,{color:"accent",label:"Dense",dense:""}),f(r,{color:"secondary",icon:"bolt",label:"Stacked",stack:""}),f(r,{color:"primary",label:"No caps","no-caps":""})])])])}const xte=ze(ste,[["render",kte]]),Cte=Object.freeze(Object.defineProperty({__proto__:null,default:xte},Symbol.toStringTag,{value:"Module"}));function bd(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const Te=Dr({name:"close-popup",beforeMount(e,{value:t}){const n={depth:bd(t),handler(a){n.depth!==0&&setTimeout(()=>{const o=fy(e);o!==void 0&&py(o,a,n.depth)})},handlerKey(a){Mn(a,13)===!0&&n.handler(a)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=bd(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}),Lm=Fe({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=Q(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>L("div",{class:n.value},mt(t.default))}}),Fo=[];let ka;function Qte(e){ka=e.keyCode===27}function Ate(){ka===!0&&(ka=!1)}function Ite(e){ka===!0&&(ka=!1,Mn(e,27)===!0&&Fo[Fo.length-1](e))}function Em(e){window[e]("keydown",Qte),window[e]("blur",Ate),window[e]("keyup",Ite),ka=!1}function Dm(e){st.is.desktop===!0&&(Fo.push(e),Fo.length===1&&Em("addEventListener"))}function fr(e){const t=Fo.indexOf(e);t!==-1&&(Fo.splice(t,1),Fo.length===0&&Em("removeEventListener"))}const pi=Fe({name:"QMenu",inheritAttrs:!1,props:{...ry,...Rl,...Mt,...Ro,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ar},self:{type:String,validator:ar},offset:{type:Array,validator:Zp},scrollTarget:Gp,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ol,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:a}){let o=null,i,r,s;const l=Je(),{proxy:u}=l,{$q:c}=u,d=ge(null),p=ge(!1),g=Q(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),_=jt(e,c),{registerTick:I,removeTick:C}=ha(),{registerTimeout:b}=Sa(),{transitionProps:w,transitionStyle:y}=jr(e),{localScrollTarget:m,changeScrollEvent:x,unconfigureScrollTarget:B}=Hp(e,pe),{anchorEl:T,canShow:E}=zp({showing:p}),{hide:O}=Fl({showing:p,canShow:E,handleShow:$e,handleHide:J,hideOnRouteChange:g,processOnMount:!0}),{showPortal:F,hidePortal:V,renderPortal:j}=Vl(l,d,k,"menu"),U={anchorEl:T,innerRef:d,onClickOutside(q){if(e.persistent!==!0&&p.value===!0)return O(q),(q.type==="touchstart"||q.target.classList.contains("q-dialog__backdrop"))&&rt(q),!0}},D=Q(()=>ir(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),R=Q(()=>e.cover===!0?D.value:ir(e.self||"top start",c.lang.rtl)),ae=Q(()=>(e.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),Z=Q(()=>e.autoClose===!0?{onClick:Le}:{}),G=Q(()=>p.value===!0&&e.persistent!==!0);Oe(G,q=>{q===!0?(Dm(de),Kp(U)):(fr(de),or(U))});function be(){Mr(()=>{let q=d.value;q&&q.contains(document.activeElement)!==!0&&(q=q.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||q.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||q.querySelector("[autofocus], [data-autofocus]")||q,q.focus({preventScroll:!0}))})}function $e(q){if(o=e.noRefocus===!1?document.activeElement:null,Ml(Me),F(),pe(),i=void 0,q!==void 0&&(e.touchPosition||e.contextMenu)){const Y=eo(q);if(Y.left!==void 0){const{top:z,left:A}=T.value.getBoundingClientRect();i={left:Y.left-A,top:Y.top-z}}}r===void 0&&(r=Oe(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,h)),e.noFocus!==!0&&document.activeElement.blur(),I(()=>{h(),e.noFocus!==!0&&be()}),b(()=>{c.platform.is.ios===!0&&(s=e.autoClose,d.value.click()),h(),F(!0),n("show",q)},e.transitionDuration)}function J(q){C(),V(),H(!0),o!==null&&(q===void 0||q.qClickOutside!==!0)&&((((q==null?void 0:q.type.indexOf("key"))===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),b(()=>{V(!0),n("hide",q)},e.transitionDuration)}function H(q){i=void 0,r!==void 0&&(r(),r=void 0),(q===!0||p.value===!0)&&(er(Me),B(),or(U),fr(de)),q!==!0&&(o=null)}function pe(){(T.value!==null||e.scrollTarget!==void 0)&&(m.value=Yp(T.value,e.scrollTarget),x(m.value,h))}function Le(q){s!==!0?(Jp(u,q),n("click",q)):s=!1}function Me(q){G.value===!0&&e.noFocus!==!0&&Dp(d.value,q.target)!==!0&&be()}function de(q){e.noEscDismiss!==!0&&(n("escapeKey"),O(q))}function h(){Nl({targetEl:d.value,offset:e.offset,anchorEl:T.value,anchorOrigin:D.value,selfOrigin:R.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function k(){return L(Lt,w.value,()=>p.value===!0?L("div",{role:"menu",...a,ref:d,tabindex:-1,class:["q-menu q-position-engine scroll"+ae.value,a.class],style:[a.style,y.value],...Z.value},mt(t.default)):null)}return wt(H),Object.assign(u,{focus:be,updatePosition:h}),j}}),qte=Object.keys($l);function Tte(e){return qte.reduce((t,n)=>{const a=e[n];return a!==void 0&&(t[n]=a),t},{})}const Lte=Fe({name:"QBtnDropdown",props:{...$l,...Ro,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,noRefocus:Boolean,noFocus:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:a}=Je(),o=ge(e.modelValue),i=ge(null),r=km(),s=Q(()=>{const m={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r.value,"aria-label":e.toggleAriaLabel||a.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(m["aria-disabled"]="true"),m}),l=Q(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),u=Q(()=>Vp(e)),c=Q(()=>Tte(e));Oe(()=>e.modelValue,m=>{var x;(x=i.value)==null||x[m?"show":"hide"]()}),Oe(()=>e.split,y);function d(m){o.value=!0,n("beforeShow",m)}function p(m){n("show",m),n("update:modelValue",!0)}function g(m){o.value=!1,n("beforeHide",m)}function _(m){n("hide",m),n("update:modelValue",!1)}function I(m){n("click",m)}function C(m){Jt(m),y(),n("click",m)}function b(m){var x;(x=i.value)==null||x.toggle(m)}function w(m){var x;(x=i.value)==null||x.show(m)}function y(m){var x;(x=i.value)==null||x.hide(m)}return Object.assign(a,{show:w,hide:y,toggle:b}),Zt(()=>{e.modelValue===!0&&w()}),()=>{const m=[L(nt,{class:l.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&m.push(L(pi,{ref:i,id:r.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noEscDismiss:e.noEscDismiss,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,noFocus:e.noFocus,noRefocus:e.noRefocus,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:d,onShow:p,onBeforeHide:g,onHide:_},t.default)),e.split===!1?L(it,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...s.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:I},{default:()=>mt(t.label,[]).concat(m),loading:t.loading}):L(Lm,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...u.value,glossy:e.glossy,stretch:e.stretch},()=>[L(it,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:C},{default:t.label,loading:t.loading}),L(it,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...s.value,...u.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>m)])}}}),Ete=["ul","ol"],ko=Fe({name:"QList",props:{...Mt,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=Je(),a=jt(e,n.proxy.$q),o=Q(()=>Ete.includes(e.tag)?null:"list"),i=Q(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:i.value,role:o.value},mt(t.default))}}),jn=Fe({name:"QItem",props:{...Mt,...Z_,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=Je(),o=jt(e,a),{hasLink:i,linkAttrs:r,linkClass:s,linkTag:l,navigateOnClick:u}=Op(),c=ge(null),d=ge(null),p=Q(()=>e.clickable===!0||i.value===!0||e.tag==="label"),g=Q(()=>e.disable!==!0&&p.value===!0),_=Q(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),I=Q(()=>e.insetLevel===void 0?null:{["padding"+(a.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function C(y){g.value===!0&&(d.value!==null&&y.qAvoidFocus!==!0&&(y.qKeyEvent!==!0&&document.activeElement===c.value?d.value.focus():document.activeElement===d.value&&c.value.focus()),u(y))}function b(y){if(g.value===!0&&Mn(y,[13,32])===!0){rt(y),y.qKeyEvent=!0;const m=new MouseEvent("click",y);m.qKeyEvent=!0,c.value.dispatchEvent(m)}n("keyup",y)}function w(){const y=kb(t.default,[]);return g.value===!0&&y.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:d})),y}return()=>{const y={ref:c,class:_.value,style:I.value,role:"listitem",onClick:C,onKeyup:b};return g.value===!0?(y.tabindex=e.tabindex||"0",Object.assign(y,r.value)):p.value===!0&&(y["aria-disabled"]="true"),L(l.value,y,w())}}}),$n=Fe({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=Q(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:n.value},mt(t.default))}}),Dte={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Qs={xs:2,sm:4,md:8,lg:16,xl:24},ui=Fe({name:"QSeparator",props:{...Mt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=Je(),n=jt(e,t.proxy.$q),a=Q(()=>e.vertical===!0?"vertical":"horizontal"),o=Q(()=>` q-separator--${a.value}`),i=Q(()=>e.inset!==!1?`${o.value}-${Dte[e.inset]}`:""),r=Q(()=>`q-separator${o.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),s=Q(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const u=e.spaced===!0?`${Qs.md}px`:e.spaced in Qs?`${Qs[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${c[0]}`]=l[`margin${c[1]}`]=u}return l});return()=>L("hr",{class:r.value,style:s.value,"aria-orientation":a.value})}}),Bte="component",Pte={docsUrl:"https://v2.quasar.dev/vue-components/button-dropdown"},Mte={label:{type:["String","Number"],desc:"Text shown on the button",category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"text-color":{type:"String",desc:"Overrides text color (if needed)",category:"style"},flat:{type:"Boolean",desc:"Use flat design (no background)",category:"style"},outline:{type:"Boolean",desc:"Use outline design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},push:{type:"Boolean",desc:"Use push design",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},split:{type:"Boolean",desc:"Split dropdown arrows into a separate button",category:"behavior"},"dropdown-icon":{type:"String",desc:"Override default dropdown icon",category:"content"},"no-icon-animation":{type:"Boolean",desc:"Disable dropdown icon rotation animation",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},"auto-close":{type:"Boolean",desc:"Allows the menu to match at least the full width of its target",category:"behavior"},persistent:{type:"Boolean",desc:"Allows the menu to not be dismissed by a click/tap outside or ESC key",category:"behavior"},cover:{type:"Boolean",desc:"Menu will cover the button when shown",category:"behavior"},"menu-anchor":{type:"String",desc:"Position of the menu on the target (e.g. 'bottom left')",category:"position"},"menu-self":{type:"String",desc:"Position of the menu relative to itself (e.g. 'top left')",category:"position"},"content-class":{type:["String","Array","Object"],desc:"Class definitions to be attributed to the menu",category:"style"},"content-style":{type:["String","Array","Object"],desc:"Style definitions to be attributed to the menu",category:"style"},loading:{type:["Boolean","null"],default:"null",desc:"Put button into loading state",category:"behavior"},stretch:{type:"Boolean",desc:"When on flexbox parent, stretches to parent's height",category:"content"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps",category:"content"}},jte={default:{desc:"Default slot for menu content"},label:{desc:"Customize button label"}},$te={click:{desc:"Emitted when the main button is clicked (only for split mode)",params:{evt:{type:"Object",desc:"JS event object"}}},show:{desc:"Emitted when the menu is shown"},hide:{desc:"Emitted when the menu is hidden"},"before-show":{desc:"Emitted before the menu is shown"},"before-hide":{desc:"Emitted before the menu is hidden"}},Rte={type:Bte,meta:Pte,props:Mte,slots:jte,events:$te},Ote={name:"ShowcaseQuasarBtnDropdown",components:{QBtnDropdown:Lte,QList:ko,QItem:jn,QItemSection:$n,QIcon:nt,QSeparator:ui},label:"Quasar Btn Dropdown",icon:"smart_button",apiJson:Rte,importName:"QBtnDropdown",importFrom:"quasar"},Fte={class:"jShowcase_row jShowcase_column"},Vte={class:"jShowcase_group"},Nte={class:"jShowcase_items"},zte={class:"jShowcase_group"},Hte={class:"jShowcase_items"},Ute={class:"jShowcase_group"},Wte={class:"jShowcase_items"},Jte={class:"jShowcase_group"},Gte={class:"jShowcase_items"};function Yte(e,t,n,a,o,i){const r=X("QIcon"),s=X("QItemSection"),l=X("QItem"),u=X("QSeparator"),c=X("QList"),d=X("QBtnDropdown");return M(),ee("div",Fte,[v("div",Vte,[t[5]||(t[5]=v("span",{class:"jShowcase_title"},"Basic",-1)),v("div",Nte,[f(d,{color:"primary",label:"Actions"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"edit"})]),_:1}),f(s,null,{default:S(()=>[...t[0]||(t[0]=[K("Edit",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"content_copy"})]),_:1}),f(s,null,{default:S(()=>[...t[1]||(t[1]=[K("Duplicate",-1)])]),_:1})]),_:1})),[[Te]]),f(u),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"delete"})]),_:1}),f(s,null,{default:S(()=>[...t[2]||(t[2]=[K("Delete",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1}),f(d,{color:"secondary",icon:"add",label:"Create"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[3]||(t[3]=[K("New File",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[4]||(t[4]=[K("New Folder",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})])]),v("div",zte,[t[10]||(t[10]=v("span",{class:"jShowcase_title"},"Split",-1)),v("div",Hte,[f(d,{color:"primary",icon:"save",label:"Save",split:"",onClick:p=>null},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[6]||(t[6]=[K("Save as Draft",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[7]||(t[7]=[K("Save & Publish",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1}),f(d,{color:"accent",icon:"share",label:"Share",split:"",onClick:p=>null},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[8]||(t[8]=[K("Copy Link",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[9]||(t[9]=[K("Email",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})])]),v("div",Ute,[t[21]||(t[21]=v("span",{class:"jShowcase_title"},"Variants",-1)),v("div",Wte,[f(d,{color:"primary",label:"Flat",flat:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[11]||(t[11]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[12]||(t[12]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1}),f(d,{color:"primary",label:"Outline",outline:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[13]||(t[13]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[14]||(t[14]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1}),f(d,{color:"primary",label:"Unelevated",unelevated:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[15]||(t[15]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[16]||(t[16]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1}),f(d,{color:"primary",label:"Push",push:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[17]||(t[17]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[18]||(t[18]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1}),f(d,{color:"primary",label:"Dense",dense:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[19]||(t[19]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[20]||(t[20]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})])]),v("div",Jte,[t[23]||(t[23]=v("span",{class:"jShowcase_title"},"States",-1)),v("div",Gte,[f(d,{color:"info",label:"Loading",loading:""}),f(d,{color:"negative",label:"Disabled",disable:""}),f(d,{color:"primary",label:"No Icon Animation","no-icon-animation":""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[22]||(t[22]=[K("Option",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})])])])}const Kte=ze(Ote,[["render",Yte]]),Zte=Object.freeze(Object.defineProperty({__proto__:null,default:Kte},Symbol.toStringTag,{value:"Module"})),Xte=Fe({name:"QBtnToggle",props:{...oo,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(t=>("label"in t||"icon"in t||"slot"in t)&&"value"in t)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:t,emit:n}){const a=Q(()=>e.options.find(p=>p.value===e.modelValue)!==void 0),o=Q(()=>({type:"hidden",name:e.name,value:e.modelValue})),i=zo(o),r=Q(()=>Vp(e)),s=Q(()=>({rounded:e.rounded,dense:e.dense,...r.value})),l=Q(()=>e.options.map((p,g)=>{const{attrs:_,value:I,slot:C,...b}=p;return{slot:C,props:{key:g,"aria-pressed":I===e.modelValue?"true":"false",..._,...b,...s.value,disable:e.disable===!0||b.disable===!0,color:I===e.modelValue?c(b,"toggleColor"):c(b,"color"),textColor:I===e.modelValue?c(b,"toggleTextColor"):c(b,"textColor"),noCaps:c(b,"noCaps")===!0,noWrap:c(b,"noWrap")===!0,size:c(b,"size"),padding:c(b,"padding"),ripple:c(b,"ripple"),stack:c(b,"stack")===!0,stretch:c(b,"stretch")===!0,onClick(w){u(I,p,w)}}}}));function u(p,g,_){e.readonly!==!0&&(e.modelValue===p?e.clearable===!0&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",p,g),n("click",_))}function c(p,g){return p[g]===void 0?e[g]:p[g]}function d(){const p=l.value.map(g=>L(it,g.props,g.slot!==void 0?t[g.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&a.value===!0&&i(p,"push"),dn(t.default,p)}return()=>L(Lm,{class:"q-btn-toggle",...r.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},d)}}),ene="component",tne={docsUrl:"https://v2.quasar.dev/vue-components/button-toggle"},nne={"model-value":{type:"Any",desc:"Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",category:"model"},options:{type:"Array",desc:"Array of Objects defining each option; each object has: label, value, icon, attrs, slot",category:"content"},color:{type:"String",desc:"Color name for non-toggled buttons",category:"style"},"text-color":{type:"String",desc:"Text color for non-toggled buttons",category:"style"},"toggle-color":{type:"String",desc:"Color name for toggled button",category:"style"},"toggle-text-color":{type:"String",desc:"Text color for toggled button",category:"style"},spread:{type:"Boolean",desc:"Spread horizontally to all available space",category:"style"},outline:{type:"Boolean",desc:"Use outline design",category:"style"},flat:{type:"Boolean",desc:"Use flat design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},push:{type:"Boolean",desc:"Use push design",category:"style"},glossy:{type:"Boolean",desc:"Applies a glossy effect",category:"style"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps",category:"content"},"no-wrap":{type:"Boolean",desc:"Avoid label text wrapping",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},stack:{type:"Boolean",desc:"Stack icon and label vertically for all buttons",category:"content"},stretch:{type:"Boolean",desc:"When on flexbox parent, stretches to parent's height",category:"content"},size:{type:"String",desc:"Button size (xs, sm, md, lg, xl or CSS unit)",category:"style"},ripple:{type:["Boolean","Object"],desc:"Configure ripple effect (or disable it)",category:"style"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},clearable:{type:"Boolean",desc:"Clears model on click of already selected button",category:"behavior"}},one={"update:model-value":{desc:"Emitted when the component changes the model value",params:{value:{type:"Any",desc:"New model value"}}},clear:{desc:"Emitted when the model is cleared (only when using clearable)"}},ane={type:ene,meta:tne,props:nne,events:one},ine={name:"ShowcaseBtnToggle",components:{QBtnToggle:Xte},apiJson:ane,importName:"QBtnToggle",importFrom:"quasar",data(){return{toggleValue:"one"}},label:"Btn Toggle",icon:"smart_button",code:null},rne={class:"jShowcase_row jShowcase_column"},sne={class:"jShowcase_group"},lne={class:"jShowcase_items"},cne={class:"jShowcase_group"},une={class:"jShowcase_items"},dne={class:"jShowcase_group"},fne={class:"jShowcase_items"};function pne(e,t,n,a,o,i){const r=X("QBtnToggle");return M(),ee("div",rne,[v("div",sne,[t[3]||(t[3]=v("span",{class:"jShowcase_title"},"Variants",-1)),v("div",lne,[f(r,{modelValue:o.toggleValue,"onUpdate:modelValue":t[0]||(t[0]=s=>o.toggleValue=s),label:"Toggle me","toggle-color":"primary",options:[{label:"One",value:"one"},{label:"Two",value:"two"},{label:"Three",value:"three"}]},null,8,["modelValue"])])]),v("div",cne,[t[4]||(t[4]=v("span",{class:"jShowcase_title"},"Flat with Icons",-1)),v("div",une,[f(r,{modelValue:o.toggleValue,"onUpdate:modelValue":t[1]||(t[1]=s=>o.toggleValue=s),flat:"","toggle-color":"primary","text-color":"muted",options:[{label:"List",value:"one",icon:"view_list"},{label:"Grid",value:"two",icon:"grid_view"},{label:"Board",value:"three",icon:"dashboard"}]},null,8,["modelValue"])])]),v("div",dne,[t[5]||(t[5]=v("span",{class:"jShowcase_title"},"Outline",-1)),v("div",fne,[f(r,{modelValue:o.toggleValue,"onUpdate:modelValue":t[2]||(t[2]=s=>o.toggleValue=s),label:"Toggle me","toggle-color":"primary",color:"surface-0","text-color":"faint",outline:"",options:[{label:"One",value:"one"},{label:"Two",value:"two"},{label:"Three",value:"three"}]},null,8,["modelValue"])])])])}const mne=ze(ine,[["render",pne]]),hne=Object.freeze(Object.defineProperty({__proto__:null,default:mne},Symbol.toStringTag,{value:"Module"}));function gne(e,t,n){let a;function o(){a!==void 0&&(el.remove(a),a=void 0)}return wt(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){a={condition:()=>n.value===!0,handler:t},el.add(a)}}}let Ba=0,As,Is,Va,qs=!1,_d,yd,wd,To=null;function vne(e){bne(e)&&rt(e)}function bne(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ob(e),n=e.shiftKey&&!e.deltaX,a=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||a?e.deltaY:e.deltaX;for(let i=0;i<t.length;i++){const r=t[i];if(yy(r,a))return a?o<0&&r.scrollTop===0?!0:o>0&&r.scrollTop+r.clientHeight===r.scrollHeight:o<0&&r.scrollLeft===0?!0:o>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function Sd(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Ai(e){qs!==!0&&(qs=!0,requestAnimationFrame(()=>{qs=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:a}=document.scrollingElement;(Va===void 0||t!==window.innerHeight)&&(Va=n-t,document.scrollingElement.scrollTop=a),a>Va&&(document.scrollingElement.scrollTop-=Math.ceil((a-Va)/8))}))}function kd(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:o}=window.getComputedStyle(t);As=by(window),Is=vy(window),_d=t.style.left,yd=t.style.top,wd=window.location.href,t.style.left=`-${As}px`,t.style.top=`-${Is}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,st.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Ai,Tt.passiveCapture),window.visualViewport.addEventListener("scroll",Ai,Tt.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Sd,Tt.passiveCapture))}st.is.desktop===!0&&st.is.mac===!0&&window[`${e}EventListener`]("wheel",vne,Tt.notPassive),e==="remove"&&(st.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Ai,Tt.passiveCapture),window.visualViewport.removeEventListener("scroll",Ai,Tt.passiveCapture)):window.removeEventListener("scroll",Sd,Tt.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=_d,t.style.top=yd,window.location.href===wd&&window.scrollTo(As,Is),Va=void 0)}function _ne(e){let t="add";if(e===!0){if(Ba++,To!==null){clearTimeout(To),To=null;return}if(Ba>1)return}else{if(Ba===0||(Ba--,Ba>0))return;if(t="remove",st.is.ios===!0&&st.is.nativeMobile===!0){To!==null&&clearTimeout(To),To=setTimeout(()=>{kd(t),To=null},100);return}}kd(t)}function yne(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,_ne(t))}}}let Ii=0;const wne={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},xd={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},nc=Fe({name:"QDialog",inheritAttrs:!1,props:{...Rl,...Ro,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Ol,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:a}){const o=Je(),i=ge(null),r=ge(!1),s=ge(!1);let l=null,u=null,c,d;const p=Q(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:g}=yne(),{registerTimeout:_}=Sa(),{registerTick:I,removeTick:C}=ha(),{transitionProps:b,transitionStyle:w}=jr(e,()=>xd[e.position][0],()=>xd[e.position][1]),y=Q(()=>w.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:m,hidePortal:x,portalIsAccessible:B,renderPortal:T}=Vl(o,i,Me,"dialog"),{hide:E}=Fl({showing:r,hideOnRouteChange:p,handleShow:R,handleHide:ae,processOnMount:!0}),{addToHistory:O,removeFromHistory:F}=gne(r,E,p),V=Q(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${wne[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),j=Q(()=>r.value===!0&&e.seamless!==!0),U=Q(()=>e.autoClose===!0?{onClick:H}:{}),D=Q(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${j.value===!0?"modal":"seamless"}`,a.class]);Oe(()=>e.maximized,de=>{r.value===!0&&J(de)}),Oe(j,de=>{g(de),de===!0?(Ml(Le),Dm(be)):(er(Le),fr(be))});function R(de){var h;O(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,J(e.maximized),m(),s.value=!0,e.noFocus!==!0?((h=document.activeElement)==null||h.blur(),I(Z)):C(),_(()=>{if(o.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:k,bottom:q}=document.activeElement.getBoundingClientRect(),{innerHeight:Y}=window,z=window.visualViewport!==void 0?window.visualViewport.height:Y;k>0&&q>z/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-z,q>=Y?1/0:Math.ceil(document.scrollingElement.scrollTop+q-z/2))),document.activeElement.scrollIntoView()}d=!0,i.value.click(),d=!1}m(!0),s.value=!1,n("show",de)},e.transitionDuration)}function ae(de){C(),F(),$e(!0),s.value=!0,x(),u!==null&&((((de==null?void 0:de.type.indexOf("key"))===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),_(()=>{x(!0),s.value=!1,n("hide",de)},e.transitionDuration)}function Z(de){Mr(()=>{let h=i.value;if(h!==null){if(de!==void 0){const k=h.querySelector(de);if(k!==null){k.focus({preventScroll:!0});return}}h.contains(document.activeElement)!==!0&&(h=h.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||h.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||h.querySelector("[autofocus], [data-autofocus]")||h,h.focus({preventScroll:!0}))}})}function G(de){de&&typeof de.focus=="function"?de.focus({preventScroll:!0}):Z(),n("shake");const h=i.value;h!==null&&(h.classList.remove("q-animate--scale"),h.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,i.value!==null&&(h.classList.remove("q-animate--scale"),Z())},170))}function be(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&G():(n("escapeKey"),E()))}function $e(de){l!==null&&(clearTimeout(l),l=null),(de===!0||r.value===!0)&&(J(!1),e.seamless!==!0&&(g(!1),er(Le),fr(be))),de!==!0&&(u=null)}function J(de){de===!0?c!==!0&&(Ii<1&&document.body.classList.add("q-body--dialog"),Ii++,c=!0):c===!0&&(Ii<2&&document.body.classList.remove("q-body--dialog"),Ii--,c=!1)}function H(de){d!==!0&&(E(de),n("click",de))}function pe(de){e.persistent!==!0&&e.noBackdropDismiss!==!0?E(de):e.noShake!==!0&&G()}function Le(de){e.allowFocusOutside!==!0&&B.value===!0&&Dp(i.value,de.target)!==!0&&Z('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:Z,shake:G,__updateRefocusTarget(de){u=de||null}}),wt($e);function Me(){return L("div",{role:"dialog","aria-modal":j.value===!0?"true":"false",...a,class:D.value},[L(Lt,{name:"q-transition--fade",appear:!0},()=>j.value===!0?L("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:pe}):null),L(Lt,b.value,()=>r.value===!0?L("div",{ref:i,class:V.value,style:w.value,tabindex:-1,...U.value},mt(t.default)):null)])}return T}}),oc=Fe({name:"QCard",props:{...Mt,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Je(),a=jt(e,n),o=Q(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>L(e.tag,{class:o.value},mt(t.default))}}),Do=Fe({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=Q(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>L(e.tag,{class:n.value},mt(t.default))}}),ac=Fe({name:"QCardActions",props:{...Pp,vertical:Boolean},setup(e,{slots:t}){const n=Mp(e),a=Q(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>L("div",{class:a.value},mt(t.default))}}),Sne=Fe({name:"QSpace",setup(){const e=L("div",{class:"q-space"});return()=>e}}),Ia=Fe({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=Q(()=>parseInt(e.lines,10)),a=Q(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),o=Q(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>L("div",{style:o.value,class:a.value},mt(t.default))}}),kne=["top","middle","bottom"],Bm=Fe({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>kne.includes(e)}},setup(e,{slots:t}){const n=Q(()=>e.align!==void 0?{verticalAlign:e.align}:null),a=Q(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>L("div",{class:a.value,style:n.value,role:"status","aria-label":e.label},dn(t.default,e.label!==void 0?[e.label]:[]))}}),Pm=Fe({name:"QInnerLoading",props:{...Mt,...Ro,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:t}){const n=Je(),a=jt(e,n.proxy.$q),{transitionProps:o,transitionStyle:i}=jr(e),r=Q(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(a.value===!0?" q-inner-loading--dark":"")),s=Q(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function l(){const c=[L(yo,{size:e.size,color:e.color})];return e.label!==void 0&&c.push(L("div",{class:s.value,style:e.labelStyle},[e.label])),c}function u(){return e.showing===!0?L("div",{class:r.value,style:i.value},t.default!==void 0?t.default():l()):null}return()=>L(Lt,o.value,u)}}),xne=Fe({name:"QField",inheritAttrs:!1,props:{...Rr,tag:{type:String,default:"label"}},emits:Kl,setup(){return Xl(Zl({tagProp:!0}))}}),Cne={xs:8,sm:10,md:14,lg:20,xl:24},Mm=Fe({name:"QChip",props:{...Mt,...wo,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=Je(),o=jt(e,a),i=So(e,Cne),r=Q(()=>e.selected===!0||e.icon!==void 0),s=Q(()=>e.selected===!0?e.iconSelected||a.iconSet.chip.selected:e.icon),l=Q(()=>e.iconRemove||a.iconSet.chip.remove),u=Q(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=Q(()=>{const C=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(C?` text-${C} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(o.value===!0?" q-chip--dark q-dark":"")}),d=Q(()=>{const C=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},b={...C,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||a.lang.label.remove};return{chip:C,remove:b}});function p(C){C.keyCode===13&&g(C)}function g(C){e.disable||(n("update:selected",!e.selected),n("click",C))}function _(C){(C.keyCode===void 0||C.keyCode===13)&&(rt(C),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function I(){const C=[];u.value===!0&&C.push(L("div",{class:"q-focus-helper"})),r.value===!0&&C.push(L(nt,{class:"q-chip__icon q-chip__icon--left",name:s.value}));const b=e.label!==void 0?[L("div",{class:"ellipsis"},[e.label])]:void 0;return C.push(L("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Bl(t.default,b))),e.iconRight&&C.push(L(nt,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&C.push(L(nt,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:l.value,...d.value.remove,onClick:_,onKeyup:_})),C}return()=>{if(e.modelValue===!1)return;const C={class:c.value,style:i.value};return u.value===!0&&Object.assign(C,d.value.chip,{onClick:g,onKeyup:p}),Pl("div",C,I(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Kt,e.ripple]])}}}),gn=1e3,Qne=["start","center","end","start-force","center-force","end-force"],jm=Array.prototype.filter,Ane=window.getComputedStyle(document.body).overflowAnchor===void 0?Yt:function(t,n){t!==null&&(t._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;t._qOverflowAnimationFrame=void 0;const a=t.children||[];jm.call(a,i=>i.dataset&&i.dataset.qVsAnchor!==void 0).forEach(i=>{delete i.dataset.qVsAnchor});const o=a[n];o!=null&&o.dataset&&(o.dataset.qVsAnchor="")}))};function va(e,t){return e+t}function Ts(e,t,n,a,o,i,r,s){const l=e===window?document.scrollingElement||document.documentElement:e,u=o===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-r-s,scrollMaxSize:0,offsetStart:-r,offsetEnd:-s};if(o===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=l.scrollLeft,c.scrollViewSize+=l.clientWidth),c.scrollMaxSize=l.scrollWidth,i===!0&&(c.scrollStart=(ci===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=l.scrollTop,c.scrollViewSize+=l.clientHeight),c.scrollMaxSize=l.scrollHeight),n!==null)for(let d=n.previousElementSibling;d!==null;d=d.previousElementSibling)d.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=d[u]);if(a!==null)for(let d=a.nextElementSibling;d!==null;d=d.nextElementSibling)d.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=d[u]);if(t!==e){const d=l.getBoundingClientRect(),p=t.getBoundingClientRect();o===!0?(c.offsetStart+=p.left-d.left,c.offsetEnd-=p.width):(c.offsetStart+=p.top-d.top,c.offsetEnd-=p.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function Cd(e,t,n,a){t==="end"&&(t=(e===window?document.body:e)[n===!0?"scrollWidth":"scrollHeight"]),e===window?n===!0?(a===!0&&(t=(ci===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-t),window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t):n===!0?(a===!0&&(t=(ci===!0?e.scrollWidth-e.offsetWidth:0)-t),e.scrollLeft=t):e.scrollTop=t}function Pa(e,t,n,a){if(n>=a)return 0;const o=t.length,i=Math.floor(n/gn),r=Math.floor((a-1)/gn)+1;let s=e.slice(i,r).reduce(va,0);return n%gn!==0&&(s-=t.slice(i*gn,n).reduce(va,0)),a%gn!==0&&a!==o&&(s-=t.slice(a,r*gn).reduce(va,0)),s}const Ine={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Qd={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Ine};function qne({virtualScrollLength:e,getVirtualScrollTarget:t,getVirtualScrollEl:n,virtualScrollItemSizeComputed:a}){const o=Je(),{props:i,emit:r,proxy:s}=o,{$q:l}=s;let u,c,d,p=[],g;const _=ge(0),I=ge(0),C=ge({}),b=ge(null),w=ge(null),y=ge(null),m=ge({from:0,to:0}),x=Q(()=>i.tableColspan!==void 0?i.tableColspan:100);a===void 0&&(a=Q(()=>i.virtualScrollItemSize));const B=Q(()=>a.value+";"+i.virtualScrollHorizontal),T=Q(()=>B.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);Oe(T,()=>{ae()}),Oe(B,E);function E(){R(c,!0)}function O(J){R(J===void 0?c:J)}function F(J,H){const pe=t();if(pe==null||pe.nodeType===8)return;const Le=Ts(pe,n(),b.value,w.value,i.virtualScrollHorizontal,l.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);d!==Le.scrollViewSize&&ae(Le.scrollViewSize),j(pe,Le,Math.min(e.value-1,Math.max(0,parseInt(J,10)||0)),0,Qne.indexOf(H)!==-1?H:c!==-1&&J>c?"end":"start")}function V(){const J=t();if(J==null||J.nodeType===8)return;const H=Ts(J,n(),b.value,w.value,i.virtualScrollHorizontal,l.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),pe=e.value-1,Le=H.scrollMaxSize-H.offsetStart-H.offsetEnd-I.value;if(u===H.scrollStart)return;if(H.scrollMaxSize<=0){j(J,H,0,0);return}d!==H.scrollViewSize&&ae(H.scrollViewSize),U(m.value.from);const Me=Math.floor(H.scrollMaxSize-Math.max(H.scrollViewSize,H.offsetEnd)-Math.min(g[pe],H.scrollViewSize/2));if(Me>0&&Math.ceil(H.scrollStart)>=Me){j(J,H,pe,H.scrollMaxSize-H.offsetEnd-p.reduce(va,0));return}let de=0,h=H.scrollStart-H.offsetStart,k=h;if(h<=Le&&h+H.scrollViewSize>=_.value)h-=_.value,de=m.value.from,k=h;else for(let q=0;h>=p[q]&&de<pe;q++)h-=p[q],de+=gn;for(;h>0&&de<pe;)h-=g[de],h>-H.scrollViewSize?(de++,k=h):k=g[de]+h;j(J,H,de,k)}function j(J,H,pe,Le,Me){const de=typeof Me=="string"&&Me.indexOf("-force")!==-1,h=de===!0?Me.replace("-force",""):Me,k=h!==void 0?h:"start";let q=Math.max(0,pe-C.value[k]),Y=q+C.value.total;Y>e.value&&(Y=e.value,q=Math.max(0,Y-C.value.total)),u=H.scrollStart;const z=q!==m.value.from||Y!==m.value.to;if(z===!1&&h===void 0){G(pe);return}const{activeElement:A}=document,$=y.value;z===!0&&$!==null&&$!==A&&$.contains(A)===!0&&($.addEventListener("focusout",D),setTimeout(()=>{$==null||$.removeEventListener("focusout",D)})),Ane($,pe-q);const te=h!==void 0?g.slice(q,pe).reduce(va,0):0;if(z===!0){const fe=Y>=m.value.from&&q<=m.value.to?m.value.to:Y;m.value={from:q,to:fe},_.value=Pa(p,g,0,q),I.value=Pa(p,g,Y,e.value),requestAnimationFrame(()=>{m.value.to!==Y&&u===H.scrollStart&&(m.value={from:m.value.from,to:Y},I.value=Pa(p,g,Y,e.value))})}requestAnimationFrame(()=>{if(u!==H.scrollStart)return;z===!0&&U(q);const fe=g.slice(q,pe).reduce(va,0),ue=fe+H.offsetStart+_.value,ce=ue+g[pe];let Se=ue+Le;if(h!==void 0){const ye=fe-te,ve=H.scrollStart+ye;Se=de!==!0&&ve<ue&&ce<ve+H.scrollViewSize?ve:h==="end"?ce-H.scrollViewSize:ue-(h==="start"?0:Math.round((H.scrollViewSize-g[pe])/2))}u=Se,Cd(J,Se,i.virtualScrollHorizontal,l.lang.rtl),G(pe)})}function U(J){const H=y.value;if(H){const pe=jm.call(H.children,q=>q.classList&&q.classList.contains("q-virtual-scroll--skip")===!1),Le=pe.length,Me=i.virtualScrollHorizontal===!0?q=>q.getBoundingClientRect().width:q=>q.offsetHeight;let de=J,h,k;for(let q=0;q<Le;){for(h=Me(pe[q]),q++;q<Le&&pe[q].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=Me(pe[q]),q++;k=h-g[de],k!==0&&(g[de]+=k,p[Math.floor(de/gn)]+=k),de++}}}function D(){var J;(J=y.value)==null||J.focus()}function R(J,H){const pe=Number(a.value);(H===!0||Array.isArray(g)===!1)&&(g=[]);const Le=g.length;g.length=e.value;for(let de=e.value-1;de>=Le;de--)g[de]=pe;const Me=Math.floor((e.value-1)/gn);p=[];for(let de=0;de<=Me;de++){let h=0;const k=Math.min((de+1)*gn,e.value);for(let q=de*gn;q<k;q++)h+=g[q];p.push(h)}c=-1,u=void 0,_.value=Pa(p,g,0,m.value.from),I.value=Pa(p,g,m.value.to,e.value),J>=0?(U(m.value.from),bt(()=>{F(J)})):be()}function ae(J){if(J===void 0&&typeof window<"u"){const h=t();h!=null&&h.nodeType!==8&&(J=Ts(h,n(),b.value,w.value,i.virtualScrollHorizontal,l.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}d=J;const H=parseFloat(i.virtualScrollSliceRatioBefore)||0,pe=parseFloat(i.virtualScrollSliceRatioAfter)||0,Le=1+H+pe,Me=J===void 0||J<=0?1:Math.ceil(J/a.value),de=Math.max(1,Me,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/Le));C.value={total:Math.ceil(de*Le),start:Math.ceil(de*H),center:Math.ceil(de*(.5+H)),end:Math.ceil(de*(1+H)),view:Me}}function Z(J,H){const pe=i.virtualScrollHorizontal===!0?"width":"height",Le={["--q-virtual-scroll-item-"+pe]:a.value+"px"};return[J==="tbody"?L(J,{class:"q-virtual-scroll__padding",key:"before",ref:b},[L("tr",[L("td",{style:{[pe]:`${_.value}px`,...Le},colspan:x.value})])]):L(J,{class:"q-virtual-scroll__padding",key:"before",ref:b,style:{[pe]:`${_.value}px`,...Le}}),L(J,{class:"q-virtual-scroll__content",key:"content",ref:y,tabindex:-1},H.flat()),J==="tbody"?L(J,{class:"q-virtual-scroll__padding",key:"after",ref:w},[L("tr",[L("td",{style:{[pe]:`${I.value}px`,...Le},colspan:x.value})])]):L(J,{class:"q-virtual-scroll__padding",key:"after",ref:w,style:{[pe]:`${I.value}px`,...Le}})]}function G(J){c!==J&&(i.onVirtualScroll!==void 0&&r("virtualScroll",{index:J,from:m.value.from,to:m.value.to-1,direction:J<c?"decrease":"increase",ref:s}),c=J)}ae();const be=Dl(V,l.platform.is.ios===!0?120:35);Ql(()=>{ae()});let $e=!1;return Qa(()=>{$e=!0}),Qr(()=>{if($e!==!0)return;const J=t();u!==void 0&&J!==void 0&&J!==null&&J.nodeType!==8?Cd(J,u,i.virtualScrollHorizontal,l.lang.rtl):F(c)}),wt(()=>{be.cancel()}),Object.assign(s,{scrollTo:F,reset:E,refresh:O}),{virtualScrollSliceRange:m,virtualScrollSliceSizeComputed:C,setVirtualScrollSize:ae,onVirtualScrollEvt:be,localResetVirtualScroll:R,padVirtualScroll:Z,scrollTo:F,reset:E,refresh:O}}function Gt(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Ad(e,t,n){if(n<=t)return t;const a=n-t+1;let o=t+(e-t)%a;return o<t&&(o=a+o),o===0?0:o}function at(e,t=2,n="0"){if(e==null)return e;const a=String(e);return a.length>=t?a:new Array(t-a.length+1).join(n)+a}const Id=e=>["add","add-unique","toggle"].includes(e),Tne=".*+?^${}()|[]\\",Lne=Object.keys(Rr);function Ls(e,t){if(typeof e=="function")return e;const n=e!==void 0?e:t;return a=>a!==null&&typeof a=="object"&&n in a?a[n]:a}const Vr=Fe({name:"QSelect",inheritAttrs:!1,props:{...Qd,...oo,...Rr,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Id},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:Qd.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...Kl,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:t,emit:n}){const{proxy:a}=Je(),{$q:o}=a,i=ge(!1),r=ge(!1),s=ge(-1),l=ge(""),u=ge(!1),c=ge(!1);let d=null,p=null,g,_,I,C=null,b,w,y,m;const x=ge(null),B=ge(null),T=ge(null),E=ge(null),O=ge(null),F=Qm(e),V=Am(Ho),j=Q(()=>Array.isArray(e.options)?e.options.length:0),U=Q(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:D,virtualScrollSliceSizeComputed:R,localResetVirtualScroll:ae,padVirtualScroll:Z,onVirtualScrollEvt:G,scrollTo:be,setVirtualScrollSize:$e}=qne({virtualScrollLength:j,getVirtualScrollTarget:ao,getVirtualScrollEl:pn,virtualScrollItemSizeComputed:U}),J=Zl(),H=Q(()=>{const N=e.mapOptions===!0&&e.multiple!==!0,qe=e.modelValue!==void 0&&(e.modelValue!==null||N===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const Be=e.mapOptions===!0&&g!==void 0?g:[],tt=qe.map(ht=>ne(ht,Be));return e.modelValue===null&&N===!0?tt.filter(ht=>ht!==null):tt}return qe}),pe=Q(()=>{const N={};return Lne.forEach(qe=>{const Be=e[qe];Be!==void 0&&(N[qe]=Be)}),N}),Le=Q(()=>e.optionsDark===null?J.isDark.value:e.optionsDark),Me=Q(()=>li(H.value)),de=Q(()=>{let N="q-field__input q-placeholder col";return e.hideSelected===!0||H.value.length===0?[N,e.inputClass]:(N+=" q-field__input--padding",e.inputClass===void 0?N:[N,e.inputClass])}),h=Q(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),k=Q(()=>j.value===0),q=Q(()=>H.value.map(N=>oe.value(N)).join(", ")),Y=Q(()=>e.displayValue!==void 0?e.displayValue:q.value),z=Q(()=>e.optionsHtml===!0?()=>!0:N=>(N==null?void 0:N.html)===!0),A=Q(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||H.value.some(z.value))),$=Q(()=>J.focused.value===!0?e.tabindex:-1),te=Q(()=>{const N={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${J.targetUid.value}_lb`};return s.value>=0&&(N["aria-activedescendant"]=`${J.targetUid.value}_${s.value}`),N}),fe=Q(()=>({id:`${J.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ue=Q(()=>H.value.map((N,qe)=>({index:qe,opt:N,html:z.value(N),selected:!0,removeAtIndex:De,toggleOption:Ke,tabindex:$.value}))),ce=Q(()=>{if(j.value===0)return[];const{from:N,to:qe}=D.value;return e.options.slice(N,qe).map((Be,tt)=>{const ht=ie.value(Be)===!0,xt=ke(Be)===!0,gt=N+tt,Ct={clickable:!0,active:xt,activeClass:ve.value,manualFocus:!0,focused:!1,disable:ht,tabindex:-1,dense:e.optionsDense,dark:Le.value,role:"option","aria-selected":xt===!0?"true":"false",id:`${J.targetUid.value}_${gt}`,onClick:()=>{Ke(Be)}};return ht!==!0&&(s.value===gt&&(Ct.focused=!0),o.platform.is.desktop===!0&&(Ct.onMousemove=()=>{i.value===!0&&re(gt)})),{index:gt,opt:Be,html:z.value(Be),label:oe.value(Be),selected:Ct.active,focused:Ct.focused,toggleOption:Ke,setOptionIndex:re,itemProps:Ct}})}),Se=Q(()=>e.dropdownIcon!==void 0?e.dropdownIcon:o.iconSet.arrow.dropdown),ye=Q(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),ve=Q(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),le=Q(()=>Ls(e.optionValue,"value")),oe=Q(()=>Ls(e.optionLabel,"label")),ie=Q(()=>Ls(e.optionDisable,"disable")),me=Q(()=>H.value.map(le.value)),Ce=Q(()=>{const N={onInput:Ho,onChange:V,onKeydown:kt,onKeyup:Re,onKeypress:et,onFocus:Qe,onClick(qe){_===!0&&Jt(qe)}};return N.onCompositionstart=N.onCompositionupdate=N.onCompositionend=V,N});Oe(H,N=>{g=N,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&J.innerLoading.value!==!0&&(r.value!==!0&&i.value!==!0||Me.value!==!0)&&(I!==!0&&an(),(r.value===!0||i.value===!0)&&yn(""))},{immediate:!0}),Oe(()=>e.fillInput,an),Oe(i,Jr),Oe(j,kh);function je(N){return e.emitValue===!0?le.value(N):N}function Ie(N){if(N!==-1&&N<H.value.length)if(e.multiple===!0){const qe=e.modelValue.slice();n("remove",{index:N,value:qe.splice(N,1)[0]}),n("update:modelValue",qe)}else n("update:modelValue",null)}function De(N){Ie(N),J.focus()}function Ue(N,qe){const Be=je(N);if(e.multiple!==!0){e.fillInput===!0&&Co(oe.value(N),!0,!0),n("update:modelValue",Be);return}if(H.value.length===0){n("add",{index:0,value:Be}),n("update:modelValue",e.multiple===!0?[Be]:Be);return}if(qe===!0&&ke(N)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const tt=e.modelValue.slice();n("add",{index:tt.length,value:Be}),tt.push(Be),n("update:modelValue",tt)}function Ke(N,qe){var xt;if(J.editable.value!==!0||N===void 0||ie.value(N)===!0)return;const Be=le.value(N);if(e.multiple!==!0){qe!==!0&&(Co(e.fillInput===!0?oe.value(N):"",!0,!0),ot()),(xt=B.value)==null||xt.focus(),(H.value.length===0||ho(le.value(H.value[0]),Be)!==!0)&&n("update:modelValue",e.emitValue===!0?Be:N);return}if((_!==!0||u.value===!0)&&J.focus(),Qe(),H.value.length===0){const gt=e.emitValue===!0?Be:N;n("add",{index:0,value:gt}),n("update:modelValue",e.multiple===!0?[gt]:gt);return}const tt=e.modelValue.slice(),ht=me.value.findIndex(gt=>ho(gt,Be));if(ht!==-1)n("remove",{index:ht,value:tt.splice(ht,1)[0]});else{if(e.maxValues!==void 0&&tt.length>=e.maxValues)return;const gt=e.emitValue===!0?Be:N;n("add",{index:tt.length,value:gt}),tt.push(gt)}n("update:modelValue",tt)}function re(N){if(o.platform.is.desktop!==!0)return;const qe=N!==-1&&N<j.value?N:-1;s.value!==qe&&(s.value=qe)}function he(N=1,qe){if(i.value===!0){let Be=s.value;do Be=Ad(Be+N,-1,j.value-1);while(Be!==-1&&Be!==s.value&&ie.value(e.options[Be])===!0);s.value!==Be&&(re(Be),be(Be),qe!==!0&&e.useInput===!0&&e.fillInput===!0&&xo(Be>=0?oe.value(e.options[Be]):b,!0))}}function ne(N,qe){const Be=tt=>ho(le.value(tt),N);return e.options.find(Be)||qe.find(Be)||N}function ke(N){const qe=le.value(N);return me.value.find(Be=>ho(Be,qe))!==void 0}function Qe(N){e.useInput===!0&&B.value!==null&&(N===void 0||B.value===N.target&&N.target.value===q.value)&&B.value.select()}function He(N){Mn(N,27)===!0&&i.value===!0&&(Jt(N),ot(),an()),n("keyup",N)}function Re(N){const{value:qe}=N.target;if(N.keyCode!==void 0){He(N);return}if(N.target.value="",d!==null&&(clearTimeout(d),d=null),p!==null&&(clearTimeout(p),p=null),an(),typeof qe=="string"&&qe.length!==0){const Be=qe.toLocaleLowerCase(),tt=xt=>{const gt=e.options.find(Ct=>String(xt.value(Ct)).toLocaleLowerCase()===Be);return gt===void 0?!1:(H.value.indexOf(gt)===-1?Ke(gt):ot(),!0)},ht=xt=>{tt(le)!==!0&&xt!==!0&&tt(oe)!==!0&&yn(qe,!0,()=>ht(!0))};ht()}else J.clearValue(N)}function et(N){n("keypress",N)}function kt(N){if(n("keydown",N),Pr(N)===!0)return;const qe=l.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),Be=N.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(s.value!==-1||qe===!0);if(N.keyCode===27){Nt(N);return}if(N.keyCode===9&&Be===!1){Pe();return}if(N.target===void 0||N.target.id!==J.targetUid.value||J.editable.value!==!0)return;if(N.keyCode===40&&J.innerLoading.value!==!0&&i.value===!1){rt(N),We();return}if(N.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&l.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ie(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&n("update:modelValue",null);return}(N.keyCode===35||N.keyCode===36)&&(typeof l.value!="string"||l.value.length===0)&&(rt(N),s.value=-1,he(N.keyCode===36?1:-1,e.multiple)),(N.keyCode===33||N.keyCode===34)&&R.value!==void 0&&(rt(N),s.value=Math.max(-1,Math.min(j.value,s.value+(N.keyCode===33?-1:1)*R.value.view)),he(N.keyCode===33?1:-1,e.multiple)),(N.keyCode===38||N.keyCode===40)&&(rt(N),he(N.keyCode===38?-1:1,e.multiple));const tt=j.value;if((y===void 0||m<Date.now())&&(y=""),tt>0&&e.useInput!==!0&&N.key!==void 0&&N.key.length===1&&N.altKey===!1&&N.ctrlKey===!1&&N.metaKey===!1&&(N.keyCode!==32||y.length!==0)){i.value!==!0&&We(N);const ht=N.key.toLocaleLowerCase(),xt=y.length===1&&y[0]===ht;m=Date.now()+1500,xt===!1&&(rt(N),y+=ht);const gt=new RegExp("^"+y.split("").map(Uo=>Tne.indexOf(Uo)!==-1?"\\"+Uo:Uo).join(".*"),"i");let Ct=s.value;if(xt===!0||Ct<0||gt.test(oe.value(e.options[Ct]))!==!0)do Ct=Ad(Ct+1,-1,tt-1);while(Ct!==s.value&&(ie.value(e.options[Ct])===!0||gt.test(oe.value(e.options[Ct]))!==!0));s.value!==Ct&&bt(()=>{re(Ct),be(Ct),Ct>=0&&e.useInput===!0&&e.fillInput===!0&&xo(oe.value(e.options[Ct]),!0)});return}if(!(N.keyCode!==13&&(N.keyCode!==32||e.useInput===!0||y!=="")&&(N.keyCode!==9||Be===!1))){if(N.keyCode!==9&&rt(N),s.value!==-1&&s.value<tt){Ke(e.options[s.value]);return}if(qe===!0){const ht=(xt,gt)=>{var Uo;if(gt){if(Id(gt)!==!0)return}else gt=e.newValueMode;if(Co("",e.multiple!==!0,!0),xt==null)return;(gt==="toggle"?Ke:Ue)(xt,gt==="add-unique"),e.multiple!==!0&&((Uo=B.value)==null||Uo.focus(),ot())};if(e.onNewValue!==void 0?n("newValue",l.value,ht):ht(l.value),e.multiple!==!0)return}i.value===!0?Pe():J.innerLoading.value!==!0&&We()}}function pn(){return _===!0?O.value:T.value!==null&&T.value.contentEl!==null?T.value.contentEl:void 0}function ao(){return pn()}function mi(){return e.hideSelected===!0?[]:t["selected-item"]!==void 0?ue.value.map(N=>t["selected-item"](N)).slice():t.selected!==void 0?[].concat(t.selected()):e.useChips===!0?ue.value.map((N,qe)=>L(Mm,{key:"option-"+qe,removable:J.editable.value===!0&&ie.value(N.opt)!==!0,dense:!0,textColor:e.color,tabindex:$.value,onRemove(){N.removeAtIndex(qe)}},()=>L("span",{class:"ellipsis",[N.html===!0?"innerHTML":"textContent"]:oe.value(N.opt)}))):[L("span",{class:"ellipsis",[A.value===!0?"innerHTML":"textContent"]:Y.value})]}function Rn(){if(k.value===!0)return t["no-option"]!==void 0?t["no-option"]({inputValue:l.value}):void 0;const N=t.option!==void 0?t.option:Be=>L(jn,{key:Be.index,...Be.itemProps},()=>L($n,()=>L(Ia,()=>L("span",{[Be.html===!0?"innerHTML":"textContent"]:Be.label}))));let qe=Z("div",ce.value.map(N));return t["before-options"]!==void 0&&(qe=t["before-options"]().concat(qe)),dn(t["after-options"],qe)}function qa(N,qe){const Be=qe===!0?{...te.value,...J.splitAttrs.attributes.value}:void 0,tt={ref:qe===!0?B:void 0,key:"i_t",class:de.value,style:e.inputStyle,value:l.value!==void 0?l.value:"",type:"search",...Be,id:qe===!0?J.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":N===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Ce.value};return N!==!0&&_===!0&&(Array.isArray(tt.class)===!0?tt.class=[...tt.class,"no-pointer-events"]:tt.class+=" no-pointer-events"),L("input",tt)}function Ho(N){d!==null&&(clearTimeout(d),d=null),p!==null&&(clearTimeout(p),p=null),!(N&&N.target&&N.target.qComposing===!0)&&(xo(N.target.value||""),I=!0,b=l.value,J.focused.value!==!0&&(_!==!0||u.value===!0)&&J.focus(),e.onFilter!==void 0&&(d=setTimeout(()=>{d=null,yn(l.value)},e.inputDebounce)))}function xo(N,qe){l.value!==N&&(l.value=N,qe===!0||e.inputDebounce===0||e.inputDebounce==="0"?n("inputValue",N):p=setTimeout(()=>{p=null,n("inputValue",N)},e.inputDebounce))}function Co(N,qe,Be){I=Be!==!0,e.useInput===!0&&(xo(N,!0),(qe===!0||Be!==!0)&&(b=N),qe!==!0&&yn(N))}function yn(N,qe,Be){if(e.onFilter===void 0||qe!==!0&&J.focused.value!==!0)return;J.innerLoading.value===!0?n("filterAbort"):(J.innerLoading.value=!0,c.value=!0),N!==""&&e.multiple!==!0&&H.value.length!==0&&I!==!0&&N===oe.value(H.value[0])&&(N="");const tt=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);C!==null&&clearTimeout(C),C=tt,n("filter",N,(ht,xt)=>{(qe===!0||J.focused.value===!0)&&C===tt&&(clearTimeout(C),typeof ht=="function"&&ht(),c.value=!1,bt(()=>{J.innerLoading.value=!1,J.editable.value===!0&&(qe===!0?i.value===!0&&ot():i.value===!0?Jr(!0):i.value=!0),typeof xt=="function"&&bt(()=>{xt(a)}),typeof Be=="function"&&bt(()=>{Be(a)})}))},()=>{J.focused.value===!0&&C===tt&&(clearTimeout(C),J.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function Hr(){return L(pi,{ref:T,class:h.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&k.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:Le.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:ye.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...fe.value,onScrollPassive:G,onBeforeShow:_c,onBeforeHide:Ur,onShow:Wr},Rn)}function Ur(N){yc(N),Pe()}function Wr(){$e()}function P(N){var qe;Jt(N),(qe=B.value)==null||qe.focus(),u.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function W(N){Jt(N),bt(()=>{u.value=!1})}function se(){const N=[L(xne,{class:`col-auto ${J.fieldClass.value}`,...pe.value,for:J.targetUid.value,dark:Le.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:l.value.length!==0,...J.splitAttrs.listeners.value,onFocus:P,onBlur:W},{...t,rawControl:()=>J.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&N.push(L("div",{ref:O,class:h.value+" scroll",style:e.popupContentStyle,...fe.value,onClick:Nt,onScrollPassive:G},Rn())),L(nc,{ref:E,modelValue:r.value,position:e.useInput===!0?"top":void 0,transitionShow:w,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:_c,onBeforeHide:Ae,onHide:Ee,onShow:Xe},()=>L("div",{class:"q-select__dialog"+(Le.value===!0?" q-select__dialog--dark q-dark":"")+(u.value===!0?" q-select__dialog--focused":"")},N))}function Ae(N){yc(N),E.value!==null&&E.value.__updateRefocusTarget(J.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),J.focused.value=!1}function Ee(N){ot(),J.focused.value===!1&&n("blur",N),an()}function Xe(){const N=document.activeElement;(N===null||N.id!==J.targetUid.value)&&B.value!==null&&B.value!==N&&B.value.focus(),$e()}function Pe(){r.value!==!0&&(s.value=-1,i.value===!0&&(i.value=!1),J.focused.value===!1&&(C!==null&&(clearTimeout(C),C=null),J.innerLoading.value===!0&&(n("filterAbort"),J.innerLoading.value=!1,c.value=!1)))}function We(N){J.editable.value===!0&&(_===!0?(J.onControlFocusin(N),r.value=!0,bt(()=>{J.focus()})):J.focus(),e.onFilter!==void 0?yn(l.value):(k.value!==!0||t["no-option"]!==void 0)&&(i.value=!0))}function ot(){r.value=!1,Pe()}function an(){e.useInput===!0&&Co(e.multiple!==!0&&e.fillInput===!0&&H.value.length!==0&&oe.value(H.value[0])||"",!0,!0)}function Jr(N){let qe=-1;if(N===!0){if(H.value.length!==0){const Be=le.value(H.value[0]);qe=e.options.findIndex(tt=>ho(le.value(tt),Be))}ae(qe)}re(qe)}function kh(N,qe){i.value===!0&&J.innerLoading.value===!1&&(ae(-1,!0),bt(()=>{i.value===!0&&J.innerLoading.value===!1&&(N>qe?ae():Jr(!0))}))}function bc(){r.value===!1&&T.value!==null&&T.value.updatePosition()}function _c(N){N!==void 0&&Jt(N),n("popupShow",N),J.hasPopupOpen=!0,J.onControlFocusin(N)}function yc(N){N!==void 0&&Jt(N),n("popupHide",N),J.hasPopupOpen=!1,J.onControlFocusout(N)}function wc(){_=o.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?t["no-option"]!==void 0||e.onFilter!==void 0||k.value===!1:!0),w=o.platform.is.ios===!0&&_===!0&&e.useInput===!0?"fade":e.transitionShow}return Ir(wc),qr(bc),wc(),wt(()=>{d!==null&&clearTimeout(d),p!==null&&clearTimeout(p)}),Object.assign(a,{showPopup:We,hidePopup:ot,removeAtIndex:Ie,add:Ue,toggleOption:Ke,getOptionIndex:()=>s.value,setOptionIndex:re,moveOptionSelection:he,filter:yn,updateMenuPosition:bc,updateInputValue:Co,isOptionSelected:ke,getEmittingOptionValue:je,isOptionDisabled:(...N)=>ie.value.apply(null,N)===!0,getOptionValue:(...N)=>le.value.apply(null,N),getOptionLabel:(...N)=>oe.value.apply(null,N)}),Object.assign(J,{innerValue:H,fieldClass:Q(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:x,targetRef:B,hasValue:Me,showPopup:We,floatingLabel:Q(()=>e.hideSelected!==!0&&Me.value===!0||typeof l.value=="number"||l.value.length!==0||li(e.displayValue)),getControlChild:()=>{if(J.editable.value!==!1&&(r.value===!0||k.value!==!0||t["no-option"]!==void 0))return _===!0?se():Hr();J.hasPopupOpen===!0&&(J.hasPopupOpen=!1)},controlEvents:{onFocusin(N){J.onControlFocusin(N)},onFocusout(N){J.onControlFocusout(N,()=>{an(),Pe()})},onClick(N){var qe;if(Nt(N),_!==!0&&i.value===!0){Pe(),(qe=B.value)==null||qe.focus();return}We(N)}},getControl:N=>{const qe=mi(),Be=N===!0||r.value!==!0||_!==!0;if(e.useInput===!0)qe.push(qa(N,Be));else if(J.editable.value===!0){const ht=Be===!0?te.value:void 0;qe.push(L("input",{ref:Be===!0?B:void 0,key:"d_t",class:"q-select__focus-target",id:Be===!0?J.targetUid.value:void 0,value:Y.value,readonly:!0,"data-autofocus":N===!0||e.autofocus===!0||void 0,...ht,onKeydown:kt,onKeyup:He,onKeypress:et})),Be===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&qe.push(L("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Re}))}if(F.value!==void 0&&e.disable!==!0&&me.value.length!==0){const ht=me.value.map(xt=>L("option",{value:xt,selected:!0}));qe.push(L("select",{class:"hidden",name:F.value,multiple:e.multiple},ht))}const tt=e.useInput===!0||Be!==!0?void 0:J.splitAttrs.attributes.value;return L("div",{class:"q-field__native row items-center",...tt,...J.splitAttrs.listeners.value},qe)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[L(nt,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:Se.value})]:null}),Xl(J)}}),Ene="component",Dne={docsUrl:"https://v2.quasar.dev/vue-components/dialog"},Bne={"model-value":{type:"Boolean",desc:"Model of the component (shown/hidden); use v-model",required:!0,category:"model"},persistent:{type:"Boolean",desc:"Cannot dismiss by clicking outside or hitting ESC",category:"behavior"},"no-esc-dismiss":{type:"Boolean",desc:"Cannot dismiss by hitting ESC key",category:"behavior"},"no-backdrop-dismiss":{type:"Boolean",desc:"Cannot dismiss by clicking outside",category:"behavior"},"no-route-dismiss":{type:"Boolean",desc:"Route change won't dismiss the dialog",category:"behavior"},"auto-close":{type:"Boolean",desc:"Any click inside the dialog will close it",category:"behavior"},seamless:{type:"Boolean",desc:"No backdrop; user can interact with the rest of the page",category:"content"},maximized:{type:"Boolean",desc:"Put dialog into maximized (fullscreen) mode",category:"content"},"full-width":{type:"Boolean",desc:"Dialog renders with same width as the window",category:"content"},"full-height":{type:"Boolean",desc:"Dialog renders with same height as the window",category:"content"},position:{type:"String",default:"'standard'",desc:"Stick dialog to a side (top, right, bottom, left)",category:"content"},square:{type:"Boolean",desc:"Forces squared borders on content",category:"style"},"backdrop-filter":{type:"String",desc:"CSS backdrop-filter value (e.g. 'blur(4px)')",category:"style"},"transition-show":{type:"String",desc:"Transition when showing the dialog",category:"transition"},"transition-hide":{type:"String",desc:"Transition when hiding the dialog",category:"transition"},"no-refocus":{type:"Boolean",desc:"Don't refocus previous element when dialog hides",category:"behavior"},"no-focus":{type:"Boolean",desc:"Don't focus dialog when it shows",category:"behavior"},"no-shake":{type:"Boolean",desc:"Disable shake animation on dismiss attempt",category:"behavior"},"allow-focus-outside":{type:"Boolean",desc:"Allow elements outside dialog to receive focus",category:"behavior"}},Pne={default:{desc:"Default slot for dialog content"}},Mne={"update:model-value":{desc:"Emitted when the dialog visibility changes"},show:{desc:"Emitted after the dialog has been shown"},"before-show":{desc:"Emitted before the dialog is shown"},hide:{desc:"Emitted after the dialog has been hidden"},"before-hide":{desc:"Emitted before the dialog is hidden"},shake:{desc:"Emitted when the dialog shakes to catch attention"},"escape-key":{desc:"Emitted when ESC key is pressed (if not persistent)"}},jne={type:Ene,meta:Dne,props:Bne,slots:Pne,events:Mne},$ne={name:"ShowcaseDialog",label:"Quasar Dialog",icon:"picture_in_picture",components:{QBtn:it,QDialog:nc,QCard:oc,QCardSection:Do,QCardActions:ac,QIcon:nt,QSpace:Sne,QSeparator:ui,QList:ko,QItem:jn,QItemSection:$n,QItemLabel:Ia,QBadge:Bm,QInnerLoading:Pm,QSpinner:yo,QInput:Fr,QSelect:Vr},apiJson:jne,importName:"QDialog",importFrom:"quasar",data(){return{isLoading:!1,simple:!1,card:!1,persistent:!1,positioned:!1,positionValue:"top",maximized:!1,fullWidth:!1,seamless:!1,scrollable:!1,stickyScroll:!1,longForm:!1,positions:["top","right","bottom","left"],form:{name:"",sector:"",objective:"",secondary:"",priority:"Standard",crew:"",duration:"",notes:""},crewList:[{name:"Cdr. Vasquez",role:"First Officer",icon:"military_tech",status:"Active"},{name:"Lt. Okafor",role:"Helm",icon:"explore",status:"Active"},{name:"Lt. Cdr. Chen",role:"Chief Engineer",icon:"engineering",status:"Active"},{name:"Dr. Petrov",role:"Chief Medical",icon:"medical_services",status:"Active"},{name:"Ens. Nakamura",role:"Science Officer",icon:"science",status:"Active"},{name:"Lt. Mbeki",role:"Tactical",icon:"shield",status:"Active"},{name:"Lt. Johansson",role:"Communications",icon:"cell_tower",status:"On Leave"},{name:"Ens. Park",role:"Navigation",icon:"near_me",status:"Active"},{name:"Cdr. Al-Rashid",role:"Security Chief",icon:"security",status:"Active"},{name:"Lt. Torres",role:"Operations",icon:"settings",status:"On Leave"}]}},methods:{openPositioned(e){this.positionValue=e,this.positioned=!0}}},Rne={class:"jShowcase_row jShowcase_column"},One={class:"jShowcase_group"},Fne={class:"jShowcase_items"},Vne={class:"jShowcase_group"},Nne={class:"jShowcase_items"},zne={class:"text-h6"},Hne={class:"jShowcase_group"},Une={class:"jShowcase_items"},Wne={class:"jShowcase_group"},Jne={class:"jShowcase_items"},Gne={class:"text-caption",style:{color:"var(--q-text-muted)"}};function Yne(e,t,n,a,o,i){const r=X("QBtn"),s=X("QCardSection"),l=X("QCardActions"),u=X("QCard"),c=X("QDialog"),d=X("QIcon"),p=X("QSpace"),g=X("QSeparator"),_=X("QItemSection"),I=X("QItemLabel"),C=X("QBadge"),b=X("QItem"),w=X("QList"),y=X("QSpinner"),m=X("QInnerLoading"),x=X("QInput"),B=X("QSelect");return M(),ee("div",Rne,[v("div",One,[t[28]||(t[28]=v("span",{class:"jShowcase_title"},"Basic",-1)),v("div",Fne,[f(r,{color:"primary",label:"Simple",onClick:t[0]||(t[0]=T=>o.simple=!0)}),f(r,{color:"accent",label:"With Card",onClick:t[1]||(t[1]=T=>o.card=!0)}),f(r,{color:"secondary",label:"Persistent",onClick:t[2]||(t[2]=T=>o.persistent=!0)})])]),f(c,{modelValue:o.simple,"onUpdate:modelValue":t[3]||(t[3]=T=>o.simple=T)},{default:S(()=>[f(u,null,{default:S(()=>[f(s,null,{default:S(()=>[...t[29]||(t[29]=[v("div",{class:"text-h6"},"Incoming Transmission",-1)])]),_:1}),f(s,null,{default:S(()=>[...t[30]||(t[30]=[K(" Signal detected from sector 7G. Awaiting decryption. ",-1)])]),_:1}),f(l,{align:"right"},{default:S(()=>[we(f(r,{color:"primary",label:"Dismiss"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c,{modelValue:o.card,"onUpdate:modelValue":t[4]||(t[4]=T=>o.card=T)},{default:S(()=>[f(u,null,{default:S(()=>[f(s,{class:"row items-center"},{default:S(()=>[f(d,{name:"warning",size:"28px",color:"warning",class:"q-mr-sm"}),t[31]||(t[31]=v("span",{class:"text-h6"},"Confirm Action",-1))]),_:1}),f(s,null,{default:S(()=>[...t[32]||(t[32]=[K(" Divert auxiliary power to forward shields? This will reduce life support to minimum levels on decks 7 through 12. ",-1)])]),_:1}),f(l,{align:"right"},{default:S(()=>[we(f(r,{class:"ghost",label:"Cancel"},null,512),[[Te]]),we(f(r,{color:"negative",label:"Confirm"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c,{modelValue:o.persistent,"onUpdate:modelValue":t[5]||(t[5]=T=>o.persistent=T),persistent:""},{default:S(()=>[f(u,null,{default:S(()=>[f(s,null,{default:S(()=>[...t[33]||(t[33]=[v("div",{class:"text-h6"},"Authorization Required",-1)])]),_:1}),f(s,null,{default:S(()=>[...t[34]||(t[34]=[K(" This dialog cannot be dismissed by clicking outside or pressing ESC. Enter command override code. ",-1)])]),_:1}),f(l,{align:"right"},{default:S(()=>[we(f(r,{color:"accent",label:"Override"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),v("div",Vne,[t[35]||(t[35]=v("span",{class:"jShowcase_title"},"Positions",-1)),v("div",Nne,[(M(!0),ee(Ve,null,ut(o.positions,T=>(M(),_e(r,{key:T,color:"info",label:T,onClick:E=>i.openPositioned(T)},null,8,["label","onClick"]))),128))])]),f(c,{modelValue:o.positioned,"onUpdate:modelValue":t[6]||(t[6]=T=>o.positioned=T),position:o.positionValue},{default:S(()=>[f(u,null,{default:S(()=>[f(s,null,{default:S(()=>[v("div",zne,"Position: "+xe(o.positionValue),1)]),_:1}),f(s,null,{default:S(()=>[K(" Dialog anchored to the "+xe(o.positionValue)+" of the viewport. ",1)]),_:1}),f(l,{align:"right"},{default:S(()=>[we(f(r,{color:"info",label:"Close"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue","position"]),v("div",Hne,[t[36]||(t[36]=v("span",{class:"jShowcase_title"},"Sizes",-1)),v("div",Une,[f(r,{color:"warning",label:"Maximized",onClick:t[7]||(t[7]=T=>o.maximized=!0)}),f(r,{color:"warning",label:"Full Width",onClick:t[8]||(t[8]=T=>o.fullWidth=!0)}),f(r,{color:"negative",label:"Seamless",onClick:t[9]||(t[9]=T=>o.seamless=!0)})])]),f(c,{modelValue:o.maximized,"onUpdate:modelValue":t[10]||(t[10]=T=>o.maximized=T),maximized:""},{default:S(()=>[f(u,{class:"showcaseDialog_cardMax"},{default:S(()=>[f(s,{class:"row items-center"},{default:S(()=>[t[37]||(t[37]=v("span",{class:"text-h6"},"Maximized Dialog",-1)),f(p),we(f(r,{class:"ghost",icon:"close"},null,512),[[Te]])]),_:1}),f(s,null,{default:S(()=>[...t[38]||(t[38]=[K(" This dialog fills the entire viewport. ",-1)])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c,{modelValue:o.fullWidth,"onUpdate:modelValue":t[11]||(t[11]=T=>o.fullWidth=T),"full-width":""},{default:S(()=>[f(u,null,{default:S(()=>[f(s,null,{default:S(()=>[...t[39]||(t[39]=[v("div",{class:"text-h6"},"Full Width",-1)])]),_:1}),f(s,null,{default:S(()=>[...t[40]||(t[40]=[K(" Spans the full width of the viewport. ",-1)])]),_:1}),f(l,{align:"right"},{default:S(()=>[we(f(r,{color:"warning",label:"Close"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c,{modelValue:o.seamless,"onUpdate:modelValue":t[12]||(t[12]=T=>o.seamless=T),seamless:"",position:"bottom"},{default:S(()=>[f(u,null,{default:S(()=>[f(s,{class:"row items-center"},{default:S(()=>[f(d,{name:"info",size:"24px",color:"info",class:"q-mr-sm"}),t[41]||(t[41]=v("span",null,"Seamless — no backdrop, page remains interactive.",-1)),f(p),we(f(r,{class:"ghost",icon:"close","icon-size":"14px"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),v("div",Wne,[t[42]||(t[42]=v("span",{class:"jShowcase_title"},"Scroll Handling",-1)),v("div",Jne,[f(r,{color:"primary",label:"Scrollable Content",onClick:t[13]||(t[13]=T=>o.scrollable=!0)}),f(r,{color:"accent",label:"Sticky Header/Footer",onClick:t[14]||(t[14]=T=>o.stickyScroll=!0)}),f(r,{color:"secondary",label:"Long Form",onClick:t[15]||(t[15]=T=>o.longForm=!0)})])]),f(c,{modelValue:o.scrollable,"onUpdate:modelValue":t[16]||(t[16]=T=>o.scrollable=T),style:{display:"block"}},{default:S(()=>[f(u,null,{default:S(()=>[f(s,null,{default:S(()=>[...t[43]||(t[43]=[v("div",{class:"text-h6"},"Ship Systems Log",-1)])]),_:1}),f(g),f(s,{class:"scroll"},{default:S(()=>[(M(),ee(Ve,null,ut(122,T=>v("p",{key:T},"Log entry "+xe(T)+": Routine diagnostic of subsystem "+xe(String.fromCharCode(64+T))+". All parameters within operational tolerance. Variance from baseline: "+xe((Math.random()*2).toFixed(3))+"%. Timestamp: stardate "+xe(41e3+T*7)+"."+xe(T)+".",1)),64))]),_:1}),f(g),f(l,{align:"right"},{default:S(()=>[we(f(r,{color:"primary",label:"Close"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c,{modelValue:o.stickyScroll,"onUpdate:modelValue":t[18]||(t[18]=T=>o.stickyScroll=T)},{default:S(()=>[f(u,{style:{"min-width":"500px","max-width":"80vw"}},{default:S(()=>[f(s,{class:"row items-center q-pb-none"},{default:S(()=>[t[44]||(t[44]=v("div",{class:"text-h6"},"Crew Manifest",-1)),f(p),we(f(r,{class:"ghost",icon:"close"},null,512),[[Te]])]),_:1}),f(g,{class:"q-mt-sm"}),f(s,{style:{"max-height":"50vh"},class:"scroll"},{default:S(()=>[f(w,null,{default:S(()=>[(M(!0),ee(Ve,null,ut(o.crewList,(T,E)=>(M(),_e(b,{key:E},{default:S(()=>[f(_,{avatar:""},{default:S(()=>[f(d,{name:T.icon,color:"accent"},null,8,["name"])]),_:2},1024),f(_,null,{default:S(()=>[f(I,null,{default:S(()=>[K(xe(T.name),1)]),_:2},1024),f(I,{caption:""},{default:S(()=>[K(xe(T.role),1)]),_:2},1024)]),_:2},1024),f(_,{side:""},{default:S(()=>[f(C,{outline:"",color:T.status==="Active"?"positive":"warning",label:T.status},null,8,["color","label"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),f(m,{showing:o.isLoading},{default:S(()=>[f(y,{size:"50px",color:"primary"})]),_:1},8,["showing"]),f(g),f(s,{class:"row justify-between items-center q-py-sm"},{default:S(()=>[v("span",Gne,xe(o.crewList.length)+" officers",1),f(r,{class:"ghost",icon:"refresh",label:"Toggle",onClick:t[17]||(t[17]=T=>o.isLoading=!o.isLoading)}),we(f(r,{color:"accent",icon:"star",label:"Acknowledge"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),f(c,{modelValue:o.longForm,"onUpdate:modelValue":t[27]||(t[27]=T=>o.longForm=T)},{default:S(()=>[f(u,{style:{"min-width":"33vw","max-width":"80vw"}},{default:S(()=>[f(s,{class:"row items-center q-pb-none"},{default:S(()=>[t[45]||(t[45]=v("div",{class:"text-h6"},"Mission Parameters",-1)),f(p),we(f(r,{class:"ghost",icon:"close"},null,512),[[Te]])]),_:1}),f(g,{class:"q-mt-sm"}),f(s,{class:"scroll",style:{"max-height":"300px"}},{default:S(()=>[f(x,{modelValue:o.form.name,"onUpdate:modelValue":t[19]||(t[19]=T=>o.form.name=T),label:"Mission name",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(x,{modelValue:o.form.sector,"onUpdate:modelValue":t[20]||(t[20]=T=>o.form.sector=T),label:"Target sector",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(x,{modelValue:o.form.objective,"onUpdate:modelValue":t[21]||(t[21]=T=>o.form.objective=T),label:"Primary objective",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(x,{modelValue:o.form.secondary,"onUpdate:modelValue":t[22]||(t[22]=T=>o.form.secondary=T),label:"Secondary objective",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(B,{modelValue:o.form.priority,"onUpdate:modelValue":t[23]||(t[23]=T=>o.form.priority=T),options:["Critical","High","Standard","Low"],label:"Priority",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(x,{modelValue:o.form.crew,"onUpdate:modelValue":t[24]||(t[24]=T=>o.form.crew=T),label:"Crew count",type:"number",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(x,{modelValue:o.form.duration,"onUpdate:modelValue":t[25]||(t[25]=T=>o.form.duration=T),label:"Estimated duration (days)",type:"number",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),f(x,{modelValue:o.form.notes,"onUpdate:modelValue":t[26]||(t[26]=T=>o.form.notes=T),label:"Additional notes",type:"textarea",outlined:"",dense:"",autogrow:""},null,8,["modelValue"])]),_:1}),f(g),f(l,{align:"right"},{default:S(()=>[we(f(r,{class:"ghost",label:"Cancel"},null,512),[[Te]]),we(f(r,{color:"secondary",label:"Submit"},null,512),[[Te]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Kne=ze($ne,[["render",Yne]]),Zne=Object.freeze(Object.defineProperty({__proto__:null,default:Kne},Symbol.toStringTag,{value:"Module"})),Xne={name:"JCurrentYear",computed:{year(){return new Date().getFullYear()}}};function eoe(e,t,n,a,o,i){return M(),ee("span",null,xe(i.year),1)}const ic=ze(Xne,[["render",eoe]]),toe={name:"ShowcaseJCurrentYear",components:{JCurrentYear:ic},label:"Current Year",icon:"handyman",apiJson:null,importName:"JCurrentYear",code:null},noe={class:"jShowcase_row jShowcase_column"},ooe={class:"jShowcase_group"},aoe={class:"jShowcase_items"},ioe={class:"demoText"},roe={class:"jShowcase_group"},soe={class:"jShowcase_items"},loe={class:"demoText"};function coe(e,t,n,a,o,i){const r=X("JCurrentYear");return M(),ee("div",noe,[t[5]||(t[5]=v("div",{class:"jShowcase_info"},[v("p",null,[K("Renders the current year as a "),v("code",null,"<span>"),K(". Drop it into copyright lines so you never have to hardcode the year.")])],-1)),v("div",ooe,[t[2]||(t[2]=v("span",{class:"jShowcase_title"},"Inline",-1)),v("div",aoe,[v("span",ioe,[t[0]||(t[0]=K("© ",-1)),f(r),t[1]||(t[1]=K(" Components",-1))])])]),v("div",roe,[t[4]||(t[4]=v("span",{class:"jShowcase_title"},"Standalone",-1)),v("div",soe,[v("span",loe,[t[3]||(t[3]=K("Current year: ",-1)),f(r)])])])])}const uoe=ze(toe,[["render",coe],["__scopeId","data-v-7b8f53ad"]]),doe=Object.freeze(Object.defineProperty({__proto__:null,default:uoe},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $m;const Nr=e=>$m=e,Rm=Symbol();function cl(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Za;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Za||(Za={}));function foe(){const e=tf(!0),t=e.run(()=>ge({}));let n=[],a=[];const o=Ca({install(i){Nr(o),o._a=i,i.provide(Rm,o),i.config.globalProperties.$pinia=o,a.forEach(r=>n.push(r)),a=[]},use(i){return this._a?n.push(i):a.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Om=()=>{};function qd(e,t,n,a=Om){e.add(t);const o=()=>{e.delete(t)&&a()};return!n&&nf()&&jh(o),o}function ta(e,...t){e.forEach(n=>{n(...t)})}const poe=e=>e(),Td=Symbol(),Es=Symbol();function ul(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],o=e[n];cl(o)&&cl(a)&&e.hasOwnProperty(n)&&!St(a)&&!Jn(a)?e[n]=ul(o,a):e[n]=a}return e}const moe=Symbol();function hoe(e){return!cl(e)||!Object.prototype.hasOwnProperty.call(e,moe)}const{assign:co}=Object;function goe(e){return!!(St(e)&&e.effect)}function voe(e,t,n,a){const{state:o,actions:i,getters:r}=t,s=n.state.value[e];let l;function u(){s||(n.state.value[e]=o?o():{});const c=sg(n.state.value[e]);return co(c,i,Object.keys(r||{}).reduce((d,p)=>(d[p]=Ca(Q(()=>{Nr(n);const g=n._s.get(e);return r[p].call(g,g)})),d),{}))}return l=Fm(e,u,t,n,a,!0),l}function Fm(e,t,n={},a,o,i){let r;const s=co({actions:{}},n),l={deep:!0};let u,c,d=new Set,p=new Set,g;const _=a.state.value[e];!i&&!_&&(a.state.value[e]={});let I;function C(E){let O;u=c=!1,typeof E=="function"?(E(a.state.value[e]),O={type:Za.patchFunction,storeId:e,events:g}):(ul(a.state.value[e],E),O={type:Za.patchObject,payload:E,storeId:e,events:g});const F=I=Symbol();bt().then(()=>{I===F&&(u=!0)}),c=!0,ta(d,O,a.state.value[e])}const b=i?function(){const{state:O}=n,F=O?O():{};this.$patch(V=>{co(V,F)})}:Om;function w(){r.stop(),d.clear(),p.clear(),a._s.delete(e)}const y=(E,O="")=>{if(Td in E)return E[Es]=O,E;const F=function(){Nr(a);const V=Array.from(arguments),j=new Set,U=new Set;function D(Z){j.add(Z)}function R(Z){U.add(Z)}ta(p,{args:V,name:F[Es],store:x,after:D,onError:R});let ae;try{ae=E.apply(this&&this.$id===e?this:x,V)}catch(Z){throw ta(U,Z),Z}return ae instanceof Promise?ae.then(Z=>(ta(j,Z),Z)).catch(Z=>(ta(U,Z),Promise.reject(Z))):(ta(j,ae),ae)};return F[Td]=!0,F[Es]=O,F},m={_p:a,$id:e,$onAction:qd.bind(null,p),$patch:C,$reset:b,$subscribe(E,O={}){const F=qd(d,E,O.detached,()=>V()),V=r.run(()=>Oe(()=>a.state.value[e],j=>{(O.flush==="sync"?c:u)&&E({storeId:e,type:Za.direct,events:g},j)},co({},l,O)));return F},$dispose:w},x=No(m);a._s.set(e,x);const T=(a._a&&a._a.runWithContext||poe)(()=>a._e.run(()=>(r=tf()).run(()=>t({action:y}))));for(const E in T){const O=T[E];if(St(O)&&!goe(O)||Jn(O))i||(_&&hoe(O)&&(St(O)?O.value=_[E]:ul(O,_[E])),a.state.value[e][E]=O);else if(typeof O=="function"){const F=y(O,E);T[E]=F,s.actions[E]=O}}return co(x,T),co(Ze(x),T),Object.defineProperty(x,"$state",{get:()=>a.state.value[e],set:E=>{C(O=>{co(O,E)})}}),a._p.forEach(E=>{co(x,r.run(()=>E({store:x,app:a._a,pinia:a,options:s})))}),_&&i&&n.hydrate&&n.hydrate(x.$state,_),u=!0,c=!0,x}/*! #__NO_SIDE_EFFECTS__ */function boe(e,t,n){let a;const o=typeof t=="function";a=o?n:t;function i(r,s){const l=vg();return r=r||(l?vo(Rm,null):null),r&&Nr(r),r=$m,r._s.has(e)||(o?Fm(e,t,a,r):voe(e,a,r)),r._s.get(e)}return i.$id=e,i}function _oe(e){return vb(e)===!0?"__q_date|"+e.getTime():bb(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function yoe(e){if(e.length<9)return e;const n=e.substring(0,8),a=e.substring(9);switch(n){case"__q_date":const o=Number(a);return new Date(Number.isNaN(o)===!0?a:o);case"__q_expr":return new RegExp(a);case"__q_numb":return Number(a);case"__q_bool":return a==="1";case"__q_strn":return String(a);case"__q_objt":return JSON.parse(a);default:return e}}function Vm(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:Yt,setItem:Yt,remove:Yt,removeItem:Yt,clear:Yt,isEmpty:()=>!0}}function Nm(e){const t=window[e+"Storage"],n=r=>{const s=t.getItem(r);return s?yoe(s):null},a=r=>t.getItem(r)!==null,o=(r,s)=>{t.setItem(r,_oe(s))},i=r=>{t.removeItem(r)};return{has:a,hasItem:a,getLength:()=>t.length,getItem:n,getIndex:r=>r<t.length?n(t.key(r)):null,getKey:r=>r<t.length?t.key(r):null,getAll:()=>{let r;const s={},l=t.length;for(let u=0;u<l;u++)r=t.key(u),s[r]=n(r);return s},getAllKeys:()=>{const r=[],s=t.length;for(let l=0;l<s;l++)r.push(t.key(l));return r},set:o,setItem:o,remove:i,removeItem:i,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const zm=st.has.webStorage===!1?Vm():Nm("local"),uo={install({$q:e}){e.localStorage=zm}};Object.assign(uo,zm);const rc=boe("theme",{state:()=>({currentTheme:null,themes:null,isDark:!1,ready:!1}),getters:{themeLocked:e=>!e.themes||Object.keys(e.themes).length<=1},actions:{toggleDark(){this.isDark=!this.isDark,uo.set("isDark",this.isDark),At.set(this.isDark),(this.themes!==null||this.currentTheme!==null)&&this.applyTheme(this.currentTheme,this.isDark)},async _loadStyleTag(e,t){var r;const n=`${e}-${t}`,a=document.body.querySelector(`style[data-theme="${n}"]`);if(a)return a;const o=(r=this.themes[e])==null?void 0:r[t];if(!o)return null;const i=document.createElement("style");return i.setAttribute("data-theme",n),i.textContent=await o(),i},async applyTheme(e,t){if(!this.themes[e])return;const n=this._loadedTheme&&this._loadedTheme!==e;if(n&&(this.ready=!1),n&&this._styles){for(const a of Object.values(this._styles))a.remove();this._styles=null}if(this._styles){const a=t?"dark":"light";this._styles[a]&&document.body.appendChild(this._styles[a])}else{const[a,o,i]=await Promise.all([this._loadStyleTag(e,"common"),this._loadStyleTag(e,"dark"),this._loadStyleTag(e,"light")]);this._styles={},a&&(this._styles.common=a),o&&(this._styles.dark=o),i&&(this._styles.light=i);const r=t?"light":"dark",s=t?"dark":"light";this._styles.common&&document.body.appendChild(this._styles.common),this._styles[r]&&document.body.appendChild(this._styles[r]),this._styles[s]&&document.body.appendChild(this._styles[s])}this._loadedTheme=e,uo.set("theme",e),uo.set("themeDefault",this._defaultTheme),await document.fonts.ready,this.ready=!0},async initialize({theme:e,themes:t}){this.themes=t,this._defaultTheme=e;const n=uo.getItem("theme"),a=uo.getItem("themeDefault");a===null&&uo.set("themeDefault",e);const o=a!==null&&a!==e;this.currentTheme=!o&&n&&t[n]?n:e;const i=uo.getItem("isDark");i!==null?(this.isDark=i,At.set(this.isDark)):At&&(this.isDark=At.isActive),this.themes[this.currentTheme]&&await this.applyTheme(this.currentTheme,this.isDark)}}}),woe={name:"JDarkSwitcher",components:{QBtn:it},computed:{themeStore(){try{return rc()}catch{return null}},isDark(){var e;return((e=this.themeStore)==null?void 0:e.isDark)??!1}},methods:{toggle(){this.themeStore&&this.themeStore.toggleDark()}}};function Soe(e,t,n,a,o,i){const r=X("QBtn");return M(),_e(r,{class:"jDarkSwitcher",icon:i.isDark?"dark_mode":"light_mode",round:"",flat:"",size:"sm",color:i.isDark?"accent":"warning",onClick:i.toggle},null,8,["icon","color","onClick"])}const sc=ze(woe,[["render",Soe],["__scopeId","data-v-492add97"]]),koe={name:"ShowcaseJDarkSwitcher",components:{JDarkSwitcher:sc},label:"Dark Switcher",icon:"dark_mode",apiJson:null,importName:"JDarkSwitcher",inject:["showcaseCopy"],code:null,methods:{copy(e){this.showcaseCopy(e)}}},xoe={class:"jShowcase_row jShowcase_column"},Coe={class:"jShowcase_info"},Qoe={class:"jShowcase_group"},Aoe={class:"jShowcase_items"},Ioe={class:"jShowcase_group"},qoe={class:"jShowcase_items"},Toe={class:"jShowcase_group"},Loe={class:"jShowcase_items"},Eoe={class:"jShowcase_group"},Doe={class:"jShowcase_items"},Boe={class:"jShowcase_group"},Poe={class:"jShowcase_items"},Moe={class:"jShowcase_group"},joe={class:"jShowcase_items"};function $oe(e,t,n,a,o,i){const r=X("JDarkSwitcher");return M(),ee("div",xoe,[v("div",Coe,[t[9]||(t[9]=v("p",null,"Round button that toggles dark/light mode via the theme store. Drop it into headers or toolbars.",-1)),v("p",null,[t[3]||(t[3]=K("Accepts all ",-1)),t[4]||(t[4]=v("a",{class:"jShowcase_infoLink",href:"#Buttons/Btn"},"QBtn",-1)),t[5]||(t[5]=K(" props (e.g. ",-1)),v("code",{onClick:t[0]||(t[0]=s=>i.copy("size"))},"size"),t[6]||(t[6]=K(", ",-1)),v("code",{onClick:t[1]||(t[1]=s=>i.copy("color"))},"color"),t[7]||(t[7]=K(", ",-1)),v("code",{onClick:t[2]||(t[2]=s=>i.copy("outline"))},"outline"),t[8]||(t[8]=K(") — they pass through to the underlying button.",-1))])]),v("div",Qoe,[t[10]||(t[10]=v("span",{class:"jShowcase_title"},"Default",-1)),v("div",Aoe,[f(r)])]),v("div",Ioe,[t[11]||(t[11]=v("span",{class:"jShowcase_title"},"Sizes",-1)),v("div",qoe,[f(r,{size:"xs"}),f(r,{size:"sm"}),f(r,{size:"md"}),f(r,{size:"lg"})])]),v("div",Toe,[t[12]||(t[12]=v("span",{class:"jShowcase_title"},"Custom Colors",-1)),v("div",Loe,[f(r,{color:"primary"}),f(r,{color:"secondary",round:!1,label:"Toggle"}),f(r,{color:"info"}),f(r,{color:"negative"})])]),v("div",Eoe,[t[13]||(t[13]=v("span",{class:"jShowcase_title"},"Outline",-1)),v("div",Doe,[f(r,{outline:""}),f(r,{outline:"",color:"primary"}),f(r,{outline:"",color:"accent"})])]),v("div",Boe,[t[14]||(t[14]=v("span",{class:"jShowcase_title"},"Raised (flat=false)",-1)),v("div",Poe,[f(r,{flat:!1}),f(r,{flat:!1,color:"primary"}),f(r,{flat:!1,color:"accent"})])]),v("div",Moe,[t[15]||(t[15]=v("span",{class:"jShowcase_title"},"Glossy",-1)),v("div",joe,[f(r,{glossy:"",flat:!1,color:"primary"}),f(r,{glossy:"",flat:!1,color:"accent"})])])])}const Roe=ze(koe,[["render",$oe]]),Ooe=Object.freeze(Object.defineProperty({__proto__:null,default:Roe},Symbol.toStringTag,{value:"Module"})),lc=Fe({name:"QAvatar",props:{...wo,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=So(e),a=Q(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),o=Q(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const i=e.icon!==void 0?[L(nt,{name:e.icon})]:void 0;return L("div",{class:a.value,style:n.value},[L("div",{class:"q-avatar__content row flex-center overflow-hidden",style:o.value},Bl(t.default,i))])}}}),Foe={name:"ShowcaseActiveList",components:{QList:ko,QItem:jn,QItemSection:$n,QItemLabel:Ia,QIcon:nt,QAvatar:lc},label:"Selectable & Multi-line",icon:"list",importName:"QList",importFrom:"quasar",order:3,data(){return{selected:"recon",missions:[{id:"recon",name:"Recon Sweep",icon:"radar",desc:"Deep space reconnaissance of uncharted sector"},{id:"escort",name:"Convoy Escort",icon:"local_shipping",desc:"Protect supply convoy through hostile corridor"},{id:"rescue",name:"Search & Rescue",icon:"sos",desc:"Locate missing vessel near asteroid belt"},{id:"survey",name:"Planetary Survey",icon:"public",desc:"Catalog resources on newly discovered exoplanet"}],messages:[{from:"Admiral Zhao",subject:"Priority Alpha",body:"Fleet command has issued new coordinates. Rendezvous at waypoint Echo-7 by 0600. Full tactical readiness required.",time:"14:32",starred:!0},{from:"Engineering Bay",subject:"Maintenance Complete",body:"Port-side thruster realignment finished ahead of schedule. All subsystems passed diagnostics. Ready for departure.",time:"12:15",starred:!1},{from:"Science Div.",subject:"Anomaly Detected",body:"Unusual electromagnetic signature detected at bearing 270 mark 15. Recommend investigation when schedule permits.",time:"09:48",starred:!0}]}}},Voe={class:"jShowcase_row jShowcase_column"},Noe={class:"jShowcase_group"},zoe={class:"jShowcase_group"};function Hoe(e,t,n,a,o,i){const r=X("QIcon"),s=X("QItemSection"),l=X("QItemLabel"),u=X("QItem"),c=X("QList"),d=X("QAvatar");return M(),ee("div",Voe,[v("div",Noe,[t[0]||(t[0]=v("span",{class:"jShowcase_title"},"Selectable List",-1)),f(c,{bordered:"",separator:""},{default:S(()=>[(M(!0),ee(Ve,null,ut(o.missions,p=>we((M(),_e(u,{key:p.id,clickable:"",active:o.selected===p.id,style:Dn(o.selected===p.id?"background: color-mix(in srgb, var(--q-accent) 10%, transparent)":""),onClick:g=>o.selected=p.id},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:p.icon,color:o.selected===p.id?"accent":"grey"},null,8,["name","color"])]),_:2},1024),f(s,null,{default:S(()=>[f(l,{class:ft({"text-weight-bold":o.selected===p.id})},{default:S(()=>[K(xe(p.name),1)]),_:2},1032,["class"]),f(l,{caption:"",lines:"1"},{default:S(()=>[K(xe(p.desc),1)]),_:2},1024)]),_:2},1024),f(s,{side:""},{default:S(()=>[o.selected===p.id?(M(),_e(r,{key:0,name:"radio_button_checked",color:"accent"})):(M(),_e(r,{key:1,name:"radio_button_unchecked",color:"grey-7"}))]),_:2},1024)]),_:2},1032,["active","style","onClick"])),[[Kt]])),128))]),_:1})]),v("div",zoe,[t[1]||(t[1]=v("span",{class:"jShowcase_title"},"Multi-line Items",-1)),f(c,{bordered:"",style:{background:"transparent","border-color":"var(--q-surface-border)","border-radius":"4px"}},{default:S(()=>[(M(!0),ee(Ve,null,ut(o.messages,p=>we((M(),_e(u,{key:p.from,clickable:""},{default:S(()=>[f(s,{avatar:"",top:""},{default:S(()=>[f(d,{color:"primary","text-color":"white"},{default:S(()=>[K(xe(p.from[0]),1)]),_:2},1024)]),_:2},1024),f(s,null,{default:S(()=>[f(l,{overline:""},{default:S(()=>[K(xe(p.from),1)]),_:2},1024),f(l,null,{default:S(()=>[K(xe(p.subject),1)]),_:2},1024),f(l,{caption:"",lines:"2"},{default:S(()=>[K(xe(p.body),1)]),_:2},1024)]),_:2},1024),f(s,{side:"",top:""},{default:S(()=>[f(l,{caption:""},{default:S(()=>[K(xe(p.time),1)]),_:2},1024),p.starred?(M(),_e(r,{key:0,name:"star",color:"warning",size:"18px",class:"q-mt-xs"})):Ge("",!0)]),_:2},1024)]),_:2},1024)),[[Kt]])),128))]),_:1})])])}const Uoe=ze(Foe,[["render",Hoe]]),Woe=Object.freeze(Object.defineProperty({__proto__:null,default:Uoe},Symbol.toStringTag,{value:"Module"})),Joe="component",Goe={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},Yoe={bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},separator:{type:"Boolean",desc:"Applies a separator between contained items",category:"content"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"},padding:{type:"Boolean",desc:"Applies a material design-like padding on top and bottom",category:"style"},tag:{type:"String",default:"div",desc:"HTML element tag to render",category:"content"}},Koe={default:{desc:"Default slot in the devland unslotted content of the component"}},Zoe={},Xoe={type:Joe,meta:Goe,props:Yoe,slots:Koe,events:Zoe},eae="component",tae={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},nae={active:{type:["Boolean","null"],default:"null",desc:"Put item into 'active' state",category:"state"},"active-class":{type:"String",default:"q-item--active",desc:"The class to apply on active state",category:"style"},clickable:{type:"Boolean",desc:"Is QItem clickable? If true, then it will add hover effects and emit 'click' events",category:"state"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},focused:{type:"Boolean",desc:"Determines focus state",category:"state"},"inset-level":{type:"Number",desc:"Apply an inset; Useful for right-side content when left side has something like avatar or icon",category:"content"},"manual-focus":{type:"Boolean",desc:"Determines manual focus state",category:"state"},tag:{type:"String",default:"div",desc:"HTML element tag to render",category:"content"},tabindex:{type:["String","Number"],desc:"Tabindex HTML attribute value",category:"general"},to:{type:["String","Object"],desc:"Equivalent to Vue Router <router-link> 'to' property",category:"navigation"},exact:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'exact' property",category:"navigation"},replace:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'replace' property",category:"navigation"},href:{type:"String",desc:"Native <a> link href attribute",category:"navigation"},target:{type:"String",desc:"Native <a> link target attribute",category:"navigation"}},oae={default:{desc:"Default slot in the devland unslotted content of the component"}},aae={click:{desc:"Emitted when the component is clicked",params:{evt:{type:"Event"}}}},iae={type:eae,meta:tae,props:nae,slots:oae,events:aae},rae="component",sae={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},lae={avatar:{type:"Boolean",desc:"Render an avatar item side (does not need QAvatar to function)",category:"content"},thumbnail:{type:"Boolean",desc:"Render a thumbnail item side",category:"content"},side:{type:"Boolean",desc:"Render as a side section (has smaller width, no wrapping)",category:"content"},top:{type:"Boolean",desc:"Align content to top (useful for multi-line items)",category:"content"},"no-wrap":{type:"Boolean",desc:"Do not wrap text",category:"style"}},cae={default:{desc:"Default slot in the devland unslotted content of the component"}},uae={},dae={type:rae,meta:sae,props:lae,slots:cae,events:uae},fae="component",pae={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},mae={overline:{type:"Boolean",desc:"Renders an overline label",category:"content"},caption:{type:"Boolean",desc:"Renders a caption label",category:"content"},header:{type:"Boolean",desc:"Renders a header label",category:"content"},lines:{type:["Number","String"],desc:"Apply ellipsis when there are more than 'lines' lines",category:"content"}},hae={default:{desc:"Default slot in the devland unslotted content of the component"}},gae={},vae={type:fae,meta:pae,props:mae,slots:hae,events:gae},bae={name:"ShowcaseBasicList",components:{QList:ko,QItem:jn,QItemSection:$n,QItemLabel:Ia,QIcon:nt,QBadge:Bm},label:"Basic List",icon:"list",order:1,apiJson:[{name:"QList",json:Xoe},{name:"QItem",json:iae},{name:"QItemSection",json:dae},{name:"QItemLabel",json:vae}],importName:"QList",importFrom:"quasar"},_ae={class:"jShowcase_row jShowcase_column"},yae={class:"jShowcase_group"};function wae(e,t,n,a,o,i){const r=X("QIcon"),s=X("QItemSection"),l=X("QItemLabel"),u=X("QItem"),c=X("QBadge"),d=X("QList");return M(),ee("div",_ae,[v("div",yae,[t[8]||(t[8]=v("span",{class:"jShowcase_title"},"Basic List",-1)),f(d,{bordered:"",separator:""},{default:S(()=>[we((M(),_e(u,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"rocket_launch",color:"primary"})]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[0]||(t[0]=[K("Launch Sequence",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[1]||(t[1]=[K("Initiate main thruster ignition",-1)])]),_:1})]),_:1}),f(s,{side:""},{default:S(()=>[f(r,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[Kt]]),we((M(),_e(u,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"shield",color:"positive"})]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[2]||(t[2]=[K("Shield Matrix",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[3]||(t[3]=[K("Deflector array at 98% capacity",-1)])]),_:1})]),_:1}),f(s,{side:""},{default:S(()=>[f(c,{color:"positive",label:"ONLINE"})]),_:1})]),_:1})),[[Kt]]),we((M(),_e(u,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"sensors",color:"warning"})]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[4]||(t[4]=[K("Long Range Sensors",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[5]||(t[5]=[K("Scanning sector 7-G for anomalies",-1)])]),_:1})]),_:1}),f(s,{side:""},{default:S(()=>[f(c,{color:"warning",label:"SCANNING"})]),_:1})]),_:1})),[[Kt]]),we((M(),_e(u,{clickable:"",disable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"bolt",color:"grey"})]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[6]||(t[6]=[K("Warp Drive",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[7]||(t[7]=[K("Cooldown in progress — 12 min remaining",-1)])]),_:1})]),_:1}),f(s,{side:""},{default:S(()=>[f(c,{color:"negative",label:"OFFLINE"})]),_:1})]),_:1})),[[Kt]])]),_:1})])])}const Sae=ze(bae,[["render",wae]]),kae=Object.freeze(Object.defineProperty({__proto__:null,default:Sae},Symbol.toStringTag,{value:"Module"})),xae={name:"ShowcaseDenseList",components:{QList:ko,QItem:jn,QItemSection:$n,QItemLabel:Ia,QAvatar:lc},label:"Dense List",icon:"list",importName:"QList",importFrom:"quasar",order:2,data(){return{crewLog:[{name:"Cdr. Voss",role:"Captain",icon:"military_tech",color:"primary"},{name:"Lt. Nakamura",role:"Pilot",icon:"flight",color:"accent"},{name:"Dr. Okafor",role:"Medical",icon:"healing",color:"positive"},{name:"Eng. Petrov",role:"Engineer",icon:"build",color:"warning"},{name:"Spc. Reyes",role:"Science",icon:"science",color:"secondary"}],navLog:[{coord:"α Centauri B-3",note:"Orbital insertion complete",time:"08:12"},{coord:"Sector 9-Kilo",note:"Asteroid field traversal",time:"06:45"},{coord:"Relay Station 7",note:"Fuel resupply",time:"03:22"},{coord:"Nebula NGC-1277",note:"Sensor sweep logged",time:"01:10"}]}}},Cae={class:"jShowcase_row jShowcase_column"},Qae={class:"jShowcase_group"},Aae={class:"jShowcase_group"};function Iae(e,t,n,a,o,i){const r=X("QAvatar"),s=X("QItemSection"),l=X("QItemLabel"),u=X("QItem"),c=X("QList");return M(),ee("div",Cae,[v("div",Qae,[t[0]||(t[0]=v("span",{class:"jShowcase_title"},"Dense List",-1)),f(c,{dense:"",bordered:"",separator:""},{default:S(()=>[(M(!0),ee(Ve,null,ut(o.crewLog,d=>we((M(),_e(u,{key:d.name,clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{size:"18px",color:d.color,"text-color":"white",icon:d.icon},null,8,["color","icon"])]),_:2},1024),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[K(xe(d.name),1)]),_:2},1024)]),_:2},1024),f(s,{side:""},{default:S(()=>[f(l,{caption:""},{default:S(()=>[K(xe(d.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[Kt]])),128))]),_:1})]),v("div",Aae,[t[2]||(t[2]=v("span",{class:"jShowcase_title"},"Dense with Padding",-1)),f(c,{dense:"",bordered:"",padding:""},{default:S(()=>[f(l,{header:"",class:"jShowcase_title"},{default:S(()=>[...t[1]||(t[1]=[K("Navigation Log",-1)])]),_:1}),(M(!0),ee(Ve,null,ut(o.navLog,(d,p)=>we((M(),_e(u,{key:p,clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[K(xe(d.coord),1)]),_:2},1024),f(l,{caption:""},{default:S(()=>[K(xe(d.note),1)]),_:2},1024)]),_:2},1024),f(s,{side:"",top:""},{default:S(()=>[f(l,{caption:""},{default:S(()=>[K(xe(d.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[Kt]])),128))]),_:1})])])}const qae=ze(xae,[["render",Iae]]),Tae=Object.freeze(Object.defineProperty({__proto__:null,default:qae},Symbol.toStringTag,{value:"Module"})),Lae="component",Eae={docsUrl:"https://v2.quasar.dev/vue-components/menu"},Dae={"model-value":{type:["Boolean","null"],desc:"Model of the component defining shown/hidden state; Use with v-model",default:"null",category:"model",examples:['v-model="menuVisible"']},target:{type:["Boolean","String","Element"],desc:"Configure a target element to trigger component toggle; 'true' enables the parent DOM element",default:"true",category:"behavior",examples:["false",".my-parent","#target-id"]},"context-menu":{type:"Boolean",desc:"Opens with a right mouse click (or long tap on mobile)",category:"behavior"},fit:{type:"Boolean",desc:"Allows the menu to match at least the full width of its target",category:"position"},cover:{type:"Boolean",desc:"Allows the menu to cover its target. When used, 'self' and 'fit' are no longer effective",category:"position"},anchor:{type:"String",desc:"Starting position of the menu relative to its target",values:["top left","top middle","top right","center left","center middle","center right","bottom left","bottom middle","bottom right"],category:"position"},self:{type:"String",desc:"Menu's own position relative to its target",values:["top left","top middle","top right","center left","center middle","center right","bottom left","bottom middle","bottom right"],category:"position"},offset:{type:"Array",desc:"An array of two numbers to offset the menu horizontally and vertically in pixels",examples:["[8, 8]","[5, 10]"],category:"position"},persistent:{type:"Boolean",desc:"Menu won't be dismissed by click/tap outside or ESC key",category:"behavior"},"no-esc-dismiss":{type:"Boolean",desc:"User cannot dismiss the popup by hitting ESC key",category:"behavior"},"auto-close":{type:"Boolean",desc:"Any click/tap in the menu closes it; Useful instead of v-close-popup on each item",category:"behavior"},"touch-position":{type:"Boolean",desc:"Menu position set by the mouse/touch position when target is clicked",category:"behavior"},square:{type:"Boolean",desc:"Forces content to have squared borders",category:"style"},"max-height":{type:["String","null"],desc:"The maximum height of the menu; Size in CSS units",default:"null",examples:["'200px'","'50vh'"],category:"style"},"max-width":{type:["String","null"],desc:"The maximum width of the menu; Size in CSS units",default:"null",examples:["'300px'","'80vw'"],category:"style"},"transition-show":{type:"String",desc:"One of Quasar's embedded transitions for showing",default:"'fade'",examples:["'fade'","'slide-down'"],category:"transition"},"transition-hide":{type:"String",desc:"One of Quasar's embedded transitions for hiding",default:"'fade'",examples:["'fade'","'slide-down'"],category:"transition"},dark:{type:["Boolean","null"],desc:"Notify the component that the background is a dark color",default:"null",category:"style"},"separate-close-popup":{type:"Boolean",desc:"Separate from parent menu, marking it as a separate closing point for v-close-popup",category:"behavior"}},Bae={default:{desc:"Default slot for the menu content"}},Pae={"update:model-value":{desc:"Emitted when shown/hidden state changes; Used by v-model",params:{value:{type:"Boolean",desc:"New state (showing/hidden)"}}},show:{desc:"Emitted after component has triggered show()",params:{evt:{type:"Event",desc:"JS event object"}}},"before-show":{desc:"Emitted when component triggers show() but before it finishes",params:{evt:{type:"Event",desc:"JS event object"}}},hide:{desc:"Emitted after component has triggered hide()",params:{evt:{type:"Event",desc:"JS event object"}}},"before-hide":{desc:"Emitted when component triggers hide() but before it finishes",params:{evt:{type:"Event",desc:"JS event object"}}},"escape-key":{desc:"Emitted when ESC key is pressed; Not emitted if 'persistent' or 'no-esc-dismiss' is set"}},Mae={show:{desc:"Triggers component to show",params:{evt:{type:"Event",required:!1}}},hide:{desc:"Triggers component to hide",params:{evt:{type:"Event",required:!1}}},toggle:{desc:"Triggers component to toggle between show/hide",params:{evt:{type:"Event",required:!1}}},updatePosition:{desc:"Manually reposition the menu"},focus:{desc:"Focus menu; if content has autofocus attribute, it will directly focus it"}},jae={type:Lae,meta:Eae,props:Dae,slots:Bae,events:Pae,methods:Mae},$ae={name:"ShowcaseMenu",components:{QBtn:it,QMenu:pi,QList:ko,QItem:jn,QItemSection:$n,QIcon:nt,QSeparator:ui},label:"Menu",icon:"menu",apiJson:jae,importName:"QMenu",importFrom:"quasar"},Rae={class:"jShowcase_row jShowcase_column"},Oae={class:"jShowcase_group"},Fae={class:"jShowcase_items"},Vae={class:"jShowcase_group"},Nae={class:"jShowcase_items"},zae={class:"contextTarget"},Hae={class:"jShowcase_group"},Uae={class:"jShowcase_items"},Wae={class:"jShowcase_group"},Jae={class:"jShowcase_items"},Gae={class:"jShowcase_group"},Yae={class:"jShowcase_items"},Kae={class:"jShowcase_group"},Zae={class:"jShowcase_items"};function Xae(e,t,n,a,o,i){const r=X("QIcon"),s=X("QItemSection"),l=X("QItem"),u=X("QSeparator"),c=X("QList"),d=X("QMenu"),p=X("QBtn");return M(),ee("div",Rae,[v("div",Oae,[t[16]||(t[16]=v("span",{class:"jShowcase_title"},"Basic with Submenus",-1)),v("div",Fae,[f(p,{color:"primary",label:"File"},{default:S(()=>[f(d,null,{default:S(()=>[f(c,{dense:"",style:{"min-width":"150px"}},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"folder_open"})]),_:1}),f(s,null,{default:S(()=>[...t[0]||(t[0]=[K("Open...",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"note_add"})]),_:1}),f(s,null,{default:S(()=>[...t[1]||(t[1]=[K("New File",-1)])]),_:1})]),_:1})),[[Te]]),f(u),f(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"ios_share"})]),_:1}),f(s,null,{default:S(()=>[...t[2]||(t[2]=[K("Export As",-1)])]),_:1}),f(s,{side:""},{default:S(()=>[f(r,{name:"keyboard_arrow_right"})]),_:1}),f(d,{anchor:"top end",self:"top start"},{default:S(()=>[f(c,{dense:""},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[3]||(t[3]=[K("PDF",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[4]||(t[4]=[K("CSV",-1)])]),_:1})]),_:1})),[[Te]]),f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[5]||(t[5]=[K("Image",-1)])]),_:1}),f(s,{side:""},{default:S(()=>[f(r,{name:"keyboard_arrow_right"})]),_:1}),f(d,{"auto-close":"",anchor:"top end",self:"top start"},{default:S(()=>[f(c,{dense:""},{default:S(()=>[f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[6]||(t[6]=[K("PNG",-1)])]),_:1})]),_:1}),f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[7]||(t[7]=[K("JPEG",-1)])]),_:1})]),_:1}),f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[8]||(t[8]=[K("SVG",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),f(u),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"close"})]),_:1}),f(s,null,{default:S(()=>[...t[9]||(t[9]=[K("Quit",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"secondary",icon:"more_vert",round:"",flat:""},{default:S(()=>[f(d,null,{default:S(()=>[f(c,{dense:"",style:{"min-width":"140px"}},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[10]||(t[10]=[K("Profile",-1)])]),_:1})]),_:1})),[[Te]]),f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[11]||(t[11]=[K("Notifications",-1)])]),_:1}),f(s,{side:""},{default:S(()=>[f(r,{name:"keyboard_arrow_right"})]),_:1}),f(d,{anchor:"top end",self:"top start"},{default:S(()=>[f(c,{dense:""},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[12]||(t[12]=[K("Email",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[13]||(t[13]=[K("Push",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[14]||(t[14]=[K("SMS",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(u),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[15]||(t[15]=[K("Logout",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1})])]),v("div",Vae,[t[30]||(t[30]=v("span",{class:"jShowcase_title"},"Context Menu",-1)),v("div",Nae,[v("div",zae,[t[29]||(t[29]=K(" Right-click here ",-1)),f(d,{"context-menu":""},{default:S(()=>[f(c,{dense:"",style:{"min-width":"150px"}},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"content_cut"})]),_:1}),f(s,null,{default:S(()=>[...t[17]||(t[17]=[K("Cut",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"content_copy"})]),_:1}),f(s,null,{default:S(()=>[...t[18]||(t[18]=[K("Copy",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"content_paste"})]),_:1}),f(s,null,{default:S(()=>[...t[19]||(t[19]=[K("Paste",-1)])]),_:1})]),_:1})),[[Te]]),f(u),f(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"sort"})]),_:1}),f(s,null,{default:S(()=>[...t[20]||(t[20]=[K("Sort By",-1)])]),_:1}),f(s,{side:""},{default:S(()=>[f(r,{name:"keyboard_arrow_right"})]),_:1}),f(d,{anchor:"top end",self:"top start"},{default:S(()=>[f(c,{dense:""},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[21]||(t[21]=[K("Name",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[22]||(t[22]=[K("Date Modified",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[23]||(t[23]=[K("Size",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[24]||(t[24]=[K("Type",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(l,{clickable:""},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:"visibility"})]),_:1}),f(s,null,{default:S(()=>[...t[25]||(t[25]=[K("View",-1)])]),_:1}),f(s,{side:""},{default:S(()=>[f(r,{name:"keyboard_arrow_right"})]),_:1}),f(d,{anchor:"top end",self:"top start"},{default:S(()=>[f(c,{dense:""},{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[26]||(t[26]=[K("Grid",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[27]||(t[27]=[K("List",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[28]||(t[28]=[K("Compact",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),v("div",Hae,[t[39]||(t[39]=v("span",{class:"jShowcase_title"},"Positioning",-1)),v("div",Uae,[f(p,{color:"primary",label:"Bottom Left"},{default:S(()=>[f(d,{anchor:"bottom left",self:"top left"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[31]||(t[31]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[32]||(t[32]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"accent",label:"Top Right"},{default:S(()=>[f(d,{anchor:"top right",self:"bottom right"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[33]||(t[33]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[34]||(t[34]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"secondary",label:"Fit Width",style:{"min-width":"160px"}},{default:S(()=>[f(d,{fit:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[35]||(t[35]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[36]||(t[36]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"info",label:"Cover"},{default:S(()=>[f(d,{cover:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[37]||(t[37]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[38]||(t[38]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1})])]),v("div",Wae,[t[46]||(t[46]=v("span",{class:"jShowcase_title"},"Behavior",-1)),v("div",Jae,[f(p,{color:"primary",label:"Auto Close"},{default:S(()=>[f(d,{"auto-close":""},{default:S(()=>[f(c,null,{default:S(()=>[f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[40]||(t[40]=[K("Click anywhere to close",-1)])]),_:1})]),_:1}),f(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[41]||(t[41]=[K("No v-close-popup needed",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),f(p,{color:"negative",label:"Persistent"},{default:S(()=>[f(d,{persistent:""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[42]||(t[42]=[K("Must click item to close",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[43]||(t[43]=[K("ESC won't close either",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"accent",label:"Touch Position"},{default:S(()=>[f(d,{"touch-position":""},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[44]||(t[44]=[K("Opens at click position",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[45]||(t[45]=[K("Not anchored to button",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1})])]),v("div",Gae,[t[53]||(t[53]=v("span",{class:"jShowcase_title"},"Transitions",-1)),v("div",Yae,[f(p,{color:"primary",label:"Slide Down"},{default:S(()=>[f(d,{"transition-show":"slide-down","transition-hide":"slide-up"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[47]||(t[47]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[48]||(t[48]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"secondary",label:"Scale"},{default:S(()=>[f(d,{"transition-show":"scale","transition-hide":"scale"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[49]||(t[49]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[50]||(t[50]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1}),f(p,{color:"accent",label:"Jump Down"},{default:S(()=>[f(d,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:S(()=>[f(c,null,{default:S(()=>[we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[51]||(t[51]=[K("Option A",-1)])]),_:1})]),_:1})),[[Te]]),we((M(),_e(l,{clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[...t[52]||(t[52]=[K("Option B",-1)])]),_:1})]),_:1})),[[Te]])]),_:1})]),_:1})]),_:1})])]),v("div",Kae,[t[54]||(t[54]=v("span",{class:"jShowcase_title"},"Scrollable",-1)),v("div",Zae,[f(p,{color:"primary",label:"Max Height 200px"},{default:S(()=>[f(d,{"max-height":"200px"},{default:S(()=>[f(c,null,{default:S(()=>[(M(),ee(Ve,null,ut(12,g=>we(f(l,{key:g,clickable:""},{default:S(()=>[f(s,null,{default:S(()=>[K("Item "+xe(g),1)]),_:2},1024)]),_:2},1024),[[Te]])),64))]),_:1})]),_:1})]),_:1})])])])}const eie=ze($ae,[["render",Xae],["__scopeId","data-v-1620cbc2"]]),tie=Object.freeze(Object.defineProperty({__proto__:null,default:eie},Symbol.toStringTag,{value:"Module"})),nie=Fe({name:"QBanner",props:{...Mt,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Je(),a=jt(e,n),o=Q(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),i=Q(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const r=[L("div",{class:"q-banner__avatar col-auto row items-center self-start"},mt(t.avatar)),L("div",{class:"q-banner__content col text-body2"},mt(t.default))],s=mt(t.action);return s!==void 0&&r.push(L("div",{class:i.value},s)),L("div",{class:o.value+(e.inlineActions===!1&&s!==void 0?" q-banner--top-padding":""),role:"alert"},r)}}}),oie="component",aie={docsUrl:"https://v2.quasar.dev/vue-components/banner"},iie={"inline-actions":{type:"Boolean",desc:"Display actions on same row as content",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},rounded:{type:"Boolean",desc:"Applies a small standard border-radius for a squared shape of the component",category:"style"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},rie={default:{desc:"This is where Banner content goes"},avatar:{desc:"Slot for displaying an avatar (suggestions: QIcon, QAvatar)"},action:{desc:"Slot for Banner action (suggestions: QBtn)"}},sie={type:oie,meta:aie,props:iie,slots:rie},lie={name:"ShowcaseQuasarBanner",components:{QBanner:nie,QIcon:nt,QBtn:it},label:"Quasar Banner",icon:"dashboard",apiJson:sie,importName:"QBanner",importFrom:"quasar"};function cie(e,t,n,a,o,i){const r=X("QIcon"),s=X("QBtn"),l=X("QBanner");return M(),ee("div",null,[f(l,{class:"bg-surface-3 text-bright",rounded:""},{avatar:S(()=>[f(r,{name:"signal_wifi_off",color:"secondary",size:"sm"})]),action:S(()=>[f(s,{flat:"",color:"info",label:"Turn on Wifi",outline:""}),f(s,{flat:"",color:"secondary",label:"Dismiss"})]),default:S(()=>[t[0]||(t[0]=K(" You have lost connection to the internet. This app is offline. ",-1))]),_:1}),f(l,{"inline-actions":"",dense:"",class:"bg-indigo-7 text-white q-mt-sm"},{avatar:S(()=>[...t[1]||(t[1]=[v("img",{src:"https://cdn.quasar.dev/img/mountains.jpg",style:{height:"64px"}},null,-1)])]),action:S(()=>[f(s,{flat:"",color:"primary",label:"Turn ON Wifi"})]),default:S(()=>[t[2]||(t[2]=K(" You have lost connection to the internet. This app is offline. ",-1))]),_:1})])}const uie=ze(lie,[["render",cie]]),die=Object.freeze(Object.defineProperty({__proto__:null,default:uie},Symbol.toStringTag,{value:"Module"})),fie="component",pie={},mie={title:{type:"String",default:"null",desc:"Header title text. Ignored when #title slot is provided.",category:"content"},icon:{type:"String",default:"null",desc:"Material icon name shown before the title.",category:"content"},"icon-color":{type:"String",default:"'var(--q-primary)'",desc:"CSS color value for the header icon.",category:"style"},accent:{type:["Boolean","String"],default:"false",desc:"Styled ( by theme ) panel background or panel header background (false, true, 'header')",category:"style"},"footer-text":{type:"String",default:"null",desc:"Simple text displayed in the footer bar.",category:"content"},square:{type:"Boolean",default:"false",desc:"Remove border-radius for a square appearance.",category:"style"},fullscreen:{type:"Boolean",default:"false",desc:"Panel takes up the full viewport (fixed positioning).",category:"style"},scroll:{type:"Boolean",default:"false",desc:"Enable vertical scrolling for the default slot content.",category:"behavior"}},hie={default:{desc:"Main content area of the panel."},title:{desc:"Replaces the default title text. The header icon still renders if the icon prop is set."},header:{desc:"Content inserted between the title and header-action areas."},"header-action":{desc:"Right-aligned content in the header bar (e.g. buttons, tabs)."},footer:{desc:"Footer content. Rendered alongside footer-text if both are provided."}},gie={},vie={},zr={type:fie,meta:pie,props:mie,slots:hie,events:gie,methods:vie},bie={name:"ShowcaseBasicPanel",components:{JPanel:no},label:"Basic Panel",icon:"dashboard",apiJson:zr,importName:"JPanel",code:null};function _ie(e,t,n,a,o,i){const r=X("JPanel");return M(),_e(r,{title:"SAMPLE PANEL",accent:"",icon:"dashboard","icon-color":"var(--q-primary)"},{default:S(()=>[...t[0]||(t[0]=[v("div",{class:"q-ma-md"}," Panel content area ",-1)])]),_:1})}const yie=ze(bie,[["render",_ie]]),wie=Object.freeze(Object.defineProperty({__proto__:null,default:yie},Symbol.toStringTag,{value:"Module"})),Sie="component",kie={docsUrl:"https://v2.quasar.dev/vue-components/card"},xie={dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1},square:{type:"Boolean",desc:"Removes border-radius so borders are squared",category:"style"},flat:{type:"Boolean",desc:"Applies a 'flat' design (no default shadow)",category:"style"},bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},tag:{type:"String",desc:"HTML tag to use",category:"content",default:"'div'",examples:["'div'","'form'"],required:!1}},Cie={default:{desc:"Default slot in the devland unslotted content of the component"}},Qie={type:Sie,meta:kie,props:xie,slots:Cie},Aie="component",Iie={docsUrl:"https://v2.quasar.dev/vue-components/card"},qie={horizontal:{type:"Boolean",desc:"Display a horizontal section (will have no padding and can contain other QCardSection)",category:"content"},tag:{type:"String",desc:"HTML tag to use",category:"content",default:"'div'",examples:["'div'","'form'"],required:!1}},Tie={default:{desc:"Default slot in the devland unslotted content of the component"}},Lie={type:Aie,meta:Iie,props:qie,slots:Tie},Eie="component",Die={docsUrl:"https://v2.quasar.dev/vue-components/card"},Bie={align:{type:"String",desc:"Specify how to align the actions",default:"'left'/'stretch'",values:["'left'","'center'","'right'","'between'","'around'","'evenly'","'stretch'"],category:"content",required:!1},vertical:{type:"Boolean",desc:"Display actions one below the other",category:"content"}},Pie={default:{desc:"Suggestions: QBtn"}},Mie={type:Eie,meta:Die,props:Bie,slots:Pie},jie={name:"ShowcaseQuasarCard",components:{QCard:oc,QCardSection:Do,QCardActions:ac,QBtn:it},label:"Quasar Card",icon:"dashboard",apiJson:[{name:"QCard",json:Qie},{name:"QCardSection",json:Lie},{name:"QCardActions",json:Mie}],importName:"QCard",importFrom:"quasar"},$ie={class:"jShowcase_row"};function Rie(e,t,n,a,o,i){const r=X("QCardSection"),s=X("QBtn"),l=X("QCardActions"),u=X("QCard");return M(),ee("div",$ie,[f(u,{class:"showcaseCard",flat:"",bordered:""},{default:S(()=>[f(r,null,{default:S(()=>[...t[0]||(t[0]=[v("div",{class:"text-h6"},"Starship Registry",-1),v("div",{class:"text-subtitle2"},"NCC-1701 — USS Enterprise",-1)])]),_:1}),f(r,null,{default:S(()=>[...t[1]||(t[1]=[K(" A Constitution-class vessel, flagship of the United Federation of Planets. Currently assigned to deep space exploration. ",-1)])]),_:1}),f(l,{align:"right"},{default:S(()=>[f(s,{flat:"",color:"primary",label:"Details"}),f(s,{flat:"",color:"accent",label:"Hail"})]),_:1})]),_:1})])}const Oie=ze(jie,[["render",Rie]]),Fie=Object.freeze(Object.defineProperty({__proto__:null,default:Oie},Symbol.toStringTag,{value:"Module"})),Vie={name:"ShowcasePanelWithAction",components:{QBtn:it,JPanel:no},label:"Panel With Header Action",icon:"dashboard",apiJson:zr,importName:"JPanel",code:null};function Nie(e,t,n,a,o,i){const r=X("QBtn"),s=X("JPanel");return M(),_e(s,{title:"CONTROLS",icon:"tune","icon-color":"var(--q-warning)"},{"header-action":S(()=>[f(r,{class:"ghost",icon:"favorite_border",label:"Act",size:"xs"})]),default:S(()=>[t[0]||(t[0]=v("div",{class:"q-ma-md"},"Panel content area with default gradient background.",-1))]),_:1})}const zie=ze(Vie,[["render",Nie]]),Hie=Object.freeze(Object.defineProperty({__proto__:null,default:zie},Symbol.toStringTag,{value:"Module"})),Uie={name:"ShowcasePanelWithFooter",components:{QBtn:it,JPanel:no},label:"Panel With Footer",icon:"dashboard",apiJson:zr,importName:"JPanel",code:`<JPanel
  title="DATA PANEL"
  icon="analytics"
  icon-color="var(--q-info)"
  footer-text="Last updated: just now"
>
  <div>Panel content here.</div>

  <template #footer>
    <QBtn class="ghost"
          icon="refresh">
      Refresh
    </QBtn>
  </template>
</JPanel>`};function Wie(e,t,n,a,o,i){const r=X("QBtn"),s=X("JPanel");return M(),_e(s,{title:"DATA PANEL",icon:"analytics","icon-color":"var(--q-info)","footer-text":"Last updated: just now"},{footer:S(()=>[f(r,{class:"ghost",icon:"refresh",size:"sm",label:"Refresh"})]),default:S(()=>[t[0]||(t[0]=v("div",{class:"q-ma-md"},"Panel content area with default gradient background.",-1))]),_:1})}const Jie=ze(Uie,[["render",Wie]]),Gie=Object.freeze(Object.defineProperty({__proto__:null,default:Jie},Symbol.toStringTag,{value:"Module"}));function Hm(e,t){const n=ge(null),a=Q(()=>e.disable===!0?null:L("span",{ref:n,class:"no-outline",tabindex:-1}));function o(i){const r=t.value;(i==null?void 0:i.qAvoidFocus)!==!0&&((i==null?void 0:i.type.indexOf("key"))===0?document.activeElement!==r&&(r==null?void 0:r.contains(document.activeElement))===!0&&r.focus():n.value!==null&&(i===void 0||(r==null?void 0:r.contains(i.target))===!0)&&n.value.focus())}return{refocusTargetEl:a,refocusTarget:o}}const Um={xs:30,sm:35,md:40,lg:50,xl:60},Wm={...Mt,...wo,...oo,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Jm=["update:modelValue"];function Gm(e,t){const{props:n,slots:a,emit:o,proxy:i}=Je(),{$q:r}=i,s=jt(n,r),l=ge(null),{refocusTargetEl:u,refocusTarget:c}=Hm(n,l),d=So(n,Um),p=Q(()=>n.val!==void 0&&Array.isArray(n.modelValue)),g=Q(()=>{const j=Ze(n.val);return p.value===!0?n.modelValue.findIndex(U=>Ze(U)===j):-1}),_=Q(()=>p.value===!0?g.value!==-1:Ze(n.modelValue)===Ze(n.trueValue)),I=Q(()=>p.value===!0?g.value===-1:Ze(n.modelValue)===Ze(n.falseValue)),C=Q(()=>_.value===!1&&I.value===!1),b=Q(()=>n.disable===!0?-1:n.tabindex||0),w=Q(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(n.disable===!0?" disabled":"")+(s.value===!0?` q-${e}--dark`:"")+(n.dense===!0?` q-${e}--dense`:"")+(n.leftLabel===!0?" reverse":"")),y=Q(()=>{const j=_.value===!0?"truthy":I.value===!0?"falsy":"indet",U=n.color!==void 0&&(n.keepColor===!0||(e==="toggle"?_.value===!0:I.value!==!0))?` text-${n.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${j}${U}`}),m=Q(()=>{const j={type:"checkbox"};return n.name!==void 0&&Object.assign(j,{".checked":_.value,"^checked":_.value===!0?"checked":void 0,name:n.name,value:p.value===!0?n.val:n.trueValue}),j}),x=zo(m),B=Q(()=>{const j={tabindex:b.value,role:e==="toggle"?"switch":"checkbox","aria-label":n.label,"aria-checked":C.value===!0?"mixed":_.value===!0?"true":"false"};return n.disable===!0&&(j["aria-disabled"]="true"),j});function T(j){j!==void 0&&(rt(j),c(j)),n.disable!==!0&&o("update:modelValue",E(),j)}function E(){if(p.value===!0){if(_.value===!0){const j=n.modelValue.slice();return j.splice(g.value,1),j}return n.modelValue.concat([n.val])}if(_.value===!0){if(n.toggleOrder!=="ft"||n.toggleIndeterminate===!1)return n.falseValue}else if(I.value===!0){if(n.toggleOrder==="ft"||n.toggleIndeterminate===!1)return n.trueValue}else return n.toggleOrder!=="ft"?n.trueValue:n.falseValue;return n.indeterminateValue}function O(j){(j.keyCode===13||j.keyCode===32)&&rt(j)}function F(j){(j.keyCode===13||j.keyCode===32)&&T(j)}const V=t(_,C);return Object.assign(i,{toggle:T}),()=>{const j=V();n.disable!==!0&&x(j,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const U=[L("div",{class:y.value,style:d.value,"aria-hidden":"true"},j)];u.value!==null&&U.push(u.value);const D=n.label!==void 0?dn(a.default,[n.label]):mt(a.default);return D!==void 0&&U.push(L("div",{class:`q-${e}__label q-anchor--skip`},D)),L("div",{ref:l,class:w.value,...B.value,onClick:T,onKeydown:O,onKeyup:F},U)}}const Yie=()=>L("div",{key:"svg",class:"q-checkbox__bg absolute"},[L("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[L("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),L("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),cc=Fe({name:"QCheckbox",props:Wm,emits:Jm,setup(e){const t=Yie();function n(a,o){const i=Q(()=>(a.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>i.value!==null?[L("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[L(nt,{class:"q-checkbox__icon",name:i.value})])]:[t]}return Gm("checkbox",n)}}),uc={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Kie=Object.keys(uc);uc.all=!0;function pr(e){const t={};for(const n of Kie)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?uc:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Zie=["INPUT","TEXTAREA"];function mr(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Zie.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Xie(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((n,a)=>{const o=parseFloat(n);o&&(t[a]=o)}),t}const ere=Dr({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:a}){if(a.mouse!==!0&&st.has.touch!==!0)return;const o=a.mouseCapture===!0?"Capture":"",i={handler:t,sensitivity:Xie(n),direction:pr(a),noop:Yt,mouseStart(r){mr(r,i)&&bp(r)&&(tn(i,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),i.start(r,!0))},touchStart(r){if(mr(r,i)){const s=r.target;tn(i,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),i.start(r)}},start(r,s){st.is.firefox===!0&&pa(e,!0);const l=eo(r);i.event={x:l.left,y:l.top,time:Date.now(),mouse:s===!0,dir:!1}},move(r){if(i.event===void 0)return;if(i.event.dir!==!1){rt(r);return}const s=Date.now()-i.event.time;if(s===0)return;const l=eo(r),u=l.left-i.event.x,c=Math.abs(u),d=l.top-i.event.y,p=Math.abs(d);if(i.event.mouse!==!0){if(c<i.sensitivity[1]&&p<i.sensitivity[1]){i.end(r);return}}else if(window.getSelection().toString()!==""){i.end(r);return}else if(c<i.sensitivity[2]&&p<i.sensitivity[2])return;const g=c/s,_=p/s;i.direction.vertical===!0&&c<p&&c<100&&_>i.sensitivity[0]&&(i.event.dir=d<0?"up":"down"),i.direction.horizontal===!0&&c>p&&p<100&&g>i.sensitivity[0]&&(i.event.dir=u<0?"left":"right"),i.direction.up===!0&&c<p&&d<0&&c<100&&_>i.sensitivity[0]&&(i.event.dir="up"),i.direction.down===!0&&c<p&&d>0&&c<100&&_>i.sensitivity[0]&&(i.event.dir="down"),i.direction.left===!0&&c>p&&u<0&&p<100&&g>i.sensitivity[0]&&(i.event.dir="left"),i.direction.right===!0&&c>p&&u>0&&p<100&&g>i.sensitivity[0]&&(i.event.dir="right"),i.event.dir!==!1?(rt(r),i.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ii(),i.styleCleanup=I=>{i.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(C,50):C()}),i.handler({evt:r,touch:i.event.mouse!==!0,mouse:i.event.mouse,direction:i.event.dir,duration:s,distance:{x:c,y:p}})):i.end(r)},end(r){var s;i.event!==void 0&&(Bn(i,"temp"),st.is.firefox===!0&&pa(e,!1),(s=i.styleCleanup)==null||s.call(i,!0),r!==void 0&&i.event.dir!==!1&&rt(r),i.event=void 0)}};if(e.__qtouchswipe=i,a.mouse===!0){const r=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";tn(i,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}st.has.touch===!0&&tn(i,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;n!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&n.end(),n.handler=t.value),n.direction=pr(t.modifiers))},beforeUnmount(e){var n;const t=e.__qtouchswipe;t!==void 0&&(Bn(t,"main"),Bn(t,"temp"),st.is.firefox===!0&&pa(e,!1),(n=t.styleCleanup)==null||n.call(t),delete e.__qtouchswipe)}});function Ym(){let e=Object.create(null);return{getCache:(t,n)=>e[t]===void 0?e[t]=typeof n=="function"?n():n:e[t],setCache(t,n){e[t]=n},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const tre={name:{required:!0},disable:Boolean},Ld={setup(e,{slots:t}){return()=>L("div",{class:"q-panel scroll",role:"tabpanel"},mt(t.default))}},nre={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ore=["update:modelValue","beforeTransition","transition"];function are(){const{props:e,emit:t,proxy:n}=Je(),{getCache:a}=Ym(),{registerTimeout:o}=Sa();let i,r;const s=ge(null),l={value:null};function u(D){const R=e.vertical===!0?"up":"left";E((n.$q.lang.rtl===!0?-1:1)*(D.direction===R?1:-1))}const c=Q(()=>[[ere,u,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=Q(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=Q(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=Q(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=Q(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),I=Q(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=Q(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Oe(()=>e.modelValue,(D,R)=>{const ae=m(D)===!0?x(D):-1;r!==!0&&T(ae===-1?0:ae<x(R)?-1:1),l.value!==ae&&(l.value=ae,t("beforeTransition",D,R),o(()=>{t("transition",D,R)},e.transitionDuration))});function b(){E(1)}function w(){E(-1)}function y(D){t("update:modelValue",D)}function m(D){return D!=null&&D!==""}function x(D){return i.findIndex(R=>R.props.name===D&&R.props.disable!==""&&R.props.disable!==!0)}function B(){return i.filter(D=>D.props.disable!==""&&D.props.disable!==!0)}function T(D){const R=D!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(D===-1?d.value:p.value):null;s.value!==R&&(s.value=R)}function E(D,R=l.value){let ae=R+D;for(;ae!==-1&&ae<i.length;){const Z=i[ae];if(Z!==void 0&&Z.props.disable!==""&&Z.props.disable!==!0){T(D),r=!0,t("update:modelValue",Z.props.name),setTimeout(()=>{r=!1});return}ae+=D}e.infinite===!0&&i.length!==0&&R!==-1&&R!==i.length&&E(D,D===-1?i.length:-1)}function O(){const D=x(e.modelValue);return l.value!==D&&(l.value=D),!0}function F(){const D=m(e.modelValue)===!0&&O()&&i[l.value];return e.keepAlive===!0?[L(Ig,I.value,[L(C.value===!0?a(_.value,()=>({...Ld,name:_.value})):Ld,{key:_.value,style:g.value},()=>D)])]:[L("div",{class:"q-panel scroll",style:g.value,key:_.value,role:"tabpanel"},[D])]}function V(){if(i.length!==0)return e.animated===!0?[L(Lt,{name:s.value},F)]:F()}function j(D){return i=J_(mt(D.default,[])).filter(R=>R.props!==null&&R.props.slot===void 0&&m(R.props.name)===!0),i.length}function U(){return i}return Object.assign(n,{next:b,previous:w,goTo:y}),{panelIndex:l,panelDirectives:c,updatePanelsList:j,updatePanelIndex:O,getPanelContent:V,getEnabledPanels:B,getPanels:U,isValidPanelName:m,keepAliveProps:I,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:E,goToPanel:y,nextPanel:b,previousPanel:w}}const Km=Fe({name:"QTabPanels",props:{...nre,...Mt},emits:ore,setup(e,{slots:t}){const n=Je(),a=jt(e,n.proxy.$q),{updatePanelsList:o,getPanelContent:i,panelDirectives:r}=are(),s=Q(()=>"q-tab-panels q-panel-parent"+(a.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(t),Pl("div",{class:s.value},i(),"pan",e.swipeable,()=>r.value))}}),Zm=Fe({name:"QTabPanel",props:tre,setup(e,{slots:t}){return()=>L("div",{class:"q-tab-panel",role:"tabpanel"},mt(t.default))}}),ire={name:"ShowcasePanelWithTabs",order:1,components:{JPanel:no,QCheckbox:cc,QSelect:Vr,QTabs:ec,QTab:tc,QTabPanels:Km,QTabPanel:Zm},data:()=>({tab:"overview",inlineLabel:!1,selectedAccent:!1,accentOptions:[{label:"false",value:!1},{label:"true",value:!0},{label:"header",value:"header"}]}),label:"Panel with Tabs",icon:"dashboard",apiJson:zr,importName:"JPanel",code:null},rre={class:"row items-center q-gutter-md justify-end"};function sre(e,t,n,a,o,i){const r=X("QCheckbox"),s=X("QSelect"),l=X("QTab"),u=X("QTabs"),c=X("QTabPanel"),d=X("QTabPanels"),p=X("JPanel");return M(),_e(p,{"icon-color":"var(--q-info)","footer-text":"Last updated: now",accent:e.selectedAccent},{footer:S(()=>[v("div",rre,[f(r,{modelValue:e.inlineLabel,"onUpdate:modelValue":t[0]||(t[0]=g=>e.inlineLabel=g),label:"Inline",color:"primary"},null,8,["modelValue"]),f(s,{modelValue:e.selectedAccent,"onUpdate:modelValue":t[1]||(t[1]=g=>e.selectedAccent=g),options:e.accentOptions,label:"Accent",dense:"",outlined:"","emit-value":"","map-options":"",style:{"min-width":"140px"}},null,8,["modelValue","options"])])]),header:S(()=>[f(u,{modelValue:e.tab,"onUpdate:modelValue":t[2]||(t[2]=g=>e.tab=g),dense:"","no-caps":"","active-color":"accent","indicator-color":"accent","inline-label":e.inlineLabel,class:"q-mt-sm"},{default:S(()=>[f(l,{name:"overview",icon:"dashboard",label:"Overview"}),f(l,{name:"systems",icon:"memory",label:"Systems"}),f(l,{name:"crew",icon:"groups",label:"Crew"}),f(l,{name:"logs",icon:"description",label:"Logs",alert:"warning"})]),_:1},8,["modelValue","inline-label"])]),default:S(()=>[f(d,{modelValue:e.tab,"onUpdate:modelValue":t[3]||(t[3]=g=>e.tab=g),animated:"","transition-prev":"fade","transition-next":"fade"},{default:S(()=>[f(c,{name:"overview"},{default:S(()=>[...t[4]||(t[4]=[v("div",{class:"text-h6"},"Overview",-1),K(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1}),f(c,{name:"systems"},{default:S(()=>[...t[5]||(t[5]=[v("div",{class:"text-h6"},"Systems",-1),K(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1}),f(c,{name:"crew"},{default:S(()=>[...t[6]||(t[6]=[v("div",{class:"text-h6"},"Crew",-1),K(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1}),f(c,{name:"logs"},{default:S(()=>[...t[7]||(t[7]=[v("div",{class:"text-h6"},"Logs",-1),K(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["accent"])}const lre=ze(ire,[["render",sre]]),cre=Object.freeze(Object.defineProperty({__proto__:null,default:lre},Symbol.toStringTag,{value:"Module"})),ure="component",dre={docsUrl:"https://v2.quasar.dev/vue-components/checkbox"},fre={"model-value":{type:["Any","Array"],default:"null",desc:"Model of the component; use v-model directive",required:!0,category:"model"},val:{type:"Any",desc:"Works when model is Array. Value to add/remove when ticked/unticked",category:"model"},"true-value":{type:"Any",default:"true",desc:"What model value should be considered as checked/on?",category:"model",required:!1},"false-value":{type:"Any",default:"false",desc:"What model value should be considered as unchecked/off?",category:"model",required:!1},label:{type:"String",desc:"Label to display along the component",category:"label"},"left-label":{type:"Boolean",desc:"Label should be displayed on the left side",category:"label"},"checked-icon":{type:"String",desc:"Icon to use when the model is truthy",category:"icons"},"unchecked-icon":{type:"String",desc:"Icon to use when the toggle is falsy",category:"icons"},"indeterminate-icon":{type:"String",desc:"Icon to use when the model is indeterminate",category:"icons"},"toggle-indeterminate":{type:"Boolean",desc:"Toggle through the indeterminate state too on click",category:"behavior"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"keep-color":{type:"Boolean",desc:"Keep color when unticked/off",category:"behavior"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},pre={default:{desc:"Default slot can be used as label, unless 'label' prop is specified"}},mre={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},hre={type:ure,meta:dre,props:fre,slots:pre,events:mre},gre={name:"ShowcaseQuasarCheckbox",components:{QCheckbox:cc},label:"Quasar Checkbox",icon:"edit_note",apiJson:hre,importName:"QCheckbox",importFrom:"quasar",data(){return{nav:!0,comms:!1,life:!0,indet:null}}},vre={class:"jShowcase_row showcaseVertical"};function bre(e,t,n,a,o,i){const r=X("QCheckbox");return M(),ee("div",vre,[f(r,{modelValue:o.nav,"onUpdate:modelValue":t[0]||(t[0]=s=>o.nav=s),label:"Navigation",color:"primary"},null,8,["modelValue"]),f(r,{modelValue:o.comms,"onUpdate:modelValue":t[1]||(t[1]=s=>o.comms=s),label:"Communications",color:"accent"},null,8,["modelValue"]),f(r,{modelValue:o.life,"onUpdate:modelValue":t[2]||(t[2]=s=>o.life=s),label:"Life support",color:"positive"},null,8,["modelValue"]),f(r,{"model-value":!0,label:"Locked system",color:"info",disable:""}),f(r,{modelValue:o.indet,"onUpdate:modelValue":t[3]||(t[3]=s=>o.indet=s),label:"Indeterminate",color:"secondary","toggle-indeterminate":""},null,8,["modelValue"])])}const _re=ze(gre,[["render",bre],["__scopeId","data-v-8da15585"]]),yre=Object.freeze(Object.defineProperty({__proto__:null,default:_re},Symbol.toStringTag,{value:"Module"})),go=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function wre(e,t,n){return Object.prototype.toString.call(e)==="[object Date]"&&(n=e.getDate(),t=e.getMonth()+1,e=e.getFullYear()),Cre(dc(e,t,n))}function Ed(e,t,n){return eh(xre(e,t,n))}function Sre(e){return kre(e)===0}function ji(e,t){return t<=6?31:t<=11||Sre(e)?30:29}function kre(e){const t=go.length;let n=go[0],a,o,i,r,s;if(e<n||e>=go[t-1])throw new Error("Invalid Jalaali year "+e);for(s=1;s<t&&(a=go[s],o=a-n,!(e<a));s+=1)n=a;return r=e-n,o-r<6&&(r=r-o+_t(o+4,33)*33),i=Xt(Xt(r+1,33)-1,4),i===-1&&(i=4),i}function Xm(e,t){const n=go.length,a=e+621;let o=-14,i=go[0],r,s,l,u,c;if(e<i||e>=go[n-1])throw new Error("Invalid Jalaali year "+e);for(c=1;c<n&&(r=go[c],s=r-i,!(e<r));c+=1)o=o+_t(s,33)*8+_t(Xt(s,33),4),i=r;u=e-i,o=o+_t(u,33)*8+_t(Xt(u,33)+3,4),Xt(s,33)===4&&s-u===4&&(o+=1);const d=_t(a,4)-_t((_t(a,100)+1)*3,4)-150,p=20+o-d;return t||(s-u<6&&(u=u-s+_t(s+4,33)*33),l=Xt(Xt(u+1,33)-1,4),l===-1&&(l=4)),{leap:l,gy:a,march:p}}function xre(e,t,n){const a=Xm(e,!0);return dc(a.gy,3,a.march)+(t-1)*31-_t(t,7)*(t-7)+n-1}function Cre(e){const t=eh(e).gy;let n=t-621,a,o,i;const r=Xm(n,!1),s=dc(t,3,r.march);if(i=e-s,i>=0){if(i<=185)return o=1+_t(i,31),a=Xt(i,31)+1,{jy:n,jm:o,jd:a};i-=186}else n-=1,i+=179,r.leap===1&&(i+=1);return o=7+_t(i,30),a=Xt(i,30)+1,{jy:n,jm:o,jd:a}}function dc(e,t,n){let a=_t((e+_t(t-8,6)+100100)*1461,4)+_t(153*Xt(t+9,12)+2,5)+n-34840408;return a=a-_t(_t(e+100100+_t(t-8,6),100)*3,4)+752,a}function eh(e){let t=4*e+139361631;t=t+_t(_t(4*e+183187720,146097)*3,4)*4-3908;const n=_t(Xt(t,1461),4)*5+308,a=_t(Xt(n,153),5)+1,o=Xt(_t(n,153),12)+1;return{gy:_t(t,1461)-100100+_t(8-o,6),gm:o,gd:a}}function _t(e,t){return~~(e/t)}function Xt(e,t){return e-~~(e/t)*t}const Qre=["gregorian","persian"],hr={mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Qre.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},th=["update:modelValue"];function Vn(e){return e.year+"/"+at(e.month)+"/"+at(e.day)}function nh(e,t){const n=Q(()=>e.disable!==!0&&e.readonly!==!0),a=Q(()=>n.value===!0?0:-1),o=Q(()=>{const s=[];return e.color!==void 0&&s.push(`bg-${e.color}`),e.textColor!==void 0&&s.push(`text-${e.textColor}`),s.join(" ")});function i(){return e.locale!==void 0?{...t.lang.date,...e.locale}:t.lang.date}function r(s){const l=new Date,u=s===!0?null:0;if(e.calendar==="persian"){const c=wre(l);return{year:c.jy,month:c.jm,day:c.jd}}return{year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate(),hour:u,minute:u,second:u,millisecond:u}}return{editable:n,tabindex:a,headerClass:o,getLocale:i,getCurrentDate:r}}const oh=864e5,Are=36e5,dl=6e4,ah="YYYY-MM-DDTHH:mm:ss.SSSZ",Ire=/\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,qre=/(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Ds={};function Tre(e,t){const n="("+t.days.join("|")+")",a=e+n;if(Ds[a]!==void 0)return Ds[a];const o="("+t.daysShort.join("|")+")",i="("+t.months.join("|")+")",r="("+t.monthsShort.join("|")+")",s={};let l=0;const u=e.replace(qre,d=>{switch(l++,d){case"YY":return s.YY=l,"(-?\\d{1,2})";case"YYYY":return s.YYYY=l,"(-?\\d{1,4})";case"M":return s.M=l,"(\\d{1,2})";case"Mo":return s.M=l++,"(\\d{1,2}(st|nd|rd|th))";case"MM":return s.M=l,"(\\d{2})";case"MMM":return s.MMM=l,r;case"MMMM":return s.MMMM=l,i;case"D":return s.D=l,"(\\d{1,2})";case"Do":return s.D=l++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return s.D=l,"(\\d{2})";case"H":return s.H=l,"(\\d{1,2})";case"HH":return s.H=l,"(\\d{2})";case"h":return s.h=l,"(\\d{1,2})";case"hh":return s.h=l,"(\\d{2})";case"m":return s.m=l,"(\\d{1,2})";case"mm":return s.m=l,"(\\d{2})";case"s":return s.s=l,"(\\d{1,2})";case"ss":return s.s=l,"(\\d{2})";case"S":return s.S=l,"(\\d{1})";case"SS":return s.S=l,"(\\d{2})";case"SSS":return s.S=l,"(\\d{3})";case"A":return s.A=l,"(AM|PM)";case"a":return s.a=l,"(am|pm)";case"aa":return s.aa=l,"(a\\.m\\.|p\\.m\\.)";case"ddd":return o;case"dddd":return n;case"Q":case"d":case"E":return"(\\d{1})";case"do":return l++,"(\\d{1}(st|nd|rd|th))";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"DDDo":return l++,"(\\d{1,3}(st|nd|rd|th))";case"w":return"(\\d{1,2})";case"wo":return l++,"(\\d{1,2}(st|nd|rd|th))";case"ww":return"(\\d{2})";case"Z":return s.Z=l,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return s.ZZ=l,"(Z|[+-]\\d{2}\\d{2})";case"X":return s.X=l,"(-?\\d+)";case"x":return s.x=l,"(-?\\d{4,})";default:return l--,d[0]==="["&&(d=d.substring(1,d.length-1)),d.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),c={map:s,regex:new RegExp("^"+u)};return Ds[a]=c,c}function ih(e,t){return e!==void 0?e:t!==void 0?t.date:tl.date}function Dd(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),o=Math.floor(a/60),i=a%60;return n+at(o)+t+at(i)}function Na(e,t,n,a,o){const i={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(o!==void 0&&Object.assign(i,o),e==null||e===""||typeof e!="string")return i;t===void 0&&(t=ah);const r=ih(n,In.props),s=r.months,l=r.monthsShort,{regex:u,map:c}=Tre(t,r),d=e.match(u);if(d===null)return i;let p="";if(c.X!==void 0||c.x!==void 0){const g=parseInt(d[c.X!==void 0?c.X:c.x],10);if(isNaN(g)===!0||g<0)return i;const _=new Date(g*(c.X!==void 0?1e3:1));i.year=_.getFullYear(),i.month=_.getMonth()+1,i.day=_.getDate(),i.hour=_.getHours(),i.minute=_.getMinutes(),i.second=_.getSeconds(),i.millisecond=_.getMilliseconds()}else{if(c.YYYY!==void 0)i.year=parseInt(d[c.YYYY],10);else if(c.YY!==void 0){const g=parseInt(d[c.YY],10);i.year=g<0?g:2e3+g}if(c.M!==void 0){if(i.month=parseInt(d[c.M],10),i.month<1||i.month>12)return i}else c.MMM!==void 0?i.month=l.indexOf(d[c.MMM])+1:c.MMMM!==void 0&&(i.month=s.indexOf(d[c.MMMM])+1);if(c.D!==void 0){if(i.day=parseInt(d[c.D],10),i.year===null||i.month===null||i.day<1)return i;const g=a!=="persian"?new Date(i.year,i.month,0).getDate():ji(i.year,i.month);if(i.day>g)return i}c.H!==void 0?i.hour=parseInt(d[c.H],10)%24:c.h!==void 0&&(i.hour=parseInt(d[c.h],10)%12,(c.A&&d[c.A]==="PM"||c.a&&d[c.a]==="pm"||c.aa&&d[c.aa]==="p.m.")&&(i.hour+=12),i.hour=i.hour%24),c.m!==void 0&&(i.minute=parseInt(d[c.m],10)%60),c.s!==void 0&&(i.second=parseInt(d[c.s],10)%60),c.S!==void 0&&(i.millisecond=parseInt(d[c.S],10)*10**(3-d[c.S].length)),(c.Z!==void 0||c.ZZ!==void 0)&&(p=c.Z!==void 0?d[c.Z].replace(":",""):d[c.ZZ],i.timezoneOffset=(p[0]==="+"?-1:1)*(60*p.slice(1,3)+Number(p.slice(3,5))))}return i.dateHash=at(i.year,4)+"/"+at(i.month)+"/"+at(i.day),i.timeHash=at(i.hour)+":"+at(i.minute)+":"+at(i.second)+p,i}function Bs(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);const a=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-a);const o=(t-n)/(oh*7);return 1+Math.floor(o)}function Nn(e,t,n){const a=new Date(e),o=`set${n===!0?"UTC":""}`;switch(t){case"year":case"years":a[`${o}Month`](0);case"month":case"months":a[`${o}Date`](1);case"day":case"days":case"date":a[`${o}Hours`](0);case"hour":case"hours":a[`${o}Minutes`](0);case"minute":case"minutes":a[`${o}Seconds`](0);case"second":case"seconds":a[`${o}Milliseconds`](0)}return a}function qi(e,t,n){return(e.getTime()-e.getTimezoneOffset()*dl-(t.getTime()-t.getTimezoneOffset()*dl))/n}function rh(e,t,n="days"){const a=new Date(e),o=new Date(t);switch(n){case"years":case"year":return a.getFullYear()-o.getFullYear();case"months":case"month":return(a.getFullYear()-o.getFullYear())*12+a.getMonth()-o.getMonth();case"days":case"day":case"date":return qi(Nn(a,"day"),Nn(o,"day"),oh);case"hours":case"hour":return qi(Nn(a,"hour"),Nn(o,"hour"),Are);case"minutes":case"minute":return qi(Nn(a,"minute"),Nn(o,"minute"),dl);case"seconds":case"second":return qi(Nn(a,"second"),Nn(o,"second"),1e3)}}function Ps(e){return rh(e,Nn(e,"year"),"days")+1}function na(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Bd={YY(e,t,n){const a=this.YYYY(e,t,n)%100;return a>=0?at(a):"-"+at(Math.abs(a))},YYYY(e,t,n){return n??e.getFullYear()},M(e){return e.getMonth()+1},Mo(e){return na(e.getMonth()+1)},MM(e){return at(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return na(this.Q(e))},D(e){return e.getDate()},Do(e){return na(e.getDate())},DD(e){return at(e.getDate())},DDD(e){return Ps(e)},DDDo(e){return na(Ps(e))},DDDD(e){return at(Ps(e),3)},d(e){return e.getDay()},do(e){return na(e.getDay())},dd(e,t){return t.days[e.getDay()].slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return Bs(e)},wo(e){return na(Bs(e))},ww(e){return at(Bs(e))},H(e){return e.getHours()},HH(e){return at(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return at(this.h(e))},m(e){return e.getMinutes()},mm(e){return at(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return at(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return at(Math.floor(e.getMilliseconds()/10))},SSS(e){return at(e.getMilliseconds(),3)},A(e){return e.getHours()<12?"AM":"PM"},a(e){return e.getHours()<12?"am":"pm"},aa(e){return e.getHours()<12?"a.m.":"p.m."},Z(e,t,n,a){const o=a??e.getTimezoneOffset();return Dd(o,":")},ZZ(e,t,n,a){const o=a??e.getTimezoneOffset();return Dd(o)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function sh(e,t,n,a,o){if(e!==0&&!e||e===1/0||e===-1/0)return;const i=new Date(e);if(isNaN(i))return;t===void 0&&(t=ah);const r=ih(n,In.props);return t.replace(Ire,(s,l)=>s in Bd?Bd[s](i,r,a,o):l===void 0?s:l.split("\\]").join("]"))}const Fn=20,Lre=["Calendar","Years","Months"],Pd=e=>Lre.includes(e),Ms=e=>/^-?[\d]+\/[0-1]\d$/.test(e),oa=" — ";function ro(e){return e.year+"/"+at(e.month)}const Ere=Fe({name:"QDate",props:{...hr,...oo,...Mt,modelValue:{required:!0,validator:e=>typeof e=="string"||Array.isArray(e)===!0||Object(e)===e||e===null},multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{...hr.mask,default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ms},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ms},navigationMaxYearMonth:{type:String,validator:Ms},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:Pd}},emits:[...th,"rangeStart","rangeEnd","navigation"],setup(e,{slots:t,emit:n}){const{proxy:a}=Je(),{$q:o}=a,i=jt(e,o),{getCache:r}=Ym(),{tabindex:s,headerClass:l,getLocale:u,getCurrentDate:c}=nh(e,o);let d;const p=Or(e),g=zo(p),_=ge(null),I=ge(Ue()),C=ge(u()),b=Q(()=>Ue()),w=Q(()=>u()),y=Q(()=>c()),m=ge(re(I.value,C.value)),x=ge(e.defaultView),B=Q(()=>o.lang.rtl===!0?"right":"left"),T=ge(B.value),E=ge(B.value),O=m.value.year,F=ge(O-O%Fn-(O<0?Fn:0)),V=ge(null),j=Q(()=>{const P=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${P} q-date--${P}-${e.minimal===!0?"minimal":"standard"}`+(i.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),U=Q(()=>e.color||"primary"),D=Q(()=>e.textColor||"white"),R=Q(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ae=Q(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),Z=Q(()=>ae.value.filter(P=>typeof P=="string").map(P=>Ke(P,I.value,C.value)).filter(P=>P.dateHash!==null&&P.day!==null&&P.month!==null&&P.year!==null)),G=Q(()=>{const P=W=>Ke(W,I.value,C.value);return ae.value.filter(W=>zt(W)===!0&&W.from!==void 0&&W.to!==void 0).map(W=>({from:P(W.from),to:P(W.to)})).filter(W=>W.from.dateHash!==null&&W.to.dateHash!==null&&W.from.dateHash<W.to.dateHash)}),be=Q(()=>e.calendar!=="persian"?P=>new Date(P.year,P.month-1,P.day):P=>{const W=Ed(P.year,P.month,P.day);return new Date(W.gy,W.gm-1,W.gd)}),$e=Q(()=>e.calendar==="persian"?Vn:(P,W,se)=>sh(new Date(P.year,P.month-1,P.day,P.hour,P.minute,P.second,P.millisecond),W===void 0?I.value:W,se===void 0?C.value:se,P.year,P.timezoneOffset)),J=Q(()=>Z.value.length+G.value.reduce((P,W)=>P+1+rh(be.value(W.to),be.value(W.from)),0)),H=Q(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(V.value!==null){const se=V.value.init,Ae=be.value(se);return C.value.daysShort[Ae.getDay()]+", "+C.value.monthsShort[se.month-1]+" "+se.day+oa+"?"}if(J.value===0)return oa;if(J.value>1)return`${J.value} ${C.value.pluralDay}`;const P=Z.value[0],W=be.value(P);return isNaN(W.valueOf())===!0?oa:C.value.headerTitle!==void 0?C.value.headerTitle(W,P):C.value.daysShort[W.getDay()]+", "+C.value.monthsShort[P.month-1]+" "+P.day}),pe=Q(()=>Z.value.concat(G.value.map(W=>W.from)).sort((W,se)=>W.year-se.year||W.month-se.month)[0]),Le=Q(()=>Z.value.concat(G.value.map(W=>W.to)).sort((W,se)=>se.year-W.year||se.month-W.month)[0]),Me=Q(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(J.value===0)return oa;if(J.value>1){const P=pe.value,W=Le.value,se=C.value.monthsShort;return se[P.month-1]+(P.year!==W.year?" "+P.year+oa+se[W.month-1]+" ":P.month!==W.month?oa+se[W.month-1]:"")+" "+W.year}return Z.value[0].year}),de=Q(()=>{const P=[o.iconSet.datetime.arrowLeft,o.iconSet.datetime.arrowRight];return o.lang.rtl===!0?P.reverse():P}),h=Q(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):C.value.firstDayOfWeek),k=Q(()=>{const P=C.value.daysShort,W=h.value;return W>0?P.slice(W,7).concat(P.slice(0,W)):P}),q=Q(()=>{const P=m.value;return e.calendar!=="persian"?new Date(P.year,P.month,0).getDate():ji(P.year,P.month)}),Y=Q(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),z=Q(()=>{if(e.navigationMinYearMonth===void 0)return null;const P=e.navigationMinYearMonth.split("/");return{year:parseInt(P[0],10),month:parseInt(P[1],10)}}),A=Q(()=>{if(e.navigationMaxYearMonth===void 0)return null;const P=e.navigationMaxYearMonth.split("/");return{year:parseInt(P[0],10),month:parseInt(P[1],10)}}),$=Q(()=>{const P={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return z.value!==null&&z.value.year>=m.value.year&&(P.year.prev=!1,z.value.year===m.value.year&&z.value.month>=m.value.month&&(P.month.prev=!1)),A.value!==null&&A.value.year<=m.value.year&&(P.year.next=!1,A.value.year===m.value.year&&A.value.month<=m.value.month&&(P.month.next=!1)),P}),te=Q(()=>{const P={};return Z.value.forEach(W=>{const se=ro(W);P[se]===void 0&&(P[se]=[]),P[se].push(W.day)}),P}),fe=Q(()=>{const P={};return G.value.forEach(W=>{const se=ro(W.from),Ae=ro(W.to);if(P[se]===void 0&&(P[se]=[]),P[se].push({from:W.from.day,to:se===Ae?W.to.day:void 0,range:W}),se<Ae){let Ee;const{year:Xe,month:Pe}=W.from,We=Pe<12?{year:Xe,month:Pe+1}:{year:Xe+1,month:1};for(;(Ee=ro(We))<=Ae;)P[Ee]===void 0&&(P[Ee]=[]),P[Ee].push({from:void 0,to:Ee===Ae?W.to.day:void 0,range:W}),We.month++,We.month>12&&(We.year++,We.month=1)}}),P}),ue=Q(()=>{if(V.value===null)return;const{init:P,initHash:W,final:se,finalHash:Ae}=V.value,[Ee,Xe]=W<=Ae?[P,se]:[se,P],Pe=ro(Ee),We=ro(Xe);if(Pe!==ce.value&&We!==ce.value)return;const ot={};return Pe===ce.value?(ot.from=Ee.day,ot.includeFrom=!0):ot.from=1,We===ce.value?(ot.to=Xe.day,ot.includeTo=!0):ot.to=q.value,ot}),ce=Q(()=>ro(m.value)),Se=Q(()=>{const P={};if(e.options===void 0){for(let se=1;se<=q.value;se++)P[se]=!0;return P}const W=typeof e.options=="function"?e.options:se=>e.options.includes(se);for(let se=1;se<=q.value;se++){const Ae=ce.value+"/"+at(se);P[se]=W(Ae)}return P}),ye=Q(()=>{const P={};if(e.events===void 0)for(let W=1;W<=q.value;W++)P[W]=!1;else{const W=typeof e.events=="function"?e.events:se=>e.events.includes(se);for(let se=1;se<=q.value;se++){const Ae=ce.value+"/"+at(se);P[se]=W(Ae)===!0&&Y.value(Ae)}}return P}),ve=Q(()=>{let P,W;const{year:se,month:Ae}=m.value;if(e.calendar!=="persian")P=new Date(se,Ae-1,1),W=new Date(se,Ae-1,0).getDate();else{const Ee=Ed(se,Ae,1);P=new Date(Ee.gy,Ee.gm-1,Ee.gd);let Xe=Ae-1,Pe=se;Xe===0&&(Xe=12,Pe--),W=ji(Pe,Xe)}return{days:P.getDay()-h.value-1,endDay:W}}),le=Q(()=>{const P=[],{days:W,endDay:se}=ve.value,Ae=W<0?W+7:W;if(Ae<6)for(let Pe=se-Ae;Pe<=se;Pe++)P.push({i:Pe,fill:!0});const Ee=P.length;for(let Pe=1;Pe<=q.value;Pe++){const We={i:Pe,event:ye.value[Pe],classes:[]};Se.value[Pe]===!0&&(We.in=!0,We.flat=!0),P.push(We)}if(te.value[ce.value]!==void 0&&te.value[ce.value].forEach(Pe=>{const We=Ee+Pe-1;Object.assign(P[We],{selected:!0,unelevated:!0,flat:!1,color:U.value,textColor:D.value})}),fe.value[ce.value]!==void 0&&fe.value[ce.value].forEach(Pe=>{if(Pe.from!==void 0){const We=Ee+Pe.from-1,ot=Ee+(Pe.to||q.value)-1;for(let an=We;an<=ot;an++)Object.assign(P[an],{range:Pe.range,unelevated:!0,color:U.value,textColor:D.value});Object.assign(P[We],{rangeFrom:!0,flat:!1}),Pe.to!==void 0&&Object.assign(P[ot],{rangeTo:!0,flat:!1})}else if(Pe.to!==void 0){const We=Ee+Pe.to-1;for(let ot=Ee;ot<=We;ot++)Object.assign(P[ot],{range:Pe.range,unelevated:!0,color:U.value,textColor:D.value});Object.assign(P[We],{flat:!1,rangeTo:!0})}else{const We=Ee+q.value-1;for(let ot=Ee;ot<=We;ot++)Object.assign(P[ot],{range:Pe.range,unelevated:!0,color:U.value,textColor:D.value})}}),ue.value!==void 0){const Pe=Ee+ue.value.from-1,We=Ee+ue.value.to-1;for(let ot=Pe;ot<=We;ot++)P[ot].color=U.value,P[ot].editRange=!0;ue.value.includeFrom===!0&&(P[Pe].editRangeFrom=!0),ue.value.includeTo===!0&&(P[We].editRangeTo=!0)}m.value.year===y.value.year&&m.value.month===y.value.month&&(P[Ee+y.value.day-1].today=!0);const Xe=P.length%7;if(Xe>0){const Pe=7-Xe;for(let We=1;We<=Pe;We++)P.push({i:We,fill:!0})}return P.forEach(Pe=>{let We="q-date__calendar-item ";Pe.fill===!0?We+="q-date__calendar-item--fill":(We+=`q-date__calendar-item--${Pe.in===!0?"in":"out"}`,Pe.range!==void 0&&(We+=` q-date__range${Pe.rangeTo===!0?"-to":Pe.rangeFrom===!0?"-from":""}`),Pe.editRange===!0&&(We+=` q-date__edit-range${Pe.editRangeFrom===!0?"-from":""}${Pe.editRangeTo===!0?"-to":""}`),(Pe.range!==void 0||Pe.editRange===!0)&&(We+=` text-${Pe.color}`)),Pe.classes=We}),P}),oe=Q(()=>e.disable===!0?{"aria-disabled":"true"}:{});Oe(()=>e.modelValue,P=>{if(d===JSON.stringify(P))d=0;else{const W=re(I.value,C.value);kt(W.year,W.month,W)}}),Oe(x,()=>{_.value!==null&&a.$el.contains(document.activeElement)===!0&&_.value.focus()}),Oe(()=>m.value.year+"|"+m.value.month,()=>{n("navigation",{year:m.value.year,month:m.value.month})}),Oe(b,P=>{xo(P,C.value,"mask"),I.value=P}),Oe(w,P=>{xo(I.value,P,"locale"),C.value=P});function ie(P){d=JSON.stringify(P)}function me(){const{year:P,month:W,day:se}=y.value,Ae={...m.value,year:P,month:W,day:se},Ee=te.value[ro(Ae)];(Ee===void 0||Ee.includes(Ae.day)===!1)&&qa(Ae),Ie(Ae.year,Ae.month)}function Ce(P){Pd(P)===!0&&(x.value=P)}function je(P,W){["month","year"].includes(P)&&(P==="month"?ne:ke)(W===!0?-1:1)}function Ie(P,W){x.value="Calendar",kt(P,W)}function De(P,W){if(e.range===!1||!P){V.value=null;return}const se=Object.assign({...m.value},P),Ae=W!==void 0?Object.assign({...m.value},W):se;V.value={init:se,initHash:Vn(se),final:Ae,finalHash:Vn(Ae)},Ie(se.year,se.month)}function Ue(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function Ke(P,W,se){return Na(P,W,se,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function re(P,W){const se=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(se.length===0)return he();const Ae=se[se.length-1],Ee=Ke(Ae.from!==void 0?Ae.from:Ae,P,W);return Ee.dateHash===null?he():Ee}function he(){let P,W;if(e.defaultYearMonth!==void 0){const se=e.defaultYearMonth.split("/");P=parseInt(se[0],10),W=parseInt(se[1],10)}else{const se=y.value!==void 0?y.value:c();P=se.year,W=se.month}return{year:P,month:W,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:P+"/"+at(W)+"/01"}}function ne(P){let W=m.value.year,se=Number(m.value.month)+P;se===13?(se=1,W++):se===0&&(se=12,W--),kt(W,se),R.value===!0&&ao("month")}function ke(P){const W=Number(m.value.year)+P;kt(W,m.value.month),R.value===!0&&ao("year")}function Qe(P){kt(P,m.value.month),x.value=e.defaultView==="Years"?"Months":"Calendar",R.value===!0&&ao("year")}function He(P){kt(m.value.year,P),x.value="Calendar",R.value===!0&&ao("month")}function Re(P,W){const se=te.value[W];((se==null?void 0:se.includes(P.day))===!0?Ho:qa)(P)}function et(P){return{year:P.year,month:P.month,day:P.day}}function kt(P,W,se){if(z.value!==null&&P<=z.value.year&&((W<z.value.month||P<z.value.year)&&(W=z.value.month),P=z.value.year),A.value!==null&&P>=A.value.year&&((W>A.value.month||P>A.value.year)&&(W=A.value.month),P=A.value.year),se!==void 0){const{hour:Ee,minute:Xe,second:Pe,millisecond:We,timezoneOffset:ot,timeHash:an}=se;Object.assign(m.value,{hour:Ee,minute:Xe,second:Pe,millisecond:We,timezoneOffset:ot,timeHash:an})}const Ae=P+"/"+at(W)+"/01";Ae!==m.value.dateHash&&(T.value=m.value.dateHash<Ae==(o.lang.rtl!==!0)?"left":"right",P!==m.value.year&&(E.value=T.value),bt(()=>{F.value=P-P%Fn-(P<0?Fn:0),Object.assign(m.value,{year:P,month:W,day:1,dateHash:Ae})}))}function pn(P,W,se){const Ae=P!==null&&P.length===1&&e.multiple===!1?P[0]:P,{reason:Ee,details:Xe}=mi(W,se);ie(Ae),n("update:modelValue",Ae,Ee,Xe)}function ao(P){const W=Z.value[0]!==void 0&&Z.value[0].dateHash!==null?{...Z.value[0]}:{...m.value};bt(()=>{W.year=m.value.year,W.month=m.value.month;const se=e.calendar!=="persian"?new Date(W.year,W.month,0).getDate():ji(W.year,W.month);W.day=Math.min(Math.max(1,W.day),se);const Ae=Rn(W),{details:Ee}=mi("",W);ie(Ae),n("update:modelValue",Ae,P,Ee)})}function mi(P,W){return W.from!==void 0?{reason:`${P}-range`,details:{...et(W.target),from:et(W.from),to:et(W.to)}}:{reason:`${P}-day`,details:et(W)}}function Rn(P,W,se){return P.from!==void 0?{from:$e.value(P.from,W,se),to:$e.value(P.to,W,se)}:$e.value(P,W,se)}function qa(P){let W;if(e.multiple===!0)if(P.from!==void 0){const se=Vn(P.from),Ae=Vn(P.to),Ee=Z.value.filter(Pe=>Pe.dateHash<se||Pe.dateHash>Ae),Xe=G.value.filter(({from:Pe,to:We})=>We.dateHash<se||Pe.dateHash>Ae);W=Ee.concat(Xe).concat(P).map(Pe=>Rn(Pe))}else{const se=ae.value.slice();se.push(Rn(P)),W=se}else W=Rn(P);pn(W,"add",P)}function Ho(P){if(e.noUnset===!0)return;let W=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const se=Rn(P);P.from!==void 0?W=e.modelValue.filter(Ae=>Ae.from!==void 0?Ae.from!==se.from&&Ae.to!==se.to:!0):W=e.modelValue.filter(Ae=>Ae!==se),W.length===0&&(W=null)}pn(W,"remove",P)}function xo(P,W,se){const Ae=Z.value.concat(G.value).map(Xe=>Rn(Xe,P,W)).filter(Xe=>Xe.from!==void 0?Xe.from.dateHash!==null&&Xe.to.dateHash!==null:Xe.dateHash!==null),Ee=(e.multiple===!0?Ae:Ae[0])||null;ie(Ee),n("update:modelValue",Ee,se)}function Co(){if(e.minimal!==!0)return L("div",{class:"q-date__header "+l.value},[L("div",{class:"relative-position"},[L(Lt,{name:"q-transition--fade"},()=>L("div",{key:"h-yr-"+Me.value,class:"q-date__header-subtitle q-date__header-link "+(x.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...r("vY",{onClick(){x.value="Years"},onKeyup(P){P.keyCode===13&&(x.value="Years")}})},[Me.value]))]),L("div",{class:"q-date__header-title relative-position flex no-wrap"},[L("div",{class:"relative-position col"},[L(Lt,{name:"q-transition--fade"},()=>L("div",{key:"h-sub"+H.value,class:"q-date__header-title-label q-date__header-link "+(x.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:s.value,...r("vC",{onClick(){x.value="Calendar"},onKeyup(P){P.keyCode===13&&(x.value="Calendar")}})},[H.value]))]),e.todayBtn===!0?L(it,{class:"q-date__header-today self-start",icon:o.iconSet.datetime.today,"aria-label":o.lang.date.today,flat:!0,size:"sm",round:!0,tabindex:s.value,onClick:me}):null])])}function yn({label:P,type:W,key:se,dir:Ae,goTo:Ee,boundaries:Xe,cls:Pe}){return[L("div",{class:"row items-center q-date__arrow"},[L(it,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[0],"aria-label":W==="Years"?o.lang.date.prevYear:o.lang.date.prevMonth,tabindex:s.value,disable:Xe.prev===!1,...r("go-#"+W,{onClick(){Ee(-1)}})})]),L("div",{class:"relative-position overflow-hidden flex flex-center"+Pe},[L(Lt,{name:"q-transition--jump-"+Ae},()=>L("div",{key:se},[L(it,{flat:!0,dense:!0,noCaps:!0,label:P,tabindex:s.value,...r("view#"+W,{onClick:()=>{x.value=W}})})]))]),L("div",{class:"row items-center q-date__arrow"},[L(it,{round:!0,dense:!0,size:"sm",flat:!0,icon:de.value[1],"aria-label":W==="Years"?o.lang.date.nextYear:o.lang.date.nextMonth,tabindex:s.value,disable:Xe.next===!1,...r("go+#"+W,{onClick(){Ee(1)}})})])]}const Hr={Calendar:()=>[L("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[L("div",{class:"q-date__navigation row items-center no-wrap"},yn({label:C.value.months[m.value.month-1],type:"Months",key:m.value.month,dir:T.value,goTo:ne,boundaries:$.value.month,cls:" col"}).concat(yn({label:m.value.year,type:"Years",key:m.value.year,dir:E.value,goTo:ke,boundaries:$.value.year,cls:""}))),L("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},k.value.map(P=>L("div",{class:"q-date__calendar-item"},[L("div",P)]))),L("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[L(Lt,{name:"q-transition--slide-"+T.value},()=>L("div",{key:ce.value,class:"q-date__calendar-days fit"},le.value.map(P=>L("div",{class:P.classes},[P.in===!0?L(it,{class:P.today===!0?"q-date__today":"",dense:!0,flat:P.flat,unelevated:P.unelevated,color:P.color,textColor:P.textColor,label:P.i,tabindex:s.value,...r("day#"+P.i,{onClick:()=>{Ur(P.i)},onMouseover:()=>{Wr(P.i)}})},P.event!==!1?()=>L("div",{class:"q-date__event bg-"+P.event}):null):L("div",String(P.i))]))))])])],Months(){const P=m.value.year===y.value.year,W=Ae=>z.value!==null&&m.value.year===z.value.year&&z.value.month>Ae||A.value!==null&&m.value.year===A.value.year&&A.value.month<Ae,se=C.value.monthsShort.map((Ae,Ee)=>{const Xe=m.value.month===Ee+1;return L("div",{class:"q-date__months-item flex flex-center"},[L(it,{class:P===!0&&y.value.month===Ee+1?"q-date__today":null,flat:Xe!==!0,label:Ae,unelevated:Xe,color:Xe===!0?U.value:null,textColor:Xe===!0?D.value:null,tabindex:s.value,disable:W(Ee+1),...r("month#"+Ee,{onClick:()=>{He(Ee+1)}})})])});return e.yearsInMonthView===!0&&se.unshift(L("div",{class:"row no-wrap full-width"},[yn({label:m.value.year,type:"Years",key:m.value.year,dir:E.value,goTo:ke,boundaries:$.value.year,cls:" col"})])),L("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},se)},Years(){const P=F.value,W=P+Fn,se=[],Ae=Ee=>z.value!==null&&z.value.year>Ee||A.value!==null&&A.value.year<Ee;for(let Ee=P;Ee<=W;Ee++){const Xe=m.value.year===Ee;se.push(L("div",{class:"q-date__years-item flex flex-center"},[L(it,{key:"yr"+Ee,class:y.value.year===Ee?"q-date__today":null,flat:!Xe,label:Ee,dense:!0,unelevated:Xe,color:Xe===!0?U.value:null,textColor:Xe===!0?D.value:null,tabindex:s.value,disable:Ae(Ee),...r("yr#"+Ee,{onClick:()=>{Qe(Ee)}})})]))}return L("div",{class:"q-date__view q-date__years flex flex-center"},[L("div",{class:"col-auto"},[L(it,{round:!0,dense:!0,flat:!0,icon:de.value[0],"aria-label":o.lang.date.prevRangeYears(Fn),tabindex:s.value,disable:Ae(P),...r("y-",{onClick:()=>{F.value-=Fn}})})]),L("div",{class:"q-date__years-content col self-stretch row items-center"},se),L("div",{class:"col-auto"},[L(it,{round:!0,dense:!0,flat:!0,icon:de.value[1],"aria-label":o.lang.date.nextRangeYears(Fn),tabindex:s.value,disable:Ae(W),...r("y+",{onClick:()=>{F.value+=Fn}})})])])}};function Ur(P){const W={...m.value,day:P};if(e.range===!1){Re(W,ce.value);return}if(V.value===null){const se=le.value.find(Ee=>Ee.fill!==!0&&Ee.i===P);if(e.noUnset!==!0&&se.range!==void 0){Ho({target:W,from:se.range.from,to:se.range.to});return}if(se.selected===!0){Ho(W);return}const Ae=Vn(W);V.value={init:W,initHash:Ae,final:W,finalHash:Ae},n("rangeStart",et(W))}else{const se=V.value.initHash,Ae=Vn(W),Ee=se<=Ae?{from:V.value.init,to:W}:{from:W,to:V.value.init};V.value=null,qa(se===Ae?W:{target:W,...Ee}),n("rangeEnd",{from:et(Ee.from),to:et(Ee.to)})}}function Wr(P){if(V.value!==null){const W={...m.value,day:P};Object.assign(V.value,{final:W,finalHash:Vn(W)})}}return Object.assign(a,{setToday:me,setView:Ce,offsetCalendar:je,setCalendarTo:Ie,setEditingRange:De}),()=>{const P=[L("div",{class:"q-date__content col relative-position"},[L(Lt,{name:"q-transition--fade"},Hr[x.value])])],W=mt(t.default);return W!==void 0&&P.push(L("div",{class:"q-date__actions"},W)),e.name!==void 0&&e.disable!==!0&&g(P,"push"),L("div",{class:j.value,...oe.value},[Co(),L("div",{ref:_,class:"q-date__main col column",tabindex:-1},P)])}}}),Dre="component",Bre={docsUrl:"https://v2.quasar.dev/vue-components/date"},Pre={"model-value":{type:["String","Array","Object","null"],desc:"Date(s) of the component; must be Array if using 'multiple' prop; use v-model",required:!0,category:"model"},mask:{type:["String","null"],default:"'YYYY/MM/DD'",desc:"Date formatting mask",category:"model"},title:{type:"String",desc:"Overrides the default header title",category:"content"},subtitle:{type:"String",desc:"Overrides the default header subtitle",category:"content"},"default-year-month":{type:"String",desc:"Default year and month (YYYY/MM) when model is unfilled",category:"model"},"default-view":{type:"String",default:"'Calendar'",desc:"The view displayed by default: Calendar, Months, or Years",category:"model"},multiple:{type:"Boolean",desc:"Allow multiple selection; model must be Array",category:"selection"},range:{type:"Boolean",desc:"Allow range selection",category:"selection"},"emit-immediately":{type:"Boolean",desc:"Emit model when user browses month/year too (single selection only)",category:"model"},"today-btn":{type:"Boolean",desc:"Display a button that selects the current day",category:"content"},minimal:{type:"Boolean",desc:"Don't display the header",category:"content"},landscape:{type:"Boolean",desc:"Display the component in landscape mode",category:"style"},events:{type:["Array","Function"],desc:"List of events to highlight on the calendar",category:"model"},"event-color":{type:["String","Function"],desc:"Color for event markers",category:"style"},options:{type:["Array","Function"],desc:"Configure which days are selectable",category:"model"},"first-day-of-week":{type:["String","Number"],desc:"First day of the week (0=Sunday, 1=Monday, ...)",category:"model"},"navigation-min-year-month":{type:"String",desc:"Lock navigation below a specific YYYY/MM",category:"selection"},"navigation-max-year-month":{type:"String",desc:"Lock navigation above a specific YYYY/MM",category:"selection"},"no-unset":{type:"Boolean",desc:"Remove ability to unselect a date",category:"selection"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"text-color":{type:"String",desc:"Color name for the text",category:"style"},square:{type:"Boolean",desc:"Removes border-radius so borders are squared",category:"style"},flat:{type:"Boolean",desc:"Applies a flat design (no default shadow)",category:"style"},bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"}},Mre={default:{desc:"This is where additional buttons can go"}},jre={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"},navigation:{desc:"Emitted when user navigates to a different month or year"},"range-start":{desc:"User has started a range selection"},"range-end":{desc:"User has ended a range selection"}},$re={type:Dre,meta:Bre,props:Pre,slots:Mre,events:jre},Rre={name:"ShowcaseQuasarDate",components:{QDate:Ere},label:"Quasar Date",icon:"calendar_today",apiJson:$re,importName:"QDate",importFrom:"quasar",data(){return{basic:"2026/04/16",landscape:"2026/04/16",multi:["2026/04/10","2026/04/15","2026/04/20"],rangeVal:{from:"2026/04/10",to:"2026/04/18"},minimal:"2026/04/16"}}},Ore={class:"jShowcase_row jShowcase_column"},Fre={class:"jShowcase_group"},Vre={class:"jShowcase_items"},Nre={class:"jShowcase_group"},zre={class:"jShowcase_items"},Hre={class:"jShowcase_group"},Ure={class:"jShowcase_items"},Wre={class:"jShowcase_group"},Jre={class:"jShowcase_items"},Gre={class:"jShowcase_group"},Yre={class:"jShowcase_items"};function Kre(e,t,n,a,o,i){const r=X("QDate");return M(),ee("div",Ore,[v("div",Fre,[t[5]||(t[5]=v("span",{class:"jShowcase_title"},"Basic",-1)),v("div",Vre,[f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),color:"primary"},null,8,["modelValue"])])]),v("div",Nre,[t[6]||(t[6]=v("span",{class:"jShowcase_title"},"Landscape + Today button",-1)),v("div",zre,[f(r,{modelValue:o.landscape,"onUpdate:modelValue":t[1]||(t[1]=s=>o.landscape=s),color:"secondary",landscape:"","today-btn":""},null,8,["modelValue"])])]),v("div",Hre,[t[7]||(t[7]=v("span",{class:"jShowcase_title"},"Multiple selection",-1)),v("div",Ure,[f(r,{modelValue:o.multi,"onUpdate:modelValue":t[2]||(t[2]=s=>o.multi=s),color:"accent",multiple:""},null,8,["modelValue"])])]),v("div",Wre,[t[8]||(t[8]=v("span",{class:"jShowcase_title"},"Range selection",-1)),v("div",Jre,[f(r,{modelValue:o.rangeVal,"onUpdate:modelValue":t[3]||(t[3]=s=>o.rangeVal=s),color:"positive",range:""},null,8,["modelValue"])])]),v("div",Gre,[t[9]||(t[9]=v("span",{class:"jShowcase_title"},"Minimal (no header)",-1)),v("div",Yre,[f(r,{modelValue:o.minimal,"onUpdate:modelValue":t[4]||(t[4]=s=>o.minimal=s),color:"info",minimal:""},null,8,["modelValue"])])])])}const Zre=ze(Rre,[["render",Kre]]),Xre=Object.freeze(Object.defineProperty({__proto__:null,default:Zre},Symbol.toStringTag,{value:"Module"})),ese="component",tse={docsUrl:"https://v2.quasar.dev/vue-components/input"},nse={"model-value":{type:["String","Number","null"],desc:"Model of the component; use v-model directive",required:!0,category:"model"},type:{type:"String",default:"'text'",desc:"Input type (text, password, textarea, email, search, tel, file, number, url, time, date)",category:"general"},label:{type:"String",desc:"A text label that will float above the input field",category:"content"},hint:{type:"String",desc:"Helper text below the field",category:"content"},"hide-hint":{type:"Boolean",desc:"Hide hint when field is not focused",category:"content"},placeholder:{type:"String",desc:"Input placeholder text",category:"content"},prefix:{type:"String",desc:"Prefix text",category:"content"},suffix:{type:"String",desc:"Suffix text",category:"content"},"shadow-text":{type:"String",desc:"Shadow text displayed at the end of the input",category:"content"},"stack-label":{type:"Boolean",desc:"Force the label to always be visible",category:"content"},"label-color":{type:"String",desc:"Label color from the Quasar Color Palette",category:"style"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"bg-color":{type:"String",desc:"Background color from the Quasar Color Palette",category:"style"},filled:{type:"Boolean",desc:"Use filled design",category:"style"},outlined:{type:"Boolean",desc:"Use outlined design",category:"style"},borderless:{type:"Boolean",desc:"Use borderless design",category:"style"},standout:{type:["Boolean","String"],desc:"Use standout design",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},square:{type:"Boolean",desc:"Removes border-radius",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},clearable:{type:"Boolean",desc:"Appends clearable icon when a value is set",category:"behavior"},counter:{type:"Boolean",desc:"Show a character counter at the bottom",category:"content"},maxlength:{type:["String","Number"],desc:"Specify a max length of model",category:"model"},autogrow:{type:"Boolean",desc:"Make field autogrow along with its content (uses textarea)",category:"content"},autofocus:{type:"Boolean",desc:"Focus field on initial component render",category:"behavior"},debounce:{type:["String","Number"],desc:"Debounce amount (ms) when updating model",category:"model"},loading:{type:"Boolean",desc:"Signals a process is in progress by displaying a spinner",category:"behavior"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"}},ose={default:{desc:"Field main content"},prepend:{desc:"Prepend inner field; suggestion: QIcon, QBtn"},append:{desc:"Append to inner field; suggestion: QIcon, QBtn"},before:{desc:"Prepend outer field; suggestion: QIcon, QBtn"},after:{desc:"Append outer field; suggestion: QIcon, QBtn"},label:{desc:"Custom label; overrides the 'label' prop if used"},hint:{desc:"Custom hint content"},counter:{desc:"Custom counter content"},error:{desc:"Custom error content"},loading:{desc:"Override default spinner when loading"}},ase={"update:model-value":{desc:"Emitted when the model value changes"},focus:{desc:"Emitted when the field receives focus"},blur:{desc:"Emitted when the field loses focus"},clear:{desc:"Emitted when the clearable icon is clicked"}},ise={type:ese,meta:tse,props:nse,slots:ose,events:ase},rse={name:"ShowcaseQuasarInput",components:{QInput:Fr,QIcon:nt},label:"Quasar Input",icon:"edit_note",apiJson:ise,importName:"QInput",importFrom:"quasar",data(){return{basic:"NCC-1701",outlined:"",filled:"",standout:"",roundedVal:"",squareVal:"",denseVal:"",borderlessVal:"Borderless text",search:"",credits:"500",clearableVal:"Clear me",password:"secret",showPwd:!1,hinted:"",counted:"",textarea:"Captain's log, stardate 41153.7.",autogrow:""}}},sse={class:"jShowcase_row jShowcase_column showcaseInput"},lse={class:"jShowcase_group"},cse={class:"jShowcase_items"},use={class:"jShowcase_group"},dse={class:"jShowcase_items"},fse={class:"jShowcase_group"},pse={class:"jShowcase_items"},mse={class:"jShowcase_group"},hse={class:"jShowcase_items"},gse={class:"jShowcase_group"},vse={class:"jShowcase_items"},bse={class:"jShowcase_group"},_se={class:"jShowcase_items"};function yse(e,t,n,a,o,i){const r=X("QInput"),s=X("QIcon");return M(),ee("div",sse,[v("div",lse,[t[17]||(t[17]=v("span",{class:"jShowcase_title"},"Styles",-1)),v("div",cse,[f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=l=>o.basic=l),label:"Default",color:"primary",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.outlined,"onUpdate:modelValue":t[1]||(t[1]=l=>o.outlined=l),label:"Outlined",color:"primary",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.filled,"onUpdate:modelValue":t[2]||(t[2]=l=>o.filled=l),label:"Filled",color:"primary",filled:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.standout,"onUpdate:modelValue":t[3]||(t[3]=l=>o.standout=l),label:"Standout",color:"primary",standout:"",class:"showcaseInput_field"},null,8,["modelValue"])])]),v("div",use,[t[18]||(t[18]=v("span",{class:"jShowcase_title"},"Shapes",-1)),v("div",dse,[f(r,{modelValue:o.roundedVal,"onUpdate:modelValue":t[4]||(t[4]=l=>o.roundedVal=l),label:"Rounded",color:"accent",rounded:"",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.squareVal,"onUpdate:modelValue":t[5]||(t[5]=l=>o.squareVal=l),label:"Square",color:"accent",square:"",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.denseVal,"onUpdate:modelValue":t[6]||(t[6]=l=>o.denseVal=l),label:"Dense",color:"accent",dense:"",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.borderlessVal,"onUpdate:modelValue":t[7]||(t[7]=l=>o.borderlessVal=l),label:"Borderless",color:"accent",borderless:"",class:"showcaseInput_field"},null,8,["modelValue"])])]),v("div",fse,[t[19]||(t[19]=v("span",{class:"jShowcase_title"},"Decorations",-1)),v("div",pse,[f(r,{modelValue:o.search,"onUpdate:modelValue":t[8]||(t[8]=l=>o.search=l),label:"Search",color:"secondary",outlined:"",class:"showcaseInput_field"},{prepend:S(()=>[f(s,{name:"search"})]),_:1},8,["modelValue"]),f(r,{modelValue:o.credits,"onUpdate:modelValue":t[9]||(t[9]=l=>o.credits=l),label:"Credits",color:"secondary",outlined:"",prefix:"₡",suffix:".00",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.clearableVal,"onUpdate:modelValue":t[10]||(t[10]=l=>o.clearableVal=l),label:"Clearable",color:"secondary",outlined:"",clearable:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.password,"onUpdate:modelValue":t[12]||(t[12]=l=>o.password=l),label:"Password",type:o.showPwd?"text":"password",color:"secondary",outlined:"",class:"showcaseInput_field"},{append:S(()=>[f(s,{name:o.showPwd?"visibility":"visibility_off",class:"cursor-pointer",onClick:t[11]||(t[11]=l=>o.showPwd=!o.showPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])])]),v("div",mse,[t[20]||(t[20]=v("span",{class:"jShowcase_title"},"Hints & Counter",-1)),v("div",hse,[f(r,{modelValue:o.hinted,"onUpdate:modelValue":t[13]||(t[13]=l=>o.hinted=l),label:"With hint",hint:"Enter callsign",color:"info",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),f(r,{modelValue:o.counted,"onUpdate:modelValue":t[14]||(t[14]=l=>o.counted=l),label:"With counter",color:"info",outlined:"",counter:"",maxlength:20,class:"showcaseInput_field"},null,8,["modelValue"])])]),v("div",gse,[t[21]||(t[21]=v("span",{class:"jShowcase_title"},"Textarea",-1)),v("div",vse,[f(r,{modelValue:o.textarea,"onUpdate:modelValue":t[15]||(t[15]=l=>o.textarea=l),label:"Ship log",type:"textarea",color:"accent",outlined:"",class:"showcaseInput_field showcaseInput_fieldWide"},null,8,["modelValue"]),f(r,{modelValue:o.autogrow,"onUpdate:modelValue":t[16]||(t[16]=l=>o.autogrow=l),label:"Autogrow",autogrow:"",color:"accent",outlined:"",class:"showcaseInput_field showcaseInput_fieldWide"},null,8,["modelValue"])])]),v("div",bse,[t[22]||(t[22]=v("span",{class:"jShowcase_title"},"States",-1)),v("div",_se,[f(r,{"model-value":"Locked",label:"Disabled",color:"negative",disable:"",outlined:"",class:"showcaseInput_field"}),f(r,{"model-value":"Read only",label:"Readonly",color:"warning",readonly:"",outlined:"",class:"showcaseInput_field"}),f(r,{"model-value":"",label:"Loading",color:"accent",loading:"",outlined:"",class:"showcaseInput_field"})])])])}const wse=ze(rse,[["render",yse],["__scopeId","data-v-4d7319b7"]]),Sse=Object.freeze(Object.defineProperty({__proto__:null,default:wse},Symbol.toStringTag,{value:"Module"})),kse=()=>L("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[L("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),L("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),lh=Fe({name:"QRadio",props:{...Mt,...wo,...oo,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:n}){const{proxy:a}=Je(),o=jt(e,a.$q),i=So(e,Um),r=ge(null),{refocusTargetEl:s,refocusTarget:l}=Hm(e,r),u=Q(()=>Ze(e.modelValue)===Ze(e.val)),c=Q(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(o.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),d=Q(()=>{const m=e.color!==void 0&&(e.keepColor===!0||u.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${u.value===!0?"truthy":"falsy"}${m}`}),p=Q(()=>(u.value===!0?e.checkedIcon:e.uncheckedIcon)||null),g=Q(()=>e.disable===!0?-1:e.tabindex||0),_=Q(()=>{const m={type:"radio"};return e.name!==void 0&&Object.assign(m,{".checked":u.value===!0,"^checked":u.value===!0?"checked":void 0,name:e.name,value:e.val}),m}),I=zo(_);function C(m){m!==void 0&&(rt(m),l(m)),e.disable!==!0&&u.value!==!0&&n("update:modelValue",e.val,m)}function b(m){(m.keyCode===13||m.keyCode===32)&&rt(m)}function w(m){(m.keyCode===13||m.keyCode===32)&&C(m)}Object.assign(a,{set:C});const y=kse();return()=>{const m=p.value!==null?[L("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[L(nt,{class:"q-radio__icon",name:p.value})])]:[y];e.disable!==!0&&I(m,"unshift"," q-radio__native q-ma-none q-pa-none");const x=[L("div",{class:d.value,style:i.value,"aria-hidden":"true"},m)];s.value!==null&&x.push(s.value);const B=e.label!==void 0?dn(t.default,[e.label]):mt(t.default);return B!==void 0&&x.push(L("div",{class:"q-radio__label q-anchor--skip"},B)),L("div",{ref:r,class:c.value,tabindex:g.value,role:"radio","aria-label":e.label,"aria-checked":u.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:b,onKeyup:w},x)}}}),xse="component",Cse={docsUrl:"https://v2.quasar.dev/vue-components/radio"},Qse={"model-value":{type:["Any"],desc:"Model of the component; use v-model directive",required:!0,category:"model"},val:{type:["Any"],desc:"The actual value of the option with which model value is changed",required:!0,category:"model"},label:{type:"String",desc:"Label to display along the radio control",category:"label"},"left-label":{type:"Boolean",desc:"Label should be displayed on the left side",category:"label"},"checked-icon":{type:"String",desc:"Icon to use when selected",category:"icons"},"unchecked-icon":{type:"String",desc:"Icon to use when un-selected",category:"icons"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"keep-color":{type:"Boolean",desc:"Keep color when unticked",category:"behavior"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},Ase={default:{desc:"Default slot can be used as label, unless 'label' prop is specified"}},Ise={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},qse={type:xse,meta:Cse,props:Qse,slots:Ase,events:Ise},Tse={name:"ShowcaseQuasarRadio",components:{QRadio:lh,QList:ko,QItem:jn,QItemSection:$n,QItemLabel:Ia},label:"Quasar Radio",icon:"edit_note",apiJson:qse,importName:"QRadio",importFrom:"quasar",data(){return{selected:"shields",listSelected:"shields"}}},Lse={class:"jShowcase_row jShowcase_column"},Ese={class:"jShowcase_group"},Dse={class:"jShowcase_items showcaseVertical"},Bse={class:"jShowcase_group"};function Pse(e,t,n,a,o,i){const r=X("QRadio"),s=X("QItemSection"),l=X("QItemLabel"),u=X("QItem"),c=X("QList");return M(),ee("div",Lse,[v("div",Ese,[t[7]||(t[7]=v("span",{class:"jShowcase_title"},"Basic",-1)),v("div",Dse,[f(r,{modelValue:o.selected,"onUpdate:modelValue":t[0]||(t[0]=d=>o.selected=d),val:"shields",label:"Shields",color:"primary"},null,8,["modelValue"]),f(r,{modelValue:o.selected,"onUpdate:modelValue":t[1]||(t[1]=d=>o.selected=d),val:"weapons",label:"Weapons",color:"accent"},null,8,["modelValue"]),f(r,{modelValue:o.selected,"onUpdate:modelValue":t[2]||(t[2]=d=>o.selected=d),val:"engines",label:"Engines",color:"secondary"},null,8,["modelValue"]),f(r,{modelValue:o.selected,"onUpdate:modelValue":t[3]||(t[3]=d=>o.selected=d),val:"offline",label:"Offline",color:"negative",disable:""},null,8,["modelValue"])])]),v("div",Bse,[t[14]||(t[14]=v("span",{class:"jShowcase_title"},"With QItem",-1)),f(c,null,{default:S(()=>[we((M(),_e(u,{tag:"label"},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{modelValue:o.listSelected,"onUpdate:modelValue":t[4]||(t[4]=d=>o.listSelected=d),val:"shields",color:"primary"},null,8,["modelValue"])]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[8]||(t[8]=[K("Shields",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[9]||(t[9]=[K("Deflector array protection",-1)])]),_:1})]),_:1})]),_:1})),[[Kt]]),we((M(),_e(u,{tag:"label"},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{modelValue:o.listSelected,"onUpdate:modelValue":t[5]||(t[5]=d=>o.listSelected=d),val:"weapons",color:"accent"},null,8,["modelValue"])]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[10]||(t[10]=[K("Weapons",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[11]||(t[11]=[K("Phaser banks and torpedoes",-1)])]),_:1})]),_:1})]),_:1})),[[Kt]]),we((M(),_e(u,{tag:"label"},{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{modelValue:o.listSelected,"onUpdate:modelValue":t[6]||(t[6]=d=>o.listSelected=d),val:"engines",color:"secondary"},null,8,["modelValue"])]),_:1}),f(s,null,{default:S(()=>[f(l,null,{default:S(()=>[...t[12]||(t[12]=[K("Engines",-1)])]),_:1}),f(l,{caption:""},{default:S(()=>[...t[13]||(t[13]=[K("Main thruster control",-1)])]),_:1})]),_:1})]),_:1})),[[Kt]])]),_:1})])])}const Mse=ze(Tse,[["render",Pse],["__scopeId","data-v-a6418e6e"]]),jse=Object.freeze(Object.defineProperty({__proto__:null,default:Mse},Symbol.toStringTag,{value:"Module"})),$se=Fe({name:"QRating",props:{...wo,...oo,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=Je(),o=So(e),i=Or(e),r=zo(i),s=ge(0);let l={};const u=Q(()=>e.readonly!==!0&&e.disable!==!0),c=Q(()=>`q-rating row inline items-center q-rating--${u.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),d=Q(()=>{const y=Array.isArray(e.icon)===!0?e.icon.length:0,m=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,x=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,B=Array.isArray(e.color)===!0?e.color.length:0,T=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,E=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:y,icon:y>0?e.icon[y-1]:e.icon,selIconLen:m,selIcon:m>0?e.iconSelected[m-1]:e.iconSelected,halfIconLen:x,halfIcon:x>0?e.iconHalf[m-1]:e.iconHalf,colorLen:B,color:B>0?e.color[B-1]:e.color,selColorLen:T,selColor:T>0?e.colorSelected[T-1]:e.colorSelected,halfColorLen:E,halfColor:E>0?e.colorHalf[E-1]:e.colorHalf}}),p=Q(()=>{if(typeof e.iconAriaLabel=="string"){const y=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return m=>`${y}${m}`}if(Array.isArray(e.iconAriaLabel)===!0){const y=e.iconAriaLabel.length;if(y>0)return m=>e.iconAriaLabel[Math.min(m,y)-1]}return(y,m)=>`${m} ${y}`}),g=Q(()=>{const y=[],m=d.value,x=Math.ceil(e.modelValue),B=u.value===!0?0:null,T=e.iconHalf===void 0||x===e.modelValue?-1:x;for(let E=1;E<=e.max;E++){const O=s.value===0&&e.modelValue>=E||s.value>0&&s.value>=E,F=T===E&&s.value<E,V=s.value>0&&(F===!0?x:e.modelValue)>=E&&s.value<E,j=F===!0?E<=m.halfColorLen?e.colorHalf[E-1]:m.halfColor:m.selColor!==void 0&&O===!0?E<=m.selColorLen?e.colorSelected[E-1]:m.selColor:E<=m.colorLen?e.color[E-1]:m.color,U=(F===!0?E<=m.halfIconLen?e.iconHalf[E-1]:m.halfIcon:m.selIcon!==void 0&&(O===!0||V===!0)?E<=m.selIconLen?e.iconSelected[E-1]:m.selIcon:E<=m.iconLen?e.icon[E-1]:m.icon)||a.iconSet.rating.icon;y.push({name:(F===!0?E<=m.halfIconLen?e.iconHalf[E-1]:m.halfIcon:m.selIcon!==void 0&&(O===!0||V===!0)?E<=m.selIconLen?e.iconSelected[E-1]:m.selIcon:E<=m.iconLen?e.icon[E-1]:m.icon)||a.iconSet.rating.icon,attrs:{tabindex:B,role:"radio","aria-checked":e.modelValue===E?"true":"false","aria-label":p.value(E,U)},iconClass:"q-rating__icon"+(O===!0||F===!0?" q-rating__icon--active":"")+(V===!0?" q-rating__icon--exselected":"")+(s.value===E?" q-rating__icon--hovered":"")+(j!==void 0?` text-${j}`:"")})}return y}),_=Q(()=>{const y={role:"radiogroup"};return e.disable===!0&&(y["aria-disabled"]="true"),e.readonly===!0&&(y["aria-readonly"]="true"),y});function I(y){if(u.value===!0){const m=Gt(parseInt(y,10),1,parseInt(e.max,10)),x=e.noReset!==!0&&e.modelValue===m?0:m;x!==e.modelValue&&n("update:modelValue",x),s.value=0}}function C(y){u.value===!0&&(s.value=y)}function b(y,m){switch(y.keyCode){case 13:case 32:return I(m),rt(y);case 37:case 40:return l[`rt${m-1}`]&&l[`rt${m-1}`].focus(),rt(y);case 39:case 38:return l[`rt${m+1}`]&&l[`rt${m+1}`].focus(),rt(y)}}function w(){s.value=0}return Ir(()=>{l={}}),()=>{const y=[];return g.value.forEach(({iconClass:m,name:x,attrs:B},T)=>{const E=T+1;y.push(L("div",{key:E,ref:O=>{l[`rt${E}`]=O},class:"q-rating__icon-container flex flex-center",...B,onClick(){I(E)},onMouseover(){C(E)},onMouseout:w,onFocus(){C(E)},onBlur:w,onKeyup(O){b(O,E)}},dn(t[`tip-${E}`],[L(nt,{class:m,name:x})])))}),e.name!==void 0&&e.disable!==!0&&r(y,"push"),L("div",{class:c.value,style:o.value,..._.value},y)}}}),Rse="component",Ose={docsUrl:"https://v2.quasar.dev/vue-components/rating"},Fse={"model-value":{type:"Number",desc:"Model of the component; use v-model directive",required:!0,category:"model"},max:{type:["Number","String"],default:"5",desc:"Number of icons to display",category:"general",required:!1},icon:{type:["String","Array"],desc:"Icon name following Quasar convention; if array, each rating value uses corresponding icon",category:"content"},"icon-selected":{type:["String","Array"],desc:"Icon name to use when selected",category:"content"},"icon-half":{type:["String","Array"],desc:"Icon name to use for half selection",category:"content"},color:{type:["String","Array"],desc:"Color name from the Quasar Color Palette; if array, each value uses corresponding color",category:"style"},"color-selected":{type:["String","Array"],desc:"Color name for selected icons",category:"style"},"color-half":{type:["String","Array"],desc:"Color name for half selected icons",category:"style"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},"no-dimming":{type:"Boolean",desc:"Does not lower opacity for unselected icons",category:"style"},"no-reset":{type:"Boolean",desc:"Disables resetting model to 0 when clicking current value",category:"model"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"}},Vse={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},Nse={type:Rse,meta:Ose,props:Fse,events:Vse},zse={name:"ShowcaseQuasarRating",components:{QRating:$se},label:"Quasar Rating",icon:"edit_note",apiJson:Nse,importName:"QRating",importFrom:"quasar",data(){return{basic:3,hearts:4,colorful:3}}},Hse={class:"jShowcase_row showcaseVertical"},Use={class:"ratingRow"},Wse={class:"ratingRow"},Jse={class:"ratingRow"},Gse={class:"ratingRow"};function Yse(e,t,n,a,o,i){const r=X("QRating");return M(),ee("div",Hse,[v("div",Use,[t[3]||(t[3]=v("span",{class:"ratingLabel"},"Default",-1)),f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),color:"primary"},null,8,["modelValue"])]),v("div",Wse,[t[4]||(t[4]=v("span",{class:"ratingLabel"},"Custom icon",-1)),f(r,{modelValue:o.hearts,"onUpdate:modelValue":t[1]||(t[1]=s=>o.hearts=s),icon:"favorite_border","icon-selected":"favorite",color:"negative"},null,8,["modelValue"])]),v("div",Jse,[t[5]||(t[5]=v("span",{class:"ratingLabel"},"Per-icon color",-1)),f(r,{modelValue:o.colorful,"onUpdate:modelValue":t[2]||(t[2]=s=>o.colorful=s),color:["negative","warning","warning","positive","positive"],"no-dimming":""},null,8,["modelValue"])]),v("div",Gse,[t[6]||(t[6]=v("span",{class:"ratingLabel"},"Large / readonly",-1)),f(r,{"model-value":4,size:"sm",color:"secondary",readonly:""})])])}const Kse=ze(zse,[["render",Yse],["__scopeId","data-v-9e0f0a97"]]),Zse=Object.freeze(Object.defineProperty({__proto__:null,default:Kse},Symbol.toStringTag,{value:"Module"})),Xse="component",ele={docsUrl:"https://v2.quasar.dev/vue-components/select"},tle={"model-value":{type:"Any",desc:"Model of the component; must be Array if using 'multiple' prop",required:!0,category:"model"},options:{type:"Array",default:"[]",desc:"Array of options the user can select from (strings or objects with label/value/disable)",category:"options"},"option-value":{type:["Function","String"],default:"'value'",desc:"Property of option which holds the value",category:"options"},"option-label":{type:["Function","String"],default:"'label'",desc:"Property of option which holds the label",category:"options"},"option-disable":{type:["Function","String"],default:"'disable'",desc:"Property of option which tells it's disabled",category:"options"},multiple:{type:"Boolean",desc:"Allow multiple selection; model must be Array",category:"selection"},"emit-value":{type:"Boolean",desc:"Update model with the value of the selected option instead of the whole option",category:"model"},"map-options":{type:"Boolean",desc:"Try to map labels of model from options Array",category:"options"},"use-input":{type:"Boolean",desc:"Use an input tag where users can type",category:"content"},"use-chips":{type:"Boolean",desc:"Use QChip to show what is currently selected",category:"selection"},"fill-input":{type:"Boolean",desc:"Fills input with current value; useful with 'hide-selected'",category:"behavior"},"new-value-mode":{type:"String",desc:"Enables creation of new values: 'add', 'add-unique', or 'toggle'",category:"behavior"},"hide-selected":{type:"Boolean",desc:"Hides selection; use underlying input to hold the label",category:"selection"},"hide-dropdown-icon":{type:"Boolean",desc:"Hides dropdown icon",category:"content"},"display-value":{type:["Number","String"],desc:"Override default selection string",category:"selection"},"max-values":{type:["Number","String"],desc:"Max number of selections allowed",category:"selection"},"options-dense":{type:"Boolean",desc:"Dense mode for options list",category:"options"},"options-cover":{type:"Boolean",desc:"Expanded menu will cover the component",category:"options"},"input-debounce":{type:["Number","String"],default:"500",desc:"Debounce the input model update in milliseconds",category:"content"},label:{type:"String",desc:"A text label that will float above the input field",category:"content"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},outlined:{type:"Boolean",desc:"Use outlined design",category:"style"},filled:{type:"Boolean",desc:"Use filled design",category:"style"},standout:{type:["Boolean","String"],desc:"Use standout design",category:"style"},borderless:{type:"Boolean",desc:"Use borderless design",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},square:{type:"Boolean",desc:"Removes border-radius",category:"style"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},clearable:{type:"Boolean",desc:"Appends clearable icon when a value is set",category:"behavior"},loading:{type:"Boolean",desc:"Signals the user a process is in progress by displaying a spinner",category:"behavior"},behavior:{type:"String",default:"'default'",desc:"Overrides showing as menu on desktop and dialog on mobile",category:"behavior"},"popup-content-class":{type:"String",desc:"Class definitions for the popup content",category:"style"}},nle={selected:{desc:"Override default selection slot"},"selected-item":{desc:"Override default per-item selection slot (scoped)"},option:{desc:"Customize how options are rendered (scoped)"},"no-option":{desc:"What the menu displays when no options match the filter"},loading:{desc:"Override default spinner when in loading state"},"before-options":{desc:"Content rendered before the list of options"},"after-options":{desc:"Content rendered after the list of options"}},ole={"update:model-value":{desc:"Emitted when the model value changes"},"input-value":{desc:"Emitted when the text input value changes"},filter:{desc:"Emitted when user wants to filter options"},add:{desc:"Emitted when an option is added to selection"},remove:{desc:"Emitted when an option is removed from selection"},"new-value":{desc:"Emitted when a new value has been created"},"popup-show":{desc:"Emitted when the options menu/dialog is shown"},"popup-hide":{desc:"Emitted when the options menu/dialog is hidden"}},ale={type:Xse,meta:ele,props:tle,slots:nle,events:ole},ile={name:"ShowcaseQuasarSelect",components:{QSelect:Vr},label:"Quasar Select",icon:"edit_note",apiJson:ale,importName:"QSelect",importFrom:"quasar",data(){return{basic:"Shields",basicOutlined:null,basicFilled:null,crew:["Helm","Tactical"],sector:"alpha",dense:null,rounded:null,clearable:"Weapons",shipSystems:["Shields","Weapons","Engines","Sensors","Communications","Life support"],crewOptions:["Helm","Tactical","Science","Engineering","Medical","Operations"],sectorOptions:[{label:"Alpha Quadrant",value:"alpha"},{label:"Beta Quadrant",value:"beta"},{label:"Gamma Quadrant",value:"gamma"},{label:"Delta Quadrant",value:"delta",disable:!0}]}}},rle={class:"jShowcase_row jShowcase_column showcaseSelect"},sle={class:"jShowcase_group"},lle={class:"jShowcase_items"},cle={class:"jShowcase_group"},ule={class:"jShowcase_items"},dle={class:"jShowcase_group"},fle={class:"jShowcase_items"},ple={class:"jShowcase_group"},mle={class:"jShowcase_items"},hle={class:"jShowcase_group"},gle={class:"jShowcase_items"};function vle(e,t,n,a,o,i){const r=X("QSelect");return M(),ee("div",rle,[v("div",sle,[t[8]||(t[8]=v("span",{class:"jShowcase_title"},"Basic",-1)),v("div",lle,[f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),options:o.shipSystems,label:"Ship system",color:"primary",class:"showcaseSelect_field"},null,8,["modelValue","options"]),f(r,{modelValue:o.basicOutlined,"onUpdate:modelValue":t[1]||(t[1]=s=>o.basicOutlined=s),options:o.shipSystems,label:"Outlined",color:"primary",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"]),f(r,{modelValue:o.basicFilled,"onUpdate:modelValue":t[2]||(t[2]=s=>o.basicFilled=s),options:o.shipSystems,label:"Filled",color:"primary",filled:"",class:"showcaseSelect_field"},null,8,["modelValue","options"])])]),v("div",cle,[t[9]||(t[9]=v("span",{class:"jShowcase_title"},"Multiple + Chips",-1)),v("div",ule,[f(r,{modelValue:o.crew,"onUpdate:modelValue":t[3]||(t[3]=s=>o.crew=s),options:o.crewOptions,label:"Assign crew",color:"accent",multiple:"","use-chips":"",outlined:"",class:"showcaseSelect_field showcaseSelect_fieldWide"},null,8,["modelValue","options"])])]),v("div",dle,[t[10]||(t[10]=v("span",{class:"jShowcase_title"},"Object Options",-1)),v("div",fle,[f(r,{modelValue:o.sector,"onUpdate:modelValue":t[4]||(t[4]=s=>o.sector=s),options:o.sectorOptions,label:"Destination sector",color:"secondary","emit-value":"","map-options":"",outlined:"",class:"showcaseSelect_field showcaseSelect_fieldWide"},null,8,["modelValue","options"])])]),v("div",ple,[t[11]||(t[11]=v("span",{class:"jShowcase_title"},"Variants",-1)),v("div",mle,[f(r,{modelValue:o.dense,"onUpdate:modelValue":t[5]||(t[5]=s=>o.dense=s),options:o.shipSystems,label:"Dense",color:"info",dense:"",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"]),f(r,{modelValue:o.rounded,"onUpdate:modelValue":t[6]||(t[6]=s=>o.rounded=s),options:o.shipSystems,label:"Rounded",color:"info",rounded:"",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"]),f(r,{modelValue:o.clearable,"onUpdate:modelValue":t[7]||(t[7]=s=>o.clearable=s),options:o.shipSystems,label:"Clearable",color:"info",clearable:"",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"])])]),v("div",hle,[t[12]||(t[12]=v("span",{class:"jShowcase_title"},"States",-1)),v("div",gle,[f(r,{"model-value":"Engines",options:o.shipSystems,label:"Disabled",color:"negative",disable:"",outlined:"",class:"showcaseSelect_field"},null,8,["options"]),f(r,{"model-value":"Shields",options:o.shipSystems,label:"Readonly",color:"warning",readonly:"",outlined:"",class:"showcaseSelect_field"},null,8,["options"]),f(r,{options:[],label:"Loading",color:"accent",loading:"",outlined:"",class:"showcaseSelect_field"})])])])}const ble=ze(ile,[["render",vle],["__scopeId","data-v-6fa5a84e"]]),_le=Object.freeze(Object.defineProperty({__proto__:null,default:ble},Symbol.toStringTag,{value:"Module"}));function js(e,t,n){const a=eo(e);let o,i=a.left-t.event.x,r=a.top-t.event.y,s=Math.abs(i),l=Math.abs(r);const u=t.direction;u.horizontal===!0&&u.vertical!==!0?o=i<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?o=r<0?"up":"down":u.up===!0&&r<0?(o="up",s>l&&(u.left===!0&&i<0?o="left":u.right===!0&&i>0&&(o="right"))):u.down===!0&&r>0?(o="down",s>l&&(u.left===!0&&i<0?o="left":u.right===!0&&i>0&&(o="right"))):u.left===!0&&i<0?(o="left",s<l&&(u.up===!0&&r<0?o="up":u.down===!0&&r>0&&(o="down"))):u.right===!0&&i>0&&(o="right",s<l&&(u.up===!0&&r<0?o="up":u.down===!0&&r>0&&(o="down")));let c=!1;if(o===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};o=t.event.lastDir,c=!0,o==="left"||o==="right"?(a.left-=i,s=0,i=0):(a.top-=r,l=0,r=0)}return{synthetic:c,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:a,direction:o,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:s,y:l},offset:{x:i,y:r},delta:{x:a.left-t.event.lastX,y:a.top-t.event.lastY}}}}let yle=0;const ch=Dr({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(n.mouse!==!0&&st.has.touch!==!0)return;function a(i,r){n.mouse===!0&&r===!0?rt(i):(n.stop===!0&&Jt(i),n.prevent===!0&&Nt(i))}const o={uid:"qvtp_"+yle++,handler:t,modifiers:n,direction:pr(n),noop:Yt,mouseStart(i){mr(i,o)&&bp(i)&&(tn(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(i,!0))},touchStart(i){if(mr(i,o)){const r=i.target;tn(o,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),o.start(i)}},start(i,r){if(st.is.firefox===!0&&pa(e,!0),o.lastEvt=i,r===!0||n.stop===!0){if(o.direction.all!==!0&&(r!==!0||o.modifiers.mouseAllDir!==!0&&o.modifiers.mousealldir!==!0)){const u=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Nt(u),i.cancelBubble===!0&&Jt(u),Object.assign(u,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[o.uid]:i.qClonedBy.concat(o.uid)}),o.initialEvent={target:i.target,event:u}}Jt(i)}const{left:s,top:l}=eo(i);o.event={x:s,y:l,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:l}},move(i){if(o.event===void 0)return;const r=eo(i),s=r.left-o.event.x,l=r.top-o.event.y;if(s===0&&l===0)return;o.lastEvt=i;const u=o.event.mouse===!0,c=()=>{a(i,u);let g;n.preserveCursor!==!0&&n.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ii(),o.styleCleanup=_=>{if(o.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),u===!0){const I=()=>{document.body.classList.remove("no-pointer-events--children")};_!==void 0?setTimeout(()=>{I(),_()},50):I()}else _!==void 0&&_()}};if(o.event.detected===!0){o.event.isFirst!==!0&&a(i,o.event.mouse);const{payload:g,synthetic:_}=js(i,o,!1);g!==void 0&&(o.handler(g)===!1?o.end(i):(o.styleCleanup===void 0&&o.event.isFirst===!0&&c(),o.event.lastX=g.position.left,o.event.lastY=g.position.top,o.event.lastDir=_===!0?void 0:g.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||u===!0&&(o.modifiers.mouseAllDir===!0||o.modifiers.mousealldir===!0)){c(),o.event.detected=!0,o.move(i);return}const d=Math.abs(s),p=Math.abs(l);d!==p&&(o.direction.horizontal===!0&&d>p||o.direction.vertical===!0&&d<p||o.direction.up===!0&&d<p&&l<0||o.direction.down===!0&&d<p&&l>0||o.direction.left===!0&&d>p&&s<0||o.direction.right===!0&&d>p&&s>0?(o.event.detected=!0,o.move(i)):o.end(i,!0))},end(i,r){var s;if(o.event!==void 0){if(Bn(o,"temp"),st.is.firefox===!0&&pa(e,!1),r===!0)(s=o.styleCleanup)==null||s.call(o),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(js(i===void 0?o.lastEvt:i,o).payload);const{payload:l}=js(i===void 0?o.lastEvt:i,o,!0),u=()=>{o.handler(l)};o.styleCleanup!==void 0?o.styleCleanup(u):u()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};if(e.__qtouchpan=o,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";tn(o,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}st.has.touch===!0&&tn(o,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=pr(t.modifiers))},beforeUnmount(e){var n;const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),Bn(t,"main"),Bn(t,"temp"),st.is.firefox===!0&&pa(e,!1),(n=t.styleCleanup)==null||n.call(t),delete e.__qtouchpan)}}),Md="q-slider__marker-labels",wle=e=>({value:e}),Sle=({marker:e})=>L("div",{key:e.value,style:e.style,class:e.classes},e.label),fc=[34,37,40,33,39,38],uh={...Mt,...oo,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},dh=["pan","update:modelValue","change"];function fh({updateValue:e,updatePosition:t,getDragging:n,formAttrs:a}){const{props:o,emit:i,slots:r,proxy:{$q:s}}=Je(),l=jt(o,s),u=zo(a),c=ge(!1),d=ge(!1),p=ge(!1),g=ge(!1),_=Q(()=>o.vertical===!0?"--v":"--h"),I=Q(()=>"-"+(o.switchLabelSide===!0?"switched":"standard")),C=Q(()=>o.vertical===!0?o.reverse===!0:o.reverse!==(s.lang.rtl===!0)),b=Q(()=>isNaN(o.innerMin)===!0||o.innerMin<o.min?o.min:o.innerMin),w=Q(()=>isNaN(o.innerMax)===!0||o.innerMax>o.max?o.max:o.innerMax),y=Q(()=>o.disable!==!0&&o.readonly!==!0&&b.value<w.value),m=Q(()=>{if(o.step===0)return ke=>ke;const ne=(String(o.step).trim().split(".")[1]||"").length;return ke=>parseFloat(ke.toFixed(ne))}),x=Q(()=>o.step===0?1:o.step),B=Q(()=>y.value===!0?o.tabindex||0:-1),T=Q(()=>o.max-o.min),E=Q(()=>w.value-b.value),O=Q(()=>z(b.value)),F=Q(()=>z(w.value)),V=Q(()=>o.vertical===!0?C.value===!0?"bottom":"top":C.value===!0?"right":"left"),j=Q(()=>o.vertical===!0?"height":"width"),U=Q(()=>o.vertical===!0?"width":"height"),D=Q(()=>o.vertical===!0?"vertical":"horizontal"),R=Q(()=>{const ne={role:"slider","aria-valuemin":b.value,"aria-valuemax":w.value,"aria-orientation":D.value,"data-step":o.step};return o.disable===!0?ne["aria-disabled"]="true":o.readonly===!0&&(ne["aria-readonly"]="true"),ne}),ae=Q(()=>`q-slider q-slider${_.value} q-slider--${c.value===!0?"":"in"}active inline no-wrap `+(o.vertical===!0?"row":"column")+(o.disable===!0?" disabled":" q-slider--enabled"+(y.value===!0?" q-slider--editable":""))+(p.value==="both"?" q-slider--focus":"")+(o.label||o.labelAlways===!0?" q-slider--label":"")+(o.labelAlways===!0?" q-slider--label-always":"")+(l.value===!0?" q-slider--dark":"")+(o.dense===!0?" q-slider--dense q-slider--dense"+_.value:""));function Z(ne){const ke="q-slider__"+ne;return`${ke} ${ke}${_.value} ${ke}${_.value}${I.value}`}function G(ne){const ke="q-slider__"+ne;return`${ke} ${ke}${_.value}`}const be=Q(()=>{const ne=o.selectionColor||o.color;return"q-slider__selection absolute"+(ne!==void 0?` text-${ne}`:"")}),$e=Q(()=>G("markers")+" absolute overflow-hidden"),J=Q(()=>G("track-container")),H=Q(()=>Z("pin")),pe=Q(()=>Z("label")),Le=Q(()=>Z("text-container")),Me=Q(()=>Z("marker-labels-container")+(o.markerLabelsClass!==void 0?` ${o.markerLabelsClass}`:"")),de=Q(()=>"q-slider__track relative-position no-outline"+(o.trackColor!==void 0?` bg-${o.trackColor}`:"")),h=Q(()=>{const ne={[U.value]:o.trackSize};return o.trackImg!==void 0&&(ne.backgroundImage=`url(${o.trackImg}) !important`),ne}),k=Q(()=>"q-slider__inner absolute"+(o.innerTrackColor!==void 0?` bg-${o.innerTrackColor}`:"")),q=Q(()=>{const ne=F.value-O.value,ke={[V.value]:`${100*O.value}%`,[j.value]:ne===0?"2px":`${100*ne}%`};return o.innerTrackImg!==void 0&&(ke.backgroundImage=`url(${o.innerTrackImg}) !important`),ke});function Y(ne){const{min:ke,max:Qe,step:He}=o;let Re=ke+ne*(Qe-ke);if(He>0){const et=(Re-b.value)%He;Re+=(Math.abs(et)>=He/2?(et<0?-1:1)*He:0)-et}return Re=m.value(Re),Gt(Re,b.value,w.value)}function z(ne){return T.value===0?0:(ne-o.min)/T.value}function A(ne,ke){const Qe=eo(ne),He=o.vertical===!0?Gt((Qe.top-ke.top)/ke.height,0,1):Gt((Qe.left-ke.left)/ke.width,0,1);return Gt(C.value===!0?1-He:He,O.value,F.value)}const $=Q(()=>_b(o.markers)===!0?o.markers:x.value),te=Q(()=>{const ne=[],ke=$.value,Qe=o.max;let He=o.min;do ne.push(He),He+=ke;while(He<Qe);return ne.push(Qe),ne}),fe=Q(()=>{const ne=` ${Md}${_.value}-`;return Md+`${ne}${o.switchMarkerLabelsSide===!0?"switched":"standard"}${ne}${C.value===!0?"rtl":"ltr"}`}),ue=Q(()=>o.markerLabels===!1?null:ye(o.markerLabels).map((ne,ke)=>({index:ke,value:ne.value,label:ne.label||ne.value,classes:fe.value+(ne.classes!==void 0?" "+ne.classes:""),style:{...ve(ne.value),...ne.style||{}}}))),ce=Q(()=>({markerList:ue.value,markerMap:le.value,classes:fe.value,getStyle:ve})),Se=Q(()=>{const ne=E.value===0?"2px":100*$.value/E.value;return{...q.value,backgroundSize:o.vertical===!0?`2px ${ne}%`:`${ne}% 2px`}});function ye(ne){if(ne===!1)return null;if(ne===!0)return te.value.map(wle);if(typeof ne=="function")return te.value.map(Qe=>{const He=ne(Qe);return zt(He)===!0?{...He,value:Qe}:{value:Qe,label:He}});const ke=({value:Qe})=>Qe>=o.min&&Qe<=o.max;return Array.isArray(ne)===!0?ne.map(Qe=>zt(Qe)===!0?Qe:{value:Qe}).filter(ke):Object.keys(ne).map(Qe=>{const He=ne[Qe],Re=Number(Qe);return zt(He)===!0?{...He,value:Re}:{value:Re,label:He}}).filter(ke)}function ve(ne){return{[V.value]:`${100*(ne-o.min)/T.value}%`}}const le=Q(()=>{if(o.markerLabels===!1)return null;const ne={};return ue.value.forEach(ke=>{ne[ke.value]=ke}),ne});function oe(){if(r["marker-label-group"]!==void 0)return r["marker-label-group"](ce.value);const ne=r["marker-label"]||Sle;return ue.value.map(ke=>ne({marker:ke,...ce.value}))}const ie=Q(()=>[[ch,me,void 0,{[D.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function me(ne){ne.isFinal===!0?(g.value!==void 0&&(t(ne.evt),ne.touch===!0&&e(!0),g.value=void 0,i("pan","end")),c.value=!1,p.value=!1):ne.isFirst===!0?(g.value=n(ne.evt),t(ne.evt),e(),c.value=!0,i("pan","start")):(t(ne.evt),e())}function Ce(){p.value=!1}function je(ne){t(ne,n(ne)),e(),d.value=!0,c.value=!0,document.addEventListener("mouseup",Ie,!0)}function Ie(){d.value=!1,c.value=!1,e(!0),Ce(),document.removeEventListener("mouseup",Ie,!0)}function De(ne){t(ne,n(ne)),e(!0)}function Ue(ne){fc.includes(ne.keyCode)&&e(!0)}function Ke(ne){if(o.vertical===!0)return null;const ke=s.lang.rtl!==o.reverse?1-ne:ne;return{transform:`translateX(calc(${2*ke-1} * ${o.thumbSize} / 2 + ${50-100*ke}%))`}}function re(ne){const ke=Q(()=>d.value===!1&&(p.value===ne.focusValue||p.value==="both")?" q-slider--focus":""),Qe=Q(()=>`q-slider__thumb q-slider__thumb${_.value} q-slider__thumb${_.value}-${C.value===!0?"rtl":"ltr"} absolute non-selectable`+ke.value+(ne.thumbColor.value!==void 0?` text-${ne.thumbColor.value}`:"")),He=Q(()=>({width:o.thumbSize,height:o.thumbSize,[V.value]:`${100*ne.ratio.value}%`,zIndex:p.value===ne.focusValue?2:void 0})),Re=Q(()=>ne.labelColor.value!==void 0?` text-${ne.labelColor.value}`:""),et=Q(()=>Ke(ne.ratio.value)),kt=Q(()=>"q-slider__text"+(ne.labelTextColor.value!==void 0?` text-${ne.labelTextColor.value}`:""));return()=>{const pn=[L("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[L("path",{d:o.thumbPath})]),L("div",{class:"q-slider__focus-ring fit"})];return(o.label===!0||o.labelAlways===!0)&&(pn.push(L("div",{class:H.value+" absolute fit no-pointer-events"+Re.value},[L("div",{class:pe.value,style:{minWidth:o.thumbSize}},[L("div",{class:Le.value,style:et.value},[L("span",{class:kt.value},ne.label.value)])])])),o.name!==void 0&&o.disable!==!0&&u(pn,"push")),L("div",{class:Qe.value,style:He.value,...ne.getNodeData()},pn)}}function he(ne,ke,Qe,He){const Re=[];o.innerTrackColor!=="transparent"&&Re.push(L("div",{key:"inner",class:k.value,style:q.value})),o.selectionColor!=="transparent"&&Re.push(L("div",{key:"selection",class:be.value,style:ne.value})),o.markers!==!1&&Re.push(L("div",{key:"marker",class:$e.value,style:Se.value})),He(Re);const et=[Pl("div",{key:"trackC",class:J.value,tabindex:ke.value,...Qe.value},[L("div",{class:de.value,style:h.value},Re)],"slide",y.value,()=>ie.value)];if(o.markerLabels!==!1){const kt=o.switchMarkerLabelsSide===!0?"unshift":"push";et[kt](L("div",{key:"markerL",class:Me.value},oe()))}return et}return wt(()=>{document.removeEventListener("mouseup",Ie,!0)}),{state:{active:c,focus:p,preventFocus:d,dragging:g,editable:y,classes:ae,tabindex:B,attributes:R,roundValueFn:m,keyStep:x,trackLen:T,innerMin:b,innerMinRatio:O,innerMax:w,innerMaxRatio:F,positionProp:V,sizeProp:j,isReversed:C},methods:{onActivate:je,onMobileClick:De,onBlur:Ce,onKeyup:Ue,getContent:he,getThumbRenderFn:re,convertRatioToModel:Y,convertModelToRatio:z,getDraggingRatio:A}}}const kle=()=>({}),xle=Fe({name:"QSlider",props:{...uh,modelValue:{required:!0,default:null,validator:e=>typeof e=="number"||e===null},labelValue:[String,Number]},emits:dh,setup(e,{emit:t}){const{proxy:{$q:n}}=Je(),{state:a,methods:o}=fh({updateValue:_,updatePosition:C,getDragging:I,formAttrs:Or(e)}),i=ge(null),r=ge(0),s=ge(0);function l(){s.value=e.modelValue===null?a.innerMin.value:Gt(e.modelValue,a.innerMin.value,a.innerMax.value)}Oe(()=>`${e.modelValue}|${a.innerMin.value}|${a.innerMax.value}`,l),l();const u=Q(()=>o.convertModelToRatio(s.value)),c=Q(()=>a.active.value===!0?r.value:u.value),d=Q(()=>{const y={[a.positionProp.value]:`${100*a.innerMinRatio.value}%`,[a.sizeProp.value]:`${100*(c.value-a.innerMinRatio.value)}%`};return e.selectionImg!==void 0&&(y.backgroundImage=`url(${e.selectionImg}) !important`),y}),p=o.getThumbRenderFn({focusValue:!0,getNodeData:kle,ratio:c,label:Q(()=>e.labelValue!==void 0?e.labelValue:s.value),thumbColor:Q(()=>e.thumbColor||e.color),labelColor:Q(()=>e.labelColor),labelTextColor:Q(()=>e.labelTextColor)}),g=Q(()=>a.editable.value!==!0?{}:n.platform.is.mobile===!0?{onClick:o.onMobileClick}:{onMousedown:o.onActivate,onFocus:b,onBlur:o.onBlur,onKeydown:w,onKeyup:o.onKeyup});function _(y){s.value!==e.modelValue&&t("update:modelValue",s.value),y===!0&&t("change",s.value)}function I(){return i.value.getBoundingClientRect()}function C(y,m=a.dragging.value){const x=o.getDraggingRatio(y,m);s.value=o.convertRatioToModel(x),r.value=e.snap!==!0||e.step===0?x:o.convertModelToRatio(s.value)}function b(){a.focus.value=!0}function w(y){if(fc.includes(y.keyCode)===!1)return;rt(y);const m=([34,33].includes(y.keyCode)?10:1)*a.keyStep.value,x=([34,37,40].includes(y.keyCode)?-1:1)*(a.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*m;s.value=Gt(a.roundValueFn.value(s.value+x),a.innerMin.value,a.innerMax.value),_()}return()=>{const y=o.getContent(d,a.tabindex,g,m=>{m.push(p())});return L("div",{ref:i,class:a.classes.value+(e.modelValue===null?" q-slider--no-value":""),...a.attributes.value,"aria-valuenow":e.modelValue},y)}}}),so={MIN:0,RANGE:1,MAX:2},Cle=Fe({name:"QRange",props:{...uh,modelValue:{type:Object,default:()=>({min:null,max:null}),validator:e=>"min"in e&&"max"in e},dragRange:Boolean,dragOnlyRange:Boolean,leftLabelColor:String,leftLabelTextColor:String,rightLabelColor:String,rightLabelTextColor:String,leftLabelValue:[String,Number],rightLabelValue:[String,Number],leftThumbColor:String,rightThumbColor:String},emits:dh,setup(e,{emit:t}){const{proxy:{$q:n}}=Je(),{state:a,methods:o}=fh({updateValue:E,updatePosition:F,getDragging:O,formAttrs:Q(()=>({type:"hidden",name:e.name,value:`${e.modelValue.min}|${e.modelValue.max}`}))}),i=ge(null),r=ge(0),s=ge(0),l=ge({min:0,max:0});function u(){l.value.min=e.modelValue.min===null?a.innerMin.value:Gt(e.modelValue.min,a.innerMin.value,a.innerMax.value),l.value.max=e.modelValue.max===null?a.innerMax.value:Gt(e.modelValue.max,a.innerMin.value,a.innerMax.value)}Oe(()=>`${e.modelValue.min}|${e.modelValue.max}|${a.innerMin.value}|${a.innerMax.value}`,u),u();const c=Q(()=>o.convertModelToRatio(l.value.min)),d=Q(()=>o.convertModelToRatio(l.value.max)),p=Q(()=>a.active.value===!0?r.value:c.value),g=Q(()=>a.active.value===!0?s.value:d.value),_=Q(()=>{const j={[a.positionProp.value]:`${100*p.value}%`,[a.sizeProp.value]:`${100*(g.value-p.value)}%`};return e.selectionImg!==void 0&&(j.backgroundImage=`url(${e.selectionImg}) !important`),j}),I=Q(()=>{if(a.editable.value!==!0)return{};if(n.platform.is.mobile===!0)return{onClick:o.onMobileClick};const j={onMousedown:o.onActivate};return(e.dragRange===!0||e.dragOnlyRange===!0)&&Object.assign(j,{onFocus:()=>{a.focus.value="both"},onBlur:o.onBlur,onKeydown:V,onKeyup:o.onKeyup}),j});function C(j){return n.platform.is.mobile!==!0&&a.editable.value===!0&&e.dragOnlyRange!==!0?{onFocus:()=>{a.focus.value=j},onBlur:o.onBlur,onKeydown:V,onKeyup:o.onKeyup}:{}}const b=Q(()=>e.dragOnlyRange!==!0?a.tabindex.value:null),w=Q(()=>n.platform.is.mobile!==!0&&(e.dragRange||e.dragOnlyRange===!0)?a.tabindex.value:null),y=ge(null),m=Q(()=>C("min")),x=o.getThumbRenderFn({focusValue:"min",getNodeData:()=>({ref:y,key:"tmin",...m.value,tabindex:b.value}),ratio:p,label:Q(()=>e.leftLabelValue!==void 0?e.leftLabelValue:l.value.min),thumbColor:Q(()=>e.leftThumbColor||e.thumbColor||e.color),labelColor:Q(()=>e.leftLabelColor||e.labelColor),labelTextColor:Q(()=>e.leftLabelTextColor||e.labelTextColor)}),B=Q(()=>C("max")),T=o.getThumbRenderFn({focusValue:"max",getNodeData:()=>({...B.value,key:"tmax",tabindex:b.value}),ratio:g,label:Q(()=>e.rightLabelValue!==void 0?e.rightLabelValue:l.value.max),thumbColor:Q(()=>e.rightThumbColor||e.thumbColor||e.color),labelColor:Q(()=>e.rightLabelColor||e.labelColor),labelTextColor:Q(()=>e.rightLabelTextColor||e.labelTextColor)});function E(j){(l.value.min!==e.modelValue.min||l.value.max!==e.modelValue.max)&&t("update:modelValue",{...l.value}),j===!0&&t("change",{...l.value})}function O(j){const{left:U,top:D,width:R,height:ae}=i.value.getBoundingClientRect(),Z=e.dragOnlyRange===!0?0:e.vertical===!0?y.value.offsetHeight/(2*ae):y.value.offsetWidth/(2*R),G={left:U,top:D,width:R,height:ae,valueMin:l.value.min,valueMax:l.value.max,ratioMin:c.value,ratioMax:d.value},be=o.getDraggingRatio(j,G);return e.dragOnlyRange!==!0&&be<G.ratioMin+Z?G.type=so.MIN:e.dragOnlyRange===!0||be<G.ratioMax-Z?e.dragRange===!0||e.dragOnlyRange===!0?(G.type=so.RANGE,Object.assign(G,{offsetRatio:be,offsetModel:o.convertRatioToModel(be),rangeValue:G.valueMax-G.valueMin,rangeRatio:G.ratioMax-G.ratioMin})):G.type=G.ratioMax-be<be-G.ratioMin?so.MAX:so.MIN:G.type=so.MAX,G}function F(j,U=a.dragging.value){let D;const R=o.getDraggingRatio(j,U),ae=o.convertRatioToModel(R);switch(U.type){case so.MIN:R<=U.ratioMax?(D={minR:R,maxR:U.ratioMax,min:ae,max:U.valueMax},a.focus.value="min"):(D={minR:U.ratioMax,maxR:R,min:U.valueMax,max:ae},a.focus.value="max");break;case so.MAX:R>=U.ratioMin?(D={minR:U.ratioMin,maxR:R,min:U.valueMin,max:ae},a.focus.value="max"):(D={minR:R,maxR:U.ratioMin,min:ae,max:U.valueMin},a.focus.value="min");break;case so.RANGE:const Z=R-U.offsetRatio,G=Gt(U.ratioMin+Z,a.innerMinRatio.value,a.innerMaxRatio.value-U.rangeRatio),be=ae-U.offsetModel,$e=Gt(U.valueMin+be,a.innerMin.value,a.innerMax.value-U.rangeValue);D={minR:G,maxR:G+U.rangeRatio,min:a.roundValueFn.value($e),max:a.roundValueFn.value($e+U.rangeValue)},a.focus.value="both";break}l.value=l.value.min===null||l.value.max===null?{min:D.min||e.min,max:D.max||e.max}:{min:D.min,max:D.max},e.snap!==!0||e.step===0?(r.value=D.minR,s.value=D.maxR):(r.value=o.convertModelToRatio(l.value.min),s.value=o.convertModelToRatio(l.value.max))}function V(j){if(fc.includes(j.keyCode)===!1)return;rt(j);const U=([34,33].includes(j.keyCode)?10:1)*a.keyStep.value,D=([34,37,40].includes(j.keyCode)?-1:1)*(a.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*U;if(a.focus.value==="both"){const R=l.value.max-l.value.min,ae=Gt(a.roundValueFn.value(l.value.min+D),a.innerMin.value,a.innerMax.value-R);l.value={min:ae,max:a.roundValueFn.value(ae+R)}}else{if(a.focus.value===!1)return;{const R=a.focus.value;l.value={...l.value,[R]:Gt(a.roundValueFn.value(l.value[R]+D),R==="min"?a.innerMin.value:l.value.min,R==="max"?a.innerMax.value:l.value.max)}}}E()}return()=>{const j=o.getContent(_,w,I,U=>{U.push(x(),T())});return L("div",{ref:i,class:"q-range "+a.classes.value+(e.modelValue.min===null||e.modelValue.max===null?" q-slider--no-value":""),...a.attributes.value,"aria-valuenow":e.modelValue.min+"|"+e.modelValue.max},j)}}}),Qle="component",Ale={docsUrl:"https://v2.quasar.dev/vue-components/slider"},Ile={"model-value":{type:["Number","null"],default:"null",desc:"Model of the component (must be between min/max); use v-model",required:!0,category:"model"},min:{type:"Number",default:"0",desc:"Minimum value of the model",category:"model",required:!1},max:{type:"Number",default:"100",desc:"Maximum value of the model",category:"model",required:!1},step:{type:"Number",default:"1",desc:"Step amount between valid values (> 0.0); 0 defines infinite granularity",category:"model",required:!1},snap:{type:"Boolean",desc:"Snap on valid values, rather than sliding freely",category:"behavior"},reverse:{type:"Boolean",desc:"Work in reverse (changes direction)",category:"behavior"},vertical:{type:"Boolean",desc:"Display in vertical direction",category:"behavior"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"track-color":{type:"String",desc:"Color name for the track",category:"style"},"thumb-color":{type:"String",desc:"Color name for the thumb",category:"style"},label:{type:"Boolean",desc:"Popup a label when user clicks/taps on the slider thumb",category:"content"},"label-color":{type:"String",desc:"Color name for the label",category:"style"},"label-always":{type:"Boolean",desc:"Always display the label",category:"content"},"label-value":{type:["String","Number"],desc:"Override default label value",category:"content"},markers:{type:["Boolean","Number"],desc:"Display markers on the track",category:"content"},"marker-labels":{type:["Boolean","Array","Object","Function"],desc:"Configure the marker labels",category:"content"},"track-size":{type:"String",default:"'4px'",desc:"Track size (including CSS unit)",category:"style",required:!1},"thumb-size":{type:"String",default:"'20px'",desc:"Thumb size (including CSS unit)",category:"style",required:!1},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},qle={"marker-label":{desc:"Custom marker label slot"}},Tle={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"},change:{desc:"Emitted on lazy model value change (after user releases the thumb)"},pan:{desc:"Triggered when user starts/ends panning on the component"}},Lle={type:Qle,meta:Ale,props:Ile,slots:qle,events:Tle},Ele="component",Dle={docsUrl:"https://v2.quasar.dev/vue-components/range"},Ble={"model-value":{type:["Object","null"],default:"{ min: null, max: null }",desc:"Model of the component of type { min, max } (both values must be between global min/max); use v-model",required:!0,category:"model"},min:{type:"Number",default:"0",desc:"Minimum value of the model",category:"model"},max:{type:"Number",default:"100",desc:"Maximum value of the model",category:"model"},step:{type:"Number",default:"1",desc:"Step amount between valid values (> 0.0); 0 defines infinite granularity",category:"model"},snap:{type:"Boolean",desc:"Snap on valid values, rather than sliding freely",category:"behavior"},reverse:{type:"Boolean",desc:"Work in reverse (changes direction)",category:"behavior"},vertical:{type:"Boolean",desc:"Display in vertical direction",category:"behavior"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"track-color":{type:"String",desc:"Color name for the track",category:"style"},label:{type:"Boolean",desc:"Popup a label when user clicks/taps on the slider thumb",category:"content"},"label-always":{type:"Boolean",desc:"Always display the label",category:"content"},markers:{type:["Boolean","Number"],desc:"Display markers on the track",category:"content"},"drag-range":{type:"Boolean",desc:"User can drag range instead of just the two thumbs",category:"content"},"drag-only-range":{type:"Boolean",desc:"User can drag only the range instead and NOT the two thumbs",category:"content"},"left-label-value":{type:["String","Number"],desc:"Override default label for min value",category:"labels"},"right-label-value":{type:["String","Number"],desc:"Override default label for max value",category:"labels"},"left-label-color":{type:"String",desc:"Color name for left label background",category:"labels"},"right-label-color":{type:"String",desc:"Color name for right label background",category:"labels"},"left-thumb-color":{type:"String",desc:"Color name for left thumb",category:"labels"},"right-thumb-color":{type:"String",desc:"Color name for right thumb",category:"labels"},"track-size":{type:"String",default:"'4px'",desc:"Track size (including CSS unit)",category:"style"},"thumb-size":{type:"String",default:"'20px'",desc:"Thumb size (including CSS unit)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"}},Ple={"marker-label":{desc:"Custom marker label slot"}},Mle={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"},change:{desc:"Emitted on lazy model value change (after user releases the thumb)"},pan:{desc:"Triggered when user starts/ends panning on the component"}},jle={type:Ele,meta:Dle,props:Ble,slots:Ple,events:Mle},$le={name:"ShowcaseQuasarSlider",components:{QSlider:xle,QRange:Cle},label:"Slider / Range",icon:"edit_note",apiJson:[{name:"QSlider",json:Lle},{name:"QRange",json:jle}],importName:["QSlider","QRange"],importFrom:"quasar",data(){return{basic:60,labeled:35,stepped:20,range:{min:20,max:70},rangeStepped:{min:30,max:80}}}},Rle={class:"showcaseSliders"},Ole={class:"sliderItem"},Fle={class:"sliderItem"},Vle={class:"sliderItem"},Nle={class:"sliderItem"},zle={class:"sliderItem"},Hle={class:"sliderItem"};function Ule(e,t,n,a,o,i){const r=X("QSlider"),s=X("QRange");return M(),ee("div",Rle,[v("div",Ole,[t[5]||(t[5]=v("span",{class:"sliderLabel"},"Basic",-1)),f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=l=>o.basic=l),color:"primary"},null,8,["modelValue"])]),v("div",Fle,[t[6]||(t[6]=v("span",{class:"sliderLabel"},"With label",-1)),f(r,{modelValue:o.labeled,"onUpdate:modelValue":t[1]||(t[1]=l=>o.labeled=l),color:"accent",label:"","label-always":""},null,8,["modelValue"])]),v("div",Vle,[t[7]||(t[7]=v("span",{class:"sliderLabel"},"Stepped",-1)),f(r,{modelValue:o.stepped,"onUpdate:modelValue":t[2]||(t[2]=l=>o.stepped=l),color:"secondary",min:0,max:50,step:10,snap:"",markers:"",label:""},null,8,["modelValue"])]),v("div",Nle,[t[8]||(t[8]=v("span",{class:"sliderLabel"},"Disabled",-1)),f(r,{"model-value":40,color:"info",disable:""})]),v("div",zle,[t[9]||(t[9]=v("span",{class:"sliderLabel"},"Range",-1)),f(s,{modelValue:o.range,"onUpdate:modelValue":t[3]||(t[3]=l=>o.range=l),color:"primary",min:0,max:100,label:""},null,8,["modelValue"])]),v("div",Hle,[t[10]||(t[10]=v("span",{class:"sliderLabel"},"Range stepped",-1)),f(s,{modelValue:o.rangeStepped,"onUpdate:modelValue":t[4]||(t[4]=l=>o.rangeStepped=l),color:"accent",min:0,max:100,step:10,snap:"",markers:"",label:""},null,8,["modelValue"])])])}const Wle=ze($le,[["render",Ule],["__scopeId","data-v-bae36fd4"]]),Jle=Object.freeze(Object.defineProperty({__proto__:null,default:Wle},Symbol.toStringTag,{value:"Module"}));function Gle(e,t){return e.hour!==null&&e.minute===null?"minute":"hour"}function Yle(){const e=new Date;return{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}}const Kle=Fe({name:"QTime",props:{...Mt,...oo,...hr,modelValue:{required:!0,validator:e=>typeof e=="string"||e===null},mask:{...hr.mask,default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:th,setup(e,{slots:t,emit:n}){const a=Je(),{$q:o}=a.proxy,i=jt(e,o),{tabindex:r,headerClass:s,getLocale:l,getCurrentDate:u}=nh(e,o),c=Or(e),d=zo(c);let p,g;const _=ge(null),I=Q(()=>Me()),C=Q(()=>l()),b=Q(()=>de()),w=Na(e.modelValue,I.value,C.value,e.calendar,b.value),y=ge(Gle(w)),m=ge(w),x=ge(w.hour===null||w.hour<12),B=Q(()=>`q-time q-time--${e.landscape===!0?"landscape":"portrait"}`+(i.value===!0?" q-time--dark q-dark":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-time--readonly":"")+(e.bordered===!0?" q-time--bordered":"")+(e.square===!0?" q-time--square no-border-radius":"")+(e.flat===!0?" q-time--flat no-shadow":"")),T=Q(()=>{const re=m.value;return{hour:re.hour===null?"--":E.value===!0?at(re.hour):String(x.value===!0?re.hour===0?12:re.hour:re.hour>12?re.hour-12:re.hour),minute:re.minute===null?"--":at(re.minute),second:re.second===null?"--":at(re.second)}}),E=Q(()=>e.format24h!==null?e.format24h:o.lang.date.format24h),O=Q(()=>{const re=y.value==="hour",he=re===!0?12:60,ne=m.value[y.value];let Qe=`rotate(${Math.round(ne*(360/he))-180}deg) translateX(-50%)`;return re===!0&&E.value===!0&&m.value.hour>=12&&(Qe+=" scale(.7)"),{transform:Qe}}),F=Q(()=>m.value.hour!==null),V=Q(()=>F.value===!0&&m.value.minute!==null),j=Q(()=>e.hourOptions!==void 0?re=>e.hourOptions.includes(re):e.options!==void 0?re=>e.options(re,null,null):null),U=Q(()=>e.minuteOptions!==void 0?re=>e.minuteOptions.includes(re):e.options!==void 0?re=>e.options(m.value.hour,re,null):null),D=Q(()=>e.secondOptions!==void 0?re=>e.secondOptions.includes(re):e.options!==void 0?re=>e.options(m.value.hour,m.value.minute,re):null),R=Q(()=>{if(j.value===null)return null;const re=H(0,11,j.value),he=H(12,11,j.value);return{am:re,pm:he,values:re.values.concat(he.values)}}),ae=Q(()=>U.value!==null?H(0,59,U.value):null),Z=Q(()=>D.value!==null?H(0,59,D.value):null),G=Q(()=>{switch(y.value){case"hour":return R.value;case"minute":return ae.value;case"second":return Z.value}}),be=Q(()=>{let re,he,ne=0,ke=1;const Qe=G.value!==null?G.value.values:void 0;y.value==="hour"?E.value===!0?(re=0,he=23):(re=0,he=11,x.value===!1&&(ne=12)):(re=0,he=55,ke=5);const He=[];for(let Re=re,et=re;Re<=he;Re+=ke,et++){const kt=Re+ne,pn=(Qe==null?void 0:Qe.includes(kt))===!1,ao=y.value==="hour"&&Re===0?E.value===!0?"00":"12":Re;He.push({val:kt,index:et,disable:pn,label:ao})}return He}),$e=Q(()=>[[ch,q,void 0,{stop:!0,prevent:!0,mouse:!0}]]);Oe(()=>e.modelValue,re=>{const he=Na(re,I.value,C.value,e.calendar,b.value);(he.dateHash!==m.value.dateHash||he.timeHash!==m.value.timeHash)&&(m.value=he,he.hour===null?y.value="hour":x.value=he.hour<12)}),Oe([I,C],()=>{bt(()=>{De()})});function J(){const re={...u(),...Yle()};De(re),Object.assign(m.value,re),y.value="hour"}function H(re,he,ne){const ke=Array.apply(null,{length:he+1}).map((Qe,He)=>{const Re=He+re;return{index:Re,val:ne(Re)===!0}}).filter(Qe=>Qe.val===!0).map(Qe=>Qe.index);return{min:ke[0],max:ke[ke.length-1],values:ke,threshold:he+1}}function pe(re,he,ne){const ke=Math.abs(re-he);return Math.min(ke,ne-ke)}function Le(re,{min:he,max:ne,values:ke,threshold:Qe}){if(re===he)return he;if(re<he||re>ne)return pe(re,he,Qe)<=pe(re,ne,Qe)?he:ne;const He=ke.findIndex(kt=>re<=kt),Re=ke[He-1],et=ke[He];return re-Re<=et-re?Re:et}function Me(){return e.calendar!=="persian"&&e.mask!==null?e.mask:`HH:mm${e.withSeconds===!0?":ss":""}`}function de(){if(typeof e.defaultDate!="string"){const re=u(!0);return re.dateHash=Vn(re),re}return Na(e.defaultDate,"YYYY/MM/DD",void 0,e.calendar)}function h(){return jl(a)===!0||G.value!==null&&(G.value.values.length===0||y.value==="hour"&&E.value!==!0&&R.value[x.value===!0?"am":"pm"].values.length===0)}function k(){const re=_.value,{top:he,left:ne,width:ke}=re.getBoundingClientRect(),Qe=ke/2;return{top:he+Qe,left:ne+Qe,dist:Qe*.7}}function q(re){if(h()!==!0){if(re.isFirst===!0){p=k(),g=z(re.evt,p);return}g=z(re.evt,p,g),re.isFinal===!0&&(p=!1,g=null,Y())}}function Y(){y.value==="hour"?y.value="minute":e.withSeconds&&y.value==="minute"&&(y.value="second")}function z(re,he,ne){const ke=eo(re),Qe=Math.abs(ke.top-he.top),He=Math.sqrt(Math.abs(ke.top-he.top)**2+Math.abs(ke.left-he.left)**2);let Re,et=Math.asin(Qe/He)*(180/Math.PI);if(ke.top<he.top?et=he.left<ke.left?90-et:270+et:et=he.left<ke.left?et+90:270-et,y.value==="hour"){if(Re=et/30,R.value!==null){const kt=E.value!==!0?x.value===!0:R.value.am.values.length!==0&&R.value.pm.values.length!==0?He>=he.dist:R.value.am.values.length!==0;Re=Le(Re+(kt===!0?0:12),R.value[kt===!0?"am":"pm"])}else Re=Math.round(Re),E.value===!0?He<he.dist?Re<12&&(Re+=12):Re===12&&(Re=0):x.value===!0&&Re===12?Re=0:x.value===!1&&Re!==12&&(Re+=12);E.value===!0&&(x.value=Re<12)}else Re=Math.round(et/6)%60,y.value==="minute"&&ae.value!==null?Re=Le(Re,ae.value):y.value==="second"&&Z.value!==null&&(Re=Le(Re,Z.value));return ne!==Re&&ie[y.value](Re),Re}const A={hour(){y.value="hour"},minute(){y.value="minute"},second(){y.value="second"}};function $(re){re.keyCode===13&&me()}function te(re){re.keyCode===13&&Ce()}function fe(re){h()!==!0&&(o.platform.is.desktop!==!0&&z(re,k()),Y())}function ue(re){h()!==!0&&z(re,k())}function ce(re){if(re.keyCode===13)y.value="hour";else if([37,39].includes(re.keyCode)){const he=re.keyCode===37?-1:1;if(R.value!==null){const ne=E.value===!0?R.value.values:R.value[x.value===!0?"am":"pm"].values;if(ne.length===0)return;if(m.value.hour===null)ve(ne[0]);else{const ke=(ne.length+ne.indexOf(m.value.hour)+he)%ne.length;ve(ne[ke])}}else{const ne=E.value===!0?24:12,ke=E.value!==!0&&x.value===!1?12:0,Qe=m.value.hour===null?-he:m.value.hour;ve(ke+(24+Qe+he)%ne)}}}function Se(re){if(re.keyCode===13)y.value="minute";else if([37,39].includes(re.keyCode)){const he=re.keyCode===37?-1:1;if(ae.value!==null){const ne=ae.value.values;if(ne.length===0)return;if(m.value.minute===null)le(ne[0]);else{const ke=(ne.length+ne.indexOf(m.value.minute)+he)%ne.length;le(ne[ke])}}else{const ne=m.value.minute===null?-he:m.value.minute;le((60+ne+he)%60)}}}function ye(re){if(re.keyCode===13)y.value="second";else if([37,39].includes(re.keyCode)){const he=re.keyCode===37?-1:1;if(Z.value!==null){const ne=Z.value.values;if(ne.length===0)return;if(m.value.seconds===null)oe(ne[0]);else{const ke=(ne.length+ne.indexOf(m.value.second)+he)%ne.length;oe(ne[ke])}}else{const ne=m.value.second===null?-he:m.value.second;oe((60+ne+he)%60)}}}function ve(re){m.value.hour!==re&&(m.value.hour=re,Ie())}function le(re){m.value.minute!==re&&(m.value.minute=re,Ie())}function oe(re){m.value.second!==re&&(m.value.second=re,Ie())}const ie={hour:ve,minute:le,second:oe};function me(){x.value===!1&&(x.value=!0,m.value.hour!==null&&(m.value.hour-=12,Ie()))}function Ce(){x.value===!0&&(x.value=!1,m.value.hour!==null&&(m.value.hour+=12,Ie()))}function je(re){const he=e.modelValue;y.value!==re&&he!==void 0&&he!==null&&he!==""&&typeof he!="string"&&(y.value=re)}function Ie(){if(j.value!==null&&j.value(m.value.hour)!==!0){m.value=Na(),je("hour");return}if(U.value!==null&&U.value(m.value.minute)!==!0){m.value.minute=null,m.value.second=null,je("minute");return}if(e.withSeconds===!0&&D.value!==null&&D.value(m.value.second)!==!0){m.value.second=null,je("second");return}m.value.hour===null||m.value.minute===null||e.withSeconds===!0&&m.value.second===null||De()}function De(re){const he=Object.assign({...m.value},re),ne=e.calendar==="persian"?at(he.hour)+":"+at(he.minute)+(e.withSeconds===!0?":"+at(he.second):""):sh(new Date(he.year,he.month===null?null:he.month-1,he.day,he.hour,he.minute,he.second,he.millisecond),I.value,C.value,he.year,he.timezoneOffset);he.changed=ne!==e.modelValue,n("update:modelValue",ne,he)}function Ue(){const re=[L("div",{class:"q-time__link "+(y.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:r.value,onClick:A.hour,onKeyup:ce},T.value.hour),L("div",":"),L("div",F.value===!0?{class:"q-time__link "+(y.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:r.value,onKeyup:Se,onClick:A.minute}:{class:"q-time__link"},T.value.minute)];e.withSeconds===!0&&re.push(L("div",":"),L("div",V.value===!0?{class:"q-time__link "+(y.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:r.value,onKeyup:ye,onClick:A.second}:{class:"q-time__link"},T.value.second));const he=[L("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},re)];return E.value===!1&&he.push(L("div",{class:"q-time__header-ampm column items-between no-wrap"},[L("div",{class:"q-time__link "+(x.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:r.value,onClick:me,onKeyup:$},"AM"),L("div",{class:"q-time__link "+(x.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:r.value,onClick:Ce,onKeyup:te},"PM")])),L("div",{class:"q-time__header flex flex-center no-wrap "+s.value},he)}function Ke(){const re=m.value[y.value];return L("div",{class:"q-time__content col relative-position"},[L(Lt,{name:"q-transition--scale"},()=>L("div",{key:"clock"+y.value,class:"q-time__container-parent absolute-full"},[L("div",{ref:_,class:"q-time__container-child fit overflow-hidden"},[we(L("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:fe,onMousedown:ue},[L("div",{class:"q-time__clock-circle fit"},[L("div",{class:"q-time__clock-pointer"+(m.value[y.value]===null?" hidden":e.color!==void 0?` text-${e.color}`:""),style:O.value}),be.value.map(he=>L("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${he.index}`+(he.val===re?" q-time__clock-position--active "+s.value:he.disable===!0?" q-time__clock-position--disable":"")},[L("span",he.label)]))])]),$e.value)])])),e.nowBtn===!0?L(it,{class:"q-time__now-button absolute",icon:o.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:e.color,textColor:e.textColor,tabindex:r.value,onClick:J}):null])}return a.proxy.setNow=J,()=>{const re=[Ke()],he=mt(t.default);return he!==void 0&&re.push(L("div",{class:"q-time__actions"},he)),e.name!==void 0&&e.disable!==!0&&d(re,"push"),L("div",{class:B.value,tabindex:-1},[Ue(),L("div",{class:"q-time__main col overflow-auto"},re)])}}}),Zle="component",Xle={docsUrl:"https://v2.quasar.dev/vue-components/time"},ece={"model-value":{type:["String","null"],desc:"Time of the component; use v-model",required:!0,category:"model"},format24h:{type:["Boolean","null"],default:"null",desc:"Forces 24 hour time display instead of AM/PM system",category:"behavior"},mask:{type:["String","null"],default:"'HH:mm'",desc:"Time formatting mask",category:"model"},"with-seconds":{type:"Boolean",desc:"Allow the time to be set with seconds",category:"behavior"},"now-btn":{type:"Boolean",desc:"Display a button that selects the current time",category:"content"},"hour-options":{type:"Array",desc:"Optionally configure what hours the user is allowed to set",category:"behavior"},"minute-options":{type:"Array",desc:"Optionally configure what minutes the user is allowed to set",category:"behavior"},"second-options":{type:"Array",desc:"Optionally configure what seconds the user is allowed to set",category:"behavior"},options:{type:"Function",desc:"Optionally configure what time the user is allowed to set",category:"behavior"},"default-date":{type:"String",desc:"The default date to use (YYYY/MM/DD) when model is unfilled",category:"model"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"text-color":{type:"String",desc:"Color name for the text",category:"style"},square:{type:"Boolean",desc:"Removes border-radius so borders are squared",category:"style"},flat:{type:"Boolean",desc:"Applies a flat design (no default shadow)",category:"style"},bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"}},tce={default:{desc:"This is where additional buttons can go"}},nce={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},oce={setNow:{desc:"Change model to current moment"}},ace={type:Zle,meta:Xle,props:ece,slots:tce,events:nce,methods:oce},ice={name:"ShowcaseQuasarTime",components:{QTime:Kle},label:"Quasar Time",icon:"schedule",apiJson:ace,importName:"QTime",importFrom:"quasar",data(){return{basic:"10:30",h24:"18:45",withSec:"09:15:30"}}},rce={class:"jShowcase_row jShowcase_column"},sce={class:"jShowcase_group"},lce={class:"jShowcase_items"},cce={class:"jShowcase_group"},uce={class:"jShowcase_items"},dce={class:"jShowcase_group"},fce={class:"jShowcase_items"},pce={class:"jShowcase_group"},mce={class:"jShowcase_items"};function hce(e,t,n,a,o,i){const r=X("QTime");return M(),ee("div",rce,[v("div",sce,[t[3]||(t[3]=v("span",{class:"jShowcase_title"},"Basic",-1)),v("div",lce,[f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),color:"primary"},null,8,["modelValue"])])]),v("div",cce,[t[4]||(t[4]=v("span",{class:"jShowcase_title"},"24h format, landscape",-1)),v("div",uce,[f(r,{modelValue:o.h24,"onUpdate:modelValue":t[1]||(t[1]=s=>o.h24=s),color:"secondary",format24h:"",landscape:""},null,8,["modelValue"])])]),v("div",dce,[t[5]||(t[5]=v("span",{class:"jShowcase_title"},"With seconds + Now button",-1)),v("div",fce,[f(r,{modelValue:o.withSec,"onUpdate:modelValue":t[2]||(t[2]=s=>o.withSec=s),color:"accent","with-seconds":"","now-btn":""},null,8,["modelValue"])])]),v("div",pce,[t[6]||(t[6]=v("span",{class:"jShowcase_title"},"Readonly",-1)),v("div",mce,[f(r,{"model-value":"14:30",color:"info",readonly:""})])])])}const gce=ze(ice,[["render",hce]]),vce=Object.freeze(Object.defineProperty({__proto__:null,default:gce},Symbol.toStringTag,{value:"Module"})),pc=Fe({name:"QToggle",props:{...Wm,icon:String,iconColor:String},emits:Jm,setup(e){function t(n,a){const o=Q(()=>(n.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),i=Q(()=>n.value===!0?e.iconColor:null);return()=>[L("div",{class:"q-toggle__track"}),L("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[L(nt,{name:o.value,color:i.value})]:void 0)]}return Gm("toggle",t)}}),bce="component",_ce={docsUrl:"https://v2.quasar.dev/vue-components/toggle"},yce={"model-value":{type:["Any","Array"],default:"null",desc:"Model of the component; use v-model directive",category:"model",required:!0},val:{type:"Any",desc:"Works when model is Array. Value to add/remove when ticked/unticked",category:"model"},"true-value":{type:"Any",default:"true",desc:"What model value should be considered as checked/on?",category:"model",required:!1},"false-value":{type:"Any",default:"false",desc:"What model value should be considered as unchecked/off?",category:"model",required:!1},label:{type:"String",desc:"Label to display along the component",category:"label"},"left-label":{type:"Boolean",desc:"Label should be displayed on the left side",category:"label"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},"checked-icon":{type:"String",desc:"Icon to use when the toggle is on",category:"icons"},"unchecked-icon":{type:"String",desc:"Icon to use when the toggle is off",category:"icons"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"keep-color":{type:"Boolean",desc:"Keep color when the component is unticked/off",category:"behavior"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1},"toggle-indeterminate":{type:"Boolean",desc:"Toggle through the indeterminate state too on click",category:"behavior"}},wce={default:{desc:"Default slot can be used as label, unless 'label' prop is specified"}},Sce={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},kce={type:bce,meta:_ce,props:yce,slots:wce,events:Sce},xce={name:"ShowcaseQuasarToggle",components:{QToggle:pc},label:"Quasar Toggle",icon:"edit_note",apiJson:kce,importName:"QToggle",importFrom:"quasar",data(){return{basic:!0,icons:!1,dense:!0,keepColor:!1}}},Cce={class:"jShowcase_row showcaseToggles"};function Qce(e,t,n,a,o,i){const r=X("QToggle");return M(),ee("div",Cce,[f(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),label:"Basic",color:"primary"},null,8,["modelValue"]),f(r,{modelValue:o.icons,"onUpdate:modelValue":t[1]||(t[1]=s=>o.icons=s),label:"With icons",color:"accent","checked-icon":"check","unchecked-icon":"close"},null,8,["modelValue"]),f(r,{modelValue:o.dense,"onUpdate:modelValue":t[2]||(t[2]=s=>o.dense=s),label:"Dense",color:"secondary",dense:""},null,8,["modelValue"]),f(r,{modelValue:o.keepColor,"onUpdate:modelValue":t[3]||(t[3]=s=>o.keepColor=s),label:"Keep color",color:"info","keep-color":""},null,8,["modelValue"]),f(r,{"model-value":!0,label:"Disabled on",color:"positive",disable:""}),f(r,{"model-value":!1,label:"Disabled off",color:"negative",disable:""})])}const Ace=ze(xce,[["render",Qce],["__scopeId","data-v-dec3fac0"]]),Ice=Object.freeze(Object.defineProperty({__proto__:null,default:Ace},Symbol.toStringTag,{value:"Module"})),qce={name:"ShowcaseQuasarChip",components:{QChip:Mm},label:"Quasar Chip",icon:"auto_awesome",importName:"QChip",importFrom:"quasar",code:'<QChip icon="event">Add to calendar</QChip>'},Tce={class:"jShowcase_row"};function Lce(e,t,n,a,o,i){const r=X("QChip");return M(),ee("div",Tce,[f(r,{icon:"event",disable:""},{default:S(()=>[...t[0]||(t[0]=[K("Add to calendar",-1)])]),_:1})])}const Ece=ze(qce,[["render",Lce]]),Dce=Object.freeze(Object.defineProperty({__proto__:null,default:Ece},Symbol.toStringTag,{value:"Module"})),Bce={...wo,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},fl=50,ph=2*fl,mh=ph*Math.PI,Pce=Math.round(mh*1e3)/1e3,Mce=Fe({name:"QCircularProgress",props:{...Bce,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Je(),a=So(e),o=Q(()=>{const g=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-g}deg)`:`rotate3d(0, 0, 1, ${g-90}deg)`}}),i=Q(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),r=Q(()=>ph/(1-e.thickness/2)),s=Q(()=>`${r.value/2} ${r.value/2} ${r.value} ${r.value}`),l=Q(()=>Gt(e.value,e.min,e.max)),u=Q(()=>e.max-e.min),c=Q(()=>e.thickness/2*r.value),d=Q(()=>{const g=(e.max-l.value)/u.value,_=e.rounded===!0&&l.value<e.max&&g<.25?c.value/2*(1-g/.25):0;return mh*g+_});function p({thickness:g,offset:_,color:I,cls:C,rounded:b}){return L("circle",{class:"q-circular-progress__"+C+(I!==void 0?` text-${I}`:""),style:i.value,fill:"transparent",stroke:"currentColor","stroke-width":g,"stroke-dasharray":Pce,"stroke-dashoffset":_,"stroke-linecap":b,cx:r.value,cy:r.value,r:fl})}return()=>{const g=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&g.push(L("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:fl-c.value/2,cx:r.value,cy:r.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&g.push(p({cls:"track",thickness:c.value,offset:0,color:e.trackColor})),g.push(p({cls:"circle",thickness:c.value,offset:d.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const _=[L("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:s.value,"aria-hidden":"true"},g)];return e.showValue===!0&&_.push(L("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[L("div",l.value)])),L("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:a.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:l.value},Bl(t.internal,_))}}}),jce="component",$ce={docsUrl:"https://v2.quasar.dev/vue-components/circular-progress"},Rce={size:{type:"String",desc:"Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",examples:["'16px'","'2rem'","'xs'","'md'"],category:"style"},value:{type:"Number",default:"0",desc:"Current progress (must be between min/max)",category:"model",required:!1},min:{type:"Number",default:"0",desc:"Minimum value defining 'no progress' (must be lower than 'max')",category:"model",required:!1},max:{type:"Number",default:"100",desc:"Maximum value defining 100% progress made (must be higher than 'min')",category:"model",required:!1},color:{type:"String",desc:"Color name for the arc progress from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},"center-color":{type:"String",desc:"Color name for the center part of the component from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},"track-color":{type:"String",desc:"Color name for the track of the component from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},"font-size":{type:"String",desc:"Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size",examples:["'1em'","'16px'","'2rem'"],category:"style"},rounded:{type:"Boolean",desc:"Rounding the arc of progress",category:"style"},thickness:{type:"Number",default:"0.2",desc:"Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size",category:"style",required:!1},angle:{type:"Number",desc:"Angle to rotate progress arc by",default:"0",category:"content",required:!1},indeterminate:{type:"Boolean",desc:"Put component into 'indeterminate' state; Ignores 'value' prop",category:"behavior"},"show-value":{type:"Boolean",desc:"Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text",category:"content|behavior"},reverse:{type:"Boolean",desc:"Reverses the direction of progress; Only for determined state",category:"behavior"},"instant-feedback":{type:"Boolean",desc:"No animation when model changes",category:"behavior"},"animation-speed":{type:["String","Number"],desc:"Animation speed (in milliseconds, without unit)",examples:["500","'1200'"],category:"style",default:"600",required:!1}},Oce={default:{desc:"Used for component content only if 'show-value' prop is set"}},Fce={type:jce,meta:$ce,props:Rce,slots:Oce},Vce={name:"ShowcaseQuasarCircularProgress",components:{QCircularProgress:Mce,QIcon:nt},label:"Circular Progress",icon:"auto_awesome",apiJson:Fce,importName:"QCircularProgress",importFrom:"quasar"},Nce={class:"jShowcase_row"};function zce(e,t,n,a,o,i){const r=X("QCircularProgress"),s=X("QIcon");return M(),ee("div",Nce,[f(r,{value:75,size:"56px",color:"primary","track-color":"grey-8","show-value":""},{default:S(()=>[...t[0]||(t[0]=[K(" 75% ",-1)])]),_:1}),f(r,{value:40,size:"56px",color:"accent","track-color":"grey-8",rounded:"",thickness:.3,"show-value":""},{default:S(()=>[f(s,{name:"rocket_launch",size:"18px",color:"accent"})]),_:1}),f(r,{indeterminate:"",size:"56px",color:"secondary","track-color":"grey-8"}),f(r,{value:90,size:"56px",color:"positive","track-color":"grey-8",thickness:.1,"show-value":"","font-size":"11px"},{default:S(()=>[...t[1]||(t[1]=[K(" 90% ",-1)])]),_:1})])}const Hce=ze(Vce,[["render",zce]]),Uce=Object.freeze(Object.defineProperty({__proto__:null,default:Hce},Symbol.toStringTag,{value:"Module"})),Wce='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',Jce=Fe({name:"QSpinnerDots",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:Wce})}}),Gce='<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>',Yce=Fe({name:"QSpinnerBars",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg",innerHTML:Gce})}}),Kce='<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>',Zce=Fe({name:"QSpinnerAudio",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg",innerHTML:Kce})}}),Xce='<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>',eue=Fe({name:"QSpinnerBall",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg",innerHTML:Xce})}}),tue='<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>',nue=Fe({name:"QSpinnerCube",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",innerHTML:tue})}}),oue='<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',aue=Fe({name:"QSpinnerGrid",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",innerHTML:oue})}}),iue='<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>',rue=Fe({name:"QSpinnerHourglass",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:iue})}}),sue='<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>',lue=Fe({name:"QSpinnerOval",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",innerHTML:sue})}}),cue='<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>',uue=Fe({name:"QSpinnerPuff",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",innerHTML:cue})}}),due='<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>',fue=Fe({name:"QSpinnerRings",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",innerHTML:due})}}),pue='<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>',mue=Fe({name:"QSpinnerTail",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",innerHTML:pue})}}),hue='<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>',gue=Fe({name:"QSpinnerGears",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:hue})}}),vue='<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>',bue=Fe({name:"QSpinnerComment",props:Ut,setup(e){const{cSize:t,classes:n}=Wt(e);return()=>L("svg",{class:n.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",innerHTML:vue})}}),_ue="component",yue={docsUrl:"https://v2.quasar.dev/vue-components/spinners"},wue={size:{type:"String",desc:"Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",category:"style"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},thickness:{type:"Number",default:"5",desc:"Override the stroke width (applies to default QSpinner only)",category:"style"}},Sue={type:_ue,meta:yue,props:wue},kue="component",xue={docsUrl:"https://v2.quasar.dev/vue-components/inner-loading"},Cue={showing:{type:"Boolean",desc:"State - loading or not",category:"model"},color:{type:"String",desc:"Color name from the Quasar Color Palette for the spinner",category:"style"},size:{type:"String",desc:"Size in CSS units for the default spinner",category:"style"},label:{type:"String",desc:"Text to display below the spinner",category:"content"},"label-class":{type:"String",desc:"CSS class(es) for the label",category:"style"},"label-style":{type:["String","Array","Object"],desc:"CSS style for the label",category:"style"},dark:{type:"Boolean",desc:"Notify the component that the background is dark",category:"style"},"transition-show":{type:"String",default:"'fade'",desc:"Transition name when showing",category:"behavior"},"transition-hide":{type:"String",default:"'fade'",desc:"Transition name when hiding",category:"behavior"},"transition-duration":{type:["String","Number"],default:"300",desc:"Transition duration (in milliseconds)",category:"behavior"}},Que={default:{desc:"Replaces the default spinner with custom content"}},Aue={type:kue,meta:xue,props:Cue,slots:Que},Iue={name:"ShowcaseQuasarSpinner",inject:["showcaseCopy"],components:{QToggle:pc,QInnerLoading:Pm,QSpinner:yo,QSpinnerDots:Jce,QSpinnerBars:Yce,QSpinnerAudio:Zce,QSpinnerBall:eue,QSpinnerCube:nue,QSpinnerGrid:aue,QSpinnerHourglass:rue,QSpinnerOrbit:Lp,QSpinnerOval:lue,QSpinnerPuff:uue,QSpinnerRings:fue,QSpinnerTail:mue,QSpinnerGears:gue,QSpinnerComment:bue},label:"Spinners / Loading",icon:"auto_awesome",apiJson:[{name:"QSpinner",json:Sue},{name:"QInnerLoading",json:Aue}],importName:"QSpinner",importFrom:"quasar",data(){return{innerActive:!0}}},que={class:"jShowcase_row jShowcase_column"},Tue={class:"jShowcase_group"},Lue={class:"jShowcase_items"},Eue={class:"jShowcase_group"},Due={class:"jShowcase_items"},Bue={class:"jShowcase_group"},Pue={class:"jShowcase_items"},Mue={class:"jShowcase_group"},jue={class:"jShowcase_items"},$ue={class:"jShowcase_group"},Rue={class:"jShowcase_items"},Oue={class:"innerLoadingBox"},Fue={class:"innerLoadingBox"},Vue={class:"innerLoadingBox"},Nue={class:"innerLoadingBox"};function zue(e,t,n,a,o,i){const r=X("QSpinner"),s=X("QSpinnerDots"),l=X("QSpinnerBars"),u=X("QSpinnerAudio"),c=X("QSpinnerBall"),d=X("QSpinnerCube"),p=X("QSpinnerGrid"),g=X("QSpinnerHourglass"),_=X("QSpinnerOrbit"),I=X("QSpinnerOval"),C=X("QSpinnerPuff"),b=X("QSpinnerRings"),w=X("QSpinnerTail"),y=X("QSpinnerGears"),m=X("QSpinnerComment"),x=X("QInnerLoading"),B=X("QToggle");return M(),ee("div",que,[v("div",Tue,[t[15]||(t[15]=v("span",{class:"jShowcase_title"},"Default",-1)),v("div",Lue,[f(r,{color:"primary",size:"40px"}),f(r,{color:"secondary",size:"40px",thickness:2}),f(r,{color:"accent",size:"40px",thickness:8})])]),v("div",Eue,[t[16]||(t[16]=v("span",{class:"jShowcase_title"},"Sizes",-1)),v("div",Due,[f(r,{color:"primary",size:"20px"}),f(r,{color:"primary",size:"30px"}),f(r,{color:"primary",size:"40px"}),f(r,{color:"primary",size:"60px"}),f(r,{color:"primary",size:"80px"})])]),v("div",Bue,[t[31]||(t[31]=v("span",{class:"jShowcase_title"},"Variants",-1)),v("div",Pue,[v("div",{class:"spinnerItem",onClick:t[0]||(t[0]=T=>i.showcaseCopy("<QSpinnerDots />"))},[f(s,{color:"primary",size:"40px"}),t[17]||(t[17]=v("span",{class:"spinnerLabel"},"Dots",-1))]),v("div",{class:"spinnerItem",onClick:t[1]||(t[1]=T=>i.showcaseCopy("<QSpinnerBars />"))},[f(l,{color:"secondary",size:"40px"}),t[18]||(t[18]=v("span",{class:"spinnerLabel"},"Bars",-1))]),v("div",{class:"spinnerItem",onClick:t[2]||(t[2]=T=>i.showcaseCopy("<QSpinnerAudio />"))},[f(u,{color:"accent",size:"40px"}),t[19]||(t[19]=v("span",{class:"spinnerLabel"},"Audio",-1))]),v("div",{class:"spinnerItem",onClick:t[3]||(t[3]=T=>i.showcaseCopy("<QSpinnerBall />"))},[f(c,{color:"positive",size:"40px"}),t[20]||(t[20]=v("span",{class:"spinnerLabel"},"Ball",-1))]),v("div",{class:"spinnerItem",onClick:t[4]||(t[4]=T=>i.showcaseCopy("<QSpinnerCube />"))},[f(d,{color:"info",size:"40px"}),t[21]||(t[21]=v("span",{class:"spinnerLabel"},"Cube",-1))]),v("div",{class:"spinnerItem",onClick:t[5]||(t[5]=T=>i.showcaseCopy("<QSpinnerGrid />"))},[f(p,{color:"warning",size:"40px"}),t[22]||(t[22]=v("span",{class:"spinnerLabel"},"Grid",-1))]),v("div",{class:"spinnerItem",onClick:t[6]||(t[6]=T=>i.showcaseCopy("<QSpinnerHourglass />"))},[f(g,{color:"negative",size:"40px"}),t[23]||(t[23]=v("span",{class:"spinnerLabel"},"Hourglass",-1))]),v("div",{class:"spinnerItem",onClick:t[7]||(t[7]=T=>i.showcaseCopy("<QSpinnerOrbit />"))},[f(_,{color:"primary",size:"40px"}),t[24]||(t[24]=v("span",{class:"spinnerLabel"},"Orbit",-1))]),v("div",{class:"spinnerItem",onClick:t[8]||(t[8]=T=>i.showcaseCopy("<QSpinnerOval />"))},[f(I,{color:"secondary",size:"40px"}),t[25]||(t[25]=v("span",{class:"spinnerLabel"},"Oval",-1))]),v("div",{class:"spinnerItem",onClick:t[9]||(t[9]=T=>i.showcaseCopy("<QSpinnerPuff />"))},[f(C,{color:"accent",size:"40px"}),t[26]||(t[26]=v("span",{class:"spinnerLabel"},"Puff",-1))]),v("div",{class:"spinnerItem",onClick:t[10]||(t[10]=T=>i.showcaseCopy("<QSpinnerRings />"))},[f(b,{color:"positive",size:"40px"}),t[27]||(t[27]=v("span",{class:"spinnerLabel"},"Rings",-1))]),v("div",{class:"spinnerItem",onClick:t[11]||(t[11]=T=>i.showcaseCopy("<QSpinnerTail />"))},[f(w,{color:"info",size:"40px"}),t[28]||(t[28]=v("span",{class:"spinnerLabel"},"Tail",-1))]),v("div",{class:"spinnerItem",onClick:t[12]||(t[12]=T=>i.showcaseCopy("<QSpinnerGears />"))},[f(y,{color:"warning",size:"40px"}),t[29]||(t[29]=v("span",{class:"spinnerLabel"},"Gears",-1))]),v("div",{class:"spinnerItem",onClick:t[13]||(t[13]=T=>i.showcaseCopy("<QSpinnerComment />"))},[f(m,{color:"negative",size:"40px"}),t[30]||(t[30]=v("span",{class:"spinnerLabel"},"Comment",-1))])])]),v("div",Mue,[t[32]||(t[32]=v("span",{class:"jShowcase_title"},"Colors",-1)),v("div",jue,[f(r,{color:"primary",size:"40px"}),f(r,{color:"secondary",size:"40px"}),f(r,{color:"accent",size:"40px"}),f(r,{color:"positive",size:"40px"}),f(r,{color:"negative",size:"40px"}),f(r,{color:"info",size:"40px"}),f(r,{color:"warning",size:"40px"})])]),v("div",$ue,[t[37]||(t[37]=v("span",{class:"jShowcase_title"},"QInnerLoading",-1)),v("div",Rue,[v("div",Oue,[t[33]||(t[33]=v("div",{class:"innerLoadingContent"},"Content underneath",-1)),f(x,{showing:o.innerActive,color:"primary"},null,8,["showing"])]),v("div",Fue,[t[34]||(t[34]=v("div",{class:"innerLoadingContent"},"Custom spinner",-1)),f(x,{showing:o.innerActive},{default:S(()=>[f(y,{color:"accent",size:"40px"})]),_:1},8,["showing"])]),v("div",Vue,[t[35]||(t[35]=v("div",{class:"innerLoadingContent"},"Dark overlay",-1)),f(x,{showing:o.innerActive,color:"secondary",dark:""},null,8,["showing"])]),v("div",Nue,[t[36]||(t[36]=v("div",{class:"innerLoadingContent"},"With label",-1)),f(x,{showing:o.innerActive,color:"primary",label:"Loading data..."},null,8,["showing"])])]),f(B,{modelValue:o.innerActive,"onUpdate:modelValue":t[14]||(t[14]=T=>o.innerActive=T),label:"Show loading",color:"primary"},null,8,["modelValue"]),t[38]||(t[38]=v("p",{class:"innerLoadingNote"},[v("strong",null,"WARNING:"),K(" The parent element must have "),v("code",null,"position: relative"),K(" (or the "),v("code",null,"relative-position"),K(" Quasar class) for the spinner to center correctly. ")],-1)),t[39]||(t[39]=v("p",{class:"innerLoadingNote"},[v("strong",null,"WARNING:"),K(" QInnerLoading must be the last element inside its parent so it can appear on top of the other content. ")],-1))])])}const Hue=ze(Iue,[["render",zue],["__scopeId","data-v-c4a41f68"]]),Uue=Object.freeze(Object.defineProperty({__proto__:null,default:Hue},Symbol.toStringTag,{value:"Module"})),Wue="component",Jue={docsUrl:"https://v2.quasar.dev/vue-components/tabs"},Gue={"model-value":{type:["Number","String","null"],desc:"Model defining current panel name; use v-model",category:"model",required:!1},vertical:{type:"Boolean",desc:"Use vertical design (tabs stacked on top of each other)",category:"content"},align:{type:"String",default:"'center'",desc:"Horizontal alignment of tabs within the container",values:["'left'","'center'","'right'","'justify'"],category:"content",required:!1},"active-color":{type:"String",desc:"Color for the text of the active tab",category:"style"},"active-bg-color":{type:"String",desc:"Color for the background of the active tab",category:"style"},"indicator-color":{type:"String",desc:"Color for the indicator (underline) of the active tab",category:"style"},"narrow-indicator":{type:"Boolean",desc:"Indicator matches the tab content width instead of full tab width",category:"content"},"inline-label":{type:"Boolean",desc:"Text is inline with the icon",category:"content"},"no-caps":{type:"Boolean",desc:"Turns off capitalizing all letters within the tab",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},"switch-indicator":{type:"Boolean",desc:"Switches the indicator position",category:"content"},shrink:{type:"Boolean",desc:"Reverse default grow behavior; useful in QToolbar",category:"content"},stretch:{type:"Boolean",desc:"Tabs stretch to parent's height on flexbox parent",category:"content"},"outside-arrows":{type:"Boolean",desc:"Reserve space for scroll arrows on each side",category:"content"},"mobile-arrows":{type:"Boolean",desc:"Force display of arrows on mobile",category:"content"}},Yue={default:{desc:"Default slot for QTab components"}},Kue={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},Zue={type:Wue,meta:Jue,props:Gue,slots:Yue,events:Kue},Xue="component",ede={docsUrl:"https://v2.quasar.dev/vue-components/tabs"},tde={name:{type:["Number","String"],desc:"Panel name",category:"general",required:!1},label:{type:["Number","String"],desc:"A number or string to label the tab",category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},alert:{type:["Boolean","String"],desc:"Adds an alert symbol; if string, specifies color",category:"content"},"alert-icon":{type:"String",desc:"Adds a floating icon as alert; displayed only if 'alert' is set",category:"content"},"no-caps":{type:"Boolean",desc:"Turns off capitalizing all letters",category:"content"},"content-class":{type:"String",desc:"Class definitions for the content wrapper",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},ripple:{type:["Boolean","Object"],default:"true",desc:"Configure material ripple",category:"style",required:!1}},nde={default:{desc:"Suggestion: QMenu, QTooltip"}},ode={type:Xue,meta:ede,props:tde,slots:nde},ade="component",ide={docsUrl:"https://v2.quasar.dev/vue-components/tab-panels"},rde={"model-value":{type:"Any",desc:"Current panel name; use v-model (synced with QTabs model)",required:!0,category:"model"},"keep-alive":{type:"Boolean",desc:"Equivalent to Vue's native <keep-alive> on the content",category:"behavior"},animated:{type:"Boolean",desc:"Enable transitions between panels",category:"behavior"},infinite:{type:"Boolean",desc:"Makes navigation infinite (wraps around)",category:"behavior"},swipeable:{type:"Boolean",desc:"Enable swipe gestures to switch panels",category:"behavior"},vertical:{type:"Boolean",desc:"Transitions and swipe on the vertical axis",category:"behavior"},"transition-prev":{type:"String",desc:"Transition when going to previous panel (requires 'animated')",default:"'slide-right'",category:"transition"},"transition-next":{type:"String",desc:"Transition when going to next panel (requires 'animated')",default:"'slide-left'",category:"transition"},"transition-duration":{type:["String","Number"],default:"300",desc:"Transition duration in milliseconds",category:"transition"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"}},sde={default:{desc:"Default slot for QTabPanel components"}},lde={"update:model-value":{desc:"Emitted when the active panel changes"},"before-transition":{desc:"Emitted before transitioning to a new panel"},transition:{desc:"Emitted after transitioning to a new panel"}},cde={type:ade,meta:ide,props:rde,slots:sde,events:lde},ude="component",dde={docsUrl:"https://v2.quasar.dev/vue-components/tab-panels"},fde={name:{type:"Any",desc:"Panel name (must match the model value to be shown)",required:!0,category:"general"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"}},pde={default:{desc:"Default slot for panel content"}},mde={type:ude,meta:dde,props:fde,slots:pde},hde={name:"ShowcaseQuasarTabs",components:{QTabs:ec,QTab:tc,QTabPanels:Km,QTabPanel:Zm},label:"Quasar Tabs",icon:"auto_awesome",apiJson:[{name:"QTabs",json:Zue},{name:"QTab",json:ode},{name:"QTabPanels",json:cde},{name:"QTabPanel",json:mde}],importName:"QTabs",importFrom:"quasar",data(){return{tab:"overview",tab2:"all"}}},gde={class:"jShowcase_row jShowcase_column showcaseTabs"},vde={class:"jShowcase_group"},bde={class:"jShowcase_group"};function _de(e,t,n,a,o,i){const r=X("QTab"),s=X("QTabs"),l=X("QTabPanel"),u=X("QTabPanels");return M(),ee("div",gde,[v("div",vde,[t[8]||(t[8]=v("span",{class:"jShowcase_title"},"With Panels",-1)),f(s,{modelValue:o.tab,"onUpdate:modelValue":t[0]||(t[0]=c=>o.tab=c),dense:"","no-caps":"",class:"showcaseTabs_bar","active-color":"accent","indicator-color":"accent"},{default:S(()=>[f(r,{name:"overview",icon:"dashboard",label:"Overview"}),f(r,{name:"systems",icon:"memory",label:"Systems"}),f(r,{name:"crew",icon:"groups",label:"Crew"}),f(r,{name:"logs",icon:"description",label:"Logs",alert:"warning"})]),_:1},8,["modelValue"]),f(u,{modelValue:o.tab,"onUpdate:modelValue":t[1]||(t[1]=c=>o.tab=c),animated:"",class:"showcaseTabs_panels"},{default:S(()=>[f(l,{name:"overview"},{default:S(()=>[...t[4]||(t[4]=[K("Ship status nominal. All systems operational.",-1)])]),_:1}),f(l,{name:"systems"},{default:S(()=>[...t[5]||(t[5]=[K("Warp drive: online. Shields: 98%. Phasers: charged.",-1)])]),_:1}),f(l,{name:"crew"},{default:S(()=>[...t[6]||(t[6]=[K("Officers: 42. Enlisted: 388. Civilians: 0.",-1)])]),_:1}),f(l,{name:"logs"},{default:S(()=>[...t[7]||(t[7]=[K("3 new entries. 1 flagged for review.",-1)])]),_:1})]),_:1},8,["modelValue"])]),v("div",bde,[t[12]||(t[12]=v("span",{class:"jShowcase_title"},"Minimal",-1)),f(s,{modelValue:o.tab2,"onUpdate:modelValue":t[2]||(t[2]=c=>o.tab2=c),dense:"","no-caps":"",class:"showcaseTabs_bar","active-color":"primary","indicator-color":"primary","narrow-indicator":"",align:"left"},{default:S(()=>[f(r,{name:"all",label:"All"}),f(r,{name:"active",label:"Active"}),f(r,{name:"archived",label:"Archived"}),f(r,{name:"disabled",label:"Disabled",disable:""})]),_:1},8,["modelValue"]),f(u,{modelValue:o.tab2,"onUpdate:modelValue":t[3]||(t[3]=c=>o.tab2=c),animated:"",class:"showcaseTabs_panels"},{default:S(()=>[f(l,{name:"all"},{default:S(()=>[...t[9]||(t[9]=[K("Showing all 127 records.",-1)])]),_:1}),f(l,{name:"active"},{default:S(()=>[...t[10]||(t[10]=[K("48 active records.",-1)])]),_:1}),f(l,{name:"archived"},{default:S(()=>[...t[11]||(t[11]=[K("79 archived records.",-1)])]),_:1})]),_:1},8,["modelValue"])])])}const yde=ze(hde,[["render",_de],["__scopeId","data-v-404b39b7"]]),wde=Object.freeze(Object.defineProperty({__proto__:null,default:yde},Symbol.toStringTag,{value:"Module"})),Sde={name:"PortfolioFooter",props:{title:{type:String,default:""},alwaysCollapsed:{type:Boolean,default:!1}}},kde={class:"portfolioFooter_frame"},xde={key:0,class:"portfolioFooter_expandable"},Cde={class:"portfolioFooter_expandableInner"},Qde={key:1,class:"portfolioFooter_divider"},Ade={class:"portfolioFooter_left"},Ide={key:0,class:"portfolioFooter_tag"},qde={class:"portfolioFooter_tagLabel"},Tde={key:1,class:"portfolioFooter_tag"},Lde={key:2,class:"portfolioFooter_caption"},Ede={key:0,class:"portfolioFooter_center"},Dde={key:1,class:"portfolioFooter_right"},Bde={key:2,class:"portfolioFooter_bottom"},Pde={class:"portfolioFooter_bottomInner"};function Mde(e,t,n,a,o,i){return M(),ee("div",{class:ft(["portfolioFooter",{compact:n.alwaysCollapsed,hasContent:(e.$slots.expanded||e.$slots.bottom)&&!n.alwaysCollapsed}])},[v("div",kde,[e.$slots.expanded&&!n.alwaysCollapsed?(M(),ee("div",xde,[v("div",Cde,[Dt(e.$slots,"expanded",{},void 0)])])):Ge("",!0),e.$slots.expanded&&!n.alwaysCollapsed?(M(),ee("div",Qde)):Ge("",!0),v("div",{class:ft(["portfolioFooter_bar",{portfolioFooter_barCentered:!e.$slots.center&&!e.$slots.right}])},[v("div",Ade,[!e.$slots.logo&&n.title?(M(),ee("div",Ide,[t[0]||(t[0]=v("span",{class:"portfolioFooter_tagDot"},null,-1)),v("span",qde,xe(n.title),1)])):Ge("",!0),e.$slots.logo?(M(),ee("div",Tde,[Dt(e.$slots,"logo",{},void 0)])):Ge("",!0),e.$slots.caption?(M(),ee("div",Lde,[Dt(e.$slots,"caption",{},void 0)])):Ge("",!0)]),e.$slots.center?(M(),ee("div",Ede,[Dt(e.$slots,"center",{},void 0)])):Ge("",!0),e.$slots.right?(M(),ee("div",Dde,[Dt(e.$slots,"right",{},void 0)])):Ge("",!0)],2),e.$slots.bottom&&!n.alwaysCollapsed?(M(),ee("div",Bde,[t[1]||(t[1]=v("div",{class:"portfolioFooter_bottomDivider"},null,-1)),v("div",Pde,[Dt(e.$slots,"bottom",{},void 0)])])):Ge("",!0)])],2)}const mc=ze(Sde,[["render",Mde],["__scopeId","data-v-d3679154"]]),jde="component",$de={},Rde={title:{type:"String",default:"''",desc:"Left-side label displayed with a dot indicator. Ignored when #logo slot is provided.",category:"content"},"always-collapsed":{type:"Boolean",default:"false",desc:"Thin compact bar — no expanded content, no corners, top border only. Mirrors PortfolioHeader compact mode.",category:"behavior"}},Ode={logo:{desc:"Replaces the default title + dot indicator with custom content (e.g. icon + brand name)."},caption:{desc:"Muted text shown beside the title/logo in the bottom bar."},center:{desc:"Center section of the bottom bar. Hidden on mobile."},right:{desc:"Right side of the bottom bar. Status indicators, social links, etc."},expanded:{desc:"Content area above the bottom bar. Separated by a gradient divider. Centered columns for link groups."},bottom:{desc:"Content area below the bottom bar. Separated by a gradient divider. Hidden when always-collapsed is set."}},Fde={},Vde={},Nde={type:jde,meta:$de,props:Rde,slots:Ode,events:Fde,methods:Vde},zde={name:"ShowcasePortfolioFooter",components:{QBtn:it,QIcon:nt,PortfolioFooter:mc},label:"Portfolio Footer",icon:"call_to_action",inject:["showcaseCopy"],apiJson:Nde,importName:"PortfolioFooter",code:null,methods:{copy(e){this.showcaseCopy(e)}}},Hde={class:"jShowcase_row jShowcase_column"},Ude={class:"jShowcase_group"},Wde={class:"jShowcase_column"},Jde={class:"jShowcase_group"},Gde={class:"jShowcase_column"},Yde={class:"jShowcase_group"},Kde={class:"jShowcase_column"},Zde={class:"jShowcase_group"},Xde={class:"jShowcase_column"};function efe(e,t,n,a,o,i){const r=X("QBtn"),s=X("PortfolioFooter",!0),l=X("QIcon");return M(),ee("div",Hde,[t[12]||(t[12]=v("div",{class:"jShowcase_info"},[v("p",null,[K("Themed footer with the same visual language as "),v("code",null,"PortfolioHeader"),K(" — frame, corners, gradient highlight, and per-theme background effects. Not sticky by default.")]),v("div",{class:"jShowcase_infoSection"},[v("span",{class:"jShowcase_infoLabel"},"Layout"),v("p",null,"Bottom bar with left (title/logo + caption), center, and right sections. Optional expanded area above with a gradient divider.")])],-1)),v("div",Ude,[t[3]||(t[3]=v("span",{class:"jShowcase_title"},"Full (With Expanded Content)",-1)),v("div",Wde,[f(s,{title:"VAULT"},{expanded:S(()=>[...t[0]||(t[0]=[v("div",{class:"demoLinkColumn"},[v("span",{class:"demoLinkHeading"},"Platform"),v("a",{class:"demoLink"},"Dashboard"),v("a",{class:"demoLink"},"Portfolio"),v("a",{class:"demoLink"},"Staking"),v("a",{class:"demoLink"},"Swap")],-1),v("div",{class:"demoLinkColumn"},[v("span",{class:"demoLinkHeading"},"Resources"),v("a",{class:"demoLink"},"Documentation"),v("a",{class:"demoLink"},"API Reference"),v("a",{class:"demoLink"},"Status Page")],-1),v("div",{class:"demoLinkColumn"},[v("span",{class:"demoLinkHeading"},"Community"),v("a",{class:"demoLink"},"Discord"),v("a",{class:"demoLink"},"Twitter"),v("a",{class:"demoLink"},"GitHub")],-1)])]),caption:S(()=>[...t[1]||(t[1]=[K(" © 2026 Vault Protocol ",-1)])]),center:S(()=>[...t[2]||(t[2]=[v("span",{class:"demoPill"},"MAINNET",-1),v("span",{class:"demoPill"},"v2.4.1",-1)])]),right:S(()=>[f(r,{flat:"",round:"",size:"sm",icon:"fab fa-discord",color:"primary"}),f(r,{flat:"",round:"",size:"sm",icon:"fab fa-twitter",color:"primary"}),f(r,{flat:"",round:"",size:"sm",icon:"fab fa-github",color:"primary"})]),_:1})])]),v("div",Jde,[t[6]||(t[6]=v("span",{class:"jShowcase_title"},"Simple Bar",-1)),v("div",Gde,[f(s,{title:"Portfolio"},{caption:S(()=>[...t[4]||(t[4]=[K(" © 2026 All rights reserved ",-1)])]),right:S(()=>[...t[5]||(t[5]=[v("span",{class:"demoPill"},"BLOCK #184,291,037",-1)])]),_:1})])]),v("div",Yde,[t[10]||(t[10]=v("span",{class:"jShowcase_title"},"Custom Logo Slot",-1)),v("div",Kde,[f(s,null,{logo:S(()=>[f(l,{name:"diamond",size:"18px",color:"secondary"}),t[7]||(t[7]=v("span",{style:{"letter-spacing":"2px","font-weight":"700"}},"VAULT",-1))]),caption:S(()=>[...t[8]||(t[8]=[K(" Decentralized Finance Protocol ",-1)])]),right:S(()=>[...t[9]||(t[9]=[v("span",{class:"demoPill active"},[v("span",{class:"demoPulseDot"}),K(" LIVE ")],-1)])]),_:1})])]),v("div",Zde,[t[11]||(t[11]=v("span",{class:"jShowcase_title"},"Minimal (Title Only)",-1)),v("div",Xde,[f(s,{title:"Dashboard"})])])])}const tfe=ze(zde,[["render",efe],["__scopeId","data-v-35f4a855"]]),nfe=Object.freeze(Object.defineProperty({__proto__:null,default:tfe},Symbol.toStringTag,{value:"Module"})),ofe={name:"PortfolioHeader",components:{QBtn:it,QMenu:pi},props:{alwaysCollapsed:{type:Boolean,default:!1},alwaysExpanded:{type:Boolean,default:!1},title:{type:String,default:"Portfolio Overview"}},data(){return{scrolled:!1,scrollThresholdExpand:120,scrollThresholdCollapse:0}},computed:{},mounted(){if(this.alwaysCollapsed||this.alwaysExpanded)return;let e=null,t=!1;this._onScroll=()=>{t||(e&&clearTimeout(e),e=setTimeout(()=>{e=null,this.scrolled?window.scrollY<=this.scrollThresholdCollapse&&(this.scrolled=!1):window.scrollY>this.scrollThresholdExpand&&(this.scrolled=!0,t=!0,setTimeout(()=>{t=!1},400))},50))},window.addEventListener("scroll",this._onScroll,{passive:!0})},beforeUnmount(){window.removeEventListener("scroll",this._onScroll)}},afe={class:"portfolioHeader_frame varmoryBackgroundAccentContainer"},ife={class:"portfolioHeader_topBar"},rfe={key:0,class:"portfolioHeader_tag"},sfe={class:"portfolioHeader_tagLabel"},lfe={key:1,class:"portfolioHeader_tag"},cfe={key:2,class:"portfolioHeader_collapsed"},ufe={key:3,class:"portfolioHeader_right"},dfe={key:4,class:"portfolioHeader_menu"},ffe={key:0,class:"portfolioHeader_collapsible"},pfe={class:"portfolioHeader_collapsibleInner"};function mfe(e,t,n,a,o,i){const r=X("QMenu"),s=X("QBtn");return M(),ee("div",{class:ft(["portfolioHeader varmoryBackgroundAccent",{compact:!n.alwaysExpanded&&(n.alwaysCollapsed||o.scrolled),varmoryBackgroundAccentCompact:!n.alwaysExpanded&&(n.alwaysCollapsed||o.scrolled)}])},[v("div",afe,[t[1]||(t[1]=v("div",{class:"portfolioHeader_corner portfolioHeader_cornerTl"},null,-1)),t[2]||(t[2]=v("div",{class:"portfolioHeader_corner portfolioHeader_cornerTr"},null,-1)),t[3]||(t[3]=v("div",{class:"portfolioHeader_corner portfolioHeader_cornerBl"},null,-1)),t[4]||(t[4]=v("div",{class:"portfolioHeader_corner portfolioHeader_cornerBr"},null,-1)),v("div",ife,[!e.$slots.logo&&n.title?(M(),ee("div",rfe,[t[0]||(t[0]=v("span",{class:"portfolioHeader_tagDot"},null,-1)),v("span",sfe,xe(n.title),1)])):Ge("",!0),e.$slots.logo?(M(),ee("div",lfe,[Dt(e.$slots,"logo",{},void 0)])):Ge("",!0),e.$slots.collapsed?(M(),ee("div",cfe,[Dt(e.$slots,"collapsed",{},void 0)])):Ge("",!0),e.$slots.right?(M(),ee("div",ufe,[Dt(e.$slots,"right",{},void 0)])):Ge("",!0),e.$slots.menu?(M(),ee("div",dfe,[f(s,{color:"secondary",icon:"more_vert",round:"",flat:""},{default:S(()=>[f(r,null,{default:S(()=>[Dt(e.$slots,"menu",{},void 0,!0)]),_:3})]),_:3})])):Ge("",!0)]),e.$slots.expanded?(M(),ee("div",ffe,[v("div",pfe,[Dt(e.$slots,"expanded",{},void 0)])])):Ge("",!0)])],2)}const hc=ze(ofe,[["render",mfe],["__scopeId","data-v-501d3481"]]),hfe={USD:"$",EUR:"€",GBP:"£",JPY:"¥",CNY:"¥",KRW:"₩",BTC:"₿",ETH:"Ξ"},gfe={name:"AmountDisplay",props:{amount:{type:Number,required:!0},currency:{type:String,default:"USD"},size:{type:Number,default:48}},computed:{currencySymbol(){return hfe[this.currency]||this.currency},wholeFormatted(){return Math.floor(Math.abs(this.amount)).toLocaleString()},decimalFormatted(){return(Math.abs(this.amount)%1).toFixed(2).substring(2)},subSize(){return Math.round(this.size*.58)}}},vfe={class:"amountDisplay"};function bfe(e,t,n,a,o,i){return M(),ee("span",vfe,[v("span",{class:"amountDisplay_currency",style:Dn({fontSize:i.subSize+"px"})},xe(i.currencySymbol),5),v("span",{class:"amountDisplay_whole",style:Dn({fontSize:n.size+"px"})},xe(i.wholeFormatted),5),v("span",{class:"amountDisplay_decimal",style:Dn({fontSize:i.subSize+"px"})},"."+xe(i.decimalFormatted),5)])}const _fe=ze(gfe,[["render",bfe],["__scopeId","data-v-2119f021"]]),yfe={name:"AmountChange",components:{QIcon:nt},props:{percent:{type:Number,required:!0},amount:{type:String,default:null},period:{type:String,default:null},compact:{type:Boolean,default:!1}},computed:{positive(){return this.percent>=0}}},wfe={key:0,class:"amountChange_period"};function Sfe(e,t,n,a,o,i){const r=X("QIcon");return n.compact?(M(),ee("span",{key:0,class:ft(["amountChange amountChange__compact",i.positive?"positive":"negative"])},xe(i.positive?"+":"")+xe(n.percent)+"% ",3)):(M(),ee("div",{key:1,class:ft(["amountChange",i.positive?"positive":"negative"])},[f(r,{name:i.positive?"arrow_drop_up":"arrow_drop_down",size:"20px"},null,8,["name"]),v("span",null,[K(xe(Math.abs(n.percent))+"% ",1),n.amount?(M(),ee(Ve,{key:0},[K("("+xe(n.amount)+")",1)],64)):Ge("",!0)]),n.period?(M(),ee("span",wfe,xe(n.period),1)):Ge("",!0)],2))}const kfe=ze(yfe,[["render",Sfe],["__scopeId","data-v-35696b43"]]),xfe="component",Cfe={},Qfe={title:{type:"String",default:"'Portfolio Overview'",desc:"Top-left label displayed with a dot indicator. Ignored when #logo slot is provided.",category:"content"},"always-collapsed":{type:"Boolean",default:"false",desc:"Lock header in compact mode. Disables scroll listener.",category:"behavior"},"always-expanded":{type:"Boolean",default:"false",desc:"Lock header in expanded mode. Disables scroll listener.",category:"behavior"}},Afe={logo:{desc:"Replaces the default title + dot indicator with custom content (e.g. icon + brand name)."},collapsed:{desc:"Content shown inline in the top bar only when the header is in compact mode. Useful for a condensed balance display."},expanded:{desc:"Main content area below the top bar. Collapses to 0 height on scroll via CSS grid transition."},right:{desc:"Right side of the top bar. Always visible in desktop. Hidden on mobile (replaced by #menu)."},menu:{desc:"Dropdown menu content shown on mobile via a round icon button. Hidden on desktop."}},Ife={},qfe={},Tfe={type:xfe,meta:Cfe,props:Qfe,slots:Afe,events:Ife,methods:qfe},Lfe={name:"ShowcasePortfolioHeader",components:{QBtn:it,QIcon:nt,PortfolioHeader:hc,AmountDisplay:_fe,AmountChange:kfe},label:"Portfolio Header",icon:"web_asset",inject:["showcaseCopy"],apiJson:Tfe,importName:"PortfolioHeader",code:null,methods:{copy(e){this.showcaseCopy(e)}}},Efe={class:"jShowcase_row jShowcase_column"},Dfe={class:"jShowcase_group"},Bfe={class:"jShowcase_column"},Pfe={class:"demoExpanded"},Mfe={class:"demoBalance"},jfe={class:"demoActions"},$fe={class:"jShowcase_group"},Rfe={class:"jShowcase_column"},Ofe={class:"jShowcase_group"},Ffe={class:"jShowcase_column"},Vfe={class:"jShowcase_group"},Nfe={class:"jShowcase_column"};function zfe(e,t,n,a,o,i){const r=X("AmountDisplay"),s=X("AmountChange"),l=X("QBtn"),u=X("PortfolioHeader",!0),c=X("QIcon");return M(),ee("div",Efe,[t[9]||(t[9]=v("div",{class:"jShowcase_info"},[v("p",null,[K("Sticky collapsible header that transitions between expanded and compact states on scroll. Colors and background patterns are set per-theme in "),v("code",null,"common.css"),K(".")]),v("div",{class:"jShowcase_infoSection"},[v("span",{class:"jShowcase_infoLabel"},"Scroll behavior"),v("p",null,"Collapses after scrolling past 120px. Expands back only when scrolled to top. A 400ms lock prevents layout-shift retriggering.")])],-1)),v("div",Dfe,[t[2]||(t[2]=v("span",{class:"jShowcase_title"},"Default (Expanded)",-1)),v("div",Bfe,[f(u,{title:"Portfolio Overview","always-expanded":""},{collapsed:S(()=>[f(r,{amount:47832.61,currency:"USD",size:16}),f(s,{percent:3.42,compact:""})]),expanded:S(()=>[v("div",Pfe,[v("div",Mfe,[t[0]||(t[0]=v("div",{class:"demoBalanceLabel"},"TOTAL PORTFOLIO VALUE",-1)),f(r,{amount:47832.61,currency:"USD",size:48}),f(s,{percent:3.42,amount:"+$1,582.14",period:"24h"})]),v("div",jfe,[f(l,{color:"primary",icon:"north_east",label:"Send"}),f(l,{color:"secondary",icon:"south_west",label:"Receive"}),f(l,{color:"accent",icon:"swap_horiz",label:"Swap"}),f(l,{class:"ghost",icon:"lock",label:"Stake"})])])]),right:S(()=>[...t[1]||(t[1]=[v("span",{class:"demoPill"},"BLOCK #184,291,037",-1)])]),_:1})])]),v("div",$fe,[t[4]||(t[4]=v("span",{class:"jShowcase_title"},"Always Collapsed",-1)),v("div",Rfe,[f(u,{title:"Portfolio Overview","always-collapsed":""},{collapsed:S(()=>[f(r,{amount:47832.61,currency:"USD",size:16}),f(s,{percent:3.42,compact:""})]),right:S(()=>[...t[3]||(t[3]=[v("span",{class:"demoPill"},"BLOCK #184,291,037",-1)])]),_:1})])]),v("div",Ofe,[t[7]||(t[7]=v("span",{class:"jShowcase_title"},"Custom Logo Slot",-1)),v("div",Ffe,[f(u,{"always-collapsed":""},{logo:S(()=>[f(c,{name:"diamond",size:"18px",color:"secondary"}),t[5]||(t[5]=v("span",{style:{"letter-spacing":"2px","font-weight":"700"}},"VAULT",-1))]),collapsed:S(()=>[f(r,{amount:12500,currency:"BTC",size:16})]),right:S(()=>[...t[6]||(t[6]=[v("span",{class:"demoPill active"},[v("span",{class:"demoPulseDot"}),K(" LIVE ")],-1)])]),_:1})])]),v("div",Vfe,[t[8]||(t[8]=v("span",{class:"jShowcase_title"},"Minimal (Title Only)",-1)),v("div",Nfe,[f(u,{title:"Dashboard","always-collapsed":""})])])])}const Hfe=ze(Lfe,[["render",zfe],["__scopeId","data-v-6e88e1ff"]]),Ufe=Object.freeze(Object.defineProperty({__proto__:null,default:Hfe},Symbol.toStringTag,{value:"Module"})),Wfe=`<template>
    <div class="colorSections">
        <div v-for="group in groups" :key="group.label" class="colorGroup">
            <div class="colorGroupLabel">{{ group.label }}</div>
            <div v-if="group.rows" class="colorRows non-selectable">
                <div v-for="(row, ri) in group.rows" :key="ri" class="colorRow">
                    <template v-for="c in row" :key="c.name">
                        <div v-if="c.separator" class="colorSeparator">⋯</div>
                        <div v-else class="colorSwatch" @click="onColorClick(c)">
                            <div class="colorBox" :class="c.bgClass" :style="c.var ? { background: c.var } : {}" />
                            <div class="colorInfo">
                                <span class="colorName text-truncate">{{ c.name }}</span>
                                <span class="colorVar text-truncate">{{ c.varName }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div v-else class="colorGrid non-selectable">
                <template v-for="c in group.colors" :key="c.name">
                    <div v-if="c.separator" class="colorSeparator">⋯</div>
                    <div v-else class="colorSwatch" @click="onColorClick(c)">
                        <div class="colorBox" :class="c.bgClass" :style="c.var ? { background: c.var } : {}" />
                        <div class="colorInfo">
                            <span class="colorName">{{ c.name }}</span>
                            <span class="colorVar">{{ c.varName }}</span>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
const quasarPaletteFamilies = [
    'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue',
    'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber',
    'orange', 'deep-orange', 'brown', 'grey', 'blue-grey',
];

function paletteGroup(name) {
    const q = (n) => ({ name: n, varName: \`class="bg-\${n}"\`, bgClass: \`bg-\${n}\` });
    return [
        q(name),
        q(\`\${name}-1\`),
        { separator: true, name: \`\${name}-sep1\` },
        q(\`\${name}-7\`),
        { separator: true, name: \`\${name}-sep2\` },
        q(\`\${name}-14\`),
    ];
}

const colors = [
                {
                    label: 'BRAND',
                    colors: [
                        { name: 'primary', varName: '--q-primary', var: 'var(--q-primary)' },
                        { name: 'secondary', varName: '--q-secondary', var: 'var(--q-secondary)' },
                        { name: 'accent', varName: '--q-accent', var: 'var(--q-accent)' },
                        { name: 'dark', varName: '--q-dark', var: 'var(--q-dark)' },
                        { name: 'positive', varName: '--q-positive', var: 'var(--q-positive)' },
                        { name: 'negative', varName: '--q-negative', var: 'var(--q-negative)' },
                        { name: 'info', varName: '--q-info', var: 'var(--q-info)' },
                        { name: 'warning', varName: '--q-warning', var: 'var(--q-warning)' },
                    ],
                },
                {
                    label: 'BRAND MIXES',
                    colors: [
                        { name: 'color-mix(in srgb, var(--q-primary), transparent 50%)', varName: ' ', var: 'color-mix(in srgb, var(--q-primary), transparent 50%)' },
                        { name: 'color-mix(in srgb, var(--q-secondary), transparent 70%)', varName: ' ', var: 'color-mix(in srgb, var(--q-secondary), transparent 70%)' },
                        { name: 'color-mix(in srgb, var(--q-accent), black 70%)', varName: ' ', var: 'color-mix(in srgb, var(--q-accent), black 70%)' },
                    ],
                },
                {
                    label: 'TEXT',
                    colors: [
                        { name: 'text-bright', varName: '--q-text-bright', var: 'var(--q-text-bright)' },
                        { name: 'text', varName: '--q-text', var: 'var(--q-text)' },
                        { name: 'text-muted', varName: '--q-text-muted', var: 'var(--q-text-muted)' },
                        { name: 'text-faint', varName: '--q-text-faint', var: 'var(--q-text-faint)' },
                    ],
                },
                {
                    label: 'SURFACES',
                    colors: [
                        { name: 'surface-0', varName: '--q-surface-0', var: 'var(--q-surface-0)' },
                        { name: 'surface-1', varName: '--q-surface-1', var: 'var(--q-surface-1)' },
                        { name: 'surface-2', varName: '--q-surface-2', var: 'var(--q-surface-2)' },
                        { name: 'surface-3', varName: '--q-surface-3', var: 'var(--q-surface-3)' },
                        { name: 'surface-border', varName: '--q-surface-border', var: 'var(--q-surface-border)' },
                        { name: 'surface-overlay', varName: '--q-surface-overlay', var: 'var(--q-surface-overlay)' },
                        { name: 'body-bg', varName: '--q-body-bg', var: 'var(--q-body-bg)' },
                    ],
                },
                {
                    label: 'GLOWS & SHADOWS',
                    colors: [
                        { name: 'glow-primary', varName: '--q-glow-primary', var: 'var(--q-glow-primary)' },
                        { name: 'glow-accent', varName: '--q-glow-accent', var: 'var(--q-glow-accent)' },
                        { name: 'glow-warning', varName: '--q-glow-warning', var: 'var(--q-glow-warning)' },
                        { name: 'shadow-drop', varName: '--q-shadow-drop', var: 'var(--q-shadow-drop)' },
                        { name: 'shadow-inset', varName: '--q-shadow-inset', var: 'var(--q-shadow-inset)' },
                    ],
                },
                {
                    label: 'QUASAR PALETTE',
                    rows: quasarPaletteFamilies.map(f => paletteGroup(f)),
                },
            ];

const colorsAsCode = colors.map(group => {
    let colorLines = [];
    if (group.label == 'BRAND') {
        colorLines = group.colors.map(c => {
                const rand = Math.floor((Math.random() * 10000) % 3);
                if (rand == 0) {
                    return \`  <div class="text-\${c.name}">...</div>\`;
                } else if (rand == 1) {
                    return \`  <div class="bg-\${c.name}">...</div>\`;
                } else {
                    return \`  <div style="color: var(--q-\${c.name})">...</div>\`;
                }
            }).join(',\\n');
    } else if (group.label == 'TEXT') {
        return \`\${group.label}: 
<div class="text-bright">...</div> 
<div style="color: var(--q-text-bright)">...</div> 
<div class="text-muted">...</div>
<div style="color: var(--q-text-muted)">...</div>  
<div class="text-faint">...</div>
<div style="color: var(--q-text-faint)">...</div>\\n  \`;
    } else if (group.label == 'QUASAR PALETTE') {
        colorLines = group.rows.flat().filter(c => !c.separator).slice(0, 6).map(c =>
            \`  <div class="bg-\${c.name}">...</div>\`
        ).join(',\\n');
    } else {
        colorLines = (group.colors || []).map(c => {
                const rand = Math.floor((Math.random() * 10000) % 3);
                if (rand == 0) {
                    return \`  <div style="background-color: var(--q-\${c.name})">...</div>\`;
                } else if (rand == 1) {
                    return \`  <div style="color: var(--q-\${c.name})">...</div>\`;
                } else {
                    return \`  <div style="color: var(--q-\${c.name})">...</div>\`;
                }
            }).join(',\\n');
    }
    return \`\${group.label}:\\n\${colorLines}\`;
}).join('\\n\\n');

export default {
    inject: ['showcaseCopy'],
    name: 'ShowcaseAllColors',
    label: 'All Colors',
    icon: 'palette',
    data() {
        return {
            groups: colors
        };
    },
    code: colorsAsCode,
    methods: {
        onColorClick(c) {
            this.showcaseCopy(c.name);
        },
    },
};
<\/script>

<style scoped>
.colorSections {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.colorGroupLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text);
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    margin-bottom: 6px;
}

.colorGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 8px;
}

.colorSwatch {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 8px;
    border-radius: 3px;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 5%, transparent);
    transition: border-color 0.15s ease;
}

.colorSwatch:hover {
    border-color: color-mix(in srgb, var(--q-text-bright) 12%, transparent);
}

.colorBox {
    width: 28px;
    height: 28px;
    border-radius: 3px;
    flex-shrink: 0;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 10%, transparent);
}

.colorInfo {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
}

.colorName {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    font-weight: 600;
    color: var(--q-text-bright);
    letter-spacing: 0.5px;
}

.colorRows {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.colorRow {
    display: flex;
    align-items: center;
    gap: 4px;
}

.colorRow .colorSwatch {
    flex: 1;
    min-width: 0;
}

.colorSeparator {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-faint);
    opacity: 0.4;
    padding: 0 2px;
    flex-shrink: 0;
}

.colorVar {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text);
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
`,Jfe=`<template>
    <div class="helperClasses">
        <div v-for="group in groups" :key="group.label" class="helperClasses_section">
            <div class="helperClasses_sectionLabel">{{ group.label }}</div>
            <div class="helperClasses_table">
                <div v-for="c in group.items" :key="c.cls" class="helperClasses_row">
                    <div class="helperClasses_tags">
                        <span class="helperClasses_tag" @click="copy(c.cls)">{{ c.cls }}</span>
                    </div>
                    <div class="helperClasses_desc">{{ c.desc }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowcaseHelperClasses',
    label: 'Helper Classes',
    icon: 'text_fields',
    inject: ['showcaseCopy'],
    code: \`MOUSE:
<div class="non-selectable">...</div>
<div class="no-pointer-events">...</div>
<div class="all-pointer-events">...</div>
<div class="cursor-pointer">...</div>
<div class="cursor-not-allowed">...</div>
<div class="cursor-inherit">...</div>
<div class="cursor-none">...</div>

SCROLL:
<div class="scroll">...</div>
<div class="no-scroll">...</div>
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-hidden-y">...</div>
<div class="hide-scrollbar">...</div>

SIZE:
<div class="fit">...</div>
<div class="full-height">...</div>
<div class="full-width">...</div>
<div class="window-height">...</div>
<div class="window-width">...</div>
<div class="block">...</div>

ORIENTATION:
<div class="rotate-45">...</div>
<div class="rotate-90">...</div>
<div class="rotate-180">...</div>
<div class="rotate-270">...</div>
<div class="flip-horizontal">...</div>
<div class="flip-vertical">...</div>

POSITIONING:
<div class="fullscreen">...</div>
<div class="fixed-center">...</div>
<div class="fixed-top-right">...</div>
<div class="absolute-full">...</div>
<div class="absolute-center">...</div>
<div class="absolute-bottom-right">...</div>
<div class="relative-position">...</div>
<div class="z-top">...</div>
<div class="z-max">...</div>

BORDER:
<div class="no-border">...</div>
<div class="no-border-radius">...</div>
<div class="no-box-shadow">...</div>
<div class="no-outline">...</div>
<div class="rounded-borders">...</div>
<div class="border-radius-inherit">...</div>\`,
    data() {
        return {
            groups: [
                {
                    label: 'MOUSE',
                    items: [
                        { cls: 'non-selectable', desc: 'User cannot select the DOM node or its text' },
                        { cls: 'no-pointer-events', desc: 'Element does not become a target of mouse events' },
                        { cls: 'all-pointer-events', desc: 'Restores pointer events (inverse of no-pointer-events)' },
                        { cls: 'cursor-pointer', desc: 'Changes cursor to pointer (clickable)' },
                        { cls: 'cursor-not-allowed', desc: 'Changes cursor to not-allowed' },
                        { cls: 'cursor-inherit', desc: 'Cursor inherits from parent element' },
                        { cls: 'cursor-none', desc: 'Hides the mouse cursor' },
                    ],
                },
                {
                    label: 'SCROLL',
                    items: [
                        { cls: 'scroll', desc: 'Applies CSS tweaks for optimal scroll on all platforms' },
                        { cls: 'no-scroll', desc: 'Hides scrollbars on the element' },
                        { cls: 'overflow-auto', desc: 'Sets overflow to auto' },
                        { cls: 'overflow-hidden', desc: 'Sets overflow to hidden' },
                        { cls: 'overflow-hidden-y', desc: 'Hides overflow on the vertical axis only' },
                        { cls: 'hide-scrollbar', desc: 'Removes the scrollbar while keeping scroll functional' },
                    ],
                },
                {
                    label: 'SIZE',
                    items: [
                        { cls: 'fit', desc: 'Width and height set to 100%' },
                        { cls: 'full-height', desc: 'Height set to 100%' },
                        { cls: 'full-width', desc: 'Width set to 100%, left and right margins 0' },
                        { cls: 'window-height', desc: 'Height set to 100vh, top and bottom margins 0' },
                        { cls: 'window-width', desc: 'Width set to 100vw, left and right margins 0' },
                        { cls: 'block', desc: 'Sets display to block' },
                    ],
                },
                {
                    label: 'ORIENTATION',
                    items: [
                        { cls: 'rotate-45', desc: 'Rotate element 45 degrees' },
                        { cls: 'rotate-90', desc: 'Rotate element 90 degrees' },
                        { cls: 'rotate-135', desc: 'Rotate element 135 degrees' },
                        { cls: 'rotate-180', desc: 'Rotate element 180 degrees' },
                        { cls: 'rotate-225', desc: 'Rotate element 225 degrees' },
                        { cls: 'rotate-270', desc: 'Rotate element 270 degrees' },
                        { cls: 'rotate-315', desc: 'Rotate element 315 degrees' },
                        { cls: 'flip-horizontal', desc: 'Flip element horizontally' },
                        { cls: 'flip-vertical', desc: 'Flip element vertically' },
                    ],
                },
                {
                    label: 'POSITIONING',
                    items: [
                        { cls: 'fullscreen', desc: 'Fix position covering the full window' },
                        { cls: 'fixed', desc: 'Sets position to fixed (without coordinates)' },
                        { cls: 'fixed-full', desc: 'Sets position to fixed covering the full window' },
                        { cls: 'fixed-center', desc: 'Sets position to fixed but centered in window' },
                        { cls: 'fixed-bottom', desc: 'Fixed position at bottom of window' },
                        { cls: 'fixed-left', desc: 'Fixed position at left of window' },
                        { cls: 'fixed-right', desc: 'Fixed position at right of window' },
                        { cls: 'fixed-top', desc: 'Fixed position at top of window' },
                        { cls: 'fixed-top-left', desc: 'Fixed position at top-left of window' },
                        { cls: 'fixed-top-right', desc: 'Fixed position at top-right of window' },
                        { cls: 'fixed-bottom-left', desc: 'Fixed position at bottom-left of window' },
                        { cls: 'fixed-bottom-right', desc: 'Fixed position at bottom-right of window' },
                        { cls: 'absolute', desc: 'Sets position to absolute (without coordinates)' },
                        { cls: 'absolute-full', desc: 'Sets position to absolute covering the full parent' },
                        { cls: 'absolute-center', desc: 'Sets position to absolute but centered in parent' },
                        { cls: 'absolute-bottom', desc: 'Absolute position at bottom of parent' },
                        { cls: 'absolute-left', desc: 'Absolute position at left of parent' },
                        { cls: 'absolute-right', desc: 'Absolute position at right of parent' },
                        { cls: 'absolute-top', desc: 'Absolute position at top of parent' },
                        { cls: 'absolute-top-left', desc: 'Absolute position at top-left of parent' },
                        { cls: 'absolute-top-right', desc: 'Absolute position at top-right of parent' },
                        { cls: 'absolute-bottom-left', desc: 'Absolute position at bottom-left of parent' },
                        { cls: 'absolute-bottom-right', desc: 'Absolute position at bottom-right of parent' },
                        { cls: 'relative-position', desc: 'Sets position to relative' },
                        { cls: 'z-top', desc: 'Sets z-index to the top (z-index: 7000)' },
                        { cls: 'z-max', desc: 'Sets z-index to the maximum (z-index: 9998)' },
                    ],
                },
                {
                    label: 'BORDER',
                    items: [
                        { cls: 'no-border', desc: 'Removes any border' },
                        { cls: 'no-border-radius', desc: 'Removes any border radius' },
                        { cls: 'no-box-shadow', desc: 'Removes any box shadow' },
                        { cls: 'no-outline', desc: 'Removes any outline' },
                        { cls: 'rounded-borders', desc: 'Applies a generic border radius' },
                        { cls: 'border-radius-inherit', desc: 'Inherits border radius from parent' },
                    ],
                },
            ],
        };
    },
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
<\/script>

<style scoped>
.helperClasses {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.helperClasses_sectionLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text-faint);
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    margin-bottom: 4px;
}

.helperClasses_table {
    display: flex;
    flex-direction: column;
}

.helperClasses_row {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 6px 8px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.helperClasses_row:last-child {
    border-bottom: none;
}

.helperClasses_tags {
    flex-shrink: 0;
    min-width: 180px;
}

.helperClasses_tag {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.5px;
    color: var(--q-accent);
    border: 1px solid color-mix(in srgb, var(--q-accent) 35%, transparent);
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
}

.helperClasses_tag:hover {
    background: color-mix(in srgb, var(--q-accent) 15%, transparent);
}

.helperClasses_desc {
    font-family: var(--font-body);
    font-size: var(--q-text-size-small);
    color: var(--q-text);
}
</style>
`,Gfe=`<template>
    <div class="typoSections">
        <div class="typoSection">
            <div class="typoSectionLabel">HEADINGS</div>
            <div class="typoRows">
                <div v-for="h in headings" :key="h.cls" class="typoRow">
                    <div class="typoTags">
                        <span class="typoTag" @click="copy(h.cls)">{{ h.cls }}</span>
                        <span v-if="h.el" class="typoTag" @click="copy(h.el)">{{ h.el }}</span>
                    </div>
                    <div class="typoSample" :class="h.cls">{{ h.text }}</div>
                </div>
            </div>
        </div>

        <div class="typoSection">
            <div class="typoSectionLabel">FONT WEIGHTS</div>
            <div class="typoRows">
                <div v-for="w in weights" :key="w.cls" class="typoRow">
                    <div class="typoTags">
                        <span class="typoTag" @click="copy(w.cls)">{{ w.cls }}</span>
                    </div>
                    <div class="typoSample" :class="w.cls">{{ w.text }}</div>
                </div>
            </div>
        </div>

        <div class="typoSection">
            <div class="typoSectionLabel">CSS HELPER CLASSES</div>
            <div class="typoTable">
                <div class="typoTableHeader">
                    <span>Class Name</span>
                    <span>Description</span>
                </div>
                <div v-for="c in helpers" :key="c.cls" class="typoTableRow">
                    <div class="typoTags">
                        <span class="typoTag" @click="copy(c.cls)">{{ c.cls }}</span>
                    </div>
                    <div class="typoDesc">
                        <template v-if="c.css">
                            {{ c.descBefore }}<span class="typoCssBadge">{{ c.css }}</span>{{ c.descAfter }}
                        </template>
                        <template v-else>{{ c.desc }}</template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const loremLong = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.';
const loremLong2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.';

export default {
    inject: ['showcaseCopy'],
    name: 'ShowcaseTypography',
    label: 'Typography',
    icon: 'text_fields',
    order: 0,
    code: \`HEADINGS:
<div class="text-h1">Headline 1</div>
<h1>Headline 1</h1>
<div class="text-h2">Headline 2</div>
<h2>Headline 2</h2>
<div class="text-h6">Headline 6</div>
<h6>Headline 6</h6>
<div class="text-subtitle1">Subtitle 1</div>
<div class="text-subtitle2">Subtitle 2</div>
<div class="text-body1">Body 1</div>
<div class="text-body2">Body 2</div>
<div class="text-caption">Caption</div>
<div class="text-overline">Overline</div>

FONT WEIGHTS:
<div class="text-weight-thin">...</div>
<div class="text-weight-light">...</div>
<div class="text-weight-regular">...</div>
<div class="text-weight-medium">...</div>
<div class="text-weight-bold">...</div>
<div class="text-weight-bolder">...</div>

CSS HELPERS:
<div class="text-right">...</div>
<div class="text-center">...</div>
<div class="text-justify">...</div>
<div class="text-bold">...</div>
<div class="text-italic">...</div>
<div class="text-no-wrap">...</div>
<div class="text-strike">...</div>
<div class="text-uppercase">...</div>
<div class="text-lowercase">...</div>
<div class="text-capitalize">...</div>\`,
    data() {
        return {
            headings: [
                { cls: 'text-h1', el: 'h1', text: 'Headline 1' },
                { cls: 'text-h2', el: 'h2', text: 'Headline 2' },
                { cls: 'text-h3', el: 'h3', text: 'Headline 3' },
                { cls: 'text-h4', el: 'h4', text: 'Headline 4' },
                { cls: 'text-h5', el: 'h5', text: 'Headline 5' },
                { cls: 'text-h6', el: 'h6', text: 'Headline 6' },
                { cls: 'text-subtitle1', el: null, text: 'Subtitle 1' },
                { cls: 'text-subtitle2', el: null, text: 'Subtitle 2' },
                { cls: 'text-body1', el: null, text: 'Body 1. ' + loremLong },
                { cls: 'text-body2', el: null, text: 'Body 2. ' + loremLong2 },
                { cls: 'text-caption', el: null, text: 'Caption text' },
                { cls: 'text-overline', el: null, text: 'Overline' },
            ],
            weights: [
                { cls: 'text-weight-thin', text: lorem },
                { cls: 'text-weight-light', text: lorem },
                { cls: 'text-weight-regular', text: lorem },
                { cls: 'text-weight-medium', text: lorem },
                { cls: 'text-weight-bold', text: lorem },
                { cls: 'text-weight-bolder', text: lorem },
            ],
            helpers: [
                { cls: 'text-right', desc: 'Align text to the right' },
                { cls: 'text-left', desc: 'Align text to the left' },
                { cls: 'text-center', desc: 'Align text to the center' },
                { cls: 'text-justify', desc: 'Text will be justified' },
                { cls: 'text-bold', desc: 'Text will be in bold' },
                { cls: 'text-italic', desc: 'Text will be in italic' },
                { cls: 'text-no-wrap', desc: 'Non wrappable text', descBefore: 'Non wrappable text (applies ', css: 'white-space: nowrap', descAfter: ')' },
                { cls: 'text-strike', desc: 'Applies text-decoration: line-through', descBefore: 'Applies ', css: 'text-decoration: line-through', descAfter: '' },
                { cls: 'text-uppercase', desc: 'Transform text to uppercase' },
                { cls: 'text-lowercase', desc: 'Transform text to lowercase' },
                { cls: 'text-capitalize', desc: 'Capitalize first letter of the text' },
            ],
        };
    },
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
<\/script>

<style scoped>
.typoSections {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.typoSectionLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 2px;
    color: var(--q-text-faint);
    padding-bottom: 6px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    margin-bottom: 8px;
}

.typoRows {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.typoRow {
    display: flex;
    align-items: baseline;
    gap: 16px;
    padding: 8px 0;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 3%, transparent);
}

.typoTags {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
    min-width: 140px;
    align-items: baseline;
}

.typoTag {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.5px;
    color: var(--q-accent);
    border: 1px solid color-mix(in srgb, var(--q-accent) 35%, transparent);
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
}

.typoTag:hover {
    background: color-mix(in srgb, var(--q-accent) 15%, transparent);
}

.typoSample {
    color: var(--q-text);
    min-width: 0;
}

/* ── Helper classes table ── */
.typoTable {
    display: flex;
    flex-direction: column;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 8%, transparent);
    border-radius: 3px;
    overflow: hidden;
}

.typoTableHeader {
    display: flex;
    gap: 16px;
    padding: 10px 14px;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    font-weight: 600;
    letter-spacing: 0.5px;
    color: var(--q-text);
    background: color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 8%, transparent);
}

.typoTableHeader span:first-child {
    min-width: 140px;
    flex-shrink: 0;
}

.typoTableRow {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 14px;
    border-bottom: 1px solid color-mix(in srgb, var(--q-text-bright) 4%, transparent);
}

.typoTableRow:last-child {
    border-bottom: none;
}

.typoDesc {
    font-family: var(--font-body);
    font-size: var(--q-text-size-small);
    color: var(--q-text-bright);
}

.typoCssBadge {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-accent);
    background: color-mix(in srgb, var(--q-accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--q-accent) 25%, transparent);
    padding: 1px 6px;
    border-radius: 2px;
    margin: 0 2px;
}
</style>
`,Yfe=`<template>
    <div class="iconShowcase">

        <div class="iconControls">
            <QInput
                v-model="search"
                dense
                outlined
                placeholder="Filter icons..."
                color="accent"
                class="iconSearch"
            >
                <template #prepend>
                    <QIcon name="search" size="16px" />
                </template>
                <template v-if="search" #append>
                    <QIcon name="close" size="14px" class="cursor-pointer" @click="search = ''" />
                </template>
            </QInput>

            <QTabs
                v-model="category"
                dense
                active-color="accent"
                indicator-color="accent"
                align="left"
                narrow-indicator
                no-caps
                class="iconTabs"
            >
                <QTab name="all" label="All" />
                <QTab v-for="cat in allCategories" :key="cat" :name="cat" :label="cat" />
            </QTabs>
        </div>

        <div class="iconStats">
            {{ filtered.length }} icons
        </div>

        <div class="iconGrid non-selectable">
            <div
                v-for="ic in filtered"
                :key="ic[0]"
                class="iconCell"
                @click="onCopy(ic)"
            >
                <QIcon :name="ic[0]" size="36px" />
                <span class="iconLabel text-truncate">{{ ic[0] }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { QIcon, QInput, QTabs, QTab } from 'quasar';
import QIconApi from '../../definitions/Quasar/QIcon.json';
import allIcons from '../../definitions/materialIcons.js';

const allCategories = [...new Set(allIcons.map(i => i[1]))].sort();

export default {
    inject: ['showcaseCopy'],
    name: 'ShowcaseIcon',
    label: 'Material Icons',
    icon: 'emoji_symbols',
    components: { QIcon, QInput, QTabs, QTab },
    apiJson: QIconApi,
    importName: 'QIcon',
    importFrom: 'quasar',
    code: \`<QIcon name="home" size="24px" />
<QIcon name="star" color="primary" size="32px" />
<QIcon name="settings" size="24px" />

<!-- With color -->
<QIcon name="favorite" color="negative" />

<!-- In a button -->
<QBtn icon="send" label="Send" />\`,
    data() {
        return {
            search: '',
            category: 'all',
            allCategories,
        };
    },
    computed: {
        filtered() {
            let list = allIcons;
            if (this.category !== 'all') {
                list = list.filter(i => i[1] === this.category);
            }
            if (this.search) {
                const q = this.search.toLowerCase().replace(/\\s+/g, '_');
                list = list.filter(i => i[0].includes(q));
            }
            return list;
        },
    },
    watch: {
        search(val) {
            if (val) {
                this.category = 'all';
            }
        },
    },
    methods: {
        onCopy(ic) {
            this.showcaseCopy(ic[0], ic[0]);
        },
    },
};
<\/script>

<style scoped>
.iconShowcase {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.iconControls {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.iconTabs {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
}

.iconTabs :deep(.q-tab__label) {
    font-size: var(--q-text-size-small);
    letter-spacing: 0.3px;
    text-transform: capitalize;
}

.iconStats {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text);
}

.iconGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 4px;
}

.iconCell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 10px 4px 8px;
    border-radius: 3px;
    border: 1px solid color-mix(in srgb, var(--q-text-bright) 5%, transparent);
    cursor: pointer;
    transition: all 0.15s ease;
    color: var(--q-text);
    min-width: 0;
    overflow: hidden;
}

.iconCell:hover {
    border-color: color-mix(in srgb, var(--q-accent) 30%, transparent);
    background: color-mix(in srgb, var(--q-accent) 5%, transparent);
}

.iconLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.3px;
    color: var(--q-text-bright);
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.iconLoadMore {
    display: flex;
    justify-content: center;
    padding: 8px 0;
}
</style>
`,Kfe=`<template>
    <div class="jShowcase_row jShowcase_column">

        <!-- Style variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Default" />
                <QBtn flat color="primary" label="Flat" />
                <QBtn outline color="primary" label="Outline" />
                <QBtn unelevated color="primary" label="Unelevated" />
                <QBtn push color="primary" label="Push" />
                <QBtn glossy color="primary" label="Glossy" />
            </div>
        </div>

        <!-- Style variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Variants</span>
            <div class="jShowcase_items">
                <QBtn class="ghost" label="Ghost" icon="settings" />
            </div>
        </div>


        <!-- Shapes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Shapes</span>
            <div class="jShowcase_items">
                <QBtn color="accent" label="Rounded" rounded />
                <QBtn color="accent" label="Square" square />
                <QBtn color="accent" icon="star" round />
                <QBtn color="accent" icon="rocket_launch" label="FAB" fab />
                <QBtn color="accent" icon="add" fab-mini />
            </div>
        </div>

        <!-- With icons -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Icons</span>
            <div class="jShowcase_items">
                <QBtn color="secondary" icon="flight_takeoff" label="Launch" />
                <QBtn color="secondary" label="Deploy" icon-right="send" />
                <QBtn color="secondary" icon="shield" label="Shield" icon-right="chevron_right" />
                <QBtn outline color="secondary" icon="settings" round />
            </div>
        </div>

        <!-- Colors -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Colors</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Primary" />
                <QBtn color="secondary" label="Secondary" />
                <QBtn color="accent" label="Accent" />
                <QBtn color="positive" label="Positive" />
                <QBtn color="negative" label="Negative" />
                <QBtn color="info" label="Info" />
                <QBtn color="warning" label="Warning" />
            </div>
        </div>

        <!-- Sizes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="xs" size="xs" />
                <QBtn color="primary" label="sm" size="sm" />
                <QBtn color="primary" label="md" size="md" />
                <QBtn color="primary" label="lg" size="lg" />
                <QBtn color="primary" label="xl" size="xl" />
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QBtn color="info" label="Loading" loading />
                <QBtn color="negative" label="Disabled" disable />
                <QBtn color="accent" label="Dense" dense />
                <QBtn color="secondary" icon="bolt" label="Stacked" stack />
                <QBtn color="primary" label="No caps" no-caps />
            </div>
        </div>
    </div>
</template>

<script>
import QBtnApi from '../../definitions/Quasar/QBtn.json';
import { QBtn } from 'quasar';

export default {
    name: 'ShowcaseQuasarBtn',
    components: {
        QBtn,
    },
    label: 'Quasar Btn',
    icon: 'smart_button',
    apiJson: QBtnApi,
    importName: 'QBtn',
    importFrom: 'quasar',
};
<\/script>

<style scoped>
</style>
`,Zfe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="primary" label="Actions">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection avatar><QIcon name="edit" /></QItemSection>
                            <QItemSection>Edit</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection avatar><QIcon name="content_copy" /></QItemSection>
                            <QItemSection>Duplicate</QItemSection>
                        </QItem>
                        <QSeparator />
                        <QItem clickable v-close-popup>
                            <QItemSection avatar><QIcon name="delete" /></QItemSection>
                            <QItemSection>Delete</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="secondary" icon="add" label="Create">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection>New File</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection>New Folder</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>

        <!-- Split -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Split</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="primary" icon="save" label="Save" split @click="null">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection>Save as Draft</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection>Save & Publish</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="accent" icon="share" label="Share" split @click="null">
                    <QList>
                        <QItem clickable v-close-popup>
                            <QItemSection>Copy Link</QItemSection>
                        </QItem>
                        <QItem clickable v-close-popup>
                            <QItemSection>Email</QItemSection>
                        </QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>

        <!-- Style Variants -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="primary" label="Flat" flat>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Outline" outline>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Unelevated" unelevated>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Push" push>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>

                <QBtnDropdown color="primary" label="Dense" dense>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                        <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="info" label="Loading" loading />
                <QBtnDropdown color="negative" label="Disabled" disable />
                <QBtnDropdown color="primary" label="No Icon Animation" no-icon-animation>
                    <QList>
                        <QItem clickable v-close-popup><QItemSection>Option</QItemSection></QItem>
                    </QList>
                </QBtnDropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { QBtnDropdown, QList, QItem, QItemSection, QIcon, QSeparator } from 'quasar';
import QBtnDropdownApi from '../../definitions/Quasar/QBtnDropdown.json';

export default {
    name: 'ShowcaseQuasarBtnDropdown',
    components: { QBtnDropdown, QList, QItem, QItemSection, QIcon, QSeparator },
    label: 'Quasar Btn Dropdown',
    icon: 'smart_button',
    apiJson: QBtnDropdownApi,
    importName: 'QBtnDropdown',
    importFrom: 'quasar',
};
<\/script>
`,Xfe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QBtnToggle
                    v-model="toggleValue"
                    label="Toggle me"
                    toggle-color="primary"
                    :options="[
                        { label: 'One', value: 'one' },
                        { label: 'Two', value: 'two' },
                        { label: 'Three', value: 'three' }
                    ]"
                />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Flat with Icons</span>
            <div class="jShowcase_items">
                <QBtnToggle
                    v-model="toggleValue"
                    flat
                    toggle-color="primary"
                    text-color="muted"
                    :options="[
                        { label: 'List', value: 'one', icon: 'view_list' },
                        { label: 'Grid', value: 'two', icon: 'grid_view' },
                        { label: 'Board', value: 'three', icon: 'dashboard' }
                    ]"
                />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Outline</span>
            <div class="jShowcase_items">
                <QBtnToggle
                    v-model="toggleValue"
                    label="Toggle me"
                    toggle-color="primary"
                    color="surface-0"
                    text-color="faint"
                    outline
                    :options="[
                        { label: 'One', value: 'one' },
                        { label: 'Two', value: 'two' },
                        { label: 'Three', value: 'three' }
                    ]"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { QBtnToggle } from 'quasar';
import QBtnToggleApi from '../../definitions/Quasar/QBtnToggle.json';

export default {
    name: 'ShowcaseBtnToggle',
    components: { QBtnToggle },
    apiJson: QBtnToggleApi,
    importName: 'QBtnToggle',
    importFrom: 'quasar',
    data() {
        return {
            toggleValue: 'one',
        };
    },
    label: 'Btn Toggle',
    icon: 'smart_button',
    code: null,
};
<\/script>
`,epe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Simple" @click="simple = true" />
                <QBtn color="accent" label="With Card" @click="card = true" />
                <QBtn color="secondary" label="Persistent" @click="persistent = true" />
            </div>
        </div>

        <QDialog v-model="simple">
            <QCard>
                <QCardSection>
                    <div class="text-h6">Incoming Transmission</div>
                </QCardSection>
                <QCardSection>
                    Signal detected from sector 7G. Awaiting decryption.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="primary" label="Dismiss" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="card">
            <QCard>
                <QCardSection class="row items-center">
                    <QIcon name="warning" size="28px" color="warning" class="q-mr-sm" />
                    <span class="text-h6">Confirm Action</span>
                </QCardSection>
                <QCardSection>
                    Divert auxiliary power to forward shields? This will reduce life support to minimum levels on decks 7 through 12.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn class="ghost" label="Cancel" v-close-popup />
                    <QBtn color="negative" label="Confirm" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="persistent" persistent>
            <QCard>
                <QCardSection>
                    <div class="text-h6">Authorization Required</div>
                </QCardSection>
                <QCardSection>
                    This dialog cannot be dismissed by clicking outside or pressing ESC. Enter command override code.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="accent" label="Override" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <!-- Positions -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Positions</span>
            <div class="jShowcase_items">
                <QBtn v-for="pos in positions" :key="pos" color="info" :label="pos" @click="openPositioned(pos)" />
            </div>
        </div>

        <QDialog v-model="positioned" :position="positionValue">
            <QCard>
                <QCardSection>
                    <div class="text-h6">Position: {{ positionValue }}</div>
                </QCardSection>
                <QCardSection>
                    Dialog anchored to the {{ positionValue }} of the viewport.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="info" label="Close" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <!-- Sizes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <QBtn color="warning" label="Maximized" @click="maximized = true" />
                <QBtn color="warning" label="Full Width" @click="fullWidth = true" />
                <QBtn color="negative" label="Seamless" @click="seamless = true" />
            </div>
        </div>

        <QDialog v-model="maximized" maximized>
            <QCard class="showcaseDialog_cardMax">
                <QCardSection class="row items-center">
                    <span class="text-h6">Maximized Dialog</span>
                    <QSpace />
                    <QBtn class="ghost" icon="close" v-close-popup />
                </QCardSection>
                <QCardSection>
                    This dialog fills the entire viewport.
                </QCardSection>
            </QCard>
        </QDialog>

        <QDialog v-model="fullWidth" full-width>
            <QCard>
                <QCardSection>
                    <div class="text-h6">Full Width</div>
                </QCardSection>
                <QCardSection>
                    Spans the full width of the viewport.
                </QCardSection>
                <QCardActions align="right">
                    <QBtn color="warning" label="Close" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="seamless" seamless position="bottom">
            <QCard>
                <QCardSection class="row items-center">
                    <QIcon name="info" size="24px" color="info" class="q-mr-sm" />
                    <span>Seamless — no backdrop, page remains interactive.</span>
                    <QSpace />
                    <QBtn class="ghost" icon="close" icon-size="14px" v-close-popup />
                </QCardSection>
            </QCard>
        </QDialog>

        <!-- Scroll handling -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Scroll Handling</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Scrollable Content" @click="scrollable = true" />
                <QBtn color="accent" label="Sticky Header/Footer" @click="stickyScroll = true" />
                <QBtn color="secondary" label="Long Form" @click="longForm = true" />
            </div>
        </div>

        <QDialog v-model="scrollable" style="display: block;">
            <QCard>
                <QCardSection>
                    <div class="text-h6">Ship Systems Log</div>
                </QCardSection>
                <QSeparator />
                <QCardSection class="scroll">
                    <p v-for="n in 122" :key="n">Log entry {{ n }}: Routine diagnostic of subsystem {{ String.fromCharCode(64 + n) }}. All parameters within operational tolerance. Variance from baseline: {{ (Math.random() * 2).toFixed(3) }}%. Timestamp: stardate {{ 41000 + n * 7 }}.{{ n }}.</p>
                </QCardSection>
                <QSeparator />
                <QCardActions align="right">
                    <QBtn color="primary" label="Close" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>

        <QDialog v-model="stickyScroll">
            <QCard style="min-width: 500px; max-width: 80vw;">
                <QCardSection class="row items-center q-pb-none">
                    <div class="text-h6">Crew Manifest</div>
                    <QSpace />
                    <QBtn class="ghost" icon="close" v-close-popup />
                </QCardSection>
                <QSeparator class="q-mt-sm" />
                <QCardSection style="max-height: 50vh" class="scroll">
                    <QList>
                        <QItem v-for="(officer, i) in crewList" :key="i">
                            <QItemSection avatar>
                                <QIcon :name="officer.icon" color="accent" />
                            </QItemSection>
                            <QItemSection>
                                <QItemLabel>{{ officer.name }}</QItemLabel>
                                <QItemLabel caption>{{ officer.role }}</QItemLabel>
                            </QItemSection>
                            <QItemSection side>
                                <QBadge outline :color="officer.status === 'Active' ? 'positive' : 'warning'" :label="officer.status" />
                            </QItemSection>
                        </QItem>
                    </QList>
                </QCardSection>
                <QInnerLoading :showing="isLoading">
                    <QSpinner size="50px" color="primary" />
                </QInnerLoading>
                <QSeparator />
                <QCardSection class="row justify-between items-center q-py-sm">
                    <span class="text-caption" style="color: var(--q-text-muted);">{{ crewList.length }} officers</span>
                    <QBtn class="ghost" icon="refresh" label="Toggle" @click="isLoading = !isLoading" />
                    <QBtn color="accent" icon="star" label="Acknowledge" v-close-popup />
                </QCardSection>
            </QCard>
        </QDialog>

        <QDialog v-model="longForm">
            <QCard style="min-width: 33vw; max-width: 80vw;">
                <QCardSection class="row items-center q-pb-none">
                    <div class="text-h6">Mission Parameters</div>
                    <QSpace />
                    <QBtn class="ghost" icon="close" v-close-popup />
                </QCardSection>
                <QSeparator class="q-mt-sm" />
                <QCardSection class="scroll" style="max-height: 300px;">
                    <QInput v-model="form.name" label="Mission name" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.sector" label="Target sector" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.objective" label="Primary objective" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.secondary" label="Secondary objective" outlined dense class="q-mb-sm" />
                    <QSelect v-model="form.priority" :options="['Critical', 'High', 'Standard', 'Low']" label="Priority" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.crew" label="Crew count" type="number" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.duration" label="Estimated duration (days)" type="number" outlined dense class="q-mb-sm" />
                    <QInput v-model="form.notes" label="Additional notes" type="textarea" outlined dense autogrow />
                </QCardSection>
                <QSeparator />
                <QCardActions align="right">
                    <QBtn class="ghost" label="Cancel" v-close-popup />
                    <QBtn color="secondary" label="Submit" v-close-popup />
                </QCardActions>
            </QCard>
        </QDialog>
    </div>
</template>

<script>
import { QBtn, QDialog, QCard, QCardSection, QCardActions, QIcon, QSpace, QSeparator, QList, QItem, QItemSection, QItemLabel, QBadge, QInnerLoading, QSpinner, QInput, QSelect } from 'quasar';
import QDialogApi from '../../definitions/Quasar/QDialog.json';

export default {
    name: 'ShowcaseDialog',
    label: 'Quasar Dialog',
    icon: 'picture_in_picture',
    components: { QBtn, QDialog, QCard, QCardSection, QCardActions, QIcon, QSpace, QSeparator, QList, QItem, QItemSection, QItemLabel, QBadge, QInnerLoading, QSpinner, QInput, QSelect },
    apiJson: QDialogApi,
    importName: 'QDialog',
    importFrom: 'quasar',
    data() {
        return {
            isLoading: false,

            simple: false,
            card: false,
            persistent: false,
            positioned: false,
            positionValue: 'top',
            maximized: false,
            fullWidth: false,
            seamless: false,
            scrollable: false,
            stickyScroll: false,
            longForm: false,
            positions: ['top', 'right', 'bottom', 'left'],
            form: {
                name: '', sector: '', objective: '', secondary: '',
                priority: 'Standard', crew: '', duration: '', notes: '',
            },
            crewList: [
                { name: 'Cdr. Vasquez', role: 'First Officer', icon: 'military_tech', status: 'Active' },
                { name: 'Lt. Okafor', role: 'Helm', icon: 'explore', status: 'Active' },
                { name: 'Lt. Cdr. Chen', role: 'Chief Engineer', icon: 'engineering', status: 'Active' },
                { name: 'Dr. Petrov', role: 'Chief Medical', icon: 'medical_services', status: 'Active' },
                { name: 'Ens. Nakamura', role: 'Science Officer', icon: 'science', status: 'Active' },
                { name: 'Lt. Mbeki', role: 'Tactical', icon: 'shield', status: 'Active' },
                { name: 'Lt. Johansson', role: 'Communications', icon: 'cell_tower', status: 'On Leave' },
                { name: 'Ens. Park', role: 'Navigation', icon: 'near_me', status: 'Active' },
                { name: 'Cdr. Al-Rashid', role: 'Security Chief', icon: 'security', status: 'Active' },
                { name: 'Lt. Torres', role: 'Operations', icon: 'settings', status: 'On Leave' },
            ],
        };
    },
    methods: {
        openPositioned(pos) {
            this.positionValue = pos;
            this.positioned = true;
        },
    },
};
<\/script>

<style scoped>
</style>
`,tpe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Renders the current year as a <code>&lt;span&gt;</code>. Drop it into copyright lines so you never have to hardcode the year.</p>
        </div>

        <!-- Inline usage -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Inline</span>
            <div class="jShowcase_items">
                <span class="demoText">&copy; <JCurrentYear /> Components</span>
            </div>
        </div>

        <!-- Standalone -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Standalone</span>
            <div class="jShowcase_items">
                <span class="demoText">Current year: <JCurrentYear /></span>
            </div>
        </div>
    </div>
</template>

<script>
import JCurrentYear from '../../../components/helpers/JCurrentYear.vue';

export default {
    name: 'ShowcaseJCurrentYear',
    components: { JCurrentYear },
    label: 'Current Year',
    icon: 'handyman',
    apiJson: null,
    importName: 'JCurrentYear',
    code: null,
};
<\/script>

<style scoped>
.demoText {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--q-text-muted);
}
</style>
`,npe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Round button that toggles dark/light mode via the theme store. Drop it into headers or toolbars.</p>
            <p>Accepts all <a class="jShowcase_infoLink" href="#Buttons/Btn">QBtn</a> props (e.g.
                <code @click="copy('size')">size</code>,
                <code @click="copy('color')">color</code>,
                <code @click="copy('outline')">outline</code>)
                — they pass through to the underlying button.</p>
        </div>

        <!-- Default -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default</span>
            <div class="jShowcase_items">
                <JDarkSwitcher />
            </div>
        </div>

        <!-- Sizes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <JDarkSwitcher size="xs" />
                <JDarkSwitcher size="sm" />
                <JDarkSwitcher size="md" />
                <JDarkSwitcher size="lg" />
            </div>
        </div>

        <!-- Colors -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Colors</span>
            <div class="jShowcase_items">
                <JDarkSwitcher color="primary" />
                <JDarkSwitcher color="secondary" :round="false" label="Toggle" />
                <JDarkSwitcher color="info" />
                <JDarkSwitcher color="negative" />
            </div>
        </div>

        <!-- Outline -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Outline</span>
            <div class="jShowcase_items">
                <JDarkSwitcher outline />
                <JDarkSwitcher outline color="primary" />
                <JDarkSwitcher outline color="accent" />
            </div>
        </div>

        <!-- Not flat -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Raised (flat=false)</span>
            <div class="jShowcase_items">
                <JDarkSwitcher :flat="false" />
                <JDarkSwitcher :flat="false" color="primary" />
                <JDarkSwitcher :flat="false" color="accent" />
            </div>
        </div>

        <!-- Glossy -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Glossy</span>
            <div class="jShowcase_items">
                <JDarkSwitcher glossy :flat="false" color="primary" />
                <JDarkSwitcher glossy :flat="false" color="accent" />
            </div>
        </div>
    </div>
</template>

<script>
import JDarkSwitcher from '../../../components/helpers/JDarkSwitcher.vue';

export default {
    name: 'ShowcaseJDarkSwitcher',
    components: { JDarkSwitcher },
    label: 'Dark Switcher',
    icon: 'dark_mode',
    apiJson: null,
    importName: 'JDarkSwitcher',
    inject: ['showcaseCopy'],
    code: null,
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
<\/script>
`,ope=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Selectable List</span>
            <QList bordered separator>
                <QItem
                    v-for="item in missions"
                    :key="item.id"
                    clickable
                    v-ripple
                    :active="selected === item.id"
                    :style="selected === item.id ? 'background: color-mix(in srgb, var(--q-accent) 10%, transparent)' : ''"
                    @click="selected = item.id"
                >
                    <QItemSection avatar>
                        <QIcon :name="item.icon" :color="selected === item.id ? 'accent' : 'grey'" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel :class="{ 'text-weight-bold': selected === item.id }">{{ item.name }}</QItemLabel>
                        <QItemLabel caption lines="1">{{ item.desc }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QIcon v-if="selected === item.id" name="radio_button_checked" color="accent" />
                        <QIcon v-else name="radio_button_unchecked" color="grey-7" />
                    </QItemSection>
                </QItem>
            </QList>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Multi-line Items</span>
            <QList bordered style="background: transparent; border-color: var(--q-surface-border); border-radius: 4px;">
                <QItem v-for="msg in messages" :key="msg.from" clickable v-ripple>
                    <QItemSection avatar top>
                        <QAvatar color="primary" text-color="white">{{ msg.from[0] }}</QAvatar>
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel overline>{{ msg.from }}</QItemLabel>
                        <QItemLabel>{{ msg.subject }}</QItemLabel>
                        <QItemLabel caption lines="2">{{ msg.body }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side top>
                        <QItemLabel caption>{{ msg.time }}</QItemLabel>
                        <QIcon v-if="msg.starred" name="star" color="warning" size="18px" class="q-mt-xs" />
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QItemSection, QItemLabel, QIcon, QAvatar } from 'quasar';

export default {
    name: 'ShowcaseActiveList',
    components: { QList, QItem, QItemSection, QItemLabel, QIcon, QAvatar },
    label: 'Selectable & Multi-line',
    icon: 'list',
    importName: 'QList',
    importFrom: 'quasar',
    order: 3,
    data() {
        return {
            selected: 'recon',
            missions: [
                { id: 'recon', name: 'Recon Sweep', icon: 'radar', desc: 'Deep space reconnaissance of uncharted sector' },
                { id: 'escort', name: 'Convoy Escort', icon: 'local_shipping', desc: 'Protect supply convoy through hostile corridor' },
                { id: 'rescue', name: 'Search & Rescue', icon: 'sos', desc: 'Locate missing vessel near asteroid belt' },
                { id: 'survey', name: 'Planetary Survey', icon: 'public', desc: 'Catalog resources on newly discovered exoplanet' },
            ],
            messages: [
                {
                    from: 'Admiral Zhao',
                    subject: 'Priority Alpha',
                    body: 'Fleet command has issued new coordinates. Rendezvous at waypoint Echo-7 by 0600. Full tactical readiness required.',
                    time: '14:32',
                    starred: true,
                },
                {
                    from: 'Engineering Bay',
                    subject: 'Maintenance Complete',
                    body: 'Port-side thruster realignment finished ahead of schedule. All subsystems passed diagnostics. Ready for departure.',
                    time: '12:15',
                    starred: false,
                },
                {
                    from: 'Science Div.',
                    subject: 'Anomaly Detected',
                    body: 'Unusual electromagnetic signature detected at bearing 270 mark 15. Recommend investigation when schedule permits.',
                    time: '09:48',
                    starred: true,
                },
            ],
        };
    },
};
<\/script>
`,ape=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic List</span>
            <QList bordered separator>
                <QItem clickable v-ripple>
                    <QItemSection avatar>
                        <QIcon name="rocket_launch" color="primary" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Launch Sequence</QItemLabel>
                        <QItemLabel caption>Initiate main thruster ignition</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QIcon name="chevron_right" color="grey" />
                    </QItemSection>
                </QItem>

                <QItem clickable v-ripple>
                    <QItemSection avatar>
                        <QIcon name="shield" color="positive" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Shield Matrix</QItemLabel>
                        <QItemLabel caption>Deflector array at 98% capacity</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QBadge color="positive" label="ONLINE" />
                    </QItemSection>
                </QItem>

                <QItem clickable v-ripple>
                    <QItemSection avatar>
                        <QIcon name="sensors" color="warning" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Long Range Sensors</QItemLabel>
                        <QItemLabel caption>Scanning sector 7-G for anomalies</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QBadge color="warning" label="SCANNING" />
                    </QItemSection>
                </QItem>

                <QItem clickable v-ripple disable>
                    <QItemSection avatar>
                        <QIcon name="bolt" color="grey" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Warp Drive</QItemLabel>
                        <QItemLabel caption>Cooldown in progress — 12 min remaining</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QBadge color="negative" label="OFFLINE" />
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QItemSection, QItemLabel, QIcon, QBadge } from 'quasar';
import QListApi from '../../definitions/Quasar/QList.json';
import QItemApi from '../../definitions/Quasar/QItem.json';
import QItemSectionApi from '../../definitions/Quasar/QItemSection.json';
import QItemLabelApi from '../../definitions/Quasar/QItemLabel.json';

export default {
    name: 'ShowcaseBasicList',
    components: { QList, QItem, QItemSection, QItemLabel, QIcon, QBadge },
    label: 'Basic List',
    icon: 'list',
    order: 1,
    apiJson: [
        { name: 'QList', json: QListApi },
        { name: 'QItem', json: QItemApi },
        { name: 'QItemSection', json: QItemSectionApi },
        { name: 'QItemLabel', json: QItemLabelApi },
    ],
    importName: 'QList',
    importFrom: 'quasar',
};
<\/script>
`,ipe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Dense List</span>
            <QList dense bordered separator>
                <QItem v-for="item in crewLog" :key="item.name" clickable v-ripple>
                    <QItemSection avatar>
                        <QAvatar size="18px" :color="item.color" text-color="white" :icon="item.icon" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>{{ item.name }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side>
                        <QItemLabel caption>{{ item.role }}</QItemLabel>
                    </QItemSection>
                </QItem>
            </QList>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Dense with Padding</span>
            <QList dense bordered padding>
                <QItemLabel header class="jShowcase_title">Navigation Log</QItemLabel>
                <QItem v-for="(entry, i) in navLog" :key="i" clickable v-ripple>
                    <QItemSection>
                        <QItemLabel>{{ entry.coord }}</QItemLabel>
                        <QItemLabel caption>{{ entry.note }}</QItemLabel>
                    </QItemSection>
                    <QItemSection side top>
                        <QItemLabel caption>{{ entry.time }}</QItemLabel>
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QList, QItem, QItemSection, QItemLabel, QAvatar } from 'quasar';

export default {
    name: 'ShowcaseDenseList',
    components: { QList, QItem, QItemSection, QItemLabel, QAvatar },
    label: 'Dense List',
    icon: 'list',
    importName: 'QList',
    importFrom: 'quasar',
    order: 2,
    data() {
        return {
            crewLog: [
                { name: 'Cdr. Voss', role: 'Captain', icon: 'military_tech', color: 'primary' },
                { name: 'Lt. Nakamura', role: 'Pilot', icon: 'flight', color: 'accent' },
                { name: 'Dr. Okafor', role: 'Medical', icon: 'healing', color: 'positive' },
                { name: 'Eng. Petrov', role: 'Engineer', icon: 'build', color: 'warning' },
                { name: 'Spc. Reyes', role: 'Science', icon: 'science', color: 'secondary' },
            ],
            navLog: [
                { coord: 'α Centauri B-3', note: 'Orbital insertion complete', time: '08:12' },
                { coord: 'Sector 9-Kilo', note: 'Asteroid field traversal', time: '06:45' },
                { coord: 'Relay Station 7', note: 'Fuel resupply', time: '03:22' },
                { coord: 'Nebula NGC-1277', note: 'Sensor sweep logged', time: '01:10' },
            ],
        };
    },
};
<\/script>
`,rpe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <!-- Basic with Submenus -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic with Submenus</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="File">
                    <QMenu>
                        <QList dense style="min-width: 150px">
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="folder_open" /></QItemSection>
                                <QItemSection>Open...</QItemSection>
                            </QItem>
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="note_add" /></QItemSection>
                                <QItemSection>New File</QItemSection>
                            </QItem>
                            <QSeparator />
                            <QItem clickable>
                                <QItemSection avatar><QIcon name="ios_share" /></QItemSection>
                                <QItemSection>Export As</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>PDF</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>CSV</QItemSection>
                                        </QItem>
                                        <QItem clickable>
                                            <QItemSection>Image</QItemSection>
                                            <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                            <QMenu auto-close anchor="top end" self="top start">
                                                <QList dense>
                                                    <QItem clickable>
                                                        <QItemSection>PNG</QItemSection>
                                                    </QItem>
                                                    <QItem clickable>
                                                        <QItemSection>JPEG</QItemSection>
                                                    </QItem>
                                                    <QItem clickable>
                                                        <QItemSection>SVG</QItemSection>
                                                    </QItem>
                                                </QList>
                                            </QMenu>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                            <QSeparator />
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="close" /></QItemSection>
                                <QItemSection>Quit</QItemSection>
                            </QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="secondary" icon="more_vert" round flat>
                    <QMenu>
                        <QList dense style="min-width: 140px">
                            <QItem clickable v-close-popup>
                                <QItemSection>Profile</QItemSection>
                            </QItem>
                            <QItem clickable>
                                <QItemSection>Notifications</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Email</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Push</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>SMS</QItemSection>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                            <QSeparator />
                            <QItem clickable v-close-popup>
                                <QItemSection>Logout</QItemSection>
                            </QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Context Menu with Submenus -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Context Menu</span>
            <div class="jShowcase_items">
                <div class="contextTarget">
                    Right-click here
                    <QMenu context-menu>
                        <QList dense style="min-width: 150px">
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="content_cut" /></QItemSection>
                                <QItemSection>Cut</QItemSection>
                            </QItem>
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="content_copy" /></QItemSection>
                                <QItemSection>Copy</QItemSection>
                            </QItem>
                            <QItem clickable v-close-popup>
                                <QItemSection avatar><QIcon name="content_paste" /></QItemSection>
                                <QItemSection>Paste</QItemSection>
                            </QItem>
                            <QSeparator />
                            <QItem clickable>
                                <QItemSection avatar><QIcon name="sort" /></QItemSection>
                                <QItemSection>Sort By</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Name</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Date Modified</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Size</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Type</QItemSection>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                            <QItem clickable>
                                <QItemSection avatar><QIcon name="visibility" /></QItemSection>
                                <QItemSection>View</QItemSection>
                                <QItemSection side><QIcon name="keyboard_arrow_right" /></QItemSection>
                                <QMenu anchor="top end" self="top start">
                                    <QList dense>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Grid</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>List</QItemSection>
                                        </QItem>
                                        <QItem clickable v-close-popup>
                                            <QItemSection>Compact</QItemSection>
                                        </QItem>
                                    </QList>
                                </QMenu>
                            </QItem>
                        </QList>
                    </QMenu>
                </div>
            </div>
        </div>

        <!-- Positioning -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Positioning</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Bottom Left">
                    <QMenu anchor="bottom left" self="top left">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="accent" label="Top Right">
                    <QMenu anchor="top right" self="bottom right">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="secondary" label="Fit Width" style="min-width: 160px">
                    <QMenu fit>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="info" label="Cover">
                    <QMenu cover>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Behavior -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Behavior</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Auto Close">
                    <QMenu auto-close>
                        <QList>
                            <QItem clickable><QItemSection>Click anywhere to close</QItemSection></QItem>
                            <QItem clickable><QItemSection>No v-close-popup needed</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="negative" label="Persistent">
                    <QMenu persistent>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Must click item to close</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>ESC won't close either</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="accent" label="Touch Position">
                    <QMenu touch-position>
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Opens at click position</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Not anchored to button</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Transitions -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Transitions</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Slide Down">
                    <QMenu transition-show="slide-down" transition-hide="slide-up">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="secondary" label="Scale">
                    <QMenu transition-show="scale" transition-hide="scale">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>

                <QBtn color="accent" label="Jump Down">
                    <QMenu transition-show="jump-down" transition-hide="jump-up">
                        <QList>
                            <QItem clickable v-close-popup><QItemSection>Option A</QItemSection></QItem>
                            <QItem clickable v-close-popup><QItemSection>Option B</QItemSection></QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>

        <!-- Max Height / Scrollable -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Scrollable</span>
            <div class="jShowcase_items">
                <QBtn color="primary" label="Max Height 200px">
                    <QMenu max-height="200px">
                        <QList>
                            <QItem v-for="n in 12" :key="n" clickable v-close-popup>
                                <QItemSection>Item {{ n }}</QItemSection>
                            </QItem>
                        </QList>
                    </QMenu>
                </QBtn>
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QMenu, QList, QItem, QItemSection, QIcon, QSeparator } from 'quasar';
import QMenuApi from '../../definitions/Quasar/QMenu.json';

export default {
    name: 'ShowcaseMenu',
    components: { QBtn, QMenu, QList, QItem, QItemSection, QIcon, QSeparator },
    label: 'Menu',
    icon: 'menu',
    apiJson: QMenuApi,
    importName: 'QMenu',
    importFrom: 'quasar',
};
<\/script>

<style scoped>
.contextTarget {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 80px;
    border: 1px dashed var(--q-primary);
    border-radius: 4px;
    color: var(--q-text-muted);
    font-family: var(--font-mono);
    font-size: 12px;
    user-select: none;
}
</style>
`,spe=`<template>
<div>
<QBanner class="bg-surface-3 text-bright" rounded>
    <template #avatar>
        <QIcon name="signal_wifi_off" color="secondary" size="sm" />
    </template>
    You have lost connection to the internet.
    This app is offline.
    <template #action>
        <QBtn flat color="info" label="Turn on Wifi" outline />
        <QBtn flat color="secondary" label="Dismiss" />
    </template>
</QBanner>


<QBanner inline-actions dense class="bg-indigo-7 text-white q-mt-sm">
    You have lost connection to the internet. This app is offline.

    <template v-slot:avatar>
        <img
        src="https://cdn.quasar.dev/img/mountains.jpg"
        style="height: 64px"
        />
    </template>
    <template v-slot:action>
        <QBtn flat color="primary" label="Turn ON Wifi" />
    </template>
</QBanner>
</div>
</template>

<script>
import { QBanner, QIcon, QBtn } from 'quasar';
import QBannerApi from '../../definitions/Quasar/QBanner.json';

export default {
    name: 'ShowcaseQuasarBanner',
    components: { QBanner, QIcon, QBtn },
    label: 'Quasar Banner',
    icon: 'dashboard',
    apiJson: QBannerApi,
    importName: 'QBanner',
    importFrom: 'quasar',
};
<\/script>

<style scoped>
</style>
`,lpe=`<template>
	<JPanel 
        title="SAMPLE PANEL" 
		accent
        icon="dashboard" 
        icon-color="var(--q-primary)">
		<div class="q-ma-md">
			Panel content area
		</div>
	</JPanel>
</template>

<script>
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcaseBasicPanel',
    components: { JPanel },
    label: 'Basic Panel',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
<\/script>
`,cpe=`<template>
    <div class="jShowcase_row">
        <QCard class="showcaseCard" flat bordered>
            <QCardSection>
                <div class="text-h6">Starship Registry</div>
                <div class="text-subtitle2">NCC-1701 — USS Enterprise</div>
            </QCardSection>

            <QCardSection>
                A Constitution-class vessel, flagship of the United Federation
                of Planets. Currently assigned to deep space exploration.
            </QCardSection>

            <QCardActions align="right">
                <QBtn flat color="primary" label="Details" />
                <QBtn flat color="accent" label="Hail" />
            </QCardActions>
        </QCard>
    </div>
</template>

<script>
import { QCard, QCardSection, QCardActions, QBtn } from 'quasar';
import QCardApi from '../../definitions/Quasar/QCard.json';
import QCardSectionApi from '../../definitions/Quasar/QCardSection.json';
import QCardActionsApi from '../../definitions/Quasar/QCardActions.json';

export default {
    name: 'ShowcaseQuasarCard',
    components: { QCard, QCardSection, QCardActions, QBtn },
    label: 'Quasar Card',
    icon: 'dashboard',
    apiJson: [
        { name: 'QCard', json: QCardApi },
        { name: 'QCardSection', json: QCardSectionApi },
        { name: 'QCardActions', json: QCardActionsApi },
    ],
    importName: 'QCard',
    importFrom: 'quasar',
};
<\/script>
`,upe=`<template>
    <JPanel
        title="CONTROLS"
        icon="tune"
        icon-color="var(--q-warning)"
    >
        <template #header-action>
            <QBtn class="ghost" icon="favorite_border" label="Act" size="xs" />
        </template>
		<div class="q-ma-md">Panel content area with default gradient background.</div>
    </JPanel>
</template>

<script>
import { QBtn } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithAction',
    components: { QBtn, JPanel },
    label: 'Panel With Header Action',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
<\/script>
`,dpe=`<template>
    <JPanel
        title="DATA PANEL"
        icon="analytics"
        icon-color="var(--q-info)"
        footer-text="Last updated: just now"
    >
        <div class="q-ma-md">Panel content area with default gradient background.</div>
        <template #footer>
            <QBtn class="ghost" icon="refresh" size="sm" label="Refresh" />
        </template>
    </JPanel>
</template>

<script>
import { QBtn } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithFooter',
    components: { QBtn, JPanel },
    label: 'Panel With Footer',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: \`<JPanel
  title="DATA PANEL"
  icon="analytics"
  icon-color="var(--q-info)"
  footer-text="Last updated: just now"
>
  <div>Panel content here.</div>

  <template #footer>
    <QBtn class="ghost"
          icon="refresh">
      Refresh
    </QBtn>
  </template>
</JPanel>\`,
};
<\/script>
`,fpe=`<template>
    <JPanel
        icon-color="var(--q-info)"
        footer-text="Last updated: now"
        :accent="selectedAccent"
    >
        <template #footer>
            <div class="row items-center q-gutter-md justify-end">
                <QCheckbox v-model="inlineLabel" label="Inline" color="primary" />
                <QSelect
                    v-model="selectedAccent"
                    :options="accentOptions"
                    label="Accent"
                    dense
                    outlined
                    emit-value
                    map-options
                    style="min-width: 140px;"
                />
            </div>
        </template>
        <template #header>
        <QTabs v-model="tab" dense no-caps 
            active-color="accent" indicator-color="accent" 
            :inline-label="inlineLabel"
            class="q-mt-sm">
            <QTab name="overview" icon="dashboard" label="Overview" />
            <QTab name="systems" icon="memory" label="Systems" />
            <QTab name="crew" icon="groups" label="Crew" />
            <QTab name="logs" icon="description" label="Logs" alert="warning" />
        </QTabs>
        </template>
        <QTabPanels v-model="tab" 
          animated 
          transition-prev="fade"
          transition-next="fade">
            <QTabPanel name="overview">
                <div class="text-h6">Overview</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
            <QTabPanel name="systems">
                <div class="text-h6">Systems</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
            <QTabPanel name="crew">
                <div class="text-h6">Crew</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
            <QTabPanel name="logs"> 
            <div class="text-h6">Logs</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </QTabPanel>
        </QTabPanels>
    </JPanel>
</template>

<script>
import { QCheckbox, QSelect, QTabs, QTab, QTabPanels, QTabPanel } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithTabs',
    order: 1,
    components: { JPanel, QCheckbox, QSelect, QTabs, QTab, QTabPanels, QTabPanel },
    data: () => ({
        tab: 'overview',
        inlineLabel: false,
        selectedAccent: false,
        accentOptions: [
            { label: 'false', value: false },
            { label: 'true', value: true },
            { label: 'header', value: 'header' },
        ],
    }),
    label: 'Panel with Tabs',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
<\/script>
`,ppe=`<template>
    <div class="jShowcase_row showcaseVertical">
        <QCheckbox v-model="nav" label="Navigation" color="primary" />
        <QCheckbox v-model="comms" label="Communications" color="accent" />
        <QCheckbox v-model="life" label="Life support" color="positive" />
        <QCheckbox :model-value="true" label="Locked system" color="info" disable />
        <QCheckbox v-model="indet" label="Indeterminate" color="secondary" toggle-indeterminate />
    </div>
</template>

<script>
import { QCheckbox } from 'quasar';
import QCheckboxApi from '../../definitions/Quasar/QCheckbox.json';

export default {
    name: 'ShowcaseQuasarCheckbox',
    components: { QCheckbox },
    label: 'Quasar Checkbox',
    icon: 'edit_note',
    apiJson: QCheckboxApi,
    importName: 'QCheckbox',
    importFrom: 'quasar',
    data() {
        return {
            nav: true,
            comms: false,
            life: true,
            indet: null,
        };
    },
};
<\/script>

<style scoped>
.showcaseVertical {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 4px !important;
}
</style>
`,mpe=`<template>
	<div class="jShowcase_row jShowcase_column">
		<div class="jShowcase_group">
			<span class="jShowcase_title">Basic</span>
			<div class="jShowcase_items">
				<QDate v-model="basic" color="primary" />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Landscape + Today button</span>
			<div class="jShowcase_items">
				<QDate v-model="landscape" color="secondary" landscape today-btn />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Multiple selection</span>
			<div class="jShowcase_items">
				<QDate v-model="multi" color="accent" multiple />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Range selection</span>
			<div class="jShowcase_items">
				<QDate v-model="rangeVal" color="positive" range />
			</div>
		</div>

		<div class="jShowcase_group">
			<span class="jShowcase_title">Minimal (no header)</span>
			<div class="jShowcase_items">
				<QDate v-model="minimal" color="info" minimal />
			</div>
		</div>
	</div>
</template>

<script>
import { QDate } from 'quasar';
import QDateApi from '../../definitions/Quasar/QDate.json';

export default {
	name: 'ShowcaseQuasarDate',
	components: { QDate },
	label: 'Quasar Date',
	icon: 'calendar_today',
	apiJson: QDateApi,
	importName: 'QDate',
	importFrom: 'quasar',
	data() {
		return {
			basic: '2026/04/16',
			landscape: '2026/04/16',
			multi: ['2026/04/10', '2026/04/15', '2026/04/20'],
			rangeVal: { from: '2026/04/10', to: '2026/04/18' },
			minimal: '2026/04/16',
		};
	},
};
<\/script>
`,hpe=`<template>
    <div class="jShowcase_row jShowcase_column showcaseInput">
        <!-- Basic styles -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Styles</span>
            <div class="jShowcase_items">
                <QInput v-model="basic" label="Default" color="primary" class="showcaseInput_field" />
                <QInput v-model="outlined" label="Outlined" color="primary" outlined class="showcaseInput_field" />
                <QInput v-model="filled" label="Filled" color="primary" filled class="showcaseInput_field" />
                <QInput v-model="standout" label="Standout" color="primary" standout class="showcaseInput_field" />
            </div>
        </div>

        <!-- Shapes -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Shapes</span>
            <div class="jShowcase_items">
                <QInput v-model="roundedVal" label="Rounded" color="accent" rounded outlined class="showcaseInput_field" />
                <QInput v-model="squareVal" label="Square" color="accent" square outlined class="showcaseInput_field" />
                <QInput v-model="denseVal" label="Dense" color="accent" dense outlined class="showcaseInput_field" />
                <QInput v-model="borderlessVal" label="Borderless" color="accent" borderless class="showcaseInput_field" />
            </div>
        </div>

        <!-- With decorations -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Decorations</span>
            <div class="jShowcase_items">
                <QInput v-model="search" label="Search" color="secondary" outlined class="showcaseInput_field">
                    <template #prepend><QIcon name="search" /></template>
                </QInput>
                <QInput v-model="credits" label="Credits" color="secondary" outlined prefix="₡" suffix=".00" class="showcaseInput_field" />
                <QInput v-model="clearableVal" label="Clearable" color="secondary" outlined clearable class="showcaseInput_field" />
                <QInput v-model="password" label="Password" :type="showPwd ? 'text' : 'password'" color="secondary" outlined class="showcaseInput_field">
                    <template #append>
                        <QIcon :name="showPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showPwd = !showPwd" />
                    </template>
                </QInput>
            </div>
        </div>

        <!-- Hints & counter -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Hints &amp; Counter</span>
            <div class="jShowcase_items">
                <QInput v-model="hinted" label="With hint" hint="Enter callsign" color="info" outlined class="showcaseInput_field" />
                <QInput v-model="counted" label="With counter" color="info" outlined counter :maxlength="20" class="showcaseInput_field" />
            </div>
        </div>

        <!-- Textarea -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Textarea</span>
            <div class="jShowcase_items">
                <QInput v-model="textarea" label="Ship log" type="textarea" color="accent" outlined class="showcaseInput_field showcaseInput_fieldWide" />
                <QInput v-model="autogrow" label="Autogrow" autogrow color="accent" outlined class="showcaseInput_field showcaseInput_fieldWide" />
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QInput model-value="Locked" label="Disabled" color="negative" disable outlined class="showcaseInput_field" />
                <QInput model-value="Read only" label="Readonly" color="warning" readonly outlined class="showcaseInput_field" />
                <QInput model-value="" label="Loading" color="accent" loading outlined class="showcaseInput_field" />
            </div>
        </div>
    </div>
</template>

<script>
import { QInput, QIcon } from 'quasar';
import QInputApi from '../../definitions/Quasar/QInput.json';

export default {
    name: 'ShowcaseQuasarInput',
    components: { QInput, QIcon },
    label: 'Quasar Input',
    icon: 'edit_note',
    apiJson: QInputApi,
    importName: 'QInput',
    importFrom: 'quasar',
    data() {
        return {
            basic: 'NCC-1701',
            outlined: '',
            filled: '',
            standout: '',
            roundedVal: '',
            squareVal: '',
            denseVal: '',
            borderlessVal: 'Borderless text',
            search: '',
            credits: '500',
            clearableVal: 'Clear me',
            password: 'secret',
            showPwd: false,
            hinted: '',
            counted: '',
            textarea: 'Captain\\'s log, stardate 41153.7.',
            autogrow: '',
        };
    },
};
<\/script>

<style scoped>
.showcaseInput :deep(.jShowcase_items) {
    align-items: flex-start;
    gap: 12px;
}

.showcaseInput_field {
    min-width: 180px;
    flex: 1;
    max-width: 240px;
}

.showcaseInput_fieldWide {
    max-width: 400px;
}
</style>
`,gpe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items showcaseVertical">
                <QRadio v-model="selected" val="shields" label="Shields" color="primary" />
                <QRadio v-model="selected" val="weapons" label="Weapons" color="accent" />
                <QRadio v-model="selected" val="engines" label="Engines" color="secondary" />
                <QRadio v-model="selected" val="offline" label="Offline" color="negative" disable />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">With QItem</span>
            <QList>
                <QItem tag="label" v-ripple>
                    <QItemSection avatar>
                        <QRadio v-model="listSelected" val="shields" color="primary" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Shields</QItemLabel>
                        <QItemLabel caption>Deflector array protection</QItemLabel>
                    </QItemSection>
                </QItem>

                <QItem tag="label" v-ripple>
                    <QItemSection avatar>
                        <QRadio v-model="listSelected" val="weapons" color="accent" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Weapons</QItemLabel>
                        <QItemLabel caption>Phaser banks and torpedoes</QItemLabel>
                    </QItemSection>
                </QItem>

                <QItem tag="label" v-ripple>
                    <QItemSection avatar>
                        <QRadio v-model="listSelected" val="engines" color="secondary" />
                    </QItemSection>
                    <QItemSection>
                        <QItemLabel>Engines</QItemLabel>
                        <QItemLabel caption>Main thruster control</QItemLabel>
                    </QItemSection>
                </QItem>
            </QList>
        </div>
    </div>
</template>

<script>
import { QRadio, QList, QItem, QItemSection, QItemLabel } from 'quasar';
import QRadioApi from '../../definitions/Quasar/QRadio.json';

export default {
    name: 'ShowcaseQuasarRadio',
    components: { QRadio, QList, QItem, QItemSection, QItemLabel },
    label: 'Quasar Radio',
    icon: 'edit_note',
    apiJson: QRadioApi,
    importName: 'QRadio',
    importFrom: 'quasar',
    data() {
        return {
            selected: 'shields',
            listSelected: 'shields',
        };
    },
};
<\/script>

<style scoped>
.showcaseVertical {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 4px !important;
}
</style>
`,vpe=`<template>
    <div class="jShowcase_row showcaseVertical">
        <div class="ratingRow">
            <span class="ratingLabel">Default</span>
            <QRating v-model="basic" color="primary" />
        </div>
        <div class="ratingRow">
            <span class="ratingLabel">Custom icon</span>
            <QRating v-model="hearts" icon="favorite_border" icon-selected="favorite" color="negative" />
        </div>
        <div class="ratingRow">
            <span class="ratingLabel">Per-icon color</span>
            <QRating v-model="colorful" :color="['negative', 'warning', 'warning', 'positive', 'positive']" no-dimming />
        </div>
        <div class="ratingRow">
            <span class="ratingLabel">Large / readonly</span>
            <QRating :model-value="4" size="sm" color="secondary" readonly />
        </div>
    </div>
</template>

<script>
import { QRating } from 'quasar';
import QRatingApi from '../../definitions/Quasar/QRating.json';

export default {
    name: 'ShowcaseQuasarRating',
    components: { QRating },
    label: 'Quasar Rating',
    icon: 'edit_note',
    apiJson: QRatingApi,
    importName: 'QRating',
    importFrom: 'quasar',
    data() {
        return {
            basic: 3,
            hearts: 4,
            colorful: 3,
        };
    },
};
<\/script>

<style scoped>
.showcaseVertical {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 10px !important;
}

.ratingRow {
    display: flex;
    align-items: center;
    gap: 12px;
}

.ratingLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text-faint);
    min-width: 90px;
}
</style>
`,bpe=`<template>
    <div class="jShowcase_row jShowcase_column showcaseSelect">
        <!-- Basic -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="basic"
                    :options="shipSystems"
                    label="Ship system"
                    color="primary"
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="basicOutlined"
                    :options="shipSystems"
                    label="Outlined"
                    color="primary"
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="basicFilled"
                    :options="shipSystems"
                    label="Filled"
                    color="primary"
                    filled
                    class="showcaseSelect_field"
                />
            </div>
        </div>

        <!-- Multiple with chips -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Multiple + Chips</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="crew"
                    :options="crewOptions"
                    label="Assign crew"
                    color="accent"
                    multiple
                    use-chips
                    outlined
                    class="showcaseSelect_field showcaseSelect_fieldWide"
                />
            </div>
        </div>

        <!-- Object options with emit-value -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Object Options</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="sector"
                    :options="sectorOptions"
                    label="Destination sector"
                    color="secondary"
                    emit-value
                    map-options
                    outlined
                    class="showcaseSelect_field showcaseSelect_fieldWide"
                />
            </div>
        </div>

        <!-- Dense + Rounded + Clearable -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <QSelect
                    v-model="dense"
                    :options="shipSystems"
                    label="Dense"
                    color="info"
                    dense
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="rounded"
                    :options="shipSystems"
                    label="Rounded"
                    color="info"
                    rounded
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    v-model="clearable"
                    :options="shipSystems"
                    label="Clearable"
                    color="info"
                    clearable
                    outlined
                    class="showcaseSelect_field"
                />
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QSelect
                    :model-value="'Engines'"
                    :options="shipSystems"
                    label="Disabled"
                    color="negative"
                    disable
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    :model-value="'Shields'"
                    :options="shipSystems"
                    label="Readonly"
                    color="warning"
                    readonly
                    outlined
                    class="showcaseSelect_field"
                />
                <QSelect
                    :options="[]"
                    label="Loading"
                    color="accent"
                    loading
                    outlined
                    class="showcaseSelect_field"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { QSelect } from 'quasar';
import QSelectApi from '../../definitions/Quasar/QSelect.json';

export default {
    name: 'ShowcaseQuasarSelect',
    components: { QSelect },
    label: 'Quasar Select',
    icon: 'edit_note',
    apiJson: QSelectApi,
    importName: 'QSelect',
    importFrom: 'quasar',
    data() {
        return {
            basic: 'Shields',
            basicOutlined: null,
            basicFilled: null,
            crew: ['Helm', 'Tactical'],
            sector: 'alpha',
            dense: null,
            rounded: null,
            clearable: 'Weapons',
            shipSystems: ['Shields', 'Weapons', 'Engines', 'Sensors', 'Communications', 'Life support'],
            crewOptions: ['Helm', 'Tactical', 'Science', 'Engineering', 'Medical', 'Operations'],
            sectorOptions: [
                { label: 'Alpha Quadrant', value: 'alpha' },
                { label: 'Beta Quadrant', value: 'beta' },
                { label: 'Gamma Quadrant', value: 'gamma' },
                { label: 'Delta Quadrant', value: 'delta', disable: true },
            ],
        };
    },
};
<\/script>

<style scoped>
.showcaseSelect :deep(.jShowcase_items) {
    align-items: flex-start;
    gap: 12px;
}

.showcaseSelect_field {
    min-width: 180px;
    flex: 1;
    max-width: 240px;
}

.showcaseSelect_fieldWide {
    max-width: 400px;
}
</style>
`,_pe=`<template>
    <div class="showcaseSliders">
        <div class="sliderItem">
            <span class="sliderLabel">Basic</span>
            <QSlider v-model="basic" color="primary" />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">With label</span>
            <QSlider v-model="labeled" color="accent" label label-always />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Stepped</span>
            <QSlider v-model="stepped" color="secondary" :min="0" :max="50" :step="10" snap markers label />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Disabled</span>
            <QSlider :model-value="40" color="info" disable />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Range</span>
            <QRange v-model="range" color="primary" :min="0" :max="100" label />
        </div>
        <div class="sliderItem">
            <span class="sliderLabel">Range stepped</span>
            <QRange v-model="rangeStepped" color="accent" :min="0" :max="100" :step="10" snap markers label />
        </div>
    </div>
</template>

<script>
import { QSlider, QRange } from 'quasar';
import QSliderApi from '../../definitions/Quasar/QSlider.json';
import QRangeApi from '../../definitions/Quasar/QRange.json';

export default {
    name: 'ShowcaseQuasarSlider',
    components: { QSlider, QRange },
    label: 'Slider / Range',
    icon: 'edit_note',
    apiJson: [
        { name: 'QSlider', json: QSliderApi },
        { name: 'QRange', json: QRangeApi },
    ],
    importName: ['QSlider', 'QRange'],
    importFrom: 'quasar',
    data() {
        return {
            basic: 60,
            labeled: 35,
            stepped: 20,
            range: { min: 20, max: 70 },
            rangeStepped: { min: 30, max: 80 },
        };
    },
};
<\/script>

<style scoped>
.showcaseSliders {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}

.sliderItem {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.sliderLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 1px;
    color: var(--q-text-faint);
}
</style>
`,ype=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Basic</span>
            <div class="jShowcase_items">
                <QTime v-model="basic" color="primary" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">24h format, landscape</span>
            <div class="jShowcase_items">
                <QTime v-model="h24" color="secondary" format24h landscape />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">With seconds + Now button</span>
            <div class="jShowcase_items">
                <QTime v-model="withSec" color="accent" with-seconds now-btn />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Readonly</span>
            <div class="jShowcase_items">
                <QTime model-value="14:30" color="info" readonly />
            </div>
        </div>
    </div>
</template>

<script>
import { QTime } from 'quasar';
import QTimeApi from '../../definitions/Quasar/QTime.json';

export default {
    name: 'ShowcaseQuasarTime',
    components: { QTime },
    label: 'Quasar Time',
    icon: 'schedule',
    apiJson: QTimeApi,
    importName: 'QTime',
    importFrom: 'quasar',
    data() {
        return {
            basic: '10:30',
            h24: '18:45',
            withSec: '09:15:30',
        };
    },
};
<\/script>
`,wpe=`<template>
    <div class="jShowcase_row showcaseToggles">
        <QToggle v-model="basic" label="Basic" color="primary" />
        <QToggle v-model="icons" label="With icons" color="accent" checked-icon="check" unchecked-icon="close" />
        <QToggle v-model="dense" label="Dense" color="secondary" dense />
        <QToggle v-model="keepColor" label="Keep color" color="info" keep-color />
        <QToggle :model-value="true" label="Disabled on" color="positive" disable />
        <QToggle :model-value="false" label="Disabled off" color="negative" disable />
    </div>
</template>

<script>
import { QToggle } from 'quasar';
import QToggleApi from '../../definitions/Quasar/QToggle.json';

export default {
    name: 'ShowcaseQuasarToggle',
    components: { QToggle },
    label: 'Quasar Toggle',
    icon: 'edit_note',
    apiJson: QToggleApi,
    importName: 'QToggle',
    importFrom: 'quasar',
    data() {
        return {
            basic: true,
            icons: false,
            dense: true,
            keepColor: false,
        };
    },
};
<\/script>

<style scoped>
.showcaseToggles {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 4px !important;
}
</style>
`,Spe=`<template>
    <div class="jShowcase_row">
      <QChip icon="event" disable>Add to calendar</QChip>
    </div>
</template>

<script>
import { QChip } from 'quasar';

export default {
    name: 'ShowcaseQuasarChip',
    components: { QChip },
    label: 'Quasar Chip',
    icon: 'auto_awesome',
    importName: 'QChip',
    importFrom: 'quasar',
    code: \`<QChip icon="event">Add to calendar</QChip>\`,
};
<\/script>
`,kpe=`<template>
    <div class="jShowcase_row">
        <QCircularProgress
            :value="75"
            size="56px"
            color="primary"
            track-color="grey-8"
            show-value
        >
            75%
        </QCircularProgress>

        <QCircularProgress
            :value="40"
            size="56px"
            color="accent"
            track-color="grey-8"
            rounded
            :thickness="0.3"
            show-value
        >
            <QIcon name="rocket_launch" size="18px" color="accent" />
        </QCircularProgress>

        <QCircularProgress
            indeterminate
            size="56px"
            color="secondary"
            track-color="grey-8"
        />

        <QCircularProgress
            :value="90"
            size="56px"
            color="positive"
            track-color="grey-8"
            :thickness="0.1"
            show-value
            font-size="11px"
        >
            90%
        </QCircularProgress>
    </div>
</template>

<script>
import { QCircularProgress, QIcon } from 'quasar';
import QCircularProgressApi from '../../definitions/Quasar/QCircularProgress.json';

export default {
    name: 'ShowcaseQuasarCircularProgress',
    components: { QCircularProgress, QIcon },
    label: 'Circular Progress',
    icon: 'auto_awesome',
    apiJson: QCircularProgressApi,
    importName: 'QCircularProgress',
    importFrom: 'quasar',
};
<\/script>
`,xpe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default</span>
            <div class="jShowcase_items">
                <QSpinner color="primary" size="40px" />
                <QSpinner color="secondary" size="40px" :thickness="2" />
                <QSpinner color="accent" size="40px" :thickness="8" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Sizes</span>
            <div class="jShowcase_items">
                <QSpinner color="primary" size="20px" />
                <QSpinner color="primary" size="30px" />
                <QSpinner color="primary" size="40px" />
                <QSpinner color="primary" size="60px" />
                <QSpinner color="primary" size="80px" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Variants</span>
            <div class="jShowcase_items">
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerDots />')">
                    <QSpinnerDots color="primary" size="40px" />
                    <span class="spinnerLabel">Dots</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerBars />')">
                    <QSpinnerBars color="secondary" size="40px" />
                    <span class="spinnerLabel">Bars</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerAudio />')">
                    <QSpinnerAudio color="accent" size="40px" />
                    <span class="spinnerLabel">Audio</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerBall />')">
                    <QSpinnerBall color="positive" size="40px" />
                    <span class="spinnerLabel">Ball</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerCube />')">
                    <QSpinnerCube color="info" size="40px" />
                    <span class="spinnerLabel">Cube</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerGrid />')">
                    <QSpinnerGrid color="warning" size="40px" />
                    <span class="spinnerLabel">Grid</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerHourglass />')">
                    <QSpinnerHourglass color="negative" size="40px" />
                    <span class="spinnerLabel">Hourglass</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerOrbit />')">
                    <QSpinnerOrbit color="primary" size="40px" />
                    <span class="spinnerLabel">Orbit</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerOval />')">
                    <QSpinnerOval color="secondary" size="40px" />
                    <span class="spinnerLabel">Oval</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerPuff />')">
                    <QSpinnerPuff color="accent" size="40px" />
                    <span class="spinnerLabel">Puff</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerRings />')">
                    <QSpinnerRings color="positive" size="40px" />
                    <span class="spinnerLabel">Rings</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerTail />')">
                    <QSpinnerTail color="info" size="40px" />
                    <span class="spinnerLabel">Tail</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerGears />')">
                    <QSpinnerGears color="warning" size="40px" />
                    <span class="spinnerLabel">Gears</span>
                </div>
                <div class="spinnerItem" @click="showcaseCopy('<QSpinnerComment />')">
                    <QSpinnerComment color="negative" size="40px" />
                    <span class="spinnerLabel">Comment</span>
                </div>
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">Colors</span>
            <div class="jShowcase_items">
                <QSpinner color="primary" size="40px" />
                <QSpinner color="secondary" size="40px" />
                <QSpinner color="accent" size="40px" />
                <QSpinner color="positive" size="40px" />
                <QSpinner color="negative" size="40px" />
                <QSpinner color="info" size="40px" />
                <QSpinner color="warning" size="40px" />
            </div>
        </div>

        <div class="jShowcase_group">
            <span class="jShowcase_title">QInnerLoading</span>
            <div class="jShowcase_items">
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">Content underneath</div>
                    <QInnerLoading :showing="innerActive" color="primary" />
                </div>
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">Custom spinner</div>
                    <QInnerLoading :showing="innerActive">
                        <QSpinnerGears color="accent" size="40px" />
                    </QInnerLoading>
                </div>
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">Dark overlay</div>
                    <QInnerLoading :showing="innerActive" color="secondary" dark />
                </div>
                <div class="innerLoadingBox">
                    <div class="innerLoadingContent">With label</div>
                    <QInnerLoading :showing="innerActive" color="primary" label="Loading data..." />
                </div>
            </div>
            <QToggle v-model="innerActive" label="Show loading" color="primary" />
            <p class="innerLoadingNote">
                <strong>WARNING:</strong> The parent element must have <code>position: relative</code> (or the <code>relative-position</code> Quasar class) for the spinner to center correctly.
            </p>
            <p class="innerLoadingNote">
                <strong>WARNING:</strong> QInnerLoading must be the last element inside its parent so it can appear on top of the other content.
            </p>
        </div>
    </div>
</template>

<script>
import {
    QToggle, QInnerLoading,
    QSpinner, QSpinnerDots, QSpinnerBars, QSpinnerAudio,
    QSpinnerBall, QSpinnerCube, QSpinnerGrid, QSpinnerHourglass,
    QSpinnerOrbit, QSpinnerOval, QSpinnerPuff, QSpinnerRings,
    QSpinnerTail, QSpinnerGears, QSpinnerComment,
} from 'quasar';
import QSpinnerApi from '../../definitions/Quasar/QSpinner.json';
import QInnerLoadingApi from '../../definitions/Quasar/QInnerLoading.json';

export default {
    name: 'ShowcaseQuasarSpinner',
    inject: ['showcaseCopy'],
    components: {
        QToggle, QInnerLoading,
        QSpinner, QSpinnerDots, QSpinnerBars, QSpinnerAudio,
        QSpinnerBall, QSpinnerCube, QSpinnerGrid, QSpinnerHourglass,
        QSpinnerOrbit, QSpinnerOval, QSpinnerPuff, QSpinnerRings,
        QSpinnerTail, QSpinnerGears, QSpinnerComment,
    },
    label: 'Spinners / Loading',
    icon: 'auto_awesome',
    apiJson: [
        { name: 'QSpinner', json: QSpinnerApi },
        { name: 'QInnerLoading', json: QInnerLoadingApi },
    ],
    importName: 'QSpinner',
    importFrom: 'quasar',
    data() {
        return {
            innerActive: true,
        };
    },
};
<\/script>

<style scoped>
.spinnerItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.innerLoadingBox {
    position: relative;
    flex: 1;
    min-width: 120px;
    height: 100px;
    border: 1px solid var(--q-surface-border);
    border-radius: 4px;
    background: var(--q-surface-1);
    overflow: hidden;
}

.innerLoadingContent {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-muted);
}

.innerLoadingNote {
    margin: 4px 0 0;
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-warning);
    line-height: 1.5;
}

.innerLoadingNote code {
    background: color-mix(in srgb, var(--q-warning) 12%, transparent);
    padding: 1px 5px;
    border-radius: 3px;
}

.spinnerLabel {
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    color: var(--q-text-muted);
    letter-spacing: 0.5px;
}
</style>
`,Cpe=`<template>
    <div class="jShowcase_row jShowcase_column showcaseTabs">
        <!-- Tabs with icons -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">With Panels</span>
            <QTabs v-model="tab" dense no-caps class="showcaseTabs_bar" active-color="accent" indicator-color="accent">
                <QTab name="overview" icon="dashboard" label="Overview" />
                <QTab name="systems" icon="memory" label="Systems" />
                <QTab name="crew" icon="groups" label="Crew" />
                <QTab name="logs" icon="description" label="Logs" alert="warning" />
            </QTabs>
            <QTabPanels v-model="tab" animated class="showcaseTabs_panels">
                <QTabPanel name="overview">Ship status nominal. All systems operational.</QTabPanel>
                <QTabPanel name="systems">Warp drive: online. Shields: 98%. Phasers: charged.</QTabPanel>
                <QTabPanel name="crew">Officers: 42. Enlisted: 388. Civilians: 0.</QTabPanel>
                <QTabPanel name="logs">3 new entries. 1 flagged for review.</QTabPanel>
            </QTabPanels>
        </div>

        <!-- Text-only tabs -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Minimal</span>
            <QTabs v-model="tab2" dense no-caps class="showcaseTabs_bar" active-color="primary" indicator-color="primary" narrow-indicator align="left">
                <QTab name="all" label="All" />
                <QTab name="active" label="Active" />
                <QTab name="archived" label="Archived" />
                <QTab name="disabled" label="Disabled" disable />
            </QTabs>
            <QTabPanels v-model="tab2" animated class="showcaseTabs_panels">
                <QTabPanel name="all">Showing all 127 records.</QTabPanel>
                <QTabPanel name="active">48 active records.</QTabPanel>
                <QTabPanel name="archived">79 archived records.</QTabPanel>
            </QTabPanels>
        </div>
    </div>
</template>

<script>
import { QTabs, QTab, QTabPanels, QTabPanel } from 'quasar';
import QTabsApi from '../../definitions/Quasar/QTabs.json';
import QTabApi from '../../definitions/Quasar/QTab.json';
import QTabPanelsApi from '../../definitions/Quasar/QTabPanels.json';
import QTabPanelApi from '../../definitions/Quasar/QTabPanel.json';

export default {
    name: 'ShowcaseQuasarTabs',
    components: { QTabs, QTab, QTabPanels, QTabPanel },
    label: 'Quasar Tabs',
    icon: 'auto_awesome',
    apiJson: [
        { name: 'QTabs', json: QTabsApi },
        { name: 'QTab', json: QTabApi },
        { name: 'QTabPanels', json: QTabPanelsApi },
        { name: 'QTabPanel', json: QTabPanelApi },
    ],
    importName: 'QTabs',
    importFrom: 'quasar',
    data() {
        return {
            tab: 'overview',
            tab2: 'all',
        };
    },
};
<\/script>

<style scoped>
.showcaseTabs :deep(.jShowcase_group) {
    gap: 0;
}

.showcaseTabs :deep(.jShowcase_title) {
    margin-bottom: 8px;
}

.showcaseTabs_bar {
    border-bottom: 1px solid var(--q-surface-border);
}

.showcaseTabs_panels {
    background: transparent;
    color: var(--q-text);
    font-family: var(--font-mono);
    font-size: var(--q-text-size-small);
    letter-spacing: 0.5px;
    padding: 0;
}

.showcaseTabs_panels :deep(.q-tab-panel) {
    padding: 12px 8px;
}
</style>
`,Qpe=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Themed footer with the same visual language as <code>PortfolioHeader</code> — frame, corners, gradient highlight, and per-theme background effects. Not sticky by default.</p>
            <div class="jShowcase_infoSection">
                <span class="jShowcase_infoLabel">Layout</span>
                <p>Bottom bar with left (title/logo + caption), center, and right sections. Optional expanded area above with a gradient divider.</p>
            </div>
        </div>

        <!-- Full footer with expanded content -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Full (With Expanded Content)</span>
            <div class="jShowcase_column">
                <PortfolioFooter title="VAULT">
                    <template #expanded>
                        <div class="demoLinkColumn">
                            <span class="demoLinkHeading">Platform</span>
                            <a class="demoLink">Dashboard</a>
                            <a class="demoLink">Portfolio</a>
                            <a class="demoLink">Staking</a>
                            <a class="demoLink">Swap</a>
                        </div>
                        <div class="demoLinkColumn">
                            <span class="demoLinkHeading">Resources</span>
                            <a class="demoLink">Documentation</a>
                            <a class="demoLink">API Reference</a>
                            <a class="demoLink">Status Page</a>
                        </div>
                        <div class="demoLinkColumn">
                            <span class="demoLinkHeading">Community</span>
                            <a class="demoLink">Discord</a>
                            <a class="demoLink">Twitter</a>
                            <a class="demoLink">GitHub</a>
                        </div>
                    </template>
                    <template #caption>
                        &copy; 2026 Vault Protocol
                    </template>
                    <template #center>
                        <span class="demoPill">MAINNET</span>
                        <span class="demoPill">v2.4.1</span>
                    </template>
                    <template #right>
                        <QBtn flat round size="sm" icon="fab fa-discord" color="primary" />
                        <QBtn flat round size="sm" icon="fab fa-twitter" color="primary" />
                        <QBtn flat round size="sm" icon="fab fa-github" color="primary" />
                    </template>
                </PortfolioFooter>
            </div>
        </div>

        <!-- Simple bar -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Simple Bar</span>
            <div class="jShowcase_column">
                <PortfolioFooter title="Portfolio">
                    <template #caption>
                        &copy; 2026 All rights reserved
                    </template>
                    <template #right>
                        <span class="demoPill">BLOCK #184,291,037</span>
                    </template>
                </PortfolioFooter>
            </div>
        </div>

        <!-- Custom logo -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Logo Slot</span>
            <div class="jShowcase_column">
                <PortfolioFooter>
                    <template #logo>
                        <QIcon name="diamond" size="18px" color="secondary" />
                        <span style="letter-spacing: 2px; font-weight: 700;">VAULT</span>
                    </template>
                    <template #caption>
                        Decentralized Finance Protocol
                    </template>
                    <template #right>
                        <span class="demoPill active">
                            <span class="demoPulseDot"></span>
                            LIVE
                        </span>
                    </template>
                </PortfolioFooter>
            </div>
        </div>

        <!-- Minimal -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Minimal (Title Only)</span>
            <div class="jShowcase_column">
                <PortfolioFooter title="Dashboard" />
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar';
import PortfolioFooter from '../../../components/footers/PortfolioFooter.vue';
import PortfolioFooterApi from '../../definitions/Custom/PortfolioFooter.json';

export default {
    name: 'ShowcasePortfolioFooter',
    components: { QBtn, QIcon, PortfolioFooter },
    label: 'Portfolio Footer',
    icon: 'call_to_action',
    inject: ['showcaseCopy'],
    apiJson: PortfolioFooterApi,
    importName: 'PortfolioFooter',
    code: null,
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
<\/script>

<style scoped>
.demoLinkColumn {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 120px;
}

.demoLinkHeading {
    font-family: var(--font-display);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--q-primary);
    font-weight: 600;
    margin-bottom: 4px;
}

.demoLink {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--q-text-muted);
    cursor: pointer;
    transition: color 0.15s ease;
    text-decoration: none;
}

.demoLink:hover {
    color: var(--q-text-bright);
}

.demoPill {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--q-text-muted);
    border: 1px solid color-mix(in srgb, var(--q-primary) 15%, transparent);
    background: color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    padding: 3px 10px;
    border-radius: 2px;
}

.demoPill.active {
    color: var(--q-primary);
    border-color: var(--q-primary);
    background: color-mix(in srgb, var(--q-primary) 10%, transparent);
    display: flex;
    align-items: center;
    gap: 6px;
}

.demoPulseDot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--q-primary);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px var(--q-primary); }
    50% { opacity: 0.5; box-shadow: none; }
}
</style>
`,Ape=`<template>
    <div class="jShowcase_row jShowcase_column">
        <div class="jShowcase_info">
            <p>Sticky collapsible header that transitions between expanded and compact states on scroll. Colors and background patterns are set per-theme in <code>common.css</code>.</p>
            <div class="jShowcase_infoSection">
                <span class="jShowcase_infoLabel">Scroll behavior</span>
                <p>Collapses after scrolling past 120px. Expands back only when scrolled to top. A 400ms lock prevents layout-shift retriggering.</p>
            </div>
        </div>

        <!-- Default expanded -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Default (Expanded)</span>
            <div class="jShowcase_column">
                <PortfolioHeader title="Portfolio Overview" always-expanded>
                    <template #collapsed>
                        <AmountDisplay :amount="47832.61" currency="USD" :size="16" />
                        <AmountChange :percent="3.42" compact />
                    </template>
                    <template #expanded>
                        <div class="demoExpanded">
                            <div class="demoBalance">
                                <div class="demoBalanceLabel">TOTAL PORTFOLIO VALUE</div>
                                <AmountDisplay :amount="47832.61" currency="USD" :size="48" />
                                <AmountChange :percent="3.42" amount="+$1,582.14" period="24h" />
                            </div>
                            <div class="demoActions">
                                <QBtn color="primary" icon="north_east" label="Send" />
                                <QBtn color="secondary" icon="south_west" label="Receive" />
                                <QBtn color="accent" icon="swap_horiz" label="Swap" />
                                <QBtn class="ghost" icon="lock" label="Stake" />
                            </div>
                        </div>
                    </template>
                    <template #right>
                        <span class="demoPill">BLOCK #184,291,037</span>
                    </template>
                </PortfolioHeader>
            </div>
        </div>

        <!-- Always collapsed -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Always Collapsed</span>
            <div class="jShowcase_column">
                <PortfolioHeader title="Portfolio Overview" always-collapsed>
                    <template #collapsed>
                        <AmountDisplay :amount="47832.61" currency="USD" :size="16" />
                        <AmountChange :percent="3.42" compact />
                    </template>
                    <template #right>
                        <span class="demoPill">BLOCK #184,291,037</span>
                    </template>
                </PortfolioHeader>
            </div>
        </div>

        <!-- Custom logo slot -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Custom Logo Slot</span>
            <div class="jShowcase_column">
                <PortfolioHeader always-collapsed>
                    <template #logo>
                        <QIcon name="diamond" size="18px" color="secondary" />
                        <span style="letter-spacing: 2px; font-weight: 700;">VAULT</span>
                    </template>
                    <template #collapsed>
                        <AmountDisplay :amount="12500.00" currency="BTC" :size="16" />
                    </template>
                    <template #right>
                        <span class="demoPill active">
                            <span class="demoPulseDot"></span>
                            LIVE
                        </span>
                    </template>
                </PortfolioHeader>
            </div>
        </div>

        <!-- Minimal -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">Minimal (Title Only)</span>
            <div class="jShowcase_column">
                <PortfolioHeader title="Dashboard" always-collapsed />
            </div>
        </div>
    </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar';
import PortfolioHeader from '../../../components/headers/PortfolioHeader.vue';
import AmountDisplay from '../../../components/amounts/AmountDisplay.vue';
import AmountChange from '../../../components/amounts/AmountChange.vue';
import PortfolioHeaderApi from '../../definitions/Custom/PortfolioHeader.json';

export default {
    name: 'ShowcasePortfolioHeader',
    components: { QBtn, QIcon, PortfolioHeader, AmountDisplay, AmountChange },
    label: 'Portfolio Header',
    icon: 'web_asset',
    inject: ['showcaseCopy'],
    apiJson: PortfolioHeaderApi,
    importName: 'PortfolioHeader',
    code: null,
    methods: {
        copy(text) {
            this.showcaseCopy(text);
        },
    },
};
<\/script>

<style scoped>
.demoExpanded {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.demoBalance {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.demoBalanceLabel {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--q-text-muted);
}

.demoActions {
    display: flex;
    gap: 10px;
}

.demoPill {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--q-text-muted);
    border: 1px solid color-mix(in srgb, var(--q-primary) 15%, transparent);
    background: color-mix(in srgb, var(--q-text-bright) 4%, transparent);
    padding: 3px 10px;
    border-radius: 2px;
}

.demoPill.active {
    color: var(--q-primary);
    border-color: var(--q-primary);
    background: color-mix(in srgb, var(--q-primary) 10%, transparent);
    display: flex;
    align-items: center;
    gap: 6px;
}

.demoPulseDot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--q-primary);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px var(--q-primary); }
    50% { opacity: 0.5; box-shadow: none; }
}
</style>
`,jd=Object.assign({"./01 Colors/AllColors.vue":MX,"./02 Typography/HelperClasses.vue":UX,"./02 Typography/Typography.vue":mee,"./03 Icons/Icon.vue":tte,"./04 Buttons/Btn.vue":Cte,"./04 Buttons/BtnDropdown.vue":Zte,"./04 Buttons/BtnToggle.vue":hne,"./05 Dialogs/Dialog.vue":Zne,"./06 Helpers/CurrentYear.vue":doe,"./06 Helpers/DarkSwitcher.vue":Ooe,"./07 Lists/ActiveList.vue":Woe,"./07 Lists/BasicList.vue":kae,"./07 Lists/DenseList.vue":Tae,"./08 Menu/Menu.vue":tie,"./09 Panels/Banner.vue":die,"./09 Panels/BasicPanel.vue":wie,"./09 Panels/Card.vue":Fie,"./09 Panels/PanelWithAction.vue":Hie,"./09 Panels/PanelWithFooter.vue":Gie,"./09 Panels/PanelWithTabs.vue":cre,"./10 Quasar_Inputs/Checkbox.vue":yre,"./10 Quasar_Inputs/Date.vue":Xre,"./10 Quasar_Inputs/Input.vue":Sse,"./10 Quasar_Inputs/Radio.vue":jse,"./10 Quasar_Inputs/Rating.vue":Zse,"./10 Quasar_Inputs/Select.vue":_le,"./10 Quasar_Inputs/Slider.vue":Jle,"./10 Quasar_Inputs/Time.vue":vce,"./10 Quasar_Inputs/Toggle.vue":Ice,"./11 Quasar_Others/Chip.vue":Dce,"./11 Quasar_Others/CircularProgress.vue":Uce,"./11 Quasar_Others/Spinner.vue":Uue,"./11 Quasar_Others/Tabs.vue":wde,"./Footers/PortfolioFooter.vue":nfe,"./Headers/PortfolioHeader.vue":Ufe}),Ipe=Object.assign({"./01 Colors/AllColors.vue":Wfe,"./02 Typography/HelperClasses.vue":Jfe,"./02 Typography/Typography.vue":Gfe,"./03 Icons/Icon.vue":Yfe,"./04 Buttons/Btn.vue":Kfe,"./04 Buttons/BtnDropdown.vue":Zfe,"./04 Buttons/BtnToggle.vue":Xfe,"./05 Dialogs/Dialog.vue":epe,"./06 Helpers/CurrentYear.vue":tpe,"./06 Helpers/DarkSwitcher.vue":npe,"./07 Lists/ActiveList.vue":ope,"./07 Lists/BasicList.vue":ape,"./07 Lists/DenseList.vue":ipe,"./08 Menu/Menu.vue":rpe,"./09 Panels/Banner.vue":spe,"./09 Panels/BasicPanel.vue":lpe,"./09 Panels/Card.vue":cpe,"./09 Panels/PanelWithAction.vue":upe,"./09 Panels/PanelWithFooter.vue":dpe,"./09 Panels/PanelWithTabs.vue":fpe,"./10 Quasar_Inputs/Checkbox.vue":ppe,"./10 Quasar_Inputs/Date.vue":mpe,"./10 Quasar_Inputs/Input.vue":hpe,"./10 Quasar_Inputs/Radio.vue":gpe,"./10 Quasar_Inputs/Rating.vue":vpe,"./10 Quasar_Inputs/Select.vue":bpe,"./10 Quasar_Inputs/Slider.vue":_pe,"./10 Quasar_Inputs/Time.vue":ype,"./10 Quasar_Inputs/Toggle.vue":wpe,"./11 Quasar_Others/Chip.vue":Spe,"./11 Quasar_Others/CircularProgress.vue":kpe,"./11 Quasar_Others/Spinner.vue":xpe,"./11 Quasar_Others/Tabs.vue":Cpe,"./Footers/PortfolioFooter.vue":Qpe,"./Headers/PortfolioHeader.vue":Ape}),ba={},hh={};for(const e in jd){const t=e.split("/"),n=t[1],a=n.replace(/^\d+\s*/,""),o=t[2].replace(".vue",""),i=jd[e].default;ba[a]||(ba[a]=[],hh[a]=n),ba[a].push({name:o,label:i.label||o,icon:i.icon||null,order:i.order??999,code:i.code||null,raw:Ipe[e]||null,component:i})}for(const e in ba)ba[e].sort((t,n)=>t.order-n.order);const qpe=Object.assign({"../../../docs/AccentBackground.md":cX,"../../../docs/CustomComponents.md":uX,"../../../docs/MCP.md":dX,"../../../docs/SHOWCASE.md":fX,"../../../docs/THEMING.md":pX,"../../../docs/USAGE.md":mX}),Tpe=Object.assign({"../../../README.md":hX});function Lpe(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1 $2")}function $d(e){const t=e.component||e,n=e.name||t.name||"Unknown";return{type:"component",name:n,label:t.label||Lpe(n),icon:t.icon||null,order:t.order??999,code:t.code??null,raw:e.raw||null,component:t}}function Epe(){const e={};for(const t of Object.values(Tpe))e.README=t;for(const[t,n]of Object.entries(qpe))e[t.split("/").pop().replace(".md","")]=n;return e}function Dpe(e){return{...Epe(),...e}}function Bpe(e){const t={...hh},n={};for(const[i,r]of Object.entries(ba))n[i]=r.map($d);for(const[i,r]of Object.entries(e||{})){const s=i.replace(/^\d+\s*/,"");t[s]||(t[s]=i);const l=Array.isArray(r)?r:[r];n[s]||(n[s]=[]);for(const u of l)n[s].push($d(u));n[s].sort((u,c)=>u.order-c.order)}const a={},o=Object.keys(n).sort((i,r)=>(t[i]||i).localeCompare(t[r]||r));for(const i of o)a[i]=n[i];return a}function Ppe(e,t){const n=window.location.hash.replace("#","");let o=Object.keys(t).includes("README")?"README":Object.keys(e)[0]||"",i=0;if(n){const[r,s]=n.split("/");if(r==="docs"&&s&&t[s])o=s;else if(o=e[r]?r:o,s&&e[o]){const l=e[o].findIndex(u=>u.name===s);l>=0&&(i=l)}}return{tab:o,index:i}}const Mpe={name:"JComponentShowcase",mixins:[y_],components:{ShowcaseNav:$_,ShowcaseMain:z_,ShowcaseReference:KZ,ShowcaseToast:oX,ShowcaseDocs:sX},props:{importFrom:{type:String,default:"varmory"},components:{type:Object,default:()=>({})},docs:{type:Object,default:()=>({})}},provide(){return{showcaseCopy:(e,t)=>{Tp(e);const n=e.length>60?e.slice(0,57)+"...":e;this.$refs.toast.notify(`Copied "${n}"`,t||"content_copy")}}},data(){const{tab:e,index:t}=Ppe(this.components,this.docs);return{activeTab:e,selectedIndex:t}},computed:{activeItems(){return this.components[this.activeTab]||[]},selectedItem(){return this.activeItems[this.selectedIndex]||null},activeCode(){var e,t;return((e=this.selectedItem)==null?void 0:e.code)||lX((t=this.selectedItem)==null?void 0:t.raw)||""},selectedKey(){return this.activeTab+"-"+this.selectedIndex},hasApiDoc(){var t;const e=(t=this.selectedItem)==null?void 0:t.component;return!!(e!=null&&e.apiJson||e!=null&&e.apiUrl||e!=null&&e.importName)},docPageNames(){return Object.keys(this.docs)},isDocPage(){return this.docPageNames.includes(this.activeTab)}},methods:{updateHash(){var t;const e=this.isDocPage?this.activeTab:(t=this.selectedItem)==null?void 0:t.name;if(e){const n=this.isDocPage?`#docs/${e}`:`#${this.activeTab}/${e}`;window.location.hash!==n&&history.replaceState(null,"",n)}},syncApiDoc(){var t;const e=(t=this.selectedItem)==null?void 0:t.component;this.apiJson=(e==null?void 0:e.apiJson)||null,this.apiUrl=!(e!=null&&e.apiJson)&&(e!=null&&e.apiUrl)?e.apiUrl:null,this.apiImportName=(e==null?void 0:e.importName)||null,this.apiImportFrom=(e==null?void 0:e.importFrom)||this.importFrom||null},selectItem({category:e,name:t}){const a=(this.components[e]||[]).findIndex(o=>o.name===t);this.activeTab=e,this.selectedIndex=a>=0?a:0},selectDoc(e){this.docs[e]&&(this.activeTab=e)},showToast(e,t){const n=++toastId;this.toasts.push({id:n,message:e,icon:t}),setTimeout(()=>{const a=this.toasts.findIndex(o=>o.id===n);a>=0&&this.toasts.splice(a,1)},2500)}},mounted(){this._onHashChange=()=>{const e=window.location.hash.replace("#","");if(!e)return;const[t,n]=e.split("/");t==="docs"&&n&&this.docs[n]?this.selectDoc(n):t&&n&&this.components[t]&&this.selectItem({category:t,name:n})},window.addEventListener("hashchange",this._onHashChange)},beforeUnmount(){window.removeEventListener("hashchange",this._onHashChange)},watch:{selectedItem:{immediate:!0,handler(){this.syncApiDoc(),this.updateHash()}},activeTab(){this.updateHash()}}},jpe={class:"q-pa-sm"},$pe={class:"row q-col-gutter-md"},Rpe={class:"col-12 col-sm-4 col-md-2"},Ope={class:"col-12 col-sm-8 col-md-10"},Fpe={key:1,class:"row q-col-gutter-md"},Vpe={class:"col-12 col-md-6"},Npe={class:"col-12 col-md-6"};function zpe(e,t,n,a,o,i){var d,p;const r=X("ShowcaseNav"),s=X("ShowcaseDocs"),l=X("ShowcaseMain"),u=X("ShowcaseReference"),c=X("ShowcaseToast");return M(),ee("div",jpe,[v("div",$pe,[v("div",Rpe,[f(r,{"active-tab":o.activeTab,"selected-name":i.isDocPage?null:(d=i.selectedItem)==null?void 0:d.name,categories:n.components,"doc-pages":i.docPageNames,"active-doc":i.isDocPage?o.activeTab:null,onSelect:i.selectItem,onSelectDoc:i.selectDoc},null,8,["active-tab","selected-name","categories","doc-pages","active-doc","onSelect","onSelectDoc"])]),v("div",Ope,[i.isDocPage?(M(),_e(s,{key:0,docs:n.docs,"active-page":o.activeTab,onNavigate:i.selectDoc},null,8,["docs","active-page","onNavigate"])):(M(),ee("div",Fpe,[v("div",Vpe,[f(l,{item:i.selectedItem},null,8,["item"])]),v("div",Npe,[f(u,{code:i.activeCode,"code-key":i.selectedKey,"has-api":i.hasApiDoc,"docs-url":e.apiDocsUrl,title:e.apiTagName||((p=i.selectedItem)==null?void 0:p.name)||"REFERENCE","is-tag-name":!!e.apiTagName},null,8,["code","code-key","has-api","docs-url","title","is-tag-name"])])]))])]),f(c,{ref:"toast",position:"bottom"},null,512)])}const gc=ze(Mpe,[["render",zpe],["__scopeId","data-v-70851002"]]),Hpe={name:"JComponentShowcaseWithContent",components:{JComponentShowcase:gc},inheritAttrs:!1,props:{components:{type:Object,default:()=>({})},docs:{type:Object,default:()=>({})}},computed:{allComponents(){return Bpe(this.components)},allDocs(){return Dpe(this.docs)}}};function Upe(e,t,n,a,o,i){const r=X("JComponentShowcase");return M(),_e(r,El({components:i.allComponents,docs:i.allDocs},e.$attrs),null,16,["components","docs"])}const gh=ze(Hpe,[["render",Upe]]),Wpe={name:"JThemeSwitcher",components:{QSelect:Vr,QIcon:nt,QItem:jn,QItemSection:$n},data(){return{themeIcons:{default:"palette",rpg:"auto_fix_high",space:"rocket_launch",finance:"account_balance"}}},computed:{themeStore(){try{return rc()}catch{return null}},themeNames(){var t;const e=(t=this.themeStore)==null?void 0:t.themes;return e?Object.keys(e):[]},themeOptions(){return this.themeNames.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))},currentTheme(){var e;return((e=this.themeStore)==null?void 0:e.currentTheme)??null},themeLocked(){var e;return((e=this.themeStore)==null?void 0:e.themeLocked)??!0}},methods:{async switchTheme(e){if(e===this.currentTheme)return;const t=this.themeStore;t.currentTheme=e;const n=document.createElement("div");n.className="jThemeSwitcher_overlay",document.body.appendChild(n),n.offsetHeight,n.classList.add("active"),await new Promise(a=>setTimeout(a,150)),await t.applyTheme(e,t.isDark),await new Promise(a=>setTimeout(a,200)),n.classList.remove("active"),n.addEventListener("transitionend",()=>n.remove(),{once:!0})}}};function Jpe(e,t,n,a,o,i){const r=X("QIcon"),s=X("QItemSection"),l=X("QItem"),u=X("QSelect");return M(),_e(u,{"model-value":i.currentTheme,options:i.themeOptions,disable:i.themeLocked,"option-value":"value","option-label":"label","emit-value":"","map-options":"",class:"jThemeSwitcher","popup-content-class":"jThemeSwitcher_popup","onUpdate:modelValue":i.switchTheme},{prepend:S(()=>[f(r,{name:o.themeIcons[i.currentTheme]||"brush",size:"16px",class:"jThemeSwitcher_selectIcon"},null,8,["name"])]),option:S(({itemProps:c,opt:d})=>[f(l,El(c,{class:"jThemeSwitcher_popupItem"}),{default:S(()=>[f(s,{avatar:""},{default:S(()=>[f(r,{name:o.themeIcons[d.value]||"brush",size:"16px"},null,8,["name"])]),_:2},1024),f(s,null,{default:S(()=>[K(xe(d.label),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["model-value","options","disable","onUpdate:modelValue"])}const vh=ze(Wpe,[["render",Jpe]]),Gpe="modulepreload",Ype=function(e,t){return new URL(e,t).href},Rd={},fn=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=Ype(u,a),u in Rd)return;Rd[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!a)for(let _=r.length-1;_>=0;_--){const I=r[_];if(I.href===u&&(!c||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":Gpe,c||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((_,I)=>{g.addEventListener("load",_),g.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return o.then(r=>{for(const s of r||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Od=Object.assign({"./default/dark.css":()=>fn(()=>import("./dark.js"),[],import.meta.url).then(e=>e.default),"./finance/dark.css":()=>fn(()=>import("./dark2.js"),[],import.meta.url).then(e=>e.default),"./rpg/dark.css":()=>fn(()=>import("./dark3.js"),[],import.meta.url).then(e=>e.default),"./space/dark.css":()=>fn(()=>import("./dark4.js"),[],import.meta.url).then(e=>e.default)}),Fd=Object.assign({"./default/light.css":()=>fn(()=>import("./light.js"),[],import.meta.url).then(e=>e.default),"./finance/light.css":()=>fn(()=>import("./light2.js"),[],import.meta.url).then(e=>e.default),"./rpg/light.css":()=>fn(()=>import("./light3.js"),[],import.meta.url).then(e=>e.default),"./space/light.css":()=>fn(()=>import("./light4.js"),[],import.meta.url).then(e=>e.default)}),Vd=Object.assign({"./default/common.css":()=>fn(()=>import("./common.js"),[],import.meta.url).then(e=>e.default),"./finance/common.css":()=>fn(()=>import("./common2.js"),[],import.meta.url).then(e=>e.default),"./rpg/common.css":()=>fn(()=>import("./common3.js"),[],import.meta.url).then(e=>e.default),"./space/common.css":()=>fn(()=>import("./common4.js"),[],import.meta.url).then(e=>e.default)}),Pn={};for(const e in Od){const t=e.split("/")[1];Pn[t]=Pn[t]||{},Pn[t].dark=Od[e]}for(const e in Fd){const t=e.split("/")[1];Pn[t]=Pn[t]||{},Pn[t].light=Fd[e]}for(const e in Vd){const t=e.split("/")[1];Pn[t]=Pn[t]||{},Pn[t].common=Vd[e]}const Kpe={install(e,t){if(e.config.globalProperties.$q||e.use(Cp,t),e.component("JPanel",no),e.component("JComponentShowcase",gc),e.component("JComponentShowcaseWithContent",gh),e.component("PortfolioHeader",hc),e.component("PortfolioFooter",mc),e.component("JCurrentYear",ic),e.component("JDarkSwitcher",sc),e.component("JThemeSwitcher",vh),(t==null?void 0:t.themes)!==null&&(t==null?void 0:t.themes)!==!1){const n=rc(),a=t==null?void 0:t.theme,o=a&&typeof a=="object",i=o?{default:a}:{...Pn,...t==null?void 0:t.themes};n.initialize({theme:o?"default":a||"default",themes:i})}}},Zpe={name:"Test",components:{QBtn:it},icon:"info",label:"Test Btn",apiJson:Tm,importName:"QBtn",importFrom:"quasar"},Xpe={class:"jShowcase_row jShowcase_column"},eme={class:"jShowcase_group"},tme={class:"jShowcase_items"};function nme(e,t,n,a,o,i){const r=X("QBtn");return M(),ee("div",Xpe,[v("div",eme,[t[0]||(t[0]=v("span",{class:"jShowcase_title"},"Variants",-1)),v("div",tme,[f(r,{color:"primary",label:"Default"}),f(r,{flat:"",color:"primary",label:"Flat"}),f(r,{outline:"",color:"primary",label:"Outline"}),f(r,{unelevated:"",color:"primary",label:"Unelevated"}),f(r,{push:"",color:"primary",label:"Push"}),f(r,{glossy:"",color:"primary",label:"Glossy"})])])])}const ome=ze(Zpe,[["render",nme]]),ame={components:{JComponentShowcaseWithContent:gh,JComponentShowcase:gc,PortfolioHeader:hc,PortfolioFooter:mc,JThemeSwitcher:vh,QBtn:it,QList:ko,QItem:jn,QItemSection:$n,QIcon:nt,QMenu:pi,JCurrentYear:ic,JDarkSwitcher:sc},data(){return{}},computed:{components(){return{"91 Test Category":[ome]}}},mounted(){},methods:{test(){this.$q.notify("test")}}},ime={class:"text-center"};function rme(e,t,n,a,o,i){const r=X("JThemeSwitcher"),s=X("JDarkSwitcher"),l=X("QBtn"),u=X("PortfolioHeader"),c=X("JComponentShowcaseWithContent"),d=X("JCurrentYear"),p=X("PortfolioFooter");return M(),ee("div",null,[f(u,{class:"q-pa-sm",title:"vArmory",alwaysCollapsed:""},{collapsed:S(()=>[t[0]||(t[0]=v("span",{class:"appHeaderThemeLabel"},"Theme:",-1)),f(r,{outlined:"",dense:""})]),right:S(()=>[f(s),f(l,{onClick:i.test,label:"Test"},null,8,["onClick"])]),_:1}),f(c,{components:i.components},null,8,["components"]),f(p,{title:"vArmory",class:"q-pa-sm q-mt-xl"},{expanded:S(()=>[...t[1]||(t[1]=[v("div",{class:"footerColumn"},[v("span",{class:"footerColumnHeading"},"Platform"),v("a",{class:"footerLink",href:"#"},"Dashboard"),v("a",{class:"footerLink",href:"#"},"Portfolio"),v("a",{class:"footerLink",href:"#"},"Staking"),v("a",{class:"footerLink",href:"#"},"Swap")],-1),v("div",{class:"footerColumn"},[v("span",{class:"footerColumnHeading"},"Resources"),v("a",{class:"footerLink",href:"#"},"Documentation"),v("a",{class:"footerLink",href:"#"},"API Reference"),v("a",{class:"footerLink",href:"#"},"Status Page")],-1),v("div",{class:"footerColumn"},[v("span",{class:"footerColumnHeading"},"Community"),v("a",{class:"footerLink",href:"#"},"Discord"),v("a",{class:"footerLink",href:"#"},"Twitter"),v("a",{class:"footerLink",href:"#"},"GitHub")],-1)])]),bottom:S(()=>[v("div",ime,[t[2]||(t[2]=K(" © ",-1)),f(d),t[3]||(t[3]=K(" vArmory ",-1))])]),_:1})])}const sme=ze(ame,[["render",rme]]),bh={radio:lh,checkbox:cc,toggle:pc},lme=Object.keys(bh);function $s(e,t){if(typeof e=="function")return e;const n=e!==void 0?e:t;return a=>a[n]}const cme=Fe({name:"QOptionGroup",props:{...Mt,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(zt),default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],name:String,type:{type:String,default:"radio",validator:e=>lme.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:t,slots:n}){const{proxy:{$q:a}}=Je(),o=Array.isArray(e.modelValue);e.type==="radio"?o===!0&&console.error("q-option-group: model should not be array"):o===!1&&console.error("q-option-group: model should be array in your case");const i=jt(e,a),r=Q(()=>bh[e.type]),s=Q(()=>$s(e.optionValue,"value")),l=Q(()=>$s(e.optionLabel,"label")),u=Q(()=>$s(e.optionDisable,"disable")),c=Q(()=>e.options.map(_=>({val:s.value(_),name:_.name===void 0?e.name:_.name,disable:e.disable||u.value(_),leftLabel:_.leftLabel===void 0?e.leftLabel:_.leftLabel,color:_.color===void 0?e.color:_.color,checkedIcon:_.checkedIcon,uncheckedIcon:_.uncheckedIcon,dark:_.dark===void 0?i.value:_.dark,size:_.size===void 0?e.size:_.size,dense:e.dense,keepColor:_.keepColor===void 0?e.keepColor:_.keepColor}))),d=Q(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),p=Q(()=>{const _={role:"group"};return e.type==="radio"&&(_.role="radiogroup",e.disable===!0&&(_["aria-disabled"]="true")),_});function g(_){t("update:modelValue",_)}return()=>L("div",{class:d.value,...p.value},e.options.map((_,I)=>{const C=n["label-"+I]!==void 0?()=>n["label-"+I](_):n.label!==void 0?()=>n.label(_):void 0;return L("div",[L(r.value,{label:C===void 0?l.value(_):null,modelValue:e.modelValue,"onUpdate:modelValue":g,...c.value[I]},C)])}))}});Fe({name:"DialogPluginComponent",props:{...Mt,title:String,message:String,prompt:Object,options:Object,progress:[Boolean,Object],html:Boolean,ok:{type:[String,Object,Boolean],default:!0},cancel:[String,Object,Boolean],focus:{type:String,default:"ok",validator:e=>["ok","cancel","none"].includes(e)},stackButtons:Boolean,color:String,cardClass:[String,Array,Object],cardStyle:[String,Array,Object]},emits:["ok","hide"],setup(e,{emit:t}){const{proxy:n}=Je(),{$q:a}=n,o=jt(e,a),i=ge(null),r=ge(e.prompt!==void 0?e.prompt.model:e.options!==void 0?e.options.model:void 0),s=Q(()=>"q-dialog-plugin"+(o.value===!0?" q-dialog-plugin--dark q-dark":"")+(e.progress!==!1?" q-dialog-plugin--progress":"")),l=Q(()=>e.color||(o.value===!0?"amber":"primary")),u=Q(()=>e.progress===!1?null:zt(e.progress)===!0?{component:e.progress.spinner||yo,props:{color:e.progress.color||l.value}}:{component:yo,props:{color:l.value}}),c=Q(()=>e.prompt!==void 0||e.options!==void 0),d=Q(()=>{if(c.value!==!0)return{};const{model:D,isValid:R,items:ae,...Z}=e.prompt!==void 0?e.prompt:e.options;return Z}),p=Q(()=>zt(e.ok)===!0||e.ok===!0?a.lang.label.ok:e.ok),g=Q(()=>zt(e.cancel)===!0||e.cancel===!0?a.lang.label.cancel:e.cancel),_=Q(()=>e.prompt!==void 0?e.prompt.isValid!==void 0&&e.prompt.isValid(r.value)!==!0:e.options!==void 0?e.options.isValid!==void 0&&e.options.isValid(r.value)!==!0:!1),I=Q(()=>({color:l.value,label:p.value,ripple:!1,disable:_.value,...zt(e.ok)===!0?e.ok:{flat:!0},"data-autofocus":e.focus==="ok"&&c.value!==!0||void 0,onClick:y})),C=Q(()=>({color:l.value,label:g.value,ripple:!1,...zt(e.cancel)===!0?e.cancel:{flat:!0},"data-autofocus":e.focus==="cancel"&&c.value!==!0||void 0,onClick:m}));Oe(()=>e.prompt&&e.prompt.model,B),Oe(()=>e.options&&e.options.model,B);function b(){i.value.show()}function w(){i.value.hide()}function y(){t("ok",Ze(r.value)),w()}function m(){w()}function x(){t("hide")}function B(D){r.value=D}function T(D){_.value!==!0&&e.prompt.type!=="textarea"&&Mn(D,13)===!0&&y()}function E(D,R){return e.html===!0?L(Do,{class:D,innerHTML:R}):L(Do,{class:D},()=>R)}function O(){return[L(Fr,{color:l.value,dense:!0,autofocus:!0,dark:o.value,...d.value,modelValue:r.value,"onUpdate:modelValue":B,onKeyup:T})]}function F(){return[L(cme,{color:l.value,options:e.options.items,dark:o.value,...d.value,modelValue:r.value,"onUpdate:modelValue":B})]}function V(){const D=[];return e.cancel&&D.push(L(it,C.value)),e.ok&&D.push(L(it,I.value)),L(ac,{class:e.stackButtons===!0?"items-end":"",vertical:e.stackButtons,align:"right"},()=>D)}function j(){const D=[];return e.title&&D.push(E("q-dialog__title",e.title)),e.progress!==!1&&D.push(L(Do,{class:"q-dialog__progress"},()=>L(u.value.component,u.value.props))),e.message&&D.push(E("q-dialog__message",e.message)),e.prompt!==void 0?D.push(L(Do,{class:"scroll q-dialog-plugin__form"},O)):e.options!==void 0&&D.push(L(ui,{dark:o.value}),L(Do,{class:"scroll q-dialog-plugin__form"},F),L(ui,{dark:o.value})),(e.ok||e.cancel)&&D.push(V()),D}function U(){return[L(oc,{class:[s.value,e.cardClass],style:e.cardStyle,dark:o.value},j)]}return Object.assign(n,{show:b,hide:w}),()=>L(nc,{ref:i,onHide:x},U)}});const _h=st.has.webStorage===!1?Vm():Nm("session"),ume={install({$q:e}){e.sessionStorage=_h}};Object.assign(ume,_h);let dme=0;const $i={},Ri={},hn={},yh={},fme=/^\s*$/,wh=[],pme=[void 0,null,!0,!1,""],vc=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],mme=["top-left","top-right","bottom-left","bottom-right"],za={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Sh(e,t,n){var l;if(!e)return Ma("parameter required");let a;const o={textColor:"white"};if(e.ignoreDefaults!==!0&&Object.assign(o,$i),zt(e)===!1&&(o.type&&Object.assign(o,za[o.type]),e={message:e}),Object.assign(o,za[e.type||o.type],e),typeof o.icon=="function"&&(o.icon=o.icon(t)),o.spinner?(o.spinner===!0&&(o.spinner=yo),o.spinner=Ca(o.spinner)):o.spinner=!1,o.meta={hasMedia:!!(o.spinner!==!1||o.icon||o.avatar),hasText:Nd(o.message)||Nd(o.caption)},o.position){if(vc.includes(o.position)===!1)return Ma("wrong position",e)}else o.position="bottom";if(pme.includes(o.timeout)===!0)o.timeout=5e3;else{const u=Number(o.timeout);if(isNaN(u)||u<0)return Ma("wrong timeout",e);o.timeout=Number.isFinite(u)?u:0}o.timeout===0?o.progress=!1:o.progress===!0&&(o.meta.progressClass="q-notification__progress"+(o.progressClass?` ${o.progressClass}`:""),o.meta.progressStyle={animationDuration:`${o.timeout+1e3}ms`});const i=(Array.isArray(e.actions)===!0?e.actions:[]).concat(e.ignoreDefaults!==!0&&Array.isArray($i.actions)===!0?$i.actions:[]).concat(Array.isArray((l=za[e.type])==null?void 0:l.actions)===!0?za[e.type].actions:[]),{closeBtn:r}=o;if(r&&i.push({label:typeof r=="string"?r:t.lang.label.close}),o.actions=i.map(({handler:u,noDismiss:c,...d})=>({flat:!0,...d,onClick:typeof u=="function"?()=>{u(),c!==!0&&s()}:()=>{s()}})),o.multiLine===void 0&&(o.multiLine=o.actions.length>1),Object.assign(o.meta,{class:`q-notification row items-stretch q-notification--${o.multiLine===!0?"multi-line":"standard"}`+(o.color!==void 0?` bg-${o.color}`:"")+(o.textColor!==void 0?` text-${o.textColor}`:"")+(o.classes!==void 0?` ${o.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(o.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(o.multiLine===!0?"":" col"),leftClass:o.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...o.attrs}}),o.group===!1?(o.group=void 0,o.meta.group=void 0):((o.group===void 0||o.group===!0)&&(o.group=[o.message,o.caption,o.multiline].concat(o.actions.map(u=>`${u.label}*${u.icon}`)).join("|")),o.meta.group=o.group+"|"+o.position),o.actions.length===0?o.actions=void 0:o.meta.actionsClass="q-notification__actions row items-center "+(o.multiLine===!0?"justify-end":"col-auto")+(o.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),o.meta.uid=n.notif.meta.uid;const u=hn[o.position].value.indexOf(n.notif);hn[o.position].value[u]=o}else{const u=Ri[o.meta.group];if(u===void 0){if(o.meta.uid=dme++,o.meta.badge=1,["left","right","center"].indexOf(o.position)!==-1)hn[o.position].value.splice(Math.floor(hn[o.position].value.length/2),0,o);else{const c=o.position.indexOf("top")!==-1?"unshift":"push";hn[o.position].value[c](o)}o.group!==void 0&&(Ri[o.meta.group]=o)}else{if(u.meta.timer&&(clearTimeout(u.meta.timer),u.meta.timer=void 0),o.badgePosition!==void 0){if(mme.includes(o.badgePosition)===!1)return Ma("wrong badgePosition",e)}else o.badgePosition=`top-${o.position.indexOf("left")!==-1?"right":"left"}`;o.meta.uid=u.meta.uid,o.meta.badge=u.meta.badge+1,o.meta.badgeClass=`q-notification__badge q-notification__badge--${o.badgePosition}`+(o.badgeColor!==void 0?` bg-${o.badgeColor}`:"")+(o.badgeTextColor!==void 0?` text-${o.badgeTextColor}`:"")+(o.badgeClass?` ${o.badgeClass}`:"");const c=hn[o.position].value.indexOf(u);hn[o.position].value[c]=Ri[o.meta.group]=o}}const s=()=>{hme(o),a=void 0};if(o.timeout>0&&(o.meta.timer=setTimeout(()=>{o.meta.timer=void 0,s()},o.timeout+1e3)),o.group!==void 0)return u=>{u!==void 0?Ma("trying to update a grouped one which is forbidden",e):s()};if(a={dismiss:s,config:e,notif:o},n!==void 0){Object.assign(n,a);return}return u=>{if(a!==void 0)if(u===void 0)a.dismiss();else{const c=Object.assign({},a.config,u,{group:!1,position:o.position});Sh(c,t,a)}}}function hme(e){e.meta.timer&&(clearTimeout(e.meta.timer),e.meta.timer=void 0);const t=hn[e.position].value.indexOf(e);if(t!==-1){e.group!==void 0&&delete Ri[e.meta.group];const n=wh[String(e.meta.uid)];if(n){const{width:a,height:o}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=a,n.style.height=o}hn[e.position].value.splice(t,1),typeof e.onDismiss=="function"&&e.onDismiss()}}function Nd(e){return e!=null&&fme.test(e)!==!0}function Ma(e,t){return console.error(`Notify: ${e}`,t),!1}function gme(){return Fe({name:"QNotifications",devtools:{hide:!0},setup(){return()=>L("div",{class:"q-notifications"},vc.map(e=>L(mp,{key:e,class:yh[e],tag:"div",name:`q-notification--${e}`},()=>hn[e].value.map(t=>{const n=t.meta,a=[];if(n.hasMedia===!0&&(t.spinner!==!1?a.push(L(t.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:t.spinnerColor,size:t.spinnerSize})):t.icon?a.push(L(nt,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:t.icon,color:t.iconColor,size:t.iconSize,role:"img"})):t.avatar&&a.push(L(lc,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>L("img",{src:t.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const r={class:"q-notification__message col"};if(t.html===!0)r.innerHTML=t.caption?`<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`:t.message;else{const s=[t.message];i=t.caption?[L("div",s),L("div",{class:"q-notification__caption"},[t.caption])]:s}a.push(L("div",r,i))}const o=[L("div",{class:n.contentClass},a)];return t.progress===!0&&o.push(L("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),t.actions!==void 0&&o.push(L("div",{class:n.actionsClass},t.actions.map(i=>L(it,i)))),n.badge>1&&o.push(L("div",{key:`${n.uid}|${n.badge}`,class:t.meta.badgeClass,style:t.badgeStyle},[n.badge])),L("div",{ref:i=>{wh[String(n.uid)]=i},key:n.uid,class:n.class,...n.attrs},[L("div",{class:n.wrapperClass},o)])}))))}})}const zd={setDefaults(e){zt(e)===!0&&Object.assign($i,e)},registerType(e,t){zt(t)===!0&&(za[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create=n=>Sh(n,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,e.config.notify!==void 0&&this.setDefaults(e.config.notify),this.__installed!==!0){vc.forEach(a=>{hn[a]=ge([]);const o=["left","center","right"].includes(a)===!0?"center":a.indexOf("top")!==-1?"top":"bottom",i=a.indexOf("left")!==-1?"start":a.indexOf("right")!==-1?"end":"center",r=["left","right"].includes(a)?`items-${a==="left"?"start":"end"} justify-center`:a==="center"?"flex-center":`items-${i}`;yh[a]=`q-notifications__list q-notifications__list--${o} fixed column no-wrap ${r}`});const n=Wp("q-notify");yb(gme(),t).mount(n)}}};gp(sme).use(foe()).use(Cp,{plugins:{Notify:zd}}).use(Kpe,{theme:"space",plugins:{Notify:zd}}).mount("#app");
