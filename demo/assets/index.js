(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ke={},Po=[],pn=()=>{},Nu=()=>!1,Mi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),$i=e=>e.startsWith("onUpdate:"),ft=Object.assign,Ss=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bm=Object.prototype.hasOwnProperty,Je=(e,t)=>bm.call(e,t),qe=Array.isArray,jo=e=>Ko(e)==="[object Map]",Vu=e=>Ko(e)==="[object Set]",Cl=e=>Ko(e)==="[object Date]",_m=e=>Ko(e)==="[object RegExp]",Me=e=>typeof e=="function",ot=e=>typeof e=="string",$t=e=>typeof e=="symbol",Ge=e=>e!==null&&typeof e=="object",Hu=e=>(Ge(e)||Me(e))&&Me(e.then)&&Me(e.catch),Uu=Object.prototype.toString,Ko=e=>Uu.call(e),ym=e=>Ko(e).slice(8,-1),Wu=e=>Ko(e)==="[object Object]",Ri=e=>ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fa=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wm=/-\w/g,It=Oi(e=>e.replace(wm,t=>t.slice(1).toUpperCase())),Sm=/\B([A-Z])/g,co=Oi(e=>e.replace(Sm,"-$1").toLowerCase()),Fi=Oi(e=>e.charAt(0).toUpperCase()+e.slice(1)),ur=Oi(e=>e?`on${Fi(e)}`:""),cn=(e,t)=>!Object.is(e,t),Mo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ju=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t},km=e=>{const t=ot(e)?Number(e):NaN;return isNaN(t)?e:t};let Ql;const zi=()=>Ql||(Ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fn(e){if(qe(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],o=ot(a)?Am(a):fn(a);if(o)for(const i in o)t[i]=o[i]}return t}else if(ot(e)||Ge(e))return e}const xm=/;(?![^(]*\))/g,Cm=/:([^]+)/,Qm=/\/\*[^]*?\*\//g;function Am(e){const t={};return e.replace(Qm,"").split(xm).forEach(n=>{if(n){const a=n.split(Cm);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function nt(e){let t="";if(ot(e))t=e;else if(qe(e))for(let n=0;n<e.length;n++){const a=nt(e[n]);a&&(t+=a+" ")}else if(Ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qm=ws(Im);function Gu(e){return!!e||e===""}function Tm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let a=0;n&&a<e.length;a++)n=xs(e[a],t[a]);return n}function xs(e,t){if(e===t)return!0;let n=Cl(e),a=Cl(t);if(n||a)return n&&a?e.getTime()===t.getTime():!1;if(n=$t(e),a=$t(t),n||a)return e===t;if(n=qe(e),a=qe(t),n||a)return n&&a?Tm(e,t):!1;if(n=Ge(e),a=Ge(t),n||a){if(!n||!a)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const r in e){const s=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(s&&!l||!s&&l||!xs(e[r],t[r]))return!1}}return String(e)===String(t)}const Ku=e=>!!(e&&e.__v_isRef===!0),ve=e=>ot(e)?e:e==null?"":qe(e)||Ge(e)&&(e.toString===Uu||!Me(e.toString))?Ku(e)?ve(e.value):JSON.stringify(e,Yu,2):String(e),Yu=(e,t)=>Ku(t)?Yu(e,t.value):jo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,o],i)=>(n[dr(a,i)+" =>"]=o,n),{})}:Vu(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>dr(n))}:$t(t)?dr(t):Ge(t)&&!qe(t)&&!Wu(t)?String(t):t,dr=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let St;class Zu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=St,!t&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=St;try{return St=this,t()}finally{St=n}}}on(){++this._on===1&&(this.prevScope=St,St=this)}off(){this._on>0&&--this._on===0&&(St=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Xu(e){return new Zu(e)}function ed(){return St}function Lm(e,t=!1){St&&St.cleanups.push(e)}let et;const pr=new WeakSet;class td{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,St&&St.active&&St.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pr.has(this)&&(pr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Al(this),ad(this);const t=et,n=Zt;et=this,Zt=!0;try{return this.fn()}finally{id(this),et=t,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)As(t);this.deps=this.depsTail=void 0,Al(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gr(this)&&this.run()}get dirty(){return Gr(this)}}let nd=0,ma,ha;function od(e,t=!1){if(e.flags|=8,t){e.next=ha,ha=e;return}e.next=ma,ma=e}function Cs(){nd++}function Qs(){if(--nd>0)return;if(ha){let t=ha;for(ha=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;ma;){let t=ma;for(ma=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function ad(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function id(e){let t,n=e.depsTail,a=n;for(;a;){const o=a.prevDep;a.version===-1?(a===n&&(n=o),As(a),Em(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=o}e.deps=t,e.depsTail=n}function Gr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(rd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function rd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Sa)||(e.globalVersion=Sa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gr(e))))return;e.flags|=2;const t=e.dep,n=et,a=Zt;et=e,Zt=!0;try{ad(e);const o=e.fn(e._value);(t.version===0||cn(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{et=n,Zt=a,id(e),e.flags&=-3}}function As(e,t=!1){const{dep:n,prevSub:a,nextSub:o}=e;if(a&&(a.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)As(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Em(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Zt=!0;const sd=[];function Sn(){sd.push(Zt),Zt=!1}function kn(){const e=sd.pop();Zt=e===void 0?!0:e}function Al(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=et;et=void 0;try{t()}finally{et=n}}}let Sa=0;class Bm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Is{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!et||!Zt||et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==et)n=this.activeLink=new Bm(et,this),et.deps?(n.prevDep=et.depsTail,et.depsTail.nextDep=n,et.depsTail=n):et.deps=et.depsTail=n,ld(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=et.depsTail,n.nextDep=void 0,et.depsTail.nextDep=n,et.depsTail=n,et.deps===n&&(et.deps=a)}return n}trigger(t){this.version++,Sa++,this.notify(t)}notify(t){Cs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qs()}}}function ld(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)ld(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const li=new WeakMap,oo=Symbol(""),Kr=Symbol(""),ka=Symbol("");function kt(e,t,n){if(Zt&&et){let a=li.get(e);a||li.set(e,a=new Map);let o=a.get(n);o||(a.set(n,o=new Is),o.map=a,o.key=n),o.track()}}function _n(e,t,n,a,o,i){const r=li.get(e);if(!r){Sa++;return}const s=l=>{l&&l.trigger()};if(Cs(),t==="clear")r.forEach(s);else{const l=qe(e),u=l&&Ri(n);if(l&&n==="length"){const c=Number(a);r.forEach((d,f)=>{(f==="length"||f===ka||!$t(f)&&f>=c)&&s(d)})}else switch((n!==void 0||r.has(void 0))&&s(r.get(n)),u&&s(r.get(ka)),t){case"add":l?u&&s(r.get("length")):(s(r.get(oo)),jo(e)&&s(r.get(Kr)));break;case"delete":l||(s(r.get(oo)),jo(e)&&s(r.get(Kr)));break;case"set":jo(e)&&s(r.get(oo));break}}Qs()}function Dm(e,t){const n=li.get(e);return n&&n.get(t)}function wo(e){const t=$e(e);return t===e?t:(kt(t,"iterate",ka),Mt(e)?t:t.map(Xt))}function Ni(e){return kt(e=$e(e),"iterate",ka),e}function sn(e,t){return xn(e)?Ho(wn(e)?Xt(t):t):Xt(t)}const Pm={__proto__:null,[Symbol.iterator](){return fr(this,Symbol.iterator,e=>sn(this,e))},concat(...e){return wo(this).concat(...e.map(t=>qe(t)?wo(t):t))},entries(){return fr(this,"entries",e=>(e[1]=sn(this,e[1]),e))},every(e,t){return gn(this,"every",e,t,void 0,arguments)},filter(e,t){return gn(this,"filter",e,t,n=>n.map(a=>sn(this,a)),arguments)},find(e,t){return gn(this,"find",e,t,n=>sn(this,n),arguments)},findIndex(e,t){return gn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gn(this,"findLast",e,t,n=>sn(this,n),arguments)},findLastIndex(e,t){return gn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gn(this,"forEach",e,t,void 0,arguments)},includes(...e){return mr(this,"includes",e)},indexOf(...e){return mr(this,"indexOf",e)},join(e){return wo(this).join(e)},lastIndexOf(...e){return mr(this,"lastIndexOf",e)},map(e,t){return gn(this,"map",e,t,void 0,arguments)},pop(){return ea(this,"pop")},push(...e){return ea(this,"push",e)},reduce(e,...t){return Il(this,"reduce",e,t)},reduceRight(e,...t){return Il(this,"reduceRight",e,t)},shift(){return ea(this,"shift")},some(e,t){return gn(this,"some",e,t,void 0,arguments)},splice(...e){return ea(this,"splice",e)},toReversed(){return wo(this).toReversed()},toSorted(e){return wo(this).toSorted(e)},toSpliced(...e){return wo(this).toSpliced(...e)},unshift(...e){return ea(this,"unshift",e)},values(){return fr(this,"values",e=>sn(this,e))}};function fr(e,t,n){const a=Ni(e),o=a[t]();return a!==e&&!Mt(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=n(i.value)),i}),o}const jm=Array.prototype;function gn(e,t,n,a,o,i){const r=Ni(e),s=r!==e&&!Mt(e),l=r[t];if(l!==jm[t]){const d=l.apply(e,i);return s?Xt(d):d}let u=n;r!==e&&(s?u=function(d,f){return n.call(this,sn(e,d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const c=l.call(r,u,a);return s&&o?o(c):c}function Il(e,t,n,a){const o=Ni(e),i=o!==e&&!Mt(e);let r=n,s=!1;o!==e&&(i?(s=a.length===0,r=function(u,c,d){return s&&(s=!1,u=sn(e,u)),n.call(this,u,sn(e,c),d,e)}):n.length>3&&(r=function(u,c,d){return n.call(this,u,c,d,e)}));const l=o[t](r,...a);return s?sn(e,l):l}function mr(e,t,n){const a=$e(e);kt(a,"iterate",ka);const o=a[t](...n);return(o===-1||o===!1)&&Vi(n[0])?(n[0]=$e(n[0]),a[t](...n)):o}function ea(e,t,n=[]){Sn(),Cs();const a=$e(e)[t].apply(e,n);return Qs(),kn(),a}const Mm=ws("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function $m(e){$t(e)||(e=String(e));const t=$e(this);return kt(t,"has",e),t.hasOwnProperty(e)}class ud{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return a===(o?i?Jm:md:i?fd:pd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const r=qe(t);if(!o){let l;if(r&&(l=Pm[n]))return l;if(n==="hasOwnProperty")return $m}const s=Reflect.get(t,n,lt(t)?t:a);if(($t(n)?cd.has(n):Mm(n))||(o||kt(t,"get",n),i))return s;if(lt(s)){const l=r&&Ri(n)?s:s.value;return o&&Ge(l)?Zr(l):l}return Ge(s)?o?Zr(s):uo(s):s}}class dd extends ud{constructor(t=!1){super(!1,t)}set(t,n,a,o){let i=t[n];const r=qe(t)&&Ri(n);if(!this._isShallow){const u=xn(i);if(!Mt(a)&&!xn(a)&&(i=$e(i),a=$e(a)),!r&&lt(i)&&!lt(a))return u||(i.value=a),!0}const s=r?Number(n)<t.length:Je(t,n),l=Reflect.set(t,n,a,lt(t)?t:o);return t===$e(o)&&(s?cn(a,i)&&_n(t,"set",n,a):_n(t,"add",n,a)),l}deleteProperty(t,n){const a=Je(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&a&&_n(t,"delete",n,void 0),o}has(t,n){const a=Reflect.has(t,n);return(!$t(n)||!cd.has(n))&&kt(t,"has",n),a}ownKeys(t){return kt(t,"iterate",qe(t)?"length":oo),Reflect.ownKeys(t)}}class Rm extends ud{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Om=new dd,Fm=new Rm,zm=new dd(!0);const Yr=e=>e,Fa=e=>Reflect.getPrototypeOf(e);function Nm(e,t,n){return function(...a){const o=this.__v_raw,i=$e(o),r=jo(i),s=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,u=o[e](...a),c=n?Yr:t?Ho:Xt;return!t&&kt(i,"iterate",l?Kr:oo),ft(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:s?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function za(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Vm(e,t){const n={get(o){const i=this.__v_raw,r=$e(i),s=$e(o);e||(cn(o,s)&&kt(r,"get",o),kt(r,"get",s));const{has:l}=Fa(r),u=t?Yr:e?Ho:Xt;if(l.call(r,o))return u(i.get(o));if(l.call(r,s))return u(i.get(s));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!e&&kt($e(o),"iterate",oo),o.size},has(o){const i=this.__v_raw,r=$e(i),s=$e(o);return e||(cn(o,s)&&kt(r,"has",o),kt(r,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const r=this,s=r.__v_raw,l=$e(s),u=t?Yr:e?Ho:Xt;return!e&&kt(l,"iterate",oo),s.forEach((c,d)=>o.call(i,u(c),u(d),r))}};return ft(n,e?{add:za("add"),set:za("set"),delete:za("delete"),clear:za("clear")}:{add(o){const i=$e(this),r=Fa(i),s=$e(o),l=!t&&!Mt(o)&&!xn(o)?s:o;return r.has.call(i,l)||cn(o,l)&&r.has.call(i,o)||cn(s,l)&&r.has.call(i,s)||(i.add(l),_n(i,"add",l,l)),this},set(o,i){!t&&!Mt(i)&&!xn(i)&&(i=$e(i));const r=$e(this),{has:s,get:l}=Fa(r);let u=s.call(r,o);u||(o=$e(o),u=s.call(r,o));const c=l.call(r,o);return r.set(o,i),u?cn(i,c)&&_n(r,"set",o,i):_n(r,"add",o,i),this},delete(o){const i=$e(this),{has:r,get:s}=Fa(i);let l=r.call(i,o);l||(o=$e(o),l=r.call(i,o)),s&&s.call(i,o);const u=i.delete(o);return l&&_n(i,"delete",o,void 0),u},clear(){const o=$e(this),i=o.size!==0,r=o.clear();return i&&_n(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Nm(o,e,t)}),n}function qs(e,t){const n=Vm(e,t);return(a,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(Je(n,o)&&o in a?n:a,o,i)}const Hm={get:qs(!1,!1)},Um={get:qs(!1,!0)},Wm={get:qs(!0,!1)};const pd=new WeakMap,fd=new WeakMap,md=new WeakMap,Jm=new WeakMap;function Gm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Km(e){return e.__v_skip||!Object.isExtensible(e)?0:Gm(ym(e))}function uo(e){return xn(e)?e:Ts(e,!1,Om,Hm,pd)}function Ym(e){return Ts(e,!1,zm,Um,fd)}function Zr(e){return Ts(e,!0,Fm,Wm,md)}function Ts(e,t,n,a,o){if(!Ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Km(e);if(i===0)return e;const r=o.get(e);if(r)return r;const s=new Proxy(e,i===2?a:n);return o.set(e,s),s}function wn(e){return xn(e)?wn(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function Mt(e){return!!(e&&e.__v_isShallow)}function Vi(e){return e?!!e.__v_raw:!1}function $e(e){const t=e&&e.__v_raw;return t?$e(t):e}function Ba(e){return!Je(e,"__v_skip")&&Object.isExtensible(e)&&Ju(e,"__v_skip",!0),e}const Xt=e=>Ge(e)?uo(e):e,Ho=e=>Ge(e)?Zr(e):e;function lt(e){return e?e.__v_isRef===!0:!1}function be(e){return Zm(e,!1)}function Zm(e,t){return lt(e)?e:new Xm(e,t)}class Xm{constructor(t,n){this.dep=new Is,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:$e(t),this._value=n?t:Xt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||Mt(t)||xn(t);t=a?t:$e(t),cn(t,n)&&(this._rawValue=t,this._value=a?t:Xt(t),this.dep.trigger())}}function Ls(e){return lt(e)?e.value:e}const eh={get:(e,t,n)=>t==="__v_raw"?e:Ls(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const o=e[t];return lt(o)&&!lt(n)?(o.value=n,!0):Reflect.set(e,t,n,a)}};function hd(e){return wn(e)?e:new Proxy(e,eh)}function th(e){const t=qe(e)?new Array(e.length):{};for(const n in e)t[n]=oh(e,n);return t}class nh{constructor(t,n,a){this._object=t,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0,this._key=$t(n)?n:String(n),this._raw=$e(t);let o=!0,i=t;if(!qe(t)||$t(this._key)||!Ri(this._key))do o=!Vi(i)||Mt(i);while(o&&(i=i.__v_raw));this._shallow=o}get value(){let t=this._object[this._key];return this._shallow&&(t=Ls(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&lt(this._raw[this._key])){const n=this._object[this._key];if(lt(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Dm(this._raw,this._key)}}function oh(e,t,n){return new nh(e,t,n)}class ah{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Is(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Sa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&et!==this)return od(this,!0),!0}get value(){const t=this.dep.track();return rd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ih(e,t,n=!1){let a,o;return Me(e)?a=e:(a=e.get,o=e.set),new ah(a,o,n)}const Na={},ci=new WeakMap;let Xn;function rh(e,t=!1,n=Xn){if(n){let a=ci.get(n);a||ci.set(n,a=[]),a.push(e)}}function sh(e,t,n=Ke){const{immediate:a,deep:o,once:i,scheduler:r,augmentJob:s,call:l}=n,u=v=>o?v:Mt(v)||o===!1||o===0?yn(v,1):yn(v);let c,d,f,h,_=!1,I=!1;if(lt(e)?(d=()=>e.value,_=Mt(e)):wn(e)?(d=()=>u(e),_=!0):qe(e)?(I=!0,_=e.some(v=>wn(v)||Mt(v)),d=()=>e.map(v=>{if(lt(v))return v.value;if(wn(v))return u(v);if(Me(v))return l?l(v,2):v()})):Me(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){Sn();try{f()}finally{kn()}}const v=Xn;Xn=c;try{return l?l(e,3,[h]):e(h)}finally{Xn=v}}:d=pn,t&&o){const v=d,x=o===!0?1/0:o;d=()=>yn(v(),x)}const C=ed(),g=()=>{c.stop(),C&&C.active&&Ss(C.effects,c)};if(i&&t){const v=t;t=(...x)=>{v(...x),g()}}let y=I?new Array(e.length).fill(Na):Na;const w=v=>{if(!(!(c.flags&1)||!c.dirty&&!v))if(t){const x=c.run();if(o||_||(I?x.some((L,q)=>cn(L,y[q])):cn(x,y))){f&&f();const L=Xn;Xn=c;try{const q=[x,y===Na?void 0:I&&y[0]===Na?[]:y,h];y=x,l?l(t,3,q):t(...q)}finally{Xn=L}}}else c.run()};return s&&s(w),c=new td(d),c.scheduler=r?()=>r(w,!1):w,h=v=>rh(v,!1,c),f=c.onStop=()=>{const v=ci.get(c);if(v){if(l)l(v,4);else for(const x of v)x();ci.delete(c)}},t?a?w(!0):y=c.run():r?r(w.bind(null,!0),!0):c.run(),g.pause=c.pause.bind(c),g.resume=c.resume.bind(c),g.stop=g,g}function yn(e,t=1/0,n){if(t<=0||!Ge(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,lt(e))yn(e.value,t,n);else if(qe(e))for(let a=0;a<e.length;a++)yn(e[a],t,n);else if(Vu(e)||jo(e))e.forEach(a=>{yn(a,t,n)});else if(Wu(e)){for(const a in e)yn(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&yn(e[a],t,n)}return e}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Da(e,t,n,a){try{return a?e(...a):e()}catch(o){Hi(o,t,n)}}function en(e,t,n,a){if(Me(e)){const o=Da(e,t,n,a);return o&&Hu(o)&&o.catch(i=>{Hi(i,t,n)}),o}if(qe(e)){const o=[];for(let i=0;i<e.length;i++)o.push(en(e[i],t,n,a));return o}}function Hi(e,t,n,a=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Ke;if(t){let s=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}s=s.parent}if(i){Sn(),Da(i,null,10,[e,l,u]),kn();return}}lh(e,n,o,a,r)}function lh(e,t,n,a=!0,o=!1){if(o)throw e;console.error(e)}const Qt=[];let an=-1;const $o=[];let Pn=null,To=0;const gd=Promise.resolve();let ui=null;function rt(e){const t=ui||gd;return e?t.then(this?e.bind(this):e):t}function ch(e){let t=an+1,n=Qt.length;for(;t<n;){const a=t+n>>>1,o=Qt[a],i=xa(o);i<e||i===e&&o.flags&2?t=a+1:n=a}return t}function Es(e){if(!(e.flags&1)){const t=xa(e),n=Qt[Qt.length-1];!n||!(e.flags&2)&&t>=xa(n)?Qt.push(e):Qt.splice(ch(t),0,e),e.flags|=1,vd()}}function vd(){ui||(ui=gd.then(_d))}function uh(e){qe(e)?$o.push(...e):Pn&&e.id===-1?Pn.splice(To+1,0,e):e.flags&1||($o.push(e),e.flags|=1),vd()}function ql(e,t,n=an+1){for(;n<Qt.length;n++){const a=Qt[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Qt.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function bd(e){if($o.length){const t=[...new Set($o)].sort((n,a)=>xa(n)-xa(a));if($o.length=0,Pn){Pn.push(...t);return}for(Pn=t,To=0;To<Pn.length;To++){const n=Pn[To];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pn=null,To=0}}const xa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _d(e){try{for(an=0;an<Qt.length;an++){const t=Qt[an];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Da(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;an<Qt.length;an++){const t=Qt[an];t&&(t.flags&=-2)}an=-1,Qt.length=0,bd(),ui=null,(Qt.length||$o.length)&&_d()}}let wt=null,yd=null;function di(e){const t=wt;return wt=e,yd=e&&e.type.__scopeId||null,t}function S(e,t=wt,n){if(!t||e._n)return e;const a=(...o)=>{a._d&&gi(-1);const i=di(t);let r;try{r=e(...o)}finally{di(i),a._d&&gi(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function he(e,t){if(wt===null)return e;const n=Xi(wt),a=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,r,s,l=Ke]=t[o];i&&(Me(i)&&(i={mounted:i,updated:i}),i.deep&&yn(r),a.push({dir:i,instance:n,value:r,oldValue:void 0,arg:s,modifiers:l}))}return e}function Jn(e,t,n,a){const o=e.dirs,i=t&&t.dirs;for(let r=0;r<o.length;r++){const s=o[r];i&&(s.oldValue=i[r].value);let l=s.dir[a];l&&(Sn(),en(l,n,8,[e.el,s,e,t]),kn())}}function wd(e,t){if(xt){let n=xt.provides;const a=xt.parent&&xt.parent.provides;a===n&&(n=xt.provides=Object.create(a)),n[e]=t}}function Fn(e,t,n=!1){const a=Oe();if(a||ao){let o=ao?ao._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Me(t)?t.call(a&&a.proxy):t}}function dh(){return!!(Oe()||ao)}const ph=Symbol.for("v-scx"),fh=()=>Fn(ph);function Pe(e,t,n){return Sd(e,t,n)}function Sd(e,t,n=Ke){const{immediate:a,deep:o,flush:i,once:r}=n,s=ft({},n),l=t&&a||!t&&i!=="post";let u;if(Aa){if(i==="sync"){const h=fh();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=pn,h.resume=pn,h.pause=pn,h}}const c=xt;s.call=(h,_,I)=>en(h,c,_,I);let d=!1;i==="post"?s.scheduler=h=>{ht(h,c&&c.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(h,_)=>{_?h():Es(h)}),s.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=sh(e,t,s);return Aa&&(u?u.push(f):l&&f()),f}function mh(e,t,n){const a=this.proxy,o=ot(e)?e.includes(".")?kd(a,e):()=>a[e]:e.bind(a,a);let i;Me(t)?i=t:(i=t.handler,n=t);const r=Pa(this),s=Sd(o,i.bind(a),n);return r(),s}function kd(e,t){const n=t.split(".");return()=>{let a=e;for(let o=0;o<n.length&&a;o++)a=a[n[o]];return a}}const Gn=new WeakMap,xd=Symbol("_vte"),Cd=e=>e.__isTeleport,eo=e=>e&&(e.disabled||e.disabled===""),hh=e=>e&&(e.defer||e.defer===""),Tl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ll=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Xr=(e,t)=>{const n=e&&e.to;return ot(n)?t?t(n):null:n},gh={name:"Teleport",__isTeleport:!0,process(e,t,n,a,o,i,r,s,l,u){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:_,createText:I,createComment:C}}=u,g=eo(t.props);let{dynamicChildren:y}=t;const w=(L,q,T)=>{L.shapeFlag&16&&c(L.children,q,T,o,i,r,s,l)},v=(L=t)=>{const q=eo(L.props),T=L.target=Xr(L.props,_),M=es(T,L,I,h);T&&(r!=="svg"&&Tl(T)?r="svg":r!=="mathml"&&Ll(T)&&(r="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(T),q||(w(L,T,M),ra(L,!1)))},x=L=>{const q=()=>{Gn.get(L)===q&&(Gn.delete(L),eo(L.props)&&(w(L,n,L.anchor),ra(L,!0)),v(L))};Gn.set(L,q),ht(q,i)};if(e==null){const L=t.el=I(""),q=t.anchor=I("");if(h(L,n,a),h(q,n,a),hh(t.props)||i&&i.pendingBranch){x(t);return}g&&(w(t,n,q),ra(t,!0)),v()}else{t.el=e.el;const L=t.anchor=e.anchor,q=Gn.get(e);if(q){q.flags|=8,Gn.delete(e),x(t);return}t.targetStart=e.targetStart;const T=t.target=e.target,M=t.targetAnchor=e.targetAnchor,$=eo(e.props),z=$?n:T,O=$?L:M;if(r==="svg"||Tl(T)?r="svg":(r==="mathml"||Ll(T))&&(r="mathml"),y?(f(e.dynamicChildren,y,z,o,i,r,s),$s(e,t,!0)):l||d(e,t,z,O,o,i,r,s,!1),g)$?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Va(t,n,L,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Y=t.target=Xr(t.props,_);Y&&Va(t,Y,null,u,0)}else $&&Va(t,T,M,u,1);ra(t,g)}},remove(e,t,n,{um:a,o:{remove:o}},i){const{shapeFlag:r,children:s,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=e;let h=i||!eo(f);const _=Gn.get(e);if(_&&(_.flags|=8,Gn.delete(e),h=!1),d&&(o(u),o(c)),i&&o(l),r&16)for(let I=0;I<s.length;I++){const C=s[I];a(C,t,n,h,!!C.dynamicChildren)}},move:Va,hydrate:vh};function Va(e,t,n,{o:{insert:a},m:o},i=2){i===0&&a(e.targetAnchor,t,n);const{el:r,anchor:s,shapeFlag:l,children:u,props:c}=e,d=i===2;if(d&&a(r,t,n),(!d||eo(c))&&l&16)for(let f=0;f<u.length;f++)o(u[f],t,n,2);d&&a(s,t,n)}function vh(e,t,n,a,o,i,{o:{nextSibling:r,parentNode:s,querySelector:l,insert:u,createText:c}},d){function f(C,g){let y=g;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")t.targetStart=y;else if(y.data==="teleport anchor"){t.targetAnchor=y,C._lpa=t.targetAnchor&&r(t.targetAnchor);break}}y=r(y)}}function h(C,g){g.anchor=d(r(C),g,s(C),n,a,o,i)}const _=t.target=Xr(t.props,l),I=eo(t.props);if(_){const C=_._lpa||_.firstChild;t.shapeFlag&16&&(I?(h(e,t),f(_,C),t.targetAnchor||es(_,t,c,u,s(e)===_?e:null)):(t.anchor=r(e),f(_,C),t.targetAnchor||es(_,t,c,u),d(C&&r(C),t,_,n,a,o,i))),ra(t,I)}else I&&t.shapeFlag&16&&(h(e,t),t.targetStart=e,t.targetAnchor=r(e));return t.anchor&&r(t.anchor)}const bh=gh;function ra(e,t){const n=e.ctx;if(n&&n.ut){let a,o;for(t?(a=e.el,o=e.anchor):(a=e.targetStart,o=e.targetAnchor);a&&a!==o;)a.nodeType===1&&a.setAttribute("data-v-owner",n.uid),a=a.nextSibling;n.ut()}}function es(e,t,n,a,o=null){const i=t.targetStart=n(""),r=t.targetAnchor=n("");return i[xd]=r,e&&(a(i,e,o),a(r,e,o)),r}const rn=Symbol("_leaveCb"),ta=Symbol("_enterCb");function Qd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dt(()=>{e.isMounted=!0}),at(()=>{e.isUnmounting=!0}),e}const Ft=[Function,Array],Ad={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},Id=e=>{const t=e.subTree;return t.component?Id(t.component):t},_h={name:"BaseTransition",props:Ad,setup(e,{slots:t}){const n=Oe(),a=Qd();return()=>{const o=t.default&&Bs(t.default(),!0);if(!o||!o.length)return;const i=qd(o),r=$e(e),{mode:s}=r;if(a.isLeaving)return hr(i);const l=El(i);if(!l)return hr(i);let u=Ca(l,r,a,n,d=>u=d);l.type!==yt&&Nn(l,u);let c=n.subTree&&El(n.subTree);if(c&&c.type!==yt&&!$n(c,l)&&Id(n).type!==yt){let d=Ca(c,r,a,n);if(Nn(c,d),s==="out-in"&&l.type!==yt)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},hr(i);s==="in-out"&&l.type!==yt?d.delayLeave=(f,h,_)=>{const I=Td(a,c);I[String(c.key)]=c,f[rn]=()=>{h(),f[rn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function qd(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==yt){t=n;break}}return t}const yh=_h;function Td(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Ca(e,t,n,a,o){const{appear:i,mode:r,persisted:s=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:_,onLeaveCancelled:I,onBeforeAppear:C,onAppear:g,onAfterAppear:y,onAppearCancelled:w}=t,v=String(e.key),x=Td(n,e),L=(M,$)=>{M&&en(M,a,9,$)},q=(M,$)=>{const z=$[1];L(M,$),qe(M)?M.every(O=>O.length<=1)&&z():M.length<=1&&z()},T={mode:r,persisted:s,beforeEnter(M){let $=l;if(!n.isMounted)if(i)$=C||l;else return;M[rn]&&M[rn](!0);const z=x[v];z&&$n(e,z)&&z.el[rn]&&z.el[rn](),L($,[M])},enter(M){if(x[v]===e)return;let $=u,z=c,O=d;if(!n.isMounted)if(i)$=g||u,z=y||c,O=w||d;else return;let Y=!1;M[ta]=N=>{Y||(Y=!0,N?L(O,[M]):L(z,[M]),T.delayedLeave&&T.delayedLeave(),M[ta]=void 0)};const B=M[ta].bind(null,!1);$?q($,[M,B]):B()},leave(M,$){const z=String(e.key);if(M[ta]&&M[ta](!0),n.isUnmounting)return $();L(f,[M]);let O=!1;M[rn]=B=>{O||(O=!0,$(),B?L(I,[M]):L(_,[M]),M[rn]=void 0,x[z]===e&&delete x[z])};const Y=M[rn].bind(null,!1);x[z]=e,h?q(h,[M,Y]):Y()},clone(M){const $=Ca(M,t,n,a,o);return o&&o($),$}};return T}function hr(e){if(Ui(e))return e=Cn(e),e.children=null,e}function El(e){if(!Ui(e))return Cd(e.type)&&e.children?qd(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Me(n.default))return n.default()}}function Nn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Nn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bs(e,t=!1,n){let a=[],o=0;for(let i=0;i<e.length;i++){let r=e[i];const s=n==null?r.key:String(n)+String(r.key!=null?r.key:i);r.type===De?(r.patchFlag&128&&o++,a=a.concat(Bs(r.children,t,s))):(t||r.type!==yt)&&a.push(s!=null?Cn(r,{key:s}):r)}if(o>1)for(let i=0;i<a.length;i++)a[i].patchFlag=-2;return a}function Ld(e,t){return Me(e)?ft({name:e.name},t,{setup:e}):e}function Ed(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Bl(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const pi=new WeakMap;function ga(e,t,n,a,o=!1){if(qe(e)){e.forEach((I,C)=>ga(I,t&&(qe(t)?t[C]:t),n,a,o));return}if(zn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ga(e,t,n,a.component.subTree);return}const i=a.shapeFlag&4?Xi(a.component):a.el,r=o?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===Ke?s.refs={}:s.refs,d=s.setupState,f=$e(d),h=d===Ke?Nu:I=>Bl(c,I)?!1:Je(f,I),_=(I,C)=>!(C&&Bl(c,C));if(u!=null&&u!==l){if(Dl(t),ot(u))c[u]=null,h(u)&&(d[u]=null);else if(lt(u)){const I=t;_(u,I.k)&&(u.value=null),I.k&&(c[I.k]=null)}}if(Me(l))Da(l,s,12,[r,c]);else{const I=ot(l),C=lt(l);if(I||C){const g=()=>{if(e.f){const y=I?h(l)?d[l]:c[l]:_()||!e.k?l.value:c[e.k];if(o)qe(y)&&Ss(y,i);else if(qe(y))y.includes(i)||y.push(i);else if(I)c[l]=[i],h(l)&&(d[l]=c[l]);else{const w=[i];_(l,e.k)&&(l.value=w),e.k&&(c[e.k]=w)}}else I?(c[l]=r,h(l)&&(d[l]=r)):C&&(_(l,e.k)&&(l.value=r),e.k&&(c[e.k]=r))};if(r){const y=()=>{g(),pi.delete(e)};y.id=-1,pi.set(e,y),ht(y,n)}else Dl(e),g()}}}function Dl(e){const t=pi.get(e);t&&(t.flags|=8,pi.delete(e))}zi().requestIdleCallback;zi().cancelIdleCallback;const zn=e=>!!e.type.__asyncLoader,Ui=e=>e.type.__isKeepAlive,wh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Oe(),a=n.ctx;if(!a.renderer)return()=>{const y=t.default&&t.default();return y&&y.length===1?y[0]:y};const o=new Map,i=new Set;let r=null;const s=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:d}}}=a,f=d("div");a.activate=(y,w,v,x,L)=>{const q=y.component;u(y,w,v,0,s),l(q.vnode,y,w,v,q,s,x,y.slotScopeIds,L),ht(()=>{q.isDeactivated=!1,q.a&&Mo(q.a);const T=y.props&&y.props.onVnodeMounted;T&&Nt(T,q.parent,y)},s)},a.deactivate=y=>{const w=y.component;mi(w.m),mi(w.a),u(y,f,null,1,s),ht(()=>{w.da&&Mo(w.da);const v=y.props&&y.props.onVnodeUnmounted;v&&Nt(v,w.parent,y),w.isDeactivated=!0},s)};function h(y){gr(y),c(y,n,s,!0)}function _(y){o.forEach((w,v)=>{const x=rs(zn(w)?w.type.__asyncResolved||{}:w.type);x&&!y(x)&&I(v)})}function I(y){const w=o.get(y);w&&(!r||!$n(w,r))?h(w):r&&gr(r),o.delete(y),i.delete(y)}Pe(()=>[e.include,e.exclude],([y,w])=>{y&&_(v=>sa(y,v)),w&&_(v=>!sa(w,v))},{flush:"post",deep:!0});let C=null;const g=()=>{C!=null&&(hi(n.subTree.type)?ht(()=>{o.set(C,Ha(n.subTree))},n.subTree.suspense):o.set(C,Ha(n.subTree)))};return Dt(g),Ki(g),at(()=>{o.forEach(y=>{const{subTree:w,suspense:v}=n,x=Ha(w);if(y.type===x.type&&y.key===x.key){gr(x);const L=x.component.da;L&&ht(L,v);return}h(y)})}),()=>{if(C=null,!t.default)return r=null;const y=t.default(),w=y[0];if(y.length>1)return r=null,y;if(!Uo(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return r=null,w;let v=Ha(w);if(v.type===yt)return r=null,v;const x=v.type,L=rs(zn(v)?v.type.__asyncResolved||{}:x),{include:q,exclude:T,max:M}=e;if(q&&(!L||!sa(q,L))||T&&L&&sa(T,L))return v.shapeFlag&=-257,r=v,w;const $=v.key==null?x:v.key,z=o.get($);return v.el&&(v=Cn(v),w.shapeFlag&128&&(w.ssContent=v)),C=$,z?(v.el=z.el,v.component=z.component,v.transition&&Nn(v,v.transition),v.shapeFlag|=512,i.delete($),i.add($)):(i.add($),M&&i.size>parseInt(M,10)&&I(i.values().next().value)),v.shapeFlag|=256,r=v,hi(w.type)?w:v}}},Sh=wh;function sa(e,t){return qe(e)?e.some(n=>sa(n,t)):ot(e)?e.split(",").includes(t):_m(e)?(e.lastIndex=0,e.test(t)):!1}function Wi(e,t){Bd(e,"a",t)}function Yo(e,t){Bd(e,"da",t)}function Bd(e,t,n=xt){const a=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ji(t,a,n),n){let o=n.parent;for(;o&&o.parent;)Ui(o.parent.vnode)&&kh(a,t,n,o),o=o.parent}}function kh(e,t,n,a){const o=Ji(t,e,a,!0);Ps(()=>{Ss(a[t],o)},n)}function gr(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ha(e){return e.shapeFlag&128?e.ssContent:e}function Ji(e,t,n=xt,a=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Sn();const s=Pa(n),l=en(t,n,e,r);return s(),kn(),l});return a?o.unshift(i):o.push(i),i}}const In=e=>(t,n=xt)=>{(!Aa||e==="sp")&&Ji(e,(...a)=>t(...a),n)},Ds=In("bm"),Dt=In("m"),Gi=In("bu"),Ki=In("u"),at=In("bum"),Ps=In("um"),xh=In("sp"),Ch=In("rtg"),Qh=In("rtc");function Ah(e,t=xt){Ji("ec",e,t)}const Dd="components";function G(e,t){return jd(Dd,e,!0,t)||e}const Pd=Symbol.for("v-ndc");function Ih(e){return ot(e)?jd(Dd,e,!1)||e:e||Pd}function jd(e,t,n=!0,a=!1){const o=wt||xt;if(o){const i=o.type;{const s=rs(i,!1);if(s&&(s===t||s===It(t)||s===Fi(It(t))))return i}const r=Pl(o[e]||i[e],t)||Pl(o.appContext[e],t);return!r&&a?i:r}}function Pl(e,t){return e&&(e[t]||e[It(t)]||e[Fi(It(t))])}function Ye(e,t,n,a){let o;const i=n,r=qe(e);if(r||ot(e)){const s=r&&wn(e);let l=!1,u=!1;s&&(l=!Mt(e),u=xn(e),e=Ni(e)),o=new Array(e.length);for(let c=0,d=e.length;c<d;c++)o[c]=t(l?u?Ho(Xt(e[c])):Xt(e[c]):e[c],c,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,i)}else if(Ge(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>t(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,u=s.length;l<u;l++){const c=s[l];o[l]=t(e[c],c,l,i)}}else o=[];return o}function Md(e,t){for(let n=0;n<t.length;n++){const a=t[n];if(qe(a))for(let o=0;o<a.length;o++)e[a[o].name]=a[o].fn;else a&&(e[a.name]=a.key?(...o)=>{const i=a.fn(...o);return i&&(i.key=a.key),i}:a.fn)}return e}function _t(e,t,n={},a,o){if(wt.ce||wt.parent&&zn(wt.parent)&&wt.parent.ce){const u=Object.keys(n).length>0;return t!=="default"&&(n.name=t),D(),pe(De,null,[p("slot",n,a&&a())],u?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),D();const r=i&&$d(i(n)),s=n.key||r&&r.key,l=pe(De,{key:(s&&!$t(s)?s:`_${t}`)+(!r&&a?"_fb":"")},r||(a?a():[]),r&&e._===1?64:-2);return i&&i._c&&(i._d=!0),l}function $d(e){return e.some(t=>Uo(t)?!(t.type===yt||t.type===De&&!$d(t.children)):!0)?e:null}const ts=e=>e?np(e)?Xi(e):ts(e.parent):null,va=ft(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Od(e),$forceUpdate:e=>e.f||(e.f=()=>{Es(e.update)}),$nextTick:e=>e.n||(e.n=rt.bind(e.proxy)),$watch:e=>mh.bind(e)}),vr=(e,t)=>e!==Ke&&!e.__isScriptSetup&&Je(e,t),qh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:o,props:i,accessCache:r,type:s,appContext:l}=e;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(vr(a,t))return r[t]=1,a[t];if(o!==Ke&&Je(o,t))return r[t]=2,o[t];if(Je(i,t))return r[t]=3,i[t];if(n!==Ke&&Je(n,t))return r[t]=4,n[t];ns&&(r[t]=0)}}const u=va[t];let c,d;if(u)return t==="$attrs"&&kt(e.attrs,"get",""),u(e);if((c=s.__cssModules)&&(c=c[t]))return c;if(n!==Ke&&Je(n,t))return r[t]=4,n[t];if(d=l.config.globalProperties,Je(d,t))return d[t]},set({_:e},t,n){const{data:a,setupState:o,ctx:i}=e;return vr(o,t)?(o[t]=n,!0):a!==Ke&&Je(a,t)?(a[t]=n,!0):Je(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:o,props:i,type:r}},s){let l;return!!(n[s]||e!==Ke&&s[0]!=="$"&&Je(e,s)||vr(t,s)||Je(i,s)||Je(a,s)||Je(va,s)||Je(o.config.globalProperties,s)||(l=r.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Je(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function jl(e){return qe(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function Th(e){const t=Od(e),n=e.proxy,a=e.ctx;ns=!1,t.beforeCreate&&Ml(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:r,watch:s,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:I,deactivated:C,beforeDestroy:g,beforeUnmount:y,destroyed:w,unmounted:v,render:x,renderTracked:L,renderTriggered:q,errorCaptured:T,serverPrefetch:M,expose:$,inheritAttrs:z,components:O,directives:Y,filters:B}=t;if(u&&Lh(u,a,null),r)for(const ee in r){const J=r[ee];Me(J)&&(a[ee]=J.bind(n))}if(o){const ee=o.call(n,n);Ge(ee)&&(e.data=uo(ee))}if(ns=!0,i)for(const ee in i){const J=i[ee],ge=Me(J)?J.bind(n,n):Me(J.get)?J.get.bind(n,n):pn,Ie=!Me(J)&&Me(J.set)?J.set.bind(n):pn,H=E({get:ge,set:Ie});Object.defineProperty(a,ee,{enumerable:!0,configurable:!0,get:()=>H.value,set:F=>H.value=F})}if(s)for(const ee in s)Rd(s[ee],a,n,ee);if(l){const ee=Me(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(J=>{wd(J,ee[J])})}c&&Ml(c,e,"c");function ne(ee,J){qe(J)?J.forEach(ge=>ee(ge.bind(n))):J&&ee(J.bind(n))}if(ne(Ds,d),ne(Dt,f),ne(Gi,h),ne(Ki,_),ne(Wi,I),ne(Yo,C),ne(Ah,T),ne(Qh,L),ne(Ch,q),ne(at,y),ne(Ps,v),ne(xh,M),qe($))if($.length){const ee=e.exposed||(e.exposed={});$.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:ge=>n[J]=ge,enumerable:!0})})}else e.exposed||(e.exposed={});x&&e.render===pn&&(e.render=x),z!=null&&(e.inheritAttrs=z),O&&(e.components=O),Y&&(e.directives=Y),M&&Ed(e)}function Lh(e,t,n=pn){qe(e)&&(e=os(e));for(const a in e){const o=e[a];let i;Ge(o)?"default"in o?i=Fn(o.from||a,o.default,!0):i=Fn(o.from||a):i=Fn(o),lt(i)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):t[a]=i}}function Ml(e,t,n){en(qe(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rd(e,t,n,a){let o=a.includes(".")?kd(n,a):()=>n[a];if(ot(e)){const i=t[e];Me(i)&&Pe(o,i)}else if(Me(e))Pe(o,e.bind(n));else if(Ge(e))if(qe(e))e.forEach(i=>Rd(i,t,n,a));else{const i=Me(e.handler)?e.handler.bind(n):t[e.handler];Me(i)&&Pe(o,i,e)}}function Od(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=e.appContext,s=i.get(t);let l;return s?l=s:!o.length&&!n&&!a?l=t:(l={},o.length&&o.forEach(u=>fi(l,u,r,!0)),fi(l,t,r)),Ge(t)&&i.set(t,l),l}function fi(e,t,n,a=!1){const{mixins:o,extends:i}=t;i&&fi(e,i,n,!0),o&&o.forEach(r=>fi(e,r,n,!0));for(const r in t)if(!(a&&r==="expose")){const s=Eh[r]||n&&n[r];e[r]=s?s(e[r],t[r]):t[r]}return e}const Eh={data:$l,props:Rl,emits:Rl,methods:la,computed:la,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:la,directives:la,watch:Dh,provide:$l,inject:Bh};function $l(e,t){return t?e?function(){return ft(Me(e)?e.call(this,this):e,Me(t)?t.call(this,this):t)}:t:e}function Bh(e,t){return la(os(e),os(t))}function os(e){if(qe(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ct(e,t){return e?[...new Set([].concat(e,t))]:t}function la(e,t){return e?ft(Object.create(null),e,t):t}function Rl(e,t){return e?qe(e)&&qe(t)?[...new Set([...e,...t])]:ft(Object.create(null),jl(e),jl(t??{})):t}function Dh(e,t){if(!e)return t;if(!t)return e;const n=ft(Object.create(null),e);for(const a in t)n[a]=Ct(e[a],t[a]);return n}function Fd(){return{app:null,config:{isNativeTag:Nu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ph=0;function jh(e,t){return function(a,o=null){Me(a)||(a=ft({},a)),o!=null&&!Ge(o)&&(o=null);const i=Fd(),r=new WeakSet,s=[];let l=!1;const u=i.app={_uid:Ph++,_component:a,_props:o,_container:null,_context:i,_instance:null,version:pg,get config(){return i.config},set config(c){},use(c,...d){return r.has(c)||(c&&Me(c.install)?(r.add(c),c.install(u,...d)):Me(c)&&(r.add(c),c(u,...d))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,d){return d?(i.components[c]=d,u):i.components[c]},directive(c,d){return d?(i.directives[c]=d,u):i.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||p(a,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Xi(h.component)}},onUnmount(c){s.push(c)},unmount(){l&&(en(s,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return i.provides[c]=d,u},runWithContext(c){const d=ao;ao=u;try{return c()}finally{ao=d}}};return u}}let ao=null;const Mh=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${It(t)}Modifiers`]||e[`${co(t)}Modifiers`];function $h(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||Ke;let o=n;const i=t.startsWith("update:"),r=i&&Mh(a,t.slice(7));r&&(r.trim&&(o=n.map(c=>ot(c)?c.trim():c)),r.number&&(o=n.map(ks)));let s,l=a[s=ur(t)]||a[s=ur(It(t))];!l&&i&&(l=a[s=ur(co(t))]),l&&en(l,e,6,o);const u=a[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,en(u,e,6,o)}}const Rh=new WeakMap;function zd(e,t,n=!1){const a=n?Rh:t.emitsCache,o=a.get(e);if(o!==void 0)return o;const i=e.emits;let r={},s=!1;if(!Me(e)){const l=u=>{const c=zd(u,t,!0);c&&(s=!0,ft(r,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Ge(e)&&a.set(e,null),null):(qe(i)?i.forEach(l=>r[l]=null):ft(r,i),Ge(e)&&a.set(e,r),r)}function Yi(e,t){return!e||!Mi(t)?!1:(t=t.slice(2).replace(/Once$/,""),Je(e,t[0].toLowerCase()+t.slice(1))||Je(e,co(t))||Je(e,t))}function Ol(e){const{type:t,vnode:n,proxy:a,withProxy:o,propsOptions:[i],slots:r,attrs:s,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:_,inheritAttrs:I}=e,C=di(e);let g,y;try{if(n.shapeFlag&4){const v=o||a,x=v;g=ln(u.call(x,v,c,d,h,f,_)),y=s}else{const v=t;g=ln(v.length>1?v(d,{attrs:s,slots:r,emit:l}):v(d,null)),y=t.props?s:Oh(s)}}catch(v){ba.length=0,Hi(v,e,1),g=p(yt)}let w=g;if(y&&I!==!1){const v=Object.keys(y),{shapeFlag:x}=w;v.length&&x&7&&(i&&v.some($i)&&(y=Fh(y,i)),w=Cn(w,y,!1,!0))}return n.dirs&&(w=Cn(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Nn(w,n.transition),g=w,di(C),g}const Oh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mi(n))&&((t||(t={}))[n]=e[n]);return t},Fh=(e,t)=>{const n={};for(const a in e)(!$i(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function zh(e,t,n){const{props:a,children:o,component:i}=e,{props:r,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?Fl(a,r,u):!!r;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(Nd(r,a,f)&&!Yi(u,f))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:a===r?!1:a?r?Fl(a,r,u):!0:!!r;return!1}function Fl(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const i=a[o];if(Nd(t,e,i)&&!Yi(n,i))return!0}return!1}function Nd(e,t,n){const a=e[n],o=t[n];return n==="style"&&Ge(a)&&Ge(o)?!xs(a,o):a!==o}function Nh({vnode:e,parent:t,suspense:n},a){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=a,e=o),o===e)(e=t.vnode).el=a,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=a)}const Vd={},Hd=()=>Object.create(Vd),Ud=e=>Object.getPrototypeOf(e)===Vd;function Vh(e,t,n,a=!1){const o={},i=Hd();e.propsDefaults=Object.create(null),Wd(e,t,o,i);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=a?o:Ym(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Hh(e,t,n,a){const{props:o,attrs:i,vnode:{patchFlag:r}}=e,s=$e(o),[l]=e.propsOptions;let u=!1;if((a||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(Yi(e.emitsOptions,f))continue;const h=t[f];if(l)if(Je(i,f))h!==i[f]&&(i[f]=h,u=!0);else{const _=It(f);o[_]=as(l,s,_,h,e,!1)}else h!==i[f]&&(i[f]=h,u=!0)}}}else{Wd(e,t,o,i)&&(u=!0);let c;for(const d in s)(!t||!Je(t,d)&&((c=co(d))===d||!Je(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(o[d]=as(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!t||!Je(t,d))&&(delete i[d],u=!0)}u&&_n(e.attrs,"set","")}function Wd(e,t,n,a){const[o,i]=e.propsOptions;let r=!1,s;if(t)for(let l in t){if(fa(l))continue;const u=t[l];let c;o&&Je(o,c=It(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:Yi(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,r=!0)}if(i){const l=$e(n),u=s||Ke;for(let c=0;c<i.length;c++){const d=i[c];n[d]=as(o,l,d,u[d],e,!Je(u,d))}}return r}function as(e,t,n,a,o,i){const r=e[n];if(r!=null){const s=Je(r,"default");if(s&&a===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&Me(l)){const{propsDefaults:u}=o;if(n in u)a=u[n];else{const c=Pa(o);a=u[n]=l.call(null,t),c()}}else a=l;o.ce&&o.ce._setProp(n,a)}r[0]&&(i&&!s?a=!1:r[1]&&(a===""||a===co(n))&&(a=!0))}return a}const Uh=new WeakMap;function Jd(e,t,n=!1){const a=n?Uh:t.propsCache,o=a.get(e);if(o)return o;const i=e.props,r={},s=[];let l=!1;if(!Me(e)){const c=d=>{l=!0;const[f,h]=Jd(d,t,!0);ft(r,f),h&&s.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Ge(e)&&a.set(e,Po),Po;if(qe(i))for(let c=0;c<i.length;c++){const d=It(i[c]);zl(d)&&(r[d]=Ke)}else if(i)for(const c in i){const d=It(c);if(zl(d)){const f=i[c],h=r[d]=qe(f)||Me(f)?{type:f}:ft({},f),_=h.type;let I=!1,C=!0;if(qe(_))for(let g=0;g<_.length;++g){const y=_[g],w=Me(y)&&y.name;if(w==="Boolean"){I=!0;break}else w==="String"&&(C=!1)}else I=Me(_)&&_.name==="Boolean";h[0]=I,h[1]=C,(I||Je(h,"default"))&&s.push(d)}}const u=[r,s];return Ge(e)&&a.set(e,u),u}function zl(e){return e[0]!=="$"&&!fa(e)}const js=e=>e==="_"||e==="_ctx"||e==="$stable",Ms=e=>qe(e)?e.map(ln):[ln(e)],Wh=(e,t,n)=>{if(t._n)return t;const a=S((...o)=>Ms(t(...o)),n);return a._c=!1,a},Gd=(e,t,n)=>{const a=e._ctx;for(const o in e){if(js(o))continue;const i=e[o];if(Me(i))t[o]=Wh(o,i,a);else if(i!=null){const r=Ms(i);t[o]=()=>r}}},Kd=(e,t)=>{const n=Ms(t);e.slots.default=()=>n},Yd=(e,t,n)=>{for(const a in t)(n||!js(a))&&(e[a]=t[a])},Jh=(e,t,n)=>{const a=e.slots=Hd();if(e.vnode.shapeFlag&32){const o=t._;o?(Yd(a,t,n),n&&Ju(a,"_",o,!0)):Gd(t,a)}else t&&Kd(e,t)},Gh=(e,t,n)=>{const{vnode:a,slots:o}=e;let i=!0,r=Ke;if(a.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:Yd(o,t,n):(i=!t.$stable,Gd(t,o)),r=t}else t&&(Kd(e,t),r={default:1});if(i)for(const s in o)!js(s)&&r[s]==null&&delete o[s]},ht=eg;function Kh(e){return Yh(e)}function Yh(e,t){const n=zi();n.__VUE__=!0;const{insert:a,remove:o,patchProp:i,createElement:r,createText:s,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=pn,insertStaticContent:_}=e,I=(A,P,K,re=null,ae=null,se=null,me=void 0,fe=null,de=!!P.dynamicChildren)=>{if(A===P)return;A&&!$n(A,P)&&(re=m(A),F(A,ae,se,!0),A=null),P.patchFlag===-2&&(de=!1,P.dynamicChildren=null);const{type:oe,ref:X,shapeFlag:te}=P;switch(oe){case Zi:C(A,P,K,re);break;case yt:g(A,P,K,re);break;case _r:A==null&&y(P,K,re,me);break;case De:O(A,P,K,re,ae,se,me,fe,de);break;default:te&1?x(A,P,K,re,ae,se,me,fe,de):te&6?Y(A,P,K,re,ae,se,me,fe,de):(te&64||te&128)&&oe.process(A,P,K,re,ae,se,me,fe,de,U)}X!=null&&ae?ga(X,A&&A.ref,se,P||A,!P):X==null&&A&&A.ref!=null&&ga(A.ref,null,se,A,!0)},C=(A,P,K,re)=>{if(A==null)a(P.el=s(P.children),K,re);else{const ae=P.el=A.el;P.children!==A.children&&u(ae,P.children)}},g=(A,P,K,re)=>{A==null?a(P.el=l(P.children||""),K,re):P.el=A.el},y=(A,P,K,re)=>{[A.el,A.anchor]=_(A.children,P,K,re,A.el,A.anchor)},w=({el:A,anchor:P},K,re)=>{let ae;for(;A&&A!==P;)ae=f(A),a(A,K,re),A=ae;a(P,K,re)},v=({el:A,anchor:P})=>{let K;for(;A&&A!==P;)K=f(A),o(A),A=K;o(P)},x=(A,P,K,re,ae,se,me,fe,de)=>{if(P.type==="svg"?me="svg":P.type==="math"&&(me="mathml"),A==null)L(P,K,re,ae,se,me,fe,de);else{const oe=A.el&&A.el._isVueCE?A.el:null;try{oe&&oe._beginPatch(),M(A,P,ae,se,me,fe,de)}finally{oe&&oe._endPatch()}}},L=(A,P,K,re,ae,se,me,fe)=>{let de,oe;const{props:X,shapeFlag:te,transition:ue,dirs:_e}=A;if(de=A.el=r(A.type,se,X&&X.is,X),te&8?c(de,A.children):te&16&&T(A.children,de,null,re,ae,br(A,se),me,fe),_e&&Jn(A,null,re,"created"),q(de,A,A.scopeId,me,re),X){for(const xe in X)xe!=="value"&&!fa(xe)&&i(de,xe,null,X[xe],se,re);"value"in X&&i(de,"value",null,X.value,se),(oe=X.onVnodeBeforeMount)&&Nt(oe,re,A)}_e&&Jn(A,null,re,"beforeMount");const Ae=Zh(ae,ue);Ae&&ue.beforeEnter(de),a(de,P,K),((oe=X&&X.onVnodeMounted)||Ae||_e)&&ht(()=>{try{oe&&Nt(oe,re,A),Ae&&ue.enter(de),_e&&Jn(A,null,re,"mounted")}finally{}},ae)},q=(A,P,K,re,ae)=>{if(K&&h(A,K),re)for(let se=0;se<re.length;se++)h(A,re[se]);if(ae){let se=ae.subTree;if(P===se||hi(se.type)&&(se.ssContent===P||se.ssFallback===P)){const me=ae.vnode;q(A,me,me.scopeId,me.slotScopeIds,ae.parent)}}},T=(A,P,K,re,ae,se,me,fe,de=0)=>{for(let oe=de;oe<A.length;oe++){const X=A[oe]=fe?bn(A[oe]):ln(A[oe]);I(null,X,P,K,re,ae,se,me,fe)}},M=(A,P,K,re,ae,se,me)=>{const fe=P.el=A.el;let{patchFlag:de,dynamicChildren:oe,dirs:X}=P;de|=A.patchFlag&16;const te=A.props||Ke,ue=P.props||Ke;let _e;if(K&&Kn(K,!1),(_e=ue.onVnodeBeforeUpdate)&&Nt(_e,K,P,A),X&&Jn(P,A,K,"beforeUpdate"),K&&Kn(K,!0),(te.innerHTML&&ue.innerHTML==null||te.textContent&&ue.textContent==null)&&c(fe,""),oe?$(A.dynamicChildren,oe,fe,K,re,br(P,ae),se):me||J(A,P,fe,null,K,re,br(P,ae),se,!1),de>0){if(de&16)z(fe,te,ue,K,ae);else if(de&2&&te.class!==ue.class&&i(fe,"class",null,ue.class,ae),de&4&&i(fe,"style",te.style,ue.style,ae),de&8){const Ae=P.dynamicProps;for(let xe=0;xe<Ae.length;xe++){const Ce=Ae[xe],je=te[Ce],Fe=ue[Ce];(Fe!==je||Ce==="value")&&i(fe,Ce,je,Fe,ae,K)}}de&1&&A.children!==P.children&&c(fe,P.children)}else!me&&oe==null&&z(fe,te,ue,K,ae);((_e=ue.onVnodeUpdated)||X)&&ht(()=>{_e&&Nt(_e,K,P,A),X&&Jn(P,A,K,"updated")},re)},$=(A,P,K,re,ae,se,me)=>{for(let fe=0;fe<P.length;fe++){const de=A[fe],oe=P[fe],X=de.el&&(de.type===De||!$n(de,oe)||de.shapeFlag&198)?d(de.el):K;I(de,oe,X,null,re,ae,se,me,!0)}},z=(A,P,K,re,ae)=>{if(P!==K){if(P!==Ke)for(const se in P)!fa(se)&&!(se in K)&&i(A,se,P[se],null,ae,re);for(const se in K){if(fa(se))continue;const me=K[se],fe=P[se];me!==fe&&se!=="value"&&i(A,se,fe,me,ae,re)}"value"in K&&i(A,"value",P.value,K.value,ae)}},O=(A,P,K,re,ae,se,me,fe,de)=>{const oe=P.el=A?A.el:s(""),X=P.anchor=A?A.anchor:s("");let{patchFlag:te,dynamicChildren:ue,slotScopeIds:_e}=P;_e&&(fe=fe?fe.concat(_e):_e),A==null?(a(oe,K,re),a(X,K,re),T(P.children||[],K,X,ae,se,me,fe,de)):te>0&&te&64&&ue&&A.dynamicChildren&&A.dynamicChildren.length===ue.length?($(A.dynamicChildren,ue,K,ae,se,me,fe),(P.key!=null||ae&&P===ae.subTree)&&$s(A,P,!0)):J(A,P,K,X,ae,se,me,fe,de)},Y=(A,P,K,re,ae,se,me,fe,de)=>{P.slotScopeIds=fe,A==null?P.shapeFlag&512?ae.ctx.activate(P,K,re,me,de):B(P,K,re,ae,se,me,de):N(A,P,de)},B=(A,P,K,re,ae,se,me)=>{const fe=A.component=rg(A,re,ae);if(Ui(A)&&(fe.ctx.renderer=U),sg(fe,!1,me),fe.asyncDep){if(ae&&ae.registerDep(fe,ne,me),!A.el){const de=fe.subTree=p(yt);g(null,de,P,K),A.placeholder=de.el}}else ne(fe,A,P,K,ae,se,me)},N=(A,P,K)=>{const re=P.component=A.component;if(zh(A,P,K))if(re.asyncDep&&!re.asyncResolved){ee(re,P,K);return}else re.next=P,re.update();else P.el=A.el,re.vnode=P},ne=(A,P,K,re,ae,se,me)=>{const fe=()=>{if(A.isMounted){let{next:te,bu:ue,u:_e,parent:Ae,vnode:xe}=A;{const mt=Zd(A);if(mt){te&&(te.el=xe.el,ee(A,te,me)),mt.asyncDep.then(()=>{ht(()=>{A.isUnmounted||oe()},ae)});return}}let Ce=te,je;Kn(A,!1),te?(te.el=xe.el,ee(A,te,me)):te=xe,ue&&Mo(ue),(je=te.props&&te.props.onVnodeBeforeUpdate)&&Nt(je,Ae,te,xe),Kn(A,!0);const Fe=Ol(A),it=A.subTree;A.subTree=Fe,I(it,Fe,d(it.el),m(it),A,ae,se),te.el=Fe.el,Ce===null&&Nh(A,Fe.el),_e&&ht(_e,ae),(je=te.props&&te.props.onVnodeUpdated)&&ht(()=>Nt(je,Ae,te,xe),ae)}else{let te;const{el:ue,props:_e}=P,{bm:Ae,m:xe,parent:Ce,root:je,type:Fe}=A,it=zn(P);Kn(A,!1),Ae&&Mo(Ae),!it&&(te=_e&&_e.onVnodeBeforeMount)&&Nt(te,Ce,P),Kn(A,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(Fe,A.parent?A.parent.type:void 0);const mt=A.subTree=Ol(A);I(null,mt,K,re,A,ae,se),P.el=mt.el}if(xe&&ht(xe,ae),!it&&(te=_e&&_e.onVnodeMounted)){const mt=P;ht(()=>Nt(te,Ce,mt),ae)}(P.shapeFlag&256||Ce&&zn(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&A.a&&ht(A.a,ae),A.isMounted=!0,P=K=re=null}};A.scope.on();const de=A.effect=new td(fe);A.scope.off();const oe=A.update=de.run.bind(de),X=A.job=de.runIfDirty.bind(de);X.i=A,X.id=A.uid,de.scheduler=()=>Es(X),Kn(A,!0),oe()},ee=(A,P,K)=>{P.component=A;const re=A.vnode.props;A.vnode=P,A.next=null,Hh(A,P.props,re,K),Gh(A,P.children,K),Sn(),ql(A),kn()},J=(A,P,K,re,ae,se,me,fe,de=!1)=>{const oe=A&&A.children,X=A?A.shapeFlag:0,te=P.children,{patchFlag:ue,shapeFlag:_e}=P;if(ue>0){if(ue&128){Ie(oe,te,K,re,ae,se,me,fe,de);return}else if(ue&256){ge(oe,te,K,re,ae,se,me,fe,de);return}}_e&8?(X&16&&ie(oe,ae,se),te!==oe&&c(K,te)):X&16?_e&16?Ie(oe,te,K,re,ae,se,me,fe,de):ie(oe,ae,se,!0):(X&8&&c(K,""),_e&16&&T(te,K,re,ae,se,me,fe,de))},ge=(A,P,K,re,ae,se,me,fe,de)=>{A=A||Po,P=P||Po;const oe=A.length,X=P.length,te=Math.min(oe,X);let ue;for(ue=0;ue<te;ue++){const _e=P[ue]=de?bn(P[ue]):ln(P[ue]);I(A[ue],_e,K,null,ae,se,me,fe,de)}oe>X?ie(A,ae,se,!0,!1,te):T(P,K,re,ae,se,me,fe,de,te)},Ie=(A,P,K,re,ae,se,me,fe,de)=>{let oe=0;const X=P.length;let te=A.length-1,ue=X-1;for(;oe<=te&&oe<=ue;){const _e=A[oe],Ae=P[oe]=de?bn(P[oe]):ln(P[oe]);if($n(_e,Ae))I(_e,Ae,K,null,ae,se,me,fe,de);else break;oe++}for(;oe<=te&&oe<=ue;){const _e=A[te],Ae=P[ue]=de?bn(P[ue]):ln(P[ue]);if($n(_e,Ae))I(_e,Ae,K,null,ae,se,me,fe,de);else break;te--,ue--}if(oe>te){if(oe<=ue){const _e=ue+1,Ae=_e<X?P[_e].el:re;for(;oe<=ue;)I(null,P[oe]=de?bn(P[oe]):ln(P[oe]),K,Ae,ae,se,me,fe,de),oe++}}else if(oe>ue)for(;oe<=te;)F(A[oe],ae,se,!0),oe++;else{const _e=oe,Ae=oe,xe=new Map;for(oe=Ae;oe<=ue;oe++){const Ee=P[oe]=de?bn(P[oe]):ln(P[oe]);Ee.key!=null&&xe.set(Ee.key,oe)}let Ce,je=0;const Fe=ue-Ae+1;let it=!1,mt=0;const ce=new Array(Fe);for(oe=0;oe<Fe;oe++)ce[oe]=0;for(oe=_e;oe<=te;oe++){const Ee=A[oe];if(je>=Fe){F(Ee,ae,se,!0);continue}let ze;if(Ee.key!=null)ze=xe.get(Ee.key);else for(Ce=Ae;Ce<=ue;Ce++)if(ce[Ce-Ae]===0&&$n(Ee,P[Ce])){ze=Ce;break}ze===void 0?F(Ee,ae,se,!0):(ce[ze-Ae]=oe+1,ze>=mt?mt=ze:it=!0,I(Ee,P[ze],K,null,ae,se,me,fe,de),je++)}const Le=it?Xh(ce):Po;for(Ce=Le.length-1,oe=Fe-1;oe>=0;oe--){const Ee=Ae+oe,ze=P[Ee],st=P[Ee+1],Lt=Ee+1<X?st.el||Xd(st):re;ce[oe]===0?I(null,ze,K,Lt,ae,se,me,fe,de):it&&(Ce<0||oe!==Le[Ce]?H(ze,K,Lt,2):Ce--)}}},H=(A,P,K,re,ae=null)=>{const{el:se,type:me,transition:fe,children:de,shapeFlag:oe}=A;if(oe&6){H(A.component.subTree,P,K,re);return}if(oe&128){A.suspense.move(P,K,re);return}if(oe&64){me.move(A,P,K,U);return}if(me===De){a(se,P,K);for(let te=0;te<de.length;te++)H(de[te],P,K,re);a(A.anchor,P,K);return}if(me===_r){w(A,P,K);return}if(re!==2&&oe&1&&fe)if(re===0)fe.beforeEnter(se),a(se,P,K),ht(()=>fe.enter(se),ae);else{const{leave:te,delayLeave:ue,afterLeave:_e}=fe,Ae=()=>{A.ctx.isUnmounted?o(se):a(se,P,K)},xe=()=>{se._isLeaving&&se[rn](!0),te(se,()=>{Ae(),_e&&_e()})};ue?ue(se,Ae,xe):xe()}else a(se,P,K)},F=(A,P,K,re=!1,ae=!1)=>{const{type:se,props:me,ref:fe,children:de,dynamicChildren:oe,shapeFlag:X,patchFlag:te,dirs:ue,cacheIndex:_e,memo:Ae}=A;if(te===-2&&(ae=!1),fe!=null&&(Sn(),ga(fe,null,K,A,!0),kn()),_e!=null&&(P.renderCache[_e]=void 0),X&256){P.ctx.deactivate(A);return}const xe=X&1&&ue,Ce=!zn(A);let je;if(Ce&&(je=me&&me.onVnodeBeforeUnmount)&&Nt(je,P,A),X&6)Qe(A.component,K,re);else{if(X&128){A.suspense.unmount(K,re);return}xe&&Jn(A,null,P,"beforeUnmount"),X&64?A.type.remove(A,P,K,U,re):oe&&!oe.hasOnce&&(se!==De||te>0&&te&64)?ie(oe,P,K,!1,!0):(se===De&&te&384||!ae&&X&16)&&ie(de,P,K),re&&le(A)}const Fe=Ae!=null&&_e==null;(Ce&&(je=me&&me.onVnodeUnmounted)||xe||Fe)&&ht(()=>{je&&Nt(je,P,A),xe&&Jn(A,null,P,"unmounted"),Fe&&(A.el=null)},K)},le=A=>{const{type:P,el:K,anchor:re,transition:ae}=A;if(P===De){ke(K,re);return}if(P===_r){v(A);return}const se=()=>{o(K),ae&&!ae.persisted&&ae.afterLeave&&ae.afterLeave()};if(A.shapeFlag&1&&ae&&!ae.persisted){const{leave:me,delayLeave:fe}=ae,de=()=>me(K,se);fe?fe(A.el,se,de):de()}else se()},ke=(A,P)=>{let K;for(;A!==P;)K=f(A),o(A),A=K;o(P)},Qe=(A,P,K)=>{const{bum:re,scope:ae,job:se,subTree:me,um:fe,m:de,a:oe}=A;mi(de),mi(oe),re&&Mo(re),ae.stop(),se&&(se.flags|=8,F(me,A,P,K)),fe&&ht(fe,P),ht(()=>{A.isUnmounted=!0},P)},ie=(A,P,K,re=!1,ae=!1,se=0)=>{for(let me=se;me<A.length;me++)F(A[me],P,K,re,ae)},m=A=>{if(A.shapeFlag&6)return m(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const P=f(A.anchor||A.el),K=P&&P[xd];return K?f(K):P};let k=!1;const Q=(A,P,K)=>{let re;A==null?P._vnode&&(F(P._vnode,null,null,!0),re=P._vnode.component):I(P._vnode||null,A,P,null,null,null,K),P._vnode=A,k||(k=!0,ql(re),bd(),k=!1)},U={p:I,um:F,m:H,r:le,mt:B,mc:T,pc:J,pbc:$,n:m,o:e};return{render:Q,hydrate:void 0,createApp:jh(Q)}}function br({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Zh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $s(e,t,n=!1){const a=e.children,o=t.children;if(qe(a)&&qe(o))for(let i=0;i<a.length;i++){const r=a[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=bn(o[i]),s.el=r.el),!n&&s.patchFlag!==-2&&$s(r,s)),s.type===Zi&&(s.patchFlag===-1&&(s=o[i]=bn(s)),s.el=r.el),s.type===yt&&!s.el&&(s.el=r.el)}}function Xh(e){const t=e.slice(),n=[0];let a,o,i,r,s;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(o=n[n.length-1],e[o]<u){t[a]=o,n.push(a);continue}for(i=0,r=n.length-1;i<r;)s=i+r>>1,e[n[s]]<u?i=s+1:r=s;u<e[n[i]]&&(i>0&&(t[a]=n[i-1]),n[i]=a)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=t[r];return n}function Zd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zd(t)}function mi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Xd(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Xd(t.subTree):null}const hi=e=>e.__isSuspense;function eg(e,t){t&&t.pendingBranch?qe(e)?t.effects.push(...e):t.effects.push(e):uh(e)}const De=Symbol.for("v-fgt"),Zi=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),_r=Symbol.for("v-stc"),ba=[];let Pt=null;function D(e=!1){ba.push(Pt=e?null:[])}function tg(){ba.pop(),Pt=ba[ba.length-1]||null}let Qa=1;function gi(e,t=!1){Qa+=e,e<0&&Pt&&t&&(Pt.hasOnce=!0)}function ep(e){return e.dynamicChildren=Qa>0?Pt||Po:null,tg(),Qa>0&&Pt&&Pt.push(e),e}function Z(e,t,n,a,o,i){return ep(b(e,t,n,a,o,i,!0))}function pe(e,t,n,a,o){return ep(p(e,t,n,a,o,!0))}function Uo(e){return e?e.__v_isVNode===!0:!1}function $n(e,t){return e.type===t.type&&e.key===t.key}const tp=({key:e})=>e??null,ti=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ot(e)||lt(e)||Me(e)?{i:wt,r:e,k:t,f:!!n}:e:null);function b(e,t=null,n=null,a=0,o=null,i=e===De?0:1,r=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tp(t),ref:t&&ti(t),scopeId:yd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:wt};return s?(Rs(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ot(n)?8:16),Qa>0&&!r&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const p=ng;function ng(e,t=null,n=null,a=0,o=null,i=!1){if((!e||e===Pd)&&(e=yt),Uo(e)){const s=Cn(e,t,!0);return n&&Rs(s,n),Qa>0&&!i&&Pt&&(s.shapeFlag&6?Pt[Pt.indexOf(e)]=s:Pt.push(s)),s.patchFlag=-2,s}if(dg(e)&&(e=e.__vccOpts),t){t=og(t);let{class:s,style:l}=t;s&&!ot(s)&&(t.class=nt(s)),Ge(l)&&(Vi(l)&&!qe(l)&&(l=ft({},l)),t.style=fn(l))}const r=ot(e)?1:hi(e)?128:Cd(e)?64:Ge(e)?4:Me(e)?2:0;return b(e,t,n,a,o,r,i,!0)}function og(e){return e?Vi(e)||Ud(e)?ft({},e):e:null}function Cn(e,t,n=!1,a=!1){const{props:o,ref:i,patchFlag:r,children:s,transition:l}=e,u=t?Os(o||{},t):o,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&tp(u),ref:t&&t.ref?n&&i?qe(i)?i.concat(ti(t)):[i,ti(t)]:ti(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Cn(e.ssContent),ssFallback:e.ssFallback&&Cn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Nn(c,l.clone(c)),c}function W(e=" ",t=0){return p(Zi,null,e,t)}function Re(e="",t=!1){return t?(D(),pe(yt,null,e)):p(yt,null,e)}function ln(e){return e==null||typeof e=="boolean"?p(yt):qe(e)?p(De,null,e.slice()):Uo(e)?bn(e):p(Zi,null,String(e))}function bn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Cn(e)}function Rs(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(qe(t))n=16;else if(typeof t=="object")if(a&65){const o=t.default;o&&(o._c&&(o._d=!1),Rs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!Ud(t)?t._ctx=wt:o===3&&wt&&(wt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Me(t)?(t={default:t,_ctx:wt},n=32):(t=String(t),a&64?(n=16,t=[W(t)]):n=8);e.children=t,e.shapeFlag|=n}function Os(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const o in a)if(o==="class")t.class!==a.class&&(t.class=nt([t.class,a.class]));else if(o==="style")t.style=fn([t.style,a.style]);else if(Mi(o)){const i=t[o],r=a[o];r&&i!==r&&!(qe(i)&&i.includes(r))?t[o]=i?[].concat(i,r):r:r==null&&i==null&&!$i(o)&&(t[o]=r)}else o!==""&&(t[o]=a[o])}return t}function Nt(e,t,n,a=null){en(e,t,7,[n,a])}const ag=Fd();let ig=0;function rg(e,t,n){const a=e.type,o=(t?t.appContext:e.appContext)||ag,i={uid:ig++,vnode:e,type:a,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jd(a,o),emitsOptions:zd(a,o),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:a.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=$h.bind(null,i),e.ce&&e.ce(i),i}let xt=null;const Oe=()=>xt||wt;let vi,is;{const e=zi(),t=(n,a)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(a),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};vi=t("__VUE_INSTANCE_SETTERS__",n=>xt=n),is=t("__VUE_SSR_SETTERS__",n=>Aa=n)}const Pa=e=>{const t=xt;return vi(e),e.scope.on(),()=>{e.scope.off(),vi(t)}},Nl=()=>{xt&&xt.scope.off(),vi(null)};function np(e){return e.vnode.shapeFlag&4}let Aa=!1;function sg(e,t=!1,n=!1){t&&is(t);const{props:a,children:o}=e.vnode,i=np(e);Vh(e,a,i,t),Jh(e,o,n||t);const r=i?lg(e,t):void 0;return t&&is(!1),r}function lg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qh);const{setup:a}=n;if(a){Sn();const o=e.setupContext=a.length>1?ug(e):null,i=Pa(e),r=Da(a,e,0,[e.props,o]),s=Hu(r);if(kn(),i(),(s||e.sp)&&!zn(e)&&Ed(e),s){if(r.then(Nl,Nl),t)return r.then(l=>{Vl(e,l)}).catch(l=>{Hi(l,e,0)});e.asyncDep=r}else Vl(e,r)}else op(e)}function Vl(e,t,n){Me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ge(t)&&(e.setupState=hd(t)),op(e)}function op(e,t,n){const a=e.type;e.render||(e.render=a.render||pn);{const o=Pa(e);Sn();try{Th(e)}finally{kn(),o()}}}const cg={get(e,t){return kt(e,"get",""),e[t]}};function ug(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cg),slots:e.slots,emit:e.emit,expose:t}}function Xi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(hd(Ba(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in va)return va[n](e)},has(t,n){return n in t||n in va}})):e.proxy}function rs(e,t=!0){return Me(e)?e.displayName||e.name:e.name||t&&e.__name}function dg(e){return Me(e)&&"__vccOpts"in e}const E=(e,t)=>ih(e,t,Aa);function j(e,t,n){try{gi(-1);const a=arguments.length;return a===2?Ge(t)&&!qe(t)?Uo(t)?p(e,null,[t]):p(e,t):p(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&Uo(n)&&(n=[n]),p(e,t,n))}finally{gi(1)}}const pg="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ss;const Hl=typeof window<"u"&&window.trustedTypes;if(Hl)try{ss=Hl.createPolicy("vue",{createHTML:e=>e})}catch{}const ap=ss?e=>ss.createHTML(e):e=>e,fg="http://www.w3.org/2000/svg",mg="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Ul=vn&&vn.createElement("template"),hg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const o=t==="svg"?vn.createElementNS(fg,e):t==="mathml"?vn.createElementNS(mg,e):n?vn.createElement(e,{is:n}):vn.createElement(e);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>vn.createTextNode(e),createComment:e=>vn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,o,i){const r=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Ul.innerHTML=ap(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const s=Ul.content;if(a==="svg"||a==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},En="transition",na="animation",Wo=Symbol("_vtc"),ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rp=ft({},Ad,ip),gg=e=>(e.displayName="Transition",e.props=rp,e),Jt=gg((e,{slots:t})=>j(yh,sp(e),t)),Yn=(e,t=[])=>{qe(e)?e.forEach(n=>n(...t)):e&&e(...t)},Wl=e=>e?qe(e)?e.some(t=>t.length>1):e.length>1:!1;function sp(e){const t={};for(const O in e)O in ip||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:a,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=r,appearToClass:c=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,_=vg(o),I=_&&_[0],C=_&&_[1],{onBeforeEnter:g,onEnter:y,onEnterCancelled:w,onLeave:v,onLeaveCancelled:x,onBeforeAppear:L=g,onAppear:q=y,onAppearCancelled:T=w}=t,M=(O,Y,B,N)=>{O._enterCancelled=N,Bn(O,Y?c:s),Bn(O,Y?u:r),B&&B()},$=(O,Y)=>{O._isLeaving=!1,Bn(O,d),Bn(O,h),Bn(O,f),Y&&Y()},z=O=>(Y,B)=>{const N=O?q:y,ne=()=>M(Y,O,B);Yn(N,[Y,ne]),Jl(()=>{Bn(Y,O?l:i),tn(Y,O?c:s),Wl(N)||Gl(Y,a,I,ne)})};return ft(t,{onBeforeEnter(O){Yn(g,[O]),tn(O,i),tn(O,r)},onBeforeAppear(O){Yn(L,[O]),tn(O,l),tn(O,u)},onEnter:z(!1),onAppear:z(!0),onLeave(O,Y){O._isLeaving=!0;const B=()=>$(O,Y);tn(O,d),O._enterCancelled?(tn(O,f),ls(O)):(ls(O),tn(O,f)),Jl(()=>{O._isLeaving&&(Bn(O,d),tn(O,h),Wl(v)||Gl(O,a,C,B))}),Yn(v,[O,B])},onEnterCancelled(O){M(O,!1,void 0,!0),Yn(w,[O])},onAppearCancelled(O){M(O,!0,void 0,!0),Yn(T,[O])},onLeaveCancelled(O){$(O),Yn(x,[O])}})}function vg(e){if(e==null)return null;if(Ge(e))return[yr(e.enter),yr(e.leave)];{const t=yr(e);return[t,t]}}function yr(e){return km(e)}function tn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Wo]||(e[Wo]=new Set)).add(t)}function Bn(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Wo];n&&(n.delete(t),n.size||(e[Wo]=void 0))}function Jl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bg=0;function Gl(e,t,n,a){const o=e._endId=++bg,i=()=>{o===e._endId&&a()};if(n!=null)return setTimeout(i,n);const{type:r,timeout:s,propCount:l}=lp(e,t);if(!r)return a();const u=r+"end";let c=0;const d=()=>{e.removeEventListener(u,f),i()},f=h=>{h.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},s+1),e.addEventListener(u,f)}function lp(e,t){const n=window.getComputedStyle(e),a=_=>(n[_]||"").split(", "),o=a(`${En}Delay`),i=a(`${En}Duration`),r=Kl(o,i),s=a(`${na}Delay`),l=a(`${na}Duration`),u=Kl(s,l);let c=null,d=0,f=0;t===En?r>0&&(c=En,d=r,f=i.length):t===na?u>0&&(c=na,d=u,f=l.length):(d=Math.max(r,u),c=d>0?r>u?En:na:null,f=c?c===En?i.length:l.length:0);const h=c===En&&/\b(?:transform|all)(?:,|$)/.test(a(`${En}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function Kl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>Yl(n)+Yl(e[a])))}function Yl(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ls(e){return(e?e.ownerDocument:document).body.offsetHeight}function _g(e,t,n){const a=e[Wo];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zl=Symbol("_vod"),yg=Symbol("_vsh"),wg=Symbol(""),Sg=/(?:^|;)\s*display\s*:/;function kg(e,t,n){const a=e.style,o=ot(n);let i=!1;if(n&&!o){if(t)if(ot(t))for(const r of t.split(";")){const s=r.slice(0,r.indexOf(":")).trim();n[s]==null&&ni(a,s,"")}else for(const r in t)n[r]==null&&ni(a,r,"");for(const r in n)r==="display"&&(i=!0),ni(a,r,n[r])}else if(o){if(t!==n){const r=a[wg];r&&(n+=";"+r),a.cssText=n,i=Sg.test(n)}}else t&&e.removeAttribute("style");Zl in e&&(e[Zl]=i?a.display:"",e[yg]&&(a.display="none"))}const Xl=/\s*!important$/;function ni(e,t,n){if(qe(n))n.forEach(a=>ni(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=xg(e,t);Xl.test(n)?e.setProperty(co(a),n.replace(Xl,""),"important"):e[a]=n}}const ec=["Webkit","Moz","ms"],wr={};function xg(e,t){const n=wr[t];if(n)return n;let a=It(t);if(a!=="filter"&&a in e)return wr[t]=a;a=Fi(a);for(let o=0;o<ec.length;o++){const i=ec[o]+a;if(i in e)return wr[t]=i}return t}const tc="http://www.w3.org/1999/xlink";function nc(e,t,n,a,o,i=qm(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(tc,t.slice(6,t.length)):e.setAttributeNS(tc,t,n):n==null||i&&!Gu(n)?e.removeAttribute(t):e.setAttribute(t,i?"":$t(n)?String(n):n)}function oc(e,t,n,a,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ap(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(s!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Gu(n):n==null&&s==="string"?(n="",r=!0):s==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(o||t)}function Lo(e,t,n,a){e.addEventListener(t,n,a)}function Cg(e,t,n,a){e.removeEventListener(t,n,a)}const ac=Symbol("_vei");function Qg(e,t,n,a,o=null){const i=e[ac]||(e[ac]={}),r=i[t];if(a&&r)r.value=a;else{const[s,l]=Ag(t);if(a){const u=i[t]=Tg(a,o);Lo(e,s,u,l)}else r&&(Cg(e,s,r,l),i[t]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function Ag(e){let t;if(ic.test(e)){t={};let a;for(;a=e.match(ic);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):co(e.slice(2)),t]}let Sr=0;const Ig=Promise.resolve(),qg=()=>Sr||(Ig.then(()=>Sr=0),Sr=Date.now());function Tg(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;en(Lg(a,n.value),t,5,[a])};return n.value=e,n.attached=qg(),n}function Lg(e,t){if(qe(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>o=>!o._stopped&&a&&a(o))}else return t}const rc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Eg=(e,t,n,a,o,i)=>{const r=o==="svg";t==="class"?_g(e,a,r):t==="style"?kg(e,n,a):Mi(t)?$i(t)||Qg(e,t,n,a,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Bg(e,t,a,r))?(oc(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&nc(e,t,a,r,i,t!=="value")):e._isVueCE&&(Dg(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ot(a)))?oc(e,It(t),a,i,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),nc(e,t,a,r))};function Bg(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&rc(t)&&Me(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return rc(t)&&ot(n)?!1:t in e}function Dg(e,t){const n=e._def.props;if(!n)return!1;const a=It(t);return Array.isArray(n)?n.some(o=>It(o)===a):Object.keys(n).some(o=>It(o)===a)}const cp=new WeakMap,up=new WeakMap,bi=Symbol("_moveCb"),sc=Symbol("_enterCb"),Pg=e=>(delete e.props.mode,e),jg=Pg({name:"TransitionGroup",props:ft({},rp,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Oe(),a=Qd();let o,i;return Ki(()=>{if(!o.length)return;const r=e.moveClass||`${e.name||"v"}-move`;if(!Fg(o[0].el,n.vnode.el,r)){o=[];return}o.forEach($g),o.forEach(Rg);const s=o.filter(Og);ls(n.vnode.el),s.forEach(l=>{const u=l.el,c=u.style;tn(u,r),c.transform=c.webkitTransform=c.transitionDuration="";const d=u[bi]=f=>{f&&f.target!==u||(!f||f.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",d),u[bi]=null,Bn(u,r))};u.addEventListener("transitionend",d)}),o=[]}),()=>{const r=$e(e),s=sp(r);let l=r.tag||De;if(o=[],i)for(let u=0;u<i.length;u++){const c=i[u];c.el&&c.el instanceof Element&&(o.push(c),Nn(c,Ca(c,s,a,n)),cp.set(c,dp(c.el)))}i=t.default?Bs(t.default()):[];for(let u=0;u<i.length;u++){const c=i[u];c.key!=null&&Nn(c,Ca(c,s,a,n))}return p(l,null,i)}}}),Mg=jg;function $g(e){const t=e.el;t[bi]&&t[bi](),t[sc]&&t[sc]()}function Rg(e){up.set(e,dp(e.el))}function Og(e){const t=cp.get(e),n=up.get(e),a=t.left-n.left,o=t.top-n.top;if(a||o){const i=e.el,r=i.style,s=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=s.width/i.offsetWidth),i.offsetHeight&&(u=s.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),r.transform=r.webkitTransform=`translate(${a/l}px,${o/u}px)`,r.transitionDuration="0s",e}}function dp(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Fg(e,t,n){const a=e.cloneNode(),o=e[Wo];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&a.classList.remove(l))}),n.split(/\s+/).forEach(s=>s&&a.classList.add(s)),a.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(a);const{hasTransform:r}=lp(a);return i.removeChild(a),r}const lc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return qe(t)?n=>Mo(t,n):t};function zg(e){e.target.composing=!0}function cc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const kr=Symbol("_assign");function uc(e,t,n){return t&&(e=e.trim()),n&&(e=ks(e)),e}const Ng={created(e,{modifiers:{lazy:t,trim:n,number:a}},o){e[kr]=lc(o);const i=a||o.props&&o.props.type==="number";Lo(e,t?"change":"input",r=>{r.target.composing||e[kr](uc(e.value,n,i))}),(n||i)&&Lo(e,"change",()=>{e.value=uc(e.value,n,i)}),t||(Lo(e,"compositionstart",zg),Lo(e,"compositionend",cc),Lo(e,"change",cc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:a,trim:o,number:i}},r){if(e[kr]=lc(r),e.composing)return;const s=(i||e.type==="number")&&!/^0\d/.test(e.value)?ks(e.value):e.value,l=t??"";if(s===l)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(a&&t===n||o&&e.value.trim()===l)||(e.value=l)}},Vg=ft({patchProp:Eg},hg);let dc;function Hg(){return dc||(dc=Kh(Vg))}const Ug=(...e)=>{const t=Hg().createApp(...e),{mount:n}=t;return t.mount=a=>{const o=Jg(a);if(!o)return;const i=t._component;!Me(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=n(o,!1,Wg(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Wg(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jg(e){return ot(e)?document.querySelector(e):e}function Zo(e,t,n,a){return Object.defineProperty(e,t,{get:n,set:a,enumerable:!0}),e}const Qn=be(!1);let cs;function Gg(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function Kg(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const pp="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Yg(e){const t=e.toLowerCase(),n=Kg(t),a=Gg(t,n),o={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};a.browser&&(o[a.browser]=!0,o.version=a.version,o.versionNumber=parseInt(a.version,10)),a.platform&&(o[a.platform]=!0);const i=o.android||o.ios||o.bb||o.blackberry||o.ipad||o.iphone||o.ipod||o.kindle||o.playbook||o.silk||o["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?o.mobile=!0:o.desktop=!0,o["windows phone"]&&(o.winphone=!0,delete o["windows phone"]),o.edga||o.edgios||o.edg?(o.edge=!0,a.browser="edge"):o.crios?(o.chrome=!0,a.browser="chrome"):o.fxios&&(o.firefox=!0,a.browser="firefox"),(o.ipod||o.ipad||o.iphone)&&(o.ios=!0),o.vivaldi&&(a.browser="vivaldi",o.vivaldi=!0),(o.chrome||o.opr||o.safari||o.vivaldi||o.mobile===!0&&o.ios!==!0&&i!==!0)&&(o.webkit=!0),o.opr&&(a.browser="opera",o.opera=!0),o.safari&&(o.blackberry||o.bb?(a.browser="blackberry",o.blackberry=!0):o.playbook?(a.browser="playbook",o.playbook=!0):o.android?(a.browser="android",o.android=!0):o.kindle?(a.browser="kindle",o.kindle=!0):o.silk&&(a.browser="silk",o.silk=!0)),o.name=a.browser,o.platform=a.platform,t.indexOf("electron")!==-1)o.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)o.bex=!0;else{if(window.Capacitor!==void 0?(o.capacitor=!0,o.nativeMobile=!0,o.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(o.cordova=!0,o.nativeMobile=!0,o.nativeMobileWrapper="cordova"),Qn.value===!0&&(cs={is:{...o}}),pp===!0&&o.mac===!0&&(o.desktop===!0&&o.safari===!0||o.nativeMobile===!0&&o.android!==!0&&o.ios!==!0&&o.ipad!==!0)){delete o.mac,delete o.desktop;const r=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(o,{mobile:!0,ios:!0,platform:r,[r]:!0})}o.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete o.desktop,o.mobile=!0)}return o}const pc=navigator.userAgent||navigator.vendor||window.opera,Zg={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Ue={userAgent:pc,is:Yg(pc),has:{touch:pp},within:{iframe:window.self!==window.top}},_i={install(e){const{$q:t}=e;Qn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,Ue),Qn.value=!1}),t.platform=uo(this)):t.platform=this}};{let e;Zo(Ue.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(_i,Ue),Qn.value===!0&&(Object.assign(_i,cs,Zg),cs=null)}function Te(e){return Ba(Ld(e))}function er(e){return Ba(e)}const tr=(e,t)=>{const n=uo(e);for(const a in e)Zo(t,a,()=>n[a],o=>{n[a]=o});return t},gt={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(gt,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Bt(){}function fp(e){return e.button===0}function Vn(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function Xg(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function Et(e){e.stopPropagation()}function At(e){e.cancelable!==!1&&e.preventDefault()}function He(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Ro(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?a=>{a.__dragPrevented=!0,a.addEventListener("dragstart",At,gt.notPassiveCapture)}:a=>{delete a.__dragPrevented,a.removeEventListener("dragstart",At,gt.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function jt(e,t,n){const a=`__q_${t}_evt`;e[a]=e[a]!==void 0?e[a].concat(n):n,n.forEach(o=>{o[0].addEventListener(o[1],e[o[2]],gt[o[3]])})}function mn(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(a=>{a[0].removeEventListener(a[1],e[a[2]],gt[a[3]])}),e[n]=void 0)}function Fs(e,t=250,n){let a=null;function o(){const i=arguments,r=()=>{a=null,e.apply(this,i)};a!==null&&clearTimeout(a),a=setTimeout(r,t)}return o.cancel=()=>{a!==null&&clearTimeout(a)},o}const xr=["sm","md","lg","xl"],{passive:fc}=gt,ev=tr({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Bt,setDebounce:Bt,install({$q:e,onSSRHydrated:t}){var d;if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,a=n||window,o=document.scrollingElement||document.documentElement,i=n===void 0||Ue.is.mobile===!0?()=>[Math.max(window.innerWidth,o.clientWidth),Math.max(window.innerHeight,o.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-o.clientWidth,n.height*n.scale+window.innerHeight-o.clientHeight],r=((d=e.config.screen)==null?void 0:d.bodyClasses)===!0;this.__update=f=>{const[h,_]=i();if(_!==this.height&&(this.height=_),h!==this.width)this.width=h;else if(f!==!0)return;let I=this.sizes;this.gt.xs=h>=I.sm,this.gt.sm=h>=I.md,this.gt.md=h>=I.lg,this.gt.lg=h>=I.xl,this.lt.sm=h<I.sm,this.lt.md=h<I.md,this.lt.lg=h<I.lg,this.lt.xl=h<I.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,I=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",I!==this.name&&(r===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${I}`)),this.name=I)};let s,l={},u=16;this.setSizes=f=>{xr.forEach(h=>{f[h]!==void 0&&(l[h]=f[h])})},this.setDebounce=f=>{u=f};const c=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&xr.forEach(h=>{this.sizes[h]=parseInt(f.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{xr.forEach(_=>{h[_]&&(this.sizes[_]=h[_])}),this.__update(!0)},this.setDebounce=h=>{s!==void 0&&a.removeEventListener("resize",s,fc),s=h>0?Fs(this.__update,h):this.__update,a.addEventListener("resize",s,fc)},this.setDebounce(u),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),r===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Qn.value===!0?t.push(c):c()}}),pt=tr({isActive:!1,mode:!1},{__media:void 0,set(e){pt.mode=e,e==="auto"?(pt.__media===void 0&&(pt.__media=window.matchMedia("(prefers-color-scheme: dark)"),pt.__updateMedia=()=>{pt.set("auto")},pt.__media.addListener(pt.__updateMedia)),e=pt.__media.matches):pt.__media!==void 0&&(pt.__media.removeListener(pt.__updateMedia),pt.__media=void 0),pt.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){pt.set(pt.isActive===!1)},install({$q:e,ssrContext:t}){const n=e.config.dark;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function tv(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let mp=!1;function nv(e){mp=e.isComposing===!0}function nr(e){return mp===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function An(e,t){return nr(e)===!0?!1:[].concat(t).includes(e.keyCode)}function hp(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function ov({is:e,has:t,within:n},a){const o=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=hp(e);i!==void 0&&o.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;o.push(i),o.push("native-mobile"),e.ios===!0&&(a[i]===void 0||a[i].iosStatusBarPadding!==!1)&&o.push("q-ios-padding")}else e.electron===!0?o.push("electron"):e.bex===!0&&o.push("bex");return n.iframe===!0&&o.push("within-iframe"),o}function av(){const{is:e}=Ue,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const o=hp(e);o!==void 0&&n.add(`platform-${o}`)}}Ue.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Ue.within.iframe===!0&&n.add("within-iframe");const a=Array.from(n).join(" ");t!==a&&(document.body.className=a)}function iv(e){for(const t in e)tv(t,e[t])}const rv={install(e){if(this.__installed!==!0){if(Qn.value===!0)av();else{const{$q:t}=e;t.config.brand!==void 0&&iv(t.config.brand);const n=ov(Ue,t.config);document.body.classList.add.apply(document.body.classList,n)}Ue.is.ios===!0&&document.body.addEventListener("touchstart",Bt),window.addEventListener("keydown",nv,!0)}}},gp=()=>!0;function sv(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function lv(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function cv(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return gp;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(sv).map(lv)),()=>t.includes(window.location.hash)}const us={__history:[],add:Bt,remove:Bt,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=Ue.is;if(t!==!0&&n!==!0)return;const a=e.config[t===!0?"cordova":"capacitor"];if((a==null?void 0:a.backButton)===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=r=>{r.condition===void 0&&(r.condition=gp),this.__history.push(r)},this.remove=r=>{const s=this.__history.indexOf(r);s>=0&&this.__history.splice(s,1)};const o=cv(Object.assign({backButtonExit:!0},a)),i=()=>{if(this.__history.length){const r=this.__history[this.__history.length-1];r.condition()===!0&&(this.__history.pop(),r.handler())}else o()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},mc={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function hc(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const jn=tr({__qLang:{}},{getLocale:hc,set(e=mc,t){const n={...e,rtl:e.rtl===!0,getLocale:hc};{if(n.set=jn.set,jn.__langConfig===void 0||jn.__langConfig.noHtmlAttrs!==!0){const a=document.documentElement;a.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),a.setAttribute("lang",n.isoName)}Object.assign(jn.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=jn.__qLang,jn.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(a){return Reflect.ownKeys(a).filter(o=>o!=="set"&&o!=="getLocale")}}),this.set(t||mc))}}),uv={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},yi=tr({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=yi.set,Object.assign(yi.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Zo(e,"iconMapFn",()=>this.iconMapFn,a=>{this.iconMapFn=a}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(a){return Reflect.ownKeys(a).filter(o=>o!=="set")}}),this.set(t||uv))}}),vp="_q_",dv="_q_fo_",bp="_q_tabs_";function Cr(){}const wi={};let _p=!1;function pv(){_p=!0}function Rn(e,t){if(e===t)return!0;if(e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,a;if(e.constructor===Array){if(n=e.length,n!==t.length)return!1;for(a=n;a--!==0;)if(Rn(e[a],t[a])!==!0)return!1;return!0}if(e.constructor===Map){if(e.size!==t.size)return!1;let i=e.entries();for(a=i.next();a.done!==!0;){if(t.has(a.value[0])!==!0)return!1;a=i.next()}for(i=e.entries(),a=i.next();a.done!==!0;){if(Rn(a.value[1],t.get(a.value[0]))!==!0)return!1;a=i.next()}return!0}if(e.constructor===Set){if(e.size!==t.size)return!1;const i=e.entries();for(a=i.next();a.done!==!0;){if(t.has(a.value[0])!==!0)return!1;a=i.next()}return!0}if(e.buffer!=null&&e.buffer.constructor===ArrayBuffer){if(n=e.length,n!==t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const o=Object.keys(e).filter(i=>e[i]!==void 0);if(n=o.length,n!==Object.keys(t).filter(i=>t[i]!==void 0).length)return!1;for(a=n;a--!==0;){const i=o[a];if(Rn(e[i],t[i])!==!0)return!1}return!0}return e!==e&&t!==t}function _a(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}function fv(e){return Object.prototype.toString.call(e)==="[object Date]"}function mv(e){return Object.prototype.toString.call(e)==="[object RegExp]"}function hv(e){return typeof e=="number"&&isFinite(e)}const gc=[_i,rv,pt,ev,us,jn,yi];function vc(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function gv(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(vp,n.$q),vc(n,gc),t.components!==void 0&&Object.values(t.components).forEach(a=>{_a(a)===!0&&a.name!==void 0&&e.component(a.name,a)}),t.directives!==void 0&&Object.values(t.directives).forEach(a=>{_a(a)===!0&&a.name!==void 0&&e.directive(a.name,a)}),t.plugins!==void 0&&vc(n,Object.values(t.plugins).filter(a=>typeof a.install=="function"&&gc.includes(a)===!1)),Qn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(a=>{a()}),n.$q.onSSRHydrated=()=>{}})}const vv=function(t,n={}){const a={version:"2.19.3"};_p===!1?(n.config!==void 0&&Object.assign(wi,n.config),a.config={...wi},pv()):a.config=n.config||{},gv(t,n,{parentApp:t,$q:a,lang:n.lang,iconSet:n.iconSet,onSSRHydrated:[]})},bv={name:"Quasar",version:"2.19.3",install:vv,lang:jn,iconSet:yi},ds={xs:18,sm:24,md:32,lg:38,xl:46},Hn={size:String};function Un(e,t=ds){return E(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function tt(e,t){return e!==void 0&&e()||t}function _v(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function Ut(e,t){return e!==void 0?t.concat(e()):t}function zs(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function Ns(e,t,n,a,o,i){t.key=a+o;const r=j(e,t,n);return o===!0?he(r,i()):r}const bc="0 0 24 24",Qr=e=>e,Ar=e=>`ionicons ${e}`,yp={"mdi-":e=>`mdi ${e}`,"icon-":Qr,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Ar,"ion-ios":Ar,"ion-logo":Ar,"iconfont ":Qr,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":Qr},wp={o_:"-outlined",r_:"-round",s_:"-sharp"},Sp={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},yv=new RegExp("^("+Object.keys(yp).join("|")+")"),wv=new RegExp("^("+Object.keys(wp).join("|")+")"),_c=new RegExp("^("+Object.keys(Sp).join("|")+")"),Sv=/^[Mm]\s?[-+]?\.?\d/,kv=/^img:/,xv=/^svguse:/,Cv=/^ion-/,Qv=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Ve=Te({name:"QIcon",props:{...Hn,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Oe(),a=Un(e),o=E(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=E(()=>{let r,s=e.name;if(s==="none"||!s)return{none:!0};if(n.iconMapFn!==null){const c=n.iconMapFn(s);if(c!==void 0)if(c.icon!==void 0){if(s=c.icon,s==="none"||!s)return{none:!0}}else return{cls:c.cls,content:c.content!==void 0?c.content:" "}}if(Sv.test(s)===!0){const[c,d=bc]=s.split("|");return{svg:!0,viewBox:d,nodes:c.split("&&").map(f=>{const[h,_,I]=f.split("@@");return j("path",{style:_,d:h,transform:I})})}}if(kv.test(s)===!0)return{img:!0,src:s.substring(4)};if(xv.test(s)===!0){const[c,d=bc]=s.split("|");return{svguse:!0,src:c.substring(7),viewBox:d}}let l=" ";const u=s.match(yv);if(u!==null)r=yp[u[1]](s);else if(Qv.test(s)===!0)r=s;else if(Cv.test(s)===!0)r=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${s.substring(3)}`;else if(_c.test(s)===!0){r="notranslate material-symbols";const c=s.match(_c);c!==null&&(s=s.substring(6),r+=Sp[c[1]]),l=s}else{r="notranslate material-icons";const c=s.match(wv);c!==null&&(s=s.substring(2),r+=wp[c[1]]),l=s}return{cls:r,content:l}});return()=>{const r={class:o.value,style:a.value,"aria-hidden":"true"};return i.value.none===!0?j(e.tag,r,tt(t.default)):i.value.img===!0?j(e.tag,r,Ut(t.default,[j("img",{src:i.value.src})])):i.value.svg===!0?j(e.tag,r,Ut(t.default,[j("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?j(e.tag,r,Ut(t.default,[j("svg",{viewBox:i.value.viewBox},[j("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(r.class+=" "+i.value.cls),j(e.tag,r,Ut(t.default,[i.value.content])))}}}),Be=(e,t)=>{const n=e.__vccOpts||e;for(const[a,o]of t)n[a]=o;return n},Av={name:"JPanel",components:{QIcon:Ve},props:{title:{type:String,default:null},icon:{type:String,default:null},iconColor:{type:String,default:"var(--q-primary)"},footerText:{type:String,default:null},square:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},scroll:{type:Boolean,default:!1}}},Iv={key:0,class:"jPanel_header"},qv={key:0,class:"jPanel_title q-pa-md non-selectable"},Tv={key:1,class:"jPanel_headerSlot"},Lv={key:2,class:"jPanel_headerAction q-pa-md"},Ev={key:1,class:"jPanel_scroll"},Bv={key:2},Dv={key:3,class:"jPanel_footer q-px-md q-py-xs"},Pv={key:0,class:"jPanel_footerText"};function jv(e,t,n,a,o,i){const r=G("QIcon");return D(),Z("div",{class:nt(["jPanel",{jPanel_square:n.square,fullscreen:n.fullscreen}])},[n.title||e.$slots.title||n.icon||e.$slots.header||e.$slots["header-action"]?(D(),Z("div",Iv,[n.title||n.icon||e.$slots.title?(D(),Z("div",qv,[n.icon?(D(),pe(r,{key:0,name:n.icon,size:"14px",class:"jPanel_icon",style:fn({color:n.iconColor})},null,8,["name","style"])):Re("",!0),_t(e.$slots,"title",{},()=>[b("span",null,ve(n.title),1)])])):Re("",!0),e.$slots.header?(D(),Z("div",Tv,[_t(e.$slots,"header",{},void 0)])):Re("",!0),e.$slots["header-action"]?(D(),Z("div",Lv,[_t(e.$slots,"header-action",{},void 0)])):Re("",!0)])):Re("",!0),n.scroll?(D(),Z("div",Ev,[_t(e.$slots,"default",{},void 0)])):(D(),Z("div",Bv,[_t(e.$slots,"default",{},void 0)])),e.$slots.footer||n.footerText?(D(),Z("div",Dv,[n.footerText?(D(),Z("span",Pv,ve(n.footerText),1)):Re("",!0),_t(e.$slots,"footer",{},void 0)])):Re("",!0)],2)}const qn=Be(Av,[["render",jv],["__scopeId","data-v-c275bee4"]]),io=[];function kp(e){io[io.length-1](e)}function Vs(e){Ue.is.desktop===!0&&(io.push(e),io.length===1&&document.body.addEventListener("focusin",kp))}function Si(e){const t=io.indexOf(e);t!==-1&&(io.splice(t,1),io.length===0&&document.body.removeEventListener("focusin",kp))}function Mv(e){const t=document.createElement("textarea");t.value=e,t.contentEditable="true",t.style.position="fixed";const n=()=>{};Vs(n),document.body.appendChild(t),t.focus(),t.select();const a=document.execCommand("copy");return t.remove(),Si(n),a}function xp(e){return navigator.clipboard!==void 0?navigator.clipboard.writeText(e):new Promise((t,n)=>{const a=Mv(e);a?t(!0):n(a)})}const qt={size:{type:[String,Number],default:"1em"},color:String};function Tt(e){return{cSize:E(()=>e.size in ds?`${ds[e.size]}px`:e.size),classes:E(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const $v='<circle cx="50" cy="50" r="44" fill="none" stroke-width="4" stroke-opacity=".5" stroke="currentColor"></circle><circle cx="8" cy="54" r="6" fill="currentColor" stroke-width="3" stroke="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform></circle>',Cp=Te({name:"QSpinnerOrbit",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:$v})}}),Rv={name:"ApiDocSection",components:{QIcon:Ve,QSpinnerOrbit:Cp},inject:["__apiDoc","showcaseCopy"],computed:{doc(){return this.__apiDoc},importLine(){return`import { ${this.doc.importName} } from '${this.doc.importFrom}';`},hasGroups(){const e=[...this.doc.propsList,...this.doc.slotsList,...this.doc.eventsList];return new Set(e.map(n=>n.group).filter(Boolean)).size>1}},methods:{copy(e){this.showcaseCopy(e)}}},Ov={class:"apiDoc"},Fv={key:0,class:"apiDocLoading"},zv={class:"apiDocImportString"},Nv={key:1,class:"apiDocSection"},Vv={class:"apiDocSectionHeader"},Hv={class:"apiDocTable"},Uv=["onClick"],Wv={class:"apiDocRow"},Jv=["onClick"],Gv={class:"apiDocPropType"},Kv={class:"apiDocPropDesc"},Yv={key:0,class:"apiDocPropDefault"},Zv={key:2,class:"apiDocSection"},Xv={class:"apiDocSectionHeader"},eb={class:"apiDocTable"},tb=["onClick"],nb={class:"apiDocRow"},ob=["onClick"],ab={class:"apiDocPropDesc"},ib={key:3,class:"apiDocSection"},rb={class:"apiDocSectionHeader"},sb={class:"apiDocTable"},lb=["onClick"],cb={class:"apiDocRow"},ub=["onClick"],db={class:"apiDocPropDesc"},pb={key:2,class:"apiDocError"};function fb(e,t,n,a,o,i){const r=G("QSpinnerOrbit"),s=G("QIcon");return D(),Z("div",Ov,[i.doc.loading?(D(),Z("div",Fv,[p(r,{size:"24px",color:"accent"}),t[1]||(t[1]=b("span",null,"Loading API…",-1))])):i.doc.apiData||i.doc.importName&&i.doc.importFrom?(D(),Z(De,{key:1},[i.doc.importName&&i.doc.importFrom?(D(),Z("div",{key:0,class:"apiDocImport apiDocCopyable",onClick:t[0]||(t[0]=l=>i.copy(i.importLine))},[b("code",null,[t[2]||(t[2]=b("span",{class:"apiDocImportKeyword"},"import",-1)),W(" { "+ve(i.doc.importName)+" } ",1),t[3]||(t[3]=b("span",{class:"apiDocImportKeyword"},"from",-1)),t[4]||(t[4]=W()),b("span",zv,"'"+ve(i.doc.importFrom)+"'",1),t[5]||(t[5]=W(";",-1))])])):Re("",!0),i.doc.propsList.length?(D(),Z("div",Nv,[b("div",Vv,[p(s,{name:"tune",size:"16px"}),t[6]||(t[6]=b("span",null,"PROPS",-1))]),b("div",Hv,[(D(!0),Z(De,null,Ye(i.doc.propsList,(l,u)=>(D(),Z(De,{key:l.group+"/"+l.name},[i.hasGroups&&l.group&&(u===0||i.doc.propsList[u-1].group!==l.group)?(D(),Z("div",{key:0,class:"apiDocGroupLabel apiDocCopyable",onClick:c=>i.copy("<"+l.group+">")},ve(l.group),9,Uv)):Re("",!0),b("div",Wv,[b("div",{class:"apiDocPropName apiDocCopyable",onClick:c=>i.copy(l.name)},ve(l.name),9,Jv),b("div",Gv,ve(l.typeLabel),1),b("div",Kv,ve(l.desc),1),l.default!==void 0?(D(),Z("div",Yv,[t[7]||(t[7]=W(" default: ",-1)),b("code",null,ve(l.default),1)])):Re("",!0)])],64))),128))])])):Re("",!0),i.doc.slotsList.length?(D(),Z("div",Zv,[b("div",Xv,[p(s,{name:"inventory_2",size:"16px"}),t[8]||(t[8]=b("span",null,"SLOTS",-1))]),b("div",eb,[(D(!0),Z(De,null,Ye(i.doc.slotsList,(l,u)=>(D(),Z(De,{key:l.group+"/"+l.name},[i.hasGroups&&l.group&&(u===0||i.doc.slotsList[u-1].group!==l.group)?(D(),Z("div",{key:0,class:"apiDocGroupLabel apiDocCopyable",onClick:c=>i.copy("<"+l.group+">")},ve(l.group),9,tb)):Re("",!0),b("div",nb,[b("div",{class:"apiDocPropName apiDocCopyable",onClick:c=>i.copy("#"+l.name)},"#"+ve(l.name),9,ob),b("div",ab,ve(l.desc),1)])],64))),128))])])):Re("",!0),i.doc.eventsList.length?(D(),Z("div",ib,[b("div",rb,[p(s,{name:"electric_bolt",size:"16px"}),t[9]||(t[9]=b("span",null,"EVENTS",-1))]),b("div",sb,[(D(!0),Z(De,null,Ye(i.doc.eventsList,(l,u)=>(D(),Z(De,{key:l.group+"/"+l.name},[i.hasGroups&&l.group&&(u===0||i.doc.eventsList[u-1].group!==l.group)?(D(),Z("div",{key:0,class:"apiDocGroupLabel apiDocCopyable",onClick:c=>i.copy("<"+l.group+">")},ve(l.group),9,lb)):Re("",!0),b("div",cb,[b("div",{class:"apiDocPropName apiDocCopyable",onClick:c=>i.copy("@"+l.name)},"@"+ve(l.name),9,ub),b("div",db,ve(l.desc),1)])],64))),128))])])):Re("",!0)],64)):i.doc.error?(D(),Z("div",pb,[p(s,{name:"error_outline",size:"14px"}),b("span",null,ve(i.doc.error),1)])):Re("",!0)])}const Qp=Be(Rv,[["render",fb],["__scopeId","data-v-1633e53e"]]),mb={components:{ApiDocSection:Qp},provide(){return{__apiDoc:E(()=>({loading:this.apiLoading,error:this.apiError,apiData:this.apiData,docsUrl:this.apiDocsUrl,propsList:this.apiPropsList,slotsList:this.apiSlotsList,eventsList:this.apiEventsList,importName:this.apiImportName,importFrom:this.apiImportFrom}))}},data(){return{apiUrl:this.$options.apiUrl||null,apiJson:this.$options.apiJson||null,apiFetchedData:null,apiLoading:!1,apiError:null,apiImportName:null,apiImportFrom:null}},computed:{apiData(){return this.apiJson||this.apiFetchedData},apiGroups(){const e=this.apiData;return e?Array.isArray(e)?e.map(t=>({name:t.name||null,data:t.json||t})):[{name:null,data:e}]:[]},apiTagName(){for(const e of this.apiGroups)if(e.name)return e.name;return this.apiDocsUrl?"Q"+(this.apiDocsUrl.split("/").pop()||"").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""):null},apiDocsUrl(){var e,t;for(const n of this.apiGroups){const a=(t=(e=n.data)==null?void 0:e.meta)==null?void 0:t.docsUrl;if(a)return a}return null},apiPropsList(){return this.apiGroups.flatMap(e=>{var n;const t=(n=e.data)==null?void 0:n.props;return t?Object.entries(t).map(([a,o])=>({name:a,group:e.name,typeLabel:Array.isArray(o.type)?o.type.join(" | "):o.type||"—",desc:o.desc||"",default:o.default})):[]})},apiSlotsList(){return this.apiGroups.flatMap(e=>{var n;const t=(n=e.data)==null?void 0:n.slots;return t?Object.entries(t).map(([a,o])=>({name:a,group:e.name,desc:o.desc||""})):[]})},apiEventsList(){return this.apiGroups.flatMap(e=>{var n;const t=(n=e.data)==null?void 0:n.events;return t?Object.entries(t).map(([a,o])=>({name:a,group:e.name,desc:o.desc||""})):[]})}},watch:{apiUrl:{immediate:!0,handler(e){e&&this.apiFetch(e)}}},methods:{async apiFetch(e){this.apiLoading=!0,this.apiError=null;try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);this.apiFetchedData=await t.json()}catch(t){this.apiError=`Failed to load API: ${t.message}`}finally{this.apiLoading=!1}}}},hb={name:"ShowcaseNav",components:{JPanel:qn,QIcon:Ve},props:{activeTab:{type:String,required:!0},selectedName:{type:String,default:null},categories:{type:Object,required:!0},docPages:{type:Array,default:()=>[]},activeDoc:{type:String,default:null}},emits:["select","select-doc"],data(){const e={};for(const t of Object.keys(this.categories))e[t]=t===this.activeTab;return{query:"",expandedCats:e,docsExpanded:this.activeDoc&&this.activeDoc!=="README"}},computed:{subDocPages(){return this.docPages.filter(e=>e!=="README")},categoryIcons(){const e={};for(const[t,n]of Object.entries(this.categories)){const a={};let o={};for(const l of n){const u=l.icon;if(!u)continue;a[u]=(a[u]||0)+1;const c=l.order??999;(!(u in o)||c<o[u])&&(o[u]=c)}let i=null,r=0,s=1/0;for(const[l,u]of Object.entries(a))(u>r||u===r&&o[l]<s)&&(i=l,r=u,s=o[l]);e[t]=i||"folder"}return e},tabs(){return Object.keys(this.categories)},searchIndex(){var t;const e=[];for(const[n,a]of Object.entries(this.categories))for(const o of a)(t=o.component)==null||t.apiJson,e.push({category:n,name:o.name,label:o.label,searchable:(n+" "+o.name+" "+o.label+" "+(o.code||"")+"").toLowerCase()});return e},searchResults(){const e=this.query.trim().toLowerCase();if(!e)return[];const t=e.split(/\s+/);return this.searchIndex.filter(n=>t.every(a=>n.searchable.includes(a)))}},methods:{categoryItems(e){return this.categories[e]||[]},slideEnter(e){e.style.overflow="hidden",e.style.height="0",e.offsetHeight,e.style.transition="height 0.25s ease",e.style.height=e.scrollHeight+"px"},slideAfterEnter(e){e.style.height="",e.style.overflow="",e.style.transition=""},slideLeave(e){e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.offsetHeight,e.style.transition="height 0.25s ease",e.style.height="0"},slideAfterLeave(e){e.style.height="",e.style.overflow="",e.style.transition=""},toggleDocs(){this.subDocPages.length&&(this.docsExpanded=!this.docsExpanded),this.$emit("select-doc","README")},toggleCategory(e){const t=!this.expandedCats[e];this.expandedCats[e]=t,t&&(clearTimeout(this._collapseTimer),this._collapseTimer=setTimeout(()=>{for(const a in this.expandedCats)a!==e&&(this.expandedCats[a]=!1)},500));const n=this.categoryItems(e);n.length&&this.$emit("select",{category:e,name:n[0].name})}},watch:{activeTab(e){this.expandedCats[e]||(this.expandedCats[e]=!0)},categories(e){for(const t of Object.keys(e))t in this.expandedCats||(this.expandedCats[t]=!1)},activeDoc(e){e&&e!=="README"&&(this.docsExpanded=!0)}}},gb={class:"showcaseNav_col"},vb={class:"showcaseNav_search"},bb={key:0,class:"showcaseNav_list showcaseNav_docs"},_b={key:0,class:"showcaseNav_children"},yb=["onClick"],wb={key:1,class:"showcaseNav_list"},Sb=["onClick"],kb={class:"showcaseNav_result"},xb={class:"showcaseNav_resultCat"},Cb={key:0,class:"showcaseNav_empty"},Qb={key:2,class:"showcaseNav_list"},Ab=["onClick"],Ib={class:"showcaseNav_count"},qb={key:0,class:"showcaseNav_children"},Tb=["onClick"];function Lb(e,t,n,a,o,i){const r=G("QIcon"),s=G("JPanel");return D(),Z("div",gb,[p(s,{title:"COMPONENTS",icon:"widgets","icon-color":"var(--q-secondary)"},{default:S(()=>[b("div",vb,[p(r,{name:"search",size:"20px",class:"showcaseNav_searchIcon"}),he(b("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>o.query=l),class:"showcaseNav_searchInput",placeholder:"Search components…",spellcheck:"false"},null,512),[[Ng,o.query]]),o.query?(D(),pe(r,{key:0,name:"close",size:"20px",class:"showcaseNav_searchClear",onClick:t[1]||(t[1]=l=>o.query="")})):Re("",!0)]),n.docPages&&n.docPages.length?(D(),Z("div",bb,[b("div",{class:nt(["showcaseNav_categoryHeader",{expanded:o.docsExpanded||n.activeDoc}]),onClick:t[2]||(t[2]=(...l)=>i.toggleDocs&&i.toggleDocs(...l))},[p(r,{name:"menu_book",size:"18px"}),t[3]||(t[3]=b("span",null,"Readme",-1)),t[4]||(t[4]=b("span",{class:"showcaseNav_spacer"},null,-1)),i.subDocPages.length?(D(),pe(r,{key:0,name:"expand_more",size:"16px",class:nt(["showcaseNav_chevron",{rotated:o.docsExpanded}])},null,8,["class"])):Re("",!0)],2),p(Jt,{onEnter:i.slideEnter,onAfterEnter:i.slideAfterEnter,onLeave:i.slideLeave,onAfterLeave:i.slideAfterLeave},{default:S(()=>[o.docsExpanded&&i.subDocPages.length?(D(),Z("div",_b,[(D(!0),Z(De,null,Ye(i.subDocPages,l=>(D(),Z("div",{key:"doc-"+l,class:nt(["showcaseNav_item showcaseNav_child",{active:n.activeDoc===l}]),onClick:u=>e.$emit("select-doc",l)},[b("span",null,ve(l),1)],10,yb))),128))])):Re("",!0)]),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])])):Re("",!0),o.query?(D(),Z("div",wb,[(D(!0),Z(De,null,Ye(i.searchResults,l=>(D(),Z("div",{key:l.category+"/"+l.name,class:nt(["showcaseNav_item",{active:n.activeTab===l.category&&n.selectedName===l.name}]),onClick:u=>e.$emit("select",{category:l.category,name:l.name})},[p(r,{name:i.categoryIcons[l.category]||"folder",size:"18px"},null,8,["name"]),b("div",kb,[b("span",null,ve(l.label),1),b("span",xb,ve(l.category),1)])],10,Sb))),128)),i.searchResults.length?Re("",!0):(D(),Z("div",Cb," No results "))])):(D(),Z("div",Qb,[(D(!0),Z(De,null,Ye(i.tabs,l=>(D(),Z("div",{key:l,class:"showcaseNav_category"},[b("div",{class:nt(["showcaseNav_categoryHeader",{expanded:o.expandedCats[l]}]),onClick:u=>i.toggleCategory(l)},[p(r,{name:i.categoryIcons[l]||"folder",size:"18px"},null,8,["name"]),b("span",null,ve(l),1),b("span",Ib,ve(i.categoryItems(l).length),1),p(r,{name:"expand_more",size:"16px",class:nt(["showcaseNav_chevron",{rotated:o.expandedCats[l]}])},null,8,["class"])],10,Ab),p(Jt,{onEnter:i.slideEnter,onAfterEnter:i.slideAfterEnter,onLeave:i.slideLeave,onAfterLeave:i.slideAfterLeave},{default:S(()=>[o.expandedCats[l]?(D(),Z("div",qb,[(D(!0),Z(De,null,Ye(i.categoryItems(l),u=>(D(),Z("div",{key:u.name,class:nt(["showcaseNav_item showcaseNav_child",{active:n.activeTab===l&&n.selectedName===u.name}]),onClick:c=>e.$emit("select",{category:l,name:u.name})},[b("span",null,ve(u.label),1)],10,Tb))),128))])):Re("",!0)]),_:2},1032,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]))),128))]))]),_:1})])}const Eb=Be(hb,[["render",Lb],["__scopeId","data-v-73581c83"]]),Bb={name:"ShowcaseMain",components:{JPanel:qn},props:{item:{type:Object,default:null}}},Db={class:"showcaseMain"},Pb={key:0,class:"showcaseMain_content"},jb={key:1,class:"showcaseMain_empty"};function Mb(e,t,n,a,o,i){var s;const r=G("JPanel");return D(),Z("div",Db,[p(r,{title:((s=n.item)==null?void 0:s.label)||"COMPONENT",icon:"widgets","icon-color":"var(--q-accent)"},{default:S(()=>[n.item?(D(),Z("div",Pb,[(D(),pe(Ih(n.item.component)))])):(D(),Z("div",jb," Select a component from the sidebar "))]),_:1},8,["title"])])}const $b=Be(Bb,[["render",Mb],["__scopeId","data-v-e6c850be"]]),ja=Te({name:"QSpinner",props:{...qt,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[j("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ps(e,t){const n=e.style;for(const a in t)n[a]=t[a]}function Rb(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=Ls(e);if(t)return t.$el||t}function Ap(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Ob(e,t=250){let n=!1,a;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),a=e.apply(this,arguments)),a}}function yc(e,t,n,a){n.modifiers.stop===!0&&Et(e);const o=n.modifiers.color;let i=n.modifiers.center;i=i===!0||a===!0;const r=document.createElement("span"),s=document.createElement("span"),l=Vn(e),{left:u,top:c,width:d,height:f}=t.getBoundingClientRect(),h=Math.sqrt(d*d+f*f),_=h/2,I=`${(d-h)/2}px`,C=i?I:`${l.left-u-_}px`,g=`${(f-h)/2}px`,y=i?g:`${l.top-c-_}px`;s.className="q-ripple__inner",ps(s,{height:`${h}px`,width:`${h}px`,transform:`translate3d(${C},${y},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${o?" text-"+o:""}`,r.setAttribute("dir","ltr"),r.appendChild(s),t.appendChild(r);const w=()=>{r.remove(),clearTimeout(v)};n.abort.push(w);let v=setTimeout(()=>{s.classList.add("q-ripple__inner--enter"),s.style.transform=`translate3d(${I},${g},0) scale3d(1,1,1)`,s.style.opacity=.2,v=setTimeout(()=>{s.classList.remove("q-ripple__inner--enter"),s.classList.add("q-ripple__inner--leave"),s.style.opacity=0,v=setTimeout(()=>{r.remove(),n.abort.splice(n.abort.indexOf(w),1)},275)},250)},50)}function wc(e,{modifiers:t,value:n,arg:a}){const o=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:o.early===!0,stop:o.stop===!0,center:o.center===!0,color:o.color||a,keyCodes:[].concat(o.keyCodes||13)}}const Yt=er({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const a={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(o){a.enabled===!0&&o.qSkipRipple!==!0&&o.type===(a.modifiers.early===!0?"pointerdown":"click")&&yc(o,e,a,o.qKeyEvent===!0)},keystart:Ob(o=>{a.enabled===!0&&o.qSkipRipple!==!0&&An(o,a.modifiers.keyCodes)===!0&&o.type===`key${a.modifiers.early===!0?"down":"up"}`&&yc(o,e,a,!0)},300)};wc(a,t),e.__qripple=a,jt(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&wc(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),mn(t,"main"),delete e._qripple)}}),Ip={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Fb=Object.keys(Ip),qp={align:{type:String,validator:e=>Fb.includes(e)}};function Tp(e){return E(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Ip[t]}`})}function oi(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function Lp(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{Lp(e,n)}):e.add(t)}function zb(e){const t=new Set;return e.forEach(n=>{Lp(t,n)}),Array.from(t)}function Ep(e){return e.appContext.config.globalProperties.$router!==void 0}function Bp(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Sc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function kc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Nb(e,t){for(const n in t){const a=t[n],o=e[n];if(typeof a=="string"){if(a!==o)return!1}else if(Array.isArray(o)===!1||o.length!==a.length||a.some((i,r)=>i!==o[r]))return!1}return!0}function xc(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Vb(e,t){return Array.isArray(e)===!0?xc(e,t):Array.isArray(t)===!0?xc(t,e):e===t}function Hb(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Vb(e[n],t[n])===!1)return!1;return!0}const Dp={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ub={...Dp,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Pp({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Oe(),{props:a,proxy:o,emit:i}=n,r=Ep(n),s=E(()=>a.disable!==!0&&a.href!==void 0),l=E(t===!0?()=>r===!0&&a.disable!==!0&&s.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!=="":()=>r===!0&&s.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),u=E(()=>l.value===!0?y(a.to):null),c=E(()=>u.value!==null),d=E(()=>s.value===!0||c.value===!0),f=E(()=>a.type==="a"||d.value===!0?"a":a.tag||e||"div"),h=E(()=>s.value===!0?{href:a.href,target:a.target}:c.value===!0?{href:u.value.href,target:a.target}:{}),_=E(()=>{if(c.value===!1)return-1;const{matched:x}=u.value,{length:L}=x,q=x[L-1];if(q===void 0)return-1;const T=o.$route.matched;if(T.length===0)return-1;const M=T.findIndex(kc.bind(null,q));if(M!==-1)return M;const $=Sc(x[L-2]);return L>1&&Sc(q)===$&&T[T.length-1].path!==$?T.findIndex(kc.bind(null,x[L-2])):M}),I=E(()=>c.value===!0&&_.value!==-1&&Nb(o.$route.params,u.value.params)),C=E(()=>I.value===!0&&_.value===o.$route.matched.length-1&&Hb(o.$route.params,u.value.params)),g=E(()=>c.value===!0?C.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":I.value===!0?` ${a.activeClass}`:"":"");function y(x){try{return o.$router.resolve(x)}catch{}return null}function w(x,{returnRouterError:L,to:q=a.to,replace:T=a.replace}={}){if(a.disable===!0)return x.preventDefault(),Promise.resolve(!1);if(x.metaKey||x.altKey||x.ctrlKey||x.shiftKey||x.button!==void 0&&x.button!==0||a.target==="_blank")return Promise.resolve(!1);x.preventDefault();const M=o.$router[T===!0?"replace":"push"](q);return L===!0?M:M.then(()=>{}).catch(()=>{})}function v(x){if(c.value===!0){const L=q=>w(x,q);i("click",x,L),x.defaultPrevented!==!0&&L()}else i("click",x)}return{hasRouterLink:c,hasHrefLink:s,hasLink:d,linkTag:f,resolvedLink:u,linkIsActive:I,linkIsExactActive:C,linkClass:g,linkAttrs:h,getLink:y,navigateToRouterLink:w,navigateOnClick:v}}const Cc={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Wb={xs:8,sm:10,md:14,lg:20,xl:24},Jb=["button","submit","reset"],Gb=/[^\s]\/[^\s]/,Kb=["flat","outline","push","unelevated"];function jp(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}function Mp(e){const t=jp(e);return t!==void 0?{[t]:!0}:{}}const Hs={...Hn,...Dp,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Kb.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...qp.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Yb={...Hs,round:Boolean};function Zb(e){const t=Un(e,Wb),n=Tp(e),{hasRouterLink:a,hasLink:o,linkTag:i,linkAttrs:r,navigateOnClick:s}=Pp({fallbackTag:"button"}),l=E(()=>{const C=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},C,{padding:e.padding.split(/\s+/).map(g=>g in Cc?Cc[g]+"px":g).join(" "),minWidth:"0",minHeight:"0"}):C}),u=E(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),c=E(()=>e.disable!==!0&&e.loading!==!0),d=E(()=>c.value===!0?e.tabindex||0:-1),f=E(()=>jp(e,"standard")),h=E(()=>{const C={tabindex:d.value};return o.value===!0?Object.assign(C,r.value):Jb.includes(e.type)===!0&&(C.type=e.type),i.value==="a"?(e.disable===!0?C["aria-disabled"]="true":C.href===void 0&&(C.role="button"),a.value!==!0&&Gb.test(e.type)===!0&&(C.type=e.type)):e.disable===!0&&(C.disabled="",C["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(C,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),C}),_=E(()=>{let C;e.color!==void 0?e.flat===!0||e.outline===!0?C=`text-${e.textColor||e.color}`:C=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(C=`text-${e.textColor}`);const g=e.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${f.value} q-btn--${g}`+(C!==void 0?" "+C:"")+(c.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),I=E(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:_,style:l,innerClasses:I,attributes:h,hasLink:o,linkTag:i,navigateOnClick:s,isActionable:c}}const{passiveCapture:zt}=gt;let So=null,ko=null,xo=null;const vt=Te({name:"QBtn",props:{...Yb,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:a}=Oe(),{classes:o,style:i,innerClasses:r,attributes:s,hasLink:l,linkTag:u,navigateOnClick:c,isActionable:d}=Zb(e),f=be(null),h=be(null);let _=null,I,C=null;const g=E(()=>e.label!==void 0&&e.label!==null&&e.label!==""),y=E(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),w=E(()=>({center:e.round})),v=E(()=>{const B=Math.max(0,Math.min(100,e.percentage));return B>0?{transition:"transform 0.6s",transform:`translateX(${B-100}%)`}:{}}),x=E(()=>{if(e.loading===!0)return{onMousedown:Y,onTouchstart:Y,onClick:Y,onKeydown:Y,onKeyup:Y};if(d.value===!0){const B={onClick:q,onKeydown:T,onMousedown:$};if(a.$q.platform.has.touch===!0){const N=e.onTouchstart!==void 0?"":"Passive";B[`onTouchstart${N}`]=M}return B}return{onClick:He}}),L=E(()=>({ref:f,class:"q-btn q-btn-item non-selectable no-outline "+o.value,style:i.value,...s.value,...x.value}));function q(B){if(f.value!==null){if(B!==void 0){if(B.defaultPrevented===!0)return;const N=document.activeElement;if(e.type==="submit"&&N!==document.body&&f.value.contains(N)===!1&&N.contains(f.value)===!1){B.qAvoidFocus!==!0&&f.value.focus();const ne=()=>{var ee;document.removeEventListener("keydown",He,!0),document.removeEventListener("keyup",ne,zt),(ee=f.value)==null||ee.removeEventListener("blur",ne,zt)};document.addEventListener("keydown",He,!0),document.addEventListener("keyup",ne,zt),f.value.addEventListener("blur",ne,zt)}}c(B)}}function T(B){f.value!==null&&(n("keydown",B),An(B,[13,32])===!0&&ko!==f.value&&(ko!==null&&O(),B.defaultPrevented!==!0&&(B.qAvoidFocus!==!0&&f.value.focus(),ko=f.value,f.value.classList.add("q-btn--active"),document.addEventListener("keyup",z,!0),f.value.addEventListener("blur",z,zt)),He(B)))}function M(B){f.value!==null&&(n("touchstart",B),B.defaultPrevented!==!0&&(So!==f.value&&(So!==null&&O(),So=f.value,_=B.target,_.addEventListener("touchcancel",z,zt),_.addEventListener("touchend",z,zt)),I=!0,C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,I=!1},200)))}function $(B){f.value!==null&&(B.qSkipRipple=I===!0,n("mousedown",B),B.defaultPrevented!==!0&&xo!==f.value&&(xo!==null&&O(),xo=f.value,f.value.classList.add("q-btn--active"),document.addEventListener("mouseup",z,zt)))}function z(B){if(f.value!==null&&!((B==null?void 0:B.type)==="blur"&&document.activeElement===f.value)){if((B==null?void 0:B.type)==="keyup"){if(ko===f.value&&An(B,[13,32])===!0){const N=new MouseEvent("click",B);N.qKeyEvent=!0,B.defaultPrevented===!0&&At(N),B.cancelBubble===!0&&Et(N),f.value.dispatchEvent(N),He(B),B.qKeyEvent=!0}n("keyup",B)}O()}}function O(B){var ne,ee;const N=h.value;B!==!0&&(So===f.value||xo===f.value)&&N!==null&&N!==document.activeElement&&(N.setAttribute("tabindex",-1),N.focus()),So===f.value&&(_!==null&&(_.removeEventListener("touchcancel",z,zt),_.removeEventListener("touchend",z,zt)),So=_=null),xo===f.value&&(document.removeEventListener("mouseup",z,zt),xo=null),ko===f.value&&(document.removeEventListener("keyup",z,!0),(ne=f.value)==null||ne.removeEventListener("blur",z,zt),ko=null),(ee=f.value)==null||ee.classList.remove("q-btn--active")}function Y(B){He(B),B.qSkipRipple=!0}return at(()=>{O(!0)}),Object.assign(a,{click:B=>{d.value===!0&&q(B)}}),()=>{let B=[];e.icon!==void 0&&B.push(j(Ve,{name:e.icon,left:e.stack!==!0&&g.value===!0,role:"img"})),g.value===!0&&B.push(j("span",{class:"block"},[e.label])),B=Ut(t.default,B),e.iconRight!==void 0&&e.round===!1&&B.push(j(Ve,{name:e.iconRight,right:e.stack!==!0&&g.value===!0,role:"img"}));const N=[j("span",{class:"q-focus-helper",ref:h})];return e.loading===!0&&e.percentage!==void 0&&N.push(j("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[j("span",{class:"q-btn__progress-indicator fit block",style:v.value})])),N.push(j("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},B)),e.loading!==null&&N.push(j(Jt,{name:"q-transition--fade"},()=>e.loading===!0?[j("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[j(ja)])]:null)),he(j(u.value,L.value,N),[[Yt,y.value,void 0,w.value]])}}});function Xb(){return Fn(vp)}function Ia(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),_i.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const $p={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},e_={...$p,contextMenu:Boolean};function Rp({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:a,proxy:o,emit:i}=Oe(),r=be(null);let s=null;function l(h){return r.value===null?!1:h===void 0||h.touches===void 0||h.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(h){o.hide(h)},toggle(h){o.toggle(h),h.qAnchorHandled=!0},toggleKey(h){An(h,13)===!0&&u.toggle(h)},contextClick(h){o.hide(h),At(h),rt(()=>{o.show(h),h.qAnchorHandled=!0})},prevent:At,mobileTouch(h){if(u.mobileCleanup(h),l(h)!==!0)return;o.hide(h),r.value.classList.add("non-selectable");const _=h.target;jt(u,"anchor",[[_,"touchmove","mobileCleanup","passive"],[_,"touchend","mobileCleanup","passive"],[_,"touchcancel","mobileCleanup","passive"],[r.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,o.show(h),h.qAnchorHandled=!0},300)},mobileCleanup(h){r.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&h!==void 0&&Ia()}}),n=function(_=a.contextMenu){if(a.noParentEvent===!0||r.value===null)return;let I;_===!0?o.$q.platform.is.mobile===!0?I=[[r.value,"touchstart","mobileTouch","passive"]]:I=[[r.value,"mousedown","hide","passive"],[r.value,"contextmenu","contextClick","notPassive"]]:I=[[r.value,"click","toggle","passive"],[r.value,"keyup","toggleKey","passive"]],jt(u,"anchor",I)});function c(){mn(u,"anchor")}function d(h){for(r.value=h;r.value.classList.contains("q-anchor--skip");)r.value=r.value.parentNode;n()}function f(){if(a.target===!1||a.target===""||o.$el.parentNode===null)r.value=null;else if(a.target===!0)d(o.$el.parentNode);else{let h=a.target;if(typeof a.target=="string")try{h=document.querySelector(a.target)}catch{h=void 0}h!=null?(r.value=h.$el||h,n()):(r.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return Pe(()=>a.contextMenu,h=>{r.value!==null&&(c(),n(h))}),Pe(()=>a.target,()=>{r.value!==null&&c(),f()}),Pe(()=>a.noParentEvent,h=>{r.value!==null&&(h===!0?c():n())}),Dt(()=>{f(),t!==!0&&a.modelValue===!0&&r.value===null&&i("update:modelValue",!1)}),at(()=>{s!==null&&clearTimeout(s),c()}),{anchorEl:r,canShow:l,anchorEvents:u}}function Op(e,t){const n=be(null);let a;function o(s,l){const u=`${l!==void 0?"add":"remove"}EventListener`,c=l!==void 0?l:a;s!==window&&s[u]("scroll",c,gt.passive),window[u]("scroll",c,gt.passive),a=l}function i(){n.value!==null&&(o(n.value),n.value=null)}const r=Pe(()=>e.noParentEvent,()=>{n.value!==null&&(i(),t())});return at(r),{localScrollTarget:n,unconfigureScrollTarget:i,changeScrollEvent:o}}const Us={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ws=["beforeShow","show","beforeHide","hide"];function Js({showing:e,canShow:t,hideOnRouteChange:n,handleShow:a,handleHide:o,processOnMount:i}){const r=Oe(),{props:s,emit:l,proxy:u}=r;let c;function d(y){e.value===!0?_(y):f(y)}function f(y){if(s.disable===!0||(y==null?void 0:y.qAnchorHandled)===!0||t!==void 0&&t(y)!==!0)return;const w=s["onUpdate:modelValue"]!==void 0;w===!0&&(l("update:modelValue",!0),c=y,rt(()=>{c===y&&(c=void 0)})),(s.modelValue===null||w===!1)&&h(y)}function h(y){e.value!==!0&&(e.value=!0,l("beforeShow",y),a!==void 0?a(y):l("show",y))}function _(y){if(s.disable===!0)return;const w=s["onUpdate:modelValue"]!==void 0;w===!0&&(l("update:modelValue",!1),c=y,rt(()=>{c===y&&(c=void 0)})),(s.modelValue===null||w===!1)&&I(y)}function I(y){e.value!==!1&&(e.value=!1,l("beforeHide",y),o!==void 0?o(y):l("hide",y))}function C(y){s.disable===!0&&y===!0?s["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):y===!0!==e.value&&(y===!0?h:I)(c)}Pe(()=>s.modelValue,C),n!==void 0&&Ep(r)===!0&&Pe(()=>u.$route.fullPath,()=>{n.value===!0&&e.value===!0&&_()}),Dt(()=>{C(s.modelValue)});const g={show:f,hide:_,toggle:d};return Object.assign(u,g),g}let to=[],qa=[];function Fp(e){qa=qa.filter(t=>t!==e)}function t_(e){Fp(e),qa.push(e)}function Qc(e){Fp(e),qa.length===0&&to.length!==0&&(to[to.length-1](),to=[])}function or(e){qa.length===0?e():to.push(e)}function n_(e){to=to.filter(t=>t!==e)}let o_=1,a_=document.body;function i_(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${o_++}`:e,wi.globalNodes!==void 0){const a=wi.globalNodes.class;a!==void 0&&(n.className=a)}return a_.appendChild(n),n}function r_(e){e.remove()}const Oo=[];function s_(e){return Oo.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function zp(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return oi(e)}else if(e.__qPortal===!0){const n=oi(e);return(n==null?void 0:n.$options.name)==="QPopupProxy"?(e.hide(t),n):e}e=oi(e)}while(e!=null)}function l_(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=zp(e,t);continue}e.hide(t)}e=oi(e)}}const c_=Te({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function u_(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Gs(e,t,n,a){const o=be(!1),i=be(!1);let r=null;const s={},l=a==="dialog"&&u_(e);function u(d){if(d===!0){Qc(s),i.value=!0;return}i.value=!1,o.value===!1&&(l===!1&&r===null&&(r=i_(!1,a)),o.value=!0,Oo.push(e.proxy),t_(s))}function c(d){if(i.value=!1,d!==!0)return;Qc(s),o.value=!1;const f=Oo.indexOf(e.proxy);f!==-1&&Oo.splice(f,1),r!==null&&(r_(r),r=null)}return Ps(()=>{c(!0)}),e.proxy.__qPortal=!0,Zo(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:c,portalIsActive:o,portalIsAccessible:i,renderPortal:()=>l===!0?n():o.value===!0?[j(bh,{to:r},j(c_,n))]:void 0}}const ro={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ar(e,t=()=>{},n=()=>{}){return{transitionProps:E(()=>{const a=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:E(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Fo(){let e;const t=Oe();function n(){e=void 0}return Yo(n),at(n),{removeTick:n,registerTick(a){e=a,rt(()=>{e===a&&(Bp(t)===!1&&e(),e=void 0)})}}}function Jo(){let e=null;const t=Oe();function n(){e!==null&&(clearTimeout(e),e=null)}return Yo(n),at(n),{removeTimeout:n,registerTimeout(a,o){n(),Bp(t)===!1&&(e=setTimeout(()=>{e=null,a()},o))}}}const Np=[Element,String],d_=[null,document,document.body,document.scrollingElement,document.documentElement];function Vp(e,t){let n=Rb(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return d_.includes(n)?window:n}function p_(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function f_(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let Ua;function m_(){if(Ua!==void 0)return Ua;const e=document.createElement("p"),t=document.createElement("div");ps(e,{width:"100%",height:"200px"}),ps(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let a=e.offsetWidth;return n===a&&(a=t.clientWidth),t.remove(),Ua=n-a,Ua}function h_(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{notPassiveCapture:ki}=gt,so=[];function xi(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=Oo.length-1;for(;n>=0;){const a=Oo[n].$;if(a.type.name==="QTooltip"){n--;continue}if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;n--}for(let a=so.length-1;a>=0;a--){const o=so[a];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Hp(e){so.push(e),so.length===1&&(document.addEventListener("mousedown",xi,ki),document.addEventListener("touchstart",xi,ki))}function Ci(e){const t=so.findIndex(n=>n===e);t!==-1&&(so.splice(t,1),so.length===0&&(document.removeEventListener("mousedown",xi,ki),document.removeEventListener("touchstart",xi,ki)))}let Ac,Ic;function Qi(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Up(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const fs={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{fs[`${e}#ltr`]=e,fs[`${e}#rtl`]=e});function Ai(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:fs[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function g_(e,t){let{top:n,left:a,right:o,bottom:i,width:r,height:s}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],a-=t[0],i+=t[1],o+=t[0],r+=t[0],s+=t[1]),{top:n,bottom:i,height:s,left:a,right:o,width:r,middle:a+(o-a)/2,center:n+(i-n)/2}}function v_(e,t,n){let{top:a,left:o}=e.getBoundingClientRect();return a+=t.top,o+=t.left,n!==void 0&&(a+=n[1],o+=n[0]),{top:a,bottom:a+1,height:1,left:o,right:o+1,width:1,middle:o,center:a}}function b_(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function qc(e,t,n,a){return{top:e[n.vertical]-t[a.vertical],left:e[n.horizontal]-t[a.horizontal]}}function Ks(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{Ks(e,t+1)},10);return}const{targetEl:n,offset:a,anchorEl:o,anchorOrigin:i,selfOrigin:r,absoluteOffset:s,fit:l,cover:u,maxHeight:c,maxWidth:d}=e;if(Ue.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:q,offsetTop:T}=window.visualViewport;q!==Ac&&(L.setProperty("--q-pe-left",q+"px"),Ac=q),T!==Ic&&(L.setProperty("--q-pe-top",T+"px"),Ic=T)}const{scrollLeft:f,scrollTop:h}=n,_=s===void 0?g_(o,u===!0?[0,0]:a):v_(o,s,a);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:d,maxHeight:c,visibility:"visible"});const{offsetWidth:I,offsetHeight:C}=n,{elWidth:g,elHeight:y}=l===!0||u===!0?{elWidth:Math.max(_.width,I),elHeight:u===!0?Math.max(_.height,C):C}:{elWidth:I,elHeight:C};let w={maxWidth:d,maxHeight:c};(l===!0||u===!0)&&(w.minWidth=_.width+"px",u===!0&&(w.minHeight=_.height+"px")),Object.assign(n.style,w);const v=b_(g,y);let x=qc(_,v,i,r);if(s===void 0||a===void 0)Ir(x,_,v,i,r);else{const{top:L,left:q}=x;Ir(x,_,v,i,r);let T=!1;if(x.top!==L){T=!0;const M=2*a[1];_.center=_.top-=M,_.bottom-=M+2}if(x.left!==q){T=!0;const M=2*a[0];_.middle=_.left-=M,_.right-=M+2}T===!0&&(x=qc(_,v,i,r),Ir(x,_,v,i,r))}w={top:x.top+"px",left:x.left+"px"},x.maxHeight!==void 0&&(w.maxHeight=x.maxHeight+"px",_.height>x.maxHeight&&(w.minHeight=w.maxHeight)),x.maxWidth!==void 0&&(w.maxWidth=x.maxWidth+"px",_.width>x.maxWidth&&(w.minWidth=w.maxWidth)),Object.assign(n.style,w),n.scrollTop!==h&&(n.scrollTop=h),n.scrollLeft!==f&&(n.scrollLeft=f)}function Ir(e,t,n,a,o){const i=n.bottom,r=n.right,s=m_(),l=window.innerHeight-s,u=document.body.clientWidth;if(e.top<0||e.top+i>l)if(o.vertical==="center")e.top=t[a.vertical]>l/2?Math.max(0,l-i):0,e.maxHeight=Math.min(i,l);else if(t[a.vertical]>l/2){const c=Math.min(l,a.vertical==="center"?t.center:a.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(i,c),e.top=Math.max(0,c-i)}else e.top=Math.max(0,a.vertical==="center"?t.center:a.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(i,l-e.top);if(e.left<0||e.left+r>u)if(e.maxWidth=Math.min(r,u),o.horizontal==="middle")e.left=t[a.horizontal]>u/2?Math.max(0,u-r):0;else if(t[a.horizontal]>u/2){const c=Math.min(u,a.horizontal==="middle"?t.middle:a.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(r,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?t.middle:a.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(r,u-e.left)}const __=Te({name:"QTooltip",inheritAttrs:!1,props:{...$p,...Us,...ro,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...ro.transitionShow,default:"jump-down"},transitionHide:{...ro.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Qi},self:{type:String,default:"top middle",validator:Qi},offset:{type:Array,default:()=>[14,14],validator:Up},scrollTarget:Np,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Ws],setup(e,{slots:t,emit:n,attrs:a}){let o,i;const r=Oe(),{proxy:{$q:s}}=r,l=be(null),u=be(!1),c=E(()=>Ai(e.anchor,s.lang.rtl)),d=E(()=>Ai(e.self,s.lang.rtl)),f=E(()=>e.persistent!==!0),{registerTick:h,removeTick:_}=Fo(),{registerTimeout:I}=Jo(),{transitionProps:C,transitionStyle:g}=ar(e),{localScrollTarget:y,changeScrollEvent:w,unconfigureScrollTarget:v}=Op(e,Ie),{anchorEl:x,canShow:L,anchorEvents:q}=Rp({showing:u,configureAnchorEl:ge}),{show:T,hide:M}=Js({showing:u,canShow:L,handleShow:Y,handleHide:B,hideOnRouteChange:f,processOnMount:!0});Object.assign(q,{delayShow:ee,delayHide:J});const{showPortal:$,hidePortal:z,renderPortal:O}=Gs(r,l,F,"tooltip");if(s.platform.is.mobile===!0){const le={anchorEl:x,innerRef:l,onClickOutside(Qe){return M(Qe),Qe.target.classList.contains("q-dialog__backdrop")&&He(Qe),!0}},ke=E(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);Pe(ke,Qe=>{(Qe===!0?Hp:Ci)(le)}),at(()=>{Ci(le)})}function Y(le){$(),h(()=>{i=new MutationObserver(()=>ne()),i.observe(l.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),ne(),Ie()}),o===void 0&&(o=Pe(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,ne)),I(()=>{$(!0),n("show",le)},e.transitionDuration)}function B(le){_(),z(),N(),I(()=>{z(!0),n("hide",le)},e.transitionDuration)}function N(){i!==void 0&&(i.disconnect(),i=void 0),o!==void 0&&(o(),o=void 0),v(),mn(q,"tooltipTemp")}function ne(){Ks({targetEl:l.value,offset:e.offset,anchorEl:x.value,anchorOrigin:c.value,selfOrigin:d.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(le){if(s.platform.is.mobile===!0){Ia(),document.body.classList.add("non-selectable");const ke=x.value,Qe=["touchmove","touchcancel","touchend","click"].map(ie=>[ke,ie,"delayHide","passiveCapture"]);jt(q,"tooltipTemp",Qe)}I(()=>{T(le)},e.delay)}function J(le){s.platform.is.mobile===!0&&(mn(q,"tooltipTemp"),Ia(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),I(()=>{M(le)},e.hideDelay)}function ge(){if(e.noParentEvent===!0||x.value===null)return;const le=s.platform.is.mobile===!0?[[x.value,"touchstart","delayShow","passive"]]:[[x.value,"mouseenter","delayShow","passive"],[x.value,"mouseleave","delayHide","passive"]];jt(q,"anchor",le)}function Ie(){if(x.value!==null||e.scrollTarget!==void 0){y.value=Vp(x.value,e.scrollTarget);const le=e.noParentEvent===!0?ne:M;w(y.value,le)}}function H(){return u.value===!0?j("div",{...a,ref:l,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,g.value],role:"tooltip"},tt(t.default)):null}function F(){return j(Jt,C.value,H)}return at(N),Object.assign(r.proxy,{updatePosition:ne}),O}});/*!
 * @quasar/quasar-ui-qmarkdown v2.0.5
 * (c) 2025 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y_(e){var t;return e.__esModule?e:(t=Object.defineProperty({},"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}),t)}var We={},w_="Á",S_="á",k_="Ă",x_="ă",C_="∾",Q_="∿",A_="∾̳",I_="Â",q_="â",T_="´",L_="А",E_="а",B_="Æ",D_="æ",P_="⁡",j_="𝔄",M_="𝔞",$_="À",R_="à",O_="ℵ",F_="ℵ",z_="Α",N_="α",V_="Ā",H_="ā",U_="⨿",W_="&",J_="&",G_="⩕",K_="⩓",Y_="∧",Z_="⩜",X_="⩘",ey="⩚",ty="∠",ny="⦤",oy="∠",ay="⦨",iy="⦩",ry="⦪",sy="⦫",ly="⦬",cy="⦭",uy="⦮",dy="⦯",py="∡",fy="∟",my="⊾",hy="⦝",gy="∢",vy="Å",by="⍼",_y="Ą",yy="ą",wy="𝔸",Sy="𝕒",ky="⩯",xy="≈",Cy="⩰",Qy="≊",Ay="≋",Iy="'",qy="⁡",Ty="≈",Ly="≊",Ey="Å",By="å",Dy="𝒜",Py="𝒶",jy="≔",My="*",$y="≈",Ry="≍",Oy="Ã",Fy="ã",zy="Ä",Ny="ä",Vy="∳",Hy="⨑",Uy="≌",Wy="϶",Jy="‵",Gy="∽",Ky="⋍",Yy="∖",Zy="⫧",Xy="⊽",e1="⌅",t1="⌆",n1="⌅",o1="⎵",a1="⎶",i1="≌",r1="Б",s1="б",l1="„",c1="∵",u1="∵",d1="∵",p1="⦰",f1="϶",m1="ℬ",h1="ℬ",g1="Β",v1="β",b1="ℶ",_1="≬",y1="𝔅",w1="𝔟",S1="⋂",k1="◯",x1="⋃",C1="⨀",Q1="⨁",A1="⨂",I1="⨆",q1="★",T1="▽",L1="△",E1="⨄",B1="⋁",D1="⋀",P1="⤍",j1="⧫",M1="▪",$1="▴",R1="▾",O1="◂",F1="▸",z1="␣",N1="▒",V1="░",H1="▓",U1="█",W1="=⃥",J1="≡⃥",G1="⫭",K1="⌐",Y1="𝔹",Z1="𝕓",X1="⊥",e0="⊥",t0="⋈",n0="⧉",o0="┐",a0="╕",i0="╖",r0="╗",s0="┌",l0="╒",c0="╓",u0="╔",d0="─",p0="═",f0="┬",m0="╤",h0="╥",g0="╦",v0="┴",b0="╧",_0="╨",y0="╩",w0="⊟",S0="⊞",k0="⊠",x0="┘",C0="╛",Q0="╜",A0="╝",I0="└",q0="╘",T0="╙",L0="╚",E0="│",B0="║",D0="┼",P0="╪",j0="╫",M0="╬",$0="┤",R0="╡",O0="╢",F0="╣",z0="├",N0="╞",V0="╟",H0="╠",U0="‵",W0="˘",J0="˘",G0="¦",K0="𝒷",Y0="ℬ",Z0="⁏",X0="∽",ew="⋍",tw="⧅",nw="\\",ow="⟈",aw="•",iw="•",rw="≎",sw="⪮",lw="≏",cw="≎",uw="≏",dw="Ć",pw="ć",fw="⩄",mw="⩉",hw="⩋",gw="∩",vw="⋒",bw="⩇",_w="⩀",yw="ⅅ",ww="∩︀",Sw="⁁",kw="ˇ",xw="ℭ",Cw="⩍",Qw="Č",Aw="č",Iw="Ç",qw="ç",Tw="Ĉ",Lw="ĉ",Ew="∰",Bw="⩌",Dw="⩐",Pw="Ċ",jw="ċ",Mw="¸",$w="¸",Rw="⦲",Ow="¢",Fw="·",zw="·",Nw="𝔠",Vw="ℭ",Hw="Ч",Uw="ч",Ww="✓",Jw="✓",Gw="Χ",Kw="χ",Yw="ˆ",Zw="≗",Xw="↺",eS="↻",tS="⊛",nS="⊚",oS="⊝",aS="⊙",iS="®",rS="Ⓢ",sS="⊖",lS="⊕",cS="⊗",uS="○",dS="⧃",pS="≗",fS="⨐",mS="⫯",hS="⧂",gS="∲",vS="”",bS="’",_S="♣",yS="♣",wS=":",SS="∷",kS="⩴",xS="≔",CS="≔",QS=",",AS="@",IS="∁",qS="∘",TS="∁",LS="ℂ",ES="≅",BS="⩭",DS="≡",PS="∮",jS="∯",MS="∮",$S="𝕔",RS="ℂ",OS="∐",FS="∐",zS="©",NS="©",VS="℗",HS="∳",US="↵",WS="✗",JS="⨯",GS="𝒞",KS="𝒸",YS="⫏",ZS="⫑",XS="⫐",ek="⫒",tk="⋯",nk="⤸",ok="⤵",ak="⋞",ik="⋟",rk="↶",sk="⤽",lk="⩈",ck="⩆",uk="≍",dk="∪",pk="⋓",fk="⩊",mk="⊍",hk="⩅",gk="∪︀",vk="↷",bk="⤼",_k="⋞",yk="⋟",wk="⋎",Sk="⋏",kk="¤",xk="↶",Ck="↷",Qk="⋎",Ak="⋏",Ik="∲",qk="∱",Tk="⌭",Lk="†",Ek="‡",Bk="ℸ",Dk="↓",Pk="↡",jk="⇓",Mk="‐",$k="⫤",Rk="⊣",Ok="⤏",Fk="˝",zk="Ď",Nk="ď",Vk="Д",Hk="д",Uk="‡",Wk="⇊",Jk="ⅅ",Gk="ⅆ",Kk="⤑",Yk="⩷",Zk="°",Xk="∇",ex="Δ",tx="δ",nx="⦱",ox="⥿",ax="𝔇",ix="𝔡",rx="⥥",sx="⇃",lx="⇂",cx="´",ux="˙",dx="˝",px="`",fx="˜",mx="⋄",hx="⋄",gx="⋄",vx="♦",bx="♦",_x="¨",yx="ⅆ",wx="ϝ",Sx="⋲",kx="÷",xx="÷",Cx="⋇",Qx="⋇",Ax="Ђ",Ix="ђ",qx="⌞",Tx="⌍",Lx="$",Ex="𝔻",Bx="𝕕",Dx="¨",Px="˙",jx="⃜",Mx="≐",$x="≑",Rx="≐",Ox="∸",Fx="∔",zx="⊡",Nx="⌆",Vx="∯",Hx="¨",Ux="⇓",Wx="⇐",Jx="⇔",Gx="⫤",Kx="⟸",Yx="⟺",Zx="⟹",Xx="⇒",e2="⊨",t2="⇑",n2="⇕",o2="∥",a2="⤓",i2="↓",r2="↓",s2="⇓",l2="⇵",c2="̑",u2="⇊",d2="⇃",p2="⇂",f2="⥐",m2="⥞",h2="⥖",g2="↽",v2="⥟",b2="⥗",_2="⇁",y2="↧",w2="⊤",S2="⤐",k2="⌟",x2="⌌",C2="𝒟",Q2="𝒹",A2="Ѕ",I2="ѕ",q2="⧶",T2="Đ",L2="đ",E2="⋱",B2="▿",D2="▾",P2="⇵",j2="⥯",M2="⦦",$2="Џ",R2="џ",O2="⟿",F2="É",z2="é",N2="⩮",V2="Ě",H2="ě",U2="Ê",W2="ê",J2="≖",G2="≕",K2="Э",Y2="э",Z2="⩷",X2="Ė",eC="ė",tC="≑",nC="ⅇ",oC="≒",aC="𝔈",iC="𝔢",rC="⪚",sC="È",lC="è",cC="⪖",uC="⪘",dC="⪙",pC="∈",fC="⏧",mC="ℓ",hC="⪕",gC="⪗",vC="Ē",bC="ē",_C="∅",yC="∅",wC="◻",SC="∅",kC="▫",xC=" ",CC=" ",QC=" ",AC="Ŋ",IC="ŋ",qC=" ",TC="Ę",LC="ę",EC="𝔼",BC="𝕖",DC="⋕",PC="⧣",jC="⩱",MC="ε",$C="Ε",RC="ε",OC="ϵ",FC="≖",zC="≕",NC="≂",VC="⪖",HC="⪕",UC="⩵",WC="=",JC="≂",GC="≟",KC="⇌",YC="≡",ZC="⩸",XC="⧥",e3="⥱",t3="≓",n3="ℯ",o3="ℰ",a3="≐",i3="⩳",r3="≂",s3="Η",l3="η",c3="Ð",u3="ð",d3="Ë",p3="ë",f3="€",m3="!",h3="∃",g3="∃",v3="ℰ",b3="ⅇ",_3="ⅇ",y3="≒",w3="Ф",S3="ф",k3="♀",x3="ﬃ",C3="ﬀ",Q3="ﬄ",A3="𝔉",I3="𝔣",q3="ﬁ",T3="◼",L3="▪",E3="fj",B3="♭",D3="ﬂ",P3="▱",j3="ƒ",M3="𝔽",$3="𝕗",R3="∀",O3="∀",F3="⋔",z3="⫙",N3="ℱ",V3="⨍",H3="½",U3="⅓",W3="¼",J3="⅕",G3="⅙",K3="⅛",Y3="⅔",Z3="⅖",X3="¾",eQ="⅗",tQ="⅜",nQ="⅘",oQ="⅚",aQ="⅝",iQ="⅞",rQ="⁄",sQ="⌢",lQ="𝒻",cQ="ℱ",uQ="ǵ",dQ="Γ",pQ="γ",fQ="Ϝ",mQ="ϝ",hQ="⪆",gQ="Ğ",vQ="ğ",bQ="Ģ",_Q="Ĝ",yQ="ĝ",wQ="Г",SQ="г",kQ="Ġ",xQ="ġ",CQ="≥",QQ="≧",AQ="⪌",IQ="⋛",qQ="≥",TQ="≧",LQ="⩾",EQ="⪩",BQ="⩾",DQ="⪀",PQ="⪂",jQ="⪄",MQ="⋛︀",$Q="⪔",RQ="𝔊",OQ="𝔤",FQ="≫",zQ="⋙",NQ="⋙",VQ="ℷ",HQ="Ѓ",UQ="ѓ",WQ="⪥",JQ="≷",GQ="⪒",KQ="⪤",YQ="⪊",ZQ="⪊",XQ="⪈",e4="≩",t4="⪈",n4="≩",o4="⋧",a4="𝔾",i4="𝕘",r4="`",s4="≥",l4="⋛",c4="≧",u4="⪢",d4="≷",p4="⩾",f4="≳",m4="𝒢",h4="ℊ",g4="≳",v4="⪎",b4="⪐",_4="⪧",y4="⩺",w4=">",S4=">",k4="≫",x4="⋗",C4="⦕",Q4="⩼",A4="⪆",I4="⥸",q4="⋗",T4="⋛",L4="⪌",E4="≷",B4="≳",D4="≩︀",P4="≩︀",j4="ˇ",M4=" ",$4="½",R4="ℋ",O4="Ъ",F4="ъ",z4="⥈",N4="↔",V4="⇔",H4="↭",U4="^",W4="ℏ",J4="Ĥ",G4="ĥ",K4="♥",Y4="♥",Z4="…",X4="⊹",e5="𝔥",t5="ℌ",n5="ℋ",o5="⤥",a5="⤦",i5="⇿",r5="∻",s5="↩",l5="↪",c5="𝕙",u5="ℍ",d5="―",p5="─",f5="𝒽",m5="ℋ",h5="ℏ",g5="Ħ",v5="ħ",b5="≎",_5="≏",y5="⁃",w5="‐",S5="Í",k5="í",x5="⁣",C5="Î",Q5="î",A5="И",I5="и",q5="İ",T5="Е",L5="е",E5="¡",B5="⇔",D5="𝔦",P5="ℑ",j5="Ì",M5="ì",$5="ⅈ",R5="⨌",O5="∭",F5="⧜",z5="℩",N5="Ĳ",V5="ĳ",H5="Ī",U5="ī",W5="ℑ",J5="ⅈ",G5="ℐ",K5="ℑ",Y5="ı",Z5="ℑ",X5="⊷",eA="Ƶ",tA="⇒",nA="℅",oA="∞",aA="⧝",iA="ı",rA="⊺",sA="∫",lA="∬",cA="ℤ",uA="∫",dA="⊺",pA="⋂",fA="⨗",mA="⨼",hA="⁣",gA="⁢",vA="Ё",bA="ё",_A="Į",yA="į",wA="𝕀",SA="𝕚",kA="Ι",xA="ι",CA="⨼",QA="¿",AA="𝒾",IA="ℐ",qA="∈",TA="⋵",LA="⋹",EA="⋴",BA="⋳",DA="∈",PA="⁢",jA="Ĩ",MA="ĩ",$A="І",RA="і",OA="Ï",FA="ï",zA="Ĵ",NA="ĵ",VA="Й",HA="й",UA="𝔍",WA="𝔧",JA="ȷ",GA="𝕁",KA="𝕛",YA="𝒥",ZA="𝒿",XA="Ј",e6="ј",t6="Є",n6="є",o6="Κ",a6="κ",i6="ϰ",r6="Ķ",s6="ķ",l6="К",c6="к",u6="𝔎",d6="𝔨",p6="ĸ",f6="Х",m6="х",h6="Ќ",g6="ќ",v6="𝕂",b6="𝕜",_6="𝒦",y6="𝓀",w6="⇚",S6="Ĺ",k6="ĺ",x6="⦴",C6="ℒ",Q6="Λ",A6="λ",I6="⟨",q6="⟪",T6="⦑",L6="⟨",E6="⪅",B6="ℒ",D6="«",P6="⇤",j6="⤟",M6="←",$6="↞",R6="⇐",O6="⤝",F6="↩",z6="↫",N6="⤹",V6="⥳",H6="↢",U6="⤙",W6="⤛",J6="⪫",G6="⪭",K6="⪭︀",Y6="⤌",Z6="⤎",X6="❲",eI="{",tI="[",nI="⦋",oI="⦏",aI="⦍",iI="Ľ",rI="ľ",sI="Ļ",lI="ļ",cI="⌈",uI="{",dI="Л",pI="л",fI="⤶",mI="“",hI="„",gI="⥧",vI="⥋",bI="↲",_I="≤",yI="≦",wI="⟨",SI="⇤",kI="←",xI="←",CI="⇐",QI="⇆",AI="↢",II="⌈",qI="⟦",TI="⥡",LI="⥙",EI="⇃",BI="⌊",DI="↽",PI="↼",jI="⇇",MI="↔",$I="↔",RI="⇔",OI="⇆",FI="⇋",zI="↭",NI="⥎",VI="↤",HI="⊣",UI="⥚",WI="⋋",JI="⧏",GI="⊲",KI="⊴",YI="⥑",ZI="⥠",XI="⥘",eq="↿",tq="⥒",nq="↼",oq="⪋",aq="⋚",iq="≤",rq="≦",sq="⩽",lq="⪨",cq="⩽",uq="⩿",dq="⪁",pq="⪃",fq="⋚︀",mq="⪓",hq="⪅",gq="⋖",vq="⋚",bq="⪋",_q="⋚",yq="≦",wq="≶",Sq="≶",kq="⪡",xq="≲",Cq="⩽",Qq="≲",Aq="⥼",Iq="⌊",qq="𝔏",Tq="𝔩",Lq="≶",Eq="⪑",Bq="⥢",Dq="↽",Pq="↼",jq="⥪",Mq="▄",$q="Љ",Rq="љ",Oq="⇇",Fq="≪",zq="⋘",Nq="⌞",Vq="⇚",Hq="⥫",Uq="◺",Wq="Ŀ",Jq="ŀ",Gq="⎰",Kq="⎰",Yq="⪉",Zq="⪉",Xq="⪇",eT="≨",tT="⪇",nT="≨",oT="⋦",aT="⟬",iT="⇽",rT="⟦",sT="⟵",lT="⟵",cT="⟸",uT="⟷",dT="⟷",pT="⟺",fT="⟼",mT="⟶",hT="⟶",gT="⟹",vT="↫",bT="↬",_T="⦅",yT="𝕃",wT="𝕝",ST="⨭",kT="⨴",xT="∗",CT="_",QT="↙",AT="↘",IT="◊",qT="◊",TT="⧫",LT="(",ET="⦓",BT="⇆",DT="⌟",PT="⇋",jT="⥭",MT="‎",$T="⊿",RT="‹",OT="𝓁",FT="ℒ",zT="↰",NT="↰",VT="≲",HT="⪍",UT="⪏",WT="[",JT="‘",GT="‚",KT="Ł",YT="ł",ZT="⪦",XT="⩹",e8="<",t8="<",n8="≪",o8="⋖",a8="⋋",i8="⋉",r8="⥶",s8="⩻",l8="◃",c8="⊴",u8="◂",d8="⦖",p8="⥊",f8="⥦",m8="≨︀",h8="≨︀",g8="¯",v8="♂",b8="✠",_8="✠",y8="↦",w8="↦",S8="↧",k8="↤",x8="↥",C8="▮",Q8="⨩",A8="М",I8="м",q8="—",T8="∺",L8="∡",E8=" ",B8="ℳ",D8="𝔐",P8="𝔪",j8="℧",M8="µ",$8="*",R8="⫰",O8="∣",F8="·",z8="⊟",N8="−",V8="∸",H8="⨪",U8="∓",W8="⫛",J8="…",G8="∓",K8="⊧",Y8="𝕄",Z8="𝕞",X8="∓",eL="𝓂",tL="ℳ",nL="∾",oL="Μ",aL="μ",iL="⊸",rL="⊸",sL="∇",lL="Ń",cL="ń",uL="∠⃒",dL="≉",pL="⩰̸",fL="≋̸",mL="ŉ",hL="≉",gL="♮",vL="ℕ",bL="♮",_L=" ",yL="≎̸",wL="≏̸",SL="⩃",kL="Ň",xL="ň",CL="Ņ",QL="ņ",AL="≇",IL="⩭̸",qL="⩂",TL="Н",LL="н",EL="–",BL="⤤",DL="↗",PL="⇗",jL="↗",ML="≠",$L="≐̸",RL="​",OL="​",FL="​",zL="​",NL="≢",VL="⤨",HL="≂̸",UL="≫",WL="≪",JL=`
`,GL="∄",KL="∄",YL="𝔑",ZL="𝔫",XL="≧̸",eE="≱",tE="≱",nE="≧̸",oE="⩾̸",aE="⩾̸",iE="⋙̸",rE="≵",sE="≫⃒",lE="≯",cE="≯",uE="≫̸",dE="↮",pE="⇎",fE="⫲",mE="∋",hE="⋼",gE="⋺",vE="∋",bE="Њ",_E="њ",yE="↚",wE="⇍",SE="‥",kE="≦̸",xE="≰",CE="↚",QE="⇍",AE="↮",IE="⇎",qE="≰",TE="≦̸",LE="⩽̸",EE="⩽̸",BE="≮",DE="⋘̸",PE="≴",jE="≪⃒",ME="≮",$E="⋪",RE="⋬",OE="≪̸",FE="∤",zE="⁠",NE=" ",VE="𝕟",HE="ℕ",UE="⫬",WE="¬",JE="≢",GE="≭",KE="∦",YE="∉",ZE="≠",XE="≂̸",eB="∄",tB="≯",nB="≱",oB="≧̸",aB="≫̸",iB="≹",rB="⩾̸",sB="≵",lB="≎̸",cB="≏̸",uB="∉",dB="⋵̸",pB="⋹̸",fB="∉",mB="⋷",hB="⋶",gB="⧏̸",vB="⋪",bB="⋬",_B="≮",yB="≰",wB="≸",SB="≪̸",kB="⩽̸",xB="≴",CB="⪢̸",QB="⪡̸",AB="∌",IB="∌",qB="⋾",TB="⋽",LB="⊀",EB="⪯̸",BB="⋠",DB="∌",PB="⧐̸",jB="⋫",MB="⋭",$B="⊏̸",RB="⋢",OB="⊐̸",FB="⋣",zB="⊂⃒",NB="⊈",VB="⊁",HB="⪰̸",UB="⋡",WB="≿̸",JB="⊃⃒",GB="⊉",KB="≁",YB="≄",ZB="≇",XB="≉",e9="∤",t9="∦",n9="∦",o9="⫽⃥",a9="∂̸",i9="⨔",r9="⊀",s9="⋠",l9="⊀",c9="⪯̸",u9="⪯̸",d9="⤳̸",p9="↛",f9="⇏",m9="↝̸",h9="↛",g9="⇏",v9="⋫",b9="⋭",_9="⊁",y9="⋡",w9="⪰̸",S9="𝒩",k9="𝓃",x9="∤",C9="∦",Q9="≁",A9="≄",I9="≄",q9="∤",T9="∦",L9="⋢",E9="⋣",B9="⊄",D9="⫅̸",P9="⊈",j9="⊂⃒",M9="⊈",$9="⫅̸",R9="⊁",O9="⪰̸",F9="⊅",z9="⫆̸",N9="⊉",V9="⊃⃒",H9="⊉",U9="⫆̸",W9="≹",J9="Ñ",G9="ñ",K9="≸",Y9="⋪",Z9="⋬",X9="⋫",eD="⋭",tD="Ν",nD="ν",oD="#",aD="№",iD=" ",rD="≍⃒",sD="⊬",lD="⊭",cD="⊮",uD="⊯",dD="≥⃒",pD=">⃒",fD="⤄",mD="⧞",hD="⤂",gD="≤⃒",vD="<⃒",bD="⊴⃒",_D="⤃",yD="⊵⃒",wD="∼⃒",SD="⤣",kD="↖",xD="⇖",CD="↖",QD="⤧",AD="Ó",ID="ó",qD="⊛",TD="Ô",LD="ô",ED="⊚",BD="О",DD="о",PD="⊝",jD="Ő",MD="ő",$D="⨸",RD="⊙",OD="⦼",FD="Œ",zD="œ",ND="⦿",VD="𝔒",HD="𝔬",UD="˛",WD="Ò",JD="ò",GD="⧁",KD="⦵",YD="Ω",ZD="∮",XD="↺",eP="⦾",tP="⦻",nP="‾",oP="⧀",aP="Ō",iP="ō",rP="Ω",sP="ω",lP="Ο",cP="ο",uP="⦶",dP="⊖",pP="𝕆",fP="𝕠",mP="⦷",hP="“",gP="‘",vP="⦹",bP="⊕",_P="↻",yP="⩔",wP="∨",SP="⩝",kP="ℴ",xP="ℴ",CP="ª",QP="º",AP="⊶",IP="⩖",qP="⩗",TP="⩛",LP="Ⓢ",EP="𝒪",BP="ℴ",DP="Ø",PP="ø",jP="⊘",MP="Õ",$P="õ",RP="⨶",OP="⨷",FP="⊗",zP="Ö",NP="ö",VP="⌽",HP="‾",UP="⏞",WP="⎴",JP="⏜",GP="¶",KP="∥",YP="∥",ZP="⫳",XP="⫽",e7="∂",t7="∂",n7="П",o7="п",a7="%",i7=".",r7="‰",s7="⊥",l7="‱",c7="𝔓",u7="𝔭",d7="Φ",p7="φ",f7="ϕ",m7="ℳ",h7="☎",g7="Π",v7="π",b7="⋔",_7="ϖ",y7="ℏ",w7="ℎ",S7="ℏ",k7="⨣",x7="⊞",C7="⨢",Q7="+",A7="∔",I7="⨥",q7="⩲",T7="±",L7="±",E7="⨦",B7="⨧",D7="±",P7="ℌ",j7="⨕",M7="𝕡",$7="ℙ",R7="£",O7="⪷",F7="⪻",z7="≺",N7="≼",V7="⪷",H7="≺",U7="≼",W7="≺",J7="⪯",G7="≼",K7="≾",Y7="⪯",Z7="⪹",X7="⪵",ej="⋨",tj="⪯",nj="⪳",oj="≾",aj="′",ij="″",rj="ℙ",sj="⪹",lj="⪵",cj="⋨",uj="∏",dj="∏",pj="⌮",fj="⌒",mj="⌓",hj="∝",gj="∝",vj="∷",bj="∝",_j="≾",yj="⊰",wj="𝒫",Sj="𝓅",kj="Ψ",xj="ψ",Cj=" ",Qj="𝔔",Aj="𝔮",Ij="⨌",qj="𝕢",Tj="ℚ",Lj="⁗",Ej="𝒬",Bj="𝓆",Dj="ℍ",Pj="⨖",jj="?",Mj="≟",$j='"',Rj='"',Oj="⇛",Fj="∽̱",zj="Ŕ",Nj="ŕ",Vj="√",Hj="⦳",Uj="⟩",Wj="⟫",Jj="⦒",Gj="⦥",Kj="⟩",Yj="»",Zj="⥵",Xj="⇥",eM="⤠",tM="⤳",nM="→",oM="↠",aM="⇒",iM="⤞",rM="↪",sM="↬",lM="⥅",cM="⥴",uM="⤖",dM="↣",pM="↝",fM="⤚",mM="⤜",hM="∶",gM="ℚ",vM="⤍",bM="⤏",_M="⤐",yM="❳",wM="}",SM="]",kM="⦌",xM="⦎",CM="⦐",QM="Ř",AM="ř",IM="Ŗ",qM="ŗ",TM="⌉",LM="}",EM="Р",BM="р",DM="⤷",PM="⥩",jM="”",MM="”",$M="↳",RM="ℜ",OM="ℛ",FM="ℜ",zM="ℝ",NM="ℜ",VM="▭",HM="®",UM="®",WM="∋",JM="⇋",GM="⥯",KM="⥽",YM="⌋",ZM="𝔯",XM="ℜ",e$="⥤",t$="⇁",n$="⇀",o$="⥬",a$="Ρ",i$="ρ",r$="ϱ",s$="⟩",l$="⇥",c$="→",u$="→",d$="⇒",p$="⇄",f$="↣",m$="⌉",h$="⟧",g$="⥝",v$="⥕",b$="⇂",_$="⌋",y$="⇁",w$="⇀",S$="⇄",k$="⇌",x$="⇉",C$="↝",Q$="↦",A$="⊢",I$="⥛",q$="⋌",T$="⧐",L$="⊳",E$="⊵",B$="⥏",D$="⥜",P$="⥔",j$="↾",M$="⥓",$$="⇀",R$="˚",O$="≓",F$="⇄",z$="⇌",N$="‏",V$="⎱",H$="⎱",U$="⫮",W$="⟭",J$="⇾",G$="⟧",K$="⦆",Y$="𝕣",Z$="ℝ",X$="⨮",eR="⨵",tR="⥰",nR=")",oR="⦔",aR="⨒",iR="⇉",rR="⇛",sR="›",lR="𝓇",cR="ℛ",uR="↱",dR="↱",pR="]",fR="’",mR="’",hR="⋌",gR="⋊",vR="▹",bR="⊵",_R="▸",yR="⧎",wR="⧴",SR="⥨",kR="℞",xR="Ś",CR="ś",QR="‚",AR="⪸",IR="Š",qR="š",TR="⪼",LR="≻",ER="≽",BR="⪰",DR="⪴",PR="Ş",jR="ş",MR="Ŝ",$R="ŝ",RR="⪺",OR="⪶",FR="⋩",zR="⨓",NR="≿",VR="С",HR="с",UR="⊡",WR="⋅",JR="⩦",GR="⤥",KR="↘",YR="⇘",ZR="↘",XR="§",eO=";",tO="⤩",nO="∖",oO="∖",aO="✶",iO="𝔖",rO="𝔰",sO="⌢",lO="♯",cO="Щ",uO="щ",dO="Ш",pO="ш",fO="↓",mO="←",hO="∣",gO="∥",vO="→",bO="↑",_O="­",yO="Σ",wO="σ",SO="ς",kO="ς",xO="∼",CO="⩪",QO="≃",AO="≃",IO="⪞",qO="⪠",TO="⪝",LO="⪟",EO="≆",BO="⨤",DO="⥲",PO="←",jO="∘",MO="∖",$O="⨳",RO="⧤",OO="∣",FO="⌣",zO="⪪",NO="⪬",VO="⪬︀",HO="Ь",UO="ь",WO="⌿",JO="⧄",GO="/",KO="𝕊",YO="𝕤",ZO="♠",XO="♠",eF="∥",tF="⊓",nF="⊓︀",oF="⊔",aF="⊔︀",iF="√",rF="⊏",sF="⊑",lF="⊏",cF="⊑",uF="⊐",dF="⊒",pF="⊐",fF="⊒",mF="□",hF="□",gF="⊓",vF="⊏",bF="⊑",_F="⊐",yF="⊒",wF="⊔",SF="▪",kF="□",xF="▪",CF="→",QF="𝒮",AF="𝓈",IF="∖",qF="⌣",TF="⋆",LF="⋆",EF="☆",BF="★",DF="ϵ",PF="ϕ",jF="¯",MF="⊂",$F="⋐",RF="⪽",OF="⫅",FF="⊆",zF="⫃",NF="⫁",VF="⫋",HF="⊊",UF="⪿",WF="⥹",JF="⊂",GF="⋐",KF="⊆",YF="⫅",ZF="⊆",XF="⊊",ez="⫋",tz="⫇",nz="⫕",oz="⫓",az="⪸",iz="≻",rz="≽",sz="≻",lz="⪰",cz="≽",uz="≿",dz="⪰",pz="⪺",fz="⪶",mz="⋩",hz="≿",gz="∋",vz="∑",bz="∑",_z="♪",yz="¹",wz="²",Sz="³",kz="⊃",xz="⋑",Cz="⪾",Qz="⫘",Az="⫆",Iz="⊇",qz="⫄",Tz="⊃",Lz="⊇",Ez="⟉",Bz="⫗",Dz="⥻",Pz="⫂",jz="⫌",Mz="⊋",$z="⫀",Rz="⊃",Oz="⋑",Fz="⊇",zz="⫆",Nz="⊋",Vz="⫌",Hz="⫈",Uz="⫔",Wz="⫖",Jz="⤦",Gz="↙",Kz="⇙",Yz="↙",Zz="⤪",Xz="ß",eN="	",tN="⌖",nN="Τ",oN="τ",aN="⎴",iN="Ť",rN="ť",sN="Ţ",lN="ţ",cN="Т",uN="т",dN="⃛",pN="⌕",fN="𝔗",mN="𝔱",hN="∴",gN="∴",vN="∴",bN="Θ",_N="θ",yN="ϑ",wN="ϑ",SN="≈",kN="∼",xN="  ",CN=" ",QN=" ",AN="≈",IN="∼",qN="Þ",TN="þ",LN="˜",EN="∼",BN="≃",DN="≅",PN="≈",jN="⨱",MN="⊠",$N="×",RN="⨰",ON="∭",FN="⤨",zN="⌶",NN="⫱",VN="⊤",HN="𝕋",UN="𝕥",WN="⫚",JN="⤩",GN="‴",KN="™",YN="™",ZN="▵",XN="▿",eV="◃",tV="⊴",nV="≜",oV="▹",aV="⊵",iV="◬",rV="≜",sV="⨺",lV="⃛",cV="⨹",uV="⧍",dV="⨻",pV="⏢",fV="𝒯",mV="𝓉",hV="Ц",gV="ц",vV="Ћ",bV="ћ",_V="Ŧ",yV="ŧ",wV="≬",SV="↞",kV="↠",xV="Ú",CV="ú",QV="↑",AV="↟",IV="⇑",qV="⥉",TV="Ў",LV="ў",EV="Ŭ",BV="ŭ",DV="Û",PV="û",jV="У",MV="у",$V="⇅",RV="Ű",OV="ű",FV="⥮",zV="⥾",NV="𝔘",VV="𝔲",HV="Ù",UV="ù",WV="⥣",JV="↿",GV="↾",KV="▀",YV="⌜",ZV="⌜",XV="⌏",eH="◸",tH="Ū",nH="ū",oH="¨",aH="_",iH="⏟",rH="⎵",sH="⏝",lH="⋃",cH="⊎",uH="Ų",dH="ų",pH="𝕌",fH="𝕦",mH="⤒",hH="↑",gH="↑",vH="⇑",bH="⇅",_H="↕",yH="↕",wH="⇕",SH="⥮",kH="↿",xH="↾",CH="⊎",QH="↖",AH="↗",IH="υ",qH="ϒ",TH="ϒ",LH="Υ",EH="υ",BH="↥",DH="⊥",PH="⇈",jH="⌝",MH="⌝",$H="⌎",RH="Ů",OH="ů",FH="◹",zH="𝒰",NH="𝓊",VH="⋰",HH="Ũ",UH="ũ",WH="▵",JH="▴",GH="⇈",KH="Ü",YH="ü",ZH="⦧",XH="⦜",eU="ϵ",tU="ϰ",nU="∅",oU="ϕ",aU="ϖ",iU="∝",rU="↕",sU="⇕",lU="ϱ",cU="ς",uU="⊊︀",dU="⫋︀",pU="⊋︀",fU="⫌︀",mU="ϑ",hU="⊲",gU="⊳",vU="⫨",bU="⫫",_U="⫩",yU="В",wU="в",SU="⊢",kU="⊨",xU="⊩",CU="⊫",QU="⫦",AU="⊻",IU="∨",qU="⋁",TU="≚",LU="⋮",EU="|",BU="‖",DU="|",PU="‖",jU="∣",MU="|",$U="❘",RU="≀",OU=" ",FU="𝔙",zU="𝔳",NU="⊲",VU="⊂⃒",HU="⊃⃒",UU="𝕍",WU="𝕧",JU="∝",GU="⊳",KU="𝒱",YU="𝓋",ZU="⫋︀",XU="⊊︀",eW="⫌︀",tW="⊋︀",nW="⊪",oW="⦚",aW="Ŵ",iW="ŵ",rW="⩟",sW="∧",lW="⋀",cW="≙",uW="℘",dW="𝔚",pW="𝔴",fW="𝕎",mW="𝕨",hW="℘",gW="≀",vW="≀",bW="𝒲",_W="𝓌",yW="⋂",wW="◯",SW="⋃",kW="▽",xW="𝔛",CW="𝔵",QW="⟷",AW="⟺",IW="Ξ",qW="ξ",TW="⟵",LW="⟸",EW="⟼",BW="⋻",DW="⨀",PW="𝕏",jW="𝕩",MW="⨁",$W="⨂",RW="⟶",OW="⟹",FW="𝒳",zW="𝓍",NW="⨆",VW="⨄",HW="△",UW="⋁",WW="⋀",JW="Ý",GW="ý",KW="Я",YW="я",ZW="Ŷ",XW="ŷ",eJ="Ы",tJ="ы",nJ="¥",oJ="𝔜",aJ="𝔶",iJ="Ї",rJ="ї",sJ="𝕐",lJ="𝕪",cJ="𝒴",uJ="𝓎",dJ="Ю",pJ="ю",fJ="ÿ",mJ="Ÿ",hJ="Ź",gJ="ź",vJ="Ž",bJ="ž",_J="З",yJ="з",wJ="Ż",SJ="ż",kJ="ℨ",xJ="​",CJ="Ζ",QJ="ζ",AJ="𝔷",IJ="ℨ",qJ="Ж",TJ="ж",LJ="⇝",EJ="𝕫",BJ="ℤ",DJ="𝒵",PJ="𝓏",jJ="‍",MJ="‌",$J={Aacute:w_,aacute:S_,Abreve:k_,abreve:x_,ac:C_,acd:Q_,acE:A_,Acirc:I_,acirc:q_,acute:T_,Acy:L_,acy:E_,AElig:B_,aelig:D_,af:P_,Afr:j_,afr:M_,Agrave:$_,agrave:R_,alefsym:O_,aleph:F_,Alpha:z_,alpha:N_,Amacr:V_,amacr:H_,amalg:U_,amp:W_,AMP:J_,andand:G_,And:K_,and:Y_,andd:Z_,andslope:X_,andv:ey,ang:ty,ange:ny,angle:oy,angmsdaa:ay,angmsdab:iy,angmsdac:ry,angmsdad:sy,angmsdae:ly,angmsdaf:cy,angmsdag:uy,angmsdah:dy,angmsd:py,angrt:fy,angrtvb:my,angrtvbd:hy,angsph:gy,angst:vy,angzarr:by,Aogon:_y,aogon:yy,Aopf:wy,aopf:Sy,apacir:ky,ap:xy,apE:Cy,ape:Qy,apid:Ay,apos:Iy,ApplyFunction:qy,approx:Ty,approxeq:Ly,Aring:Ey,aring:By,Ascr:Dy,ascr:Py,Assign:jy,ast:My,asymp:$y,asympeq:Ry,Atilde:Oy,atilde:Fy,Auml:zy,auml:Ny,awconint:Vy,awint:Hy,backcong:Uy,backepsilon:Wy,backprime:Jy,backsim:Gy,backsimeq:Ky,Backslash:Yy,Barv:Zy,barvee:Xy,barwed:e1,Barwed:t1,barwedge:n1,bbrk:o1,bbrktbrk:a1,bcong:i1,Bcy:r1,bcy:s1,bdquo:l1,becaus:c1,because:u1,Because:d1,bemptyv:p1,bepsi:f1,bernou:m1,Bernoullis:h1,Beta:g1,beta:v1,beth:b1,between:_1,Bfr:y1,bfr:w1,bigcap:S1,bigcirc:k1,bigcup:x1,bigodot:C1,bigoplus:Q1,bigotimes:A1,bigsqcup:I1,bigstar:q1,bigtriangledown:T1,bigtriangleup:L1,biguplus:E1,bigvee:B1,bigwedge:D1,bkarow:P1,blacklozenge:j1,blacksquare:M1,blacktriangle:$1,blacktriangledown:R1,blacktriangleleft:O1,blacktriangleright:F1,blank:z1,blk12:N1,blk14:V1,blk34:H1,block:U1,bne:W1,bnequiv:J1,bNot:G1,bnot:K1,Bopf:Y1,bopf:Z1,bot:X1,bottom:e0,bowtie:t0,boxbox:n0,boxdl:o0,boxdL:a0,boxDl:i0,boxDL:r0,boxdr:s0,boxdR:l0,boxDr:c0,boxDR:u0,boxh:d0,boxH:p0,boxhd:f0,boxHd:m0,boxhD:h0,boxHD:g0,boxhu:v0,boxHu:b0,boxhU:_0,boxHU:y0,boxminus:w0,boxplus:S0,boxtimes:k0,boxul:x0,boxuL:C0,boxUl:Q0,boxUL:A0,boxur:I0,boxuR:q0,boxUr:T0,boxUR:L0,boxv:E0,boxV:B0,boxvh:D0,boxvH:P0,boxVh:j0,boxVH:M0,boxvl:$0,boxvL:R0,boxVl:O0,boxVL:F0,boxvr:z0,boxvR:N0,boxVr:V0,boxVR:H0,bprime:U0,breve:W0,Breve:J0,brvbar:G0,bscr:K0,Bscr:Y0,bsemi:Z0,bsim:X0,bsime:ew,bsolb:tw,bsol:nw,bsolhsub:ow,bull:aw,bullet:iw,bump:rw,bumpE:sw,bumpe:lw,Bumpeq:cw,bumpeq:uw,Cacute:dw,cacute:pw,capand:fw,capbrcup:mw,capcap:hw,cap:gw,Cap:vw,capcup:bw,capdot:_w,CapitalDifferentialD:yw,caps:ww,caret:Sw,caron:kw,Cayleys:xw,ccaps:Cw,Ccaron:Qw,ccaron:Aw,Ccedil:Iw,ccedil:qw,Ccirc:Tw,ccirc:Lw,Cconint:Ew,ccups:Bw,ccupssm:Dw,Cdot:Pw,cdot:jw,cedil:Mw,Cedilla:$w,cemptyv:Rw,cent:Ow,centerdot:Fw,CenterDot:zw,cfr:Nw,Cfr:Vw,CHcy:Hw,chcy:Uw,check:Ww,checkmark:Jw,Chi:Gw,chi:Kw,circ:Yw,circeq:Zw,circlearrowleft:Xw,circlearrowright:eS,circledast:tS,circledcirc:nS,circleddash:oS,CircleDot:aS,circledR:iS,circledS:rS,CircleMinus:sS,CirclePlus:lS,CircleTimes:cS,cir:uS,cirE:dS,cire:pS,cirfnint:fS,cirmid:mS,cirscir:hS,ClockwiseContourIntegral:gS,CloseCurlyDoubleQuote:vS,CloseCurlyQuote:bS,clubs:_S,clubsuit:yS,colon:wS,Colon:SS,Colone:kS,colone:xS,coloneq:CS,comma:QS,commat:AS,comp:IS,compfn:qS,complement:TS,complexes:LS,cong:ES,congdot:BS,Congruent:DS,conint:PS,Conint:jS,ContourIntegral:MS,copf:$S,Copf:RS,coprod:OS,Coproduct:FS,copy:zS,COPY:NS,copysr:VS,CounterClockwiseContourIntegral:HS,crarr:US,cross:WS,Cross:JS,Cscr:GS,cscr:KS,csub:YS,csube:ZS,csup:XS,csupe:ek,ctdot:tk,cudarrl:nk,cudarrr:ok,cuepr:ak,cuesc:ik,cularr:rk,cularrp:sk,cupbrcap:lk,cupcap:ck,CupCap:uk,cup:dk,Cup:pk,cupcup:fk,cupdot:mk,cupor:hk,cups:gk,curarr:vk,curarrm:bk,curlyeqprec:_k,curlyeqsucc:yk,curlyvee:wk,curlywedge:Sk,curren:kk,curvearrowleft:xk,curvearrowright:Ck,cuvee:Qk,cuwed:Ak,cwconint:Ik,cwint:qk,cylcty:Tk,dagger:Lk,Dagger:Ek,daleth:Bk,darr:Dk,Darr:Pk,dArr:jk,dash:Mk,Dashv:$k,dashv:Rk,dbkarow:Ok,dblac:Fk,Dcaron:zk,dcaron:Nk,Dcy:Vk,dcy:Hk,ddagger:Uk,ddarr:Wk,DD:Jk,dd:Gk,DDotrahd:Kk,ddotseq:Yk,deg:Zk,Del:Xk,Delta:ex,delta:tx,demptyv:nx,dfisht:ox,Dfr:ax,dfr:ix,dHar:rx,dharl:sx,dharr:lx,DiacriticalAcute:cx,DiacriticalDot:ux,DiacriticalDoubleAcute:dx,DiacriticalGrave:px,DiacriticalTilde:fx,diam:mx,diamond:hx,Diamond:gx,diamondsuit:vx,diams:bx,die:_x,DifferentialD:yx,digamma:wx,disin:Sx,div:kx,divide:xx,divideontimes:Cx,divonx:Qx,DJcy:Ax,djcy:Ix,dlcorn:qx,dlcrop:Tx,dollar:Lx,Dopf:Ex,dopf:Bx,Dot:Dx,dot:Px,DotDot:jx,doteq:Mx,doteqdot:$x,DotEqual:Rx,dotminus:Ox,dotplus:Fx,dotsquare:zx,doublebarwedge:Nx,DoubleContourIntegral:Vx,DoubleDot:Hx,DoubleDownArrow:Ux,DoubleLeftArrow:Wx,DoubleLeftRightArrow:Jx,DoubleLeftTee:Gx,DoubleLongLeftArrow:Kx,DoubleLongLeftRightArrow:Yx,DoubleLongRightArrow:Zx,DoubleRightArrow:Xx,DoubleRightTee:e2,DoubleUpArrow:t2,DoubleUpDownArrow:n2,DoubleVerticalBar:o2,DownArrowBar:a2,downarrow:i2,DownArrow:r2,Downarrow:s2,DownArrowUpArrow:l2,DownBreve:c2,downdownarrows:u2,downharpoonleft:d2,downharpoonright:p2,DownLeftRightVector:f2,DownLeftTeeVector:m2,DownLeftVectorBar:h2,DownLeftVector:g2,DownRightTeeVector:v2,DownRightVectorBar:b2,DownRightVector:_2,DownTeeArrow:y2,DownTee:w2,drbkarow:S2,drcorn:k2,drcrop:x2,Dscr:C2,dscr:Q2,DScy:A2,dscy:I2,dsol:q2,Dstrok:T2,dstrok:L2,dtdot:E2,dtri:B2,dtrif:D2,duarr:P2,duhar:j2,dwangle:M2,DZcy:$2,dzcy:R2,dzigrarr:O2,Eacute:F2,eacute:z2,easter:N2,Ecaron:V2,ecaron:H2,Ecirc:U2,ecirc:W2,ecir:J2,ecolon:G2,Ecy:K2,ecy:Y2,eDDot:Z2,Edot:X2,edot:eC,eDot:tC,ee:nC,efDot:oC,Efr:aC,efr:iC,eg:rC,Egrave:sC,egrave:lC,egs:cC,egsdot:uC,el:dC,Element:pC,elinters:fC,ell:mC,els:hC,elsdot:gC,Emacr:vC,emacr:bC,empty:_C,emptyset:yC,EmptySmallSquare:wC,emptyv:SC,EmptyVerySmallSquare:kC,emsp13:xC,emsp14:CC,emsp:QC,ENG:AC,eng:IC,ensp:qC,Eogon:TC,eogon:LC,Eopf:EC,eopf:BC,epar:DC,eparsl:PC,eplus:jC,epsi:MC,Epsilon:$C,epsilon:RC,epsiv:OC,eqcirc:FC,eqcolon:zC,eqsim:NC,eqslantgtr:VC,eqslantless:HC,Equal:UC,equals:WC,EqualTilde:JC,equest:GC,Equilibrium:KC,equiv:YC,equivDD:ZC,eqvparsl:XC,erarr:e3,erDot:t3,escr:n3,Escr:o3,esdot:a3,Esim:i3,esim:r3,Eta:s3,eta:l3,ETH:c3,eth:u3,Euml:d3,euml:p3,euro:f3,excl:m3,exist:h3,Exists:g3,expectation:v3,exponentiale:b3,ExponentialE:_3,fallingdotseq:y3,Fcy:w3,fcy:S3,female:k3,ffilig:x3,fflig:C3,ffllig:Q3,Ffr:A3,ffr:I3,filig:q3,FilledSmallSquare:T3,FilledVerySmallSquare:L3,fjlig:E3,flat:B3,fllig:D3,fltns:P3,fnof:j3,Fopf:M3,fopf:$3,forall:R3,ForAll:O3,fork:F3,forkv:z3,Fouriertrf:N3,fpartint:V3,frac12:H3,frac13:U3,frac14:W3,frac15:J3,frac16:G3,frac18:K3,frac23:Y3,frac25:Z3,frac34:X3,frac35:eQ,frac38:tQ,frac45:nQ,frac56:oQ,frac58:aQ,frac78:iQ,frasl:rQ,frown:sQ,fscr:lQ,Fscr:cQ,gacute:uQ,Gamma:dQ,gamma:pQ,Gammad:fQ,gammad:mQ,gap:hQ,Gbreve:gQ,gbreve:vQ,Gcedil:bQ,Gcirc:_Q,gcirc:yQ,Gcy:wQ,gcy:SQ,Gdot:kQ,gdot:xQ,ge:CQ,gE:QQ,gEl:AQ,gel:IQ,geq:qQ,geqq:TQ,geqslant:LQ,gescc:EQ,ges:BQ,gesdot:DQ,gesdoto:PQ,gesdotol:jQ,gesl:MQ,gesles:$Q,Gfr:RQ,gfr:OQ,gg:FQ,Gg:zQ,ggg:NQ,gimel:VQ,GJcy:HQ,gjcy:UQ,gla:WQ,gl:JQ,glE:GQ,glj:KQ,gnap:YQ,gnapprox:ZQ,gne:XQ,gnE:e4,gneq:t4,gneqq:n4,gnsim:o4,Gopf:a4,gopf:i4,grave:r4,GreaterEqual:s4,GreaterEqualLess:l4,GreaterFullEqual:c4,GreaterGreater:u4,GreaterLess:d4,GreaterSlantEqual:p4,GreaterTilde:f4,Gscr:m4,gscr:h4,gsim:g4,gsime:v4,gsiml:b4,gtcc:_4,gtcir:y4,gt:w4,GT:S4,Gt:k4,gtdot:x4,gtlPar:C4,gtquest:Q4,gtrapprox:A4,gtrarr:I4,gtrdot:q4,gtreqless:T4,gtreqqless:L4,gtrless:E4,gtrsim:B4,gvertneqq:D4,gvnE:P4,Hacek:j4,hairsp:M4,half:$4,hamilt:R4,HARDcy:O4,hardcy:F4,harrcir:z4,harr:N4,hArr:V4,harrw:H4,Hat:U4,hbar:W4,Hcirc:J4,hcirc:G4,hearts:K4,heartsuit:Y4,hellip:Z4,hercon:X4,hfr:e5,Hfr:t5,HilbertSpace:n5,hksearow:o5,hkswarow:a5,hoarr:i5,homtht:r5,hookleftarrow:s5,hookrightarrow:l5,hopf:c5,Hopf:u5,horbar:d5,HorizontalLine:p5,hscr:f5,Hscr:m5,hslash:h5,Hstrok:g5,hstrok:v5,HumpDownHump:b5,HumpEqual:_5,hybull:y5,hyphen:w5,Iacute:S5,iacute:k5,ic:x5,Icirc:C5,icirc:Q5,Icy:A5,icy:I5,Idot:q5,IEcy:T5,iecy:L5,iexcl:E5,iff:B5,ifr:D5,Ifr:P5,Igrave:j5,igrave:M5,ii:$5,iiiint:R5,iiint:O5,iinfin:F5,iiota:z5,IJlig:N5,ijlig:V5,Imacr:H5,imacr:U5,image:W5,ImaginaryI:J5,imagline:G5,imagpart:K5,imath:Y5,Im:Z5,imof:X5,imped:eA,Implies:tA,incare:nA,in:"∈",infin:oA,infintie:aA,inodot:iA,intcal:rA,int:sA,Int:lA,integers:cA,Integral:uA,intercal:dA,Intersection:pA,intlarhk:fA,intprod:mA,InvisibleComma:hA,InvisibleTimes:gA,IOcy:vA,iocy:bA,Iogon:_A,iogon:yA,Iopf:wA,iopf:SA,Iota:kA,iota:xA,iprod:CA,iquest:QA,iscr:AA,Iscr:IA,isin:qA,isindot:TA,isinE:LA,isins:EA,isinsv:BA,isinv:DA,it:PA,Itilde:jA,itilde:MA,Iukcy:$A,iukcy:RA,Iuml:OA,iuml:FA,Jcirc:zA,jcirc:NA,Jcy:VA,jcy:HA,Jfr:UA,jfr:WA,jmath:JA,Jopf:GA,jopf:KA,Jscr:YA,jscr:ZA,Jsercy:XA,jsercy:e6,Jukcy:t6,jukcy:n6,Kappa:o6,kappa:a6,kappav:i6,Kcedil:r6,kcedil:s6,Kcy:l6,kcy:c6,Kfr:u6,kfr:d6,kgreen:p6,KHcy:f6,khcy:m6,KJcy:h6,kjcy:g6,Kopf:v6,kopf:b6,Kscr:_6,kscr:y6,lAarr:w6,Lacute:S6,lacute:k6,laemptyv:x6,lagran:C6,Lambda:Q6,lambda:A6,lang:I6,Lang:q6,langd:T6,langle:L6,lap:E6,Laplacetrf:B6,laquo:D6,larrb:P6,larrbfs:j6,larr:M6,Larr:$6,lArr:R6,larrfs:O6,larrhk:F6,larrlp:z6,larrpl:N6,larrsim:V6,larrtl:H6,latail:U6,lAtail:W6,lat:J6,late:G6,lates:K6,lbarr:Y6,lBarr:Z6,lbbrk:X6,lbrace:eI,lbrack:tI,lbrke:nI,lbrksld:oI,lbrkslu:aI,Lcaron:iI,lcaron:rI,Lcedil:sI,lcedil:lI,lceil:cI,lcub:uI,Lcy:dI,lcy:pI,ldca:fI,ldquo:mI,ldquor:hI,ldrdhar:gI,ldrushar:vI,ldsh:bI,le:_I,lE:yI,LeftAngleBracket:wI,LeftArrowBar:SI,leftarrow:kI,LeftArrow:xI,Leftarrow:CI,LeftArrowRightArrow:QI,leftarrowtail:AI,LeftCeiling:II,LeftDoubleBracket:qI,LeftDownTeeVector:TI,LeftDownVectorBar:LI,LeftDownVector:EI,LeftFloor:BI,leftharpoondown:DI,leftharpoonup:PI,leftleftarrows:jI,leftrightarrow:MI,LeftRightArrow:$I,Leftrightarrow:RI,leftrightarrows:OI,leftrightharpoons:FI,leftrightsquigarrow:zI,LeftRightVector:NI,LeftTeeArrow:VI,LeftTee:HI,LeftTeeVector:UI,leftthreetimes:WI,LeftTriangleBar:JI,LeftTriangle:GI,LeftTriangleEqual:KI,LeftUpDownVector:YI,LeftUpTeeVector:ZI,LeftUpVectorBar:XI,LeftUpVector:eq,LeftVectorBar:tq,LeftVector:nq,lEg:oq,leg:aq,leq:iq,leqq:rq,leqslant:sq,lescc:lq,les:cq,lesdot:uq,lesdoto:dq,lesdotor:pq,lesg:fq,lesges:mq,lessapprox:hq,lessdot:gq,lesseqgtr:vq,lesseqqgtr:bq,LessEqualGreater:_q,LessFullEqual:yq,LessGreater:wq,lessgtr:Sq,LessLess:kq,lesssim:xq,LessSlantEqual:Cq,LessTilde:Qq,lfisht:Aq,lfloor:Iq,Lfr:qq,lfr:Tq,lg:Lq,lgE:Eq,lHar:Bq,lhard:Dq,lharu:Pq,lharul:jq,lhblk:Mq,LJcy:$q,ljcy:Rq,llarr:Oq,ll:Fq,Ll:zq,llcorner:Nq,Lleftarrow:Vq,llhard:Hq,lltri:Uq,Lmidot:Wq,lmidot:Jq,lmoustache:Gq,lmoust:Kq,lnap:Yq,lnapprox:Zq,lne:Xq,lnE:eT,lneq:tT,lneqq:nT,lnsim:oT,loang:aT,loarr:iT,lobrk:rT,longleftarrow:sT,LongLeftArrow:lT,Longleftarrow:cT,longleftrightarrow:uT,LongLeftRightArrow:dT,Longleftrightarrow:pT,longmapsto:fT,longrightarrow:mT,LongRightArrow:hT,Longrightarrow:gT,looparrowleft:vT,looparrowright:bT,lopar:_T,Lopf:yT,lopf:wT,loplus:ST,lotimes:kT,lowast:xT,lowbar:CT,LowerLeftArrow:QT,LowerRightArrow:AT,loz:IT,lozenge:qT,lozf:TT,lpar:LT,lparlt:ET,lrarr:BT,lrcorner:DT,lrhar:PT,lrhard:jT,lrm:MT,lrtri:$T,lsaquo:RT,lscr:OT,Lscr:FT,lsh:zT,Lsh:NT,lsim:VT,lsime:HT,lsimg:UT,lsqb:WT,lsquo:JT,lsquor:GT,Lstrok:KT,lstrok:YT,ltcc:ZT,ltcir:XT,lt:e8,LT:t8,Lt:n8,ltdot:o8,lthree:a8,ltimes:i8,ltlarr:r8,ltquest:s8,ltri:l8,ltrie:c8,ltrif:u8,ltrPar:d8,lurdshar:p8,luruhar:f8,lvertneqq:m8,lvnE:h8,macr:g8,male:v8,malt:b8,maltese:_8,Map:"⤅",map:y8,mapsto:w8,mapstodown:S8,mapstoleft:k8,mapstoup:x8,marker:C8,mcomma:Q8,Mcy:A8,mcy:I8,mdash:q8,mDDot:T8,measuredangle:L8,MediumSpace:E8,Mellintrf:B8,Mfr:D8,mfr:P8,mho:j8,micro:M8,midast:$8,midcir:R8,mid:O8,middot:F8,minusb:z8,minus:N8,minusd:V8,minusdu:H8,MinusPlus:U8,mlcp:W8,mldr:J8,mnplus:G8,models:K8,Mopf:Y8,mopf:Z8,mp:X8,mscr:eL,Mscr:tL,mstpos:nL,Mu:oL,mu:aL,multimap:iL,mumap:rL,nabla:sL,Nacute:lL,nacute:cL,nang:uL,nap:dL,napE:pL,napid:fL,napos:mL,napprox:hL,natural:gL,naturals:vL,natur:bL,nbsp:_L,nbump:yL,nbumpe:wL,ncap:SL,Ncaron:kL,ncaron:xL,Ncedil:CL,ncedil:QL,ncong:AL,ncongdot:IL,ncup:qL,Ncy:TL,ncy:LL,ndash:EL,nearhk:BL,nearr:DL,neArr:PL,nearrow:jL,ne:ML,nedot:$L,NegativeMediumSpace:RL,NegativeThickSpace:OL,NegativeThinSpace:FL,NegativeVeryThinSpace:zL,nequiv:NL,nesear:VL,nesim:HL,NestedGreaterGreater:UL,NestedLessLess:WL,NewLine:JL,nexist:GL,nexists:KL,Nfr:YL,nfr:ZL,ngE:XL,nge:eE,ngeq:tE,ngeqq:nE,ngeqslant:oE,nges:aE,nGg:iE,ngsim:rE,nGt:sE,ngt:lE,ngtr:cE,nGtv:uE,nharr:dE,nhArr:pE,nhpar:fE,ni:mE,nis:hE,nisd:gE,niv:vE,NJcy:bE,njcy:_E,nlarr:yE,nlArr:wE,nldr:SE,nlE:kE,nle:xE,nleftarrow:CE,nLeftarrow:QE,nleftrightarrow:AE,nLeftrightarrow:IE,nleq:qE,nleqq:TE,nleqslant:LE,nles:EE,nless:BE,nLl:DE,nlsim:PE,nLt:jE,nlt:ME,nltri:$E,nltrie:RE,nLtv:OE,nmid:FE,NoBreak:zE,NonBreakingSpace:NE,nopf:VE,Nopf:HE,Not:UE,not:WE,NotCongruent:JE,NotCupCap:GE,NotDoubleVerticalBar:KE,NotElement:YE,NotEqual:ZE,NotEqualTilde:XE,NotExists:eB,NotGreater:tB,NotGreaterEqual:nB,NotGreaterFullEqual:oB,NotGreaterGreater:aB,NotGreaterLess:iB,NotGreaterSlantEqual:rB,NotGreaterTilde:sB,NotHumpDownHump:lB,NotHumpEqual:cB,notin:uB,notindot:dB,notinE:pB,notinva:fB,notinvb:mB,notinvc:hB,NotLeftTriangleBar:gB,NotLeftTriangle:vB,NotLeftTriangleEqual:bB,NotLess:_B,NotLessEqual:yB,NotLessGreater:wB,NotLessLess:SB,NotLessSlantEqual:kB,NotLessTilde:xB,NotNestedGreaterGreater:CB,NotNestedLessLess:QB,notni:AB,notniva:IB,notnivb:qB,notnivc:TB,NotPrecedes:LB,NotPrecedesEqual:EB,NotPrecedesSlantEqual:BB,NotReverseElement:DB,NotRightTriangleBar:PB,NotRightTriangle:jB,NotRightTriangleEqual:MB,NotSquareSubset:$B,NotSquareSubsetEqual:RB,NotSquareSuperset:OB,NotSquareSupersetEqual:FB,NotSubset:zB,NotSubsetEqual:NB,NotSucceeds:VB,NotSucceedsEqual:HB,NotSucceedsSlantEqual:UB,NotSucceedsTilde:WB,NotSuperset:JB,NotSupersetEqual:GB,NotTilde:KB,NotTildeEqual:YB,NotTildeFullEqual:ZB,NotTildeTilde:XB,NotVerticalBar:e9,nparallel:t9,npar:n9,nparsl:o9,npart:a9,npolint:i9,npr:r9,nprcue:s9,nprec:l9,npreceq:c9,npre:u9,nrarrc:d9,nrarr:p9,nrArr:f9,nrarrw:m9,nrightarrow:h9,nRightarrow:g9,nrtri:v9,nrtrie:b9,nsc:_9,nsccue:y9,nsce:w9,Nscr:S9,nscr:k9,nshortmid:x9,nshortparallel:C9,nsim:Q9,nsime:A9,nsimeq:I9,nsmid:q9,nspar:T9,nsqsube:L9,nsqsupe:E9,nsub:B9,nsubE:D9,nsube:P9,nsubset:j9,nsubseteq:M9,nsubseteqq:$9,nsucc:R9,nsucceq:O9,nsup:F9,nsupE:z9,nsupe:N9,nsupset:V9,nsupseteq:H9,nsupseteqq:U9,ntgl:W9,Ntilde:J9,ntilde:G9,ntlg:K9,ntriangleleft:Y9,ntrianglelefteq:Z9,ntriangleright:X9,ntrianglerighteq:eD,Nu:tD,nu:nD,num:oD,numero:aD,numsp:iD,nvap:rD,nvdash:sD,nvDash:lD,nVdash:cD,nVDash:uD,nvge:dD,nvgt:pD,nvHarr:fD,nvinfin:mD,nvlArr:hD,nvle:gD,nvlt:vD,nvltrie:bD,nvrArr:_D,nvrtrie:yD,nvsim:wD,nwarhk:SD,nwarr:kD,nwArr:xD,nwarrow:CD,nwnear:QD,Oacute:AD,oacute:ID,oast:qD,Ocirc:TD,ocirc:LD,ocir:ED,Ocy:BD,ocy:DD,odash:PD,Odblac:jD,odblac:MD,odiv:$D,odot:RD,odsold:OD,OElig:FD,oelig:zD,ofcir:ND,Ofr:VD,ofr:HD,ogon:UD,Ograve:WD,ograve:JD,ogt:GD,ohbar:KD,ohm:YD,oint:ZD,olarr:XD,olcir:eP,olcross:tP,oline:nP,olt:oP,Omacr:aP,omacr:iP,Omega:rP,omega:sP,Omicron:lP,omicron:cP,omid:uP,ominus:dP,Oopf:pP,oopf:fP,opar:mP,OpenCurlyDoubleQuote:hP,OpenCurlyQuote:gP,operp:vP,oplus:bP,orarr:_P,Or:yP,or:wP,ord:SP,order:kP,orderof:xP,ordf:CP,ordm:QP,origof:AP,oror:IP,orslope:qP,orv:TP,oS:LP,Oscr:EP,oscr:BP,Oslash:DP,oslash:PP,osol:jP,Otilde:MP,otilde:$P,otimesas:RP,Otimes:OP,otimes:FP,Ouml:zP,ouml:NP,ovbar:VP,OverBar:HP,OverBrace:UP,OverBracket:WP,OverParenthesis:JP,para:GP,parallel:KP,par:YP,parsim:ZP,parsl:XP,part:e7,PartialD:t7,Pcy:n7,pcy:o7,percnt:a7,period:i7,permil:r7,perp:s7,pertenk:l7,Pfr:c7,pfr:u7,Phi:d7,phi:p7,phiv:f7,phmmat:m7,phone:h7,Pi:g7,pi:v7,pitchfork:b7,piv:_7,planck:y7,planckh:w7,plankv:S7,plusacir:k7,plusb:x7,pluscir:C7,plus:Q7,plusdo:A7,plusdu:I7,pluse:q7,PlusMinus:T7,plusmn:L7,plussim:E7,plustwo:B7,pm:D7,Poincareplane:P7,pointint:j7,popf:M7,Popf:$7,pound:R7,prap:O7,Pr:F7,pr:z7,prcue:N7,precapprox:V7,prec:H7,preccurlyeq:U7,Precedes:W7,PrecedesEqual:J7,PrecedesSlantEqual:G7,PrecedesTilde:K7,preceq:Y7,precnapprox:Z7,precneqq:X7,precnsim:ej,pre:tj,prE:nj,precsim:oj,prime:aj,Prime:ij,primes:rj,prnap:sj,prnE:lj,prnsim:cj,prod:uj,Product:dj,profalar:pj,profline:fj,profsurf:mj,prop:hj,Proportional:gj,Proportion:vj,propto:bj,prsim:_j,prurel:yj,Pscr:wj,pscr:Sj,Psi:kj,psi:xj,puncsp:Cj,Qfr:Qj,qfr:Aj,qint:Ij,qopf:qj,Qopf:Tj,qprime:Lj,Qscr:Ej,qscr:Bj,quaternions:Dj,quatint:Pj,quest:jj,questeq:Mj,quot:$j,QUOT:Rj,rAarr:Oj,race:Fj,Racute:zj,racute:Nj,radic:Vj,raemptyv:Hj,rang:Uj,Rang:Wj,rangd:Jj,range:Gj,rangle:Kj,raquo:Yj,rarrap:Zj,rarrb:Xj,rarrbfs:eM,rarrc:tM,rarr:nM,Rarr:oM,rArr:aM,rarrfs:iM,rarrhk:rM,rarrlp:sM,rarrpl:lM,rarrsim:cM,Rarrtl:uM,rarrtl:dM,rarrw:pM,ratail:fM,rAtail:mM,ratio:hM,rationals:gM,rbarr:vM,rBarr:bM,RBarr:_M,rbbrk:yM,rbrace:wM,rbrack:SM,rbrke:kM,rbrksld:xM,rbrkslu:CM,Rcaron:QM,rcaron:AM,Rcedil:IM,rcedil:qM,rceil:TM,rcub:LM,Rcy:EM,rcy:BM,rdca:DM,rdldhar:PM,rdquo:jM,rdquor:MM,rdsh:$M,real:RM,realine:OM,realpart:FM,reals:zM,Re:NM,rect:VM,reg:HM,REG:UM,ReverseElement:WM,ReverseEquilibrium:JM,ReverseUpEquilibrium:GM,rfisht:KM,rfloor:YM,rfr:ZM,Rfr:XM,rHar:e$,rhard:t$,rharu:n$,rharul:o$,Rho:a$,rho:i$,rhov:r$,RightAngleBracket:s$,RightArrowBar:l$,rightarrow:c$,RightArrow:u$,Rightarrow:d$,RightArrowLeftArrow:p$,rightarrowtail:f$,RightCeiling:m$,RightDoubleBracket:h$,RightDownTeeVector:g$,RightDownVectorBar:v$,RightDownVector:b$,RightFloor:_$,rightharpoondown:y$,rightharpoonup:w$,rightleftarrows:S$,rightleftharpoons:k$,rightrightarrows:x$,rightsquigarrow:C$,RightTeeArrow:Q$,RightTee:A$,RightTeeVector:I$,rightthreetimes:q$,RightTriangleBar:T$,RightTriangle:L$,RightTriangleEqual:E$,RightUpDownVector:B$,RightUpTeeVector:D$,RightUpVectorBar:P$,RightUpVector:j$,RightVectorBar:M$,RightVector:$$,ring:R$,risingdotseq:O$,rlarr:F$,rlhar:z$,rlm:N$,rmoustache:V$,rmoust:H$,rnmid:U$,roang:W$,roarr:J$,robrk:G$,ropar:K$,ropf:Y$,Ropf:Z$,roplus:X$,rotimes:eR,RoundImplies:tR,rpar:nR,rpargt:oR,rppolint:aR,rrarr:iR,Rrightarrow:rR,rsaquo:sR,rscr:lR,Rscr:cR,rsh:uR,Rsh:dR,rsqb:pR,rsquo:fR,rsquor:mR,rthree:hR,rtimes:gR,rtri:vR,rtrie:bR,rtrif:_R,rtriltri:yR,RuleDelayed:wR,ruluhar:SR,rx:kR,Sacute:xR,sacute:CR,sbquo:QR,scap:AR,Scaron:IR,scaron:qR,Sc:TR,sc:LR,sccue:ER,sce:BR,scE:DR,Scedil:PR,scedil:jR,Scirc:MR,scirc:$R,scnap:RR,scnE:OR,scnsim:FR,scpolint:zR,scsim:NR,Scy:VR,scy:HR,sdotb:UR,sdot:WR,sdote:JR,searhk:GR,searr:KR,seArr:YR,searrow:ZR,sect:XR,semi:eO,seswar:tO,setminus:nO,setmn:oO,sext:aO,Sfr:iO,sfr:rO,sfrown:sO,sharp:lO,SHCHcy:cO,shchcy:uO,SHcy:dO,shcy:pO,ShortDownArrow:fO,ShortLeftArrow:mO,shortmid:hO,shortparallel:gO,ShortRightArrow:vO,ShortUpArrow:bO,shy:_O,Sigma:yO,sigma:wO,sigmaf:SO,sigmav:kO,sim:xO,simdot:CO,sime:QO,simeq:AO,simg:IO,simgE:qO,siml:TO,simlE:LO,simne:EO,simplus:BO,simrarr:DO,slarr:PO,SmallCircle:jO,smallsetminus:MO,smashp:$O,smeparsl:RO,smid:OO,smile:FO,smt:zO,smte:NO,smtes:VO,SOFTcy:HO,softcy:UO,solbar:WO,solb:JO,sol:GO,Sopf:KO,sopf:YO,spades:ZO,spadesuit:XO,spar:eF,sqcap:tF,sqcaps:nF,sqcup:oF,sqcups:aF,Sqrt:iF,sqsub:rF,sqsube:sF,sqsubset:lF,sqsubseteq:cF,sqsup:uF,sqsupe:dF,sqsupset:pF,sqsupseteq:fF,square:mF,Square:hF,SquareIntersection:gF,SquareSubset:vF,SquareSubsetEqual:bF,SquareSuperset:_F,SquareSupersetEqual:yF,SquareUnion:wF,squarf:SF,squ:kF,squf:xF,srarr:CF,Sscr:QF,sscr:AF,ssetmn:IF,ssmile:qF,sstarf:TF,Star:LF,star:EF,starf:BF,straightepsilon:DF,straightphi:PF,strns:jF,sub:MF,Sub:$F,subdot:RF,subE:OF,sube:FF,subedot:zF,submult:NF,subnE:VF,subne:HF,subplus:UF,subrarr:WF,subset:JF,Subset:GF,subseteq:KF,subseteqq:YF,SubsetEqual:ZF,subsetneq:XF,subsetneqq:ez,subsim:tz,subsub:nz,subsup:oz,succapprox:az,succ:iz,succcurlyeq:rz,Succeeds:sz,SucceedsEqual:lz,SucceedsSlantEqual:cz,SucceedsTilde:uz,succeq:dz,succnapprox:pz,succneqq:fz,succnsim:mz,succsim:hz,SuchThat:gz,sum:vz,Sum:bz,sung:_z,sup1:yz,sup2:wz,sup3:Sz,sup:kz,Sup:xz,supdot:Cz,supdsub:Qz,supE:Az,supe:Iz,supedot:qz,Superset:Tz,SupersetEqual:Lz,suphsol:Ez,suphsub:Bz,suplarr:Dz,supmult:Pz,supnE:jz,supne:Mz,supplus:$z,supset:Rz,Supset:Oz,supseteq:Fz,supseteqq:zz,supsetneq:Nz,supsetneqq:Vz,supsim:Hz,supsub:Uz,supsup:Wz,swarhk:Jz,swarr:Gz,swArr:Kz,swarrow:Yz,swnwar:Zz,szlig:Xz,Tab:eN,target:tN,Tau:nN,tau:oN,tbrk:aN,Tcaron:iN,tcaron:rN,Tcedil:sN,tcedil:lN,Tcy:cN,tcy:uN,tdot:dN,telrec:pN,Tfr:fN,tfr:mN,there4:hN,therefore:gN,Therefore:vN,Theta:bN,theta:_N,thetasym:yN,thetav:wN,thickapprox:SN,thicksim:kN,ThickSpace:xN,ThinSpace:CN,thinsp:QN,thkap:AN,thksim:IN,THORN:qN,thorn:TN,tilde:LN,Tilde:EN,TildeEqual:BN,TildeFullEqual:DN,TildeTilde:PN,timesbar:jN,timesb:MN,times:$N,timesd:RN,tint:ON,toea:FN,topbot:zN,topcir:NN,top:VN,Topf:HN,topf:UN,topfork:WN,tosa:JN,tprime:GN,trade:KN,TRADE:YN,triangle:ZN,triangledown:XN,triangleleft:eV,trianglelefteq:tV,triangleq:nV,triangleright:oV,trianglerighteq:aV,tridot:iV,trie:rV,triminus:sV,TripleDot:lV,triplus:cV,trisb:uV,tritime:dV,trpezium:pV,Tscr:fV,tscr:mV,TScy:hV,tscy:gV,TSHcy:vV,tshcy:bV,Tstrok:_V,tstrok:yV,twixt:wV,twoheadleftarrow:SV,twoheadrightarrow:kV,Uacute:xV,uacute:CV,uarr:QV,Uarr:AV,uArr:IV,Uarrocir:qV,Ubrcy:TV,ubrcy:LV,Ubreve:EV,ubreve:BV,Ucirc:DV,ucirc:PV,Ucy:jV,ucy:MV,udarr:$V,Udblac:RV,udblac:OV,udhar:FV,ufisht:zV,Ufr:NV,ufr:VV,Ugrave:HV,ugrave:UV,uHar:WV,uharl:JV,uharr:GV,uhblk:KV,ulcorn:YV,ulcorner:ZV,ulcrop:XV,ultri:eH,Umacr:tH,umacr:nH,uml:oH,UnderBar:aH,UnderBrace:iH,UnderBracket:rH,UnderParenthesis:sH,Union:lH,UnionPlus:cH,Uogon:uH,uogon:dH,Uopf:pH,uopf:fH,UpArrowBar:mH,uparrow:hH,UpArrow:gH,Uparrow:vH,UpArrowDownArrow:bH,updownarrow:_H,UpDownArrow:yH,Updownarrow:wH,UpEquilibrium:SH,upharpoonleft:kH,upharpoonright:xH,uplus:CH,UpperLeftArrow:QH,UpperRightArrow:AH,upsi:IH,Upsi:qH,upsih:TH,Upsilon:LH,upsilon:EH,UpTeeArrow:BH,UpTee:DH,upuparrows:PH,urcorn:jH,urcorner:MH,urcrop:$H,Uring:RH,uring:OH,urtri:FH,Uscr:zH,uscr:NH,utdot:VH,Utilde:HH,utilde:UH,utri:WH,utrif:JH,uuarr:GH,Uuml:KH,uuml:YH,uwangle:ZH,vangrt:XH,varepsilon:eU,varkappa:tU,varnothing:nU,varphi:oU,varpi:aU,varpropto:iU,varr:rU,vArr:sU,varrho:lU,varsigma:cU,varsubsetneq:uU,varsubsetneqq:dU,varsupsetneq:pU,varsupsetneqq:fU,vartheta:mU,vartriangleleft:hU,vartriangleright:gU,vBar:vU,Vbar:bU,vBarv:_U,Vcy:yU,vcy:wU,vdash:SU,vDash:kU,Vdash:xU,VDash:CU,Vdashl:QU,veebar:AU,vee:IU,Vee:qU,veeeq:TU,vellip:LU,verbar:EU,Verbar:BU,vert:DU,Vert:PU,VerticalBar:jU,VerticalLine:MU,VerticalSeparator:$U,VerticalTilde:RU,VeryThinSpace:OU,Vfr:FU,vfr:zU,vltri:NU,vnsub:VU,vnsup:HU,Vopf:UU,vopf:WU,vprop:JU,vrtri:GU,Vscr:KU,vscr:YU,vsubnE:ZU,vsubne:XU,vsupnE:eW,vsupne:tW,Vvdash:nW,vzigzag:oW,Wcirc:aW,wcirc:iW,wedbar:rW,wedge:sW,Wedge:lW,wedgeq:cW,weierp:uW,Wfr:dW,wfr:pW,Wopf:fW,wopf:mW,wp:hW,wr:gW,wreath:vW,Wscr:bW,wscr:_W,xcap:yW,xcirc:wW,xcup:SW,xdtri:kW,Xfr:xW,xfr:CW,xharr:QW,xhArr:AW,Xi:IW,xi:qW,xlarr:TW,xlArr:LW,xmap:EW,xnis:BW,xodot:DW,Xopf:PW,xopf:jW,xoplus:MW,xotime:$W,xrarr:RW,xrArr:OW,Xscr:FW,xscr:zW,xsqcup:NW,xuplus:VW,xutri:HW,xvee:UW,xwedge:WW,Yacute:JW,yacute:GW,YAcy:KW,yacy:YW,Ycirc:ZW,ycirc:XW,Ycy:eJ,ycy:tJ,yen:nJ,Yfr:oJ,yfr:aJ,YIcy:iJ,yicy:rJ,Yopf:sJ,yopf:lJ,Yscr:cJ,yscr:uJ,YUcy:dJ,yucy:pJ,yuml:fJ,Yuml:mJ,Zacute:hJ,zacute:gJ,Zcaron:vJ,zcaron:bJ,Zcy:_J,zcy:yJ,Zdot:wJ,zdot:SJ,zeetrf:kJ,ZeroWidthSpace:xJ,Zeta:CJ,zeta:QJ,zfr:AJ,Zfr:IJ,ZHcy:qJ,zhcy:TJ,zigrarr:LJ,zopf:EJ,Zopf:BJ,Zscr:DJ,zscr:PJ,zwj:jJ,zwnj:MJ},Wp=$J,ms=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Do={},Lc={};function RJ(e){var t,n,a=Lc[e];if(!a){for(a=Lc[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),/^[0-9a-z]$/i.test(n)?a.push(n):a.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2));for(t=0;t<e.length;t++)a[e.charCodeAt(t)]=e[t]}return a}function Ii(e,t,n){var a,o,i,r,s="";for(typeof t!="string"&&(n=t,t=Ii.defaultChars),typeof n>"u"&&(n=!0),r=RJ(t),a=0,o=e.length;a<o;a++)i=e.charCodeAt(a),n&&i===37&&a+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(a+1,a+3))?(s+=e.slice(a,a+3),a+=2):i<128?s+=r[i]:i>=55296&&i<=57343?i>=55296&&i<=56319&&a+1<o&&(i=e.charCodeAt(a+1),i>=56320)&&i<=57343?(s+=encodeURIComponent(e[a]+e[a+1]),a++):s+="%EF%BF%BD":s+=encodeURIComponent(e[a]);return s}Ii.defaultChars=";/?:@&=+$,-_.!~*'()#",Ii.componentChars="-_.!~*'()";var OJ=Ii,Ec={};function FJ(e){var t,n,a=Ec[e];if(!a){for(a=Ec[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),a.push(n);for(t=0;t<e.length;t++)n=e.charCodeAt(t),a[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return a}function qi(e,t){var n;return typeof t!="string"&&(t=qi.defaultChars),n=FJ(t),e.replace(/(%[a-f0-9]{2})+/gi,function(a){for(var o,i,r,s,l,u="",c=0,d=a.length;c<d;c+=3)o=parseInt(a.slice(c+1,c+3),16),o<128?u+=n[o]:(224&o)===192&&c+3<d&&(i=parseInt(a.slice(c+4,c+6),16),(192&i)===128)?(l=o<<6&1984|63&i,u+=l<128?"��":String.fromCharCode(l),c+=3):(240&o)===224&&c+6<d&&(i=parseInt(a.slice(c+4,c+6),16),r=parseInt(a.slice(c+7,c+9),16),(192&i)===128)&&(192&r)===128?(l=o<<12&61440|i<<6&4032|63&r,u+=l<2048||l>=55296&&l<=57343?"���":String.fromCharCode(l),c+=6):(248&o)===240&&c+9<d&&(i=parseInt(a.slice(c+4,c+6),16),r=parseInt(a.slice(c+7,c+9),16),s=parseInt(a.slice(c+10,c+12),16),(192&i)===128)&&(192&r)===128&&(192&s)===128?(l=o<<18&1835008|i<<12&258048|r<<6&4032|63&s,l<65536||l>1114111?u+="����":(l-=65536,u+=String.fromCharCode(55296+(l>>10),56320+(1023&l))),c+=9):u+="�";return u})}qi.defaultChars=";/?:@&=+$,#",qi.componentChars="";var zJ=qi,NJ=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t};function Ti(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var VJ=/^([a-z0-9.+-]+:)/i,HJ=/:[0-9]*$/,UJ=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,WJ=["<",">",'"',"`"," ","\r",`
`,"	"],JJ=["{","}","|","\\","^","`"].concat(WJ),GJ=["'"].concat(JJ),Bc=["%","/","?",";","#"].concat(GJ),Dc=["/","?","#"],KJ=255,Pc=/^[+a-z0-9A-Z_-]{0,63}$/,YJ=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,jc={javascript:!0,"javascript:":!0},Mc={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ZJ(e,t){var n;return e&&e instanceof Ti?e:(n=new Ti,n.parse(e,t),n)}Ti.prototype.parse=function(g,t){var n,a,o=g;if(o=o.trim(),!t&&g.split("#").length===1&&(g=UJ.exec(o),g))return this.pathname=g[1],g[2]&&(this.search=g[2]),this;if(g=VJ.exec(o),g&&(g=g[0],n=g.toLowerCase(),this.protocol=g,o=o.substr(g.length)),(t||g||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(C=o.substr(0,2)==="//",!C||g&&jc[g]||(o=o.substr(2),this.slashes=!0)),!jc[g]&&(C||g&&!Mc[g])){var i=-1;for(s=0;s<Dc.length;s++)a=o.indexOf(Dc[s]),a!==-1&&(i===-1||a<i)&&(i=a);for(t=i===-1?o.lastIndexOf("@"):o.lastIndexOf("@",i),t!==-1&&(C=o.slice(0,t),o=o.slice(t+1),this.auth=C),i=-1,s=0;s<Bc.length;s++)a=o.indexOf(Bc[s]),a!==-1&&(i===-1||a<i)&&(i=a);if(i===-1&&(i=o.length),o[i-1]===":"&&i--,g=o.slice(0,i),o=o.slice(i),t=(this.parseHost(g),this.hostname=this.hostname||"",this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]"),!t)for(var r=this.hostname.split(/\./),s=0,l=r.length;s<l;s++){var u=r[s];if(u&&!u.match(Pc)){for(var c="",d=0,f=u.length;d<f;d++)u.charCodeAt(d)>127?c+="x":c+=u[d];if(!c.match(Pc)){var h=r.slice(0,s),_=r.slice(s+1),I=u.match(YJ);I&&(h.push(I[1]),_.unshift(I[2])),_.length&&(o=_.join(".")+o),this.hostname=h.join(".");break}}}this.hostname.length>KJ&&(this.hostname=""),t&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var C=o.indexOf("#"),g=(C!==-1&&(this.hash=o.substr(C),o=o.slice(0,C)),o.indexOf("?"));return g!==-1&&(this.search=o.substr(g),o=o.slice(0,g)),o&&(this.pathname=o),Mc[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this},Ti.prototype.parseHost=function(e){var t=HJ.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var XJ=ZJ,Co=(Do.encode=OJ,Do.decode=zJ,Do.format=NJ,Do.parse=XJ,{}),Jp=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Gp=/[\0-\x1F\x7F-\x9F]/,eG=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Kp=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ai=(Co.Any=Jp,Co.Cc=Gp,Co.Cf=eG,Co.P=ms,Co.Z=Kp,function(e){function t(B){return Object.prototype.toString.call(B)}function n(B){return t(B)==="[object String]"}var a=Object.prototype.hasOwnProperty;function o(B,N){return a.call(B,N)}function i(B){var N=Array.prototype.slice.call(arguments,1);return N.forEach(function(ne){if(ne){if(typeof ne!="object")throw new TypeError(ne+"must be object");Object.keys(ne).forEach(function(ee){B[ee]=ne[ee]})}}),B}function r(B,N,ne){return[].concat(B.slice(0,N),ne,B.slice(N+1))}function s(B){return!(B>=55296&&B<=57343)&&!(B>=64976&&B<=65007)&&(65535&B)!==65535&&(65535&B)!==65534&&!(B>=0&&B<=8)&&B!==11&&!(B>=14&&B<=31)&&!(B>=127&&B<=159)&&!(B>1114111)}function l(B){var N,ne;return B>65535?(B-=65536,N=55296+(B>>10),ne=56320+(1023&B),String.fromCharCode(N,ne)):String.fromCharCode(B)}var u=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,c=/&([a-z#][a-z0-9]{1,31});/gi,d=new RegExp(u.source+"|"+c.source,"gi"),f=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,h=Wp;function _(B,N){var ne=0;return o(h,N)?h[N]:N.charCodeAt(0)===35&&f.test(N)&&(ne=N[1].toLowerCase()==="x"?parseInt(N.slice(2),16):parseInt(N.slice(1),10),s(ne))?l(ne):B}function I(B){return B.indexOf("\\")<0?B:B.replace(u,"$1")}function C(B){return B.indexOf("\\")<0&&B.indexOf("&")<0?B:B.replace(d,function(N,ne,ee){return ne||_(N,ee)})}var g=/[&<>"]/,y=/[&<>"]/g,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function v(B){return w[B]}function x(B){return g.test(B)?B.replace(y,v):B}var L=/[.?*+^$[\]\\(){}|-]/g;function q(B){return B.replace(L,"\\$&")}function T(B){switch(B){case 9:case 32:return!0}return!1}function M(B){if(B>=8192&&B<=8202)return!0;switch(B){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var $=ms;function z(B){return $.test(B)}function O(B){switch(B){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Y(B){return B=B.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(B=B.replace(/ẞ/g,"ß")),B.toLowerCase().toUpperCase()}e.lib={},e.lib.mdurl=Do,e.lib.ucmicro=Co,e.assign=i,e.isString=n,e.has=o,e.unescapeMd=I,e.unescapeAll=C,e.isValidEntityCode=s,e.fromCodePoint=l,e.escapeHtml=x,e.arrayReplaceAt=r,e.isSpace=T,e.isWhiteSpace=M,e.isMdAsciiPunct=O,e.isPunctChar=z,e.escapeRE=q,e.normalizeReference=Y}(We),{}),tG=function(e,t,n){var a,o,i,r,s=-1,l=e.posMax,u=e.pos;for(e.pos=t+1,a=1;e.pos<l;){if(i=e.src.charCodeAt(e.pos),i===93&&(a--,a===0)){o=!0;break}if(r=e.pos,e.md.inline.skipToken(e),i===91){if(r===e.pos-1)a++;else if(n)return e.pos=u,-1}}return o&&(s=e.pos),e.pos=u,s},$c=We.unescapeAll,nG=function(e,t,n){var a,o,i=0,r=t,s={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(t)===60)for(t++;t<n;){if(a=e.charCodeAt(t),a===10||a===60)return s;if(a===62)return s.pos=t+1,s.str=$c(e.slice(r+1,t)),s.ok=!0,s;a===92&&t+1<n?t+=2:t++}else{for(o=0;t<n&&(a=e.charCodeAt(t),!(a===32||a<32||a===127));)if(a===92&&t+1<n){if(e.charCodeAt(t+1)===32)break;t+=2}else{if(a===40&&(o++,o>32))return s;if(a===41){if(o===0)break;o--}t++}r!==t&&o===0&&(s.str=$c(e.slice(r,t)),s.lines=i,s.pos=t,s.ok=!0)}return s},oG=We.unescapeAll,aG=function(e,t,n){var a,o,i=0,r=t,s={ok:!1,pos:0,lines:0,str:""};if(!(t>=n)&&(o=e.charCodeAt(t),o===34||o===39||o===40))for(t++,o===40&&(o=41);t<n;){if(a=e.charCodeAt(t),a===o)return s.pos=t+1,s.lines=i,s.str=oG(e.slice(r+1,t)),s.ok=!0,s;if(a===40&&o===41)return s;(a===10||a===92&&t+1<n&&(t++,e.charCodeAt(t)===10))&&i++,t++}return s},iG=(ai.parseLinkLabel=tG,ai.parseLinkDestination=nG,ai.parseLinkTitle=aG,We.assign),rG=We.unescapeAll,Qo=We.escapeHtml,nn={};function Eo(){this.rules=iG({},nn)}nn.code_inline=function(e,t,n,a,o){var i=e[t];return"<code"+o.renderAttrs(i)+">"+Qo(e[t].content)+"</code>"},nn.code_block=function(e,t,n,a,o){var i=e[t];return"<pre"+o.renderAttrs(i)+"><code>"+Qo(e[t].content)+`</code></pre>
`},nn.fence=function(r,s,n,a,o){var i,r=r[s],s=r.info?rG(r.info).trim():"",l="",u="";return s&&(i=s.split(/(\s+)/g),l=i[0],u=i.slice(2).join("")),i=n.highlight&&n.highlight(r.content,l,u)||Qo(r.content),i.indexOf("<pre")===0?i+`
`:s?(u=r.attrIndex("class"),s=r.attrs?r.attrs.slice():[],u<0?s.push(["class",n.langPrefix+l]):(s[u]=s[u].slice(),s[u][1]+=" "+n.langPrefix+l),u={attrs:s},"<pre><code"+o.renderAttrs(u)+">"+i+`</code></pre>
`):"<pre><code"+o.renderAttrs(r)+">"+i+`</code></pre>
`},nn.image=function(e,t,n,a,o){var i=e[t];return i.attrs[i.attrIndex("alt")][1]=o.renderInlineAsText(i.children,n,a),o.renderToken(e,t,n)},nn.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},nn.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},nn.text=function(e,t){return Qo(e[t].content)},nn.html_block=function(e,t){return e[t].content},nn.html_inline=function(e,t){return e[t].content},Eo.prototype.renderAttrs=function(e){var t,n,a;if(!e.attrs)return"";for(a="",t=0,n=e.attrs.length;t<n;t++)a+=" "+Qo(e.attrs[t][0])+'="'+Qo(e.attrs[t][1])+'"';return a},Eo.prototype.renderToken=function(e,t,n){var a="",o=!1,i=e[t];return i.hidden?"":(i.block&&i.nesting!==-1&&t&&e[t-1].hidden&&(a+=`
`),a+=(i.nesting===-1?"</":"<")+i.tag,a+=this.renderAttrs(i),i.nesting===0&&n.xhtmlOut&&(a+=" /"),i.block&&(o=!0,i.nesting===1)&&t+1<e.length&&(n=e[t+1],n.type==="inline"||n.hidden||n.nesting===-1&&n.tag===i.tag)&&(o=!1),a+=o?`>
`:">",a)},Eo.prototype.renderInline=function(e,t,n){for(var a,o="",i=this.rules,r=0,s=e.length;r<s;r++)a=e[r].type,typeof i[a]<"u"?o+=i[a](e,r,t,n,this):o+=this.renderToken(e,r,t);return o},Eo.prototype.renderInlineAsText=function(e,t,n){for(var a="",o=0,i=e.length;o<i;o++)e[o].type==="text"?a+=e[o].content:e[o].type==="image"?a+=this.renderInlineAsText(e[o].children,t,n):e[o].type==="softbreak"&&(a+=`
`);return a},Eo.prototype.render=function(e,t,n){for(var a,o="",i=this.rules,r=0,s=e.length;r<s;r++)a=e[r].type,a==="inline"?o+=this.renderInline(e[r].children,t,n):typeof i[a]<"u"?o+=i[e[r].type](e,r,t,n,this):o+=this.renderToken(e,r,t,n);return o};var sG=Eo;function Gt(){this.__rules__=[],this.__cache__=null}Gt.prototype.__find__=function(e){for(var t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},Gt.prototype.__compile__=function(){var e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(a){t.indexOf(a)<0&&t.push(a)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(a){!a.enabled||n&&a.alt.indexOf(n)<0||e.__cache__[n].push(a.fn)})})},Gt.prototype.at=function(e,t,o){var a=this.__find__(e),o=o||{};if(a===-1)throw new Error("Parser rule not found: "+e);this.__rules__[a].fn=t,this.__rules__[a].alt=o.alt||[],this.__cache__=null},Gt.prototype.before=function(e,t,n,i){var o=this.__find__(e),i=i||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},Gt.prototype.after=function(e,t,n,i){var o=this.__find__(e),i=i||{};if(o===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(o+1,0,{name:t,enabled:!0,fn:n,alt:i.alt||[]}),this.__cache__=null},Gt.prototype.push=function(e,t,n){n=n||{},this.__rules__.push({name:e,enabled:!0,fn:t,alt:n.alt||[]}),this.__cache__=null},Gt.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);var n=[];return e.forEach(function(a){var o=this.__find__(a);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+a)}this.__rules__[o].enabled=!0,n.push(a)},this),this.__cache__=null,n},Gt.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)},Gt.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);var n=[];return e.forEach(function(a){var o=this.__find__(a);if(o<0){if(t)return;throw new Error("Rules manager: invalid rule name "+a)}this.__rules__[o].enabled=!1,n.push(a)},this),this.__cache__=null,n},Gt.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};var Ys=Gt,lG=/\r\n?|\n/g,cG=/\0/g,uG=function(e){var t=e.src.replace(lG,`
`);t=t.replace(cG,"�"),e.src=t},dG=function(e){var t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)},pG=function(e){for(var t,n=e.tokens,a=0,o=n.length;a<o;a++)t=n[a],t.type==="inline"&&e.md.inline.parse(t.content,e.md,e.env,t.children)},fG=We.arrayReplaceAt;function mG(e){return/^<a[>\s]/i.test(e)}function hG(e){return/^<\/a\s*>/i.test(e)}var gG=function(e){var t,n,a,o,i,r,s,l,u,c,d,f,h,_,I,C,g=e.tokens;if(e.md.options.linkify){for(n=0,a=g.length;n<a;n++)if(g[n].type==="inline"&&e.md.linkify.pretest(g[n].content)){for(o=g[n].children,h=0,t=o.length-1;t>=0;t--)if(r=o[t],r.type==="link_close")for(t--;o[t].level!==r.level&&o[t].type!=="link_open";)t--;else if(r.type==="html_inline"&&(mG(r.content)&&h>0&&h--,hG(r.content))&&h++,!(h>0)&&r.type==="text"&&e.md.linkify.test(r.content)){for(u=r.content,C=e.md.linkify.match(u),s=[],f=r.level,d=0,l=0;l<C.length;l++)_=C[l].url,_=e.md.normalizeLink(_),e.md.validateLink(_)&&(I=C[l].text,I=C[l].schema?C[l].schema!=="mailto:"||/^mailto:/i.test(I)?e.md.normalizeLinkText(I):e.md.normalizeLinkText("mailto:"+I).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+I).replace(/^http:\/\//,""),c=C[l].index,c>d&&(i=new e.Token("text","",0),i.content=u.slice(d,c),i.level=f,s.push(i)),i=new e.Token("link_open","a",1),i.attrs=[["href",_]],i.level=f++,i.markup="linkify",i.info="auto",s.push(i),i=new e.Token("text","",0),i.content=I,i.level=f,s.push(i),i=new e.Token("link_close","a",-1),i.level=--f,i.markup="linkify",i.info="auto",s.push(i),d=C[l].lastIndex);d<u.length&&(i=new e.Token("text","",0),i.content=u.slice(d),i.level=f,s.push(i)),g[n].children=o=fG(o,t,s)}}}},Yp=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,vG=/\((c|tm|r|p)\)/i,bG=/\((c|tm|r|p)\)/gi,_G={c:"©",r:"®",p:"§",tm:"™"};function yG(e,t){return _G[t.toLowerCase()]}function wG(e){for(var t,n=0,a=e.length-1;a>=0;a--)t=e[a],t.type!=="text"||n||(t.content=t.content.replace(bG,yG)),t.type==="link_open"&&t.info==="auto"&&n--,t.type==="link_close"&&t.info==="auto"&&n++}function SG(e){for(var t,n=0,a=e.length-1;a>=0;a--)t=e[a],t.type!=="text"||n||Yp.test(t.content)&&(t.content=t.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/gm,"$1—").replace(/(^|\s)--(?=\s|$)/gm,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,"$1–")),t.type==="link_open"&&t.info==="auto"&&n--,t.type==="link_close"&&t.info==="auto"&&n++}var kG=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(vG.test(e.tokens[t].content)&&wG(e.tokens[t].children),Yp.test(e.tokens[t].content))&&SG(e.tokens[t].children)},Rc=We.isWhiteSpace,Oc=We.isPunctChar,Fc=We.isMdAsciiPunct,xG=/['"]/,zc=/['"]/g,Nc="’";function Wa(e,t,n){return e.substr(0,t)+n+e.substr(t+1)}function CG(e,t){for(var n,a,o,i,r,s,l,u,c,d,f,h,_,I,C,g,y,w,v,x=[],L=0;L<e.length;L++){for(n=e[L],s=e[L].level,g=x.length-1;g>=0&&!(x[g].level<=s);g--);if(x.length=g+1,n.type==="text"){a=n.content,i=0,r=a.length;e:for(;i<r&&(zc.lastIndex=i,o=zc.exec(a),!!o);){if(I=C=!0,i=o.index+1,y=o[0]==="'",u=32,o.index-1>=0)u=a.charCodeAt(o.index-1);else for(g=L-1;g>=0&&!(e[g].type==="softbreak"||e[g].type==="hardbreak");g--)if(e[g].content){u=e[g].content.charCodeAt(e[g].content.length-1);break}if(c=32,i<r)c=a.charCodeAt(i);else for(g=L+1;g<e.length&&!(e[g].type==="softbreak"||e[g].type==="hardbreak");g++)if(e[g].content){c=e[g].content.charCodeAt(0);break}if(d=Fc(u)||Oc(String.fromCharCode(u)),f=Fc(c)||Oc(String.fromCharCode(c)),h=Rc(u),_=Rc(c),!_&&(!f||h||d)||(I=!1),!h&&(!d||_||f)||(C=!1),c===34&&o[0]==='"'&&u>=48&&u<=57&&(C=I=!1),I&&C&&(I=d,C=f),I||C){if(C){for(g=x.length-1;g>=0&&(l=x[g],!(x[g].level<s));g--)if(l.single===y&&x[g].level===s){l=x[g],v=y?(w=t.md.options.quotes[2],t.md.options.quotes[3]):(w=t.md.options.quotes[0],t.md.options.quotes[1]),n.content=Wa(n.content,o.index,v),e[l.token].content=Wa(e[l.token].content,l.pos,w),i+=v.length-1,l.token===L&&(i+=w.length-1),a=n.content,r=a.length,x.length=g;continue e}}I?x.push({token:L,pos:o.index,single:y,level:s}):C&&y&&(n.content=Wa(n.content,o.index,Nc))}else y&&(n.content=Wa(n.content,o.index,Nc))}}}}var QG=function(e){var t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&xG.test(e.tokens[t].content)&&CG(e.tokens[t].children,e)};function Bo(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Bo.prototype.attrIndex=function(e){var t,n,a;if(this.attrs){for(t=this.attrs,n=0,a=t.length;n<a;n++)if(t[n][0]===e)return n}return-1},Bo.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},Bo.prototype.attrSet=function(a,t){var n=this.attrIndex(a),a=[a,t];n<0?this.attrPush(a):this.attrs[n]=a},Bo.prototype.attrGet=function(t){var t=this.attrIndex(t),n=null;return t>=0&&(n=this.attrs[t][1]),n},Bo.prototype.attrJoin=function(e,t){var n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t};var Zs=Bo,AG=Zs;function Zp(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Zp.prototype.Token=AG;var IG=Zp,qG=Ys,qr=[["normalize",uG],["block",dG],["inline",pG],["linkify",gG],["replacements",kG],["smartquotes",QG]];function hs(){this.ruler=new qG;for(var e=0;e<qr.length;e++)this.ruler.push(qr[e][0],qr[e][1])}hs.prototype.process=function(e){for(var t=this.ruler.getRules(""),n=0,a=t.length;n<a;n++)t[n](e)},hs.prototype.State=IG;var TG=hs,Tr=We.isSpace;function Lr(e,a){var n=e.bMarks[a]+e.tShift[a],a=e.eMarks[a];return e.src.substr(n,a-n)}function Vc(e){for(var t=[],n=0,a=e.length,o=!1,i=0,r="",s=e.charCodeAt(n);n<a;)s===124&&(i=o?(r+=e.substring(i,n-1),n):(t.push(r+e.substring(i,n)),r="",n+1)),o=s===92,n++,s=e.charCodeAt(n);return t.push(r+e.substring(i)),t}var LG=function(e,t,n,a){var o,i,r,s,l,u,c,d,f,h,_,I,C,g,y,w;if(t+2>n||(u=t+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(r=e.bMarks[u]+e.tShift[u],r>=e.eMarks[u])||(y=e.src.charCodeAt(r++),y!==124&&y!==45&&y!==58)||r>=e.eMarks[u]||(w=e.src.charCodeAt(r++),w!==124&&w!==45&&w!==58&&!Tr(w))||y===45&&Tr(w))return!1;for(;r<e.eMarks[u];){if(o=e.src.charCodeAt(r),o!==124&&o!==45&&o!==58&&!Tr(o))return!1;r++}for(i=Lr(e,t+1),c=i.split("|"),h=[],s=0;s<c.length;s++){if(_=c[s].trim(),!_){if(s===0||s===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;_.charCodeAt(_.length-1)===58?h.push(_.charCodeAt(0)===58?"center":"right"):_.charCodeAt(0)===58?h.push("left"):h.push("")}if(i=Lr(e,t).trim(),i.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4||(c=Vc(i),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),d=c.length,d===0||d!==h.length))return!1;if(!a){for(y=e.parentType,e.parentType="table",g=e.md.block.ruler.getRules("blockquote"),f=e.push("table_open","table",1),f.map=w=[t,0],f=e.push("thead_open","thead",1),f.map=[t,t+1],f=e.push("tr_open","tr",1),f.map=[t,t+1],s=0;s<c.length;s++)f=e.push("th_open","th",1),h[s]&&(f.attrs=[["style","text-align:"+h[s]]]),f=e.push("inline","",0),f.content=c[s].trim(),f.children=[],f=e.push("th_close","th",-1);for(f=e.push("tr_close","tr",-1),f=e.push("thead_close","thead",-1),u=t+2;u<n&&!(e.sCount[u]<e.blkIndent);u++){for(C=!1,s=0,l=g.length;s<l;s++)if(g[s](e,u,n,!0)){C=!0;break}if(C||(i=Lr(e,u).trim(),!i)||e.sCount[u]-e.blkIndent>=4)break;for(c=Vc(i),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),u===t+2&&(f=e.push("tbody_open","tbody",1),f.map=I=[t+2,0]),f=e.push("tr_open","tr",1),f.map=[u,u+1],s=0;s<d;s++)f=e.push("td_open","td",1),h[s]&&(f.attrs=[["style","text-align:"+h[s]]]),f=e.push("inline","",0),f.content=c[s]?c[s].trim():"",f.children=[],f=e.push("td_close","td",-1);f=e.push("tr_close","tr",-1)}I&&(f=e.push("tbody_close","tbody",-1),I[1]=u),f=e.push("table_close","table",-1),w[1]=u,e.parentType=y,e.line=u}return!0},EG=function(e,t,n){var a,o,i;if(e.sCount[t]-e.blkIndent<4)return!1;for(o=a=t+1;a<n;)if(e.isEmpty(a))a++;else{if(!(e.sCount[a]-e.blkIndent>=4))break;a++,o=a}return e.line=o,i=e.push("code_block","code",0),i.content=e.getLines(t,o,4+e.blkIndent,!1)+`
`,i.map=[t,e.line],!0},BG=function(e,t,n,a){var o,i,r,s,l,u,c=!1,d=e.bMarks[t]+e.tShift[t],f=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||d+3>f||(o=e.src.charCodeAt(d),o!==126&&o!==96)||(l=d,d=e.skipChars(d,o),i=d-l,i<3)||(u=e.src.slice(l,d),r=e.src.slice(d,f),o===96&&r.indexOf(String.fromCharCode(o))>=0))return!1;if(!a){for(s=t;s++,!(s>=n||(d=l=e.bMarks[s]+e.tShift[s],f=e.eMarks[s],d<f&&e.sCount[s]<e.blkIndent));)if(e.src.charCodeAt(d)===o&&!(e.sCount[s]-e.blkIndent>=4)&&(d=e.skipChars(d,o),!(d-l<i))&&(d=e.skipSpaces(d),!(d<f))){c=!0;break}i=e.sCount[t],e.line=s+(c?1:0),a=e.push("fence","code",0),a.info=r,a.content=e.getLines(t+1,s,i,!0),a.markup=u,a.map=[t,e.line]}return!0},Hc=We.isSpace,DG=function(e,t,n,a){var o,i,r,s,l,u,c,d,f,h,_,I,C,g,y,w,v,x,L,q=e.lineMax,T=e.bMarks[t]+e.tShift[t],M=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(T++)!==62)return!1;if(!a){for(s=f=e.sCount[t]+1,e.src.charCodeAt(T)===32?(T++,s++,f++,o=!1,y=!0):e.src.charCodeAt(T)===9?(y=!0,o=(e.bsCount[t]+f)%4!==3||(T++,s++,f++,!1)):y=!1,h=[e.bMarks[t]],e.bMarks[t]=T;T<M&&(i=e.src.charCodeAt(T),!!Hc(i));)i===9?f+=4-(f+e.bsCount[t]+(o?1:0))%4:f++,T++;for(_=[e.bsCount[t]],e.bsCount[t]=e.sCount[t]+1+(y?1:0),u=T>=M,C=[e.sCount[t]],e.sCount[t]=f-s,g=[e.tShift[t]],e.tShift[t]=T-e.bMarks[t],v=e.md.block.ruler.getRules("blockquote"),a=e.parentType,e.parentType="blockquote",d=t+1;d<n&&(L=e.sCount[d]<e.blkIndent,T=e.bMarks[d]+e.tShift[d],M=e.eMarks[d],!(T>=M));d++)if(e.src.charCodeAt(T++)!==62||L){if(u)break;for(w=!1,r=0,l=v.length;r<l;r++)if(v[r](e,d,n,!0)){w=!0;break}if(w){e.lineMax=d,e.blkIndent!==0&&(h.push(e.bMarks[d]),_.push(e.bsCount[d]),g.push(e.tShift[d]),C.push(e.sCount[d]),e.sCount[d]-=e.blkIndent);break}h.push(e.bMarks[d]),_.push(e.bsCount[d]),g.push(e.tShift[d]),C.push(e.sCount[d]),e.sCount[d]=-1}else{for(s=f=e.sCount[d]+1,e.src.charCodeAt(T)===32?(T++,s++,f++,o=!1,y=!0):e.src.charCodeAt(T)===9?(y=!0,o=(e.bsCount[d]+f)%4!==3||(T++,s++,f++,!1)):y=!1,h.push(e.bMarks[d]),e.bMarks[d]=T;T<M&&(i=e.src.charCodeAt(T),!!Hc(i));)i===9?f+=4-(f+e.bsCount[d]+(o?1:0))%4:f++,T++;u=T>=M,_.push(e.bsCount[d]),e.bsCount[d]=e.sCount[d]+1+(y?1:0),C.push(e.sCount[d]),e.sCount[d]=f-s,g.push(e.tShift[d]),e.tShift[d]=T-e.bMarks[d]}for(I=e.blkIndent,e.blkIndent=0,x=e.push("blockquote_open","blockquote",1),x.markup=">",x.map=c=[t,0],e.md.block.tokenize(e,t,d),x=e.push("blockquote_close","blockquote",-1),x.markup=">",e.lineMax=q,e.parentType=a,c[1]=e.line,r=0;r<g.length;r++)e.bMarks[r+t]=h[r],e.tShift[r+t]=g[r],e.sCount[r+t]=C[r],e.bsCount[r+t]=_[r];e.blkIndent=I}return!0},PG=We.isSpace,jG=function(e,t,n,a){var o,i,r,s=e.bMarks[t]+e.tShift[t],l=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(o=e.src.charCodeAt(s++),o!==42&&o!==45&&o!==95))return!1;for(i=1;s<l;){if(r=e.src.charCodeAt(s++),r!==o&&!PG(r))return!1;r===o&&i++}return!(i<3)&&(a||(e.line=t+1,a=e.push("hr","hr",0),a.map=[t,e.line],a.markup=Array(i+1).join(String.fromCharCode(o))),!0)},Xp=We.isSpace;function Uc(e,a){var n=e.bMarks[a]+e.tShift[a],a=e.eMarks[a],o=e.src.charCodeAt(n++);return o!==42&&o!==45&&o!==43||n<a&&(o=e.src.charCodeAt(n),!Xp(o))?-1:n}function Wc(e,t){var n,a=e.bMarks[t]+e.tShift[t],o=a,i=e.eMarks[t];if(o+1>=i||(n=e.src.charCodeAt(o++),n<48||n>57))return-1;for(;;){if(o>=i)return-1;if(n=e.src.charCodeAt(o++),!(n>=48&&n<=57)){if(n===41||n===46)break;return-1}if(o-a>=10)return-1}return o<i&&(n=e.src.charCodeAt(o),!Xp(n))?-1:o}function MG(e,t){for(var n=e.level+2,a=t+2,o=e.tokens.length-2;a<o;a++)e.tokens[a].level===n&&e.tokens[a].type==="paragraph_open"&&(e.tokens[a+2].hidden=!0,e.tokens[a].hidden=!0,a+=2)}var $G=function(e,t,n,a){var o,i,r,s,l,u,c,d,f,h,_,I,C,g,y,w,v,x,L,q,T,M,$,z=!1,O=!0;if(e.sCount[t]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[t]-e.listIndent>=4&&e.sCount[t]<e.blkIndent)return!1;if(a&&e.parentType==="paragraph"&&e.sCount[t]>=e.blkIndent&&(z=!0),(x=Wc(e,t))>=0){if(l=!0,q=e.bMarks[t]+e.tShift[t],C=Number(e.src.slice(q,x-1)),z&&C!==1)return!1}else{if(!((x=Uc(e,t))>=0))return!1;l=!1}if(z&&e.skipSpaces(x)>=e.eMarks[t])return!1;if(d=e.src.charCodeAt(x-1),!a){for(z=e.tokens.length,l?($=e.push("ordered_list_open","ol",1),C!==1&&($.attrs=[["start",C]])):$=e.push("bullet_list_open","ul",1),$.map=a=[t,0],$.markup=String.fromCharCode(d),h=t,L=!1,M=e.md.block.ruler.getRules("list"),C=e.parentType,e.parentType="list";h<n;){for(v=x,f=e.eMarks[h],s=_=e.sCount[h]+x-(e.bMarks[t]+e.tShift[t]);v<f;){if(o=e.src.charCodeAt(v),o===9)_+=4-(_+e.bsCount[h])%4;else{if(o!==32)break;_++}v++}if(i=v,u=i>=f?1:_-s,u>4&&(u=1),s=s+u,$=e.push("list_item_open","li",1),$.markup=String.fromCharCode(d),$.map=u=[t,0],l&&($.info=e.src.slice(q,x-1)),w=e.tight,y=e.tShift[t],g=e.sCount[t],I=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=s,e.tight=!0,e.tShift[t]=i-e.bMarks[t],e.sCount[t]=_,i>=f&&e.isEmpty(t+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,t,n,!0),e.tight&&!L||(O=!1),L=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=I,e.tShift[t]=y,e.sCount[t]=g,e.tight=w,$=e.push("list_item_close","li",-1),$.markup=String.fromCharCode(d),h=t=e.line,u[1]=h,i=e.bMarks[t],h>=n||e.sCount[h]<e.blkIndent||e.sCount[t]-e.blkIndent>=4)break;for(T=!1,r=0,c=M.length;r<c;r++)if(M[r](e,h,n,!0)){T=!0;break}if(T)break;if(l){if(x=Wc(e,h),x<0)break;q=e.bMarks[h]+e.tShift[h]}else if(x=Uc(e,h),x<0)break;if(d!==e.src.charCodeAt(x-1))break}$=l?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),$.markup=String.fromCharCode(d),a[1]=h,e.line=h,e.parentType=C,O&&MG(e,z)}return!0},RG=We.normalizeReference,Ja=We.isSpace,OG=function(e,t,n,a){var o,i,r,s,l,u,c,d,f,h,_,I,C,g,y,w=0,v=e.bMarks[t]+e.tShift[t],x=e.eMarks[t],L=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(v)!==91)return!1;for(;++v<x;)if(e.src.charCodeAt(v)===93&&e.src.charCodeAt(v-1)!==92){if(v+1===x||e.src.charCodeAt(v+1)!==58)return!1;break}for(s=e.lineMax,g=e.md.block.ruler.getRules("reference"),f=e.parentType,e.parentType="reference";L<s&&!e.isEmpty(L);L++)if(!(e.sCount[L]-e.blkIndent>3)&&!(e.sCount[L]<0)){for(C=!1,u=0,c=g.length;u<c;u++)if(g[u](e,L,s,!0)){C=!0;break}if(C)break}for(I=e.getLines(t,L,e.blkIndent,!1).trim(),x=I.length,v=1;v<x;v++){if(o=I.charCodeAt(v),o===91)return!1;if(o===93){d=v;break}(o===10||o===92&&(v++,v<x)&&I.charCodeAt(v)===10)&&w++}if(d<0||I.charCodeAt(d+1)!==58)return!1;for(v=d+2;v<x;v++)if(o=I.charCodeAt(v),o===10)w++;else if(!Ja(o))break;if(h=e.md.helpers.parseLinkDestination(I,v,x),!h.ok||(l=e.md.normalizeLink(h.str),!e.md.validateLink(l)))return!1;for(v=h.pos,w+=h.lines,i=v,r=w,_=v;v<x;v++)if(o=I.charCodeAt(v),o===10)w++;else if(!Ja(o))break;for(h=e.md.helpers.parseLinkTitle(I,v,x),v<x&&_!==v&&h.ok?(y=h.str,v=h.pos,w+=h.lines):(y="",v=i,w=r);v<x&&(o=I.charCodeAt(v),!!Ja(o));)v++;if(v<x&&I.charCodeAt(v)!==10&&y)for(y="",v=i,w=r;v<x&&(o=I.charCodeAt(v),!!Ja(o));)v++;return!(v<x&&I.charCodeAt(v)!==10)&&(_=RG(I.slice(1,d)),!!_)&&(a||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[_]>"u"&&(e.env.references[_]={title:y,href:l}),e.parentType=f,e.line=t+w+1),!0)},FG=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Li={},zG="[a-zA-Z_:][a-zA-Z0-9:._-]*",NG="[^\"'=<>`\\x00-\\x20]+",VG="'[^']*'",HG='"[^"]*"',UG="(?:"+NG+"|"+VG+"|"+HG+")",WG="(?:\\s+"+zG+"(?:\\s*=\\s*"+UG+")?)",ef="<[A-Za-z][A-Za-z0-9\\-]*"+WG+"*\\s*\\/?>",tf="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",JG="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",GG="<[?][\\s\\S]*?[?]>",KG="<![A-Z]+\\s+[^>]*>",YG="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",ZG=new RegExp("^(?:"+ef+"|"+tf+"|"+JG+"|"+GG+"|"+KG+"|"+YG+")"),XG=new RegExp("^(?:"+ef+"|"+tf+")"),eK=(Li.HTML_TAG_RE=ZG,Li.HTML_OPEN_CLOSE_TAG_RE=XG,FG),tK=Li.HTML_OPEN_CLOSE_TAG_RE,Ao=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+eK.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(tK.source+"\\s*$"),/^$/,!1]],nK=function(e,t,n,a){var o,i,r,s=e.bMarks[t]+e.tShift[t],l=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(s)!==60)return!1;for(r=e.src.slice(s,l),o=0;o<Ao.length&&!Ao[o][0].test(r);o++);if(o===Ao.length)return!1;if(a)return Ao[o][2];if(i=t+1,!Ao[o][1].test(r)){for(;i<n&&!(e.sCount[i]<e.blkIndent);i++)if(s=e.bMarks[i]+e.tShift[i],l=e.eMarks[i],r=e.src.slice(s,l),Ao[o][1].test(r)){r.length!==0&&i++;break}}return e.line=i,a=e.push("html_block","",0),a.map=[t,i],a.content=e.getLines(t,i,e.blkIndent,!0),!0},Jc=We.isSpace,oK=function(e,t,n,a){var o,i,r=e.bMarks[t]+e.tShift[t],s=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||(o=e.src.charCodeAt(r),o!==35||r>=s))return!1;for(i=1,o=e.src.charCodeAt(++r);o===35&&r<s&&i<=6;)i++,o=e.src.charCodeAt(++r);return!(i>6||r<s&&!Jc(o))&&(a||(s=e.skipSpacesBack(s,r),a=e.skipCharsBack(s,35,r),a>r&&Jc(e.src.charCodeAt(a-1))&&(s=a),e.line=t+1,a=e.push("heading_open","h"+String(i),1),a.markup="########".slice(0,i),a.map=[t,e.line],a=e.push("inline","",0),a.content=e.src.slice(r,s).trim(),a.map=[t,e.line],a.children=[],a=e.push("heading_close","h"+String(i),-1),a.markup="########".slice(0,i)),!0)},aK=function(e,t,n){var a,o,i,r,s,l,u,c,d,f,h=t+1,_=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(f=e.parentType,e.parentType="paragraph";h<n&&!e.isEmpty(h);h++)if(!(e.sCount[h]-e.blkIndent>3)){if(e.sCount[h]>=e.blkIndent&&(l=e.bMarks[h]+e.tShift[h],u=e.eMarks[h],l<u)&&(d=e.src.charCodeAt(l),d===45||d===61)&&(l=e.skipChars(l,d),l=e.skipSpaces(l),l>=u)){c=d===61?1:2;break}if(!(e.sCount[h]<0)){for(o=!1,i=0,r=_.length;i<r;i++)if(_[i](e,h,n,!0)){o=!0;break}if(o)break}}return!!c&&(a=e.getLines(t,h,e.blkIndent,!1).trim(),e.line=h+1,s=e.push("heading_open","h"+String(c),1),s.markup=String.fromCharCode(d),s.map=[t,e.line],s=e.push("inline","",0),s.content=a,s.map=[t,e.line-1],s.children=[],s=e.push("heading_close","h"+String(c),-1),s.markup=String.fromCharCode(d),e.parentType=f,!0)},iK=function(e,t){var n,a,o,i,r,s=t+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax,c=e.parentType;for(e.parentType="paragraph";s<u&&!e.isEmpty(s);s++)if(!(e.sCount[s]-e.blkIndent>3)&&!(e.sCount[s]<0)){for(a=!1,o=0,i=l.length;o<i;o++)if(l[o](e,s,u,!0)){a=!0;break}if(a)break}return n=e.getLines(t,s,e.blkIndent,!1).trim(),e.line=s,r=e.push("paragraph_open","p",1),r.map=[t,e.line],r=e.push("inline","",0),r.content=n,r.map=[t,e.line],r.children=[],r=e.push("paragraph_close","p",-1),e.parentType=c,!0},Gc=Zs,ii=We.isSpace;function on(e,t,n,a){var o,i,r,s,l,u,c,d;for(this.src=e,this.md=t,this.env=n,this.tokens=a,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,d=!1,r=s=u=c=0,l=i.length;s<l;s++){if(o=i.charCodeAt(s),!d){if(ii(o)){u++,o===9?c+=4-c%4:c++;continue}d=!0}o!==10&&s!==l-1||(o!==10&&s++,this.bMarks.push(r),this.eMarks.push(s),this.tShift.push(u),this.sCount.push(c),this.bsCount.push(0),d=!1,u=0,c=0,r=s+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}on.prototype.push=function(e,t,n){return e=new Gc(e,t,n),e.block=!0,n<0&&this.level--,e.level=this.level,n>0&&this.level++,this.tokens.push(e),e},on.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},on.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},on.prototype.skipSpaces=function(e){for(var t,n=this.src.length;e<n&&(t=this.src.charCodeAt(e),!!ii(t));e++);return e},on.prototype.skipSpacesBack=function(e,t){if(!(e<=t)){for(;e>t;)if(!ii(this.src.charCodeAt(--e)))return e+1}return e},on.prototype.skipChars=function(e,t){for(var n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},on.prototype.skipCharsBack=function(e,t,n){if(!(e<=n)){for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1}return e},on.prototype.getLines=function(e,t,n,a){var o,i,r,s,l,u,c,d=e;if(e>=t)return"";for(u=new Array(t-e),o=0;d<t;d++,o++){for(i=0,c=s=this.bMarks[d],l=d+1<t||a?this.eMarks[d]+1:this.eMarks[d];s<l&&i<n;){if(r=this.src.charCodeAt(s),ii(r))r===9?i+=4-(i+this.bsCount[d])%4:i++;else{if(!(s-c<this.tShift[d]))break;i++}s++}u[o]=i>n?new Array(i-n+1).join(" ")+this.src.slice(s,l):this.src.slice(s,l)}return u.join("")},on.prototype.Token=Gc;var rK=on,sK=Ys,Ga=[["table",LG,["paragraph","reference"]],["code",EG],["fence",BG,["paragraph","reference","blockquote","list"]],["blockquote",DG,["paragraph","reference","blockquote","list"]],["hr",jG,["paragraph","reference","blockquote","list"]],["list",$G,["paragraph","reference","blockquote"]],["reference",OG],["html_block",nK,["paragraph","reference","blockquote"]],["heading",oK,["paragraph","reference","blockquote"]],["lheading",aK],["paragraph",iK]];function ri(){this.ruler=new sK;for(var e=0;e<Ga.length;e++)this.ruler.push(Ga[e][0],Ga[e][1],{alt:(Ga[e][2]||[]).slice()})}ri.prototype.tokenize=function(e,t,n){for(var a,o,i=this.ruler.getRules(""),r=i.length,s=t,l=!1,u=e.md.options.maxNesting;s<n&&(e.line=s=e.skipEmptyLines(s),!(s>=n||e.sCount[s]<e.blkIndent));){if(e.level>=u){e.line=n;break}for(o=0;o<r&&(a=i[o](e,s,n,!1),!a);o++);e.tight=!l,e.isEmpty(e.line-1)&&(l=!0),s=e.line,s<n&&e.isEmpty(s)&&(l=!0,s++,e.line=s)}},ri.prototype.parse=function(e,t,n,a){e&&(e=new this.State(e,t,n,a),this.tokenize(e,e.line,e.lineMax))},ri.prototype.State=rK;var lK=ri;function cK(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}for(var uK=function(e,t){for(var n=e.pos;n<e.posMax&&!cK(e.src.charCodeAt(n));)n++;return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)},dK=We.isSpace,pK=function(e,t){var n,a,o,i=e.pos;if(e.src.charCodeAt(i)!==10)return!1;if(n=e.pending.length-1,a=e.posMax,!t)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){for(o=n-1;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(i++;i<a&&dK(e.src.charCodeAt(i));)i++;return e.pos=i,!0},fK=We.isSpace,Xs=[],Kc=0;Kc<256;Kc++)Xs.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Xs[e.charCodeAt(0)]=1});var mK=function(e,t){var n,a=e.pos,o=e.posMax;if(e.src.charCodeAt(a)!==92)return!1;if(a++,a<o){if(n=e.src.charCodeAt(a),n<256&&Xs[n]!==0)return t||(e.pending+=e.src[a]),e.pos+=2,!0;if(n===10){for(t||e.push("hardbreak","br",0),a++;a<o&&(n=e.src.charCodeAt(a),!!fK(n));)a++;return e.pos=a,!0}}return t||(e.pending+="\\"),e.pos++,!0},hK=function(e,t){var n,a,o,i,r,s,l,u=e.pos,c=e.src.charCodeAt(u);if(c!==96)return!1;for(c=u,u++,n=e.posMax;u<n&&e.src.charCodeAt(u)===96;)u++;if(a=e.src.slice(c,u),s=a.length,!(e.backticksScanned&&(e.backticks[s]||0)<=c)){for(i=r=u;(i=e.src.indexOf("`",r))!==-1;){for(r=i+1;r<n&&e.src.charCodeAt(r)===96;)r++;if(l=r-i,l===s)return t||(o=e.push("code_inline","code",0),o.markup=a,o.content=e.src.slice(u,i).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=r,!0;e.backticks[l]=i}e.backticksScanned=!0}return t||(e.pending+=a),e.pos+=s,!0},Ei={};function Yc(e,t){for(var n,a,o,i,r=[],s=t.length,l=0;l<s;l++)a=t[l],a.marker===126&&a.end!==-1&&(o=t[a.end],i=e.tokens[a.token],i.type="s_open",i.tag="s",i.nesting=1,i.markup="~~",i.content="",i=e.tokens[o.token],i.type="s_close",i.tag="s",i.nesting=-1,i.markup="~~",i.content="",e.tokens[o.token-1].type==="text")&&e.tokens[o.token-1].content==="~"&&r.push(o.token-1);for(;r.length;){for(l=r.pop(),n=l+1;n<e.tokens.length&&e.tokens[n].type==="s_close";)n++;n--,l!==n&&(i=e.tokens[n],e.tokens[n]=e.tokens[l],e.tokens[l]=i)}}Ei.tokenize=function(e,t){var n,a,o,i,r,s=e.pos,l=e.src.charCodeAt(s);if(t||l!==126||(a=e.scanDelims(e.pos,!0),i=a.length,r=String.fromCharCode(l),i<2))return!1;for(i%2&&(o=e.push("text","",0),o.content=r,i--),n=0;n<i;n+=2)o=e.push("text","",0),o.content=r+r,e.delimiters.push({marker:l,length:0,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close});return e.pos+=a.length,!0},Ei.postProcess=function(e){var t,n=e.tokens_meta,a=e.tokens_meta.length;for(Yc(e,e.delimiters),t=0;t<a;t++)n[t]&&n[t].delimiters&&Yc(e,n[t].delimiters)};var Bi={};function Zc(e,t){for(var n,a,o,i,r,s=t.length,l=s-1;l>=0;l--)n=t[l],n.marker!==95&&n.marker!==42||n.end!==-1&&(a=t[n.end],r=l>0&&t[l-1].end===n.end+1&&t[l-1].marker===n.marker&&t[l-1].token===n.token-1&&t[n.end+1].token===a.token+1,i=String.fromCharCode(n.marker),o=e.tokens[n.token],o.type=r?"strong_open":"em_open",o.tag=r?"strong":"em",o.nesting=1,o.markup=r?i+i:i,o.content="",o=e.tokens[a.token],o.type=r?"strong_close":"em_close",o.tag=r?"strong":"em",o.nesting=-1,o.markup=r?i+i:i,o.content="",r)&&(e.tokens[t[l-1].token].content="",e.tokens[t[n.end+1].token].content="",l--)}Bi.tokenize=function(e,t){var n,a,o,i=e.pos,r=e.src.charCodeAt(i);if(t||r!==95&&r!==42)return!1;for(a=e.scanDelims(e.pos,r===42),n=0;n<a.length;n++)o=e.push("text","",0),o.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:a.length,token:e.tokens.length-1,end:-1,open:a.can_open,close:a.can_close});return e.pos+=a.length,!0},Bi.postProcess=function(e){var t,n=e.tokens_meta,a=e.tokens_meta.length;for(Zc(e,e.delimiters),t=0;t<a;t++)n[t]&&n[t].delimiters&&Zc(e,n[t].delimiters)};var gK=We.normalizeReference,Er=We.isSpace,vK=function(e,t){var n,a,o,i,r,s,l="",u="",c=e.pos,d=e.posMax,f=e.pos,h=!0;if(e.src.charCodeAt(e.pos)!==91||(i=e.pos+1,o=e.md.helpers.parseLinkLabel(e,e.pos,!0),o<0))return!1;if(r=o+1,r<d&&e.src.charCodeAt(r)===40){for(h=!1,r++;r<d&&(n=e.src.charCodeAt(r),!(!Er(n)&&n!==10));r++);if(r>=d)return!1;if(f=r,s=e.md.helpers.parseLinkDestination(e.src,r,e.posMax),s.ok){for(l=e.md.normalizeLink(s.str),e.md.validateLink(l)?r=s.pos:l="",f=r;r<d&&(n=e.src.charCodeAt(r),!(!Er(n)&&n!==10));r++);if(s=e.md.helpers.parseLinkTitle(e.src,r,e.posMax),r<d&&f!==r&&s.ok)for(u=s.str,r=s.pos;r<d&&(n=e.src.charCodeAt(r),!(!Er(n)&&n!==10));r++);}(r>=d||e.src.charCodeAt(r)!==41)&&(h=!0),r++}if(h){if(typeof e.env.references>"u")return!1;if(r<d&&e.src.charCodeAt(r)===91&&(f=r+1,r=e.md.helpers.parseLinkLabel(e,r),r>=0)?a=e.src.slice(f,r++):r=o+1,a=a||e.src.slice(i,o),s=e.env.references[gK(a)],!s)return e.pos=c,!1;l=s.href,u=s.title}return t||(e.pos=i,e.posMax=o,h=e.push("link_open","a",1),h.attrs=f=[["href",l]],u&&f.push(["title",u]),e.md.inline.tokenize(e),h=e.push("link_close","a",-1)),e.pos=r,e.posMax=d,!0},bK=We.normalizeReference,Br=We.isSpace,_K=function(e,t){var n,a,o,i,r,s,l,u,c="",d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(o=e.pos+2,a=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),a<0))return!1;if(i=a+1,i<f&&e.src.charCodeAt(i)===40){for(i++;i<f&&(n=e.src.charCodeAt(i),!(!Br(n)&&n!==10));i++);if(i>=f)return!1;for(u=i,r=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),r.ok&&(c=e.md.normalizeLink(r.str),e.md.validateLink(c)?i=r.pos:c=""),u=i;i<f&&(n=e.src.charCodeAt(i),!(!Br(n)&&n!==10));i++);if(r=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<f&&u!==i&&r.ok)for(s=r.str,i=r.pos;i<f&&(n=e.src.charCodeAt(i),!(!Br(n)&&n!==10));i++);else s="";if(i>=f||e.src.charCodeAt(i)!==41)return e.pos=d,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<f&&e.src.charCodeAt(i)===91&&(u=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0)?l=e.src.slice(u,i++):i=a+1,l=l||e.src.slice(o,a),r=e.env.references[bK(l)],!r)return e.pos=d,!1;c=r.href,s=r.title}return t||(u=e.src.slice(o,a),e.md.inline.parse(u,e.md,e.env,l=[]),d=e.push("image","img",0),d.attrs=r=[["src",c],["alt",""]],d.children=l,d.content=u,s&&r.push(["title",s])),e.pos=i,e.posMax=f,!0},yK=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,wK=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/,SK=function(e,t){var n,a,o,i,r,s=e.pos;if(e.src.charCodeAt(s)!==60)return!1;for(i=e.pos,r=e.posMax;;){if(++s>=r||(o=e.src.charCodeAt(s),o===60))return!1;if(o===62)break}return i=e.src.slice(i+1,s),wK.test(i)?(n=e.md.normalizeLink(i),!!e.md.validateLink(n)&&(t||(a=e.push("link_open","a",1),a.attrs=[["href",n]],a.markup="autolink",a.info="auto",a=e.push("text","",0),a.content=e.md.normalizeLinkText(i),a=e.push("link_close","a",-1),a.markup="autolink",a.info="auto"),e.pos+=i.length+2,!0)):!!yK.test(i)&&(n=e.md.normalizeLink("mailto:"+i),!!e.md.validateLink(n))&&(t||(a=e.push("link_open","a",1),a.attrs=[["href",n]],a.markup="autolink",a.info="auto",a=e.push("text","",0),a.content=e.md.normalizeLinkText(i),a=e.push("link_close","a",-1),a.markup="autolink",a.info="auto"),e.pos+=i.length+2,!0)},kK=Li.HTML_TAG_RE;function xK(e){return e|=32,e>=97&&e<=122}var CK=function(e,t){var n,a=e.pos;return!!e.md.options.html&&(n=e.posMax,!(e.src.charCodeAt(a)!==60||a+2>=n))&&(n=e.src.charCodeAt(a+1),!(n!==33&&n!==63&&n!==47&&!xK(n)))&&(n=e.src.slice(a).match(kK),!!n)&&(t||(t=e.push("html_inline","",0),t.content=e.src.slice(a,a+n[0].length)),e.pos+=n[0].length,!0)},Xc=Wp,QK=We.has,AK=We.isValidEntityCode,eu=We.fromCodePoint,IK=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,qK=/^&([a-z][a-z0-9]{1,31});/i,TK=function(e,t){var n,a=e.pos,o=e.posMax;if(e.src.charCodeAt(a)!==38)return!1;if(a+1<o){if(o=e.src.charCodeAt(a+1),o===35){if(n=e.src.slice(a).match(IK),n)return t||(o=n[1][0].toLowerCase()==="x"?parseInt(n[1].slice(1),16):parseInt(n[1],10),e.pending+=AK(o)?eu(o):eu(65533)),e.pos+=n[0].length,!0}else if(n=e.src.slice(a).match(qK),n&&QK(Xc,n[1]))return t||(e.pending+=Xc[n[1]]),e.pos+=n[0].length,!0}return t||(e.pending+="&"),e.pos++,!0};function tu(e,t){var n,a,o,i,r,s,l={},u=t.length;if(u){for(var c=0,d=-2,f=[],h=0;h<u;h++)if(a=t[h],f.push(0),t[c].marker===a.marker&&d===a.token-1||(c=h),d=a.token,a.length=a.length||0,a.close){for(l.hasOwnProperty(a.marker)||(l[a.marker]=[-1,-1,-1,-1,-1,-1]),i=l[a.marker][(a.open?3:0)+a.length%3],n=c-f[c]-1,r=n;n>i;n-=f[n]+1)if(o=t[n],o.marker===a.marker&&o.open&&o.end<0&&(s=!1,!o.close&&!a.open||(o.length+a.length)%3!==0||o.length%3===0&&a.length%3===0||(s=!0),!s)){s=n>0&&!t[n-1].open?f[n-1]+1:0,f[h]=h-n+s,f[n]=s,a.open=!1,o.end=h,o.close=!1,r=-1,d=-2;break}r!==-1&&(l[a.marker][(a.open?3:0)+(a.length||0)%3]=r)}}}var LK=function(e){var t,n=e.tokens_meta,a=e.tokens_meta.length;for(tu(e,e.delimiters),t=0;t<a;t++)n[t]&&n[t].delimiters&&tu(e,n[t].delimiters)},EK=function(e){for(var t,n=0,a=e.tokens,o=e.tokens.length,i=t=0;i<o;i++)a[i].nesting<0&&n--,a[i].level=n,a[i].nesting>0&&n++,a[i].type==="text"&&i+1<o&&a[i+1].type==="text"?a[i+1].content=a[i].content+a[i+1].content:(i!==t&&(a[t]=a[i]),t++);i!==t&&(a.length=t)},Dr=Zs,nu=We.isWhiteSpace,ou=We.isPunctChar,au=We.isMdAsciiPunct;function ca(e,t,n,a){this.src=e,this.env=n,this.md=t,this.tokens=a,this.tokens_meta=Array(a.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1}ca.prototype.pushPending=function(){var e=new Dr("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},ca.prototype.push=function(e,t,n){return this.pending&&this.pushPending(),e=new Dr(e,t,n),t=null,n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),e.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],t={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(e),this.tokens_meta.push(t),e},ca.prototype.scanDelims=function(e,t){for(var n,a,o,i,r=e,s=!0,l=!0,u=this.posMax,c=this.src.charCodeAt(e),d=e>0?this.src.charCodeAt(e-1):32;r<u&&this.src.charCodeAt(r)===c;)r++;return e=r-e,o=r<u?this.src.charCodeAt(r):32,a=au(d)||ou(String.fromCharCode(d)),i=au(o)||ou(String.fromCharCode(o)),d=nu(d),o=nu(o),(o||i&&!d&&!a)&&(s=!1),(d||a&&!o&&!i)&&(l=!1),d=t?(n=s,l):(n=s&&(!l||a),l&&(!s||i)),{can_open:n,can_close:d,length:e}},ca.prototype.Token=Dr;var BK=ca,iu=Ys,Pr=[["text",uK],["newline",pK],["escape",mK],["backticks",hK],["strikethrough",Ei.tokenize],["emphasis",Bi.tokenize],["link",vK],["image",_K],["autolink",SK],["html_inline",CK],["entity",TK]],jr=[["balance_pairs",LK],["strikethrough",Ei.postProcess],["emphasis",Bi.postProcess],["text_collapse",EK]];function ua(){var e;for(this.ruler=new iu,e=0;e<Pr.length;e++)this.ruler.push(Pr[e][0],Pr[e][1]);for(this.ruler2=new iu,e=0;e<jr.length;e++)this.ruler2.push(jr[e][0],jr[e][1])}ua.prototype.skipToken=function(e){var t,n,a=e.pos,o=this.ruler.getRules(""),i=o.length,r=e.md.options.maxNesting,s=e.cache;if(typeof s[a]<"u")e.pos=s[a];else{if(e.level<r)for(n=0;n<i&&(e.level++,t=o[n](e,!0),e.level--,!t);n++);else e.pos=e.posMax;t||e.pos++,s[a]=e.pos}},ua.prototype.tokenize=function(e){for(var t,n,a=this.ruler.getRules(""),o=a.length,i=e.posMax,r=e.md.options.maxNesting;e.pos<i;){if(e.level<r)for(n=0;n<o&&(t=a[n](e,!1),!t);n++);if(t){if(e.pos>=i)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},ua.prototype.parse=function(e,t,n,a){var o,i,r,s=new this.State(e,t,n,a);for(this.tokenize(s),i=this.ruler2.getRules(""),r=i.length,o=0;o<r;o++)i[o](s)},ua.prototype.State=BK;var DK=ua,PK=function(e){var t={},n=(t.src_Any=Jp.source,t.src_Cc=Gp.source,t.src_Z=Kp.source,t.src_P=ms.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|"),"[><｜]");return t.src_pseudo_letter="(?:(?!"+n+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+n+"|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+").|;(?!"+t.src_ZCc+").|\\!+(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t};function gs(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(n){n&&Object.keys(n).forEach(function(a){e[a]=n[a]})}),e}function ir(e){return Object.prototype.toString.call(e)}function jK(e){return ir(e)==="[object String]"}function MK(e){return ir(e)==="[object Object]"}function $K(e){return ir(e)==="[object RegExp]"}function ru(e){return ir(e)==="[object Function]"}function RK(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var nf={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function OK(e){return Object.keys(e||{}).reduce(function(t,n){return t||nf.hasOwnProperty(n)},!1)}var FK={"http:":{validate:function(e,t,n){return e=e.slice(t),n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(e)?e.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){var a=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),!n.re.no_http.test(a)||t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:a.match(n.re.no_http)[0].length}},"mailto:":{validate:function(e,t,n){return e=e.slice(t),n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(e)?e.match(n.re.mailto)[0].length:0}}},zK="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",NK="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function VK(e){e.__index__=-1,e.__text_cache__=""}function HK(e){return function(t,n){return t=t.slice(n),e.test(t)?t.match(e)[0].length:0}}function su(){return function(e,t){t.normalize(e)}}function si(e){var t=e.re=PK(e.__opts__),n=e.__tlds__.slice();function a(r){return r.replace("%TLDS%",t.src_tlds)}e.onCompile(),e.__tlds_replaced__||n.push(zK),n.push(t.src_xn),t.src_tlds=n.join("|"),t.email_fuzzy=RegExp(a(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(a(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(a(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(a(t.tpl_host_fuzzy_test),"i");var o=[];function i(r,s){throw new Error('(LinkifyIt) Invalid schema "'+r+'": '+s)}e.__compiled__={},Object.keys(e.__schemas__).forEach(function(r){var s,l=e.__schemas__[r];l!==null&&(s={validate:null,link:null},e.__compiled__[r]=s,MK(l)?($K(l.validate)?s.validate=HK(l.validate):ru(l.validate)?s.validate=l.validate:i(r,l),ru(l.normalize)?s.normalize=l.normalize:l.normalize?i(r,l):s.normalize=su()):jK(l)?o.push(r):i(r,l))}),o.forEach(function(r){e.__compiled__[e.__schemas__[r]]&&(e.__compiled__[r].validate=e.__compiled__[e.__schemas__[r]].validate,e.__compiled__[r].normalize=e.__compiled__[e.__schemas__[r]].normalize)}),e.__compiled__[""]={validate:null,normalize:su()},n=Object.keys(e.__compiled__).filter(function(r){return r.length>0&&e.__compiled__[r]}).map(RK).join("|"),e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+n+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+n+")","ig"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),VK(e)}function UK(e,t){var n=e.__index__,a=e.__last_index__,o=e.__text_cache__.slice(n,a);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=a+t,this.raw=o,this.text=o,this.url=o}function lu(e,t){return t=new UK(e,t),e.__compiled__[t.schema].normalize(t,e),t}function Vt(e,t){if(!(this instanceof Vt))return new Vt(e,t);t||OK(e)&&(t=e,e={}),this.__opts__=gs({},nf,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=gs({},FK,e),this.__compiled__={},this.__tlds__=NK,this.__tlds_replaced__=!1,this.re={},si(this)}Vt.prototype.add=function(e,t){return this.__schemas__[e]=t,si(this),this},Vt.prototype.set=function(e){return this.__opts__=gs(this.__opts__,e),this},Vt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var t,n,a,o,i;if(this.re.schema_test.test(e)){for(o=this.re.schema_search,o.lastIndex=0;(t=o.exec(e))!==null;)if(n=this.testSchemaAt(e,t[2],o.lastIndex),n){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(i=e.search(this.re.host_fuzzy_test),i>=0)&&(this.__index__<0||i<this.__index__)&&(i=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=i.index+i[1].length,this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=i.index+i[0].length),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(i=e.indexOf("@"),i>=0)&&(i=e.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,i=i.index+i[0].length,this.__index__<0||a<this.__index__||a===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=i),this.__index__>=0},Vt.prototype.pretest=function(e){return this.re.pretest.test(e)},Vt.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},Vt.prototype.match=function(e){for(var t=0,n=[],a=(this.__index__>=0&&this.__text_cache__===e&&(n.push(lu(this,t)),t=this.__last_index__),t?e.slice(t):e);this.test(a);)n.push(lu(this,t)),a=a.slice(this.__last_index__),t+=this.__last_index__;return n.length?n:null},Vt.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(n,a,o){return n!==o[a-1]}).reverse(),si(this)):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,si(this)),this},Vt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema!=="mailto:"||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},Vt.prototype.onCompile=function(){};var WK=Vt;const zo=2147483647,un=36,el=1,Ta=26,JK=38,GK=700,of=72,af=128,rf="-",KK=/^xn--/,YK=/[^\0-\x7F]/,ZK=/[\x2E\u3002\uFF0E\uFF61]/g,XK={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Mr=un-el,dn=Math.floor,$r=String.fromCharCode;function Mn(e){throw new RangeError(XK[e])}function eY(e,t){const n=[];let a=e.length;for(;a--;)n[a]=t(e[a]);return n}function sf(e,t){const n=e.split("@");let a="";n.length>1&&(a=n[0]+"@",e=n[1]),e=e.replace(ZK,".");const o=e.split("."),i=eY(o,t).join(".");return a+i}function tl(e){const t=[];let n=0;const a=e.length;for(;n<a;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const i=e.charCodeAt(n++);(64512&i)==56320?t.push(((1023&o)<<10)+(1023&i)+65536):(t.push(o),n--)}else t.push(o)}return t}const lf=e=>String.fromCodePoint(...e),tY=function(e){return e>=48&&e<58?e-48+26:e>=65&&e<91?e-65:e>=97&&e<123?e-97:un},cu=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},cf=function(e,t,n){let a=0;for(e=n?dn(e/GK):e>>1,e+=dn(e/t);e>Mr*Ta>>1;a+=un)e=dn(e/Mr);return dn(a+(Mr+1)*e/(e+JK))},nl=function(e){const t=[],n=e.length;let a=0,o=af,i=of,r=e.lastIndexOf(rf);r<0&&(r=0);for(let s=0;s<r;++s)e.charCodeAt(s)>=128&&Mn("not-basic"),t.push(e.charCodeAt(s));for(let s=r>0?r+1:0;s<n;){const l=a;for(let c=1,d=un;;d+=un){s>=n&&Mn("invalid-input");const f=tY(e.charCodeAt(s++)),h=(f>=un&&Mn("invalid-input"),f>dn((zo-a)/c)&&Mn("overflow"),a+=f*c,d<=i?el:d>=i+Ta?Ta:d-i);if(f<h)break;const _=un-h;c>dn(zo/_)&&Mn("overflow"),c*=_}const u=t.length+1;i=cf(a-l,u,l==0),dn(a/u)>zo-o&&Mn("overflow"),o+=dn(a/u),a%=u,t.splice(a++,0,o)}return String.fromCodePoint(...t)},ol=function(e){const t=[],n=(e=tl(e),e.length);let a=af,o=0,i=of;for(var r of e)r<128&&t.push($r(r));const s=t.length;let l=s;for(s&&t.push(rf);l<n;){let d=zo;for(var u of e)u>=a&&u<d&&(d=u);const f=l+1;d-a>dn((zo-o)/f)&&Mn("overflow"),o+=(d-a)*f,a=d;for(var c of e)if(c<a&&++o>zo&&Mn("overflow"),c===a){let h=o;for(let _=un;;_+=un){const I=_<=i?el:_>=i+Ta?Ta:_-i;if(h<I)break;const C=h-I,g=un-I;t.push($r(cu(I+C%g,0))),h=dn(C/g)}t.push($r(cu(h,0))),i=cf(o,f,l===s),o=0,++l}++o,++a}return t.join("")},uf=function(e){return sf(e,function(t){return KK.test(t)?nl(t.slice(4).toLowerCase()):t})},df=function(e){return sf(e,function(t){return YK.test(t)?"xn--"+ol(t):t})},nY={version:"2.3.1",ucs2:{decode:tl,encode:lf},decode:nl,encode:ol,toASCII:df,toUnicode:uf};var oY=Object.freeze({__proto__:null,ucs2decode:tl,ucs2encode:lf,decode:nl,encode:ol,toASCII:df,toUnicode:uf,default:nY}),aY=y_(oY),iY={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},rY={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}},sY={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}},ya=We,lY=ai,cY=sG,uY=TG,dY=lK,pY=DK,fY=WK,no=Do,pf=aY,mY={default:iY,zero:rY,commonmark:sY},hY=/^(vbscript|javascript|file|data):/,gY=/^data:image\/(gif|png|jpeg|webp);/;function vY(e){return e=e.trim().toLowerCase(),!hY.test(e)||!!gY.test(e)}var ff=["http:","https:","mailto:"];function bY(e){if(e=no.parse(e,!0),e.hostname&&(!e.protocol||ff.indexOf(e.protocol)>=0))try{e.hostname=pf.toASCII(e.hostname)}catch{}return no.encode(no.format(e))}function _Y(e){if(e=no.parse(e,!0),e.hostname&&(!e.protocol||ff.indexOf(e.protocol)>=0))try{e.hostname=pf.toUnicode(e.hostname)}catch{}return no.decode(no.format(e),no.decode.defaultChars+"%")}function Ht(e,t){if(!(this instanceof Ht))return new Ht(e,t);t||ya.isString(e)||(t=e||{},e="default"),this.inline=new pY,this.block=new dY,this.core=new uY,this.renderer=new cY,this.linkify=new fY,this.validateLink=vY,this.normalizeLink=bY,this.normalizeLinkText=_Y,this.utils=ya,this.helpers=ya.assign({},lY),this.options={},this.configure(e),t&&this.set(t)}Ht.prototype.set=function(e){return ya.assign(this.options,e),this},Ht.prototype.configure=function(e){var t,n=this;if(ya.isString(e)&&(t=e,e=mY[t],!e))throw new Error('Wrong `markdown-it` preset "'+t+'", check name');if(e)return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(a){e.components[a].rules&&n[a].ruler.enableOnly(e.components[a].rules),e.components[a].rules2&&n[a].ruler2.enableOnly(e.components[a].rules2)}),this;throw new Error("Wrong `markdown-it` preset, can't be empty")},Ht.prototype.enable=function(e,t){var n=[],a=(Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0)),e.filter(function(o){return n.indexOf(o)<0}));if(a.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+a);return this},Ht.prototype.disable=function(e,t){var n=[],a=(Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(o){n=n.concat(this[o].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0)),e.filter(function(o){return n.indexOf(o)<0}));if(a.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+a);return this},Ht.prototype.use=function(e){var t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},Ht.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");return e=new this.core.State(e,this,t),this.core.process(e),e.tokens},Ht.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},Ht.prototype.parseInline=function(e,t){return e=new this.core.State(e,this,t),e.inlineMode=!0,this.core.process(e),e.tokens},Ht.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};var yY=Ht,wY=yY,uu={exports:{}},SY=(function(e){(function(t){e.exports=t()})(function(){return function(t){var n={};function a(o){var i;return(n[o]||(i=n[o]={exports:{},id:o,loaded:!1},t[o].call(i.exports,i,i.exports,a),i.loaded=!0,i)).exports}return a.m=t,a.c=n,a.p="",a(0)}([function(t,n,a){var o=a(2),i=a(1);function r(s,l){return function(u,c){var d,f,h,_,I,C,g,y="",w="",v="",x=u.pos,L=u.posMax;if(u.src.charCodeAt(u.pos)!==33||u.src.charCodeAt(u.pos+1)!==91||(h=u.pos+2,f=s.helpers.parseLinkLabel(u,u.pos+1,!1),f<0))return!1;if(_=f+1,_<L&&u.src.charCodeAt(_)===40){for(_++;_<L&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(_>=L)return!1;for(g=_,I=s.helpers.parseLinkDestination(u.src,_,u.posMax),I.ok&&(v=u.md.normalizeLink(I.str),u.md.validateLink(v)?_=I.pos:v=""),g=_;_<L&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(I=s.helpers.parseLinkTitle(u.src,_,u.posMax),_<L&&g!==_&&I.ok)for(C=I.str,_=I.pos;_<L&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);else C="";if(_-1>=0&&(d=u.src.charCodeAt(_-1),d===32)&&(I=i(u.src,_,u.posMax),I.ok))for(y=I.width,w=I.height,_=I.pos;_<L&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(_>=L||u.src.charCodeAt(_)!==41)return u.pos=x,!1;_++}else{if(typeof u.env.references>"u")return!1;for(;_<L&&(d=u.src.charCodeAt(_),!(d!==32&&d!==10));_++);if(_<L&&u.src.charCodeAt(_)===91&&(g=_+1,_=s.helpers.parseLinkLabel(u,_),_>=0)?q=u.src.slice(g,_++):_=f+1,q=q||u.src.slice(h,f),I=u.env.references[s.utils.normalizeReference(q)],!I)return u.pos=x,!1;v=I.href,C=I.title}if(!c){u.pos=h,u.posMax=f;var q=new u.md.inline.State(u.src.slice(h,f),u.md,u.env,g=[]);if(q.md.inline.tokenize(q),l&&l.autofill&&y===""&&w==="")try{var T=o(v),y=T.width,w=T.height}catch{}x=u.push("image","img",0),x.attrs=I=[["src",v],["alt",""]],x.children=g,C&&I.push(["title",C]),y!==""&&I.push(["width",y]),w!==""&&I.push(["height",w])}return u.pos=_,u.posMax=L,!0}}t.exports=function(s,l){s.inline.ruler.before("emphasis","image",r(s,l))}},function(t,n,a){function o(i,r,s){for(var l=r,u={ok:!1,pos:r,value:""},c=i.charCodeAt(r);r<s&&c>=48&&c<=57||c===37;)c=i.charCodeAt(++r);return u.ok=!0,u.pos=r,u.value=i.slice(l,r),u}t.exports=function(i,r,s){var l,u,c={ok:!1,pos:0,width:"",height:""};return r>=s||(u=i.charCodeAt(r),u!==61)||(r++,u=i.charCodeAt(r),u!==120&&(u<48||u>57))||(l=o(i,r,s),r=l.pos,u=i.charCodeAt(r),u===120&&(r++,u=o(i,r,s),r=u.pos,c.width=l.value,c.height=u.value,c.pos=r,c.ok=!0)),c}},function(t,n,a){(function(o){var i=a(16),r=a(6),s=a(3),l={},u=a(5),c=(u.forEach(function(_){l[_]=a(4)("./"+_)}),131072);function d(_,I){var C=s(_,I);if(C in l&&(_=l[C].calculate(_,I),_!==!1))return _.type=C,_;throw new TypeError("Unsupported file type")}function f(_,I){i.open(_,"r",function(y,g){if(y)return I(y);var y=i.fstatSync(g).size,y=Math.min(y,c),w=new o(y);i.read(g,w,0,y,0,function(v){if(v)return I(v);i.close(g,function(x){I(x,w)})})})}function h(I){var I=i.openSync(I,"r"),C=i.fstatSync(I).size,C=Math.min(C,c),g=new o(C);return i.readSync(I,g,0,C,0),i.closeSync(I),g}t.exports=function(_,I){if(typeof _!="string")throw new TypeError("Input must be file name");var C=r.resolve(_);if(typeof I!="function")return _=h(C),d(_,C);f(C,function(g,y){if(g)return I(g);var w;try{w=d(y,C)}catch(v){g=v}I(g,w)})}}).call(n,a(7).Buffer)},function(t,n,a){var o={},i=a(5);i.forEach(function(r){o[r]=a(4)("./"+r).detect}),t.exports=function(r,s){var l,u;for(l in o)if(l in o&&(u=o[l](r,s),u))return l;throw new TypeError("Unsupported type")}},function(t,n,a){var o={"./bmp":8,"./bmp.js":8,"./gif":9,"./gif.js":9,"./jpg":10,"./jpg.js":10,"./png":11,"./png.js":11,"./psd":12,"./psd.js":12,"./svg":13,"./svg.js":13,"./tiff":14,"./tiff.js":14,"./webp":15,"./webp.js":15};function i(s){return a(r(s))}function r(s){return o[s]||function(){throw new Error("Cannot find module '"+s+"'.")}()}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id=4},function(t,n,a){t.exports=["bmp","gif","jpg","png","tiff"]},function(t,n,a){(function(o){function i(c,d){for(var f=0,h=c.length-1;h>=0;h--){var _=c[h];_==="."?c.splice(h,1):_===".."?(c.splice(h,1),f++):f&&(c.splice(h,1),f--)}if(d)for(;f--;f)c.unshift("..");return c}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,s=function(c){return r.exec(c).slice(1)};function l(c,d){if(c.filter)return c.filter(d);for(var f=[],h=0;h<c.length;h++)d(c[h],h,c)&&f.push(c[h]);return f}n.resolve=function(){for(var c="",d=!1,f=arguments.length-1;f>=-1&&!d;f--){var h=f>=0?arguments[f]:o.cwd();if(typeof h!="string")throw new TypeError("Arguments to path.resolve must be strings");h&&(c=h+"/"+c,d=h.charAt(0)==="/")}return c=i(l(c.split("/"),function(_){return!!_}),!d).join("/"),(d?"/":"")+c||"."},n.normalize=function(c){var d=n.isAbsolute(c),f=u(c,-1)==="/";return c=i(l(c.split("/"),function(h){return!!h}),!d).join("/"),c||d||(c="."),c&&f&&(c+="/"),(d?"/":"")+c},n.isAbsolute=function(c){return c.charAt(0)==="/"},n.join=function(){var c=Array.prototype.slice.call(arguments,0);return n.normalize(l(c,function(d,f){if(typeof d!="string")throw new TypeError("Arguments to path.join must be strings");return d}).join("/"))},n.relative=function(c,d){function f(w){for(var v=0;v<w.length&&w[v]==="";v++);for(var x=w.length-1;x>=0&&w[x]==="";x--);return v>x?[]:w.slice(v,x-v+1)}c=n.resolve(c).substr(1),d=n.resolve(d).substr(1);for(var h=f(c.split("/")),_=f(d.split("/")),I=Math.min(h.length,_.length),C=I,g=0;g<I;g++)if(h[g]!==_[g]){C=g;break}for(var y=[],g=C;g<h.length;g++)y.push("..");return y=y.concat(_.slice(C)),y.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(f){var f=s(f),d=f[0],f=f[1];return d||f?(f=f&&f.substr(0,f.length-1),d+f):"."},n.basename=function(c,d){return c=s(c)[2],d&&c.substr(-1*d.length)===d&&(c=c.substr(0,c.length-d.length)),c},n.extname=function(c){return s(c)[3]};var u="ab".substr(-1)==="b"?function(c,d,f){return c.substr(d,f)}:function(c,d,f){return d<0&&(d=c.length+d),c.substr(d,f)}}).call(n,a(18))},function(t,n,a){(function(c){var i=a(21),r=a(19),s=a(20),l=(n.Buffer=c,n.SlowBuffer=d,n.INSPECT_MAX_BYTES=50,c.poolSize=8192,1073741823),u={};function c(m,k){var Q=this;if(!(Q instanceof c))return new c(m,k);var U,V,A=typeof m;if(A==="number")U=+m;else if(A==="string")U=c.byteLength(m,k);else{if(A!=="object"||m===null)throw new TypeError("must start with number, buffer, array or string");m.type==="Buffer"&&s(m.data)&&(m=m.data),U=+m.length}if(U>l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");if(U<0?U=0:U>>>=0,c.TYPED_ARRAY_SUPPORT?Q=c._augment(new Uint8Array(U)):(Q.length=U,Q._isBuffer=!0),c.TYPED_ARRAY_SUPPORT&&typeof m.byteLength=="number")Q._set(m);else if(ge(m))if(c.isBuffer(m))for(V=0;V<U;V++)Q[V]=m.readUInt8(V);else for(V=0;V<U;V++)Q[V]=(m[V]%256+256)%256;else if(A==="string")Q.write(m,0,k);else if(A==="number"&&!c.TYPED_ARRAY_SUPPORT)for(V=0;V<U;V++)Q[V]=0;return U>0&&U<=c.poolSize&&(Q.parent=u),Q}function d(m,k){var Q;return this instanceof d?(Q=new c(m,k),delete Q.parent,Q):new d(m,k)}function f(m,k,Q,U){Q=Number(Q)||0;var V=m.length-Q,V=((!U||(U=Number(U),U>V))&&(U=V),k.length);if(V%2!==0)throw new Error("Invalid hex string");U>V/2&&(U=V/2);for(var A=0;A<U;A++){var P=parseInt(k.substr(2*A,2),16);if(isNaN(P))throw new Error("Invalid hex string");m[Q+A]=P}return A}function h(m,k,Q,U){return k=Qe(H(k,m.length-Q),m,Q,U),k}function _(m,k,Q,U){return k=Qe(F(k),m,Q,U),k}function I(m,k,Q,U){return _(m,k,Q,U)}function C(m,k,Q,U){return k=Qe(ke(k),m,Q,U),k}function g(m,k,Q,U){return k=Qe(le(k,m.length-Q),m,Q,U),k}function y(m,k,Q){return k===0&&Q===m.length?i.fromByteArray(m):i.fromByteArray(m.slice(k,Q))}function w(m,k,Q){var U="",V="";Q=Math.min(m.length,Q);for(var A=k;A<Q;A++)m[A]<=127?(U+=ie(V)+String.fromCharCode(m[A]),V=""):V+="%"+m[A].toString(16);return U+ie(V)}function v(m,k,Q){var U="";Q=Math.min(m.length,Q);for(var V=k;V<Q;V++)U+=String.fromCharCode(127&m[V]);return U}function x(m,k,Q){var U="";Q=Math.min(m.length,Q);for(var V=k;V<Q;V++)U+=String.fromCharCode(m[V]);return U}function L(m,k,Q){for(var U=m.length,V=((!k||k<0)&&(k=0),(!Q||Q<0||Q>U)&&(Q=U),""),A=k;A<Q;A++)V+=Ie(m[A]);return V}function q(m,k,Q){for(var U=m.slice(k,Q),V="",A=0;A<U.length;A+=2)V+=String.fromCharCode(U[A]+256*U[A+1]);return V}function T(m,k,Q){if(m%1!==0||m<0)throw new RangeError("offset is not uint");if(m+k>Q)throw new RangeError("Trying to access beyond buffer length")}function M(m,k,Q,U,V,A){if(!c.isBuffer(m))throw new TypeError("buffer must be a Buffer instance");if(k>V||k<A)throw new RangeError("value is out of bounds");if(Q+U>m.length)throw new RangeError("index out of range")}function $(m,k,Q,U){k<0&&(k=65535+k+1);for(var V=0,A=Math.min(m.length-Q,2);V<A;V++)m[Q+V]=(k&255<<8*(U?V:1-V))>>>8*(U?V:1-V)}function z(m,k,Q,U){k<0&&(k=4294967295+k+1);for(var V=0,A=Math.min(m.length-Q,4);V<A;V++)m[Q+V]=k>>>8*(U?V:3-V)&255}function O(m,k,Q,U,V,A){if(k>V||k<A)throw new RangeError("value is out of bounds");if(Q+U>m.length)throw new RangeError("index out of range");if(Q<0)throw new RangeError("index out of range")}function Y(m,k,Q,U,V){return V||O(m,k,Q,4,34028234663852886e22,-34028234663852886e22),r.write(m,k,Q,U,23,4),Q+4}function B(m,k,Q,U,V){return V||O(m,k,Q,8,17976931348623157e292,-17976931348623157e292),r.write(m,k,Q,U,52,8),Q+8}c.TYPED_ARRAY_SUPPORT=function(){try{var m=new ArrayBuffer(0),k=new Uint8Array(m);return k.foo=function(){return 42},k.foo()===42&&typeof k.subarray=="function"&&new Uint8Array(1).subarray(1,1).byteLength===0}catch{return!1}}(),c.isBuffer=function(m){return!(m==null||!m._isBuffer)},c.compare=function(m,k){if(!c.isBuffer(m)||!c.isBuffer(k))throw new TypeError("Arguments must be Buffers");if(m===k)return 0;for(var Q=m.length,U=k.length,V=0,A=Math.min(Q,U);V<A&&m[V]===k[V];V++);return V!==A&&(Q=m[V],U=k[V]),Q<U?-1:U<Q?1:0},c.isEncoding=function(m){switch(String(m).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(m,k){if(!s(m))throw new TypeError("list argument must be an Array of Buffers.");if(m.length===0)return new c(0);if(m.length===1)return m[0];if(k===void 0)for(k=0,V=0;V<m.length;V++)k+=m[V].length;for(var Q=new c(k),U=0,V=0;V<m.length;V++){var A=m[V];A.copy(Q,U),U+=A.length}return Q},c.byteLength=function(m,k){var Q;switch(m+="",k||"utf8"){case"ascii":case"binary":case"raw":Q=m.length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":Q=2*m.length;break;case"hex":Q=m.length>>>1;break;case"utf8":case"utf-8":Q=H(m).length;break;case"base64":Q=ke(m).length;break;default:Q=m.length}return Q},c.prototype.length=void 0,c.prototype.parent=void 0,c.prototype.toString=function(m,k,Q){var U=!1;if(k>>>=0,Q=Q===void 0||Q===1/0?this.length:Q>>>0,m=m||"utf8",k<0&&(k=0),Q>this.length&&(Q=this.length),Q<=k)return"";for(;;)switch(m){case"hex":return L(this,k,Q);case"utf8":case"utf-8":return w(this,k,Q);case"ascii":return v(this,k,Q);case"binary":return x(this,k,Q);case"base64":return y(this,k,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,k,Q);default:if(U)throw new TypeError("Unknown encoding: "+m);m=(m+"").toLowerCase(),U=!0}},c.prototype.equals=function(m){if(c.isBuffer(m))return this===m||c.compare(this,m)===0;throw new TypeError("Argument must be a Buffer")},c.prototype.inspect=function(){var m="",k=n.INSPECT_MAX_BYTES;return this.length>0&&(m=this.toString("hex",0,k).match(/.{2}/g).join(" "),this.length>k)&&(m+=" ... "),"<Buffer "+m+">"},c.prototype.compare=function(m){if(c.isBuffer(m))return this===m?0:c.compare(this,m);throw new TypeError("Argument must be a Buffer")},c.prototype.indexOf=function(m,k){if(k>2147483647?k=2147483647:k<-2147483648&&(k=-2147483648),k>>=0,this.length===0||k>=this.length)return-1;if(k<0&&(k=Math.max(this.length+k,0)),typeof m=="string")return m.length===0?-1:String.prototype.indexOf.call(this,m,k);if(c.isBuffer(m))return Q(this,m,k);if(typeof m=="number")return c.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==="function"?Uint8Array.prototype.indexOf.call(this,m,k):Q(this,[m],k);function Q(U,V,A){for(var P=-1,K=0;A+K<U.length;K++)if(U[A+K]===V[P===-1?0:K-P]){if(P===-1&&(P=K),K-P+1===V.length)return A+P}else P=-1;return-1}throw new TypeError("val must be string, number or Buffer")},c.prototype.get=function(m){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(m)},c.prototype.set=function(m,k){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(m,k)},c.prototype.write=function(m,k,Q,U){if(isFinite(k)?isFinite(Q)||(U=Q,Q=void 0):(A=U,U=k,k=Q,Q=A),k=Number(k)||0,Q<0||k<0||k>this.length)throw new RangeError("attempt to write outside buffer bounds");var V,A=this.length-k;switch((!Q||(Q=Number(Q),Q>A))&&(Q=A),U=String(U||"utf8").toLowerCase(),U){case"hex":V=f(this,m,k,Q);break;case"utf8":case"utf-8":V=h(this,m,k,Q);break;case"ascii":V=_(this,m,k,Q);break;case"binary":V=I(this,m,k,Q);break;case"base64":V=C(this,m,k,Q);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":V=g(this,m,k,Q);break;default:throw new TypeError("Unknown encoding: "+U)}return V},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.slice=function(m,k){var Q=this.length;if(m=~~m,k=k===void 0?Q:~~k,m<0?(m+=Q,m<0&&(m=0)):m>Q&&(m=Q),k<0?(k+=Q,k<0&&(k=0)):k>Q&&(k=Q),k<m&&(k=m),c.TYPED_ARRAY_SUPPORT)V=c._augment(this.subarray(m,k));else for(var U=k-m,V=new c(U,void 0),A=0;A<U;A++)V[A]=this[A+m];return V.length&&(V.parent=this.parent||this),V},c.prototype.readUIntLE=function(m,k,Q){m>>>=0,k>>>=0,Q||T(m,k,this.length);for(var U=this[m],V=1,A=0;++A<k&&(V*=256);)U+=this[m+A]*V;return U},c.prototype.readUIntBE=function(m,k,Q){m>>>=0,k>>>=0,Q||T(m,k,this.length);for(var U=this[m+--k],V=1;k>0&&(V*=256);)U+=this[m+--k]*V;return U},c.prototype.readUInt8=function(m,k){return k||T(m,1,this.length),this[m]},c.prototype.readUInt16LE=function(m,k){return k||T(m,2,this.length),this[m]|this[m+1]<<8},c.prototype.readUInt16BE=function(m,k){return k||T(m,2,this.length),this[m]<<8|this[m+1]},c.prototype.readUInt32LE=function(m,k){return k||T(m,4,this.length),(this[m]|this[m+1]<<8|this[m+2]<<16)+16777216*this[m+3]},c.prototype.readUInt32BE=function(m,k){return k||T(m,4,this.length),16777216*this[m]+(this[m+1]<<16|this[m+2]<<8|this[m+3])},c.prototype.readIntLE=function(m,k,Q){m>>>=0,k>>>=0,Q||T(m,k,this.length);for(var U=this[m],V=1,A=0;++A<k&&(V*=256);)U+=this[m+A]*V;return V*=128,U>=V&&(U-=Math.pow(2,8*k)),U},c.prototype.readIntBE=function(m,k,Q){m>>>=0,k>>>=0,Q||T(m,k,this.length);for(var U=k,V=1,A=this[m+--U];U>0&&(V*=256);)A+=this[m+--U]*V;return V*=128,A>=V&&(A-=Math.pow(2,8*k)),A},c.prototype.readInt8=function(m,k){return k||T(m,1,this.length),128&this[m]?-1*(255-this[m]+1):this[m]},c.prototype.readInt16LE=function(m,k){return k||T(m,2,this.length),k=this[m]|this[m+1]<<8,32768&k?4294901760|k:k},c.prototype.readInt16BE=function(m,k){return k||T(m,2,this.length),k=this[m+1]|this[m]<<8,32768&k?4294901760|k:k},c.prototype.readInt32LE=function(m,k){return k||T(m,4,this.length),this[m]|this[m+1]<<8|this[m+2]<<16|this[m+3]<<24},c.prototype.readInt32BE=function(m,k){return k||T(m,4,this.length),this[m]<<24|this[m+1]<<16|this[m+2]<<8|this[m+3]},c.prototype.readFloatLE=function(m,k){return k||T(m,4,this.length),r.read(this,m,!0,23,4)},c.prototype.readFloatBE=function(m,k){return k||T(m,4,this.length),r.read(this,m,!1,23,4)},c.prototype.readDoubleLE=function(m,k){return k||T(m,8,this.length),r.read(this,m,!0,52,8)},c.prototype.readDoubleBE=function(m,k){return k||T(m,8,this.length),r.read(this,m,!1,52,8)},c.prototype.writeUIntLE=function(m,k,Q,U){m=+m,k>>>=0,Q>>>=0,U||M(this,m,k,Q,Math.pow(2,8*Q),0);var V=1,A=0;for(this[k]=255&m;++A<Q&&(V*=256);)this[k+A]=m/V>>>0&255;return k+Q},c.prototype.writeUIntBE=function(m,k,Q,U){m=+m,k>>>=0,Q>>>=0,U||M(this,m,k,Q,Math.pow(2,8*Q),0);var V=Q-1,A=1;for(this[k+V]=255&m;--V>=0&&(A*=256);)this[k+V]=m/A>>>0&255;return k+Q},c.prototype.writeUInt8=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,1,255,0),c.TYPED_ARRAY_SUPPORT||(m=Math.floor(m)),this[k]=m,k+1},c.prototype.writeUInt16LE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[k]=m,this[k+1]=m>>>8):$(this,m,k,!0),k+2},c.prototype.writeUInt16BE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[k]=m>>>8,this[k+1]=m):$(this,m,k,!1),k+2},c.prototype.writeUInt32LE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[k+3]=m>>>24,this[k+2]=m>>>16,this[k+1]=m>>>8,this[k]=m):z(this,m,k,!0),k+4},c.prototype.writeUInt32BE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[k]=m>>>24,this[k+1]=m>>>16,this[k+2]=m>>>8,this[k+3]=m):z(this,m,k,!1),k+4},c.prototype.writeIntLE=function(m,k,Q,U){m=+m,k>>>=0,U||M(this,m,k,Q,Math.pow(2,8*Q-1)-1,-Math.pow(2,8*Q-1));var V=0,A=1,P=m<0?1:0;for(this[k]=255&m;++V<Q&&(A*=256);)this[k+V]=(m/A>>0)-P&255;return k+Q},c.prototype.writeIntBE=function(m,k,Q,U){m=+m,k>>>=0,U||M(this,m,k,Q,Math.pow(2,8*Q-1)-1,-Math.pow(2,8*Q-1));var V=Q-1,A=1,P=m<0?1:0;for(this[k+V]=255&m;--V>=0&&(A*=256);)this[k+V]=(m/A>>0)-P&255;return k+Q},c.prototype.writeInt8=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,1,127,-128),c.TYPED_ARRAY_SUPPORT||(m=Math.floor(m)),m<0&&(m=255+m+1),this[k]=m,k+1},c.prototype.writeInt16LE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[k]=m,this[k+1]=m>>>8):$(this,m,k,!0),k+2},c.prototype.writeInt16BE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[k]=m>>>8,this[k+1]=m):$(this,m,k,!1),k+2},c.prototype.writeInt32LE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[k]=m,this[k+1]=m>>>8,this[k+2]=m>>>16,this[k+3]=m>>>24):z(this,m,k,!0),k+4},c.prototype.writeInt32BE=function(m,k,Q){return m=+m,k>>>=0,Q||M(this,m,k,4,2147483647,-2147483648),m<0&&(m=4294967295+m+1),c.TYPED_ARRAY_SUPPORT?(this[k]=m>>>24,this[k+1]=m>>>16,this[k+2]=m>>>8,this[k+3]=m):z(this,m,k,!1),k+4},c.prototype.writeFloatLE=function(m,k,Q){return Y(this,m,k,!0,Q)},c.prototype.writeFloatBE=function(m,k,Q){return Y(this,m,k,!1,Q)},c.prototype.writeDoubleLE=function(m,k,Q){return B(this,m,k,!0,Q)},c.prototype.writeDoubleBE=function(m,k,Q){return B(this,m,k,!1,Q)},c.prototype.copy=function(m,k,Q,U){if(Q=Q||0,U||U===0||(U=this.length),k>=m.length&&(k=m.length),k=k||0,U>0&&U<Q&&(U=Q),U===Q||m.length===0||this.length===0)return 0;if(k<0)throw new RangeError("targetStart out of bounds");if(Q<0||Q>=this.length)throw new RangeError("sourceStart out of bounds");if(U<0)throw new RangeError("sourceEnd out of bounds");U>this.length&&(U=this.length),m.length-k<U-Q&&(U=m.length-k+Q);var V=U-Q;if(V<1e3||!c.TYPED_ARRAY_SUPPORT)for(var A=0;A<V;A++)m[A+k]=this[A+Q];else m._set(this.subarray(Q,Q+V),k);return V},c.prototype.fill=function(m,k,Q){if(m=m||0,k=k||0,Q=Q||this.length,Q<k)throw new RangeError("end < start");if(Q!==k&&this.length!==0){if(k<0||k>=this.length)throw new RangeError("start out of bounds");if(Q<0||Q>this.length)throw new RangeError("end out of bounds");if(typeof m=="number")for(A=k;A<Q;A++)this[A]=m;else for(var U=H(m.toString()),V=U.length,A=k;A<Q;A++)this[A]=U[A%V];return this}},c.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new TypeError("Buffer.toArrayBuffer not supported in this browser");if(c.TYPED_ARRAY_SUPPORT)return new c(this).buffer;for(var m=new Uint8Array(this.length),k=0,Q=m.length;k<Q;k+=1)m[k]=this[k];return m.buffer};var N=c.prototype,ne=(c._augment=function(m){return m.constructor=c,m._isBuffer=!0,m._set=m.set,m.get=N.get,m.set=N.set,m.write=N.write,m.toString=N.toString,m.toLocaleString=N.toString,m.toJSON=N.toJSON,m.equals=N.equals,m.compare=N.compare,m.indexOf=N.indexOf,m.copy=N.copy,m.slice=N.slice,m.readUIntLE=N.readUIntLE,m.readUIntBE=N.readUIntBE,m.readUInt8=N.readUInt8,m.readUInt16LE=N.readUInt16LE,m.readUInt16BE=N.readUInt16BE,m.readUInt32LE=N.readUInt32LE,m.readUInt32BE=N.readUInt32BE,m.readIntLE=N.readIntLE,m.readIntBE=N.readIntBE,m.readInt8=N.readInt8,m.readInt16LE=N.readInt16LE,m.readInt16BE=N.readInt16BE,m.readInt32LE=N.readInt32LE,m.readInt32BE=N.readInt32BE,m.readFloatLE=N.readFloatLE,m.readFloatBE=N.readFloatBE,m.readDoubleLE=N.readDoubleLE,m.readDoubleBE=N.readDoubleBE,m.writeUInt8=N.writeUInt8,m.writeUIntLE=N.writeUIntLE,m.writeUIntBE=N.writeUIntBE,m.writeUInt16LE=N.writeUInt16LE,m.writeUInt16BE=N.writeUInt16BE,m.writeUInt32LE=N.writeUInt32LE,m.writeUInt32BE=N.writeUInt32BE,m.writeIntLE=N.writeIntLE,m.writeIntBE=N.writeIntBE,m.writeInt8=N.writeInt8,m.writeInt16LE=N.writeInt16LE,m.writeInt16BE=N.writeInt16BE,m.writeInt32LE=N.writeInt32LE,m.writeInt32BE=N.writeInt32BE,m.writeFloatLE=N.writeFloatLE,m.writeFloatBE=N.writeFloatBE,m.writeDoubleLE=N.writeDoubleLE,m.writeDoubleBE=N.writeDoubleBE,m.fill=N.fill,m.inspect=N.inspect,m.toArrayBuffer=N.toArrayBuffer,m},/[^+\/0-9A-z\-]/g);function ee(m){if(m=J(m).replace(ne,""),m.length<2)return"";for(;m.length%4!==0;)m+="=";return m}function J(m){return m.trim?m.trim():m.replace(/^\s+|\s+$/g,"")}function ge(m){return s(m)||c.isBuffer(m)||m&&typeof m=="object"&&typeof m.length=="number"}function Ie(m){return m<16?"0"+m.toString(16):m.toString(16)}function H(m,k){k=k||1/0;for(var Q,U=m.length,V=null,A=[],P=0;P<U;P++){if(Q=m.charCodeAt(P),Q>55295&&Q<57344){if(!V){if(Q>56319){(k-=3)>-1&&A.push(239,191,189);continue}if(P+1===U){(k-=3)>-1&&A.push(239,191,189);continue}V=Q;continue}if(Q<56320){(k-=3)>-1&&A.push(239,191,189),V=Q;continue}Q=V-55296<<10|Q-56320|65536,V=null}else V&&((k-=3)>-1&&A.push(239,191,189),V=null);if(Q<128){if(--k<0)break;A.push(Q)}else if(Q<2048){if((k-=2)<0)break;A.push(Q>>6|192,63&Q|128)}else if(Q<65536){if((k-=3)<0)break;A.push(Q>>12|224,Q>>6&63|128,63&Q|128)}else{if(!(Q<2097152))throw new Error("Invalid code point");if((k-=4)<0)break;A.push(Q>>18|240,Q>>12&63|128,Q>>6&63|128,63&Q|128)}}return A}function F(m){for(var k=[],Q=0;Q<m.length;Q++)k.push(255&m.charCodeAt(Q));return k}function le(m,k){for(var Q,U,V=[],A=0;A<m.length&&!((k-=2)<0);A++)U=m.charCodeAt(A),Q=U>>8,U=U%256,V.push(U),V.push(Q);return V}function ke(m){return i.toByteArray(ee(m))}function Qe(m,k,Q,U){for(var V=0;V<U&&!(V+Q>=k.length||V>=m.length);V++)k[V+Q]=m[V];return V}function ie(m){try{return decodeURIComponent(m)}catch{return"�"}}}).call(n,a(7).Buffer)},function(t,n,a){function o(r){return r.toString("ascii",0,2)==="BM"}function i(r){return{width:r.readUInt32LE(18),height:r.readUInt32LE(22)}}t.exports={detect:o,calculate:i}},function(t,n,a){var o=/^GIF8[7,9]a/;function i(s){return s=s.toString("ascii",0,6),o.test(s)}function r(s){return{width:s.readUInt16LE(6),height:s.readUInt16LE(8)}}t.exports={detect:i,calculate:r}},function(t,n,a){var o={ffdb:"0001010101",ffe0:"4a46494600",ffe1:"4578696600",ffe2:"4943435f50",ffe3:"",ffe8:"5350494646",ffec:"4475636b79",ffed:"50686f746f",ffee:"41646f6265"},i=["\x1B[31m","\x1B[39m"];function r(c){var d=c.toString("hex",0,2),f=c.toString("hex",2,4);return d==="ffd8"&&(d=c.toString("hex",6,11),c=f&&o[f],c===""?(console.warn(i[0]+`this looks like a unrecognised jpeg
please report the issue here
`+i[1],`	https://github.com/netroy/image-size/issues/new
`),!1):d===c||f==="ffdb")}function s(c,d){return{height:c.readUInt16BE(d),width:c.readUInt16BE(d+2)}}function l(c,d){if(d>c.length)throw new TypeError("Corrupt JPG, exceeded buffer limits");if(c[d]!==255)throw new TypeError("Invalid JPG, marker table corrupted")}function u(c){var d,f;for(c=c.slice(4);c.length;){if(d=c.readUInt16BE(0),l(c,d),f=c[d+1],f===192||f===194)return s(c,d+5);c=c.slice(d+2)}throw new TypeError("Invalid JPG, no size found")}t.exports={detect:r,calculate:u}},function(t,n,a){var o=`PNG\r

`;function i(s){if(o===s.toString("ascii",1,8)){if(s.toString("ascii",12,16)!=="IHDR")throw new TypeError("invalid png");return!0}}function r(s){return{width:s.readUInt32BE(16),height:s.readUInt32BE(20)}}t.exports={detect:i,calculate:r}},function(t,n,a){function o(r){return r.toString("ascii",0,4)==="8BPS"}function i(r){return{width:r.readUInt32BE(18),height:r.readUInt32BE(14)}}t.exports={detect:o,calculate:i}},function(t,n,a){var o=/<svg[^>]+[^>]*>/;function i(c){return o.test(c)}var r={root:/<svg [^>]+>/,width:/(^|\s)width\s*=\s*"(.+?)"/i,height:/(^|\s)height\s*=\s*"(.+?)"/i,viewbox:/(^|\s)viewbox\s*=\s*"(.+?)"/i};function s(c){var d=1;return c&&c[2]&&(c=c[2].split(/\s/g),c.length===4)&&(c=c.map(function(f){return parseInt(f,10)}),d=(c[2]-c[0])/(c[3]-c[1])),d}function l(h){var d,f,h=h.toString().replace(/[\r\n\s]+/g," "),h=h.match(r.root),h=h&&h[0];if(h)return d=h.match(r.width),f=h.match(r.height),h=h.match(r.viewbox),h=s(h),{width:parseInt(d&&d[2],10)||0,height:parseInt(f&&f[2],10)||0,ratio:h}}function u(h){var h=l(h),d=h.width,f=h.height,h=h.ratio;if(d&&f)return{width:d,height:f};if(d)return{width:d,height:Math.floor(d/h)};if(f)return{width:Math.floor(f*h),height:f};throw new TypeError("invalid svg")}t.exports={detect:i,calculate:u}},function(t,n,a){(function(o){var i=a(16),r=a(17);function s(_){return _=_.toString("hex",0,4),_==="49492a00"||_==="4d4d002a"}function l(g,v,y){var g=r(g,32,4,y),y=1024,w=i.statSync(v).size,w=(g+y>w&&(y=w-g-10),new o(y)),v=i.openSync(v,"r"),v=(i.readSync(v,w,0,y,g),w.slice(2));return v}function u(g,I){var C=r(g,16,8,I),g=r(g,16,10,I);return(g<<16)+C}function c(_){if(_.length>24)return _.slice(12)}function d(_,I){for(var C,g,y,w={};_&&_.length&&(C=r(_,16,0,I),g=r(_,16,2,I),y=r(_,32,4,I),C!==0);)y===1&&g===3&&(w[C]=u(_,I)),_=c(_);return w}function f(_){return _=_.toString("ascii",0,2),_==="II"?"LE":_==="MM"?"BE":void 0}function h(g,C){if(!C)throw new TypeError("Tiff doesn't support buffer");var y=f(g)==="BE",g=l(g,C,y),C=d(g,y),g=C[256],y=C[257];if(g&&y)return{width:g,height:y};throw new TypeError("Invalid Tiff, missing tags")}t.exports={detect:s,calculate:h}}).call(n,a(7).Buffer)},function(t,n,a){function o(d){var u=d.toString("ascii",0,4)==="RIFF",c=d.toString("ascii",8,12)==="WEBP",d=d.toString("ascii",12,15)==="VP8";return u&&c&&d}function i(l){var u,c=l.toString("ascii",12,16);return l=l.slice(20,30),c==="VP8 "&&l[0]!==47?s(l):(u=l.toString("hex",3,6),c==="VP8L"&&u!=="9d012a"&&r(l))}function r(l){return{width:1+((63&l[2])<<8|l[1]),height:1+((15&l[4])<<10|l[3]<<2|(192&l[2])>>6)}}function s(l){return{width:16383&l.readInt16LE(6),height:16383&l.readInt16LE(8)}}t.exports={detect:o,calculate:i}},function(t,n,a){},function(t,n,a){t.exports=function(o,i,r,s){return r=r||0,s=s?"BE":"LE",i=o["readUInt"+i+s],i.call(o,r)}},function(o,n,a){var o=o.exports={},i=[],r=!1;function s(){if(!r){r=!0;for(var u,c=i.length;c;){u=i,i=[];for(var d=-1;++d<c;)u[d]();c=i.length}r=!1}}function l(){}o.nextTick=function(u){i.push(u),r||setTimeout(s,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=l,o.addListener=l,o.once=l,o.off=l,o.removeListener=l,o.removeAllListeners=l,o.emit=l,o.binding=function(u){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(u){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,n,a){n.read=function(o,i,r,s,g){var u,c,d=8*g-s-1,f=(1<<d)-1,h=f>>1,_=-7,I=r?g-1:0,C=r?-1:1,g=o[i+I];for(I+=C,u=g&(1<<-_)-1,g>>=-_,_+=d;_>0;u=256*u+o[i+I],I+=C,_-=8);for(c=u&(1<<-_)-1,u>>=-_,_+=s;_>0;c=256*c+o[i+I],I+=C,_-=8);if(u===0)u=1-h;else{if(u===f)return c?NaN:1/0*(g?-1:1);c+=Math.pow(2,s),u-=h}return(g?-1:1)*c*Math.pow(2,u-s)},n.write=function(o,i,r,s,l,y){var c,d,f=8*y-l-1,h=(1<<f)-1,_=h>>1,I=l===23?Math.pow(2,-24)-Math.pow(2,-77):0,C=s?0:y-1,g=s?1:-1,y=i<0||i===0&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(d=isNaN(i)?1:0,c=h):(c=Math.floor(Math.log(i)/Math.LN2),i*(s=Math.pow(2,-c))<1&&(c--,s*=2),i+=c+_>=1?I/s:I*Math.pow(2,1-_),i*s>=2&&(c++,s/=2),c+_>=h?(d=0,c=h):c+_>=1?(d=(i*s-1)*Math.pow(2,l),c+=_):(d=i*Math.pow(2,_-1)*Math.pow(2,l),c=0));l>=8;o[r+C]=255&d,C+=g,d/=256,l-=8);for(c=c<<l|d,f+=l;f>0;o[r+C]=255&c,C+=g,c/=256,f-=8);o[r+C-g]|=128*y}},function(t,n,a){var o=Array.isArray,i=Object.prototype.toString;t.exports=o||function(r){return!!r&&i.call(r)=="[object Array]"}},function(t,n,a){var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";(function(i){var r=typeof Uint8Array<"u"?Uint8Array:Array,s=43,l=47,u=48,c=97,d=65,f=45,h=95;function _(g){return g=g.charCodeAt(0),g===s||g===f?62:g===l||g===h?63:g<u?-1:g<u+10?g-u+26+26:g<d+26?g-d:g<c+26?g-c+26:void 0}function I(g){var y,w,v;if(g.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var x=g.length,x=g.charAt(x-2)==="="?2:g.charAt(x-1)==="="?1:0,L=new r(3*g.length/4-x),q=x>0?g.length-4:g.length,T=0;function M($){L[T++]=$}for(y=0,w=0;y<q;y+=4,w+=3)v=_(g.charAt(y))<<18|_(g.charAt(y+1))<<12|_(g.charAt(y+2))<<6|_(g.charAt(y+3)),M((16711680&v)>>16),M((65280&v)>>8),M(255&v);return x===2?(v=_(g.charAt(y))<<2|_(g.charAt(y+1))>>4,M(255&v)):x===1&&(v=_(g.charAt(y))<<10|_(g.charAt(y+1))<<4|_(g.charAt(y+2))>>2,M(v>>8&255),M(255&v)),L}function C(g){var y,w,v,x=g.length%3,L="";function q(M){return o.charAt(M)}function T(M){return q(M>>18&63)+q(M>>12&63)+q(M>>6&63)+q(63&M)}for(y=0,v=g.length-x;y<v;y+=3)w=(g[y]<<16)+(g[y+1]<<8)+g[y+2],L+=T(w);switch(x){case 1:w=g[g.length-1],L+=q(w>>2),L+=q(w<<4&63),L+="==";break;case 2:w=(g[g.length-2]<<8)+g[g.length-1],L+=q(w>>10),L+=q(w>>4&63),L+=q(w<<2&63),L+="=";break}return L}i.toByteArray=I,i.fromByteArray=C})(n)}])})}(uu),uu.exports),du={exports:{}},kY=(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},n=function(a){var o,i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,s={},l={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function g(y){return y instanceof u?new u(y.type,g(y.content),y.alias):Array.isArray(y)?y.map(g):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++r}),g.__id},clone:function g(y,w){var v,x;switch(w=w||{},l.util.type(y)){case"Object":if(x=l.util.objId(y),w[x])return w[x];for(var L in v={},w[x]=v,y)y.hasOwnProperty(L)&&(v[L]=g(y[L],w));return v;case"Array":return x=l.util.objId(y),w[x]?w[x]:(v=[],w[x]=v,y.forEach(function(q,T){v[T]=g(q,w)}),v);default:return y}},getLanguage:function(g){for(;g;){var y=i.exec(g.className);if(y)return y[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,y){g.className=g.className.replace(RegExp(i,"gi"),""),g.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(v){var g=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(v.stack)||[])[1];if(g){var y,w=document.getElementsByTagName("script");for(y in w)if(w[y].src==g)return w[y]}return null}},isActive:function(g,y,w){for(var v="no-"+y;g;){var x=g.classList;if(x.contains(y))return!0;if(x.contains(v))return!1;g=g.parentElement}return!!w}},languages:{plain:s,plaintext:s,text:s,txt:s,extend:function(g,y){var w,v=l.util.clone(l.languages[g]);for(w in y)v[w]=y[w];return v},insertBefore:function(g,y,w,v){v=v||l.languages;var x,L=v[g],q={};for(x in L)if(L.hasOwnProperty(x)){if(x==y)for(var T in w)w.hasOwnProperty(T)&&(q[T]=w[T]);w.hasOwnProperty(x)||(q[x]=L[x])}var M=v[g];return v[g]=q,l.languages.DFS(l.languages,function($,z){z===M&&$!=g&&(this[$]=q)}),q},DFS:function g(y,w,v,x){x=x||{};var L,q,T,M=l.util.objId;for(L in y)y.hasOwnProperty(L)&&(w.call(y,L,y[L],v||L),q=y[L],T=l.util.type(q),T!=="Object"||x[M(q)]?T!=="Array"||x[M(q)]||(x[M(q)]=!0,g(q,w,L,x)):(x[M(q)]=!0,g(q,w,null,x)))}},plugins:{},highlightAll:function(g,y){l.highlightAllUnder(document,g,y)},highlightAllUnder:function(g,y,w){var v={callback:w,container:g,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",v),v.elements=Array.prototype.slice.apply(v.container.querySelectorAll(v.selector)),l.hooks.run("before-all-elements-highlight",v);for(var x,L=0;x=v.elements[L++];)l.highlightElement(x,y===!0,v.callback)},highlightElement:function(g,y,w){var v=l.util.getLanguage(g),x=l.languages[v],L=(l.util.setLanguage(g,v),g.parentElement),q=(L&&L.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(L,v),g.textContent),T={element:g,language:v,grammar:x,code:q};function M($){T.highlightedCode=$,l.hooks.run("before-insert",T),T.element.innerHTML=T.highlightedCode,l.hooks.run("after-highlight",T),l.hooks.run("complete",T),w&&w.call(T.element)}l.hooks.run("before-sanity-check",T),L=T.element.parentElement,L&&L.nodeName.toLowerCase()==="pre"&&!L.hasAttribute("tabindex")&&L.setAttribute("tabindex","0"),T.code?(l.hooks.run("before-highlight",T),T.grammar?y&&a.Worker?(g=new Worker(l.filename),g.onmessage=function($){M($.data)},g.postMessage(JSON.stringify({language:T.language,code:T.code,immediateClose:!0}))):M(l.highlight(T.code,T.grammar,T.language)):M(l.util.encode(T.code))):(l.hooks.run("complete",T),w&&w.call(T.element))},highlight:function(g,y,w){if(g={code:g,grammar:y,language:w},l.hooks.run("before-tokenize",g),g.grammar)return g.tokens=l.tokenize(g.code,g.grammar),l.hooks.run("after-tokenize",g),u.stringify(l.util.encode(g.tokens),g.language);throw new Error('The language "'+g.language+'" has no grammar.')},tokenize:function(g,y){var w=y.rest;if(w){for(var v in w)y[v]=w[v];delete y.rest}var x=new f;return h(x,x.head,g),d(g,x,y,x.head,0),I(x)},hooks:{all:{},add:function(g,y){var w=l.hooks.all;w[g]=w[g]||[],w[g].push(y)},run:function(g,y){var w=l.hooks.all[g];if(w&&w.length)for(var v,x=0;v=w[x++];)v(y)}},Token:u};function u(g,y,w,v){this.type=g,this.content=y,this.alias=w,this.length=0|(v||"").length}function c(g,y,w,v){return g.lastIndex=y,y=g.exec(w),y&&v&&y[1]&&(g=y[1].length,y.index+=g,y[0]=y[0].slice(g)),y}function d(g,y,w,v,x,L){for(var q in w)if(w.hasOwnProperty(q)&&w[q])for(var T=w[q],T=Array.isArray(T)?T:[T],M=0;M<T.length;++M){if(L&&L.cause==q+","+M)return;for(var $,z=T[M],O=z.inside,Y=!!z.lookbehind,B=!!z.greedy,N=z.alias,ne=(B&&!z.pattern.global&&($=z.pattern.toString().match(/[imsuy]*$/)[0],z.pattern=RegExp(z.pattern.source,$+"g")),z.pattern||z),ee=v.next,J=x;ee!==y.tail&&!(L&&J>=L.reach);J+=ee.value.length,ee=ee.next){var ge=ee.value;if(y.length>g.length)return;if(!(ge instanceof u)){var Ie,H=1;if(B){if(Ie=c(ne,J,g,Y),!Ie||Ie.index>=g.length)break;var Qe=Ie.index,F=Ie.index+Ie[0].length,le=J;for(le+=ee.value.length;Qe>=le;)ee=ee.next,le+=ee.value.length;if(le-=ee.value.length,J=le,ee.value instanceof u)continue;for(var ke=ee;ke!==y.tail&&(le<F||typeof ke.value=="string");ke=ke.next)H++,le+=ke.value.length;H--,ge=g.slice(J,le),Ie.index-=J}else if(Ie=c(ne,0,ge,Y),!Ie)continue;var Qe=Ie.index,ie=Ie[0],Q=ge.slice(0,Qe),m=ge.slice(Qe+ie.length),ge=J+ge.length,k=(L&&ge>L.reach&&(L.reach=ge),ee.prev),Q=(Q&&(k=h(y,k,Q),J+=Q.length),_(y,k,H),new u(q,O?l.tokenize(ie,O):ie,N,ie)),ee=h(y,k,Q);m&&h(y,ee,m),H>1&&(ie={cause:q+","+M,reach:ge},d(g,y,w,ee.prev,J,ie),L)&&ie.reach>L.reach&&(L.reach=ie.reach)}}}}function f(){var g={value:null,prev:null,next:null},y={value:null,prev:g,next:null};g.next=y,this.head=g,this.tail=y,this.length=0}function h(g,y,x){var v=y.next,x={value:x,prev:y,next:v};return y.next=x,v.prev=x,g.length++,x}function _(g,y,w){for(var v=y.next,x=0;x<w&&v!==g.tail;x++)v=v.next;y.next=v,v.prev=y,g.length-=x}function I(g){for(var y=[],w=g.head.next;w!==g.tail;)y.push(w.value),w=w.next;return y}return a.Prism=l,u.stringify=function g(q,w){if(typeof q=="string")return q;var v;if(Array.isArray(q))return v="",q.forEach(function(M){v+=g(M,w)}),v;var x,L={type:q.type,content:g(q.content,w),tag:"span",classes:["token",q.type],attributes:{},language:w},q=q.alias,T=(q&&(Array.isArray(q)?Array.prototype.push.apply(L.classes,q):L.classes.push(q)),l.hooks.run("wrap",L),"");for(x in L.attributes)T+=" "+x+'="'+(L.attributes[x]||"").replace(/"/g,"&quot;")+'"';return"<"+L.tag+' class="'+L.classes.join(" ")+'"'+T+">"+L.content+"</"+L.tag+">"},a.document?(s=l.util.currentScript(),s&&(l.filename=s.src,s.hasAttribute("data-manual"))&&(l.manual=!0),l.manual||(o=document.readyState,o==="loading"||o==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",C):window.requestAnimationFrame?window.requestAnimationFrame(C):window.setTimeout(C,16))):a.addEventListener&&!l.disableWorkerMessageHandler&&a.addEventListener("message",function(v){var v=JSON.parse(v.data),y=v.language,w=v.code,v=v.immediateClose;a.postMessage(l.highlight(w,l.languages[y],y)),v&&a.close()},!1),l;function C(){l.manual||l.highlightAll()}}(t);e.exports&&(e.exports=n),typeof Tc<"u"&&(Tc.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(a,r){var i={},i=(i["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[r]},i.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}}),r=(i["language-"+r]={pattern:/[\s\S]+/,inside:n.languages[r]},{});r[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:i},n.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(a,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(a){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,o=(a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup);o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){var a,o,i,r,s,l,u,c,d,f;function h(I,C,g){var y=new XMLHttpRequest;y.open("GET",I,!0),y.onreadystatechange=function(){y.readyState==4&&(y.status<400&&y.responseText?C(y.responseText):y.status>=400?g(o(y.status,y.statusText)):g(i))},y.send(null)}function _(y){var C,g,y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(y)return C=Number(y[1]),g=y[2],y=y[3],g?y?[C,Number(y)]:[C,void 0]:[C,C]}typeof n<"u"&&typeof document<"u"&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),a="Loading…",o=function(I,C){return"✖ Error "+I+" while fetching file: "+C},i="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",l="loading",u="loaded",c="failed",d="pre[data-src]:not(["+s+'="'+u+'"]):not(['+s+'="'+l+'"])',n.hooks.add("before-highlightall",function(I){I.selector+=", "+d}),n.hooks.add("before-sanity-check",function(I){var C,g,y,w=I.element;w.matches(d)&&(I.code="",w.setAttribute(s,l),C=w.appendChild(document.createElement("CODE")),C.textContent=a,g=w.getAttribute("data-src"),I=I.language,I==="none"&&(y=(/\.(\w+)$/.exec(g)||[,"none"])[1],I=r[y]||y),n.util.setLanguage(C,I),n.util.setLanguage(w,I),y=n.plugins.autoloader,y&&y.loadLanguages(I),h(g,function(v){w.setAttribute(s,u);var x,L,q=_(w.getAttribute("data-range"));q&&(x=v.split(/\r\n?|\n/g),L=q[0],q=q[1]==null?x.length:q[1],L<0&&(L+=x.length),L=Math.max(0,Math.min(L-1,x.length)),q<0&&(q+=x.length),q=Math.max(0,Math.min(q,x.length)),v=x.slice(L,q).join(`
`),w.hasAttribute("data-start")||w.setAttribute("data-start",String(L+1))),C.textContent=v,n.highlightElement(C)},function(v){w.setAttribute(s,c),C.textContent=v}))}),n.plugins.fileHighlight={highlight:function(I){for(var C,g=(I||document).querySelectorAll(d),y=0;C=g[y++];)n.highlightElement(C)}},f=!1,n.fileHighlight=function(){f||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),f=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)})}()}(du),du.exports);function xY(e,t,n){if(n===""?n="js":n==="vue"&&(n="html"),e.languages[n]===void 0)return"";{const a=e.highlight(t,e.languages[n],n);return`<pre class="q-markdown--code q-markdown--code__inner language-${n}"><code>${a}</code></pre>
`}}function CY(e){e.renderer.rules.blockquote_open=(t,n,a,o,i)=>(t[n].attrSet("class","q-markdown--note"),i.renderToken(t,n,a))}function mf(e,t,n){function a(f){return f.trim().split(" ",2)[0]===t}function o(f,h,_,I,C){return f[h].nesting===1&&f[h].attrPush(["class",t]),C.renderToken(f,h,_,I,C)}n=n||{};const i=3,r=n.marker||":",s=r.charCodeAt(0),l=r.length,u=n.validate||a,c=n.render||o;function d(f,h,_,I){let C,g,y,w=!1,v=f.bMarks[h]+f.tShift[h],x=f.eMarks[h];if(s!==f.src.charCodeAt(v))return!1;for(C=v+1;C<=x&&r[(C-v)%l]===f.src[C];C++);const L=Math.floor((C-v)/l);if(L<i)return!1;C-=(C-v)%l;const q=f.src.slice(v,C),T=f.src.slice(C,x);if(!u(T))return!1;if(!I){for(g=h;g++,!(g>=_||(v=f.bMarks[g]+f.tShift[g],x=f.eMarks[g],v<x&&f.sCount[g]<f.blkIndent));)if(s===f.src.charCodeAt(v)&&!(f.sCount[g]-f.blkIndent>=4)){for(C=v+1;C<=x&&r[(C-v)%l]===f.src[C];C++);if(!(Math.floor((C-v)/l)<L)&&(C-=(C-v)%l,C=f.skipSpaces(C),!(C<x))){w=!0;break}}const M=f.parentType,$=f.lineMax;f.parentType="container",f.lineMax=g,y=f.push("container_"+t+"_open","div",1),y.markup=q,y.block=!0,y.info=T,y.map=[h,g],f.md.block.tokenize(f,h+1,g),y=f.push("container_"+t+"_close","div",-1),y.markup=f.src.slice(v,C),y.block=!0,f.parentType=M,f.lineMax=$,f.line=g+(w?1:0)}return!0}e.block.ruler.before("fence","container_"+t,d,{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules["container_"+t+"_open"]=c,e.renderer.rules["container_"+t+"_close"]=c}function oa(e,t){return[mf,e,{render(n,a){const o=n[a],i=o.info.trim().slice(e.length).trim();return o.nesting===1?`<div class="q-markdown--note q-markdown--note--${e}"><p class="q-markdown--note-title">${i||t}</p>
`:`</div>
`}}]}function QY(e){e.use(...oa("info","INFO")),e.use(...oa("tip","TIP")),e.use(...oa("warning","WARNING")),e.use(...oa("danger","IMPORTANT")),e.use(...oa("","")),e.use(mf,"v-pre",{render:(t,n)=>t[n].nesting===1?`<div v-pre>
`:`</div>
`})}function hf(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}function AY(e,t){return t.type==="emoji"?Object.assign(new e,t,{content:t.markup}):t}function IY(e,t=[],n=!1,a=1,o=3,i=!1){let r;e.core.ruler.push("headingLinks",function(s){r=r||s.Token}),e.renderer.rules.heading_open=(s,l,u,c,d)=>{const f=s[l],h=parseInt(f.tag[1]),_=s[l+1].children,I=_.reduce((v,x)=>v+x.content,""),C=[],g=(C.push("q-markdown--heading"),C.push("q-markdown--heading-"+f.tag),f.markup==="="?C.push("q-markdown--title-heavy"):f.markup==="-"&&C.push("q-markdown--title-light"),i!==!0&&a&&o&&a<=o&&h>=a&&h<=o&&C.push("q-markdown--heading--anchor-link"),AY.bind(null,r)),y=e.renderer.renderInline(_.map(g),u,c),w=hf(y.replace(/[<>]/g,"").toLowerCase());if(f.attrSet("id",w),f.attrSet("name",w),f.attrSet("class",C.join(" ")),n&&a&&o&&a<=o&&h>=a&&h<=o&&t.push({id:w,label:I,level:h,children:[]}),i!==!0&&h<=o){const v=new r("link_open","a",1),x=(v.attrSet("href","#"+w),v.attrSet("aria-hidden","true"),new r("link_close","a",-1)),L=_.slice();return s[l+1].children=[v,...L,x],e.renderer.renderToken(s,l,u,c,d)}return d.renderToken(s,l,u)}}function qY(e){e.renderer.rules.image=(t,n,a,o,i)=>{const r=t[n];return r.attrSet("class","q-markdown--image"),Array.isArray(r.children)&&r.children.length>0&&r.children[0].type==="text"&&r.attrSet("alt",r.children[0].content),i.renderToken(t,n,a)}}function TY(e,{noopener:t=!0,noreferrer:n=!0}){e.renderer.rules.link_open=(a,o,i,r,s)=>{const l=a[o],u=l.attrIndex("href");if(l.attrs[u][1][0]==="#"&&typeof location<"u"&&(l.attrs[u][1]=location.pathname+l.attrs[u][1]),l.attrs[u][1]==="")l.attrSet("class","q-markdown--link q-markdown--link-local"),a[o+1]&&a[o+1].type==="text"&&a[o+1].content&&l.attrSet("id",hf(a[o+1].content));else if(l.attrs[u][1][0]==="/"||l.attrs[u][1][0]==="#"||l.attrs[u][1].startsWith(".."))l.attrSet("class","q-markdown--link q-markdown--link-local");else if(l.attrSet("class","q-markdown--link q-markdown--link-external"),l.attrSet("target","_blank"),t===!0||n===!0){const c=[];t===!0&&c.push("noopener"),n===!0&&c.push("noreferrer"),l.attrSet("rel",c.join(" "))}return s.renderToken(a,o,i)}}function LY(e){e.renderer.rules.table_open=(t,n,a,o,i)=>(t[n].attrSet("class","q-markdown--table"),i.renderToken(t,n,a))}function EY(e){const t=e.renderer.rules.code_inline;e.renderer.rules.code_inline=(n,a,o,i,r)=>(n[a].attrSet("class","q-markdown--token"),t(n,a,o,i,r))}function BY(e,t){const n=e.renderer.rules.fence;e.renderer.rules.fence=(...a)=>{const o=n(...a),i=o.slice(o.indexOf("<code>")+6,o.indexOf("</code>")),r=i.trim().split(`
`),s=[...Array(r.length)].map((c,d)=>`<div class="q-markup--line-number">${t===void 0?d+1:t}</div>`).join(""),l=`<div class="q-markdown--line-numbers non-selectable">${s}</div><div class="q-markdown--code-wrapper">${o}</div>`;return`<div class="q-markdown--line-numbers-wrapper">${r.length<3?o:l}</div>`}}const DY=uo({});var gf=Ld({name:"QMarkdown",props:{src:{type:String,default:""},noBlockquote:Boolean,noBreaks:Boolean,noContainer:Boolean,noHighlight:Boolean,noHtml:Boolean,noImage:Boolean,noLineNumbers:Boolean,noLink:Boolean,noLinkify:Boolean,noHeadingAnchorLinks:Boolean,noTypographer:Boolean,lineNumberAlt:{type:String,validator:e=>e.length===1},toc:Boolean,tocStart:{type:Number,default:1,validator:e=>e>=1&&e<=6},tocEnd:{type:Number,default:3,validator:e=>e>=1&&e<=6},contentStyle:[Object,Array,String],contentClass:[Object,Array,String],noNoopener:Boolean,noNoreferrer:Boolean,showCopy:Boolean,copyIcon:String,noCopyTooltip:Boolean,doneIcon:String,copyTooltipText:{type:String,default:"Copy to clipboard"},copyResponseText:{type:String,default:"Copied to clipboard"},fixCr:Boolean,plugins:{type:Array,default:()=>[]}},emits:["data"],setup(e,{slots:t,emit:n,expose:a}){const o=Xb(),i=be(null),r=be(null),s=be(null),l=(Ds(()=>{l.value.src&&l.value.src.length>0&&(r.value=l.value.fixCr?l.value.src.replace(/\\n/gi,`
`):l.value.src)}),E(()=>({...e,...DY}))),u=E(()=>{let g="";return l.value.src&&l.value.src.length>0&&(g=l.value.fixCr?l.value.src.replace(/\\n/gi,`
`):l.value.src),t.default!==void 0&&t.default()[0].children.trim().length>0&&(g=t.default()[0].children),g}),c=E(()=>l.value.copyIcon||"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"),d=E(()=>l.value.doneIcon||"M0 0h24v24H0z@@fill:none;&&M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z");function f(g){return g===void 0||g===!1}function h(g){const y=[];let w=null;const v=x=>{if(x.level===l.value.tocStart)w=x,y.push(x);else if(x.level===l.value.tocStart+1)w.children.push(x);else{let L=w;for(let q=0;q<x.level-(l.value.tocStart+1);++q)L=L.children[L.children.length-1];L&&L.children.push(x)}};for(let x=0;x<g.length;++x)v(g[x]);return y}function _(){xp(s.value.innerText),o.notify&&o.notify({message:l.value.copyResponseText,color:o.dark.isActive?"grey-10":"white",textColor:o.dark.isActive?"amber":"primary",icon:d.value,position:"top",timeout:2e3})}function I(){if(l.value.showCopy===!0)return j(vt,{class:"q-markdown__copy",color:o.dark.isActive?"amber":"primary",dense:!0,flat:!0,round:!0,icon:c.value,onClick:g=>{_()}},()=>[l.value.noCopyTooltip!==!0&&j(__,()=>l.value.copyTooltipText)])}function C(){if(i.value===null){const w=[],v=u.value||"",x=(M,$)=>f(l.value.noHighlight)?xY(kY,M,$):M,L={html:f(l.value.noHtml),linkify:f(l.value.noLinkify),typographer:f(l.value.noTypographer),breaks:f(l.value.noBreaks),highlight:x},q=wY(L),T=(f(l.value.noImage)&&q.use(SY),CY(q),IY(q,w,l.value.toc,l.value.tocStart,l.value.tocEnd,l.value.noHeadingAnchorLinks),qY(q),TY(q,{noopener:!l.value.noNoopener,noreferrer:!l.value.noNoreferrer}),LY(q),EY(q),f(l.value.noContainer)&&QY(q),f(l.value.noLineNumbers)&&BY(q,l.value.lineNumberAlt),[]);f(l.value.noImage)||T.push("image"),f(l.value.noLink)||T.push("link"),f(l.value.noBlockquote)||T.push("blockquote"),T.length>0&&q.disable(T),l.value.plugins.length>0&&l.value.plugins.forEach(M=>{M instanceof Function?q.use(M):M.plugin instanceof Function&&M.options&&q.use(M.plugin,M.options)}),i.value=q.render(v),l.value.toc&&w.length>0&&n("data",w)}const g=j("div",{ref:s,class:["q-markdown",l.value.contentClass],style:l.value.contentStyle,innerHTML:i.value}),y=j("div",{style:{position:"relative"}},[g,I()]);return l.value.showCopy!==!0?g:y}return Pe(()=>l.value.src,g=>{r.value=l.value.fixCr?l.value.src.replace(/\\n/gi,`
`):l.value.src,i.value=null}),Pe(()=>[l.value.noBlockquote,l.value.noBreaks,l.value.noContainer,l.value.noHighlight,l.value.noHtml,l.value.noImage,l.value.noLineNumbers,l.value.noLink,l.value.noLinkify,l.value.noHeadingAnchorLinks,l.value.noTypographer,l.value.lineNumberAlt,l.value.toc,l.value.tocStart,l.value.tocEnd,l.value.contentStyle,l.value.contentClass,l.value.noNoopener,l.value.noNoreferrer,l.value.plugins],()=>{i.value=null}),a({makeTree:h}),()=>C()}});const PY={name:"ShowcaseReference",components:{QMarkdown:gf,QBtn:vt,JPanel:qn,ApiDocSection:Qp,QIcon:Ve},inject:["showcaseCopy"],props:{code:{type:String,default:""},codeKey:{type:String,default:""},hasApi:{type:Boolean,default:!1},docsUrl:{type:String,default:null},title:{type:String,default:"REFERENCE"},isTagName:{type:Boolean,default:!1}},computed:{componentName(){return this.docsUrl?(this.docsUrl.split("/").pop()||"").split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""},codeMd(){return"```html\n"+this.code+"\n```"}},methods:{copy(e){this.showcaseCopy(e)},copyCode(){this.copy(this.code)}},data(){return{activeTab:"code",showCodeCopyButton:!1}},watch:{hasApi:{immediate:!0,handler(e){this.activeTab=e?"api":"code"}}}},jY={class:"showcaseCodeCol"},MY={class:"rightTabs"},$Y={key:0,class:"apiBlock"},RY={class:"q-ma-sm"};function OY(e,t,n,a,o,i){const r=G("QIcon"),s=G("QBtn"),l=G("ApiDocSection"),u=G("QMarkdown"),c=G("JPanel");return D(),Z("div",jY,[p(c,{title:n.isTagName?null:n.title},Md({footer:S(()=>[]),"header-action":S(()=>[b("div",MY,[b("span",{class:nt(["rightTab",{active:o.activeTab==="api",disabled:!n.hasApi}]),onClick:t[1]||(t[1]=d=>n.hasApi&&(o.activeTab="api"))},[p(r,{name:"description",size:"20px"}),t[6]||(t[6]=W(" API ",-1))],2),b("span",{class:nt(["rightTab",{active:o.activeTab==="code"}]),onClick:t[2]||(t[2]=d=>o.activeTab="code")},[p(r,{name:"code",size:"20px"}),t[7]||(t[7]=W(" CODE ",-1))],2)])]),default:S(()=>[o.activeTab==="api"&&n.hasApi?(D(),Z("div",$Y,[p(l)])):(D(),Z("div",{key:1,class:"codeBlock relative-position",onMouseenter:t[3]||(t[3]=d=>o.showCodeCopyButton=!0),onMouseleave:t[4]||(t[4]=d=>o.showCodeCopyButton=!1)},[p(Jt,{name:"codeFade",mode:"out-in"},{default:S(()=>[p(c,{style:{"max-height":"70vh"},scroll:""},{default:S(()=>[b("div",RY,[p(u,{src:i.codeMd},null,8,["src"])])]),_:1})]),_:1}),p(Jt,{name:"codeFade",mode:"out-in"},{default:S(()=>[o.showCodeCopyButton?(D(),pe(s,{key:0,color:"primary",icon:"content_copy",size:"sm",round:"",onClick:i.copyCode,style:{position:"absolute",top:"32px",right:"32px"}},null,8,["onClick"])):Re("",!0)]),_:1})],32))]),_:2},[n.isTagName?{name:"title",fn:S(()=>[b("div",null,[b("span",{class:"showcaseReference_tagName",onClick:t[0]||(t[0]=d=>i.copy("<"+n.title+">"))},[p(r,{name:"view_module",size:"24px",class:"jPanel_icon",color:"secondary"}),W(" "+ve(n.title),1)]),t[5]||(t[5]=W("  ",-1)),n.docsUrl?(D(),pe(s,{key:0,color:"accent",outline:"",icon:"open_in_new",label:`Full ${i.componentName} Docs`,href:n.docsUrl,target:"_blank",size:"md",dense:""},null,8,["label","href"])):Re("",!0)])]),key:"0"}:void 0]),1032,["title"])])}const FY=Be(PY,[["render",OY],["__scopeId","data-v-19d9f822"]]);let zY=0;const NY={name:"ShowcaseToast",props:{position:{type:String,default:"bottom",validator:e=>["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"].includes(e)}},computed:{positionClass(){return"showcaseToasts_"+this.position}},data(){return{toasts:[]}},methods:{notify(e,t="info"){const n=++zY;this.toasts.push({id:n,message:e,icon:t}),setTimeout(()=>{const a=this.toasts.findIndex(o=>o.id===n);a>=0&&this.toasts.splice(a,1)},2500)}}},VY={class:"showcaseToast_icon material-icons"},HY={class:"showcaseToast_text"};function UY(e,t,n,a,o,i){return D(),pe(Mg,{name:"showcaseToast",tag:"div",class:nt(["showcaseToasts",i.positionClass])},{default:S(()=>[(D(!0),Z(De,null,Ye(o.toasts,r=>(D(),Z("div",{key:r.id,class:"showcaseToast"},[b("span",VY,ve(r.icon),1),b("span",HY,ve(r.message),1)]))),128))]),_:1},8,["class"])}const WY=Be(NY,[["render",UY],["__scopeId","data-v-486aa922"]]),JY={name:"ShowcaseDocs",components:{QMarkdown:gf,JPanel:qn},props:{docs:{type:Object,required:!0},activePage:{type:String,default:"README"}},emits:["navigate"],computed:{currentContent(){return this.docs[this.activePage]||""},currentTitle(){return this.activePage==="README"?"README":this.activePage}},methods:{resolveDocName(e){const t=e.match(/(?:\.\/)?docs\/([^/]+)\.md(?:#.*)?$/);if(t&&this.docs[t[1]])return t[1];const n=e.match(/\/?([\w.-]+)\.md(?:#.*)?$/);return n&&this.docs[n[1]]?n[1]:null},handleClick(e){const t=e.target.closest("a");if(!t)return;const n=this.resolveDocName(t.getAttribute("href")||"")||this.resolveDocName(t.href||"");n&&(e.preventDefault(),e.stopPropagation(),this.$emit("navigate",n),this.$el.scrollIntoView({behavior:"smooth",block:"start"}))}}},GY={class:"showcaseDocs"};function KY(e,t,n,a,o,i){const r=G("QMarkdown"),s=G("JPanel");return D(),Z("div",GY,[p(s,{title:i.currentTitle,icon:"description","icon-color":"var(--q-info)"},{default:S(()=>[b("div",{class:"showcaseDocs_content",onClick:t[0]||(t[0]=(...l)=>i.handleClick&&i.handleClick(...l))},[p(r,{src:i.currentContent,"no-heading-anchor-links":""},null,8,["src"])])]),_:1},8,["title"])])}const YY=Be(JY,[["render",KY],["__scopeId","data-v-4b091db8"]]);function ZY(e){if(!e)return"";const t=e.indexOf("<template");if(t===-1)return"";const n=e.indexOf(">",t)+1;let a=1,o=n;for(;o<e.length&&a>0;){const i=e.indexOf("<template",o),r=e.indexOf("</template>",o);if(r===-1)break;if(i!==-1&&i<r)a++,o=i+9;else{if(a--,a===0){const l=e.slice(n,r).replace(/^\n|\n$/g,"").split(`
`),u=Math.min(...l.filter(c=>c.trim()).map(c=>c.match(/^(\s*)/)[1].length));return l.map(c=>c.slice(u)).join(`
`).trim()}o=r+11}}return""}const XY=`# Building Custom Components with Varmory

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
<div style="display: flex; flex-wrap: wrap; gap: var(--q-gap-sm); align-items: center;">
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

Props: \`title\`, \`icon\`, \`iconColor\`, \`footerText\`, \`square\`, \`fullscreen\`, \`scroll\`
Slots: \`default\`, \`title\`, \`header\`, \`header-action\`, \`footer\`

\`\`\`html
<JPanel title="Actions">
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
`,eZ=`# MCP Server

An Streamable HTTP [MCP](https://modelcontextprotocol.io/) server that exposes the component library's showcase data — docs, components, and API definitions — to AI agents like Claude Code.

## Hosted Server

A public instance of Streamable HTTP MCP server is available at:

\`\`\`
https://varmory-dec8b20a1b83.herokuapp.com/mcp
\`\`\`

Transport: Streamable HTTP.

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
`,tZ=`# JComponentShowcase

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
`,nZ=`# Theming

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
`,oZ="# Usage\n\nVarmory wraps [Quasar](https://quasar.dev/) (Vue 3). When you install varmory via `app.use()`, varmory's own components (`JPanel`, `PortfolioHeader`, etc.) are registered globally.\n\nQuasar components (`QBtn`, `QInput`, `QIcon`, etc.) are registered separately by `@quasar/vite-plugin` in your Vite config:\n\n```js\n// vite.config.js\nimport vue from '@vitejs/plugin-vue';\nimport { quasar, transformAssetUrls } from '@quasar/vite-plugin';\n\nexport default {\n	plugins: [\n		vue({ template: { transformAssetUrls } }),\n		quasar({ autoImportComponentCase: 'pascal' }),\n	],\n};\n```\n\nWhen building the app and its components with varmory, follow the conventions in [CustomComponents.md](CustomComponents.md) — API style, CSS variables, class naming, and component structure.\n",aZ=`# varmory

Vue 3 + Quasar component library with a multi-theme system.

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


## Usage

See [docs/USAGE.md](docs/USAGE.md) — setting up a fresh app using varmory for UI, Vite config, and Quasar plugin setup.

## Building Components

See [docs/CustomComponents.md](docs/CustomComponents.md) — API style, CSS variables, layout patterns, component composition, and styling conventions.

## Theming, Dark/Light mode

See [docs/THEMING.md](docs/THEMING.md) — built-in themes, custom themes, writing your own, theme store API, and UI components.

## JComponentShowcase

See [docs/SHOWCASE.md](docs/SHOWCASE.md) — interactive component browser, adding categories, custom docs, writing showcase entries, and navigation.

## MCP Server

See [docs/MCP.md](docs/MCP.md) — expose showcase data to AI agents via the Model Context Protocol.
`,iZ=["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"];function rZ(e){const t=n=>({name:n,varName:`class="bg-${n}"`,bgClass:`bg-${n}`});return[t(e),t(`${e}-1`),{separator:!0,name:`${e}-sep1`},t(`${e}-7`),{separator:!0,name:`${e}-sep2`},t(`${e}-14`)]}const vf=[{label:"BRAND",colors:[{name:"primary",varName:"--q-primary",var:"var(--q-primary)"},{name:"secondary",varName:"--q-secondary",var:"var(--q-secondary)"},{name:"accent",varName:"--q-accent",var:"var(--q-accent)"},{name:"dark",varName:"--q-dark",var:"var(--q-dark)"},{name:"positive",varName:"--q-positive",var:"var(--q-positive)"},{name:"negative",varName:"--q-negative",var:"var(--q-negative)"},{name:"info",varName:"--q-info",var:"var(--q-info)"},{name:"warning",varName:"--q-warning",var:"var(--q-warning)"}]},{label:"BRAND MIXES",colors:[{name:"color-mix(in srgb, var(--q-primary), transparent 50%)",varName:" ",var:"color-mix(in srgb, var(--q-primary), transparent 50%)"},{name:"color-mix(in srgb, var(--q-secondary), transparent 70%)",varName:" ",var:"color-mix(in srgb, var(--q-secondary), transparent 70%)"},{name:"color-mix(in srgb, var(--q-accent), black 70%)",varName:" ",var:"color-mix(in srgb, var(--q-accent), black 70%)"}]},{label:"TEXT",colors:[{name:"text-bright",varName:"--q-text-bright",var:"var(--q-text-bright)"},{name:"text",varName:"--q-text",var:"var(--q-text)"},{name:"text-muted",varName:"--q-text-muted",var:"var(--q-text-muted)"},{name:"text-faint",varName:"--q-text-faint",var:"var(--q-text-faint)"}]},{label:"SURFACES",colors:[{name:"surface-0",varName:"--q-surface-0",var:"var(--q-surface-0)"},{name:"surface-1",varName:"--q-surface-1",var:"var(--q-surface-1)"},{name:"surface-2",varName:"--q-surface-2",var:"var(--q-surface-2)"},{name:"surface-3",varName:"--q-surface-3",var:"var(--q-surface-3)"},{name:"surface-border",varName:"--q-surface-border",var:"var(--q-surface-border)"},{name:"surface-overlay",varName:"--q-surface-overlay",var:"var(--q-surface-overlay)"},{name:"body-bg",varName:"--q-body-bg",var:"var(--q-body-bg)"}]},{label:"GLOWS & SHADOWS",colors:[{name:"glow-primary",varName:"--q-glow-primary",var:"var(--q-glow-primary)"},{name:"glow-accent",varName:"--q-glow-accent",var:"var(--q-glow-accent)"},{name:"glow-warning",varName:"--q-glow-warning",var:"var(--q-glow-warning)"},{name:"shadow-drop",varName:"--q-shadow-drop",var:"var(--q-shadow-drop)"},{name:"shadow-inset",varName:"--q-shadow-inset",var:"var(--q-shadow-inset)"}]},{label:"QUASAR PALETTE",rows:iZ.map(e=>rZ(e))}],sZ=vf.map(e=>{let t=[];if(e.label=="BRAND")t=e.colors.map(n=>{const a=Math.floor(Math.random()*1e4%3);return a==0?`  <div class="text-${n.name}">...</div>`:a==1?`  <div class="bg-${n.name}">...</div>`:`  <div style="color: var(--q-${n.name})">...</div>`}).join(`,
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

`),lZ={inject:["showcaseCopy"],name:"ShowcaseAllColors",label:"All Colors",icon:"palette",data(){return{groups:vf}},code:sZ,methods:{onColorClick(e){this.showcaseCopy(e.name)}}},cZ={class:"colorSections"},uZ={class:"colorGroupLabel"},dZ={key:0,class:"colorRows non-selectable"},pZ={key:0,class:"colorSeparator"},fZ=["onClick"],mZ={class:"colorInfo"},hZ={class:"colorName text-truncate"},gZ={class:"colorVar text-truncate"},vZ={key:1,class:"colorGrid non-selectable"},bZ={key:0,class:"colorSeparator"},_Z=["onClick"],yZ={class:"colorInfo"},wZ={class:"colorName"},SZ={class:"colorVar"};function kZ(e,t,n,a,o,i){return D(),Z("div",cZ,[(D(!0),Z(De,null,Ye(o.groups,r=>(D(),Z("div",{key:r.label,class:"colorGroup"},[b("div",uZ,ve(r.label),1),r.rows?(D(),Z("div",dZ,[(D(!0),Z(De,null,Ye(r.rows,(s,l)=>(D(),Z("div",{key:l,class:"colorRow"},[(D(!0),Z(De,null,Ye(s,u=>(D(),Z(De,{key:u.name},[u.separator?(D(),Z("div",pZ,"⋯")):(D(),Z("div",{key:1,class:"colorSwatch",onClick:c=>i.onColorClick(u)},[b("div",{class:nt(["colorBox",u.bgClass]),style:fn(u.var?{background:u.var}:{})},null,6),b("div",mZ,[b("span",hZ,ve(u.name),1),b("span",gZ,ve(u.varName),1)])],8,fZ))],64))),128))]))),128))])):(D(),Z("div",vZ,[(D(!0),Z(De,null,Ye(r.colors,s=>(D(),Z(De,{key:s.name},[s.separator?(D(),Z("div",bZ,"⋯")):(D(),Z("div",{key:1,class:"colorSwatch",onClick:l=>i.onColorClick(s)},[b("div",{class:nt(["colorBox",s.bgClass]),style:fn(s.var?{background:s.var}:{})},null,6),b("div",yZ,[b("span",wZ,ve(s.name),1),b("span",SZ,ve(s.varName),1)])],8,_Z))],64))),128))]))]))),128))])}const xZ=Be(lZ,[["render",kZ],["__scopeId","data-v-f014264e"]]),CZ=Object.freeze(Object.defineProperty({__proto__:null,default:xZ},Symbol.toStringTag,{value:"Module"})),QZ={name:"ShowcaseHelperClasses",label:"Helper Classes",icon:"text_fields",inject:["showcaseCopy"],code:`MOUSE:
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
<div class="border-radius-inherit">...</div>`,data(){return{groups:[{label:"MOUSE",items:[{cls:"non-selectable",desc:"User cannot select the DOM node or its text"},{cls:"no-pointer-events",desc:"Element does not become a target of mouse events"},{cls:"all-pointer-events",desc:"Restores pointer events (inverse of no-pointer-events)"},{cls:"cursor-pointer",desc:"Changes cursor to pointer (clickable)"},{cls:"cursor-not-allowed",desc:"Changes cursor to not-allowed"},{cls:"cursor-inherit",desc:"Cursor inherits from parent element"},{cls:"cursor-none",desc:"Hides the mouse cursor"}]},{label:"SCROLL",items:[{cls:"scroll",desc:"Applies CSS tweaks for optimal scroll on all platforms"},{cls:"no-scroll",desc:"Hides scrollbars on the element"},{cls:"overflow-auto",desc:"Sets overflow to auto"},{cls:"overflow-hidden",desc:"Sets overflow to hidden"},{cls:"overflow-hidden-y",desc:"Hides overflow on the vertical axis only"},{cls:"hide-scrollbar",desc:"Removes the scrollbar while keeping scroll functional"}]},{label:"SIZE",items:[{cls:"fit",desc:"Width and height set to 100%"},{cls:"full-height",desc:"Height set to 100%"},{cls:"full-width",desc:"Width set to 100%, left and right margins 0"},{cls:"window-height",desc:"Height set to 100vh, top and bottom margins 0"},{cls:"window-width",desc:"Width set to 100vw, left and right margins 0"},{cls:"block",desc:"Sets display to block"}]},{label:"ORIENTATION",items:[{cls:"rotate-45",desc:"Rotate element 45 degrees"},{cls:"rotate-90",desc:"Rotate element 90 degrees"},{cls:"rotate-135",desc:"Rotate element 135 degrees"},{cls:"rotate-180",desc:"Rotate element 180 degrees"},{cls:"rotate-225",desc:"Rotate element 225 degrees"},{cls:"rotate-270",desc:"Rotate element 270 degrees"},{cls:"rotate-315",desc:"Rotate element 315 degrees"},{cls:"flip-horizontal",desc:"Flip element horizontally"},{cls:"flip-vertical",desc:"Flip element vertically"}]},{label:"POSITIONING",items:[{cls:"fullscreen",desc:"Fix position covering the full window"},{cls:"fixed",desc:"Sets position to fixed (without coordinates)"},{cls:"fixed-full",desc:"Sets position to fixed covering the full window"},{cls:"fixed-center",desc:"Sets position to fixed but centered in window"},{cls:"fixed-bottom",desc:"Fixed position at bottom of window"},{cls:"fixed-left",desc:"Fixed position at left of window"},{cls:"fixed-right",desc:"Fixed position at right of window"},{cls:"fixed-top",desc:"Fixed position at top of window"},{cls:"fixed-top-left",desc:"Fixed position at top-left of window"},{cls:"fixed-top-right",desc:"Fixed position at top-right of window"},{cls:"fixed-bottom-left",desc:"Fixed position at bottom-left of window"},{cls:"fixed-bottom-right",desc:"Fixed position at bottom-right of window"},{cls:"absolute",desc:"Sets position to absolute (without coordinates)"},{cls:"absolute-full",desc:"Sets position to absolute covering the full parent"},{cls:"absolute-center",desc:"Sets position to absolute but centered in parent"},{cls:"absolute-bottom",desc:"Absolute position at bottom of parent"},{cls:"absolute-left",desc:"Absolute position at left of parent"},{cls:"absolute-right",desc:"Absolute position at right of parent"},{cls:"absolute-top",desc:"Absolute position at top of parent"},{cls:"absolute-top-left",desc:"Absolute position at top-left of parent"},{cls:"absolute-top-right",desc:"Absolute position at top-right of parent"},{cls:"absolute-bottom-left",desc:"Absolute position at bottom-left of parent"},{cls:"absolute-bottom-right",desc:"Absolute position at bottom-right of parent"},{cls:"relative-position",desc:"Sets position to relative"},{cls:"z-top",desc:"Sets z-index to the top (z-index: 7000)"},{cls:"z-max",desc:"Sets z-index to the maximum (z-index: 9998)"}]},{label:"BORDER",items:[{cls:"no-border",desc:"Removes any border"},{cls:"no-border-radius",desc:"Removes any border radius"},{cls:"no-box-shadow",desc:"Removes any box shadow"},{cls:"no-outline",desc:"Removes any outline"},{cls:"rounded-borders",desc:"Applies a generic border radius"},{cls:"border-radius-inherit",desc:"Inherits border radius from parent"}]}]}},methods:{copy(e){this.showcaseCopy(e)}}},AZ={class:"helperClasses"},IZ={class:"helperClasses_sectionLabel"},qZ={class:"helperClasses_table"},TZ={class:"helperClasses_tags"},LZ=["onClick"],EZ={class:"helperClasses_desc"};function BZ(e,t,n,a,o,i){return D(),Z("div",AZ,[(D(!0),Z(De,null,Ye(o.groups,r=>(D(),Z("div",{key:r.label,class:"helperClasses_section"},[b("div",IZ,ve(r.label),1),b("div",qZ,[(D(!0),Z(De,null,Ye(r.items,s=>(D(),Z("div",{key:s.cls,class:"helperClasses_row"},[b("div",TZ,[b("span",{class:"helperClasses_tag",onClick:l=>i.copy(s.cls)},ve(s.cls),9,LZ)]),b("div",EZ,ve(s.desc),1)]))),128))])]))),128))])}const DZ=Be(QZ,[["render",BZ],["__scopeId","data-v-8c9d4a39"]]),PZ=Object.freeze(Object.defineProperty({__proto__:null,default:DZ},Symbol.toStringTag,{value:"Module"})),Io="Lorem Ipsum is simply dummy text of the printing and typesetting industry.",jZ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",MZ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.",$Z={inject:["showcaseCopy"],name:"ShowcaseTypography",label:"Typography",icon:"text_fields",order:0,code:`HEADINGS:
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
<div class="text-capitalize">...</div>`,data(){return{headings:[{cls:"text-h1",el:"h1",text:"Headline 1"},{cls:"text-h2",el:"h2",text:"Headline 2"},{cls:"text-h3",el:"h3",text:"Headline 3"},{cls:"text-h4",el:"h4",text:"Headline 4"},{cls:"text-h5",el:"h5",text:"Headline 5"},{cls:"text-h6",el:"h6",text:"Headline 6"},{cls:"text-subtitle1",el:null,text:"Subtitle 1"},{cls:"text-subtitle2",el:null,text:"Subtitle 2"},{cls:"text-body1",el:null,text:"Body 1. "+jZ},{cls:"text-body2",el:null,text:"Body 2. "+MZ},{cls:"text-caption",el:null,text:"Caption text"},{cls:"text-overline",el:null,text:"Overline"}],weights:[{cls:"text-weight-thin",text:Io},{cls:"text-weight-light",text:Io},{cls:"text-weight-regular",text:Io},{cls:"text-weight-medium",text:Io},{cls:"text-weight-bold",text:Io},{cls:"text-weight-bolder",text:Io}],helpers:[{cls:"text-right",desc:"Align text to the right"},{cls:"text-left",desc:"Align text to the left"},{cls:"text-center",desc:"Align text to the center"},{cls:"text-justify",desc:"Text will be justified"},{cls:"text-bold",desc:"Text will be in bold"},{cls:"text-italic",desc:"Text will be in italic"},{cls:"text-no-wrap",desc:"Non wrappable text",descBefore:"Non wrappable text (applies ",css:"white-space: nowrap",descAfter:")"},{cls:"text-strike",desc:"Applies text-decoration: line-through",descBefore:"Applies ",css:"text-decoration: line-through",descAfter:""},{cls:"text-uppercase",desc:"Transform text to uppercase"},{cls:"text-lowercase",desc:"Transform text to lowercase"},{cls:"text-capitalize",desc:"Capitalize first letter of the text"}]}},methods:{copy(e){this.showcaseCopy(e)}}},RZ={class:"typoSections"},OZ={class:"typoSection"},FZ={class:"typoRows"},zZ={class:"typoTags"},NZ=["onClick"],VZ=["onClick"],HZ={class:"typoSection"},UZ={class:"typoRows"},WZ={class:"typoTags"},JZ=["onClick"],GZ={class:"typoSection"},KZ={class:"typoTable"},YZ={class:"typoTags"},ZZ=["onClick"],XZ={class:"typoDesc"},eX={class:"typoCssBadge"};function tX(e,t,n,a,o,i){return D(),Z("div",RZ,[b("div",OZ,[t[0]||(t[0]=b("div",{class:"typoSectionLabel"},"HEADINGS",-1)),b("div",FZ,[(D(!0),Z(De,null,Ye(o.headings,r=>(D(),Z("div",{key:r.cls,class:"typoRow"},[b("div",zZ,[b("span",{class:"typoTag",onClick:s=>i.copy(r.cls)},ve(r.cls),9,NZ),r.el?(D(),Z("span",{key:0,class:"typoTag",onClick:s=>i.copy(r.el)},ve(r.el),9,VZ)):Re("",!0)]),b("div",{class:nt(["typoSample",r.cls])},ve(r.text),3)]))),128))])]),b("div",HZ,[t[1]||(t[1]=b("div",{class:"typoSectionLabel"},"FONT WEIGHTS",-1)),b("div",UZ,[(D(!0),Z(De,null,Ye(o.weights,r=>(D(),Z("div",{key:r.cls,class:"typoRow"},[b("div",WZ,[b("span",{class:"typoTag",onClick:s=>i.copy(r.cls)},ve(r.cls),9,JZ)]),b("div",{class:nt(["typoSample",r.cls])},ve(r.text),3)]))),128))])]),b("div",GZ,[t[3]||(t[3]=b("div",{class:"typoSectionLabel"},"CSS HELPER CLASSES",-1)),b("div",KZ,[t[2]||(t[2]=b("div",{class:"typoTableHeader"},[b("span",null,"Class Name"),b("span",null,"Description")],-1)),(D(!0),Z(De,null,Ye(o.helpers,r=>(D(),Z("div",{key:r.cls,class:"typoTableRow"},[b("div",YZ,[b("span",{class:"typoTag",onClick:s=>i.copy(r.cls)},ve(r.cls),9,ZZ)]),b("div",XZ,[r.css?(D(),Z(De,{key:0},[W(ve(r.descBefore),1),b("span",eX,ve(r.css),1),W(ve(r.descAfter),1)],64)):(D(),Z(De,{key:1},[W(ve(r.desc),1)],64))])]))),128))])])])}const nX=Be($Z,[["render",tX],["__scopeId","data-v-5849c564"]]),oX=Object.freeze(Object.defineProperty({__proto__:null,default:nX},Symbol.toStringTag,{value:"Module"}));let Rr,Ka=0;const bt=new Array(256);for(let e=0;e<256;e++)bt[e]=(e+256).toString(16).substring(1);const aX=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let a=t;a>0;a--)n.push(Math.floor(Math.random()*256));return n}})(),pu=4096;function vs(){(Rr===void 0||Ka+16>pu)&&(Ka=0,Rr=aX(pu));const e=Array.prototype.slice.call(Rr,Ka,Ka+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,bt[e[0]]+bt[e[1]]+bt[e[2]]+bt[e[3]]+"-"+bt[e[4]]+bt[e[5]]+"-"+bt[e[6]]+bt[e[7]]+"-"+bt[e[8]]+bt[e[9]]+"-"+bt[e[10]]+bt[e[11]]+bt[e[12]]+bt[e[13]]+bt[e[14]]+bt[e[15]]}function iX(e){return e??null}function fu(e,t){return e??(t===!0?`f_${vs()}`:null)}function bf({getValue:e,required:t=!0}={}){if(Qn.value===!0){const n=be(e!==void 0?iX(e()):null);return t===!0&&n.value===null&&Dt(()=>{n.value=`f_${vs()}`}),e!==void 0&&Pe(e,a=>{n.value=fu(a,t)}),n}return e!==void 0?E(()=>fu(e(),t)):be(`f_${vs()}`)}const mu=/^on[A-Z]/;function rX(){const{attrs:e,vnode:t}=Oe(),n={listeners:be({}),attributes:be({})};function a(){const o={},i={};for(const r in e)r!=="class"&&r!=="style"&&mu.test(r)===!1&&(o[r]=e[r]);for(const r in t.props)mu.test(r)===!0&&(i[r]=t.props[r]);n.attributes.value=o,n.listeners.value=i}return Gi(a),a(),n}const Rt={dark:{type:Boolean,default:null}};function Ot(e,t){return E(()=>e.dark===null?t.dark.isActive:e.dark)}function sX({validate:e,resetValidation:t,requiresQForm:n}){const a=Fn(dv,!1);if(a!==!1){const{props:o,proxy:i}=Oe();Object.assign(i,{validate:e,resetValidation:t}),Pe(()=>o.disable,r=>{r===!0?(typeof t=="function"&&t(),a.unbindComponent(i)):a.bindComponent(i)}),Dt(()=>{o.disable!==!0&&a.bindComponent(i)}),at(()=>{o.disable!==!0&&a.unbindComponent(i)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const hu=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,gu=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,vu=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Ya=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Za=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Or={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>hu.test(e),hexaColor:e=>gu.test(e),hexOrHexaColor:e=>vu.test(e),rgbColor:e=>Ya.test(e),rgbaColor:e=>Za.test(e),rgbOrRgbaColor:e=>Ya.test(e)||Za.test(e),hexOrRgbColor:e=>hu.test(e)||Ya.test(e),hexaOrRgbaColor:e=>gu.test(e)||Za.test(e),anyColor:e=>vu.test(e)||Ya.test(e)||Za.test(e)},lX=[!0,!1,"ondemand"],cX={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>lX.includes(e)}};function uX(e,t){const{props:n,proxy:a}=Oe(),o=be(!1),i=be(null),r=be(!1);sX({validate:I,resetValidation:_});let s=0,l;const u=E(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length!==0),c=E(()=>n.disable!==!0&&u.value===!0&&t.value===!1),d=E(()=>n.error===!0||o.value===!0),f=E(()=>typeof n.errorMessage=="string"&&n.errorMessage.length!==0?n.errorMessage:i.value);Pe(()=>n.modelValue,()=>{r.value=!0,c.value===!0&&n.lazyRules===!1&&C()});function h(){n.lazyRules!=="ondemand"&&c.value===!0&&r.value===!0&&C()}Pe(()=>n.reactiveRules,g=>{g===!0?l===void 0&&(l=Pe(()=>n.rules,h,{immediate:!0,deep:!0})):l!==void 0&&(l(),l=void 0)},{immediate:!0}),Pe(()=>n.lazyRules,h),Pe(e,g=>{g===!0?r.value=!0:c.value===!0&&n.lazyRules!=="ondemand"&&C()});function _(){s++,t.value=!1,r.value=!1,o.value=!1,i.value=null,C.cancel()}function I(g=n.modelValue){if(n.disable===!0||u.value===!1)return!0;const y=++s,w=t.value!==!0?()=>{r.value=!0}:()=>{},v=(L,q)=>{L===!0&&w(),o.value=L,i.value=q||null,t.value=!1},x=[];for(let L=0;L<n.rules.length;L++){const q=n.rules[L];let T;if(typeof q=="function"?T=q(g,Or):typeof q=="string"&&Or[q]!==void 0&&(T=Or[q](g)),T===!1||typeof T=="string")return v(!0,T),!1;T!==!0&&T!==void 0&&x.push(T)}return x.length===0?(v(!1),!0):(t.value=!0,Promise.all(x).then(L=>{if(L===void 0||Array.isArray(L)===!1||L.length===0)return y===s&&v(!1),!0;const q=L.find(T=>T===!1||typeof T=="string");return y===s&&v(q!==void 0,q),q===void 0},L=>(y===s&&(console.error(L),v(!0)),!1)))}const C=Fs(I,0);return at(()=>{l==null||l(),C.cancel()}),Object.assign(a,{resetValidation:_,validate:I}),Zo(a,"hasError",()=>d.value),{isDirtyModel:r,hasRules:u,hasError:d,errorMessage:f,validate:I,resetValidation:_}}function La(e){return e!=null&&String(e).length!==0}const dX={...Rt,...cX,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},rr={...dX,maxlength:[Number,String]},al=["update:modelValue","clear","focus","blur"];function il({requiredForAttr:e=!0,tagProp:t,changeEvent:n=!1}={}){const{props:a,proxy:o}=Oe(),i=Ot(a,o.$q),r=bf({required:e,getValue:()=>a.for});return{requiredForAttr:e,changeEvent:n,tag:t===!0?E(()=>a.tag):{value:"label"},isDark:i,editable:E(()=>a.disable!==!0&&a.readonly!==!0),innerLoading:be(!1),focused:be(!1),hasPopupOpen:!1,splitAttrs:rX(),targetUid:r,rootRef:be(null),targetRef:be(null),controlRef:be(null)}}function rl(e){const{props:t,emit:n,slots:a,attrs:o,proxy:i}=Oe(),{$q:r}=i;let s=null;e.hasValue===void 0&&(e.hasValue=E(()=>La(t.modelValue))),e.emitValue===void 0&&(e.emitValue=J=>{n("update:modelValue",J)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:M,onFocusout:$}),Object.assign(e,{clearValue:z,onControlFocusin:M,onControlFocusout:$,focus:q}),e.computedCounter===void 0&&(e.computedCounter=E(()=>{if(t.counter!==!1){const J=typeof t.modelValue=="string"||typeof t.modelValue=="number"?String(t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,ge=t.maxlength!==void 0?t.maxlength:t.maxValues;return J+(ge!==void 0?" / "+ge:"")}}));const{isDirtyModel:l,hasRules:u,hasError:c,errorMessage:d,resetValidation:f}=uX(e.focused,e.innerLoading),h=e.floatingLabel!==void 0?E(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):E(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=E(()=>t.bottomSlots===!0||t.hint!==void 0||u.value===!0||t.counter===!0||t.error!==null),I=E(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),C=E(()=>`q-field row no-wrap items-start q-field--${I.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(h.value===!0?" q-field--float":"")+(y.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(c.value===!0?" q-field--error":"")+(c.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),g=E(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(c.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),y=E(()=>t.labelSlot===!0||t.label!==void 0),w=E(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&c.value!==!0?` text-${t.labelColor}`:"")),v=E(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:h.value,modelValue:t.modelValue,emitValue:e.emitValue})),x=E(()=>{const J={};return e.targetUid.value&&(J.for=e.targetUid.value),t.disable===!0&&(J["aria-disabled"]="true"),J});function L(){var Ie;const J=document.activeElement;let ge=(Ie=e.targetRef)==null?void 0:Ie.value;ge&&(J===null||J.id!==e.targetUid.value)&&(ge.hasAttribute("tabindex")!==!0&&(ge=ge.querySelector("[tabindex]")),ge!==J&&(ge==null||ge.focus({preventScroll:!0})))}function q(){or(L)}function T(){n_(L);const J=document.activeElement;J!==null&&e.rootRef.value.contains(J)&&J.blur()}function M(J){s!==null&&(clearTimeout(s),s=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,n("focus",J))}function $(J,ge){s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,n("blur",J)),ge==null||ge())})}function z(J){var ge;He(J),r.platform.is.mobile!==!0?(((ge=e.targetRef)==null?void 0:ge.value)||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),n("update:modelValue",null),e.changeEvent===!0&&n("change",null),n("clear",t.modelValue),rt(()=>{const Ie=l.value;f(),l.value=Ie})}function O(J){[13,32].includes(J.keyCode)&&z(J)}function Y(){const J=[];return a.prepend!==void 0&&J.push(j("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:At},a.prepend())),J.push(j("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},B())),c.value===!0&&t.noErrorIcon===!1&&J.push(ne("error",[j(Ve,{name:r.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?J.push(ne("inner-loading-append",a.loading!==void 0?a.loading():[j(ja,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&J.push(ne("inner-clearable-append",[j(Ve,{class:"q-field__focusable-action",name:t.clearIcon||r.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":r.lang.label.clear,onKeyup:O,onClick:z})])),a.append!==void 0&&J.push(j("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:At},a.append())),e.getInnerAppend!==void 0&&J.push(ne("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&J.push(e.getControlChild()),J}function B(){const J=[];return t.prefix!==void 0&&t.prefix!==null&&J.push(j("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&J.push(e.getShadowControl()),y.value===!0&&J.push(j("div",{class:w.value},tt(a.label,t.label))),e.getControl!==void 0?J.push(e.getControl()):a.rawControl!==void 0?J.push(a.rawControl()):a.control!==void 0&&J.push(j("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},a.control(v.value))),t.suffix!==void 0&&t.suffix!==null&&J.push(j("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),J.concat(tt(a.default))}function N(){let J,ge;c.value===!0?d.value!==null?(J=[j("div",{role:"alert"},d.value)],ge=`q--slot-error-${d.value}`):(J=tt(a.error),ge="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(J=[j("div",t.hint)],ge=`q--slot-hint-${t.hint}`):(J=tt(a.hint),ge="q--slot-hint"));const Ie=t.counter===!0||a.counter!==void 0;if(t.hideBottomSpace===!0&&Ie===!1&&J===void 0)return;const H=j("div",{key:ge,class:"q-field__messages col"},J);return j("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:At},[t.hideBottomSpace===!0?H:j(Jt,{name:"q-transition--field-message"},()=>H),Ie===!0?j("div",{class:"q-field__counter"},a.counter!==void 0?a.counter():e.computedCounter.value):null])}function ne(J,ge){return ge===null?null:j("div",{key:J,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},ge)}let ee=!1;return Yo(()=>{ee=!0}),Wi(()=>{ee===!0&&t.autofocus===!0&&i.focus()}),t.autofocus===!0&&Dt(()=>{i.focus()}),at(()=>{s!==null&&clearTimeout(s)}),Object.assign(i,{focus:q,blur:T}),function(){const ge=e.getControl===void 0&&a.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...x.value}:x.value;return j(e.tag.value,{ref:e.rootRef,class:[C.value,o.class],style:o.style,...ge},[a.before!==void 0?j("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:At},a.before()):null,j("div",{class:"q-field__inner relative-position col self-stretch"},[j("div",{ref:e.controlRef,class:g.value,tabindex:-1,...e.controlEvents},Y()),_.value===!0?N():null]),a.after!==void 0?j("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:At},a.after()):null])}}const bu={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},{tokenMap:_u,tokenKeys:pX}=_f({"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}});function _f(e){const t=Object.keys(e),n={};return t.forEach(a=>{const o=e[a];n[a]={...o,regex:new RegExp(o.pattern)}}),{tokenMap:n,tokenKeys:t}}function yf(e){return new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+e.join("")+"])|(.)","g")}const yu=/[.*+?^${}()|[\]\\]/g,fX=yf(pX),dt="",mX={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean,maskTokens:Object};function hX(e,t,n,a){let o,i,r,s,l,u;const c=E(()=>{if(e.maskTokens===void 0||e.maskTokens===null)return{tokenMap:_u,tokenRegexMask:fX};const{tokenMap:$}=_f(e.maskTokens),z={..._u,...$};return{tokenMap:z,tokenRegexMask:yf(Object.keys(z))}}),d=be(null),f=be(_());function h(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Pe(()=>e.type+e.autogrow,C),Pe(()=>e.mask,$=>{if($!==void 0)g(f.value,!0);else{const z=T(f.value);C(),e.modelValue!==z&&t("update:modelValue",z)}}),Pe(()=>e.fillMask+e.reverseFillMask,()=>{d.value===!0&&g(f.value,!0)}),Pe(()=>e.unmaskedValue,()=>{d.value===!0&&g(f.value)});function _(){if(C(),d.value===!0){const $=L(T(e.modelValue));return e.fillMask!==!1?M($):$}return e.modelValue}function I($){if($<o.length)return o.slice(-$);let z="",O=o;const Y=O.indexOf(dt);if(Y!==-1){for(let B=$-O.length;B>0;B--)z+=dt;O=O.slice(0,Y)+z+O.slice(Y)}return O}function C(){if(d.value=e.mask!==void 0&&e.mask.length!==0&&h(),d.value===!1){s=void 0,o="",i="";return}const $=bu[e.mask]===void 0?e.mask:bu[e.mask],z=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",O=z.replace(yu,"\\$&"),Y=[],B=[],N=[];let ne=e.reverseFillMask===!0,ee="",J="";$.replace(c.value.tokenRegexMask,(F,le,ke,Qe,ie)=>{if(Qe!==void 0){const m=c.value.tokenMap[Qe];N.push(m),J=m.negate,ne===!0&&(B.push("(?:"+J+"+)?("+m.pattern+"+)?(?:"+J+"+)?("+m.pattern+"+)?"),ne=!1),B.push("(?:"+J+"+)?("+m.pattern+")?")}else if(ke!==void 0)ee="\\"+(ke==="\\"?"":ke),N.push(ke),Y.push("([^"+ee+"]+)?"+ee+"?");else{const m=le!==void 0?le:ie;ee=m==="\\"?"\\\\\\\\":m.replace(yu,"\\\\$&"),N.push(m),Y.push("([^"+ee+"]+)?"+ee+"?")}});const ge=new RegExp("^"+Y.join("")+"("+(ee===""?".":"[^"+ee+"]")+"+)?"+(ee===""?"":"["+ee+"]*")+"$"),Ie=B.length-1,H=B.map((F,le)=>le===0&&e.reverseFillMask===!0?new RegExp("^"+O+"*"+F):le===Ie?new RegExp("^"+F+"("+(J===""?".":J)+"+)?"+(e.reverseFillMask===!0?"$":O+"*")):new RegExp("^"+F));r=N,s=F=>{const le=ge.exec(e.reverseFillMask===!0?F:F.slice(0,N.length+1));le!==null&&(F=le.slice(1).join(""));const ke=[],Qe=H.length;for(let ie=0,m=F;ie<Qe;ie++){const k=H[ie].exec(m);if(k===null)break;m=m.slice(k.shift().length),ke.push(...k)}return ke.length!==0?ke.join(""):F},o=N.map(F=>typeof F=="string"?F:dt).join(""),i=o.split(dt).join(z)}function g($,z,O){const Y=a.value,B=Y.selectionEnd,N=Y.value.length-B,ne=T($);z===!0&&C();const ee=L(ne,z),J=e.fillMask!==!1?M(ee):ee,ge=f.value!==J;Y.value!==J&&(Y.value=J),ge===!0&&(f.value=J),document.activeElement===Y&&rt(()=>{if(J===i){const H=e.reverseFillMask===!0?i.length:0;Y.setSelectionRange(H,H,"forward");return}if(O==="insertFromPaste"&&e.reverseFillMask!==!0){const H=Y.selectionEnd;let F=B-1;for(let le=l;le<=F&&le<H;le++)o[le]!==dt&&F++;w.right(Y,F);return}if(["deleteContentBackward","deleteContentForward"].indexOf(O)!==-1){const H=e.reverseFillMask===!0?B===0?J.length>ee.length?1:0:Math.max(0,J.length-(J===i?0:Math.min(ee.length,N)+1))+1:B;Y.setSelectionRange(H,H,"forward");return}if(e.reverseFillMask===!0)if(ge===!0){const H=Math.max(0,J.length-(J===i?0:Math.min(ee.length,N+1)));H===1&&B===1?Y.setSelectionRange(H,H,"forward"):w.rightReverse(Y,H)}else{const H=J.length-N;Y.setSelectionRange(H,H,"backward")}else if(ge===!0){const H=Math.max(0,o.indexOf(dt),Math.min(ee.length,B)-1);w.right(Y,H)}else{const H=B-1;w.right(Y,H)}});const Ie=e.unmaskedValue===!0?T(J):J;String(e.modelValue)!==Ie&&(e.modelValue!==null||Ie!=="")&&n(Ie,!0)}function y($,z,O){const Y=L(T($.value));z=Math.max(0,o.indexOf(dt),Math.min(Y.length,z)),l=z,$.setSelectionRange(z,O,"forward")}const w={left($,z){const O=o.slice(z-1).indexOf(dt)===-1;let Y=Math.max(0,z-1);for(;Y>=0;Y--)if(o[Y]===dt){z=Y,O===!0&&z++;break}if(Y<0&&o[z]!==void 0&&o[z]!==dt)return w.right($,0);z>=0&&$.setSelectionRange(z,z,"backward")},right($,z){const O=$.value.length;let Y=Math.min(O,z+1);for(;Y<=O;Y++)if(o[Y]===dt){z=Y;break}else o[Y-1]===dt&&(z=Y);if(Y>O&&o[z-1]!==void 0&&o[z-1]!==dt)return w.left($,O);$.setSelectionRange(z,z,"forward")},leftReverse($,z){const O=I($.value.length);let Y=Math.max(0,z-1);for(;Y>=0;Y--)if(O[Y-1]===dt){z=Y;break}else if(O[Y]===dt&&(z=Y,Y===0))break;if(Y<0&&O[z]!==void 0&&O[z]!==dt)return w.rightReverse($,0);z>=0&&$.setSelectionRange(z,z,"backward")},rightReverse($,z){const O=$.value.length,Y=I(O),B=Y.slice(0,z+1).indexOf(dt)===-1;let N=Math.min(O,z+1);for(;N<=O;N++)if(Y[N-1]===dt){z=N,z>0&&B===!0&&z--;break}if(N>O&&Y[z-1]!==void 0&&Y[z-1]!==dt)return w.leftReverse($,O);$.setSelectionRange(z,z,"forward")}};function v($){t("click",$),u=void 0}function x($){if(t("keydown",$),nr($)===!0||$.altKey===!0)return;const z=a.value,O=z.selectionStart,Y=z.selectionEnd;if($.shiftKey||(u=void 0),$.keyCode===37||$.keyCode===39){$.shiftKey&&u===void 0&&(u=z.selectionDirection==="forward"?O:Y);const B=w[($.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if($.preventDefault(),B(z,u===O?Y:O),$.shiftKey){const N=z.selectionStart;z.setSelectionRange(Math.min(u,N),Math.max(u,N),"forward")}}else $.keyCode===8&&e.reverseFillMask!==!0&&O===Y?(w.left(z,O),z.setSelectionRange(z.selectionStart,Y,"backward")):$.keyCode===46&&e.reverseFillMask===!0&&O===Y&&(w.rightReverse(z,Y),z.setSelectionRange(O,z.selectionEnd,"forward"))}function L($,z){if($==null||$==="")return"";if(e.reverseFillMask===!0)return q($,z);const O=r;let Y=0,B="";for(let N=0;N<O.length;N++){const ne=$[Y],ee=O[N];if(typeof ee=="string")B+=ee,z===!0&&ne===ee&&Y++;else if(ne!==void 0&&ee.regex.test(ne))B+=ee.transform!==void 0?ee.transform(ne):ne,Y++;else return B}return B}function q($,z){const O=r,Y=o.indexOf(dt);let B=$.length-1,N="";for(let ne=O.length-1;ne>=0&&B!==-1;ne--){const ee=O[ne];let J=$[B];if(typeof ee=="string")N=ee+N,z===!0&&J===ee&&B--;else if(J!==void 0&&ee.regex.test(J))do N=(ee.transform!==void 0?ee.transform(J):J)+N,B--,J=$[B];while(Y===ne&&J!==void 0&&ee.regex.test(J));else return N}return N}function T($){return typeof $!="string"||s===void 0?typeof $=="number"?s(String($)):$:s($)}function M($){return i.length-$.length<=0?$:e.reverseFillMask===!0&&$.length!==0?i.slice(0,-$.length)+$:$+i.slice($.length)}return{innerValue:f,hasMask:d,moveCursorForPaste:y,updateMaskValue:g,onMaskedKeydown:x,onMaskedClick:v}}const po={name:String};function wf(e){return E(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function Ma(e={}){return(t,n,a)=>{t[n](j("input",{class:"hidden"+(a||""),...e.value}))}}function Sf(e){return E(()=>e.name||e.for)}function gX(e,t){function n(){const a=e.modelValue;try{const o="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(a)===a&&("length"in a?Array.from(a):[a]).forEach(i=>{o.items.add(i)}),{files:o.files}}catch{return{files:void 0}}}return E(()=>{if(e.type==="file")return n()})}const vX=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,bX=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,_X=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,yX=/[a-z0-9_ -]$/i;function kf(e){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,e(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(Ue.is.firefox===!0?yX.test(n.data)===!1:vX.test(n.data)===!0||bX.test(n.data)===!0||_X.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}const sl=Te({name:"QInput",inheritAttrs:!1,props:{...rr,...mX,...po,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...al,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:n}){const{proxy:a}=Oe(),{$q:o}=a,i={};let r=NaN,s,l,u=null,c;const d=be(null),f=Sf(e),{innerValue:h,hasMask:_,moveCursorForPaste:I,updateMaskValue:C,onMaskedKeydown:g,onMaskedClick:y}=hX(e,t,ne,d),w=gX(e),v=E(()=>La(h.value)),x=kf(B),L=il({changeEvent:!0}),q=E(()=>e.type==="textarea"||e.autogrow===!0),T=E(()=>q.value===!0||["text","search","url","tel","password"].includes(e.type)),M=E(()=>{const F={...L.splitAttrs.listeners.value,onInput:B,onPaste:Y,onChange:J,onBlur:ge,onFocus:Et};return F.onCompositionstart=F.onCompositionupdate=F.onCompositionend=x,_.value===!0&&(F.onKeydown=g,F.onClick=y),e.autogrow===!0&&(F.onAnimationend=N),F}),$=E(()=>{const F={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:f.value,...L.splitAttrs.attributes.value,id:L.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return q.value===!1&&(F.type=e.type),e.autogrow===!0&&(F.rows=1),F});Pe(()=>e.type,()=>{d.value&&(d.value.value=e.modelValue)}),Pe(()=>e.modelValue,F=>{if(_.value===!0){if(l===!0&&(l=!1,String(F)===r))return;C(F)}else h.value!==F&&(h.value=F,e.type==="number"&&i.hasOwnProperty("value")===!0&&(s===!0?s=!1:delete i.value));e.autogrow===!0&&rt(ee)}),Pe(()=>e.autogrow,F=>{F===!0?rt(ee):d.value!==null&&n.rows>0&&(d.value.style.height="auto")}),Pe(()=>e.dense,()=>{e.autogrow===!0&&rt(ee)});function z(){or(()=>{const F=document.activeElement;d.value!==null&&d.value!==F&&(F===null||F.id!==L.targetUid.value)&&d.value.focus({preventScroll:!0})})}function O(){var F;(F=d.value)==null||F.select()}function Y(F){if(_.value===!0&&e.reverseFillMask!==!0){const le=F.target;I(le,le.selectionStart,le.selectionEnd)}t("paste",F)}function B(F){if(!F||!F.target)return;if(e.type==="file"){t("update:modelValue",F.target.files);return}const le=F.target.value;if(F.target.qComposing===!0){i.value=le;return}if(_.value===!0)C(le,!1,F.inputType);else if(ne(le),T.value===!0&&F.target===document.activeElement){const{selectionStart:ke,selectionEnd:Qe}=F.target;ke!==void 0&&Qe!==void 0&&rt(()=>{F.target===document.activeElement&&le.indexOf(F.target.value)===0&&F.target.setSelectionRange(ke,Qe)})}e.autogrow===!0&&ee()}function N(F){t("animationend",F),ee()}function ne(F,le){c=()=>{u=null,e.type!=="number"&&i.hasOwnProperty("value")===!0&&delete i.value,e.modelValue!==F&&r!==F&&(r=F,le===!0&&(l=!0),t("update:modelValue",F),rt(()=>{r===F&&(r=NaN)})),c=void 0},e.type==="number"&&(s=!0,i.value=F),e.debounce!==void 0?(u!==null&&clearTimeout(u),i.value=F,u=setTimeout(c,e.debounce)):c()}function ee(){requestAnimationFrame(()=>{const F=d.value;if(F!==null){const le=F.parentNode.style,{scrollTop:ke}=F,{overflowY:Qe,maxHeight:ie}=o.platform.is.firefox===!0?{}:window.getComputedStyle(F),m=Qe!==void 0&&Qe!=="scroll";m===!0&&(F.style.overflowY="hidden"),le.marginBottom=F.scrollHeight-1+"px",F.style.height="1px",F.style.height=F.scrollHeight+"px",m===!0&&(F.style.overflowY=parseInt(ie,10)<F.scrollHeight?"auto":"hidden"),le.marginBottom="",F.scrollTop=ke}})}function J(F){x(F),u!==null&&(clearTimeout(u),u=null),c==null||c(),t("change",F.target.value)}function ge(F){F!==void 0&&Et(F),u!==null&&(clearTimeout(u),u=null),c==null||c(),s=!1,l=!1,delete i.value,e.type!=="file"&&setTimeout(()=>{d.value!==null&&(d.value.value=h.value!==void 0?h.value:"")})}function Ie(){return i.hasOwnProperty("value")===!0?i.value:h.value!==void 0?h.value:""}at(()=>{ge()}),Dt(()=>{e.autogrow===!0&&ee()}),Object.assign(L,{innerValue:h,fieldClass:E(()=>`q-${q.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:E(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:d,emitValue:ne,hasValue:v,floatingLabel:E(()=>v.value===!0&&(e.type!=="number"||isNaN(h.value)===!1)||La(e.displayValue)),getControl:()=>j(q.value===!0?"textarea":"input",{ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...$.value,...M.value,...e.type!=="file"?{value:Ie()}:w.value}),getShadowControl:()=>j("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(q.value===!0?"":" text-no-wrap")},[j("span",{class:"invisible"},Ie()),j("span",e.shadowText)])});const H=rl(L);return Object.assign(a,{focus:z,select:O,getNativeElement:()=>d.value}),Zo(a,"nativeEl",()=>d.value),H}});function wX(){const e=be(!Qn.value);return e.value===!1&&Dt(()=>{e.value=!0}),{isHydrated:e}}const xf=typeof ResizeObserver<"u",wu=xf===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},SX=Te({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n=null,a,o={width:-1,height:-1};function i(l){l===!0||e.debounce===0||e.debounce==="0"?r():n===null&&(n=setTimeout(r,e.debounce))}function r(){if(n!==null&&(clearTimeout(n),n=null),a){const{offsetWidth:l,offsetHeight:u}=a;(l!==o.width||u!==o.height)&&(o={width:l,height:u},t("resize",o))}}const{proxy:s}=Oe();if(s.trigger=i,xf===!0){let l;const u=c=>{a=s.$el.parentNode,a?(l=new ResizeObserver(i),l.observe(a),r()):c!==!0&&rt(()=>{u(!0)})};return Dt(()=>{u()}),at(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():a&&l.unobserve(a))}),Bt}else{let l=function(){n!==null&&(clearTimeout(n),n=null),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",i,gt.passive),d=void 0)},u=function(){l(),a!=null&&a.contentDocument&&(d=a.contentDocument.defaultView,d.addEventListener("resize",i,gt.passive),r())};const{isHydrated:c}=wX();let d;return Dt(()=>{rt(()=>{a=s.$el,a&&u()})}),at(l),()=>{if(c.value===!0)return j("object",{class:"q--avoid-card-border",style:wu.style,tabindex:-1,type:"text/html",data:wu.url,"aria-hidden":"true",onLoad:u})}}}});let Ea=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,Ea=e.scrollLeft>=0,e.remove()}function kX(e,t,n){const a=n===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?a[0]:a[1]}${e?` text-${e}`:""}`}const xX=["left","center","right","justify"],ll=Te({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>xX.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:n}){const{proxy:a}=Oe(),{$q:o}=a,{registerTick:i}=Fo(),{registerTick:r}=Fo(),{registerTick:s}=Fo(),{registerTimeout:l,removeTimeout:u}=Jo(),{registerTimeout:c,removeTimeout:d}=Jo(),f=be(null),h=be(null),_=be(e.modelValue),I=be(!1),C=be(!0),g=be(!1),y=be(!1),w=[],v=be(0),x=be(!1);let L=null,q=null,T;const M=E(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:kX(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),$=E(()=>{const X=v.value,te=_.value;for(let ue=0;ue<X;ue++)if(w[ue].name.value===te)return!0;return!1}),z=E(()=>`q-tabs__content--align-${I.value===!0?"left":y.value===!0?"justify":e.align}`),O=E(()=>`q-tabs row no-wrap items-center q-tabs--${I.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Y=E(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+z.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),B=E(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),N=E(()=>e.vertical!==!0&&o.lang.rtl===!0),ne=E(()=>Ea===!1&&N.value===!0);Pe(N,F),Pe(()=>e.modelValue,X=>{ee({name:X,setCurrent:!0,skipEmit:!0})}),Pe(()=>e.outsideArrows,J);function ee({name:X,setCurrent:te,skipEmit:ue}){_.value!==X&&(ue!==!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",X),(te===!0||e["onUpdate:modelValue"]===void 0)&&(Ie(_.value,X),_.value=X))}function J(){i(()=>{f.value&&ge({width:f.value.offsetWidth,height:f.value.offsetHeight})})}function ge(X){if(B.value===void 0||h.value===null)return;const te=X[B.value.container],ue=Math.min(h.value[B.value.scroll],Array.prototype.reduce.call(h.value.children,(Ae,xe)=>Ae+(xe[B.value.content]||0),0)),_e=te>0&&ue>te;I.value=_e,_e===!0&&r(F),y.value=te<parseInt(e.breakpoint,10)}function Ie(X,te){const ue=X!=null&&X!==""?w.find(Ae=>Ae.name.value===X):null,_e=te!=null&&te!==""?w.find(Ae=>Ae.name.value===te):null;if(oe===!0)oe=!1;else if(ue&&_e){const Ae=ue.tabIndicatorRef.value,xe=_e.tabIndicatorRef.value;L!==null&&(clearTimeout(L),L=null),Ae.style.transition="none",Ae.style.transform="none",xe.style.transition="none",xe.style.transform="none";const Ce=Ae.getBoundingClientRect(),je=xe.getBoundingClientRect();xe.style.transform=e.vertical===!0?`translate3d(0,${Ce.top-je.top}px,0) scale3d(1,${je.height?Ce.height/je.height:1},1)`:`translate3d(${Ce.left-je.left}px,0,0) scale3d(${je.width?Ce.width/je.width:1},1,1)`,s(()=>{L=setTimeout(()=>{L=null,xe.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",xe.style.transform="none"},70)})}_e&&I.value===!0&&H(_e.rootRef.value)}function H(X){const{left:te,width:ue,top:_e,height:Ae}=h.value.getBoundingClientRect(),xe=X.getBoundingClientRect();let Ce=e.vertical===!0?xe.top-_e:xe.left-te;if(Ce<0){h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(Ce),F();return}Ce+=e.vertical===!0?xe.height-Ae:xe.width-ue,Ce>0&&(h.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(Ce),F())}function F(){const X=h.value;if(X===null)return;const te=X.getBoundingClientRect(),ue=e.vertical===!0?X.scrollTop:Math.abs(X.scrollLeft);N.value===!0?(C.value=Math.ceil(ue+te.width)<X.scrollWidth-1,g.value=ue>0):(C.value=ue>0,g.value=e.vertical===!0?Math.ceil(ue+te.height)<X.scrollHeight:Math.ceil(ue+te.width)<X.scrollWidth)}function le(X){q!==null&&clearInterval(q),q=setInterval(()=>{Q(X)===!0&&ie()},5)}function ke(){le(ne.value===!0?Number.MAX_SAFE_INTEGER:0)}function Qe(){le(ne.value===!0?0:Number.MAX_SAFE_INTEGER)}function ie(){q!==null&&(clearInterval(q),q=null)}function m(X,te){const ue=Array.prototype.filter.call(h.value.children,je=>je===te||je.matches&&je.matches(".q-tab.q-focusable")===!0),_e=ue.length;if(_e===0)return;if(X===36)return H(ue[0]),ue[0].focus(),!0;if(X===35)return H(ue[_e-1]),ue[_e-1].focus(),!0;const Ae=X===(e.vertical===!0?38:37),xe=X===(e.vertical===!0?40:39),Ce=Ae===!0?-1:xe===!0?1:void 0;if(Ce!==void 0){const je=N.value===!0?-1:1,Fe=ue.indexOf(te)+Ce*je;return Fe>=0&&Fe<_e&&(H(ue[Fe]),ue[Fe].focus({preventScroll:!0})),!0}}const k=E(()=>ne.value===!0?{get:X=>Math.abs(X.scrollLeft),set:(X,te)=>{X.scrollLeft=-te}}:e.vertical===!0?{get:X=>X.scrollTop,set:(X,te)=>{X.scrollTop=te}}:{get:X=>X.scrollLeft,set:(X,te)=>{X.scrollLeft=te}});function Q(X){const te=h.value,{get:ue,set:_e}=k.value;let Ae=!1,xe=ue(te);const Ce=X<xe?-1:1;return xe+=Ce*5,xe<0?(Ae=!0,xe=0):(Ce===-1&&xe<=X||Ce===1&&xe>=X)&&(Ae=!0,xe=X),_e(te,xe),F(),Ae}function U(X,te){for(const ue in X)if(X[ue]!==te[ue])return!1;return!0}function V(){let X=null,te={matchedLen:0,queryDiff:9999,hrefLen:0};const ue=w.filter(Ce=>{var je;return((je=Ce.routeData)==null?void 0:je.hasRouterLink.value)===!0}),{hash:_e,query:Ae}=a.$route,xe=Object.keys(Ae).length;for(const Ce of ue){const je=Ce.routeData.exact.value===!0;if(Ce.routeData[je===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Fe,query:it,matched:mt,href:ce}=Ce.routeData.resolvedLink.value,Le=Object.keys(it).length;if(je===!0){if(Fe!==_e||Le!==xe||U(Ae,it)===!1)continue;X=Ce.name.value;break}if(Fe!==""&&Fe!==_e||Le!==0&&U(it,Ae)===!1)continue;const Ee={matchedLen:mt.length,queryDiff:xe-Le,hrefLen:ce.length-Fe.length};if(Ee.matchedLen>te.matchedLen){X=Ce.name.value,te=Ee;continue}else if(Ee.matchedLen!==te.matchedLen)continue;if(Ee.queryDiff<te.queryDiff)X=Ce.name.value,te=Ee;else if(Ee.queryDiff!==te.queryDiff)continue;Ee.hrefLen>te.hrefLen&&(X=Ce.name.value,te=Ee)}if(X===null&&w.some(Ce=>Ce.routeData===void 0&&Ce.name.value===_.value)===!0){oe=!1;return}ee({name:X,setCurrent:!0})}function A(X){if(u(),x.value!==!0&&f.value!==null&&X.target&&typeof X.target.closest=="function"){const te=X.target.closest(".q-tab");te&&f.value.contains(te)===!0&&(x.value=!0,I.value===!0&&H(te))}}function P(){l(()=>{x.value=!1},30)}function K(){me.avoidRouteWatcher===!1?c(V):d()}function re(){if(T===void 0){const X=Pe(()=>a.$route.fullPath,K);T=()=>{X(),T=void 0}}}function ae(X){w.push(X),v.value++,J(),X.routeData===void 0||a.$route===void 0?c(()=>{if(I.value===!0){const te=_.value,ue=te!=null&&te!==""?w.find(_e=>_e.name.value===te):null;ue&&H(ue.rootRef.value)}}):(re(),X.routeData.hasRouterLink.value===!0&&K())}function se(X){w.splice(w.indexOf(X),1),v.value--,J(),T!==void 0&&X.routeData!==void 0&&(w.every(te=>te.routeData===void 0)===!0&&T(),K())}const me={currentModel:_,tabProps:M,hasFocus:x,hasActiveTab:$,registerTab:ae,unregisterTab:se,verifyRouteModel:K,updateModel:ee,onKbdNavigate:m,avoidRouteWatcher:!1};wd(bp,me);function fe(){L!==null&&clearTimeout(L),ie(),T==null||T()}let de,oe;return at(fe),Yo(()=>{de=T!==void 0,fe()}),Wi(()=>{de===!0&&(re(),oe=!0,K()),J()}),()=>j("div",{ref:f,class:O.value,role:"tablist",onFocusin:A,onFocusout:P},[j(SX,{onResize:ge}),j("div",{ref:h,class:Y.value,onScroll:F},tt(t.default)),j(Ve,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(C.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ke,onTouchstartPassive:ke,onMouseupPassive:ie,onMouseleavePassive:ie,onTouchendPassive:ie}),j(Ve,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(g.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Qe,onTouchstartPassive:Qe,onMouseupPassive:ie,onMouseleavePassive:ie,onTouchendPassive:ie})])}});let CX=0;const QX=["click","keydown"],AX={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${CX++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function IX(e,t,n,a){const o=Fn(bp,Cr);if(o===Cr)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Cr;const{proxy:i}=Oe(),r=be(null),s=be(null),l=be(null),u=E(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),c=E(()=>o.currentModel.value===e.name),d=E(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(c.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),f=E(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),h=E(()=>e.disable===!0||o.hasFocus.value===!0||c.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function _(w,v){var x;if(v!==!0&&(w==null?void 0:w.qAvoidFocus)!==!0&&((x=r.value)==null||x.focus()),e.disable!==!0){o.updateModel({name:e.name}),n("click",w);return}}function I(w){An(w,[13,32])?_(w,!0):nr(w)!==!0&&w.keyCode>=35&&w.keyCode<=40&&w.altKey!==!0&&w.metaKey!==!0&&o.onKbdNavigate(w.keyCode,i.$el)===!0&&He(w),n("keydown",w)}function C(){const w=o.tabProps.value.narrowIndicator,v=[],x=j("div",{ref:l,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&v.push(j(Ve,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&v.push(j("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&v.push(e.alertIcon!==void 0?j(Ve,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):j("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),w===!0&&v.push(x);const L=[j("div",{class:"q-focus-helper",tabindex:-1,ref:r}),j("div",{class:f.value},Ut(t.default,v))];return w===!1&&L.push(x),L}const g={name:E(()=>e.name),rootRef:s,tabIndicatorRef:l,routeData:a};at(()=>{o.unregisterTab(g)}),Dt(()=>{o.registerTab(g)});function y(w,v){const x={ref:s,class:d.value,tabindex:h.value,role:"tab","aria-selected":c.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:_,onKeydown:I,...v};return he(j(w,x,C()),[[Yt,u.value]])}return{renderTab:y,$tabs:o}}const cl=Te({name:"QTab",props:AX,emits:QX,setup(e,{slots:t,emit:n}){const{renderTab:a}=IX(e,t,n);return()=>a("div")}}),qX="component",TX={docsUrl:"https://v2.quasar.dev/vue-components/icon"},LX={size:{type:"String",desc:"Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",examples:["'16px'","'2rem'","'xs'","'md'"],category:"style"},tag:{type:"String",desc:"HTML tag to render, unless no icon is supplied or it's an svg icon",category:"content",default:"'i'",examples:["'div'","'i'"],required:!1},name:{type:"String",desc:"Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",examples:["'map'","'ion-add'","'img:https://cdn.quasar.dev/logo-v2/svg/logo.svg'","'img:path/to/some_image.png'"],category:"model"},color:{type:"String",tsType:"NamedColor",desc:"Color name for component from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},left:{type:"Boolean",desc:"Useful if icon is on the left side of something: applies a standard margin on the right side of Icon",category:"content"},right:{type:"Boolean",desc:"Useful if icon is on the right side of something: applies a standard margin on the left side of Icon",category:"content"}},EX={default:{desc:"Suggestions: QTooltip or QMenu"}},BX={type:qX,meta:TX,props:LX,slots:EX},Cf=[["search","action",859581],["home","action",793300],["account_circle","action",641729],["settings","action",607621],["done","action",527325],["info","action",464431],["close","navigation",430400],["check_circle","action",419522],["delete","action",386596],["person","social",377620],["menu","navigation",370920],["expand_more","navigation",356074],["add","content",350933],["visibility","action",329374],["shopping_cart","action",319349],["edit","image",313061],["favorite","action",283286],["email","communication",276632],["description","action",267345],["logout","action",259477],["arrow_back","navigation",249506],["favorite_border","action",228557],["chevron_right","navigation",224130],["local_shipping","maps",223405],["lock","action",223334],["location_on","communication",210762],["schedule","action",208045],["notifications","social",207712],["call","communication",191429],["language","action",189405],["file_download","file",183107],["arrow_forward_ios","navigation",176941],["cancel","navigation",176704],["groups","social",176571],["arrow_back_ios","navigation",175592],["help_outline","action",169919],["arrow_drop_down","navigation",164477],["verified","action",161941],["face","action",160976],["manage_accounts","action",159982],["play_arrow","av",157971],["place","maps",153592],["more_vert","navigation",150883],["thumb_up","action",150152],["add_circle_outline","content",149778],["filter_alt","action",147450],["dashboard","action",143560],["star","toggle",143336],["event","action",143177],["fingerprint","action",141621],["list","action",141323],["content_copy","content",140096],["people","social",137305],["check_circle_outline","action",136080],["visibility_off","action",134054],["add_circle","content",133955],["login","action",132225],["arrow_forward","navigation",130656],["send","content",130600],["warning","alert",129646],["chevron_left","navigation",129009],["check_box","toggle",128614],["calendar_today","action",128151],["share","social",126061],["highlight_off","action",124863],["navigate_next","image",121275],["phone","communication",119594],["help","action",118957],["paid","action",115732],["task_alt","action",114533],["question_answer","action",112316],["expand_less","navigation",110665],["check","navigation",110611],["error","alert",110603],["clear","content",109430],["article","action",107858],["date_range","action",107269],["open_in_new","action",104950],["photo_camera","image",104019],["check_box_outline_blank","toggle",103937],["more_horiz","navigation",103446],["image","image",100657],["school","social",100028],["refresh","navigation",99113],["shopping_bag","action",98844],["support_agent","notification",98712],["lightbulb","action",97947],["person_outline","social",97001],["credit_card","action",95696],["history","action",95314],["file_upload","file",94856],["perm_identity","action",94263],["trending_up","action",92677],["account_balance","action",92123],["delete_outline","action",91483],["attach_money","editor",90693],["person_add","social",89762],["save","content",88994],["public","social",88481],["verified_user","action",87426],["error_outline","alert",87010],["radio_button_unchecked","toggle",86414],["assignment","action",86264],["mail","content",86019],["fact_check","action",85987],["report_problem","action",84903],["link","content",83661],["emoji_events","social",81591],["star_rate","action",81137],["download","file",79832],["remove","content",79009],["play_circle_filled","av",78977],["calendar_month","action",78850],["business","communication",77933],["apps","navigation",75666],["arrow_right_alt","action",75418],["chat","communication",75386],["filter_list","content",75173],["menu_book","maps",74776],["folder","file",74642],["payments","navigation",74453],["account_balance_wallet","action",73570],["autorenew","action",73518],["build","action",72992],["keyboard_arrow_down","hardware",72633],["view_list","action",71600],["tune","image",70169],["print","action",70103],["store","action",70067],["work","action",70065],["analytics","action",69578],["delete_forever","action",69533],["videocam","av",69308],["play_circle","av",68699],["radio_button_checked","toggle",68506],["mail_outline","communication",68398],["phone_iphone","hardware",68236],["arrow_upward","navigation",66840],["today","action",66245],["admin_panel_settings","action",66146],["grid_view","file",65550],["picture_as_pdf","image",65255],["east","navigation",64723],["group","social",64180],["mic","av",64120],["lock_open","action",63810],["watch_later","action",63087],["receipt_long","image",62716],["volume_up","av",62577],["inventory_2","content",62286],["grade","action",62180],["local_offer","maps",61615],["update","action",61566],["circle","image",61524],["badge","maps",61053],["inventory","content",61036],["edit_note","editor",60584],["savings","action",60478],["map","maps",60098],["code","action",60049],["room","action",59933],["light_mode","device",59343],["add_shopping_cart","action",59192],["contact_support","action",58567],["category","maps",58432],["insights","content",58355],["receipt","action",57894],["campaign","navigation",57277],["warning_amber","alert",57188],["power_settings_new","action",57103],["format_list_bulleted","editor",56311],["star_border","toggle",55672],["pause","av",55616],["done_all","action",55286],["restart_alt","device",55243],["remove_circle_outline","content",54585],["pets","action",54315],["arrow_back_ios_new","navigation",54204],["wifi","notification",53802],["list_alt","communication",53610],["engineering","social",53370],["storefront","places",53040],["mode_edit","editor",52331],["bolt","content",52320],["notifications_active","social",52291],["toggle_on","toggle",52233],["construction","social",52046],["dark_mode","device",51777],["sort","content",51744],["arrow_downward","navigation",51149],["qr_code_scanner","communication",51095],["explore","action",50868],["attach_file","editor",50583],["bookmark","action",50396],["account_box","action",50184],["monetization_on","editor",49749],["note_add","action",49554],["vpn_key","communication",49322],["timer","image",49068],["pending_actions","action",48563],["reorder","action",48295],["upload_file","file",48256],["arrow_right","navigation",48221],["account_tree","notification",47857],["bookmark_border","action",47575],["flag","content",47224],["apartment","places",46983],["smartphone","hardware",46964],["sync","notification",46675],["shopping_basket","action",46617],["payment","action",46500],["auto_awesome","image",46427],["people_alt","social",46296],["restaurant","maps",45980],["play_circle_outline","av",45622],["reply","content",45492],["task","device",45442],["launch","action",45220],["manage_search","search",45184],["touch_app","action",44755],["add_box","content",44745],["supervisor_account","action",44640],["drag_indicator","action",44591],["pending","action",44590],["menu_open","navigation",44395],["directions_car","maps",44128],["push_pin","content",44068],["zoom_in","action",43861],["priority_high","notification",43733],["group_add","social",43695],["local_fire_department","maps",43552],["assessment","action",43475],["remove_circle","content",43456],["leaderboard","action",43296],["block","content",43263],["summarize","device",42637],["thumb_up_off_alt","action",42634],["event_available","notification",42231],["chat_bubble_outline","communication",42095],["auto_stories","image",41486],["feed","search",41287],["open_in_full","action",41142],["calculate","content",41136],["post_add","editor",40723],["cloud_upload","file",40630],["bar_chart","editor",40133],["alternate_email","communication",39865],["assignment_ind","action",39706],["create","content",39418],["preview","action",39332],["done_outline","action",39297],["password","device",39283],["psychology","social",39198],["checklist","editor",39134],["exit_to_app","action",39113],["published_with_changes","action",38945],["collections","image",38741],["volunteer_activism","maps",38700],["card_giftcard","action",38194],["star_outline","toggle",38163],["sell","device",37505],["navigate_before","image",37473],["undo","content",37456],["tips_and_updates","action",37175],["thumb_up_alt","social",37084],["view_in_ar","action",36878],["add_a_photo","image",36826],["fullscreen","navigation",36779],["health_and_safety","social",36287],["keyboard_arrow_right","hardware",36112],["arrow_drop_up","navigation",35878],["water_drop","social",35818],["feedback","action",35780],["label","action",35717],["swap_horiz","action",35656],["computer","hardware",35600],["unfold_more","navigation",35372],["travel_explore","social",35355],["palette","image",35165],["assignment_turned_in","action",34964],["timeline","action",34934],["stars","action",34824],["replay","av",34793],["sync_alt","action",34682],["notifications_none","social",34537],["library_books","av",34509],["dns","action",34436],["how_to_reg","content",34372],["double_arrow","navigation",34310],["flight_takeoff","action",34253],["skip_next","av",34234],["volume_off","av",34233],["signal_cellular_alt","device",34207],["forum","communication",34180],["work_outline","action",34133],["remove_red_eye","image",33966],["emoji_emotions","social",33754],["devices","device",33728],["security","hardware",33714],["folder_open","file",33663],["chat_bubble","communication",33630],["fiber_manual_record","av",33555],["content_paste","content",33503],["cloud","file",33490],["maps_home_work","navigation",33061],["text_snippet","file",33037],["my_location","maps",32886],["alarm","action",32801],["sports_esports","social",32686],["request_quote","file",32402],["workspace_premium","social",32395],["settings_suggest","device",32130],["speed","av",31998],["rocket_launch","action",31993],["cached","action",31985],["textsms","communication",31943],["toggle_off","toggle",31909],["space_dashboard","action",31782],["question_mark","action",31619],["stop","av",31504],["report","content",31474],["sentiment_very_satisfied","social",31462],["book","action",31455],["bug_report","action",31445],["contact_page","action",31416],["translate","action",31355],["gavel","action",31261],["edit_calendar","action",31164],["file_copy","content",31029],["cloud_download","file",31022],["person_search","communication",30958],["pan_tool","action",30941],["quiz","device",30917],["sentiment_satisfied_alt","communication",30576],["supervised_user_circle","action",30538],["qr_code","communication",30476],["contact_mail","communication",30449],["desktop_windows","hardware",30383],["minimize","action",30369],["location_city","social",30065],["extension","action",29898],["widgets","device",29761],["flight","maps",29442],["ios_share","social",29408],["precision_manufacturing","social",29252],["fitness_center","places",29052],["qr_code_2","communication",28953],["music_note","image",28941],["local_mall","maps",28920],["android","action",28426],["backspace","content",28212],["near_me","maps",28206],["record_voice_over","action",28123],["smart_display","hardware",28050],["drag_handle","editor",28026],["storage","device",28010],["accessibility","action",27963],["shield","content",27953],["get_app","action",27935],["insert_drive_file","editor",27874],["message","communication",27823],["add_task","action",27798],["show_chart","editor",27475],["hourglass_empty","action",27457],["science","social",27449],["handyman","maps",27439],["west","navigation",27424],["help_center","action",27196],["drive_file_rename_outline","file",27178],["person_add_alt","social",27040],["sentiment_satisfied","social",27027],["military_tech","social",27010],["directions_run","maps",26891],["trending_flat","action",26771],["rule","action",26506],["emoji_objects","social",26300],["movie","av",26233],["thumb_down","action",26119],["accessibility_new","action",26070],["confirmation_number","notification",25631],["event_note","notification",25568],["comment","communication",25457],["format_quote","editor",25417],["ads_click","action",25401],["contacts","communication",25352],["swap_vert","action",25193],["business_center","places",25156],["upload","file",25141],["archive","content",25074],["add_photo_alternate","image",25001],["settings_applications","action",24908],["history_edu","social",24891],["skip_previous","av",24887],["query_stats","editor",24807],["restaurant_menu","maps",24728],["save_alt","content",24696],["source","action",24696],["sticky_note_2","action",24638],["find_in_page","action",24625],["cake","social",24427],["credit_score","device",24404],["arrow_circle_right","action",24373],["dashboard_customize","action",24370],["handshake","social",24205],["new_releases","av",24203],["playlist_add","av",24100],["announcement","action",24070],["redeem","action",23967],["loyalty","action",23898],["key","communication",23870],["spa","places",23864],["support","action",23770],["wb_sunny","image",23695],["layers","maps",23694],["attachment","file",23670],["close_fullscreen","action",23642],["thermostat","device",23600],["flutter_dash","action",23514],["format_list_numbered","editor",23296],["restore","action",23247],["expand_circle_down","navigation",23175],["phone_android","hardware",23147],["currency_exchange","action",23106],["view_headline","action",22916],["keyboard_backspace","hardware",22913],["medical_services","maps",22864],["dangerous","action",22676],["policy","content",22646],["directions_walk","maps",22629],["sms","notification",22418],["sentiment_dissatisfied","social",22201],["keyboard_arrow_up","hardware",22184],["table_chart","editor",21794],["sensors","action",21695],["border_color","editor",21645],["euro_symbol","action",21627],["keyboard_double_arrow_right","hardware",21627],["meeting_room","places",21464],["keyboard_return","hardware",21379],["sentiment_very_dissatisfied","social",21363],["compare_arrows","action",21336],["table_view","action",21257],["brush","image",21250],["gps_fixed","device",21243],["group_work","action",21204],["change_circle","content",21194],["battery_full","device",21133],["notification_important","alert",21043],["arrow_left","navigation",20926],["celebration","maps",20911],["house","places",20890],["local_hospital","maps",20873],["disabled_by_default","action",20857],["south","navigation",20709],["smart_toy","hardware",20630],["tag","content",20622],["loop","av",20593],["import_contacts","communication",20518],["subject","action",20507],["laptop","hardware",20384],["lunch_dining","maps",20376],["privacy_tip","action",20243],["app_registration","communication",20147],["equalizer","av",19987],["local_library","maps",19896],["euro","image",19895],["corporate_fare","places",19831],["price_check","device",19804],["flash_on","image",19743],["ac_unit","places",19679],["nightlight_round","action",19643],["auto_fix_high","image",19623],["keyboard_arrow_left","hardware",19584],["pin_drop","maps",19568],["arrow_circle_up","action",19492],["bookmarks","action",19416],["input","action",19416],["newspaper","file",19409],["https","action",19376],["live_tv","notification",19370],["contact_phone","communication",19354],["track_changes","action",19327],["toc","action",19239],["view_module","action",19234],["api","action",19193],["park","maps",19159],["import_export","communication",19149],["self_improvement","social",19144],["emoji_people","social",19139],["pie_chart","editor",19045],["medication","device",18962],["download_for_offline","file",18929],["grading","action",18925],["looks_one","image",18823],["fast_forward","av",18795],["query_builder","action",18765],["copyright","action",18689],["live_help","communication",18670],["perm_media","action",18662],["pin","device",18653],["build_circle","action",18577],["forward_to_inbox","communication",18550],["person_remove","social",18536],["local_atm","maps",18463],["directions_bus","maps",18459],["hourglass_bottom","communication",18342],["coronavirus","social",18340],["redo","content",18319],["north_east","navigation",18269],["memory","hardware",18248],["web","av",18204],["gpp_good","device",18172],["forward","content",18097],["local_activity","maps",18010],["design_services","maps",17964],["star_half","toggle",17876],["playlist_add_check","av",17863],["hourglass_top","communication",17849],["north","navigation",17822],["person_pin","maps",17791],["video_library","av",17762],["perm_contact_calendar","action",17710],["zoom_out","action",17649],["headphones","hardware",17553],["settings_phone","action",17545],["backup","action",17456],["poll","social",17430],["ondemand_video","notification",17394],["circle_notifications","action",17350],["content_cut","content",17333],["point_of_sale","hardware",17315],["first_page","navigation",17300],["local_cafe","maps",17258],["open_with","action",17251],["home_work","navigation",17241],["rate_review","maps",17208],["cottage","places",17178],["whatshot","social",17162],["keyboard","hardware",17105],["delivery_dining","maps",16989],["rss_feed","communication",16967],["control_point","image",16861],["headset_mic","hardware",16840],["notes","editor",16837],["perm_phone_msg","action",16790],["style","image",16763],["label_important","action",16716],["create_new_folder","file",16708],["speaker_notes","action",16642],["wysiwyg","action",16630],["card_membership","action",16600],["arrow_circle_down","action",16597],["indeterminate_check_box","toggle",16564],["battery_charging_full","device",16542],["file_present","action",16476],["outlined_flag","content",16461],["sports_soccer","social",16412],["mark_email_read","communication",16373],["fullscreen_exit","navigation",16365],["adjust","image",16327],["book_online","action",16301],["price_change","device",16214],["percent","action",16142],["library_add","av",16131],["fmd_good","device",16128],["domain","social",16047],["pageview","action",16038],["local_police","maps",16013],["pause_circle","av",15941],["tv","hardware",15913],["inbox","content",15832],["straighten","image",15811],["recommend","social",15750],["stop_circle","av",15730],["chair","search",15709],["reviews","device",15616],["drive_eta","notification",15612],["trending_down","action",15578],["link_off","content",15569],["fastfood","maps",15513],["mic_off","av",15511],["people_outline","social",15496],["checklist_rtl","editor",15486],["directions_bike","maps",15486],["change_history","action",15480],["mood","social",15473],["upgrade","action",15439],["integration_instructions","action",15413],["3d_rotation","action",15316],["directions_car_filled","maps",15310],["home_repair_service","maps",15237],["tungsten","device",15234],["cleaning_services","maps",15169],["recycling","social",15074],["text_fields","editor",15068],["table_rows","editor",15006],["zoom_out_map","maps",14985],["subscriptions","av",14951],["format_bold","editor",14910],["repeat","av",14900],["ballot","content",14895],["wifi_off","notification",14856],["hub","communication",14835],["publish","editor",14830],["bed","search",14826],["hotel","maps",14814],["accessible","action",14801],["family_restroom","places",14798],["biotech","content",14794],["auto_graph","editor",14755],["volume_mute","av",14752],["drafts","content",14724],["arrow_circle_left","action",14723],["arrow_drop_down_circle","navigation",14697],["female","social",14659],["class","action",14648],["last_page","navigation",14630],["air","device",14624],["video_call","av",14609],["swipe","action",14577],["person_off","social",14571],["g_translate","action",14562],["title","editor",14541],["settings_backup_restore","action",14412],["offline_bolt","action",14402],["expand","action",14400],["insert_emoticon","editor",14374],["settings_accessibility","action",14356],["local_grocery_store","maps",14305],["photo_library","image",14305],["keyboard_double_arrow_left","hardware",14275],["production_quantity_limits","action",14262],["downloading","file",14250],["report_gmailerrorred","content",14157],["local_phone","maps",14156],["not_interested","av",14150],["event_busy","notification",14136],["note_alt","device",14069],["draw","editor",14052],["insert_chart_outlined","editor",14012],["miscellaneous_services","maps",13930],["camera","image",13929],["view_column","action",13890],["camera_alt","image",13829],["insert_photo","editor",13801],["aspect_ratio","action",13697],["unfold_less","navigation",13627],["checkroom","places",13618],["model_training","action",13604],["shuffle","av",13603],["monitor_heart","device",13506],["donut_large","action",13426],["diamond","maps",13410],["male","social",13369],["access_time","device",13345],["delete_sweep","content",13307],["bluetooth","device",13268],["portrait","image",13249],["segment","action",13180],["other_houses","places",13141],["navigation","maps",13101],["graphic_eq","device",13094],["folder_shared","file",13069],["document_scanner","communication",13017],["train","maps",12968],["audiotrack","image",12966],["local_gas_station","maps",12957],["mode","editor",12940],["alarm_on","action",12931],["person_add_alt_1","social",12930],["read_more","communication",12920],["schedule_send","action",12769],["factory","maps",12719],["calendar_view_month","action",12718],["more_time","communication",12638],["dvr","device",12612],["do_not_disturb_on","notification",12608],["stacked_bar_chart","content",12554],["maximize","action",12505],["cloud_done","file",12479],["local_florist","maps",12472],["square_foot","content",12431],["settings_ethernet","action",12419],["mode_comment","editor",12355],["local_parking","maps",12353],["thumbs_up_down","action",12353],["bookmark_add","action",12347],["markunread","content",12244],["subdirectory_arrow_right","navigation",12226],["person_pin_circle","maps",12219],["theaters","action",12195],["sort_by_alpha","av",12159],["view_agenda","action",12145],["thumb_down_off_alt","action",12129],["keyboard_double_arrow_down","hardware",12075],["all_inclusive","places",12012],["mark_email_unread","communication",12e3],["connect_without_contact","social",11962],["functions","editor",11950],["grass","places",11947],["sentiment_neutral","social",11917],["thumb_down_alt","social",11873],["back_hand","social",11852],["real_estate_agent","social",11841],["wc","notification",11841],["call_end","communication",11836],["airport_shuttle","places",11835],["cloud_queue","file",11827],["waving_hand","social",11802],["money","maps",11639],["important_devices","action",11631],["hiking","social",11602],["architecture","social",11576],["podcasts","search",11541],["local_post_office","maps",11526],["notifications_off","social",11502],["unpublished","action",11487],["clear_all","communication",11484],["color_lens","image",11465],["two_wheeler","maps",11454],["workspaces","file",11437],["directions","maps",11415],["system_update_alt","action",11386],["shopping_cart_checkout","action",11372],["insert_link","editor",11296],["open_in_browser","action",11279],["opacity","action",11233],["commute","action",11219],["sports_score","device",11208],["nightlight","device",11206],["route","maps",11199],["fast_rewind","av",11192],["warehouse","maps",11185],["coffee","search",11179],["mouse","hardware",11163],["grid_on","image",11126],["luggage","social",11119],["no_accounts","action",11099],["child_care","places",11068],["history_toggle_off","action",11057],["mode_edit_outline","editor",11053],["invert_colors","action",11020],["horizontal_rule","editor",11011],["addchart","action",10988],["masks","social",10982],["add_business","maps",10977],["timelapse","image",10954],["rotate_right","image",10937],["mic_none","av",10927],["currency_rupee","image",10851],["insert_invitation","editor",10819],["front_hand","social",10805],["crop_free","image",10792],["library_music","av",10783],["video_camera_front","image",10775],["electrical_services","maps",10773],["view_week","action",10760],["developer_board","hardware",10737],["topic","file",10682],["vaccines","social",10649],["traffic","maps",10644],["keyboard_voice","hardware",10616],["format_align_left","editor",10612],["shower","search",10590],["directions_boat","maps",10564],["tour","action",10451],["balance","action",10377],["beach_access","places",10336],["youtube_searched_for","action",10324],["format_italic","editor",10322],["yard","search",10317],["format_color_fill","editor",10311],["start","hardware",10297],["filter_alt_off","action",10293],["more","notification",10278],["add_link","content",10236],["search_off","action",10191],["hide_source","action",10143],["approval","file",10129],["local_bar","maps",10119],["diversity_3","social",10113],["panorama_fish_eye","image",10110],["landscape","image",10100],["power","notification",10087],["volume_down","av",10084],["slideshow","image",10062],["alt_route","maps",10061],["emergency","maps",10038],["water","device",10013],["beenhere","maps",10010],["agriculture","maps",10009],["not_started","action",9998],["bookmark_added","action",9957],["star_purple500","toggle",9933],["router","hardware",9932],["add_comment","editor",9923],["looks_two","image",9914],["copy_all","content",9888],["plagiarism","action",9865],["assignment_return","action",9853],["dialpad","communication",9850],["shop","action",9842],["mark_as_unread","action",9840],["download_done","file",9838],["crop_square","image",9833],["compost","social",9820],["mood_bad","social",9804],["hotel_class","action",9794],["pool","places",9790],["dynamic_feed","content",9785],["settings_input_antenna","action",9745],["collections_bookmark","image",9732],["flight_land","action",9728],["recent_actors","av",9714],["stream","content",9714],["videocam_off","av",9691],["lens","image",9690],["turned_in","action",9688],["cloud_off","file",9650],["move_to_inbox","content",9641],["assignment_late","action",9608],["where_to_vote","content",9565],["videogame_asset","hardware",9551],["pedal_bike","maps",9538],["emoji_nature","social",9492],["360","maps",9451],["switch_account","social",9450],["do_not_disturb","notification",9385],["share_location","device",9366],["rocket","action",9315],["casino","places",9299],["gpp_maybe","device",9297],["contactless","action",9263],["file_open","file",9261],["donut_small","action",9251],["content_paste_search","content",9246],["kitchen","places",9229],["insert_chart","editor",9174],["saved_search","action",9136],["keyboard_double_arrow_up","hardware",9131],["highlight_alt","action",9125],["waves","content",9116],["library_add_check","av",9093],["settings_input_component","action",9077],["web_asset","av",9041],["all_inbox","action",9013],["sync_problem","notification",9013],["liquor","maps",8990],["view_carousel","action",8983],["hearing","av",8975],["view_quilt","action",8975],["terminal","action",8967],["holiday_village","places",8965],["phone_enabled","communication",8923],["anchor","action",8897],["settings_remote","action",8873],["queue_music","av",8848],["interests","social",8826],["hourglass_full","action",8818],["nights_stay","social",8806],["fit_screen","action",8790],["mediation","action",8789],["edit_off","action",8765],["drive_file_move","file",8742],["linear_scale","editor",8740],["cable","device",8739],["looks_3","image",8701],["remove_shopping_cart","action",8645],["pause_circle_outline","av",8621],["turned_in_not","action",8618],["flaky","action",8599],["stacked_line_chart","editor",8598],["moving","maps",8577],["king_bed","social",8566],["pause_circle_filled","av",8558],["fiber_new","av",8551],["unarchive","content",8516],["device_hub","hardware",8500],["location_searching","device",8481],["lock_reset","action",8477],["cast_for_education","hardware",8414],["note","av",8410],["catching_pokemon","social",8407],["subtitles","av",8405],["swap_horizontal_circle","action",8404],["time_to_leave","notification",8402],["format_size","editor",8391],["toll","action",8390],["local_airport","maps",8357],["view_sidebar","action",8351],["compare","image",8348],["money_off","editor",8346],["lock_clock","action",8328],["discount","device",8320],["3p","communication",8316],["cameraswitch","device",8301],["cancel_presentation","communication",8292],["assistant","image",8277],["mark_chat_unread","communication",8260],["filter_vintage","image",8258],["data_exploration","action",8252],["sailing","maps",8251],["room_service","places",8240],["add_location_alt","maps",8222],["vertical_align_bottom","editor",8192],["reply_all","content",8184],["insert_comment","editor",8162],["vertical_split","action",8146],["bubble_chart","editor",8130],["album","av",8122],["av_timer","av",8120],["format_underlined","editor",8115],["select_all","content",8100],["device_thermostat","device",8090],["roofing","places",8087],["settings_voice","action",8060],["airplane_ticket","device",8059],["shortcut","device",8059],["radar","device",8048],["online_prediction","action",8039],["event_seat","action",8001],["image_search","image",7991],["headset","hardware",7986],["schema","editor",7984],["drive_folder_upload","file",7952],["filter_drama","image",7939],["height","editor",7927],["window","search",7927],["call_made","communication",7898],["next_plan","action",7894],["local_dining","maps",7870],["sports_basketball","social",7840],["wallpaper","device",7833],["laptop_mac","hardware",7813],["healing","image",7791],["token","action",7779],["restore_from_trash","action",7770],["maps_ugc","maps",7741],["do_disturb_on","notification",7736],["gpp_bad","device",7736],["local_taxi","maps",7710],["pregnant_woman","action",7707],["file_download_done","file",7705],["cloud_sync","file",7689],["center_focus_strong","image",7688],["playlist_play","av",7682],["rotate_left","image",7667],["request_page","action",7655],["camera_enhance","action",7649],["trip_origin","maps",7645],["data_usage","device",7623],["local_laundry_service","maps",7622],["low_priority","content",7604],["notification_add","social",7591],["vertical_align_top","editor",7575],["cast","hardware",7559],["room_preferences","places",7558],["dynamic_form","action",7541],["face_retouching_natural","image",7532],["save_as","content",7518],["directions_bus_filled","maps",7516],["view_stream","action",7503],["queue","av",7498],["tab","action",7463],["star_border_purple500","toggle",7460],["markunread_mailbox","action",7459],["blur_on","image",7457],["auto_awesome_motion","image",7445],["calendar_view_week","action",7444],["replay_circle_filled","av",7442],["ramen_dining","maps",7427],["games","av",7423],["local_drink","maps",7418],["radio","av",7417],["cruelty_free","social",7401],["forest","maps",7383],["local_printshop","maps",7374],["monitor_weight","device",7374],["hail","maps",7372],["crop","image",7360],["wb_incandescent","image",7336],["theater_comedy","maps",7329],["screen_share","communication",7284],["electric_bolt","home",7273],["vpn_lock","notification",7259],["sensor_door","home",7249],["density_medium","action",7224],["smart_button","action",7211],["square","editor",7198],["add_alert","alert",7188],["signal_wifi_4_bar","device",7186],["sports_bar","places",7167],["remove_done","action",7166],["call_split","communication",7162],["accessible_forward","action",7142],["man","social",7131],["text_format","content",7119],["add_card","action",7079],["branding_watermark","av",7064],["watch","hardware",7061],["settings_power","action",7060],["broken_image","image",7047],["local_pizza","maps",7026],["work_history","action",6984],["desktop_mac","hardware",6957],["auto_delete","alert",6944],["developer_mode","device",6943],["free_breakfast","places",6938],["format_align_center","editor",6934],["cases","image",6903],["add_to_drive","action",6887],["flare","image",6885],["diversity_1","social",6879],["sports_kabaddi","social",6852],["try","action",6840],["escalator_warning","places",6823],["forward_10","av",6806],["wb_cloudy","image",6793],["assured_workload","action",6780],["outbox","action",6771],["add_location","maps",6770],["sports","social",6768],["wallet","social",6762],["not_listed_location","maps",6749],["filter_none","image",6745],["running_with_errors","notification",6742],["tablet_mac","hardware",6736],["font_download","content",6735],["area_chart","editor",6724],["mode_night","device",6720],["card_travel","action",6713],["bathtub","places",6711],["colorize","image",6694],["reduce_capacity","social",6678],["transfer_within_a_station","maps",6678],["emoji_food_beverage","social",6670],["devices_other","hardware",6669],["compress","action",6662],["auto_fix_normal","image",6656],["sick","social",6640],["fax","action",6629],["wifi_tethering","device",6628],["child_friendly","places",6604],["123","action",6603],["dehaze","image",6603],["offline_pin","action",6602],["dinner_dining","maps",6601],["folder_special","notification",6599],["weekend","content",6591],["bakery_dining","maps",6570],["heart_broken","social",6570],["format_paint","editor",6566],["crop_original","image",6551],["bloodtype","device",6537],["filter_center_focus","image",6524],["enhanced_encryption","notification",6509],["emoji_symbols","social",6508],["legend_toggle","navigation",6507],["assignment_returned","action",6502],["find_replace","action",6500],["cookie","social",6497],["replay_10","av",6485],["lan","device",6483],["emoji_transportation","social",6479],["battery_std","device",6468],["light","search",6416],["door_front","search",6396],["generating_tokens","action",6386],["how_to_vote","content",6382],["chrome_reader_mode","action",6381],["access_time_filled","device",6371],["brightness_4","image",6341],["calendar_view_day","action",6330],["add_reaction","social",6314],["rowing","action",6304],["pan_tool_alt","action",6300],["photo","image",6284],["free_cancellation","action",6270],["nature_people","image",6259],["sports_tennis","social",6250],["garage","search",6246],["wine_bar","maps",6245],["outlet","action",6244],["http","action",6226],["terrain","maps",6226],["new_label","action",6217],["attach_email","file",6194],["personal_injury","social",6194],["south_east","navigation",6170],["event_repeat","action",6164],["multiple_stop","maps",6151],["woman","social",6142],["noise_control_off","action",6130],["backup_table","action",6124],["gesture","content",6118],["add_moderator","social",6110],["upcoming","content",6106],["format_color_text","editor",6090],["scale","social",6073],["elderly","social",6068],["settings_brightness","action",6063],["restore_page","action",6049],["spellcheck","action",6026],["format_align_right","editor",6024],["display_settings","action",6015],["flash_off","image",6006],["credit_card_off","action",5995],["unsubscribe","communication",5986],["alarm_add","action",5976],["co_present","communication",5976],["app_settings_alt","navigation",5967],["foundation","places",5952],["data_object","editor",5950],["scatter_plot","editor",5943],["keyboard_tab","hardware",5915],["transgender","social",5906],["wifi_protected_setup","action",5899],["view_timeline","action",5897],["disabled_visible","action",5891],["outdoor_grill","social",5886],["manage_history","action",5877],["brightness_1","image",5828],["play_for_work","action",5827],["tag_faces","image",5817],["auto_awesome_mosaic","image",5795],["subdirectory_arrow_left","navigation",5785],["assistant_direction","navigation",5764],["deck","social",5761],["signal_cellular_4_bar","device",5758],["format_list_numbered_rtl","editor",5743],["laptop_chromebook","hardware",5735],["takeout_dining","maps",5734],["monitor","hardware",5727],["store_mall_directory","maps",5724],["attribution","content",5711],["follow_the_signs","social",5700],["grain","image",5687],["brightness_6","image",5675],["settings_overscan","action",5665],["outbound","action",5652],["food_bank","places",5637],["phonelink","hardware",5624],["brightness_5","image",5622],["do_disturb","notification",5622],["fmd_bad","device",5620],["plus_one","social",5614],["troubleshoot","action",5593],["details","image",5576],["flip_camera_android","image",5574],["social_distance","social",5569],["view_comfy","image",5564],["flashlight_on","device",5555],["switch_access_shortcut","action",5551],["icecream","maps",5546],["closed_caption","av",5540],["highlight","editor",5540],["webhook","action",5527],["domain_verification","communication",5524],["splitscreen","device",5524],["museum","maps",5502],["fireplace","social",5483],["flip","image",5477],["satellite_alt","action",5472],["north_west","navigation",5461],["bedtime","image",5445],["cancel_schedule_send","action",5440],["gite","places",5436],["image_not_supported","image",5422],["swap_vertical_circle","action",5388],["network_wifi","device",5381],["format_align_justify","editor",5378],["nightlife","maps",5368],["local_pharmacy","maps",5366],["hardware","maps",5362],["sms_failed","notification",5351],["gif","action",5339],["network_check","notification",5336],["phone_callback","notification",5333],["airplanemode_active","device",5332],["sim_card_download","device",5329],["loupe","image",5328],["villa","places",5321],["dining","search",5320],["video_settings","av",5318],["mark_chat_read","communication",5317],["switch_left","navigation",5315],["present_to_all","communication",5312],["pix","social",5309],["waterfall_chart","navigation",5299],["groups_2","social",5294],["settings_input_composite","action",5284],["high_quality","av",5276],["psychology_alt","social",5257],["quickreply","action",5252],["night_shelter","places",5234],["departure_board","maps",5212],["clean_hands","social",5199],["view_day","action",5198],["mobile_friendly","device",5193],["comment_bank","action",5173],["set_meal","maps",5171],["rule_folder","file",5159],["add_road","maps",5152],["filter_1","image",5152],["add_ic_call","communication",5144],["ev_station","maps",5143],["folder_zip","file",5140],["folder_copy","file",5133],["flag_circle","content",5124],["usb","device",5106],["flatware","search",5095],["line_weight","action",5090],["output","action",5086],["piano","social",5071],["adb","notification",5020],["golf_course","places",5020],["sports_motorsports","social",5014],["hive","social",5006],["phonelink_ring","communication",5003],["flip_camera_ios","image",4997],["add_chart","editor",4981],["horizontal_split","action",4979],["content_paste_go","content",4964],["sanitizer","social",4955],["surfing","social",4952],["send_to_mobile","device",4928],["merge_type","editor",4926],["featured_play_list","av",4925],["power_off","notification",4922],["medical_information","maps",4919],["phone_forwarded","notification",4912],["call_received","communication",4908],["batch_prediction","action",4876],["picture_in_picture","action",4866],["electric_car","maps",4863],["add_to_photos","image",4850],["polymer","action",4832],["battery_alert","device",4828],["speaker","hardware",4814],["looks_4","image",4796],["festival","maps",4795],["html","action",4792],["numbers","editor",4778],["system_update","notification",4775],["stay_current_portrait","communication",4771],["sports_handball","social",4768],["local_see","maps",4765],["send_and_archive","action",4737],["sports_baseball","social",4733],["movie_creation","image",4732],["code_off","action",4705],["personal_video","notification",4693],["plumbing","maps",4691],["playlist_add_check_circle","av",4686],["bookmark_remove","action",4677],["lens_blur","device",4659],["animation","image",4658],["center_focus_weak","image",4629],["toys","hardware",4627],["energy_savings_leaf","home",4608],["panorama","image",4591],["settings_bluetooth","action",4586],["car_rental","maps",4579],["cloud_circle","file",4576],["movie_filter","image",4572],["coffee_maker","search",4571],["edit_notifications","social",4568],["screen_search_desktop","device",4558],["gamepad","hardware",4557],["cell_tower","communication",4510],["no_photography","places",4510],["playlist_remove","av",4510],["south_west","navigation",4497],["stairs","places",4487],["zoom_in_map","maps",4480],["format_shapes","editor",4472],["attractions","maps",4454],["control_camera","av",4454],["layers_clear","maps",4446],["sim_card","hardware",4438],["signal_wifi_statusbar_4_bar","device",4429],["screen_rotation","device",4422],["diversity_2","social",4417],["table_restaurant","search",4402],["phonelink_lock","communication",4391],["currency_yen","image",4339],["currency_bitcoin","image",4338],["edit_location","maps",4327],["signal_wifi_statusbar_connected_no_internet_4","device",4324],["difference","file",4319],["blender","search",4317],["flip_to_front","action",4308],["backpack","places",4305],["sports_volleyball","social",4294],["shop_two","action",4287],["crop_din","image",4283],["pest_control","maps",4278],["pivot_table_chart","navigation",4266],["microwave","places",4246],["phone_disabled","communication",4223],["gps_not_fixed","device",4220],["filter_list_off","content",4188],["keyboard_alt","hardware",4188],["church","maps",4184],["view_compact","image",4182],["filter","image",4178],["incomplete_circle","image",4173],["control_point_duplicate","image",4170],["arrow_outward","action",4167],["eject","action",4163],["speaker_notes_off","action",4162],["auto_mode","home",4161],["ring_volume","communication",4159],["brightness_7","image",4150],["gif_box","action",4148],["run_circle","maps",4137],["local_convenience_store","maps",4135],["leak_add","image",4128],["pages","social",4124],["switch_right","navigation",4112],["dry_cleaning","maps",4108],["nature","image",4076],["system_security_update_good","device",4076],["location_off","communication",4075],["voice_chat","notification",4071],["airline_seat_recline_normal","notification",4053],["vibration","notification",4047],["texture","image",4028],["snippet_folder","file",4013],["alarm_off","action",4010],["edit_attributes","maps",4010],["sports_football","social",3990],["perm_data_setting","action",3985],["edit_road","maps",3981],["switch_access_shortcut_add","action",3975],["money_off_csred","editor",3972],["edit_location_alt","maps",3960],["contrast","image",3953],["bluetooth_connected","device",3946],["slow_motion_video","av",3929],["settings_input_hdmi","action",3923],["phonelink_setup","communication",3922],["battery_5_bar","device",3921],["add_to_queue","av",3914],["do_disturb_alt","notification",3908],["hourglass_disabled","action",3907],["move_up","editor",3893],["bedroom_parent","search",3873],["next_week","content",3865],["pie_chart_outline","editor",3858],["connected_tv","hardware",3856],["solar_power","home",3849],["timer_off","image",3843],["bedroom_baby","search",3835],["nfc","device",3835],["perm_scan_wifi","action",3835],["format_indent_increase","editor",3828],["work_off","action",3826],["lightbulb_circle","action",3814],["join_full","action",3809],["car_repair","maps",3808],["group_remove","social",3804],["camera_indoor","search",3801],["elevator","places",3790],["sensors_off","action",3782],["short_text","editor",3779],["sensor_window","home",3778],["video_camera_back","image",3777],["duo","communication",3776],["downhill_skiing","social",3767],["co2","social",3764],["transform","image",3757],["abc","action",3753],["mode_standby","device",3751],["kayaking","social",3739],["photo_size_select_actual","image",3739],["remember_me","device",3739],["picture_in_picture_alt","action",3733],["app_blocking","action",3720],["public_off","social",3714],["app_shortcut","action",3711],["repeat_one","av",3711],["bathroom","search",3710],["local_movies","maps",3696],["wrong_location","maps",3693],["settings_cell","action",3675],["moped","maps",3671],["door_sliding","search",3664],["boy","social",3663],["javascript","action",3661],["perm_device_information","action",3659],["smoking_rooms","places",3658],["wash","places",3657],["single_bed","social",3648],["remove_moderator","social",3642],["pattern","device",3640],["swap_calls","communication",3640],["looks_5","image",3637],["do_not_disturb_alt","notification",3615],["signpost","maps",3615],["chair_alt","search",3610],["domain_add","social",3604],["directions_boat_filled","maps",3602],["line_style","action",3597],["airplay","av",3595],["crisis_alert","maps",3594],["stay_primary_portrait","communication",3588],["tablet_android","hardware",3584],["brightness_high","device",3581],["notifications_paused","social",3548],["format_color_reset","editor",3545],["motion_photos_on","image",3544],["laptop_windows","hardware",3543],["cabin","places",3538],["house_siding","places",3530],["camera_outdoor","search",3524],["cast_connected","hardware",3517],["hot_tub","places",3511],["fitbit","social",3510],["call_to_action","av",3506],["strikethrough_s","editor",3503],["satellite","maps",3501],["soup_kitchen","maps",3491],["swipe_left","action",3490],["skateboarding","social",3484],["update_disabled","action",3483],["hexagon","editor",3482],["door_back","search",3477],["rotate_90_degrees_ccw","image",3465],["battery_saver","device",3458],["sync_disabled","notification",3455],["subtitles_off","action",3454],["vertical_align_center","editor",3449],["play_lesson","device",3431],["voicemail","communication",3431],["align_horizontal_left","editor",3413],["snooze","av",3409],["photo_camera_front","image",3396],["merge","maps",3392],["countertops","places",3391],["person_remove_alt_1","social",3386],["data_saver_off","device",3384],["wb_twilight","image",3379],["living","search",3377],["safety_divider","social",3377],["tram","maps",3372],["mic_external_on","image",3371],["thunderstorm","social",3366],["rectangle","editor",3361],["apps_outage","navigation",3357],["private_connectivity","action",3357],["browser_updated","hardware",3356],["install_desktop","action",3333],["hd","av",3325],["currency_pound","image",3324],["join_inner","action",3323],["voice_over_off","action",3312],["storm","device",3311],["groups_3","social",3307],["assistant_photo","image",3294],["taxi_alert","maps",3287],["ssid_chart","device",3286],["breakfast_dining","maps",3274],["device_unknown","hardware",3271],["gradient","image",3270],["move_down","editor",3270],["straight","maps",3265],["content_paste_off","content",3257],["replay_30","av",3256],["repeat_on","av",3255],["fire_extinguisher","places",3251],["tap_and_play","notification",3251],["data_saver_on","device",3248],["file_download_off","file",3247],["grid_4x4","device",3242],["bluetooth_searching","device",3239],["brightness_medium","device",3237],["doorbell","search",3236],["water_damage","places",3226],["signal_wifi_0_bar","device",3224],["carpenter","places",3213],["brightness_low","device",3212],["charging_station","places",3209],["ad_units","device",3201],["baby_changing_station","places",3190],["swipe_right","action",3190],["rv_hookup","places",3182],["battery_4_bar","device",3179],["bluetooth_disabled","device",3163],["closed_caption_off","av",3161],["group_off","social",3154],["battery_0_bar","device",3152],["subway","maps",3152],["table_bar","search",3142],["mobiledata_off","device",3117],["offline_share","navigation",3115],["swipe_up","action",3099],["bedroom_child","search",3095],["network_cell","device",3094],["hide_image","image",3091],["no_encryption","notification",3088],["atm","maps",3087],["soap","places",3087],["screenshot","device",3080],["sports_martial_arts","social",3079],["multiline_chart","editor",3078],["sd_card","notification",3066],["web_stories","content",3055],["lock_person","action",3043],["hdr_auto","device",3040],["polyline","editor",3037],["settings_input_svideo","action",3036],["sports_cricket","social",3030],["sports_mma","social",3021],["call_merge","communication",3018],["exposure_plus_1","image",3018],["wifi_calling_3","device",3018],["crop_16_9","image",2997],["music_off","image",2995],["phone_missed","notification",2992],["flip_to_back","action",2971],["shield_moon","home",2967],["filter_2","image",2960],["transit_enterexit","maps",2956],["audio_file","av",2954],["density_small","action",2938],["brunch_dining","maps",2929],["keyboard_hide","hardware",2918],["connecting_airports","maps",2917],["view_array","action",2915],["phonelink_erase","communication",2903],["mobile_screen_share","communication",2899],["thermostat_auto","image",2898],["security_update_good","device",2897],["exposure","image",2895],["smoke_free","places",2889],["border_all","editor",2888],["face_6","social",2882],["open_in_new_off","action",2879],["all_out","action",2876],["battery_unknown","device",2876],["girl","social",2876],["text_increase","editor",2875],["interpreter_mode","av",2865],["data_thresholding","action",2863],["shutter_speed","image",2862],["photo_album","image",2858],["featured_video","av",2849],["filter_tilt_shift","image",2847],["hvac","maps",2846],["umbrella","places",2845],["scanner","hardware",2833],["sports_gymnastics","social",2833],["sports_golf","social",2829],["score","editor",2825],["nordic_walking","social",2824],["face_3","social",2823],["safety_check","maps",2820],["shuffle_on","av",2814],["battery_6_bar","device",2806],["egg","maps",2793],["folder_delete","file",2793],["shop_2","action",2787],["electric_bike","maps",2780],["commit","action",2752],["contact_emergency","communication",2751],["signal_wifi_off","device",2750],["access_alarm","device",2749],["directions_transit","maps",2743],["looks_6","image",2738],["airline_seat_recline_extra","notification",2736],["brightness_3","image",2732],["linked_camera","image",2729],["label_off","action",2727],["looks","image",2726],["settings_system_daydream","device",2714],["do_not_touch","places",2712],["tablet","hardware",2708],["access_alarms","device",2705],["forward_30","av",2690],["format_indent_decrease","editor",2686],["hdr_strong","image",2686],["vrpano","image",2668],["playlist_add_circle","av",2664],["5g","av",2661],["paragliding","social",2653],["photo_filter","image",2651],["battery_3_bar","device",2649],["blur_circular","image",2644],["music_video","av",2641],["local_hotel","maps",2636],["stadium","maps",2628],["tab_unselected","action",2627],["video_file","av",2627],["crop_portrait","image",2623],["domain_disabled","communication",2622],["tapas","places",2622],["person_add_disabled","communication",2621],["electric_scooter","maps",2603],["bus_alert","maps",2593],["drive_file_move_rtl","file",2589],["rice_bowl","places",2584],["rounded_corner","action",2584],["flash_auto","image",2580],["view_kanban","action",2580],["mode_of_travel","maps",2573],["fence","places",2569],["signal_wifi_bad","device",2569],["local_car_wash","maps",2545],["format_clear","editor",2538],["spoke","communication",2538],["candlestick_chart","editor",2536],["party_mode","social",2533],["queue_play_next","av",2530],["castle","maps",2529],["tty","places",2527],["motion_photos_auto","image",2522],["space_bar","editor",2521],["install_mobile","action",2516],["replay_5","av",2515],["mark_unread_chat_alt","communication",2510],["format_line_spacing","editor",2508],["spatial_audio_off","action",2499],["call_missed_outgoing","communication",2489],["desktop_access_disabled","communication",2489],["snowboarding","social",2485],["wind_power","home",2485],["sensor_occupied","home",2482],["car_crash","maps",2481],["oil_barrel","home",2480],["6_ft_apart","social",2479],["balcony","places",2477],["iso","image",2474],["crop_7_5","image",2464],["text_rotate_vertical","action",2460],["brightness_2","image",2453],["signal_wifi_connected_no_internet_4","device",2453],["speaker_phone","communication",2447],["rotate_90_degrees_cw","image",2429],["art_track","av",2428],["swipe_down","action",2424],["css","action",2422],["kitesurfing","social",2421],["no_food","places",2418],["filter_hdr","image",2417],["houseboat","places",2414],["cell_wifi","communication",2412],["explore_off","action",2412],["photo_size_select_small","image",2405],["horizontal_distribute","editor",2403],["tonality","image",2398],["battery_1_bar","device",2391],["report_off","content",2383],["aod","device",2372],["align_vertical_bottom","editor",2370],["currency_ruble","image",2366],["medication_liquid","device",2365],["bento","places",2357],["exposure_zero","image",2348],["noise_aware","action",2341],["text_rotation_none","action",2328],["south_america","social",2324],["join_left","action",2322],["filter_3","image",2320],["imagesearch_roller","notification",2320],["punch_clock","device",2317],["flashlight_off","device",2314],["signal_cellular_0_bar","device",2313],["photo_size_select_large","image",2309],["hearing_disabled","av",2308],["wheelchair_pickup","places",2302],["crop_rotate","image",2301],["dataset","device",2300],["add_to_home_screen","device",2299],["forward_5","av",2287],["stop_screen_share","communication",2284],["person_2","social",2281],["align_horizontal_center","editor",2274],["print_disabled","communication",2274],["electric_meter","home",2267],["mms","notification",2264],["iron","places",2248],["signal_wifi_statusbar_null","device",2245],["not_accessible","action",2238],["snowshoeing","social",2236],["pinch","action",2228],["speaker_group","hardware",2221],["gps_off","device",2213],["security_update","device",2213],["pin_invoke","action",2210],["camera_front","image",2207],["heat_pump","home",2197],["call_missed","communication",2192],["swipe_vertical","action",2190],["hdr_weak","image",2189],["streetview","maps",2188],["crop_5_4","image",2183],["elderly_woman","social",2181],["earbuds","hardware",2180],["bungalow","places",2178],["vertical_distribute","editor",2168],["sports_hockey","social",2165],["data_array","editor",2156],["explicit","av",2156],["ice_skating","social",2148],["mosque","maps",2148],["sd_storage","device",2145],["align_horizontal_right","editor",2132],["extension_off","action",2124],["keyboard_capslock","hardware",2123],["view_cozy","action",2108],["pause_presentation","communication",2107],["face_2","social",2106],["format_strikethrough","editor",2101],["grid_3x3","device",2091],["perm_camera_mic","action",2087],["burst_mode","image",2083],["directions_subway","maps",2080],["superscript","editor",2074],["scoreboard","social",2065],["join_right","action",2061],["comments_disabled","communication",2055],["reset_tv","device",2055],["logo_dev","image",2052],["sports_rugby","social",2051],["filter_frames","image",2046],["video_label","av",2041],["turn_right","maps",2040],["4g_mobiledata","device",2035],["4k","av",2033],["face_4","social",2030],["compass_calibration","maps",2019],["brightness_auto","device",2014],["battery_2_bar","device",2011],["sync_lock","notification",2008],["fiber_smart_record","av",2001],["headset_off","hardware",1999],["electric_rickshaw","maps",1995],["screenshot_monitor","device",1988],["crib","places",1984],["airline_stops","maps",1981],["pin_end","action",1979],["swipe_right_alt","action",1979],["margin","editor",1978],["camera_roll","image",1972],["chalet","places",1969],["dialer_sip","communication",1966],["deselect","content",1955],["no_encryption_gmailerrorred","notification",1951],["signal_cellular_connected_no_internet_4_bar","device",1949],["disc_full","notification",1947],["invert_colors_off","communication",1935],["pentagon","editor",1933],["sledding","social",1905],["blur_linear","image",1900],["wifi_lock","device",1900],["do_not_disturb_on_total_silence","device",1894],["gas_meter","home",1894],["phishing","device",1894],["bluetooth_audio","notification",1884],["crop_3_2","image",1881],["fork_right","maps",1872],["rtt","communication",1864],["wifi_calling","communication",1862],["crop_landscape","image",1861],["filter_b_and_w","image",1860],["nearby_error","device",1859],["airplanemode_inactive","device",1833],["mail_lock","communication",1830],["keyboard_command_key","hardware",1818],["portable_wifi_off","communication",1815],["1x_mobiledata","device",1813],["no_crash","maps",1809],["security_update_warning","device",1807],["directions_railway","maps",1802],["do_not_step","places",1802],["browse_gallery","action",1799],["add_home_work","navigation",1796],["add_home","action",1793],["send_time_extension","communication",1793],["wrap_text","editor",1786],["align_vertical_top","editor",1781],["sd_card_alert","notification",1780],["repeat_one_on","av",1777],["folder_off","file",1769],["view_comfy_alt","action",1762],["sign_language","social",1761],["text_decrease","editor",1760],["no_meeting_room","places",1750],["border_clear","editor",1748],["no_meals","maps",1746],["signal_cellular_connected_no_internet_0_bar","device",1745],["align_vertical_center","editor",1744],["switch_camera","image",1743],["php","action",1739],["subscript","editor",1729],["sim_card_alert","notification",1724],["escalator","places",1712],["switch_video","image",1704],["filter_7","image",1698],["text_rotate_up","action",1697],["filter_4","image",1696],["local_play","maps",1693],["railway_alert","maps",1686],["dry","places",1683],["screen_lock_portrait","device",1683],["text_rotation_angledown","action",1681],["font_download_off","content",1679],["wifi_password","device",1679],["unfold_more_double","action",1678],["airline_seat_individual_suite","notification",1672],["electric_moped","maps",1667],["turn_left","maps",1666],["filter_9_plus","image",1665],["exposure_plus_2","image",1654],["home_max","hardware",1654],["do_not_disturb_off","notification",1653],["text_rotation_angleup","action",1651],["network_ping","action",1647],["cyclone","social",1643],["surround_sound","av",1643],["u_turn_left","maps",1642],["remove_from_queue","av",1640],["view_compact_alt","action",1639],["phone_paused","notification",1637],["text_rotation_down","action",1636],["closed_caption_disabled","av",1627],["wb_iridescent","image",1613],["grid_off","image",1608],["stroller","places",1607],["play_disabled","av",1603],["border_style","editor",1600],["web_asset_off","av",1583],["system_security_update_warning","device",1579],["photo_camera_back","image",1575],["person_4","social",1562],["system_security_update","device",1556],["wifi_tethering_off","device",1554],["auto_fix_off","image",1552],["person_3","social",1551],["swipe_down_alt","action",1551],["key_off","communication",1549],["line_axis","editor",1549],["pest_control_rodent","maps",1546],["airlines","maps",1540],["lyrics","av",1540],["filter_5","image",1538],["stay_current_landscape","communication",1536],["edgesensor_high","device",1532],["motion_photos_paused","image",1532],["egg_alt","maps",1531],["monochrome_photos","image",1527],["on_device_training","action",1525],["dock","hardware",1521],["sip","communication",1518],["airline_seat_flat","notification",1517],["headphones_battery","hardware",1513],["network_wifi_1_bar","device",1507],["power_input","hardware",1506],["smart_screen","hardware",1502],["exposure_neg_1","image",1498],["do_disturb_off","notification",1496],["nat","communication",1494],["tire_repair","maps",1492],["browser_not_supported","hardware",1483],["no_drinks","places",1479],["border_outer","editor",1478],["face_5","social",1478],["spatial_tracking","action",1474],["density_large","action",1470],["bike_scooter","maps",1468],["propane_tank","home",1463],["face_retouching_off","image",1460],["sos","maps",1459],["padding","editor",1450],["add_alarm","device",1449],["phone_locked","notification",1449],["network_locked","notification",1435],["sd","av",1435],["minor_crash","maps",1434],["swipe_left_alt","action",1421],["network_wifi_3_bar","device",1415],["near_me_disabled","maps",1411],["signal_cellular_nodata","device",1407],["stay_primary_landscape","communication",1403],["snowmobile","maps",1399],["wifi_find","device",1398],["spatial_audio","action",1397],["30fps","device",1393],["flood","social",1389],["no_sim","communication",1386],["directions_transit_filled","maps",1375],["signal_cellular_off","device",1375],["earbuds_battery","hardware",1371],["signal_wifi_4_bar_lock","device",1369],["panorama_photosphere","image",1368],["fire_truck","maps",1366],["insert_page_break","editor",1366],["location_disabled","device",1364],["signal_cellular_null","device",1356],["lte_mobiledata","device",1354],["swipe_up_alt","action",1354],["10k","av",1353],["4g_plus_mobiledata","device",1353],["mobile_off","device",1353],["phonelink_off","hardware",1353],["leak_remove","image",1351],["missed_video_call","av",1346],["filter_8","image",1341],["bluetooth_drive","device",1339],["adf_scanner","hardware",1333],["filter_9","image",1332],["kebab_dining","maps",1319],["no_luggage","social",1317],["fort","maps",1313],["media_bluetooth_on","device",1300],["timer_10","image",1299],["mode_fan_off","home",1296],["no_transfer","maps",1295],["home_mini","hardware",1290],["dataset_linked","device",1288],["emergency_share","maps",1287],["flight_class","maps",1279],["temple_buddhist","maps",1278],["video_stable","image",1267],["deblur","image",1266],["filter_6","image",1264],["directions_subway_filled","maps",1259],["raw_on","image",1251],["blur_off","image",1234],["rsvp","device",1233],["motion_photos_off","image",1230],["motion_photos_pause","image",1227],["wb_shade","image",1227],["vpn_key_off","communication",1224],["directions_railway_filled","maps",1221],["edgesensor_low","device",1217],["grid_goldenratio","device",1215],["network_wifi_2_bar","device",1215],["tv_off","notification",1211],["scuba_diving","social",1207],["tsunami","social",1207],["vignette","image",1205],["phone_bluetooth_speaker","notification",1198],["developer_board_off","hardware",1192],["3g_mobiledata","device",1187],["usb_off","device",1185],["fiber_pin","av",1184],["airline_seat_flat_angled","notification",1183],["signal_cellular_alt_1_bar","device",1181],["hdr_on","image",1175],["wifi_2_bar","device",1172],["dirty_lens","image",1171],["u_turn_right","maps",1169],["severe_cold","social",1167],["panorama_horizontal","image",1163],["no_cell","places",1159],["image_aspect_ratio","image",1158],["screen_lock_rotation","device",1151],["screen_lock_landscape","device",1147],["signal_cellular_alt_2_bar","device",1145],["60fps","device",1140],["30fps_select","image",1133],["shape_line","editor",1132],["repartition","action",1130],["unfold_less_double","action",1121],["currency_lira","image",1119],["currency_yuan","image",1118],["camera_rear","image",1115],["lte_plus_mobiledata","device",1110],["timer_10_select","device",1108],["piano_off","social",1107],["wifi_tethering_error","device",1103],["fork_left","maps",1098],["screen_rotation_alt","maps",1082],["timer_3","image",1079],["width_full","action",1079],["temple_hindu","maps",1078],["videogame_asset_off","hardware",1068],["60fps_select","image",1060],["airline_seat_legroom_normal","notification",1059],["synagogue","maps",1058],["directions_off","notification",1054],["transcribe","action",1051],["panorama_wide_angle_select","image",1050],["tornado","social",1049],["signal_cellular_no_sim","device",1043],["fiber_dvr","av",1041],["keyboard_control_key","hardware",1038],["roller_shades","home",1035],["24mp","image",1034],["wifi_1_bar","device",1034],["remove_road","maps",1032],["roller_skating","social",1030],["assist_walker","social",1024],["exposure_neg_2","image",1020],["airline_seat_legroom_extra","notification",1017],["border_inner","editor",1008],["turn_sharp_right","maps",1007],["man_2","social",997],["width_normal","action",991],["landslide","social",989],["no_flash","places",983],["4k_plus","av",975],["g_mobiledata","device",975],["autofps_select","image",974],["1k","av",961],["woman_2","social",961],["airline_seat_legroom_reduced","notification",959],["border_left","editor",956],["wifi_channel","device",956],["roundabout_right","maps",955],["turn_slight_right","maps",947],["border_bottom","editor",942],["width_wide","action",939],["format_textdirection_l_to_r","editor",931],["blind","social",918],["broadcast_on_personal","home",906],["turn_slight_left","maps",902],["border_vertical","editor",900],["timer_3_select","device",898],["no_backpack","places",890],["propane","home",889],["panorama_horizontal_select","image",884],["panorama_wide_angle","image",884],["border_horizontal","editor",883],["2k","av",882],["1k_plus","av",880],["wb_auto","image",875],["panorama_photosphere_select","image",872],["h_mobiledata","device",870],["18_up_rating","social",867],["hdr_plus","image",860],["blinds","home",859],["format_textdirection_r_to_l","editor",856],["panorama_vertical_select","image",855],["border_top","editor",854],["volcano","social",852],["mic_external_off","image",850],["video_chat","notification",845],["border_right","editor",830],["e_mobiledata","device",824],["no_stroller","places",821],["media_bluetooth_off","device",820],["8k","av",819],["currency_franc","image",814],["hls_off","action",812],["hls","action",811],["r_mobiledata","device",810],["vaping_rooms","places",808],["desk","places",805],["12mp","image",792],["mp","image",788],["panorama_vertical","image",786],["no_adult_content","social",784],["roller_shades_closed","home",782],["curtains","home",779],["emergency_recording","maps",771],["h_plus_mobiledata","device",762],["watch_off","hardware",754],["blinds_closed","home",748],["hdr_enhanced_select","image",746],["broadcast_on_home","home",744],["5k","av",742],["hevc","image",742],["9k_plus","av",738],["8k_plus","av",737],["format_overline","file",736],["bedtime_off","image",735],["keyboard_option_key","hardware",734],["vertical_shades","home",729],["curtains_closed","home",725],["hdr_on_select","device",724],["nest_cam_wired_stand","home",724],["roundabout_left","maps",721],["vertical_shades_closed","home",721],["3k","av",720],["devices_fold","device",719],["10mp","image",705],["turn_sharp_left","maps",702],["18mp","image",699],["hdr_auto_select","device",685],["5k_plus","av",683],["23mp","image",677],["7k","av",677],["raw_off","image",676],["nearby_off","device",673],["2k_plus","av",670],["3k_plus","av",668],["9k","av",668],["man_4","social",663],["hdr_off","image",657],["6k","av",656],["7k_plus","av",653],["6k_plus","av",652],["type_specimen","editor",647],["hdr_off_select","device",646],["vape_free","places",635],["11mp","image",633],["20mp","image",629],["3mp","image",615],["5mp","image",612],["15mp","image",603],["fluorescent","device",602],["13mp","image",601],["16mp","image",597],["2mp","image",597],["21mp","image",593],["22mp","image",593],["7mp","image",587],["17mp","image",583],["14mp","image",579],["19mp","image",577],["ramp_left","maps",573],["4mp","image",571],["8mp","image",571],["9mp","image",564],["6mp","image",562],["ramp_right","maps",546],["man_3","social",523],["fire_hydrant_alt","maps",512],["macro_off","device",354]],DX=[...new Set(Cf.map(e=>e[1]))].sort(),PX={inject:["showcaseCopy"],name:"ShowcaseIcon",label:"Material Icons",icon:"emoji_symbols",components:{QIcon:Ve,QInput:sl,QTabs:ll,QTab:cl},apiJson:BX,importName:"QIcon",importFrom:"quasar",code:`<QIcon name="home" size="24px" />
<QIcon name="star" color="primary" size="32px" />
<QIcon name="settings" size="24px" />

<!-- With color -->
<QIcon name="favorite" color="negative" />

<!-- In a button -->
<QBtn icon="send" label="Send" />`,data(){return{search:"",category:"all",allCategories:DX}},computed:{filtered(){let e=Cf;if(this.category!=="all"&&(e=e.filter(t=>t[1]===this.category)),this.search){const t=this.search.toLowerCase().replace(/\s+/g,"_");e=e.filter(n=>n[0].includes(t))}return e}},watch:{search(e){e&&(this.category="all")}},methods:{onCopy(e){this.showcaseCopy(e[0],e[0])}}},jX={class:"iconShowcase"},MX={class:"iconControls"},$X={class:"iconStats"},RX={class:"iconGrid non-selectable"},OX=["onClick"],FX={class:"iconLabel text-truncate"};function zX(e,t,n,a,o,i){const r=G("QIcon"),s=G("QInput"),l=G("QTab"),u=G("QTabs");return D(),Z("div",jX,[b("div",MX,[p(s,{modelValue:o.search,"onUpdate:modelValue":t[1]||(t[1]=c=>o.search=c),dense:"",outlined:"",placeholder:"Filter icons...",color:"accent",class:"iconSearch"},Md({prepend:S(()=>[p(r,{name:"search",size:"16px"})]),_:2},[o.search?{name:"append",fn:S(()=>[p(r,{name:"close",size:"14px",class:"cursor-pointer",onClick:t[0]||(t[0]=c=>o.search="")})]),key:"0"}:void 0]),1032,["modelValue"]),p(u,{modelValue:o.category,"onUpdate:modelValue":t[2]||(t[2]=c=>o.category=c),dense:"","active-color":"accent","indicator-color":"accent",align:"left","narrow-indicator":"","no-caps":"",class:"iconTabs"},{default:S(()=>[p(l,{name:"all",label:"All"}),(D(!0),Z(De,null,Ye(o.allCategories,c=>(D(),pe(l,{key:c,name:c,label:c},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),b("div",$X,ve(i.filtered.length)+" icons ",1),b("div",RX,[(D(!0),Z(De,null,Ye(i.filtered,c=>(D(),Z("div",{key:c[0],class:"iconCell",onClick:d=>i.onCopy(c)},[p(r,{name:c[0],size:"36px"},null,8,["name"]),b("span",FX,ve(c[0]),1)],8,OX))),128))])])}const NX=Be(PX,[["render",zX],["__scopeId","data-v-28313718"]]),VX=Object.freeze(Object.defineProperty({__proto__:null,default:NX},Symbol.toStringTag,{value:"Module"})),HX="component",UX={docsUrl:"https://v2.quasar.dev/vue-components/button"},WX={type:{type:"String",default:"'button'",desc:"Native type attribute (submit, reset, button) or 'a' for link behavior",category:"general"},label:{type:["String","Number"],desc:"Text shown on the button",category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},"icon-right":{type:"String",desc:"Icon name following Quasar convention; placed on the right side",category:"content"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"text-color":{type:"String",desc:"Overrides text color (if needed); Color name from the Quasar Color Palette",category:"style"},flat:{type:"Boolean",desc:"Use flat design (no background)",category:"style"},outline:{type:"Boolean",desc:"Use outline design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},round:{type:"Boolean",desc:"Makes a circle shaped button",category:"style"},push:{type:"Boolean",desc:"Use push design",category:"style"},square:{type:"Boolean",desc:"Removes border-radius so borders are squared",category:"style"},glossy:{type:"Boolean",desc:"Applies a glossy effect",category:"style"},fab:{type:"Boolean",desc:"Makes button size and shape fit a Floating Action Button",category:"style"},"fab-mini":{type:"Boolean",desc:"Makes button size and shape fit a small Floating Action Button",category:"style"},padding:{type:"String",desc:"Custom padding (vertical [horizontal]); CSS units or size names (none|xs|sm|md|lg|xl)",category:"style"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps",category:"content"},"no-wrap":{type:"Boolean",desc:"Avoid label text wrapping",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},stack:{type:"Boolean",desc:"Stack icon and label vertically",category:"content"},stretch:{type:"Boolean",desc:"When on flexbox parent, stretches to parent's height",category:"content"},loading:{type:["Boolean","null"],default:"null",desc:"Put button into loading state (displays a QSpinner)",category:"behavior"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},href:{type:"String",desc:"Native <a> link href attribute; has priority over 'to' and 'replace'",category:"navigation"},target:{type:"String",desc:"Native <a> link target attribute; use with 'to' or 'href'",category:"navigation"},to:{type:["String","Object"],desc:"Equivalent to Vue Router <router-link> 'to' property",category:"navigation"},replace:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'replace' property",category:"navigation"},percentage:{type:"Number",desc:"Percentage (0–100); used with 'loading' to display a progress bar on the background",category:"behavior"},"dark-percentage":{type:"Boolean",desc:"Progress bar should have dark color; used with 'percentage' and 'loading'",category:"behavior"},ripple:{type:["Boolean","Object"],default:"true",desc:"Configure material ripple",category:"style"},size:{type:"String",desc:"Size in CSS units, including unit name, or standard size name (xs|sm|md|lg|xl)",category:"style"},align:{type:"String",default:"'center'",desc:"Label or content alignment",category:"content"},tabindex:{type:["Number","String"],desc:"Tabindex HTML attribute value",category:"general"}},JX={default:{desc:"Custom content, instead of relying on 'icon' and 'label' props"},loading:{desc:"Override the default QSpinner when in loading state"}},GX={click:{desc:"Emitted when the component is clicked"}},Qf={type:HX,meta:UX,props:WX,slots:JX,events:GX},KX={name:"ShowcaseQuasarBtn",components:{QBtn:vt},label:"Quasar Btn",icon:"smart_button",apiJson:Qf,importName:"QBtn",importFrom:"quasar"},YX={class:"jShowcase_row jShowcase_column"},ZX={class:"jShowcase_group"},XX={class:"jShowcase_items"},eee={class:"jShowcase_group"},tee={class:"jShowcase_items"},nee={class:"jShowcase_group"},oee={class:"jShowcase_items"},aee={class:"jShowcase_group"},iee={class:"jShowcase_items"},ree={class:"jShowcase_group"},see={class:"jShowcase_items"},lee={class:"jShowcase_group"},cee={class:"jShowcase_items"},uee={class:"jShowcase_group"},dee={class:"jShowcase_items"};function pee(e,t,n,a,o,i){const r=G("QBtn");return D(),Z("div",YX,[b("div",ZX,[t[0]||(t[0]=b("span",{class:"jShowcase_title"},"Variants",-1)),b("div",XX,[p(r,{color:"primary",label:"Default"}),p(r,{flat:"",color:"primary",label:"Flat"}),p(r,{outline:"",color:"primary",label:"Outline"}),p(r,{unelevated:"",color:"primary",label:"Unelevated"}),p(r,{push:"",color:"primary",label:"Push"}),p(r,{glossy:"",color:"primary",label:"Glossy"})])]),b("div",eee,[t[1]||(t[1]=b("span",{class:"jShowcase_title"},"Custom Variants",-1)),b("div",tee,[p(r,{class:"ghost",label:"Ghost",icon:"settings"})])]),b("div",nee,[t[2]||(t[2]=b("span",{class:"jShowcase_title"},"Shapes",-1)),b("div",oee,[p(r,{color:"accent",label:"Rounded",rounded:""}),p(r,{color:"accent",label:"Square",square:""}),p(r,{color:"accent",icon:"star",round:""}),p(r,{color:"accent",icon:"rocket_launch",label:"FAB",fab:""}),p(r,{color:"accent",icon:"add","fab-mini":""})])]),b("div",aee,[t[3]||(t[3]=b("span",{class:"jShowcase_title"},"Icons",-1)),b("div",iee,[p(r,{color:"secondary",icon:"flight_takeoff",label:"Launch"}),p(r,{color:"secondary",label:"Deploy","icon-right":"send"}),p(r,{color:"secondary",icon:"shield",label:"Shield","icon-right":"chevron_right"}),p(r,{outline:"",color:"secondary",icon:"settings",round:""})])]),b("div",ree,[t[4]||(t[4]=b("span",{class:"jShowcase_title"},"Colors",-1)),b("div",see,[p(r,{color:"primary",label:"Primary"}),p(r,{color:"secondary",label:"Secondary"}),p(r,{color:"accent",label:"Accent"}),p(r,{color:"positive",label:"Positive"}),p(r,{color:"negative",label:"Negative"}),p(r,{color:"info",label:"Info"}),p(r,{color:"warning",label:"Warning"})])]),b("div",lee,[t[5]||(t[5]=b("span",{class:"jShowcase_title"},"Sizes",-1)),b("div",cee,[p(r,{color:"primary",label:"xs",size:"xs"}),p(r,{color:"primary",label:"sm",size:"sm"}),p(r,{color:"primary",label:"md",size:"md"}),p(r,{color:"primary",label:"lg",size:"lg"}),p(r,{color:"primary",label:"xl",size:"xl"})])]),b("div",uee,[t[6]||(t[6]=b("span",{class:"jShowcase_title"},"States",-1)),b("div",dee,[p(r,{color:"info",label:"Loading",loading:""}),p(r,{color:"negative",label:"Disabled",disable:""}),p(r,{color:"accent",label:"Dense",dense:""}),p(r,{color:"secondary",icon:"bolt",label:"Stacked",stack:""}),p(r,{color:"primary",label:"No caps","no-caps":""})])])])}const fee=Be(KX,[["render",pee]]),mee=Object.freeze(Object.defineProperty({__proto__:null,default:fee},Symbol.toStringTag,{value:"Module"}));function Su(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}const we=er({name:"close-popup",beforeMount(e,{value:t}){const n={depth:Su(t),handler(a){n.depth!==0&&setTimeout(()=>{const o=s_(e);o!==void 0&&l_(o,a,n.depth)})},handlerKey(a){An(a,13)===!0&&n.handler(a)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:t,oldValue:n}){t!==n&&(e.__qclosepopup.depth=Su(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}}),Af=Te({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=E(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${a.length!==0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>j("div",{class:n.value},tt(t.default))}}),lo=[];let Go;function hee(e){Go=e.keyCode===27}function gee(){Go===!0&&(Go=!1)}function vee(e){Go===!0&&(Go=!1,An(e,27)===!0&&lo[lo.length-1](e))}function If(e){window[e]("keydown",hee),window[e]("blur",gee),window[e]("keyup",vee),Go=!1}function qf(e){Ue.is.desktop===!0&&(lo.push(e),lo.length===1&&If("addEventListener"))}function Di(e){const t=lo.indexOf(e);t!==-1&&(lo.splice(t,1),lo.length===0&&If("removeEventListener"))}const $a=Te({name:"QMenu",inheritAttrs:!1,props:{...e_,...Us,...Rt,...ro,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Qi},self:{type:String,validator:Qi},offset:{type:Array,validator:Up},scrollTarget:Np,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ws,"click","escapeKey"],setup(e,{slots:t,emit:n,attrs:a}){let o=null,i,r,s;const l=Oe(),{proxy:u}=l,{$q:c}=u,d=be(null),f=be(!1),h=E(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),_=Ot(e,c),{registerTick:I,removeTick:C}=Fo(),{registerTimeout:g}=Jo(),{transitionProps:y,transitionStyle:w}=ar(e),{localScrollTarget:v,changeScrollEvent:x,unconfigureScrollTarget:L}=Op(e,le),{anchorEl:q,canShow:T}=Rp({showing:f}),{hide:M}=Js({showing:f,canShow:T,handleShow:Ie,handleHide:H,hideOnRouteChange:h,processOnMount:!0}),{showPortal:$,hidePortal:z,renderPortal:O}=Gs(l,d,k,"menu"),Y={anchorEl:q,innerRef:d,onClickOutside(Q){if(e.persistent!==!0&&f.value===!0)return M(Q),(Q.type==="touchstart"||Q.target.classList.contains("q-dialog__backdrop"))&&He(Q),!0}},B=E(()=>Ai(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),N=E(()=>e.cover===!0?B.value:Ai(e.self||"top start",c.lang.rtl)),ne=E(()=>(e.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),ee=E(()=>e.autoClose===!0?{onClick:ke}:{}),J=E(()=>f.value===!0&&e.persistent!==!0);Pe(J,Q=>{Q===!0?(qf(ie),Hp(Y)):(Di(ie),Ci(Y))});function ge(){or(()=>{let Q=d.value;Q&&Q.contains(document.activeElement)!==!0&&(Q=Q.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||Q.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||Q.querySelector("[autofocus], [data-autofocus]")||Q,Q.focus({preventScroll:!0}))})}function Ie(Q){if(o=e.noRefocus===!1?document.activeElement:null,Vs(Qe),$(),le(),i=void 0,Q!==void 0&&(e.touchPosition||e.contextMenu)){const U=Vn(Q);if(U.left!==void 0){const{top:V,left:A}=q.value.getBoundingClientRect();i={left:U.left-A,top:U.top-V}}}r===void 0&&(r=Pe(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,m)),e.noFocus!==!0&&document.activeElement.blur(),I(()=>{m(),e.noFocus!==!0&&ge()}),g(()=>{c.platform.is.ios===!0&&(s=e.autoClose,d.value.click()),m(),$(!0),n("show",Q)},e.transitionDuration)}function H(Q){C(),z(),F(!0),o!==null&&(Q===void 0||Q.qClickOutside!==!0)&&((((Q==null?void 0:Q.type.indexOf("key"))===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),g(()=>{z(!0),n("hide",Q)},e.transitionDuration)}function F(Q){i=void 0,r!==void 0&&(r(),r=void 0),(Q===!0||f.value===!0)&&(Si(Qe),L(),Ci(Y),Di(ie)),Q!==!0&&(o=null)}function le(){(q.value!==null||e.scrollTarget!==void 0)&&(v.value=Vp(q.value,e.scrollTarget),x(v.value,m))}function ke(Q){s!==!0?(zp(u,Q),n("click",Q)):s=!1}function Qe(Q){J.value===!0&&e.noFocus!==!0&&Ap(d.value,Q.target)!==!0&&ge()}function ie(Q){e.noEscDismiss!==!0&&(n("escapeKey"),M(Q))}function m(){Ks({targetEl:d.value,offset:e.offset,anchorEl:q.value,anchorOrigin:B.value,selfOrigin:N.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function k(){return j(Jt,y.value,()=>f.value===!0?j("div",{role:"menu",...a,ref:d,tabindex:-1,class:["q-menu q-position-engine scroll"+ne.value,a.class],style:[a.style,w.value],...ee.value},tt(t.default)):null)}return at(F),Object.assign(u,{focus:ge,updatePosition:m}),O}}),bee=Object.keys(Hs);function _ee(e){return bee.reduce((t,n)=>{const a=e[n];return a!==void 0&&(t[n]=a),t},{})}const yee=Te({name:"QBtnDropdown",props:{...Hs,...ro,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,noRefocus:Boolean,noFocus:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:n}){const{proxy:a}=Oe(),o=be(e.modelValue),i=be(null),r=bf(),s=E(()=>{const v={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":r.value,"aria-label":e.toggleAriaLabel||a.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(v["aria-disabled"]="true"),v}),l=E(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),u=E(()=>Mp(e)),c=E(()=>_ee(e));Pe(()=>e.modelValue,v=>{var x;(x=i.value)==null||x[v?"show":"hide"]()}),Pe(()=>e.split,w);function d(v){o.value=!0,n("beforeShow",v)}function f(v){n("show",v),n("update:modelValue",!0)}function h(v){o.value=!1,n("beforeHide",v)}function _(v){n("hide",v),n("update:modelValue",!1)}function I(v){n("click",v)}function C(v){Et(v),w(),n("click",v)}function g(v){var x;(x=i.value)==null||x.toggle(v)}function y(v){var x;(x=i.value)==null||x.show(v)}function w(v){var x;(x=i.value)==null||x.hide(v)}return Object.assign(a,{show:y,hide:w,toggle:g}),Dt(()=>{e.modelValue===!0&&y()}),()=>{const v=[j(Ve,{class:l.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&v.push(j($a,{ref:i,id:r.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noEscDismiss:e.noEscDismiss,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,noFocus:e.noFocus,noRefocus:e.noRefocus,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:d,onShow:f,onBeforeHide:h,onHide:_},t.default)),e.split===!1?j(vt,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...s.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:I},{default:()=>tt(t.label,[]).concat(v),loading:t.loading}):j(Af,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...u.value,glossy:e.glossy,stretch:e.stretch},()=>[j(vt,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:C},{default:t.label,loading:t.loading}),j(vt,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...s.value,...u.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>v)])}}}),wee=["ul","ol"],fo=Te({name:"QList",props:{...Rt,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=Oe(),a=Ot(e,n.proxy.$q),o=E(()=>wee.includes(e.tag)?null:"list"),i=E(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>j(e.tag,{class:i.value,role:o.value},tt(t.default))}}),Tn=Te({name:"QItem",props:{...Rt,...Ub,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=Oe(),o=Ot(e,a),{hasLink:i,linkAttrs:r,linkClass:s,linkTag:l,navigateOnClick:u}=Pp(),c=be(null),d=be(null),f=E(()=>e.clickable===!0||i.value===!0||e.tag==="label"),h=E(()=>e.disable!==!0&&f.value===!0),_=E(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),I=E(()=>e.insetLevel===void 0?null:{["padding"+(a.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function C(w){h.value===!0&&(d.value!==null&&w.qAvoidFocus!==!0&&(w.qKeyEvent!==!0&&document.activeElement===c.value?d.value.focus():document.activeElement===d.value&&c.value.focus()),u(w))}function g(w){if(h.value===!0&&An(w,[13,32])===!0){He(w),w.qKeyEvent=!0;const v=new MouseEvent("click",w);v.qKeyEvent=!0,c.value.dispatchEvent(v)}n("keyup",w)}function y(){const w=_v(t.default,[]);return h.value===!0&&w.unshift(j("div",{class:"q-focus-helper",tabindex:-1,ref:d})),w}return()=>{const w={ref:c,class:_.value,style:I.value,role:"listitem",onClick:C,onKeyup:g};return h.value===!0?(w.tabindex=e.tabindex||"0",Object.assign(w,r.value)):f.value===!0&&(w["aria-disabled"]="true"),j(l.value,w,y())}}}),Ln=Te({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=E(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>j("div",{class:n.value},tt(t.default))}}),See={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Fr={xs:2,sm:4,md:8,lg:16,xl:24},ul=Te({name:"QSeparator",props:{...Rt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=Oe(),n=Ot(e,t.proxy.$q),a=E(()=>e.vertical===!0?"vertical":"horizontal"),o=E(()=>` q-separator--${a.value}`),i=E(()=>e.inset!==!1?`${o.value}-${See[e.inset]}`:""),r=E(()=>`q-separator${o.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),s=E(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const u=e.spaced===!0?`${Fr.md}px`:e.spaced in Fr?`${Fr[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${c[0]}`]=l[`margin${c[1]}`]=u}return l});return()=>j("hr",{class:r.value,style:s.value,"aria-orientation":a.value})}}),kee="component",xee={docsUrl:"https://v2.quasar.dev/vue-components/button-dropdown"},Cee={label:{type:["String","Number"],desc:"Text shown on the button",category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"text-color":{type:"String",desc:"Overrides text color (if needed)",category:"style"},flat:{type:"Boolean",desc:"Use flat design (no background)",category:"style"},outline:{type:"Boolean",desc:"Use outline design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},push:{type:"Boolean",desc:"Use push design",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},split:{type:"Boolean",desc:"Split dropdown arrows into a separate button",category:"behavior"},"dropdown-icon":{type:"String",desc:"Override default dropdown icon",category:"content"},"no-icon-animation":{type:"Boolean",desc:"Disable dropdown icon rotation animation",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},"auto-close":{type:"Boolean",desc:"Allows the menu to match at least the full width of its target",category:"behavior"},persistent:{type:"Boolean",desc:"Allows the menu to not be dismissed by a click/tap outside or ESC key",category:"behavior"},cover:{type:"Boolean",desc:"Menu will cover the button when shown",category:"behavior"},"menu-anchor":{type:"String",desc:"Position of the menu on the target (e.g. 'bottom left')",category:"position"},"menu-self":{type:"String",desc:"Position of the menu relative to itself (e.g. 'top left')",category:"position"},"content-class":{type:["String","Array","Object"],desc:"Class definitions to be attributed to the menu",category:"style"},"content-style":{type:["String","Array","Object"],desc:"Style definitions to be attributed to the menu",category:"style"},loading:{type:["Boolean","null"],default:"null",desc:"Put button into loading state",category:"behavior"},stretch:{type:"Boolean",desc:"When on flexbox parent, stretches to parent's height",category:"content"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps",category:"content"}},Qee={default:{desc:"Default slot for menu content"},label:{desc:"Customize button label"}},Aee={click:{desc:"Emitted when the main button is clicked (only for split mode)",params:{evt:{type:"Object",desc:"JS event object"}}},show:{desc:"Emitted when the menu is shown"},hide:{desc:"Emitted when the menu is hidden"},"before-show":{desc:"Emitted before the menu is shown"},"before-hide":{desc:"Emitted before the menu is hidden"}},Iee={type:kee,meta:xee,props:Cee,slots:Qee,events:Aee},qee={name:"ShowcaseQuasarBtnDropdown",components:{QBtnDropdown:yee,QList:fo,QItem:Tn,QItemSection:Ln,QIcon:Ve,QSeparator:ul},label:"Quasar Btn Dropdown",icon:"smart_button",apiJson:Iee,importName:"QBtnDropdown",importFrom:"quasar"},Tee={class:"jShowcase_row jShowcase_column"},Lee={class:"jShowcase_group"},Eee={class:"jShowcase_items"},Bee={class:"jShowcase_group"},Dee={class:"jShowcase_items"},Pee={class:"jShowcase_group"},jee={class:"jShowcase_items"},Mee={class:"jShowcase_group"},$ee={class:"jShowcase_items"};function Ree(e,t,n,a,o,i){const r=G("QIcon"),s=G("QItemSection"),l=G("QItem"),u=G("QSeparator"),c=G("QList"),d=G("QBtnDropdown");return D(),Z("div",Tee,[b("div",Lee,[t[5]||(t[5]=b("span",{class:"jShowcase_title"},"Basic",-1)),b("div",Eee,[p(d,{color:"primary",label:"Actions"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"edit"})]),_:1}),p(s,null,{default:S(()=>[...t[0]||(t[0]=[W("Edit",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"content_copy"})]),_:1}),p(s,null,{default:S(()=>[...t[1]||(t[1]=[W("Duplicate",-1)])]),_:1})]),_:1})),[[we]]),p(u),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"delete"})]),_:1}),p(s,null,{default:S(()=>[...t[2]||(t[2]=[W("Delete",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1}),p(d,{color:"secondary",icon:"add",label:"Create"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[3]||(t[3]=[W("New File",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[4]||(t[4]=[W("New Folder",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})])]),b("div",Bee,[t[10]||(t[10]=b("span",{class:"jShowcase_title"},"Split",-1)),b("div",Dee,[p(d,{color:"primary",icon:"save",label:"Save",split:"",onClick:f=>null},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[6]||(t[6]=[W("Save as Draft",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[7]||(t[7]=[W("Save & Publish",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1}),p(d,{color:"accent",icon:"share",label:"Share",split:"",onClick:f=>null},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[8]||(t[8]=[W("Copy Link",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[9]||(t[9]=[W("Email",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})])]),b("div",Pee,[t[19]||(t[19]=b("span",{class:"jShowcase_title"},"Variants",-1)),b("div",jee,[p(d,{color:"primary",label:"Flat",flat:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[11]||(t[11]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[12]||(t[12]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1}),p(d,{color:"primary",label:"Outline",outline:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[13]||(t[13]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[14]||(t[14]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1}),p(d,{color:"primary",label:"Unelevated",unelevated:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[15]||(t[15]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[16]||(t[16]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1}),p(d,{color:"primary",label:"Push",push:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[17]||(t[17]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[18]||(t[18]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})])]),b("div",Mee,[t[21]||(t[21]=b("span",{class:"jShowcase_title"},"States",-1)),b("div",$ee,[p(d,{color:"info",label:"Loading",loading:""}),p(d,{color:"negative",label:"Disabled",disable:""}),p(d,{color:"secondary",label:"Dense",dense:""}),p(d,{color:"primary",label:"No Icon Animation","no-icon-animation":""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[20]||(t[20]=[W("Option",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})])])])}const Oee=Be(qee,[["render",Ree]]),Fee=Object.freeze(Object.defineProperty({__proto__:null,default:Oee},Symbol.toStringTag,{value:"Module"})),zee=Te({name:"QBtnToggle",props:{...po,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(t=>("label"in t||"icon"in t||"slot"in t)&&"value"in t)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:t,emit:n}){const a=E(()=>e.options.find(f=>f.value===e.modelValue)!==void 0),o=E(()=>({type:"hidden",name:e.name,value:e.modelValue})),i=Ma(o),r=E(()=>Mp(e)),s=E(()=>({rounded:e.rounded,dense:e.dense,...r.value})),l=E(()=>e.options.map((f,h)=>{const{attrs:_,value:I,slot:C,...g}=f;return{slot:C,props:{key:h,"aria-pressed":I===e.modelValue?"true":"false",..._,...g,...s.value,disable:e.disable===!0||g.disable===!0,color:I===e.modelValue?c(g,"toggleColor"):c(g,"color"),textColor:I===e.modelValue?c(g,"toggleTextColor"):c(g,"textColor"),noCaps:c(g,"noCaps")===!0,noWrap:c(g,"noWrap")===!0,size:c(g,"size"),padding:c(g,"padding"),ripple:c(g,"ripple"),stack:c(g,"stack")===!0,stretch:c(g,"stretch")===!0,onClick(y){u(I,f,y)}}}}));function u(f,h,_){e.readonly!==!0&&(e.modelValue===f?e.clearable===!0&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",f,h),n("click",_))}function c(f,h){return f[h]===void 0?e[h]:f[h]}function d(){const f=l.value.map(h=>j(vt,h.props,h.slot!==void 0?t[h.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&a.value===!0&&i(f,"push"),Ut(t.default,f)}return()=>j(Af,{class:"q-btn-toggle",...r.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},d)}}),Nee="component",Vee={docsUrl:"https://v2.quasar.dev/vue-components/button-toggle"},Hee={"model-value":{type:"Any",desc:"Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",category:"model"},options:{type:"Array",desc:"Array of Objects defining each option; each object has: label, value, icon, attrs, slot",category:"content"},color:{type:"String",desc:"Color name for non-toggled buttons",category:"style"},"text-color":{type:"String",desc:"Text color for non-toggled buttons",category:"style"},"toggle-color":{type:"String",desc:"Color name for toggled button",category:"style"},"toggle-text-color":{type:"String",desc:"Text color for toggled button",category:"style"},spread:{type:"Boolean",desc:"Spread horizontally to all available space",category:"style"},outline:{type:"Boolean",desc:"Use outline design",category:"style"},flat:{type:"Boolean",desc:"Use flat design",category:"style"},unelevated:{type:"Boolean",desc:"Remove shadow",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},push:{type:"Boolean",desc:"Use push design",category:"style"},glossy:{type:"Boolean",desc:"Applies a glossy effect",category:"style"},"no-caps":{type:"Boolean",desc:"Avoid turning label text into caps",category:"content"},"no-wrap":{type:"Boolean",desc:"Avoid label text wrapping",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},stack:{type:"Boolean",desc:"Stack icon and label vertically for all buttons",category:"content"},stretch:{type:"Boolean",desc:"When on flexbox parent, stretches to parent's height",category:"content"},size:{type:"String",desc:"Button size (xs, sm, md, lg, xl or CSS unit)",category:"style"},ripple:{type:["Boolean","Object"],desc:"Configure ripple effect (or disable it)",category:"style"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},clearable:{type:"Boolean",desc:"Clears model on click of already selected button",category:"behavior"}},Uee={"update:model-value":{desc:"Emitted when the component changes the model value",params:{value:{type:"Any",desc:"New model value"}}},clear:{desc:"Emitted when the model is cleared (only when using clearable)"}},Wee={type:Nee,meta:Vee,props:Hee,events:Uee},Jee={name:"ShowcaseBtnToggle",components:{QBtnToggle:zee},apiJson:Wee,importName:"QBtnToggle",importFrom:"quasar",data(){return{toggleValue:"one"}},label:"Btn Toggle",icon:"smart_button",code:null},Gee={class:"jShowcase_row jShowcase_column"},Kee={class:"jShowcase_group"},Yee={class:"jShowcase_items"},Zee={class:"jShowcase_group"},Xee={class:"jShowcase_items"},ete={class:"jShowcase_group"},tte={class:"jShowcase_items"};function nte(e,t,n,a,o,i){const r=G("QBtnToggle");return D(),Z("div",Gee,[b("div",Kee,[t[3]||(t[3]=b("span",{class:"jShowcase_title"},"Variants",-1)),b("div",Yee,[p(r,{modelValue:o.toggleValue,"onUpdate:modelValue":t[0]||(t[0]=s=>o.toggleValue=s),label:"Toggle me","toggle-color":"primary",options:[{label:"One",value:"one"},{label:"Two",value:"two"},{label:"Three",value:"three"}]},null,8,["modelValue"])])]),b("div",Zee,[t[4]||(t[4]=b("span",{class:"jShowcase_title"},"Flat with Icons",-1)),b("div",Xee,[p(r,{modelValue:o.toggleValue,"onUpdate:modelValue":t[1]||(t[1]=s=>o.toggleValue=s),flat:"","toggle-color":"primary","text-color":"muted",options:[{label:"List",value:"one",icon:"view_list"},{label:"Grid",value:"two",icon:"grid_view"},{label:"Board",value:"three",icon:"dashboard"}]},null,8,["modelValue"])])]),b("div",ete,[t[5]||(t[5]=b("span",{class:"jShowcase_title"},"Outline",-1)),b("div",tte,[p(r,{modelValue:o.toggleValue,"onUpdate:modelValue":t[2]||(t[2]=s=>o.toggleValue=s),label:"Toggle me","toggle-color":"primary",color:"surface-0","text-color":"faint",outline:"",options:[{label:"One",value:"one"},{label:"Two",value:"two"},{label:"Three",value:"three"}]},null,8,["modelValue"])])])])}const ote=Be(Jee,[["render",nte]]),ate=Object.freeze(Object.defineProperty({__proto__:null,default:ote},Symbol.toStringTag,{value:"Module"}));function ite(e,t,n){let a;function o(){a!==void 0&&(us.remove(a),a=void 0)}return at(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){a={condition:()=>n.value===!0,handler:t},us.add(a)}}}let aa=0,zr,Nr,da,Vr=!1,ku,xu,Cu,Zn=null;function rte(e){ste(e)&&He(e)}function ste(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Xg(e),n=e.shiftKey&&!e.deltaX,a=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||a?e.deltaY:e.deltaX;for(let i=0;i<t.length;i++){const r=t[i];if(h_(r,a))return a?o<0&&r.scrollTop===0?!0:o>0&&r.scrollTop+r.clientHeight===r.scrollHeight:o<0&&r.scrollLeft===0?!0:o>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function Qu(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Xa(e){Vr!==!0&&(Vr=!0,requestAnimationFrame(()=>{Vr=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:a}=document.scrollingElement;(da===void 0||t!==window.innerHeight)&&(da=n-t,document.scrollingElement.scrollTop=a),a>da&&(document.scrollingElement.scrollTop-=Math.ceil((a-da)/8))}))}function Au(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:o}=window.getComputedStyle(t);zr=f_(window),Nr=p_(window),ku=t.style.left,xu=t.style.top,Cu=window.location.href,t.style.left=`-${zr}px`,t.style.top=`-${Nr}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,Ue.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Xa,gt.passiveCapture),window.visualViewport.addEventListener("scroll",Xa,gt.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Qu,gt.passiveCapture))}Ue.is.desktop===!0&&Ue.is.mac===!0&&window[`${e}EventListener`]("wheel",rte,gt.notPassive),e==="remove"&&(Ue.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Xa,gt.passiveCapture),window.visualViewport.removeEventListener("scroll",Xa,gt.passiveCapture)):window.removeEventListener("scroll",Qu,gt.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=ku,t.style.top=xu,window.location.href===Cu&&window.scrollTo(zr,Nr),da=void 0)}function lte(e){let t="add";if(e===!0){if(aa++,Zn!==null){clearTimeout(Zn),Zn=null;return}if(aa>1)return}else{if(aa===0||(aa--,aa>0))return;if(t="remove",Ue.is.ios===!0&&Ue.is.nativeMobile===!0){Zn!==null&&clearTimeout(Zn),Zn=setTimeout(()=>{Au(t),Zn=null},100);return}}Au(t)}function cte(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,lte(t))}}}let ei=0;const ute={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Iu={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},Tf=Te({name:"QDialog",inheritAttrs:!1,props:{...Us,...ro,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:e=>["standard","top","bottom","left","right"].includes(e)}},emits:[...Ws,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:a}){const o=Oe(),i=be(null),r=be(!1),s=be(!1);let l=null,u=null,c,d;const f=E(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:h}=cte(),{registerTimeout:_}=Jo(),{registerTick:I,removeTick:C}=Fo(),{transitionProps:g,transitionStyle:y}=ar(e,()=>Iu[e.position][0],()=>Iu[e.position][1]),w=E(()=>y.value+(e.backdropFilter!==void 0?`;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}`:"")),{showPortal:v,hidePortal:x,portalIsAccessible:L,renderPortal:q}=Gs(o,i,Qe,"dialog"),{hide:T}=Js({showing:r,hideOnRouteChange:f,handleShow:N,handleHide:ne,processOnMount:!0}),{addToHistory:M,removeFromHistory:$}=ite(r,T,f),z=E(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${ute[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),O=E(()=>r.value===!0&&e.seamless!==!0),Y=E(()=>e.autoClose===!0?{onClick:F}:{}),B=E(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${O.value===!0?"modal":"seamless"}`,a.class]);Pe(()=>e.maximized,ie=>{r.value===!0&&H(ie)}),Pe(O,ie=>{h(ie),ie===!0?(Vs(ke),qf(ge)):(Si(ke),Di(ge))});function N(ie){var m;M(),u=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,H(e.maximized),v(),s.value=!0,e.noFocus!==!0?((m=document.activeElement)==null||m.blur(),I(ee)):C(),_(()=>{if(o.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:k,bottom:Q}=document.activeElement.getBoundingClientRect(),{innerHeight:U}=window,V=window.visualViewport!==void 0?window.visualViewport.height:U;k>0&&Q>V/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-V,Q>=U?1/0:Math.ceil(document.scrollingElement.scrollTop+Q-V/2))),document.activeElement.scrollIntoView()}d=!0,i.value.click(),d=!1}v(!0),s.value=!1,n("show",ie)},e.transitionDuration)}function ne(ie){C(),$(),Ie(!0),s.value=!0,x(),u!==null&&((((ie==null?void 0:ie.type.indexOf("key"))===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),_(()=>{x(!0),s.value=!1,n("hide",ie)},e.transitionDuration)}function ee(ie){or(()=>{let m=i.value;if(m!==null){if(ie!==void 0){const k=m.querySelector(ie);if(k!==null){k.focus({preventScroll:!0});return}}m.contains(document.activeElement)!==!0&&(m=m.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||m.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||m.querySelector("[autofocus], [data-autofocus]")||m,m.focus({preventScroll:!0}))}})}function J(ie){ie&&typeof ie.focus=="function"?ie.focus({preventScroll:!0}):ee(),n("shake");const m=i.value;m!==null&&(m.classList.remove("q-animate--scale"),m.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,i.value!==null&&(m.classList.remove("q-animate--scale"),ee())},170))}function ge(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&J():(n("escapeKey"),T()))}function Ie(ie){l!==null&&(clearTimeout(l),l=null),(ie===!0||r.value===!0)&&(H(!1),e.seamless!==!0&&(h(!1),Si(ke),Di(ge))),ie!==!0&&(u=null)}function H(ie){ie===!0?c!==!0&&(ei<1&&document.body.classList.add("q-body--dialog"),ei++,c=!0):c===!0&&(ei<2&&document.body.classList.remove("q-body--dialog"),ei--,c=!1)}function F(ie){d!==!0&&(T(ie),n("click",ie))}function le(ie){e.persistent!==!0&&e.noBackdropDismiss!==!0?T(ie):e.noShake!==!0&&J()}function ke(ie){e.allowFocusOutside!==!0&&L.value===!0&&Ap(i.value,ie.target)!==!0&&ee('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:ee,shake:J,__updateRefocusTarget(ie){u=ie||null}}),at(Ie);function Qe(){return j("div",{role:"dialog","aria-modal":O.value===!0?"true":"false",...a,class:B.value},[j(Jt,{name:"q-transition--fade",appear:!0},()=>O.value===!0?j("div",{class:"q-dialog__backdrop fixed-full",style:w.value,"aria-hidden":"true",tabindex:-1,onClick:le}):null),j(Jt,g.value,()=>r.value===!0?j("div",{ref:i,class:z.value,style:y.value,tabindex:-1,...Y.value},tt(t.default)):null)])}return q}}),Lf=Te({name:"QCard",props:{...Rt,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Oe(),a=Ot(e,n),o=E(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>j(e.tag,{class:o.value},tt(t.default))}}),Ef=Te({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=E(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>j(e.tag,{class:n.value},tt(t.default))}}),Bf=Te({name:"QCardActions",props:{...qp,vertical:Boolean},setup(e,{slots:t}){const n=Tp(e),a=E(()=>`q-card__actions ${n.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>j("div",{class:a.value},tt(t.default))}}),dte=Te({name:"QSpace",setup(){const e=j("div",{class:"q-space"});return()=>e}}),Ra=Te({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=E(()=>parseInt(e.lines,10)),a=E(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),o=E(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>j("div",{style:o.value,class:a.value},tt(t.default))}}),pte=["top","middle","bottom"],Df=Te({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>pte.includes(e)}},setup(e,{slots:t}){const n=E(()=>e.align!==void 0?{verticalAlign:e.align}:null),a=E(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>j("div",{class:a.value,style:n.value,role:"status","aria-label":e.label},Ut(t.default,e.label!==void 0?[e.label]:[]))}}),Pf=Te({name:"QInnerLoading",props:{...Rt,...ro,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:t}){const n=Oe(),a=Ot(e,n.proxy.$q),{transitionProps:o,transitionStyle:i}=ar(e),r=E(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(a.value===!0?" q-inner-loading--dark":"")),s=E(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function l(){const c=[j(ja,{size:e.size,color:e.color})];return e.label!==void 0&&c.push(j("div",{class:s.value,style:e.labelStyle},[e.label])),c}function u(){return e.showing===!0?j("div",{class:r.value,style:i.value},t.default!==void 0?t.default():l()):null}return()=>j(Jt,o.value,u)}}),fte=Te({name:"QField",inheritAttrs:!1,props:{...rr,tag:{type:String,default:"label"}},emits:al,setup(){return rl(il({tagProp:!0}))}}),mte={xs:8,sm:10,md:14,lg:20,xl:24},jf=Te({name:"QChip",props:{...Rt,...Hn,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=Oe(),o=Ot(e,a),i=Un(e,mte),r=E(()=>e.selected===!0||e.icon!==void 0),s=E(()=>e.selected===!0?e.iconSelected||a.iconSet.chip.selected:e.icon),l=E(()=>e.iconRemove||a.iconSet.chip.remove),u=E(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=E(()=>{const C=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(C?` text-${C} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(o.value===!0?" q-chip--dark q-dark":"")}),d=E(()=>{const C=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},g={...C,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||a.lang.label.remove};return{chip:C,remove:g}});function f(C){C.keyCode===13&&h(C)}function h(C){e.disable||(n("update:selected",!e.selected),n("click",C))}function _(C){(C.keyCode===void 0||C.keyCode===13)&&(He(C),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function I(){const C=[];u.value===!0&&C.push(j("div",{class:"q-focus-helper"})),r.value===!0&&C.push(j(Ve,{class:"q-chip__icon q-chip__icon--left",name:s.value}));const g=e.label!==void 0?[j("div",{class:"ellipsis"},[e.label])]:void 0;return C.push(j("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},zs(t.default,g))),e.iconRight&&C.push(j(Ve,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&C.push(j(Ve,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:l.value,...d.value.remove,onClick:_,onKeyup:_})),C}return()=>{if(e.modelValue===!1)return;const C={class:c.value,style:i.value};return u.value===!0&&Object.assign(C,d.value.chip,{onClick:h,onKeyup:f}),Ns("div",C,I(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Yt,e.ripple]])}}}),Kt=1e3,hte=["start","center","end","start-force","center-force","end-force"],Mf=Array.prototype.filter,gte=window.getComputedStyle(document.body).overflowAnchor===void 0?Bt:function(t,n){t!==null&&(t._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(t._qOverflowAnimationFrame),t._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(t===null)return;t._qOverflowAnimationFrame=void 0;const a=t.children||[];Mf.call(a,i=>i.dataset&&i.dataset.qVsAnchor!==void 0).forEach(i=>{delete i.dataset.qVsAnchor});const o=a[n];o!=null&&o.dataset&&(o.dataset.qVsAnchor="")}))};function No(e,t){return e+t}function Hr(e,t,n,a,o,i,r,s){const l=e===window?document.scrollingElement||document.documentElement:e,u=o===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-r-s,scrollMaxSize:0,offsetStart:-r,offsetEnd:-s};if(o===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=l.scrollLeft,c.scrollViewSize+=l.clientWidth),c.scrollMaxSize=l.scrollWidth,i===!0&&(c.scrollStart=(Ea===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=l.scrollTop,c.scrollViewSize+=l.clientHeight),c.scrollMaxSize=l.scrollHeight),n!==null)for(let d=n.previousElementSibling;d!==null;d=d.previousElementSibling)d.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=d[u]);if(a!==null)for(let d=a.nextElementSibling;d!==null;d=d.nextElementSibling)d.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=d[u]);if(t!==e){const d=l.getBoundingClientRect(),f=t.getBoundingClientRect();o===!0?(c.offsetStart+=f.left-d.left,c.offsetEnd-=f.width):(c.offsetStart+=f.top-d.top,c.offsetEnd-=f.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function qu(e,t,n,a){t==="end"&&(t=(e===window?document.body:e)[n===!0?"scrollWidth":"scrollHeight"]),e===window?n===!0?(a===!0&&(t=(Ea===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-t),window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t):n===!0?(a===!0&&(t=(Ea===!0?e.scrollWidth-e.offsetWidth:0)-t),e.scrollLeft=t):e.scrollTop=t}function ia(e,t,n,a){if(n>=a)return 0;const o=t.length,i=Math.floor(n/Kt),r=Math.floor((a-1)/Kt)+1;let s=e.slice(i,r).reduce(No,0);return n%Kt!==0&&(s-=t.slice(i*Kt,n).reduce(No,0)),a%Kt!==0&&a!==o&&(s-=t.slice(a,r*Kt).reduce(No,0)),s}const vte={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Tu={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...vte};function bte({virtualScrollLength:e,getVirtualScrollTarget:t,getVirtualScrollEl:n,virtualScrollItemSizeComputed:a}){const o=Oe(),{props:i,emit:r,proxy:s}=o,{$q:l}=s;let u,c,d,f=[],h;const _=be(0),I=be(0),C=be({}),g=be(null),y=be(null),w=be(null),v=be({from:0,to:0}),x=E(()=>i.tableColspan!==void 0?i.tableColspan:100);a===void 0&&(a=E(()=>i.virtualScrollItemSize));const L=E(()=>a.value+";"+i.virtualScrollHorizontal),q=E(()=>L.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);Pe(q,()=>{ne()}),Pe(L,T);function T(){N(c,!0)}function M(H){N(H===void 0?c:H)}function $(H,F){const le=t();if(le==null||le.nodeType===8)return;const ke=Hr(le,n(),g.value,y.value,i.virtualScrollHorizontal,l.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);d!==ke.scrollViewSize&&ne(ke.scrollViewSize),O(le,ke,Math.min(e.value-1,Math.max(0,parseInt(H,10)||0)),0,hte.indexOf(F)!==-1?F:c!==-1&&H>c?"end":"start")}function z(){const H=t();if(H==null||H.nodeType===8)return;const F=Hr(H,n(),g.value,y.value,i.virtualScrollHorizontal,l.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),le=e.value-1,ke=F.scrollMaxSize-F.offsetStart-F.offsetEnd-I.value;if(u===F.scrollStart)return;if(F.scrollMaxSize<=0){O(H,F,0,0);return}d!==F.scrollViewSize&&ne(F.scrollViewSize),Y(v.value.from);const Qe=Math.floor(F.scrollMaxSize-Math.max(F.scrollViewSize,F.offsetEnd)-Math.min(h[le],F.scrollViewSize/2));if(Qe>0&&Math.ceil(F.scrollStart)>=Qe){O(H,F,le,F.scrollMaxSize-F.offsetEnd-f.reduce(No,0));return}let ie=0,m=F.scrollStart-F.offsetStart,k=m;if(m<=ke&&m+F.scrollViewSize>=_.value)m-=_.value,ie=v.value.from,k=m;else for(let Q=0;m>=f[Q]&&ie<le;Q++)m-=f[Q],ie+=Kt;for(;m>0&&ie<le;)m-=h[ie],m>-F.scrollViewSize?(ie++,k=m):k=h[ie]+m;O(H,F,ie,k)}function O(H,F,le,ke,Qe){const ie=typeof Qe=="string"&&Qe.indexOf("-force")!==-1,m=ie===!0?Qe.replace("-force",""):Qe,k=m!==void 0?m:"start";let Q=Math.max(0,le-C.value[k]),U=Q+C.value.total;U>e.value&&(U=e.value,Q=Math.max(0,U-C.value.total)),u=F.scrollStart;const V=Q!==v.value.from||U!==v.value.to;if(V===!1&&m===void 0){J(le);return}const{activeElement:A}=document,P=w.value;V===!0&&P!==null&&P!==A&&P.contains(A)===!0&&(P.addEventListener("focusout",B),setTimeout(()=>{P==null||P.removeEventListener("focusout",B)})),gte(P,le-Q);const K=m!==void 0?h.slice(Q,le).reduce(No,0):0;if(V===!0){const re=U>=v.value.from&&Q<=v.value.to?v.value.to:U;v.value={from:Q,to:re},_.value=ia(f,h,0,Q),I.value=ia(f,h,U,e.value),requestAnimationFrame(()=>{v.value.to!==U&&u===F.scrollStart&&(v.value={from:v.value.from,to:U},I.value=ia(f,h,U,e.value))})}requestAnimationFrame(()=>{if(u!==F.scrollStart)return;V===!0&&Y(Q);const re=h.slice(Q,le).reduce(No,0),ae=re+F.offsetStart+_.value,se=ae+h[le];let me=ae+ke;if(m!==void 0){const fe=re-K,de=F.scrollStart+fe;me=ie!==!0&&de<ae&&se<de+F.scrollViewSize?de:m==="end"?se-F.scrollViewSize:ae-(m==="start"?0:Math.round((F.scrollViewSize-h[le])/2))}u=me,qu(H,me,i.virtualScrollHorizontal,l.lang.rtl),J(le)})}function Y(H){const F=w.value;if(F){const le=Mf.call(F.children,Q=>Q.classList&&Q.classList.contains("q-virtual-scroll--skip")===!1),ke=le.length,Qe=i.virtualScrollHorizontal===!0?Q=>Q.getBoundingClientRect().width:Q=>Q.offsetHeight;let ie=H,m,k;for(let Q=0;Q<ke;){for(m=Qe(le[Q]),Q++;Q<ke&&le[Q].classList.contains("q-virtual-scroll--with-prev")===!0;)m+=Qe(le[Q]),Q++;k=m-h[ie],k!==0&&(h[ie]+=k,f[Math.floor(ie/Kt)]+=k),ie++}}}function B(){var H;(H=w.value)==null||H.focus()}function N(H,F){const le=Number(a.value);(F===!0||Array.isArray(h)===!1)&&(h=[]);const ke=h.length;h.length=e.value;for(let ie=e.value-1;ie>=ke;ie--)h[ie]=le;const Qe=Math.floor((e.value-1)/Kt);f=[];for(let ie=0;ie<=Qe;ie++){let m=0;const k=Math.min((ie+1)*Kt,e.value);for(let Q=ie*Kt;Q<k;Q++)m+=h[Q];f.push(m)}c=-1,u=void 0,_.value=ia(f,h,0,v.value.from),I.value=ia(f,h,v.value.to,e.value),H>=0?(Y(v.value.from),rt(()=>{$(H)})):ge()}function ne(H){if(H===void 0&&typeof window<"u"){const m=t();m!=null&&m.nodeType!==8&&(H=Hr(m,n(),g.value,y.value,i.virtualScrollHorizontal,l.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}d=H;const F=parseFloat(i.virtualScrollSliceRatioBefore)||0,le=parseFloat(i.virtualScrollSliceRatioAfter)||0,ke=1+F+le,Qe=H===void 0||H<=0?1:Math.ceil(H/a.value),ie=Math.max(1,Qe,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/ke));C.value={total:Math.ceil(ie*ke),start:Math.ceil(ie*F),center:Math.ceil(ie*(.5+F)),end:Math.ceil(ie*(1+F)),view:Qe}}function ee(H,F){const le=i.virtualScrollHorizontal===!0?"width":"height",ke={["--q-virtual-scroll-item-"+le]:a.value+"px"};return[H==="tbody"?j(H,{class:"q-virtual-scroll__padding",key:"before",ref:g},[j("tr",[j("td",{style:{[le]:`${_.value}px`,...ke},colspan:x.value})])]):j(H,{class:"q-virtual-scroll__padding",key:"before",ref:g,style:{[le]:`${_.value}px`,...ke}}),j(H,{class:"q-virtual-scroll__content",key:"content",ref:w,tabindex:-1},F.flat()),H==="tbody"?j(H,{class:"q-virtual-scroll__padding",key:"after",ref:y},[j("tr",[j("td",{style:{[le]:`${I.value}px`,...ke},colspan:x.value})])]):j(H,{class:"q-virtual-scroll__padding",key:"after",ref:y,style:{[le]:`${I.value}px`,...ke}})]}function J(H){c!==H&&(i.onVirtualScroll!==void 0&&r("virtualScroll",{index:H,from:v.value.from,to:v.value.to-1,direction:H<c?"decrease":"increase",ref:s}),c=H)}ne();const ge=Fs(z,l.platform.is.ios===!0?120:35);Ds(()=>{ne()});let Ie=!1;return Yo(()=>{Ie=!0}),Wi(()=>{if(Ie!==!0)return;const H=t();u!==void 0&&H!==void 0&&H!==null&&H.nodeType!==8?qu(H,u,i.virtualScrollHorizontal,l.lang.rtl):$(c)}),at(()=>{ge.cancel()}),Object.assign(s,{scrollTo:$,reset:T,refresh:M}),{virtualScrollSliceRange:v,virtualScrollSliceSizeComputed:C,setVirtualScrollSize:ne,onVirtualScrollEvt:ge,localResetVirtualScroll:N,padVirtualScroll:ee,scrollTo:$,reset:T,refresh:M}}function On(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Lu(e,t,n){if(n<=t)return t;const a=n-t+1;let o=t+(e-t)%a;return o<t&&(o=a+o),o===0?0:o}const Eu=e=>["add","add-unique","toggle"].includes(e),_te=".*+?^${}()|[]\\",yte=Object.keys(rr);function Ur(e,t){if(typeof e=="function")return e;const n=e!==void 0?e:t;return a=>a!==null&&typeof a=="object"&&n in a?a[n]:a}const dl=Te({name:"QSelect",inheritAttrs:!1,props:{...Tu,...po,...rr,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Eu},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:Tu.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...al,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:t,emit:n}){const{proxy:a}=Oe(),{$q:o}=a,i=be(!1),r=be(!1),s=be(-1),l=be(""),u=be(!1),c=be(!1);let d=null,f=null,h,_,I,C=null,g,y,w,v;const x=be(null),L=be(null),q=be(null),T=be(null),M=be(null),$=Sf(e),z=kf(yl),O=E(()=>Array.isArray(e.options)?e.options.length:0),Y=E(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:N,localResetVirtualScroll:ne,padVirtualScroll:ee,onVirtualScrollEvt:J,scrollTo:ge,setVirtualScrollSize:Ie}=bte({virtualScrollLength:O,getVirtualScrollTarget:im,getVirtualScrollEl:ho,virtualScrollItemSizeComputed:Y}),H=il(),F=E(()=>{const R=e.mapOptions===!0&&e.multiple!==!0,ye=e.modelValue!==void 0&&(e.modelValue!==null||R===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const Se=e.mapOptions===!0&&h!==void 0?h:[],Ne=ye.map(Ze=>ce(Ze,Se));return e.modelValue===null&&R===!0?Ne.filter(Ze=>Ze!==null):Ne}return ye}),le=E(()=>{const R={};return yte.forEach(ye=>{const Se=e[ye];Se!==void 0&&(R[ye]=Se)}),R}),ke=E(()=>e.optionsDark===null?H.isDark.value:e.optionsDark),Qe=E(()=>La(F.value)),ie=E(()=>{let R="q-field__input q-placeholder col";return e.hideSelected===!0||F.value.length===0?[R,e.inputClass]:(R+=" q-field__input--padding",e.inputClass===void 0?R:[R,e.inputClass])}),m=E(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),k=E(()=>O.value===0),Q=E(()=>F.value.map(R=>X.value(R)).join(", ")),U=E(()=>e.displayValue!==void 0?e.displayValue:Q.value),V=E(()=>e.optionsHtml===!0?()=>!0:R=>(R==null?void 0:R.html)===!0),A=E(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||F.value.some(V.value))),P=E(()=>H.focused.value===!0?e.tabindex:-1),K=E(()=>{const R={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${H.targetUid.value}_lb`};return s.value>=0&&(R["aria-activedescendant"]=`${H.targetUid.value}_${s.value}`),R}),re=E(()=>({id:`${H.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ae=E(()=>F.value.map((R,ye)=>({index:ye,opt:R,html:V.value(R),selected:!0,removeAtIndex:Ce,toggleOption:Fe,tabindex:P.value}))),se=E(()=>{if(O.value===0)return[];const{from:R,to:ye}=B.value;return e.options.slice(R,ye).map((Se,Ne)=>{const Ze=te.value(Se)===!0,ct=Le(Se)===!0,Xe=R+Ne,ut={clickable:!0,active:ct,activeClass:de.value,manualFocus:!0,focused:!1,disable:Ze,tabindex:-1,dense:e.optionsDense,dark:ke.value,role:"option","aria-selected":ct===!0?"true":"false",id:`${H.targetUid.value}_${Xe}`,onClick:()=>{Fe(Se)}};return Ze!==!0&&(s.value===Xe&&(ut.focused=!0),o.platform.is.desktop===!0&&(ut.onMousemove=()=>{i.value===!0&&it(Xe)})),{index:Xe,opt:Se,html:V.value(Se),label:X.value(Se),selected:ut.active,focused:ut.focused,toggleOption:Fe,setOptionIndex:it,itemProps:ut}})}),me=E(()=>e.dropdownIcon!==void 0?e.dropdownIcon:o.iconSet.arrow.dropdown),fe=E(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),de=E(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),oe=E(()=>Ur(e.optionValue,"value")),X=E(()=>Ur(e.optionLabel,"label")),te=E(()=>Ur(e.optionDisable,"disable")),ue=E(()=>F.value.map(oe.value)),_e=E(()=>{const R={onInput:yl,onChange:z,onKeydown:mo,onKeyup:st,onKeypress:Lt,onFocus:Ee,onClick(ye){_===!0&&Et(ye)}};return R.onCompositionstart=R.onCompositionupdate=R.onCompositionend=z,R});Pe(F,R=>{h=R,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&H.innerLoading.value!==!0&&(r.value!==!0&&i.value!==!0||Qe.value!==!0)&&(I!==!0&&_o(),(r.value===!0||i.value===!0)&&go(""))},{immediate:!0}),Pe(()=>e.fillInput,_o),Pe(i,cr),Pe(O,vm);function Ae(R){return e.emitValue===!0?oe.value(R):R}function xe(R){if(R!==-1&&R<F.value.length)if(e.multiple===!0){const ye=e.modelValue.slice();n("remove",{index:R,value:ye.splice(R,1)[0]}),n("update:modelValue",ye)}else n("update:modelValue",null)}function Ce(R){xe(R),H.focus()}function je(R,ye){const Se=Ae(R);if(e.multiple!==!0){e.fillInput===!0&&Xo(X.value(R),!0,!0),n("update:modelValue",Se);return}if(F.value.length===0){n("add",{index:0,value:Se}),n("update:modelValue",e.multiple===!0?[Se]:Se);return}if(ye===!0&&Le(R)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const Ne=e.modelValue.slice();n("add",{index:Ne.length,value:Se}),Ne.push(Se),n("update:modelValue",Ne)}function Fe(R,ye){var ct;if(H.editable.value!==!0||R===void 0||te.value(R)===!0)return;const Se=oe.value(R);if(e.multiple!==!0){ye!==!0&&(Xo(e.fillInput===!0?X.value(R):"",!0,!0),Wn()),(ct=L.value)==null||ct.focus(),(F.value.length===0||Rn(oe.value(F.value[0]),Se)!==!0)&&n("update:modelValue",e.emitValue===!0?Se:R);return}if((_!==!0||u.value===!0)&&H.focus(),Ee(),F.value.length===0){const Xe=e.emitValue===!0?Se:R;n("add",{index:0,value:Xe}),n("update:modelValue",e.multiple===!0?[Xe]:Xe);return}const Ne=e.modelValue.slice(),Ze=ue.value.findIndex(Xe=>Rn(Xe,Se));if(Ze!==-1)n("remove",{index:Ze,value:Ne.splice(Ze,1)[0]});else{if(e.maxValues!==void 0&&Ne.length>=e.maxValues)return;const Xe=e.emitValue===!0?Se:R;n("add",{index:Ne.length,value:Xe}),Ne.push(Xe)}n("update:modelValue",Ne)}function it(R){if(o.platform.is.desktop!==!0)return;const ye=R!==-1&&R<O.value?R:-1;s.value!==ye&&(s.value=ye)}function mt(R=1,ye){if(i.value===!0){let Se=s.value;do Se=Lu(Se+R,-1,O.value-1);while(Se!==-1&&Se!==s.value&&te.value(e.options[Se])===!0);s.value!==Se&&(it(Se),ge(Se),ye!==!0&&e.useInput===!0&&e.fillInput===!0&&Oa(Se>=0?X.value(e.options[Se]):g,!0))}}function ce(R,ye){const Se=Ne=>Rn(oe.value(Ne),R);return e.options.find(Se)||ye.find(Se)||R}function Le(R){const ye=oe.value(R);return ue.value.find(Se=>Rn(Se,ye))!==void 0}function Ee(R){e.useInput===!0&&L.value!==null&&(R===void 0||L.value===R.target&&R.target.value===Q.value)&&L.value.select()}function ze(R){An(R,27)===!0&&i.value===!0&&(Et(R),Wn(),_o()),n("keyup",R)}function st(R){const{value:ye}=R.target;if(R.keyCode!==void 0){ze(R);return}if(R.target.value="",d!==null&&(clearTimeout(d),d=null),f!==null&&(clearTimeout(f),f=null),_o(),typeof ye=="string"&&ye.length!==0){const Se=ye.toLocaleLowerCase(),Ne=ct=>{const Xe=e.options.find(ut=>String(ct.value(ut)).toLocaleLowerCase()===Se);return Xe===void 0?!1:(F.value.indexOf(Xe)===-1?Fe(Xe):Wn(),!0)},Ze=ct=>{Ne(oe)!==!0&&ct!==!0&&Ne(X)!==!0&&go(ye,!0,()=>Ze(!0))};Ze()}else H.clearValue(R)}function Lt(R){n("keypress",R)}function mo(R){if(n("keydown",R),nr(R)===!0)return;const ye=l.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),Se=R.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(s.value!==-1||ye===!0);if(R.keyCode===27){At(R);return}if(R.keyCode===9&&Se===!1){vo();return}if(R.target===void 0||R.target.id!==H.targetUid.value||H.editable.value!==!0)return;if(R.keyCode===40&&H.innerLoading.value!==!0&&i.value===!1){He(R),bo();return}if(R.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&l.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?xe(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&n("update:modelValue",null);return}(R.keyCode===35||R.keyCode===36)&&(typeof l.value!="string"||l.value.length===0)&&(He(R),s.value=-1,mt(R.keyCode===36?1:-1,e.multiple)),(R.keyCode===33||R.keyCode===34)&&N.value!==void 0&&(He(R),s.value=Math.max(-1,Math.min(O.value,s.value+(R.keyCode===33?-1:1)*N.value.view)),mt(R.keyCode===33?1:-1,e.multiple)),(R.keyCode===38||R.keyCode===40)&&(He(R),mt(R.keyCode===38?-1:1,e.multiple));const Ne=O.value;if((w===void 0||v<Date.now())&&(w=""),Ne>0&&e.useInput!==!0&&R.key!==void 0&&R.key.length===1&&R.altKey===!1&&R.ctrlKey===!1&&R.metaKey===!1&&(R.keyCode!==32||w.length!==0)){i.value!==!0&&bo(R);const Ze=R.key.toLocaleLowerCase(),ct=w.length===1&&w[0]===Ze;v=Date.now()+1500,ct===!1&&(He(R),w+=Ze);const Xe=new RegExp("^"+w.split("").map(yo=>_te.indexOf(yo)!==-1?"\\"+yo:yo).join(".*"),"i");let ut=s.value;if(ct===!0||ut<0||Xe.test(X.value(e.options[ut]))!==!0)do ut=Lu(ut+1,-1,Ne-1);while(ut!==s.value&&(te.value(e.options[ut])===!0||Xe.test(X.value(e.options[ut]))!==!0));s.value!==ut&&rt(()=>{it(ut),ge(ut),ut>=0&&e.useInput===!0&&e.fillInput===!0&&Oa(X.value(e.options[ut]),!0)});return}if(!(R.keyCode!==13&&(R.keyCode!==32||e.useInput===!0||w!=="")&&(R.keyCode!==9||Se===!1))){if(R.keyCode!==9&&He(R),s.value!==-1&&s.value<Ne){Fe(e.options[s.value]);return}if(ye===!0){const Ze=(ct,Xe)=>{var yo;if(Xe){if(Eu(Xe)!==!0)return}else Xe=e.newValueMode;if(Xo("",e.multiple!==!0,!0),ct==null)return;(Xe==="toggle"?Fe:je)(ct,Xe==="add-unique"),e.multiple!==!0&&((yo=L.value)==null||yo.focus(),Wn())};if(e.onNewValue!==void 0?n("newValue",l.value,Ze):Ze(l.value),e.multiple!==!0)return}i.value===!0?vo():H.innerLoading.value!==!0&&bo()}}function ho(){return _===!0?M.value:q.value!==null&&q.value.contentEl!==null?q.value.contentEl:void 0}function im(){return ho()}function rm(){return e.hideSelected===!0?[]:t["selected-item"]!==void 0?ae.value.map(R=>t["selected-item"](R)).slice():t.selected!==void 0?[].concat(t.selected()):e.useChips===!0?ae.value.map((R,ye)=>j(jf,{key:"option-"+ye,removable:H.editable.value===!0&&te.value(R.opt)!==!0,dense:!0,textColor:e.color,tabindex:P.value,onRemove(){R.removeAtIndex(ye)}},()=>j("span",{class:"ellipsis",[R.html===!0?"innerHTML":"textContent"]:X.value(R.opt)}))):[j("span",{class:"ellipsis",[A.value===!0?"innerHTML":"textContent"]:U.value})]}function _l(){if(k.value===!0)return t["no-option"]!==void 0?t["no-option"]({inputValue:l.value}):void 0;const R=t.option!==void 0?t.option:Se=>j(Tn,{key:Se.index,...Se.itemProps},()=>j(Ln,()=>j(Ra,()=>j("span",{[Se.html===!0?"innerHTML":"textContent"]:Se.label}))));let ye=ee("div",se.value.map(R));return t["before-options"]!==void 0&&(ye=t["before-options"]().concat(ye)),Ut(t["after-options"],ye)}function sm(R,ye){const Se=ye===!0?{...K.value,...H.splitAttrs.attributes.value}:void 0,Ne={ref:ye===!0?L:void 0,key:"i_t",class:ie.value,style:e.inputStyle,value:l.value!==void 0?l.value:"",type:"search",...Se,id:ye===!0?H.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":R===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,..._e.value};return R!==!0&&_===!0&&(Array.isArray(Ne.class)===!0?Ne.class=[...Ne.class,"no-pointer-events"]:Ne.class+=" no-pointer-events"),j("input",Ne)}function yl(R){d!==null&&(clearTimeout(d),d=null),f!==null&&(clearTimeout(f),f=null),!(R&&R.target&&R.target.qComposing===!0)&&(Oa(R.target.value||""),I=!0,g=l.value,H.focused.value!==!0&&(_!==!0||u.value===!0)&&H.focus(),e.onFilter!==void 0&&(d=setTimeout(()=>{d=null,go(l.value)},e.inputDebounce)))}function Oa(R,ye){l.value!==R&&(l.value=R,ye===!0||e.inputDebounce===0||e.inputDebounce==="0"?n("inputValue",R):f=setTimeout(()=>{f=null,n("inputValue",R)},e.inputDebounce))}function Xo(R,ye,Se){I=Se!==!0,e.useInput===!0&&(Oa(R,!0),(ye===!0||Se!==!0)&&(g=R),ye!==!0&&go(R))}function go(R,ye,Se){if(e.onFilter===void 0||ye!==!0&&H.focused.value!==!0)return;H.innerLoading.value===!0?n("filterAbort"):(H.innerLoading.value=!0,c.value=!0),R!==""&&e.multiple!==!0&&F.value.length!==0&&I!==!0&&R===X.value(F.value[0])&&(R="");const Ne=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);C!==null&&clearTimeout(C),C=Ne,n("filter",R,(Ze,ct)=>{(ye===!0||H.focused.value===!0)&&C===Ne&&(clearTimeout(C),typeof Ze=="function"&&Ze(),c.value=!1,rt(()=>{H.innerLoading.value=!1,H.editable.value===!0&&(ye===!0?i.value===!0&&Wn():i.value===!0?cr(!0):i.value=!0),typeof ct=="function"&&rt(()=>{ct(a)}),typeof Se=="function"&&rt(()=>{Se(a)})}))},()=>{H.focused.value===!0&&C===Ne&&(clearTimeout(C),H.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function lm(){return j($a,{ref:q,class:m.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&k.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:ke.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:fe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...re.value,onScrollPassive:J,onBeforeShow:Sl,onBeforeHide:cm,onShow:um},_l)}function cm(R){kl(R),vo()}function um(){Ie()}function dm(R){var ye;Et(R),(ye=L.value)==null||ye.focus(),u.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function pm(R){Et(R),rt(()=>{u.value=!1})}function fm(){const R=[j(fte,{class:`col-auto ${H.fieldClass.value}`,...le.value,for:H.targetUid.value,dark:ke.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:l.value.length!==0,...H.splitAttrs.listeners.value,onFocus:dm,onBlur:pm},{...t,rawControl:()=>H.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&R.push(j("div",{ref:M,class:m.value+" scroll",style:e.popupContentStyle,...re.value,onClick:At,onScrollPassive:J},_l())),j(Tf,{ref:T,modelValue:r.value,position:e.useInput===!0?"top":void 0,transitionShow:y,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:Sl,onBeforeHide:mm,onHide:hm,onShow:gm},()=>j("div",{class:"q-select__dialog"+(ke.value===!0?" q-select__dialog--dark q-dark":"")+(u.value===!0?" q-select__dialog--focused":"")},R))}function mm(R){kl(R),T.value!==null&&T.value.__updateRefocusTarget(H.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),H.focused.value=!1}function hm(R){Wn(),H.focused.value===!1&&n("blur",R),_o()}function gm(){const R=document.activeElement;(R===null||R.id!==H.targetUid.value)&&L.value!==null&&L.value!==R&&L.value.focus(),Ie()}function vo(){r.value!==!0&&(s.value=-1,i.value===!0&&(i.value=!1),H.focused.value===!1&&(C!==null&&(clearTimeout(C),C=null),H.innerLoading.value===!0&&(n("filterAbort"),H.innerLoading.value=!1,c.value=!1)))}function bo(R){H.editable.value===!0&&(_===!0?(H.onControlFocusin(R),r.value=!0,rt(()=>{H.focus()})):H.focus(),e.onFilter!==void 0?go(l.value):(k.value!==!0||t["no-option"]!==void 0)&&(i.value=!0))}function Wn(){r.value=!1,vo()}function _o(){e.useInput===!0&&Xo(e.multiple!==!0&&e.fillInput===!0&&F.value.length!==0&&X.value(F.value[0])||"",!0,!0)}function cr(R){let ye=-1;if(R===!0){if(F.value.length!==0){const Se=oe.value(F.value[0]);ye=e.options.findIndex(Ne=>Rn(oe.value(Ne),Se))}ne(ye)}it(ye)}function vm(R,ye){i.value===!0&&H.innerLoading.value===!1&&(ne(-1,!0),rt(()=>{i.value===!0&&H.innerLoading.value===!1&&(R>ye?ne():cr(!0))}))}function wl(){r.value===!1&&q.value!==null&&q.value.updatePosition()}function Sl(R){R!==void 0&&Et(R),n("popupShow",R),H.hasPopupOpen=!0,H.onControlFocusin(R)}function kl(R){R!==void 0&&Et(R),n("popupHide",R),H.hasPopupOpen=!1,H.onControlFocusout(R)}function xl(){_=o.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?t["no-option"]!==void 0||e.onFilter!==void 0||k.value===!1:!0),y=o.platform.is.ios===!0&&_===!0&&e.useInput===!0?"fade":e.transitionShow}return Gi(xl),Ki(wl),xl(),at(()=>{d!==null&&clearTimeout(d),f!==null&&clearTimeout(f)}),Object.assign(a,{showPopup:bo,hidePopup:Wn,removeAtIndex:xe,add:je,toggleOption:Fe,getOptionIndex:()=>s.value,setOptionIndex:it,moveOptionSelection:mt,filter:go,updateMenuPosition:wl,updateInputValue:Xo,isOptionSelected:Le,getEmittingOptionValue:Ae,isOptionDisabled:(...R)=>te.value.apply(null,R)===!0,getOptionValue:(...R)=>oe.value.apply(null,R),getOptionLabel:(...R)=>X.value.apply(null,R)}),Object.assign(H,{innerValue:F,fieldClass:E(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:x,targetRef:L,hasValue:Qe,showPopup:bo,floatingLabel:E(()=>e.hideSelected!==!0&&Qe.value===!0||typeof l.value=="number"||l.value.length!==0||La(e.displayValue)),getControlChild:()=>{if(H.editable.value!==!1&&(r.value===!0||k.value!==!0||t["no-option"]!==void 0))return _===!0?fm():lm();H.hasPopupOpen===!0&&(H.hasPopupOpen=!1)},controlEvents:{onFocusin(R){H.onControlFocusin(R)},onFocusout(R){H.onControlFocusout(R,()=>{_o(),vo()})},onClick(R){var ye;if(At(R),_!==!0&&i.value===!0){vo(),(ye=L.value)==null||ye.focus();return}bo(R)}},getControl:R=>{const ye=rm(),Se=R===!0||r.value!==!0||_!==!0;if(e.useInput===!0)ye.push(sm(R,Se));else if(H.editable.value===!0){const Ze=Se===!0?K.value:void 0;ye.push(j("input",{ref:Se===!0?L:void 0,key:"d_t",class:"q-select__focus-target",id:Se===!0?H.targetUid.value:void 0,value:U.value,readonly:!0,"data-autofocus":R===!0||e.autofocus===!0||void 0,...Ze,onKeydown:mo,onKeyup:ze,onKeypress:Lt})),Se===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&ye.push(j("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:st}))}if($.value!==void 0&&e.disable!==!0&&ue.value.length!==0){const Ze=ue.value.map(ct=>j("option",{value:ct,selected:!0}));ye.push(j("select",{class:"hidden",name:$.value,multiple:e.multiple},Ze))}const Ne=e.useInput===!0||Se!==!0?void 0:H.splitAttrs.attributes.value;return j("div",{class:"q-field__native row items-center",...Ne,...H.splitAttrs.listeners.value},ye)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[j(Ve,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:me.value})]:null}),rl(H)}}),wte="component",Ste={docsUrl:"https://v2.quasar.dev/vue-components/dialog"},kte={"model-value":{type:"Boolean",desc:"Model of the component (shown/hidden); use v-model",required:!0,category:"model"},persistent:{type:"Boolean",desc:"Cannot dismiss by clicking outside or hitting ESC",category:"behavior"},"no-esc-dismiss":{type:"Boolean",desc:"Cannot dismiss by hitting ESC key",category:"behavior"},"no-backdrop-dismiss":{type:"Boolean",desc:"Cannot dismiss by clicking outside",category:"behavior"},"no-route-dismiss":{type:"Boolean",desc:"Route change won't dismiss the dialog",category:"behavior"},"auto-close":{type:"Boolean",desc:"Any click inside the dialog will close it",category:"behavior"},seamless:{type:"Boolean",desc:"No backdrop; user can interact with the rest of the page",category:"content"},maximized:{type:"Boolean",desc:"Put dialog into maximized (fullscreen) mode",category:"content"},"full-width":{type:"Boolean",desc:"Dialog renders with same width as the window",category:"content"},"full-height":{type:"Boolean",desc:"Dialog renders with same height as the window",category:"content"},position:{type:"String",default:"'standard'",desc:"Stick dialog to a side (top, right, bottom, left)",category:"content"},square:{type:"Boolean",desc:"Forces squared borders on content",category:"style"},"backdrop-filter":{type:"String",desc:"CSS backdrop-filter value (e.g. 'blur(4px)')",category:"style"},"transition-show":{type:"String",desc:"Transition when showing the dialog",category:"transition"},"transition-hide":{type:"String",desc:"Transition when hiding the dialog",category:"transition"},"no-refocus":{type:"Boolean",desc:"Don't refocus previous element when dialog hides",category:"behavior"},"no-focus":{type:"Boolean",desc:"Don't focus dialog when it shows",category:"behavior"},"no-shake":{type:"Boolean",desc:"Disable shake animation on dismiss attempt",category:"behavior"},"allow-focus-outside":{type:"Boolean",desc:"Allow elements outside dialog to receive focus",category:"behavior"}},xte={default:{desc:"Default slot for dialog content"}},Cte={"update:model-value":{desc:"Emitted when the dialog visibility changes"},show:{desc:"Emitted after the dialog has been shown"},"before-show":{desc:"Emitted before the dialog is shown"},hide:{desc:"Emitted after the dialog has been hidden"},"before-hide":{desc:"Emitted before the dialog is hidden"},shake:{desc:"Emitted when the dialog shakes to catch attention"},"escape-key":{desc:"Emitted when ESC key is pressed (if not persistent)"}},Qte={type:wte,meta:Ste,props:kte,slots:xte,events:Cte},Ate={name:"ShowcaseDialog",label:"Quasar Dialog",icon:"picture_in_picture",components:{QBtn:vt,QDialog:Tf,QCard:Lf,QCardSection:Ef,QCardActions:Bf,QIcon:Ve,QSpace:dte,QSeparator:ul,QList:fo,QItem:Tn,QItemSection:Ln,QItemLabel:Ra,QBadge:Df,QInnerLoading:Pf,QSpinner:ja,QInput:sl,QSelect:dl},apiJson:Qte,importName:"QDialog",importFrom:"quasar",data(){return{isLoading:!1,simple:!1,card:!1,persistent:!1,positioned:!1,positionValue:"top",maximized:!1,fullWidth:!1,seamless:!1,scrollable:!1,stickyScroll:!1,longForm:!1,positions:["top","right","bottom","left"],form:{name:"",sector:"",objective:"",secondary:"",priority:"Standard",crew:"",duration:"",notes:""},crewList:[{name:"Cdr. Vasquez",role:"First Officer",icon:"military_tech",status:"Active"},{name:"Lt. Okafor",role:"Helm",icon:"explore",status:"Active"},{name:"Lt. Cdr. Chen",role:"Chief Engineer",icon:"engineering",status:"Active"},{name:"Dr. Petrov",role:"Chief Medical",icon:"medical_services",status:"Active"},{name:"Ens. Nakamura",role:"Science Officer",icon:"science",status:"Active"},{name:"Lt. Mbeki",role:"Tactical",icon:"shield",status:"Active"},{name:"Lt. Johansson",role:"Communications",icon:"cell_tower",status:"On Leave"},{name:"Ens. Park",role:"Navigation",icon:"near_me",status:"Active"},{name:"Cdr. Al-Rashid",role:"Security Chief",icon:"security",status:"Active"},{name:"Lt. Torres",role:"Operations",icon:"settings",status:"On Leave"}]}},methods:{openPositioned(e){this.positionValue=e,this.positioned=!0}}},Ite={class:"jShowcase_row jShowcase_column"},qte={class:"jShowcase_group"},Tte={class:"jShowcase_items"},Lte={class:"jShowcase_group"},Ete={class:"jShowcase_items"},Bte={class:"text-h6"},Dte={class:"jShowcase_group"},Pte={class:"jShowcase_items"},jte={class:"jShowcase_group"},Mte={class:"jShowcase_items"},$te={class:"text-caption",style:{color:"var(--q-text-muted)"}};function Rte(e,t,n,a,o,i){const r=G("QBtn"),s=G("QCardSection"),l=G("QCardActions"),u=G("QCard"),c=G("QDialog"),d=G("QIcon"),f=G("QSpace"),h=G("QSeparator"),_=G("QItemSection"),I=G("QItemLabel"),C=G("QBadge"),g=G("QItem"),y=G("QList"),w=G("QSpinner"),v=G("QInnerLoading"),x=G("QInput"),L=G("QSelect");return D(),Z("div",Ite,[b("div",qte,[t[28]||(t[28]=b("span",{class:"jShowcase_title"},"Basic",-1)),b("div",Tte,[p(r,{color:"primary",label:"Simple",onClick:t[0]||(t[0]=q=>o.simple=!0)}),p(r,{color:"accent",label:"With Card",onClick:t[1]||(t[1]=q=>o.card=!0)}),p(r,{color:"secondary",label:"Persistent",onClick:t[2]||(t[2]=q=>o.persistent=!0)})])]),p(c,{modelValue:o.simple,"onUpdate:modelValue":t[3]||(t[3]=q=>o.simple=q)},{default:S(()=>[p(u,null,{default:S(()=>[p(s,null,{default:S(()=>[...t[29]||(t[29]=[b("div",{class:"text-h6"},"Incoming Transmission",-1)])]),_:1}),p(s,null,{default:S(()=>[...t[30]||(t[30]=[W(" Signal detected from sector 7G. Awaiting decryption. ",-1)])]),_:1}),p(l,{align:"right"},{default:S(()=>[he(p(r,{color:"primary",label:"Dismiss"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(c,{modelValue:o.card,"onUpdate:modelValue":t[4]||(t[4]=q=>o.card=q)},{default:S(()=>[p(u,null,{default:S(()=>[p(s,{class:"row items-center"},{default:S(()=>[p(d,{name:"warning",size:"28px",color:"warning",class:"q-mr-sm"}),t[31]||(t[31]=b("span",{class:"text-h6"},"Confirm Action",-1))]),_:1}),p(s,null,{default:S(()=>[...t[32]||(t[32]=[W(" Divert auxiliary power to forward shields? This will reduce life support to minimum levels on decks 7 through 12. ",-1)])]),_:1}),p(l,{align:"right"},{default:S(()=>[he(p(r,{class:"ghost",label:"Cancel"},null,512),[[we]]),he(p(r,{color:"negative",label:"Confirm"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(c,{modelValue:o.persistent,"onUpdate:modelValue":t[5]||(t[5]=q=>o.persistent=q),persistent:""},{default:S(()=>[p(u,null,{default:S(()=>[p(s,null,{default:S(()=>[...t[33]||(t[33]=[b("div",{class:"text-h6"},"Authorization Required",-1)])]),_:1}),p(s,null,{default:S(()=>[...t[34]||(t[34]=[W(" This dialog cannot be dismissed by clicking outside or pressing ESC. Enter command override code. ",-1)])]),_:1}),p(l,{align:"right"},{default:S(()=>[he(p(r,{color:"accent",label:"Override"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),b("div",Lte,[t[35]||(t[35]=b("span",{class:"jShowcase_title"},"Positions",-1)),b("div",Ete,[(D(!0),Z(De,null,Ye(o.positions,q=>(D(),pe(r,{key:q,color:"info",label:q,onClick:T=>i.openPositioned(q)},null,8,["label","onClick"]))),128))])]),p(c,{modelValue:o.positioned,"onUpdate:modelValue":t[6]||(t[6]=q=>o.positioned=q),position:o.positionValue},{default:S(()=>[p(u,null,{default:S(()=>[p(s,null,{default:S(()=>[b("div",Bte,"Position: "+ve(o.positionValue),1)]),_:1}),p(s,null,{default:S(()=>[W(" Dialog anchored to the "+ve(o.positionValue)+" of the viewport. ",1)]),_:1}),p(l,{align:"right"},{default:S(()=>[he(p(r,{color:"info",label:"Close"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue","position"]),b("div",Dte,[t[36]||(t[36]=b("span",{class:"jShowcase_title"},"Sizes",-1)),b("div",Pte,[p(r,{color:"warning",label:"Maximized",onClick:t[7]||(t[7]=q=>o.maximized=!0)}),p(r,{color:"warning",label:"Full Width",onClick:t[8]||(t[8]=q=>o.fullWidth=!0)}),p(r,{color:"negative",label:"Seamless",onClick:t[9]||(t[9]=q=>o.seamless=!0)})])]),p(c,{modelValue:o.maximized,"onUpdate:modelValue":t[10]||(t[10]=q=>o.maximized=q),maximized:""},{default:S(()=>[p(u,{class:"showcaseDialog_cardMax"},{default:S(()=>[p(s,{class:"row items-center"},{default:S(()=>[t[37]||(t[37]=b("span",{class:"text-h6"},"Maximized Dialog",-1)),p(f),he(p(r,{class:"ghost",icon:"close"},null,512),[[we]])]),_:1}),p(s,null,{default:S(()=>[...t[38]||(t[38]=[W(" This dialog fills the entire viewport. ",-1)])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(c,{modelValue:o.fullWidth,"onUpdate:modelValue":t[11]||(t[11]=q=>o.fullWidth=q),"full-width":""},{default:S(()=>[p(u,null,{default:S(()=>[p(s,null,{default:S(()=>[...t[39]||(t[39]=[b("div",{class:"text-h6"},"Full Width",-1)])]),_:1}),p(s,null,{default:S(()=>[...t[40]||(t[40]=[W(" Spans the full width of the viewport. ",-1)])]),_:1}),p(l,{align:"right"},{default:S(()=>[he(p(r,{color:"warning",label:"Close"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(c,{modelValue:o.seamless,"onUpdate:modelValue":t[12]||(t[12]=q=>o.seamless=q),seamless:"",position:"bottom"},{default:S(()=>[p(u,null,{default:S(()=>[p(s,{class:"row items-center"},{default:S(()=>[p(d,{name:"info",size:"24px",color:"info",class:"q-mr-sm"}),t[41]||(t[41]=b("span",null,"Seamless — no backdrop, page remains interactive.",-1)),p(f),he(p(r,{class:"ghost",icon:"close","icon-size":"14px"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),b("div",jte,[t[42]||(t[42]=b("span",{class:"jShowcase_title"},"Scroll Handling",-1)),b("div",Mte,[p(r,{color:"primary",label:"Scrollable Content",onClick:t[13]||(t[13]=q=>o.scrollable=!0)}),p(r,{color:"accent",label:"Sticky Header/Footer",onClick:t[14]||(t[14]=q=>o.stickyScroll=!0)}),p(r,{color:"secondary",label:"Long Form",onClick:t[15]||(t[15]=q=>o.longForm=!0)})])]),p(c,{modelValue:o.scrollable,"onUpdate:modelValue":t[16]||(t[16]=q=>o.scrollable=q),style:{display:"block"}},{default:S(()=>[p(u,null,{default:S(()=>[p(s,null,{default:S(()=>[...t[43]||(t[43]=[b("div",{class:"text-h6"},"Ship Systems Log",-1)])]),_:1}),p(h),p(s,{class:"scroll"},{default:S(()=>[(D(),Z(De,null,Ye(122,q=>b("p",{key:q},"Log entry "+ve(q)+": Routine diagnostic of subsystem "+ve(String.fromCharCode(64+q))+". All parameters within operational tolerance. Variance from baseline: "+ve((Math.random()*2).toFixed(3))+"%. Timestamp: stardate "+ve(41e3+q*7)+"."+ve(q)+".",1)),64))]),_:1}),p(h),p(l,{align:"right"},{default:S(()=>[he(p(r,{color:"primary",label:"Close"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(c,{modelValue:o.stickyScroll,"onUpdate:modelValue":t[18]||(t[18]=q=>o.stickyScroll=q)},{default:S(()=>[p(u,{style:{"min-width":"500px","max-width":"80vw"}},{default:S(()=>[p(s,{class:"row items-center q-pb-none"},{default:S(()=>[t[44]||(t[44]=b("div",{class:"text-h6"},"Crew Manifest",-1)),p(f),he(p(r,{class:"ghost",icon:"close"},null,512),[[we]])]),_:1}),p(h,{class:"q-mt-sm"}),p(s,{style:{"max-height":"50vh"},class:"scroll"},{default:S(()=>[p(y,null,{default:S(()=>[(D(!0),Z(De,null,Ye(o.crewList,(q,T)=>(D(),pe(g,{key:T},{default:S(()=>[p(_,{avatar:""},{default:S(()=>[p(d,{name:q.icon,color:"accent"},null,8,["name"])]),_:2},1024),p(_,null,{default:S(()=>[p(I,null,{default:S(()=>[W(ve(q.name),1)]),_:2},1024),p(I,{caption:""},{default:S(()=>[W(ve(q.role),1)]),_:2},1024)]),_:2},1024),p(_,{side:""},{default:S(()=>[p(C,{outline:"",color:q.status==="Active"?"positive":"warning",label:q.status},null,8,["color","label"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),p(v,{showing:o.isLoading},{default:S(()=>[p(w,{size:"50px",color:"primary"})]),_:1},8,["showing"]),p(h),p(s,{class:"row justify-between items-center q-py-sm"},{default:S(()=>[b("span",$te,ve(o.crewList.length)+" officers",1),p(r,{class:"ghost",icon:"refresh",label:"Toggle",onClick:t[17]||(t[17]=q=>o.isLoading=!o.isLoading)}),he(p(r,{color:"accent",icon:"star",label:"Acknowledge"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),p(c,{modelValue:o.longForm,"onUpdate:modelValue":t[27]||(t[27]=q=>o.longForm=q)},{default:S(()=>[p(u,{style:{"min-width":"33vw","max-width":"80vw"}},{default:S(()=>[p(s,{class:"row items-center q-pb-none"},{default:S(()=>[t[45]||(t[45]=b("div",{class:"text-h6"},"Mission Parameters",-1)),p(f),he(p(r,{class:"ghost",icon:"close"},null,512),[[we]])]),_:1}),p(h,{class:"q-mt-sm"}),p(s,{class:"scroll",style:{"max-height":"300px"}},{default:S(()=>[p(x,{modelValue:o.form.name,"onUpdate:modelValue":t[19]||(t[19]=q=>o.form.name=q),label:"Mission name",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(x,{modelValue:o.form.sector,"onUpdate:modelValue":t[20]||(t[20]=q=>o.form.sector=q),label:"Target sector",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(x,{modelValue:o.form.objective,"onUpdate:modelValue":t[21]||(t[21]=q=>o.form.objective=q),label:"Primary objective",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(x,{modelValue:o.form.secondary,"onUpdate:modelValue":t[22]||(t[22]=q=>o.form.secondary=q),label:"Secondary objective",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(L,{modelValue:o.form.priority,"onUpdate:modelValue":t[23]||(t[23]=q=>o.form.priority=q),options:["Critical","High","Standard","Low"],label:"Priority",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(x,{modelValue:o.form.crew,"onUpdate:modelValue":t[24]||(t[24]=q=>o.form.crew=q),label:"Crew count",type:"number",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(x,{modelValue:o.form.duration,"onUpdate:modelValue":t[25]||(t[25]=q=>o.form.duration=q),label:"Estimated duration (days)",type:"number",outlined:"",dense:"",class:"q-mb-sm"},null,8,["modelValue"]),p(x,{modelValue:o.form.notes,"onUpdate:modelValue":t[26]||(t[26]=q=>o.form.notes=q),label:"Additional notes",type:"textarea",outlined:"",dense:"",autogrow:""},null,8,["modelValue"])]),_:1}),p(h),p(l,{align:"right"},{default:S(()=>[he(p(r,{class:"ghost",label:"Cancel"},null,512),[[we]]),he(p(r,{color:"secondary",label:"Submit"},null,512),[[we]])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Ote=Be(Ate,[["render",Rte]]),Fte=Object.freeze(Object.defineProperty({__proto__:null,default:Ote},Symbol.toStringTag,{value:"Module"})),zte={name:"JCurrentYear",computed:{year(){return new Date().getFullYear()}}};function Nte(e,t,n,a,o,i){return D(),Z("span",null,ve(i.year),1)}const pl=Be(zte,[["render",Nte]]),Vte={name:"ShowcaseJCurrentYear",components:{JCurrentYear:pl},label:"Current Year",icon:"handyman",apiJson:null,importName:"JCurrentYear",code:null},Hte={class:"jShowcase_row jShowcase_column"},Ute={class:"jShowcase_group"},Wte={class:"jShowcase_items"},Jte={class:"demoText"},Gte={class:"jShowcase_group"},Kte={class:"jShowcase_items"},Yte={class:"demoText"};function Zte(e,t,n,a,o,i){const r=G("JCurrentYear");return D(),Z("div",Hte,[t[5]||(t[5]=b("div",{class:"jShowcase_info"},[b("p",null,[W("Renders the current year as a "),b("code",null,"<span>"),W(". Drop it into copyright lines so you never have to hardcode the year.")])],-1)),b("div",Ute,[t[2]||(t[2]=b("span",{class:"jShowcase_title"},"Inline",-1)),b("div",Wte,[b("span",Jte,[t[0]||(t[0]=W("© ",-1)),p(r),t[1]||(t[1]=W(" Components",-1))])])]),b("div",Gte,[t[4]||(t[4]=b("span",{class:"jShowcase_title"},"Standalone",-1)),b("div",Kte,[b("span",Yte,[t[3]||(t[3]=W("Current year: ",-1)),p(r)])])])])}const Xte=Be(Vte,[["render",Zte],["__scopeId","data-v-7b8f53ad"]]),ene=Object.freeze(Object.defineProperty({__proto__:null,default:Xte},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $f;const sr=e=>$f=e,Rf=Symbol();function bs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var wa;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(wa||(wa={}));function tne(){const e=Xu(!0),t=e.run(()=>be({}));let n=[],a=[];const o=Ba({install(i){sr(o),o._a=i,i.provide(Rf,o),i.config.globalProperties.$pinia=o,a.forEach(r=>n.push(r)),a=[]},use(i){return this._a?n.push(i):a.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Of=()=>{};function Bu(e,t,n,a=Of){e.add(t);const o=()=>{e.delete(t)&&a()};return!n&&ed()&&Lm(o),o}function qo(e,...t){e.forEach(n=>{n(...t)})}const nne=e=>e(),Du=Symbol(),Wr=Symbol();function _s(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],o=e[n];bs(o)&&bs(a)&&e.hasOwnProperty(n)&&!lt(a)&&!wn(a)?e[n]=_s(o,a):e[n]=a}return e}const one=Symbol();function ane(e){return!bs(e)||!Object.prototype.hasOwnProperty.call(e,one)}const{assign:Dn}=Object;function ine(e){return!!(lt(e)&&e.effect)}function rne(e,t,n,a){const{state:o,actions:i,getters:r}=t,s=n.state.value[e];let l;function u(){s||(n.state.value[e]=o?o():{});const c=th(n.state.value[e]);return Dn(c,i,Object.keys(r||{}).reduce((d,f)=>(d[f]=Ba(E(()=>{sr(n);const h=n._s.get(e);return r[f].call(h,h)})),d),{}))}return l=Ff(e,u,t,n,a,!0),l}function Ff(e,t,n={},a,o,i){let r;const s=Dn({actions:{}},n),l={deep:!0};let u,c,d=new Set,f=new Set,h;const _=a.state.value[e];!i&&!_&&(a.state.value[e]={});let I;function C(T){let M;u=c=!1,typeof T=="function"?(T(a.state.value[e]),M={type:wa.patchFunction,storeId:e,events:h}):(_s(a.state.value[e],T),M={type:wa.patchObject,payload:T,storeId:e,events:h});const $=I=Symbol();rt().then(()=>{I===$&&(u=!0)}),c=!0,qo(d,M,a.state.value[e])}const g=i?function(){const{state:M}=n,$=M?M():{};this.$patch(z=>{Dn(z,$)})}:Of;function y(){r.stop(),d.clear(),f.clear(),a._s.delete(e)}const w=(T,M="")=>{if(Du in T)return T[Wr]=M,T;const $=function(){sr(a);const z=Array.from(arguments),O=new Set,Y=new Set;function B(ee){O.add(ee)}function N(ee){Y.add(ee)}qo(f,{args:z,name:$[Wr],store:x,after:B,onError:N});let ne;try{ne=T.apply(this&&this.$id===e?this:x,z)}catch(ee){throw qo(Y,ee),ee}return ne instanceof Promise?ne.then(ee=>(qo(O,ee),ee)).catch(ee=>(qo(Y,ee),Promise.reject(ee))):(qo(O,ne),ne)};return $[Du]=!0,$[Wr]=M,$},v={_p:a,$id:e,$onAction:Bu.bind(null,f),$patch:C,$reset:g,$subscribe(T,M={}){const $=Bu(d,T,M.detached,()=>z()),z=r.run(()=>Pe(()=>a.state.value[e],O=>{(M.flush==="sync"?c:u)&&T({storeId:e,type:wa.direct,events:h},O)},Dn({},l,M)));return $},$dispose:y},x=uo(v);a._s.set(e,x);const q=(a._a&&a._a.runWithContext||nne)(()=>a._e.run(()=>(r=Xu()).run(()=>t({action:w}))));for(const T in q){const M=q[T];if(lt(M)&&!ine(M)||wn(M))i||(_&&ane(M)&&(lt(M)?M.value=_[T]:_s(M,_[T])),a.state.value[e][T]=M);else if(typeof M=="function"){const $=w(M,T);q[T]=$,s.actions[T]=M}}return Dn(x,q),Dn($e(x),q),Object.defineProperty(x,"$state",{get:()=>a.state.value[e],set:T=>{C(M=>{Dn(M,T)})}}),a._p.forEach(T=>{Dn(x,r.run(()=>T({store:x,app:a._a,pinia:a,options:s})))}),_&&i&&n.hydrate&&n.hydrate(x.$state,_),u=!0,c=!0,x}/*! #__NO_SIDE_EFFECTS__ */function sne(e,t,n){let a;const o=typeof t=="function";a=o?n:t;function i(r,s){const l=dh();return r=r||(l?Fn(Rf,null):null),r&&sr(r),r=$f,r._s.has(e)||(o?Ff(e,t,a,r):rne(e,a,r)),r._s.get(e)}return i.$id=e,i}function lne(e){return fv(e)===!0?"__q_date|"+e.getTime():mv(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function cne(e){if(e.length<9)return e;const n=e.substring(0,8),a=e.substring(9);switch(n){case"__q_date":const o=Number(a);return new Date(Number.isNaN(o)===!0?a:o);case"__q_expr":return new RegExp(a);case"__q_numb":return Number(a);case"__q_bool":return a==="1";case"__q_strn":return String(a);case"__q_objt":return JSON.parse(a);default:return e}}function une(){const e=()=>null;return{has:()=>!1,hasItem:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:Bt,setItem:Bt,remove:Bt,removeItem:Bt,clear:Bt,isEmpty:()=>!0}}function dne(e){const t=window[e+"Storage"],n=r=>{const s=t.getItem(r);return s?cne(s):null},a=r=>t.getItem(r)!==null,o=(r,s)=>{t.setItem(r,lne(s))},i=r=>{t.removeItem(r)};return{has:a,hasItem:a,getLength:()=>t.length,getItem:n,getIndex:r=>r<t.length?n(t.key(r)):null,getKey:r=>r<t.length?t.key(r):null,getAll:()=>{let r;const s={},l=t.length;for(let u=0;u<l;u++)r=t.key(u),s[r]=n(r);return s},getAllKeys:()=>{const r=[],s=t.length;for(let l=0;l<s;l++)r.push(t.key(l));return r},set:o,setItem:o,remove:i,removeItem:i,clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const zf=Ue.has.webStorage===!1?une():dne("local"),pa={install({$q:e}){e.localStorage=zf}};Object.assign(pa,zf);const fl=sne("theme",{state:()=>({currentTheme:null,themes:null,isDark:!1,ready:!1}),getters:{themeLocked:e=>!e.themes||Object.keys(e.themes).length<=1},actions:{toggleDark(){this.isDark=!this.isDark,pa.set("isDark",this.isDark),pt.set(this.isDark),(this.themes!==null||this.currentTheme!==null)&&this.applyTheme(this.currentTheme,this.isDark)},async _loadStyleTag(e,t){var r;const n=`${e}-${t}`,a=document.body.querySelector(`style[data-theme="${n}"]`);if(a)return a;const o=(r=this.themes[e])==null?void 0:r[t];if(!o)return null;const i=document.createElement("style");return i.setAttribute("data-theme",n),i.textContent=await o(),i},async applyTheme(e,t){if(!this.themes[e])return;const n=this._loadedTheme&&this._loadedTheme!==e;if(n&&(this.ready=!1),n&&this._styles){for(const a of Object.values(this._styles))a.remove();this._styles=null}if(this._styles){const a=t?"dark":"light";this._styles[a]&&document.body.appendChild(this._styles[a])}else{const[a,o,i]=await Promise.all([this._loadStyleTag(e,"common"),this._loadStyleTag(e,"dark"),this._loadStyleTag(e,"light")]);this._styles={},a&&(this._styles.common=a),o&&(this._styles.dark=o),i&&(this._styles.light=i);const r=t?"light":"dark",s=t?"dark":"light";this._styles.common&&document.body.appendChild(this._styles.common),this._styles[r]&&document.body.appendChild(this._styles[r]),this._styles[s]&&document.body.appendChild(this._styles[s])}this._loadedTheme=e,pa.set("theme",e),await document.fonts.ready,this.ready=!0},async initialize({theme:e,themes:t}){this.themes=t;const n=pa.getItem("theme");this.currentTheme=n&&t[n]?n:e;const a=pa.getItem("isDark");a!==null?(this.isDark=a,pt.set(this.isDark)):pt&&(this.isDark=pt.isActive),this.themes[this.currentTheme]&&await this.applyTheme(this.currentTheme,this.isDark)}}}),pne={name:"JDarkSwitcher",components:{QBtn:vt},computed:{themeStore(){try{return fl()}catch{return null}},isDark(){var e;return((e=this.themeStore)==null?void 0:e.isDark)??!1}},methods:{toggle(){this.themeStore&&this.themeStore.toggleDark()}}};function fne(e,t,n,a,o,i){const r=G("QBtn");return D(),pe(r,{class:"jDarkSwitcher",icon:i.isDark?"dark_mode":"light_mode",round:"",flat:"",size:"sm",color:i.isDark?"accent":"warning",onClick:i.toggle},null,8,["icon","color","onClick"])}const ml=Be(pne,[["render",fne],["__scopeId","data-v-492add97"]]),mne={name:"ShowcaseJDarkSwitcher",components:{JDarkSwitcher:ml},label:"Dark Switcher",icon:"dark_mode",apiJson:null,importName:"JDarkSwitcher",inject:["showcaseCopy"],code:null,methods:{copy(e){this.showcaseCopy(e)}}},hne={class:"jShowcase_row jShowcase_column"},gne={class:"jShowcase_info"},vne={class:"jShowcase_group"},bne={class:"jShowcase_items"},_ne={class:"jShowcase_group"},yne={class:"jShowcase_items"},wne={class:"jShowcase_group"},Sne={class:"jShowcase_items"},kne={class:"jShowcase_group"},xne={class:"jShowcase_items"},Cne={class:"jShowcase_group"},Qne={class:"jShowcase_items"},Ane={class:"jShowcase_group"},Ine={class:"jShowcase_items"};function qne(e,t,n,a,o,i){const r=G("JDarkSwitcher");return D(),Z("div",hne,[b("div",gne,[t[9]||(t[9]=b("p",null,"Round button that toggles dark/light mode via the theme store. Drop it into headers or toolbars.",-1)),b("p",null,[t[3]||(t[3]=W("Accepts all ",-1)),t[4]||(t[4]=b("a",{class:"jShowcase_infoLink",href:"#Buttons/Btn"},"QBtn",-1)),t[5]||(t[5]=W(" props (e.g. ",-1)),b("code",{onClick:t[0]||(t[0]=s=>i.copy("size"))},"size"),t[6]||(t[6]=W(", ",-1)),b("code",{onClick:t[1]||(t[1]=s=>i.copy("color"))},"color"),t[7]||(t[7]=W(", ",-1)),b("code",{onClick:t[2]||(t[2]=s=>i.copy("outline"))},"outline"),t[8]||(t[8]=W(") — they pass through to the underlying button.",-1))])]),b("div",vne,[t[10]||(t[10]=b("span",{class:"jShowcase_title"},"Default",-1)),b("div",bne,[p(r)])]),b("div",_ne,[t[11]||(t[11]=b("span",{class:"jShowcase_title"},"Sizes",-1)),b("div",yne,[p(r,{size:"xs"}),p(r,{size:"sm"}),p(r,{size:"md"}),p(r,{size:"lg"})])]),b("div",wne,[t[12]||(t[12]=b("span",{class:"jShowcase_title"},"Custom Colors",-1)),b("div",Sne,[p(r,{color:"primary"}),p(r,{color:"secondary",round:!1,label:"Toggle"}),p(r,{color:"info"}),p(r,{color:"negative"})])]),b("div",kne,[t[13]||(t[13]=b("span",{class:"jShowcase_title"},"Outline",-1)),b("div",xne,[p(r,{outline:""}),p(r,{outline:"",color:"primary"}),p(r,{outline:"",color:"accent"})])]),b("div",Cne,[t[14]||(t[14]=b("span",{class:"jShowcase_title"},"Raised (flat=false)",-1)),b("div",Qne,[p(r,{flat:!1}),p(r,{flat:!1,color:"primary"}),p(r,{flat:!1,color:"accent"})])]),b("div",Ane,[t[15]||(t[15]=b("span",{class:"jShowcase_title"},"Glossy",-1)),b("div",Ine,[p(r,{glossy:"",flat:!1,color:"primary"}),p(r,{glossy:"",flat:!1,color:"accent"})])])])}const Tne=Be(mne,[["render",qne]]),Lne=Object.freeze(Object.defineProperty({__proto__:null,default:Tne},Symbol.toStringTag,{value:"Module"})),Nf=Te({name:"QAvatar",props:{...Hn,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=Un(e),a=E(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),o=E(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const i=e.icon!==void 0?[j(Ve,{name:e.icon})]:void 0;return j("div",{class:a.value,style:n.value},[j("div",{class:"q-avatar__content row flex-center overflow-hidden",style:o.value},zs(t.default,i))])}}}),Ene={name:"ShowcaseActiveList",components:{QList:fo,QItem:Tn,QItemSection:Ln,QItemLabel:Ra,QIcon:Ve,QAvatar:Nf},label:"Selectable & Multi-line",icon:"list",importName:"QList",importFrom:"quasar",order:3,data(){return{selected:"recon",missions:[{id:"recon",name:"Recon Sweep",icon:"radar",desc:"Deep space reconnaissance of uncharted sector"},{id:"escort",name:"Convoy Escort",icon:"local_shipping",desc:"Protect supply convoy through hostile corridor"},{id:"rescue",name:"Search & Rescue",icon:"sos",desc:"Locate missing vessel near asteroid belt"},{id:"survey",name:"Planetary Survey",icon:"public",desc:"Catalog resources on newly discovered exoplanet"}],messages:[{from:"Admiral Zhao",subject:"Priority Alpha",body:"Fleet command has issued new coordinates. Rendezvous at waypoint Echo-7 by 0600. Full tactical readiness required.",time:"14:32",starred:!0},{from:"Engineering Bay",subject:"Maintenance Complete",body:"Port-side thruster realignment finished ahead of schedule. All subsystems passed diagnostics. Ready for departure.",time:"12:15",starred:!1},{from:"Science Div.",subject:"Anomaly Detected",body:"Unusual electromagnetic signature detected at bearing 270 mark 15. Recommend investigation when schedule permits.",time:"09:48",starred:!0}]}}},Bne={class:"jShowcase_row jShowcase_column"},Dne={class:"jShowcase_group"},Pne={class:"jShowcase_group"};function jne(e,t,n,a,o,i){const r=G("QIcon"),s=G("QItemSection"),l=G("QItemLabel"),u=G("QItem"),c=G("QList"),d=G("QAvatar");return D(),Z("div",Bne,[b("div",Dne,[t[0]||(t[0]=b("span",{class:"jShowcase_title"},"Selectable List",-1)),p(c,{bordered:"",separator:""},{default:S(()=>[(D(!0),Z(De,null,Ye(o.missions,f=>he((D(),pe(u,{key:f.id,clickable:"",active:o.selected===f.id,style:fn(o.selected===f.id?"background: color-mix(in srgb, var(--q-accent) 10%, transparent)":""),onClick:h=>o.selected=f.id},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:f.icon,color:o.selected===f.id?"accent":"grey"},null,8,["name","color"])]),_:2},1024),p(s,null,{default:S(()=>[p(l,{class:nt({"text-weight-bold":o.selected===f.id})},{default:S(()=>[W(ve(f.name),1)]),_:2},1032,["class"]),p(l,{caption:"",lines:"1"},{default:S(()=>[W(ve(f.desc),1)]),_:2},1024)]),_:2},1024),p(s,{side:""},{default:S(()=>[o.selected===f.id?(D(),pe(r,{key:0,name:"radio_button_checked",color:"accent"})):(D(),pe(r,{key:1,name:"radio_button_unchecked",color:"grey-7"}))]),_:2},1024)]),_:2},1032,["active","style","onClick"])),[[Yt]])),128))]),_:1})]),b("div",Pne,[t[1]||(t[1]=b("span",{class:"jShowcase_title"},"Multi-line Items",-1)),p(c,{bordered:"",style:{background:"transparent","border-color":"var(--q-surface-border)","border-radius":"4px"}},{default:S(()=>[(D(!0),Z(De,null,Ye(o.messages,f=>he((D(),pe(u,{key:f.from,clickable:""},{default:S(()=>[p(s,{avatar:"",top:""},{default:S(()=>[p(d,{color:"primary","text-color":"white"},{default:S(()=>[W(ve(f.from[0]),1)]),_:2},1024)]),_:2},1024),p(s,null,{default:S(()=>[p(l,{overline:""},{default:S(()=>[W(ve(f.from),1)]),_:2},1024),p(l,null,{default:S(()=>[W(ve(f.subject),1)]),_:2},1024),p(l,{caption:"",lines:"2"},{default:S(()=>[W(ve(f.body),1)]),_:2},1024)]),_:2},1024),p(s,{side:"",top:""},{default:S(()=>[p(l,{caption:""},{default:S(()=>[W(ve(f.time),1)]),_:2},1024),f.starred?(D(),pe(r,{key:0,name:"star",color:"warning",size:"18px",class:"q-mt-xs"})):Re("",!0)]),_:2},1024)]),_:2},1024)),[[Yt]])),128))]),_:1})])])}const Mne=Be(Ene,[["render",jne]]),$ne=Object.freeze(Object.defineProperty({__proto__:null,default:Mne},Symbol.toStringTag,{value:"Module"})),Rne="component",One={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},Fne={bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},separator:{type:"Boolean",desc:"Applies a separator between contained items",category:"content"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"},padding:{type:"Boolean",desc:"Applies a material design-like padding on top and bottom",category:"style"},tag:{type:"String",default:"div",desc:"HTML element tag to render",category:"content"}},zne={default:{desc:"Default slot in the devland unslotted content of the component"}},Nne={},Vne={type:Rne,meta:One,props:Fne,slots:zne,events:Nne},Hne="component",Une={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},Wne={active:{type:["Boolean","null"],default:"null",desc:"Put item into 'active' state",category:"state"},"active-class":{type:"String",default:"q-item--active",desc:"The class to apply on active state",category:"style"},clickable:{type:"Boolean",desc:"Is QItem clickable? If true, then it will add hover effects and emit 'click' events",category:"state"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},focused:{type:"Boolean",desc:"Determines focus state",category:"state"},"inset-level":{type:"Number",desc:"Apply an inset; Useful for right-side content when left side has something like avatar or icon",category:"content"},"manual-focus":{type:"Boolean",desc:"Determines manual focus state",category:"state"},tag:{type:"String",default:"div",desc:"HTML element tag to render",category:"content"},tabindex:{type:["String","Number"],desc:"Tabindex HTML attribute value",category:"general"},to:{type:["String","Object"],desc:"Equivalent to Vue Router <router-link> 'to' property",category:"navigation"},exact:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'exact' property",category:"navigation"},replace:{type:"Boolean",desc:"Equivalent to Vue Router <router-link> 'replace' property",category:"navigation"},href:{type:"String",desc:"Native <a> link href attribute",category:"navigation"},target:{type:"String",desc:"Native <a> link target attribute",category:"navigation"}},Jne={default:{desc:"Default slot in the devland unslotted content of the component"}},Gne={click:{desc:"Emitted when the component is clicked",params:{evt:{type:"Event"}}}},Kne={type:Hne,meta:Une,props:Wne,slots:Jne,events:Gne},Yne="component",Zne={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},Xne={avatar:{type:"Boolean",desc:"Render an avatar item side (does not need QAvatar to function)",category:"content"},thumbnail:{type:"Boolean",desc:"Render a thumbnail item side",category:"content"},side:{type:"Boolean",desc:"Render as a side section (has smaller width, no wrapping)",category:"content"},top:{type:"Boolean",desc:"Align content to top (useful for multi-line items)",category:"content"},"no-wrap":{type:"Boolean",desc:"Do not wrap text",category:"style"}},eoe={default:{desc:"Default slot in the devland unslotted content of the component"}},toe={},noe={type:Yne,meta:Zne,props:Xne,slots:eoe,events:toe},ooe="component",aoe={docsUrl:"https://v2.quasar.dev/vue-components/list-and-list-items"},ioe={overline:{type:"Boolean",desc:"Renders an overline label",category:"content"},caption:{type:"Boolean",desc:"Renders a caption label",category:"content"},header:{type:"Boolean",desc:"Renders a header label",category:"content"},lines:{type:["Number","String"],desc:"Apply ellipsis when there are more than 'lines' lines",category:"content"}},roe={default:{desc:"Default slot in the devland unslotted content of the component"}},soe={},loe={type:ooe,meta:aoe,props:ioe,slots:roe,events:soe},coe={name:"ShowcaseBasicList",components:{QList:fo,QItem:Tn,QItemSection:Ln,QItemLabel:Ra,QIcon:Ve,QBadge:Df},label:"Basic List",icon:"list",order:1,apiJson:[{name:"QList",json:Vne},{name:"QItem",json:Kne},{name:"QItemSection",json:noe},{name:"QItemLabel",json:loe}],importName:"QList",importFrom:"quasar"},uoe={class:"jShowcase_row jShowcase_column"},doe={class:"jShowcase_group"};function poe(e,t,n,a,o,i){const r=G("QIcon"),s=G("QItemSection"),l=G("QItemLabel"),u=G("QItem"),c=G("QBadge"),d=G("QList");return D(),Z("div",uoe,[b("div",doe,[t[8]||(t[8]=b("span",{class:"jShowcase_title"},"Basic List",-1)),p(d,{bordered:"",separator:""},{default:S(()=>[he((D(),pe(u,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"rocket_launch",color:"primary"})]),_:1}),p(s,null,{default:S(()=>[p(l,null,{default:S(()=>[...t[0]||(t[0]=[W("Launch Sequence",-1)])]),_:1}),p(l,{caption:""},{default:S(()=>[...t[1]||(t[1]=[W("Initiate main thruster ignition",-1)])]),_:1})]),_:1}),p(s,{side:""},{default:S(()=>[p(r,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[Yt]]),he((D(),pe(u,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"shield",color:"positive"})]),_:1}),p(s,null,{default:S(()=>[p(l,null,{default:S(()=>[...t[2]||(t[2]=[W("Shield Matrix",-1)])]),_:1}),p(l,{caption:""},{default:S(()=>[...t[3]||(t[3]=[W("Deflector array at 98% capacity",-1)])]),_:1})]),_:1}),p(s,{side:""},{default:S(()=>[p(c,{color:"positive",label:"ONLINE"})]),_:1})]),_:1})),[[Yt]]),he((D(),pe(u,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"sensors",color:"warning"})]),_:1}),p(s,null,{default:S(()=>[p(l,null,{default:S(()=>[...t[4]||(t[4]=[W("Long Range Sensors",-1)])]),_:1}),p(l,{caption:""},{default:S(()=>[...t[5]||(t[5]=[W("Scanning sector 7-G for anomalies",-1)])]),_:1})]),_:1}),p(s,{side:""},{default:S(()=>[p(c,{color:"warning",label:"SCANNING"})]),_:1})]),_:1})),[[Yt]]),he((D(),pe(u,{clickable:"",disable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"bolt",color:"grey"})]),_:1}),p(s,null,{default:S(()=>[p(l,null,{default:S(()=>[...t[6]||(t[6]=[W("Warp Drive",-1)])]),_:1}),p(l,{caption:""},{default:S(()=>[...t[7]||(t[7]=[W("Cooldown in progress — 12 min remaining",-1)])]),_:1})]),_:1}),p(s,{side:""},{default:S(()=>[p(c,{color:"negative",label:"OFFLINE"})]),_:1})]),_:1})),[[Yt]])]),_:1})])])}const foe=Be(coe,[["render",poe]]),moe=Object.freeze(Object.defineProperty({__proto__:null,default:foe},Symbol.toStringTag,{value:"Module"})),hoe={name:"ShowcaseDenseList",components:{QList:fo,QItem:Tn,QItemSection:Ln,QItemLabel:Ra,QAvatar:Nf},label:"Dense List",icon:"list",importName:"QList",importFrom:"quasar",order:2,data(){return{crewLog:[{name:"Cdr. Voss",role:"Captain",icon:"military_tech",color:"primary"},{name:"Lt. Nakamura",role:"Pilot",icon:"flight",color:"accent"},{name:"Dr. Okafor",role:"Medical",icon:"healing",color:"positive"},{name:"Eng. Petrov",role:"Engineer",icon:"build",color:"warning"},{name:"Spc. Reyes",role:"Science",icon:"science",color:"secondary"}],navLog:[{coord:"α Centauri B-3",note:"Orbital insertion complete",time:"08:12"},{coord:"Sector 9-Kilo",note:"Asteroid field traversal",time:"06:45"},{coord:"Relay Station 7",note:"Fuel resupply",time:"03:22"},{coord:"Nebula NGC-1277",note:"Sensor sweep logged",time:"01:10"}]}}},goe={class:"jShowcase_row jShowcase_column"},voe={class:"jShowcase_group"},boe={class:"jShowcase_group"};function _oe(e,t,n,a,o,i){const r=G("QAvatar"),s=G("QItemSection"),l=G("QItemLabel"),u=G("QItem"),c=G("QList");return D(),Z("div",goe,[b("div",voe,[t[0]||(t[0]=b("span",{class:"jShowcase_title"},"Dense List",-1)),p(c,{dense:"",bordered:"",separator:""},{default:S(()=>[(D(!0),Z(De,null,Ye(o.crewLog,d=>he((D(),pe(u,{key:d.name,clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{size:"18px",color:d.color,"text-color":"white",icon:d.icon},null,8,["color","icon"])]),_:2},1024),p(s,null,{default:S(()=>[p(l,null,{default:S(()=>[W(ve(d.name),1)]),_:2},1024)]),_:2},1024),p(s,{side:""},{default:S(()=>[p(l,{caption:""},{default:S(()=>[W(ve(d.role),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[Yt]])),128))]),_:1})]),b("div",boe,[t[2]||(t[2]=b("span",{class:"jShowcase_title"},"Dense with Padding",-1)),p(c,{dense:"",bordered:"",padding:""},{default:S(()=>[p(l,{header:"",class:"jShowcase_title"},{default:S(()=>[...t[1]||(t[1]=[W("Navigation Log",-1)])]),_:1}),(D(!0),Z(De,null,Ye(o.navLog,(d,f)=>he((D(),pe(u,{key:f,clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[p(l,null,{default:S(()=>[W(ve(d.coord),1)]),_:2},1024),p(l,{caption:""},{default:S(()=>[W(ve(d.note),1)]),_:2},1024)]),_:2},1024),p(s,{side:"",top:""},{default:S(()=>[p(l,{caption:""},{default:S(()=>[W(ve(d.time),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[Yt]])),128))]),_:1})])])}const yoe=Be(hoe,[["render",_oe]]),woe=Object.freeze(Object.defineProperty({__proto__:null,default:yoe},Symbol.toStringTag,{value:"Module"})),Soe="component",koe={docsUrl:"https://v2.quasar.dev/vue-components/menu"},xoe={"model-value":{type:["Boolean","null"],desc:"Model of the component defining shown/hidden state; Use with v-model",default:"null",category:"model",examples:['v-model="menuVisible"']},target:{type:["Boolean","String","Element"],desc:"Configure a target element to trigger component toggle; 'true' enables the parent DOM element",default:"true",category:"behavior",examples:["false",".my-parent","#target-id"]},"context-menu":{type:"Boolean",desc:"Opens with a right mouse click (or long tap on mobile)",category:"behavior"},fit:{type:"Boolean",desc:"Allows the menu to match at least the full width of its target",category:"position"},cover:{type:"Boolean",desc:"Allows the menu to cover its target. When used, 'self' and 'fit' are no longer effective",category:"position"},anchor:{type:"String",desc:"Starting position of the menu relative to its target",values:["top left","top middle","top right","center left","center middle","center right","bottom left","bottom middle","bottom right"],category:"position"},self:{type:"String",desc:"Menu's own position relative to its target",values:["top left","top middle","top right","center left","center middle","center right","bottom left","bottom middle","bottom right"],category:"position"},offset:{type:"Array",desc:"An array of two numbers to offset the menu horizontally and vertically in pixels",examples:["[8, 8]","[5, 10]"],category:"position"},persistent:{type:"Boolean",desc:"Menu won't be dismissed by click/tap outside or ESC key",category:"behavior"},"no-esc-dismiss":{type:"Boolean",desc:"User cannot dismiss the popup by hitting ESC key",category:"behavior"},"auto-close":{type:"Boolean",desc:"Any click/tap in the menu closes it; Useful instead of v-close-popup on each item",category:"behavior"},"touch-position":{type:"Boolean",desc:"Menu position set by the mouse/touch position when target is clicked",category:"behavior"},square:{type:"Boolean",desc:"Forces content to have squared borders",category:"style"},"max-height":{type:["String","null"],desc:"The maximum height of the menu; Size in CSS units",default:"null",examples:["'200px'","'50vh'"],category:"style"},"max-width":{type:["String","null"],desc:"The maximum width of the menu; Size in CSS units",default:"null",examples:["'300px'","'80vw'"],category:"style"},"transition-show":{type:"String",desc:"One of Quasar's embedded transitions for showing",default:"'fade'",examples:["'fade'","'slide-down'"],category:"transition"},"transition-hide":{type:"String",desc:"One of Quasar's embedded transitions for hiding",default:"'fade'",examples:["'fade'","'slide-down'"],category:"transition"},dark:{type:["Boolean","null"],desc:"Notify the component that the background is a dark color",default:"null",category:"style"},"separate-close-popup":{type:"Boolean",desc:"Separate from parent menu, marking it as a separate closing point for v-close-popup",category:"behavior"}},Coe={default:{desc:"Default slot for the menu content"}},Qoe={"update:model-value":{desc:"Emitted when shown/hidden state changes; Used by v-model",params:{value:{type:"Boolean",desc:"New state (showing/hidden)"}}},show:{desc:"Emitted after component has triggered show()",params:{evt:{type:"Event",desc:"JS event object"}}},"before-show":{desc:"Emitted when component triggers show() but before it finishes",params:{evt:{type:"Event",desc:"JS event object"}}},hide:{desc:"Emitted after component has triggered hide()",params:{evt:{type:"Event",desc:"JS event object"}}},"before-hide":{desc:"Emitted when component triggers hide() but before it finishes",params:{evt:{type:"Event",desc:"JS event object"}}},"escape-key":{desc:"Emitted when ESC key is pressed; Not emitted if 'persistent' or 'no-esc-dismiss' is set"}},Aoe={show:{desc:"Triggers component to show",params:{evt:{type:"Event",required:!1}}},hide:{desc:"Triggers component to hide",params:{evt:{type:"Event",required:!1}}},toggle:{desc:"Triggers component to toggle between show/hide",params:{evt:{type:"Event",required:!1}}},updatePosition:{desc:"Manually reposition the menu"},focus:{desc:"Focus menu; if content has autofocus attribute, it will directly focus it"}},Ioe={type:Soe,meta:koe,props:xoe,slots:Coe,events:Qoe,methods:Aoe},qoe={name:"ShowcaseMenu",components:{QBtn:vt,QMenu:$a,QList:fo,QItem:Tn,QItemSection:Ln,QIcon:Ve,QSeparator:ul},label:"Menu",icon:"menu",apiJson:Ioe,importName:"QMenu",importFrom:"quasar"},Toe={class:"jShowcase_row jShowcase_column"},Loe={class:"jShowcase_group"},Eoe={class:"jShowcase_items"},Boe={class:"jShowcase_group"},Doe={class:"jShowcase_items"},Poe={class:"contextTarget"},joe={class:"jShowcase_group"},Moe={class:"jShowcase_items"},$oe={class:"jShowcase_group"},Roe={class:"jShowcase_items"},Ooe={class:"jShowcase_group"},Foe={class:"jShowcase_items"},zoe={class:"jShowcase_group"},Noe={class:"jShowcase_items"};function Voe(e,t,n,a,o,i){const r=G("QIcon"),s=G("QItemSection"),l=G("QItem"),u=G("QSeparator"),c=G("QList"),d=G("QMenu"),f=G("QBtn");return D(),Z("div",Toe,[b("div",Loe,[t[16]||(t[16]=b("span",{class:"jShowcase_title"},"Basic with Submenus",-1)),b("div",Eoe,[p(f,{color:"primary",label:"File"},{default:S(()=>[p(d,null,{default:S(()=>[p(c,{dense:"",style:{"min-width":"150px"}},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"folder_open"})]),_:1}),p(s,null,{default:S(()=>[...t[0]||(t[0]=[W("Open...",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"note_add"})]),_:1}),p(s,null,{default:S(()=>[...t[1]||(t[1]=[W("New File",-1)])]),_:1})]),_:1})),[[we]]),p(u),p(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"ios_share"})]),_:1}),p(s,null,{default:S(()=>[...t[2]||(t[2]=[W("Export As",-1)])]),_:1}),p(s,{side:""},{default:S(()=>[p(r,{name:"keyboard_arrow_right"})]),_:1}),p(d,{anchor:"top end",self:"top start"},{default:S(()=>[p(c,{dense:""},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[3]||(t[3]=[W("PDF",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[4]||(t[4]=[W("CSV",-1)])]),_:1})]),_:1})),[[we]]),p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[5]||(t[5]=[W("Image",-1)])]),_:1}),p(s,{side:""},{default:S(()=>[p(r,{name:"keyboard_arrow_right"})]),_:1}),p(d,{"auto-close":"",anchor:"top end",self:"top start"},{default:S(()=>[p(c,{dense:""},{default:S(()=>[p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[6]||(t[6]=[W("PNG",-1)])]),_:1})]),_:1}),p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[7]||(t[7]=[W("JPEG",-1)])]),_:1})]),_:1}),p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[8]||(t[8]=[W("SVG",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),p(u),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"close"})]),_:1}),p(s,null,{default:S(()=>[...t[9]||(t[9]=[W("Quit",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"secondary",icon:"more_vert",round:"",flat:""},{default:S(()=>[p(d,null,{default:S(()=>[p(c,{dense:"",style:{"min-width":"140px"}},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[10]||(t[10]=[W("Profile",-1)])]),_:1})]),_:1})),[[we]]),p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[11]||(t[11]=[W("Notifications",-1)])]),_:1}),p(s,{side:""},{default:S(()=>[p(r,{name:"keyboard_arrow_right"})]),_:1}),p(d,{anchor:"top end",self:"top start"},{default:S(()=>[p(c,{dense:""},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[12]||(t[12]=[W("Email",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[13]||(t[13]=[W("Push",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[14]||(t[14]=[W("SMS",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(u),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[15]||(t[15]=[W("Logout",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1})])]),b("div",Boe,[t[30]||(t[30]=b("span",{class:"jShowcase_title"},"Context Menu",-1)),b("div",Doe,[b("div",Poe,[t[29]||(t[29]=W(" Right-click here ",-1)),p(d,{"context-menu":""},{default:S(()=>[p(c,{dense:"",style:{"min-width":"150px"}},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"content_cut"})]),_:1}),p(s,null,{default:S(()=>[...t[17]||(t[17]=[W("Cut",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"content_copy"})]),_:1}),p(s,null,{default:S(()=>[...t[18]||(t[18]=[W("Copy",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"content_paste"})]),_:1}),p(s,null,{default:S(()=>[...t[19]||(t[19]=[W("Paste",-1)])]),_:1})]),_:1})),[[we]]),p(u),p(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"sort"})]),_:1}),p(s,null,{default:S(()=>[...t[20]||(t[20]=[W("Sort By",-1)])]),_:1}),p(s,{side:""},{default:S(()=>[p(r,{name:"keyboard_arrow_right"})]),_:1}),p(d,{anchor:"top end",self:"top start"},{default:S(()=>[p(c,{dense:""},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[21]||(t[21]=[W("Name",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[22]||(t[22]=[W("Date Modified",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[23]||(t[23]=[W("Size",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[24]||(t[24]=[W("Type",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(l,{clickable:""},{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:"visibility"})]),_:1}),p(s,null,{default:S(()=>[...t[25]||(t[25]=[W("View",-1)])]),_:1}),p(s,{side:""},{default:S(()=>[p(r,{name:"keyboard_arrow_right"})]),_:1}),p(d,{anchor:"top end",self:"top start"},{default:S(()=>[p(c,{dense:""},{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[26]||(t[26]=[W("Grid",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[27]||(t[27]=[W("List",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[28]||(t[28]=[W("Compact",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])]),b("div",joe,[t[39]||(t[39]=b("span",{class:"jShowcase_title"},"Positioning",-1)),b("div",Moe,[p(f,{color:"primary",label:"Bottom Left"},{default:S(()=>[p(d,{anchor:"bottom left",self:"top left"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[31]||(t[31]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[32]||(t[32]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"accent",label:"Top Right"},{default:S(()=>[p(d,{anchor:"top right",self:"bottom right"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[33]||(t[33]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[34]||(t[34]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"secondary",label:"Fit Width",style:{"min-width":"160px"}},{default:S(()=>[p(d,{fit:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[35]||(t[35]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[36]||(t[36]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"info",label:"Cover"},{default:S(()=>[p(d,{cover:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[37]||(t[37]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[38]||(t[38]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1})])]),b("div",$oe,[t[46]||(t[46]=b("span",{class:"jShowcase_title"},"Behavior",-1)),b("div",Roe,[p(f,{color:"primary",label:"Auto Close"},{default:S(()=>[p(d,{"auto-close":""},{default:S(()=>[p(c,null,{default:S(()=>[p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[40]||(t[40]=[W("Click anywhere to close",-1)])]),_:1})]),_:1}),p(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[41]||(t[41]=[W("No v-close-popup needed",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),p(f,{color:"negative",label:"Persistent"},{default:S(()=>[p(d,{persistent:""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[42]||(t[42]=[W("Must click item to close",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[43]||(t[43]=[W("ESC won't close either",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"accent",label:"Touch Position"},{default:S(()=>[p(d,{"touch-position":""},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[44]||(t[44]=[W("Opens at click position",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[45]||(t[45]=[W("Not anchored to button",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1})])]),b("div",Ooe,[t[53]||(t[53]=b("span",{class:"jShowcase_title"},"Transitions",-1)),b("div",Foe,[p(f,{color:"primary",label:"Slide Down"},{default:S(()=>[p(d,{"transition-show":"slide-down","transition-hide":"slide-up"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[47]||(t[47]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[48]||(t[48]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"secondary",label:"Scale"},{default:S(()=>[p(d,{"transition-show":"scale","transition-hide":"scale"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[49]||(t[49]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[50]||(t[50]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1}),p(f,{color:"accent",label:"Jump Down"},{default:S(()=>[p(d,{"transition-show":"jump-down","transition-hide":"jump-up"},{default:S(()=>[p(c,null,{default:S(()=>[he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[51]||(t[51]=[W("Option A",-1)])]),_:1})]),_:1})),[[we]]),he((D(),pe(l,{clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[...t[52]||(t[52]=[W("Option B",-1)])]),_:1})]),_:1})),[[we]])]),_:1})]),_:1})]),_:1})])]),b("div",zoe,[t[54]||(t[54]=b("span",{class:"jShowcase_title"},"Scrollable",-1)),b("div",Noe,[p(f,{color:"primary",label:"Max Height 200px"},{default:S(()=>[p(d,{"max-height":"200px"},{default:S(()=>[p(c,null,{default:S(()=>[(D(),Z(De,null,Ye(12,h=>he(p(l,{key:h,clickable:""},{default:S(()=>[p(s,null,{default:S(()=>[W("Item "+ve(h),1)]),_:2},1024)]),_:2},1024),[[we]])),64))]),_:1})]),_:1})]),_:1})])])])}const Hoe=Be(qoe,[["render",Voe],["__scopeId","data-v-1620cbc2"]]),Uoe=Object.freeze(Object.defineProperty({__proto__:null,default:Hoe},Symbol.toStringTag,{value:"Module"})),Woe=Te({name:"QBanner",props:{...Rt,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Oe(),a=Ot(e,n),o=E(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),i=E(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const r=[j("div",{class:"q-banner__avatar col-auto row items-center self-start"},tt(t.avatar)),j("div",{class:"q-banner__content col text-body2"},tt(t.default))],s=tt(t.action);return s!==void 0&&r.push(j("div",{class:i.value},s)),j("div",{class:o.value+(e.inlineActions===!1&&s!==void 0?" q-banner--top-padding":""),role:"alert"},r)}}}),Joe="component",Goe={docsUrl:"https://v2.quasar.dev/vue-components/banner"},Koe={"inline-actions":{type:"Boolean",desc:"Display actions on same row as content",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},rounded:{type:"Boolean",desc:"Applies a small standard border-radius for a squared shape of the component",category:"style"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},Yoe={default:{desc:"This is where Banner content goes"},avatar:{desc:"Slot for displaying an avatar (suggestions: QIcon, QAvatar)"},action:{desc:"Slot for Banner action (suggestions: QBtn)"}},Zoe={type:Joe,meta:Goe,props:Koe,slots:Yoe},Xoe={name:"ShowcaseQuasarBanner",components:{QBanner:Woe,QIcon:Ve,QBtn:vt},label:"Quasar Banner",icon:"dashboard",apiJson:Zoe,importName:"QBanner",importFrom:"quasar"};function eae(e,t,n,a,o,i){const r=G("QIcon"),s=G("QBtn"),l=G("QBanner");return D(),Z("div",null,[p(l,{class:"bg-surface-3 text-bright",rounded:""},{avatar:S(()=>[p(r,{name:"signal_wifi_off",color:"secondary",size:"sm"})]),action:S(()=>[p(s,{flat:"",color:"info",label:"Turn on Wifi",outline:""}),p(s,{flat:"",color:"secondary",label:"Dismiss"})]),default:S(()=>[t[0]||(t[0]=W(" You have lost connection to the internet. This app is offline. ",-1))]),_:1}),p(l,{"inline-actions":"",dense:"",class:"bg-indigo-7 text-white q-mt-sm"},{avatar:S(()=>[...t[1]||(t[1]=[b("img",{src:"https://cdn.quasar.dev/img/mountains.jpg",style:{height:"64px"}},null,-1)])]),action:S(()=>[p(s,{flat:"",color:"primary",label:"Turn ON Wifi"})]),default:S(()=>[t[2]||(t[2]=W(" You have lost connection to the internet. This app is offline. ",-1))]),_:1})])}const tae=Be(Xoe,[["render",eae]]),nae=Object.freeze(Object.defineProperty({__proto__:null,default:tae},Symbol.toStringTag,{value:"Module"})),oae="component",aae={},iae={title:{type:"String",default:"null",desc:"Header title text. Ignored when #title slot is provided.",category:"content"},icon:{type:"String",default:"null",desc:"Material icon name shown before the title.",category:"content"},"icon-color":{type:"String",default:"'var(--q-primary)'",desc:"CSS color value for the header icon.",category:"style"},"footer-text":{type:"String",default:"null",desc:"Simple text displayed in the footer bar.",category:"content"},square:{type:"Boolean",default:"false",desc:"Remove border-radius for a square appearance.",category:"style"},fullscreen:{type:"Boolean",default:"false",desc:"Panel takes up the full viewport (fixed positioning).",category:"style"},scroll:{type:"Boolean",default:"false",desc:"Enable vertical scrolling for the default slot content.",category:"behavior"}},rae={default:{desc:"Main content area of the panel."},title:{desc:"Replaces the default title text. The header icon still renders if the icon prop is set."},header:{desc:"Content inserted between the title and header-action areas."},"header-action":{desc:"Right-aligned content in the header bar (e.g. buttons, tabs)."},footer:{desc:"Footer content. Rendered alongside footer-text if both are provided."}},sae={},lae={},lr={type:oae,meta:aae,props:iae,slots:rae,events:sae,methods:lae},cae={name:"ShowcaseBasicPanel",components:{JPanel:qn},label:"Basic Panel",icon:"dashboard",apiJson:lr,importName:"JPanel",code:null};function uae(e,t,n,a,o,i){const r=G("JPanel");return D(),pe(r,{title:"SAMPLE PANEL",icon:"dashboard","icon-color":"var(--q-primary)"},{default:S(()=>[...t[0]||(t[0]=[b("div",{class:"q-ma-md"}," Panel content area with default gradient background. ",-1)])]),_:1})}const dae=Be(cae,[["render",uae]]),pae=Object.freeze(Object.defineProperty({__proto__:null,default:dae},Symbol.toStringTag,{value:"Module"})),fae="component",mae={docsUrl:"https://v2.quasar.dev/vue-components/card"},hae={dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1},square:{type:"Boolean",desc:"Removes border-radius so borders are squared",category:"style"},flat:{type:"Boolean",desc:"Applies a 'flat' design (no default shadow)",category:"style"},bordered:{type:"Boolean",desc:"Applies a default border to the component",category:"style"},tag:{type:"String",desc:"HTML tag to use",category:"content",default:"'div'",examples:["'div'","'form'"],required:!1}},gae={default:{desc:"Default slot in the devland unslotted content of the component"}},vae={type:fae,meta:mae,props:hae,slots:gae},bae="component",_ae={docsUrl:"https://v2.quasar.dev/vue-components/card"},yae={horizontal:{type:"Boolean",desc:"Display a horizontal section (will have no padding and can contain other QCardSection)",category:"content"},tag:{type:"String",desc:"HTML tag to use",category:"content",default:"'div'",examples:["'div'","'form'"],required:!1}},wae={default:{desc:"Default slot in the devland unslotted content of the component"}},Sae={type:bae,meta:_ae,props:yae,slots:wae},kae="component",xae={docsUrl:"https://v2.quasar.dev/vue-components/card"},Cae={align:{type:"String",desc:"Specify how to align the actions",default:"'left'/'stretch'",values:["'left'","'center'","'right'","'between'","'around'","'evenly'","'stretch'"],category:"content",required:!1},vertical:{type:"Boolean",desc:"Display actions one below the other",category:"content"}},Qae={default:{desc:"Suggestions: QBtn"}},Aae={type:kae,meta:xae,props:Cae,slots:Qae},Iae={name:"ShowcaseQuasarCard",components:{QCard:Lf,QCardSection:Ef,QCardActions:Bf,QBtn:vt},label:"Quasar Card",icon:"dashboard",apiJson:[{name:"QCard",json:vae},{name:"QCardSection",json:Sae},{name:"QCardActions",json:Aae}],importName:"QCard",importFrom:"quasar"},qae={class:"jShowcase_row"};function Tae(e,t,n,a,o,i){const r=G("QCardSection"),s=G("QBtn"),l=G("QCardActions"),u=G("QCard");return D(),Z("div",qae,[p(u,{class:"showcaseCard",flat:"",bordered:""},{default:S(()=>[p(r,null,{default:S(()=>[...t[0]||(t[0]=[b("div",{class:"text-h6"},"Starship Registry",-1),b("div",{class:"text-subtitle2"},"NCC-1701 — USS Enterprise",-1)])]),_:1}),p(r,null,{default:S(()=>[...t[1]||(t[1]=[W(" A Constitution-class vessel, flagship of the United Federation of Planets. Currently assigned to deep space exploration. ",-1)])]),_:1}),p(l,{align:"right"},{default:S(()=>[p(s,{flat:"",color:"primary",label:"Details"}),p(s,{flat:"",color:"accent",label:"Hail"})]),_:1})]),_:1})])}const Lae=Be(Iae,[["render",Tae]]),Eae=Object.freeze(Object.defineProperty({__proto__:null,default:Lae},Symbol.toStringTag,{value:"Module"})),Bae={name:"ShowcasePanelWithAction",components:{QBtn:vt,JPanel:qn},label:"Panel With Header Action",icon:"dashboard",apiJson:lr,importName:"JPanel",code:null};function Dae(e,t,n,a,o,i){const r=G("QBtn"),s=G("JPanel");return D(),pe(s,{title:"CONTROLS",icon:"tune","icon-color":"var(--q-warning)"},{"header-action":S(()=>[p(r,{class:"ghost",icon:"favorite_border",label:"Act",size:"xs"})]),default:S(()=>[t[0]||(t[0]=b("div",{class:"q-ma-md"},"Panel content area with default gradient background.",-1))]),_:1})}const Pae=Be(Bae,[["render",Dae]]),jae=Object.freeze(Object.defineProperty({__proto__:null,default:Pae},Symbol.toStringTag,{value:"Module"})),Mae={name:"ShowcasePanelWithFooter",components:{QBtn:vt,JPanel:qn},label:"Panel With Footer",icon:"dashboard",apiJson:lr,importName:"JPanel",code:`<JPanel
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
</JPanel>`};function $ae(e,t,n,a,o,i){const r=G("QBtn"),s=G("JPanel");return D(),pe(s,{title:"DATA PANEL",icon:"analytics","icon-color":"var(--q-info)","footer-text":"Last updated: just now"},{footer:S(()=>[p(r,{class:"ghost",icon:"refresh",size:"sm",label:"Refresh"})]),default:S(()=>[t[0]||(t[0]=b("div",{class:"q-ma-md"},"Panel content area with default gradient background.",-1))]),_:1})}const Rae=Be(Mae,[["render",$ae]]),Oae=Object.freeze(Object.defineProperty({__proto__:null,default:Rae},Symbol.toStringTag,{value:"Module"}));function Vf(e,t){const n=be(null),a=E(()=>e.disable===!0?null:j("span",{ref:n,class:"no-outline",tabindex:-1}));function o(i){const r=t.value;(i==null?void 0:i.qAvoidFocus)!==!0&&((i==null?void 0:i.type.indexOf("key"))===0?document.activeElement!==r&&(r==null?void 0:r.contains(document.activeElement))===!0&&r.focus():n.value!==null&&(i===void 0||(r==null?void 0:r.contains(i.target))===!0)&&n.value.focus())}return{refocusTargetEl:a,refocusTarget:o}}const Hf={xs:30,sm:35,md:40,lg:50,xl:60},Uf={...Rt,...Hn,...po,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Wf=["update:modelValue"];function Jf(e,t){const{props:n,slots:a,emit:o,proxy:i}=Oe(),{$q:r}=i,s=Ot(n,r),l=be(null),{refocusTargetEl:u,refocusTarget:c}=Vf(n,l),d=Un(n,Hf),f=E(()=>n.val!==void 0&&Array.isArray(n.modelValue)),h=E(()=>{const O=$e(n.val);return f.value===!0?n.modelValue.findIndex(Y=>$e(Y)===O):-1}),_=E(()=>f.value===!0?h.value!==-1:$e(n.modelValue)===$e(n.trueValue)),I=E(()=>f.value===!0?h.value===-1:$e(n.modelValue)===$e(n.falseValue)),C=E(()=>_.value===!1&&I.value===!1),g=E(()=>n.disable===!0?-1:n.tabindex||0),y=E(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(n.disable===!0?" disabled":"")+(s.value===!0?` q-${e}--dark`:"")+(n.dense===!0?` q-${e}--dense`:"")+(n.leftLabel===!0?" reverse":"")),w=E(()=>{const O=_.value===!0?"truthy":I.value===!0?"falsy":"indet",Y=n.color!==void 0&&(n.keepColor===!0||(e==="toggle"?_.value===!0:I.value!==!0))?` text-${n.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${O}${Y}`}),v=E(()=>{const O={type:"checkbox"};return n.name!==void 0&&Object.assign(O,{".checked":_.value,"^checked":_.value===!0?"checked":void 0,name:n.name,value:f.value===!0?n.val:n.trueValue}),O}),x=Ma(v),L=E(()=>{const O={tabindex:g.value,role:e==="toggle"?"switch":"checkbox","aria-label":n.label,"aria-checked":C.value===!0?"mixed":_.value===!0?"true":"false"};return n.disable===!0&&(O["aria-disabled"]="true"),O});function q(O){O!==void 0&&(He(O),c(O)),n.disable!==!0&&o("update:modelValue",T(),O)}function T(){if(f.value===!0){if(_.value===!0){const O=n.modelValue.slice();return O.splice(h.value,1),O}return n.modelValue.concat([n.val])}if(_.value===!0){if(n.toggleOrder!=="ft"||n.toggleIndeterminate===!1)return n.falseValue}else if(I.value===!0){if(n.toggleOrder==="ft"||n.toggleIndeterminate===!1)return n.trueValue}else return n.toggleOrder!=="ft"?n.trueValue:n.falseValue;return n.indeterminateValue}function M(O){(O.keyCode===13||O.keyCode===32)&&He(O)}function $(O){(O.keyCode===13||O.keyCode===32)&&q(O)}const z=t(_,C);return Object.assign(i,{toggle:q}),()=>{const O=z();n.disable!==!0&&x(O,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const Y=[j("div",{class:w.value,style:d.value,"aria-hidden":"true"},O)];u.value!==null&&Y.push(u.value);const B=n.label!==void 0?Ut(a.default,[n.label]):tt(a.default);return B!==void 0&&Y.push(j("div",{class:`q-${e}__label q-anchor--skip`},B)),j("div",{ref:l,class:y.value,...L.value,onClick:q,onKeydown:M,onKeyup:$},Y)}}const Fae=()=>j("div",{key:"svg",class:"q-checkbox__bg absolute"},[j("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[j("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),j("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),Gf=Te({name:"QCheckbox",props:Uf,emits:Wf,setup(e){const t=Fae();function n(a,o){const i=E(()=>(a.value===!0?e.checkedIcon:o.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>i.value!==null?[j("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[j(Ve,{class:"q-checkbox__icon",name:i.value})])]:[t]}return Jf("checkbox",n)}}),hl={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},zae=Object.keys(hl);hl.all=!0;function Pi(e){const t={};for(const n of zae)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?hl:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const Nae=["INPUT","TEXTAREA"];function ji(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&Nae.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Vae(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((n,a)=>{const o=parseFloat(n);o&&(t[a]=o)}),t}const Hae=er({name:"touch-swipe",beforeMount(e,{value:t,arg:n,modifiers:a}){if(a.mouse!==!0&&Ue.has.touch!==!0)return;const o=a.mouseCapture===!0?"Capture":"",i={handler:t,sensitivity:Vae(n),direction:Pi(a),noop:Bt,mouseStart(r){ji(r,i)&&fp(r)&&(jt(i,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),i.start(r,!0))},touchStart(r){if(ji(r,i)){const s=r.target;jt(i,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),i.start(r)}},start(r,s){Ue.is.firefox===!0&&Ro(e,!0);const l=Vn(r);i.event={x:l.left,y:l.top,time:Date.now(),mouse:s===!0,dir:!1}},move(r){if(i.event===void 0)return;if(i.event.dir!==!1){He(r);return}const s=Date.now()-i.event.time;if(s===0)return;const l=Vn(r),u=l.left-i.event.x,c=Math.abs(u),d=l.top-i.event.y,f=Math.abs(d);if(i.event.mouse!==!0){if(c<i.sensitivity[1]&&f<i.sensitivity[1]){i.end(r);return}}else if(window.getSelection().toString()!==""){i.end(r);return}else if(c<i.sensitivity[2]&&f<i.sensitivity[2])return;const h=c/s,_=f/s;i.direction.vertical===!0&&c<f&&c<100&&_>i.sensitivity[0]&&(i.event.dir=d<0?"up":"down"),i.direction.horizontal===!0&&c>f&&f<100&&h>i.sensitivity[0]&&(i.event.dir=u<0?"left":"right"),i.direction.up===!0&&c<f&&d<0&&c<100&&_>i.sensitivity[0]&&(i.event.dir="up"),i.direction.down===!0&&c<f&&d>0&&c<100&&_>i.sensitivity[0]&&(i.event.dir="down"),i.direction.left===!0&&c>f&&u<0&&f<100&&h>i.sensitivity[0]&&(i.event.dir="left"),i.direction.right===!0&&c>f&&u>0&&f<100&&h>i.sensitivity[0]&&(i.event.dir="right"),i.event.dir!==!1?(He(r),i.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ia(),i.styleCleanup=I=>{i.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(C,50):C()}),i.handler({evt:r,touch:i.event.mouse!==!0,mouse:i.event.mouse,direction:i.event.dir,duration:s,distance:{x:c,y:f}})):i.end(r)},end(r){var s;i.event!==void 0&&(mn(i,"temp"),Ue.is.firefox===!0&&Ro(e,!1),(s=i.styleCleanup)==null||s.call(i,!0),r!==void 0&&i.event.dir!==!1&&He(r),i.event=void 0)}};if(e.__qtouchswipe=i,a.mouse===!0){const r=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";jt(i,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}Ue.has.touch===!0&&jt(i,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchswipe;n!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&n.end(),n.handler=t.value),n.direction=Pi(t.modifiers))},beforeUnmount(e){var n;const t=e.__qtouchswipe;t!==void 0&&(mn(t,"main"),mn(t,"temp"),Ue.is.firefox===!0&&Ro(e,!1),(n=t.styleCleanup)==null||n.call(t),delete e.__qtouchswipe)}});function Uae(){let e=Object.create(null);return{getCache:(t,n)=>e[t]===void 0?e[t]=typeof n=="function"?n():n:e[t],setCache(t,n){e[t]=n},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const Wae={name:{required:!0},disable:Boolean},Pu={setup(e,{slots:t}){return()=>j("div",{class:"q-panel scroll",role:"tabpanel"},tt(t.default))}},Jae={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Gae=["update:modelValue","beforeTransition","transition"];function Kae(){const{props:e,emit:t,proxy:n}=Oe(),{getCache:a}=Uae(),{registerTimeout:o}=Jo();let i,r;const s=be(null),l={value:null};function u(B){const N=e.vertical===!0?"up":"left";T((n.$q.lang.rtl===!0?-1:1)*(B.direction===N?1:-1))}const c=E(()=>[[Hae,u,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=E(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=E(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),h=E(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=E(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),I=E(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=E(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);Pe(()=>e.modelValue,(B,N)=>{const ne=v(B)===!0?x(B):-1;r!==!0&&q(ne===-1?0:ne<x(N)?-1:1),l.value!==ne&&(l.value=ne,t("beforeTransition",B,N),o(()=>{t("transition",B,N)},e.transitionDuration))});function g(){T(1)}function y(){T(-1)}function w(B){t("update:modelValue",B)}function v(B){return B!=null&&B!==""}function x(B){return i.findIndex(N=>N.props.name===B&&N.props.disable!==""&&N.props.disable!==!0)}function L(){return i.filter(B=>B.props.disable!==""&&B.props.disable!==!0)}function q(B){const N=B!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(B===-1?d.value:f.value):null;s.value!==N&&(s.value=N)}function T(B,N=l.value){let ne=N+B;for(;ne!==-1&&ne<i.length;){const ee=i[ne];if(ee!==void 0&&ee.props.disable!==""&&ee.props.disable!==!0){q(B),r=!0,t("update:modelValue",ee.props.name),setTimeout(()=>{r=!1});return}ne+=B}e.infinite===!0&&i.length!==0&&N!==-1&&N!==i.length&&T(B,B===-1?i.length:-1)}function M(){const B=x(e.modelValue);return l.value!==B&&(l.value=B),!0}function $(){const B=v(e.modelValue)===!0&&M()&&i[l.value];return e.keepAlive===!0?[j(Sh,I.value,[j(C.value===!0?a(_.value,()=>({...Pu,name:_.value})):Pu,{key:_.value,style:h.value},()=>B)])]:[j("div",{class:"q-panel scroll",style:h.value,key:_.value,role:"tabpanel"},[B])]}function z(){if(i.length!==0)return e.animated===!0?[j(Jt,{name:s.value},$)]:$()}function O(B){return i=zb(tt(B.default,[])).filter(N=>N.props!==null&&N.props.slot===void 0&&v(N.props.name)===!0),i.length}function Y(){return i}return Object.assign(n,{next:g,previous:y,goTo:w}),{panelIndex:l,panelDirectives:c,updatePanelsList:O,updatePanelIndex:M,getPanelContent:z,getEnabledPanels:L,getPanels:Y,isValidPanelName:v,keepAliveProps:I,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:T,goToPanel:w,nextPanel:g,previousPanel:y}}const Kf=Te({name:"QTabPanels",props:{...Jae,...Rt},emits:Gae,setup(e,{slots:t}){const n=Oe(),a=Ot(e,n.proxy.$q),{updatePanelsList:o,getPanelContent:i,panelDirectives:r}=Kae(),s=E(()=>"q-tab-panels q-panel-parent"+(a.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(t),Ns("div",{class:s.value},i(),"pan",e.swipeable,()=>r.value))}}),Yf=Te({name:"QTabPanel",props:Wae,setup(e,{slots:t}){return()=>j("div",{class:"q-tab-panel",role:"tabpanel"},tt(t.default))}}),Yae={name:"ShowcasePanelWithTabs",order:1,components:{JPanel:qn,QCheckbox:Gf,QTabs:ll,QTab:cl,QTabPanels:Kf,QTabPanel:Yf},data:()=>({tab:"overview",inlineLabel:!1}),label:"Panel with Tabs",icon:"dashboard",apiJson:lr,importName:"JPanel",code:null};function Zae(e,t,n,a,o,i){const r=G("QCheckbox"),s=G("QTab"),l=G("QTabs"),u=G("QTabPanel"),c=G("QTabPanels"),d=G("JPanel");return D(),pe(d,{"icon-color":"var(--q-info)","footer-text":"Last updated: just now"},{footer:S(()=>[p(r,{modelValue:e.inlineLabel,"onUpdate:modelValue":t[0]||(t[0]=f=>e.inlineLabel=f),label:"Inline Label",color:"primary"},null,8,["modelValue"])]),header:S(()=>[p(l,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=f=>e.tab=f),dense:"","no-caps":"","active-color":"accent","indicator-color":"accent","inline-label":e.inlineLabel,class:"q-mt-sm"},{default:S(()=>[p(s,{name:"overview",icon:"dashboard",label:"Overview"}),p(s,{name:"systems",icon:"memory",label:"Systems"}),p(s,{name:"crew",icon:"groups",label:"Crew"}),p(s,{name:"logs",icon:"description",label:"Logs",alert:"warning"})]),_:1},8,["modelValue","inline-label"])]),default:S(()=>[p(c,{modelValue:e.tab,"onUpdate:modelValue":t[2]||(t[2]=f=>e.tab=f),animated:"","transition-prev":"fade","transition-next":"fade"},{default:S(()=>[p(u,{name:"overview"},{default:S(()=>[...t[3]||(t[3]=[b("div",{class:"text-h6"},"Overview",-1),W(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1}),p(u,{name:"systems"},{default:S(()=>[...t[4]||(t[4]=[b("div",{class:"text-h6"},"Systems",-1),W(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1}),p(u,{name:"crew"},{default:S(()=>[...t[5]||(t[5]=[b("div",{class:"text-h6"},"Crew",-1),W(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1}),p(u,{name:"logs"},{default:S(()=>[...t[6]||(t[6]=[b("div",{class:"text-h6"},"Logs",-1),W(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})}const Xae=Be(Yae,[["render",Zae]]),eie=Object.freeze(Object.defineProperty({__proto__:null,default:Xae},Symbol.toStringTag,{value:"Module"})),tie="component",nie={docsUrl:"https://v2.quasar.dev/vue-components/checkbox"},oie={"model-value":{type:["Any","Array"],default:"null",desc:"Model of the component; use v-model directive",required:!0,category:"model"},val:{type:"Any",desc:"Works when model is Array. Value to add/remove when ticked/unticked",category:"model"},"true-value":{type:"Any",default:"true",desc:"What model value should be considered as checked/on?",category:"model",required:!1},"false-value":{type:"Any",default:"false",desc:"What model value should be considered as unchecked/off?",category:"model",required:!1},label:{type:"String",desc:"Label to display along the component",category:"label"},"left-label":{type:"Boolean",desc:"Label should be displayed on the left side",category:"label"},"checked-icon":{type:"String",desc:"Icon to use when the model is truthy",category:"icons"},"unchecked-icon":{type:"String",desc:"Icon to use when the toggle is falsy",category:"icons"},"indeterminate-icon":{type:"String",desc:"Icon to use when the model is indeterminate",category:"icons"},"toggle-indeterminate":{type:"Boolean",desc:"Toggle through the indeterminate state too on click",category:"behavior"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"keep-color":{type:"Boolean",desc:"Keep color when unticked/off",category:"behavior"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},aie={default:{desc:"Default slot can be used as label, unless 'label' prop is specified"}},iie={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},rie={type:tie,meta:nie,props:oie,slots:aie,events:iie},sie={name:"ShowcaseQuasarCheckbox",components:{QCheckbox:Gf},label:"Quasar Checkbox",icon:"edit_note",apiJson:rie,importName:"QCheckbox",importFrom:"quasar",data(){return{nav:!0,comms:!1,life:!0,indet:null}}},lie={class:"jShowcase_row showcaseVertical"};function cie(e,t,n,a,o,i){const r=G("QCheckbox");return D(),Z("div",lie,[p(r,{modelValue:o.nav,"onUpdate:modelValue":t[0]||(t[0]=s=>o.nav=s),label:"Navigation",color:"primary"},null,8,["modelValue"]),p(r,{modelValue:o.comms,"onUpdate:modelValue":t[1]||(t[1]=s=>o.comms=s),label:"Communications",color:"accent"},null,8,["modelValue"]),p(r,{modelValue:o.life,"onUpdate:modelValue":t[2]||(t[2]=s=>o.life=s),label:"Life support",color:"positive"},null,8,["modelValue"]),p(r,{"model-value":!0,label:"Locked system",color:"info",disable:""}),p(r,{modelValue:o.indet,"onUpdate:modelValue":t[3]||(t[3]=s=>o.indet=s),label:"Indeterminate",color:"secondary","toggle-indeterminate":""},null,8,["modelValue"])])}const uie=Be(sie,[["render",cie],["__scopeId","data-v-8da15585"]]),die=Object.freeze(Object.defineProperty({__proto__:null,default:uie},Symbol.toStringTag,{value:"Module"})),pie="component",fie={docsUrl:"https://v2.quasar.dev/vue-components/input"},mie={"model-value":{type:["String","Number","null"],desc:"Model of the component; use v-model directive",required:!0,category:"model"},type:{type:"String",default:"'text'",desc:"Input type (text, password, textarea, email, search, tel, file, number, url, time, date)",category:"general"},label:{type:"String",desc:"A text label that will float above the input field",category:"content"},hint:{type:"String",desc:"Helper text below the field",category:"content"},"hide-hint":{type:"Boolean",desc:"Hide hint when field is not focused",category:"content"},placeholder:{type:"String",desc:"Input placeholder text",category:"content"},prefix:{type:"String",desc:"Prefix text",category:"content"},suffix:{type:"String",desc:"Suffix text",category:"content"},"shadow-text":{type:"String",desc:"Shadow text displayed at the end of the input",category:"content"},"stack-label":{type:"Boolean",desc:"Force the label to always be visible",category:"content"},"label-color":{type:"String",desc:"Label color from the Quasar Color Palette",category:"style"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"bg-color":{type:"String",desc:"Background color from the Quasar Color Palette",category:"style"},filled:{type:"Boolean",desc:"Use filled design",category:"style"},outlined:{type:"Boolean",desc:"Use outlined design",category:"style"},borderless:{type:"Boolean",desc:"Use borderless design",category:"style"},standout:{type:["Boolean","String"],desc:"Use standout design",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},square:{type:"Boolean",desc:"Removes border-radius",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},clearable:{type:"Boolean",desc:"Appends clearable icon when a value is set",category:"behavior"},counter:{type:"Boolean",desc:"Show a character counter at the bottom",category:"content"},maxlength:{type:["String","Number"],desc:"Specify a max length of model",category:"model"},autogrow:{type:"Boolean",desc:"Make field autogrow along with its content (uses textarea)",category:"content"},autofocus:{type:"Boolean",desc:"Focus field on initial component render",category:"behavior"},debounce:{type:["String","Number"],desc:"Debounce amount (ms) when updating model",category:"model"},loading:{type:"Boolean",desc:"Signals a process is in progress by displaying a spinner",category:"behavior"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"}},hie={default:{desc:"Field main content"},prepend:{desc:"Prepend inner field; suggestion: QIcon, QBtn"},append:{desc:"Append to inner field; suggestion: QIcon, QBtn"},before:{desc:"Prepend outer field; suggestion: QIcon, QBtn"},after:{desc:"Append outer field; suggestion: QIcon, QBtn"},label:{desc:"Custom label; overrides the 'label' prop if used"},hint:{desc:"Custom hint content"},counter:{desc:"Custom counter content"},error:{desc:"Custom error content"},loading:{desc:"Override default spinner when loading"}},gie={"update:model-value":{desc:"Emitted when the model value changes"},focus:{desc:"Emitted when the field receives focus"},blur:{desc:"Emitted when the field loses focus"},clear:{desc:"Emitted when the clearable icon is clicked"}},vie={type:pie,meta:fie,props:mie,slots:hie,events:gie},bie={name:"ShowcaseQuasarInput",components:{QInput:sl,QIcon:Ve},label:"Quasar Input",icon:"edit_note",apiJson:vie,importName:"QInput",importFrom:"quasar",data(){return{basic:"NCC-1701",outlined:"",filled:"",standout:"",roundedVal:"",squareVal:"",denseVal:"",borderlessVal:"Borderless text",search:"",credits:"500",clearableVal:"Clear me",password:"secret",showPwd:!1,hinted:"",counted:"",textarea:"Captain's log, stardate 41153.7.",autogrow:""}}},_ie={class:"jShowcase_row jShowcase_column showcaseInput"},yie={class:"jShowcase_group"},wie={class:"jShowcase_items"},Sie={class:"jShowcase_group"},kie={class:"jShowcase_items"},xie={class:"jShowcase_group"},Cie={class:"jShowcase_items"},Qie={class:"jShowcase_group"},Aie={class:"jShowcase_items"},Iie={class:"jShowcase_group"},qie={class:"jShowcase_items"},Tie={class:"jShowcase_group"},Lie={class:"jShowcase_items"};function Eie(e,t,n,a,o,i){const r=G("QInput"),s=G("QIcon");return D(),Z("div",_ie,[b("div",yie,[t[17]||(t[17]=b("span",{class:"jShowcase_title"},"Styles",-1)),b("div",wie,[p(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=l=>o.basic=l),label:"Default",color:"primary",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.outlined,"onUpdate:modelValue":t[1]||(t[1]=l=>o.outlined=l),label:"Outlined",color:"primary",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.filled,"onUpdate:modelValue":t[2]||(t[2]=l=>o.filled=l),label:"Filled",color:"primary",filled:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.standout,"onUpdate:modelValue":t[3]||(t[3]=l=>o.standout=l),label:"Standout",color:"primary",standout:"",class:"showcaseInput_field"},null,8,["modelValue"])])]),b("div",Sie,[t[18]||(t[18]=b("span",{class:"jShowcase_title"},"Shapes",-1)),b("div",kie,[p(r,{modelValue:o.roundedVal,"onUpdate:modelValue":t[4]||(t[4]=l=>o.roundedVal=l),label:"Rounded",color:"accent",rounded:"",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.squareVal,"onUpdate:modelValue":t[5]||(t[5]=l=>o.squareVal=l),label:"Square",color:"accent",square:"",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.denseVal,"onUpdate:modelValue":t[6]||(t[6]=l=>o.denseVal=l),label:"Dense",color:"accent",dense:"",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.borderlessVal,"onUpdate:modelValue":t[7]||(t[7]=l=>o.borderlessVal=l),label:"Borderless",color:"accent",borderless:"",class:"showcaseInput_field"},null,8,["modelValue"])])]),b("div",xie,[t[19]||(t[19]=b("span",{class:"jShowcase_title"},"Decorations",-1)),b("div",Cie,[p(r,{modelValue:o.search,"onUpdate:modelValue":t[8]||(t[8]=l=>o.search=l),label:"Search",color:"secondary",outlined:"",class:"showcaseInput_field"},{prepend:S(()=>[p(s,{name:"search"})]),_:1},8,["modelValue"]),p(r,{modelValue:o.credits,"onUpdate:modelValue":t[9]||(t[9]=l=>o.credits=l),label:"Credits",color:"secondary",outlined:"",prefix:"₡",suffix:".00",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.clearableVal,"onUpdate:modelValue":t[10]||(t[10]=l=>o.clearableVal=l),label:"Clearable",color:"secondary",outlined:"",clearable:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.password,"onUpdate:modelValue":t[12]||(t[12]=l=>o.password=l),label:"Password",type:o.showPwd?"text":"password",color:"secondary",outlined:"",class:"showcaseInput_field"},{append:S(()=>[p(s,{name:o.showPwd?"visibility":"visibility_off",class:"cursor-pointer",onClick:t[11]||(t[11]=l=>o.showPwd=!o.showPwd)},null,8,["name"])]),_:1},8,["modelValue","type"])])]),b("div",Qie,[t[20]||(t[20]=b("span",{class:"jShowcase_title"},"Hints & Counter",-1)),b("div",Aie,[p(r,{modelValue:o.hinted,"onUpdate:modelValue":t[13]||(t[13]=l=>o.hinted=l),label:"With hint",hint:"Enter callsign",color:"info",outlined:"",class:"showcaseInput_field"},null,8,["modelValue"]),p(r,{modelValue:o.counted,"onUpdate:modelValue":t[14]||(t[14]=l=>o.counted=l),label:"With counter",color:"info",outlined:"",counter:"",maxlength:20,class:"showcaseInput_field"},null,8,["modelValue"])])]),b("div",Iie,[t[21]||(t[21]=b("span",{class:"jShowcase_title"},"Textarea",-1)),b("div",qie,[p(r,{modelValue:o.textarea,"onUpdate:modelValue":t[15]||(t[15]=l=>o.textarea=l),label:"Ship log",type:"textarea",color:"accent",outlined:"",class:"showcaseInput_field showcaseInput_fieldWide"},null,8,["modelValue"]),p(r,{modelValue:o.autogrow,"onUpdate:modelValue":t[16]||(t[16]=l=>o.autogrow=l),label:"Autogrow",autogrow:"",color:"accent",outlined:"",class:"showcaseInput_field showcaseInput_fieldWide"},null,8,["modelValue"])])]),b("div",Tie,[t[22]||(t[22]=b("span",{class:"jShowcase_title"},"States",-1)),b("div",Lie,[p(r,{"model-value":"Locked",label:"Disabled",color:"negative",disable:"",outlined:"",class:"showcaseInput_field"}),p(r,{"model-value":"Read only",label:"Readonly",color:"warning",readonly:"",outlined:"",class:"showcaseInput_field"}),p(r,{"model-value":"",label:"Loading",color:"accent",loading:"",outlined:"",class:"showcaseInput_field"})])])])}const Bie=Be(bie,[["render",Eie],["__scopeId","data-v-4d7319b7"]]),Die=Object.freeze(Object.defineProperty({__proto__:null,default:Bie},Symbol.toStringTag,{value:"Module"})),Pie=()=>j("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[j("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),j("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),jie=Te({name:"QRadio",props:{...Rt,...Hn,...po,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:t,emit:n}){const{proxy:a}=Oe(),o=Ot(e,a.$q),i=Un(e,Hf),r=be(null),{refocusTargetEl:s,refocusTarget:l}=Vf(e,r),u=E(()=>$e(e.modelValue)===$e(e.val)),c=E(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(o.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),d=E(()=>{const v=e.color!==void 0&&(e.keepColor===!0||u.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${u.value===!0?"truthy":"falsy"}${v}`}),f=E(()=>(u.value===!0?e.checkedIcon:e.uncheckedIcon)||null),h=E(()=>e.disable===!0?-1:e.tabindex||0),_=E(()=>{const v={type:"radio"};return e.name!==void 0&&Object.assign(v,{".checked":u.value===!0,"^checked":u.value===!0?"checked":void 0,name:e.name,value:e.val}),v}),I=Ma(_);function C(v){v!==void 0&&(He(v),l(v)),e.disable!==!0&&u.value!==!0&&n("update:modelValue",e.val,v)}function g(v){(v.keyCode===13||v.keyCode===32)&&He(v)}function y(v){(v.keyCode===13||v.keyCode===32)&&C(v)}Object.assign(a,{set:C});const w=Pie();return()=>{const v=f.value!==null?[j("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[j(Ve,{class:"q-radio__icon",name:f.value})])]:[w];e.disable!==!0&&I(v,"unshift"," q-radio__native q-ma-none q-pa-none");const x=[j("div",{class:d.value,style:i.value,"aria-hidden":"true"},v)];s.value!==null&&x.push(s.value);const L=e.label!==void 0?Ut(t.default,[e.label]):tt(t.default);return L!==void 0&&x.push(j("div",{class:"q-radio__label q-anchor--skip"},L)),j("div",{ref:r,class:c.value,tabindex:h.value,role:"radio","aria-label":e.label,"aria-checked":u.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:C,onKeydown:g,onKeyup:y},x)}}}),Mie="component",$ie={docsUrl:"https://v2.quasar.dev/vue-components/radio"},Rie={"model-value":{type:["Any"],desc:"Model of the component; use v-model directive",required:!0,category:"model"},val:{type:["Any"],desc:"The actual value of the option with which model value is changed",required:!0,category:"model"},label:{type:"String",desc:"Label to display along the radio control",category:"label"},"left-label":{type:"Boolean",desc:"Label should be displayed on the left side",category:"label"},"checked-icon":{type:"String",desc:"Icon to use when selected",category:"icons"},"unchecked-icon":{type:"String",desc:"Icon to use when un-selected",category:"icons"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"keep-color":{type:"Boolean",desc:"Keep color when unticked",category:"behavior"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},Oie={default:{desc:"Default slot can be used as label, unless 'label' prop is specified"}},Fie={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},zie={type:Mie,meta:$ie,props:Rie,slots:Oie,events:Fie},Nie={name:"ShowcaseQuasarRadio",components:{QRadio:jie},label:"Quasar Radio",icon:"edit_note",apiJson:zie,importName:"QRadio",importFrom:"quasar",data(){return{selected:"shields"}}},Vie={class:"jShowcase_row showcaseVertical"};function Hie(e,t,n,a,o,i){const r=G("QRadio");return D(),Z("div",Vie,[p(r,{modelValue:o.selected,"onUpdate:modelValue":t[0]||(t[0]=s=>o.selected=s),val:"shields",label:"Shields",color:"primary"},null,8,["modelValue"]),p(r,{modelValue:o.selected,"onUpdate:modelValue":t[1]||(t[1]=s=>o.selected=s),val:"weapons",label:"Weapons",color:"accent"},null,8,["modelValue"]),p(r,{modelValue:o.selected,"onUpdate:modelValue":t[2]||(t[2]=s=>o.selected=s),val:"engines",label:"Engines",color:"secondary"},null,8,["modelValue"]),p(r,{modelValue:o.selected,"onUpdate:modelValue":t[3]||(t[3]=s=>o.selected=s),val:"offline",label:"Offline",color:"negative",disable:""},null,8,["modelValue"])])}const Uie=Be(Nie,[["render",Hie],["__scopeId","data-v-853e5385"]]),Wie=Object.freeze(Object.defineProperty({__proto__:null,default:Uie},Symbol.toStringTag,{value:"Module"})),Jie=Te({name:"QRating",props:{...Hn,...po,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=Oe(),o=Un(e),i=wf(e),r=Ma(i),s=be(0);let l={};const u=E(()=>e.readonly!==!0&&e.disable!==!0),c=E(()=>`q-rating row inline items-center q-rating--${u.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),d=E(()=>{const w=Array.isArray(e.icon)===!0?e.icon.length:0,v=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,x=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,L=Array.isArray(e.color)===!0?e.color.length:0,q=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,T=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:w,icon:w>0?e.icon[w-1]:e.icon,selIconLen:v,selIcon:v>0?e.iconSelected[v-1]:e.iconSelected,halfIconLen:x,halfIcon:x>0?e.iconHalf[v-1]:e.iconHalf,colorLen:L,color:L>0?e.color[L-1]:e.color,selColorLen:q,selColor:q>0?e.colorSelected[q-1]:e.colorSelected,halfColorLen:T,halfColor:T>0?e.colorHalf[T-1]:e.colorHalf}}),f=E(()=>{if(typeof e.iconAriaLabel=="string"){const w=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return v=>`${w}${v}`}if(Array.isArray(e.iconAriaLabel)===!0){const w=e.iconAriaLabel.length;if(w>0)return v=>e.iconAriaLabel[Math.min(v,w)-1]}return(w,v)=>`${v} ${w}`}),h=E(()=>{const w=[],v=d.value,x=Math.ceil(e.modelValue),L=u.value===!0?0:null,q=e.iconHalf===void 0||x===e.modelValue?-1:x;for(let T=1;T<=e.max;T++){const M=s.value===0&&e.modelValue>=T||s.value>0&&s.value>=T,$=q===T&&s.value<T,z=s.value>0&&($===!0?x:e.modelValue)>=T&&s.value<T,O=$===!0?T<=v.halfColorLen?e.colorHalf[T-1]:v.halfColor:v.selColor!==void 0&&M===!0?T<=v.selColorLen?e.colorSelected[T-1]:v.selColor:T<=v.colorLen?e.color[T-1]:v.color,Y=($===!0?T<=v.halfIconLen?e.iconHalf[T-1]:v.halfIcon:v.selIcon!==void 0&&(M===!0||z===!0)?T<=v.selIconLen?e.iconSelected[T-1]:v.selIcon:T<=v.iconLen?e.icon[T-1]:v.icon)||a.iconSet.rating.icon;w.push({name:($===!0?T<=v.halfIconLen?e.iconHalf[T-1]:v.halfIcon:v.selIcon!==void 0&&(M===!0||z===!0)?T<=v.selIconLen?e.iconSelected[T-1]:v.selIcon:T<=v.iconLen?e.icon[T-1]:v.icon)||a.iconSet.rating.icon,attrs:{tabindex:L,role:"radio","aria-checked":e.modelValue===T?"true":"false","aria-label":f.value(T,Y)},iconClass:"q-rating__icon"+(M===!0||$===!0?" q-rating__icon--active":"")+(z===!0?" q-rating__icon--exselected":"")+(s.value===T?" q-rating__icon--hovered":"")+(O!==void 0?` text-${O}`:"")})}return w}),_=E(()=>{const w={role:"radiogroup"};return e.disable===!0&&(w["aria-disabled"]="true"),e.readonly===!0&&(w["aria-readonly"]="true"),w});function I(w){if(u.value===!0){const v=On(parseInt(w,10),1,parseInt(e.max,10)),x=e.noReset!==!0&&e.modelValue===v?0:v;x!==e.modelValue&&n("update:modelValue",x),s.value=0}}function C(w){u.value===!0&&(s.value=w)}function g(w,v){switch(w.keyCode){case 13:case 32:return I(v),He(w);case 37:case 40:return l[`rt${v-1}`]&&l[`rt${v-1}`].focus(),He(w);case 39:case 38:return l[`rt${v+1}`]&&l[`rt${v+1}`].focus(),He(w)}}function y(){s.value=0}return Gi(()=>{l={}}),()=>{const w=[];return h.value.forEach(({iconClass:v,name:x,attrs:L},q)=>{const T=q+1;w.push(j("div",{key:T,ref:M=>{l[`rt${T}`]=M},class:"q-rating__icon-container flex flex-center",...L,onClick(){I(T)},onMouseover(){C(T)},onMouseout:y,onFocus(){C(T)},onBlur:y,onKeyup(M){g(M,T)}},Ut(t[`tip-${T}`],[j(Ve,{class:v,name:x})])))}),e.name!==void 0&&e.disable!==!0&&r(w,"push"),j("div",{class:c.value,style:o.value,..._.value},w)}}}),Gie="component",Kie={docsUrl:"https://v2.quasar.dev/vue-components/rating"},Yie={"model-value":{type:"Number",desc:"Model of the component; use v-model directive",required:!0,category:"model"},max:{type:["Number","String"],default:"5",desc:"Number of icons to display",category:"general",required:!1},icon:{type:["String","Array"],desc:"Icon name following Quasar convention; if array, each rating value uses corresponding icon",category:"content"},"icon-selected":{type:["String","Array"],desc:"Icon name to use when selected",category:"content"},"icon-half":{type:["String","Array"],desc:"Icon name to use for half selection",category:"content"},color:{type:["String","Array"],desc:"Color name from the Quasar Color Palette; if array, each value uses corresponding color",category:"style"},"color-selected":{type:["String","Array"],desc:"Color name for selected icons",category:"style"},"color-half":{type:["String","Array"],desc:"Color name for half selected icons",category:"style"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},"no-dimming":{type:"Boolean",desc:"Does not lower opacity for unselected icons",category:"style"},"no-reset":{type:"Boolean",desc:"Disables resetting model to 0 when clicking current value",category:"model"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"}},Zie={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},Xie={type:Gie,meta:Kie,props:Yie,events:Zie},ere={name:"ShowcaseQuasarRating",components:{QRating:Jie},label:"Quasar Rating",icon:"edit_note",apiJson:Xie,importName:"QRating",importFrom:"quasar",data(){return{basic:3,hearts:4,colorful:3}}},tre={class:"jShowcase_row showcaseVertical"},nre={class:"ratingRow"},ore={class:"ratingRow"},are={class:"ratingRow"},ire={class:"ratingRow"};function rre(e,t,n,a,o,i){const r=G("QRating");return D(),Z("div",tre,[b("div",nre,[t[3]||(t[3]=b("span",{class:"ratingLabel"},"Default",-1)),p(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),color:"primary"},null,8,["modelValue"])]),b("div",ore,[t[4]||(t[4]=b("span",{class:"ratingLabel"},"Custom icon",-1)),p(r,{modelValue:o.hearts,"onUpdate:modelValue":t[1]||(t[1]=s=>o.hearts=s),icon:"favorite_border","icon-selected":"favorite",color:"negative"},null,8,["modelValue"])]),b("div",are,[t[5]||(t[5]=b("span",{class:"ratingLabel"},"Per-icon color",-1)),p(r,{modelValue:o.colorful,"onUpdate:modelValue":t[2]||(t[2]=s=>o.colorful=s),color:["negative","warning","warning","positive","positive"],"no-dimming":""},null,8,["modelValue"])]),b("div",ire,[t[6]||(t[6]=b("span",{class:"ratingLabel"},"Large / readonly",-1)),p(r,{"model-value":4,size:"sm",color:"secondary",readonly:""})])])}const sre=Be(ere,[["render",rre],["__scopeId","data-v-9e0f0a97"]]),lre=Object.freeze(Object.defineProperty({__proto__:null,default:sre},Symbol.toStringTag,{value:"Module"})),cre="component",ure={docsUrl:"https://v2.quasar.dev/vue-components/select"},dre={"model-value":{type:"Any",desc:"Model of the component; must be Array if using 'multiple' prop",required:!0,category:"model"},options:{type:"Array",default:"[]",desc:"Array of options the user can select from (strings or objects with label/value/disable)",category:"options"},"option-value":{type:["Function","String"],default:"'value'",desc:"Property of option which holds the value",category:"options"},"option-label":{type:["Function","String"],default:"'label'",desc:"Property of option which holds the label",category:"options"},"option-disable":{type:["Function","String"],default:"'disable'",desc:"Property of option which tells it's disabled",category:"options"},multiple:{type:"Boolean",desc:"Allow multiple selection; model must be Array",category:"selection"},"emit-value":{type:"Boolean",desc:"Update model with the value of the selected option instead of the whole option",category:"model"},"map-options":{type:"Boolean",desc:"Try to map labels of model from options Array",category:"options"},"use-input":{type:"Boolean",desc:"Use an input tag where users can type",category:"content"},"use-chips":{type:"Boolean",desc:"Use QChip to show what is currently selected",category:"selection"},"fill-input":{type:"Boolean",desc:"Fills input with current value; useful with 'hide-selected'",category:"behavior"},"new-value-mode":{type:"String",desc:"Enables creation of new values: 'add', 'add-unique', or 'toggle'",category:"behavior"},"hide-selected":{type:"Boolean",desc:"Hides selection; use underlying input to hold the label",category:"selection"},"hide-dropdown-icon":{type:"Boolean",desc:"Hides dropdown icon",category:"content"},"display-value":{type:["Number","String"],desc:"Override default selection string",category:"selection"},"max-values":{type:["Number","String"],desc:"Max number of selections allowed",category:"selection"},"options-dense":{type:"Boolean",desc:"Dense mode for options list",category:"options"},"options-cover":{type:"Boolean",desc:"Expanded menu will cover the component",category:"options"},"input-debounce":{type:["Number","String"],default:"500",desc:"Debounce the input model update in milliseconds",category:"content"},label:{type:"String",desc:"A text label that will float above the input field",category:"content"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},outlined:{type:"Boolean",desc:"Use outlined design",category:"style"},filled:{type:"Boolean",desc:"Use filled design",category:"style"},standout:{type:["Boolean","String"],desc:"Use standout design",category:"style"},borderless:{type:"Boolean",desc:"Use borderless design",category:"style"},rounded:{type:"Boolean",desc:"Applies a more prominent border-radius",category:"style"},square:{type:"Boolean",desc:"Removes border-radius",category:"style"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},clearable:{type:"Boolean",desc:"Appends clearable icon when a value is set",category:"behavior"},loading:{type:"Boolean",desc:"Signals the user a process is in progress by displaying a spinner",category:"behavior"},behavior:{type:"String",default:"'default'",desc:"Overrides showing as menu on desktop and dialog on mobile",category:"behavior"},"popup-content-class":{type:"String",desc:"Class definitions for the popup content",category:"style"}},pre={selected:{desc:"Override default selection slot"},"selected-item":{desc:"Override default per-item selection slot (scoped)"},option:{desc:"Customize how options are rendered (scoped)"},"no-option":{desc:"What the menu displays when no options match the filter"},loading:{desc:"Override default spinner when in loading state"},"before-options":{desc:"Content rendered before the list of options"},"after-options":{desc:"Content rendered after the list of options"}},fre={"update:model-value":{desc:"Emitted when the model value changes"},"input-value":{desc:"Emitted when the text input value changes"},filter:{desc:"Emitted when user wants to filter options"},add:{desc:"Emitted when an option is added to selection"},remove:{desc:"Emitted when an option is removed from selection"},"new-value":{desc:"Emitted when a new value has been created"},"popup-show":{desc:"Emitted when the options menu/dialog is shown"},"popup-hide":{desc:"Emitted when the options menu/dialog is hidden"}},mre={type:cre,meta:ure,props:dre,slots:pre,events:fre},hre={name:"ShowcaseQuasarSelect",components:{QSelect:dl},label:"Quasar Select",icon:"edit_note",apiJson:mre,importName:"QSelect",importFrom:"quasar",data(){return{basic:"Shields",basicOutlined:null,basicFilled:null,crew:["Helm","Tactical"],sector:"alpha",dense:null,rounded:null,clearable:"Weapons",shipSystems:["Shields","Weapons","Engines","Sensors","Communications","Life support"],crewOptions:["Helm","Tactical","Science","Engineering","Medical","Operations"],sectorOptions:[{label:"Alpha Quadrant",value:"alpha"},{label:"Beta Quadrant",value:"beta"},{label:"Gamma Quadrant",value:"gamma"},{label:"Delta Quadrant",value:"delta",disable:!0}]}}},gre={class:"jShowcase_row jShowcase_column showcaseSelect"},vre={class:"jShowcase_group"},bre={class:"jShowcase_items"},_re={class:"jShowcase_group"},yre={class:"jShowcase_items"},wre={class:"jShowcase_group"},Sre={class:"jShowcase_items"},kre={class:"jShowcase_group"},xre={class:"jShowcase_items"},Cre={class:"jShowcase_group"},Qre={class:"jShowcase_items"};function Are(e,t,n,a,o,i){const r=G("QSelect");return D(),Z("div",gre,[b("div",vre,[t[8]||(t[8]=b("span",{class:"jShowcase_title"},"Basic",-1)),b("div",bre,[p(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),options:o.shipSystems,label:"Ship system",color:"primary",class:"showcaseSelect_field"},null,8,["modelValue","options"]),p(r,{modelValue:o.basicOutlined,"onUpdate:modelValue":t[1]||(t[1]=s=>o.basicOutlined=s),options:o.shipSystems,label:"Outlined",color:"primary",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"]),p(r,{modelValue:o.basicFilled,"onUpdate:modelValue":t[2]||(t[2]=s=>o.basicFilled=s),options:o.shipSystems,label:"Filled",color:"primary",filled:"",class:"showcaseSelect_field"},null,8,["modelValue","options"])])]),b("div",_re,[t[9]||(t[9]=b("span",{class:"jShowcase_title"},"Multiple + Chips",-1)),b("div",yre,[p(r,{modelValue:o.crew,"onUpdate:modelValue":t[3]||(t[3]=s=>o.crew=s),options:o.crewOptions,label:"Assign crew",color:"accent",multiple:"","use-chips":"",outlined:"",class:"showcaseSelect_field showcaseSelect_fieldWide"},null,8,["modelValue","options"])])]),b("div",wre,[t[10]||(t[10]=b("span",{class:"jShowcase_title"},"Object Options",-1)),b("div",Sre,[p(r,{modelValue:o.sector,"onUpdate:modelValue":t[4]||(t[4]=s=>o.sector=s),options:o.sectorOptions,label:"Destination sector",color:"secondary","emit-value":"","map-options":"",outlined:"",class:"showcaseSelect_field showcaseSelect_fieldWide"},null,8,["modelValue","options"])])]),b("div",kre,[t[11]||(t[11]=b("span",{class:"jShowcase_title"},"Variants",-1)),b("div",xre,[p(r,{modelValue:o.dense,"onUpdate:modelValue":t[5]||(t[5]=s=>o.dense=s),options:o.shipSystems,label:"Dense",color:"info",dense:"",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"]),p(r,{modelValue:o.rounded,"onUpdate:modelValue":t[6]||(t[6]=s=>o.rounded=s),options:o.shipSystems,label:"Rounded",color:"info",rounded:"",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"]),p(r,{modelValue:o.clearable,"onUpdate:modelValue":t[7]||(t[7]=s=>o.clearable=s),options:o.shipSystems,label:"Clearable",color:"info",clearable:"",outlined:"",class:"showcaseSelect_field"},null,8,["modelValue","options"])])]),b("div",Cre,[t[12]||(t[12]=b("span",{class:"jShowcase_title"},"States",-1)),b("div",Qre,[p(r,{"model-value":"Engines",options:o.shipSystems,label:"Disabled",color:"negative",disable:"",outlined:"",class:"showcaseSelect_field"},null,8,["options"]),p(r,{"model-value":"Shields",options:o.shipSystems,label:"Readonly",color:"warning",readonly:"",outlined:"",class:"showcaseSelect_field"},null,8,["options"]),p(r,{options:[],label:"Loading",color:"accent",loading:"",outlined:"",class:"showcaseSelect_field"})])])])}const Ire=Be(hre,[["render",Are],["__scopeId","data-v-6fa5a84e"]]),qre=Object.freeze(Object.defineProperty({__proto__:null,default:Ire},Symbol.toStringTag,{value:"Module"}));function Jr(e,t,n){const a=Vn(e);let o,i=a.left-t.event.x,r=a.top-t.event.y,s=Math.abs(i),l=Math.abs(r);const u=t.direction;u.horizontal===!0&&u.vertical!==!0?o=i<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?o=r<0?"up":"down":u.up===!0&&r<0?(o="up",s>l&&(u.left===!0&&i<0?o="left":u.right===!0&&i>0&&(o="right"))):u.down===!0&&r>0?(o="down",s>l&&(u.left===!0&&i<0?o="left":u.right===!0&&i>0&&(o="right"))):u.left===!0&&i<0?(o="left",s<l&&(u.up===!0&&r<0?o="up":u.down===!0&&r>0&&(o="down"))):u.right===!0&&i>0&&(o="right",s<l&&(u.up===!0&&r<0?o="up":u.down===!0&&r>0&&(o="down")));let c=!1;if(o===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};o=t.event.lastDir,c=!0,o==="left"||o==="right"?(a.left-=i,s=0,i=0):(a.top-=r,l=0,r=0)}return{synthetic:c,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:a,direction:o,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:s,y:l},offset:{x:i,y:r},delta:{x:a.left-t.event.lastX,y:a.top-t.event.lastY}}}}let Tre=0;const Lre=er({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(n.mouse!==!0&&Ue.has.touch!==!0)return;function a(i,r){n.mouse===!0&&r===!0?He(i):(n.stop===!0&&Et(i),n.prevent===!0&&At(i))}const o={uid:"qvtp_"+Tre++,handler:t,modifiers:n,direction:Pi(n),noop:Bt,mouseStart(i){ji(i,o)&&fp(i)&&(jt(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(i,!0))},touchStart(i){if(ji(i,o)){const r=i.target;jt(o,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),o.start(i)}},start(i,r){if(Ue.is.firefox===!0&&Ro(e,!0),o.lastEvt=i,r===!0||n.stop===!0){if(o.direction.all!==!0&&(r!==!0||o.modifiers.mouseAllDir!==!0&&o.modifiers.mousealldir!==!0)){const u=i.type.indexOf("mouse")!==-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&At(u),i.cancelBubble===!0&&Et(u),Object.assign(u,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[o.uid]:i.qClonedBy.concat(o.uid)}),o.initialEvent={target:i.target,event:u}}Et(i)}const{left:s,top:l}=Vn(i);o.event={x:s,y:l,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:l}},move(i){if(o.event===void 0)return;const r=Vn(i),s=r.left-o.event.x,l=r.top-o.event.y;if(s===0&&l===0)return;o.lastEvt=i;const u=o.event.mouse===!0,c=()=>{a(i,u);let h;n.preserveCursor!==!0&&n.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ia(),o.styleCleanup=_=>{if(o.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),u===!0){const I=()=>{document.body.classList.remove("no-pointer-events--children")};_!==void 0?setTimeout(()=>{I(),_()},50):I()}else _!==void 0&&_()}};if(o.event.detected===!0){o.event.isFirst!==!0&&a(i,o.event.mouse);const{payload:h,synthetic:_}=Jr(i,o,!1);h!==void 0&&(o.handler(h)===!1?o.end(i):(o.styleCleanup===void 0&&o.event.isFirst===!0&&c(),o.event.lastX=h.position.left,o.event.lastY=h.position.top,o.event.lastDir=_===!0?void 0:h.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||u===!0&&(o.modifiers.mouseAllDir===!0||o.modifiers.mousealldir===!0)){c(),o.event.detected=!0,o.move(i);return}const d=Math.abs(s),f=Math.abs(l);d!==f&&(o.direction.horizontal===!0&&d>f||o.direction.vertical===!0&&d<f||o.direction.up===!0&&d<f&&l<0||o.direction.down===!0&&d<f&&l>0||o.direction.left===!0&&d>f&&s<0||o.direction.right===!0&&d>f&&s>0?(o.event.detected=!0,o.move(i)):o.end(i,!0))},end(i,r){var s;if(o.event!==void 0){if(mn(o,"temp"),Ue.is.firefox===!0&&Ro(e,!1),r===!0)(s=o.styleCleanup)==null||s.call(o),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(Jr(i===void 0?o.lastEvt:i,o).payload);const{payload:l}=Jr(i===void 0?o.lastEvt:i,o,!0),u=()=>{o.handler(l)};o.styleCleanup!==void 0?o.styleCleanup(u):u()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};if(e.__qtouchpan=o,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";jt(o,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}Ue.has.touch===!0&&jt(o,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=Pi(t.modifiers))},beforeUnmount(e){var n;const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),mn(t,"main"),mn(t,"temp"),Ue.is.firefox===!0&&Ro(e,!1),(n=t.styleCleanup)==null||n.call(t),delete e.__qtouchpan)}}),ju="q-slider__marker-labels",Ere=e=>({value:e}),Bre=({marker:e})=>j("div",{key:e.value,style:e.style,class:e.classes},e.label),Zf=[34,37,40,33,39,38],Dre={...Rt,...po,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Pre=["pan","update:modelValue","change"];function jre({updateValue:e,updatePosition:t,getDragging:n,formAttrs:a}){const{props:o,emit:i,slots:r,proxy:{$q:s}}=Oe(),l=Ot(o,s),u=Ma(a),c=be(!1),d=be(!1),f=be(!1),h=be(!1),_=E(()=>o.vertical===!0?"--v":"--h"),I=E(()=>"-"+(o.switchLabelSide===!0?"switched":"standard")),C=E(()=>o.vertical===!0?o.reverse===!0:o.reverse!==(s.lang.rtl===!0)),g=E(()=>isNaN(o.innerMin)===!0||o.innerMin<o.min?o.min:o.innerMin),y=E(()=>isNaN(o.innerMax)===!0||o.innerMax>o.max?o.max:o.innerMax),w=E(()=>o.disable!==!0&&o.readonly!==!0&&g.value<y.value),v=E(()=>{if(o.step===0)return Le=>Le;const ce=(String(o.step).trim().split(".")[1]||"").length;return Le=>parseFloat(Le.toFixed(ce))}),x=E(()=>o.step===0?1:o.step),L=E(()=>w.value===!0?o.tabindex||0:-1),q=E(()=>o.max-o.min),T=E(()=>y.value-g.value),M=E(()=>V(g.value)),$=E(()=>V(y.value)),z=E(()=>o.vertical===!0?C.value===!0?"bottom":"top":C.value===!0?"right":"left"),O=E(()=>o.vertical===!0?"height":"width"),Y=E(()=>o.vertical===!0?"width":"height"),B=E(()=>o.vertical===!0?"vertical":"horizontal"),N=E(()=>{const ce={role:"slider","aria-valuemin":g.value,"aria-valuemax":y.value,"aria-orientation":B.value,"data-step":o.step};return o.disable===!0?ce["aria-disabled"]="true":o.readonly===!0&&(ce["aria-readonly"]="true"),ce}),ne=E(()=>`q-slider q-slider${_.value} q-slider--${c.value===!0?"":"in"}active inline no-wrap `+(o.vertical===!0?"row":"column")+(o.disable===!0?" disabled":" q-slider--enabled"+(w.value===!0?" q-slider--editable":""))+(f.value==="both"?" q-slider--focus":"")+(o.label||o.labelAlways===!0?" q-slider--label":"")+(o.labelAlways===!0?" q-slider--label-always":"")+(l.value===!0?" q-slider--dark":"")+(o.dense===!0?" q-slider--dense q-slider--dense"+_.value:""));function ee(ce){const Le="q-slider__"+ce;return`${Le} ${Le}${_.value} ${Le}${_.value}${I.value}`}function J(ce){const Le="q-slider__"+ce;return`${Le} ${Le}${_.value}`}const ge=E(()=>{const ce=o.selectionColor||o.color;return"q-slider__selection absolute"+(ce!==void 0?` text-${ce}`:"")}),Ie=E(()=>J("markers")+" absolute overflow-hidden"),H=E(()=>J("track-container")),F=E(()=>ee("pin")),le=E(()=>ee("label")),ke=E(()=>ee("text-container")),Qe=E(()=>ee("marker-labels-container")+(o.markerLabelsClass!==void 0?` ${o.markerLabelsClass}`:"")),ie=E(()=>"q-slider__track relative-position no-outline"+(o.trackColor!==void 0?` bg-${o.trackColor}`:"")),m=E(()=>{const ce={[Y.value]:o.trackSize};return o.trackImg!==void 0&&(ce.backgroundImage=`url(${o.trackImg}) !important`),ce}),k=E(()=>"q-slider__inner absolute"+(o.innerTrackColor!==void 0?` bg-${o.innerTrackColor}`:"")),Q=E(()=>{const ce=$.value-M.value,Le={[z.value]:`${100*M.value}%`,[O.value]:ce===0?"2px":`${100*ce}%`};return o.innerTrackImg!==void 0&&(Le.backgroundImage=`url(${o.innerTrackImg}) !important`),Le});function U(ce){const{min:Le,max:Ee,step:ze}=o;let st=Le+ce*(Ee-Le);if(ze>0){const Lt=(st-g.value)%ze;st+=(Math.abs(Lt)>=ze/2?(Lt<0?-1:1)*ze:0)-Lt}return st=v.value(st),On(st,g.value,y.value)}function V(ce){return q.value===0?0:(ce-o.min)/q.value}function A(ce,Le){const Ee=Vn(ce),ze=o.vertical===!0?On((Ee.top-Le.top)/Le.height,0,1):On((Ee.left-Le.left)/Le.width,0,1);return On(C.value===!0?1-ze:ze,M.value,$.value)}const P=E(()=>hv(o.markers)===!0?o.markers:x.value),K=E(()=>{const ce=[],Le=P.value,Ee=o.max;let ze=o.min;do ce.push(ze),ze+=Le;while(ze<Ee);return ce.push(Ee),ce}),re=E(()=>{const ce=` ${ju}${_.value}-`;return ju+`${ce}${o.switchMarkerLabelsSide===!0?"switched":"standard"}${ce}${C.value===!0?"rtl":"ltr"}`}),ae=E(()=>o.markerLabels===!1?null:fe(o.markerLabels).map((ce,Le)=>({index:Le,value:ce.value,label:ce.label||ce.value,classes:re.value+(ce.classes!==void 0?" "+ce.classes:""),style:{...de(ce.value),...ce.style||{}}}))),se=E(()=>({markerList:ae.value,markerMap:oe.value,classes:re.value,getStyle:de})),me=E(()=>{const ce=T.value===0?"2px":100*P.value/T.value;return{...Q.value,backgroundSize:o.vertical===!0?`2px ${ce}%`:`${ce}% 2px`}});function fe(ce){if(ce===!1)return null;if(ce===!0)return K.value.map(Ere);if(typeof ce=="function")return K.value.map(Ee=>{const ze=ce(Ee);return _a(ze)===!0?{...ze,value:Ee}:{value:Ee,label:ze}});const Le=({value:Ee})=>Ee>=o.min&&Ee<=o.max;return Array.isArray(ce)===!0?ce.map(Ee=>_a(Ee)===!0?Ee:{value:Ee}).filter(Le):Object.keys(ce).map(Ee=>{const ze=ce[Ee],st=Number(Ee);return _a(ze)===!0?{...ze,value:st}:{value:st,label:ze}}).filter(Le)}function de(ce){return{[z.value]:`${100*(ce-o.min)/q.value}%`}}const oe=E(()=>{if(o.markerLabels===!1)return null;const ce={};return ae.value.forEach(Le=>{ce[Le.value]=Le}),ce});function X(){if(r["marker-label-group"]!==void 0)return r["marker-label-group"](se.value);const ce=r["marker-label"]||Bre;return ae.value.map(Le=>ce({marker:Le,...se.value}))}const te=E(()=>[[Lre,ue,void 0,{[B.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function ue(ce){ce.isFinal===!0?(h.value!==void 0&&(t(ce.evt),ce.touch===!0&&e(!0),h.value=void 0,i("pan","end")),c.value=!1,f.value=!1):ce.isFirst===!0?(h.value=n(ce.evt),t(ce.evt),e(),c.value=!0,i("pan","start")):(t(ce.evt),e())}function _e(){f.value=!1}function Ae(ce){t(ce,n(ce)),e(),d.value=!0,c.value=!0,document.addEventListener("mouseup",xe,!0)}function xe(){d.value=!1,c.value=!1,e(!0),_e(),document.removeEventListener("mouseup",xe,!0)}function Ce(ce){t(ce,n(ce)),e(!0)}function je(ce){Zf.includes(ce.keyCode)&&e(!0)}function Fe(ce){if(o.vertical===!0)return null;const Le=s.lang.rtl!==o.reverse?1-ce:ce;return{transform:`translateX(calc(${2*Le-1} * ${o.thumbSize} / 2 + ${50-100*Le}%))`}}function it(ce){const Le=E(()=>d.value===!1&&(f.value===ce.focusValue||f.value==="both")?" q-slider--focus":""),Ee=E(()=>`q-slider__thumb q-slider__thumb${_.value} q-slider__thumb${_.value}-${C.value===!0?"rtl":"ltr"} absolute non-selectable`+Le.value+(ce.thumbColor.value!==void 0?` text-${ce.thumbColor.value}`:"")),ze=E(()=>({width:o.thumbSize,height:o.thumbSize,[z.value]:`${100*ce.ratio.value}%`,zIndex:f.value===ce.focusValue?2:void 0})),st=E(()=>ce.labelColor.value!==void 0?` text-${ce.labelColor.value}`:""),Lt=E(()=>Fe(ce.ratio.value)),mo=E(()=>"q-slider__text"+(ce.labelTextColor.value!==void 0?` text-${ce.labelTextColor.value}`:""));return()=>{const ho=[j("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[j("path",{d:o.thumbPath})]),j("div",{class:"q-slider__focus-ring fit"})];return(o.label===!0||o.labelAlways===!0)&&(ho.push(j("div",{class:F.value+" absolute fit no-pointer-events"+st.value},[j("div",{class:le.value,style:{minWidth:o.thumbSize}},[j("div",{class:ke.value,style:Lt.value},[j("span",{class:mo.value},ce.label.value)])])])),o.name!==void 0&&o.disable!==!0&&u(ho,"push")),j("div",{class:Ee.value,style:ze.value,...ce.getNodeData()},ho)}}function mt(ce,Le,Ee,ze){const st=[];o.innerTrackColor!=="transparent"&&st.push(j("div",{key:"inner",class:k.value,style:Q.value})),o.selectionColor!=="transparent"&&st.push(j("div",{key:"selection",class:ge.value,style:ce.value})),o.markers!==!1&&st.push(j("div",{key:"marker",class:Ie.value,style:me.value})),ze(st);const Lt=[Ns("div",{key:"trackC",class:H.value,tabindex:Le.value,...Ee.value},[j("div",{class:ie.value,style:m.value},st)],"slide",w.value,()=>te.value)];if(o.markerLabels!==!1){const mo=o.switchMarkerLabelsSide===!0?"unshift":"push";Lt[mo](j("div",{key:"markerL",class:Qe.value},X()))}return Lt}return at(()=>{document.removeEventListener("mouseup",xe,!0)}),{state:{active:c,focus:f,preventFocus:d,dragging:h,editable:w,classes:ne,tabindex:L,attributes:N,roundValueFn:v,keyStep:x,trackLen:q,innerMin:g,innerMinRatio:M,innerMax:y,innerMaxRatio:$,positionProp:z,sizeProp:O,isReversed:C},methods:{onActivate:Ae,onMobileClick:Ce,onBlur:_e,onKeyup:je,getContent:mt,getThumbRenderFn:it,convertRatioToModel:U,convertModelToRatio:V,getDraggingRatio:A}}}const Mre=()=>({}),$re=Te({name:"QSlider",props:{...Dre,modelValue:{required:!0,default:null,validator:e=>typeof e=="number"||e===null},labelValue:[String,Number]},emits:Pre,setup(e,{emit:t}){const{proxy:{$q:n}}=Oe(),{state:a,methods:o}=jre({updateValue:_,updatePosition:C,getDragging:I,formAttrs:wf(e)}),i=be(null),r=be(0),s=be(0);function l(){s.value=e.modelValue===null?a.innerMin.value:On(e.modelValue,a.innerMin.value,a.innerMax.value)}Pe(()=>`${e.modelValue}|${a.innerMin.value}|${a.innerMax.value}`,l),l();const u=E(()=>o.convertModelToRatio(s.value)),c=E(()=>a.active.value===!0?r.value:u.value),d=E(()=>{const w={[a.positionProp.value]:`${100*a.innerMinRatio.value}%`,[a.sizeProp.value]:`${100*(c.value-a.innerMinRatio.value)}%`};return e.selectionImg!==void 0&&(w.backgroundImage=`url(${e.selectionImg}) !important`),w}),f=o.getThumbRenderFn({focusValue:!0,getNodeData:Mre,ratio:c,label:E(()=>e.labelValue!==void 0?e.labelValue:s.value),thumbColor:E(()=>e.thumbColor||e.color),labelColor:E(()=>e.labelColor),labelTextColor:E(()=>e.labelTextColor)}),h=E(()=>a.editable.value!==!0?{}:n.platform.is.mobile===!0?{onClick:o.onMobileClick}:{onMousedown:o.onActivate,onFocus:g,onBlur:o.onBlur,onKeydown:y,onKeyup:o.onKeyup});function _(w){s.value!==e.modelValue&&t("update:modelValue",s.value),w===!0&&t("change",s.value)}function I(){return i.value.getBoundingClientRect()}function C(w,v=a.dragging.value){const x=o.getDraggingRatio(w,v);s.value=o.convertRatioToModel(x),r.value=e.snap!==!0||e.step===0?x:o.convertModelToRatio(s.value)}function g(){a.focus.value=!0}function y(w){if(Zf.includes(w.keyCode)===!1)return;He(w);const v=([34,33].includes(w.keyCode)?10:1)*a.keyStep.value,x=([34,37,40].includes(w.keyCode)?-1:1)*(a.isReversed.value===!0?-1:1)*(e.vertical===!0?-1:1)*v;s.value=On(a.roundValueFn.value(s.value+x),a.innerMin.value,a.innerMax.value),_()}return()=>{const w=o.getContent(d,a.tabindex,h,v=>{v.push(f())});return j("div",{ref:i,class:a.classes.value+(e.modelValue===null?" q-slider--no-value":""),...a.attributes.value,"aria-valuenow":e.modelValue},w)}}}),Rre="component",Ore={docsUrl:"https://v2.quasar.dev/vue-components/slider"},Fre={"model-value":{type:["Number","null"],default:"null",desc:"Model of the component (must be between min/max); use v-model",required:!0,category:"model"},min:{type:"Number",default:"0",desc:"Minimum value of the model",category:"model",required:!1},max:{type:"Number",default:"100",desc:"Maximum value of the model",category:"model",required:!1},step:{type:"Number",default:"1",desc:"Step amount between valid values (> 0.0); 0 defines infinite granularity",category:"model",required:!1},snap:{type:"Boolean",desc:"Snap on valid values, rather than sliding freely",category:"behavior"},reverse:{type:"Boolean",desc:"Work in reverse (changes direction)",category:"behavior"},vertical:{type:"Boolean",desc:"Display in vertical direction",category:"behavior"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"track-color":{type:"String",desc:"Color name for the track",category:"style"},"thumb-color":{type:"String",desc:"Color name for the thumb",category:"style"},label:{type:"Boolean",desc:"Popup a label when user clicks/taps on the slider thumb",category:"content"},"label-color":{type:"String",desc:"Color name for the label",category:"style"},"label-always":{type:"Boolean",desc:"Always display the label",category:"content"},"label-value":{type:["String","Number"],desc:"Override default label value",category:"content"},markers:{type:["Boolean","Number"],desc:"Display markers on the track",category:"content"},"marker-labels":{type:["Boolean","Array","Object","Function"],desc:"Configure the marker labels",category:"content"},"track-size":{type:"String",default:"'4px'",desc:"Track size (including CSS unit)",category:"style",required:!1},"thumb-size":{type:"String",default:"'20px'",desc:"Thumb size (including CSS unit)",category:"style",required:!1},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},readonly:{type:"Boolean",desc:"Put component in readonly mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1}},zre={"marker-label":{desc:"Custom marker label slot"}},Nre={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"},change:{desc:"Emitted on lazy model value change (after user releases the thumb)"},pan:{desc:"Triggered when user starts/ends panning on the component"}},Vre={type:Rre,meta:Ore,props:Fre,slots:zre,events:Nre},Hre={name:"ShowcaseQuasarSlider",components:{QSlider:$re},label:"Quasar Slider",icon:"edit_note",apiJson:Vre,importName:"QSlider",importFrom:"quasar",data(){return{basic:60,labeled:35,stepped:20}}},Ure={class:"showcaseSliders"},Wre={class:"sliderItem"},Jre={class:"sliderItem"},Gre={class:"sliderItem"},Kre={class:"sliderItem"};function Yre(e,t,n,a,o,i){const r=G("QSlider");return D(),Z("div",Ure,[b("div",Wre,[t[3]||(t[3]=b("span",{class:"sliderLabel"},"Basic",-1)),p(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),color:"primary"},null,8,["modelValue"])]),b("div",Jre,[t[4]||(t[4]=b("span",{class:"sliderLabel"},"With label",-1)),p(r,{modelValue:o.labeled,"onUpdate:modelValue":t[1]||(t[1]=s=>o.labeled=s),color:"accent",label:"","label-always":""},null,8,["modelValue"])]),b("div",Gre,[t[5]||(t[5]=b("span",{class:"sliderLabel"},"Stepped",-1)),p(r,{modelValue:o.stepped,"onUpdate:modelValue":t[2]||(t[2]=s=>o.stepped=s),color:"secondary",min:0,max:50,step:10,snap:"",markers:"",label:""},null,8,["modelValue"])]),b("div",Kre,[t[6]||(t[6]=b("span",{class:"sliderLabel"},"Disabled",-1)),p(r,{"model-value":40,color:"info",disable:""})])])}const Zre=Be(Hre,[["render",Yre],["__scopeId","data-v-3609aec0"]]),Xre=Object.freeze(Object.defineProperty({__proto__:null,default:Zre},Symbol.toStringTag,{value:"Module"})),Xf=Te({name:"QToggle",props:{...Uf,icon:String,iconColor:String},emits:Wf,setup(e){function t(n,a){const o=E(()=>(n.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),i=E(()=>n.value===!0?e.iconColor:null);return()=>[j("div",{class:"q-toggle__track"}),j("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},o.value!==void 0?[j(Ve,{name:o.value,color:i.value})]:void 0)]}return Jf("toggle",t)}}),ese="component",tse={docsUrl:"https://v2.quasar.dev/vue-components/toggle"},nse={"model-value":{type:["Any","Array"],default:"null",desc:"Model of the component; use v-model directive",category:"model",required:!0},val:{type:"Any",desc:"Works when model is Array. Value to add/remove when ticked/unticked",category:"model"},"true-value":{type:"Any",default:"true",desc:"What model value should be considered as checked/on?",category:"model",required:!1},"false-value":{type:"Any",default:"false",desc:"What model value should be considered as unchecked/off?",category:"model",required:!1},label:{type:"String",desc:"Label to display along the component",category:"label"},"left-label":{type:"Boolean",desc:"Label should be displayed on the left side",category:"label"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},"checked-icon":{type:"String",desc:"Icon to use when the toggle is on",category:"icons"},"unchecked-icon":{type:"String",desc:"Icon to use when the toggle is off",category:"icons"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},"keep-color":{type:"Boolean",desc:"Keep color when the component is unticked/off",category:"behavior"},size:{type:"String",desc:"Size in CSS units or standard size name (xs|sm|md|lg|xl)",category:"style"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style",required:!1},"toggle-indeterminate":{type:"Boolean",desc:"Toggle through the indeterminate state too on click",category:"behavior"}},ose={default:{desc:"Default slot can be used as label, unless 'label' prop is specified"}},ase={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},ise={type:ese,meta:tse,props:nse,slots:ose,events:ase},rse={name:"ShowcaseQuasarToggle",components:{QToggle:Xf},label:"Quasar Toggle",icon:"edit_note",apiJson:ise,importName:"QToggle",importFrom:"quasar",data(){return{basic:!0,icons:!1,dense:!0,keepColor:!1}}},sse={class:"jShowcase_row showcaseToggles"};function lse(e,t,n,a,o,i){const r=G("QToggle");return D(),Z("div",sse,[p(r,{modelValue:o.basic,"onUpdate:modelValue":t[0]||(t[0]=s=>o.basic=s),label:"Basic",color:"primary"},null,8,["modelValue"]),p(r,{modelValue:o.icons,"onUpdate:modelValue":t[1]||(t[1]=s=>o.icons=s),label:"With icons",color:"accent","checked-icon":"check","unchecked-icon":"close"},null,8,["modelValue"]),p(r,{modelValue:o.dense,"onUpdate:modelValue":t[2]||(t[2]=s=>o.dense=s),label:"Dense",color:"secondary",dense:""},null,8,["modelValue"]),p(r,{modelValue:o.keepColor,"onUpdate:modelValue":t[3]||(t[3]=s=>o.keepColor=s),label:"Keep color",color:"info","keep-color":""},null,8,["modelValue"]),p(r,{"model-value":!0,label:"Disabled on",color:"positive",disable:""}),p(r,{"model-value":!1,label:"Disabled off",color:"negative",disable:""})])}const cse=Be(rse,[["render",lse],["__scopeId","data-v-dec3fac0"]]),use=Object.freeze(Object.defineProperty({__proto__:null,default:cse},Symbol.toStringTag,{value:"Module"})),dse={name:"ShowcaseQuasarChip",components:{QChip:jf},label:"Quasar Chip",icon:"auto_awesome",importName:"QChip",importFrom:"quasar",code:'<QChip icon="event">Add to calendar</QChip>'},pse={class:"jShowcase_row"};function fse(e,t,n,a,o,i){const r=G("QChip");return D(),Z("div",pse,[p(r,{icon:"event",disable:""},{default:S(()=>[...t[0]||(t[0]=[W("Add to calendar",-1)])]),_:1})])}const mse=Be(dse,[["render",fse]]),hse=Object.freeze(Object.defineProperty({__proto__:null,default:mse},Symbol.toStringTag,{value:"Module"})),gse={...Hn,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},ys=50,em=2*ys,tm=em*Math.PI,vse=Math.round(tm*1e3)/1e3,bse=Te({name:"QCircularProgress",props:{...gse,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Oe(),a=Un(e),o=E(()=>{const h=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-h}deg)`:`rotate3d(0, 0, 1, ${h-90}deg)`}}),i=E(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),r=E(()=>em/(1-e.thickness/2)),s=E(()=>`${r.value/2} ${r.value/2} ${r.value} ${r.value}`),l=E(()=>On(e.value,e.min,e.max)),u=E(()=>e.max-e.min),c=E(()=>e.thickness/2*r.value),d=E(()=>{const h=(e.max-l.value)/u.value,_=e.rounded===!0&&l.value<e.max&&h<.25?c.value/2*(1-h/.25):0;return tm*h+_});function f({thickness:h,offset:_,color:I,cls:C,rounded:g}){return j("circle",{class:"q-circular-progress__"+C+(I!==void 0?` text-${I}`:""),style:i.value,fill:"transparent",stroke:"currentColor","stroke-width":h,"stroke-dasharray":vse,"stroke-dashoffset":_,"stroke-linecap":g,cx:r.value,cy:r.value,r:ys})}return()=>{const h=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&h.push(j("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ys-c.value/2,cx:r.value,cy:r.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&h.push(f({cls:"track",thickness:c.value,offset:0,color:e.trackColor})),h.push(f({cls:"circle",thickness:c.value,offset:d.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const _=[j("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:s.value,"aria-hidden":"true"},h)];return e.showValue===!0&&_.push(j("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[j("div",l.value)])),j("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:a.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:l.value},zs(t.internal,_))}}}),_se="component",yse={docsUrl:"https://v2.quasar.dev/vue-components/circular-progress"},wse={size:{type:"String",desc:"Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",examples:["'16px'","'2rem'","'xs'","'md'"],category:"style"},value:{type:"Number",default:"0",desc:"Current progress (must be between min/max)",category:"model",required:!1},min:{type:"Number",default:"0",desc:"Minimum value defining 'no progress' (must be lower than 'max')",category:"model",required:!1},max:{type:"Number",default:"100",desc:"Maximum value defining 100% progress made (must be higher than 'min')",category:"model",required:!1},color:{type:"String",desc:"Color name for the arc progress from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},"center-color":{type:"String",desc:"Color name for the center part of the component from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},"track-color":{type:"String",desc:"Color name for the track of the component from the Quasar Color Palette",examples:["'primary'","'teal'","'teal-10'"],category:"style"},"font-size":{type:"String",desc:"Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size",examples:["'1em'","'16px'","'2rem'"],category:"style"},rounded:{type:"Boolean",desc:"Rounding the arc of progress",category:"style"},thickness:{type:"Number",default:"0.2",desc:"Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size",category:"style",required:!1},angle:{type:"Number",desc:"Angle to rotate progress arc by",default:"0",category:"content",required:!1},indeterminate:{type:"Boolean",desc:"Put component into 'indeterminate' state; Ignores 'value' prop",category:"behavior"},"show-value":{type:"Boolean",desc:"Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text",category:"content|behavior"},reverse:{type:"Boolean",desc:"Reverses the direction of progress; Only for determined state",category:"behavior"},"instant-feedback":{type:"Boolean",desc:"No animation when model changes",category:"behavior"},"animation-speed":{type:["String","Number"],desc:"Animation speed (in milliseconds, without unit)",examples:["500","'1200'"],category:"style",default:"600",required:!1}},Sse={default:{desc:"Used for component content only if 'show-value' prop is set"}},kse={type:_se,meta:yse,props:wse,slots:Sse},xse={name:"ShowcaseQuasarCircularProgress",components:{QCircularProgress:bse,QIcon:Ve},label:"Circular Progress",icon:"auto_awesome",apiJson:kse,importName:"QCircularProgress",importFrom:"quasar"},Cse={class:"jShowcase_row"};function Qse(e,t,n,a,o,i){const r=G("QCircularProgress"),s=G("QIcon");return D(),Z("div",Cse,[p(r,{value:75,size:"56px",color:"primary","track-color":"grey-8","show-value":""},{default:S(()=>[...t[0]||(t[0]=[W(" 75% ",-1)])]),_:1}),p(r,{value:40,size:"56px",color:"accent","track-color":"grey-8",rounded:"",thickness:.3,"show-value":""},{default:S(()=>[p(s,{name:"rocket_launch",size:"18px",color:"accent"})]),_:1}),p(r,{indeterminate:"",size:"56px",color:"secondary","track-color":"grey-8"}),p(r,{value:90,size:"56px",color:"positive","track-color":"grey-8",thickness:.1,"show-value":"","font-size":"11px"},{default:S(()=>[...t[1]||(t[1]=[W(" 90% ",-1)])]),_:1})])}const Ase=Be(xse,[["render",Qse]]),Ise=Object.freeze(Object.defineProperty({__proto__:null,default:Ase},Symbol.toStringTag,{value:"Module"})),qse='<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',Tse=Te({name:"QSpinnerDots",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",innerHTML:qse})}}),Lse='<rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"></animate></rect>',Ese=Te({name:"QSpinnerBars",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 135 140",xmlns:"http://www.w3.org/2000/svg",innerHTML:Lse})}}),Bse='<g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g>',Dse=Te({name:"QSpinnerAudio",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 55 80",xmlns:"http://www.w3.org/2000/svg",innerHTML:Bse})}}),Pse='<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>',jse=Te({name:"QSpinnerBall",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 57 57",xmlns:"http://www.w3.org/2000/svg",innerHTML:Pse})}}),Mse='<rect x="0" y="0" width="100" height="100" fill="none"></rect><g transform="translate(25 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.9"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 25)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.8"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.1s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(25 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.7"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.3s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g><g transform="translate(75 75)"><rect x="-20" y="-20" width="40" height="40" fill="currentColor" opacity="0.6"><animateTransform attributeName="transform" type="scale" from="1.5" to="1" repeatCount="indefinite" begin="0.2s" dur="1s" calcMode="spline" keySplines="0.2 0.8 0.2 0.8" keyTimes="0;1"></animateTransform></rect></g>',$se=Te({name:"QSpinnerCube",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",innerHTML:Mse})}}),Rse='<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',Ose=Te({name:"QSpinnerGrid",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",innerHTML:Rse})}}),Fse='<g><path fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z"></path><clipPath id="uil-hourglass-clip1"><rect x="15" y="20" width="70" height="25"><animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" values="25;0;0" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" values="20;45;45" keyTimes="0;0.5;1"></animate></rect></clipPath><clipPath id="uil-hourglass-clip2"><rect x="15" y="55" width="70" height="25"><animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" values="0;25;25" keyTimes="0;0.5;1"></animate><animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" values="80;55;55" keyTimes="0;0.5;1"></animate></rect></clipPath><path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="currentColor"></path><path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="currentColor"></path><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1"></animateTransform></g>',zse=Te({name:"QSpinnerHourglass",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:Fse})}}),Nse='<g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g>',Vse=Te({name:"QSpinnerOval",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",innerHTML:Nse})}}),Hse='<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>',Use=Te({name:"QSpinnerPuff",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",innerHTML:Hse})}}),Wse='<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>',Jse=Te({name:"QSpinnerRings",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",innerHTML:Wse})}}),Gse='<defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="currentColor" stop-opacity="0" offset="0%"></stop><stop stop-color="currentColor" stop-opacity=".631" offset="63.146%"></stop><stop stop-color="currentColor" offset="100%"></stop></linearGradient></defs><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></path><circle fill="currentColor" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform></circle></g>',Kse=Te({name:"QSpinnerTail",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",innerHTML:Gse})}}),Yse='<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>',Zse=Te({name:"QSpinnerGears",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,width:t.value,height:t.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg",innerHTML:Yse})}}),Xse='<rect x="0" y="0" width="100" height="100" fill="none"></rect><path d="M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z" fill="currentColor"></path><circle cx="30" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;1;1" keyTimes="0;0.2;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="50" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.2;0.4;1" dur="1s" repeatCount="indefinite"></animate></circle><circle cx="70" cy="47" r="5" fill="#fff"><animate attributeName="opacity" from="0" to="1" values="0;0;1;1" keyTimes="0;0.4;0.6;1" dur="1s" repeatCount="indefinite"></animate></circle>',ele=Te({name:"QSpinnerComment",props:qt,setup(e){const{cSize:t,classes:n}=Tt(e);return()=>j("svg",{class:n.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",innerHTML:Xse})}}),tle="component",nle={docsUrl:"https://v2.quasar.dev/vue-components/spinners"},ole={size:{type:"String",desc:"Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",category:"style"},color:{type:"String",desc:"Color name from the Quasar Color Palette",category:"style"},thickness:{type:"Number",default:"5",desc:"Override the stroke width (applies to default QSpinner only)",category:"style"}},ale={type:tle,meta:nle,props:ole},ile="component",rle={docsUrl:"https://v2.quasar.dev/vue-components/inner-loading"},sle={showing:{type:"Boolean",desc:"State - loading or not",category:"model"},color:{type:"String",desc:"Color name from the Quasar Color Palette for the spinner",category:"style"},size:{type:"String",desc:"Size in CSS units for the default spinner",category:"style"},label:{type:"String",desc:"Text to display below the spinner",category:"content"},"label-class":{type:"String",desc:"CSS class(es) for the label",category:"style"},"label-style":{type:["String","Array","Object"],desc:"CSS style for the label",category:"style"},dark:{type:"Boolean",desc:"Notify the component that the background is dark",category:"style"},"transition-show":{type:"String",default:"'fade'",desc:"Transition name when showing",category:"behavior"},"transition-hide":{type:"String",default:"'fade'",desc:"Transition name when hiding",category:"behavior"},"transition-duration":{type:["String","Number"],default:"300",desc:"Transition duration (in milliseconds)",category:"behavior"}},lle={default:{desc:"Replaces the default spinner with custom content"}},cle={type:ile,meta:rle,props:sle,slots:lle},ule={name:"ShowcaseQuasarSpinner",inject:["showcaseCopy"],components:{QToggle:Xf,QInnerLoading:Pf,QSpinner:ja,QSpinnerDots:Tse,QSpinnerBars:Ese,QSpinnerAudio:Dse,QSpinnerBall:jse,QSpinnerCube:$se,QSpinnerGrid:Ose,QSpinnerHourglass:zse,QSpinnerOrbit:Cp,QSpinnerOval:Vse,QSpinnerPuff:Use,QSpinnerRings:Jse,QSpinnerTail:Kse,QSpinnerGears:Zse,QSpinnerComment:ele},label:"Spinners / Loading",icon:"auto_awesome",apiJson:[{name:"QSpinner",json:ale},{name:"QInnerLoading",json:cle}],importName:"QSpinner",importFrom:"quasar",data(){return{innerActive:!0}}},dle={class:"jShowcase_row jShowcase_column"},ple={class:"jShowcase_group"},fle={class:"jShowcase_items"},mle={class:"jShowcase_group"},hle={class:"jShowcase_items"},gle={class:"jShowcase_group"},vle={class:"jShowcase_items"},ble={class:"jShowcase_group"},_le={class:"jShowcase_items"},yle={class:"jShowcase_group"},wle={class:"jShowcase_items"},Sle={class:"innerLoadingBox"},kle={class:"innerLoadingBox"},xle={class:"innerLoadingBox"},Cle={class:"innerLoadingBox"};function Qle(e,t,n,a,o,i){const r=G("QSpinner"),s=G("QSpinnerDots"),l=G("QSpinnerBars"),u=G("QSpinnerAudio"),c=G("QSpinnerBall"),d=G("QSpinnerCube"),f=G("QSpinnerGrid"),h=G("QSpinnerHourglass"),_=G("QSpinnerOrbit"),I=G("QSpinnerOval"),C=G("QSpinnerPuff"),g=G("QSpinnerRings"),y=G("QSpinnerTail"),w=G("QSpinnerGears"),v=G("QSpinnerComment"),x=G("QInnerLoading"),L=G("QToggle");return D(),Z("div",dle,[b("div",ple,[t[15]||(t[15]=b("span",{class:"jShowcase_title"},"Default",-1)),b("div",fle,[p(r,{color:"primary",size:"40px"}),p(r,{color:"secondary",size:"40px",thickness:2}),p(r,{color:"accent",size:"40px",thickness:8})])]),b("div",mle,[t[16]||(t[16]=b("span",{class:"jShowcase_title"},"Sizes",-1)),b("div",hle,[p(r,{color:"primary",size:"20px"}),p(r,{color:"primary",size:"30px"}),p(r,{color:"primary",size:"40px"}),p(r,{color:"primary",size:"60px"}),p(r,{color:"primary",size:"80px"})])]),b("div",gle,[t[31]||(t[31]=b("span",{class:"jShowcase_title"},"Variants",-1)),b("div",vle,[b("div",{class:"spinnerItem",onClick:t[0]||(t[0]=q=>i.showcaseCopy("<QSpinnerDots />"))},[p(s,{color:"primary",size:"40px"}),t[17]||(t[17]=b("span",{class:"spinnerLabel"},"Dots",-1))]),b("div",{class:"spinnerItem",onClick:t[1]||(t[1]=q=>i.showcaseCopy("<QSpinnerBars />"))},[p(l,{color:"secondary",size:"40px"}),t[18]||(t[18]=b("span",{class:"spinnerLabel"},"Bars",-1))]),b("div",{class:"spinnerItem",onClick:t[2]||(t[2]=q=>i.showcaseCopy("<QSpinnerAudio />"))},[p(u,{color:"accent",size:"40px"}),t[19]||(t[19]=b("span",{class:"spinnerLabel"},"Audio",-1))]),b("div",{class:"spinnerItem",onClick:t[3]||(t[3]=q=>i.showcaseCopy("<QSpinnerBall />"))},[p(c,{color:"positive",size:"40px"}),t[20]||(t[20]=b("span",{class:"spinnerLabel"},"Ball",-1))]),b("div",{class:"spinnerItem",onClick:t[4]||(t[4]=q=>i.showcaseCopy("<QSpinnerCube />"))},[p(d,{color:"info",size:"40px"}),t[21]||(t[21]=b("span",{class:"spinnerLabel"},"Cube",-1))]),b("div",{class:"spinnerItem",onClick:t[5]||(t[5]=q=>i.showcaseCopy("<QSpinnerGrid />"))},[p(f,{color:"warning",size:"40px"}),t[22]||(t[22]=b("span",{class:"spinnerLabel"},"Grid",-1))]),b("div",{class:"spinnerItem",onClick:t[6]||(t[6]=q=>i.showcaseCopy("<QSpinnerHourglass />"))},[p(h,{color:"negative",size:"40px"}),t[23]||(t[23]=b("span",{class:"spinnerLabel"},"Hourglass",-1))]),b("div",{class:"spinnerItem",onClick:t[7]||(t[7]=q=>i.showcaseCopy("<QSpinnerOrbit />"))},[p(_,{color:"primary",size:"40px"}),t[24]||(t[24]=b("span",{class:"spinnerLabel"},"Orbit",-1))]),b("div",{class:"spinnerItem",onClick:t[8]||(t[8]=q=>i.showcaseCopy("<QSpinnerOval />"))},[p(I,{color:"secondary",size:"40px"}),t[25]||(t[25]=b("span",{class:"spinnerLabel"},"Oval",-1))]),b("div",{class:"spinnerItem",onClick:t[9]||(t[9]=q=>i.showcaseCopy("<QSpinnerPuff />"))},[p(C,{color:"accent",size:"40px"}),t[26]||(t[26]=b("span",{class:"spinnerLabel"},"Puff",-1))]),b("div",{class:"spinnerItem",onClick:t[10]||(t[10]=q=>i.showcaseCopy("<QSpinnerRings />"))},[p(g,{color:"positive",size:"40px"}),t[27]||(t[27]=b("span",{class:"spinnerLabel"},"Rings",-1))]),b("div",{class:"spinnerItem",onClick:t[11]||(t[11]=q=>i.showcaseCopy("<QSpinnerTail />"))},[p(y,{color:"info",size:"40px"}),t[28]||(t[28]=b("span",{class:"spinnerLabel"},"Tail",-1))]),b("div",{class:"spinnerItem",onClick:t[12]||(t[12]=q=>i.showcaseCopy("<QSpinnerGears />"))},[p(w,{color:"warning",size:"40px"}),t[29]||(t[29]=b("span",{class:"spinnerLabel"},"Gears",-1))]),b("div",{class:"spinnerItem",onClick:t[13]||(t[13]=q=>i.showcaseCopy("<QSpinnerComment />"))},[p(v,{color:"negative",size:"40px"}),t[30]||(t[30]=b("span",{class:"spinnerLabel"},"Comment",-1))])])]),b("div",ble,[t[32]||(t[32]=b("span",{class:"jShowcase_title"},"Colors",-1)),b("div",_le,[p(r,{color:"primary",size:"40px"}),p(r,{color:"secondary",size:"40px"}),p(r,{color:"accent",size:"40px"}),p(r,{color:"positive",size:"40px"}),p(r,{color:"negative",size:"40px"}),p(r,{color:"info",size:"40px"}),p(r,{color:"warning",size:"40px"})])]),b("div",yle,[t[37]||(t[37]=b("span",{class:"jShowcase_title"},"QInnerLoading",-1)),b("div",wle,[b("div",Sle,[t[33]||(t[33]=b("div",{class:"innerLoadingContent"},"Content underneath",-1)),p(x,{showing:o.innerActive,color:"primary"},null,8,["showing"])]),b("div",kle,[t[34]||(t[34]=b("div",{class:"innerLoadingContent"},"Custom spinner",-1)),p(x,{showing:o.innerActive},{default:S(()=>[p(w,{color:"accent",size:"40px"})]),_:1},8,["showing"])]),b("div",xle,[t[35]||(t[35]=b("div",{class:"innerLoadingContent"},"Dark overlay",-1)),p(x,{showing:o.innerActive,color:"secondary",dark:""},null,8,["showing"])]),b("div",Cle,[t[36]||(t[36]=b("div",{class:"innerLoadingContent"},"With label",-1)),p(x,{showing:o.innerActive,color:"primary",label:"Loading data..."},null,8,["showing"])])]),p(L,{modelValue:o.innerActive,"onUpdate:modelValue":t[14]||(t[14]=q=>o.innerActive=q),label:"Show loading",color:"primary"},null,8,["modelValue"]),t[38]||(t[38]=b("p",{class:"innerLoadingNote"},[b("strong",null,"WARNING:"),W(" The parent element must have "),b("code",null,"position: relative"),W(" (or the "),b("code",null,"relative-position"),W(" Quasar class) for the spinner to center correctly. ")],-1)),t[39]||(t[39]=b("p",{class:"innerLoadingNote"},[b("strong",null,"WARNING:"),W(" QInnerLoading must be the last element inside its parent so it can appear on top of the other content. ")],-1))])])}const Ale=Be(ule,[["render",Qle],["__scopeId","data-v-c4a41f68"]]),Ile=Object.freeze(Object.defineProperty({__proto__:null,default:Ale},Symbol.toStringTag,{value:"Module"})),qle="component",Tle={docsUrl:"https://v2.quasar.dev/vue-components/tabs"},Lle={"model-value":{type:["Number","String","null"],desc:"Model defining current panel name; use v-model",category:"model",required:!1},vertical:{type:"Boolean",desc:"Use vertical design (tabs stacked on top of each other)",category:"content"},align:{type:"String",default:"'center'",desc:"Horizontal alignment of tabs within the container",values:["'left'","'center'","'right'","'justify'"],category:"content",required:!1},"active-color":{type:"String",desc:"Color for the text of the active tab",category:"style"},"active-bg-color":{type:"String",desc:"Color for the background of the active tab",category:"style"},"indicator-color":{type:"String",desc:"Color for the indicator (underline) of the active tab",category:"style"},"narrow-indicator":{type:"Boolean",desc:"Indicator matches the tab content width instead of full tab width",category:"content"},"inline-label":{type:"Boolean",desc:"Text is inline with the icon",category:"content"},"no-caps":{type:"Boolean",desc:"Turns off capitalizing all letters within the tab",category:"content"},dense:{type:"Boolean",desc:"Dense mode; occupies less space",category:"style"},"switch-indicator":{type:"Boolean",desc:"Switches the indicator position",category:"content"},shrink:{type:"Boolean",desc:"Reverse default grow behavior; useful in QToolbar",category:"content"},stretch:{type:"Boolean",desc:"Tabs stretch to parent's height on flexbox parent",category:"content"},"outside-arrows":{type:"Boolean",desc:"Reserve space for scroll arrows on each side",category:"content"},"mobile-arrows":{type:"Boolean",desc:"Force display of arrows on mobile",category:"content"}},Ele={default:{desc:"Default slot for QTab components"}},Ble={"update:model-value":{desc:"Emitted when the component needs to change the model; used by v-model"}},Dle={type:qle,meta:Tle,props:Lle,slots:Ele,events:Ble},Ple="component",jle={docsUrl:"https://v2.quasar.dev/vue-components/tabs"},Mle={name:{type:["Number","String"],desc:"Panel name",category:"general",required:!1},label:{type:["Number","String"],desc:"A number or string to label the tab",category:"content"},icon:{type:"String",desc:"Icon name following Quasar convention",category:"content"},alert:{type:["Boolean","String"],desc:"Adds an alert symbol; if string, specifies color",category:"content"},"alert-icon":{type:"String",desc:"Adds a floating icon as alert; displayed only if 'alert' is set",category:"content"},"no-caps":{type:"Boolean",desc:"Turns off capitalizing all letters",category:"content"},"content-class":{type:"String",desc:"Class definitions for the content wrapper",category:"style"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"},ripple:{type:["Boolean","Object"],default:"true",desc:"Configure material ripple",category:"style",required:!1}},$le={default:{desc:"Suggestion: QMenu, QTooltip"}},Rle={type:Ple,meta:jle,props:Mle,slots:$le},Ole="component",Fle={docsUrl:"https://v2.quasar.dev/vue-components/tab-panels"},zle={"model-value":{type:"Any",desc:"Current panel name; use v-model (synced with QTabs model)",required:!0,category:"model"},"keep-alive":{type:"Boolean",desc:"Equivalent to Vue's native <keep-alive> on the content",category:"behavior"},animated:{type:"Boolean",desc:"Enable transitions between panels",category:"behavior"},infinite:{type:"Boolean",desc:"Makes navigation infinite (wraps around)",category:"behavior"},swipeable:{type:"Boolean",desc:"Enable swipe gestures to switch panels",category:"behavior"},vertical:{type:"Boolean",desc:"Transitions and swipe on the vertical axis",category:"behavior"},"transition-prev":{type:"String",desc:"Transition when going to previous panel (requires 'animated')",default:"'slide-right'",category:"transition"},"transition-next":{type:"String",desc:"Transition when going to next panel (requires 'animated')",default:"'slide-left'",category:"transition"},"transition-duration":{type:["String","Number"],default:"300",desc:"Transition duration in milliseconds",category:"transition"},dark:{type:["Boolean","null"],default:"null",desc:"Notify the component that the background is a dark color",category:"style"}},Nle={default:{desc:"Default slot for QTabPanel components"}},Vle={"update:model-value":{desc:"Emitted when the active panel changes"},"before-transition":{desc:"Emitted before transitioning to a new panel"},transition:{desc:"Emitted after transitioning to a new panel"}},Hle={type:Ole,meta:Fle,props:zle,slots:Nle,events:Vle},Ule="component",Wle={docsUrl:"https://v2.quasar.dev/vue-components/tab-panels"},Jle={name:{type:"Any",desc:"Panel name (must match the model value to be shown)",required:!0,category:"general"},disable:{type:"Boolean",desc:"Put component in disabled mode",category:"state"}},Gle={default:{desc:"Default slot for panel content"}},Kle={type:Ule,meta:Wle,props:Jle,slots:Gle},Yle={name:"ShowcaseQuasarTabs",components:{QTabs:ll,QTab:cl,QTabPanels:Kf,QTabPanel:Yf},label:"Quasar Tabs",icon:"auto_awesome",apiJson:[{name:"QTabs",json:Dle},{name:"QTab",json:Rle},{name:"QTabPanels",json:Hle},{name:"QTabPanel",json:Kle}],importName:"QTabs",importFrom:"quasar",data(){return{tab:"overview",tab2:"all"}}},Zle={class:"jShowcase_row jShowcase_column showcaseTabs"},Xle={class:"jShowcase_group"},ece={class:"jShowcase_group"};function tce(e,t,n,a,o,i){const r=G("QTab"),s=G("QTabs"),l=G("QTabPanel"),u=G("QTabPanels");return D(),Z("div",Zle,[b("div",Xle,[t[8]||(t[8]=b("span",{class:"jShowcase_title"},"With Panels",-1)),p(s,{modelValue:o.tab,"onUpdate:modelValue":t[0]||(t[0]=c=>o.tab=c),dense:"","no-caps":"",class:"showcaseTabs_bar","active-color":"accent","indicator-color":"accent"},{default:S(()=>[p(r,{name:"overview",icon:"dashboard",label:"Overview"}),p(r,{name:"systems",icon:"memory",label:"Systems"}),p(r,{name:"crew",icon:"groups",label:"Crew"}),p(r,{name:"logs",icon:"description",label:"Logs",alert:"warning"})]),_:1},8,["modelValue"]),p(u,{modelValue:o.tab,"onUpdate:modelValue":t[1]||(t[1]=c=>o.tab=c),animated:"",class:"showcaseTabs_panels"},{default:S(()=>[p(l,{name:"overview"},{default:S(()=>[...t[4]||(t[4]=[W("Ship status nominal. All systems operational.",-1)])]),_:1}),p(l,{name:"systems"},{default:S(()=>[...t[5]||(t[5]=[W("Warp drive: online. Shields: 98%. Phasers: charged.",-1)])]),_:1}),p(l,{name:"crew"},{default:S(()=>[...t[6]||(t[6]=[W("Officers: 42. Enlisted: 388. Civilians: 0.",-1)])]),_:1}),p(l,{name:"logs"},{default:S(()=>[...t[7]||(t[7]=[W("3 new entries. 1 flagged for review.",-1)])]),_:1})]),_:1},8,["modelValue"])]),b("div",ece,[t[12]||(t[12]=b("span",{class:"jShowcase_title"},"Minimal",-1)),p(s,{modelValue:o.tab2,"onUpdate:modelValue":t[2]||(t[2]=c=>o.tab2=c),dense:"","no-caps":"",class:"showcaseTabs_bar","active-color":"primary","indicator-color":"primary","narrow-indicator":"",align:"left"},{default:S(()=>[p(r,{name:"all",label:"All"}),p(r,{name:"active",label:"Active"}),p(r,{name:"archived",label:"Archived"}),p(r,{name:"disabled",label:"Disabled",disable:""})]),_:1},8,["modelValue"]),p(u,{modelValue:o.tab2,"onUpdate:modelValue":t[3]||(t[3]=c=>o.tab2=c),animated:"",class:"showcaseTabs_panels"},{default:S(()=>[p(l,{name:"all"},{default:S(()=>[...t[9]||(t[9]=[W("Showing all 127 records.",-1)])]),_:1}),p(l,{name:"active"},{default:S(()=>[...t[10]||(t[10]=[W("48 active records.",-1)])]),_:1}),p(l,{name:"archived"},{default:S(()=>[...t[11]||(t[11]=[W("79 archived records.",-1)])]),_:1})]),_:1},8,["modelValue"])])])}const nce=Be(Yle,[["render",tce],["__scopeId","data-v-404b39b7"]]),oce=Object.freeze(Object.defineProperty({__proto__:null,default:nce},Symbol.toStringTag,{value:"Module"})),ace={name:"PortfolioFooter",props:{title:{type:String,default:""},alwaysCollapsed:{type:Boolean,default:!1}}},ice={class:"portfolioFooter_frame"},rce={key:0,class:"portfolioFooter_expandable"},sce={class:"portfolioFooter_expandableInner"},lce={key:1,class:"portfolioFooter_divider"},cce={class:"portfolioFooter_left"},uce={key:0,class:"portfolioFooter_tag"},dce={class:"portfolioFooter_tagLabel"},pce={key:1,class:"portfolioFooter_tag"},fce={key:2,class:"portfolioFooter_caption"},mce={key:0,class:"portfolioFooter_center"},hce={key:1,class:"portfolioFooter_right"},gce={key:2,class:"portfolioFooter_bottom"},vce={class:"portfolioFooter_bottomInner"};function bce(e,t,n,a,o,i){return D(),Z("div",{class:nt(["portfolioFooter",{compact:n.alwaysCollapsed,hasContent:(e.$slots.expanded||e.$slots.bottom)&&!n.alwaysCollapsed}])},[b("div",ice,[e.$slots.expanded&&!n.alwaysCollapsed?(D(),Z("div",rce,[b("div",sce,[_t(e.$slots,"expanded",{},void 0)])])):Re("",!0),e.$slots.expanded&&!n.alwaysCollapsed?(D(),Z("div",lce)):Re("",!0),b("div",{class:nt(["portfolioFooter_bar",{portfolioFooter_barCentered:!e.$slots.center&&!e.$slots.right}])},[b("div",cce,[!e.$slots.logo&&n.title?(D(),Z("div",uce,[t[0]||(t[0]=b("span",{class:"portfolioFooter_tagDot"},null,-1)),b("span",dce,ve(n.title),1)])):Re("",!0),e.$slots.logo?(D(),Z("div",pce,[_t(e.$slots,"logo",{},void 0)])):Re("",!0),e.$slots.caption?(D(),Z("div",fce,[_t(e.$slots,"caption",{},void 0)])):Re("",!0)]),e.$slots.center?(D(),Z("div",mce,[_t(e.$slots,"center",{},void 0)])):Re("",!0),e.$slots.right?(D(),Z("div",hce,[_t(e.$slots,"right",{},void 0)])):Re("",!0)],2),e.$slots.bottom&&!n.alwaysCollapsed?(D(),Z("div",gce,[t[1]||(t[1]=b("div",{class:"portfolioFooter_bottomDivider"},null,-1)),b("div",vce,[_t(e.$slots,"bottom",{},void 0)])])):Re("",!0)])],2)}const gl=Be(ace,[["render",bce],["__scopeId","data-v-d3679154"]]),_ce="component",yce={},wce={title:{type:"String",default:"''",desc:"Left-side label displayed with a dot indicator. Ignored when #logo slot is provided.",category:"content"},"always-collapsed":{type:"Boolean",default:"false",desc:"Thin compact bar — no expanded content, no corners, top border only. Mirrors PortfolioHeader compact mode.",category:"behavior"}},Sce={logo:{desc:"Replaces the default title + dot indicator with custom content (e.g. icon + brand name)."},caption:{desc:"Muted text shown beside the title/logo in the bottom bar."},center:{desc:"Center section of the bottom bar. Hidden on mobile."},right:{desc:"Right side of the bottom bar. Status indicators, social links, etc."},expanded:{desc:"Content area above the bottom bar. Separated by a gradient divider. Centered columns for link groups."},bottom:{desc:"Content area below the bottom bar. Separated by a gradient divider. Hidden when always-collapsed is set."}},kce={},xce={},Cce={type:_ce,meta:yce,props:wce,slots:Sce,events:kce,methods:xce},Qce={name:"ShowcasePortfolioFooter",components:{QBtn:vt,QIcon:Ve,PortfolioFooter:gl},label:"Portfolio Footer",icon:"call_to_action",inject:["showcaseCopy"],apiJson:Cce,importName:"PortfolioFooter",code:null,methods:{copy(e){this.showcaseCopy(e)}}},Ace={class:"jShowcase_row jShowcase_column"},Ice={class:"jShowcase_group"},qce={class:"jShowcase_column"},Tce={class:"jShowcase_group"},Lce={class:"jShowcase_column"},Ece={class:"jShowcase_group"},Bce={class:"jShowcase_column"},Dce={class:"jShowcase_group"},Pce={class:"jShowcase_column"};function jce(e,t,n,a,o,i){const r=G("QBtn"),s=G("PortfolioFooter",!0),l=G("QIcon");return D(),Z("div",Ace,[t[12]||(t[12]=b("div",{class:"jShowcase_info"},[b("p",null,[W("Themed footer with the same visual language as "),b("code",null,"PortfolioHeader"),W(" — frame, corners, gradient highlight, and per-theme background effects. Not sticky by default.")]),b("div",{class:"jShowcase_infoSection"},[b("span",{class:"jShowcase_infoLabel"},"Layout"),b("p",null,"Bottom bar with left (title/logo + caption), center, and right sections. Optional expanded area above with a gradient divider.")])],-1)),b("div",Ice,[t[3]||(t[3]=b("span",{class:"jShowcase_title"},"Full (With Expanded Content)",-1)),b("div",qce,[p(s,{title:"VAULT"},{expanded:S(()=>[...t[0]||(t[0]=[b("div",{class:"demoLinkColumn"},[b("span",{class:"demoLinkHeading"},"Platform"),b("a",{class:"demoLink"},"Dashboard"),b("a",{class:"demoLink"},"Portfolio"),b("a",{class:"demoLink"},"Staking"),b("a",{class:"demoLink"},"Swap")],-1),b("div",{class:"demoLinkColumn"},[b("span",{class:"demoLinkHeading"},"Resources"),b("a",{class:"demoLink"},"Documentation"),b("a",{class:"demoLink"},"API Reference"),b("a",{class:"demoLink"},"Status Page")],-1),b("div",{class:"demoLinkColumn"},[b("span",{class:"demoLinkHeading"},"Community"),b("a",{class:"demoLink"},"Discord"),b("a",{class:"demoLink"},"Twitter"),b("a",{class:"demoLink"},"GitHub")],-1)])]),caption:S(()=>[...t[1]||(t[1]=[W(" © 2026 Vault Protocol ",-1)])]),center:S(()=>[...t[2]||(t[2]=[b("span",{class:"demoPill"},"MAINNET",-1),b("span",{class:"demoPill"},"v2.4.1",-1)])]),right:S(()=>[p(r,{flat:"",round:"",size:"sm",icon:"fab fa-discord",color:"primary"}),p(r,{flat:"",round:"",size:"sm",icon:"fab fa-twitter",color:"primary"}),p(r,{flat:"",round:"",size:"sm",icon:"fab fa-github",color:"primary"})]),_:1})])]),b("div",Tce,[t[6]||(t[6]=b("span",{class:"jShowcase_title"},"Simple Bar",-1)),b("div",Lce,[p(s,{title:"Portfolio"},{caption:S(()=>[...t[4]||(t[4]=[W(" © 2026 All rights reserved ",-1)])]),right:S(()=>[...t[5]||(t[5]=[b("span",{class:"demoPill"},"BLOCK #184,291,037",-1)])]),_:1})])]),b("div",Ece,[t[10]||(t[10]=b("span",{class:"jShowcase_title"},"Custom Logo Slot",-1)),b("div",Bce,[p(s,null,{logo:S(()=>[p(l,{name:"diamond",size:"18px",color:"secondary"}),t[7]||(t[7]=b("span",{style:{"letter-spacing":"2px","font-weight":"700"}},"VAULT",-1))]),caption:S(()=>[...t[8]||(t[8]=[W(" Decentralized Finance Protocol ",-1)])]),right:S(()=>[...t[9]||(t[9]=[b("span",{class:"demoPill active"},[b("span",{class:"demoPulseDot"}),W(" LIVE ")],-1)])]),_:1})])]),b("div",Dce,[t[11]||(t[11]=b("span",{class:"jShowcase_title"},"Minimal (Title Only)",-1)),b("div",Pce,[p(s,{title:"Dashboard"})])])])}const Mce=Be(Qce,[["render",jce],["__scopeId","data-v-35f4a855"]]),$ce=Object.freeze(Object.defineProperty({__proto__:null,default:Mce},Symbol.toStringTag,{value:"Module"})),Rce={name:"PortfolioHeader",components:{QBtn:vt,QMenu:$a},props:{alwaysCollapsed:{type:Boolean,default:!1},alwaysExpanded:{type:Boolean,default:!1},title:{type:String,default:"Portfolio Overview"}},data(){return{scrolled:!1,scrollThresholdExpand:120,scrollThresholdCollapse:0}},computed:{},mounted(){if(this.alwaysCollapsed||this.alwaysExpanded)return;let e=null,t=!1;this._onScroll=()=>{t||(e&&clearTimeout(e),e=setTimeout(()=>{e=null,this.scrolled?window.scrollY<=this.scrollThresholdCollapse&&(this.scrolled=!1):window.scrollY>this.scrollThresholdExpand&&(this.scrolled=!0,t=!0,setTimeout(()=>{t=!1},400))},50))},window.addEventListener("scroll",this._onScroll,{passive:!0})},beforeUnmount(){window.removeEventListener("scroll",this._onScroll)}},Oce={class:"portfolioHeader_frame"},Fce={class:"portfolioHeader_topBar"},zce={key:0,class:"portfolioHeader_tag"},Nce={class:"portfolioHeader_tagLabel"},Vce={key:1,class:"portfolioHeader_tag"},Hce={key:2,class:"portfolioHeader_collapsed"},Uce={key:3,class:"portfolioHeader_right"},Wce={key:4,class:"portfolioHeader_menu"},Jce={key:0,class:"portfolioHeader_collapsible"},Gce={class:"portfolioHeader_collapsibleInner"};function Kce(e,t,n,a,o,i){const r=G("QMenu"),s=G("QBtn");return D(),Z("div",{class:nt(["portfolioHeader",{compact:!n.alwaysExpanded&&(n.alwaysCollapsed||o.scrolled)}])},[b("div",Oce,[t[1]||(t[1]=b("div",{class:"portfolioHeader_corner portfolioHeader_cornerTl"},null,-1)),t[2]||(t[2]=b("div",{class:"portfolioHeader_corner portfolioHeader_cornerTr"},null,-1)),t[3]||(t[3]=b("div",{class:"portfolioHeader_corner portfolioHeader_cornerBl"},null,-1)),t[4]||(t[4]=b("div",{class:"portfolioHeader_corner portfolioHeader_cornerBr"},null,-1)),b("div",Fce,[!e.$slots.logo&&n.title?(D(),Z("div",zce,[t[0]||(t[0]=b("span",{class:"portfolioHeader_tagDot"},null,-1)),b("span",Nce,ve(n.title),1)])):Re("",!0),e.$slots.logo?(D(),Z("div",Vce,[_t(e.$slots,"logo",{},void 0)])):Re("",!0),e.$slots.collapsed?(D(),Z("div",Hce,[_t(e.$slots,"collapsed",{},void 0)])):Re("",!0),e.$slots.right?(D(),Z("div",Uce,[_t(e.$slots,"right",{},void 0)])):Re("",!0),e.$slots.menu?(D(),Z("div",Wce,[p(s,{color:"secondary",icon:"more_vert",round:"",flat:""},{default:S(()=>[p(r,null,{default:S(()=>[_t(e.$slots,"menu",{},void 0,!0)]),_:3})]),_:3})])):Re("",!0)]),e.$slots.expanded?(D(),Z("div",Jce,[b("div",Gce,[_t(e.$slots,"expanded",{},void 0)])])):Re("",!0)])],2)}const vl=Be(Rce,[["render",Kce],["__scopeId","data-v-4054f0d6"]]),Yce={USD:"$",EUR:"€",GBP:"£",JPY:"¥",CNY:"¥",KRW:"₩",BTC:"₿",ETH:"Ξ"},Zce={name:"AmountDisplay",props:{amount:{type:Number,required:!0},currency:{type:String,default:"USD"},size:{type:Number,default:48}},computed:{currencySymbol(){return Yce[this.currency]||this.currency},wholeFormatted(){return Math.floor(Math.abs(this.amount)).toLocaleString()},decimalFormatted(){return(Math.abs(this.amount)%1).toFixed(2).substring(2)},subSize(){return Math.round(this.size*.58)}}},Xce={class:"amountDisplay"};function eue(e,t,n,a,o,i){return D(),Z("span",Xce,[b("span",{class:"amountDisplay_currency",style:fn({fontSize:i.subSize+"px"})},ve(i.currencySymbol),5),b("span",{class:"amountDisplay_whole",style:fn({fontSize:n.size+"px"})},ve(i.wholeFormatted),5),b("span",{class:"amountDisplay_decimal",style:fn({fontSize:i.subSize+"px"})},"."+ve(i.decimalFormatted),5)])}const tue=Be(Zce,[["render",eue],["__scopeId","data-v-2119f021"]]),nue={name:"AmountChange",components:{QIcon:Ve},props:{percent:{type:Number,required:!0},amount:{type:String,default:null},period:{type:String,default:null},compact:{type:Boolean,default:!1}},computed:{positive(){return this.percent>=0}}},oue={key:0,class:"amountChange_period"};function aue(e,t,n,a,o,i){const r=G("QIcon");return n.compact?(D(),Z("span",{key:0,class:nt(["amountChange amountChange__compact",i.positive?"positive":"negative"])},ve(i.positive?"+":"")+ve(n.percent)+"% ",3)):(D(),Z("div",{key:1,class:nt(["amountChange",i.positive?"positive":"negative"])},[p(r,{name:i.positive?"arrow_drop_up":"arrow_drop_down",size:"20px"},null,8,["name"]),b("span",null,[W(ve(Math.abs(n.percent))+"% ",1),n.amount?(D(),Z(De,{key:0},[W("("+ve(n.amount)+")",1)],64)):Re("",!0)]),n.period?(D(),Z("span",oue,ve(n.period),1)):Re("",!0)],2))}const iue=Be(nue,[["render",aue],["__scopeId","data-v-35696b43"]]),rue="component",sue={},lue={title:{type:"String",default:"'Portfolio Overview'",desc:"Top-left label displayed with a dot indicator. Ignored when #logo slot is provided.",category:"content"},"always-collapsed":{type:"Boolean",default:"false",desc:"Lock header in compact mode. Disables scroll listener.",category:"behavior"},"always-expanded":{type:"Boolean",default:"false",desc:"Lock header in expanded mode. Disables scroll listener.",category:"behavior"}},cue={logo:{desc:"Replaces the default title + dot indicator with custom content (e.g. icon + brand name)."},collapsed:{desc:"Content shown inline in the top bar only when the header is in compact mode. Useful for a condensed balance display."},expanded:{desc:"Main content area below the top bar. Collapses to 0 height on scroll via CSS grid transition."},right:{desc:"Right side of the top bar. Always visible in desktop. Hidden on mobile (replaced by #menu)."},menu:{desc:"Dropdown menu content shown on mobile via a round icon button. Hidden on desktop."}},uue={},due={},pue={type:rue,meta:sue,props:lue,slots:cue,events:uue,methods:due},fue={name:"ShowcasePortfolioHeader",components:{QBtn:vt,QIcon:Ve,PortfolioHeader:vl,AmountDisplay:tue,AmountChange:iue},label:"Portfolio Header",icon:"web_asset",inject:["showcaseCopy"],apiJson:pue,importName:"PortfolioHeader",code:null,methods:{copy(e){this.showcaseCopy(e)}}},mue={class:"jShowcase_row jShowcase_column"},hue={class:"jShowcase_group"},gue={class:"jShowcase_column"},vue={class:"demoExpanded"},bue={class:"demoBalance"},_ue={class:"demoActions"},yue={class:"jShowcase_group"},wue={class:"jShowcase_column"},Sue={class:"jShowcase_group"},kue={class:"jShowcase_column"},xue={class:"jShowcase_group"},Cue={class:"jShowcase_column"};function Que(e,t,n,a,o,i){const r=G("AmountDisplay"),s=G("AmountChange"),l=G("QBtn"),u=G("PortfolioHeader",!0),c=G("QIcon");return D(),Z("div",mue,[t[9]||(t[9]=b("div",{class:"jShowcase_info"},[b("p",null,[W("Sticky collapsible header that transitions between expanded and compact states on scroll. Colors and background patterns are set per-theme in "),b("code",null,"common.css"),W(".")]),b("div",{class:"jShowcase_infoSection"},[b("span",{class:"jShowcase_infoLabel"},"Scroll behavior"),b("p",null,"Collapses after scrolling past 120px. Expands back only when scrolled to top. A 400ms lock prevents layout-shift retriggering.")])],-1)),b("div",hue,[t[2]||(t[2]=b("span",{class:"jShowcase_title"},"Default (Expanded)",-1)),b("div",gue,[p(u,{title:"Portfolio Overview","always-expanded":""},{collapsed:S(()=>[p(r,{amount:47832.61,currency:"USD",size:16}),p(s,{percent:3.42,compact:""})]),expanded:S(()=>[b("div",vue,[b("div",bue,[t[0]||(t[0]=b("div",{class:"demoBalanceLabel"},"TOTAL PORTFOLIO VALUE",-1)),p(r,{amount:47832.61,currency:"USD",size:48}),p(s,{percent:3.42,amount:"+$1,582.14",period:"24h"})]),b("div",_ue,[p(l,{color:"primary",icon:"north_east",label:"Send"}),p(l,{color:"secondary",icon:"south_west",label:"Receive"}),p(l,{color:"accent",icon:"swap_horiz",label:"Swap"}),p(l,{class:"ghost",icon:"lock",label:"Stake"})])])]),right:S(()=>[...t[1]||(t[1]=[b("span",{class:"demoPill"},"BLOCK #184,291,037",-1)])]),_:1})])]),b("div",yue,[t[4]||(t[4]=b("span",{class:"jShowcase_title"},"Always Collapsed",-1)),b("div",wue,[p(u,{title:"Portfolio Overview","always-collapsed":""},{collapsed:S(()=>[p(r,{amount:47832.61,currency:"USD",size:16}),p(s,{percent:3.42,compact:""})]),right:S(()=>[...t[3]||(t[3]=[b("span",{class:"demoPill"},"BLOCK #184,291,037",-1)])]),_:1})])]),b("div",Sue,[t[7]||(t[7]=b("span",{class:"jShowcase_title"},"Custom Logo Slot",-1)),b("div",kue,[p(u,{"always-collapsed":""},{logo:S(()=>[p(c,{name:"diamond",size:"18px",color:"secondary"}),t[5]||(t[5]=b("span",{style:{"letter-spacing":"2px","font-weight":"700"}},"VAULT",-1))]),collapsed:S(()=>[p(r,{amount:12500,currency:"BTC",size:16})]),right:S(()=>[...t[6]||(t[6]=[b("span",{class:"demoPill active"},[b("span",{class:"demoPulseDot"}),W(" LIVE ")],-1)])]),_:1})])]),b("div",xue,[t[8]||(t[8]=b("span",{class:"jShowcase_title"},"Minimal (Title Only)",-1)),b("div",Cue,[p(u,{title:"Dashboard","always-collapsed":""})])])])}const Aue=Be(fue,[["render",Que],["__scopeId","data-v-6e88e1ff"]]),Iue=Object.freeze(Object.defineProperty({__proto__:null,default:Aue},Symbol.toStringTag,{value:"Module"})),que=`<template>
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
`,Tue=`<template>
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
`,Lue=`<template>
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
`,Eue=`<template>
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
`,Bue=`<template>
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
`,Due=`<template>
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
            </div>
        </div>

        <!-- States -->
        <div class="jShowcase_group">
            <span class="jShowcase_title">States</span>
            <div class="jShowcase_items">
                <QBtnDropdown color="info" label="Loading" loading />
                <QBtnDropdown color="negative" label="Disabled" disable />
                <QBtnDropdown color="secondary" label="Dense" dense />
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
`,Pue=`<template>
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
`,jue=`<template>
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
`,Mue=`<template>
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
`,$ue=`<template>
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
`,Rue=`<template>
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
`,Oue=`<template>
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
`,Fue=`<template>
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
`,zue=`<template>
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
`,Nue=`<template>
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
`,Vue=`<template>
	<JPanel title="SAMPLE PANEL" 
		icon="dashboard" icon-color="var(--q-primary)">
		<div class="q-ma-md">
			Panel content area with default gradient background.
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
`,Hue=`<template>
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
`,Uue=`<template>
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
`,Wue=`<template>
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
`,Jue=`<template>
    <JPanel
        icon-color="var(--q-info)"
        footer-text="Last updated: just now"
    >
        <template #footer>
            <QCheckbox v-model="inlineLabel" label="Inline Label" color="primary" />
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
        <QTabPanels v-model="tab" animated 
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
import { QCheckbox, QTabs, QTab, QTabPanels, QTabPanel } from 'quasar';
import JPanel from '../../../components/JPanel.vue';
import JPanelApi from '../../definitions/Custom/JPanel.json';

export default {
    name: 'ShowcasePanelWithTabs',
    order: 1,
    components: { JPanel, QCheckbox, QTabs, QTab, QTabPanels, QTabPanel },
    data: () => ({
        tab: 'overview',
        inlineLabel: false,
    }),
    label: 'Panel with Tabs',
    icon: 'dashboard',
    apiJson: JPanelApi,
    importName: 'JPanel',
    code: null,
};
<\/script>
`,Gue=`<template>
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
`,Kue=`<template>
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
`,Yue=`<template>
    <div class="jShowcase_row showcaseVertical">
        <QRadio v-model="selected" val="shields" label="Shields" color="primary" />
        <QRadio v-model="selected" val="weapons" label="Weapons" color="accent" />
        <QRadio v-model="selected" val="engines" label="Engines" color="secondary" />
        <QRadio v-model="selected" val="offline" label="Offline" color="negative" disable />
    </div>
</template>

<script>
import { QRadio } from 'quasar';
import QRadioApi from '../../definitions/Quasar/QRadio.json';

export default {
    name: 'ShowcaseQuasarRadio',
    components: { QRadio },
    label: 'Quasar Radio',
    icon: 'edit_note',
    apiJson: QRadioApi,
    importName: 'QRadio',
    importFrom: 'quasar',
    data() {
        return { selected: 'shields' };
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
`,Zue=`<template>
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
`,Xue=`<template>
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
`,ede=`<template>
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
    </div>
</template>

<script>
import { QSlider } from 'quasar';
import QSliderApi from '../../definitions/Quasar/QSlider.json';

export default {
    name: 'ShowcaseQuasarSlider',
    components: { QSlider },
    label: 'Quasar Slider',
    icon: 'edit_note',
    apiJson: QSliderApi,
    importName: 'QSlider',
    importFrom: 'quasar',
    data() {
        return {
            basic: 60,
            labeled: 35,
            stepped: 20,
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
`,tde=`<template>
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
`,nde=`<template>
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
`,ode=`<template>
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
`,ade=`<template>
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
`,ide=`<template>
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
`,rde=`<template>
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
`,sde=`<template>
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
`,Mu=Object.assign({"./01 Colors/AllColors.vue":CZ,"./02 Typography/HelperClasses.vue":PZ,"./02 Typography/Typography.vue":oX,"./03 Icons/Icon.vue":VX,"./04 Buttons/Btn.vue":mee,"./04 Buttons/BtnDropdown.vue":Fee,"./04 Buttons/BtnToggle.vue":ate,"./05 Dialogs/Dialog.vue":Fte,"./06 Helpers/CurrentYear.vue":ene,"./06 Helpers/DarkSwitcher.vue":Lne,"./07 Lists/ActiveList.vue":$ne,"./07 Lists/BasicList.vue":moe,"./07 Lists/DenseList.vue":woe,"./08 Menu/Menu.vue":Uoe,"./09 Panels/Banner.vue":nae,"./09 Panels/BasicPanel.vue":pae,"./09 Panels/Card.vue":Eae,"./09 Panels/PanelWithAction.vue":jae,"./09 Panels/PanelWithFooter.vue":Oae,"./09 Panels/PanelWithTabs.vue":eie,"./10 Quasar_Inputs/Checkbox.vue":die,"./10 Quasar_Inputs/Input.vue":Die,"./10 Quasar_Inputs/Radio.vue":Wie,"./10 Quasar_Inputs/Rating.vue":lre,"./10 Quasar_Inputs/Select.vue":qre,"./10 Quasar_Inputs/Slider.vue":Xre,"./10 Quasar_Inputs/Toggle.vue":use,"./11 Quasar_Others/Chip.vue":hse,"./11 Quasar_Others/CircularProgress.vue":Ise,"./11 Quasar_Others/Spinner.vue":Ile,"./11 Quasar_Others/Tabs.vue":oce,"./Footers/PortfolioFooter.vue":$ce,"./Headers/PortfolioHeader.vue":Iue}),lde=Object.assign({"./01 Colors/AllColors.vue":que,"./02 Typography/HelperClasses.vue":Tue,"./02 Typography/Typography.vue":Lue,"./03 Icons/Icon.vue":Eue,"./04 Buttons/Btn.vue":Bue,"./04 Buttons/BtnDropdown.vue":Due,"./04 Buttons/BtnToggle.vue":Pue,"./05 Dialogs/Dialog.vue":jue,"./06 Helpers/CurrentYear.vue":Mue,"./06 Helpers/DarkSwitcher.vue":$ue,"./07 Lists/ActiveList.vue":Rue,"./07 Lists/BasicList.vue":Oue,"./07 Lists/DenseList.vue":Fue,"./08 Menu/Menu.vue":zue,"./09 Panels/Banner.vue":Nue,"./09 Panels/BasicPanel.vue":Vue,"./09 Panels/Card.vue":Hue,"./09 Panels/PanelWithAction.vue":Uue,"./09 Panels/PanelWithFooter.vue":Wue,"./09 Panels/PanelWithTabs.vue":Jue,"./10 Quasar_Inputs/Checkbox.vue":Gue,"./10 Quasar_Inputs/Input.vue":Kue,"./10 Quasar_Inputs/Radio.vue":Yue,"./10 Quasar_Inputs/Rating.vue":Zue,"./10 Quasar_Inputs/Select.vue":Xue,"./10 Quasar_Inputs/Slider.vue":ede,"./10 Quasar_Inputs/Toggle.vue":tde,"./11 Quasar_Others/Chip.vue":nde,"./11 Quasar_Others/CircularProgress.vue":ode,"./11 Quasar_Others/Spinner.vue":ade,"./11 Quasar_Others/Tabs.vue":ide,"./Footers/PortfolioFooter.vue":rde,"./Headers/PortfolioHeader.vue":sde}),Vo={},nm={};for(const e in Mu){const t=e.split("/"),n=t[1],a=n.replace(/^\d+\s*/,""),o=t[2].replace(".vue",""),i=Mu[e].default;Vo[a]||(Vo[a]=[],nm[a]=n),Vo[a].push({name:o,label:i.label||o,icon:i.icon||null,order:i.order??999,code:i.code||null,raw:lde[e]||null,component:i})}for(const e in Vo)Vo[e].sort((t,n)=>t.order-n.order);const cde=Object.assign({"../../../docs/CustomComponents.md":XY,"../../../docs/MCP.md":eZ,"../../../docs/SHOWCASE.md":tZ,"../../../docs/THEMING.md":nZ,"../../../docs/USAGE.md":oZ}),ude=Object.assign({"../../../README.md":aZ});function dde(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1 $2")}function $u(e){const t=e.component||e,n=e.name||t.name||"Unknown";return{type:"component",name:n,label:t.label||dde(n),icon:t.icon||null,order:t.order??999,code:t.code??null,raw:e.raw||null,component:t}}function pde(){const e={};for(const t of Object.values(ude))e.README=t;for(const[t,n]of Object.entries(cde))e[t.split("/").pop().replace(".md","")]=n;return e}function fde(e){return{...pde(),...e}}function mde(e){const t={...nm},n={};for(const[i,r]of Object.entries(Vo))n[i]=r.map($u);for(const[i,r]of Object.entries(e||{})){const s=i.replace(/^\d+\s*/,"");t[s]||(t[s]=i);const l=Array.isArray(r)?r:[r];n[s]||(n[s]=[]);for(const u of l)n[s].push($u(u));n[s].sort((u,c)=>u.order-c.order)}const a={},o=Object.keys(n).sort((i,r)=>(t[i]||i).localeCompare(t[r]||r));for(const i of o)a[i]=n[i];return a}function hde(e,t){const n=window.location.hash.replace("#","");let o=Object.keys(t).includes("README")?"README":Object.keys(e)[0]||"",i=0;if(n){const[r,s]=n.split("/");if(r==="docs"&&s&&t[s])o=s;else if(o=e[r]?r:o,s&&e[o]){const l=e[o].findIndex(u=>u.name===s);l>=0&&(i=l)}}return{tab:o,index:i}}const gde={name:"JComponentShowcase",mixins:[mb],components:{ShowcaseNav:Eb,ShowcaseMain:$b,ShowcaseReference:FY,ShowcaseToast:WY,ShowcaseDocs:YY},props:{importFrom:{type:String,default:"varmory"},components:{type:Object,default:()=>({})},docs:{type:Object,default:()=>({})}},provide(){return{showcaseCopy:(e,t)=>{xp(e);const n=e.length>60?e.slice(0,57)+"...":e;this.$refs.toast.notify(`Copied "${n}"`,t||"content_copy")}}},data(){const{tab:e,index:t}=hde(this.components,this.docs);return{activeTab:e,selectedIndex:t}},computed:{activeItems(){return this.components[this.activeTab]||[]},selectedItem(){return this.activeItems[this.selectedIndex]||null},activeCode(){var e,t;return((e=this.selectedItem)==null?void 0:e.code)||ZY((t=this.selectedItem)==null?void 0:t.raw)||""},selectedKey(){return this.activeTab+"-"+this.selectedIndex},hasApiDoc(){var t;const e=(t=this.selectedItem)==null?void 0:t.component;return!!(e!=null&&e.apiJson||e!=null&&e.apiUrl||e!=null&&e.importName)},docPageNames(){return Object.keys(this.docs)},isDocPage(){return this.docPageNames.includes(this.activeTab)}},methods:{updateHash(){var t;const e=this.isDocPage?this.activeTab:(t=this.selectedItem)==null?void 0:t.name;if(e){const n=this.isDocPage?`#docs/${e}`:`#${this.activeTab}/${e}`;window.location.hash!==n&&history.replaceState(null,"",n)}},syncApiDoc(){var t;const e=(t=this.selectedItem)==null?void 0:t.component;this.apiJson=(e==null?void 0:e.apiJson)||null,this.apiUrl=!(e!=null&&e.apiJson)&&(e!=null&&e.apiUrl)?e.apiUrl:null,this.apiImportName=(e==null?void 0:e.importName)||null,this.apiImportFrom=(e==null?void 0:e.importFrom)||this.importFrom||null},selectItem({category:e,name:t}){const a=(this.components[e]||[]).findIndex(o=>o.name===t);this.activeTab=e,this.selectedIndex=a>=0?a:0},selectDoc(e){this.docs[e]&&(this.activeTab=e)},showToast(e,t){const n=++toastId;this.toasts.push({id:n,message:e,icon:t}),setTimeout(()=>{const a=this.toasts.findIndex(o=>o.id===n);a>=0&&this.toasts.splice(a,1)},2500)}},mounted(){this._onHashChange=()=>{const e=window.location.hash.replace("#","");if(!e)return;const[t,n]=e.split("/");t==="docs"&&n&&this.docs[n]?this.selectDoc(n):t&&n&&this.components[t]&&this.selectItem({category:t,name:n})},window.addEventListener("hashchange",this._onHashChange)},beforeUnmount(){window.removeEventListener("hashchange",this._onHashChange)},watch:{selectedItem:{immediate:!0,handler(){this.syncApiDoc(),this.updateHash()}},activeTab(){this.updateHash()}}},vde={class:"q-pa-sm"},bde={class:"row q-col-gutter-md"},_de={class:"col-12 col-sm-4 col-md-2"},yde={class:"col-12 col-sm-8 col-md-10"},wde={key:1,class:"row q-col-gutter-md"},Sde={class:"col-12 col-md-6"},kde={class:"col-12 col-md-6"};function xde(e,t,n,a,o,i){var d,f;const r=G("ShowcaseNav"),s=G("ShowcaseDocs"),l=G("ShowcaseMain"),u=G("ShowcaseReference"),c=G("ShowcaseToast");return D(),Z("div",vde,[b("div",bde,[b("div",_de,[p(r,{"active-tab":o.activeTab,"selected-name":i.isDocPage?null:(d=i.selectedItem)==null?void 0:d.name,categories:n.components,"doc-pages":i.docPageNames,"active-doc":i.isDocPage?o.activeTab:null,onSelect:i.selectItem,onSelectDoc:i.selectDoc},null,8,["active-tab","selected-name","categories","doc-pages","active-doc","onSelect","onSelectDoc"])]),b("div",yde,[i.isDocPage?(D(),pe(s,{key:0,docs:n.docs,"active-page":o.activeTab,onNavigate:i.selectDoc},null,8,["docs","active-page","onNavigate"])):(D(),Z("div",wde,[b("div",Sde,[p(l,{item:i.selectedItem},null,8,["item"])]),b("div",kde,[p(u,{code:i.activeCode,"code-key":i.selectedKey,"has-api":i.hasApiDoc,"docs-url":e.apiDocsUrl,title:e.apiTagName||((f=i.selectedItem)==null?void 0:f.name)||"REFERENCE","is-tag-name":!!e.apiTagName},null,8,["code","code-key","has-api","docs-url","title","is-tag-name"])])]))])]),p(c,{ref:"toast",position:"bottom"},null,512)])}const bl=Be(gde,[["render",xde],["__scopeId","data-v-70851002"]]),Cde={name:"JComponentShowcaseWithContent",components:{JComponentShowcase:bl},inheritAttrs:!1,props:{components:{type:Object,default:()=>({})},docs:{type:Object,default:()=>({})}},computed:{allComponents(){return mde(this.components)},allDocs(){return fde(this.docs)}}};function Qde(e,t,n,a,o,i){const r=G("JComponentShowcase");return D(),pe(r,Os({components:i.allComponents,docs:i.allDocs},e.$attrs),null,16,["components","docs"])}const om=Be(Cde,[["render",Qde]]),Ade={name:"JThemeSwitcher",components:{QSelect:dl,QIcon:Ve,QItem:Tn,QItemSection:Ln},data(){return{themeIcons:{default:"palette",rpg:"auto_fix_high",space:"rocket_launch",finance:"account_balance"}}},computed:{themeStore(){try{return fl()}catch{return null}},themeNames(){var t;const e=(t=this.themeStore)==null?void 0:t.themes;return e?Object.keys(e):[]},themeOptions(){return this.themeNames.map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)}))},currentTheme(){var e;return((e=this.themeStore)==null?void 0:e.currentTheme)??null},themeLocked(){var e;return((e=this.themeStore)==null?void 0:e.themeLocked)??!0}},methods:{async switchTheme(e){if(e===this.currentTheme)return;const t=this.themeStore;t.currentTheme=e;const n=document.createElement("div");n.className="jThemeSwitcher_overlay",document.body.appendChild(n),n.offsetHeight,n.classList.add("active"),await new Promise(a=>setTimeout(a,150)),await t.applyTheme(e,t.isDark),await new Promise(a=>setTimeout(a,200)),n.classList.remove("active"),n.addEventListener("transitionend",()=>n.remove(),{once:!0})}}};function Ide(e,t,n,a,o,i){const r=G("QIcon"),s=G("QItemSection"),l=G("QItem"),u=G("QSelect");return D(),pe(u,{"model-value":i.currentTheme,options:i.themeOptions,disable:i.themeLocked,"option-value":"value","option-label":"label","emit-value":"","map-options":"",class:"jThemeSwitcher","popup-content-class":"jThemeSwitcher_popup","onUpdate:modelValue":i.switchTheme},{prepend:S(()=>[p(r,{name:o.themeIcons[i.currentTheme]||"brush",size:"16px",class:"jThemeSwitcher_selectIcon"},null,8,["name"])]),option:S(({itemProps:c,opt:d})=>[p(l,Os(c,{class:"jThemeSwitcher_popupItem"}),{default:S(()=>[p(s,{avatar:""},{default:S(()=>[p(r,{name:o.themeIcons[d.value]||"brush",size:"16px"},null,8,["name"])]),_:2},1024),p(s,null,{default:S(()=>[W(ve(d.label),1)]),_:2},1024)]),_:2},1040)]),_:1},8,["model-value","options","disable","onUpdate:modelValue"])}const am=Be(Ade,[["render",Ide]]),qde="modulepreload",Tde=function(e,t){return new URL(e,t).href},Ru={},Wt=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(n.map(u=>{if(u=Tde(u,a),u in Ru)return;Ru[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!a)for(let _=r.length-1;_>=0;_--){const I=r[_];if(I.href===u&&(!c||I.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":qde,c||(h.as="script"),h.crossOrigin="",h.href=u,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((_,I)=>{h.addEventListener("load",_),h.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return o.then(r=>{for(const s of r||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Ou=Object.assign({"./default/dark.css":()=>Wt(()=>import("./dark.js"),[],import.meta.url).then(e=>e.default),"./finance/dark.css":()=>Wt(()=>import("./dark2.js"),[],import.meta.url).then(e=>e.default),"./rpg/dark.css":()=>Wt(()=>import("./dark3.js"),[],import.meta.url).then(e=>e.default),"./space/dark.css":()=>Wt(()=>import("./dark4.js"),[],import.meta.url).then(e=>e.default)}),Fu=Object.assign({"./default/light.css":()=>Wt(()=>import("./light.js"),[],import.meta.url).then(e=>e.default),"./finance/light.css":()=>Wt(()=>import("./light2.js"),[],import.meta.url).then(e=>e.default),"./rpg/light.css":()=>Wt(()=>import("./light3.js"),[],import.meta.url).then(e=>e.default),"./space/light.css":()=>Wt(()=>import("./light4.js"),[],import.meta.url).then(e=>e.default)}),zu=Object.assign({"./default/common.css":()=>Wt(()=>import("./common.js"),[],import.meta.url).then(e=>e.default),"./finance/common.css":()=>Wt(()=>import("./common2.js"),[],import.meta.url).then(e=>e.default),"./rpg/common.css":()=>Wt(()=>import("./common3.js"),[],import.meta.url).then(e=>e.default),"./space/common.css":()=>Wt(()=>import("./common4.js"),[],import.meta.url).then(e=>e.default)}),hn={};for(const e in Ou){const t=e.split("/")[1];hn[t]=hn[t]||{},hn[t].dark=Ou[e]}for(const e in Fu){const t=e.split("/")[1];hn[t]=hn[t]||{},hn[t].light=Fu[e]}for(const e in zu){const t=e.split("/")[1];hn[t]=hn[t]||{},hn[t].common=zu[e]}const Lde={install(e,t){if(e.use(bv,t),e.component("JPanel",qn),e.component("JComponentShowcase",bl),e.component("JComponentShowcaseWithContent",om),e.component("PortfolioHeader",vl),e.component("PortfolioFooter",gl),e.component("JCurrentYear",pl),e.component("JDarkSwitcher",ml),e.component("JThemeSwitcher",am),(t==null?void 0:t.themes)!==null&&(t==null?void 0:t.themes)!==!1){const n=fl(),a=t==null?void 0:t.theme,o=a&&typeof a=="object",i=o?{default:a}:{...hn,...t==null?void 0:t.themes};n.initialize({theme:o?"default":a||"default",themes:i})}}},Ede={name:"Test",components:{QBtn:vt},icon:"info",label:"Test Btn",apiJson:Qf,importName:"QBtn",importFrom:"quasar"},Bde={class:"jShowcase_row jShowcase_column"},Dde={class:"jShowcase_group"},Pde={class:"jShowcase_items"};function jde(e,t,n,a,o,i){const r=G("QBtn");return D(),Z("div",Bde,[b("div",Dde,[t[0]||(t[0]=b("span",{class:"jShowcase_title"},"Variants",-1)),b("div",Pde,[p(r,{color:"primary",label:"Default"}),p(r,{flat:"",color:"primary",label:"Flat"}),p(r,{outline:"",color:"primary",label:"Outline"}),p(r,{unelevated:"",color:"primary",label:"Unelevated"}),p(r,{push:"",color:"primary",label:"Push"}),p(r,{glossy:"",color:"primary",label:"Glossy"})])])])}const Mde=Be(Ede,[["render",jde]]),$de={components:{JComponentShowcaseWithContent:om,JComponentShowcase:bl,PortfolioHeader:vl,PortfolioFooter:gl,JThemeSwitcher:am,QBtn:vt,QList:fo,QItem:Tn,QItemSection:Ln,QIcon:Ve,QMenu:$a,JCurrentYear:pl,JDarkSwitcher:ml},data(){return{}},computed:{components(){return{"91 Test Category":[Mde]}}},mounted(){},methods:{}},Rde={class:"text-center"};function Ode(e,t,n,a,o,i){const r=G("JThemeSwitcher"),s=G("JDarkSwitcher"),l=G("PortfolioHeader"),u=G("JComponentShowcaseWithContent"),c=G("JCurrentYear"),d=G("PortfolioFooter");return D(),Z("div",null,[p(l,{class:"q-pa-sm",title:"vArmory",alwaysCollapsed:""},{collapsed:S(()=>[t[0]||(t[0]=b("span",{class:"appHeaderThemeLabel"},"Theme:",-1)),p(r,{outlined:"",dense:""})]),right:S(()=>[p(s)]),_:1}),p(u,{components:i.components},null,8,["components"]),p(d,{title:"vArmory",class:"q-pa-sm q-mt-xl"},{expanded:S(()=>[...t[1]||(t[1]=[b("div",{class:"footerColumn"},[b("span",{class:"footerColumnHeading"},"Platform"),b("a",{class:"footerLink",href:"#"},"Dashboard"),b("a",{class:"footerLink",href:"#"},"Portfolio"),b("a",{class:"footerLink",href:"#"},"Staking"),b("a",{class:"footerLink",href:"#"},"Swap")],-1),b("div",{class:"footerColumn"},[b("span",{class:"footerColumnHeading"},"Resources"),b("a",{class:"footerLink",href:"#"},"Documentation"),b("a",{class:"footerLink",href:"#"},"API Reference"),b("a",{class:"footerLink",href:"#"},"Status Page")],-1),b("div",{class:"footerColumn"},[b("span",{class:"footerColumnHeading"},"Community"),b("a",{class:"footerLink",href:"#"},"Discord"),b("a",{class:"footerLink",href:"#"},"Twitter"),b("a",{class:"footerLink",href:"#"},"GitHub")],-1)])]),bottom:S(()=>[b("div",Rde,[t[2]||(t[2]=W(" © ",-1)),p(c),t[3]||(t[3]=W(" vArmory ",-1))])]),_:1})])}const Fde=Be($de,[["render",Ode]]);Ug(Fde).use(tne()).use(Lde,{theme:"space"}).mount("#app");
