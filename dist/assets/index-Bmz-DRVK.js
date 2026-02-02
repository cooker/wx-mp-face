var Pd=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var DC=Pd((NC,Fd)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ze={},Xr=[],wn=()=>{},sf=()=>!1,sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tu=n=>n.startsWith("onUpdate:"),Et=Object.assign,nu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Md=Object.prototype.hasOwnProperty,Le=(n,t)=>Md.call(n,t),ye=Array.isArray,Yr=n=>Ko(n)==="[object Map]",ua=n=>Ko(n)==="[object Set]",Ec=n=>Ko(n)==="[object Date]",Ie=n=>typeof n=="function",et=n=>typeof n=="string",In=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",uf=n=>(je(n)||Ie(n))&&Ie(n.then)&&Ie(n.catch),cf=Object.prototype.toString,Ko=n=>cf.call(n),Od=n=>Ko(n).slice(8,-1),lf=n=>Ko(n)==="[object Object]",ru=n=>et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Co=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Bd=/-\w/g,cr=ca(n=>n.replace(Bd,t=>t.slice(1).toUpperCase())),Ld=/\B([A-Z])/g,Nr=ca(n=>n.replace(Ld,"-$1").toLowerCase()),ff=ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=ca(n=>n?`on${ff(n)}`:""),or=(n,t)=>!Object.is(n,t),Ii=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},hf=(n,t,e,r=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:r,value:e})},Wd=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ic;const la=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ir(n){if(ye(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],o=et(r)?Hd(r):ir(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(et(n)||je(n))return n}const Ud=/;(?![^(]*\))/g,Vd=/:([^]+)/,zd=/\/\*[^]*?\*\//g;function Hd(n){const t={};return n.replace(zd,"").split(Ud).forEach(e=>{if(e){const r=e.split(Vd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $o(n){let t="";if(et(n))t=n;else if(ye(n))for(let e=0;e<n.length;e++){const r=$o(n[e]);r&&(t+=r+" ")}else if(je(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jd=eu(Gd);function pf(n){return!!n||n===""}function qd(n,t){if(n.length!==t.length)return!1;let e=!0;for(let r=0;e&&r<n.length;r++)e=fa(n[r],t[r]);return e}function fa(n,t){if(n===t)return!0;let e=Ec(n),r=Ec(t);if(e||r)return e&&r?n.getTime()===t.getTime():!1;if(e=In(n),r=In(t),e||r)return n===t;if(e=ye(n),r=ye(t),e||r)return e&&r?qd(n,t):!1;if(e=je(n),r=je(t),e||r){if(!e||!r)return!1;const o=Object.keys(n).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in n){const s=n.hasOwnProperty(a),u=t.hasOwnProperty(a);if(s&&!u||!s&&u||!fa(n[a],t[a]))return!1}}return String(n)===String(t)}function df(n,t){return n.findIndex(e=>fa(e,t))}const vf=n=>!!(n&&n.__v_isRef===!0),lr=n=>et(n)?n:n==null?"":ye(n)||je(n)&&(n.toString===cf||!Ie(n.toString))?vf(n)?lr(n.value):JSON.stringify(n,gf,2):String(n),gf=(n,t)=>vf(t)?gf(n,t.value):Yr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,o],i)=>(e[Oa(r,i)+" =>"]=o,e),{})}:ua(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Oa(e))}:In(t)?Oa(t):je(t)&&!ye(t)&&!lf(t)?String(t):t,Oa=(n,t="")=>{var e;return In(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class Kd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!t&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Nt;try{return Nt=this,t()}finally{Nt=e}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){this._on>0&&--this._on===0&&(Nt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(this.effects.length=0,e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function $d(){return Nt}let Ge;const Ba=new WeakSet;class mf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ba.has(this)&&(Ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rc(this),xf(this);const t=Ge,e=on;Ge=this,on=!0;try{return this.fn()}finally{wf(this),Ge=t,on=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)au(t);this.deps=this.depsTail=void 0,Rc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bs(this)&&this.run()}get dirty(){return bs(this)}}let yf=0,Eo,Io;function bf(n,t=!1){if(n.flags|=8,t){n.next=Io,Io=n;return}n.next=Eo,Eo=n}function ou(){yf++}function iu(){if(--yf>0)return;if(Io){let t=Io;for(Io=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Eo;){let t=Eo;for(Eo=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){n||(n=r)}t=e}}if(n)throw n}function xf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function wf(n){let t,e=n.depsTail,r=e;for(;r;){const o=r.prevDep;r.version===-1?(r===e&&(e=o),au(r),Xd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=o}n.deps=t,n.depsTail=e}function bs(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_f(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function _f(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Po)||(n.globalVersion=Po,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bs(n))))return;n.flags|=2;const t=n.dep,e=Ge,r=on;Ge=n,on=!0;try{xf(n);const o=n.fn(n._value);(t.version===0||or(o,n._value))&&(n.flags|=128,n._value=o,t.version++)}catch(o){throw t.version++,o}finally{Ge=e,on=r,wf(n),n.flags&=-3}}function au(n,t=!1){const{dep:e,prevSub:r,nextSub:o}=n;if(r&&(r.nextSub=o,n.prevSub=void 0),o&&(o.prevSub=r,n.nextSub=void 0),e.subs===n&&(e.subs=r,!r&&e.computed)){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)au(i,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Xd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let on=!0;const Cf=[];function Vn(){Cf.push(on),on=!1}function zn(){const n=Cf.pop();on=n===void 0?!0:n}function Rc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ge;Ge=void 0;try{t()}finally{Ge=e}}}let Po=0;class Yd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ge||!on||Ge===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ge)e=this.activeLink=new Yd(Ge,this),Ge.deps?(e.prevDep=Ge.depsTail,Ge.depsTail.nextDep=e,Ge.depsTail=e):Ge.deps=Ge.depsTail=e,Ef(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const r=e.nextDep;r.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=r),e.prevDep=Ge.depsTail,e.nextDep=void 0,Ge.depsTail.nextDep=e,Ge.depsTail=e,Ge.deps===e&&(Ge.deps=r)}return e}trigger(t){this.version++,Po++,this.notify(t)}notify(t){ou();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{iu()}}}function Ef(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ef(r)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const xs=new WeakMap,Rr=Symbol(""),ws=Symbol(""),Mo=Symbol("");function bt(n,t,e){if(on&&Ge){let r=xs.get(n);r||xs.set(n,r=new Map);let o=r.get(e);o||(r.set(e,o=new su),o.map=r,o.key=e),o.track()}}function Bn(n,t,e,r,o,i){const a=xs.get(n);if(!a){Po++;return}const s=u=>{u&&u.trigger()};if(ou(),t==="clear")a.forEach(s);else{const u=ye(n),c=u&&ru(e);if(u&&e==="length"){const l=Number(r);a.forEach((f,h)=>{(h==="length"||h===Mo||!In(h)&&h>=l)&&s(f)})}else switch((e!==void 0||a.has(void 0))&&s(a.get(e)),c&&s(a.get(Mo)),t){case"add":u?c&&s(a.get("length")):(s(a.get(Rr)),Yr(n)&&s(a.get(ws)));break;case"delete":u||(s(a.get(Rr)),Yr(n)&&s(a.get(ws)));break;case"set":Yr(n)&&s(a.get(Rr));break}}iu()}function Wr(n){const t=Be(n);return t===n?t:(bt(t,"iterate",Mo),en(n)?t:t.map(un))}function ha(n){return bt(n=Be(n),"iterate",Mo),n}function Zn(n,t){return Hn(n)?so(Sr(n)?un(t):t):un(t)}const Jd={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,n=>Zn(this,n))},concat(...n){return Wr(this).concat(...n.map(t=>ye(t)?Wr(t):t))},entries(){return La(this,"entries",n=>(n[1]=Zn(this,n[1]),n))},every(n,t){return Fn(this,"every",n,t,void 0,arguments)},filter(n,t){return Fn(this,"filter",n,t,e=>e.map(r=>Zn(this,r)),arguments)},find(n,t){return Fn(this,"find",n,t,e=>Zn(this,e),arguments)},findIndex(n,t){return Fn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Fn(this,"findLast",n,t,e=>Zn(this,e),arguments)},findLastIndex(n,t){return Fn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Fn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return Wr(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,t){return Fn(this,"map",n,t,void 0,arguments)},pop(){return go(this,"pop")},push(...n){return go(this,"push",n)},reduce(n,...t){return Sc(this,"reduce",n,t)},reduceRight(n,...t){return Sc(this,"reduceRight",n,t)},shift(){return go(this,"shift")},some(n,t){return Fn(this,"some",n,t,void 0,arguments)},splice(...n){return go(this,"splice",n)},toReversed(){return Wr(this).toReversed()},toSorted(n){return Wr(this).toSorted(n)},toSpliced(...n){return Wr(this).toSpliced(...n)},unshift(...n){return go(this,"unshift",n)},values(){return La(this,"values",n=>Zn(this,n))}};function La(n,t,e){const r=ha(n),o=r[t]();return r!==n&&!en(n)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=e(i.value)),i}),o}const Qd=Array.prototype;function Fn(n,t,e,r,o,i){const a=ha(n),s=a!==n&&!en(n),u=a[t];if(u!==Qd[t]){const f=u.apply(n,i);return s?un(f):f}let c=e;a!==n&&(s?c=function(f,h){return e.call(this,Zn(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const l=u.call(a,c,r);return s&&o?o(l):l}function Sc(n,t,e,r){const o=ha(n);let i=e;return o!==n&&(en(n)?e.length>3&&(i=function(a,s,u){return e.call(this,a,s,u,n)}):i=function(a,s,u){return e.call(this,a,Zn(n,s),u,n)}),o[t](i,...r)}function Wa(n,t,e){const r=Be(n);bt(r,"iterate",Mo);const o=r[t](...e);return(o===-1||o===!1)&&fu(e[0])?(e[0]=Be(e[0]),r[t](...e)):o}function go(n,t,e=[]){Vn(),ou();const r=Be(n)[t].apply(n,e);return iu(),zn(),r}const Zd=eu("__proto__,__v_isRef,__isVue"),If=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(In));function ev(n){In(n)||(n=String(n));const t=Be(this);return bt(t,"has",n),t.hasOwnProperty(n)}class Rf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){if(e==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(o?i?lv:Df:i?Af:kf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=ye(t);if(!o){let u;if(a&&(u=Jd[e]))return u;if(e==="hasOwnProperty")return ev}const s=Reflect.get(t,e,rt(t)?t:r);if((In(e)?If.has(e):Zd(e))||(o||bt(t,"get",e),i))return s;if(rt(s)){const u=a&&ru(e)?s:s.value;return o&&je(u)?Cs(u):u}return je(s)?o?Cs(s):cu(s):s}}class Sf extends Rf{constructor(t=!1){super(!1,t)}set(t,e,r,o){let i=t[e];const a=ye(t)&&ru(e);if(!this._isShallow){const c=Hn(i);if(!en(r)&&!Hn(r)&&(i=Be(i),r=Be(r)),!a&&rt(i)&&!rt(r))return c||(i.value=r),!0}const s=a?Number(e)<t.length:Le(t,e),u=Reflect.set(t,e,r,rt(t)?t:o);return t===Be(o)&&(s?or(r,i)&&Bn(t,"set",e,r):Bn(t,"add",e,r)),u}deleteProperty(t,e){const r=Le(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&r&&Bn(t,"delete",e,void 0),o}has(t,e){const r=Reflect.has(t,e);return(!In(e)||!If.has(e))&&bt(t,"has",e),r}ownKeys(t){return bt(t,"iterate",ye(t)?"length":Rr),Reflect.ownKeys(t)}}class tv extends Rf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const nv=new Sf,rv=new tv,ov=new Sf(!0),_s=n=>n,si=n=>Reflect.getPrototypeOf(n);function iv(n,t,e){return function(...r){const o=this.__v_raw,i=Be(o),a=Yr(i),s=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,c=o[n](...r),l=e?_s:t?so:un;return!t&&bt(i,"iterate",u?ws:Rr),Et(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:s?[l(f[0]),l(f[1])]:l(f),done:h}}})}}function ui(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function av(n,t){const e={get(o){const i=this.__v_raw,a=Be(i),s=Be(o);n||(or(o,s)&&bt(a,"get",o),bt(a,"get",s));const{has:u}=si(a),c=t?_s:n?so:un;if(u.call(a,o))return c(i.get(o));if(u.call(a,s))return c(i.get(s));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!n&&bt(Be(o),"iterate",Rr),o.size},has(o){const i=this.__v_raw,a=Be(i),s=Be(o);return n||(or(o,s)&&bt(a,"has",o),bt(a,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const a=this,s=a.__v_raw,u=Be(s),c=t?_s:n?so:un;return!n&&bt(u,"iterate",Rr),s.forEach((l,f)=>o.call(i,c(l),c(f),a))}};return Et(e,n?{add:ui("add"),set:ui("set"),delete:ui("delete"),clear:ui("clear")}:{add(o){!t&&!en(o)&&!Hn(o)&&(o=Be(o));const i=Be(this);return si(i).has.call(i,o)||(i.add(o),Bn(i,"add",o,o)),this},set(o,i){!t&&!en(i)&&!Hn(i)&&(i=Be(i));const a=Be(this),{has:s,get:u}=si(a);let c=s.call(a,o);c||(o=Be(o),c=s.call(a,o));const l=u.call(a,o);return a.set(o,i),c?or(i,l)&&Bn(a,"set",o,i):Bn(a,"add",o,i),this},delete(o){const i=Be(this),{has:a,get:s}=si(i);let u=a.call(i,o);u||(o=Be(o),u=a.call(i,o)),s&&s.call(i,o);const c=i.delete(o);return u&&Bn(i,"delete",o,void 0),c},clear(){const o=Be(this),i=o.size!==0,a=o.clear();return i&&Bn(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=iv(o,n,t)}),e}function uu(n,t){const e=av(n,t);return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(Le(e,o)&&o in r?e:r,o,i)}const sv={get:uu(!1,!1)},uv={get:uu(!1,!0)},cv={get:uu(!0,!1)},kf=new WeakMap,Af=new WeakMap,Df=new WeakMap,lv=new WeakMap;function fv(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hv(n){return n.__v_skip||!Object.isExtensible(n)?0:fv(Od(n))}function cu(n){return Hn(n)?n:lu(n,!1,nv,sv,kf)}function pv(n){return lu(n,!1,ov,uv,Af)}function Cs(n){return lu(n,!0,rv,cv,Df)}function lu(n,t,e,r,o){if(!je(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=hv(n);if(i===0)return n;const a=o.get(n);if(a)return a;const s=new Proxy(n,i===2?r:e);return o.set(n,s),s}function Sr(n){return Hn(n)?Sr(n.__v_raw):!!(n&&n.__v_isReactive)}function Hn(n){return!!(n&&n.__v_isReadonly)}function en(n){return!!(n&&n.__v_isShallow)}function fu(n){return n?!!n.__v_raw:!1}function Be(n){const t=n&&n.__v_raw;return t?Be(t):n}function dv(n){return!Le(n,"__v_skip")&&Object.isExtensible(n)&&hf(n,"__v_skip",!0),n}const un=n=>je(n)?cu(n):n,so=n=>je(n)?Cs(n):n;function rt(n){return n?n.__v_isRef===!0:!1}function kt(n){return vv(n,!1)}function vv(n,t){return rt(n)?n:new gv(n,t)}class gv{constructor(t,e){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Be(t),this._value=e?t:un(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,r=this.__v_isShallow||en(t)||Hn(t);t=r?t:Be(t),or(t,e)&&(this._rawValue=t,this._value=r?t:un(t),this.dep.trigger())}}function Ue(n){return rt(n)?n.value:n}const mv={get:(n,t,e)=>t==="__v_raw"?n:Ue(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const o=n[t];return rt(o)&&!rt(e)?(o.value=e,!0):Reflect.set(n,t,e,r)}};function Tf(n){return Sr(n)?n:new Proxy(n,mv)}class yv{constructor(t,e,r){this.fn=t,this.setter=e,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Po-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return bf(this,!0),!0}get value(){const t=this.dep.track();return _f(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function bv(n,t,e=!1){let r,o;return Ie(n)?r=n:(r=n.get,o=n.set),new yv(r,o,e)}const ci={},Ti=new WeakMap;let xr;function xv(n,t=!1,e=xr){if(e){let r=Ti.get(e);r||Ti.set(e,r=[]),r.push(n)}}function wv(n,t,e=ze){const{immediate:r,deep:o,once:i,scheduler:a,augmentJob:s,call:u}=e,c=y=>o?y:en(y)||o===!1||o===0?Ln(y,1):Ln(y);let l,f,h,p,d=!1,g=!1;if(rt(n)?(f=()=>n.value,d=en(n)):Sr(n)?(f=()=>c(n),d=!0):ye(n)?(g=!0,d=n.some(y=>Sr(y)||en(y)),f=()=>n.map(y=>{if(rt(y))return y.value;if(Sr(y))return c(y);if(Ie(y))return u?u(y,2):y()})):Ie(n)?t?f=u?()=>u(n,2):n:f=()=>{if(h){Vn();try{h()}finally{zn()}}const y=xr;xr=l;try{return u?u(n,3,[p]):n(p)}finally{xr=y}}:f=wn,t&&o){const y=f,w=o===!0?1/0:o;f=()=>Ln(y(),w)}const v=$d(),m=()=>{l.stop(),v&&v.active&&nu(v.effects,l)};if(i&&t){const y=t;t=(...w)=>{y(...w),m()}}let b=g?new Array(n.length).fill(ci):ci;const x=y=>{if(!(!(l.flags&1)||!l.dirty&&!y))if(t){const w=l.run();if(o||d||(g?w.some((_,k)=>or(_,b[k])):or(w,b))){h&&h();const _=xr;xr=l;try{const k=[w,b===ci?void 0:g&&b[0]===ci?[]:b,p];b=w,u?u(t,3,k):t(...k)}finally{xr=_}}}else l.run()};return s&&s(x),l=new mf(f),l.scheduler=a?()=>a(x,!1):x,p=y=>xv(y,!1,l),h=l.onStop=()=>{const y=Ti.get(l);if(y){if(u)u(y,4);else for(const w of y)w();Ti.delete(l)}},t?r?x(!0):b=l.run():a?a(x.bind(null,!0),!0):l.run(),m.pause=l.pause.bind(l),m.resume=l.resume.bind(l),m.stop=m,m}function Ln(n,t=1/0,e){if(t<=0||!je(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,rt(n))Ln(n.value,t,e);else if(ye(n))for(let r=0;r<n.length;r++)Ln(n[r],t,e);else if(ua(n)||Yr(n))n.forEach(r=>{Ln(r,t,e)});else if(lf(n)){for(const r in n)Ln(n[r],t,e);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Ln(n[r],t,e)}return n}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xo(n,t,e,r){try{return r?n(...r):n()}catch(o){pa(o,t,e)}}function Rn(n,t,e,r){if(Ie(n)){const o=Xo(n,t,e,r);return o&&uf(o)&&o.catch(i=>{pa(i,t,e)}),o}if(ye(n)){const o=[];for(let i=0;i<n.length;i++)o.push(Rn(n[i],t,e,r));return o}}function pa(n,t,e,r=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||ze;if(t){let s=t.parent;const u=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;s;){const l=s.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](n,u,c)===!1)return}s=s.parent}if(i){Vn(),Xo(i,null,10,[n,u,c]),zn();return}}_v(n,e,o,r,a)}function _v(n,t,e,r=!0,o=!1){if(o)throw n;console.error(n)}const At=[];let dn=-1;const Jr=[];let er=null,Gr=0;const Nf=Promise.resolve();let Ni=null;function Cv(n){const t=Ni||Nf;return n?t.then(this?n.bind(this):n):t}function Ev(n){let t=dn+1,e=At.length;for(;t<e;){const r=t+e>>>1,o=At[r],i=Oo(o);i<n||i===n&&o.flags&2?t=r+1:e=r}return t}function hu(n){if(!(n.flags&1)){const t=Oo(n),e=At[At.length-1];!e||!(n.flags&2)&&t>=Oo(e)?At.push(n):At.splice(Ev(t),0,n),n.flags|=1,Ff()}}function Ff(){Ni||(Ni=Nf.then(Mf))}function Iv(n){ye(n)?Jr.push(...n):er&&n.id===-1?er.splice(Gr+1,0,n):n.flags&1||(Jr.push(n),n.flags|=1),Ff()}function kc(n,t,e=dn+1){for(;e<At.length;e++){const r=At[e];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;At.splice(e,1),e--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pf(n){if(Jr.length){const t=[...new Set(Jr)].sort((e,r)=>Oo(e)-Oo(r));if(Jr.length=0,er){er.push(...t);return}for(er=t,Gr=0;Gr<er.length;Gr++){const e=er[Gr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}er=null,Gr=0}}const Oo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Mf(n){try{for(dn=0;dn<At.length;dn++){const t=At[dn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Xo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;dn<At.length;dn++){const t=At[dn];t&&(t.flags&=-2)}dn=-1,At.length=0,Pf(),Ni=null,(At.length||Jr.length)&&Mf()}}let Qt=null,Of=null;function Fi(n){const t=Qt;return Qt=n,Of=n&&n.type.__scopeId||null,t}function Rv(n,t=Qt,e){if(!t||n._n)return n;const r=(...o)=>{r._d&&Vc(-1);const i=Fi(t);let a;try{a=n(...o)}finally{Fi(i),r._d&&Vc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Sv(n,t){if(Qt===null)return n;const e=ba(Qt),r=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,s,u=ze]=t[o];i&&(Ie(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(a),r.push({dir:i,instance:e,value:a,oldValue:void 0,arg:s,modifiers:u}))}return n}function mr(n,t,e,r){const o=n.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let u=s.dir[r];u&&(Vn(),Rn(u,e,8,[n.el,s,n,t]),zn())}}function kv(n,t){if(Tt){let e=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===e&&(e=Tt.provides=Object.create(r)),e[n]=t}}function Ri(n,t,e=!1){const r=Rg();if(r||Qr){let o=Qr?Qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(o&&n in o)return o[n];if(arguments.length>1)return e&&Ie(t)?t.call(r&&r.proxy):t}}const Av=Symbol.for("v-scx"),Dv=()=>Ri(Av);function kr(n,t,e){return Bf(n,t,e)}function Bf(n,t,e=ze){const{immediate:r,deep:o,flush:i,once:a}=e,s=Et({},e),u=t&&r||!t&&i!=="post";let c;if(Wo){if(i==="sync"){const p=Dv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!u){const p=()=>{};return p.stop=wn,p.resume=wn,p.pause=wn,p}}const l=Tt;s.call=(p,d,g)=>Rn(p,l,d,g);let f=!1;i==="post"?s.scheduler=p=>{St(p,l&&l.suspense)}:i!=="sync"&&(f=!0,s.scheduler=(p,d)=>{d?p():hu(p)}),s.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,l&&(p.id=l.uid,p.i=l))};const h=wv(n,t,s);return Wo&&(c?c.push(h):u&&h()),h}function Tv(n,t,e){const r=this.proxy,o=et(n)?n.includes(".")?Lf(r,n):()=>r[n]:n.bind(r,r);let i;Ie(t)?i=t:(i=t.handler,e=t);const a=Yo(this),s=Bf(o,i.bind(r),e);return a(),s}function Lf(n,t){const e=t.split(".");return()=>{let r=n;for(let o=0;o<e.length&&r;o++)r=r[e[o]];return r}}const Wf=Symbol("_vte"),Nv=n=>n.__isTeleport,Ro=n=>n&&(n.disabled||n.disabled===""),Ac=n=>n&&(n.defer||n.defer===""),Dc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Tc=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Es=(n,t)=>{const e=n&&n.to;return et(e)?t?t(e):null:e},Uf={name:"Teleport",__isTeleport:!0,process(n,t,e,r,o,i,a,s,u,c){const{mc:l,pc:f,pbc:h,o:{insert:p,querySelector:d,createText:g,createComment:v}}=c,m=Ro(t.props);let{shapeFlag:b,children:x,dynamicChildren:y}=t;if(n==null){const w=t.el=g(""),_=t.anchor=g("");p(w,e,r),p(_,e,r);const k=(E,R)=>{b&16&&l(x,E,R,o,i,a,s,u)},S=()=>{const E=t.target=Es(t.props,d),R=zf(E,t,g,p);E&&(a!=="svg"&&Dc(E)?a="svg":a!=="mathml"&&Tc(E)&&(a="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(E),m||(k(E,R),Si(t,!1)))};m&&(k(e,_),Si(t,!0)),Ac(t.props)?(t.el.__isMounted=!1,St(()=>{S(),delete t.el.__isMounted},i)):S()}else{if(Ac(t.props)&&n.el.__isMounted===!1){St(()=>{Uf.process(n,t,e,r,o,i,a,s,u,c)},i);return}t.el=n.el,t.targetStart=n.targetStart;const w=t.anchor=n.anchor,_=t.target=n.target,k=t.targetAnchor=n.targetAnchor,S=Ro(n.props),E=S?e:_,R=S?w:k;if(a==="svg"||Dc(_)?a="svg":(a==="mathml"||Tc(_))&&(a="mathml"),y?(h(n.dynamicChildren,y,E,o,i,a,s),gu(n,t,!0)):u||f(n,t,E,R,o,i,a,s,!1),m)S?t.props&&n.props&&t.props.to!==n.props.to&&(t.props.to=n.props.to):li(t,e,w,c,1);else if((t.props&&t.props.to)!==(n.props&&n.props.to)){const F=t.target=Es(t.props,d);F&&li(t,F,null,c,0)}else S&&li(t,_,k,c,1);Si(t,m)}},remove(n,t,e,{um:r,o:{remove:o}},i){const{shapeFlag:a,children:s,anchor:u,targetStart:c,targetAnchor:l,target:f,props:h}=n;if(f&&(o(c),o(l)),i&&o(u),a&16){const p=i||!Ro(h);for(let d=0;d<s.length;d++){const g=s[d];r(g,t,e,p,!!g.dynamicChildren)}}},move:li,hydrate:Fv};function li(n,t,e,{o:{insert:r},m:o},i=2){i===0&&r(n.targetAnchor,t,e);const{el:a,anchor:s,shapeFlag:u,children:c,props:l}=n,f=i===2;if(f&&r(a,t,e),(!f||Ro(l))&&u&16)for(let h=0;h<c.length;h++)o(c[h],t,e,2);f&&r(s,t,e)}function Fv(n,t,e,r,o,i,{o:{nextSibling:a,parentNode:s,querySelector:u,insert:c,createText:l}},f){function h(g,v,m,b){v.anchor=f(a(g),v,s(g),e,r,o,i),v.targetStart=m,v.targetAnchor=b}const p=t.target=Es(t.props,u),d=Ro(t.props);if(p){const g=p._lpa||p.firstChild;if(t.shapeFlag&16)if(d)h(n,t,g,g&&a(g));else{t.anchor=a(n);let v=g;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")t.targetStart=v;else if(v.data==="teleport anchor"){t.targetAnchor=v,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}}v=a(v)}t.targetAnchor||zf(p,t,l,c),f(g&&a(g),t,p,e,r,o,i)}Si(t,d)}else d&&t.shapeFlag&16&&h(n,t,n,a(n));return t.anchor&&a(t.anchor)}const Vf=Uf;function Si(n,t){const e=n.ctx;if(e&&e.ut){let r,o;for(t?(r=n.el,o=n.anchor):(r=n.targetStart,o=n.targetAnchor);r&&r!==o;)r.nodeType===1&&r.setAttribute("data-v-owner",e.uid),r=r.nextSibling;e.ut()}}function zf(n,t,e,r){const o=t.targetStart=e(""),i=t.targetAnchor=e("");return o[Wf]=i,n&&(r(o,n),r(i,n)),i}const Pv=Symbol("_leaveCb");function pu(n,t){n.shapeFlag&6&&n.component?(n.transition=t,pu(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Hf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Pi=new WeakMap;function So(n,t,e,r,o=!1){if(ye(n)){n.forEach((d,g)=>So(d,t&&(ye(t)?t[g]:t),e,r,o));return}if(ko(r)&&!o){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&So(n,t,e,r.component.subTree);return}const i=r.shapeFlag&4?ba(r.component):r.el,a=o?null:i,{i:s,r:u}=n,c=t&&t.r,l=s.refs===ze?s.refs={}:s.refs,f=s.setupState,h=Be(f),p=f===ze?sf:d=>Le(h,d);if(c!=null&&c!==u){if(Nc(t),et(c))l[c]=null,p(c)&&(f[c]=null);else if(rt(c)){c.value=null;const d=t;d.k&&(l[d.k]=null)}}if(Ie(u))Xo(u,s,12,[a,l]);else{const d=et(u),g=rt(u);if(d||g){const v=()=>{if(n.f){const m=d?p(u)?f[u]:l[u]:u.value;if(o)ye(m)&&nu(m,i);else if(ye(m))m.includes(i)||m.push(i);else if(d)l[u]=[i],p(u)&&(f[u]=l[u]);else{const b=[i];u.value=b,n.k&&(l[n.k]=b)}}else d?(l[u]=a,p(u)&&(f[u]=a)):g&&(u.value=a,n.k&&(l[n.k]=a))};if(a){const m=()=>{v(),Pi.delete(n)};m.id=-1,Pi.set(n,m),St(m,e)}else Nc(n),v()}}}function Nc(n){const t=Pi.get(n);t&&(t.flags|=8,Pi.delete(n))}la().requestIdleCallback;la().cancelIdleCallback;const ko=n=>!!n.type.__asyncLoader,Gf=n=>n.type.__isKeepAlive;function Mv(n,t){jf(n,"a",t)}function Ov(n,t){jf(n,"da",t)}function jf(n,t,e=Tt){const r=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(da(t,r,e),e){let o=e.parent;for(;o&&o.parent;)Gf(o.parent.vnode)&&Bv(r,t,e,o),o=o.parent}}function Bv(n,t,e,r){const o=da(t,n,r,!0);ga(()=>{nu(r[t],o)},e)}function da(n,t,e=Tt,r=!1){if(e){const o=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...a)=>{Vn();const s=Yo(e),u=Rn(t,e,n,a);return s(),zn(),u});return r?o.unshift(i):o.push(i),i}}const Gn=n=>(t,e=Tt)=>{(!Wo||n==="sp")&&da(n,(...r)=>t(...r),e)},Lv=Gn("bm"),va=Gn("m"),Wv=Gn("bu"),Uv=Gn("u"),Vv=Gn("bum"),ga=Gn("um"),zv=Gn("sp"),Hv=Gn("rtg"),Gv=Gn("rtc");function jv(n,t=Tt){da("ec",n,t)}const qv=Symbol.for("v-ndc");function Mi(n,t,e,r){let o;const i=e,a=ye(n);if(a||et(n)){const s=a&&Sr(n);let u=!1,c=!1;s&&(u=!en(n),c=Hn(n),n=ha(n)),o=new Array(n.length);for(let l=0,f=n.length;l<f;l++)o[l]=t(u?c?so(un(n[l])):un(n[l]):n[l],l,void 0,i)}else if(typeof n=="number"){o=new Array(n);for(let s=0;s<n;s++)o[s]=t(s+1,s,void 0,i)}else if(je(n))if(n[Symbol.iterator])o=Array.from(n,(s,u)=>t(s,u,void 0,i));else{const s=Object.keys(n);o=new Array(s.length);for(let u=0,c=s.length;u<c;u++){const l=s[u];o[u]=t(n[l],l,u,i)}}else o=[];return o}const Is=n=>n?fh(n)?ba(n):Is(n.parent):null,Ao=Et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Is(n.parent),$root:n=>Is(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Kf(n),$forceUpdate:n=>n.f||(n.f=()=>{hu(n.update)}),$nextTick:n=>n.n||(n.n=Cv.bind(n.proxy)),$watch:n=>Tv.bind(n)}),Ua=(n,t)=>n!==ze&&!n.__isScriptSetup&&Le(n,t),Kv={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:o,props:i,accessCache:a,type:s,appContext:u}=n;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return o[t];case 4:return e[t];case 3:return i[t]}else{if(Ua(r,t))return a[t]=1,r[t];if(o!==ze&&Le(o,t))return a[t]=2,o[t];if(Le(i,t))return a[t]=3,i[t];if(e!==ze&&Le(e,t))return a[t]=4,e[t];Rs&&(a[t]=0)}}const c=Ao[t];let l,f;if(c)return t==="$attrs"&&bt(n.attrs,"get",""),c(n);if((l=s.__cssModules)&&(l=l[t]))return l;if(e!==ze&&Le(e,t))return a[t]=4,e[t];if(f=u.config.globalProperties,Le(f,t))return f[t]},set({_:n},t,e){const{data:r,setupState:o,ctx:i}=n;return Ua(o,t)?(o[t]=e,!0):r!==ze&&Le(r,t)?(r[t]=e,!0):Le(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:o,props:i,type:a}},s){let u;return!!(e[s]||n!==ze&&s[0]!=="$"&&Le(n,s)||Ua(t,s)||Le(i,s)||Le(r,s)||Le(Ao,s)||Le(o.config.globalProperties,s)||(u=a.__cssModules)&&u[s])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Le(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Fc(n){return ye(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Rs=!0;function $v(n){const t=Kf(n),e=n.proxy,r=n.ctx;Rs=!1,t.beforeCreate&&Pc(t.beforeCreate,n,"bc");const{data:o,computed:i,methods:a,watch:s,provide:u,inject:c,created:l,beforeMount:f,mounted:h,beforeUpdate:p,updated:d,activated:g,deactivated:v,beforeDestroy:m,beforeUnmount:b,destroyed:x,unmounted:y,render:w,renderTracked:_,renderTriggered:k,errorCaptured:S,serverPrefetch:E,expose:R,inheritAttrs:F,components:N,directives:V,filters:U}=t;if(c&&Xv(c,r,null),a)for(const W in a){const B=a[W];Ie(B)&&(r[W]=B.bind(e))}if(o){const W=o.call(e,e);je(W)&&(n.data=cu(W))}if(Rs=!0,i)for(const W in i){const B=i[W],K=Ie(B)?B.bind(e,e):Ie(B.get)?B.get.bind(e,e):wn,J=!Ie(B)&&Ie(B.set)?B.set.bind(e):wn,ne=Ft({get:K,set:J});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>ne.value,set:oe=>ne.value=oe})}if(s)for(const W in s)qf(s[W],r,e,W);if(u){const W=Ie(u)?u.call(e):u;Reflect.ownKeys(W).forEach(B=>{kv(B,W[B])})}l&&Pc(l,n,"c");function G(W,B){ye(B)?B.forEach(K=>W(K.bind(e))):B&&W(B.bind(e))}if(G(Lv,f),G(va,h),G(Wv,p),G(Uv,d),G(Mv,g),G(Ov,v),G(jv,S),G(Gv,_),G(Hv,k),G(Vv,b),G(ga,y),G(zv,E),ye(R))if(R.length){const W=n.exposed||(n.exposed={});R.forEach(B=>{Object.defineProperty(W,B,{get:()=>e[B],set:K=>e[B]=K,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===wn&&(n.render=w),F!=null&&(n.inheritAttrs=F),N&&(n.components=N),V&&(n.directives=V),E&&Hf(n)}function Xv(n,t,e=wn){ye(n)&&(n=Ss(n));for(const r in n){const o=n[r];let i;je(o)?"default"in o?i=Ri(o.from||r,o.default,!0):i=Ri(o.from||r):i=Ri(o),rt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Pc(n,t,e){Rn(ye(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function qf(n,t,e,r){let o=r.includes(".")?Lf(e,r):()=>e[r];if(et(n)){const i=t[n];Ie(i)&&kr(o,i)}else if(Ie(n))kr(o,n.bind(e));else if(je(n))if(ye(n))n.forEach(i=>qf(i,t,e,r));else{const i=Ie(n.handler)?n.handler.bind(e):t[n.handler];Ie(i)&&kr(o,i,n)}}function Kf(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,s=i.get(t);let u;return s?u=s:!o.length&&!e&&!r?u=t:(u={},o.length&&o.forEach(c=>Oi(u,c,a,!0)),Oi(u,t,a)),je(t)&&i.set(t,u),u}function Oi(n,t,e,r=!1){const{mixins:o,extends:i}=t;i&&Oi(n,i,e,!0),o&&o.forEach(a=>Oi(n,a,e,!0));for(const a in t)if(!(r&&a==="expose")){const s=Yv[a]||e&&e[a];n[a]=s?s(n[a],t[a]):t[a]}return n}const Yv={data:Mc,props:Oc,emits:Oc,methods:_o,computed:_o,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:_o,directives:_o,watch:Qv,provide:Mc,inject:Jv};function Mc(n,t){return t?n?function(){return Et(Ie(n)?n.call(this,this):n,Ie(t)?t.call(this,this):t)}:t:n}function Jv(n,t){return _o(Ss(n),Ss(t))}function Ss(n){if(ye(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Rt(n,t){return n?[...new Set([].concat(n,t))]:t}function _o(n,t){return n?Et(Object.create(null),n,t):t}function Oc(n,t){return n?ye(n)&&ye(t)?[...new Set([...n,...t])]:Et(Object.create(null),Fc(n),Fc(t??{})):t}function Qv(n,t){if(!n)return t;if(!t)return n;const e=Et(Object.create(null),n);for(const r in t)e[r]=Rt(n[r],t[r]);return e}function $f(){return{app:null,config:{isNativeTag:sf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zv=0;function eg(n,t){return function(r,o=null){Ie(r)||(r=Et({},r)),o!=null&&!je(o)&&(o=null);const i=$f(),a=new WeakSet,s=[];let u=!1;const c=i.app={_uid:Zv++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Ng,get config(){return i.config},set config(l){},use(l,...f){return a.has(l)||(l&&Ie(l.install)?(a.add(l),l.install(c,...f)):Ie(l)&&(a.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!u){const p=c._ceVNode||Ot(r,o);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),n(p,l,h),u=!0,c._container=l,l.__vue_app__=c,ba(p.component)}},onUnmount(l){s.push(l)},unmount(){u&&(Rn(s,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){const f=Qr;Qr=c;try{return l()}finally{Qr=f}}};return c}}let Qr=null;const tg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${cr(t)}Modifiers`]||n[`${Nr(t)}Modifiers`];function ng(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||ze;let o=e;const i=t.startsWith("update:"),a=i&&tg(r,t.slice(7));a&&(a.trim&&(o=e.map(l=>et(l)?l.trim():l)),a.number&&(o=e.map(Wd)));let s,u=r[s=Ma(t)]||r[s=Ma(cr(t))];!u&&i&&(u=r[s=Ma(Nr(t))]),u&&Rn(u,n,6,o);const c=r[s+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[s])return;n.emitted[s]=!0,Rn(c,n,6,o)}}const rg=new WeakMap;function Xf(n,t,e=!1){const r=e?rg:t.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let a={},s=!1;if(!Ie(n)){const u=c=>{const l=Xf(c,t,!0);l&&(s=!0,Et(a,l))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!s?(je(n)&&r.set(n,null),null):(ye(i)?i.forEach(u=>a[u]=null):Et(a,i),je(n)&&r.set(n,a),a)}function ma(n,t){return!n||!sa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Le(n,t[0].toLowerCase()+t.slice(1))||Le(n,Nr(t))||Le(n,t))}function Bc(n){const{type:t,vnode:e,proxy:r,withProxy:o,propsOptions:[i],slots:a,attrs:s,emit:u,render:c,renderCache:l,props:f,data:h,setupState:p,ctx:d,inheritAttrs:g}=n,v=Fi(n);let m,b;try{if(e.shapeFlag&4){const y=o||r,w=y;m=gn(c.call(w,y,l,f,p,h,d)),b=s}else{const y=t;m=gn(y.length>1?y(f,{attrs:s,slots:a,emit:u}):y(f,null)),b=t.props?s:og(s)}}catch(y){Do.length=0,pa(y,n,1),m=Ot(fr)}let x=m;if(b&&g!==!1){const y=Object.keys(b),{shapeFlag:w}=x;y.length&&w&7&&(i&&y.some(tu)&&(b=ig(b,i)),x=uo(x,b,!1,!0))}return e.dirs&&(x=uo(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&pu(x,e.transition),m=x,Fi(v),m}const og=n=>{let t;for(const e in n)(e==="class"||e==="style"||sa(e))&&((t||(t={}))[e]=n[e]);return t},ig=(n,t)=>{const e={};for(const r in n)(!tu(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function ag(n,t,e){const{props:r,children:o,component:i}=n,{props:a,children:s,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return r?Lc(r,a,c):!!a;if(u&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(a[h]!==r[h]&&!ma(c,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?Lc(r,a,c):!0:!!a;return!1}function Lc(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==n[i]&&!ma(e,i))return!0}return!1}function sg({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const Yf={},Jf=()=>Object.create(Yf),Qf=n=>Object.getPrototypeOf(n)===Yf;function ug(n,t,e,r=!1){const o={},i=Jf();n.propsDefaults=Object.create(null),Zf(n,t,o,i);for(const a in n.propsOptions[0])a in o||(o[a]=void 0);e?n.props=r?o:pv(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function cg(n,t,e,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=n,s=Be(o),[u]=n.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const l=n.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(ma(n.emitsOptions,h))continue;const p=t[h];if(u)if(Le(i,h))p!==i[h]&&(i[h]=p,c=!0);else{const d=cr(h);o[d]=ks(u,s,d,p,n,!1)}else p!==i[h]&&(i[h]=p,c=!0)}}}else{Zf(n,t,o,i)&&(c=!0);let l;for(const f in s)(!t||!Le(t,f)&&((l=Nr(f))===f||!Le(t,l)))&&(u?e&&(e[f]!==void 0||e[l]!==void 0)&&(o[f]=ks(u,s,f,void 0,n,!0)):delete o[f]);if(i!==s)for(const f in i)(!t||!Le(t,f))&&(delete i[f],c=!0)}c&&Bn(n.attrs,"set","")}function Zf(n,t,e,r){const[o,i]=n.propsOptions;let a=!1,s;if(t)for(let u in t){if(Co(u))continue;const c=t[u];let l;o&&Le(o,l=cr(u))?!i||!i.includes(l)?e[l]=c:(s||(s={}))[l]=c:ma(n.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,a=!0)}if(i){const u=Be(e),c=s||ze;for(let l=0;l<i.length;l++){const f=i[l];e[f]=ks(o,u,f,c[f],n,!Le(c,f))}}return a}function ks(n,t,e,r,o,i){const a=n[e];if(a!=null){const s=Le(a,"default");if(s&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Ie(u)){const{propsDefaults:c}=o;if(e in c)r=c[e];else{const l=Yo(o);r=c[e]=u.call(null,t),l()}}else r=u;o.ce&&o.ce._setProp(e,r)}a[0]&&(i&&!s?r=!1:a[1]&&(r===""||r===Nr(e))&&(r=!0))}return r}const lg=new WeakMap;function eh(n,t,e=!1){const r=e?lg:t.propsCache,o=r.get(n);if(o)return o;const i=n.props,a={},s=[];let u=!1;if(!Ie(n)){const l=f=>{u=!0;const[h,p]=eh(f,t,!0);Et(a,h),p&&s.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!u)return je(n)&&r.set(n,Xr),Xr;if(ye(i))for(let l=0;l<i.length;l++){const f=cr(i[l]);Wc(f)&&(a[f]=ze)}else if(i)for(const l in i){const f=cr(l);if(Wc(f)){const h=i[l],p=a[f]=ye(h)||Ie(h)?{type:h}:Et({},h),d=p.type;let g=!1,v=!0;if(ye(d))for(let m=0;m<d.length;++m){const b=d[m],x=Ie(b)&&b.name;if(x==="Boolean"){g=!0;break}else x==="String"&&(v=!1)}else g=Ie(d)&&d.name==="Boolean";p[0]=g,p[1]=v,(g||Le(p,"default"))&&s.push(f)}}const c=[a,s];return je(n)&&r.set(n,c),c}function Wc(n){return n[0]!=="$"&&!Co(n)}const du=n=>n==="_"||n==="_ctx"||n==="$stable",vu=n=>ye(n)?n.map(gn):[gn(n)],fg=(n,t,e)=>{if(t._n)return t;const r=Rv((...o)=>vu(t(...o)),e);return r._c=!1,r},th=(n,t,e)=>{const r=n._ctx;for(const o in n){if(du(o))continue;const i=n[o];if(Ie(i))t[o]=fg(o,i,r);else if(i!=null){const a=vu(i);t[o]=()=>a}}},nh=(n,t)=>{const e=vu(t);n.slots.default=()=>e},rh=(n,t,e)=>{for(const r in t)(e||!du(r))&&(n[r]=t[r])},hg=(n,t,e)=>{const r=n.slots=Jf();if(n.vnode.shapeFlag&32){const o=t._;o?(rh(r,t,e),e&&hf(r,"_",o,!0)):th(t,r)}else t&&nh(n,t)},pg=(n,t,e)=>{const{vnode:r,slots:o}=n;let i=!0,a=ze;if(r.shapeFlag&32){const s=t._;s?e&&s===1?i=!1:rh(o,t,e):(i=!t.$stable,th(t,o)),a=t}else t&&(nh(n,t),a={default:1});if(i)for(const s in o)!du(s)&&a[s]==null&&delete o[s]},St=yg;function dg(n){return vg(n)}function vg(n,t){const e=la();e.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:a,createText:s,createComment:u,setText:c,setElementText:l,parentNode:f,nextSibling:h,setScopeId:p=wn,insertStaticContent:d}=n,g=(A,D,M,q=null,j=null,$=null,ee=void 0,Q=null,Z=!!D.dynamicChildren)=>{if(A===D)return;A&&!mo(A,D)&&(q=Se(A),oe(A,j,$,!0),A=null),D.patchFlag===-2&&(Z=!1,D.dynamicChildren=null);const{type:Y,ref:pe,shapeFlag:te}=D;switch(Y){case ya:v(A,D,M,q);break;case fr:m(A,D,M,q);break;case za:A==null&&b(D,M,q,ee);break;case Dt:N(A,D,M,q,j,$,ee,Q,Z);break;default:te&1?w(A,D,M,q,j,$,ee,Q,Z):te&6?V(A,D,M,q,j,$,ee,Q,Z):(te&64||te&128)&&Y.process(A,D,M,q,j,$,ee,Q,Z,Ve)}pe!=null&&j?So(pe,A&&A.ref,$,D||A,!D):pe==null&&A&&A.ref!=null&&So(A.ref,null,$,A,!0)},v=(A,D,M,q)=>{if(A==null)r(D.el=s(D.children),M,q);else{const j=D.el=A.el;D.children!==A.children&&c(j,D.children)}},m=(A,D,M,q)=>{A==null?r(D.el=u(D.children||""),M,q):D.el=A.el},b=(A,D,M,q)=>{[A.el,A.anchor]=d(A.children,D,M,q,A.el,A.anchor)},x=({el:A,anchor:D},M,q)=>{let j;for(;A&&A!==D;)j=h(A),r(A,M,q),A=j;r(D,M,q)},y=({el:A,anchor:D})=>{let M;for(;A&&A!==D;)M=h(A),o(A),A=M;o(D)},w=(A,D,M,q,j,$,ee,Q,Z)=>{if(D.type==="svg"?ee="svg":D.type==="math"&&(ee="mathml"),A==null)_(D,M,q,j,$,ee,Q,Z);else{const Y=A.el&&A.el._isVueCE?A.el:null;try{Y&&Y._beginPatch(),E(A,D,j,$,ee,Q,Z)}finally{Y&&Y._endPatch()}}},_=(A,D,M,q,j,$,ee,Q)=>{let Z,Y;const{props:pe,shapeFlag:te,transition:ce,dirs:ve}=A;if(Z=A.el=a(A.type,$,pe&&pe.is,pe),te&8?l(Z,A.children):te&16&&S(A.children,Z,null,q,j,Va(A,$),ee,Q),ve&&mr(A,null,q,"created"),k(Z,A,A.scopeId,ee,q),pe){for(const Me in pe)Me!=="value"&&!Co(Me)&&i(Z,Me,null,pe[Me],$,q);"value"in pe&&i(Z,"value",null,pe.value,$),(Y=pe.onVnodeBeforeMount)&&hn(Y,q,A)}ve&&mr(A,null,q,"beforeMount");const Ae=gg(j,ce);Ae&&ce.beforeEnter(Z),r(Z,D,M),((Y=pe&&pe.onVnodeMounted)||Ae||ve)&&St(()=>{Y&&hn(Y,q,A),Ae&&ce.enter(Z),ve&&mr(A,null,q,"mounted")},j)},k=(A,D,M,q,j)=>{if(M&&p(A,M),q)for(let $=0;$<q.length;$++)p(A,q[$]);if(j){let $=j.subTree;if(D===$||ah($.type)&&($.ssContent===D||$.ssFallback===D)){const ee=j.vnode;k(A,ee,ee.scopeId,ee.slotScopeIds,j.parent)}}},S=(A,D,M,q,j,$,ee,Q,Z=0)=>{for(let Y=Z;Y<A.length;Y++){const pe=A[Y]=Q?tr(A[Y]):gn(A[Y]);g(null,pe,D,M,q,j,$,ee,Q)}},E=(A,D,M,q,j,$,ee)=>{const Q=D.el=A.el;let{patchFlag:Z,dynamicChildren:Y,dirs:pe}=D;Z|=A.patchFlag&16;const te=A.props||ze,ce=D.props||ze;let ve;if(M&&yr(M,!1),(ve=ce.onVnodeBeforeUpdate)&&hn(ve,M,D,A),pe&&mr(D,A,M,"beforeUpdate"),M&&yr(M,!0),(te.innerHTML&&ce.innerHTML==null||te.textContent&&ce.textContent==null)&&l(Q,""),Y?R(A.dynamicChildren,Y,Q,M,q,Va(D,j),$):ee||B(A,D,Q,null,M,q,Va(D,j),$,!1),Z>0){if(Z&16)F(Q,te,ce,M,j);else if(Z&2&&te.class!==ce.class&&i(Q,"class",null,ce.class,j),Z&4&&i(Q,"style",te.style,ce.style,j),Z&8){const Ae=D.dynamicProps;for(let Me=0;Me<Ae.length;Me++){const Re=Ae[Me],ct=te[Re],mt=ce[Re];(mt!==ct||Re==="value")&&i(Q,Re,ct,mt,j,M)}}Z&1&&A.children!==D.children&&l(Q,D.children)}else!ee&&Y==null&&F(Q,te,ce,M,j);((ve=ce.onVnodeUpdated)||pe)&&St(()=>{ve&&hn(ve,M,D,A),pe&&mr(D,A,M,"updated")},q)},R=(A,D,M,q,j,$,ee)=>{for(let Q=0;Q<D.length;Q++){const Z=A[Q],Y=D[Q],pe=Z.el&&(Z.type===Dt||!mo(Z,Y)||Z.shapeFlag&198)?f(Z.el):M;g(Z,Y,pe,null,q,j,$,ee,!0)}},F=(A,D,M,q,j)=>{if(D!==M){if(D!==ze)for(const $ in D)!Co($)&&!($ in M)&&i(A,$,D[$],null,j,q);for(const $ in M){if(Co($))continue;const ee=M[$],Q=D[$];ee!==Q&&$!=="value"&&i(A,$,Q,ee,j,q)}"value"in M&&i(A,"value",D.value,M.value,j)}},N=(A,D,M,q,j,$,ee,Q,Z)=>{const Y=D.el=A?A.el:s(""),pe=D.anchor=A?A.anchor:s("");let{patchFlag:te,dynamicChildren:ce,slotScopeIds:ve}=D;ve&&(Q=Q?Q.concat(ve):ve),A==null?(r(Y,M,q),r(pe,M,q),S(D.children||[],M,pe,j,$,ee,Q,Z)):te>0&&te&64&&ce&&A.dynamicChildren&&A.dynamicChildren.length===ce.length?(R(A.dynamicChildren,ce,M,j,$,ee,Q),(D.key!=null||j&&D===j.subTree)&&gu(A,D,!0)):B(A,D,M,pe,j,$,ee,Q,Z)},V=(A,D,M,q,j,$,ee,Q,Z)=>{D.slotScopeIds=Q,A==null?D.shapeFlag&512?j.ctx.activate(D,M,q,ee,Z):U(D,M,q,j,$,ee,Z):z(A,D,Z)},U=(A,D,M,q,j,$,ee)=>{const Q=A.component=Ig(A,q,j);if(Gf(A)&&(Q.ctx.renderer=Ve),Sg(Q,!1,ee),Q.asyncDep){if(j&&j.registerDep(Q,G,ee),!A.el){const Z=Q.subTree=Ot(fr);m(null,Z,D,M),A.placeholder=Z.el}}else G(Q,A,D,M,j,$,ee)},z=(A,D,M)=>{const q=D.component=A.component;if(ag(A,D,M))if(q.asyncDep&&!q.asyncResolved){W(q,D,M);return}else q.next=D,q.update();else D.el=A.el,q.vnode=D},G=(A,D,M,q,j,$,ee)=>{const Q=()=>{if(A.isMounted){let{next:te,bu:ce,u:ve,parent:Ae,vnode:Me}=A;{const Xt=oh(A);if(Xt){te&&(te.el=Me.el,W(A,te,ee)),Xt.asyncDep.then(()=>{A.isUnmounted||Q()});return}}let Re=te,ct;yr(A,!1),te?(te.el=Me.el,W(A,te,ee)):te=Me,ce&&Ii(ce),(ct=te.props&&te.props.onVnodeBeforeUpdate)&&hn(ct,Ae,te,Me),yr(A,!0);const mt=Bc(A),$t=A.subTree;A.subTree=mt,g($t,mt,f($t.el),Se($t),A,j,$),te.el=mt.el,Re===null&&sg(A,mt.el),ve&&St(ve,j),(ct=te.props&&te.props.onVnodeUpdated)&&St(()=>hn(ct,Ae,te,Me),j)}else{let te;const{el:ce,props:ve}=D,{bm:Ae,m:Me,parent:Re,root:ct,type:mt}=A,$t=ko(D);yr(A,!1),Ae&&Ii(Ae),!$t&&(te=ve&&ve.onVnodeBeforeMount)&&hn(te,Re,D),yr(A,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(mt);const Xt=A.subTree=Bc(A);g(null,Xt,M,q,A,j,$),D.el=Xt.el}if(Me&&St(Me,j),!$t&&(te=ve&&ve.onVnodeMounted)){const Xt=D;St(()=>hn(te,Re,Xt),j)}(D.shapeFlag&256||Re&&ko(Re.vnode)&&Re.vnode.shapeFlag&256)&&A.a&&St(A.a,j),A.isMounted=!0,D=M=q=null}};A.scope.on();const Z=A.effect=new mf(Q);A.scope.off();const Y=A.update=Z.run.bind(Z),pe=A.job=Z.runIfDirty.bind(Z);pe.i=A,pe.id=A.uid,Z.scheduler=()=>hu(pe),yr(A,!0),Y()},W=(A,D,M)=>{D.component=A;const q=A.vnode.props;A.vnode=D,A.next=null,cg(A,D.props,q,M),pg(A,D.children,M),Vn(),kc(A),zn()},B=(A,D,M,q,j,$,ee,Q,Z=!1)=>{const Y=A&&A.children,pe=A?A.shapeFlag:0,te=D.children,{patchFlag:ce,shapeFlag:ve}=D;if(ce>0){if(ce&128){J(Y,te,M,q,j,$,ee,Q,Z);return}else if(ce&256){K(Y,te,M,q,j,$,ee,Q,Z);return}}ve&8?(pe&16&&we(Y,j,$),te!==Y&&l(M,te)):pe&16?ve&16?J(Y,te,M,q,j,$,ee,Q,Z):we(Y,j,$,!0):(pe&8&&l(M,""),ve&16&&S(te,M,q,j,$,ee,Q,Z))},K=(A,D,M,q,j,$,ee,Q,Z)=>{A=A||Xr,D=D||Xr;const Y=A.length,pe=D.length,te=Math.min(Y,pe);let ce;for(ce=0;ce<te;ce++){const ve=D[ce]=Z?tr(D[ce]):gn(D[ce]);g(A[ce],ve,M,null,j,$,ee,Q,Z)}Y>pe?we(A,j,$,!0,!1,te):S(D,M,q,j,$,ee,Q,Z,te)},J=(A,D,M,q,j,$,ee,Q,Z)=>{let Y=0;const pe=D.length;let te=A.length-1,ce=pe-1;for(;Y<=te&&Y<=ce;){const ve=A[Y],Ae=D[Y]=Z?tr(D[Y]):gn(D[Y]);if(mo(ve,Ae))g(ve,Ae,M,null,j,$,ee,Q,Z);else break;Y++}for(;Y<=te&&Y<=ce;){const ve=A[te],Ae=D[ce]=Z?tr(D[ce]):gn(D[ce]);if(mo(ve,Ae))g(ve,Ae,M,null,j,$,ee,Q,Z);else break;te--,ce--}if(Y>te){if(Y<=ce){const ve=ce+1,Ae=ve<pe?D[ve].el:q;for(;Y<=ce;)g(null,D[Y]=Z?tr(D[Y]):gn(D[Y]),M,Ae,j,$,ee,Q,Z),Y++}}else if(Y>ce)for(;Y<=te;)oe(A[Y],j,$,!0),Y++;else{const ve=Y,Ae=Y,Me=new Map;for(Y=Ae;Y<=ce;Y++){const pt=D[Y]=Z?tr(D[Y]):gn(D[Y]);pt.key!=null&&Me.set(pt.key,Y)}let Re,ct=0;const mt=ce-Ae+1;let $t=!1,Xt=0;const Nn=new Array(mt);for(Y=0;Y<mt;Y++)Nn[Y]=0;for(Y=ve;Y<=te;Y++){const pt=A[Y];if(ct>=mt){oe(pt,j,$,!0);continue}let fn;if(pt.key!=null)fn=Me.get(pt.key);else for(Re=Ae;Re<=ce;Re++)if(Nn[Re-Ae]===0&&mo(pt,D[Re])){fn=Re;break}fn===void 0?oe(pt,j,$,!0):(Nn[fn-Ae]=Y+1,fn>=Xt?Xt=fn:$t=!0,g(pt,D[fn],M,null,j,$,ee,Q,Z),ct++)}const Lr=$t?mg(Nn):Xr;for(Re=Lr.length-1,Y=mt-1;Y>=0;Y--){const pt=Ae+Y,fn=D[pt],_c=D[pt+1],Cc=pt+1<pe?_c.el||ih(_c):q;Nn[Y]===0?g(null,fn,M,Cc,j,$,ee,Q,Z):$t&&(Re<0||Y!==Lr[Re]?ne(fn,M,Cc,2):Re--)}}},ne=(A,D,M,q,j=null)=>{const{el:$,type:ee,transition:Q,children:Z,shapeFlag:Y}=A;if(Y&6){ne(A.component.subTree,D,M,q);return}if(Y&128){A.suspense.move(D,M,q);return}if(Y&64){ee.move(A,D,M,Ve);return}if(ee===Dt){r($,D,M);for(let te=0;te<Z.length;te++)ne(Z[te],D,M,q);r(A.anchor,D,M);return}if(ee===za){x(A,D,M);return}if(q!==2&&Y&1&&Q)if(q===0)Q.beforeEnter($),r($,D,M),St(()=>Q.enter($),j);else{const{leave:te,delayLeave:ce,afterLeave:ve}=Q,Ae=()=>{A.ctx.isUnmounted?o($):r($,D,M)},Me=()=>{$._isLeaving&&$[Pv](!0),te($,()=>{Ae(),ve&&ve()})};ce?ce($,Ae,Me):Me()}else r($,D,M)},oe=(A,D,M,q=!1,j=!1)=>{const{type:$,props:ee,ref:Q,children:Z,dynamicChildren:Y,shapeFlag:pe,patchFlag:te,dirs:ce,cacheIndex:ve}=A;if(te===-2&&(j=!1),Q!=null&&(Vn(),So(Q,null,M,A,!0),zn()),ve!=null&&(D.renderCache[ve]=void 0),pe&256){D.ctx.deactivate(A);return}const Ae=pe&1&&ce,Me=!ko(A);let Re;if(Me&&(Re=ee&&ee.onVnodeBeforeUnmount)&&hn(Re,D,A),pe&6)Ce(A.component,M,q);else{if(pe&128){A.suspense.unmount(M,q);return}Ae&&mr(A,null,D,"beforeUnmount"),pe&64?A.type.remove(A,D,M,Ve,q):Y&&!Y.hasOnce&&($!==Dt||te>0&&te&64)?we(Y,D,M,!1,!0):($===Dt&&te&384||!j&&pe&16)&&we(Z,D,M),q&&de(A)}(Me&&(Re=ee&&ee.onVnodeUnmounted)||Ae)&&St(()=>{Re&&hn(Re,D,A),Ae&&mr(A,null,D,"unmounted")},M)},de=A=>{const{type:D,el:M,anchor:q,transition:j}=A;if(D===Dt){_e(M,q);return}if(D===za){y(A);return}const $=()=>{o(M),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(A.shapeFlag&1&&j&&!j.persisted){const{leave:ee,delayLeave:Q}=j,Z=()=>ee(M,$);Q?Q(A.el,$,Z):Z()}else $()},_e=(A,D)=>{let M;for(;A!==D;)M=h(A),o(A),A=M;o(D)},Ce=(A,D,M)=>{const{bum:q,scope:j,job:$,subTree:ee,um:Q,m:Z,a:Y}=A;Uc(Z),Uc(Y),q&&Ii(q),j.stop(),$&&($.flags|=8,oe(ee,A,D,M)),Q&&St(Q,D),St(()=>{A.isUnmounted=!0},D)},we=(A,D,M,q=!1,j=!1,$=0)=>{for(let ee=$;ee<A.length;ee++)oe(A[ee],D,M,q,j)},Se=A=>{if(A.shapeFlag&6)return Se(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const D=h(A.anchor||A.el),M=D&&D[Wf];return M?h(M):D};let ke=!1;const Te=(A,D,M)=>{let q;A==null?D._vnode&&(oe(D._vnode,null,null,!0),q=D._vnode.component):g(D._vnode||null,A,D,null,null,null,M),D._vnode=A,ke||(ke=!0,kc(q),Pf(),ke=!1)},Ve={p:g,um:oe,m:ne,r:de,mt:U,mc:S,pc:B,pbc:R,n:Se,o:n};return{render:Te,hydrate:void 0,createApp:eg(Te)}}function Va({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function yr({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function gg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function gu(n,t,e=!1){const r=n.children,o=t.children;if(ye(r)&&ye(o))for(let i=0;i<r.length;i++){const a=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=tr(o[i]),s.el=a.el),!e&&s.patchFlag!==-2&&gu(a,s)),s.type===ya&&(s.patchFlag!==-1?s.el=a.el:s.__elIndex=i+(n.type===Dt?1:0)),s.type===fr&&!s.el&&(s.el=a.el)}}function mg(n){const t=n.slice(),e=[0];let r,o,i,a,s;const u=n.length;for(r=0;r<u;r++){const c=n[r];if(c!==0){if(o=e[e.length-1],n[o]<c){t[r]=o,e.push(r);continue}for(i=0,a=e.length-1;i<a;)s=i+a>>1,n[e[s]]<c?i=s+1:a=s;c<n[e[i]]&&(i>0&&(t[r]=e[i-1]),e[i]=r)}}for(i=e.length,a=e[i-1];i-- >0;)e[i]=a,a=t[a];return e}function oh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:oh(t)}function Uc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ih(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ih(t.subTree):null}const ah=n=>n.__isSuspense;function yg(n,t){t&&t.pendingBranch?ye(n)?t.effects.push(...n):t.effects.push(n):Iv(n)}const Dt=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),Do=[];let zt=null;function He(n=!1){Do.push(zt=n?null:[])}function bg(){Do.pop(),zt=Do[Do.length-1]||null}let Bo=1;function Vc(n,t=!1){Bo+=n,n<0&&zt&&t&&(zt.hasOnce=!0)}function sh(n){return n.dynamicChildren=Bo>0?zt||Xr:null,bg(),Bo>0&&zt&&zt.push(n),n}function Qe(n,t,e,r,o,i){return sh(me(n,t,e,r,o,i,!0))}function Lo(n,t,e,r,o){return sh(Ot(n,t,e,r,o,!0))}function uh(n){return n?n.__v_isVNode===!0:!1}function mo(n,t){return n.type===t.type&&n.key===t.key}const ch=({key:n})=>n??null,ki=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?et(n)||rt(n)||Ie(n)?{i:Qt,r:n,k:t,f:!!e}:n:null);function me(n,t=null,e=null,r=0,o=null,i=n===Dt?0:1,a=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&ch(t),ref:t&&ki(t),scopeId:Of,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Qt};return s?(mu(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=et(e)?8:16),Bo>0&&!a&&zt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&zt.push(u),u}const Ot=xg;function xg(n,t=null,e=null,r=0,o=null,i=!1){if((!n||n===qv)&&(n=fr),uh(n)){const s=uo(n,t,!0);return e&&mu(s,e),Bo>0&&!i&&zt&&(s.shapeFlag&6?zt[zt.indexOf(n)]=s:zt.push(s)),s.patchFlag=-2,s}if(Tg(n)&&(n=n.__vccOpts),t){t=wg(t);let{class:s,style:u}=t;s&&!et(s)&&(t.class=$o(s)),je(u)&&(fu(u)&&!ye(u)&&(u=Et({},u)),t.style=ir(u))}const a=et(n)?1:ah(n)?128:Nv(n)?64:je(n)?4:Ie(n)?2:0;return me(n,t,e,r,o,a,i,!0)}function wg(n){return n?fu(n)||Qf(n)?Et({},n):n:null}function uo(n,t,e=!1,r=!1){const{props:o,ref:i,patchFlag:a,children:s,transition:u}=n,c=t?_g(o||{},t):o,l={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ch(c),ref:t&&t.ref?e&&i?ye(i)?i.concat(ki(t)):[i,ki(t)]:ki(t):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:s,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Dt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&uo(n.ssContent),ssFallback:n.ssFallback&&uo(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&pu(l,u.clone(l)),l}function lh(n=" ",t=0){return Ot(ya,null,n,t)}function an(n="",t=!1){return t?(He(),Lo(fr,null,n)):Ot(fr,null,n)}function gn(n){return n==null||typeof n=="boolean"?Ot(fr):ye(n)?Ot(Dt,null,n.slice()):uh(n)?tr(n):Ot(ya,null,String(n))}function tr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:uo(n)}function mu(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(ye(t))e=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),mu(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!Qf(t)?t._ctx=Qt:o===3&&Qt&&(Qt.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ie(t)?(t={default:t,_ctx:Qt},e=32):(t=String(t),r&64?(e=16,t=[lh(t)]):e=8);n.children=t,n.shapeFlag|=e}function _g(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=$o([t.class,r.class]));else if(o==="style")t.style=ir([t.style,r.style]);else if(sa(o)){const i=t[o],a=r[o];a&&i!==a&&!(ye(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=r[o])}return t}function hn(n,t,e,r=null){Rn(n,t,7,[e,r])}const Cg=$f();let Eg=0;function Ig(n,t,e){const r=n.type,o=(t?t.appContext:n.appContext)||Cg,i={uid:Eg++,vnode:n,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eh(r,o),emitsOptions:Xf(r,o),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:r.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ng.bind(null,i),n.ce&&n.ce(i),i}let Tt=null;const Rg=()=>Tt||Qt;let Bi,As;{const n=la(),t=(e,r)=>{let o;return(o=n[e])||(o=n[e]=[]),o.push(r),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};Bi=t("__VUE_INSTANCE_SETTERS__",e=>Tt=e),As=t("__VUE_SSR_SETTERS__",e=>Wo=e)}const Yo=n=>{const t=Tt;return Bi(n),n.scope.on(),()=>{n.scope.off(),Bi(t)}},zc=()=>{Tt&&Tt.scope.off(),Bi(null)};function fh(n){return n.vnode.shapeFlag&4}let Wo=!1;function Sg(n,t=!1,e=!1){t&&As(t);const{props:r,children:o}=n.vnode,i=fh(n);ug(n,r,i,t),hg(n,o,e||t);const a=i?kg(n,t):void 0;return t&&As(!1),a}function kg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Kv);const{setup:r}=e;if(r){Vn();const o=n.setupContext=r.length>1?Dg(n):null,i=Yo(n),a=Xo(r,n,0,[n.props,o]),s=uf(a);if(zn(),i(),(s||n.sp)&&!ko(n)&&Hf(n),s){if(a.then(zc,zc),t)return a.then(u=>{Hc(n,u)}).catch(u=>{pa(u,n,0)});n.asyncDep=a}else Hc(n,a)}else hh(n)}function Hc(n,t,e){Ie(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:je(t)&&(n.setupState=Tf(t)),hh(n)}function hh(n,t,e){const r=n.type;n.render||(n.render=r.render||wn);{const o=Yo(n);Vn();try{$v(n)}finally{zn(),o()}}}const Ag={get(n,t){return bt(n,"get",""),n[t]}};function Dg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Ag),slots:n.slots,emit:n.emit,expose:t}}function ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Tf(dv(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ao)return Ao[e](n)},has(t,e){return e in t||e in Ao}})):n.proxy}function Tg(n){return Ie(n)&&"__vccOpts"in n}const Ft=(n,t)=>bv(n,t,Wo),Ng="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ds;const Gc=typeof window<"u"&&window.trustedTypes;if(Gc)try{Ds=Gc.createPolicy("vue",{createHTML:n=>n})}catch{}const ph=Ds?n=>Ds.createHTML(n):n=>n,Fg="http://www.w3.org/2000/svg",Pg="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,jc=On&&On.createElement("template"),Mg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const o=t==="svg"?On.createElementNS(Fg,n):t==="mathml"?On.createElementNS(Pg,n):e?On.createElement(n,{is:e}):On.createElement(n);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,o,i){const a=e?e.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===i||!(o=o.nextSibling)););else{jc.innerHTML=ph(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const s=jc.content;if(r==="svg"||r==="mathml"){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}t.insertBefore(s,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Og=Symbol("_vtc");function Bg(n,t,e){const r=n[Og];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const qc=Symbol("_vod"),Lg=Symbol("_vsh"),Wg=Symbol(""),Ug=/(?:^|;)\s*display\s*:/;function Vg(n,t,e){const r=n.style,o=et(e);let i=!1;if(e&&!o){if(t)if(et(t))for(const a of t.split(";")){const s=a.slice(0,a.indexOf(":")).trim();e[s]==null&&Ai(r,s,"")}else for(const a in t)e[a]==null&&Ai(r,a,"");for(const a in e)a==="display"&&(i=!0),Ai(r,a,e[a])}else if(o){if(t!==e){const a=r[Wg];a&&(e+=";"+a),r.cssText=e,i=Ug.test(e)}}else t&&n.removeAttribute("style");qc in n&&(n[qc]=i?r.display:"",n[Lg]&&(r.display="none"))}const Kc=/\s*!important$/;function Ai(n,t,e){if(ye(e))e.forEach(r=>Ai(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=zg(n,t);Kc.test(e)?n.setProperty(Nr(r),e.replace(Kc,""),"important"):n[r]=e}}const $c=["Webkit","Moz","ms"],Ha={};function zg(n,t){const e=Ha[t];if(e)return e;let r=cr(t);if(r!=="filter"&&r in n)return Ha[t]=r;r=ff(r);for(let o=0;o<$c.length;o++){const i=$c[o]+r;if(i in n)return Ha[t]=i}return t}const Xc="http://www.w3.org/1999/xlink";function Yc(n,t,e,r,o,i=jd(t)){r&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Xc,t.slice(6,t.length)):n.setAttributeNS(Xc,t,e):e==null||i&&!pf(e)?n.removeAttribute(t):n.setAttribute(t,i?"":In(e)?String(e):e)}function Jc(n,t,e,r,o){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?ph(e):e);return}const i=n.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?n.getAttribute("value")||"":n.value,u=e==null?n.type==="checkbox"?"on":"":String(e);(s!==u||!("_value"in n))&&(n.value=u),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const s=typeof n[t];s==="boolean"?e=pf(e):e==null&&s==="string"?(e="",a=!0):s==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(o||t)}function dh(n,t,e,r){n.addEventListener(t,e,r)}function Hg(n,t,e,r){n.removeEventListener(t,e,r)}const Qc=Symbol("_vei");function Gg(n,t,e,r,o=null){const i=n[Qc]||(n[Qc]={}),a=i[t];if(r&&a)a.value=r;else{const[s,u]=jg(t);if(r){const c=i[t]=$g(r,o);dh(n,s,c,u)}else a&&(Hg(n,s,a,u),i[t]=void 0)}}const Zc=/(?:Once|Passive|Capture)$/;function jg(n){let t;if(Zc.test(n)){t={};let r;for(;r=n.match(Zc);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Nr(n.slice(2)),t]}let Ga=0;const qg=Promise.resolve(),Kg=()=>Ga||(qg.then(()=>Ga=0),Ga=Date.now());function $g(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;Rn(Xg(r,e.value),t,5,[r])};return e.value=n,e.attached=Kg(),e}function Xg(n,t){if(ye(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const el=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Yg=(n,t,e,r,o,i)=>{const a=o==="svg";t==="class"?Bg(n,r,a):t==="style"?Vg(n,e,r):sa(t)?tu(t)||Gg(n,t,e,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jg(n,t,r,a))?(Jc(n,t,r),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yc(n,t,r,a,i,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!et(r))?Jc(n,cr(t),r,i,t):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),Yc(n,t,r,a))};function Jg(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&el(t)&&Ie(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return el(t)&&et(e)?!1:t in n}const tl=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ye(t)?e=>Ii(t,e):t},ja=Symbol("_assign"),Qg={deep:!0,created(n,t,e){n[ja]=tl(e),dh(n,"change",()=>{const r=n._modelValue,o=Zg(n),i=n.checked,a=n[ja];if(ye(r)){const s=df(r,o),u=s!==-1;if(i&&!u)a(r.concat(o));else if(!i&&u){const c=[...r];c.splice(s,1),a(c)}}else if(ua(r)){const s=new Set(r);i?s.add(o):s.delete(o),a(s)}else a(vh(n,i))})},mounted:nl,beforeUpdate(n,t,e){n[ja]=tl(e),nl(n,t,e)}};function nl(n,{value:t,oldValue:e},r){n._modelValue=t;let o;if(ye(t))o=df(t,r.props.value)>-1;else if(ua(t))o=t.has(r.props.value);else{if(t===e)return;o=fa(t,vh(n,!0))}n.checked!==o&&(n.checked=o)}function Zg(n){return"_value"in n?n._value:n.value}function vh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const em=["ctrl","shift","alt","meta"],tm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>em.some(e=>n[`${e}Key`]&&!t.includes(e))},Un=(n,t)=>{const e=n._withMods||(n._withMods={}),r=t.join(".");return e[r]||(e[r]=((o,...i)=>{for(let a=0;a<t.length;a++){const s=tm[t[a]];if(s&&s(o,t))return}return n(o,...i)}))},nm=Et({patchProp:Yg},Mg);let rl;function rm(){return rl||(rl=dg(nm))}const om=((...n)=>{const t=rm().createApp(...n),{mount:e}=t;return t.mount=r=>{const o=am(r);if(!o)return;const i=t._component;!Ie(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=e(o,!1,im(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function im(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function am(n){return et(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var gh=function(n,t){return(gh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(n,t)};function cn(n,t){function e(){this.constructor=n}gh(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function ae(n,t,e,r){return new(e||(e=Promise))((function(o,i){function a(c){try{u(r.next(c))}catch(l){i(l)}}function s(c){try{u(r.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e((function(l){l(c.value)})).then(a,s)}u((r=r.apply(n,[])).next())}))}function se(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return(function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(f){l=[6,f],r=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}})([u,c])}}}var sm=(function(){function n(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return n.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},n.prototype.registerFlag=function(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},n.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},n.prototype.getNumber=function(t){return this.get(t)},n.prototype.getBool=function(t){return this.get(t)},n.prototype.getFlags=function(){return this.flags},Object.defineProperty(n.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),n.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},n.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},n.prototype.setFlags=function(t){this.flags=Object.assign({},t)},n.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},n.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,r,o=(e=this.global.location.search,r={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return um(r,a[0],a[1]),a.join("=")})),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach((function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=(function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")})(s,u)}))}},n})();function um(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function H(){return mh}var mh=null,Li=new Map,Ts=new Map;function yh(n,t){var e=xh(n,t);return Li.get(e)}function cm(n){return Ts.get(n)}function ol(n){for(var t=Li.entries(),e=[];;){var r=t.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===n&&e.push(s)}return e}function bh(n){var t=n.kernelName,e=n.backendName,r=xh(t,e);if(Li.has(r))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Li.set(r,n)}function lm(n){var t=n.kernelName;Ts.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Ts.set(t,n)}function xh(n,t){return t+"_"+n}function Ns(n,t,e){return Math.max(n,Math.min(t,e))}function wh(n){return n%2==0?n:n+1}function fm(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function I(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function We(n,t,e){e===void 0&&(e=""),I(ft(n,t),(function(){return e+" Shapes "+n+" and "+t+" must match"}))}function po(n){I(n!=null,(function(){return"The input to the tensor constructor must be a non-null value."}))}function co(n,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(n)||_n(n)&&!e)for(var r=0;r<n.length;++r)co(n[r],t,e);else t.push(n);return t}function ue(n){if(n.length===0)return 1;for(var t=n[0],e=1;e<n.length;e++)t*=n[e];return t}function ft(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n){return n%1==0}function hm(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;var t=Math.exp(2*n);return(t-1)/(t+1)}function Fs(n){var t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function Zr(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function il(n,t,e){return t===void 0&&(t=function(r){return 0}),new Promise((function(r,o){var i=0,a=function(){if(n())r();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()}))}function pm(n,t){for(var e=1,r=-1,o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(n[o]<0)throw Error("Shapes can not be < 0. Found "+n[o]+" at dim "+o);if(r===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+n);return n}if(e===0)throw Error("Cannot infer the missing size in ["+n+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=n.slice();return i[r]=t/e,i}function ut(n,t){var e=t.length;return I((n=n==null?t.map((function(r,o){return o})):[].concat(n)).every((function(r){return r>=-e&&r<e})),(function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+n})),I(n.every((function(r){return Ze(r)})),(function(){return"All values in axis param must be integers but got axis "+n})),n.map((function(r){return r<0?e+r:r}))}function Cr(n,t){for(var e=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:ut(t,n).sort(),a=0,s=0;s<n.length;++s){if(i!=null){if(i[a]===s&&n[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+n[s]+"' is not 1");(i[a]==null||i[a]>s)&&n[s]===1&&(e.push(n[s]),r.push(s)),i[a]<=s&&a++}n[s]!==1&&(e.push(n[s]),r.push(s))}return{newShape:e,keptDims:r}}function Uo(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else{if(n!=="bool")throw new Error("Unknown data type "+n);e=new Uint8Array(t)}return e}function Wi(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else{if(n!=="string")throw new Error("Unknown data type "+n);e=new Array(t)}return e}function dm(n,t){for(var e=0;e<n.length;e++){var r=n[e];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function vm(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function gm(n,t){return t!=="complex64"&&(t!=="float32"||n==="complex64")&&(t!=="int32"||n==="float32"||n==="complex64")&&(t!=="bool"||n!=="bool")}function _n(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array}function _h(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error("Unknown dtype "+n)}function mm(n){if(n==null)return 0;var t=0;return n.forEach((function(e){return t+=e.length})),t}function yu(n){return typeof n=="string"||n instanceof String}function ym(n){return typeof n=="boolean"}function bm(n){return typeof n=="number"}function Jo(n){return Array.isArray(n)?Jo(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array?"int32":bm(n)?"float32":yu(n)?"string":ym(n)?"bool":"float32"}function Ps(n){return!!(n&&n.constructor&&n.call&&n.apply)}function Ms(n,t){for(var e=t;e<n;++e)if(n%e==0)return e;return n}function Cn(n){var t=n.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=n[t-1];for(var r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function Ch(n,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=co(n)),e&&dm(n,t),(function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"})(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){for(var r=new Uint8Array(n.length),o=0;o<r.length;++o)Math.round(n[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function al(n,t){if(n.length===0)return t[0];var e=n.reduce((function(r,o){return r*o}));if(e===0)return[];if(e!==t.length)throw new Error("["+n+"] does not match the input size.");return(function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),f=l.reduce((function(h,p){return h*p}));for(c=0;c<u;c++)s[c]=r(o+c*f,l,a)}return s})(0,n,t)}function Eh(n,t){for(var e=Qo(n,t),r=0;r<e.length;r++)e[r]=1;return e}function Qo(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error("Unknown data type "+t)}function mn(){return H().platform.now()}function Ih(n){n.forEach((function(t){I(Number.isInteger(t)&&t>=0,(function(){return"Tensor must have a shape comprised of positive integers but got shape ["+n+"]."}))}))}function xm(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.encode(n,t)}function Ui(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.decode(n,t)}function sl(n,t,e){if(t===0)return 0;if(t===1)return n[0];for(var r=n[n.length-1],o=0;o<n.length-1;++o)r+=e[o]*n[o];return r}function wm(n,t,e){if(t===0)return[];if(t===1)return[n];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(n/e[o]),n-=r[o]*e[o];return r[r.length-1]=n,r}var _m=(function(){function n(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Cm)}return n.prototype.profileKernel=function(t,e,r){var o,i=this,a=this.backendTimer.time((function(){o=r()}));return o.forEach((function(s){s.data().then((function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var p=c[h];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),a.then((function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)}))}))})),o},n})(),Cm=(function(){function n(){}return n.prototype.logKernelProfile=function(t,e,r,o,i,a){var s=typeof o=="number"?Zr(o+"ms",9):o.error,u=Zr(t,25),c=e.rank,l=e.size,f=Zr(e.shape.toString(),14),h="";for(var p in i){var d=i[p].shape||e.shape,g=d.length;h+=p+": "+g+"D "+(g>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},n})(),ul=20,yo=3,qa=7;function Em(n,t,e,r){var o=Cn(t),i=(function(c,l,f,h){var p=ue(l),d=h[h.length-1],g=new Array(d).fill(0),v=l.length,m=f==="complex64"?xo(c):c;if(v>1)for(var b=0;b<p/d;b++)for(var x=b*d,y=0;y<d;y++)g[y]=Math.max(g[y],bo(m[x+y],0,f).length);return g})(n,t,e,o),a=t.length,s=(function c(l,f,h,p,d,g){g===void 0&&(g=!0);var v=h==="complex64"?2:1,m=f[0],b=f.length;if(b===0)return h==="complex64"?[bo(xo(l)[0],0,h)]:h==="bool"?[Rh(l[0])]:[l[0].toString()];if(b===1){if(m>ul){var x=yo*v,y=Array.from(l.slice(0,x)),w=Array.from(l.slice((m-yo)*v,m*v));return h==="complex64"&&(y=xo(y),w=xo(w)),["["+y.map((function(z,G){return bo(z,d[G],h)})).join(", ")+", ..., "+w.map((function(z,G){return bo(z,d[m-yo+G],h)})).join(", ")+"]"]}return["["+(h==="complex64"?xo(l):Array.from(l)).map((function(z,G){return bo(z,d[G],h)})).join(", ")+"]"]}var _=f.slice(1),k=p.slice(1),S=p[0]*v,E=[];if(m>ul){for(var R=0;R<yo;R++){var F=(N=R*S)+S;E.push.apply(E,c(l.slice(N,F),_,h,k,d,!1))}for(E.push("..."),R=m-yo;R<m;R++)F=(N=R*S)+S,E.push.apply(E,c(l.slice(N,F),_,h,k,d,R===m-1))}else for(R=0;R<m;R++){var N;F=(N=R*S)+S,E.push.apply(E,c(l.slice(N,F),_,h,k,d,R===m-1))}var V=b===2?",":"";for(E[0]="["+E[0]+V,R=1;R<E.length-1;R++)E[R]=" "+E[R]+V;var U=`,
`;for(R=2;R<b;R++)U+=`
`;return E[E.length-1]=" "+E[E.length-1]+"]"+(g?"":U),E})(n,t,e,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map((function(c){return"    "+c})).join(`
`)),u.join(`
`)}function bo(n,t,e){return Zr(Array.isArray(n)?parseFloat(n[0].toFixed(qa))+" + "+parseFloat(n[1].toFixed(qa))+"j":yu(n)?"'"+n+"'":e==="bool"?Rh(n):parseFloat(n.toFixed(qa)).toString(),t)}function Rh(n){return n===0?"false":"true"}function xo(n){for(var t=[],e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var Vo=(function(){function n(t,e,r){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=ue(t),r!=null){var i=r.length;I(i===this.size,(function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."}))}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Wi(e,this.size),this.strides=Cn(t)}return n.prototype.set=function(t){for(var e=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),I(r.length===this.rank,(function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+e.rank+")"}));var i=this.locToIndex(r);this.values[i]=t},n.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var r=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},n.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e},n.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.toTensor=function(){return yn().makeTensor(this.values,this.shape,this.dtype)},n})(),yn=null,L=null,Sh=null,$e=(function(){function n(t,e,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=ue(t),this.strides=Cn(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return n.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},n.prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,(function(){return"The array must have only 1 element."})),this.reshape([])},n.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},n.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},n.prototype.as3D=function(t,e,r){return this.throwIfDisposed(),this.reshape([t,e,r])},n.prototype.as4D=function(t,e,r,o){return this.throwIfDisposed(),this.reshape([t,e,r,o])},n.prototype.as5D=function(t,e,r,o,i){return this.throwIfDisposed(),this.reshape([t,e,r,o,i])},n.prototype.asType=function(t){return this.throwIfDisposed(),L.cast(this,t)},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.buffer=function(){return ae(this,void 0,void 0,(function(){var t;return se(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,L.buffer(this.shape,this.dtype,t)]}}))}))},n.prototype.bufferSync=function(){return L.buffer(this.shape,this.dtype,this.dataSync())},n.prototype.array=function(){return ae(this,void 0,void 0,(function(){var t;return se(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,al(this.shape,t)]}}))}))},n.prototype.arraySync=function(){return al(this.shape,this.dataSync())},n.prototype.data=function(){return ae(this,void 0,void 0,(function(){var t,e;return se(this,(function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=yn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=r.sent();try{return[2,e.map((function(o){return Ui(o)}))]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}}))}))},n.prototype.dataSync=function(){this.throwIfDisposed();var t=yn().readSync(this.dataId);if(this.dtype==="string")try{return t.map((function(e){return Ui(e)}))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},n.prototype.bytes=function(){return ae(this,void 0,void 0,(function(){var t;return se(this,(function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,yn().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}}))}))},n.prototype.dispose=function(){this.isDisposed||(yn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(n.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),n.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},n.prototype.toFloat=function(){return this.asType("float32")},n.prototype.toInt=function(){return this.asType("int32")},n.prototype.toBool=function(){return this.asType("bool")},n.prototype.print=function(t){return t===void 0&&(t=!1),L.print(this,t)},n.prototype.reshape=function(t){return this.throwIfDisposed(),L.reshape(this,t)},n.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},n.prototype.expandDims=function(t){return t===void 0&&(t=0),L.expandDims(this,t)},n.prototype.cumsum=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1),L.cumsum(this,t,e,r)},n.prototype.squeeze=function(t){return this.throwIfDisposed(),L.squeeze(this,t)},n.prototype.clone=function(){return this.throwIfDisposed(),L.clone(this)},n.prototype.oneHot=function(t,e,r){return this.throwIfDisposed(),L.oneHot(this,t,e,r)},n.prototype.toString=function(t){return t===void 0&&(t=!1),Em(this.dataSync(),this.shape,this.dtype,t)},n.prototype.tile=function(t){return this.throwIfDisposed(),L.tile(this,t)},n.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),L.gather(this,t,e)},n.prototype.matMul=function(t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!1),this.throwIfDisposed(),L.matMul(this,t,e,r)},n.prototype.dot=function(t){return this.throwIfDisposed(),L.dot(this,t)},n.prototype.norm=function(t,e,r){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1),this.throwIfDisposed(),L.norm(this,t,e,r)},n.prototype.slice=function(t,e){return this.throwIfDisposed(),L.slice(this,t,e)},n.prototype.reverse=function(t){return this.throwIfDisposed(),L.reverse(this,t)},n.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof n&&(t=[t]),L.concat([this].concat(t),e)},n.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),L.split(this,t,e)},n.prototype.stack=function(t,e){return e===void 0&&(e=0),L.stack([this,t],e)},n.prototype.unstack=function(t){return t===void 0&&(t=0),L.unstack(this,t)},n.prototype.pad=function(t,e){return e===void 0&&(e=0),L.pad(this,t,e)},n.prototype.batchNormalization=function(t,e,r,o,i){return r===void 0&&(r=.001),Sh("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,r)},n.prototype.batchNorm=function(t,e,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),L.batchNorm(this,t,e,r,o,i)},n.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.all(this,t,e)},n.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.any(this,t,e)},n.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.logSumExp(this,t,e)},n.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.sum(this,t,e)},n.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.prod(this,t,e)},n.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.mean(this,t,e)},n.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.min(this,t,e)},n.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.max(this,t,e)},n.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),L.argMin(this,t)},n.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),L.argMax(this,t)},n.prototype.cast=function(t){return this.throwIfDisposed(),L.cast(this,t)},n.prototype.add=function(t){return this.throwIfDisposed(),L.add(this,t)},n.prototype.addStrict=function(t){return this.throwIfDisposed(),L.addStrict(this,t)},n.prototype.atan2=function(t){return this.throwIfDisposed(),L.atan2(this,t)},n.prototype.sub=function(t){return this.throwIfDisposed(),L.sub(this,t)},n.prototype.subStrict=function(t){return this.throwIfDisposed(),L.subStrict(this,t)},n.prototype.pow=function(t){return this.throwIfDisposed(),L.pow(this,t)},n.prototype.powStrict=function(t){return this.throwIfDisposed(),L.powStrict(this,t)},n.prototype.mul=function(t){return this.throwIfDisposed(),L.mul(this,t)},n.prototype.mulStrict=function(t){return this.throwIfDisposed(),L.mulStrict(this,t)},n.prototype.div=function(t){return this.throwIfDisposed(),L.div(this,t)},n.prototype.divNoNan=function(t){return this.throwIfDisposed(),L.divNoNan(this,t)},n.prototype.floorDiv=function(t){return this.throwIfDisposed(),L.floorDiv(this,t)},n.prototype.divStrict=function(t){return this.throwIfDisposed(),L.divStrict(this,t)},n.prototype.minimum=function(t){return this.throwIfDisposed(),L.minimum(this,t)},n.prototype.minimumStrict=function(t){return this.throwIfDisposed(),L.minimumStrict(this,t)},n.prototype.maximum=function(t){return this.throwIfDisposed(),L.maximum(this,t)},n.prototype.maximumStrict=function(t){return this.throwIfDisposed(),L.maximumStrict(this,t)},n.prototype.mod=function(t){return this.throwIfDisposed(),L.mod(this,t)},n.prototype.modStrict=function(t){return this.throwIfDisposed(),L.modStrict(this,t)},n.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),L.squaredDifferenceStrict(this,t)},n.prototype.transpose=function(t){return this.throwIfDisposed(),L.transpose(this,t)},n.prototype.notEqual=function(t){return this.throwIfDisposed(),L.notEqual(this,t)},n.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),L.notEqualStrict(this,t)},n.prototype.less=function(t){return this.throwIfDisposed(),L.less(this,t)},n.prototype.lessStrict=function(t){return this.throwIfDisposed(),L.lessStrict(this,t)},n.prototype.equal=function(t){return this.throwIfDisposed(),L.equal(this,t)},n.prototype.equalStrict=function(t){return this.throwIfDisposed(),L.equalStrict(this,t)},n.prototype.lessEqual=function(t){return this.throwIfDisposed(),L.lessEqual(this,t)},n.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),L.lessEqualStrict(this,t)},n.prototype.greater=function(t){return this.throwIfDisposed(),L.greater(this,t)},n.prototype.greaterStrict=function(t){return this.throwIfDisposed(),L.greaterStrict(this,t)},n.prototype.greaterEqual=function(t){return this.throwIfDisposed(),L.greaterEqual(this,t)},n.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),L.greaterEqualStrict(this,t)},n.prototype.logicalAnd=function(t){return this.throwIfDisposed(),L.logicalAnd(this,t)},n.prototype.logicalOr=function(t){return this.throwIfDisposed(),L.logicalOr(this,t)},n.prototype.logicalNot=function(){return this.throwIfDisposed(),L.logicalNot(this)},n.prototype.logicalXor=function(t){return this.throwIfDisposed(),L.logicalXor(this,t)},n.prototype.where=function(t,e){return this.throwIfDisposed(),L.where(t,this,e)},n.prototype.neg=function(){return this.throwIfDisposed(),L.neg(this)},n.prototype.ceil=function(){return this.throwIfDisposed(),L.ceil(this)},n.prototype.floor=function(){return this.throwIfDisposed(),L.floor(this)},n.prototype.sign=function(){return this.throwIfDisposed(),L.sign(this)},n.prototype.isNaN=function(){return this.throwIfDisposed(),L.isNaN(this)},n.prototype.isInf=function(){return this.throwIfDisposed(),L.isInf(this)},n.prototype.isFinite=function(){return this.throwIfDisposed(),L.isFinite(this)},n.prototype.exp=function(){return this.throwIfDisposed(),L.exp(this)},n.prototype.expm1=function(){return this.throwIfDisposed(),L.expm1(this)},n.prototype.log=function(){return this.throwIfDisposed(),L.log(this)},n.prototype.log1p=function(){return this.throwIfDisposed(),L.log1p(this)},n.prototype.sqrt=function(){return this.throwIfDisposed(),L.sqrt(this)},n.prototype.rsqrt=function(){return this.throwIfDisposed(),L.rsqrt(this)},n.prototype.square=function(){return this.throwIfDisposed(),L.square(this)},n.prototype.reciprocal=function(){return this.throwIfDisposed(),L.reciprocal(this)},n.prototype.abs=function(){return this.throwIfDisposed(),L.abs(this)},n.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),L.clipByValue(this,t,e)},n.prototype.relu=function(){return this.throwIfDisposed(),L.relu(this)},n.prototype.relu6=function(){return this.throwIfDisposed(),L.relu6(this)},n.prototype.elu=function(){return this.throwIfDisposed(),L.elu(this)},n.prototype.selu=function(){return this.throwIfDisposed(),L.selu(this)},n.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),L.leakyRelu(this,t)},n.prototype.prelu=function(t){return this.throwIfDisposed(),L.prelu(this,t)},n.prototype.sigmoid=function(){return this.throwIfDisposed(),L.sigmoid(this)},n.prototype.logSigmoid=function(){return this.throwIfDisposed(),L.logSigmoid(this)},n.prototype.softplus=function(){return this.throwIfDisposed(),L.softplus(this)},n.prototype.zerosLike=function(){return this.throwIfDisposed(),L.zerosLike(this)},n.prototype.onesLike=function(){return this.throwIfDisposed(),L.onesLike(this)},n.prototype.sin=function(){return this.throwIfDisposed(),L.sin(this)},n.prototype.cos=function(){return this.throwIfDisposed(),L.cos(this)},n.prototype.tan=function(){return this.throwIfDisposed(),L.tan(this)},n.prototype.asin=function(){return this.throwIfDisposed(),L.asin(this)},n.prototype.acos=function(){return this.throwIfDisposed(),L.acos(this)},n.prototype.atan=function(){return this.throwIfDisposed(),L.atan(this)},n.prototype.sinh=function(){return this.throwIfDisposed(),L.sinh(this)},n.prototype.cosh=function(){return this.throwIfDisposed(),L.cosh(this)},n.prototype.tanh=function(){return this.throwIfDisposed(),L.tanh(this)},n.prototype.asinh=function(){return this.throwIfDisposed(),L.asinh(this)},n.prototype.acosh=function(){return this.throwIfDisposed(),L.acosh(this)},n.prototype.atanh=function(){return this.throwIfDisposed(),L.atanh(this)},n.prototype.erf=function(){return this.throwIfDisposed(),L.erf(this)},n.prototype.round=function(){return this.throwIfDisposed(),L.round(this)},n.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),L.step(this,t)},n.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),L.softmax(this,t)},n.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),L.logSoftmax(this,t)},n.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),L.image.resizeBilinear(this,t,e)},n.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),L.image.resizeNearestNeighbor(this,t,e)},n.prototype.conv1d=function(t,e,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),L.conv1d(this,t,e,r,o,i,a)},n.prototype.conv2d=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),L.conv2d(this,t,e,r,o,i,a)},n.prototype.conv2dTranspose=function(t,e,r,o,i){return this.throwIfDisposed(),L.conv2dTranspose(this,t,e,r,o,i)},n.prototype.depthwiseConv2D=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),L.depthwiseConv2d(this,t,e,r,o,i,a)},n.prototype.separableConv2d=function(t,e,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),L.separableConv2d(this,t,e,r,o,i,a)},n.prototype.avgPool=function(t,e,r,o){return this.throwIfDisposed(),L.avgPool(this,t,e,r,o)},n.prototype.maxPool=function(t,e,r,o){return this.throwIfDisposed(),L.maxPool(this,t,e,r,o)},n.prototype.localResponseNormalization=function(t,e,r,o){return t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5),L.localResponseNormalization(this,t,e,r,o)},n.prototype.pool=function(t,e,r,o,i){return this.throwIfDisposed(),L.pool(this,t,e,r,o,i)},n.prototype.variable=function(t,e,r){return t===void 0&&(t=!0),this.throwIfDisposed(),yn().makeVariable(this,t,e,r)},n.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),L.unsortedSegmentSum(this,t,e)},n.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),L.batchToSpaceND(this,t,e)},n.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),L.spaceToBatchND(this,t,e)},n.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),L.topk(this,t,e)},n.prototype.stridedSlice=function(t,e,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),L.stridedSlice(this,t,e,r,o,i,a,s,u)},n.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),L.depthToSpace(this,t,e)},n.prototype.fft=function(){return this.throwIfDisposed(),L.spectral.fft(this)},n.prototype.ifft=function(){return this.throwIfDisposed(),L.spectral.ifft(this)},n.prototype.rfft=function(){return this.throwIfDisposed(),L.spectral.rfft(this)},n.prototype.irfft=function(){return this.throwIfDisposed(),L.spectral.irfft(this)},n})();Object.defineProperty($e,Symbol.hasInstance,{value:function(n){return!!n&&n.dataId!=null&&n.shape!=null&&n.dtype!=null}});var cl,Os,Bs,Ls,Ws,lo=(function(n){function t(e,r,o,i){var a=n.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=r,a.name=o,a}return cn(t,n),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!ft(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");yn().disposeTensor(this),this.dataId=e.dataId,yn().incRef(this,null)},t.prototype.dispose=function(){yn().disposeVariable(this),this.isDisposedInternal=!0},t})($e);Object.defineProperty(lo,Symbol.hasInstance,{value:function(n){return n instanceof $e&&n.assign!=null&&n.assign instanceof Function}}),(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(cl||(cl={})),(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(Os||(Os={})),(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(Bs||(Bs={})),(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(Ls||(Ls={})),(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(Ws||(Ws={}));var Im={float32:Ls,int32:Os,bool:Bs,complex64:Ws};function vt(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error("Can not upcast "+n+" with "+t)}return Im[n][t]}function Ka(n){return vt(n,"int32")}function Ye(n,t){if(n.dtype===t.dtype)return[n,t];var e=vt(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Rm(n,t){I(n.dtype===t.dtype,(function(){return"The dtypes of the first("+n.dtype+") and second("+t.dtype+") input must match"}))}function kh(n){var t=[];return(function e(r,o,i){if(r!=null){if(r instanceof $e)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}})(n,t,new Set),t}var $a,ll=(function(){function n(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return n.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},n})(),Sm=(function(){function n(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ll}return n.prototype.ready=function(){return ae(this,void 0,void 0,(function(){var t,e,r;return se(this,(function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then((function(){}))];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(r=t[e],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}}))}))},Object.defineProperty(n.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),n.prototype.backendNames=function(){return Object.keys(this.registryFactory)},n.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},n.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},n.prototype.registerBackend=function(t,e,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:r},!0)},n.prototype.setBackend=function(t){return ae(this,void 0,void 0,(function(){var e,r,o;return se(this,(function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),r=e.success,e.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new _m(this.backendInstance),[2,!0]}}))}))},n.prototype.setupRegisteredKernels=function(){var t=this;ol(this.backendName).forEach((function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)}))},n.prototype.disposeRegisteredKernels=function(t){var e=this;ol(t).forEach((function(r){r.disposeFunc!=null&&r.disposeFunc(e.registry[t])}))},n.prototype.initializeBackend=function(t){var e=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then((function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)})).catch((function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)}));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},n.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},n.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((function(e,r){return t.registryFactory[r].priority-t.registryFactory[e].priority}))},n.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var r=t[e],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},n.prototype.moveData=function(t,e){var r=this.state.tensorInfo.get(e),o=r.backend,i=this.readSync(e);o.disposeData(e),r.backend=t,t.move(e,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},n.prototype.tidy=function(t,e){var r,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun((function(){return o.startScope(i)}),(function(){return o.endScope(r)}),(function(){return(r=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r}))},n.prototype.scopedRun=function(t,e,r){t();try{var o=r();return e(),o}catch(i){throw e(),i}},n.prototype.nextTensorId=function(){return n.nextTensorId++},n.prototype.nextVariableId=function(){return n.nextVariableId++},n.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[e],(function(o){return{x:function(){return o.toFloat()}}}),[]),e},n.prototype.runKernel=function(t,e,r,o,i){return this.runKernelFunc(null,e,null,t,r,o,i)},n.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},n.prototype.checkKernelForMemLeak=function(t,e,r){var o=this.backend.numDataIds(),i=0;r.forEach((function(u){i+=u.dtype==="complex64"?3:1}));var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},n.prototype.runKernelFunc=function(t,e,r,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,p=function(b){f&&(l=b.map((function(x){return c.keep(c.clone(x))})))},d=this.state.numBytes,g=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,m=yh(o,this.backendName);return h=m!=null?function(){var b=c.backend.numDataIds();v=m.kernelFunc({inputs:e,attrs:i,backend:c.backend});var x=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x);var y=x.map((function(_){var k=_.dataId,S=_.shape,E=_.dtype;return c.makeTensorFromDataId(k,S,E)})),w=y.filter((function(_,k){return s[k]}));return p((a||[]).slice().concat(w)),y}:function(){var b=c.backend.numDataIds();v=c.tidy((function(){return t(c.backend,p)}));var x=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,b,x),x},this.scopedRun((function(){return c.state.kernelDepth++}),(function(){return c.state.kernelDepth--}),(function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,(function(){return h()})):h()})),f&&this.addTapeNode(o,e,u,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-g,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map((function(b){return e[b].shape})),outputShapes:u.map((function(b){return b.shape}))}),Array.isArray(v)?u:u[0]},n.prototype.makeTensor=function(t,e,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=t;r==="string"&&yu(t[0])&&(i=t.map((function(l){return xm(l)})));var a=o.write(i,e,r),s=new $e(e,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),c=mm(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},n.prototype.makeTensorFromDataId=function(t,e,r,o){var i=new $e(e,r=r||"float32",t,this.nextTensorId());return this.incRef(i,o),i},n.prototype.makeVariable=function(t,e,r,o){e===void 0&&(e=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new lo(t,e,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},n.prototype.incRef=function(t,e){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*_h(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof lo||this.track(t)},n.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},n.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},n.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},n.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},n.prototype.profile=function(t){return ae(this,void 0,void 0,(function(){var e,r;return se(this,(function(o){return this.state.profiling=!0,e=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(i){return i.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]}))}))},n.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},n.prototype.addTapeNode=function(t,e,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:i},u=cm(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map((function(l,f){if(l==null){var h=r[f],p=Qo(h.size,h.dtype);return a.makeTensor(p,h.shape,h.dtype)}return l})),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},n.prototype.keep=function(t){return t.kept=!0,t},n.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},n.prototype.endTape=function(){this.state.gradientDepth--},n.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},n.prototype.endScope=function(t){for(var e=this,r=kh(t),o=new Set(r.map((function(u){return u.id}))),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach((function(u){u.kept||u.scopeId!==s.id||e.track(u)}))},n.prototype.gradients=function(t,e,r,o){var i=this;if(o===void 0&&(o=!1),I(e.length>0,(function(){return"gradients() received an empty list of xs."})),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun((function(){return i.startTape()}),(function(){return i.endTape()}),(function(){return i.tidy("forward",t)}));I(a instanceof $e,(function(){return"The result y returned by f() must be a tensor."}));var s=(function(u,c,l){for(var f={},h={},p=0;p<c.length;p++)f[c[p].id]=!0;for(p=0;p<u.length;p++){var d=(_=u[p]).inputs;for(var g in d){for(var v=d[g],m=!1,b=0;b<c.length;b++)if(f[v.id]){_.outputs.forEach((function(R){return f[R.id]=!0})),m=!0,h[_.id]=!0;break}if(m)break}}var x={};x[l.id]=!0;var y={};for(p=u.length-1;p>=0;p--)for(d=(_=u[p]).inputs,b=0;b<_.outputs.length;b++)if(x[_.outputs[b].id]){for(var g in d)x[d[g].id]=!0,y[_.id]=!0;break}var w=[];for(p=0;p<u.length;p++){var _;if(h[(_=u[p]).id]&&y[_.id]){var k={};for(var g in _.inputs){var S=_.inputs[g];f[S.id]&&(k[g]=S)}var E=Object.assign({},_);E.inputs=k,E.outputs=_.outputs,w.push(E)}}return w})(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(function(){var u,c,l={};l[a.id]=r??(u=a.shape,c=Eh(ue(u),"float32"),P.makeTensor(c,u,"float32")),(function(h,p,d){for(var g=function(m){var b=p[m],x=[];if(b.outputs.forEach((function(k){var S=h[k.id];S!=null?x.push(S):x.push(null)})),b.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+b.kernelName+".");var y=b.gradient(x),w=function(k){if(!(k in y))throw new Error("Cannot backprop through input "+k+". Available gradients found: "+Object.keys(y)+".");var S=d((function(){return y[k]()}));if(S.dtype!=="float32")throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input "+k+" must have 'float32' dtype, but has '"+S.dtype+"'");var E=b.inputs[k];if(!ft(S.shape,E.shape))throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input '"+k+"' has shape '"+S.shape+"', which does not match the shape of the input '"+E.shape+"'");if(h[E.id]==null)h[E.id]=S;else{var R=h[E.id];h[E.id]=R.add(S),R.dispose()}};for(var _ in b.inputs)w(_)},v=p.length-1;v>=0;v--)g(v)})(l,s,(function(h){return i.tidy(h)}));var f=e.map((function(h){return l[h.id]}));return i.state.gradientDepth===0&&(i.state.activeTape.forEach((function(h){for(var p=0,d=h.saved;p<d.length;p++)d[p].dispose()})),i.state.activeTape=null),{value:a,grads:f}}))},n.prototype.customGrad=function(t){var e=this;return I(Ps(t),(function(){return"The f passed in customGrad(f) must be a function."})),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];I(o.every((function(s){return s instanceof $e})),(function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"}));var a={};return o.forEach((function(s,u){a[u]=s})),e.runKernelFunc((function(s,u){return I((r=t.apply(void 0,o.concat([u]))).value instanceof $e,(function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),I(Ps(r.gradFunc),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),r.value}),a,(function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];I(l.length===o.length,(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),I(l.every((function(h){return h instanceof $e})),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var f={};return l.forEach((function(h,p){f[p]=function(){return h}})),f}))}},n.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},n.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},n.prototype.time=function(t){return ae(this,void 0,void 0,(function(){var e,r;return se(this,(function(o){switch(o.label){case 0:return e=mn(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=mn()-e,[2,r]}}))}))},n.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(n.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),n.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ll,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},n.nextTensorId=0,n.nextVariableId=0,n})(),P=(function(){var n=(function(){if($a==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}$a=e}return $a})();if(n._tfengine==null){var t=new sm(n);n._tfengine=new Sm(t)}return(function(e){mh=e})(n._tfengine.ENV),yn=function(){return n._tfengine},n._tfengine})();function Ah(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Pn=H();Pn.registerFlag("DEBUG",(function(){return!1}),(function(n){n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),Pn.registerFlag("IS_BROWSER",(function(){return Ah()})),Pn.registerFlag("IS_NODE",(function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0})),Pn.registerFlag("IS_CHROME",(function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})),Pn.registerFlag("PROD",(function(){return!1})),Pn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(function(){return Pn.getBool("DEBUG")})),Pn.registerFlag("DEPRECATION_WARNINGS_ENABLED",(function(){return!0})),Pn.registerFlag("IS_TEST",(function(){return!1}));var zo,Ht,Vt,wr={},Xa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function km(n,t){wr[n]=t}function kn(n){n in wr||(wr[n]=(function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=(function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")})(e);return r.addEventListener("webglcontextlost",(function(o){o.preventDefault(),delete wr[e]}),!1),e===1?r.getContext("webgl",Xa)||r.getContext("experimental-webgl",Xa):r.getContext("webgl2",Xa)})(n));var t=wr[n];return t.isContextLost()?(delete wr[n],kn(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),wr[n])}function xa(n,t){return[t,n]}function To(n){var t=ue(n);return Fs(Math.ceil(t/4))}function Zo(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function bu(n,t){var e,r,o,i,a,s,u,c,l,f=n;return H().getNumber("WEBGL_VERSION")===2?(e=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=n.RGBA,r=n.RGBA,o=n.RGBA,i=f.RGBA,a=n.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=n.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:n.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function le(n,t,e){var r=e();return t&&(function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+Nm(o,i))})(n),r}(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(zo||(zo={})),(function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"})(Ht||(Ht={})),(function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(Vt||(Vt={}));var Am=596e-10,Dm=65504;function Tm(n){return!!(H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||Am<Math.abs(n)&&Math.abs(n)<Dm)}function Nm(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function fi(n,t,e){return jn(n,t,(function(){return n.getExtension(e)}),'Extension "'+e+'" not supported on this browser.')}function Fm(n,t,e){var r=jn(n,t,(function(){return n.createShader(n.VERTEX_SHADER)}),"Unable to create vertex WebGLShader.");if(le(n,t,(function(){return n.shaderSource(r,e)})),le(n,t,(function(){return n.compileShader(r)})),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function Pm(n,t,e){var r=jn(n,t,(function(){return n.createShader(n.FRAGMENT_SHADER)}),"Unable to create fragment WebGLShader.");if(le(n,t,(function(){return n.shaderSource(r,e)})),le(n,t,(function(){return n.compileShader(r)})),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw(function(o,i){var a=Mm.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map((function(v,m){return Zr((m+1).toString(),c)+v})),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var p=l.slice(0,s-1),d=l.slice(s-1,s),g=l.slice(s);console.log(p.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+Zr(d[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(g.join(`
`))})(e,n.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Ya,Ja,Mm=/ERROR: [0-9]+:([0-9]+):/g;function Om(n,t){return jn(n,t,(function(){return n.createProgram()}),"Unable to create WebGLProgram.")}function Bm(n,t,e){if(le(n,t,(function(){return n.linkProgram(e)})),n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Qa(n,t,e){if(le(n,t,(function(){return n.validateProgram(e)})),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Lm(n,t,e){var r=jn(n,t,(function(){return n.createBuffer()}),"Unable to create WebGLBuffer");return le(n,t,(function(){return n.bindBuffer(n.ARRAY_BUFFER,r)})),le(n,t,(function(){return n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)})),r}function Wm(n,t,e){var r=jn(n,t,(function(){return n.createBuffer()}),"Unable to create WebGLBuffer");return le(n,t,(function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r)})),le(n,t,(function(){return n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)})),r}function Um(n,t){return jn(n,t,(function(){return n.createTexture()}),"Unable to create WebGLTexture.")}function Vm(n,t){var e=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){var r="["+n+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(n>e||t>e)throw r="["+n+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function zm(n,t){return jn(n,t,(function(){return n.createFramebuffer()}),"Unable to create WebGLFramebuffer.")}function fl(n,t,e,r,o,i,a,s){var u=n.getAttribLocation(e,r);return u!==-1&&(le(n,t,(function(){return n.bindBuffer(n.ARRAY_BUFFER,o)})),le(n,t,(function(){return n.vertexAttribPointer(u,i,n.FLOAT,!1,a,s)})),le(n,t,(function(){return n.enableVertexAttribArray(u)})),!0)}function Hm(n,t,e,r){$m(n,r),le(n,t,(function(){return n.activeTexture(n.TEXTURE0+r)})),le(n,t,(function(){return n.bindTexture(n.TEXTURE_2D,e)}))}function Gm(n,t,e,r){return jn(n,t,(function(){return n.getUniformLocation(e,r)}),'uniform "'+r+'" not present in program.')}function jm(n,t,e){return n.getUniformLocation(t,e)}function qm(n,t,e,r,o,i){le(n,t,(function(){return Hm(n,t,r,i)})),le(n,t,(function(){return n.uniform1i(o,i)}))}function Za(n,t,e,r){le(n,t,(function(){return n.bindFramebuffer(n.FRAMEBUFFER,r)})),le(n,t,(function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0)}))}function hl(n,t,e){le(n,t,(function(){return n.bindFramebuffer(n.FRAMEBUFFER,e)})),le(n,t,(function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0)}))}function hi(n){var t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Km(n,t))}function Km(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function jn(n,t,e,r){var o=le(n,t,(function(){return e()}));if(o==null)throw new Error(r);return o}function $m(n,t){var e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+n.TEXTURE0;if(r<n.TEXTURE0||r>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Vi(n,t){return t===void 0&&(t=2),ue(n.slice(0,n.length-t))}function zi(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function es(n){var t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[Vi(n)].concat(zi(n))),t}function Xm(n,t){var e;t===void 0&&(t=!1);var r=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(n=n.map((function(c,l){return l>=n.length-2?wh(n[l]):n[l]}))).length===1&&(n=[2,n[0]])),n.length!==2){var o=Cr(n);n=o.newShape}var i=ue(n);if(n.length<=1&&i<=r)return[1,i];if(n.length===2&&n[0]<=r&&n[1]<=r)return n;if(n.length===3&&n[0]*n[1]<=r&&n[2]<=r)return[n[0]*n[1],n[2]];if(n.length===3&&n[0]<=r&&n[1]*n[2]<=r)return[n[0],n[1]*n[2]];if(n.length===4&&n[0]*n[1]*n[2]<=r&&n[3]<=r)return[n[0]*n[1]*n[2],n[3]];if(n.length===4&&n[0]<=r&&n[1]*n[2]*n[3]<=r)return[n[0],n[1]*n[2]*n[3]];if(t){var a=Vi(n),s=2,u=2;return n.length&&(s=(e=zi(n))[0],u=e[1]),Fs(i=a*(s/2)*(u/2)).map((function(c){return 2*c}))}return Fs(i)}function pi(n){return n%2==0}function di(n,t){if(ft(n=n.slice(-2),t=t.slice(-2))||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){var e=n.slice(-1)[0],r=t.slice(-1)[0];if(e===r||pi(e)&&pi(r)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&pi(n[0])&&pi(t[0])}function Ym(n){if(Ya==null){var t=kn(n);Ya=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ya}function Jm(n){if(Ja==null){var t=kn(n);Ja=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Ja)}function Qm(n){if(n===0)return 0;var t=kn(n);return Zt(t,"EXT_disjoint_timer_query_webgl2")&&n===2?2:Zt(t,"EXT_disjoint_timer_query")?1:0}function Zt(n,t){return n.getExtension(t)!=null}function pl(n){try{if(kn(n)!=null)return!0}catch{return!1}return!1}function Zm(n){if(n===0)return!1;var t=kn(n);if(n===1){if(!Zt(t,"OES_texture_float"))return!1}else if(!Zt(t,"EXT_color_buffer_float"))return!1;return Us(t)}function ey(n){if(n===0)return!1;var t=kn(n);if(n!==1){if(Zt(t,"EXT_color_buffer_float"))return Us(t);if(Zt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return(function(r,o){var i=bu(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u})(t,e)}return!1}return!!Zt(t,"OES_texture_float")&&!!Zt(t,"WEBGL_color_buffer_float")&&Us(t)}function Us(n){var t=bu(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);var o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),o}function ty(n){return n===2&&kn(n).fenceSync!=null}var ge=H();function Dh(n){H().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function ie(n,t){return P.tidy(n,t)}function Bt(n){kh(n).forEach((function(t){return t.dispose()}))}function ny(n){return P.keep(n)}function Hi(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];H().getBool("IS_TEST")||console.warn.apply(console,n)}function dr(n,t){var e=n;if(_n(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];for(var r=[];Array.isArray(e)||_n(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&H().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&(function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!_n(i))return void I(a.length===0,(function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"}));I(a.length>0,(function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"})),I(i.length===a[0],(function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"}));for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))})(n,r,[]),r}function dl(n,t,e,r){if(n!=null&&(n!=="numeric"&&n!==t||n==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+r+"' must be "+n+" tensor, but got "+t+" tensor")}function C(n,t,e,r){if(r===void 0&&(r="numeric"),n instanceof $e)return dl(r,n.dtype,t,e),n;var o=Jo(n);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),dl(r,o,t,e),n==null||!_n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){var i=n==null?"null":n.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=dr(n,o);_n(n)||Array.isArray(n)||(n=[n]);var s=o!=="string"?Ch(n,o,H().getBool("DEBUG")):co(n,[],!0);return P.makeTensor(s,a,o)}function Gi(n,t,e,r){if(r===void 0&&(r="numeric"),!Array.isArray(n))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return n.map((function(o,i){return C(o,t+"["+i+"]",e)}),r)}function Th(n,t){for(var e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function ry(n,t,e){for(var r=n.length+t.length,o=[],i=0,a=0,s=0;s<r;s++)e.indexOf(s)===-1?o.push(n[i++]):o.push(t[a++]);return o}function yt(n,t){for(var e=[],r=n.length,o=0;o<r;o++)t.indexOf(o)===-1&&e.push(n[o]);return[e,t.map((function(i){return n[i]}))]}function Lt(n,t){return ry(n,t.map((function(e){return 1})),t)}function Ut(n,t,e){I(Th(t,e),(function(){return n+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."}))}function An(n,t){if(Th(n,t))return null;for(var e=[],r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach((function(o){return e.push(o)})),e}function xu(n){return n.map((function(t,e){return[e,t]})).sort((function(t,e){return t[1]-e[1]})).map((function(t){return t[0]}))}function Dn(n,t){for(var e=[],r=t-n;r<t;++r)e.push(r);return e}function oy(n,t){var e=n[0].length;n.forEach((function(o,i){I(o.length===e,(function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"}))})),I(t>=0&&t<e,(function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."}));var r=n[0];n.forEach((function(o,i){for(var a=0;a<e;a++)I(a===t||o[a]===r[a],(function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."}))}))}function fo(n,t){for(var e=n[0].slice(),r=1;r<n.length;r++)e[t]+=n[r][t];return e}function T(n){var t=Object.keys(n);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];P.startScope(e);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),P.endScope(s),s}catch(u){throw P.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ge.registerFlag("HAS_WEBGL",(function(){return ge.getNumber("WEBGL_VERSION")>0})),ge.registerFlag("WEBGL_VERSION",(function(){return pl(2)?2:pl(1)?1:0})),ge.registerFlag("WEBGL_BUFFER_SUPPORTED",(function(){return ge.get("WEBGL_VERSION")===2})),ge.registerFlag("WEBGL_CPU_FORWARD",(function(){return!0})),ge.registerFlag("WEBGL_FORCE_F16_TEXTURES",(function(){return!1})),ge.registerFlag("WEBGL_PACK",(function(){return ge.getBool("HAS_WEBGL")})),ge.registerFlag("WEBGL_PACK_NORMALIZATION",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_PACK_CLIP",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_PACK_DEPTHWISECONV",(function(){return!1})),ge.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_PACK_REDUCE",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_LAZILY_UNPACK",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_CONV_IM2COL",(function(){return ge.getBool("WEBGL_PACK")})),ge.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(function(){return Ym(ge.getNumber("WEBGL_VERSION"))})),ge.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(function(){return Jm(ge.getNumber("WEBGL_VERSION"))})),ge.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(function(){var n=ge.getNumber("WEBGL_VERSION");return n===0?0:Qm(n)})),ge.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(function(){return ge.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(n=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))));var n})),ge.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(function(){return Zm(ge.getNumber("WEBGL_VERSION"))})),ge.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(function(){return!ge.getBool("WEBGL_FORCE_F16_TEXTURES")&&ge.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")})),ge.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(function(){return ey(ge.getNumber("WEBGL_VERSION"))})),ge.registerFlag("WEBGL_FENCE_API_ENABLED",(function(){return ty(ge.getNumber("WEBGL_VERSION"))})),ge.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(function(){return ge.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0})),Sh=Dh;var dt=T({complex_:function(n,t){var e=C(n,"real","complex"),r=C(t,"imag","complex");return We(e.shape,r.shape,"real and imag shapes, "+e.shape+" and "+r.shape+", must match in call to tf.complex()."),P.runKernelFunc((function(o){return o.complex(e,r)}),{$real:e,$imag:r})}}),Jt=T({real_:function(n){var t=C(n,"input","real");return P.runKernelFunc((function(e){return e.real(t)}),{$input:t})}}),bn=T({imag_:function(n){var t=C(n,"input","imag");return P.runKernelFunc((function(e){return e.imag(t)}),{$input:t})}});function gt(n,t,e){return vr(n,t,dr(n,e),e)}function vr(n,t,e,r){if(r==null&&(r=Jo(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!_n(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Ih(t);var o=ue(t),i=ue(e);I(o===i,(function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i}));for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==ue(t.slice(a));I(e[a]===t[a]||!u,(function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "}))}}return _n(n)||Array.isArray(n)||(n=[n]),t=t||e,n=r!=="string"?Ch(n,r,H().getBool("DEBUG")):co(n,[],!0),P.makeTensor(n,t,r)}function re(n,t){if((_n(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&_n(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return vr(n,[],[],t)}function tt(n,t){po(n);var e=dr(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return vr(n,null,e,t)}function ar(n,t,e){if(po(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=dr(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return vr(n,t,r,e)}function wu(n,t,e){if(po(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=dr(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return vr(n,t,r,e)}function Pt(n,t,e){if(po(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=dr(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return vr(n,t,r,e)}function iy(n,t,e){if(po(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=dr(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return vr(n,t,r,e)}function ay(n,t,e){if(po(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=dr(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return vr(n,t=t||r,r,e)}function sy(n,t,e,r){return t===void 0&&(t=!0),P.makeVariable(n,t,e,r)}function vo(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=vo(n,"float32"),r=Ke(n,"float32");return dt(e,r)}var o=Eh(ue(n),t);return P.makeTensor(o,n,t)}function Ke(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ke(n,"float32"),r=Ke(n,"float32");return dt(e,r)}var o=Qo(ue(n),t);return P.makeTensor(o,n,t)}function En(n,t,e){return P.runKernelFunc((function(r){return r.fill(n,t,e)}),{})}function uy(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");return P.runKernelFunc((function(r){return r.linspace(n,t,e)}),{})}function ji(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e===0)throw new Error("Cannot have a step of zero");if(n===t||n<t&&e<0||t<n&&e>1)return Ke([0],r);var o=Qo(Math.abs(Math.ceil((t-n)/e)),r);t<n&&e===1&&(e=-1),o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return tt(o,r)}var Nh=T({onesLike_:function(n){var t=C(n,"x","onesLike");if(t.dtype==="complex64"){var e=Nh(Jt(t)),r=Pe(bn(t));return dt(e,r)}return P.runKernelFunc((function(o){return o.onesLike(t)}),{$x:t},(function(o,i){return{$x:function(){return Pe(o)}}}))}}),Pe=T({zerosLike_:function(n){var t=C(n,"x","zerosLike");return P.runKernelFunc((function(e){return e.zerosLike(t)}),{$x:t},(function(e,r){return{$x:function(){return Pe(e)}}}))}}),ot=T({concat_:function(n,t){t===void 0&&(t=0),I(n.length>=1,(function(){return"Pass at least one tensor to concat"}));var e=Gi(n,"tensors","concat");e[0].dtype==="complex64"&&e.forEach((function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")})),t=ut(t,e[0].shape)[0];var r=fo(e.map((function(s){return s.shape})),t);if(ue(r)===0)return gt([],r);if((e=e.filter((function(s){return s.size>0}))).length===1)return e[0];var o=e.map((function(s){return s.shape}));oy(o,t);var i=e,a={axis:t};return P.runKernelFunc((function(s){return s.concat(e,t)}),i,(function(s){var u=o.map((function(c){return c[t]}));return _u(s,u,t).map((function(c){return function(){return c}}))}),"Concat",a)}}),cy=T({concat1d_:function(n){return ot(n,0)}}),ly=T({concat2d_:function(n,t){return ot(n,t)}}),fy=T({concat3d_:function(n,t){return ot(n,t)}}),hy=T({concat4d_:function(n,t){return ot(n,t)}}),_u=T({split_:function(n,t,e){e===void 0&&(e=0);var r,o=C(n,"x","split");return e=ut(e,o.shape)[0],typeof t=="number"?(I(o.shape[e]%t==0,(function(){return"Number of splits must evenly divide the axis."})),r=new Array(t).fill(o.shape[e]/t)):(I(o.shape[e]===t.reduce((function(i,a){return i+a})),(function(){return"The sum of sizes must match the size of the axis dimension."})),r=t),P.runKernelFunc((function(i){return i.split(o,r,e)}),{$x:o},(function(i){return{$x:function(){return ot(i,e)}}}))}});function Fr(n,t){return n(t={exports:{}},t.exports),t.exports}var py=Fr((function(n){(function(t,e,r){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var p=.02519603282416938*(u+=f.charCodeAt(h));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.alea=a})(0,n)})),dy=Fr((function(n){(function(t,e,r){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor128=a})(0,n)})),vy=Fr((function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorwow=a})(0,n)})),gy=Fr((function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},(function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()})(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorshift7=a})(0,n)})),my=Fr((function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,p=u.i;return u.w=f=f+1640531527|0,l=h[p+34&127],c=h[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[p]=l^c,u.i=p,l+(f^f>>>16)|0},(function(c,l){var f,h,p,d,g,v=[],m=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,m=Math.max(m,l.length)),p=0,d=-32;d<m;++d)l&&(h^=l.charCodeAt((d+32)%l.length)),d===0&&(g=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,d>=0&&(g=g+1640531527|0,p=(f=v[127&d]^=h+g)==0?p+1:0);for(p>=128&&(v[127&(l&&l.length||0)]=-1),p=127,d=512;d>0;--d)h=v[p+34&127],f=v[p=p+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,v[p]=h^f;c.w=g,c.X=v,c.i=p})(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor4096=a})(0,n)})),yy=Fr((function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,p=u.d,d=u.a;return f=f<<25^f>>>7^h,h=h-p|0,p=p<<24^p>>>8^d,d=d-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-p|0,u.d=p<<16^h>>>16^d,u.a=d-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.tychei=a})(0,n)})),_r=Fr((function(n){(function(t,e){var r,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,f=i-1;function h(m,b,x){var y=[],w=g((function S(E,R){var F,N=[],V=typeof E;if(R&&V=="object")for(F in E)try{N.push(S(E[F],R-1))}catch{}return N.length?N:V=="string"?E:E+"\0"})((b=b==1?{entropy:!0}:b||{}).entropy?[m,v(t)]:m??(function(){try{var S;return r&&(S=r.randomBytes)?S=S(i):(S=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(S)),v(S)}catch{var E=o.navigator,R=E&&E.plugins;return[+new Date,o,R,o.screen,v(t)]}})(),3),y),_=new p(y),k=function(){for(var S=_.g(a),E=u,R=0;S<c;)S=(S+R)*i,E*=i,R=_.g(1);for(;S>=l;)S/=2,E/=2,R>>>=1;return(S+R)/E};return k.int32=function(){return 0|_.g(4)},k.quick=function(){return _.g(4)/4294967296},k.double=k,g(v(_.S),t),(b.pass||x||function(S,E,R,F){return F&&(F.S&&d(F,_),S.state=function(){return d(_,{})}),R?(e[s]=S,E):S})(k,w,"global"in b?b.global:this==e,b.state)}function p(m){var b,x=m.length,y=this,w=0,_=y.i=y.j=0,k=y.S=[];for(x||(m=[x++]);w<i;)k[w]=w++;for(w=0;w<i;w++)k[w]=k[_=f&_+m[w%x]+(b=k[w])],k[_]=b;(y.g=function(S){for(var E,R=0,F=y.i,N=y.j,V=y.S;S--;)E=V[F=f&F+1],R=R*i+V[f&(V[F]=V[N=f&N+E])+(V[N]=E)];return y.i=F,y.j=N,R})(i)}function d(m,b){return b.i=m.i,b.j=m.j,b.S=m.S.slice(),b}function g(m,b){for(var x,y=m+"",w=0;w<y.length;)b[f&w]=f&(x^=19*b[f&w])+y.charCodeAt(w++);return v(b)}function v(m){return String.fromCharCode.apply(0,m)}if(e["seed"+s]=h,g(e.random(),t),n.exports){n.exports=h;try{r=require("crypto")}catch{}}})([],Math)}));_r.alea=py,_r.xor128=dy,_r.xorwow=vy,_r.xorshift7=gy,_r.xor4096=my,_r.tychei=yy;var wa=_r.alea,Cu=(function(){function n(t,e,r,o,i){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=wa(a.toString())}return n.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(e)},n.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},n.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},n})(),by=(function(){function n(t,e,r,o){this.alpha=t,this.beta=1/e,this.dtype=r;var i=o||Math.random();this.randu=wa(i.toString()),this.randn=new Cu(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return n.prototype.nextValue=function(){for(var t,e,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},n.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},n})(),xy=(function(){function n(t,e,r,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=wa(o)}return n.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},n.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},n})();function xe(n,t,e){return t===void 0&&(t="float32"),t=t||"float32",Ih(n),new Vo(n,t,e)}function wy(n,t){t===void 0&&(t=!1),console.log(n.toString(t))}var Fh=T({batchToSpaceND_:function(n,t,e){var r=C(n,"x","batchToSpaceND"),o=t.reduce((function(i,a){return i*a}));return I(r.rank>=1+t.length,(function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length})),I(e.length===t.length,(function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length})),I(r.shape[0]%o==0,(function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o})),P.runKernelFunc((function(i){return i.batchToSpaceND(r,t,e)}),{$x:r},(function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}}))}}),_y=T({broadcastTo_:function(n,t){var e=C(n,"broadcastTo","x"),r=e.shape;if(t.some((function(u){return!(u>0)||u%1!=0})))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var s=i.map((function(u,c){return u>1?c:-1})).filter((function(u){return u>=0}));return s.length===0?e.clone():P.runKernelFunc((function(u){return u.tile(e,i)}),{input:e},(function(u){return{input:function(){return u.sum(s,!0)}}}))}}),Cy=T({cast_:function(n,t){var e=C(n,"x","cast");if(!vm(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return P.runKernelFunc((function(o){return o.cast(e,t)}),{x:e},(function(o){return{x:function(){return o.clone()}}}),"Cast",r)}}),Ey=T({clone_:function(n){var t=C(n,"x","clone",null);return P.runKernelFunc((function(){return P.makeTensorFromDataId(t.dataId,t.shape,t.dtype)}),{$x:t},(function(e){return{$x:function(){return e.toFloat()}}}))}}),Iy=T({cumsum_:function(n,t,e,r){t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1);var o=C(n,"x","cumsum"),i=An([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=Dn(1,o.rank)[0],u=P.runKernelFunc((function(c){return c.cumsum(a,s,e,r)}),{permutedX:a},(function(c){return{permutedX:function(){return c.cumsum(t,e,!r)}}}));return i!=null&&(u=u.transpose(i)),u}}),Ry=T({depthToSpace_:function(n,t,e){e===void 0&&(e="NHWC");var r=C(n,"x","depthToSpace"),o=e==="NHWC"?r.shape[1]:r.shape[2],i=e==="NHWC"?r.shape[2]:r.shape[3],a=e==="NHWC"?r.shape[3]:r.shape[1];return I(o*t>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape})),I(i*t>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+r.shape})),I(a%(t*t)==0,(function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+r.shape})),P.runKernelFunc((function(s){return s.depthToSpace(r,t,e)}),{$x:r})}}),Yt=T({expandDims_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","expandDims",null);I(t<=e.rank,(function(){return"Axis must be <= rank of the tensor"}));var r=e.shape.slice();return t<0&&(I(-(e.rank+1)<=t,(function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"})),t=e.rank+t+1),r.splice(t,0,1),rn(e,r)}}),Ph=T({eye_:function(n,t,e,r){r===void 0&&(r="float32"),t==null&&(t=n);for(var o=xe([n,t],r),i=n<=t?n:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(n,t);if(e==null)return s;if(e.length===1)return eo(Yt(s,0),[e[0],1,1]);if(e.length===2)return eo(Yt(Yt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return eo(Yt(Yt(Yt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Sy=T({multinomial_:function(n,t,e,r){r===void 0&&(r=!1);var o=C(n,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=P.runKernelFunc((function(c){return c.multinomial(s,r,t,e)}),{logits2D:s});return a===1?u.as1D():u}}),Vs=T({oneHot_:function(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(n,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),P.runKernelFunc((function(a){return a.oneHot(o,t,e,r)}),{$indices:o},(function(a){return{$indices:function(){return Ke(o.shape,"float32")}}})).reshape(i)}}),Pr=T({pad_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return P.runKernelFunc((function(i){return i.pad(r,t,e)}),{x:r},(function(i){var a=t.map((function(s){return s[0]}));return{x:function(){return i.slice(a,r.shape)}}}),"PadV2",o)}}),ky=T({pad1d_:function(n,t,e){return e===void 0&&(e=0),I(t.length===2,(function(){return"Invalid number of paddings. Must be length of 2."})),Pr(n,[t],e)}}),Ay=T({pad2d_:function(n,t,e){return e===void 0&&(e=0),I(t.length===2&&t[0].length===2&&t[1].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Pr(n,t,e)}}),Dy=T({pad3d_:function(n,t,e){return e===void 0&&(e=0),I(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Pr(n,t,e)}}),Ty=T({pad4d_:function(n,t,e){return e===void 0&&(e=0),I(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Pr(n,t,e)}}),Ny=T({rand_:function(n,t,e){var r=ue(n),o=null;if(e==null||e==="float32")o=new Float32Array(r);else if(e==="int32")o=new Int32Array(r);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=t();return P.makeTensor(o,n,e)}}),Fy=T({randomNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Cu(t,e,r,!1,o),a=xe(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Py=T({randomGamma_:function(n,t,e,r,o){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new by(t,e,r,o),a=xe(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Mh=T({randomUniform_:function(n,t,e,r,o){t===void 0&&(t=0),e===void 0&&(e=1),r===void 0&&(r="float32");for(var i=xe(n,r),a=new xy(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),rn=T({reshape_:function(n,t){var e=C(n,"x","reshape",null);t=pm(t,e.size),I(e.size===ue(t),(function(){return"new shape and old shape must have the same number of elements."}));var r={shape:t};return P.runKernelFunc((function(o){return o.reshape(e,t)}),{x:e},(function(o){return{x:function(){return o.reshape(e.shape)}}}),"Reshape",r)}}),Oh=T({spaceToBatchND_:function(n,t,e){var r=C(n,"x","spaceToBatchND");return I(r.rank>=1+t.length,(function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length})),I(e.length===t.length,(function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length})),I(r.shape.reduce((function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o}),!0),(function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()})),P.runKernelFunc((function(o){return o.spaceToBatchND(r,t,e)}),{$x:r},(function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}}))}}),Bh=T({squeeze_:function(n,t){var e=C(n,"x","squeeze");return rn(e,Cr(e.shape,t).newShape)}}),Kt=T({stack_:function(n,t){t===void 0&&(t=0);var e=Gi(n,"tensors","stack");if(I(e.length>=1,(function(){return"Pass at least one tensor to tf.stack"})),e.length===1)return e[0].expandDims(t);var r=e[0].rank,o=e[0].shape,i=e[0].dtype;I(t<=r,(function(){return"Axis must be <= rank of the tensor"})),e.forEach((function(s){We(o,s.shape,"All tensors passed to stack must have matching shapes")})),e.forEach((function(s){I(i===s.dtype,(function(){return"All tensors passed to stack must have matching dtypes"}))}));var a=e.map((function(s){return s.expandDims(t)}));return ot(a,t)}}),eo=T({tile_:function(n,t){var e=C(n,"x","tile",null);I(e.rank===t.length,(function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."}));var r=[e],o={reps:t};return P.runKernelFunc((function(i,a){var s=i.tile(e,t);return a([e]),s}),{x:e},(function(i,a){var s=a[0];return{x:function(){var u=Pe(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}}),"Tile",o,r)}}),My=T({truncatedNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new Cu(t,e,r,!0,o),a=xe(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),it=T({unstack_:function(n,t){t===void 0&&(t=0),t=t||0;var e=C(n,"x","unstack");I(t>=-e.shape.length&&t<e.shape.length,(function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"})),t<0&&(t+=e.shape.length);var r={axis:t};return P.runKernelFunc((function(o){return o.unstack(e,t)}),{x:e},(function(o){return{x:function(){return Kt(o,t)}}}),"Unpack",r)}}),Oy=function(n,t){return ae(this,void 0,void 0,(function(){var e,r,o,i,a,s,u,c,l,f;return se(this,(function(h){switch(h.label){case 0:return e=C(n,"x","setdiff1d"),r=C(t,"y","setdiff1d"),I(e.dtype===r.dtype,(function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+r.dtype+")."})),I(e.rank===1,(function(){return"x should be 1D tensor, but got x ("+e.shape+")."})),I(r.rank===1,(function(){return"y should be 1D tensor, but got y ("+r.shape+")."})),[4,e.data()];case 1:return o=h.sent(),[4,r.data()];case 2:for(i=h.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new Vo([s],e.dtype),c=new Vo([s],"int32"),l=0,f=0;l<o.length;l++)a.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}}))}))};function qi(n,t,e,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([n[a+1]/t[a],t[a]]);o=o.concat(n.slice(i+1))}return o}function Ki(n,t,e){e===void 0&&(e=!0);var r=[];if(e){r.push(t);for(var o=t+1;o<n;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<n;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function $i(n,t,e,r){r===void 0&&(r=!0);var o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(var i=1;i<n.length;++i)i<=t.length?r?o.push(t[i-1]*n[i]):o.push(n[i]/t[i-1]):o.push(n[i]);return o}function Lh(n,t){for(var e=[0],r=0;r<t;++r)e.push(n[r][0]);return e}function Wh(n,t,e){for(var r=n.slice(0,1),o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}function Uh(n,t){if(n.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+n.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>n.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+n.rank);if(n.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+n.shape+".");for(var e=t.shape,r=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=n.shape,s=e.slice();s.pop();var u=1;for(i=r;i<n.rank;++i)u*=a[i],s.push(a[i]);var c=Cn(n.shape).map((function(l){return l/u})).concat([1]).slice(0,r);return[s,o,u,c]}var Vh=30;function ts(n){return n<=Vh?n:Ms(n,Math.floor(Math.sqrt(n)))}function By(n,t,e){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+n+", sliceDim: "+r+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(n.length<r+(e.rank-o))throw new Error(i+" Output shape length < "+(r+(e.rank-o)));if(e.rank!==o+n.length-r)throw new Error(i+" update.rank != "+(o+n.length-r));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==n[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+n[a+o]+")")}function Ly(n,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(n.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+n.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(n.size===0)throw new Error("Updates specified for empty output. updates shape: "+n.shape)}By(e,t,n)}function Xi(n,t,e){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:ue(t.shape)/u,sliceSize:a,strides:Cn(e.slice(0,o)).concat([1]),outputSize:ue(e)}}function Wy(n,t,e){I(n.rank===t.length,(function(){return"Error in slice"+n.rank+"D: Length of begin "+t+" must match the rank of the array ("+n.rank+")."})),I(n.rank===e.length,(function(){return"Error in slice"+n.rank+"D: Length of size "+e+" must match the rank of the array ("+n.rank+")."}));for(var r=function(i){I(t[i]+e[i]<=n.shape[i],(function(){return"Error in slice"+n.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+n.shape[i]+")"}))},o=0;o<n.rank;++o)r(o)}function vl(n){for(var t=[],e=0;n>0;)1&n&&t.push(e),n/=2,e++;return t}function Eu(n,t,e){for(var r=[],o=0;o<n.length;o++)r[o]=Math.ceil((t[o]-n[o])/e[o]);return r}function Uy(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=Ns(0,i,s-1)}function Vy(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?Ns(0,i,s):Ns(-1,i,s-1)}function zh(n,t,e){for(var r=e.length,o=0;o<e.length;o++)if(e[o]>1){r=o;break}for(o=r+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function Hh(n,t){for(var e=n.length>0?n[n.length-1]:1,r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function zy(n,t){I(Ps(n),(function(){return"The f passed in variableGrads(f) must be a function"})),I(t==null||Array.isArray(t)&&t.every((function(l){return l instanceof lo})),(function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"}));var e=t!=null;if(!e)for(var r in t=[],P.registeredVariables)t.push(P.registeredVariables[r]);var o=e?t.filter((function(l){return!l.trainable})):null,i=t.length;I((t=t.filter((function(l){return l.trainable}))).length>0,(function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."}));var a=P.gradients(n,t,null,!0),s=a.value,u=a.grads;I(u.some((function(l){return l!=null})),(function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."})),I(s.rank===0,(function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"}));var c={};return t.forEach((function(l,f){u[f]!=null&&(c[l.name]=u[f])})),o!=null&&o.forEach((function(l){return c[l.name]=null})),{value:s,grads:c}}function _a(n){return P.customGrad(n)}var qn=T({softmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return P.runKernelFunc((function(r,o){var i=r.softmax(e,t);return o([i]),i}),{logits:e},(function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}}),"Softmax",{dim:t},[],[!0])}}),Hy=T({logSoftmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return _a((function(r,o){var i=r.max(t,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}}))(e)}}),Gh=(function(){function n(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return n.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},n.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},n.prototype.has=function(t){return this.data.has(t)},n.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},n.prototype.numDataIds=function(){return this.dataIdsCount},n})(),jh=(function(){function n(){}return n.prototype.time=function(t){return O("time")},n.prototype.read=function(t){return O("read")},n.prototype.readSync=function(t){return O("readSync")},n.prototype.numDataIds=function(){return O("numDataIds")},n.prototype.disposeData=function(t){return O("disposeData")},n.prototype.write=function(t,e,r){return O("write")},n.prototype.move=function(t,e,r,o){return O("move")},n.prototype.memory=function(){return O("memory")},n.prototype.floatPrecision=function(){return O("floatPrecision")},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.batchMatMul=function(t,e,r,o){return O("batchMatMul")},n.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,O("fusedBatchMatMul")},n.prototype.slice=function(t,e,r){return O("slice")},n.prototype.stridedSlice=function(t,e,r,o){return O("stridedSlice")},n.prototype.unstack=function(t,e){return O("unstack")},n.prototype.reverse=function(t,e){return O("reverse")},n.prototype.concat=function(t,e){return O("concat")},n.prototype.neg=function(t){return O("neg")},n.prototype.add=function(t,e){return O("add")},n.prototype.addN=function(t){return O("addN")},n.prototype.subtract=function(t,e){return O("subtract")},n.prototype.multiply=function(t,e){return O("multiply")},n.prototype.realDivide=function(t,e){return O("realDivide")},n.prototype.floorDiv=function(t,e){return O("floorDiv")},n.prototype.sum=function(t,e){return O("sum")},n.prototype.prod=function(t,e){return O("prod")},n.prototype.unsortedSegmentSum=function(t,e,r){return O("unsortedSegmentSum")},n.prototype.argMin=function(t,e){return O("argMin")},n.prototype.argMax=function(t,e){return O("argMax")},n.prototype.equal=function(t,e){return O("equal")},n.prototype.notEqual=function(t,e){return O("notEqual")},n.prototype.less=function(t,e){return O("less")},n.prototype.lessEqual=function(t,e){return O("lessEqual")},n.prototype.greater=function(t,e){return O("greater")},n.prototype.greaterEqual=function(t,e){return O("greaterEqual")},n.prototype.logicalNot=function(t){return O("logicalNot")},n.prototype.logicalAnd=function(t,e){return O("logicalAnd")},n.prototype.logicalOr=function(t,e){return O("logicalOr")},n.prototype.where=function(t){return O("where")},n.prototype.select=function(t,e,r){return O("select")},n.prototype.topk=function(t,e,r){return O("topk")},n.prototype.min=function(t,e){return O("min")},n.prototype.minimum=function(t,e){return O("minimum")},n.prototype.mod=function(t,e){return O("mod")},n.prototype.max=function(t,e){return O("max")},n.prototype.maximum=function(t,e){return O("maximum")},n.prototype.all=function(t,e){return O("all")},n.prototype.any=function(t,e){return O("any")},n.prototype.squaredDifference=function(t,e){return O("squaredDifference")},n.prototype.ceil=function(t){return O("ceil")},n.prototype.floor=function(t){return O("floor")},n.prototype.round=function(t){return O("round")},n.prototype.sign=function(t){return O("sign")},n.prototype.isNaN=function(t){return O("isNaN")},n.prototype.isInf=function(t){return O("isInf")},n.prototype.isFinite=function(t){return O("isFinite")},n.prototype.pow=function(t,e){return O("pow")},n.prototype.exp=function(t){return O("exp")},n.prototype.expm1=function(t){return O("expm1")},n.prototype.softmax=function(t,e){return O("softmax")},n.prototype.log=function(t){return O("log")},n.prototype.log1p=function(t){return O("log1p")},n.prototype.sqrt=function(t){return O("sqrt")},n.prototype.rsqrt=function(t){return O("rsqrt")},n.prototype.square=function(t){return O("square")},n.prototype.reciprocal=function(t){return O("reciprocal")},n.prototype.relu=function(t){return O("relu")},n.prototype.relu6=function(t){return O("relu6")},n.prototype.prelu=function(t,e){return O("prelu")},n.prototype.elu=function(t){return O("elu")},n.prototype.eluDer=function(t,e){return O("eluDer")},n.prototype.selu=function(t){return O("selu")},n.prototype.int=function(t){return O("int")},n.prototype.clip=function(t,e,r){return O("clip")},n.prototype.abs=function(t){return O("abs")},n.prototype.complexAbs=function(t){return O("complexAbs")},n.prototype.sigmoid=function(t){return O("sigmoid")},n.prototype.softplus=function(t){return O("softplus")},n.prototype.sin=function(t){return O("sin")},n.prototype.cos=function(t){return O("cos")},n.prototype.tan=function(t){return O("tan")},n.prototype.asin=function(t){return O("asin")},n.prototype.acos=function(t){return O("acos")},n.prototype.atan=function(t){return O("atan")},n.prototype.atan2=function(t,e){return O("atan2")},n.prototype.sinh=function(t){return O("sinh")},n.prototype.cosh=function(t){return O("cosh")},n.prototype.tanh=function(t){return O("tanh")},n.prototype.asinh=function(t){return O("asinh")},n.prototype.acosh=function(t){return O("acosh")},n.prototype.atanh=function(t){return O("atanh")},n.prototype.erf=function(t){return O("erf")},n.prototype.step=function(t,e){return O("step")},n.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,O("fusedConv2d")},n.prototype.conv2d=function(t,e,r){return O("conv2d")},n.prototype.conv2dDerInput=function(t,e,r){return O("conv2dDerInput")},n.prototype.conv2dDerFilter=function(t,e,r){return O("conv2dDerFilter")},n.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,O("fusedDepthwiseConv2D")},n.prototype.depthwiseConv2D=function(t,e,r){return O("depthwiseConv2D")},n.prototype.depthwiseConv2DDerInput=function(t,e,r){return O("depthwiseConv2DDerInput")},n.prototype.depthwiseConv2DDerFilter=function(t,e,r){return O("depthwiseConv2DDerFilter")},n.prototype.conv3d=function(t,e,r){return O("conv3d")},n.prototype.conv3dDerInput=function(t,e,r){return O("conv3dDerInput")},n.prototype.conv3dDerFilter=function(t,e,r){return O("conv3dDerFilter")},n.prototype.maxPool=function(t,e){return O("maxPool")},n.prototype.maxPoolBackprop=function(t,e,r,o){return O("maxPoolBackprop")},n.prototype.avgPool=function(t,e){return O("avgPool")},n.prototype.avgPoolBackprop=function(t,e,r){return O("avgPoolBackprop")},n.prototype.avgPool3d=function(t,e){return O("avgPool3d")},n.prototype.avgPool3dBackprop=function(t,e,r){return O("avgPool3dBackprop")},n.prototype.maxPool3d=function(t,e){return O("maxPool3d")},n.prototype.maxPool3dBackprop=function(t,e,r,o){return O("maxPool3dBackprop")},n.prototype.reshape=function(t,e){return O("reshape")},n.prototype.cast=function(t,e){return O("cast")},n.prototype.tile=function(t,e){return O("tile")},n.prototype.pad=function(t,e,r){return O("pad")},n.prototype.transpose=function(t,e){return O("transpose")},n.prototype.gather=function(t,e,r){return O("gather")},n.prototype.gatherND=function(t,e){return O("gatherND")},n.prototype.scatterND=function(t,e,r){return O("scatterND")},n.prototype.batchToSpaceND=function(t,e,r){return O("batchToSpaceND")},n.prototype.spaceToBatchND=function(t,e,r){return O("spaceToBatchND")},n.prototype.resizeBilinear=function(t,e,r,o){return O("resizeBilinear")},n.prototype.resizeBilinearBackprop=function(t,e,r){return O("resizeBilinearBackprop")},n.prototype.resizeNearestNeighbor=function(t,e,r,o){return O("resizeNearestNeighbor")},n.prototype.resizeNearestNeighborBackprop=function(t,e,r){return O("resizeNearestNeighborBackprop")},n.prototype.batchNormalization=function(t,e,r,o,i,a){return O("batchNormalization")},n.prototype.localResponseNormalization4D=function(t,e,r,o,i){return O("localResponseNormalization4D")},n.prototype.LRNGrad=function(t,e,r,o,i,a,s){return O("LRNGrad")},n.prototype.multinomial=function(t,e,r,o){return O("multinomial")},n.prototype.oneHot=function(t,e,r,o){return O("oneHot")},n.prototype.cumsum=function(t,e,r,o){return O("cumsum")},n.prototype.nonMaxSuppression=function(t,e,r,o,i){return O("nonMaxSuppression")},n.prototype.fft=function(t){return O("fft")},n.prototype.ifft=function(t){return O("ifft")},n.prototype.complex=function(t,e){return O("complex")},n.prototype.real=function(t){return O("real")},n.prototype.imag=function(t){return O("imag")},n.prototype.cropAndResize=function(t,e,r,o,i,a){return O("cropAndResize")},n.prototype.depthToSpace=function(t,e,r){return O("depthToSpace")},n.prototype.split=function(t,e,r){return O("split")},n.prototype.sparseToDense=function(t,e,r,o){return O("sparseToDense")},n.prototype.diag=function(t){return O("diag")},n.prototype.fill=function(t,e,r){return O("fill")},n.prototype.onesLike=function(t){return O("onesLike")},n.prototype.zerosLike=function(t){return O("zerosLike")},n.prototype.linspace=function(t,e,r){return O("linspace")},n.prototype.dispose=function(){return O("dispose")},n})();function O(n){throw new Error("'"+n+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function nr(n,t){for(var e=n.length,r=[],o=0;o<e;o++){var i=e-1-o,a=n[i]||1;(t[t.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function at(n,t){for(var e=[],r=0;r<t.length;r++){var o=n[n.length-r-1],i=t.length-r-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function Ne(n,t){for(var e=[],r=Math.max(n.length,t.length),o=0;o<r;o++){var i=n[n.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+n+" and "+t+".");e.unshift(i)}}return e}function Ho(n,t,e,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=Qi(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,n[3],n[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,n[1],n[1]]}return Mr(n,s,e,r,o,i,!1,a)}function Yi(n,t,e,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=zs(t),l=c[0],f=c[1],h=c[2];if(a==="NDHWC")u="channelsLast",s=[l,f,h,n[4],n[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,f,h,n[1],n[1]]}return Ji(n,s,e,r,o,!1,u,i)}function Mr(n,t,e,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=n[0],h=n[1],l=n[2],f=n[3]}var p,d=t[0],g=t[1],v=t[3],m=Qi(e),b=m[0],x=m[1],y=Qi(r),w=y[0],_=y[1],k=to(d,w),S=to(g,_),E=(function(U,z,G,W,B,K,J,ne){var oe,de,_e;if(typeof U=="number"){oe={top:U,bottom:U,left:U,right:U,type:U===0?"VALID":"NUMBER"};var Ce=(function(Fe,A,D,M,q){M==null&&(M=qh(Fe,A,D));var j=Fe[0],$=Fe[1],ee=No((j-A+2*M)/D+1,q);I(Ze(ee),(function(){return"The output # of rows ("+ee+") must be an integer. Change the stride and/or zero pad parameters"}));var Q=No(($-A+2*M)/D+1,q);return I(Ze(Q),(function(){return"The output # of columns ("+Q+") must be an integer. Change the stride and/or zero pad parameters"})),[ee,Q]})([z,G],K,W,U,ne);de=Ce[0],_e=Ce[1]}else if(U==="same"){de=Math.ceil(z/W),_e=Math.ceil(G/B);var we=Math.max(0,(de-1)*W+K-z),Se=Math.max(0,(_e-1)*B+J-G),ke=Math.floor(we/2),Te=we-ke,Ve=Math.floor(Se/2);oe={top:ke,bottom:Te,left:Ve,right:Se-Ve,type:"SAME"}}else{if(U!=="valid")throw Error("Unknown padding parameter: "+U);oe={top:0,bottom:0,left:0,right:0,type:"VALID"},de=Math.ceil((z-K+1)/W),_e=Math.ceil((G-J+1)/B)}return{padInfo:oe,outHeight:de,outWidth:_e}})(o,l,f,b,x,k,S,i),R=E.padInfo,F=E.outHeight,N=E.outWidth,V=a?v*h:v;return s==="channelsFirst"?p=[c,V,F,N]:s==="channelsLast"&&(p=[c,F,N,V]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:F,outWidth:N,outChannels:V,padInfo:R,strideHeight:b,strideWidth:x,filterHeight:d,filterWidth:g,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:_,inShape:n,outShape:p,filterShape:t}}function Ji(n,t,e,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],p=u[4];if(a==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3],p=n[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=n[0],p=n[1],l=n[2],f=n[3],h=n[4]}var d,g=t[0],v=t[1],m=t[2],b=t[4],x=zs(e),y=x[0],w=x[1],_=x[2],k=zs(r),S=k[0],E=k[1],R=k[2],F=to(g,S),N=to(v,E),V=to(m,R),U=(function(J,ne,oe,de,_e,Ce,we,Se,ke,Te,Ve){var Fe,A,D,M;if(typeof J=="number"){Fe={top:J,bottom:J,left:J,right:J,front:J,back:J,type:J===0?"VALID":"NUMBER"};var q=(function(ce,ve,Ae,Me,Re,ct){Re==null&&(Re=qh(ce,ve,Me));var mt=ce[0],$t=ce[1],Xt=ce[2],Nn=No((mt-ve+2*Re)/Me+1,ct);I(Ze(Nn),(function(){return"The output # of depths ("+Nn+") must be an integer. Change the stride and/or zero pad parameters"}));var Lr=No(($t-ve+2*Re)/Me+1,ct);I(Ze(Lr),(function(){return"The output # of rows ("+Lr+") must be an integer. Change the stride and/or zero pad parameters"}));var pt=No((Xt-ve+2*Re)/Me+1,ct);return I(Ze(pt),(function(){return"The output # of columns ("+pt+") must be an integer. Change the stride and/or zero pad parameters"})),[Nn,Lr,pt,Ae]})([ne,oe,de,1],Se,1,_e,J,Ve);A=q[0],D=q[1],M=q[2]}else if(J==="same"){A=Math.ceil(ne/_e),D=Math.ceil(oe/Ce),M=Math.ceil(de/we);var j=(A-1)*_e+Se-ne,$=(D-1)*Ce+ke-oe,ee=(M-1)*we+Te-de,Q=Math.floor(j/2),Z=j-Q,Y=Math.floor($/2),pe=$-Y,te=Math.floor(ee/2);Fe={top:Y,bottom:pe,left:te,right:ee-te,front:Q,back:Z,type:"SAME"}}else{if(J!=="valid")throw Error("Unknown padding parameter: "+J);Fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},A=Math.ceil((ne-Se+1)/_e),D=Math.ceil((oe-ke+1)/Ce),M=Math.ceil((de-Te+1)/we)}return{padInfo:Fe,outDepth:A,outHeight:D,outWidth:M}})(o,l,f,h,y,w,_,F,N,V,s),z=U.padInfo,G=U.outDepth,W=U.outHeight,B=U.outWidth,K=i?b*p:b;return a==="channelsFirst"?d=[c,K,G,W,B]:a==="channelsLast"&&(d=[c,G,W,B,K]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:f,inWidth:h,inChannels:p,outDepth:G,outHeight:W,outWidth:B,outChannels:K,padInfo:z,strideDepth:y,strideHeight:w,strideWidth:_,filterDepth:g,filterHeight:v,filterWidth:m,effectiveFilterDepth:F,effectiveFilterHeight:N,effectiveFilterWidth:V,dilationDepth:S,dilationHeight:E,dilationWidth:R,inShape:n,outShape:d,filterShape:t}}function qh(n,t,e,r){r===void 0&&(r=1);var o=to(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function Qi(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function zs(n){return typeof n=="number"?[n,n,n]:n}function to(n,t){return t<=1?n:n+(n-1)*(t-1)}function No(n,t){if(!t)return n;switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error("Unknown roundingMode "+t)}}function ho(n){var t=Qi(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Wt(n,t){return ho(n)||ho(t)}function Iu(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+n)}function Kh(n,t,e){if(t==="complex64"){if(n.dtype==="complex64")return n.clone();var r=Ke(n.shape),o=n.toFloat(),i=e.complex(o,r);return r.dispose(),o.dispose(),i}if(!gm(n.dtype,t))return P.makeTensorFromDataId(n.dataId,n.shape,t);if(n.dtype==="complex64"){var a=e.real(n);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(n);if(t==="bool"){var s=re(0,n.dtype);return i=e.notEqual(n,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+n.dtype+" to "+t)}function Hs(n,t){return P.makeTensorFromDataId(n.dataId,t,n.dtype)}function $h(n,t,e){var r=(t-n)/(e-1),o=Qo(e,"float32");o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return tt(o,"float32")}function Gs(n,t){if(n.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+n.length+", imag: "+t.length+".");for(var e=new Float32Array(2*n.length),r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function gl(n,t){return{real:n[2*t],imag:n[2*t+1]}}function Gy(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function jy(n,t,e){var r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}function qy(n,t,e){var r=(function(i,a,s){return(function(u,c,l){for(var f=0,h=u.length,p=0,d=!1;f<h;){var g=l(c,u[p=f+(h-f>>>1)]);g>0?f=p+1:(h=p,d=!g)}return d?f:-f-1})(i,a,s||Ky)})(n,t,e),o=r<0?-(r+1):r;n.splice(o,0,t)}function Ky(n,t){return n>t?1:n<t?-1:0}function Ru(n,t,e,r,o){return Xh(n,t,e,r,o,0).selectedIndices}function Su(n,t,e,r,o,i){var a=Xh(n,t,e,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function Xh(n,t,e,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map((function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}})).filter((function(y){return y.score>o})).sort(ml),c=i>0?-.5/i:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),p=h.score,d=h.boxIndex,g=h.suppressBeginIndex;if(p<o)break;for(var v=!1,m=l.length-1;m>=g;--m){var b=$y(n,d,l[m]);if(b>=r){v=!0;break}if(h.score=h.score*Xy(r,c,b),h.score<=o)break}h.suppressBeginIndex=l.length,v||(h.score===p?(l.push(d),f.push(h.score)):h.score>o&&qy(u,h,ml))}var x=l.length;return s&&(l.fill(0,x),f.fill(0,x)),{selectedIndices:tt(l,"int32"),selectedScores:tt(f,"float32"),numValidOutputs:re(x,"int32")}}function $y(n,t,e){var r=n.subarray(4*t,4*t+4),o=n.subarray(4*e,4*e+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),p=(s-i)*(u-a),d=(f-c)*(h-l);if(p<=0||d<=0)return 0;var g=Math.max(i,c),v=Math.max(a,l),m=Math.min(s,f),b=Math.min(u,h),x=Math.max(m-g,0)*Math.max(b-v,0);return x/(p+d-x)}function Xy(n,t,e){var r=Math.exp(t*e*e);return e<=n?r:0}function ml(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function Yh(n,t,e){var r=new Array(n.rank).fill(0),o=n.shape.slice();return t.map((function(i){o[e]=i;var a=n.slice(r,o);return r[e]+=i,a}))}function Jh(n,t){for(var e=new Array(n.rank),r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];var o=xe(e,n.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(n.rank),s=0;s<a.length;s++)a[s]=i[s]%n.shape[s];var u=n.locToIndex(a);o.values[r]=n.values[u]}return o.toTensor()}function Qh(n,t,e,r,o){for(var i=t[t.length-1],a=[n.length/i,i],s=a[0],u=a[1],c=Uo(e,s*r),l=Uo("int32",s*r),f=0;f<s;f++){for(var h=f*u,p=n.subarray(h,h+u),d=[],g=0;g<p.length;g++)d.push({value:p[g],index:g});d.sort((function(y,w){return w.value-y.value}));var v=f*r,m=c.subarray(v,v+r),b=l.subarray(v,v+r);for(g=0;g<r;g++)m[g]=d[g].value,b[g]=d[g].index}var x=t.slice();return x[x.length-1]=r,[gt(c,x,e),gt(l,x,"int32")]}function ku(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&e.push(r);var o=xe(n,"int32"),i=xe([e.length,n.length],"int32");for(r=0;r<e.length;r++){var a=o.indexToLoc(e[r]),s=r*n.length;i.values.set(a,s)}return i.toTensor()}var Yy=function(n,t){this.outputShape=[],this.outputShape=n,this.variableNames=t.map((function(o,i){return"T"+i}));var e=[];this.variableNames.forEach((function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")}));var r=this.variableNames.map((function(o){return"v"+o})).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},Jy=function(n,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.variableNames=t.map((function(o,i){return"T"+i}));var e=[];this.variableNames.forEach((function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")}));var r=this.variableNames.map((function(o){return"v"+o})).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},Qy=function(n,t,e){this.variableNames=["A"];var r=n.windowSize,o=n.batchSize,i=n.inSize,a=Math.ceil(i/r);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Zh(n,t){return["x","y","z","w","u","v"].slice(0,t).map((function(e){return n+"."+e}))}function Mt(n,t){return t===1?[n]:Zh(n,t)}function wt(){var n,t,e,r,o,i,a,s,u,c;return H().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Er(n,t,e){e===void 0&&(e="index");var r=Cn(t);return r.map((function(o,i){return"int "+n[i]+" = "+e+" / "+o+"; "+(i===r.length-1?"int "+n[i+1]+" = "+e+" - "+n[i]+" * "+o:"index -= "+n[i]+" * "+o)+";"})).join("")}function Au(n){var t=Cn(n).map((function(e){return e.toString()}));return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var ep=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Zy(n,t,e,r){var o=[];n.forEach((function(p){var d=ue(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))}));var i,a,s=o.join(`
`),u=n.map((function(p){return(function(d,g,v){v===void 0&&(v=!1);var m="";m+=v?tp(d):jr(d);var b=d.shapeInfo.logicalShape,x=g.logicalShape;return b.length<=x.length&&(m+=v?(function(y,w){var _,k=y.name,S=k.charAt(0).toUpperCase()+k.slice(1),E="get"+S+"AtOutCoords",R=y.shapeInfo.logicalShape.length,F=w.logicalShape.length,N=nr(y.shapeInfo.logicalShape,w.logicalShape),V=qe(F),U=F-R,z=["x","y","z","w","u","v"];_=R===0?"":F<2&&N.length>=1?"coords = 0;":N.map((function(oe){return"coords."+z[oe+U]+" = 0;"})).join(`
`);var G="";G=F<2&&R>0?"coords":y.shapeInfo.logicalShape.map((function(oe,de){return"coords."+z[de+U]})).join(", ");var W="return outputValue;",B=ue(y.shapeInfo.logicalShape)===1,K=ue(w.logicalShape)===1;if(R!==1||B||K){if(B&&!K)W=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(N.length){var J=R-2,ne=R-1;N.indexOf(J)>-1&&N.indexOf(ne)>-1?W="return vec4(outputValue.x);":N.indexOf(J)>-1?W="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":N.indexOf(ne)>-1&&(W="return vec4(outputValue.xx, outputValue.zz);")}}else W=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+E+`() {
      `+V+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+S+"("+G+`);
      `+W+`
    }
  `})(d,g):(function(y,w){var _=y.name,k=_.charAt(0).toUpperCase()+_.slice(1),S="get"+k+"AtOutCoords",E=w.texShape,R=y.shapeInfo.texShape,F=y.shapeInfo.logicalShape.length,N=w.logicalShape.length;if(!y.shapeInfo.isUniform&&F===N&&y.shapeInfo.flatOffset==null&&ft(R,E))return`
      float `+S+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var V,U=qe(N),z=nr(y.shapeInfo.logicalShape,w.logicalShape),G=N-F,W=["x","y","z","w","u","v"];V=F===0?"":N<2&&z.length>=1?"coords = 0;":z.map((function(K){return"coords."+W[K+G]+" = 0;"})).join(`
`);var B="";return B=N<2&&F>0?"coords":y.shapeInfo.logicalShape.map((function(K,J){return"coords."+W[J+G]})).join(", "),`
    float `+S+`() {
      `+U+` coords = getOutputCoords();
      `+V+`
      return get`+k+"("+B+`);
    }
  `})(d,g)),m})(p,t,r)})).join(`
`),c=t.texShape,l=wt(),f=(function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `})(l),h=(function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+e0+`
    `+t0+`
    `+n0+`
  `})(l);return t.isPacked?(i=(function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `})(0,d);case 2:return(function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(ft(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var k=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec2(r, c);
    }
  `})(p,d);case 3:return g=p,v=d,m=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],b=Math.ceil(g[2]/2),x=b*Math.ceil(g[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+b+`);
      int c = imod(index, `+b+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return(function(y,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],k=Math.ceil(y[y.length-1]/2),S=k*Math.ceil(y[y.length-2]/2),E=S,R="",F="b, r, c",N=2;N<y.length-1;N++)E*=y[y.length-N-1],R=`
      int b`+N+" = index / "+E+`;
      index -= b`+N+" * "+E+`;
    `+R,F="b"+N+", "+F;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec`+y.length+"("+F+`);
    }
  `})(p,d)}var g,v,m,b,x})(t.logicalShape,c),a=(function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `})(l)):(i=(function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(function(m,b){return b[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+b[1]+`.0);
      }
    `:b[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+b[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      return resTexRC.x * `+b[1]+` + resTexRC.y;
    }
  `})(0,d);case 2:return(function(m,b){return ft(m,b)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+b[0]+", "+b[1]+`));
      }
    `:m[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:m[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      int r = index / `+m[1]+`;
      int c = index - r * `+m[1]+`;
      return ivec2(r, c);
    }
  `})(p,d);case 3:return g=d,v=Er(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return(function(m,b){var x=Er(["r","c","d","d2"],m);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `})(p,d);case 5:return(function(m,b){var x=Er(["r","c","d","d2","d3"],m);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+b[0]+`,
                             `+b[1]+`));

      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `})(p,d);case 6:return(function(m,b){var x=Er(["r","c","d","d2","d3","d4"],m);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `})(p,d);default:throw new Error(p.length+"-D output sampling is not yet supported")}var g,v})(t.logicalShape,c),a=(function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `})(l)),r&&(h+=r0),[h,f,a,s,i,u,e].join(`
`)}function jr(n){var t=n.shapeInfo.logicalShape;switch(t.length){case 0:return(function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=br(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `})(n);case 1:return(function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Ur(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=br(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `})(n);case 2:return(function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&ft(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=Cr(r),l=c.newShape,f=c.keptDims,h=l;if(h.length<r.length){var p=qr(e,h);return`
      `+jr(p)+`
      float `+i+`(int row, int col) {
        return `+i+"("+Kr(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+Ur(e)+`
      }
    `;var d=a[0],g=a[1],v=br(o);return g===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+g+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+g+`, index);
    return sampleTexture(`+o+`, uv);
  }
`})(n);case 3:return(function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=Cr(r),c=u.newShape,l=u.keptDims,f=c;if(f.length<r.length){var h=qr(e,f);return`
        `+jr(h)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+Kr(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+Ur(e)+`
      }
    `;var p=e.shapeInfo.texShape,d=p[0],g=p[1],v=e.shapeInfo.flatOffset;if(g===a&&v==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+g+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(g===s&&v==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+g+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var m=br(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+m+`;
        vec2 uv = uvFromFlat(`+d+", "+g+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `})(n);case 4:return(function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,c=Cr(r),l=c.newShape,f=c.keptDims;if(l.length<r.length){var h=qr(e,l);return`
      `+jr(h)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+Kr(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+Ur(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,g=d[0],v=d[1];if(v===u&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var m=br(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+g+", "+v+", index + "+m+`);
      return sampleTexture(`+o+`, uv);
    }
  `})(n);case 5:return(function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,c=r[1]*u,l=Cr(r),f=l.newShape,h=l.keptDims;if(f.length<r.length){var p=qr(e,f);return`
      `+jr(p)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+Kr(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+Ur(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,g=e.shapeInfo.texShape,v=g[0],m=g[1];if(m===c&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=br(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+b+`;
      vec2 uv = uvFromFlat(`+v+", "+m+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `})(n);case 6:return(function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=Cr(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var c=qr(e,s);return`
      `+jr(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+Kr(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],f=r[4]*l,h=r[3]*f,p=r[2]*h,d=r[1]*p;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+p+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Ur(e)+`
      }
    `;var g=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],b=v[1];if(b===d&&g==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+b+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(b===l&&g==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+b+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=br(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+p+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+m+", "+b+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `})(n);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function tp(n){var t,e,r;switch(n.shapeInfo.logicalShape.length){case 0:return t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),r=wt(),`
    vec4 `+e+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return(function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=wt();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `})(n);case 2:return(function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=wt();if(u!=null&&ft(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `})(n);case 3:return(function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),f=qr(o,l);return`
        `+tp(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Kr(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],p=c[1],d=Math.ceil(i[2]/2),g=d*Math.ceil(i[1]/2),v=wt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+p+", "+g+", "+d+`, b, row, col);
      return `+v.texture2D+"("+a+`, uv);
    }
  `})(n);default:return(function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],p=Math.ceil(i[a-1]/2),d=p*Math.ceil(i[a-2]/2),g="int b, int row, int col",v="b * "+d+" + (row / 2) * "+p+" + (col / 2)",m=2;m<a-1;m++)g="int b"+m+", "+g,d*=i[a-m-1],v="b"+m+" * "+d+" + "+v;var b=wt();return`
    vec4 `+u+"("+g+`) {
      int index = `+v+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+b.texture2D+"("+s+`, uv);
    }
  `})(n)}}var e0=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,t0=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,n0=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,r0=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function br(n){return"offset"+n}function Ur(n){var t=n.name,e=ue(n.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function qe(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error("GPU for rank "+n+" is not yet supported")}function qr(n,t){var e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Kr(n,t){return t.map((function(e){return n[e]})).join(", ")}var o0=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,I(n.length>2,(function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."}));var o=n[n.length-1],i=Math.ceil(o/t);this.outputShape=n.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=qe(c),f=Mt("coords",c);if(i===1){var h=qe(s=c+1);a=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),d="."+p[s-1],g=p.map((function(S){return"int "+S})),v=Mt("sourceLocR",s-1).concat("inIdx.r"),m=Mt("sourceLocG",s-1).concat("inIdx.g"),b=Mt("sourceLocB",s-1).concat("inIdx.b"),x=Mt("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+b.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+m.join()+`) : 0.,
            hasNextRow ? getAChannel(`+b.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",k=r?"":`
      float getBestIndicesAChannel(`+g.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+g.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+k+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},i0=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterHeight,u=n.effectiveFilterWidth,c=s-1-n.padInfo.top,l=u-1-n.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},a0=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,p=l-1-n.padInfo.front,d=f-1-n.padInfo.top,g=h-1-n.padInfo.left,v=1/(t*e*r);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+d+", "+g+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},s0=function(n,t,e,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Ne(n,t),Ne(n,e);var a="0.0";r!=null&&(Ne(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(Ne(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},u0=function(n,t,e,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Ne(n,t),Ne(n,e);var a="vec4(0.0)";r!=null&&(Ne(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(Ne(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},c0="return areal * breal - aimag * bimag;",l0="return areal * bimag + aimag * breal;",yl=function(n,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Ne(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+n+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},ns="return a + b;",rs="return a - b;",bl="return a * b;",np="return (a < 0.) ? b * a : a;",Je=function(n,t,e){this.variableNames=["A","B"],this.outputShape=Ne(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+n+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},rp=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Mn=function(n,t,e,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Ne(t,e);var o=this.outputShape.length,i="";if(r)if(o===0||ue(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+qe(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=Mt("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+n+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},f0=(function(){function n(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n})(),h0=(function(){function n(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n})(),p0=function(n){this.variableNames=["real","imag"],this.outputShape=n,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},d0=function(n){this.outputShape=[],this.outputShape=fo(n,1),this.variableNames=n.map((function(s,u){return"T"+u}));var t=new Array(n.length-1);t[0]=n[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+n[e][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];r.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},v0=function(n,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=fo(n,t);var e=this.outputShape,r=e.length,o=qe(r),i=Mt("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=n.map((function(v,m){return"T"+m}));var s=new Array(n.length-1);s[0]=n[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+n[u][t];var c=a[t],l=a.slice(-2),f=a.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+vi(a,c,p)+`),
            vec2(`+vi(l,c,p)+`));
        }`}var d=s.length,g=s[s.length-1];h+=`
        return getChannel(
          getT`+d+"("+vi(a,c,g)+`),
          vec2(`+vi(l,c,g)+"));",this.userCode=`
      float getValue(`+a.map((function(v){return"int "+v}))+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+e[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+e[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+e[r-2]+` &&
            `+i[r-1]+" < "+e[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function vi(n,t,e){var r=n.indexOf(t);return n.map((function(o,i){return i===r?o+" - "+e:o})).join()}var g0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},m0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dataFormat==="channelsLast",a=t-1-n.padInfo.top,s=e-1-n.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},y0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.padInfo.front,i=n.padInfo.top,a=n.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yF = 0; yF < `+n.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+n.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+n.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+n.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},b0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=t-1-n.padInfo.front,u=e-1-n.padInfo.top,c=r-1-n.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+n.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},x0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.outChannels/n.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},w0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=t-1-n.padInfo.top,a=e-1-n.padInfo.left,s=n.outChannels/n.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},xl=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.padInfo.top,i=n.padInfo.left,a=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterHeight,f=n.filterWidth,h=4*Math.floor(n.inChannels/4),p=n.inChannels%4,d=n.dataFormat==="channelsLast",g=d?1:2,v=d?2:3,m=d?3:1,b="",x="";e&&(b=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+m+`];

        ivec2 xRCCorner =
            ivec2(coords[`+g+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+n.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+x+`
        setOutput(result);
      }
    `},_0=function(n){this.variableNames=["x","W"],this.outputShape=n.outShape;var t=n.padInfo.front,e=n.padInfo.top,r=n.padInfo.left,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterDepth,f=n.filterHeight,h=n.filterWidth,p=4*Math.floor(n.inChannels/4),d=n.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},wl=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,p=n.filterWidth,d=n.outChannels/n.inChannels,g="",v="";e&&(g=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+g+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+m+`
        `+v+`
        setOutput(result);
      }
    `},_l=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.outShape;for(var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,p=n.filterWidth,d=p,g="int xR; int xC; int xCOffset;",v=0;v<h;v++)for(var m=0;m<p;m++)g+=`
          vec4 xTexelR`+v+"C"+2*m+` = vec4(0.);
          vec4 wR`+v+"C"+m+` = vec4(0.);
          vec4 xR`+v+"C"+m+" = vec4(0.);";for(v=0;v<h;v++)for(var b=0;b<d;b++){if(g+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(m=2*b)*f+`;
        `,c===1){if(m<p&&(g+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+v+"C"+m+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+m+" = vec4(previous.zw, xTexelR"+v+"C"+m+`.xy);
                } else {
                  xR`+v+"C"+m+" = vec4(0, 0, xTexelR"+v+"C"+m+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xR`+v+"C"+m+" = xTexelR"+v+"C"+m+`;
              `,m+1<p)){var x=s%2==0?wh(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(g+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(g+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+m+` = vec4(0.);
                    }
                  `),g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.xy);
                `):g+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(m+1)+" = xTexelR"+v+"C"+(m+2)+`;
                `}}else m<p&&(g+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(g+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(m+2)+` = vec4(0.);
                }

                xR`+v+"C"+m+` = vec4(
                  xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
              `,m+1<p&&(g+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(m+1)+" = vec4(xTexelR"+v+"C"+(m+2)+`.xy, final.xy);
                `)):(g+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(m+2)+` = vec4(0.);
                }

                xR`+v+"C"+m+` = vec4(
                  xTexelR`+v+"C"+m+".xy, xTexelR"+v+"C"+(m+2)+`.xy);
              `,m+1<p&&(g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
                `)),g+="}");m<p&&(g+=`
            vec4 wTexelR`+v+"C"+m+" = getW("+v+", "+m+`, d1, q);
            wR`+v+"C"+m+" = vec4(wTexelR"+v+"C"+m+".xz, wTexelR"+v+"C"+m+`.xz);
          `,m+1<p&&(g+=`
              vec4 wTexelR`+v+"C"+(m+1)+" = getW("+v+", "+(m+1)+`, d1, q);
              wR`+v+"C"+(m+1)+` =
                vec4(wTexelR`+v+"C"+(m+1)+".xz, wTexelR"+v+"C"+(m+1)+".xz);"))}for(v=0;v<h;v++)for(m=0;m<p;m++)g+="dotProd += xR"+v+"C"+m+" * wR"+v+"C"+m+";";var y="",w="";e&&(y=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+g+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},C0=function(n,t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=n[0],a=n[1],s=n[2],u=n[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=r==="bilinear"?1:0,p=[a-1+".0",s-1+".0"],d=p[0],g=p[1],v=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],m=v[0],b=v[1],x=v[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+g+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+g],w=y[0],_=y[1],k=y[2];this.userCode=`
      const float height_ratio = float(`+m+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+b+`;
        float width_scale = `+_+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+k+`;
        if( in_x < 0.0 || in_x > `+g+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},E0=function(n,t,e){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=n[n.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+qe(r)+` coords = getOutputCoords();
        int end = `+Cl(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Cl(r,"coords")+` = idx;
          val += getX(`+(function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")})(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function Cl(n,t){if(n===1)return""+t;if(n===2)return t+".y";if(n===3)return t+".z";if(n===4)return t+".w";throw Error("Cumulative sum for rank "+n+" is not yet supported")}var I0=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=zo.DENSE;var t=To(n),e=wt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Er(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},R0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=zo.DENSE;var t=To(n),e=wt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Er(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},S0=(function(){function n(t,e,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return n.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},n.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},n.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},n.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},n.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},n})(),k0=function(n){this.variableNames=["X"],this.outputShape=[n,n],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},A0=function(n){this.variableNames=["A"],this.outTexUsage=Ht.DOWNLOAD;var t=wt();this.outputShape=n,this.userCode=`
      `+ep+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},D0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ht.DOWNLOAD;var t=wt();this.outputShape=n,this.userCode=`
      `+ep+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},T0=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var r=wt(),o=t[0],i=t[1];this.outputShape=n;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+Au(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},N0=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=wt(),o=t[0],i=t[1];this.outputShape=n;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+n[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+n[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Au(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},F0="return real * expR - imag * expI;",P0="return real * expI + imag * expR;",El=function(n,t,e){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+n+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},M0=(function(){function n(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.valueLoc==null&&(e.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(e.valueLoc,t)}},n})(),O0=function(n,t,e){this.variableNames=["A","indices"];var r=n.slice();r[e]=t,this.outputShape=r,this.rank=r.length;var o=qe(this.rank),i=(function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<a.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()})(n,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},B0=function(n,t,e){this.sliceDim=n,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var r=qe(t.length),o=qe(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function L0(n,t){var e=wt();return Fm(n,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function W0(n,t){return Lm(n,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function U0(n,t){return Wm(n,t,new Uint16Array([0,1,2,2,1,3]))}function ei(n,t,e,r,o,i,a){Vm(e,r);var s=Um(n,t),u=n.TEXTURE_2D;return le(n,t,(function(){return n.bindTexture(u,s)})),le(n,t,(function(){return n.texParameteri(u,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)})),le(n,t,(function(){return n.texParameteri(u,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)})),le(n,t,(function(){return n.texParameteri(u,n.TEXTURE_MIN_FILTER,n.NEAREST)})),le(n,t,(function(){return n.texParameteri(u,n.TEXTURE_MAG_FILTER,n.NEAREST)})),le(n,t,(function(){return n.texImage2D(u,0,o,e,r,0,i,a,null)})),le(n,t,(function(){return n.bindTexture(n.TEXTURE_2D,null)})),s}function V0(n,t,e,r,o){var i=xa(e,r);return ei(n,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,n.FLOAT)}function z0(n,t,e,r,o){var i=xa(e,r);return ei(n,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function H0(n,t,e,r,o){var i=xa(e,r);return ei(n,t,i[0],i[1],n.RGBA,n.RGBA,n.UNSIGNED_BYTE)}function G0(n,t,e,r,o){var i=Zo(e,r);return ei(n,t,i[0],i[1],o.internalFormatPackedFloat,n.RGBA,n.FLOAT)}function j0(n,t,e,r,o){var i=Zo(e,r);return ei(n,t,i[0],i[1],o.internalFormatPackedHalfFloat,n.RGBA,o.textureTypeHalfFloat)}function q0(n,t,e,r){return le(n,t,(function(){return n.bindBuffer(n.ARRAY_BUFFER,r)})),fl(n,t,e,"clipSpacePos",r,3,20,0)&&fl(n,t,e,"uv",r,2,20,12)}function K0(n,t,e,r,o,i,a){var s,u,c;le(n,t,(function(){return n.bindTexture(n.TEXTURE_2D,e)})),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=n.UNSIGNED_BYTE,c=n.RGBA):(s=new Float32Array(r*o*4),u=n.FLOAT,c=a.internalFormatPackedFloat),s.set(i),le(n,t,(function(){return n.texImage2D(n.TEXTURE_2D,0,c,r,o,0,n.RGBA,u,s)})),le(n,t,(function(){return n.bindTexture(n.TEXTURE_2D,null)}))}function $0(n,t,e,r){le(n,t,(function(){return n.bindTexture(n.TEXTURE_2D,e)})),r.data instanceof Uint8Array?le(n,t,(function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r.width,r.height,0,n.RGBA,n.UNSIGNED_BYTE,r.data)})):le(n,t,(function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r)})),le(n,t,(function(){return n.bindTexture(n.TEXTURE_2D,null)}))}function X0(n,t,e,r,o){var i=n.createBuffer();le(n,t,(function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,i)}));var a=16*e*r;return le(n,t,(function(){return n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)})),le(n,t,(function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,0)})),le(n,t,(function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,null)})),i}function Y0(n,t,e){var r=n,o=new Float32Array(e);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function J0(n,t,e,r,o){var i=xa(e,r),a=i[0],s=i[1],u=new Uint8Array(e*r*4);return le(n,t,(function(){return n.readPixels(0,0,a,s,o.downloadTextureFormat,n.UNSIGNED_BYTE,u)})),new Float32Array(u.buffer)}function Q0(n,t,e,r,o,i,a,s){var u=n,c=new Float32Array((function(l,f){var h=Zo(l,f);return h[0]*h[1]*4})(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Z0(n,t,e,r){var o=new Float32Array(e*r*4);return le(n,t,(function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,o)})),o}var eb=(function(){function n(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=H().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,km(e,t)):this.gl=kn(e);var r="WEBGL_color_buffer_float";if(H().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=fi(this.gl,this.debug,"OES_texture_float"),Zt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=fi(this.gl,this.debug,"OES_texture_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Zt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=fi(this.gl,this.debug,"EXT_color_buffer_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Zt(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!Zt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=W0(this.gl,this.debug),this.indexBuffer=U0(this.gl,this.debug),this.framebuffer=zm(this.gl,this.debug),this.textureConfig=bu(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(n.prototype,"debug",{get:function(){return H().getBool("DEBUG")},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;le(e,this.debug,(function(){return e.finish()})),le(e,this.debug,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)})),le(e,this.debug,(function(){return e.deleteFramebuffer(t.framebuffer)})),le(e,this.debug,(function(){return e.bindBuffer(e.ARRAY_BUFFER,null)})),le(e,this.debug,(function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)})),le(e,this.debug,(function(){return e.deleteBuffer(t.indexBuffer)})),this.disposed=!0}},n.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),V0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),z0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),H0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),$0(this.gl,this.debug,t,e)},n.prototype.uploadDenseMatrixToTexture=function(t,e,r,o){this.throwIfDisposed(),K0(this.gl,this.debug,t,e,r,o,this.textureConfig)},n.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),j0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),G0(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(hl(this.gl,this.debug,this.framebuffer),this.outputTexture=null),le(this.gl,this.debug,(function(){return e.gl.deleteTexture(t)}))},n.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,(function(){return J0(o.gl,o.debug,e,r,o.textureConfig)}))},n.prototype.downloadPackedMatrixFromBuffer=function(t,e,r,o,i,a){return Q0(this.gl,t,0,0,0,i,a,this.textureConfig)},n.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Y0(this.gl,t,e)},n.prototype.createBufferFromTexture=function(t,e,r){this.bindTextureToFrameBuffer(t);var o=X0(this.gl,this.debug,e,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},n.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},n.prototype.createFence=function(t){var e,r,o=this;if(H().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(e,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:e,isFencePassed:r}},n.prototype.downloadMatrixFromPackedTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,(function(){return Z0(o.gl,o.debug,e,r)}))},n.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,r=Pm(e,this.debug,t),o=L0(e,this.debug),i=Om(e,this.debug);return le(e,this.debug,(function(){return e.attachShader(i,o)})),le(e,this.debug,(function(){return e.attachShader(i,r)})),Bm(e,this.debug,i),this.debug&&Qa(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=q0(e,this.debug,this.program,this.vertexBuffer)),i},n.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&le(this.gl,this.debug,(function(){return e.gl.deleteProgram(t)}))},n.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Qa(this.gl,this.debug,this.program),le(this.gl,this.debug,(function(){return e.gl.useProgram(t)}))},n.prototype.getUniformLocation=function(t,e,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?Gm(this.gl,this.debug,t,e):jm(this.gl,t,e)},n.prototype.getAttributeLocation=function(t,e){var r=this;return this.throwIfDisposed(),le(this.gl,this.debug,(function(){return r.gl.getAttribLocation(t,e)}))},n.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},n.prototype.setInputMatrixTexture=function(t,e,r){this.throwIfDisposed(),this.throwIfNoProgram(),qm(this.gl,this.debug,this.program,t,e,r)},n.prototype.setOutputMatrixTexture=function(t,e,r){this.setOutputMatrixTextureDriver(t,r,e)},n.prototype.setOutputPackedMatrixTexture=function(t,e,r){this.throwIfDisposed();var o=Zo(e,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},n.prototype.setOutputMatrixWriteRegion=function(t,e,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,e)},n.prototype.setOutputPackedMatrixWriteRegion=function(t,e,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},n.prototype.debugValidate=function(){this.program!=null&&Qa(this.gl,this.debug,this.program),hi(this.gl)},n.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),le(t,this.debug,(function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}))},n.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),le(this.gl,this.debug,(function(){return t.gl.finish()}))},n.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=fi(this.gl,this.debug,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},n.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},n.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},n.prototype.beginQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},n.prototype.endQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,r=this.getQueryTimerExtensionWebGL2();e.endQuery(r.TIME_ELAPSED_EXT)}},n.prototype.waitForQueryAndGetTime=function(t){return ae(this,void 0,void 0,(function(){var e=this;return se(this,(function(r){switch(r.label){case 0:return[4,il((function(){return e.disposed||e.isQueryAvailable(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}))];case 1:return r.sent(),[2,this.getQueryTime(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}}))}))},n.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},n.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},n.prototype.pollFence=function(t){var e=this;return new Promise((function(r){e.addItemToPoll((function(){return t.isFencePassed()}),(function(){return r()}))}))},n.prototype.pollItems=function(){for(var t=(function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1})(this.itemsToPoll.map((function(r){return r.isDoneFn}))),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},n.prototype.addItemToPoll=function(t,e){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||il((function(){return r.pollItems(),r.itemsToPoll.length===0}))},n.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Za(this.gl,this.debug,t,this.framebuffer),this.debug&&hi(this.gl)},n.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Za(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&hi(this.gl)):hl(this.gl,this.debug,this.framebuffer)},n.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var r=e();return this.unbindTextureToFrameBuffer(),r},n.prototype.setOutputMatrixTextureDriver=function(t,e,r){this.throwIfDisposed();var o=this.gl;Za(o,this.debug,t,this.framebuffer),this.debug&&hi(o),this.outputTexture=t,le(o,this.debug,(function(){return o.viewport(0,0,e,r)})),le(o,this.debug,(function(){return o.scissor(0,0,e,r)}))},n.prototype.setOutputMatrixWriteRegionDriver=function(t,e,r,o){var i=this;this.throwIfDisposed(),le(this.gl,this.debug,(function(){return i.gl.scissor(t,e,r,o)}))},n.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},n.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},n})();function Il(n,t){if(n.length!==t.length)throw Error("Binary was compiled with "+n.length+" inputs, but was executed with "+t.length+" inputs");n.forEach((function(e,r){var o=e.logicalShape,i=t[r],a=i.shape;if(!ft(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!ft(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}}))}var tb=function(n,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var r=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,p=s.top,d=o*r,g=wt(),v=f==="channelsLast",m=v?0:1,b=v?1:2,x="",y=0;y<=1;y++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+n[1]+" && pos < "+n[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+t[m]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+t[b]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+g.output+` = result;
      }
    `},nb=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},rb=function(n,t,e,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},ob=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},ib=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideHeight,e=n.strideWidth,r=n.dilationHeight,o=n.effectiveFilterHeight,i=n.effectiveFilterWidth,a=o-1-n.padInfo.top,s=i-1-n.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ab=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.dilationDepth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=s-1-n.padInfo.front,f=u-1-n.padInfo.top,h=c-1-n.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},os=function(n,t,e,r,o,i,a){e===void 0&&(e=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?n[1]:n[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";i&&(p=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,d="result = activation(result);");var g=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+g+`

        `+d+`

        setOutput(result);
      }
    `},sb=(function(){function n(t,e,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.seedLoc==null&&(e.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(e.seedLoc,t)}},n})(),ub=function(n,t,e,r){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},cb=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=n;var t=n.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Mt("rc",t),r=qe(t),o=(function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l})(t,n,e),i=(function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `})(t,n[n.length-1],n[n.length-2],e),a=(function(s,u){var c=s.length,l=(function(f,h){for(var p=[],d=0;d<=1;d++)for(var g=0;g<=1;g++){for(var v=(d===0?"r":"rp1")+", "+(g===0?"c":"cp1"),m=2;m<f;m++)v=h[h.length-1-m]+","+v;p.push(v)}return p})(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"})(n,e);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},lb=function(n,t,e){this.variableNames=["x"],this.outputShape=t.map((function(u,c){return u[0]+n[c]+u[1]}));var r=n.length,o=qe(r),i=t.map((function(u){return u[0]})).join(","),a=t.map((function(u,c){return u[0]+n[c]})).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},fb=function(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((function(v,m){return v[0]+n[m]+v[1]}));for(var r=n.length,o=qe(r),i=t.map((function(v){return v[0]})).join(","),a=t.map((function(v,m){return v[0]+n[m]})).join(","),s=Mt("rc",r),u=Mt("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],h=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,g=r===1?2:4;d<g;d++)p+=`
        `+f[d]+`
        if (`+h+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},is=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideHeight,i=n.strideWidth,a=n.dilationHeight,s=n.dilationWidth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;var h=t==="avg",p="0.0";if(h||(p="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(d="avgValue / count");var g=4*Math.floor(r/4),v=r%4,m=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+g+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+m+`
          }

          int xC = xCCorner + `+g+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+m+`
          }
        }
        setOutput(`+d+`);
      }
    `}},as=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,p=n.padInfo.front,d=n.padInfo.top,g=n.padInfo.left;this.outputShape=n.outShape;var v=t==="avg",m="0.0";if(v||(m="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+p+", "+d+", "+g+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+n.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var b=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(b="avgValue / count");var x=4*Math.floor(r/4),y=r%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+p+", "+d+", "+g+`);
      const float initializationValue = `+m+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+m+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+b+`);
        }
      }
    `}},hb=function(n,t){this.variableNames=["x"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=Math.ceil(o/e);this.outputShape=[r,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var p="";o%e>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},pb=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var e="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Er(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Au(n)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+n[1]+`;
        int cols = `+n[2]+`;

        `+e+`

        setOutput(result);
      }
    `},db=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],p=1/f,d=1/h,g=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+g+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},vb=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},gb=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},mb=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],p=1/f,d=1/h,g=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+g+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},yb=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},bb=function(n,t){this.variableNames=["x"];var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=n,e!==1){var r=n.map((function(i,a){return(function(s){return t.indexOf(s)!==-1&&n[s]!==1?n[s]+" - coords["+s+"] - 1":"coords["+s+"]"})(a)})).join(","),o=qe(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+n[0]+` - coord - 1));
        }
      `},xb=function(n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=n;var r=Mt("rc",e),o=r[e-1]+" + 1 < "+this.outputShape[e-1],i=r[e-2]+" + 1 < "+this.outputShape[e-2],a=qe(e);function s(u){var c=n.map((function(l,f){return(function(h,p){return t.indexOf(h)!==-1&&n[h]!==1?n[h]+" - "+p[h]+" - 1":""+p[h]})(f,u)}));return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+n[0]+` - rc - 1),
            `+n[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+n[0]+` - (rc  + 1) - 1),
                `+n[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+(function(u){return s(u)})(r.slice())+`;
          if(`+o+`){
            result.g = `+(function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)})(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+(function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)})(r.slice())+`;
            if(`+o+`) {
              result.a = `+(function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)})(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Rl=function(n,t,e,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=qe(o.length),u=qe(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var h="getUpdates("+f+")",p=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+n+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},wb=function(n,t){this.variableNames=["x","segmentIds"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=n.numSegments,a=i*Math.ceil(o/e);this.outputShape=[r,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},_b=function(n,t,e){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<n&&a.push(""+i[u]);r=a.join(),o=s.join()}var c=qe(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Cb=(function(){function n(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,r=qe(this.rank),o="uniform int start["+this.rank+"];",i=(function(a){if(a===1)return"sourceLoc";if(a<=6)return ss.slice(0,a).map((function(s){return"sourceLoc."+s})).join(",");throw Error("Slicing for rank "+a+" is not yet supported")})(this.rank);e=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map((function(a,s){return"sourceLoc."+ss[s]+" = start["+s+"] + coords."+ss[s]+";"})).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n})(),ss=["x","y","z","w","u","v"],Eb=(function(){function n(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=qe(this.rank),r=Mt("coords",this.rank),o=Mt("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map((function(l,f){return"start["+f+"]"})).join()+");":t.map((function(l,f){return o[f]+" = "+r[f]+" + start["+f+"];"})).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n})(),Ib=function(n,t,e){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=qe(e.length),i=qe(e.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=e.map((function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"})).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+n+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},Rb=(function(){function n(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return n.prototype.acquireTexture=function(t,e,r){var o,i=Sl(e,r),a=kl(t,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===Vt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===Vt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===Vt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===Vt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===Vt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},n.prototype.releaseTexture=function(t,e,r,o){if(this.freeTextures!=null){var i=kl(e,Sl(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},n.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},n.prototype.getNumUsedTextures=function(){return this.numUsedTextures},n.prototype.getNumFreeTextures=function(){return this.numFreeTextures},n.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach((function(r){t.gpgpu.deleteMatrixTexture(r)}));for(var e in this.usedTextures)this.usedTextures[e].forEach((function(o){t.gpgpu.deleteMatrixTexture(o)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},n})();function Sl(n,t){if(n===Ht.UPLOAD)return Vt.PACKED_2X2_FLOAT32;if(n===Ht.RENDER||n==null)return(function(e){return H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Vt.PACKED_2X2_FLOAT32:Vt.UNPACKED_FLOAT32:e?Vt.PACKED_2X2_FLOAT16:Vt.UNPACKED_FLOAT16})(t);if(n===Ht.DOWNLOAD||n===Ht.PIXELS)return Vt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+n)}function kl(n,t,e){return n[0]+"_"+n[1]+"_"+t+"_"+e}var Sb=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[r]*t[r];this.outputShape=e,this.rank=e.length;var o=qe(this.rank),i=(function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()})(n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},kb=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];this.outputShape=e,this.rank=e.length;var o=qe(this.rank),i=(function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()})(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},Ab=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=qe(this.rank),i=Zh("rc",this.rank),a=new Array(this.rank);for(r=0;r<t.length;r++)a[t[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Du=1.7580993408473768,Tu=1.0507009873554805,Ee=function(n,t){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},ln="if (isnan(x)) return x;",Db="return x;",Al="return abs(x);",op=ln+`
  return (x < 0.0) ? 0.0 : x;
`,ip=ln+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,ap="return (x >= 0.0) ? x : (exp(x) - 1.0);",Tb=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Du+`;
  float scale = `+Tu+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Dl="return -x;",Tl="return ceil(x);",Nl="return floor(x);",Fl="return exp(x);",Pl="return exp(x) - 1.0;",Nb=ln+`
  return sin(x);
`,Fb=ln+`
  return cos(x);
`,Pb=ln+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Mb=ln+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Ob=ln+`
  return atan(x);
`,Bb=ln+"return log(x + sqrt(x * x + 1.0));",Lb=ln+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Wb=ln+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,gi="return x;",Ub="return x;",sp=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,up=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,cp=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,wo=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Vb=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=n;var t=n.length,e=Mt("rc",t),r=qe(t),o=(function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c})(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},mi={};function yi(n,t){if(t===void 0&&(t=!1),n==="linear")return t?Ub:Db;if(n==="relu")return t?sp:op;if(n==="elu")return t?cp:ap;if(n==="relu6")return t?up:ip;if(n==="prelu")return t?rp:np;throw new Error("Activation "+n+" has not been implemented for the WebGL backend.")}var zb=600,Hb=(function(n){function t(e){var r,o=n.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!H().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=kn(H().getNumber("WEBGL_VERSION"));o.binaryCache=((r=H().getNumber("WEBGL_VERSION"))in mi||(mi[r]={}),mi[r]),o.gpgpu=new eb(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Rb(o.gpgpu),o.numMBBeforeWarning=H().global.screen==null?1024:H().global.screen.height*H().global.screen.width*window.devicePixelRatio*zb/1024/1024,o.texData=new Gh(o,P),o}return cn(t,n),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,r,o){if(H().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:e,usage:Ht.UPLOAD}),i},t.prototype.move=function(e,r,o,i){if(H().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:r,usage:Ht.UPLOAD})},t.prototype.readSync=function(e){var r=this.texData.get(e),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new wo(u,gi):new Ee(u,gi);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var p,d,g=this.activeTimers!=null;return g&&(p=mn()),i==="complex64"?d=Gs(a.real.dataSync(),a.imag.dataSync()):d=this.getValuesFromTexture(e),g&&(this.downloadWaitMs+=mn()-p),this.convertAndCacheOnCPU(e,d)},t.prototype.read=function(e){return ae(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f,h,p,d,g,v,m,b,x,y,w,_,k,S;return se(this,(function(E){switch(E.label){case 0:if(this.pendingRead.has(e))return r=this.pendingRead.get(e),[2,new Promise((function(R){return r.push(R)}))];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new wo(a,gi):new Ee(a,gi),h=this.runWebGLProgram(f,[{dataId:e,shape:a,dtype:u}],u),p=this.read(h.dataId),this.disposeData(h.dataId),[2,p];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&H().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&H().get("WEBGL_BUFFER_SUPPORTED")&&(g=this.decode(e),v=this.texData.get(g.dataId),d=(S=this.gpgpu).createBufferFromTexture.apply(S,[v.texture].concat(To(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:E.sent(),E.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return b=E.sent(),x=b[0],y=b[1],m=Gs(x,y),[3,5];case 4:d==null?m=this.getValuesFromTexture(e):(w=ue(a),m=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),E.label=5;case 5:return g!=null&&this.disposeData(g.dataId),_=this.convertAndCacheOnCPU(e,m),k=this.pendingRead.get(e),this.pendingRead.delete(e),k.forEach((function(R){return R(_)})),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}}))}))},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var r=0;r<e.length;r++){var o=e[r];if(!Tm(o))throw H().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=ue(i);if(H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(To(i))).subarray(0,u);return this.disposeData(c.dataId),f}var h=H().getBool("WEBGL_PACK")&&s===!0,p=h?es(i):i,d=h?new D0(p):new A0(p),g=this.runWebGLProgram(d,[{shape:p,dtype:a,dataId:e}],"float32"),v=this.texData.get(g.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(g.dataId),m},t.prototype.time=function(e){return ae(this,void 0,void 0,(function(){var r,o,i,a,s,u,c;return se(this,(function(l){switch(l.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=co(this.activeTimers.map((function(f){return f.query}))).filter((function(f){return f!=null})),s=co(this.activeTimers.map((function(f){return f.name}))).filter((function(f){return f!=null})),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=fm(c),u.getExtraProfileInfo=function(){return c.map((function(f,h){return{name:s[h],ms:f}})).map((function(f){return f.name+": "+f.ms})).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}}))}))},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:mn(),endMs:null}},t.prototype.endTimer=function(e){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=mn(),e)},t.prototype.getQueryTime=function(e){return ae(this,void 0,void 0,(function(){var r;return se(this,(function(o){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(r=e).endMs-r.startMs]}))}))},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var r=this.texData.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var r=this.texData.get(e),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return H().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=P.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&e.every((function(i){return o.texData.get(i.dataId).texture==null&&i.size<r}))},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,r){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:P.keep(e.clone()),imag:P.keep(r.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,r,o);if(ue(o)===0)return gt([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=zh(e.shape,r,o);if(i||!a){var s=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Eb(o):new Cb(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,r,o)},t.prototype.shallowSlice=function(e,r,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=Hh(r,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,r,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,r,o,i);var a=Eu(r,o,i);if(a.some((function(u){return u===0})))return gt([],a);var s=new Ib(r,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,r){var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xb(e.shape,r):new bb(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,r){if(e[0].dtype==="complex64"){var o=e.map((function(p){return Jt(p)})),i=e.map((function(p){return bn(p)}));return dt(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,r);if(e.length===1)return e[0];if(e.length>H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),r),u=this.concat(e.slice(a),r);return this.concat([s,u],r)}if(H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new v0(e.map((function(p){return p.shape})),r);return this.compileAndRun(c,e)}var l=fo(e.map((function(p){return p.shape})),r),f=e.map((function(p){return p.as2D(-1,ue(p.shape.slice(r)))})),h=new d0(f.map((function(p){return p.shape})));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Dl,e.dtype);var r=new Ee(e.shape,Dl);return this.compileAndRun(r,[e])},t.prototype.batchMatMul=function(e,r,o,i){var a=o?e.shape[2]:e.shape[1],s=i?r.shape[1]:r.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?r.as3D(c,1,u):r;return this.multiply(l,h).sum(f,!0)}var p=vt(e.dtype,r.dtype),d=new os(e.shape,[c,a,s],o,i);return this.compileAndRun(d,[e,r],p)},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],h=r.shape[0],p=vt(r.dtype,o.dtype),d=s!=null,g=c!=null,v=u?yi(u,!0):null,m=new os(r.shape,[h,l,f],i,a,d,v,g),b=[r,o];return s&&b.push(s),c&&b.push(c),this.compileAndRun(m,b,p)},t.prototype.multiply=function(e,r){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(r.dataId),a=new yl(c0,e.shape,r.shape),s=new yl(l0,e.shape,r.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.multiply(e,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,bl,e.dtype);var h=new Je(bl,e.shape,r.shape);return this.compileAndRun(h,[e,r],e.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){var u=[e,r,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),H().getBool("WEBGL_PACK_NORMALIZATION")){var f=new u0(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(f,u)}var h=new s0(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){var s=H().getBool("WEBGL_PACK_NORMALIZATION")?new ob(e.shape,r,o,i,a):new nb(e.shape,r,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){var c=new rb(r.shape,i,a,s,u);return this.compileAndRun(c,[r,o,e])},t.prototype.tile=function(e,r){if(e.dtype==="string"){var o=this.readSync(e.dataId).map((function(a){return Ui(a)}));return Jh(xe(e.shape,e.dtype,o),r)}var i=new Sb(e.shape,r);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,r,o){var i=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fb(e.shape,r,o):new lb(e.shape,r,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,r);var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ab(e.shape,r):new kb(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,r,o){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.gather(e,r,o);var i=new O0(e.shape,r.size,o);return this.compileAndRun(i,[e,r])},t.prototype.batchToSpaceND=function(e,r,o){I(e.rank<=4,(function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"}));var i=r.reduce((function(f,h){return f*h})),a=qi(e.shape,r,i),s=Ki(a.length,r.length),u=$i(e.shape,r,i),c=Lh(o,r.length),l=Wh(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){I(e.rank<=4,(function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"}));var i=r.reduce((function(h,p){return h*p})),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=qi(u.shape,r,i,!1),l=Ki(c.length,r.length,!1),f=$i(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,r,o){var i=e.shape[0],a=e.shape[1],s=ts(a),u=new hb({windowSize:s,inSize:a,batchSize:i},r),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,r,o)},t.prototype.argReduce=function(e,r,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=ts(a),u=new Qy({windowSize:s,inSize:a,batchSize:i},r,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,r,l)},t.prototype.argReducePacked=function(e,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=ts(i[i.length-1]),s=new o0(i,a,r,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,r,c):c},t.prototype.sum=function(e,r){Ut("sum",r,e.rank);var o=yt(e.shape,r),i=o[0],a=ue(o[1]),s=e.as2D(-1,a),u=Ka(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,r);var o=yt(e.shape,r),i=o[0],a=ue(o[1]),s=e.as2D(-1,a),u=Ka(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,r,o){var i=0,a=An([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=Dn(1,e.rank)[0]);var u=(function(p,d,g){for(var v=[],m=p.length,b=0;b<m;b++)b!==d?v.push(p[b]):v.push(g);return v})(s.shape,i,o),c=ue([s.shape[i]]),l=s.as2D(-1,c),f=Ka(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(h=h.transpose(xu(a))),h},t.prototype.segOpCompute=function(e,r,o,i,a){var s=e.shape[0],u=e.shape[1],c=(function(h,p){var d,g=!1;for(h<=Vh?(d=h,g=!0):d=Ms(h,Math.floor(Math.sqrt(h)));!g;)d>p||d===h?g=!0:d=Ms(h,d+1);return d})(u,a),l=new wb({windowSize:c,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(l,[e,o],i);return f.shape[1]===a?f:(o=ji(0,a).tile([u/c]),this.segOpCompute(f,r,o,i,a))},t.prototype.argMinMaxReduce=function(e,r,o){var i=[r];if(Ut("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!H().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=yt(e.shape,i),s=a[0],u=ue(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,r){return this.argMinMaxReduce(e,r,"min")},t.prototype.argMax=function(e,r){return this.argMinMaxReduce(e,r,"max")},t.prototype.cumsum=function(e,r,o,i){if(r!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+r);var a=new E0(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Je("return float(a == b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.notEqual=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Je("return float(a != b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.less=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.less(e,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Je("return float(a < b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.lessEqual=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Je("return float(a <= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greater=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.greater(e,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Je("return float(a > b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greaterEqual=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Je("return float(a >= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalNot=function(e){var r=new Ee(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[e])},t.prototype.logicalAnd=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Je("return float(a >= 1.0 && b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalOr=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Je("return float(a >= 1.0 || b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.select=function(e,r,o){var i=new _b(e.rank,r.shape,r.rank);return this.compileAndRun(i,[e,r,o],vt(r.dtype,o.dtype))},t.prototype.where=function(e){Hi("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=e.dataSync();return ku(e.shape,r)},t.prototype.topk=function(e,r,o){return Qh(e.dataSync(),e.shape,e.dtype,r)},t.prototype.min=function(e,r){Ut("min",r,e.rank);var o=yt(e.shape,r),i=o[0],a=ue(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.minimum(e,r);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Je(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.mod=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Je(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.max=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,r);Ut("max",r,e.rank);var o=yt(e.shape,r),i=o[0],a=ue(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.maximum(e,r);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Je(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.all=function(e,r){Ut("all",r,e.rank);var o=yt(e.shape,r),i=o[0],a=ue(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,r){Ut("any",r,e.rank);var o=yt(e.shape,r),i=o[0],a=ue(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Je(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"float32")},t.prototype.floorDiv=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Je(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"int32")},t.prototype.add=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,ns);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.add(e,r);var o=vt(e.dtype,r.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,ns,o);var i=new Je(ns,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.packedUnaryOp=function(e,r,o){var i=new wo(e.shape,r);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,r,o,i,a){a===void 0&&(a=!1);var s=new Mn(o,e.shape,r.shape,a);return this.compileAndRun(s,[e,r],i)},t.prototype.complexSeparableBinaryOp=function(e,r,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map((function(h){var p=h[0],d=h[1],g=i.makeComplexComponentTensorInfo(e,p),v=i.makeComplexComponentTensorInfo(r,d),m=new Je(o,e.shape,r.shape);return i.compileAndRun(m,[g,v],vt(p.dtype,d.dtype))})),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,r){return{dataId:r.dataId,dtype:r.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>H().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(e.length/2),o=this.addN(e.slice(0,r)),i=this.addN(e.slice(r));return this.addN([o,i])}var a=e.map((function(c){return c.dtype})).reduce((function(c,l){return vt(c,l)})),s=e.map((function(c){return c.shape})),u=H().getBool("WEBGL_PACK")?new Jy(e[0].shape,s):new Yy(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,rs);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.subtract(e,r);var o=vt(e.dtype,r.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,rs,e.dtype);var i=new Je(rs,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.pow=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Je(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,r.shape),i=vt(e.dtype,r.dtype);return this.compileAndRun(o,[e,r],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Tl,e.dtype);var r=new Ee(e.shape,Tl);return this.compileAndRun(r,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Nl,e.dtype);var r=new Ee(e.shape,Nl);return this.compileAndRun(r,[e])},t.prototype.sign=function(e){var r=new Ee(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[e])},t.prototype.isNaN=function(e){var r=new Ee(e.shape,"return float(isnan(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isInf=function(e){var r=new Ee(e.shape,"return float(isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isFinite=function(e){var r=new Ee(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.round=function(e){var r=new Ee(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Fl,e.dtype);var r=new Ee(e.shape,Fl);return this.compileAndRun(r,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Pl,e.dtype);var r=new Ee(e.shape,Pl);return this.compileAndRun(r,[e])},t.prototype.softmax=function(e,r){var o=ut([r],e.shape),i=this.max(e,o),a=Lt(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var r=new Ee(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[e])},t.prototype.log1p=function(e){var r=new Ee(e.shape,"return log(1.0 + x);");return this.compileAndRun(r,[e])},t.prototype.sqrt=function(e){var r=new Ee(e.shape,"return sqrt(x);");return this.compileAndRun(r,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var r=new Ee(e.shape,"return inversesqrt(x);");return this.compileAndRun(r,[e])},t.prototype.reciprocal=function(e){var r=new Ee(e.shape,"return 1.0 / x;");return this.compileAndRun(r,[e])},t.prototype.relu=function(e){var r;return r=H().getBool("WEBGL_PACK")?new wo(e.shape,sp):new Ee(e.shape,op),this.compileAndRun(r,[e])},t.prototype.relu6=function(e){var r;return r=H().getBool("WEBGL_PACK")?new wo(e.shape,up):new Ee(e.shape,ip),this.compileAndRun(r,[e])},t.prototype.prelu=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(rp,e.shape,r.shape):new Je(np,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.elu=function(e){if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cp,e.dtype);var r=new Ee(e.shape,ap);return this.compileAndRun(r,[e])},t.prototype.eluDer=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,r.shape):new Je("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.selu=function(e){var r=new Ee(e.shape,Tb);return this.compileAndRun(r,[e])},t.prototype.int=function(e){var r=new Ee(e.shape,"return float(int(x));");return this.compileAndRun(r,[e],"int32")},t.prototype.clip=function(e,r,o){var i,a=(i=H().getBool("WEBGL_PACK_CLIP")?new h0(e.shape):new f0(e.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Al,e.dtype);var r=new Ee(e.shape,Al);return this.compileAndRun(r,[e])},t.prototype.complexAbs=function(e){var r=this.texData.get(e.dataId),o=new p0(e.shape),i=[this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var r=new Ee(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[e])},t.prototype.softplus=function(e){var r=new Ee(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[e])},t.prototype.sin=function(e){var r=new Ee(e.shape,Nb);return this.compileAndRun(r,[e])},t.prototype.cos=function(e){var r=new Ee(e.shape,Fb);return this.compileAndRun(r,[e])},t.prototype.tan=function(e){var r=new Ee(e.shape,"return tan(x);");return this.compileAndRun(r,[e])},t.prototype.asin=function(e){var r=new Ee(e.shape,Pb);return this.compileAndRun(r,[e])},t.prototype.acos=function(e){var r=new Ee(e.shape,Mb);return this.compileAndRun(r,[e])},t.prototype.atan=function(e){var r=new Ee(e.shape,Ob);return this.compileAndRun(r,[e])},t.prototype.atan2=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Je(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.sinh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.cosh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.tanh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[e])},t.prototype.asinh=function(e){var r=new Ee(e.shape,Bb);return this.compileAndRun(r,[e])},t.prototype.acosh=function(e){var r=new Ee(e.shape,Lb);return this.compileAndRun(r,[e])},t.prototype.atanh=function(e){var r=new Ee(e.shape,Wb);return this.compileAndRun(r,[e])},t.prototype.erf=function(e){var r=new Ee(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[e])},t.prototype.step=function(e,r){var o=new Ee(e.shape,(function(i){return i===void 0&&(i=0),ln+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `})(r));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,r,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,p=o.dataFormat==="channelsLast",d=(f===1||h===1)&&l>1e3,g=u[2]%2!=0&&!!c.isPacked;if(d||!H().getBool("WEBGL_LAZILY_UNPACK")||!H().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!g){var v=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(e,[1,v,o.inChannels]),b=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var x=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,x,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,I(di(c.shape,y.shape),(function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"}));var _=this.reshape(r,[1,o.inChannels,o.outChannels]),k=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),S=this.texData.get(k.dataId);return I(S.isPacked,(function(){return"batchMatMul result is expected to be packed"})),c.shape=w,S.shape=o.outShape,P.makeTensorFromDataId(k.dataId,o.outShape,k.dtype)},t.prototype.conv2dWithIm2Row=function(e,r,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,p=o.dataFormat==="channelsLast",d=u*c*l,g=h*f,v=[d,g],m=e.squeeze([0]),b=r.reshape([1,d,-1]),x=new tb(v,m.shape,o),y=this.compileAndRun(x,[m]).reshape([1,v[0],v[1]]),w=i!=null,_=s!=null,k=a?yi(a,!0):null,S=new os(y.shape,[1,g,o.outChannels],!0,!1,w,k,_),E=[y,b];i&&E.push(i),_&&E.push(s);var R=this.compileAndRun(S,E);return p?R.reshape([1,h,f,o.outChannels]):R.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(H().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var c=a!=null,l=u!=null,f=s?yi(s,!1):null,h=new xl(i,c,f,l),p=[r,o];return a&&p.push(a),u&&p.push(u),this.compileAndRun(h,p)},t.prototype.conv2d=function(e,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,r,o);if(H().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,r,o);var i=new xl(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerInput=function(e,r,o){var i=new m0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerFilter=function(e,r,o){var i=new g0(o);return this.compileAndRun(i,[e,r])},t.prototype.fusedDepthwiseConv2D=function(e){var r,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=H().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?yi(u,l):null,h=[o,i],p=s!=null,d=c!=null;return p&&h.push(s),d&&h.push(c),l?(r=new _l(a,p,f,d),this.compileAndRun(r,h)):(r=new wl(a,p,f,d),this.compileAndRun(r,h))},t.prototype.depthwiseConv2D=function(e,r,o){var i;return H().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new _l(o),this.compileAndRun(i,[e,r])):(i=new wl(o),this.compileAndRun(i,[e,r]))},t.prototype.depthwiseConv2DDerInput=function(e,r,o){var i=new w0(o);return this.compileAndRun(i,[e,r])},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){var i=new x0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3d=function(e,r,o){var i=new _0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerInput=function(e,r,o){var i=new b0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerFilter=function(e,r,o){var i=new y0(o);return this.compileAndRun(i,[e,r])},t.prototype.maxPool=function(e,r){var o=new is(r,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,r){var o=new is(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,r,o,i){var a=new is(i,"max",!0),s=this.compileAndRun(a,[r]),u=new ib(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,r,o){var i=new i0(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.cast=function(e,r){return Kh(e,r,this)},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,r){var o=new as(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,r,o){var i=new a0(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.maxPool3d=function(e,r){var o=new as(r,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,r,o,i){var a=new as(i,"max",!0),s=this.compileAndRun(a,[r]),u=new ab(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.reshape=function(e,r){var o=this.texData.get(e.dataId);if(o.isPacked&&!di(e.shape,r)&&(o.texture===null||!di(o.shape,r))){var i=this.packedReshape(e,r);return P.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return Hs(e,r)},t.prototype.resizeBilinear=function(e,r,o,i){var a=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new gb(e.shape,r,o,i):new vb(e.shape,r,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,r,o){var i=new db(e,r,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,r,o,i){var a=new yb(e.shape,r,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){var i=new mb(e,r,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,r,o,i){var a=r?e:qn(e),s=a.shape[0],u=a.shape[1],c=new sb(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,r,o,i){var a=new ub(e.size,r,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var r=new k0(e.size);return this.compileAndRun(r,[e])},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return Hi("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ru(e.dataSync(),r.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,r,o,i,a,s){var u=new C0(e.shape,r.shape,i,a,s);return this.compileAndRun(u,[e,r,o],"float32")},t.prototype.depthToSpace=function(e,r,o){I(r>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+r}));var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*r,l=s*r,f=u/(r*r),h=new S0(o==="NHWC"?[i,c,l,f]:[i,f,c,l],r,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,r,o){return Yh(e,r,o)},t.prototype.scatterND=function(e,r,o){var i=Xi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=[l/u,u],h=e.reshape([s,a]),p=r.reshape([s,u]);if(l===0)return Hs(gt([]),o);var d=re(0),g=new Rl(s,a,h.rank,p.rank,c,f);return this.compileAndRun(g,[p,h,d]).reshape(o)},t.prototype.sparseToDense=function(e,r,o,i){var a=Xi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,f=new Rl(u,s,e.rank,r.rank,c,[l,1]);return this.compileAndRun(f,[r,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,r){var o=this.texData.get(e.dataId),i=new El(F0,e.shape,r),a=new El(P0,e.shape,r),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=Uh(e,r),s=a[0],u=a[1],c=a[2],l=a[3],f=r.reshape([u,i]),h=e.reshape([e.size/c,c]),p=new B0(i,l,[u,c]);return this.compileAndRun(p,[h,f]).reshape(s)},t.prototype.fill=function(e,r,o){if((o=o||Jo(r))==="string"){var i=Wi(o,ue(e));return i.fill(r),P.makeTensor(i,e,o,this)}var a=new M0(e,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,r,o){return $h(e,r,o)},t.prototype.makeTensorInfo=function(e,r){var o=this.write(null,e,r);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:r}},t.prototype.makeOutput=function(e,r){var o=this.makeTensorInfo(e,r).dataId;return P.makeTensorFromDataId(o,e,r,this)},t.prototype.unpackTensor=function(e){var r=new Vb(e.shape);return this.runWebGLProgram(r,[e],e.dtype)},t.prototype.packTensor=function(e){var r=new cb(e.shape);return this.runWebGLProgram(r,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,r){var o=[Vi(e.shape)].concat(zi(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[Vi(r)].concat(zi(r)),s=new pb(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(e){var r,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=es(a);return r=i?new R0(u):new I0(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===zo.DENSE){var l=To(e.outputShape);c.texShape=l.map((function(x){return 2*x}))}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),ue(u.shape)===0)return c.values=Uo(u.dtype,0),u;var f=[],h=r.map((function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(x.dataId);if(y.texture==null){if(!e.packedInputs&&ue(x.shape)<=H().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=x.shape)}else if(!!y.isPacked!=!!e.packedInputs)x=y.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),y=s.texData.get(x.dataId);else if(y.isPacked&&!di(y.shape,x.shape)){var w=x,_=x.shape;x.shape=y.shape,x=s.packedReshape(x,_),f.push(x),y=s.texData.get(x.dataId),w.shape=_}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:y,isUniform:!1}}));this.uploadToGPU(u.dataId);var p,d={shape:u.shape,texData:c,isUniform:!1},g=(function(x,y,w){var _="";y.concat(w).forEach((function(E){var R=E.texData!=null&&E.texData.slice!=null&&E.texData.slice.flatOffset>0,F=E.isUniform?"uniform":E.texData.texShape;_+=E.shape+"_"+F+"_"+R}));var k=x.userCode,S=x.constructor.name;return S+="_"+_+"_"+k})(e,h,d),v=this.getAndSaveBinary(g,(function(){return(function(x,y,w,_){var k=y.userCode,S=w.map((function(B,K){var J={logicalShape:B.shape,texShape:B.isUniform?null:B.texData.texShape,isUniform:B.isUniform,isPacked:!B.isUniform&&B.texData.isPacked,flatOffset:null};return B.texData!=null&&B.texData.slice!=null&&B.texData.slice.flatOffset>0&&(J.flatOffset=B.texData.slice.flatOffset),{name:y.variableNames[K],shapeInfo:J}})),E=S.map((function(B){return B.shapeInfo})),R={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},F=Zy(S,R,k,y.packedInputs),N=x.createProgram(F),V=null,U=x.getUniformLocation(N,"NAN",!1);H().getNumber("WEBGL_VERSION")===1&&(V=x.getUniformLocation(N,"INFINITY",!1));for(var z={},G=0;G<y.variableNames.length;G++){var W=y.variableNames[G];z[W]=x.getUniformLocation(N,W,!1),z["offset"+W]=x.getUniformLocation(N,"offset"+W,!1)}return{program:y,source:F,webGLProgram:N,uniformLocations:z,inShapeInfos:E,outShapeInfo:R,infLoc:V,nanLoc:U}})(s.gpgpu,e,h,d)})),m=this.activeTimers!=null;if(m&&(p=this.startTimer()),(function(x,y,w,_,k){Il(y.inShapeInfos,w),Il([y.outShapeInfo],[_]);var S=_.texData.texture,E=_.texData.texShape;_.texData.isPacked?x.setOutputPackedMatrixTexture(S,E[0],E[1]):x.setOutputMatrixTexture(S,E[0],E[1]),x.setProgram(y.webGLProgram),H().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&x.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&x.gl.uniform1f(y.nanLoc,NaN),w.forEach((function(R,F){var N=y.program.variableNames[F],V=y.uniformLocations[N],U=y.uniformLocations["offset"+N];if(V!=null)if(R.isUniform)if(ue(R.shape)<2)x.gl.uniform1f(V,R.uniformValues[0]);else{var z=R.uniformValues;z instanceof Float32Array||(z=new Float32Array(z)),x.gl.uniform1fv(V,z)}else R.texData.slice!=null&&U!=null&&x.gl.uniform1i(U,R.texData.slice.flatOffset),x.setInputMatrixTexture(R.texData.texture,V,F)})),k!=null&&k(x,y.webGLProgram),x.executeProgram()})(this.gpgpu,v,h,d,i),f.forEach((function(x){return s.disposeData(x.dataId)})),m&&(p=this.endTimer(p),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(p)})),!H().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var b=this.unpackTensor(u);return this.disposeData(u.dataId),b}return u},t.prototype.compileAndRun=function(e,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(e,r,o,i,a);return P.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,r){return e in this.binaryCache||(this.binaryCache[e]=r()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(H().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach((function(r){e.gpgpu.deleteProgram(e.binaryCache[r].webGLProgram),delete e.binaryCache[r]})),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=ie((function(){if(!H().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=H().getBool("DEBUG");H().set("DEBUG",!1);var o=e.abs(re(1e-8)).dataSync()[0];if(H().set("DEBUG",r),o>0)return 32}return 16}))),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=mn());var p=o.texShape;if(p==null&&(p=Xm(i,l),o.texShape=p),s!=null){var d=es(i),g=void 0,v=p[1],m=p[0],b=s instanceof Uint8Array;l?(v=(r=Zo(p[0],p[1]))[0],m=r[1],g=new N0(d,[m,v],b)):g=new T0(d,[m,v],b);var x=this.makeTensorInfo([m,v],a);this.texData.get(x.dataId).usage=b?Ht.PIXELS:Ht.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),v,m,s);var y=this.runWebGLProgram(g,[x],a,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=mn()-f)}else{var _=this.acquireTexture(p,c,a,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,r){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),r!=null&&(o.values=(function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)})(r,i)),o.values},t.prototype.acquireTexture=function(e,r,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,r,i)},t.prototype.computeBytes=function(e,r){return e[0]*e[1]*_h(r)},t})(jh);Ah()&&P.registerBackend("webgl",(function(){return new Hb}),2);var Gb=T({square_:function(n){var t=C(n,"x","square"),e=[t];return P.runKernelFunc((function(r,o){return o([t]),r.square(t)}),{x:t},null,"Square",{},e,[])}}),Go="SquaredDifference",lp=T({squaredDifference_:function(n,t){var e,r=C(n,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return P.runKernelFunc((function(s,u){var c=s.squaredDifference(r,o);return u([r,o]),c}),i,(function(s,u){var c=u[0],l=u[1],f=re(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}}),Go,{},a,[])}}),jb=T({abs_:function(n){var t=C(n,"x","abs");return t.dtype==="complex64"?P.runKernelFunc((function(e){return e.complexAbs(t)}),{$x:t}):P.runKernelFunc((function(e,r){var o=e.abs(t);return r([t]),o}),{x:t},(function(e,r){var o=r[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}}),"Abs")}}),qb=T({acos_:function(n){var t=C(n,"x","acos");return P.runKernelFunc((function(e,r){var o=e.acos(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt()).neg()}}}))}}),Kb=T({acosh_:function(n){var t=C(n,"x","acosh");return P.runKernelFunc((function(e,r){var o=e.acosh(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}}))}}),$b=T({asin_:function(n){var t=C(n,"x","asin");return P.runKernelFunc((function(e,r){var o=e.asin(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt())}}}))}}),Xb=T({asinh_:function(n){var t=C(n,"x","asinh");return P.runKernelFunc((function(e,r){var o=e.asinh(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).add(o.toFloat().square()).sqrt())}}}))}}),Yb=T({atan_:function(n){var t=C(n,"x","atan");return P.runKernelFunc((function(e,r){var o=e.atan(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}}))}}),Jb=T({atanh_:function(n){var t=C(n,"x","atanh");return P.runKernelFunc((function(e,r){var o=e.atanh(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.div(re(1).sub(o.toFloat().square()))}}}))}}),Qb=T({ceil_:function(n){var t=C(n,"x","ceil");return P.runKernelFunc((function(e){return e.ceil(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),Nu=T({clipByValue_:function(n,t,e){var r=C(n,"x","clipByValue");I(t<=e,(function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."}));var o=[r],i={min:t,max:e};return P.runKernelFunc((function(a,s){var u=a.clip(r,t,e);return s([r]),u}),{x:r},(function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),Pe(a))}}}),"ClipByValue",i,o)}}),Zb=T({cos_:function(n){var t=C(n,"x","cos"),e=[t];return P.runKernelFunc((function(r,o){var i=r.cos(t);return o([t]),i}),{x:t},(function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}}),"Cos",{},e)}}),ex=T({cosh_:function(n){var t=C(n,"x","cosh");return P.runKernelFunc((function(e,r){var o=e.cosh(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}}))}}),tx=T({erf_:function(n){var t=C(n,"x","erf");return I(t.dtype==="int32"||t.dtype==="float32",(function(){return"Input dtype must be `int32` or `float32`."})),t.dtype==="int32"&&(t=t.toFloat()),P.runKernelFunc((function(e,r){var o=e.erf(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}}))}}),js=T({exp_:function(n){var t=C(n,"x","exp");return P.runKernelFunc((function(e,r){var o=e.exp(t);return r([o]),o}),{x:t},(function(e,r){return{x:function(){return e.mulStrict(r[0])}}}),"Exp",{},[],[!0])}}),nx=T({expm1_:function(n){var t=C(n,"x","expm1");return P.runKernelFunc((function(e,r){var o=e.expm1(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.mul(o.exp())}}}))}}),rx=T({floor_:function(n){var t=C(n,"x","floor");return P.runKernelFunc((function(e){return e.floor(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),ox=T({log_:function(n){var t=C(n,"x","log"),e=[t];return P.runKernelFunc((function(r,o){var i=r.log(t);return o([t]),i}),{x:t},(function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}}),"Log",{},e)}}),ix=T({log1p_:function(n){var t=C(n,"x","log1p");return P.runKernelFunc((function(e,r){var o=e.log1p(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.div(o.add(1))}}}))}}),ax=T({logSigmoid_:function(n){var t=C(n,"x","logSigmoid");return P.runKernelFunc((function(e,r){var o=e.softplus(t.neg()).neg();return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}}))}}),Zi=T({neg_:function(n){var t=C(n,"x","neg"),e=[t];return P.runKernelFunc((function(r){return r.neg(t)}),{x:t},(function(r){return{x:function(){return r.neg()}}}),"Neg",{},e)}}),sx=T({reciprocal_:function(n){var t=C(n,"x","reciprocal");return P.runKernelFunc((function(e,r){var o=e.reciprocal(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.div(o.square().neg())}}}))}}),ux=T({round_:function(n){var t=C(n,"x","round");return P.runKernelFunc((function(e){return e.round(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),fp=T({rsqrt_:function(n){var t=C(n,"x","rsqrt"),e=[t];return P.runKernelFunc((function(r,o){var i=r.rsqrt(t);return o([t]),i}),{x:t},(function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}}),"Rsqrt",{},e)}}),hp=T({sigmoid_:function(n){var t=C(n,"x","sigmoid");return P.runKernelFunc((function(e,r){var o=e.sigmoid(t);return r([o]),o}),{x:t},(function(e,r){var o=r[0];return{x:function(){return e.mul(o.mul(re(1).sub(o)))}}}),"Sigmoid")}}),cx=T({sign_:function(n){var t=C(n,"x","sign");return P.runKernelFunc((function(e){return e.sign(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),lx=T({isNaN_:function(n){var t=C(n,"x","isNaN");return P.runKernelFunc((function(e){return e.isNaN(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),fx=T({isInf_:function(n){var t=C(n,"x","isInf");return P.runKernelFunc((function(e){return e.isInf(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),hx=T({isFinite_:function(n){var t=C(n,"x","isFinite");return P.runKernelFunc((function(e){return e.isFinite(t)}),{$x:t},(function(e){return{$x:function(){return Pe(e)}}}))}}),px=T({sin_:function(n){var t=C(n,"x","sin"),e=[t];return P.runKernelFunc((function(r,o){var i=r.sin(t);return o([t]),i}),{x:t},(function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}}),"Sin",{},e)}}),dx=T({sinh_:function(n){var t=C(n,"x","sinh");return P.runKernelFunc((function(e,r){var o=e.sinh(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}}))}}),vx=T({softplus_:function(n){var t=C(n,"x","softplus");return P.runKernelFunc((function(e,r){var o=e.softplus(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.mul(o.sigmoid())}}}))}}),gx=T({sqrt_:function(n){var t=C(n,"x","sqrt");return P.runKernelFunc((function(e,r){var o=e.sqrt(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}}))}}),mx=T({step_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","step");return P.runKernelFunc((function(r){return r.step(e,t)}),{$x:e},(function(r){return{$x:function(){return Pe(r)}}}))}}),yx=T({tan_:function(n){var t=C(n,"x","tan");return P.runKernelFunc((function(e,r){var o=e.tan(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return e.div(o.cos().square())}}}))}}),bx=T({tanh_:function(n){var t=C(n,"x","tanh");return P.runKernelFunc((function(e,r){var o=e.tanh(t);return r([o]),o}),{x:t},(function(e,r){var o=r[0];return{x:function(){return re(1).sub(o.square()).mulStrict(e)}}}),"Tanh",{},null,[!0])}});function pp(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(u.rank===2,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),I(c.rank===2||c.rank===1,(function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."})),I(l.rank===2||l.rank===1,(function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."})),a!=null&&I(a.rank===2||a.rank===1,(function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."})),s!=null&&I(s.rank===2||s.rank===1,(function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."})),ti(u,c,l,s,a,i)}function dp(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(u.rank===3,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),I(c.rank===3||c.rank===1,(function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."})),I(l.rank===3||l.rank===1,(function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."})),a!=null&&I(a.rank===3||a.rank===1,(function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."})),s!=null&&I(s.rank===3||s.rank===1,(function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."})),ti(u,c,l,s,a,i)}function vp(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(u.rank===4,(function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."})),I(c.rank===4||c.rank===1,(function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."})),I(l.rank===4||l.rank===1,(function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."})),a!=null&&I(a.rank===4||a.rank===1,(function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."})),s!=null&&I(s.rank===4||s.rank===1,(function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."})),ti(u,c,l,s,a,i)}function ti(n,t,e,r,o,i){i==null&&(i=.001);var a,s,u,c=C(n,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),I(l.rank===f.rank,(function(){return"Batch normalization gradient requires mean and variance to have equal ranks."})),I(s==null||l.rank===s.rank,(function(){return"Batch normalization gradient requires mean and offset to have equal ranks."})),I(a==null||l.rank===a.rank,(function(){return"Batch normalization gradient requires mean and scale to have equal ranks."})),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,a];return P.runKernelFunc((function(p,d){var g=p.batchNormalization(u,bi(l),bi(f),i,bi(a),bi(s));return d([c,l,f,a]),g}),{x:c,mean:l,variance:f,scale:a,offset:s},(function(p,d){var g=d,v=g[0],m=g[1],b=g[2],x=g[3],y=x??re(1),w=at(m.shape,u.shape),_=[];if(m.rank===1){for(var k=0;k<u.shape.length-1;++k)_.push(u.shape[k]);_.push(1)}var S=v.sub(m),E=p.mul(y),R=fp(b.add(re(i))),F=R.mul(R).mul(R).mul(re(-.5));return{x:function(){return m.rank===1?p.mul(eo(R.as4D(1,1,1,m.shape[0]),_)).mul(y).reshape(v.shape):p.mul(R).mul(y).reshape(v.shape)},mean:function(){var N=R.mul(re(-1)).mul(E);return m.rank===1&&(N=N.sum(w)),N.reshape(m.shape)},variance:function(){var N=F.mul(S).mul(E);return m.rank===1&&(N=N.sum(w)),N.reshape(m.shape)},scale:function(){var N=S.mul(R),V=p.mul(N);return m.rank===1&&(V=V.sum(w)),V.reshape(m.shape)},offset:function(){var N=p;return m.rank===1&&(N=N.sum(w)),N.reshape(m.shape)}}}),"BatchNormalization",{varianceEpsilon:i},h).reshape(c.shape)}function bi(n){return n==null?null:n.rank===0?n.as1D():n.rank===1?n:n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}function Ca(){Dh("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var xx=T({batchNormalization2d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Ca(),pp(n,t,e,i,o,r)}}),wx=T({batchNormalization3d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Ca(),dp(n,t,e,i,o,r)}}),_x=T({batchNormalization4d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Ca(),vp(n,t,e,i,o,r)}}),Cx=T({batchNormalization_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),Ca(),ti(n,t,e,i,o,r)}}),gp=T({batchNorm_:ti}),Ex=T({batchNorm2d_:pp}),Ix=T({batchNorm3d_:dp}),Rx=T({batchNorm4d_:vp}),Ea=T({logicalAnd_:function(n,t){var e=C(n,"a","logicalAnd","bool"),r=C(t,"b","logicalAnd","bool");return Ne(e.shape,r.shape),P.runKernelFunc((function(o){return o.logicalAnd(e,r)}),{a:e,b:r},null,"LogicalAnd")}}),Sx=T({logicalNot_:function(n){var t=C(n,"x","logicalNot","bool");return P.runKernelFunc((function(e){return e.logicalNot(t)}),{$x:t})}}),mp=T({logicalOr_:function(n,t){var e=C(n,"a","logicalOr","bool"),r=C(t,"b","logicalOr","bool");return Ne(e.shape,r.shape),P.runKernelFunc((function(o){return o.logicalOr(e,r)}),{$a:e,$b:r})}}),kx=T({logicalXor_:function(n,t){var e=C(n,"a","logicalXor","bool"),r=C(t,"b","logicalXor","bool");return Ne(e.shape,r.shape),mp(n,t).logicalAnd(Ea(n,t).logicalNot())}}),Dr=T({where_:function(n,t,e){var r=C(t,"a","where"),o=C(e,"b","where"),i=C(n,"condition","where","bool");return We(r.shape,o.shape,"Error in where: "),i.rank===1?I(i.shape[0]===r.shape[0],(function(){return"The first dimension of `a` must match the size of `condition`."})):We(i.shape,o.shape,"Error in where: "),P.runKernelFunc((function(a,s){var u=a.select(i,r,o);return s([i]),u}),{$condition:i,$a:r,$b:o},(function(a,s){var u=s[0];return{$condition:function(){return Pe(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}}))}}),yp=function(n){return ae(this,void 0,void 0,(function(){var t,e,r;return se(this,(function(o){switch(o.label){case 0:return[4,(t=C(n,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),r=ku(t.shape,e),n!==t&&t.dispose(),[2,r]}}))}))},De=T({add_:function(n,t){var e,r=C(n,"a","add"),o=C(t,"b","add");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a){return a.add(r,o)}),{a:r,b:o},(function(a){return{a:function(){var s=a,u=at(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=at(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}}),"Add")}}),Ax=T({addN_:function(n){I(Array.isArray(n),(function(){return"The argument passed to tf.addN() must be a list of tensors"})),I(n.length>=1,(function(){return"Must pass at least one tensor to tf.addN(), but got "+n.length}));var t=n.map((function(o,i){return C(o,"tensors"+i,"addN")})),e=t[0];t.forEach((function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((function(o){if(!ft(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));var r=t;return P.runKernelFunc((function(o){return o.addN(t)}),r,(function(o){var i={};return t.forEach((function(a,s){i[s]=function(){return o.clone()}})),i}),"AddN")}}),Dx=T({addStrict_:function(n,t){var e=C(n,"a","addStrict"),r=C(t,"b","addStrict");return We(e.shape,r.shape,"Error in addStrict: "),e.add(r)}}),Tx=T({atan2_:function(n,t){var e,r=C(n,"a","atan2"),o=C(t,"b","atan2");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.atan2(r,o);return s([r,o]),u}),{$a:r,$b:o},(function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=De(u.square(),c.square()),f=a.mul(c.div(l)),h=at(u.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=De(u.square(),c.square()),f=Zi(a.mul(u.div(l))),h=at(c.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}}))}}),nn=T({div_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");if(e=Ye(r,o),r=e[0],o=e[1],r.dtype==="int32"&&o.dtype==="int32")return bp(r,o);var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.realDivide(r,o);return s([r,o]),u}),{a:r,b:o},(function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=at(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=at(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}}),"Div")}}),Nx=T({divNoNan_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");r=(e=Ye(r,o))[0],o=e[1];var i=nn(r,o),a=Pe(i),s=o.equal(a);return Dr(s,a,i)}}),Fx=T({divStrict_:function(n,t){var e=C(n,"a","div"),r=C(t,"b","div");return We(e.shape,r.shape,"Error in divideStrict: "),e.div(r)}}),bp=T({floorDiv_:function(n,t){var e,r=C(n,"a","floorDiv"),o=C(t,"b","floorDiv");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u}),{a:r,b:o},(function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=at(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=at(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}}),"FloorDiv")}}),Fu=T({maximum_:function(n,t){var e,r=C(n,"a","maximum"),o=C(t,"b","maximum");return e=Ye(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Ne(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.maximum(r,o);return a([r,o]),s}),{a:r,b:o},(function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}}),"Maximum")}}),Px=T({maximumStrict_:function(n,t){var e=C(n,"a","maximumStrict"),r=C(t,"b","maximumStrict");return We(e.shape,r.shape,"Error in maximumStrict: "),e.maximum(r)}}),xp=T({minimum_:function(n,t){var e,r=C(n,"a","minimum"),o=C(t,"b","minimum");return e=Ye(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Ne(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.minimum(r,o);return a([r,o]),s}),{a:r,b:o},(function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}}),"Minimum")}}),Mx=T({minimumStrict_:function(n,t){var e=C(n,"a","minimumStrict"),r=C(t,"b","minimumStrict");return We(e.shape,r.shape,"Error in minimumStrict: "),e.minimum(r)}}),Ox=T({mod_:function(n,t){var e,r=C(n,"a","mod"),o=C(t,"b","mod");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.mod(r,o);return s([r,o]),u}),{$a:r,$b:o},(function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=at(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),f=at(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}}))}}),Bx=T({modStrict_:function(n,t){var e=C(n,"a","modStrict"),r=C(t,"b","modStrict");return We(e.shape,r.shape,"Error in modStrict: "),e.mod(r)}}),Ct=T({mul_:function(n,t){var e,r=C(n,"a","mul"),o=C(t,"b","mul");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a,s){var u=a.multiply(r,o);return s([r,o]),u}),{a:r,b:o},(function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),f=at(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=at(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}}),"Mul")}}),Lx=T({mulStrict_:function(n,t){var e=C(n,"a","mul"),r=C(t,"b","mul");return We(e.shape,r.shape,"Error in multiplyStrict: "),e.mul(r)}}),ea=T({pow_:function(n,t){var e,r=C(n,"base","pow"),o=C(t,"exp","pow");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape),a=[r,o];return P.runKernelFunc((function(s,u){var c=s.pow(r,o);return u([r,o,c]),c}),{a:r,b:o},(function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),p=s.mul(h.mul(c.pow(h.sub(re(1))))),d=at(c.shape,i);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)},b:function(){var h=c.greater(0),p=c.log().where(h,Pe(c)),d=s.mul(f.mul(p)),g=at(l.shape,i);return g.length>0&&(d=d.sum(g)),d.reshape(l.shape)}}}),"Pow",{},a,[!0])}}),Wx=T({powStrict_:function(n,t){return We(n.shape,t.shape,"Error in powStrict: "),n.pow(t)}}),Ux=T({squaredDifferenceStrict_:function(n,t){var e=C(n,"a","squaredDifferenceStrict"),r=C(t,"b","squaredDifferenceStrict");return We(e.shape,r.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(r)}}),st=T({sub_:function(n,t){var e,r=C(n,"a","sub"),o=C(t,"b","sub");e=Ye(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return P.runKernelFunc((function(a){return a.subtract(r,o)}),{a:r,b:o},(function(a){return{a:function(){var s=a,u=at(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=at(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}}),"Sub")}}),Vx=T({subStrict_:function(n,t){var e=C(n,"a","subStrict"),r=C(t,"b","subStrict");return We(e.shape,r.shape,"Error in subStrict: "),e.sub(r)}}),wp=T({equal_:function(n,t){var e,r=C(n,"a","equal"),o=C(t,"b","equal");return e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),P.runKernelFunc((function(i){return i.equal(r,o)}),{$a:r,$b:o})}}),zx=T({equalStrict_:function(n,t){var e=C(n,"a","equalStrict"),r=C(t,"b","equalStrict");return We(e.shape,r.shape,"Error in equalStrict: "),e.equal(r)}}),Hx=T({greater_:function(n,t){var e,r=C(n,"a","greater"),o=C(t,"b","greater");return e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),P.runKernelFunc((function(i){return i.greater(r,o)}),{a:r,b:o},null,"Greater")}}),_p=T({greaterEqual_:function(n,t){var e,r=C(n,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s}),{a:r,b:o},(function(i,a){var s=a[0],u=a[1];return{a:function(){return Pe(s)},b:function(){return Pe(u)}}}),"GreaterEqual")}}),Gx=T({greaterEqualStrict_:function(n,t){var e=C(n,"a","greaterEqualStrict"),r=C(t,"b","greaterEqualStrict");return We(e.shape,r.shape,"Error in greaterEqualStrict: "),e.greaterEqual(r)}}),jx=T({greaterStrict_:function(n,t){var e=C(n,"a","greaterStrict"),r=C(t,"b","greaterStrict");return We(e.shape,r.shape,"Error in greaterStrict: "),e.greater(r)}}),qx=T({less_:function(n,t){var e,r=C(n,"a","less"),o=C(t,"b","less");return e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),P.runKernelFunc((function(i){return i.less(r,o)}),{a:r,b:o},null,"Less")}}),Kx=T({lessEqual_:function(n,t){var e,r=C(n,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),P.runKernelFunc((function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s}),{a:r,b:o},null,"LessEqual")}}),$x=T({lessEqualStrict_:function(n,t){var e=C(n,"a","lessEqualStrict"),r=C(t,"b","lessEqualStrict");return We(e.shape,r.shape,"Error in lessEqualStrict: "),e.lessEqual(r)}}),Xx=T({lessStrict_:function(n,t){var e=C(n,"a","lessStrict"),r=C(t,"b","lessStrict");return We(e.shape,r.shape,"Error in lessStrict: "),e.less(r)}}),Yx=T({notEqual_:function(n,t){var e,r=C(n,"a","notEqual"),o=C(t,"b","notEqual");return e=Ye(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),P.runKernelFunc((function(i){return i.notEqual(r,o)}),{a:r,b:o},null,"NotEqual")}}),Jx=T({notEqualStrict_:function(n,t){var e=C(n,"a","notEqualStrict"),r=C(t,"b","notEqualStrict");return We(e.shape,r.shape,"Error in notEqualStrict: "),e.notEqual(r)}});function Ml(n,t){for(var e=[],r=n;r<t;++r)e.push(r);return e}function Ol(n){for(var t=[],e=0;e<n.length;++e)for(var r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var Pu=T({gather_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","gather"),o=C(t,"indices","gather","int32");e=ut(e,r.shape)[0];var i=(function(a,s,u){for(var c=a.shape[u],l=[],f=1,h=1,p=0;p<u;p++)l.push(a.shape[p]),f*=a.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<a.rank;p++)l.push(a.shape[p]),h*=a.shape[p];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}})(r,o,e);return P.runKernelFunc((function(a,s){var u=a.gather(r,o.flatten(),e);return s([o]),u}),{x:r,indices:o},(function(a,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,f=c.slice(0,e),h=f.length,p=c.slice(e,c.length).slice(1),d=p.length,g=Ml(0,h),v=Ml(h+1,h+1+d),m=Ol([f,[l],p]),b=a.reshape(m),x=u.reshape([l]),y=Ol([[h],g,v]),w=b.transpose(y),_=Cp(w,x,r.shape[e]),k=xu(y);return _=_.transpose(k)},indices:function(){return u}}}),"Gather",{axis:e}).reshape(i.outputShape)}}),Cp=T({unsortedSegmentSum_:function(n,t,e){var r=C(n,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return I(Ze(e),(function(){return"numSegments must be of dtype int"})),P.runKernelFunc((function(i,a){var s=i.unsortedSegmentSum(r,o,e);return a([o]),s}),{$x:r},(function(i,a){var s=a[0];return{$x:function(){return(function(u,c){for(var l=Fu(c,Pe(c)),f=Pu(u,l),h=_p(c,re(0,"int32")),p=f.rank-h.rank,d=0;d<p;++d)h=Yt(h,d+1);h=Ea(h,vo(f.shape,"bool"));var g=Pe(f);return Dr(h,f,g)})(i,s)}}}))}}),Qx=function(n,t,e){return ae(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f,h,p,d,g;return se(this,(function(v){switch(v.label){case 0:for(r=C(n,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=r.shape,I(a>0,(function(){return"mask cannot be scalar"})),We(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(l),h=o.reshape([-1]),[4,yp(h)];case 1:return p=v.sent(),d=p.squeeze([1]),g=Pu(f,d,i),n!==r&&r.dispose(),t!==o&&o.dispose(),d.dispose(),f.dispose(),h.dispose(),p.dispose(),[2,g]}}))}))};function Ep(n,t,e,r,o,i,a){i===void 0&&(i="NHWC"),I(n.length===t.rank,(function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"}));var s=n,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,n[0],n[1],n[2]]),I(s.length===4,(function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."})),I(u.rank===4,(function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank})),I(e.rank===4,(function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank}));var l=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];I(l===e.shape[2],(function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."})),I(f===e.shape[3],(function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."})),a!=null&&I(Ze(o),(function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var h=Iu(i),p=Mr(s,e.shape,r,1,o,a,!1,h),d=P.runKernelFunc((function(g,v){var m=g.conv2dDerInput(u,e,p);return v([e,u]),m}),{dy4D:u,filter:e},(function(g,v){var m=v[0],b=v[1];return{dy4D:function(){return tn(g,m,r,o,i,1,a)},filter:function(){return Mu(g,b,m.shape,r,o,i,a)}}}));return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function us(n){var t=(function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i})(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Ip(n,t,e,r,o){I(n.length===t.rank,(function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"}));var i=n,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,n[0],n[1],n[2],n[3]]);var u=i[4],c=a.shape[4];I(i.length===5,(function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."})),I(a.rank===5,(function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank})),I(e.rank===5,(function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank})),I(u===e.shape[3],(function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."})),I(c===e.shape[4],(function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."}));var l=Ji(i,e.shape,r,1,o),f=P.runKernelFunc((function(h){return h.conv3dDerInput(a,e,l)}),{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var Zx=T({conv1d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(n,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),I(c.rank===3,(function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."})),I(u.rank===3,(function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."})),a!=null&&I(Ze(r),(function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."})),I(c.shape[2]===u.shape[1],(function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."})),I(Wt(e,i),(function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"})),I(o==="NWC",(function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."}));var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=tn(h,f,[1,e],r,"NHWC",[1,i],a);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),tn=T({conv2d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(n,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(c.rank===4,(function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."})),I(u.rank===4,(function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."})),a!=null&&I(Ze(r),(function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}));var f=o==="NHWC"?c.shape[3]:c.shape[1];I(f===u.shape[2],(function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."})),I(Wt(e,i),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}));var h=Iu(o),p=Mr(c.shape,u.shape,e,i,r,a,!1,h),d=[u,c],g=P.runKernelFunc((function(v,m){var b=v.conv2d(c,u,p);return m([u,c]),b}),{x:c,filter:u},(function(v,m){var b=m,x=b[0],y=b[1];return I(ho(i),(function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"})),{x:function(){return Rp(y.shape,v,x,e,r,o)},filter:function(){return Mu(y,v,x.shape,e,r,o)}}}),"Conv2D",p,d);return l?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),e1=T({conv3d_:function(n,t,e,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(n,"x","conv3d"),s=C(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),I(u.rank===5,(function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."})),I(s.rank===5,(function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."})),I(u.shape[4]===s.shape[3],(function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."})),I((function(h,p){return us(h)||us(p)})(e,i),(function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"})),I(o==="NDHWC",(function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."}));var l=Ji(u.shape,s.shape,e,i,r),f=P.runKernelFunc((function(h,p){var d=h.conv3d(u,s,l);return p([u,s]),d}),{x:u,$filter:s},(function(h,p){I(us(i),(function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}));var d=p[0],g=p[1];return{x:function(){return Ip(d.shape,h,g,e,r)},$filter:function(){return(function(v,m,b,x,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=m;_.rank===4&&(_=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3])),I(w.rank===5,(function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."})),I(_.rank===5,(function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."})),I(b.length===5,(function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+b+"."})),I(w.shape[4]===b[3],(function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+b[3]+"."})),I(_.shape[4]===b[4],(function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+b[4]+")."}));var k=Ji(w.shape,b,x,1,y);return P.runKernelFunc((function(S){return S.conv3dDerFilter(w,_,k)}),{x5D:w,dy5D:_})})(d,h,g.shape,e,r)}}}));return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Mu=T({conv2dDerFilter_:function(n,t,e,r,o,i,a){i===void 0&&(i="NHWC");var s=n;n.rank===3&&(s=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),I(s.rank===4,(function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."})),I(u.rank===4,(function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."})),I(e.length===4,(function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."}));var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];I(c===e[2],(function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."})),I(l===e[3],(function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."})),a!=null&&I(Ze(o),(function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var f=Iu(i),h=Mr(s.shape,e,r,1,o,a,!1,f);return P.runKernelFunc((function(p){return p.conv2dDerFilter(s,u,h)}),{x4D:s,dy4D:u})}}),Rp=T({conv2dDerInput_:Ep}),Ia=T({depthwiseConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]);var s=C(n,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(c.rank===4,(function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."})),I(u.rank===4,(function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."})),I(c.shape[3]===u.shape[2],(function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."})),i==null&&(i=[1,1]),I(Wt(e,i),(function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"})),a!=null&&I(Ze(r),(function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}));var f=Mr(c.shape,u.shape,e,i,r,a,!0),h=[c,u],p=P.runKernelFunc((function(d,g){var v=d.depthwiseConv2D(c,u,f);return g([c,u]),v}),{x:c,filter:u},(function(d,g){I(ho(i),(function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"}));var v=g[0],m=g[1];return{x:function(){return Sp(v.shape,d,m,f)},filter:function(){return kp(v,d,m.shape,f)}}}),"DepthwiseConv2dNative",f,h);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Sp=T({depthwiseConv2dDerInput_:function(n,t,e,r){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=P.runKernelFunc((function(s){return s.depthwiseConv2DDerInput(o,e,r)}),{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),kp=T({depthwiseConv2dDerFilter_:function(n,t,e,r){var o=n;n.rank===3&&(o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),P.runKernelFunc((function(a){return a.depthwiseConv2DDerFilter(o,i,r)}),{x4D:o,dy4D:i})}}),Ou=T({separableConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(n,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");I(l.rank===4,(function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."})),I(u.rank===4,(function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."})),I(c.rank===4,(function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."})),I(c.shape[0]===1,(function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."})),I(c.shape[1]===1,(function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."}));var h=u.shape[2],p=u.shape[3];I(c.shape[2]===h*p,(function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*p+", but got "+c.shape[2]+"."}));var d=Ia(l,u,r,o,a,i),g=tn(d,c,1,"valid",a);return f?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),t1=T({conv2dTranspose_:function(n,t,e,r,o,i){return Ep(e,C(n,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),n1=T({conv3dTranspose_:function(n,t,e,r,o){return Ip(e,C(n,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),r,o)}}),Ra=T({matMul_:function(n,t,e,r){var o;e===void 0&&(e=!1),r===void 0&&(r=!1);var i=C(n,"a","matMul"),a=C(t,"b","matMul");o=Ye(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),h=a.shape.slice(0,-2),p=ue(f),d=ue(h);I(i.rank>=2&&a.rank>=2&&i.rank===a.rank,(function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."})),I(ft(f,h),(function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."})),I(s===u,(function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+r+" must match."}));var g=i.shape.slice(0,-2).concat([c,l]),v=e?i.as3D(p,s,c):i.as3D(p,c,s),m=r?a.as3D(d,l,u):a.as3D(d,u,l),b={transposeA:e,transposeB:r};return P.runKernelFunc((function(x,y){var w=x.batchMatMul(v,m,e,r);return y([v,m]),w}),{a:v,b:m},(function(x,y){var w=y,_=w[0],k=w[1];return e||r?!e&&r?{a:function(){return x.matMul(k,!1,!1)},b:function(){return x.matMul(_,!0,!1)}}:e&&!r?{a:function(){return k.matMul(x,!1,!0)},b:function(){return _.matMul(x,!1,!1)}}:{a:function(){return k.matMul(x,!0,!0)},b:function(){return x.matMul(_,!0,!0)}}:{a:function(){return x.matMul(k,!1,!0)},b:function(){return _.matMul(x,!0,!1)}}}),"BatchMatMul",b).reshape(g)}}),r1=T({dot_:function(n,t){var e=C(n,"t1","dot"),r=C(t,"t2","dot");I(!(e.rank!==1&&e.rank!==2||r.rank!==1&&r.rank!==2),(function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+r.rank+"."}));var o=e.rank===1?e.size:e.shape[1],i=r.rank===1?r.size:r.shape[0];return I(o===i,(function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."})),e.rank===1&&r.rank===1?e.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():e.rank===1&&r.rank===2?e.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():e.rank===2&&r.rank===1?e.matMul(r.as2D(-1,1)).as1D():e.matMul(r.as2D(r.shape[0],r.shape[1]))}}),o1=T({outerProduct_:function(n,t){var e=C(n,"v1","outerProduct"),r=C(t,"v2","outerProduct");return I(e.rank===1&&r.rank===1,(function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+r.rank+"."})),e.as2D(-1,1).matMul(r.as2D(1,-1))}}),ni=T({reverse_:function(n,t){var e=C(n,"x","reverse");if(e.rank===0)return e.clone();var r=ut(t,e.shape);return P.runKernelFunc((function(o){return o.reverse(e,r)}),{$x:e},(function(o){return{$x:function(){return o.reverse(r)}}})).reshapeAs(e)}}),i1=T({reverse1d_:function(n){var t=C(n,"x","reverse");return I(t.rank===1,(function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."})),ni(t,0)}}),a1=T({reverse2d_:function(n,t){var e=C(n,"x","reverse");return I(e.rank===2,(function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."})),ni(e,t)}}),s1=T({reverse3d_:function(n,t){var e=C(n,"x","reverse");return I(e.rank===3,(function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."})),ni(e,t)}}),u1=T({reverse4d_:function(n,t){var e=C(n,"x","reverse");return I(e.rank===4,(function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."})),ni(e,t)}});function Ap(n,t,e,r,o,i){var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(s.rank===4,(function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."})),I(Wt(e,r),(function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"})),i!=null&&I(Ze(o),(function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var c=Ho(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&ft(c.inShape,c.outShape))return a.clone();var l=[s],f=P.runKernelFunc((function(h,p){var d=h.maxPool(s,c);return p([s,d]),d}),{x:s},(function(h,p){var d=p[0],g=p[1];return{x:function(){return(function(v,m,b,x,y,w,_,k){var S=C(v,"dy","maxPoolBackprop"),E=C(m,"input","maxPoolBackprop"),R=C(b,"output","maxPoolBackprop");I(E.rank===S.rank,(function(){return"Rank of input ("+E.rank+") does not match rank of dy ("+S.rank+")"})),I(Wt(y,w),(function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"})),I(S.rank===4,(function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."})),I(E.rank===4,(function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+E.rank+"."}));var F=Ho(E.shape,x,y,w,_,k);return P.runKernelFunc((function(N){return N.maxPoolBackprop(S,E,R,F)}),{$dy:S,$input:E})})(h,d,g,t,e,r,o)}}}),"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Dp(n,t,e,r,o,i){var a=C(n,"x","avgPool","float32");I(Wt(e,r),(function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"}));var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(s.rank===4,(function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."})),i!=null&&I(Ze(o),(function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var c=Ho(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&ft(c.inShape,c.outShape))return a.clone();var l=P.runKernelFunc((function(f){return f.avgPool(s,c)}),{x:s},(function(f){return{x:function(){return(function(h,p,d,g,v,m){var b=C(h,"dy","avgPoolBackprop"),x=C(p,"input","avgPoolBackprop");I(x.rank===b.rank,(function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+b.rank+")"})),I(Wt(g,v),(function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+v+"'"}));var y=x,w=b,_=!1;x.rank===3&&(_=!0,y=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=b.as4D(1,b.shape[0],b.shape[1],b.shape[2])),I(w.rank===4,(function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."})),I(y.rank===4,(function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."}));var k=Ho(y.shape,d,g,v,m),S=P.runKernelFunc((function(E){return E.avgPoolBackprop(w,y,k)}),{dy4D:w,input4D:y});return _?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S})(f,s,t,e,r,o)}}}),"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var lt=T({maxPool_:function(n,t,e,r,o){return Ap(n,t,e,1,r,o)}}),ri=T({avgPool_:function(n,t,e,r,o){return Dp(n,t,e,1,r,o)}}),c1=T({pool_:function(n,t,e,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(Wt(i,o),(function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"}));var c,l=Ho(s.shape,t,i,o,r),f=[l.dilationHeight,l.dilationWidth];c=r==="same"?(function(y,w){var _=y.map((function(E,R){return E+(E-1)*(w[R]-1)})).map((function(E){return E-1})),k=_.map((function(E){return Math.floor(E/2)})),S=_.map((function(E,R){return E-k[R]}));return _.map((function(E,R){return[k[R],S[R]]}))})([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,p=(function(y,w,_){var k=_.map((function(U){return U[0]})),S=_.map((function(U){return U[1]})),E=y.concat(k,S),R=w.map((function(U,z){return(U-E[z]%U)%U})),F=S.map((function(U,z){return U+R[z]})),N=w.map((function(U,z){return[k[z],F[z]]})),V=w.map((function(U,z){return[0,R[z]]}));return[N,V]})([l.inHeight,l.inWidth],f,c),d=p[0],g=p[1],v=h?r:"valid",m=h?s:Oh(s,f,d),b=(e==="avg"?function(){return Dp(m,t,i,1,v)}:function(){return Ap(m,t,i,1,v)})(),x=h?b:Fh(b,f,g);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),l1=T({maxPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),I(u.rank===5,(function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."})),I(i==="NDHWC",(function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i})),I(Wt(e,a),(function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"})),o!=null&&I(Ze(r),(function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=Yi(u.shape,t,e,a,r,o,i),f=P.runKernelFunc((function(h,p){var d=h.maxPool3d(u,l);return p([u,d]),d}),{x:u},(function(h,p){var d=p[0],g=p[1];return{x:function(){return(function(v,m,b,x,y,w,_,k){var S=C(v,"dy","maxPool3dBackprop"),E=C(m,"input","maxPool3dBackprop"),R=C(b,"output","maxPool3dBackprop"),F=S,N=E,V=R,U=!1;E.rank===4&&(U=!0,F=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),N=E.as5D(1,E.shape[0],E.shape[1],E.shape[2],E.shape[3]),V=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),I(F.rank===5,(function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."})),I(N.rank===5,(function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+N.rank+"."})),I(V.rank===5,(function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+V.rank+"."})),w==null&&(w=[1,1,1]),I(Wt(y,w),(function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"})),k!=null&&I(Ze(_),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+k+" but got pad "+_+"."}));var z=Yi(N.shape,x,y,w,_,k),G=P.runKernelFunc((function(W){return W.maxPool3dBackprop(F,N,V,z)}),{dy5D:F,input5D:N});return U?G.as4D(G.shape[1],G.shape[2],G.shape[3],G.shape[4]):G})(h,d,g,t,e,a,r,o)}}}));return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),f1=T({avgPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),I(u.rank===5,(function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."})),I(i==="NDHWC",(function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i})),I(Wt(e,a),(function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"})),o!=null&&I(Ze(r),(function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."}));var l=Yi(u.shape,t,e,a,r,o,i),f=P.runKernelFunc((function(h){return h.avgPool3d(u,l)}),{x:u},(function(h){return{x:function(){return(function(p,d,g,v,m,b,x){var y=C(p,"dy","avgPool3dBackprop"),w=C(d,"input","avgPool3dBackprop"),_=y,k=w,S=!1;w.rank===4&&(S=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),k=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),I(_.rank===5,(function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."})),I(k.rank===5,(function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+k.rank+"."})),m==null&&(m=[1,1,1]),I(Wt(v,m),(function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"})),x!=null&&I(Ze(b),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+b+"."}));var E=Yi(k.shape,g,v,m,b,x),R=P.runKernelFunc((function(F){return F.avgPool3dBackprop(_,k,E)}),{dy5D:_,input5D:k});return S?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R})(h,u,t,e,a,r,o)}}}));return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Sn=T({slice_:function(n,t,e){var r,o,i=C(n,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach((function(u){I(u!==-1,(function(){return"slice() does not support negative begin indexing."}))})),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map((function(u,c){return u>=0?u:(I(u===-1,(function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."})),i.shape[c]-r[c])})),Wy(i,r,o);var a=i.shape,s={begin:r,size:o};return P.runKernelFunc((function(u){return u.slice(i,r,o)}),{x:i},(function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],a[l]-r[l]-o[l]]);return{x:function(){return u.pad(c)}}}),"Slice",s)}}),h1=T({slice1d_:function(n,t,e){var r=C(n,"x","slice1d");return I(r.rank===1,(function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"})),Sn(r,[t],[e])}}),p1=T({slice2d_:function(n,t,e){var r=C(n,"x","slice2d");return I(r.rank===2,(function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"})),Sn(r,t,e)}}),Tp=T({slice3d_:function(n,t,e){var r=C(n,"x","slice3d");return I(r.rank===3,(function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"})),Sn(r,t,e)}}),d1=T({slice4d_:function(n,t,e){var r=C(n,"x","slice4d");return I(r.rank===4,(function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"})),Sn(r,t,e)}});function Np(n,t,e,r,o){return t.rank<e.rank&&(t=t.reshape(Lt(t.shape,r))),n.rank<e.rank&&(n=n.reshape(Lt(n.shape,r))),{x:function(){var i=n.mul(e.equal(t).cast(n.dtype));return o==null?i:i.transpose(o)}}}var v1=T({all_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","all","bool"),o=ut(t,r.shape),i=o,a=An(i,r.rank);a!=null&&(r=r.transpose(a),i=Dn(i.length,r.rank));var s=P.runKernelFunc((function(c){return c.all(r,i)}),{$x:r});if(e){var u=Lt(s.shape,o);return s.reshape(u)}return s}}),g1=T({any_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","any","bool"),o=ut(t,r.shape),i=o,a=An(i,r.rank);a!=null&&(r=r.transpose(a),i=Dn(i.length,r.rank));var s=P.runKernelFunc((function(c){return c.any(r,i)}),{$x:r});if(e){var u=Lt(s.shape,o);return s.reshape(u)}return s}}),m1=T({argMax_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMax");t==null&&(t=0);var r=ut(t,e.shape),o=An(r,e.rank);o!=null&&(e=e.transpose(o),r=Dn(r.length,e.rank));var i={axis:r[0]},a=[e];return P.runKernelFunc((function(s,u){var c=s.argMax(e,r[0]);return u([e]),c}),{x:e},(function(s,u){var c=u[0];return{x:function(){return Pe(c)}}}),"ArgMax",i,a)}}),y1=T({argMin_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMin");t==null&&(t=0);var r=ut(t,e.shape),o=An(r,e.rank);return o!=null&&(e=e.transpose(o),r=Dn(r.length,e.rank)),P.runKernelFunc((function(i,a){var s=i.argMin(e,r[0]);return a([e]),s}),{$x:e},(function(i,a){var s=a[0];return{$x:function(){return Pe(s)}}}))}}),b1=T({logSumExp_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","logSumExp"),o=ut(t,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=Lt(s.shape,o);return s.reshape(u)}return s}}),Sa=T({max_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","max"),o=r,i=ut(t,r.shape),a=i,s=An(a,r.rank);s!=null&&(r=r.transpose(s),a=Dn(a.length,r.rank));var u=[r],c=P.runKernelFunc((function(f,h){var p=f.max(r,a);return h([o,p]),p}),{x:r},(function(f,h){return Np(f,h[1],h[0],i,s)}),"Max",{axes:a},u,[!0]);if(e){var l=Lt(c.shape,i);c=c.reshape(l)}return c}}),x1=T({mean_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","mean"),o=ut(t,r.shape),i=ue(yt(r.shape,o)[1]);return _a((function(a){var s=re(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach((function(l){c[l]=1})),u.reshape(c).mul(vo(a.shape,"float32")).div(i)}}}))(r)}}),w1=T({min_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","min"),o=r,i=ut(t,r.shape),a=i,s=An(a,r.rank);s!=null&&(r=r.transpose(s),a=Dn(a.length,r.rank));var u=[r],c=P.runKernelFunc((function(f,h){var p=f.min(r,a);return h([o,p]),p}),{x:r},(function(f,h){return Np(f,h[1],h[0],i,s)}),"Min",{axes:a},u,[!0]);if(e){var l=Lt(c.shape,i);c=c.reshape(l)}return c}}),_1=T({moments_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=ut(t,(n=C(n,"x","moments")).shape),o=n.mean(r,e),i=o.shape;e||(i=Lt(o.shape,r));var a=n.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,e)}}}),Fp=T({sum_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=ut(t,r.shape);return _a((function(i){var a=An(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=Dn(s.length,i.rank));var c=function(p){var d=i.shape.slice();return o.forEach((function(g){d[g]=1})),p.reshape(d).mul(vo(i.shape,"float32"))},l={axes:s},f=P.runKernelFunc((function(p){return p.sum(u,s)}),{x:u},(function(p){return{x:function(){return c(p)}}}),"Sum",l);if(e){var h=Lt(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}}))(r)}}),C1=T({prod_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=ut(t,r.shape),i=An(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=Dn(a.length,r.rank));var u=P.runKernelFunc((function(l){return l.prod(s,a)}),{permutedX:s});if(e){var c=Lt(u.shape,o);u=u.reshape(c)}return u}}),Pp=T({elu_:function(n){var t=C(n,"x","elu");return P.runKernelFunc((function(e,r){var o=e.elu(t);return r([o]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){return P.runKernelFunc((function(i){return i.eluDer(e,o)}),{dy:e,y:o})}}}))}}),E1=T({leakyRelu_:function(n,t){t===void 0&&(t=.2);var e=C(n,"x","leakyRelu");return Fu(re(t).mul(e),e)}}),Mp=T({prelu_:function(n,t){var e=C(n,"x","prelu"),r=C(t,"alpha","prelu");return P.runKernelFunc((function(o,i){var a=o.prelu(e,r);return i([e,r]),a}),{x:e,alpha:r},(function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return Dr(u,o,o.mul(s))},alpha:function(){var c=Dr(u,Pe(o),o.mul(a)),l=at(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}}),"Prelu")}}),Xe=T({relu_:function(n){var t=C(n,"x","relu");return t.dtype==="bool"?t.toInt():P.runKernelFunc((function(e,r){var o=e.relu(t);return r([t]),o}),{x:t},(function(e,r){var o=r[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}}),"Relu")}}),Op=T({relu6_:function(n){var t=C(n,"x","relu6");return t.dtype==="bool"?t.toInt():P.runKernelFunc((function(e,r){var o=e.relu6(t);return r([t]),o}),{x:t},(function(e,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}}),"Relu6")}}),I1=T({selu_:function(n){var t=C(n,"x","selu");return P.runKernelFunc((function(e,r){var o=e.selu(t);return r([t]),o}),{$x:t},(function(e,r){var o=r[0];return{$x:function(){var i=o.greater(re(0)),a=re(Du),s=re(Tu),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return Dr(i,u,c)}}}))}}),hr=T({transpose_:function(n,t){var e=C(n,"x","transpose");if(t==null&&(t=e.shape.map((function(o,i){return i})).reverse()),I(e.rank===t.length,(function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."})),t.forEach((function(o){I(o>=0&&o<e.rank,(function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t}))})),e.rank<=1)return e.clone();var r={perm:t};return P.runKernelFunc((function(o){return o.transpose(e,t)}),{x:e},(function(o){var i=xu(t);return{x:function(){return o.transpose(i)}}}),"Transpose",r)}}),R1=T({localResponseNormalization_:function(n,t,e,r,o){t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=C(n,"x","localResponseNormalization");I(i.rank===4||i.rank===3,(function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."})),I(Ze(t),(function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."}));var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=P.runKernelFunc((function(c,l){var f=c.localResponseNormalization4D(a,t,e,r,o);return l([a,f]),f}),{x4D:a},(function(c,l){var f=l[0],h=l[1];return{x4D:function(){return P.runKernelFunc((function(p){return p.LRNGrad(c,f,h,t,e,r,o)}),{})}}}));return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Bp=T({norm_:function(n,t,e,r){t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1);var o=(function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(re(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)})(n=C(n,"x","norm"),t,e),i=o.shape;if(r){var a=ut(e,n.shape);i=Lt(o.shape,a)}return o.reshape(i)}}),S1=T({basicLSTMCell_:function(n,t,e,r,o,i){var a=C(n,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(r,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(i,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),p=h.shape[0],d=h.shape[1]/4,g=[p,d],v=h.slice([0,0],g),m=h.slice([0,d],g),b=h.slice([0,2*d],g),x=h.slice([0,3*d],g),y=v.sigmoid().mulStrict(m.tanh()).addStrict(l.mulStrict(a.add(b).sigmoid())),w=y.tanh().mulStrict(x.sigmoid());return[y,w]}}),k1=T({multiRNNCell_:function(n,t,e,r){for(var o=C(t,"data","multiRNNCell"),i=Gi(e,"c","multiRNNCell"),a=Gi(r,"h","multiRNNCell"),s=o,u=[],c=0;c<n.length;c++){var l=n[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),A1=T({movingAverage_:function(n,t,e,r,o){o===void 0&&(o=!0);var i=C(n,"v","movingAverage"),a=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");Rm(i,a),I(ft(i.shape,a.shape),(function(){return"Shape mismatch in v and x"}));var u=re(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){I(r!=null,(function(){return"When using zeroDebias: true, step is required."}));var f=C(r,"step","movingAverage");l=l.div(u.sub(ea(s,f)))}return i.add(l)}}),D1=T({stridedSlice_:function(n,t,e,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(n,"x","stridedSlice"),l=vl(s),f=c.shape.slice();l.forEach((function(v){t[v]=0,e[v]=1,f.splice(v,0,1)})),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=Uy(o,t,r,c.shape,h),e[h]=Vy(i,e,r,c.shape,h),r[h]=r[h]||1;var p=vl(u);p.forEach((function(v){e[v]=t[v]+1,r[v]=1}));var d=Eu(t,e,r),g=d.filter((function(v,m){return p.indexOf(m)===-1}));return r.every((function(v){return v===1}))?Sn(c,t,d).reshape(g):P.runKernelFunc((function(v){return v.stridedSlice(c,t,e,r)}),{$x:c}).reshape(g)}}),T1=T({topk_:function(n,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var r=C(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=P.runKernelFunc((function(a){return a.topk(r,t,e)}),{$x:r});return{values:i[0],indices:i[1]}}}),N1=T({scatterND_:function(n,t,e){var r=C(n,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return Ly(o,r,e),P.runKernelFunc((function(i){return i.scatterND(r,o,e)}),{indices:r,updates:o},null,"ScatterNd",{shape:e})}}),Bu=T({fft_:function(n){I(n.dtype==="complex64",(function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+n.dtype+"."}));var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return P.runKernelFunc((function(o){return o.fft(r)}),{input:n}).reshape(n.shape)}}),ta=T({ifft_:function(n){I(n.dtype==="complex64",(function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+n.dtype+"."}));var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return P.runKernelFunc((function(o){return o.ifft(r)}),{input:n}).reshape(n.shape)}}),Lu=T({rfft_:function(n,t){I(n.dtype==="float32",(function(){return"The dtype for rfft() must be real value but got "+n.dtype}));var e,r=n.shape[n.shape.length-1],o=n.size/r;if(t!=null&&t<r){var i=n.shape.map((function(m){return 0})),a=n.shape.map((function(m){return m}));a[n.shape.length-1]=t,e=n.slice(i,a),r=t}else if(t!=null&&t>r){var s=n.shape.map((function(m){return m}));s[n.shape.length-1]=t-r,e=n.concat(Ke(s),n.shape.length-1),r=t}else e=n;var u=e.zerosLike(),c=dt(e,u).as2D(o,r),l=Bu(c),f=Math.floor(r/2)+1,h=Jt(l),p=bn(l),d=h.split([f,r-f],h.shape.length-1),g=p.split([f,r-f],p.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=f,dt(d[0],g[0]).reshape(v)}}),Lp=T({irfft_:function(n){var t=n.shape[n.shape.length-1],e=n.size/t;if(t<=2){var r=n.as2D(e,t),o=ta(r);return Jt(o)}var i=[e,2*(t-1)],a=Jt(n).as2D(e,t),s=bn(n).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(re(-1)),l=a.concat(u,1),f=s.concat(c,1);return r=dt(l,f).as2D(i[0],i[1]),o=ta(r),Jt(o)}}),F1=Object.freeze({fft:Bu,ifft:ta,rfft:Lu,irfft:Lp}),P1=T({sparseToDense_:function(n,t,e,r){r===void 0&&(r=0);var o=C(n,"sparseIndices","sparseToDense","int32"),i=C(t,"sparseValues","sparseToDense"),a=C(r,"defaultValue","sparseToDense",i.dtype);return(function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")})(o,i,e,a),P.runKernelFunc((function(s){return s.sparseToDense(o,i,e,a)}),{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),M1=T({gatherND_:function(n,t){var e=C(t,"indices","gatherND","int32"),r=C(n,"x","gatherND");return P.runKernelFunc((function(o){return o.gatherND(r,e)}),{x:r,indices:e},null,"GatherNd")}}),O1=T({diag_:function(n){var t=C(n,"x","diag").flatten(),e=n.shape.concat(n.shape);return P.runKernelFunc((function(r){return r.diag(t)}),{$x:t}).reshape(e)}}),B1=T({dropout_:function(n,t,e,r){var o=C(n,"x","dropout");if(I(o.dtype==="float32",(function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."})),I(t>=0&&t<1,(function(){return"rate must be a float in the range [0, 1), but got "+t+"."})),t===0)return n instanceof $e?o.clone():o;var i=(function(u,c){if(c==null)return u.shape.slice();if(ft(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c})(o,e),a=1-t,s=Mh(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function Wp(n,t,e){for(var r=1-n%2,o=new Float32Array(n),i=0;i<n;++i){var a=2*Math.PI*i/(n+r-1);o[i]=t-e*Math.cos(a)}return tt(o,"float32")}var Wu=T({hannWindow_:function(n){return Wp(n,.5,.5)}}),Up=T({hammingWindow_:function(n){return Wp(n,.54,.46)}}),Uu=T({frame_:function(n,t,e,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=n.size;)a.push(Sn(n,i,t)),i+=e;if(r)for(;i<n.size;){var s=i+t-n.size,u=ot([Sn(n,i,t-s),En([s],o)]);a.push(u),i+=e}return a.length===0?ar([],[0,t]):ot(a).as2D(a.length,t)}}),Vp=T({stft_:function(n,t,e,r,o){var i;o===void 0&&(o=Wu),r==null&&(i=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=Uu(n,t,e),s=Ct(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(Lu(s.slice([c,0],[1,t]),r));return ot(u)}}),L1=Object.freeze({hannWindow:Wu,hammingWindow:Up,frame:Uu,stft:Vp}),_t,W1=function(n,t,e){return e===void 0&&(e=1),ae(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f,h,p,d,g,v;return se(this,(function(m){switch(m.label){case 0:return r=C(n,"predictions","inTopK"),o=C(t,"targets","inTopK"),I(r.rank>1,(function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank})),I(r.rank-1===o.rank,(function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank})),We(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],I(e>0&&e<=i,(function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e})),[4,r.data()];case 1:return a=m.sent(),[4,o.data()];case 2:for(s=m.sent(),u=[a.length/i,i],l=u[1],f=Uo("bool",c=u[0]),h=0;h<c;h++){for(p=h*l,d=a.subarray(p,p+l),g=[],v=0;v<d.length;v++)g.push({value:d[v],index:v});for(g.sort((function(b,x){return x.value-b.value})),f[h]=0,v=0;v<e;v++)if(g[v].index===s[h]){f[h]=1;break}}return n!==r&&r.dispose(),t!==o&&o.dispose(),[2,gt(f,o.shape,"bool")]}}))}))};(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(_t||(_t={}));var U1=T({absoluteDifference_:function(n,t,e,r){r===void 0&&(r=_t.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","absoluteDifference"),i=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),We(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return Kn(s,a,r)}}),Kn=T({computeWeightedLoss_:function(n,t,e){e===void 0&&(e=_t.SUM_BY_NONZERO_WEIGHTS);var r=C(n,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(e===_t.NONE)return i;if(e===_t.SUM)return i.sum();if(e===_t.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(re(a)):s}if(e===_t.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(re(r.size));var u=o.mul(vo(r.shape)).notEqual(re(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),V1=T({cosineDistance_:function(n,t,e,r,o){o===void 0&&(o=_t.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),s=null;r!=null&&(s=C(r,"weights","cosineDistance")),We(i.shape,a.shape,"Error in cosineDistance: ");var u=re(1).sub(i.mul(a).sum(e,!0));return Kn(u,s,o)}}),z1=T({hingeLoss_:function(n,t,e,r){r===void 0&&(r=_t.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","hingeLoss"),i=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),We(o.shape,i.shape,"Error in hingeLoss: ");var s=re(1);o=re(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return Kn(u,a,r)}}),H1=T({huberLoss_:function(n,t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=_t.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),We(i.shape,a.shape,"Error in huberLoss: ");var u=re(r),c=a.sub(i).abs(),l=xp(c,u),f=c.sub(l),h=re(.5).mul(l.square()).add(u.mul(f));return Kn(h,s,o)}}),G1=T({logLoss_:function(n,t,e,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=_t.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","logLoss"),a=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),We(i.shape,a.shape,"Error in logLoss: ");var u=re(1),c=re(r),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return Kn(l,s,o)}}),j1=T({meanSquaredError_:function(n,t,e,r){r===void 0&&(r=_t.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","meanSquaredError"),i=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),We(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return Kn(s,a,r)}}),q1=T({sigmoidCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=_t.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),We(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var f=(function(h,p){var d=C(h,"labels","sigmoidCrossEntropyWithLogits"),g=C(p,"logits","sigmoidCrossEntropyWithLogits");We(d.shape,g.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=g.relu(),m=g.mul(d),b=g.abs().neg().exp().log1p();return v.sub(m).add(b)})(i,a);return Kn(f,s,o)}}),K1=T({softmaxCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=_t.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),We(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var f=(function(h,p,d){if(d===void 0&&(d=-1),d===-1&&(d=p.rank-1),d!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+d);return _a((function(g,v,m){var b=v.logSumExp([d],!0),x=v.toFloat().sub(b);return m([g,x]),{value:x.mul(g).neg().sum([d]),gradFunc:function(y,w){var _=w[0],k=w[1],S=Lt(y.shape,[d]);return[y.reshape(S).mul(_.toFloat().sub(k.exp())),y.reshape(S).mul(k.exp().sub(_.toFloat()))]}}}))(h,p)})(i,a);return Kn(f,s,o)}}),$1=Object.freeze({get Reduction(){return _t},absoluteDifference:U1,computeWeightedLoss:Kn,cosineDistance:V1,hingeLoss:z1,huberLoss:H1,logLoss:G1,meanSquaredError:j1,sigmoidCrossEntropy:q1,softmaxCrossEntropy:K1});function Bl(n,t){return t===void 0&&(t=!1),P.tidy((function(){if(n.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+n.shape.length+"D Tensor.");for(var e=n.shape[0],r=n.shape[1],o=Ph(e),i=n.clone(),a=ar([[1]],[1,1]),s=a.clone(),u=e>=r?r:e,c=function(f){var h,p=i,d=s,g=o;h=P.tidy((function(){var v=i.slice([f,f],[e-f,1]),m=v.norm(),b=i.slice([f,f],[1,1]),x=ar([[-1]]).where(b.greater(0),ar([[1]])),y=b.sub(x.mul(m)),w=v.div(y);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=x.matMul(y).div(m).neg(),k=i.slice([f,0],[e-f,r]),S=_.mul(s);if(f===0)i=k.sub(S.matMul(s.transpose().matMul(k)));else{var E=k.sub(S.matMul(s.transpose().matMul(k)));i=i.slice([0,0],[f,r]).concat(E,0)}var R=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=R.sub(R.matMul(s).matMul(S.transpose()));else{var F=R.sub(R.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[e,f]).concat(F,1)}return[s,i,o]})),s=h[0],i=h[1],o=h[2],Bt([p,d,g])},l=0;l<u;++l)c(l);return!t&&e>r&&(o=o.slice([0,0],[e,r]),i=i.slice([0,0],[r,r])),[o,i]}))}var X1=T({bandPart_:function(n,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var r=C(n,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=ji(0,a,1,"int32").reshape([-1,1]),c=ji(0,s,1,"int32"),l=st(u,c),f=Ea(l.lessEqual(re(+t,"int32")),l.greaterEqual(re(-e,"int32"))),h=Ke([a,s],r.dtype);return Kt(it(r.reshape([-1,a,s])).map((function(p){return Dr(f,p,h)}))).reshape(o)}}),Y1=T({gramSchmidt_:function(n){var t;if(Array.isArray(n)){t=!1,I(n!=null&&n.length>0,(function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"}));for(var e=n[0].shape[0],r=function(u){I(n[u].shape[0]===e,(function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+n[u].shape[0]+" vs. "+e+")"}))},o=1;o<n.length;++o)r(o)}else t=!0,n=_u(n,n.shape[0],0).map((function(u){return Bh(u,[0])}));I(n.length<=n[0].shape[0],(function(){return"Gram-Schmidt: Number of vectors ("+n.length+") exceeds number of dimensions ("+n[0].shape[0]+")."}));var i=[],a=n,s=function(u){i.push(P.tidy((function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var f=Fp(i[l].mulStrict(c)).mul(i[l]);c=c.sub(f)}return c.div(Bp(c,"euclidean"))})))};for(o=0;o<n.length;++o)s(o);return t?Kt(i,0):i}}),J1=T({qr_:function(n,t){if(t===void 0&&(t=!1),n.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+n.rank);if(n.rank===2)return Bl(n,t);var e=n.shape.slice(0,n.shape.length-2).reduce((function(a,s){return a*s})),r=it(n.reshape([e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],i=[];return r.forEach((function(a){var s=Bl(a,t),u=s[0],c=s[1];o.push(u),i.push(c)})),[Kt(o,0).reshape(n.shape),Kt(i,0).reshape(n.shape)]}}),Q1=Object.freeze({bandPart:X1,gramSchmidt:Y1,qr:J1});function ka(n,t,e,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=n.shape[0];return e=Math.min(e,a),I(0<=r&&r<=1,(function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"})),I(n.rank===2,(function(){return"boxes must be a 2D tensor, but was of rank '"+n.rank+"'"})),I(n.shape[1]===4,(function(){return"boxes must have 4 columns, but 2nd dimension was "+n.shape[1]})),I(t.rank===1,(function(){return"scores must be a 1D tensor"})),I(t.shape[0]===a,(function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]})),I(0<=i&&i<=1,(function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"})),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var Z1=T({resizeBilinear_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeBilinear");I(r.rank===3||r.rank===4,(function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."})),I(t.length===2,(function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."}));var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=P.runKernelFunc((function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)}),{x:o},(function(c,l){return{x:function(){return P.runKernelFunc((function(f){return f.resizeBilinearBackprop(c,l[0],e)}),{})}}}),"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),ew=T({resizeNearestNeighbor_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeNearestNeighbor");I(r.rank===3||r.rank===4,(function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."})),I(t.length===2,(function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."})),I(r.dtype==="float32"||r.dtype==="int32",(function(){return"`images` must have `int32` or `float32` as dtype"}));var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=P.runKernelFunc((function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)}),{batchImages:o},(function(c,l){return{batchImages:function(){return P.runKernelFunc((function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)}),{})}}}));return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),tw=T({nonMaxSuppression_:function(n,t,e,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(n,"boxes","nonMaxSuppression"),a=C(t,"scores","nonMaxSuppression"),s=ka(i,a,e,r,o);e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:r,scoreThreshold:o};return P.runKernelFunc((function(c){return c.nonMaxSuppression(i,a,e,r,o)}),{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),nw=function(n,t,e,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),ae(this,void 0,void 0,(function(){var i,a,s,u,c,l,f;return se(this,(function(h){switch(h.label){case 0:return i=C(n,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),s=ka(i,a,e,r,o),e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=Ru(c,l,e,r,o),i!==n&&i.dispose(),a!==t&&a.dispose(),[2,f]}}))}))},rw=T({nonMaxSuppressionWithScore_:function(n,t,e,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(n,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=ka(a,s,e,r,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=P.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),ow=function(n,t,e,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),ae(this,void 0,void 0,(function(){var a,s,u,c,l,f,h;return se(this,(function(p){switch(p.label){case 0:return a=C(n,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=ka(a,s,e,r,o,i),e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=p.sent(),l=c[0],f=c[1],h=Su(l,f,e,r,o,i),a!==n&&a.dispose(),s!==t&&s.dispose(),[2,h]}}))}))},iw=T({cropAndResize_:function(n,t,e,r,o,i){var a=C(n,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return I(a.rank===4,(function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."})),I(s.rank===2&&s.shape[1]===4,(function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."})),I(u.rank===1&&u.shape[0]===c,(function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."})),I(r.length===2,(function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."})),I(r[0]>=1&&r[1]>=1,(function(){return"cropSize must be atleast [1,1], but was "+r})),I(o==="bilinear"||o==="nearest",(function(){return"method must be bilinear or nearest, but was "+o})),P.runKernelFunc((function(l,f){return l.cropAndResize(a,s,u,r,o,i)}),{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),Vu=Object.freeze({resizeBilinear:Z1,resizeNearestNeighbor:ew,nonMaxSuppression:tw,nonMaxSuppressionAsync:nw,nonMaxSuppressionWithScore:rw,nonMaxSuppressionWithScoreAsync:ow,cropAndResize:iw}),zu=function(n,t){return!(n>0)||t==="linear"},Hu=function(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return n.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Gu=function(n,t){var e=t,r=at(n.shape,t.shape);return r.length>0&&(e=e.sum(r)),e.reshape(n.shape)},ju=function(n,t,e){if(t==="linear")return n;if(t==="relu")return Xe(n);if(t==="elu")return Pp(n);if(t==="relu6")return Op(n);if(t==="prelu")return Mp(n,e);throw new Error("Unknown fused activation "+t+".")},aw=T({fusedMatMul_:function(n){var t,e=n.a,r=n.b,o=n.transposeA,i=o!==void 0&&o,a=n.transposeB,s=a!==void 0&&a,u=n.bias,c=n.activation,l=c===void 0?"linear":c,f=n.preluActivationWeights;if(zu(P.state.gradientDepth,l)===!1){var h=Ra(e,r,i,s);return u!=null&&(h=De(h,u)),ju(h,l,f)}var p=C(e,"a","fused matMul"),d=C(r,"b","fused matMul");t=Ye(p,d),p=t[0],d=t[1];var g=i?p.shape[p.rank-2]:p.shape[p.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],m=i?p.shape[p.rank-1]:p.shape[p.rank-2],b=s?d.shape[d.rank-2]:d.shape[d.rank-1],x=p.shape.slice(0,-2),y=d.shape.slice(0,-2),w=ue(x),_=ue(y);I(p.rank>=2&&d.rank>=2&&p.rank===d.rank,(function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."})),I(ft(x,y),(function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+y+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."})),I(g===v,(function(){return"Error in fused matMul: inner shapes ("+g+") and ("+v+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+i+" and transposeB="+s+" must match."}));var k,S,E=p.shape.slice(0,-2).concat([m,b]),R=i?p.as3D(w,g,m):p.as3D(w,m,g),F=s?d.as3D(_,b,v):d.as3D(_,v,b);u!=null&&Ne(E,(k=Ye(k=C(u,"bias","fused matMul"),p)[0]).shape),f!=null&&(S=C(f,"prelu weights","fused matMul"));var N={a:R,b:F};u!=null&&(N.bias=k),f!=null&&(N.preluActivationWeights=S);var V=[R,F];return P.runKernelFunc((function(U,z){var G=U.fusedBatchMatMul({a:R,b:F,transposeA:i,transposeB:s,bias:k,activation:l,preluActivationWeights:S});return z([R,F,G]),G}),N,(function(U,z){var G=z[0],W=z[1],B=z[2],K=Hu(U,B,l),J={};return u!=null&&(J={bias:function(){return Gu(k,K)}}),Object.assign(i||s?!i&&s?{a:function(){return K.matMul(W,!1,!1)},b:function(){return K.matMul(G,!0,!1)}}:i&&!s?{a:function(){return W.matMul(K,!1,!0)},b:function(){return G.matMul(K,!1,!1)}}:{a:function(){return W.matMul(K,!0,!0)},b:function(){return K.matMul(G,!0,!0)}}:{a:function(){return K.matMul(W,!1,!0)},b:function(){return G.matMul(K,!0,!1)}},J)}),"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},V,[!0]).reshape(E)}}),sw=T({fusedConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,p=n.preluActivationWeights;if(h=h||"linear",zu(P.state.gradientDepth,h)===!1){var d=tn(t,e,r,o,a,u,c);return l!=null&&(d=De(d,l)),ju(d,h,p)}var g=C(t,"x","conv2d"),v=C(e,"filter","conv2d"),m=g,b=!1;g.rank===3&&(b=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),I(m.rank===4,(function(){return"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."})),I(v.rank===4,(function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."})),c!=null&&I(Ze(o),(function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."})),I(m.shape[3]===v.shape[2],(function(){return"Error in conv2d: depth of input ("+m.shape[3]+") must match input depth for filter "+v.shape[2]+"."})),I(Wt(r,u),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),I(a==="NHWC",(function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."}));var x,y,w=Mr(m.shape,v.shape,r,u,o,c);l!=null&&(x=Ye(x=C(l,"bias","fused conv2d"),g)[0],Ne(w.outShape,x.shape)),p!=null&&(y=C(p,"prelu weights","fused conv2d"));var _={x:m,filter:v};l!=null&&(_.bias=x),p!=null&&(_.preluActivationWeights=y);var k=[v,m],S=P.runKernelFunc((function(E,R){var F=E.fusedConv2d({input:m,filter:v,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return R([v,m,F]),F}),_,(function(E,R){var F=R,N=F[0],V=F[1],U=F[2],z=Hu(E,U,h);I(ho(u),(function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"}));var G={};return l!=null&&(G={bias:function(){return Gu(x,z)}}),Object.assign({x:function(){return Rp(V.shape,z,N,r,o)},filter:function(){return Mu(V,z,N.shape,r,o)}},G)}),"FusedConv2D",{convInfo:w,activation:h},k,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),uw=T({fusedDepthwiseConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,p=n.preluActivationWeights;if(zu(P.state.gradientDepth,h)===!1){var d=Ia(t,e,r,o,a,u,c);return l!=null&&(d=De(d,l)),ju(d,h,p)}var g=C(t,"x","depthwiseConv2d"),v=C(e,"filter","depthwiseConv2d"),m=g,b=!1;g.rank===3&&(b=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),I(m.rank===4,(function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+m.rank+"."})),I(v.rank===4,(function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."})),I(m.shape[3]===v.shape[2],(function(){return"Error in fused depthwiseConv2d: number of input channels ("+m.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."})),u==null&&(u=[1,1]),I(Wt(r,u),(function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"})),c!=null&&I(Ze(o),(function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."}));var x,y,w=Mr(m.shape,v.shape,r,u,o,c,!0);l!=null&&(x=Ye(x=C(l,"bias","fused conv2d"),g)[0],Ne(w.outShape,x.shape)),p!=null&&(y=C(p,"prelu weights","fused depthwiseConv2d"));var _={x:m,filter:v};l!=null&&(_.bias=x),p!=null&&(_.preluActivationWeights=y);var k=[v,m],S=P.runKernelFunc((function(E,R){var F=E.fusedDepthwiseConv2D({input:m,filter:v,convInfo:w,bias:x,activation:h,preluActivationWeights:y});return R([v,m,F]),F}),_,(function(E,R){I(ho(u),(function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"}));var F=R[0],N=R[1],V=R[2],U=Hu(E,V,h),z={};return l!=null&&(z={bias:function(){return Gu(x,U)}}),Object.assign({x:function(){return Sp(N.shape,U,F,w)},filter:function(){return kp(N,U,F.shape,w)}},z)}),"FusedDepthwiseConv2D",{convInfo:w,activation:h},k,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),cw=Object.freeze({matMul:aw,conv2d:sw,depthwiseConv2d:uw}),lw=Object.freeze({image:Vu,linalg:Q1,losses:$1,spectral:F1,fused:cw,signal:L1,square:Gb,squaredDifference:lp,conv1d:Zx,conv2d:tn,conv3d:e1,depthwiseConv2d:Ia,separableConv2d:Ou,conv2dTranspose:t1,conv3dTranspose:n1,op:T,batchNormalization2d:xx,batchNormalization3d:wx,batchNormalization4d:_x,batchNormalization:Cx,batchNorm:gp,batchNorm2d:Ex,batchNorm3d:Ix,batchNorm4d:Rx,booleanMaskAsync:Qx,complex:dt,real:Jt,imag:bn,concat:ot,concat1d:cy,concat2d:ly,concat3d:fy,concat4d:hy,split:_u,matMul:Ra,dot:r1,outerProduct:o1,reverse:ni,reverse1d:i1,reverse2d:a1,reverse3d:s1,reverse4d:u1,maxPool:lt,avgPool:ri,pool:c1,maxPool3d:l1,avgPool3d:f1,slice:Sn,slice1d:h1,slice2d:p1,slice3d:Tp,slice4d:d1,abs:jb,acos:qb,acosh:Kb,asin:$b,asinh:Xb,atan:Yb,atanh:Jb,ceil:Qb,clipByValue:Nu,cos:Zb,cosh:ex,erf:tx,exp:js,expm1:nx,floor:rx,log:ox,log1p:ix,logSigmoid:ax,neg:Zi,reciprocal:sx,round:ux,rsqrt:fp,sigmoid:hp,sign:cx,isNaN:lx,isInf:fx,isFinite:hx,sin:px,sinh:dx,softplus:vx,sqrt:gx,step:mx,tan:yx,tanh:bx,all:v1,any:g1,argMax:m1,argMin:y1,logSumExp:b1,max:Sa,mean:x1,min:w1,moments:_1,sum:Fp,prod:C1,equal:wp,equalStrict:zx,greater:Hx,greaterEqual:_p,greaterEqualStrict:Gx,greaterStrict:jx,less:qx,lessEqual:Kx,lessEqualStrict:$x,lessStrict:Xx,notEqual:Yx,notEqualStrict:Jx,add:De,addN:Ax,addStrict:Dx,atan2:Tx,div:nn,divNoNan:Nx,divStrict:Fx,floorDiv:bp,maximum:Fu,maximumStrict:Px,minimum:xp,minimumStrict:Mx,mod:Ox,modStrict:Bx,mul:Ct,mulStrict:Lx,pow:ea,powStrict:Wx,squaredDifferenceStrict:Ux,sub:st,subStrict:Vx,elu:Pp,leakyRelu:E1,prelu:Mp,relu:Xe,relu6:Op,selu:I1,logicalAnd:Ea,logicalNot:Sx,logicalOr:mp,logicalXor:kx,where:Dr,whereAsync:yp,buffer:xe,print:wy,batchToSpaceND:Fh,broadcastTo:_y,cast:Cy,clone:Ey,cumsum:Iy,depthToSpace:Ry,expandDims:Yt,eye:Ph,multinomial:Sy,oneHot:Vs,pad:Pr,pad1d:ky,pad2d:Ay,pad3d:Dy,pad4d:Ty,rand:Ny,randomNormal:Fy,randomGamma:Py,randomUniform:Mh,reshape:rn,spaceToBatchND:Oh,squeeze:Bh,stack:Kt,tile:eo,truncatedNormal:My,unstack:it,setdiff1dAsync:Oy,fill:En,linspace:uy,ones:vo,range:ji,scalar:re,tensor:gt,tensor1d:tt,tensor2d:ar,tensor3d:wu,tensor4d:Pt,tensor5d:iy,tensor6d:ay,variable:sy,zeros:Ke,onesLike:Nh,zerosLike:Pe,transpose:hr,softmax:qn,logSoftmax:Hy,localResponseNormalization:R1,norm:Bp,gather:Pu,unsortedSegmentSum:Cp,basicLSTMCell:S1,multiRNNCell:k1,movingAverage:A1,stridedSlice:D1,topk:T1,scatterND:N1,fft:Bu,ifft:ta,rfft:Lu,irfft:Lp,sparseToDense:P1,gatherND:M1,diag:O1,dropout:B1,hannWindow:Wu,hammingWindow:Up,frame:Uu,stft:Vp,inTopKAsync:W1});function X(n,t){Array.isArray(n)||(n=[n]),n.forEach((function(e){e!=null&&I(e.dtype!=="complex64",(function(){return t+" does not support complex64 tensors."}))}))}function cs(n,t,e,r){if(e==="linear")return n.linear(t);if(e==="relu")return n.relu(t);if(e==="elu")return n.elu(t);if(e==="relu6")return n.relu6(t);if(e==="prelu")return n.prelu(t,r);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var fw=(function(n){function t(){var e=n.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Gh(e,P),e}return cn(t,n),t.prototype.write=function(e,r,o){this.firstUse&&(this.firstUse=!1,H().get("IS_NODE")&&Hi(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,r,o,i){this.data.set(e,{values:r,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return ae(this,void 0,void 0,(function(){return se(this,(function(r){return[2,this.readSync(e)]}))}))},t.prototype.readSync=function(e){var r=this.data.get(e),o=r.dtype,i=r.complexTensors;return o==="complex64"?Gs(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var r=this.readSync(e.dataId),o=r;if(e.dtype==="string")try{o=r.map((function(i){return Ui(i)}))}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return xe(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,r,o){var i=this.write(e,r,o);return P.makeTensorFromDataId(i,r,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var r=this.data.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return ae(this,void 0,void 0,(function(){var r;return se(this,(function(o){return r=mn(),e(),[2,{kernelMs:mn()-r}]}))}))},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,r){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:P.keep(e.clone()),imag:P.keep(r.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(X(e,"slice"),zh(e.shape,r,o)){var i=Hh(r,e.strides),a=ue(o);return gt(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=xe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map((function(f,h){return f+r[h]}));s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,r,o,i){X(e,"stridedSlice");var a=Eu(r,o,i);if(a.some((function(p){return p===0})))return gt([],a);for(var s=xe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*i[h]+r[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var r=this.readSync(e.dataId),o=xe([e.size,e.size],e.dtype),i=o.values,a=0;a<r.length;a++)i[a*e.size+a]=r[a];return o.toTensor()},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,r){X(e,"reverse");for(var o=xe(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();r.forEach((function(f){return l[f]=e.shape[f]-1-l[f]})),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,r){var o=this;if(e[0].dtype==="complex64"){var i=e.map((function(p){return Jt(p)})),a=e.map((function(p){return bn(p)}));return dt(this.concat(i,r),this.concat(a,r))}var s=e.map((function(p){var d=ue(p.shape.slice(r));return p.as2D(-1,d)})),u=fo(s.map((function(p){return p.shape})),1),c=xe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach((function(p){c.set(o.readSync(p.dataId),l),l+=p.size}))}else{var f=0;s.forEach((function(p){for(var d=o.readSync(p.dataId),g=0,v=0;v<p.shape[0];++v)for(var m=v*u[1]+f,b=0;b<p.shape[1];++b)c[m+b]=d[g++];f+=p.shape[1]}))}var h=fo(e.map((function(p){return p.shape})),r);return gt(c,h,e[0].dtype)},t.prototype.neg=function(e){return X(e,"neg"),this.multiply(re(-1),e)},t.prototype.add=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),(function(o,i,a,s){return{real:o+a,imag:i+s}})):this.broadcastedBinaryOp(e,r,vt(e.dtype,r.dtype),(function(o,i){return o+i}))},t.prototype.addN=function(e){var r=this;X(e,"addN");for(var o=e.map((function(l){return r.readSync(l.dataId)})),i=xe(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,r){var o=ut([r],e.shape),i=this.max(e,o),a=Lt(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),(function(o,i,a,s){return{real:o-a,imag:i-s}})):this.broadcastedBinaryOp(e,r,vt(e.dtype,r.dtype),(function(o,i){return o-i}))},t.prototype.pow=function(e,r){return X([e,r],"pow"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){return Math.pow(o,i)}))},t.prototype.batchMatMul=function(e,r,o,i){X([e,r],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?r.shape[1]:r.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],p=h[0],d=h[1],g=h[2],v=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],m=v[0],b=v[1],x=v[2],y=s*u,w=xe([c,s,u],e.dtype),_=w.values,k=this.blockSize,S=0;S<c;S++)for(var E=0;E<s;E+=k)for(var R=0;R<u;R+=k)for(var F=0;F<a;F+=k)for(var N=Math.min(E+k,s),V=Math.min(R+k,u),U=Math.min(F+k,a),z=E;z<N;z++)for(var G=R;G<V;G++){for(var W=0,B=F;B<U;B++)W+=l[S*p+z*d+B*g]*f[B*m+G*b+S*x];_[S*y+(z*u+G)]+=W}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(r,o,i,a);return s&&(l=this.add(l,s)),u&&(l=cs(this,l,u,c)),l},t.prototype.multiply=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),(function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}})):this.broadcastedBinaryOp(e,r,vt(e.dtype,r.dtype),(function(o,i){return o*i}))},t.prototype.realDivide=function(e,r){return X([e,r],"realDivide"),this.broadcastedBinaryOp(e,r,"float32",(function(o,i){return o/i}))},t.prototype.floorDiv=function(e,r){return X([e,r],"floorDiv"),this.broadcastedBinaryOp(e,r,"int32",(function(o,i){return Math.floor(o/i)}))},t.prototype.sum=function(e,r){X(e,"sum"),Ut("sum",r,e.rank);for(var o=yt(e.shape,r),i=o[0],a=o[1],s=Ke(i,vt(e.dtype,"int32")),u=ue(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=0,d=0;d<u;++d)p+=l[h+d];c[f]=p}return s},t.prototype.prod=function(e,r){X(e,"sum");for(var o=yt(e.shape,r),i=o[0],a=o[1],s=Ke(i,vt(e.dtype,"int32")),u=ue(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=1,d=0;d<u;++d)p*=l[h+d];c[f]=p}return s},t.prototype.unsortedSegmentSum=function(e,r,o){X(e,"unsortedSegmentSum");for(var i=[],a=e.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=re(s,"int32"),c=wp(u,r).asType("float32").mul(e).sum(0);i.push(c)}return Kt(i)},t.prototype.argMin=function(e,r){X(e,"argMin");var o=[r];Ut("argMin",o,e.rank);for(var i=yt(e.shape,o),a=i[0],s=i[1],u=Ke(a,"int32"),c=ue(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var p=h*c,d=f[p],g=0,v=0;v<c;++v){var m=f[p+v];m<d&&(d=m,g=v)}l[h]=g}return u},t.prototype.argMax=function(e,r){X(e,"argMax");var o=[r];Ut("argMax",o,e.rank);for(var i=yt(e.shape,o),a=i[0],s=i[1],u=Ke(a,"int32"),c=ue(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var p=h*c,d=f[p],g=0,v=0;v<c;++v){var m=f[p+v];m>d&&(d=m,g=v)}l[h]=g}return u},t.prototype.cumsum=function(e,r,o,i){if(X(e,"cumsum"),r!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+r);for(var a=vt(e.dtype,"int32"),s=Ke(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=i?function(v,m){return v+l-m-1}:function(v,m){return v+m},h=0;h<c.length;h+=l)for(var p=0;p<l;p++){var d=f(h,p);if(p===0)u[d]=o?0:c[d];else{var g=f(h,p-1);u[d]=o?c[g]+u[g]:c[d]+u[g]}}return s},t.prototype.equal=function(e,r){return X([e,r],"equal"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o===i?1:0}))},t.prototype.notEqual=function(e,r){return X([e,r],"notEqual"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o!==i?1:0}))},t.prototype.less=function(e,r){return X([e,r],"less"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o<i?1:0}))},t.prototype.lessEqual=function(e,r){return X([e,r],"lessEqual"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o<=i?1:0}))},t.prototype.greater=function(e,r){return X([e,r],"greater"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o>i?1:0}))},t.prototype.greaterEqual=function(e,r){return X([e,r],"greaterEqual"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o>=i?1:0}))},t.prototype.logicalNot=function(e){X(e,"logicalNot");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,r){return X([e,r],"logicalAnd"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o&&i}))},t.prototype.logicalOr=function(e,r){return X([e,r],"logicalOr"),this.broadcastedBinaryOp(e,r,"bool",(function(o,i){return o||i}))},t.prototype.select=function(e,r,o){X([e,r,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=Ke(r.shape,vt(r.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||r.rank===1?1:ue(r.shape.slice(1)),h=0;h<i.length;h++)for(var p=0;p<f;p++)i[h]===1?c[l++]=a[h]:c[l++]=s[h];return u},t.prototype.where=function(e){X([e],"where");var r=this.readSync(e.dataId);return ku(e.shape,r)},t.prototype.topk=function(e,r,o){return X(e,"topk"),Qh(this.readSync(e.dataId),e.shape,e.dtype,r)},t.prototype.min=function(e,r){X(e,"min"),Ut("min",r,e.rank);for(var o=yt(e.shape,r),i=o[0],a=o[1],s=Ke(i,e.dtype),u=ue(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var g=l[h+d];g<p&&(p=g)}c[f]=p}return s},t.prototype.minimum=function(e,r){return X([e,r],"minimum"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){return Math.min(o,i)}))},t.prototype.mod=function(e,r){return X([e,r],"mod"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i}))},t.prototype.max=function(e,r){X(e,"max"),Ut("max",r,e.rank);for(var o=yt(e.shape,r),i=o[0],a=o[1],s=Ke(i,e.dtype),u=ue(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var g=l[h+d];g>p&&(p=g)}c[f]=p}return s},t.prototype.maximum=function(e,r){return X([e,r],"maximum"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){return Math.max(o,i)}))},t.prototype.all=function(e,r){X(e,"all"),Ut("all",r,e.rank);for(var o=yt(e.shape,r),i=o[0],a=o[1],s=Ke(i,e.dtype),u=ue(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var g=l[h+d];p=p&&g}c[f]=p}return s},t.prototype.any=function(e,r){X(e,"any"),Ut("any",r,e.rank);for(var o=yt(e.shape,r),i=o[0],a=o[1],s=Ke(i,e.dtype),u=ue(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,p=l[h],d=0;d<u;++d){var g=l[h+d];p=p||g}c[f]=p}return s},t.prototype.squaredDifference=function(e,r){return X([e,r],"squaredDifference"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){var a=o-i;return a*a}))},t.prototype.ceil=function(e){X(e,"ceil");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){X(e,"floor");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){X(e,"round");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){X(e,"exp");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){X(e,"expm1");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){X(e,"log");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){X(e,"log1p");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){X(e,"sqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){X(e,"rsqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){X(e,"reciprocal");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){X(e,"relu");for(var r=Ke(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},t.prototype.relu6=function(e){X(e,"relu");for(var r=Ke(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},t.prototype.prelu=function(e,r){return X([e,r],"prelu"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){return o<0?i*o:o}))},t.prototype.elu=function(e){X(e,"elu");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,e.shape,"float32")},t.prototype.eluDer=function(e,r){X([e,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(e){X(e,"selu");for(var r=Du,o=Tu,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,r,o){X(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,e.shape,"float32")},t.prototype.int=function(e){X(e,"int");for(var r=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,e.shape,"int32")},t.prototype.sigmoid=function(e){X(e,"sigmoid");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,e.shape,"float32")},t.prototype.softplus=function(e){X(e,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){X(e,"sin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cos=function(e){X(e,"cos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tan=function(e){X(e,"tan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asin=function(e){X(e,"asin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acos=function(e){X(e,"acos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan=function(e){X(e,"atan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan2=function(e,r){return X([e,r],"atan2"),this.broadcastedBinaryOp(e,r,e.dtype,(function(o,i){return Math.atan2(o,i)}))},t.prototype.sinh=function(e){X(e,"sinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cosh=function(e){X(e,"cosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tanh=function(e){X(e,"tanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=hm(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asinh=function(e){X(e,"asinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acosh=function(e){X(e,"acosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atanh=function(e){X(e,"atanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.erf=function(e){X(e,"erf");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,e.shape,"float32")},t.prototype.step=function(e,r){r===void 0&&(r=0),X(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(r,o,i);return a&&(c=this.add(c,a)),s&&(c=cs(this,c,s,u)),c},t.prototype.conv2d=function(e,r,o){X([e,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=xe(o.outShape,e.dtype),p=e.strides[0],d=f?e.strides[1]:e.strides[2],g=f?e.strides[2]:1,v=f?1:e.strides[1],m=h.strides[0],b=f?h.strides[1]:h.strides[2],x=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),_=this.readSync(r.dataId),k=h.values,S=0;S<o.batchSize;++S)for(var E=S*p,R=S*m,F=0;F<o.outHeight;++F)for(var N=R+F*b,V=F*o.strideHeight-l,U=0;U<i;U++){var z=V+U*s;if(!(z<0||z>=o.inHeight))for(var G=U*r.strides[0],W=E+z*d,B=0;B<o.outWidth;++B)for(var K=N+B*x,J=B*o.strideWidth-c,ne=0;ne<a;ne++){var oe=J+ne*u;if(!(oe<0||oe>=o.inWidth))for(var de=W+oe*g,_e=G+ne*r.strides[1],Ce=0;Ce<o.inChannels;++Ce){for(var we=w[de+Ce*v],Se=0;Se<o.outChannels;++Se)k[K+Se*y]+=we*_[_e+Se];_e+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,p=o.padInfo.top,d=xe(o.outShape,e.dtype),g=this.readSync(e.dataId),v=this.readSync(r.dataId),m=d.values,b=0;b<o.batchSize;++b)for(var x=b*e.strides[0],y=b*d.strides[0],w=0;w<o.outDepth;++w)for(var _=y+w*d.strides[1],k=w*o.strideDepth-f,S=0;S<i;S++){var E=k+S*u;if(!(E<0||E>=o.inDepth))for(var R=S*r.strides[0],F=x+E*e.strides[1],N=0;N<o.outHeight;++N)for(var V=_+N*d.strides[2],U=N*o.strideHeight-p,z=0;z<a;z++){var G=U+z*c;if(!(G<0||G>=o.inHeight))for(var W=R+z*r.strides[1],B=F+G*e.strides[2],K=0;K<o.outWidth;++K)for(var J=V+K*o.outChannels,ne=K*o.strideWidth-h,oe=0;oe<s;oe++){var de=ne+oe*l;if(!(de<0||de>=o.inWidth))for(var _e=W+oe*r.strides[2],Ce=B+de*o.inChannels,we=_e,Se=0;Se<o.inChannels;++Se){for(var ke=g[Ce+Se],Te=0;Te<o.outChannels;++Te)m[J+Te]+=ke*v[we+Te];we+=o.outChannels}}}}return d.toTensor()},t.prototype.conv2dDerInput=function(e,r,o){X([e,r],"conv2dDerInput");for(var i=xe(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],f=c[1],h=c[2],p=o.batchSize,d=o.filterHeight,g=o.filterWidth,v=o.inChannels,m=o.inHeight,b=o.inWidth,x=o.outChannels,y=o.outHeight,w=o.outWidth,_=o.strideHeight,k=o.strideWidth,S=o.dataFormat,E=d-1-o.padInfo.top,R=g-1-o.padInfo.left,F=S==="channelsLast",N=i.strides[0],V=F?i.strides[1]:i.strides[2],U=F?i.strides[2]:1,z=F?1:i.strides[1],G=e.strides[0],W=F?e.strides[1]:e.strides[2],B=F?e.strides[2]:1,K=F?1:e.strides[1],J=0;J<p;++J)for(var ne=0;ne<v;++ne)for(var oe=0;oe<m;++oe)for(var de=oe-E,_e=Math.max(0,Math.ceil(de/_)),Ce=Math.min(y,(d+de)/_),we=0;we<b;++we){for(var Se=we-R,ke=Math.max(0,Math.ceil(Se/k)),Te=Math.min(w,(g+Se)/k),Ve=0,Fe=_e;Fe<Ce;++Fe)for(var A=Fe*_-de,D=ke;D<Te;++D)for(var M=G*J+W*Fe+B*D,q=l*(d-1-A)+f*(g-1-(D*k-Se))+h*ne,j=0;j<x;++j)Ve+=s[M+K*j]*u[q+j];a[N*J+V*oe+U*we+z*ne]=Ve}return i.toTensor()},t.prototype.conv3dDerInput=function(e,r,o){for(var i=xe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),p=e.strides,d=p[0],g=p[1],v=p[2],m=p[3],b=this.readSync(r.dataId),x=r.strides,y=x[0],w=x[1],_=x[2],k=x[3],S=o.batchSize,E=o.filterDepth,R=o.filterHeight,F=o.filterWidth,N=o.inChannels,V=o.inDepth,U=o.inHeight,z=o.inWidth,G=o.outChannels,W=o.outDepth,B=o.outHeight,K=o.outWidth,J=o.strideDepth,ne=o.strideHeight,oe=o.strideWidth,de=E-1-o.padInfo.front,_e=R-1-o.padInfo.top,Ce=F-1-o.padInfo.left,we=0;we<S;++we)for(var Se=0;Se<N;++Se)for(var ke=0;ke<V;++ke)for(var Te=ke-de,Ve=Math.max(0,Math.ceil(Te/J)),Fe=Math.min(W,(E+Te)/J),A=0;A<U;++A)for(var D=A-_e,M=Math.max(0,Math.ceil(D/ne)),q=Math.min(B,(R+D)/ne),j=0;j<z;++j){for(var $=j-Ce,ee=Math.max(0,Math.ceil($/oe)),Q=Math.min(K,(F+$)/oe),Z=0,Y=Ve;Y<Fe;++Y)for(var pe=Y*J-Te,te=M;te<q;++te)for(var ce=te*ne-D,ve=ee;ve<Q;++ve)for(var Ae=d*we+g*Y+v*te+m*ve,Me=y*(E-1-pe)+w*(R-1-ce)+_*(F-1-(ve*oe-$))+k*Se,Re=0;Re<G;++Re)Z+=h[Ae+Re]*b[Me+Re];a[u*we+c*ke+l*A+f*j+Se]=Z}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,r,o){X([e,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=xe(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,p=this.bufferSync(e),d=this.bufferSync(r),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((h-g)/i)),m=Math.min(o.outHeight,(o.inHeight+h-g)/i),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((f-b)/a)),y=Math.min(o.outWidth,(o.inWidth+f-b)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var k=0,S=0;S<o.batchSize;++S)for(var E=v;E<m;++E)for(var R=g+E*i-h,F=x;F<y;++F){var N=b+F*a-f;k+=c?p.get(S,R,N,w)*d.get(S,E,F,_):p.get(S,w,R,N)*d.get(S,_,E,F)}l.set(k,g,b,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=xe(o.filterShape,"float32"),h=f.values,p=f.strides,d=p[0],g=p[1],v=p[2],m=p[3],b=this.readSync(r.dataId),x=r.strides,y=x[0],w=x[1],_=x[2],k=x[3],S=this.readSync(e.dataId),E=e.strides,R=E[0],F=E[1],N=E[2],V=E[3],U=o.padInfo.front,z=o.padInfo.left,G=o.padInfo.top,W=0;W<u;++W)for(var B=Math.max(0,Math.ceil((U-W)/i)),K=Math.min(o.outDepth,(o.inDepth+U-W)/i),J=W*d,ne=0;ne<c;++ne)for(var oe=Math.max(0,Math.ceil((G-ne)/a)),de=Math.min(o.outHeight,(o.inHeight+G-ne)/a),_e=ne*g+J,Ce=0;Ce<l;++Ce)for(var we=Math.max(0,Math.ceil((z-Ce)/s)),Se=Math.min(o.outWidth,(o.inWidth+z-Ce)/s),ke=Ce*v+_e,Te=0;Te<o.inChannels;++Te)for(var Ve=Te*m+ke,Fe=0;Fe<o.outChannels;++Fe){for(var A=0,D=0;D<o.batchSize;++D)for(var M=D*R,q=D*y,j=B;j<K;++j)for(var $=(W+j*i-U)*F+M,ee=j*w+q,Q=oe;Q<de;++Q)for(var Z=(ne+Q*a-G)*N+$,Y=Q*_+ee,pe=we;pe<Se;++pe){var te=pe*k+Y;A+=S[(Ce+pe*s-z)*V+Z+Te]*b[te+Fe]}h[Ve+Fe]=A}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(r,o,i);return a&&(c=this.add(c,a)),s&&(c=cs(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,r,o){X([e,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=xe(o.outShape,e.dtype),p=this.readSync(e.dataId),d=this.readSync(r.dataId),g=h.values,v=0;v<o.batchSize;++v)for(var m=v*e.strides[0],b=v*h.strides[0],x=0;x<o.outHeight;++x)for(var y=b+x*h.strides[1],w=x*o.strideHeight-c,_=0;_<i;++_){var k=w+_*s;if(!(k<0||k>=o.inHeight))for(var S=_*r.strides[0],E=m+k*e.strides[1],R=0;R<o.outWidth;++R)for(var F=y+R*h.strides[2],N=R*o.strideWidth-l,V=0;V<a;++V){var U=N+V*u;if(!(U<0||U>=o.inWidth))for(var z=S+V*r.strides[1],G=E+U*o.inChannels,W=F,B=z,K=0;K<o.inChannels;++K){for(var J=p[G+K],ne=0;ne<f;++ne)g[W+ne]+=J*d[B+ne];W+=f,B+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,r,o){X([e,r],"depthwiseConv2DDerInput");for(var i=xe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,p=h[0],d=h[1],g=h[2],v=this.readSync(r.dataId),m=r.strides,b=m[0],x=m[1],y=m[2],w=o.batchSize,_=o.filterHeight,k=o.filterWidth,S=o.inChannels,E=o.inHeight,R=o.inWidth,F=o.outChannels,N=o.outHeight,V=o.outWidth,U=o.strideHeight,z=o.strideWidth,G=_-1-o.padInfo.top,W=k-1-o.padInfo.left,B=F/S,K=0;K<w;++K)for(var J=0;J<S;++J)for(var ne=0;ne<E;++ne)for(var oe=ne-G,de=Math.max(0,Math.ceil(oe/U)),_e=Math.min(N,(_+oe)/U),Ce=0;Ce<R;++Ce){for(var we=Ce-W,Se=Math.max(0,Math.ceil(we/z)),ke=Math.min(V,(k+we)/z),Te=0,Ve=de;Ve<_e;++Ve)for(var Fe=Ve*U-oe,A=Se;A<ke;++A)for(var D=p*K+d*Ve+g*A,M=b*(_-1-Fe)+x*(k-1-(A*z-we))+y*J,q=0;q<B;++q)Te+=f[D+(J*B+q)]*v[M+q];a[u*K+c*ne+l*Ce+J]=Te}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){X([e,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=xe(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,p=this.bufferSync(e),d=this.bufferSync(r),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((f-g)/i)),m=Math.min(o.outHeight,(o.inHeight+f-g)/i),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((l-b)/a)),y=Math.min(o.outWidth,(o.inWidth+l-b)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/h),k=w%h,S=0,E=0;E<o.batchSize;++E)for(var R=v;R<m;++R)for(var F=g+R*i-f,N=x;N<y;++N){var V=b+N*a-l;S+=p.get(E,F,V,_)*d.get(E,R,N,w)}c.set(S,g,b,_,k)}return c.toTensor()},t.prototype.tile=function(e,r){return X(e,"tile"),Jh(this.bufferSync(e),r)},t.prototype.pad=function(e,r,o){X(e,"pad");var i=r.map((function(h,p){return h[0]+e.shape[p]+h[1]})),a=r.map((function(h){return h[0]})),s=this.bufferSync(e),u=xe(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map((function(h,p){return h+a[p]}));u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,r){X(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[r[i]];var a=this.readSync(e.dataId),s=xe(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[r[f]];var h=s.locToIndex(l);s.values[h]=a[i]}return s.toTensor()},t.prototype.gather=function(e,r,o){X([e,r],"gather");var i=e.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=xe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=a[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,r,o){X([e],"batchToSpaceND");var i=r.reduce((function(f,h){return f*h})),a=qi(e.shape,r,i),s=Ki(a.length,r.length),u=$i(e.shape,r,i),c=Lh(o,r.length),l=Wh(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){X([e],"spaceToBatchND");var i=r.reduce((function(h,p){return h*p})),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=qi(u.shape,r,i,!1),l=Ki(c.length,r.length,!1),f=$i(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,r,o){X(e,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),g=xe(r.outShape,e.dtype),v=g.values,m=r.outShape[1]*r.outShape[2]*r.outShape[3],b=r.outShape[2]*r.outShape[3],x=r.outShape[3],y=0;y<r.batchSize;++y)for(var w=y*m,_=y*e.strides[0],k=0;k<r.inChannels;++k)for(var S=0;S<r.outHeight;++S)for(var E=S*i-f,R=Math.max(0,E),F=Math.min(r.inHeight,c+E),N=w+S*b,V=0;V<r.outWidth;++V){for(var U=V*a-h,z=Math.max(0,U),G=Math.min(r.inWidth,l+U),W=p,B=0,K=0,J=R;J<F;J+=s){for(var ne=_+J*e.strides[1],oe=z;oe<G;oe+=u){var de=d[ne+oe*e.strides[2]+k];o==="max"&&de>W?W=de:o==="avg"&&(B+=de,K++)}if(isNaN(W))break}v[N+V*x+k]=o==="avg"?B/K:W}return g.toTensor()},t.prototype.maxPool=function(e,r){return this.pool(e,r,"max")},t.prototype.maxPoolPositions=function(e,r){for(var o=xe(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,p=this.bufferSync(e),d=0;d<r.batchSize;++d)for(var g=0;g<r.inChannels;++g)for(var v=0;v<r.outHeight;++v){for(var m=v*i-f,b=m;b<0;)b+=s;for(var x=Math.min(r.inHeight,c+m),y=0;y<r.outWidth;++y){for(var w=y*a-h,_=w;_<0;)_+=u;for(var k=Math.min(r.inWidth,l+w),S=Number.NEGATIVE_INFINITY,E=-1,R=b;R<x;R+=s)for(var F=R-m,N=_;N<k;N+=u){var V=N-w,U=p.get(d,R,N,g);U>S&&(S=U,E=F*l+V)}o.set(E,d,v,y,g)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,r,o,i){X([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,f=i.effectiveFilterHeight,h=i.effectiveFilterWidth,p=h-1-i.padInfo.left,d=f-1-i.padInfo.top,g=xe(r.shape,"float32"),v=this.bufferSync(a),m=this.bufferSync(e),b=0;b<i.batchSize;++b)for(var x=0;x<i.inChannels;++x)for(var y=0;y<i.inHeight;++y)for(var w=0;w<i.inWidth;++w){for(var _=y-d,k=w-p,S=0,E=0;E<f;E+=c){var R=(_+E)/s;if(!(R<0||R>=i.outHeight||Math.floor(R)!==R))for(var F=0;F<h;F+=l){var N=(k+F)/u;if(!(N<0||N>=i.outWidth||Math.floor(N)!==N)){var V=f*h-1-v.get(b,R,N,x)===E*h+F?1:0;V!==0&&(S+=m.get(b,R,N,x)*V)}}}g.set(S,b,y,w,x)}return g.toTensor()},t.prototype.avgPoolBackprop=function(e,r,o){X([e,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,p=h-1-o.padInfo.left,d=f-1-o.padInfo.top,g=xe(r.shape,"float32"),v=1/(s*u),m=this.bufferSync(e),b=0;b<o.batchSize;++b)for(var x=0;x<o.inChannels;++x)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var _=y-d,k=w-p,S=0,E=0;E<f;E+=c){var R=(_+E)/i;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var F=0;F<h;F+=l){var N=(k+F)/a;N<0||N>=o.outWidth||Math.floor(N)!==N||(S+=m.get(b,R,N,x))}}g.set(S*v,b,y,w,x)}return g.toTensor()},t.prototype.pool3d=function(e,r,o){X(e,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,p=r.effectiveFilterWidth,d=r.padInfo.front,g=r.padInfo.top,v=r.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=this.readSync(e.dataId),x=xe(r.outShape,e.dtype),y=x.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],_=r.outShape[2]*r.outShape[3]*r.outShape[4],k=r.outShape[3]*r.outShape[4],S=r.outShape[4],E=0;E<r.batchSize;++E)for(var R=E*w,F=E*e.strides[0],N=0;N<r.inChannels;++N)for(var V=0;V<r.outDepth;++V){for(var U=V*i-d,z=U;z<0;)z+=u;for(var G=Math.min(r.inDepth,f+U),W=R+V*_,B=0;B<r.outHeight;++B){for(var K=B*a-g,J=K;J<0;)J+=c;for(var ne=Math.min(r.inHeight,h+K),oe=W+B*k,de=0;de<r.outWidth;++de){for(var _e=de*s-v,Ce=_e;Ce<0;)Ce+=l;for(var we=Math.min(r.inWidth,p+_e),Se=oe+de*S,ke=m,Te=0,Ve=0,Fe=z;Fe<G;Fe+=u){for(var A=F+Fe*e.strides[1],D=J;D<ne;D+=c){for(var M=A+D*e.strides[2],q=Ce;q<we;q+=l){var j=b[M+q*e.strides[3]+N];if(o==="max"&&j>ke?ke=j:o==="avg"&&(Te+=j,Ve++),isNaN(ke))break}if(isNaN(ke))break}if(isNaN(ke))break}y[Se+N]=o==="avg"?Te/Ve:ke}}}return x.toTensor()},t.prototype.avgPool3d=function(e,r){return X(e,"avgPool3d"),this.pool3d(e,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,r,o){X([e,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterDepth,g=o.effectiveFilterHeight,v=o.effectiveFilterWidth,m=d-1-o.padInfo.front,b=v-1-o.padInfo.left,x=g-1-o.padInfo.top,y=xe(r.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),k=0;k<o.batchSize;++k)for(var S=0;S<o.inChannels;++S)for(var E=0;E<o.inDepth;++E)for(var R=0;R<o.inHeight;++R)for(var F=0;F<o.inWidth;++F){for(var N=E-m,V=R-x,U=F-b,z=0,G=0;G<d;G+=f){var W=(N+G)/i;if(!(W<0||W>=o.outDepth||Math.floor(W)!==W))for(var B=0;B<g;B+=h){var K=(V+B)/a;if(!(K<0||K>=o.outHeight||Math.floor(K)!==K))for(var J=0;J<v;J+=p){var ne=(U+J)/s;ne<0||ne>=o.outWidth||Math.floor(ne)!==ne||(z+=_.get(k,W,K,ne,S))}}}y.set(z*w,k,E,R,F,S)}return y.toTensor()},t.prototype.maxPool3d=function(e,r){return X(e,"maxPool3d"),this.pool3d(e,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,r){for(var o=xe(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,p=r.effectiveFilterWidth,d=r.padInfo.front,g=r.padInfo.top,v=r.padInfo.left,m=this.bufferSync(e),b=0;b<r.batchSize;++b)for(var x=0;x<r.inChannels;++x)for(var y=0;y<r.outDepth;++y){for(var w=y*i-d,_=w;_<0;)_+=u;for(var k=Math.min(r.inDepth,f+w),S=0;S<r.outHeight;++S){for(var E=S*a-g,R=E;R<0;)R+=c;for(var F=Math.min(r.inHeight,h+E),N=0;N<r.outWidth;++N){for(var V=N*s-v,U=V;U<0;)U+=l;for(var z=Math.min(r.inWidth,p+V),G=Number.NEGATIVE_INFINITY,W=-1,B=_;B<k;B+=u)for(var K=B-w,J=R;J<F;J+=c)for(var ne=J-E,oe=U;oe<z;oe+=l){var de=oe-V,_e=m.get(b,B,J,oe,x);_e>=G&&(G=_e,W=K*h*p+ne*h+de)}o.set(W,b,y,S,N,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,r,o,i){X([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,f=i.dilationHeight,h=i.dilationWidth,p=i.effectiveFilterDepth,d=i.effectiveFilterHeight,g=i.effectiveFilterWidth,v=p-1-i.padInfo.front,m=g-1-i.padInfo.left,b=d-1-i.padInfo.top,x=xe(r.shape,"float32"),y=this.bufferSync(a),w=this.bufferSync(e),_=0;_<i.batchSize;++_)for(var k=0;k<i.inChannels;++k)for(var S=0;S<i.inDepth;++S)for(var E=0;E<i.inHeight;++E)for(var R=0;R<i.inWidth;++R){for(var F=S-v,N=E-b,V=R-m,U=0,z=0;z<p;z+=l){var G=(F+z)/s;if(!(G<0||G>=i.outDepth||Math.floor(G)!==G))for(var W=0;W<d;W+=f){var B=(N+W)/u;if(!(B<0||B>=i.outHeight||Math.floor(B)!==B))for(var K=0;K<g;K+=h){var J=(V+K)/c;if(!(J<0||J>=i.outWidth||Math.floor(J)!==J)){var ne=p*d*g-1-y.get(_,G,B,J,k)===z*d*g+W*g+K?1:0;ne!==0&&(U+=w.get(_,G,B,J,k)*ne)}}}}x.set(U,_,S,E,R,k)}return x.toTensor()},t.prototype.cast=function(e,r){return Kh(e,r,this)},t.prototype.reshape=function(e,r){return Hs(e,r)},t.prototype.avgPool=function(e,r){return X(e,"avgPool"),this.pool(e,r,"avg").toFloat()},t.prototype.resizeBilinear=function(e,r,o,i){X(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(ue([s,r,o,l])),p=[i&&r>1?u-1:u,i&&o>1?c-1:c],d=[i&&r>1?r-1:r,i&&o>1?o-1:o],g=0,v=p[0]/d[0],m=p[1]/d[1],b=0;b<s;b++)for(var x=0;x<r;x++)for(var y=v*x,w=Math.floor(y),_=y-w,k=Math.min(u-1,Math.ceil(y)),S=b*e.strides[0]+w*e.strides[1],E=b*e.strides[0]+k*e.strides[1],R=0;R<o;R++)for(var F=m*R,N=Math.floor(F),V=F-N,U=Math.min(c-1,Math.ceil(F)),z=S+N*e.strides[2],G=E+N*e.strides[2],W=S+U*e.strides[2],B=E+U*e.strides[2],K=0;K<l;K++){var J=f[z+K],ne=f[G+K],oe=J+(f[W+K]-J)*V,de=oe+(ne+(f[B+K]-ne)*V-oe)*_;h[g++]=de}return gt(h,[s,r,o,l])},t.prototype.resizeBilinearBackprop=function(e,r,o){X([e,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],p=new Float32Array(a*s*u*c),d=[o&&f>1?s-1:s,o&&h>1?u-1:u],g=[o&&f>1?f-1:f,o&&h>1?h-1:h],v=d[0]/g[0],m=d[1]/g[1],b=this.readSync(e.dataId),x=0,y=0;y<a;y++)for(var w=y*r.strides[0],_=0;_<f;_++)for(var k=_*v,S=Math.floor(k),E=Math.min(Math.ceil(k),s-1),R=w+S*r.strides[1],F=w+E*r.strides[1],N=k-S,V=1-N,U=0;U<h;U++)for(var z=U*m,G=Math.floor(z),W=Math.min(Math.ceil(z),u-1),B=z-G,K=1-B,J=R+G*r.strides[2],ne=R+W*r.strides[2],oe=F+G*r.strides[2],de=F+W*r.strides[2],_e=V*K,Ce=V*B,we=N*K,Se=N*B,ke=0;ke<c;ke++){var Te=b[x++];p[J+ke]+=Te*_e,p[ne+ke]+=Te*Ce,p[oe+ke]+=Te*we,p[de+ke]+=Te*Se}return Pt(p,[a,u,s,c],r.dtype)},t.prototype.resizeNearestNeighbor=function(e,r,o,i){X(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(s*r*o*l),p=[i&&r>1?u-1:u,i&&o>1?c-1:c],d=[i&&r>1?r-1:r,i&&o>1?o-1:o],g=p[0]/d[0],v=p[1]/d[1],m=0,b=0;b<s;b++)for(var x=b*e.strides[0],y=0;y<r;y++)for(var w=g*y,_=x+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],k=0;k<o;k++)for(var S=v*k,E=_+Math.min(c-1,i?Math.round(S):Math.floor(S))*e.strides[2],R=0;R<l;R++){var F=f[E+R];h[m++]=F}return gt(h,[s,r,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){X([e,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],p=new Float32Array(a*s*u*c),d=this.readSync(e.dataId),g=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=g[0]/v[0],b=g[1]/v[1],x=1/m,y=1/b,w=2*Math.ceil(x)+2,_=2*Math.ceil(y)+2,k=0;k<a;k++)for(var S=k*r.strides[0],E=0;E<s;E++)for(var R=S+E*r.strides[1],F=Math.floor(E*x),N=Math.floor(F-w/2),V=0;V<u;V++)for(var U=R+V*r.strides[2],z=Math.floor(V*y),G=Math.floor(z-_/2),W=0;W<c;W++){for(var B=0,K=0;K<w;K++){var J=K+N;if(!(J<0||J>=f)){var ne=S+J*e.strides[1],oe=J*m;if(E===Math.min(s-1,o?Math.round(oe):Math.floor(oe)))for(var de=0;de<_;de++){var _e=de+G;if(!(_e<0||_e>=h)){var Ce=ne+_e*e.strides[2],we=_e*b;V===Math.min(u-1,o?Math.round(we):Math.floor(we))&&(B+=d[Ce+W])}}}}p[U+W]=B}return Pt(p,r.shape,r.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){X([e,r,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),d=h.length,g=f.length,v=l.length,m=c.length,b=0,x=0,y=0,w=0,_=0;_<u.length;++_)p[_]=h[b++]+(u[_]-c[x++])*f[y++]/Math.sqrt(l[w++]+i),b>=d&&(b=0),x>=m&&(x=0),y>=g&&(y=0),w>=v&&(w=0);return Pt(p,e.shape)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){X(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(v){for(var m=v%s,b=v-m+Math.max(0,m-r),x=v-m+Math.min(m+r,u),y=0;b<=x;b++){var w=c[b];y+=w*w}return y}for(var p=0;p<l;p++){var d=h(p),g=c[p]*Math.pow(o+i*d,-a);f[p]=g}return Pt(f,e.shape)},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){X(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=this.readSync(o.dataId),p=new Float32Array(e.size),d=e.size,g=0;g<d;g++){for(var v=g%c,m=g-v+Math.max(0,v-i),b=g-v+Math.min(c,v+i+1),x=0,y=m;y<b;y++)x+=Math.pow(f[y],2);for(x=s*x+a,y=m;y<b;y++){var w=-2*s*u*f[y]*h[g]/x;g===y&&(w+=Math.pow(x,-u)),w*=l[g],p[y]+=w}}return Pt(p,e.shape)},t.prototype.multinomial=function(e,r,o,i){X(e,"multinomial");for(var a=r?e:qn(e),s=a.shape[0],u=a.shape[1],c=Ke([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(a.dataId),h=0;h<s;++h){var p=h*u,d=new Float32Array(u-1);d[0]=f[p];for(var g=1;g<d.length;++g)d[g]=d[g-1]+f[p+g];for(var v=wa(i.toString()),m=h*o,b=0;b<o;++b){var x=v();l[m+b]=d.length;for(var y=0;y<d.length;y++)if(x<d[y]){l[m+b]=y;break}}}return c},t.prototype.oneHot=function(e,r,o,i){X(e,"oneHot");var a=new Float32Array(e.size*r);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return ar(a,[e.size,r],"int32")},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return X(e,"nonMaxSuppression"),Ru(this.readSync(e.dataId),this.readSync(r.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,r){for(var o=e.shape[0],i=e.shape[1],a=xe(e.shape,"float32"),s=xe(e.shape,"float32"),u=Jt(e).as2D(o,i),c=bn(e).as2D(o,i),l=0;l<o;l++)for(var f=u.slice([l,0],[1,i]),h=c.slice([l,0],[1,i]),p=dt(f,h),d=this.readSync(this.fftImpl(p,r).dataId),g=0;g<i;g++){var v=gl(d,g);a.values[l*i+g]=v.real,s.values[l*i+g]=v.imag}return dt(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,r){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(e.shape[0],e.shape[1]);return r&&(a=dt(Jt(a).div(re(i)),bn(a).div(re(i)))),a}var s=this.readSync(e.dataId),u=(function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}})(this.fourierTransformByMatmul(s,i,r));return dt(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,r,o){if(r===1)return e;var i=this.readSync(e.dataId),a=r/2,s=(function(m){for(var b=Math.ceil(m.length/4),x=new Float32Array(b),y=new Float32Array(b),w=0;w<m.length;w+=4)x[Math.floor(w/4)]=m[w],y[Math.floor(w/4)]=m[w+1];return{real:x,imag:y}})(i),u=dt(s.real,s.imag).as1D(),c=(function(m){for(var b=Math.floor(m.length/4),x=new Float32Array(b),y=new Float32Array(b),w=2;w<m.length;w+=4)x[Math.floor(w/4)]=m[w],y[Math.floor(w/4)]=m[w+1];return{real:x,imag:y}})(i),l=dt(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var f=(function(m,b){for(var x=new Float32Array(m/2),y=new Float32Array(m/2),w=0;w<Math.ceil(m/2);w++){var _=(b?2:-2)*Math.PI*(w/m);x[w]=Math.cos(_),y[w]=Math.sin(_)}return{real:x,imag:y}})(r,o),h=dt(f.real,f.imag).mul(l),p=u.add(h),d=u.sub(h),g=Jt(p).concat(Jt(d)),v=bn(p).concat(bn(d));return dt(g,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,c=0;c<r;c++){var l=jy(a*c,r,o),f=gl(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=r,u/=r),Gy(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,r,o){I(o==="NHWC",(function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o})),I(r>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+r}));for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*r,l=s*r,f=u/(r*r),h=this.readSync(e.dataId),p=new Float32Array(i*c*l*f),d=0,g=0;g<i;++g)for(var v=0;v<c;++v)for(var m=Math.floor(v/r),b=v%r,x=0;x<l;++x)for(var y=Math.floor(x/r),w=(b*r+x%r)*f,_=0;_<f;++_){var k=_+w+u*(y+s*(m+a*g));p[d++]=h[k]}return Pt(p,[i,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,r,o,i){var a=Ne(e.shape,r.shape),s=xe(a,o),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=nr(e.shape,a),f=nr(r.shape,a),h=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;++p)h[p]=i(u[p%u.length],c[p%c.length]);else{var d=this.bufferSync(e),g=this.bufferSync(r),v=function(m){var b=s.indexToLoc(m),x=b.slice(-e.rank);l.forEach((function(k){return x[k]=0}));var y=d.locToIndex(x),w=b.slice(-r.rank);f.forEach((function(k){return w[k]=0}));var _=g.locToIndex(w);h[m]=i(u[y],c[_])};for(p=0;p<h.length;++p)v(p)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,r,o){var i=Ne(e.shape,r.shape),a=xe(i,"float32"),s=xe(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=nr(e.shape,i),f=nr(r.shape,i),h=a.values,p=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;d++){var g=d%u.length,v=d%c.length,m=o(u[2*g],u[2*g+1],c[2*v],c[2*v+1]);h[d]=m.real,p[d]=m.imag}else{var b=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),y=function(w){var _=a.indexToLoc(w),k=_.slice(-e.rank);l.forEach((function(N){return k[N]=0}));var S=b.locToIndex(k),E=_.slice(-r.rank);f.forEach((function(N){return E[N]=0}));var R=x.locToIndex(E),F=o(u[2*S],u[2*S+1],c[2*R],c[2*R+1]);h[w]=F.real,p[w]=F.imag};for(d=0;d<h.length;d++)y(d)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,r,o){return Yh(e,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,r,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],p=r.shape[0],d=i[0],g=i[1],v=xe([p,d,g,h],"float32"),m=this.readSync(r.dataId),b=this.readSync(o.dataId),x=this.readSync(e.dataId),y=e.strides,w=v.strides,_=0;_<p;_++){var k=4*_,S=m[k],E=m[k+1],R=m[k+2],F=m[k+3],N=b[_];if(!(N>=c))for(var V=d>1?(R-S)*(l-1)/(d-1):0,U=g>1?(F-E)*(f-1)/(g-1):0,z=0;z<d;z++){var G=d>1?S*(l-1)+z*V:.5*(S+R)*(l-1);if(G<0||G>l-1)for(var W=0;W<g;W++)for(var B=0;B<h;B++){var K=B+W*w[2]+z*w[1]+_*w[0];v.values[K]=s}else if(a==="bilinear"){var J=Math.floor(G),ne=Math.ceil(G),oe=G-J;for(W=0;W<g;W++)if((Fe=g>1?E*(f-1)+W*U:.5*(E+F)*(f-1))<0||Fe>f-1)for(B=0;B<h;B++)K=B+W*w[2]+z*w[1]+_*w[0],v.values[K]=s;else{var de=Math.floor(Fe),_e=Math.ceil(Fe),Ce=Fe-de;for(B=0;B<h;B++){var we=x[K=B+de*y[2]+J*y[1]+N*y[0]],Se=x[K=B+_e*y[2]+J*y[1]+N*y[0]],ke=x[K=B+de*y[2]+ne*y[1]+N*y[0]],Te=we+(Se-we)*Ce,Ve=ke+(x[K=B+_e*y[2]+ne*y[1]+N*y[0]]-ke)*Ce;K=B+W*w[2]+z*w[1]+_*w[0],v.values[K]=Te+(Ve-Te)*oe}}}else for(W=0;W<g;++W){var Fe;if((Fe=g>1?E*(f-1)+W*U:.5*(E+F)*(f-1))<0||Fe>f-1)for(B=0;B<h;B++)K=B+W*w[2]+z*w[1]+_*w[0],v.values[K]=s;else{var A=Math.round(Fe),D=Math.round(G);for(B=0;B<h;B++){var M=B+A*y[2]+D*y[1]+N*y[0],q=B+W*w[2]+z*w[1]+_*w[0];v.values[q]=x[M]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,r,o,i){var a=Xi(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,f=a.outputSize;return this.scatter(e,r,o,f,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=Uh(e,r),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return gt([],s,e.dtype);for(var f=new Vo([u,c],e.dtype),h=this.readSync(r.dataId),p=this.readSync(e.dataId),d=0;d<u;d++){for(var g=[],v=0,m=0;m<i;m++){var b=h[d*i+m];v+=b*l[m],g.push(b)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+g+" does not index into "+e.shape);for(var x=0;x<c;x++)f.values[d*c+x]=p[v*c+x]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,r,o){var i=Xi(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=re(0);return this.scatter(e,r,o,l,u,s,a,c,f,!0)},t.prototype.fill=function(e,r,o){var i=Wi(o=o||Jo(r),ue(e));return i.fill(r),P.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var r=Wi(e.dtype,ue(e.shape));return this.makeOutput(r,e.shape,e.dtype)},t.prototype.linspace=function(e,r,o){return $h(e,r,o)},t.prototype.scatter=function(e,r,o,i,a,s,u,c,l,f){var h=[i/a,a],p=this.readSync(e.dataId),d=this.readSync(r.dataId);if(i===0)return gt([],o,r.dtype);var g=new Vo(h,r.dtype);g.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var m=[],b=0,x=0;x<u;x++){var y=p[v*u+x];m.push(y),b+=y*c[x]}if(b<0||b>=i/a)throw new Error("Invalid indices: "+m+" does not index into "+o);for(var w=0;w<a;w++)f?g.values[b*a+w]+=d[v*a+w]:g.values[b*a+w]=r.rank===0?d[0]:d[v*a+w]}return g.toTensor().reshape(o)},t})(jh);P.registerBackend("cpu",(function(){return new fw}),1);for(var ls=0,Ll=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;X(i,"NonMaxSuppressionWithScore");var p=Su(h.data.get(i.dataId).values,h.data.get(a.dataId).values,u,c,l,f);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e;X(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:Go,backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e;X([o,i],Go);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=(function(h,p,d,g,v,m){var b=Ne(h,p),x=b.length,y=Cn(b),w=Uo(v,ue(b)),_=h.length,k=p.length,S=Cn(h),E=Cn(p),R=nr(h,b),F=nr(p,b);if(R.length+F.length===0)for(var N=0;N<w.length;++N)w[N]=m(d[N%d.length],g[N%g.length]);else{var V=function(U){var z=wm(U,x,y),G=z.slice(-_);R.forEach((function(J){return G[J]=0}));var W=sl(G,_,S),B=z.slice(-k);F.forEach((function(J){return B[J]=0}));var K=sl(B,k,E);w[U]=m(d[W],g[K])};for(N=0;N<w.length;++N)V(N)}return[w,b]})(o.shape,i.shape,s,u,o.dtype,(function(h,p){var d=h-p;return d*d})),l=c[0],f=c[1];return{dataId:a.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];ls<Ll.length;ls++)bh(Ll[ls]);var Vr,hw=function(n){this.variableNames=["A"];var t=wt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},pw=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=wt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var fs=0,Wl=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,i];(s||a)&&(Vr==null&&(Vr=document.createElement("canvas").getContext("2d")),Vr.canvas.width=c,Vr.canvas.height=l,Vr.drawImage(o,0,0,c,l),o=Vr.canvas);var p=e.makeTensorInfo(f,"int32");e.texData.get(p.dataId).usage=Ht.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(p.dataId),o);var d=H().getBool("WEBGL_PACK")?new pw(h):new hw(h),g=e.runWebGLProgram(d,[p],"int32");return e.disposeData(p.dataId),g}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs;Hi("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,p=Su(h.readSync(i.dataId),h.readSync(a.dataId),u,c,l,f);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e,i=new Ee(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:Go,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e,s=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Mn("return (a - b) * (a - b);",o.shape,i.shape):new Je("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];fs<Wl.length;fs++)bh(Wl[fs]);for(var hs=0,Ul=[{kernelName:"Square",gradFunc:function(n,t){var e=t[0];return{x:function(){return n.mul(e.toFloat().mul(2))}}}},{kernelName:Go,gradFunc:function(n,t){var e=t[0],r=t[1],o=re(2);return{a:function(){return Ct(n,Ct(o,st(e,r)))},b:function(){return Ct(n,Ct(o,st(r,e)))}}}}];hs<Ul.length;hs++)lm(Ul[hs]);var dw=(function(){function n(){}return n.prototype.fetch=function(t,e){return fetch(t,e)},n.prototype.now=function(){return performance.now()},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},n})();H().get("IS_BROWSER")&&H().setPlatform("browser",new dw);var ps,vw=function(){return require("node-fetch")},gw=(function(){function n(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return n.prototype.fetch=function(t,e){return H().global.fetch!=null?H().global.fetch(t,e):(ps==null&&(ps=vw()),ps(t,e))},n.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},n})();H().get("IS_NODE")&&H().setPlatform("node",new gw);var qs={float32:4,int32:4,uint16:2,uint8:1,bool:1},na=4;function zp(n,t){for(var e={},r=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=ue(l),h=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=qs[p.dtype],g=n.slice(r,r+f*d),v=p.dtype==="uint8"?new Uint8Array(g):new Uint16Array(g);if(c==="float32")h=Float32Array.from(v,(function(_){return _*p.scale+p.min}));else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(v,(function(_){return Math.round(_*p.scale+p.min)}))}r+=f*d}else if(c==="string"){var m=ue(s.shape);h=[];for(var b=0;b<m;b++){var x=new Uint32Array(n.slice(r,r+na))[0];r+=na;var y=new Uint8Array(n.slice(r,r+x));h.push(y),r+=x}}else{var w=qs[c];if(g=n.slice(r,r+f*w),c==="float32")h=new Float32Array(g);else if(c==="int32")h=new Int32Array(g);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(g)}r+=f*w}e[u]=gt(h,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function mw(n){if(n===null)throw new Error("Invalid input value: "+JSON.stringify(n));var t=0,e=[];n.forEach((function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)}));var r=new Uint8Array(t),o=0;return e.forEach((function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength})),r.buffer}var Ks=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Vl(n){return Ks?Buffer.byteLength(n):new Blob([n]).size}function qu(n){var t=0;n.forEach((function(o){t+=o.byteLength}));var e=new Uint8Array(t),r=0;return n.forEach((function(o){e.set(new Uint8Array(o),r),r+=o.byteLength})),e.buffer}function zl(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);var t=n.split("/");return t[t.length-1]}function oi(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:Vl(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:Vl(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}var Gt=(function(){function n(){this.saveRouters=[],this.loadRouters=[]}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerSaveRouter=function(t){n.getInstance().saveRouters.push(t)},n.registerLoadRouter=function(t){n.getInstance().loadRouters.push(t)},n.getSaveHandlers=function(t){return n.getHandlers(t,"save")},n.getLoadHandlers=function(t,e){return n.getHandlers(t,"load",e)},n.getHandlers=function(t,e,r){var o=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach((function(i){var a=i(t,r);a!==null&&o.push(a)})),o},n})(),no="://",sr=(function(){function n(){this.managers={}}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerManager=function(t,e){I(t!=null,(function(){return"scheme must not be undefined or null."})),t.endsWith(no)&&(t=t.slice(0,t.indexOf(no))),I(t.length>0,(function(){return"scheme must not be an empty string."}));var r=n.getInstance();I(r.managers[t]==null,(function(){return"A model store manager is already registered for scheme '"+t+"'."})),r.managers[t]=e},n.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},n.getSchemes=function(){return Object.keys(this.getInstance().managers)},n})();function Di(n){if(n.indexOf(no)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+sr.getSchemes().join(","));return{scheme:n.split(no)[0],path:n.split(no)[1]}}function Hl(n,t,e){return e===void 0&&(e=!1),ae(this,void 0,void 0,(function(){var r,o,i,a,s,u,c,l,f;return se(this,(function(h){switch(h.label){case 0:return I(n!==t,(function(){return"Old path and new path are the same: '"+n+"'"})),I((r=Gt.getLoadHandlers(n)).length>0,(function(){return"Copying failed because no load handler is found for source URL "+n+"."})),I(r.length<2,(function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+n+"."})),o=r[0],I((i=Gt.getSaveHandlers(t)).length>0,(function(){return"Copying failed because no save handler is found for destination URL "+t+"."})),I(i.length<2,(function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."})),a=i[0],s=Di(n).scheme,u=Di(n).path,c=s===Di(n).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,sr.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,a.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,sr.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}}))}))}var Ir="models_store",rr="model_info_store";function Hp(){if(!H().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var n=window||self,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function $s(n){var t=n.result;t.createObjectStore(Ir,{keyPath:"modelPath"}),t.createObjectStore(rr,{keyPath:"modelPath"})}var ro=(function(){function n(t){if(this.indexedDB=Hp(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return n.prototype.save=function(t){return ae(this,void 0,void 0,(function(){return se(this,(function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]}))}))},n.prototype.load=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(t){return[2,this.databaseAction(this.modelPath)]}))}))},n.prototype.databaseAction=function(t,e){var r=this;return new Promise((function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return $s(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction(Ir,"readonly"),c=u.objectStore(Ir).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(g){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=oi(e),h=s.transaction(rr,"readwrite"),p=h.objectStore(rr),d=p.put({modelPath:r.modelPath,modelArtifactsInfo:f});d.onsuccess=function(){var g=(l=s.transaction(Ir,"readwrite")).objectStore(Ir).put({modelPath:r.modelPath,modelArtifacts:e,modelArtifactsInfo:f});g.onsuccess=function(){return o({modelArtifactsInfo:f})},g.onerror=function(v){var m=(p=h.objectStore(rr)).delete(r.modelPath);m.onsuccess=function(){return s.close(),i(g.error)},m.onerror=function(b){return s.close(),i(g.error)}}},d.onerror=function(g){return s.close(),i(d.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}}))},n.URL_SCHEME="indexeddb://",n})(),Gl=function(n){return H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ro.URL_SCHEME)?(t=n.slice(ro.URL_SCHEME.length),new ro(t)):null;var t};Gt.registerSaveRouter(Gl),Gt.registerLoadRouter(Gl);var yw=(function(){function n(){this.indexedDB=Hp()}return n.prototype.listModels=function(){return ae(this,void 0,void 0,(function(){var t=this;return se(this,(function(e){return[2,new Promise((function(r,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return $s(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(rr,"readonly"),u=s.objectStore(rr).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}r(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}}))]}))}))},n.prototype.removeModel=function(t){return ae(this,void 0,void 0,(function(){var e=this;return se(this,(function(r){var o;return t=(o=t).startsWith(ro.URL_SCHEME)?o.slice(ro.URL_SCHEME.length):o,[2,new Promise((function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return $s(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(rr,"readwrite"),f=l.objectStore(rr),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var p=f.delete(t),d=function(){var g=(u=c.transaction(Ir,"readwrite")).objectStore(Ir).delete(t);g.onsuccess=function(){return i(h.result.modelArtifactsInfo)},g.onerror=function(v){return a(h.error)}};p.onsuccess=d,p.onerror=function(g){return d(),c.close(),a(h.error)}},h.onerror=function(p){return c.close(),a(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}}))]}))}))},n})();if(H().getBool("IS_BROWSER"))try{sr.registerManager(ro.URL_SCHEME,new yw)}catch{}var Wn="/",$r="tensorflowjs_models",Gp="info",bw="model_topology",xw="weight_specs",ww="weight_data",_w="model_metadata";function jp(n){return{info:[$r,n,Gp].join(Wn),topology:[$r,n,bw].join(Wn),weightSpecs:[$r,n,xw].join(Wn),weightData:[$r,n,ww].join(Wn),modelMetadata:[$r,n,_w].join(Wn)}}function Cw(n){var t=n.split(Wn);if(t.length<3)throw new Error("Invalid key format: "+n);return t.slice(1,t.length-1).join(Wn)}var oo=(function(){function n(t){if(!H().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=jp(this.modelPath)}return n.prototype.save=function(t){return ae(this,void 0,void 0,(function(){var e,r,o;return se(this,(function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=oi(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,(function(a){if(Ks)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)})(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]}))}))},n.prototype.load=function(){return ae(this,void 0,void 0,(function(){var t,e,r,o,i,a,s;return se(this,(function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=(function(c){if(Ks){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),p=0;p<f.length;++p)h.set([f.charCodeAt(p)],p);return h.buffer})(s),[2,e]}))}))},n.URL_SCHEME="localstorage://",n})(),jl=function(n){return H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(oo.URL_SCHEME)?(t=n.slice(oo.URL_SCHEME.length),new oo(t)):null;var t};Gt.registerSaveRouter(jl),Gt.registerLoadRouter(jl);var Ew=(function(){function n(){I(H().getBool("IS_BROWSER"),(function(){return"Current environment is not a web browser"})),I(typeof window>"u"||window.localStorage!==void 0,(function(){return"Current browser does not appear to support localStorage"})),this.LS=window.localStorage}return n.prototype.listModels=function(){return ae(this,void 0,void 0,(function(){var t,e,r,o,i,a;return se(this,(function(s){for(t={},e=$r+Wn,r=Wn+Gp,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(r)&&(a=Cw(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]}))}))},n.prototype.removeModel=function(t){return ae(this,void 0,void 0,(function(){var e,r;return se(this,(function(o){var i;if(t=(i=t).startsWith(oo.URL_SCHEME)?i.slice(oo.URL_SCHEME.length):i,e=jp(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,r]}))}))},n})();if(H().getBool("IS_BROWSER"))try{sr.registerManager(oo.URL_SCHEME,new Ew)}catch{}var Iw="model",Rw=".json",Sw=".weights.bin";function ql(n){return new Promise((function(t){return setTimeout(t)})).then(n)}var ds=(function(){function n(t){if(!H().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Iw),this.modelTopologyFileName=t+Rw,this.weightDataFileName=t+Sw}return n.prototype.save=function(t){return ae(this,void 0,void 0,(function(){var e,r,o,i,a,s;return se(this,(function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,ql((function(){return a.dispatchEvent(new MouseEvent("click"))}))];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,ql((function(){return s.dispatchEvent(new MouseEvent("click"))}))]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:oi(t)}]}}))}))},n.URL_SCHEME="downloads://",n})(),kw=(function(){function n(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return n.prototype.load=function(){return ae(this,void 0,void 0,(function(){var t,e,r=this;return se(this,(function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise((function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=r.checkManifestAndWeightFiles(f,e)}catch(v){return void a(v)}var p=[],d=[],g=[];f.forEach((function(v){v.paths.forEach((function(m){d.push(m),g.push(null)})),p.push.apply(p,v.weights)})),f.forEach((function(v){v.paths.forEach((function(m){var b=new FileReader;b.onload=function(x){var y=x.target.result,w=d.indexOf(m);g[w]=y,g.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:p,weightData:qu(g),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},b.onerror=function(x){return a("Failed to weights data from file of path '"+m+"'.")},b.readAsArrayBuffer(h[m])}))}))}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)}))]}))}))},n.prototype.checkManifestAndWeightFiles=function(t,e){for(var r=[],o=e.map((function(u){return zl(u.name)})),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach((function(u){var c=zl(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]}));if(r.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+e.length+").");return i},n})();function Kl(n,t,e,r){(function(i){I(i!=null&&Array.isArray(i)&&i.length>0,(function(){return"promises must be a none empty array"}))})(n),(function(i,a){I(i>=0&&i<=1,(function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i})),I(a>=0&&a<=1,(function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a})),I(a>=i,(function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a}))})(e=e??0,r=r??1);var o=0;return Promise.all(n.map((function(i){return i.then((function(a){var s=e+ ++o/n.length*(r-e);return t(s),a})),i})))}function qp(n,t){return ae(this,void 0,void 0,(function(){var e,r,o,i,a,s,u,c,l;return se(this,(function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?H().platform.fetch:t.fetchFunc,r=n.map((function(h){return e(h,t.requestInit,{isBinary:!0})})),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,Kl(r,t.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map((function(h){return h.arrayBuffer()})),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Kl(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}}))}))}function $l(n){var t=this;return function(e,r,o){return r===void 0&&(r=""),ae(t,void 0,void 0,(function(){var i,a,s,u,c,l,f,h,p,d;return se(this,(function(g){switch(g.label){case 0:if(i=e.map((function(){return!1})),a={},s=o!=null?o.map((function(){return!1})):[],u=[],e.forEach((function(v,m){var b=0;v.weights.forEach((function(x){var y="quantization"in x?x.quantization.dtype:x.dtype,w=qs[y]*ue(x.shape),_=function(){i[m]=!0,a[m]==null&&(a[m]=[]),a[m].push({manifestEntry:x,groupOffset:b,sizeBytes:w})};o!=null?o.forEach((function(k,S){k===x.name&&(_(),s[S]=!0)})):_(),u.push(x.name),b+=w}))})),!s.every((function(v){return v})))throw c=o.filter((function(v,m){return!s[m]})),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce((function(v,m,b){return m&&v.push(b),v}),[]),f=[],l.forEach((function(v){e[v].paths.forEach((function(m){var b=r+(r.endsWith("/")?"":"/")+m;f.push(b)}))})),[4,n(f)];case 1:return h=g.sent(),p={},d=0,l.forEach((function(v){for(var m=e[v].paths.length,b=0,x=0;x<m;x++)b+=h[d+x].byteLength;for(var y=new ArrayBuffer(b),w=new Uint8Array(y),_=0,k=0;k<m;k++){var S=new Uint8Array(h[d+k]);w.set(S,_),_+=S.byteLength}a[v].forEach((function(E){var R=zp(y.slice(E.groupOffset,E.groupOffset+E.sizeBytes),[E.manifestEntry]);for(var F in R)p[F]=R[F]})),d+=m})),[2,p]}}))}))}}Gt.registerSaveRouter((function(n){return H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ds.URL_SCHEME)?(function(t){return t===void 0&&(t="model"),new ds(t)})(n.slice(ds.URL_SCHEME.length)):null}));var Kp=(function(){function n(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(I(typeof e.fetchFunc=="function",(function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=e.fetchFunc):this.fetch=H().platform.fetch,I(t!=null&&t.length>0,(function(){return"URL path for http must not be null, undefined or empty."})),Array.isArray(t)&&I(t.length===2,(function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."})),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return n.prototype.save=function(t){return ae(this,void 0,void 0,(function(){var e,r,o,i;return se(this,(function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:oi(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}}))}))},n.prototype.load=function(){return ae(this,void 0,void 0,(function(){var t,e,r,o,i,a,s,u,c,l,f,h;return se(this,(function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,t.json()];case 3:return e=p.sent(),[3,5];case 4:throw p.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:h=p.sent(),l=h[0],f=h[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}}))}))},n.prototype.loadWeights=function(t){return ae(this,void 0,void 0,(function(){var e,r,o,i,a,s,u,c,l,f,h;return se(this,(function(p){switch(p.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,r=(function(d){var g=d.lastIndexOf("/"),v=d.lastIndexOf("?"),m=d.substring(0,g),b=v>g?d.substring(v):"";return[m+"/",b]})(e),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach((function(d){d.paths.forEach((function(g){f.push(a+g+i)}))})),[4,qp(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=p.sent(),[2,[s,qu(h)]]}}))}))},n.URL_SCHEME_REGEX=/^https?:\/\//,n})();function Xs(n){return n.match(Kp.URL_SCHEME_REGEX)!=null}var Xl=function(n,t){return typeof fetch>"u"?null:(Array.isArray(n)?n.every((function(e){return Xs(e)})):Xs(n))?Ys(n,{onProgress:t}):null};function Ys(n,t){return new Kp(n,t)}Gt.registerSaveRouter(Xl),Gt.registerLoadRouter(Xl);var vs=(function(){function n(t){this.modelArtifacts=t}return n.prototype.load=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(t){return[2,this.modelArtifacts]}))}))},n})(),Aw=(function(){function n(t){this.saveHandler=t}return n.prototype.save=function(t){return ae(this,void 0,void 0,(function(){return se(this,(function(e){return[2,this.saveHandler(t)]}))}))},n})(),$p=Object.freeze({browserFiles:function(n){return new kw(n)},browserHTTPRequest:function(n,t){return Ys(n,t)},concatenateArrayBuffers:qu,decodeWeights:zp,encodeWeights:function(n,t){return ae(this,void 0,void 0,(function(){var e,r,o,i,a,s=this;return se(this,(function(u){switch(u.label){case 0:for(e=[],r=[],o=Array.isArray(n)?n.map((function(c){return c.name})):Object.keys(n),i=function(c){var l=o[c],f=Array.isArray(n)?n[c].tensor:n[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var p=new Promise((function(d){return ae(s,void 0,void 0,(function(){var g,v,m,b,x,y,w;return se(this,(function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(g=_.sent(),v=g.reduce((function(k,S){return k+S.length}),0)+na*g.length,m=new Uint8Array(v),b=0,x=0;x<g.length;x++)y=g[x],w=new Uint8Array(new Uint32Array([y.length]).buffer),m.set(w,b),b+=na,m.set(y,b),b+=y.length;return d(m),[2]}}))}))}));r.push(p)}else r.push(f.data());t!=null&&(h.group=t),e.push(h)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:mw(u.sent()),specs:e}]}}))}))},fromMemory:function(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new vs(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new vs({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new vs({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))},getLoadHandlers:function(n,t){return Gt.getLoadHandlers(n,t)},getModelArtifactsInfoForJSON:oi,getSaveHandlers:function(n){return Gt.getSaveHandlers(n)},http:Ys,isHTTPScheme:Xs,loadWeights:function(n,t,e,r){return t===void 0&&(t=""),ae(this,void 0,void 0,(function(){return se(this,(function(o){return[2,$l((function(i){return qp(i,{requestInit:r})}))(n,t,e)]}))}))},registerLoadRouter:function(n){return Gt.registerLoadRouter(n)},registerSaveRouter:function(n){return Gt.registerSaveRouter(n)},weightsLoaderFactory:$l,withSaveHandler:function(n){return new Aw(n)},copyModel:function(n,t){return ae(this,void 0,void 0,(function(){return se(this,(function(e){return[2,Hl(n,t,!1)]}))}))},listModels:function(){return ae(this,void 0,void 0,(function(){var n,t,e,r,o,i,a;return se(this,(function(s){switch(s.label){case 0:n=sr.getSchemes(),t={},e=0,r=n,s.label=1;case 1:return e<r.length?(o=r[e],[4,sr.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+no+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}}))}))},moveModel:function(n,t){return ae(this,void 0,void 0,(function(){return se(this,(function(e){return[2,Hl(n,t,!0)]}))}))},removeModel:function(n){return ae(this,void 0,void 0,(function(){var t;return se(this,(function(e){return t=Di(n),[2,sr.getManager(t.scheme).removeModel(t.path)]}))}))}}),zr;T({confusionMatrix_:function(n,t,e){var r=C(n,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");I(e==null||e>0&&Number.isInteger(e),(function(){return"If provided, numClasses must be a positive integer, but got "+e})),I(r.rank===1,(function(){return"Expected the rank of labels to be 1, but got "+r.rank})),I(o.rank===1,(function(){return"Expected the rank of predictions to be 1, but got "+o.rank})),I(r.shape[0]===o.shape[0],(function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."})),I(e>0&&Number.isInteger(e),(function(){return"numClasses is required to be a positive integer, but got "+e}));var i=Vs(r.asType("int32"),e),a=Vs(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var Dw=T({fromPixels_:function(n,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,r=!1,o=!1,i=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else{if(n.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+n.constructor.name);a=!0}if(o&&o&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(yh("FromPixels",P.backendName)!=null)return P.runKernel("FromPixels",{pixels:n},{numChannels:t});var s,u,c=o?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=c[0],f=c[1];if(a?s=n.getContext("2d").getImageData(0,0,l,f).data:r||e?s=n.data:(i||o)&&(zr==null&&(zr=document.createElement("canvas").getContext("2d")),zr.canvas.width=l,zr.canvas.height=f,zr.drawImage(n,0,0,l,f),s=zr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var p=0;p<h;p++)for(var d=0;d<t;++d)u[p*t+d]=s[4*p+d]}return wu(u,[f,l,t],"int32")}}),Ku=Object.freeze({toPixels:function(n,t){return ae(this,void 0,void 0,(function(){var e,r,o,i,a,s,u,c,l,f,h,p,d,g,v,m,b,x,y,w,_,k,S;return se(this,(function(E){switch(E.label){case 0:if(e=C(n,"img","toPixels"),n instanceof $e||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(r=e.shape.slice(0,2),o=r[0],i=r[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=E.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=E.sent(),f=l[0],h=l[1],p=f[0],d=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(p<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(p<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+d+"].")}for(g=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(i*o*4),m=0;m<o*i;++m)b=void 0,x=void 0,y=void 0,w=void 0,a===1?(b=s[m]*g,x=s[m]*g,y=s[m]*g,w=255):a===3?(b=s[3*m]*g,x=s[3*m+1]*g,y=s[3*m+2]*g,w=255):a===4&&(b=s[4*m]*g,x=s[4*m+1]*g,y=s[4*m+2]*g,w=s[4*m+3]*g),v[(_=4*m)+0]=Math.round(b),v[_+1]=Math.round(x),v[_+2]=Math.round(y),v[_+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,k=t.getContext("2d"),S=new ImageData(v,i,o),k.putImageData(S,0,0)),e!==n&&e.dispose(),[2,v]}}))}))},fromPixels:Dw}),Tw=(function(){function n(){}return n.prototype.getClassName=function(){return this.constructor.className},n.fromConfig=function(t,e){return new t(e)},n})(),Nw=(function(){function n(){this.classNameMap={}}return n.getMap=function(){return n.instance==null&&(n.instance=new n),n.instance},n.register=function(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]},n})();function Or(n){I(n.className!=null,(function(){return"Class being registered does not have the static className property defined."})),I(typeof n.className=="string",(function(){return"className is required to be a string, but got type "+typeof n.className})),I(n.className.length>0,(function(){return"Class being registered has an empty-string as its className, which is disallowed."})),Nw.register(n)}var Br=(function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return cn(t,n),t.prototype.minimize=function(e,r,o){r===void 0&&(r=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map((function(c){return{name:c.name,tensor:s[c.name]}}));this.applyGradients(u)}else this.applyGradients(s);return Bt(s),r?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,r){return zy(e,r)},t.prototype.dispose=function(){this.iterations_!=null&&Bt(this.iterations_)},t.prototype.saveIterations=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:re(this.iterations_,"int32")}]}))}))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){return se(this,(function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}))}))},t.prototype.extractIterations=function(e){return ae(this,void 0,void 0,(function(){var r;return se(this,(function(o){switch(o.label){case 0:return r=this,[4,e[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,e.slice(1)]}}))}))},t})(Tw);Object.defineProperty(Br,Symbol.hasInstance,{value:function(n){return n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null}});var Fw=(function(n){function t(e,r,o){o===void 0&&(o=null);var i=n.call(this)||this;return i.learningRate=e,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=P.backend.epsilon()),i}return cn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:ie((function(){return Pe(a).variable(!1)}))}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:ie((function(){return Pe(a).variable(!1)}))});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable,c=r.accumulatedUpdates[i].variable;ie((function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),h=c.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(l),c.assign(h);var p=f.mul(-r.learningRate).add(a);a.assign(p)}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Bt(this.accumulatedGrads.map((function(e){return e.variable}))),Bt(this.accumulatedUpdates.map((function(e){return e.variable}))))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){var e;return se(this,(function(r){switch(r.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){var r;return se(this,(function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=e.length/2,this.accumulatedGrads=e.slice(0,r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.accumulatedUpdates=e.slice(r,2*r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t})(Br);Or(Fw);var Pw=(function(n){function t(e,r){r===void 0&&(r=.1);var o=n.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return cn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:ie((function(){return En(a.shape,r.initialAccumulatorValue).variable(!1)}))});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable;ie((function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(P.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(l)}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Bt(this.accumulatedGrads.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map((function(r){return{name:r.originalName,tensor:r.variable}})))]}}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){return se(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulatedGrads=e.map((function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,r){return new e(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t})(Br);Or(Pw);var Mw=(function(n){function t(e,r,o,i){i===void 0&&(i=null);var a=n.call(this)||this;return a.learningRate=e,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],ie((function(){a.accBeta1=re(r).variable(),a.accBeta2=re(o).variable()})),i==null&&(a.epsilon=P.backend.epsilon()),a}return cn(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map((function(i){return i.name})):Object.keys(e);ie((function(){var i=st(1,r.accBeta1),a=st(1,r.accBeta2);o.forEach((function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ie((function(){return Pe(c).variable(!1)}))}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:ie((function(){return Pe(c).variable(!1)}))});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedSecondMoment[u].variable,p=f.mul(r.beta1).add(l.mul(1-r.beta1)),d=h.mul(r.beta2).add(l.square().mul(1-r.beta2)),g=p.div(i),v=d.div(a);f.assign(p),h.assign(d);var m=g.div(v.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(m)}})),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))})),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Bt(this.accumulatedFirstMoment.map((function(e){return e.variable}))),this.accumulatedSecondMoment!=null&&Bt(this.accumulatedSecondMoment.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){var e;return se(this,(function(r){switch(r.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){var r,o=this;return se(this,(function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),ie((function(){o.accBeta1.assign(ea(o.beta1,o.iterations_+1)),o.accBeta2.assign(ea(o.beta2,o.iterations_+1))})),r=e.length/2,this.accumulatedFirstMoment=e.slice(0,r).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),this.accumulatedSecondMoment=e.slice(r,2*r).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t})(Br);Or(Mw);var Ow=(function(n){function t(e,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=n.call(this)||this;return s.learningRate=e,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],ie((function(){s.iteration=re(0).variable(),s.accBeta1=re(r).variable()})),i==null&&(s.epsilon=P.backend.epsilon()),s}return cn(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map((function(i){return i.name})):Object.keys(e);ie((function(){var i=st(1,r.accBeta1),a=nn(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach((function(s,u){var c=P.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Pe(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Pe(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedWeightedInfNorm[u].variable,p=f.mul(r.beta1).add(l.mul(1-r.beta1)),d=h.mul(r.beta2),g=l.abs(),v=d.maximum(g);f.assign(p),h.assign(v);var m=a.div(i).mul(p.div(v.add(r.epsilon))).add(c);c.assign(m)}})),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))})),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Bt(this.accumulatedFirstMoment.map((function(e){return e.variable}))),this.accumulatedWeightedInfNorm!=null&&Bt(this.accumulatedWeightedInfNorm.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(e){throw new Error("getWeights() is not implemented for Adamax yet.")}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){return se(this,(function(r){throw new Error("setWeights() is not implemented for Adamax yet.")}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t})(Br);Or(Ow);var Xp=(function(n){function t(e){var r=n.call(this)||this;return r.learningRate=e,r.setLearningRate(e),r}return cn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=P.registeredVariables[o];ie((function(){var u=r.c.mul(a).add(s);s.assign(u)}))}})),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ny(re(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){return se(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,r){return new e(r.learningRate)},t.className="SGD",t})(Br);Or(Xp);var Bw=(function(n){function t(e,r,o){o===void 0&&(o=!1);var i=n.call(this,e)||this;return i.learningRate=e,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=re(i.momentum),i}return cn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:ie((function(){return Pe(a).variable(!1)}))});var s=r.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&ie((function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(a):r.c.mul(l).add(a),s.assign(l),a.assign(c)}))})),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Bt(this.accumulations.map((function(e){return e.variable})))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){return se(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map((function(r){return{name:r.originalName,tensor:r.variable}})))]}}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){return se(this,(function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulations=e.map((function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,r){return new e(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t})(Xp);Or(Bw);var Lw=(function(n){function t(e,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=n.call(this)||this;if(s.learningRate=e,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=P.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return cn(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,i){var a=P.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:ie((function(){return Pe(a).variable(!1)}))}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:ie((function(){return Pe(a).variable(!1)}))}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:ie((function(){return Pe(a).variable(!1)}))});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,c=r.accumulatedMoments[i].variable;ie((function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,h=f.mul(r.decay).add(s.mul(1-r.decay)),p=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(h.square().add(r.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(p);var d=a.sub(p);a.assign(d)}else{var g=u.mul(r.decay).add(s.square().mul(1-r.decay));p=c.mul(r.momentum).add(s.mul(r.learningRate).div(g.add(r.epsilon).sqrt())),u.assign(g),c.assign(p),d=a.sub(p),a.assign(d)}}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Bt(this.accumulatedMeanSquares.map((function(e){return e.variable}))),this.accumulatedMeanGrads!=null&&this.centered&&Bt(this.accumulatedMeanGrads.map((function(e){return e.variable}))),this.accumulatedMoments!=null&&Bt(this.accumulatedMoments.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return ae(this,void 0,void 0,(function(){var e;return se(this,(function(r){switch(r.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},t.prototype.setWeights=function(e){return ae(this,void 0,void 0,(function(){var r;return se(this,(function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.accumulatedMoments=e.slice(r,2*r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.centered&&(this.accumulatedMeanGrads=e.slice(2*r,3*r).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}))),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,r){return new e(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t})(Br);Or(Lw);$e.prototype.squaredDifference=function(n){return lp(this,n)},L=lw;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Js=function(n,t){return Js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])},Js(n,t)};function be(n,t){Js(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var xt=function(){return xt=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},xt.apply(this,arguments)};function fe(n,t,e,r){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(r.next(l))}catch(f){a(f)}}function u(l){try{c(r.throw(l))}catch(f){a(f)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((r=r.apply(n,[])).next())})}function he(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(n,e)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Fo(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var r=Array(n),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var io=(function(){function n(t,e){if(!Ar(t)||!Ar(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),n.prototype.reverse=function(){return new n(1/this.width,1/this.height)},n})();function Aa(n,t){return n instanceof $e&&n.shape.length===t}function Ww(n){return Aa(n,2)}function Da(n){return Aa(n,3)}function ur(n){return Aa(n,4)}function Uw(n){return n%1!==0}function Yl(n){return n%2===0}function Vw(n,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(n*e)/e}function Jl(n){return n&&n.width&&n.height}function zw(n,t){var e=n.width,r=n.height,o=t/Math.max(r,e);return new io(Math.round(e*o),Math.round(r*o))}function $u(n){return n.reduce(function(t,e){return t.add(e)},new Oe(0,0)).div(new Oe(n.length,n.length))}function jo(n,t,e){return Array(n).fill(0).map(function(r,o){return t+o*e})}function Ar(n){return!!n&&n!==1/0&&n!==-1/0&&!isNaN(n)||n===0}function Ql(n){return Ar(n)&&0<=n&&n<=1}var Oe=(function(){function n(t,e){this._x=t,this._y=e}return Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n.prototype.add=function(t){return new n(this.x+t.x,this.y+t.y)},n.prototype.sub=function(t){return new n(this.x-t.x,this.y-t.y)},n.prototype.mul=function(t){return new n(this.x*t.x,this.y*t.y)},n.prototype.div=function(t){return new n(this.x/t.x,this.y/t.y)},n.prototype.abs=function(){return new n(Math.abs(this.x),Math.abs(this.y))},n.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},n.prototype.floor=function(){return new n(Math.floor(this.x),Math.floor(this.y))},n})(),pr=(function(){function n(t,e){e===void 0&&(e=!0);var r=t||{},o=[r.left,r.top,r.right,r.bottom].every(Ar),i=[r.x,r.y,r.width,r.height].every(Ar);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],c=a[2],l=a[3];n.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return n.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Ar)},n.assertIsValidBox=function(t,e,r){if(r===void 0&&(r=!1),!n.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!r&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topLeft",{get:function(){return new Oe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topRight",{get:function(){return new Oe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomLeft",{get:function(){return new Oe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomRight",{get:function(){return new Oe(this.right,this.bottom)},enumerable:!0,configurable:!0}),n.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.toSquare=function(){var t=this,e=t.x,r=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new n({x:e,y:r,width:o,height:i})},n.prototype.rescale=function(t){var e=Jl(t)?t.width:t,r=Jl(t)?t.height:t;return new n({x:this.x*e,y:this.y*r,width:this.width*e,height:this.height*r})},n.prototype.pad=function(t,e){var r=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=r[0],i=r[1],a=r[2],s=r[3];return new n({x:o,y:i,width:a,height:s})},n.prototype.clipAtImageBorders=function(t,e){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,f=s-c,h=Math.min(l,t-u),p=Math.min(f,e-c);return new n({x:u,y:c,width:h,height:p}).floor()},n.prototype.shift=function(t,e){var r=this,o=r.width,i=r.height,a=this.x+t,s=this.y+e;return new n({x:a,y:s,width:o,height:i})},n.prototype.padAtBorders=function(t,e){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+r,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:h,x:c,ex:f,w:r,h:o}},n.prototype.calibrate=function(t){return new n({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},n})(),Ta=(function(n){be(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{left:e,top:r,right:o,bottom:i},a)||this}return t})(pr),Yp=(function(){function n(t,e,r,o,i){this._imageDims=new io(i.width,i.height),this._score=t,this._classScore=e,this._className=r,this._box=new pr(o).rescale(this._imageDims)}return Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativeBox",{get:function(){return new pr(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new n(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},n})(),Tn=(function(n){be(t,n);function t(e,r,o){return n.call(this,e,e,"",r,o)||this}return t.prototype.forSize=function(e,r){var o=n.prototype.forSize.call(this,e,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t})(Yp);function Hw(n,t,e){e===void 0&&(e=!0);var r=Math.max(0,Math.min(n.right,t.right)-Math.max(n.left,t.left)),o=Math.max(0,Math.min(n.bottom,t.bottom)-Math.max(n.top,t.top)),i=r*o;return e?i/(n.area+t.area-i):i/Math.min(n.area,t.area)}function Gw(n){var t=n.map(function(s){return s.x}),e=n.map(function(s){return s.y}),r=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new Ta(r,o,i,a)}function qo(n,t,e,r){r===void 0&&(r=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=n[s],p=n[f];c.push(Hw(h,p,r))}o=o.filter(function(d,g){return c[g]<=e})};o.length>0;)a();return i}function ii(n,t){return ie(function(){var e=t[0],r=t[1],o=t[2],i=En(Fo(n.shape.slice(0,3),[1]),e),a=En(Fo(n.shape.slice(0,3),[1]),r),s=En(Fo(n.shape.slice(0,3),[1]),o),u=ot([i,a,s],3);return st(n,u)})}function jw(n,t){return t===void 0&&(t=!1),ie(function(){var e=n.shape.slice(1),r=e[0],o=e[1];if(r===o)return n;var i=Math.abs(r-o),a=Math.round(i*(t?.5:1)),s=r>o?2:1,u=function(p){var d=n.shape.slice();return d[s]=p,En(d,0)},c=u(a),l=i-c.shape[s],f=t&&l?u(l):null,h=[f,n,c].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return ot(h,s)})}function gs(n){return 1/(1+Math.exp(-n))}var Xu=(function(n){be(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{x:e,y:r,width:o,height:i},a)||this}return t})(pr),qw=.5,Kw=.43,$w=.45,ra=(function(){function n(t,e,r){r===void 0&&(r=new Oe(0,0));var o=e.width,i=e.height;this._imgDims=new io(o,i),this._shift=r,this._positions=t.map(function(a){return a.mul(new Oe(o,i)).add(r)})}return Object.defineProperty(n.prototype,"shift",{get:function(){return new Oe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Oe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},n.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Oe(t,e))},n.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},n.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var r=t instanceof Tn?t.box.floor():new pr(t);return this.shiftBy(r.x,r.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},n.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],r=t[1],o=t[2],i=function(f){return o.sub(f).magnitude()},a=(i(e)+i(r))/2,s=Math.floor(a/$w),u=$u(t),c=Math.floor(Math.max(0,u.x-qw*s)),l=Math.floor(Math.max(0,u.y-Kw*s));return new Xu(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},n.prototype.alignMinBbox=function(t){var e=Gw(this.positions);return e.pad(e.width*t,e.height*t)},n.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},n})(),Xw=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],$u([e[3],e[4]])]},t})(ra),Yw=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map($u)},t})(ra),Zl=(function(){function n(t,e){this._label=t,this._distance=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),n.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Vw(this.distance)+")":"")},n})(),ef=(function(n){be(t,n);function t(e,r){var o=n.call(this,e)||this;return o._label=r,o}return t.assertIsValidLabeledBox=function(e,r){if(pr.assertIsValidBox(e,r),!Ar(e.label))throw new Error(r+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t})(pr),xi=(function(){function n(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),n.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},n.fromJSON=function(t){var e=t.descriptors.map(function(r){return new Float32Array(r)});return new n(t.label,e)},n})();(function(n){be(t,n);function t(e,r,o,i){var a=n.call(this,e,r)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,r){if(ef.assertIsValidLabeledBox(e,r),!Ql(e.score)||!Ql(e.classScore))throw new Error(r+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(ef);function Jw(n){return n.detection instanceof Tn}function Yu(n,t){var e={detection:t};return Object.assign({},n,e)}function Jp(){var n=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:n,readFile:t}}function Qp(n){var t="";if(!n)try{n=require("fs")}catch(r){t=r.toString()}var e=n?function(r){return new Promise(function(o,i){n.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Zp(){var n=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(n)return new n;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=Qp();return xt({Canvas:n||(function(){function a(){}return a})(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||(function(){function a(){}return a})(),Image:t||(function(){function a(){}return a})(),ImageData:global.ImageData||(function(){function a(){}return a})(),Video:global.HTMLVideoElement||(function(){function a(){}return a})(),createCanvasElement:e,createImageElement:r,fetch:o},i)}function ed(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function td(){return typeof global=="object"&&typeof require=="function"&&typeof Fd<"u"&&typeof process<"u"&&!!process.version}var nt;function Qw(){if(!nt)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return nt}function Qs(n){nt=n}function Ju(){ed()&&Qs(Jp()),td()&&Qs(Zp())}function Zw(n){if(nt||Ju(),!nt)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=n.Canvas,e=t===void 0?nt.Canvas:t,r=n.Image,o=r===void 0?nt.Image:r;nt.Canvas=e,nt.Image=o,nt.createCanvasElement=n.createCanvasElement||(function(){return new e}),nt.createImageElement=n.createImageElement||(function(){return new o}),nt.ImageData=n.ImageData||nt.ImageData,nt.Video=n.Video||nt.Video,nt.fetch=n.fetch||nt.fetch,nt.readFile=n.readFile||nt.readFile}var It={getEnv:Qw,setEnv:Qs,initialize:Ju,createBrowserEnv:Jp,createFileSystem:Qp,createNodejsEnv:Zp,monkeyPatch:Zw,isBrowser:ed,isNodejs:td};Ju();function nd(n){return!It.isNodejs()&&typeof n=="string"?document.getElementById(n):n}function Tr(n){var t=It.getEnv(),e=t.Canvas,r=t.CanvasRenderingContext2D;if(n instanceof r)return n;var o=nd(n);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var tf;(function(n){n.TOP_LEFT="TOP_LEFT",n.TOP_RIGHT="TOP_RIGHT",n.BOTTOM_LEFT="BOTTOM_LEFT",n.BOTTOM_RIGHT="BOTTOM_RIGHT"})(tf||(tf={}));function rd(n){var t=It.getEnv(),e=t.Image,r=t.Video;return n instanceof e&&n.complete||n instanceof r&&n.readyState>=3}function e2(n){return new Promise(function(t,e){if(n instanceof It.getEnv().Canvas||rd(n))return t();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),e(i))}n.addEventListener("load",r),n.addEventListener("error",o)})}function od(n){var t=It.getEnv(),e=t.Image,r=t.Video;return n instanceof e?new io(n.naturalWidth,n.naturalHeight):n instanceof r?new io(n.videoWidth,n.videoHeight):new io(n.width,n.height)}function Na(n){var t=n.width,e=n.height,r=It.getEnv().createCanvasElement,o=r();return o.width=t,o.height=e,o}function Qu(n,t){var e=It.getEnv().ImageData;if(!(n instanceof e)&&!rd(n))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=od(n),o=r.width,i=r.height,a=Na({width:o,height:i});return n instanceof e?Tr(a).putImageData(n,0,0):Tr(a).drawImage(n,0,0,o,i),a}function t2(n,t){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s;return he(this,function(u){switch(u.label){case 0:return e=It.getEnv().createCanvasElement(),r=n.shape.slice(ur(n)?1:0),o=r[0],i=r[1],a=r[2],s=ie(function(){return n.as3D(o,i,a).toInt()}),[4,Ku.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function nf(n){var t=It.getEnv(),e=t.Image,r=t.Canvas,o=t.Video;return n instanceof e||n instanceof r||n instanceof o}function n2(n,t,e){e===void 0&&(e=!1);var r=It.getEnv(),o=r.Image,i=r.Canvas;if(!(n instanceof o||n instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=od(n),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=Na({width:t,height:t}),f=n instanceof i?n:Qu(n),h=Math.abs(u-c)/2,p=e&&u<c?h:0,d=e&&c<u?h:0;return Tr(l).drawImage(f,p,d,u,c),l}var oa=(function(){function n(t,e){var r=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(Da(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(ur(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof It.getEnv().Canvas?o:Qu(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(n.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"reshapedInputDimensions",{get:function(){var t=this;return jo(this.batchSize,0,1).map(function(e,r){return t.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),n.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},n.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},n.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},n.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},n.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),r=this.getInputHeight(t);return zw({width:e,height:r},this.inputSize)},n.prototype.toBatchTensor=function(t,e){var r=this;return e===void 0&&(e=!0),this._inputSize=t,ie(function(){var o=jo(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof $e){var u=ur(s)?s:s.expandDims();return u=jw(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Vu.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof It.getEnv().Canvas)return Ku.fromPixels(n2(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=Kt(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,t,t,3);return i})},n})();function ht(n){return fe(this,void 0,void 0,function(){var t,e,r;return he(this,function(o){switch(o.label){case 0:if(n instanceof oa)return[2,n];if(t=Array.isArray(n)?n:[n],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(n)?" at input index "+i+":":""},r=t.map(nd),r.forEach(function(i,a){if(!nf(i)&&!Da(i)&&!ur(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(ur(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return nf(i)&&e2(i)}))];case 1:return o.sent(),[2,new oa(r,Array.isArray(n))]}})})}function Zu(n,t){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s,u;return he(this,function(c){switch(c.label){case 0:return e=It.getEnv().Canvas,r=n,n instanceof e?[3,5]:[4,ht(n)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,t2(i)];case 3:a=c.sent(),c.label=4;case 4:r=a,c.label=5;case 5:return s=Tr(r),u=t.map(function(l){return l instanceof Tn?l.forSize(r.width,r.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(l){var f=l.x,h=l.y,p=l.width,d=l.height,g=Na({width:p,height:d});return Tr(g).putImageData(s.getImageData(f,h,p,d),0,0),g})]}})})}function ec(n,t){return fe(this,void 0,void 0,function(){return he(this,function(e){if(!Da(n)&&!ur(n))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(ur(n)&&n.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,ie(function(){var r=n.shape.slice(ur(n)?1:0),o=r[0],i=r[1],a=r[2],s=t.map(function(c){return c instanceof Tn?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,p=c.height;return Tp(n.as3D(o,i,a),[f,l,0],[p,h,a])});return u})]})})}function r2(n,t){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return e=It.getEnv().fetch,[4,e(n,t)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function o2(n){return fe(this,void 0,void 0,function(){return he(this,function(t){switch(t.label){case 0:return[4,r2(n)];case 1:return[2,t.sent().json()]}})})}function id(n,t){var e=t+"-weights_manifest.json";if(!n)return{modelBaseUri:"",manifestUri:e};if(n==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var r=n.startsWith("http://")?"http://":n.startsWith("https://")?"https://":"";n=n.replace(r,"");var o=n.split("/").filter(function(s){return s}),i=n.endsWith(".json")?o[o.length-1]:e,a=r+(n.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=n.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function i2(n,t){return fe(this,void 0,void 0,function(){var e,r,o,i;return he(this,function(a){switch(a.label){case 0:return e=id(n,t),r=e.manifestUri,o=e.modelBaseUri,[4,o2(r)];case 1:return i=a.sent(),[2,$p.loadWeights(i,o)]}})})}var $n=(function(){function n(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(n.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),n.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),r=e.obj,o=e.objProp;return r[o]},n.prototype.reassignParamFromPath=function(t,e){var r=this.traversePropertyPath(t),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=e},n.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var r=e.paramPath;return{path:r,tensor:t.getParamFromPath(r)}})},n.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof lo})},n.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof lo)})},n.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var r=e.path,o=e.tensor;t.reassignParamFromPath(r,o.variable())})},n.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var r=e.path,o=e.tensor,i=gt(o.dataSync());o.dispose(),t.reassignParamFromPath(r,i)})},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},n.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},n.prototype.load=function(t){return fe(this,void 0,void 0,function(){return he(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},n.prototype.loadFromUri=function(t){return fe(this,void 0,void 0,function(){var e;return he(this,function(r){switch(r.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,i2(t,this.getDefaultModelName())];case 1:return e=r.sent(),this.loadFromWeightMap(e),[2]}})})},n.prototype.loadFromDisk=function(t){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return he(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=It.getEnv().readFile,r=id(t,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(p){return Promise.all(p.map(function(d){return e(d).then(function(g){return g.buffer})}))},s=$p.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,i)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},n.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.extractWeights=function(t){var e=this.extractParams(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=e.obj,o=e.objProp;if(!r||!o||!(r[o]instanceof $e))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:r,objProp:o}},n})();function jt(n,t,e){return ie(function(){var r=Ou(n,t.depthwise_filter,t.pointwise_filter,e,"same");return r=De(r,t.bias),r})}function ms(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=Xe(e?De(tn(n,t.conv0.filters,[2,2],"same"),t.conv0.bias):jt(n,t.conv0,[2,2])),o=jt(r,t.conv1,[1,1]),i=Xe(De(r,o)),a=jt(i,t.conv2,[1,1]);return Xe(De(r,De(o,a)))})}function wi(n,t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!0),ie(function(){var o=Xe(e?De(tn(n,t.conv0.filters,r?[2,2]:[1,1],"same"),t.conv0.bias):jt(n,t.conv0,r?[2,2]:[1,1])),i=jt(o,t.conv1,[1,1]),a=Xe(De(o,i)),s=jt(a,t.conv2,[1,1]),u=Xe(De(o,De(i,s))),c=jt(u,t.conv3,[1,1]);return Xe(De(o,De(i,De(s,c))))})}function sn(n,t,e,r){return e===void 0&&(e="same"),r===void 0&&(r=!1),ie(function(){var o=De(tn(n,t.filters,[1,1],e),t.bias);return r?Xe(o):o})}function Xn(n,t){Object.keys(n).forEach(function(e){t.some(function(r){return r.originalPath===e})||n[e].dispose()})}function Fa(n,t){return function(e,r,o,i){var a=Pt(n(e*r*o*o),[o,o,e,r]),s=tt(n(r));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function tc(n,t){return function(e,r,o){var i=ar(n(e*r),[e,r]),a=tt(n(r));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var ad=(function(){function n(t,e,r){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=r}return n})();function nc(n,t){return function(e,r,o){var i=Pt(n(9*e),[3,3,e,1]),a=Pt(n(e*r),[1,1,e,r]),s=tt(n(r));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new ad(i,a,s)}}function rc(n){return function(t){var e=n(t+"/depthwise_filter",4),r=n(t+"/pointwise_filter",4),o=n(t+"/bias",1);return new ad(e,r,o)}}function gr(n,t){return function(e,r,o){var i=n[e];if(!Aa(i,r))throw new Error("expected weightMap["+e+"] to be a Tensor"+r+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function Yn(n){var t=n;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function r(){return t}return{extractWeights:e,getRemainingWeights:r}}function sd(n,t){var e=Fa(n,t),r=nc(n,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),h=r(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),f=l.conv0,h=l.conv1,p=l.conv2,d=r(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:p,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function a2(n){var t=[],e=Yn(n),r=e.extractWeights,o=e.getRemainingWeights,i=sd(r,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function ud(n){return function(t){var e=n(t+"/filters",4),r=n(t+"/bias",1);return{filters:e,bias:r}}}function cd(n,t){var e=gr(n,t),r=ud(e),o=rc(e);function i(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function a(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function s2(n){var t=[],e=cd(n,t).extractDenseBlock4Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Xn(n,t),{params:r,paramMappings:t}}var ld=(function(n){be(t,n);function t(){return n.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=ii(o,i).div(re(255)),s=wi(a,r.dense0,!0);return s=wi(s,r.dense1),s=wi(s,r.dense2),s=wi(s,r.dense3),s=ri(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return s2(e)},t.prototype.extractParams=function(e){return a2(e)},t})($n);function xn(n,t){return ie(function(){return De(Ra(n,t.weights),t.bias)})}function u2(n,t,e){var r=[],o=Yn(n),i=o.extractWeights,a=o.getRemainingWeights,s=tc(i,r),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function c2(n){var t=[],e=gr(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return Xn(n,t),{params:o,paramMappings:t}}function fd(n){var t={},e={};return Object.keys(n).forEach(function(r){var o=r.startsWith("fc")?e:t;o[r]=n[r]}),{featureExtractorMap:t,classifierMap:e}}var hd=(function(n){be(t,n);function t(e,r){var o=n.call(this,e)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof oa?r.faceFeatureExtractor.forwardInput(e):e;return xn(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return u2(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var r=fd(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),c2(i)},t.prototype.extractParams=function(e){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t})($n),rf=["neutral","happy","sad","angry","fearful","disgusted","surprised"],l2=(function(){function n(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);rf.forEach(function(r,o){e[r]=t[o]})}return n.prototype.asSortedArray=function(){var t=this;return rf.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,r){return r.probability-e.probability})},n})(),f2=(function(n){be(t,n);function t(e){return e===void 0&&(e=new ld),n.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var r=this;return ie(function(){return qn(r.runNet(e))})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a,s=this;return he(this,function(u){switch(u.label){case 0:return[4,ht(e)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(it(o).map(function(c){return fe(s,void 0,void 0,function(){var l;return he(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new l2(c)}),[2,r.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t})(hd);function pd(n,t){var e={expressions:t};return Object.assign({},n,e)}function h2(n){return Jw(n)&&n.landmarks instanceof ra&&n.unshiftedLandmarks instanceof ra&&n.alignedRect instanceof Tn}function oc(n,t){var e=n.detection.box,r=t.shiftBy(e.x,e.y),o=r.align(),i=n.detection.imageDims,a=new Tn(n.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},n,s)}function p2(n,t){var e=Fa(n,t),r=nc(n,t);function o(a,s,u){var c=r(a,s,u+"/separable_conv0"),l=r(s,s,u+"/separable_conv1"),f=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),c=r(a,a,s+"/separable_conv1"),l=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function d2(n,t){var e=[],r=Yn(n),o=r.extractWeights,i=r.getRemainingWeights,a=p2(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),p=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:f,reduction_block_0:h,reduction_block_1:p},g={};jo(t,0,1).forEach(function(x){g["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var v=c(128,256,"exit_flow/reduction_block"),m=u(256,512,"exit_flow/separable_conv"),b={reduction_block:v,separable_conv:m};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:g,exit_flow:b}}}function v2(n,t){var e=gr(n,t),r=ud(e),o=rc(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function g2(n,t){var e=[],r=v2(n,e),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};jo(t,0,1).forEach(function(v){h["main_block_"+v]=s("middle_flow/main_block_"+v)});var p=a("exit_flow/reduction_block"),d=i("exit_flow/separable_conv"),g={reduction_block:p,separable_conv:d};return Xn(n,e),{params:{entry_flow:f,middle_flow:h,exit_flow:g},paramMappings:e}}function dd(n,t,e){return De(tn(n,t.filters,e,"same"),t.bias)}function ys(n,t,e){e===void 0&&(e=!0);var r=e?Xe(n):n;return r=jt(r,t.separable_conv0,[1,1]),r=jt(Xe(r),t.separable_conv1,[1,1]),r=lt(r,[3,3],[2,2],"same"),r=De(r,dd(n,t.expansion_conv,[2,2])),r}function m2(n,t){var e=jt(Xe(n),t.separable_conv0,[1,1]);return e=jt(Xe(e),t.separable_conv1,[1,1]),e=jt(Xe(e),t.separable_conv2,[1,1]),e=De(e,n),e}var y2=(function(n){be(t,n);function t(e){var r=n.call(this,"TinyXception")||this;return r._numMainBlocks=e,r}return t.prototype.forwardInput=function(e){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return ie(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=ii(i,a).div(re(256)),u=Xe(dd(s,o.entry_flow.conv_in,[2,2]));return u=ys(u,o.entry_flow.reduction_block_0,!1),u=ys(u,o.entry_flow.reduction_block_1),jo(r._numMainBlocks,0,1).forEach(function(c){u=m2(u,o.middle_flow["main_block_"+c])}),u=ys(u,o.exit_flow.reduction_block),u=Xe(jt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return g2(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return d2(e,this._numMainBlocks)},t})($n);function b2(n){var t=[],e=Yn(n),r=e.extractWeights,o=e.getRemainingWeights,i=tc(r,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function x2(n){var t=[],e=gr(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return Xn(n,t),{params:o,paramMappings:t}}var ia;(function(n){n.FEMALE="female",n.MALE="male"})(ia||(ia={}));var w2=(function(n){be(t,n);function t(e){e===void 0&&(e=new y2(2));var r=n.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=e,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof oa?r.faceFeatureExtractor.forwardInput(e):e,a=ri(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=xn(a,o.fc.age).as1D(),u=xn(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e),i=o.age,a=o.gender;return{age:i,gender:qn(a)}})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a,s,u,c=this;return he(this,function(l){switch(l.label){case 0:return[4,ht(e)];case 1:return r=l.sent(),[4,this.forwardInput(r)];case 2:return o=l.sent(),i=it(o.age),a=it(o.gender),s=i.map(function(f,h){return{ageTensor:f,genderTensor:a[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,p=f.genderTensor;return fe(c,void 0,void 0,function(){var d,g,v,m,b;return he(this,function(x){switch(x.label){case 0:return[4,h.data()];case 1:return d=x.sent()[0],[4,p.data()];case 2:return g=x.sent()[0],v=g>.5,m=v?ia.MALE:ia.FEMALE,b=v?g:1-g,h.dispose(),p.dispose(),[2,{age:d,gender:m,genderProbability:b}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return b2(e)},t.prototype.extractParamsFromWeigthMap=function(e){var r=fd(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),x2(i)},t.prototype.extractParams=function(e){var r=1539,o=e.slice(0,e.length-r),i=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t})($n),vd=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.postProcess=function(e,r,o){var i=o.map(function(s){var u=s.width,c=s.height,l=r/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return ie(function(){var s=function(h,p){return Kt([En([68],h),En([68],p)],1).as2D(1,136).as1D()},u=function(h,p){var d=i[h],g=d.width,v=d.height;return p(g,v)?Math.abs(g-v)/2:0},c=function(h){return u(h,function(p,d){return p<d})},l=function(h){return u(h,function(p,d){return d<p})},f=e.mul(En([a,136],r)).sub(Kt(Array.from(Array(a),function(h,p){return s(c(p),l(p))}))).div(Kt(Array.from(Array(a),function(h,p){return s(i[p].width,i[p].height)})));return f})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e);return r.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a=this;return he(this,function(s){switch(s.label){case 0:return[4,ht(e)];case 1:return r=s.sent(),o=ie(function(){return it(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,c){return fe(a,void 0,void 0,function(){var l,f,h,p,d;return he(this,function(g){switch(g.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[g.sent()]),p=l.filter(function(v,m){return Yl(m)}),d=l.filter(function(v,m){return!Yl(m)}),[2,new Yw(Array(68).fill(0).map(function(v,m){return new Oe(p[m],d[m])}),{height:r.getInputHeight(c),width:r.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t})(hd),gd=(function(n){be(t,n);function t(e){return e===void 0&&(e=new ld),n.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t})(vd);function _2(n){var t=[],e=cd(n,t).extractDenseBlock3Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Xn(n,t),{params:r,paramMappings:t}}function C2(n){var t=[],e=Yn(n),r=e.extractWeights,o=e.getRemainingWeights,i=sd(r,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var E2=(function(n){be(t,n);function t(){return n.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=ii(o,i).div(re(255)),s=ms(a,r.dense0,!0);return s=ms(s,r.dense1),s=ms(s,r.dense2),s=ri(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return _2(e)},t.prototype.extractParams=function(e){return C2(e)},t})($n),I2=(function(n){be(t,n);function t(e){return e===void 0&&(e=new E2),n.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t})(vd);(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(gd);function R2(n,t){return De(Ct(n,t.weights),t.biases)}function ic(n,t,e,r,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=tn(n,a,e,o);return u=De(u,s),u=R2(u,t.scale),r?Xe(u):u}function S2(n,t){return ic(n,t,[1,1],!0)}function md(n,t){return ic(n,t,[1,1],!1)}function yd(n,t){return ic(n,t,[2,2],!0,"valid")}function k2(n,t){function e(s,u,c){var l=n(s),f=l.length/(u*c*c);if(Uw(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return ie(function(){return hr(Pt(l,[u,f,c,c]),[2,3,1,0])})}function r(s,u,c,l){var f=e(s,u,c),h=tt(n(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=tt(n(s)),l=tt(n(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var f=r(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function a(s,u,c,l,f){f===void 0&&(f=!1);var h=i((f?.5:1)*s,u,c,l+"/conv1"),p=i(s,u,c,l+"/conv2");return{conv1:h,conv2:p}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function A2(n){var t=Yn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=k2(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),g=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),m=s(147456,128,3,"conv128_1"),b=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),k=ie(function(){return hr(ar(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:p,conv64_2:d,conv64_3:g,conv128_down:v,conv128_1:m,conv128_2:b,conv256_down:x,conv256_1:y,conv256_2:w,conv256_down_out:_,fc:k};return{params:S,paramMappings:o}}function D2(n,t){var e=gr(n,t);function r(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=r(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function T2(n){var t=[],e=D2(n,t),r=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),p=o("conv128_down"),d=o("conv128_1"),g=o("conv128_2"),v=o("conv256_down"),m=o("conv256_1"),b=o("conv256_2"),x=o("conv256_down_out"),y=n.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Ww(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:p,conv128_1:d,conv128_2:g,conv256_down:v,conv256_1:m,conv256_2:b,conv256_down_out:x,fc:y};return Xn(n,t),{params:w,paramMappings:t}}function pn(n,t){var e=S2(n,t.conv1);return e=md(e,t.conv2),e=De(e,n),e=Xe(e),e}function _i(n,t){var e=yd(n,t.conv1);e=md(e,t.conv2);var r=ri(n,2,2,"valid"),o=Ke(r.shape),i=r.shape[3]!==e.shape[3],a=r.shape[1]!==e.shape[1]||r.shape[2]!==e.shape[2];if(a){var s=Fo(e.shape);s[1]=1;var u=Ke(s);e=ot([e,u],1);var c=Fo(e.shape);c[2]=1;var l=Ke(c);e=ot([e,l],2)}return r=i?ot([r,o],3):r,e=De(r,e),e=Xe(e),e}var N2=(function(n){be(t,n);function t(){return n.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return ie(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=ii(o,i).div(re(256)),s=yd(a,r.conv32_down);s=lt(s,3,2,"valid"),s=pn(s,r.conv32_1),s=pn(s,r.conv32_2),s=pn(s,r.conv32_3),s=_i(s,r.conv64_down),s=pn(s,r.conv64_1),s=pn(s,r.conv64_2),s=pn(s,r.conv64_3),s=_i(s,r.conv128_down),s=pn(s,r.conv128_1),s=pn(s,r.conv128_2),s=_i(s,r.conv256_down),s=pn(s,r.conv256_1),s=pn(s,r.conv256_2),s=_i(s,r.conv256_down_out);var u=s.mean([1,2]),c=Ra(u,r.fc);return c})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a=this;return he(this,function(s){switch(s.label){case 0:return[4,ht(e)];case 1:return r=s.sent(),o=ie(function(){return it(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return T2(e)},t.prototype.extractParams=function(e){return A2(e)},t})($n);function bd(n,t){var e={descriptor:t};return Object.assign({},n,e)}function xd(n,t){var e={age:t};return Object.assign({},n,e)}function wd(n,t,e){var r={gender:t,genderProbability:e};return Object.assign({},n,r)}var _d=(function(){function n(t){var e=t===void 0?{}:t,r=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(n.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),n})();function F2(n,t){function e(u,c){var l=Pt(n(9*u),[3,3,u,1]),f=tt(n(u)),h=tt(n(u)),p=tt(n(u)),d=tt(n(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:p,batch_norm_variance:d}}function r(u,c,l,f,h){var p=Pt(n(u*c*l*l),[l,l,u,c]),d=tt(n(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:p,bias:d}}function o(u,c,l,f){var h=r(u,c,l,f,!0),p=h.filters,d=h.bias;return{filters:p,batch_norm_offset:d}}function i(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),h=i(128,256,"mobilenetv1/conv_4"),p=i(256,256,"mobilenetv1/conv_5"),d=i(256,512,"mobilenetv1/conv_6"),g=i(512,512,"mobilenetv1/conv_7"),v=i(512,512,"mobilenetv1/conv_8"),m=i(512,512,"mobilenetv1/conv_9"),b=i(512,512,"mobilenetv1/conv_10"),x=i(512,512,"mobilenetv1/conv_11"),y=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:p,conv_6:d,conv_7:g,conv_8:v,conv_9:m,conv_10:b,conv_11:x,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),g=o(64,128,3,"prediction_layer/conv_7"),v=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),m=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),b=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),k=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),E=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),N={box_encoding_predictor:v,class_predictor:m},V={box_encoding_predictor:b,class_predictor:x},U={box_encoding_predictor:y,class_predictor:w},z={box_encoding_predictor:_,class_predictor:k},G={box_encoding_predictor:S,class_predictor:E},W={box_encoding_predictor:R,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:p,conv_6:d,conv_7:g,box_predictor_0:N,box_predictor_1:V,box_predictor_2:U,box_predictor_3:z,box_predictor_4:G,box_predictor_5:W}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function P2(n){var t=[],e=Yn(n),r=e.extractWeights,o=e.getRemainingWeights,i=F2(r,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=wu(r(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function M2(n,t){var e=gr(n,t);function r(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),p=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:p}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",p=l+"/pointwise_conv",d=e(f+"/depthwise_weights",4,h+"/filters"),g=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),v=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),m=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),b=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:g,batch_norm_offset:v,batch_norm_mean:m,batch_norm_variance:b},pointwise_conv:r("MobilenetV1",c,p)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function O2(n){var t=[],e=M2(n,t),r=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=n["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Da(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return Xn(n,t),{params:a,paramMappings:t}}function vn(n,t,e){return ie(function(){var r=tn(n,t.filters,e,"same");return r=De(r,t.batch_norm_offset),Nu(r,0,6)})}var B2=.0010000000474974513;function L2(n,t,e){return ie(function(){var r=Ia(n,t.filters,e,"same");return r=gp(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,B2),Nu(r,0,6)})}function W2(n){return[2,4,6,12].some(function(t){return t===n})?[2,2]:[1,1]}function U2(n,t){return ie(function(){var e=null,r=vn(n,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=W2(s);r=L2(r,i.depthwise_conv,u),r=vn(r,i.pointwise_conv,[1,1]),s===11&&(e=r)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:e}})}function V2(n,t,e,r,o){var i=n.shape[0],a=Math.min(e,i),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=r?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var f=l.score,h=c.length-1;h>=0;--h){var p=z2(n,l.boxIndex,c[h]);if(p!==0&&(l.score*=u(p),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function z2(n,t,e){var r=n.arraySync(),o=Math.min(r[t][0],r[t][2]),i=Math.min(r[t][1],r[t][3]),a=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),u=Math.min(r[e][0],r[e][2]),c=Math.min(r[e][1],r[e][3]),l=Math.max(r[e][0],r[e][2]),f=Math.max(r[e][1],r[e][3]),h=(a-o)*(s-i),p=(l-u)*(f-c);if(h<=0||p<=0)return 0;var d=Math.max(o,u),g=Math.max(i,c),v=Math.min(a,l),m=Math.min(s,f),b=Math.max(v-d,0)*Math.max(m-g,0);return b/(h+p-b)}function H2(n){var t=it(hr(n,[1,0])),e=[st(t[2],t[0]),st(t[3],t[1])],r=[De(t[0],nn(e[0],re(2))),De(t[1],nn(e[1],re(2)))];return{sizes:e,centers:r}}function G2(n,t){var e=H2(n),r=e.sizes,o=e.centers,i=it(hr(t,[1,0])),a=nn(Ct(js(nn(i[2],re(5))),r[0]),re(2)),s=De(Ct(nn(i[0],re(10)),r[0]),o[0]),u=nn(Ct(js(nn(i[3],re(5))),r[1]),re(2)),c=De(Ct(nn(i[1],re(10)),r[1]),o[1]);return hr(Kt([st(s,a),st(c,u),De(s,a),De(c,u)]),[1,0])}function j2(n,t,e){return ie(function(){var r=n.shape[0],o=G2(rn(eo(e.extra_dim,[r,1,1]),[-1,4]),rn(n,[-1,4]));o=rn(o,[r,o.shape[0]/r,4]);var i=hp(Sn(t,[0,0,1],[-1,-1,-1])),a=Sn(i,[0,0,0],[-1,-1,1]);a=rn(a,[r,a.shape[1]]);var s=it(o),u=it(a);return{boxes:s,scores:u}})}function Hr(n,t){return ie(function(){var e=n.shape[0],r=rn(sn(n,t.box_encoding_predictor),[e,-1,1,4]),o=rn(sn(n,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function q2(n,t,e){return ie(function(){var r=vn(n,e.conv_0,[1,1]),o=vn(r,e.conv_1,[2,2]),i=vn(o,e.conv_2,[1,1]),a=vn(i,e.conv_3,[2,2]),s=vn(a,e.conv_4,[1,1]),u=vn(s,e.conv_5,[2,2]),c=vn(u,e.conv_6,[1,1]),l=vn(c,e.conv_7,[2,2]),f=Hr(t,e.box_predictor_0),h=Hr(n,e.box_predictor_1),p=Hr(o,e.box_predictor_2),d=Hr(a,e.box_predictor_3),g=Hr(u,e.box_predictor_4),v=Hr(l,e.box_predictor_5),m=ot([f.boxPredictionEncoding,h.boxPredictionEncoding,p.boxPredictionEncoding,d.boxPredictionEncoding,g.boxPredictionEncoding,v.boxPredictionEncoding],1),b=ot([f.classPrediction,h.classPrediction,p.classPrediction,d.classPrediction,g.classPrediction,v.classPrediction],1);return{boxPredictions:m,classPredictions:b}})}var ac=(function(){function n(t){var e=t===void 0?{}:t,r=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(n.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),n})(),Cd=(function(n){be(t,n);function t(){return n.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return ie(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=st(Ct(o,re(.007843137718737125)),re(1)),a=U2(i,r.mobilenetv1),s=q2(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return j2(u,c,r.output_layer)})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ht(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,p,d,g,v,m,b,x,y,w,_,k,S;return he(this,function(E){switch(E.label){case 0:return o=new ac(r),i=o.maxResults,a=o.minConfidence,[4,ht(e)];case 1:for(s=E.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],p=1;p<c.length;p++)c[p].dispose(),l[p].dispose();return v=(g=Array).from,[4,h.data()];case 2:return d=v.apply(g,[E.sent()]),m=.5,b=V2(f,d,i,m,a),x=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/x.width,_=y/x.height,k=f.arraySync(),S=b.map(function(R){var F=[Math.max(0,k[R][0]),Math.min(1,k[R][2])].map(function(W){return W*_}),N=F[0],V=F[1],U=[Math.max(0,k[R][1]),Math.min(1,k[R][3])].map(function(W){return W*w}),z=U[0],G=U[1];return new Tn(d[R],new Xu(z,N,G-z,V-N),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return O2(e)},t.prototype.extractParams=function(e){return P2(e)},t})($n);(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(Cd);var K2=.4,$2=[new Oe(.738768,.874946),new Oe(2.42204,2.65704),new Oe(4.30971,7.04493),new Oe(10.246,4.59428),new Oe(12.6868,11.8741)],X2=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],Y2=[117.001,114.697,97.404],J2="tiny_yolov2_model",Q2="tiny_yolov2_separable_conv_model",Ci=function(n){return typeof n=="number"};function Z2(n){if(!n)throw new Error("invalid config: "+n);if(typeof n.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+n.withSeparableConvs);if(!Ci(n.iouThreshold)||n.iouThreshold<0||n.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+n.iouThreshold);if(!Array.isArray(n.classes)||!n.classes.length||!n.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(n.classes));if(!Array.isArray(n.anchors)||!n.anchors.length||!n.anchors.map(function(t){return t||{}}).every(function(t){return Ci(t.x)&&Ci(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(n.anchors));if(n.meanRgb&&(!Array.isArray(n.meanRgb)||n.meanRgb.length!==3||!n.meanRgb.every(Ci)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(n.meanRgb))}function sc(n){return ie(function(){var t=Ct(n,re(.10000000149011612));return De(Xe(st(n,t)),t)})}function Jn(n,t){return ie(function(){var e=Pr(n,[[0,0],[1,1],[1,1],[0,0]]);return e=tn(e,t.conv.filters,[1,1],"valid"),e=st(e,t.bn.sub),e=Ct(e,t.bn.truediv),e=De(e,t.conv.bias),sc(e)})}function Qn(n,t){return ie(function(){var e=Pr(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Ou(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=De(e,t.bias),sc(e)})}function e_(n,t){var e=Fa(n,t);function r(a,s){var u=tt(n(a)),c=tt(n(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=r(s,u+"/bn");return{conv:c,bn:l}}var i=nc(n,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function t_(n,t,e,r){var o=Yn(n),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=e_(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var p=r[0],d=r[1],g=r[2],v=r[3],m=r[4],b=r[5],x=r[6],y=r[7],w=r[8],_=t.isFirstLayerConv2d?c(p,d,3,"conv0"):f(p,d,"conv0"),k=f(d,g,"conv1"),S=f(g,v,"conv2"),E=f(v,m,"conv3"),R=f(m,b,"conv4"),F=f(b,x,"conv5"),N=y?f(x,y,"conv6"):void 0,V=w?f(y,w,"conv7"):void 0,U=c(w||y||x,5*e,1,"conv8");h={conv0:_,conv1:k,conv2:S,conv3:E,conv4:R,conv5:F,conv6:N,conv7:V,conv8:U}}else{var p=r[0],d=r[1],g=r[2],v=r[3],m=r[4],b=r[5],x=r[6],y=r[7],w=r[8],_=l(p,d,"conv0"),k=l(d,g,"conv1"),S=l(g,v,"conv2"),E=l(v,m,"conv3"),R=l(m,b,"conv4"),F=l(b,x,"conv5"),N=l(x,y,"conv6"),V=l(y,w,"conv7"),U=c(w,5*e,1,"conv8");h={conv0:_,conv1:k,conv2:S,conv3:E,conv4:R,conv5:F,conv6:N,conv7:V,conv8:U}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:h,paramMappings:s}}function n_(n,t){var e=gr(n,t);function r(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=r(s+"/bn");return{conv:u,bn:c}}var a=rc(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function r_(n,t){var e=[],r=n_(n,e),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return Xn(n,e),{params:s,paramMappings:e}}var of;(function(n){n[n.XS=224]="XS",n[n.SM=320]="SM",n[n.MD=416]="MD",n[n.LG=608]="LG"})(of||(of={}));var uc=(function(){function n(t){var e=t===void 0?{}:t,r=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),n})(),Ed=(function(n){be(t,n);function t(e){var r=n.call(this,"TinyYolov2")||this;return Z2(e),r._config=e,r}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,r){var o=Jn(e,r.conv0);return o=lt(o,[2,2],[2,2],"same"),o=Jn(o,r.conv1),o=lt(o,[2,2],[2,2],"same"),o=Jn(o,r.conv2),o=lt(o,[2,2],[2,2],"same"),o=Jn(o,r.conv3),o=lt(o,[2,2],[2,2],"same"),o=Jn(o,r.conv4),o=lt(o,[2,2],[2,2],"same"),o=Jn(o,r.conv5),o=lt(o,[2,2],[1,1],"same"),o=Jn(o,r.conv6),o=Jn(o,r.conv7),sn(o,r.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,r){var o=this.config.isFirstLayerConv2d?sc(sn(e,r.conv0,"valid",!1)):Qn(e,r.conv0);return o=lt(o,[2,2],[2,2],"same"),o=Qn(o,r.conv1),o=lt(o,[2,2],[2,2],"same"),o=Qn(o,r.conv2),o=lt(o,[2,2],[2,2],"same"),o=Qn(o,r.conv3),o=lt(o,[2,2],[2,2],"same"),o=Qn(o,r.conv4),o=lt(o,[2,2],[2,2],"same"),o=Qn(o,r.conv5),o=lt(o,[2,2],[1,1],"same"),o=r.conv6?Qn(o,r.conv6):o,o=r.conv7?Qn(o,r.conv7):o,sn(o,r.conv8,"valid",!1)},t.prototype.forwardInput=function(e,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return ie(function(){var a=e.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?ii(a,o.config.meanRgb):a,a=a.div(re(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,r){return fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ht(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,p,d,g,v,m,b=this;return he(this,function(x){switch(x.label){case 0:return o=new uc(r),i=o.inputSize,a=o.scoreThreshold,[4,ht(e)];case 1:return s=x.sent(),[4,this.forwardInput(s,i)];case 2:return u=x.sent(),c=ie(function(){return it(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return f=x.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),p=f.map(function(y){return y.score}),d=f.map(function(y){return y.classScore}),g=f.map(function(y){return b.config.classes[y.label]}),v=qo(h.map(function(y){return y.rescale(i)}),p,this.config.iouThreshold,!0),m=v.map(function(y){return new Yp(p[y],d[y],g[y],h[y],l)}),[2,m]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return r_(e,this.config)},t.prototype.extractParams=function(e){var r=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return t_(e,this.config,this.boxEncodingSize,r)},t.prototype.extractBoxes=function(e,r,o){return fe(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d,g,v,m,b,x,y,w,_,k,S,E,R,F,N,V,U,z,G,W,B=this;return he(this,function(K){switch(K.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],f=this.config.anchors.length,h=ie(function(){var J=e.reshape([l,l,f,B.boxEncodingSize]),ne=J.slice([0,0,0,0],[l,l,f,4]),oe=J.slice([0,0,0,4],[l,l,f,1]),de=B.withClassScores?qn(J.slice([0,0,0,5],[l,l,f,B.config.classes.length]),3):re(0);return[ne,oe,de]}),p=h[0],d=h[1],g=h[2],v=[],[4,d.array()];case 1:return m=K.sent(),[4,p.array()];case 2:b=K.sent(),x=0,K.label=3;case 3:if(!(x<l))return[3,12];y=0,K.label=4;case 4:if(!(y<l))return[3,11];w=0,K.label=5;case 5:return w<f?(_=gs(m[x][y][w][0]),!o||_>o?(k=(y+gs(b[x][y][w][0]))/l*u,S=(x+gs(b[x][y][w][1]))/l*c,E=Math.exp(b[x][y][w][2])*this.config.anchors[w].x/l*u,R=Math.exp(b[x][y][w][3])*this.config.anchors[w].y/l*c,F=k-E/2,N=S-R/2,V={row:x,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(g,V)]:[3,7]):[3,9]):[3,10];case 6:return W=K.sent(),[3,8];case 7:W={classScore:1,label:0},K.label=8;case 8:U=W,z=U.classScore,G=U.label,v.push(xt({box:new Ta(F,N,F+E,N+R),score:_,classScore:_*z,label:G},V)),K.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return x++,[3,3];case 12:return p.dispose(),d.dispose(),g.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,r){return fe(this,void 0,void 0,function(){var o,i,a,s;return he(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t})($n),o_=(function(n){be(t,n);function t(e){e===void 0&&(e=!0);var r=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:K2,classes:["face"]},e?{anchors:X2,meanRgb:Y2}:{anchors:$2,withClassScores:!0});return r=n.call(this,o)||this,r}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new Tn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Q2:J2},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t})(Ed),i_=(function(n){be(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t})(uc),ai=(function(){function n(){}return n.prototype.then=function(t){return fe(this,void 0,void 0,function(){var e;return he(this,function(r){switch(r.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[r.sent()])]}})})},n.prototype.run=function(){return fe(this,void 0,void 0,function(){return he(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},n})();function Pa(n,t,e,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),fe(this,void 0,void 0,function(){var i,a,s,u,c;return he(this,function(l){switch(l.label){case 0:return i=n.map(function(f){return h2(f)?o(f):f.detection}),s=r,s?[3,5]:t instanceof $e?[4,ec(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Zu(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(f){return f instanceof $e&&f.dispose()}),[2,c]}})})}function cc(n,t,e,r,o){return fe(this,void 0,void 0,function(){var i=this;return he(this,function(a){return[2,Pa([n],t,function(s){return fe(i,void 0,void 0,function(){return he(this,function(u){return[2,e(s[0])]})})},r,o)]})})}function a_(n){return ie(function(){return Kt(it(n,3).reverse(),3)})}var Ei=2,aa=12;function s_(n,t){var e=Fa(n,t),r=tc(n,t);function o(c,l){var f=tt(n(c));return t.push({paramPath:l}),f}function i(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),p=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),g=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],f?2:3,l+"/conv3"),m=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:p,conv2:d,prelu2_alpha:g,conv3:v,prelu3_alpha:m}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return xt(xt({},c),{conv4_1:l,conv4_2:f})}function s(){var c=i([3,28,48,64],"rnet",!0),l=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=r(128,2,"rnet/fc2_1"),p=r(128,4,"rnet/fc2_2");return xt(xt({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:p})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=r(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),d=r(256,2,"onet/fc2_1"),g=r(256,4,"onet/fc2_2"),v=r(256,10,"onet/fc2_3");return xt(xt({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:p,fc2_1:d,fc2_2:g,fc2_3:v})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function u_(n){var t=Yn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=s_(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function c_(n,t){var e=gr(n,t);function r(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function i(l){return e(l,1)}function a(l){var f=r(l+"/conv1"),h=i(l+"/prelu1_alpha"),p=r(l+"/conv2"),d=i(l+"/prelu2_alpha"),g=r(l+"/conv3"),v=i(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:p,prelu2_alpha:d,conv3:g,prelu3_alpha:v}}function s(){var l=a("pnet"),f=r("pnet/conv4_1"),h=r("pnet/conv4_2");return xt(xt({},l),{conv4_1:f,conv4_2:h})}function u(){var l=a("rnet"),f=o("rnet/fc1"),h=i("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),d=o("rnet/fc2_2");return xt(xt({},l),{fc1:f,prelu4_alpha:h,fc2_1:p,fc2_2:d})}function c(){var l=a("onet"),f=r("onet/conv4"),h=i("onet/prelu4_alpha"),p=o("onet/fc1"),d=i("onet/prelu5_alpha"),g=o("onet/fc2_1"),v=o("onet/fc2_2"),m=o("onet/fc2_3");return xt(xt({},l),{conv4:f,prelu4_alpha:h,fc1:p,prelu5_alpha:d,fc2_1:g,fc2_2:v,fc2_3:m})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function l_(n){var t=[],e=c_(n,t),r=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=r(),s=o(),u=i();return Xn(n,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function Zs(n,t){var e=t[0],r=t[1];return{height:Math.floor(e*n),width:Math.floor(r*n)}}function f_(n,t,e){for(var r=e[0],o=e[1],i=aa/n,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var lc=(function(n){be(t,n);function t(e,r,o,i){return n.call(this,{left:e,top:r,right:o,bottom:i},!0)||this}return t})(pr);function Id(n){return ie(function(){return Ct(st(n,re(127.5)),re(.0078125))})}function ao(n,t){return ie(function(){return De(Xe(n),Ct(t,Zi(Xe(Zi(n)))))})}function fc(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=sn(n,t.conv1,"valid");return r=ao(r,t.prelu1_alpha),r=lt(r,e?[2,2]:[3,3],[2,2],"same"),r=sn(r,t.conv2,"valid"),r=ao(r,t.prelu2_alpha),r=e?r:lt(r,[3,3],[2,2],"valid"),r=sn(r,t.conv3,"valid"),r=ao(r,t.prelu3_alpha),r})}function h_(n,t){return ie(function(){var e=fc(n,t,!0),r=sn(e,t.conv4_1,"valid"),o=Yt(Sa(r,3),3),i=qn(st(r,o),3),a=sn(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function p_(n,t){return ie(function(){var e=Zs(t,n.shape.slice(1)),r=e.height,o=e.width,i=Vu.resizeBilinear(n,[r,o]),a=Id(i);return hr(a,[0,2,1,3])})}function d_(n,t,e,r){for(var o=[],i=n.arraySync(),a=0;a<n.shape[0];a++)for(var s=0;s<n.shape[1];s++)i[a][s]>=r&&o.push(new Oe(s,a));var u=o.map(function(c){var l=new Ta(Math.round((c.y*Ei+1)/e),Math.round((c.x*Ei+1)/e),Math.round((c.y*Ei+aa)/e),Math.round((c.x*Ei+aa)/e)),f=i[c.y][c.x],h=t.arraySync(),p=new lc(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:p}});return u}function v_(n,t,e,r,o){o.stage1=[];var i=t.map(function(h){return ie(function(){var p={scale:h},d=p_(n,h),g=Date.now(),v=h_(d,r),m=v.prob,b=v.regions;p.pnet=Date.now()-g;var x=it(it(m,3)[1])[0],y=it(b)[0];return{scoresTensor:x,regionsTensor:y,scale:h,statsForScale:p}})}),a=i.map(function(h){var p=h.scoresTensor,d=h.regionsTensor,g=h.scale,v=h.statsForScale,m=d_(p,d,g,e);if(p.dispose(),d.dispose(),!m.length)return o.stage1.push(v),[];var b=Date.now(),x=qo(m.map(function(y){return y.cell}),m.map(function(y){return y.score}),.5);return v.nms=Date.now()-b,v.numBoxes=x.length,o.stage1.push(v),x.map(function(y){return m[y]})}),s=a.reduce(function(h,p){return h.concat(p)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=qo(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var p=h.cell,d=h.region;return new Ta(p.left+d.left*p.width,p.top+d.top*p.height,p.right+d.right*p.width,p.bottom+d.bottom*p.height).toSquare().round()})}return{boxes:u,scores:c}}function Rd(n,t,e){var r=e.width,o=e.height;return fe(this,void 0,void 0,function(){var i,a,s,u=this;return he(this,function(c){switch(c.label){case 0:return i=Tr(n),[4,Promise.all(t.map(function(l){return fe(u,void 0,void 0,function(){var f,h,p,d,g,v,m,b;return he(this,function(x){return f=l.padAtBorders(n.height,n.width),h=f.y,p=f.ey,d=f.x,g=f.ex,v=d-1,m=h-1,b=i.getImageData(v,m,g-v,p-m),[2,It.isNodejs()?Qu(b):createImageBitmap(b)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var f=Na({width:r,height:o}),h=Tr(f);h.drawImage(l,0,0,r,o);for(var p=h.getImageData(0,0,r,o).data,d=[],g=0;g<p.length;g+=4)d.push(p[g+2]),d.push(p[g+1]),d.push(p[g]);s.push(d)}),[2,s.map(function(l){var f=ie(function(){var h=hr(Pt(l,[1,r,o,3]),[0,2,1,3]).toFloat();return Id(h)});return f})]}})})}function g_(n,t){return ie(function(){var e=fc(n,t),r=rn(e,[e.shape[0],t.fc1.weights.shape[0]]),o=xn(r,t.fc1),i=ao(o,t.prelu4_alpha),a=xn(i,t.fc2_1),s=Yt(Sa(a,1),1),u=qn(st(a,s),1),c=xn(i,t.fc2_2),l=it(u,1)[1];return{scores:l,regions:c}})}function m_(n,t,e,r,o){return fe(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d,g,v,m,b;return he(this,function(x){switch(x.label){case 0:return i=Date.now(),[4,Rd(n,t,{width:24,height:24})];case 1:return a=x.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(y){var w=g_(y,r);return y.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?ot(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[x.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),p=h.map(function(y){return t[y]}),d=h.map(function(y){return c[y]}),g=[],v=[],p.length>0&&(i=Date.now(),m=qo(p,d,.7),o.stage2_nms=Date.now()-i,b=m.map(function(y){var w=s[h[y]].regions.arraySync();return new lc(w[0][0],w[0][1],w[0][2],w[0][3])}),v=m.map(function(y){return d[y]}),g=m.map(function(y,w){return p[y].calibrate(b[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:g,scores:v}]}})})}function y_(n,t){return ie(function(){var e=fc(n,t);e=lt(e,[2,2],[2,2],"same"),e=sn(e,t.conv4,"valid"),e=ao(e,t.prelu4_alpha);var r=rn(e,[e.shape[0],t.fc1.weights.shape[0]]),o=xn(r,t.fc1),i=ao(o,t.prelu5_alpha),a=xn(i,t.fc2_1),s=Yt(Sa(a,1),1),u=qn(st(a,s),1),c=xn(i,t.fc2_2),l=xn(i,t.fc2_3),f=it(u,1)[1];return{scores:f,regions:c,points:l}})}function b_(n,t,e,r,o){return fe(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,p,d,g,v,m,b,x;return he(this,function(y){switch(y.label){case 0:return i=Date.now(),[4,Rd(n,t,{width:48,height:48})];case 1:return a=y.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=y_(w,r);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?ot(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),p=h.map(function(w){var _=s[w].regions.arraySync();return new lc(_[0][0],_[0][1],_[0][2],_[0][3])}),d=h.map(function(w,_){return t[w].calibrate(p[_])}),g=h.map(function(w){return c[w]}),v=[],m=[],b=[],d.length>0&&(i=Date.now(),x=qo(d,g,.7,!1),o.stage3_nms=Date.now()-i,v=x.map(function(w){return d[w]}),m=x.map(function(w){return g[w]}),b=x.map(function(w,_){return Array(5).fill(0).map(function(k,S){var E=s[w].points.arraySync();return new Oe(E[0][S]*(v[_].width+1)+v[_].left,E[0][S+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:m,points:b}]}})})}var x_=(function(n){be(t,n);function t(){return n.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return fe(this,void 0,void 0,function(){return he(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return fe(this,void 0,void 0,function(){return he(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,p,d,g,v,m,b,x,y,w,_,k,S;return he(this,function(E){switch(E.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=ie(function(){return a_(Yt(Ku.fromPixels(i)).toFloat())}),c=function(R){return u.dispose(),a.total=Date.now()-s,R},l=u.shape.slice(1),f=l[0],h=l[1],p=new _d(r),d=p.minFaceSize,g=p.scaleFactor,v=p.maxNumScales,m=p.scoreThresholds,b=p.scaleSteps,x=(b||f_(d,g,[f,h])).filter(function(R){var F=Zs(R,[f,h]);return Math.min(F.width,F.height)>aa}).slice(0,v),a.scales=x,a.pyramid=x.map(function(R){return Zs(R,[f,h])}),y=Date.now(),[4,v_(u,x,m[0],o.pnet,a)];case 1:return w=E.sent(),a.total_stage1=Date.now()-y,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,m_(i,w.boxes,m[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=E.sent(),a.total_stage2=Date.now()-y,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,b_(i,_.boxes,m[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return k=E.sent(),a.total_stage3=Date.now()-y,S=k.boxes.map(function(R,F){return oc(Yu({},new Tn(k.scores[F],new Xu(R.left/h,R.top/f,R.width/h,R.height/f),{height:f,width:h})),new Xw(k.points[F].map(function(N){return N.sub(new Oe(R.left,R.top)).div(new Oe(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:S,stats:a})]}})})},t.prototype.forward=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ht(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ht(e)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return l_(e)},t.prototype.extractParams=function(e){return u_(e)},t})($n),w_=.4,__=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],C_=[117.001,114.697,97.404],E_=(function(n){be(t,n);function t(){var e=this,r={withSeparableConvs:!0,iouThreshold:w_,classes:["face"],anchors:__,meanRgb:C_,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=n.call(this,r)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new Tn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t})(Ed),qt={ssdMobilenetv1:new Cd,tinyFaceDetector:new E_,tinyYolov2:new o_,mtcnn:new x_,faceLandmark68Net:new gd,faceLandmark68TinyNet:new I2,faceRecognitionNet:new N2,faceExpressionNet:new f2,ageGenderNet:new w2},Sd=(function(n){be(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t})(ai),hc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o=this;return he(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Pa(e,this.input,function(a){return fe(o,void 0,void 0,function(){return he(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return qt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){return pd(a,r[s])})]}})})},t.prototype.withAgeAndGender=function(){return new gc(this,this.input)},t})(Sd),pc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,cc(e,this.input,function(i){return qt.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,pd(e,r)]}})})},t.prototype.withAgeAndGender=function(){return new mc(this,this.input)},t})(Sd),dc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new yc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new xc(this,this.input)},t})(hc),vc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new bc(this,this.input)},t.prototype.withFaceDescriptor=function(){return new wc(this,this.input)},t})(pc),kd=(function(n){be(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t})(ai),gc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o=this;return he(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Pa(e,this.input,function(a){return fe(o,void 0,void 0,function(){return he(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return qt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){var u=r[s],c=u.age,l=u.gender,f=u.genderProbability;return xd(wd(a,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new hc(this,this.input)},t})(kd),mc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i,a;return he(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,cc(e,this.input,function(u){return qt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,xd(wd(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new pc(this,this.input)},t})(kd),yc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new dc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new xc(this,this.input)},t})(gc),bc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new vc(this,this.input)},t.prototype.withFaceDescriptor=function(){return new wc(this,this.input)},t})(mc),Ad=(function(n){be(t,n);function t(e,r){var o=n.call(this)||this;return o.parentTask=e,o.input=r,o}return t})(ai),xc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Pa(e,this.input,function(i){return Promise.all(i.map(function(a){return qt.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return bd(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new dc(this,this.input)},t.prototype.withAgeAndGender=function(){return new yc(this,this.input)},t})(Ad),wc=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,cc(e,this.input,function(i){return qt.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,bd(e,r)]}})})},t.prototype.withFaceExpressions=function(){return new vc(this,this.input)},t.prototype.withAgeAndGender=function(){return new bc(this,this.input)},t})(Ad),Dd=(function(n){be(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?qt.faceLandmark68TinyNet:qt.faceLandmark68Net},enumerable:!0,configurable:!0}),t})(ai),I_=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return he(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),r=e.map(function(c){return c.detection}),this.input instanceof $e?[4,ec(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,Zu(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof $e&&c.dispose()}),[2,e.map(function(c,l){return oc(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new dc(this,this.input)},t.prototype.withAgeAndGender=function(){return new yc(this,this.input)},t.prototype.withFaceDescriptors=function(){return new xc(this,this.input)},t})(Dd),R_=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i,a;return he(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(r=e.detection,this.input instanceof $e?[4,ec(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,Zu(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof $e&&u.dispose()}),[2,oc(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new vc(this,this.input)},t.prototype.withAgeAndGender=function(){return new bc(this,this.input)},t.prototype.withFaceDescriptor=function(){return new wc(this,this.input)},t})(Dd),Td=(function(n){be(t,n);function t(e,r){r===void 0&&(r=new ac);var o=n.call(this)||this;return o.input=e,o.options=r,o}return t})(ai),S_=(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i;return he(this,function(a){switch(a.label){case 0:return e=this,r=e.input,o=e.options,o instanceof _d?[4,qt.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof i_?function(s){return qt.tinyFaceDetector.locateFaces(s,o)}:o instanceof ac?function(s){return qt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof uc?function(s){return qt.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(r){return fe(e,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return Yu({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new I_(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new hc(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new gc(this.runAndExtendWithFaceDetections(),this.input)},t})(Td);(function(n){be(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,new S_(this.input,this.options)];case 1:return e=o.sent(),r=e[0],e.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(r){return fe(e,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?Yu({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new R_(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new pc(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new mc(this.runAndExtendWithFaceDetection(),this.input)},t})(Td);function k_(n,t){if(n.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(n),r=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function n(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var r=Array.isArray(t)?t:[t];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof xi)return a;if(a instanceof Float32Array)return new xi(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new xi(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(n.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),n.prototype.computeMeanDistance=function(t,e){return e.map(function(r){return k_(r,t)}).reduce(function(r,o){return r+o},0)/(e.length||1)},n.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new Zl(i,e.computeMeanDistance(t,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},n.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Zl("unknown",e.distance)},n.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},n.fromJSON=function(t){var e=t.labeledDescriptors.map(function(r){return xi.fromJSON(r)});return new n(e,t.distanceThreshold)},n})();const A_="/models";let af=!1;async function D_(){af||(await qt.tinyFaceDetector.loadFromUri(A_),af=!0)}function T_(){const n=kt(!1);return va(async()=>{try{await D_(),n.value=!0}catch(t){console.error("模型加载失败:",t)}}),{modelsReady:n}}function N_(n){return new Promise((t,e)=>{const r=URL.createObjectURL(n),o=new Image;o.onload=()=>{URL.revokeObjectURL(r),t({width:o.naturalWidth,height:o.naturalHeight})},o.onerror=()=>{URL.revokeObjectURL(r),e()},o.src=r})}function F_(n){return new Promise((t,e)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=e,r.readAsDataURL(n)})}function P_(){const n=kt(null),t=kt([]),e=kt(224),r=kt(224),o=kt(!1),i=kt(!1),a=kt([]),s=Ft(()=>{const v=new Map;for(const m of t.value){const b=`${m.width}×${m.height}`;v.has(b)||v.set(b,[]),v.get(b).push(m)}return Array.from(v.entries()).map(([m,b])=>({key:m,items:b}))}),u=Ft(()=>{const v=new Set(a.value),m=[];for(const b of s.value)(v.size===0||v.has(b.key))&&m.push(...b.items);return m}),c=Ft(()=>({aspectRatio:`${e.value||1}/${r.value||1}`})),l=Ft(()=>({objectPosition:"center center"}));async function f(v){if(!(v!=null&&v.length))return;const m=[...t.value];for(const b of v)if(b.type.startsWith("image/"))try{const{width:x,height:y}=await N_(b);m.push({file:b,url:URL.createObjectURL(b),width:x,height:y})}catch{}t.value=m}function h(){var v;(v=n.value)==null||v.click()}function p(v){f(Array.from(v.target.files||[])),v.target.value=""}function d(v){var m;o.value=!1,f(Array.from(((m=v.dataTransfer)==null?void 0:m.files)||[]).filter(b=>b.type.startsWith("image/")))}function g(){for(const v of t.value)URL.revokeObjectURL(v.url);t.value=[],a.value=[],i.value=!1}return kr(s,(v,m)=>{v.length>0&&(!m||m.length===0)&&(a.value=v.map(b=>b.key))}),kr(t,v=>{v.length>0&&(e.value=Math.min(...v.map(m=>m.width)),r.value=Math.min(...v.map(m=>m.height)))},{deep:!0}),{fileInputRef:n,uploadedImages:t,cropWidth:e,cropHeight:r,isDragging:o,showPreview:i,checkedGroupKeys:a,groups:s,previewImages:u,previewCellStyle:c,previewImgStyle:l,addFiles:f,triggerFileInput:h,onFileChange:p,onDrop:d,clearImages:g}}function M_(){const n=kt(null),t=kt(null),e=kt(null),r=Ft(()=>t.value?{left:`${t.value.x}px`,top:`${t.value.y}px`}:{});function o(c){if(!n.value)return;const l=n.value.getBoundingClientRect();t.value=t.value||{x:l.left,y:l.top},e.value={startX:c.clientX,startY:c.clientY,left:t.value.x,top:t.value.y}}function i(c){e.value&&(t.value={x:e.value.left+(c.clientX-e.value.startX),y:e.value.top+(c.clientY-e.value.startY)})}function a(){e.value=null}function s(){document.addEventListener("mousemove",i),document.addEventListener("mouseup",a)}function u(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",a)}return kr(e,c=>c?s():u()),ga(u),{previewAsideRef:n,previewPosition:t,previewAsideStyle:r,onPreviewDragStart:o}}async function O_(n,t,e){var u;const r=t||1,o=e||1,s=`<section class="preview-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px" aria-label="图片排列">
${(await Promise.all(n.map(c=>c.file?F_(c.file):Promise.resolve(c.url)))).map((c,l)=>{var p;const f=n[l],h=(((p=f==null?void 0:f.file)==null?void 0:p.name)||"").replace(/"/g,"&quot;");return`  <div style="overflow:hidden;border-radius:4px;border:1px solid #e5e7eb;background:#f3f4f6;aspect-ratio:${r}/${o}"><img src="${c}" alt="${h}" style="width:100%;height:100%;object-fit:cover;object-position:center center" /></div>`}).join(`
`)}
</section>`;await((u=navigator.clipboard)==null?void 0:u.writeText(s))}const B_={class:"rounded-xl bg-white p-5 shadow sm:p-6 md:p-8"},L_={class:"flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch md:gap-6"},W_={class:"flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 sm:min-h-0 sm:py-2.5 sm:text-sm md:px-8 md:py-3"},U_={key:0,class:"mt-3 text-sm text-gray-500 sm:mt-4"},V_={__name:"UploadSection",props:{uploadedImages:{type:Array,default:()=>[]},isDragging:{type:Boolean,default:!1}},emits:["clear","update:isDragging"],setup(n,{expose:t,emit:e}){const r=e,o=kt(null);function i(){var u;(u=o.value)==null||u.click()}t({fileInputRef:o,triggerFileInput:i});function a(u){r("file-change",Array.from(u.target.files||[])),u.target.value=""}function s(u){var c;r("update:isDragging",!1),r("drop",Array.from(((c=u.dataTransfer)==null?void 0:c.files)||[]).filter(l=>l.type.startsWith("image/")))}return(u,c)=>(He(),Qe("section",B_,[c[5]||(c[5]=me("h2",{class:"mb-4 text-base font-medium text-gray-700 sm:mb-5 sm:text-lg"},"第一步：上传图片",-1)),me("div",L_,[me("label",W_,[me("input",{ref_key:"fileInputRef",ref:o,type:"file",accept:"image/*",multiple:"",class:"sr-only",onChange:a},null,544),c[3]||(c[3]=lh(" 选择图片 ",-1))]),n.uploadedImages.length?(He(),Qe("button",{key:0,type:"button",class:"min-h-[48px] rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 sm:min-h-0 sm:py-2.5 sm:text-sm md:px-8 md:py-3",onClick:c[0]||(c[0]=l=>u.$emit("clear"))}," 清空图片 ")):an("",!0)]),me("div",{class:$o(["mt-4 flex min-h-[180px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors sm:mt-6 sm:min-h-[200px] sm:gap-3 sm:px-6 sm:py-10 md:min-h-[240px] md:mt-8 md:py-12",n.isDragging?"border-blue-500 bg-blue-50":"border-gray-300 bg-gray-50/50"]),onDragover:c[1]||(c[1]=Un(l=>u.$emit("update:isDragging",!0),["prevent"])),onDragleave:c[2]||(c[2]=Un(l=>u.$emit("update:isDragging",!1),["prevent"])),onDrop:Un(s,["prevent"]),onClick:i},[...c[4]||(c[4]=[me("span",{class:"text-center text-base text-gray-500 sm:text-lg md:text-xl"},"点击或拖拽图片到此处",-1),me("span",{class:"text-center text-sm text-gray-400"},"支持多选",-1)])],34),n.uploadedImages.length?(He(),Qe("p",U_,"已上传 "+lr(n.uploadedImages.length)+" 张",1)):an("",!0)]))}},z_={class:"absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white"},H_=["src","alt"],Nd={__name:"ImageLightbox",props:{visible:{type:Boolean,default:!1},imageUrl:{type:String,default:""},alt:{type:String,default:""},imageList:{type:Array,default:()=>[]},currentIndex:{type:Number,default:0}},emits:["close","change-index"],setup(n,{emit:t}){const e=n,r=t,o=Ft(()=>e.imageList.length||1),i=Ft(()=>e.currentIndex),a=Ft(()=>e.imageList.length>0&&i.value>0),s=Ft(()=>e.imageList.length>0&&i.value<o.value-1),u=Ft(()=>{if(e.imageList.length>0){const p=e.imageList[i.value];return(p==null?void 0:p.url)||(p==null?void 0:p.imageUrl)||""}return e.imageUrl}),c=Ft(()=>{var p;if(e.imageList.length>0){const d=e.imageList[i.value];return(d==null?void 0:d.alt)||((p=d==null?void 0:d.file)==null?void 0:p.name)||""}return e.alt});function l(){a.value&&r("change-index",i.value-1)}function f(){s.value&&r("change-index",i.value+1)}function h(p){e.visible&&(p.key==="ArrowLeft"?(p.preventDefault(),l()):p.key==="ArrowRight"?(p.preventDefault(),f()):p.key==="Escape"&&(p.preventDefault(),r("close")))}return kr(()=>e.visible,p=>{p?document.addEventListener("keydown",h):document.removeEventListener("keydown",h)}),va(()=>{e.visible&&document.addEventListener("keydown",h)}),ga(()=>{document.removeEventListener("keydown",h)}),(p,d)=>(He(),Lo(Vf,{to:"body"},[n.visible?(He(),Qe("div",{key:0,class:"fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/70 p-4",onClick:d[2]||(d[2]=Un(g=>p.$emit("close"),["self"]))},[me("button",{type:"button",class:"absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white","aria-label":"关闭",onClick:d[0]||(d[0]=g=>p.$emit("close"))}," ✕ "),a.value?(He(),Qe("button",{key:0,type:"button",class:"absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white","aria-label":"上一张",onClick:Un(l,["stop"])}," ‹ ")):an("",!0),s.value?(He(),Qe("button",{key:1,type:"button",class:"absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white","aria-label":"下一张",onClick:Un(f,["stop"])}," › ")):an("",!0),me("div",z_,lr(n.currentIndex+1)+" / "+lr(o.value),1),me("img",{src:u.value,alt:c.value,class:"max-h-[90vh] max-w-[90vw] cursor-default object-contain",onClick:d[1]||(d[1]=Un(()=>{},["stop"]))},null,8,H_)])):an("",!0)]))}},G_={key:0,class:"mt-6 rounded-xl bg-white p-5 shadow sm:mt-8 sm:p-6 md:p-8"},j_={class:"mb-4 flex flex-wrap items-center gap-4"},q_={class:"flex items-center gap-2"},K_=["value"],$_=["value"],X_=["disabled"],Y_={class:"space-y-4"},J_={class:"flex cursor-pointer items-center gap-2"},Q_=["value"],Z_={class:"text-sm font-medium text-gray-700"},eC={class:"flex flex-wrap gap-2"},tC=["onClick"],nC=["src","alt"],rC={__name:"GroupCropSection",props:{groups:{type:Array,default:()=>[]},previewImages:{type:Array,default:()=>[]},cropWidth:{type:Number,default:224},cropHeight:{type:Number,default:224},checkedGroupKeys:{type:Array,default:()=>[]}},emits:["open-preview","update:cropWidth","update:cropHeight","update:checkedGroupKeys"],setup(n,{emit:t}){const e=n,r=t,o=Ft({get:()=>e.checkedGroupKeys,set:u=>r("update:checkedGroupKeys",u)}),i=kt(null),a=Ft(()=>{var c;const u=[];for(const l of e.groups)for(const f of l.items)u.push({url:f.url,alt:((c=f.file)==null?void 0:c.name)||"",file:f.file});return u});function s(u,c){let l=0;for(const f of e.groups){if(f.key===u){l+=c;break}l+=f.items.length}i.value=l}return(u,c)=>n.groups.length?(He(),Qe("section",G_,[c[8]||(c[8]=me("h2",{class:"mb-3 text-sm font-medium text-gray-700"},"第二步：分组 + 裁剪 + 勾选预览",-1)),me("div",j_,[me("div",q_,[c[6]||(c[6]=me("span",{class:"text-sm text-gray-600"},"裁剪分辨率",-1)),me("input",{value:n.cropWidth,type:"number",min:"1",class:"w-20 rounded border px-2 py-1 text-sm",onInput:c[0]||(c[0]=l=>u.$emit("update:cropWidth",Number(l.target.value)))},null,40,K_),c[7]||(c[7]=me("span",{class:"text-gray-500"},"×",-1)),me("input",{value:n.cropHeight,type:"number",min:"1",class:"w-20 rounded border px-2 py-1 text-sm",onInput:c[1]||(c[1]=l=>u.$emit("update:cropHeight",Number(l.target.value)))},null,40,$_)]),me("button",{type:"button",class:"rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50",disabled:n.previewImages.length===0,onClick:c[2]||(c[2]=l=>u.$emit("open-preview"))}," 预览选中（"+lr(n.previewImages.length)+" 张） ",9,X_)]),me("div",Y_,[(He(!0),Qe(Dt,null,Mi(n.groups,l=>(He(),Qe("div",{key:l.key,class:"flex flex-wrap items-start gap-3 rounded border border-gray-200 bg-gray-50 p-3"},[me("label",J_,[Sv(me("input",{"onUpdate:modelValue":c[3]||(c[3]=f=>o.value=f),type:"checkbox",value:l.key,class:"rounded border-gray-300"},null,8,Q_),[[Qg,o.value]]),me("span",Z_,"尺寸 "+lr(l.key),1)]),me("div",eC,[(He(!0),Qe(Dt,null,Mi(l.items,(f,h)=>(He(),Qe("button",{key:h,type:"button",class:"h-20 w-20 overflow-hidden rounded border bg-gray-200 transition hover:ring-2 hover:ring-blue-400",onClick:p=>s(l.key,h)},[me("img",{src:f.url,alt:f.file.name,class:"h-full w-full object-cover"},null,8,nC)],8,tC))),128))])]))),128))]),Ot(Nd,{visible:i.value!==null,"image-list":a.value,"current-index":i.value??0,onClose:c[4]||(c[4]=l=>i.value=null),onChangeIndex:c[5]||(c[5]=l=>i.value=l)},null,8,["visible","image-list","current-index"])])):an("",!0)}},oC={class:"rounded-xl border border-gray-200 bg-white p-3 shadow-lg"},iC={class:"mb-2"},aC={class:"grid grid-cols-3 gap-1.5","aria-label":"图片排列"},sC=["onClick"],uC=["src","alt"],cC={__name:"PreviewAside",props:{previewImages:{type:Array,default:()=>[]},previewAsideStyle:{type:Object,default:()=>({})},previewCellStyle:{type:Object,default:()=>({})},previewImgStyle:{type:Object,default:()=>({})},previewPosition:{type:Object,default:null},setAsideRef:{type:Function,default:null}},emits:["drag-start","copy-rendered"],setup(n){const t=n,e=kt(null),r=kt(null);return va(()=>{e.value&&t.setAsideRef&&t.setAsideRef(e.value)}),(o,i)=>{var a,s;return n.previewImages.length?(He(),Qe("aside",{key:0,ref_key:"asideElRef",ref:e,class:$o(["h-fit",n.previewPosition?"fixed z-40":"sticky top-4"]),style:ir(n.previewAsideStyle)},[me("div",oC,[me("div",{class:"mb-2 flex cursor-grab select-none items-center justify-between border-b border-gray-100 pb-2 active:cursor-grabbing",onMousedown:i[0]||(i[0]=Un(u=>o.$emit("drag-start",u),["prevent"]))},[...i[3]||(i[3]=[me("span",{class:"text-sm font-medium text-gray-600"},"实时预览",-1),me("span",{class:"text-xs text-gray-400"},"拖动移动",-1)])],32),me("div",iC,[me("button",{type:"button",class:"rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 hover:bg-gray-50",onClick:i[1]||(i[1]=u=>o.$emit("copy-rendered"))}," 渲染后样式复制 ")]),me("section",aC,[(He(!0),Qe(Dt,null,Mi(n.previewImages,(u,c)=>(He(),Qe("button",{key:c,type:"button",class:"overflow-hidden rounded border bg-gray-100 text-left transition hover:ring-2 hover:ring-blue-400",style:ir(n.previewCellStyle),onClick:l=>{var f;return r.value={url:u.url,alt:((f=u.file)==null?void 0:f.name)||""}}},[me("img",{src:u.url,alt:u.file.name,class:"h-full w-full object-cover",style:ir(n.previewImgStyle)},null,12,uC)],12,sC))),128))])]),Ot(Nd,{visible:!!r.value,"image-url":((a=r.value)==null?void 0:a.url)??"",alt:((s=r.value)==null?void 0:s.alt)??"",onClose:i[2]||(i[2]=u=>r.value=null)},null,8,["visible","image-url","alt"])],6)):an("",!0)}}},lC="/assets/zsm-Dz0yW_9g.jpg",fC=(n,t)=>{const e=n.__vccOpts||n;for(const[r,o]of t)e[r]=o;return e},hC={},pC={class:"rounded-xl border border-gray-200 bg-white p-3 shadow"};function dC(n,t){return He(),Qe("section",pC,[...t[0]||(t[0]=[me("p",{class:"mb-2 text-center text-sm font-medium text-gray-600"},"作者",-1),me("img",{src:lC,alt:"作者",class:"w-full rounded-lg object-cover"},null,-1)])])}const vC=fC(hC,[["render",dC]]),gC={class:"max-h-[90vh] overflow-auto rounded-lg bg-white p-4 shadow-xl"},mC={class:"mb-3 flex items-center justify-between"},yC={class:"text-sm text-gray-600"},bC={class:"grid max-w-[min(360px,85vw)] grid-cols-3 gap-1.5","aria-label":"图片排列"},xC=["src","alt"],wC={__name:"PreviewModal",props:{visible:{type:Boolean,default:!1},previewImages:{type:Array,default:()=>[]},cropWidth:{type:Number,default:224},cropHeight:{type:Number,default:224},previewCellStyle:{type:Object,default:()=>({})},previewImgStyle:{type:Object,default:()=>({})}},emits:["close"],setup(n){return(t,e)=>(He(),Lo(Vf,{to:"body"},[n.visible?(He(),Qe("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4",onClick:e[1]||(e[1]=Un(r=>t.$emit("close"),["self"]))},[me("div",gC,[me("div",mC,[me("span",yC,"裁剪 "+lr(n.cropWidth)+"×"+lr(n.cropHeight)+"（九宫格）",1),me("button",{type:"button",class:"text-gray-400 hover:text-gray-600",onClick:e[0]||(e[0]=r=>t.$emit("close"))},"✕")]),me("section",bC,[(He(!0),Qe(Dt,null,Mi(n.previewImages,(r,o)=>(He(),Qe("div",{key:o,class:"overflow-hidden rounded border bg-gray-100",style:ir(n.previewCellStyle)},[me("img",{src:r.url,alt:r.file.name,class:"h-full w-full object-cover",style:ir(n.previewImgStyle)},null,12,xC)],4))),128))])])])):an("",!0)]))}},_C={class:"min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8"},CC={class:"mx-auto max-w-6xl"},EC={key:0,class:"mt-2 text-gray-500"},IC={key:1,class:"mt-2 text-green-600"},RC={class:"mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8"},SC={class:"min-w-0 flex-1"},kC={class:"flex w-72 max-w-[90vw] shrink-0 flex-col gap-4 lg:w-80"},AC={__name:"App",setup(n){const{modelsReady:t}=T_(),{uploadedImages:e,cropWidth:r,cropHeight:o,isDragging:i,showPreview:a,checkedGroupKeys:s,groups:u,previewImages:c,previewCellStyle:l,previewImgStyle:f,addFiles:h,clearImages:p}=P_(),{previewAsideRef:d,previewPosition:g,previewAsideStyle:v,onPreviewDragStart:m}=M_();async function b(){await O_(c.value,r.value,o.value)}return(x,y)=>(He(),Qe("div",_C,[me("div",CC,[y[7]||(y[7]=me("h1",{class:"text-xl font-semibold text-gray-800 sm:text-2xl"},"人脸裁剪排列",-1)),Ue(t)?(He(),Qe("p",IC,"模型已就绪")):(He(),Qe("p",EC,"正在加载人脸检测模型…")),me("div",RC,[me("div",SC,[Ue(t)?(He(),Qe(Dt,{key:0},[Ot(V_,{"uploaded-images":Ue(e),"is-dragging":Ue(i),"onUpdate:isDragging":y[0]||(y[0]=w=>i.value=w),onFileChange:Ue(h),onDrop:y[1]||(y[1]=w=>Ue(h)(w)),onClear:Ue(p)},null,8,["uploaded-images","is-dragging","onFileChange","onClear"]),Ot(rC,{groups:Ue(u),"preview-images":Ue(c),"crop-width":Ue(r),"onUpdate:cropWidth":y[2]||(y[2]=w=>rt(r)?r.value=w:null),"crop-height":Ue(o),"onUpdate:cropHeight":y[3]||(y[3]=w=>rt(o)?o.value=w:null),"checked-group-keys":Ue(s),"onUpdate:checkedGroupKeys":y[4]||(y[4]=w=>rt(s)?s.value=w:null),onOpenPreview:y[5]||(y[5]=w=>a.value=!0)},null,8,["groups","preview-images","crop-width","crop-height","checked-group-keys"])],64)):an("",!0)]),me("div",kC,[Ue(t)?(He(),Lo(cC,{key:0,"preview-images":Ue(c),"preview-aside-style":Ue(v),"preview-cell-style":Ue(l),"preview-img-style":Ue(f),"preview-position":Ue(g),"set-aside-ref":w=>{Ue(d).value=w},onDragStart:Ue(m),onCopyRendered:b},null,8,["preview-images","preview-aside-style","preview-cell-style","preview-img-style","preview-position","set-aside-ref","onDragStart"])):an("",!0),Ue(t)?(He(),Lo(vC,{key:1})):an("",!0)])])]),Ot(wC,{visible:Ue(a),"preview-images":Ue(c),"crop-width":Ue(r),"crop-height":Ue(o),"preview-cell-style":Ue(l),"preview-img-style":Ue(f),onClose:y[6]||(y[6]=w=>a.value=!1)},null,8,["visible","preview-images","crop-width","crop-height","preview-cell-style","preview-img-style"])]))}};om(AC).mount("#app")});export default DC();
