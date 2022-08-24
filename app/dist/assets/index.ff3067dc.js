(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Os(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Oc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ac=Os(Oc);function Co(t){return!!t||t===""}function As(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?Nc(r):As(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ae(t))return t;if(re(t))return t}}const Pc=/;(?![^(]*\))/g,kc=/:(.+)/;function Nc(t){const e={};return t.split(Pc).forEach(n=>{if(n){const r=n.split(kc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ps(t){let e="";if(ae(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=Ps(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Mc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Bn(t[r],e[r]);return n}function Bn(t,e){if(t===e)return!0;let n=ci(t),r=ci(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Rn(t),r=Rn(e),n||r)return t===e;if(n=D(t),r=D(e),n||r)return n&&r?Mc(t,e):!1;if(n=re(t),r=re(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Bn(t[o],e[o]))return!1}}return String(t)===String(e)}function ks(t,e){return t.findIndex(n=>Bn(n,e))}const Dc=t=>ae(t)?t:t==null?"":D(t)||re(t)&&(t.toString===Po||!B(t.toString))?JSON.stringify(t,Oo,2):String(t),Oo=(t,e)=>e&&e.__v_isRef?Oo(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:rn(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!D(e)&&!ko(e)?String(e):e,Q={},zt=[],ke=()=>{},xc=()=>!1,Lc=/^on[^a-z]/,Cr=t=>Lc.test(t),Ns=t=>t.startsWith("onUpdate:"),pe=Object.assign,Ms=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uc=Object.prototype.hasOwnProperty,V=(t,e)=>Uc.call(t,e),D=Array.isArray,Kt=t=>$n(t)==="[object Map]",rn=t=>$n(t)==="[object Set]",ci=t=>$n(t)==="[object Date]",B=t=>typeof t=="function",ae=t=>typeof t=="string",Rn=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Ao=t=>re(t)&&B(t.then)&&B(t.catch),Po=Object.prototype.toString,$n=t=>Po.call(t),Fc=t=>$n(t).slice(8,-1),ko=t=>$n(t)==="[object Object]",Ds=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sr=Os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bc=/-(\w)/g,Ve=Or(t=>t.replace(Bc,(e,n)=>n?n.toUpperCase():"")),$c=/\B([A-Z])/g,sn=Or(t=>t.replace($c,"-$1").toLowerCase()),Ar=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),jr=Or(t=>t?`on${Ar(t)}`:""),Sn=(t,e)=>!Object.is(t,e),ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let li;const Hc=()=>li||(li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Fe;class jc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Fe&&(this.parent=Fe,this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Vc(t,e=Fe){e&&e.active&&e.effects.push(t)}const xs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},No=t=>(t.w&gt)>0,Mo=t=>(t.n&gt)>0,Wc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},zc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];No(s)&&!Mo(s)?s.delete(t):e[n++]=s,s.w&=~gt,s.n&=~gt}e.length=n}},rs=new WeakMap;let pn=0,gt=1;const ss=30;let Ce;const Tt=Symbol(""),is=Symbol("");class Ls{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vc(this,r)}run(){if(!this.active)return this.fn();let e=Ce,n=ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ce,Ce=this,ft=!0,gt=1<<++pn,pn<=ss?Wc(this):ui(this),this.fn()}finally{pn<=ss&&zc(this),gt=1<<--pn,Ce=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ce===this?this.deferStop=!0:this.active&&(ui(this),this.onStop&&this.onStop(),this.active=!1)}}function ui(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ft=!0;const Do=[];function on(){Do.push(ft),ft=!1}function an(){const t=Do.pop();ft=t===void 0?!0:t}function be(t,e,n){if(ft&&Ce){let r=rs.get(t);r||rs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=xs()),xo(s)}}function xo(t,e){let n=!1;pn<=ss?Mo(t)||(t.n|=gt,n=!No(t)):n=!t.has(Ce),n&&(t.add(Ce),Ce.deps.push(t))}function Xe(t,e,n,r,s,i){const o=rs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&D(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":D(t)?Ds(n)&&a.push(o.get("length")):(a.push(o.get(Tt)),Kt(t)&&a.push(o.get(is)));break;case"delete":D(t)||(a.push(o.get(Tt)),Kt(t)&&a.push(o.get(is)));break;case"set":Kt(t)&&a.push(o.get(Tt));break}if(a.length===1)a[0]&&os(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);os(xs(c))}}function os(t,e){const n=D(t)?t:[...t];for(const r of n)r.computed&&fi(r);for(const r of n)r.computed||fi(r)}function fi(t,e){(t!==Ce||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kc=Os("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn)),qc=Us(),Gc=Us(!1,!0),Jc=Us(!0),di=Yc();function Yc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on();const r=K(this)[e].apply(this,n);return an(),r}}),t}function Us(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?dl:Ho:e?$o:Bo).get(r))return r;const o=D(r);if(!t&&o&&V(di,s))return Reflect.get(di,s,i);const a=Reflect.get(r,s,i);return(Rn(s)?Lo.has(s):Kc(s))||(t||be(r,"get",s),e)?a:fe(a)?o&&Ds(s)?a:a.value:re(a)?t?jo(a):Hn(a):a}}const Xc=Uo(),Qc=Uo(!0);function Uo(t=!1){return function(n,r,s,i){let o=n[r];if(Cn(o)&&fe(o)&&!fe(s))return!1;if(!t&&!Cn(s)&&(as(s)||(s=K(s),o=K(o)),!D(n)&&fe(o)&&!fe(s)))return o.value=s,!0;const a=D(n)&&Ds(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Sn(s,o)&&Xe(n,"set",r,s):Xe(n,"add",r,s)),c}}function Zc(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xe(t,"delete",e,void 0),r}function el(t,e){const n=Reflect.has(t,e);return(!Rn(e)||!Lo.has(e))&&be(t,"has",e),n}function tl(t){return be(t,"iterate",D(t)?"length":Tt),Reflect.ownKeys(t)}const Fo={get:qc,set:Xc,deleteProperty:Zc,has:el,ownKeys:tl},nl={get:Jc,set(t,e){return!0},deleteProperty(t,e){return!0}},rl=pe({},Fo,{get:Gc,set:Qc}),Fs=t=>t,Pr=t=>Reflect.getPrototypeOf(t);function Qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&be(s,"get",e),be(s,"get",i));const{has:o}=Pr(s),a=r?Fs:n?Hs:On;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Zn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&be(r,"has",t),be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function er(t,e=!1){return t=t.__v_raw,!e&&be(K(t),"iterate",Tt),Reflect.get(t,"size",t)}function hi(t){t=K(t);const e=K(this);return Pr(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function pi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Pr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Sn(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function gi(t){const e=K(this),{has:n,get:r}=Pr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xe(e,"delete",t,void 0),i}function mi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function tr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Fs:t?Hs:On;return!t&&be(a,"iterate",Tt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function nr(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Kt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Fs:e?Hs:On;return!e&&be(i,"iterate",c?is:Tt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function sl(){const t={get(i){return Qn(this,i)},get size(){return er(this)},has:Zn,add:hi,set:pi,delete:gi,clear:mi,forEach:tr(!1,!1)},e={get(i){return Qn(this,i,!1,!0)},get size(){return er(this)},has:Zn,add:hi,set:pi,delete:gi,clear:mi,forEach:tr(!1,!0)},n={get(i){return Qn(this,i,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:tr(!0,!1)},r={get(i){return Qn(this,i,!0,!0)},get size(){return er(this,!0)},has(i){return Zn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:tr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=nr(i,!1,!1),n[i]=nr(i,!0,!1),e[i]=nr(i,!1,!0),r[i]=nr(i,!0,!0)}),[t,n,e,r]}const[il,ol,al,cl]=sl();function Bs(t,e){const n=e?t?cl:al:t?ol:il;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const ll={get:Bs(!1,!1)},ul={get:Bs(!1,!0)},fl={get:Bs(!0,!1)},Bo=new WeakMap,$o=new WeakMap,Ho=new WeakMap,dl=new WeakMap;function hl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pl(t){return t.__v_skip||!Object.isExtensible(t)?0:hl(Fc(t))}function Hn(t){return Cn(t)?t:$s(t,!1,Fo,ll,Bo)}function gl(t){return $s(t,!1,rl,ul,$o)}function jo(t){return $s(t,!0,nl,fl,Ho)}function $s(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function qt(t){return Cn(t)?qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function as(t){return!!(t&&t.__v_isShallow)}function Vo(t){return qt(t)||Cn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Wo(t){return pr(t,"__v_skip",!0),t}const On=t=>re(t)?Hn(t):t,Hs=t=>re(t)?jo(t):t;function zo(t){ft&&Ce&&(t=K(t),xo(t.dep||(t.dep=xs())))}function Ko(t,e){t=K(t),t.dep&&os(t.dep)}function fe(t){return!!(t&&t.__v_isRef===!0)}function ml(t){return qo(t,!1)}function _l(t){return qo(t,!0)}function qo(t,e){return fe(t)?t:new vl(t,e)}class vl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:On(e)}get value(){return zo(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),Sn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:On(e),Ko(this))}}function Rt(t){return fe(t)?t.value:t}const yl={get:(t,e,n)=>Rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Go(t){return qt(t)?t:new Proxy(t,yl)}class bl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ls(e,()=>{this._dirty||(this._dirty=!0,Ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return zo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Il(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=ke):(r=t.get,s=t.set),new bl(r,s,i||!s,n)}function dt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){kr(i,e,n)}return s}function Ne(t,e,n,r){if(B(t)){const i=dt(t,e,n,r);return i&&Ao(i)&&i.catch(o=>{kr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function kr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){dt(c,null,10,[t,o,a]);return}}wl(t,n,s,r)}function wl(t,e,n,r=!0){console.error(t)}let mr=!1,cs=!1;const ye=[];let Ge=0;const vn=[];let gn=null,Ht=0;const yn=[];let st=null,jt=0;const Jo=Promise.resolve();let js=null,ls=null;function Yo(t){const e=js||Jo;return t?e.then(this?t.bind(this):t):e}function El(t){let e=Ge+1,n=ye.length;for(;e<n;){const r=e+n>>>1;An(ye[r])<t?e=r+1:n=r}return e}function Xo(t){(!ye.length||!ye.includes(t,mr&&t.allowRecurse?Ge+1:Ge))&&t!==ls&&(t.id==null?ye.push(t):ye.splice(El(t.id),0,t),Qo())}function Qo(){!mr&&!cs&&(cs=!0,js=Jo.then(ta))}function Tl(t){const e=ye.indexOf(t);e>Ge&&ye.splice(e,1)}function Zo(t,e,n,r){D(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Qo()}function Rl(t){Zo(t,gn,vn,Ht)}function Sl(t){Zo(t,st,yn,jt)}function Nr(t,e=null){if(vn.length){for(ls=e,gn=[...new Set(vn)],vn.length=0,Ht=0;Ht<gn.length;Ht++)gn[Ht]();gn=null,Ht=0,ls=null,Nr(t,e)}}function ea(t){if(Nr(),yn.length){const e=[...new Set(yn)];if(yn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>An(n)-An(r)),jt=0;jt<st.length;jt++)st[jt]();st=null,jt=0}}const An=t=>t.id==null?1/0:t.id;function ta(t){cs=!1,mr=!0,Nr(t),ye.sort((n,r)=>An(n)-An(r));const e=ke;try{for(Ge=0;Ge<ye.length;Ge++){const n=ye[Ge];n&&n.active!==!1&&dt(n,null,14)}}finally{Ge=0,ye.length=0,ea(),mr=!1,js=null,(ye.length||vn.length||yn.length)&&ta(t)}}function Cl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p&&(s=n.map(_=>_.trim())),h&&(s=n.map(gr))}let a,c=r[a=jr(e)]||r[a=jr(Ve(e))];!c&&i&&(c=r[a=jr(sn(e))]),c&&Ne(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(l,t,6,s)}}function na(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=na(l,e,!0);f&&(a=!0,pe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(D(i)?i.forEach(c=>o[c]=null):pe(o,i),r.set(t,o),o)}function Mr(t,e){return!t||!Cr(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,sn(e))||V(t,e))}let Ae=null,ra=null;function _r(t){const e=Ae;return Ae=t,ra=t&&t.type.__scopeId||null,e}function Wt(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ci(-1);const i=_r(e),o=t(...s);return _r(i),r._d&&Ci(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Vr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:_,ctx:S,inheritAttrs:U}=t;let O,C;const F=_r(t);try{if(n.shapeFlag&4){const z=s||r;O=Be(f.call(z,z,h,i,_,p,S)),C=c}else{const z=e;O=Be(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),C=e.props?c:Ol(c)}}catch(z){bn.length=0,kr(z,t,1),O=oe(At)}let j=O;if(C&&U!==!1){const z=Object.keys(C),{shapeFlag:ce}=j;z.length&&ce&7&&(o&&z.some(Ns)&&(C=Al(C,o)),j=Xt(j,C))}return n.dirs&&(j=Xt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),O=j,_r(F),O}const Ol=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cr(n))&&((e||(e={}))[n]=t[n]);return e},Al=(t,e)=>{const n={};for(const r in t)(!Ns(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_i(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Mr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_i(r,o,l):!0:!!o;return!1}function _i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Mr(n,i))return!0}return!1}function kl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Nl=t=>t.__isSuspense;function Ml(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Sl(t)}function or(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function ht(t,e,n=!1){const r=ue||Ae;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const vi={};function ar(t,e,n){return sa(t,e,n)}function sa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=ue;let c,l=!1,f=!1;if(fe(t)?(c=()=>t.value,l=as(t)):qt(t)?(c=()=>t,r=!0):D(t)?(f=!0,l=t.some(C=>qt(C)||as(C)),c=()=>t.map(C=>{if(fe(C))return C.value;if(qt(C))return wt(C);if(B(C))return dt(C,a,2)})):B(t)?e?c=()=>dt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ne(t,a,3,[p])}:c=ke,e&&r){const C=c;c=()=>wt(C())}let h,p=C=>{h=O.onStop=()=>{dt(C,a,4)}};if(kn)return p=ke,e?n&&Ne(e,a,3,[c(),f?[]:void 0,p]):c(),ke;let _=f?[]:vi;const S=()=>{if(!!O.active)if(e){const C=O.run();(r||l||(f?C.some((F,j)=>Sn(F,_[j])):Sn(C,_)))&&(h&&h(),Ne(e,a,3,[C,_===vi?void 0:_,p]),_=C)}else O.run()};S.allowRecurse=!!e;let U;s==="sync"?U=S:s==="post"?U=()=>me(S,a&&a.suspense):U=()=>Rl(S);const O=new Ls(c,U);return e?n?S():_=O.run():s==="post"?me(O.run.bind(O),a&&a.suspense):O.run(),()=>{O.stop(),a&&a.scope&&Ms(a.scope.effects,O)}}function Dl(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?ia(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ue;Qt(this);const a=sa(s,i.bind(r),n);return o?Qt(o):Ct(),a}function ia(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function wt(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),fe(t))wt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if(rn(t)||Kt(t))t.forEach(n=>{wt(n,e)});else if(ko(t))for(const n in t)wt(t[n],e);return t}function oa(t){return B(t)?{setup:t,name:t.name}:t}const cr=t=>!!t.type.__asyncLoader,aa=t=>t.type.__isKeepAlive;function xl(t,e){ca(t,"a",e)}function Ll(t,e){ca(t,"da",e)}function ca(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Dr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)aa(s.parent.vnode)&&Ul(r,e,n,s),s=s.parent}}function Ul(t,e,n,r){const s=Dr(e,t,r,!0);la(()=>{Ms(r[e],s)},n)}function Dr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on(),Qt(n);const a=Ne(e,n,t,o);return Ct(),an(),a});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=ue)=>(!kn||t==="sp")&&Dr(t,e,n),Fl=Ze("bm"),Bl=Ze("m"),$l=Ze("bu"),Hl=Ze("u"),jl=Ze("bum"),la=Ze("um"),Vl=Ze("sp"),Wl=Ze("rtg"),zl=Ze("rtc");function Kl(t,e=ue){Dr("ec",t,e)}function yi(t,e){const n=Ae;if(n===null)return t;const r=Lr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&wt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function _t(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(on(),Ne(c,n,8,[t.el,a,t,e]),an())}}const ua="components";function fa(t,e){return Gl(ua,t,!0,e)||t}const ql=Symbol();function Gl(t,e,n=!0,r=!1){const s=Ae||ue;if(s){const i=s.type;if(t===ua){const a=Eu(i,!1);if(a&&(a===e||a===Ve(e)||a===Ar(Ve(e))))return i}const o=bi(s[t]||i[t],e)||bi(s.appContext[t],e);return!o&&r?i:o}}function bi(t,e){return t&&(t[e]||t[Ve(e)]||t[Ar(Ve(e))])}function cm(t,e,n,r){let s;const i=n&&n[r];if(D(t)||ae(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(re(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const us=t=>t?Ea(t)?Lr(t)||t.proxy:us(t.parent):null,vr=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>us(t.parent),$root:t=>us(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>Xo(t.update)),$nextTick:t=>t.n||(t.n=Yo.bind(t.proxy)),$watch:t=>Dl.bind(t)}),Jl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&V(r,e))return o[e]=1,r[e];if(s!==Q&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==Q&&V(n,e))return o[e]=4,n[e];fs&&(o[e]=0)}}const f=vr[e];let h,p;if(f)return e==="$attrs"&&be(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&V(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,V(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&V(s,e)?(s[e]=n,!0):r!==Q&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&V(t,o)||e!==Q&&V(e,o)||(a=i[0])&&V(a,o)||V(r,o)||V(vr,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let fs=!0;function Yl(t){const e=ha(t),n=t.proxy,r=t.ctx;fs=!1,e.beforeCreate&&Ii(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:S,activated:U,deactivated:O,beforeDestroy:C,beforeUnmount:F,destroyed:j,unmounted:z,render:ce,renderTracked:le,renderTriggered:Ie,errorCaptured:et,serverPrefetch:ge,expose:De,inheritAttrs:We,components:Re,directives:xt,filters:Lt}=e;if(l&&Xl(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const q=o[Z];B(q)&&(r[Z]=q.bind(n))}if(s){const Z=s.call(n,n);re(Z)&&(t.data=Hn(Z))}if(fs=!0,i)for(const Z in i){const q=i[Z],_e=B(q)?q.bind(n,n):B(q.get)?q.get.bind(n,n):ke,Ft=!B(q)&&B(q.set)?q.set.bind(n):ke,ze=Ee({get:_e,set:Ft});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ze.value,set:xe=>ze.value=xe})}if(a)for(const Z in a)da(a[Z],r,n,Z);if(c){const Z=B(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(q=>{or(q,Z[q])})}f&&Ii(f,t,"c");function se(Z,q){D(q)?q.forEach(_e=>Z(_e.bind(n))):q&&Z(q.bind(n))}if(se(Fl,h),se(Bl,p),se($l,_),se(Hl,S),se(xl,U),se(Ll,O),se(Kl,et),se(zl,le),se(Wl,Ie),se(jl,F),se(la,z),se(Vl,ge),D(De))if(De.length){const Z=t.exposed||(t.exposed={});De.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:_e=>n[q]=_e})})}else t.exposed||(t.exposed={});ce&&t.render===ke&&(t.render=ce),We!=null&&(t.inheritAttrs=We),Re&&(t.components=Re),xt&&(t.directives=xt)}function Xl(t,e,n=ke,r=!1){D(t)&&(t=ds(t));for(const s in t){const i=t[s];let o;re(i)?"default"in i?o=ht(i.from||s,i.default,!0):o=ht(i.from||s):o=ht(i),fe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ii(t,e,n){Ne(D(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function da(t,e,n,r){const s=r.includes(".")?ia(n,r):()=>n[r];if(ae(t)){const i=e[t];B(i)&&ar(s,i)}else if(B(t))ar(s,t.bind(n));else if(re(t))if(D(t))t.forEach(i=>da(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&ar(s,i,t)}}function ha(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>yr(c,l,o,!0)),yr(c,e,o)),i.set(e,c),c}function yr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&yr(t,i,n,!0),s&&s.forEach(o=>yr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ql[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ql={data:wi,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:yt,directives:yt,watch:eu,provide:wi,inject:Zl};function wi(t,e){return e?t?function(){return pe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Zl(t,e){return yt(ds(t),ds(e))}function ds(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function yt(t,e){return t?pe(pe(Object.create(null),t),e):e}function eu(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function tu(t,e,n,r=!1){const s={},i={};pr(i,xr,1),t.propsDefaults=Object.create(null),pa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Mr(t.emitsOptions,p))continue;const _=e[p];if(c)if(V(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const S=Ve(p);s[S]=hs(c,a,S,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{pa(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!V(e,h)&&((f=sn(h))===h||!V(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=hs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!V(e,h)&&!0)&&(delete i[h],l=!0)}l&&Xe(t,"set","$attrs")}function pa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(sr(c))continue;const l=e[c];let f;s&&V(s,f=Ve(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Mr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=hs(s,c,h,l[h],t,!V(l,h))}}return o}function hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Qt(s),r=l[n]=c.call(null,e),Ct())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}function ga(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,_]=ga(h,e,!0);pe(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,zt),zt;if(D(i))for(let f=0;f<i.length;f++){const h=Ve(i[f]);Ei(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=Ve(f);if(Ei(h)){const p=i[f],_=o[h]=D(p)||B(p)?{type:p}:p;if(_){const S=Si(Boolean,_.type),U=Si(String,_.type);_[0]=S>-1,_[1]=U<0||S<U,(S>-1||V(_,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ei(t){return t[0]!=="$"}function Ti(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ri(t,e){return Ti(t)===Ti(e)}function Si(t,e){return D(e)?e.findIndex(n=>Ri(n,t)):B(e)&&Ri(e,t)?0:-1}const ma=t=>t[0]==="_"||t==="$stable",Vs=t=>D(t)?t.map(Be):[Be(t)],ru=(t,e,n)=>{if(e._n)return e;const r=Wt((...s)=>Vs(e(...s)),n);return r._c=!1,r},_a=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ma(s))continue;const i=t[s];if(B(i))e[s]=ru(s,i,r);else if(i!=null){const o=Vs(i);e[s]=()=>o}}},va=(t,e)=>{const n=Vs(e);t.slots.default=()=>n},su=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),pr(e,"_",n)):_a(e,t.slots={})}else t.slots={},e&&va(t,e);pr(t.slots,xr,1)},iu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,_a(e,s)),o=e}else e&&(va(t,e),o={default:1});if(i)for(const a in s)!ma(a)&&!(a in o)&&delete s[a]};function ya(){return{app:null,config:{isNativeTag:xc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ou=0;function au(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!re(s)&&(s=null);const i=ya(),o=new Set;let a=!1;const c=i.app={_uid:ou++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ru,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=oe(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Lr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function ps(t,e,n,r,s=!1){if(D(t)){t.forEach((p,_)=>ps(p,e&&(D(e)?e[_]:e),n,r,s));return}if(cr(r)&&!s)return;const i=r.shapeFlag&4?Lr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ae(l)?(f[l]=null,V(h,l)&&(h[l]=null)):fe(l)&&(l.value=null)),B(c))dt(c,a,12,[o,f]);else{const p=ae(c),_=fe(c);if(p||_){const S=()=>{if(t.f){const U=p?f[c]:c.value;s?D(U)&&Ms(U,i):D(U)?U.includes(i)||U.push(i):p?(f[c]=[i],V(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,V(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,me(S,n)):S()}}}const me=Ml;function cu(t){return lu(t)}function lu(t,e){const n=Hc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=ke,cloneNode:S,insertStaticContent:U}=t,O=(u,d,g,y=null,v=null,w=null,R=!1,I=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!dn(u,d)&&(y=k(u),we(u,v,w,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:A}=d;switch(b){case Ws:C(u,d,g,y);break;case At:F(u,d,g,y);break;case Wr:u==null&&j(d,g,y,R);break;case qe:xt(u,d,g,y,v,w,R,I,E);break;default:A&1?le(u,d,g,y,v,w,R,I,E):A&6?Lt(u,d,g,y,v,w,R,I,E):(A&64||A&128)&&b.process(u,d,g,y,v,w,R,I,E,ee)}N!=null&&v&&ps(N,u&&u.ref,w,d||u,!d)},C=(u,d,g,y)=>{if(u==null)r(d.el=a(d.children),g,y);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},F=(u,d,g,y)=>{u==null?r(d.el=c(d.children||""),g,y):d.el=u.el},j=(u,d,g,y)=>{[u.el,u.anchor]=U(u.children,d,g,y,u.el,u.anchor)},z=({el:u,anchor:d},g,y)=>{let v;for(;u&&u!==d;)v=p(u),r(u,g,y),u=v;r(d,g,y)},ce=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},le=(u,d,g,y,v,w,R,I,E)=>{R=R||d.type==="svg",u==null?Ie(d,g,y,v,w,R,I,E):De(u,d,v,w,R,I,E)},Ie=(u,d,g,y,v,w,R,I)=>{let E,b;const{type:N,props:A,shapeFlag:M,transition:L,patchFlag:W,dirs:J}=u;if(u.el&&S!==void 0&&W===-1)E=u.el=S(u.el);else{if(E=u.el=o(u.type,w,A&&A.is,A),M&8?f(E,u.children):M&16&&ge(u.children,E,null,y,v,w&&N!=="foreignObject",R,I),J&&_t(u,null,y,"created"),A){for(const ne in A)ne!=="value"&&!sr(ne)&&i(E,ne,null,A[ne],w,u.children,y,v,T);"value"in A&&i(E,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Ue(b,y,u)}et(E,u,u.scopeId,R,y)}J&&_t(u,null,y,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&L&&!L.persisted;Y&&L.beforeEnter(E),r(E,d,g),((b=A&&A.onVnodeMounted)||Y||J)&&me(()=>{b&&Ue(b,y,u),Y&&L.enter(E),J&&_t(u,null,y,"mounted")},v)},et=(u,d,g,y,v)=>{if(g&&_(u,g),y)for(let w=0;w<y.length;w++)_(u,y[w]);if(v){let w=v.subTree;if(d===w){const R=v.vnode;et(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},ge=(u,d,g,y,v,w,R,I,E=0)=>{for(let b=E;b<u.length;b++){const N=u[b]=I?it(u[b]):Be(u[b]);O(null,N,d,g,y,v,w,R,I)}},De=(u,d,g,y,v,w,R)=>{const I=d.el=u.el;let{patchFlag:E,dynamicChildren:b,dirs:N}=d;E|=u.patchFlag&16;const A=u.props||Q,M=d.props||Q;let L;g&&vt(g,!1),(L=M.onVnodeBeforeUpdate)&&Ue(L,g,d,u),N&&_t(d,u,g,"beforeUpdate"),g&&vt(g,!0);const W=v&&d.type!=="foreignObject";if(b?We(u.dynamicChildren,b,I,g,y,W,w):R||_e(u,d,I,null,g,y,W,w,!1),E>0){if(E&16)Re(I,d,A,M,g,y,v);else if(E&2&&A.class!==M.class&&i(I,"class",null,M.class,v),E&4&&i(I,"style",A.style,M.style,v),E&8){const J=d.dynamicProps;for(let Y=0;Y<J.length;Y++){const ne=J[Y],Se=A[ne],Bt=M[ne];(Bt!==Se||ne==="value")&&i(I,ne,Se,Bt,v,u.children,g,y,T)}}E&1&&u.children!==d.children&&f(I,d.children)}else!R&&b==null&&Re(I,d,A,M,g,y,v);((L=M.onVnodeUpdated)||N)&&me(()=>{L&&Ue(L,g,d,u),N&&_t(d,u,g,"updated")},y)},We=(u,d,g,y,v,w,R)=>{for(let I=0;I<d.length;I++){const E=u[I],b=d[I],N=E.el&&(E.type===qe||!dn(E,b)||E.shapeFlag&70)?h(E.el):g;O(E,b,N,null,y,v,w,R,!0)}},Re=(u,d,g,y,v,w,R)=>{if(g!==y){for(const I in y){if(sr(I))continue;const E=y[I],b=g[I];E!==b&&I!=="value"&&i(u,I,b,E,R,d.children,v,w,T)}if(g!==Q)for(const I in g)!sr(I)&&!(I in y)&&i(u,I,g[I],null,R,d.children,v,w,T);"value"in y&&i(u,"value",g.value,y.value)}},xt=(u,d,g,y,v,w,R,I,E)=>{const b=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:L}=d;L&&(I=I?I.concat(L):L),u==null?(r(b,g,y),r(N,g,y),ge(d.children,g,N,v,w,R,I,E)):A>0&&A&64&&M&&u.dynamicChildren?(We(u.dynamicChildren,M,g,v,w,R,I),(d.key!=null||v&&d===v.subTree)&&ba(u,d,!0)):_e(u,d,g,N,v,w,R,I,E)},Lt=(u,d,g,y,v,w,R,I,E)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,y,R,E):Ut(d,g,y,v,w,R,E):se(u,d,E)},Ut=(u,d,g,y,v,w,R)=>{const I=u.component=vu(u,y,v);if(aa(u)&&(I.ctx.renderer=ee),yu(I),I.asyncDep){if(v&&v.registerDep(I,Z),!u.el){const E=I.subTree=oe(At);F(null,E,d,g)}return}Z(I,u,d,g,v,w,R)},se=(u,d,g)=>{const y=d.component=u.component;if(Pl(u,d,g))if(y.asyncDep&&!y.asyncResolved){q(y,d,g);return}else y.next=d,Tl(y.update),y.update();else d.el=u.el,y.vnode=d},Z=(u,d,g,y,v,w,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:A,u:M,parent:L,vnode:W}=u,J=N,Y;vt(u,!1),N?(N.el=W.el,q(u,N,R)):N=W,A&&ir(A),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(Y,L,N,W),vt(u,!0);const ne=Vr(u),Se=u.subTree;u.subTree=ne,O(Se,ne,h(Se.el),k(Se),u,v,w),N.el=ne.el,J===null&&kl(u,ne.el),M&&me(M,v),(Y=N.props&&N.props.onVnodeUpdated)&&me(()=>Ue(Y,L,N,W),v)}else{let N;const{el:A,props:M}=d,{bm:L,m:W,parent:J}=u,Y=cr(d);if(vt(u,!1),L&&ir(L),!Y&&(N=M&&M.onVnodeBeforeMount)&&Ue(N,J,d),vt(u,!0),A&&$){const ne=()=>{u.subTree=Vr(u),$(A,u.subTree,u,v,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Vr(u);O(null,ne,g,y,u,v,w),d.el=ne.el}if(W&&me(W,v),!Y&&(N=M&&M.onVnodeMounted)){const ne=d;me(()=>Ue(N,J,ne),v)}(d.shapeFlag&256||J&&cr(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&me(u.a,v),u.isMounted=!0,d=g=y=null}},E=u.effect=new Ls(I,()=>Xo(b),u.scope),b=u.update=()=>E.run();b.id=u.uid,vt(u,!0),b()},q=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,nu(u,d.props,y,g),iu(u,d.children,g),on(),Nr(void 0,u.update),an()},_e=(u,d,g,y,v,w,R,I,E=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,A=d.children,{patchFlag:M,shapeFlag:L}=d;if(M>0){if(M&128){ze(b,A,g,y,v,w,R,I,E);return}else if(M&256){Ft(b,A,g,y,v,w,R,I,E);return}}L&8?(N&16&&T(b,v,w),A!==b&&f(g,A)):N&16?L&16?ze(b,A,g,y,v,w,R,I,E):T(b,v,w,!0):(N&8&&f(g,""),L&16&&ge(A,g,y,v,w,R,I,E))},Ft=(u,d,g,y,v,w,R,I,E)=>{u=u||zt,d=d||zt;const b=u.length,N=d.length,A=Math.min(b,N);let M;for(M=0;M<A;M++){const L=d[M]=E?it(d[M]):Be(d[M]);O(u[M],L,g,null,v,w,R,I,E)}b>N?T(u,v,w,!0,!1,A):ge(d,g,y,v,w,R,I,E,A)},ze=(u,d,g,y,v,w,R,I,E)=>{let b=0;const N=d.length;let A=u.length-1,M=N-1;for(;b<=A&&b<=M;){const L=u[b],W=d[b]=E?it(d[b]):Be(d[b]);if(dn(L,W))O(L,W,g,null,v,w,R,I,E);else break;b++}for(;b<=A&&b<=M;){const L=u[A],W=d[M]=E?it(d[M]):Be(d[M]);if(dn(L,W))O(L,W,g,null,v,w,R,I,E);else break;A--,M--}if(b>A){if(b<=M){const L=M+1,W=L<N?d[L].el:y;for(;b<=M;)O(null,d[b]=E?it(d[b]):Be(d[b]),g,W,v,w,R,I,E),b++}}else if(b>M)for(;b<=A;)we(u[b],v,w,!0),b++;else{const L=b,W=b,J=new Map;for(b=W;b<=M;b++){const ve=d[b]=E?it(d[b]):Be(d[b]);ve.key!=null&&J.set(ve.key,b)}let Y,ne=0;const Se=M-W+1;let Bt=!1,ii=0;const fn=new Array(Se);for(b=0;b<Se;b++)fn[b]=0;for(b=L;b<=A;b++){const ve=u[b];if(ne>=Se){we(ve,v,w,!0);continue}let Le;if(ve.key!=null)Le=J.get(ve.key);else for(Y=W;Y<=M;Y++)if(fn[Y-W]===0&&dn(ve,d[Y])){Le=Y;break}Le===void 0?we(ve,v,w,!0):(fn[Le-W]=b+1,Le>=ii?ii=Le:Bt=!0,O(ve,d[Le],g,null,v,w,R,I,E),ne++)}const oi=Bt?uu(fn):zt;for(Y=oi.length-1,b=Se-1;b>=0;b--){const ve=W+b,Le=d[ve],ai=ve+1<N?d[ve+1].el:y;fn[b]===0?O(null,Le,g,ai,v,w,R,I,E):Bt&&(Y<0||b!==oi[Y]?xe(Le,g,ai,2):Y--)}}},xe=(u,d,g,y,v=null)=>{const{el:w,type:R,transition:I,children:E,shapeFlag:b}=u;if(b&6){xe(u.component.subTree,d,g,y);return}if(b&128){u.suspense.move(d,g,y);return}if(b&64){R.move(u,d,g,ee);return}if(R===qe){r(w,d,g);for(let A=0;A<E.length;A++)xe(E[A],d,g,y);r(u.anchor,d,g);return}if(R===Wr){z(u,d,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(w),r(w,d,g),me(()=>I.enter(w),v);else{const{leave:A,delayLeave:M,afterLeave:L}=I,W=()=>r(w,d,g),J=()=>{A(w,()=>{W(),L&&L()})};M?M(w,W,J):J()}else r(w,d,g)},we=(u,d,g,y=!1,v=!1)=>{const{type:w,props:R,ref:I,children:E,dynamicChildren:b,shapeFlag:N,patchFlag:A,dirs:M}=u;if(I!=null&&ps(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const L=N&1&&M,W=!cr(u);let J;if(W&&(J=R&&R.onVnodeBeforeUnmount)&&Ue(J,d,u),N&6)P(u.component,g,y);else{if(N&128){u.suspense.unmount(g,y);return}L&&_t(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,v,ee,y):b&&(w!==qe||A>0&&A&64)?T(b,d,g,!1,!0):(w===qe&&A&384||!v&&N&16)&&T(E,d,g),y&&un(u)}(W&&(J=R&&R.onVnodeUnmounted)||L)&&me(()=>{J&&Ue(J,d,u),L&&_t(u,null,d,"unmounted")},g)},un=u=>{const{type:d,el:g,anchor:y,transition:v}=u;if(d===qe){m(g,y);return}if(d===Wr){ce(u);return}const w=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,E=()=>R(g,w);I?I(u.el,w,E):E()}else w()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:y,scope:v,update:w,subTree:R,um:I}=u;y&&ir(y),v.stop(),w&&(w.active=!1,we(R,u,d,g)),I&&me(I,d),me(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,y=!1,v=!1,w=0)=>{for(let R=w;R<u.length;R++)we(u[R],d,g,y,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,g)=>{u==null?d._vnode&&we(d._vnode,null,null,!0):O(d._vnode||null,u,d,null,null,null,g),ea(),d._vnode=u},ee={p:O,um:we,m:xe,r:un,mt:Ut,mc:ge,pc:_e,pbc:We,n:k,o:t};let H,$;return e&&([H,$]=e(ee)),{render:G,hydrate:H,createApp:au(G,H)}}function vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ba(t,e,n=!1){const r=t.children,s=e.children;if(D(r)&&D(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=it(s[i]),a.el=o.el),n||ba(o,a))}}function uu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const fu=t=>t.__isTeleport,qe=Symbol(void 0),Ws=Symbol(void 0),At=Symbol(void 0),Wr=Symbol(void 0),bn=[];let Pe=null;function $e(t=!1){bn.push(Pe=t?null:[])}function du(){bn.pop(),Pe=bn[bn.length-1]||null}let Pn=1;function Ci(t){Pn+=t}function Ia(t){return t.dynamicChildren=Pn>0?Pe||zt:null,du(),Pn>0&&Pe&&Pe.push(t),t}function St(t,e,n,r,s,i){return Ia(ie(t,e,n,r,s,i,!0))}function gs(t,e,n,r,s){return Ia(oe(t,e,n,r,s,!0))}function ms(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const xr="__vInternal",wa=({key:t})=>t!=null?t:null,lr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ae(t)||fe(t)||B(t)?{i:Ae,r:t,k:e,f:!!n}:t:null;function ie(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wa(e),ref:e&&lr(e),scopeId:ra,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(zs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),Pn>0&&!o&&Pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pe.push(c),c}const oe=hu;function hu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ql)&&(t=At),ms(t)){const a=Xt(t,e,!0);return n&&zs(a,n),Pn>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag|=-2,a}if(Tu(t)&&(t=t.__vccOpts),e){e=pu(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=Ps(a)),re(c)&&(Vo(c)&&!D(c)&&(c=pe({},c)),e.style=As(c))}const o=ae(t)?1:Nl(t)?128:fu(t)?64:re(t)?4:B(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function pu(t){return t?Vo(t)||xr in t?pe({},t):t:null}function Xt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?gu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wa(a),ref:e&&e.ref?n&&s?D(s)?s.concat(lr(e)):[s,lr(e)]:lr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xt(t.ssContent),ssFallback:t.ssFallback&&Xt(t.ssFallback),el:t.el,anchor:t.anchor}}function cn(t=" ",e=0){return oe(Ws,null,t,e)}function In(t="",e=!1){return e?($e(),gs(At,null,t)):oe(At,null,t)}function Be(t){return t==null||typeof t=="boolean"?oe(At):D(t)?oe(qe,null,t.slice()):typeof t=="object"?it(t):oe(Ws,null,String(t))}function it(t){return t.el===null||t.memo?t:Xt(t)}function zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(xr in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function gu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ps([e.class,r.class]));else if(s==="style")e.style=As([e.style,r.style]);else if(Cr(s)){const i=e[s],o=r[s];o&&i!==o&&!(D(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ue(t,e,n,r=null){Ne(t,e,7,[n,r])}const mu=ya();let _u=0;function vu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mu,i={uid:_u++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ga(r,s),emitsOptions:na(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cl.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const Qt=t=>{ue=t,t.scope.on()},Ct=()=>{ue&&ue.scope.off(),ue=null};function Ea(t){return t.vnode.shapeFlag&4}let kn=!1;function yu(t,e=!1){kn=e;const{props:n,children:r}=t.vnode,s=Ea(t);tu(t,n,s,e),su(t,r);const i=s?bu(t,e):void 0;return kn=!1,i}function bu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wo(new Proxy(t.ctx,Jl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wu(t):null;Qt(t),on();const i=dt(r,t,0,[t.props,s]);if(an(),Ct(),Ao(i)){if(i.then(Ct,Ct),e)return i.then(o=>{Oi(t,o,e)}).catch(o=>{kr(o,t,0)});t.asyncDep=i}else Oi(t,i,e)}else Ta(t,e)}function Oi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Go(e)),Ta(t,n)}let Ai;function Ta(t,e,n){const r=t.type;if(!t.render){if(!e&&Ai&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=Ai(s,l)}}t.render=r.render||ke}Qt(t),on(),Yl(t),an(),Ct()}function Iu(t){return new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}})}function wu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Iu(t))},slots:t.slots,emit:t.emit,expose:e}}function Lr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Go(Wo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vr)return vr[n](t)}}))}function Eu(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Tu(t){return B(t)&&"__vccOpts"in t}const Ee=(t,e)=>Il(t,e,kn);function Ra(t,e,n){const r=arguments.length;return r===2?re(e)&&!D(e)?ms(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ms(n)&&(n=[n]),oe(t,e,n))}const Ru="3.2.37",Su="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Pi=It&&It.createElement("template"),Cu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?It.createElementNS(Su,t):It.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Pi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ou(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Au(t,e,n){const r=t.style,s=ae(n);if(n&&!s){for(const i in n)_s(r,i,n[i]);if(e&&!ae(e))for(const i in e)n[i]==null&&_s(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ki=/\s*!important$/;function _s(t,e,n){if(D(n))n.forEach(r=>_s(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pu(t,e);ki.test(n)?t.setProperty(sn(r),n.replace(ki,""),"important"):t[r]=n}}const Ni=["Webkit","Moz","ms"],zr={};function Pu(t,e){const n=zr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return zr[e]=r;r=Ar(r);for(let s=0;s<Ni.length;s++){const i=Ni[s]+r;if(i in t)return zr[e]=i}return e}const Mi="http://www.w3.org/1999/xlink";function ku(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Mi,e.slice(6,e.length)):t.setAttributeNS(Mi,e,n);else{const i=Ac(e);n==null||i&&!Co(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Co(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Sa,Mu]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let vs=0;const Du=Promise.resolve(),xu=()=>{vs=0},Lu=()=>vs||(Du.then(xu),vs=Sa());function at(t,e,n,r){t.addEventListener(e,n,r)}function Uu(t,e,n,r){t.removeEventListener(e,n,r)}function Fu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Bu(e);if(r){const l=i[e]=$u(r,s);at(t,a,l,c)}else o&&(Uu(t,a,o,c),i[e]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Bu(t){let e;if(Di.test(t)){e={};let n;for(;n=t.match(Di);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[sn(t.slice(2)),e]}function $u(t,e){const n=r=>{const s=r.timeStamp||Sa();(Mu||s>=n.attached-1)&&Ne(Hu(r,n.value),e,5,[r])};return n.value=t,n.attached=Lu(),n}function Hu(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xi=/^on[a-z]/,ju=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Ou(t,r,s):e==="style"?Au(t,n,r):Cr(e)?Ns(e)||Fu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vu(t,e,r,s))?Nu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ku(t,e,r,s))};function Vu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&xi.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xi.test(e)&&ae(n)?!1:e in t}const Zt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>ir(e,n):e};function Wu(t){t.target.composing=!0}function Li(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ui={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Zt(s);const i=r||s.props&&s.props.type==="number";at(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=gr(a)),t._assign(a)}),n&&at(t,"change",()=>{t.value=t.value.trim()}),e||(at(t,"compositionstart",Wu),at(t,"compositionend",Li),at(t,"change",Li))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Zt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&gr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},lm={deep:!0,created(t,e,n){t._assign=Zt(n),at(t,"change",()=>{const r=t._modelValue,s=Nn(t),i=t.checked,o=t._assign;if(D(r)){const a=ks(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(rn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Ca(t,i))})},mounted:Fi,beforeUpdate(t,e,n){t._assign=Zt(n),Fi(t,e,n)}};function Fi(t,{value:e,oldValue:n},r){t._modelValue=e,D(e)?t.checked=ks(e,r.props.value)>-1:rn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Bn(e,Ca(t,!0)))}const um={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=rn(e);at(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gr(Nn(o)):Nn(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Zt(r)},mounted(t,{value:e}){Bi(t,e)},beforeUpdate(t,e,n){t._assign=Zt(n)},updated(t,{value:e}){Bi(t,e)}};function Bi(t,e){const n=t.multiple;if(!(n&&!D(e)&&!rn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Nn(i);if(n)D(e)?i.selected=ks(e,o)>-1:i.selected=e.has(o);else if(Bn(Nn(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Nn(t){return"_value"in t?t._value:t.value}function Ca(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zu=["ctrl","shift","alt","meta"],Ku={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zu.some(n=>t[`${n}Key`]&&!e.includes(n))},qu=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Ku[e[s]];if(i&&i(n,e))return}return t(n,...r)},Gu=pe({patchProp:ju},Cu);let $i;function Ju(){return $i||($i=cu(Gu))}const Yu=(...t)=>{const e=Ju().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Xu(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Xu(t){return ae(t)?document.querySelector(t):t}const Oa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Qu={},Zu={class:"p-5 bg-primary dark:bg-zinc-800 text-white flex items-center w-full justify-evenly shadow"},ef=ie("h1",{class:"text-2xl"},"Izac's Bug Tracker",-1),tf={class:"flex-grow flex justify-center"},nf={class:"m-2"},rf=cn("Home"),sf={class:"m-2"},of=cn("Bugs"),af={class:"m-2"},cf=cn("Users"),lf=cn("My Account");function uf(t,e){const n=fa("router-link");return $e(),St("header",Zu,[ef,ie("ul",tf,[ie("li",nf,[oe(n,{to:"/"},{default:Wt(()=>[rf]),_:1})]),ie("li",sf,[oe(n,{to:"/bugs"},{default:Wt(()=>[of]),_:1})]),ie("li",af,[oe(n,{to:"/bugs"},{default:Wt(()=>[cf]),_:1})])]),oe(n,{to:"/account"},{default:Wt(()=>[lf]),_:1})])}const ff=Oa(Qu,[["render",uf]]);/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vt=typeof window<"u";function df(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Kr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const wn=()=>{},Me=Array.isArray,hf=/\/$/,pf=t=>t.replace(hf,"");function qr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vf(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function gf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&en(e.matched[r],n.matched[s])&&Aa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Aa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_f(t[n],e[n]))return!1;return!0}function _f(t,e){return Me(t)?ji(t,e):Me(e)?ji(e,t):t===e}function ji(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Mn;(function(t){t.pop="pop",t.push="push"})(Mn||(Mn={}));var En;(function(t){t.back="back",t.forward="forward",t.unknown=""})(En||(En={}));function yf(t){if(!t)if(Vt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pf(t)}const bf=/^[^#]+#/;function If(t,e){return t.replace(bf,"#")+e}function wf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ef(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vi(t,e){return(history.state?history.state.position-e:-1)+t}const ys=new Map;function Tf(t,e){ys.set(t,e)}function Rf(t){const e=ys.get(t);return ys.delete(t),e}let Sf=()=>location.protocol+"//"+location.host;function Pa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Hi(c,"")}return Hi(n,t)+r+s}function Cf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Pa(t,location),S=n.value,U=e.value;let O=0;if(p){if(n.value=_,e.value=p,o&&o===S){o=null;return}O=U?p.position-U.position:0}else r(_);s.forEach(C=>{C(n.value,S,{delta:O,type:Mn.pop,direction:O?O>0?En.forward:En.back:En.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:Ur()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Wi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ur():null}}function Of(t){const{history:e,location:n}=window,r={value:Pa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Sf()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=X({},e.state,Wi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=X({},s.value,e.state,{forward:c,scroll:Ur()});i(f.current,f,!0);const h=X({},Wi(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Af(t){t=yf(t);const e=Of(t),n=Cf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:If.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pf(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Af(t)}function kf(t){return typeof t=="string"||t&&typeof t=="object"}function ka(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Na=Symbol("");var zi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zi||(zi={}));function tn(t,e){return X(new Error,{type:t,[Na]:!0},e)}function Ke(t,e){return t instanceof Error&&Na in t&&(e==null||!!(t.type&e))}const Ki="[^/]+?",Nf={sensitive:!1,strict:!1,start:!0,end:!0},Mf=/[.+*?^${}()[\]/\\]/g;function Df(t,e){const n=X({},Nf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Mf,"\\$&"),_+=40;else if(p.type===1){const{value:S,repeatable:U,optional:O,regexp:C}=p;i.push({name:S,repeatable:U,optional:O});const F=C||Ki;if(F!==Ki){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${F}): `+z.message)}}let j=U?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(j=O&&l.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),U&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",S=i[p-1];h[S.name]=_&&S.repeatable?_.split("/"):_}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:U,optional:O}=_,C=S in l?l[S]:"";if(Me(C)&&!U)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const F=Me(C)?C.join("/"):C;if(!F)if(O)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function xf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Lf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qi(r))return 1;if(qi(s))return-1}return s.length-r.length}function qi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Uf={type:0,value:""},Ff=/[a-zA-Z0-9_]/;function Bf(t){if(!t)return[[]];if(t==="/")return[[Uf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ff.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function $f(t,e,n){const r=Df(Bf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Hf(t,e){const n=[],r=new Map;e=Ji({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const _=!p,S=Vf(f);S.aliasOf=p&&p.record;const U=Ji(e,f),O=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of j)O.push(X({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let C,F;for(const j of O){const{path:z}=j;if(h&&z[0]!=="/"){const ce=h.record.path,le=ce[ce.length-1]==="/"?"":"/";j.path=h.record.path+(z&&le+z)}if(C=$f(j,h,U),p?p.alias.push(C):(F=F||C,F!==C&&F.alias.push(C),_&&f.name&&!Gi(C)&&o(f.name)),S.children){const ce=S.children;for(let le=0;le<ce.length;le++)i(ce[le],C,p&&p.children[le])}p=p||C,c(C)}return F?()=>{o(F)}:wn}function o(f){if(ka(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Lf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Ma(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Gi(f)&&r.set(f.record.name,f)}function l(f,h){let p,_={},S,U;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw tn(1,{location:f});U=p.record.name,_=X(jf(h.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),f.params),S=p.stringify(_)}else if("path"in f)S=f.path,p=n.find(F=>F.re.test(S)),p&&(_=p.parse(S),U=p.record.name);else{if(p=h.name?r.get(h.name):n.find(F=>F.re.test(h.path)),!p)throw tn(1,{location:f,currentLocation:h});U=p.record.name,_=X({},h.params,f.params),S=p.stringify(_)}const O=[];let C=p;for(;C;)O.unshift(C.record),C=C.parent;return{name:U,path:S,params:_,matched:O,meta:zf(O)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function jf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Vf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Wf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Gi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zf(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Ji(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ma(t,e){return e.children.some(n=>n===t||Ma(t,n))}const Da=/#/g,Kf=/&/g,qf=/\//g,Gf=/=/g,Jf=/\?/g,xa=/\+/g,Yf=/%5B/g,Xf=/%5D/g,La=/%5E/g,Qf=/%60/g,Ua=/%7B/g,Zf=/%7C/g,Fa=/%7D/g,ed=/%20/g;function Ks(t){return encodeURI(""+t).replace(Zf,"|").replace(Yf,"[").replace(Xf,"]")}function td(t){return Ks(t).replace(Ua,"{").replace(Fa,"}").replace(La,"^")}function bs(t){return Ks(t).replace(xa,"%2B").replace(ed,"+").replace(Da,"%23").replace(Kf,"%26").replace(Qf,"`").replace(Ua,"{").replace(Fa,"}").replace(La,"^")}function nd(t){return bs(t).replace(Gf,"%3D")}function rd(t){return Ks(t).replace(Da,"%23").replace(Jf,"%3F")}function sd(t){return t==null?"":rd(t).replace(qf,"%2F")}function br(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function id(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xa," "),o=i.indexOf("="),a=br(o<0?i:i.slice(0,o)),c=o<0?null:br(i.slice(o+1));if(a in e){let l=e[a];Me(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yi(t){let e="";for(let n in t){const r=t[n];if(n=nd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&bs(i)):[r&&bs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function od(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ad=Symbol(""),Xi=Symbol(""),qs=Symbol(""),Ba=Symbol(""),Is=Symbol("");function hn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(tn(4,{from:n,to:e})):h instanceof Error?a(h):kf(h)?a(tn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Gr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(cd(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ot(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=df(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ot(p,n,r,i,o)()}))}}return s}function cd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qi(t){const e=ht(qs),n=ht(Ba),r=Ee(()=>e.resolve(Rt(t.to))),s=Ee(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(en.bind(null,f));if(p>-1)return p;const _=Zi(c[l-2]);return l>1&&Zi(f)===_&&h[h.length-1].path!==_?h.findIndex(en.bind(null,c[l-2])):p}),i=Ee(()=>s.value>-1&&dd(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&Aa(n.params,r.value.params));function a(c={}){return fd(c)?e[Rt(t.replace)?"replace":"push"](Rt(t.to)).catch(wn):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ld=oa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qi,setup(t,{slots:e}){const n=Hn(Qi(t)),{options:r}=ht(qs),s=Ee(()=>({[eo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ra("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ud=ld;function fd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eo=(t,e,n)=>t!=null?t:e!=null?e:n,hd=oa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ht(Is),s=Ee(()=>t.route||r.value),i=ht(Xi,0),o=Ee(()=>{let l=Rt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Ee(()=>s.value.matched[o.value]);or(Xi,Ee(()=>o.value+1)),or(ad,a),or(Is,s);const c=ml();return ar(()=>[c.value,a.value,t.name],([l,f,h],[p,_,S])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!en(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(U=>U(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return to(n.default,{Component:p,route:l});const _=h.props[f],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,O=Ra(p,X({},S,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return to(n.default,{Component:O,route:l})||O}}});function to(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $a=hd;function pd(t){const e=Hf(t.routes,t),n=t.parseQuery||id,r=t.stringifyQuery||Yi,s=t.history,i=hn(),o=hn(),a=hn(),c=_l(nt);let l=nt;Vt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Kr.bind(null,m=>""+m),h=Kr.bind(null,sd),p=Kr.bind(null,br);function _(m,P){let T,k;return ka(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function U(){return e.getRoutes().map(m=>m.record)}function O(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=X({},P||c.value),typeof m=="string"){const $=qr(n,m,P.path),u=e.resolve({path:$.path},P),d=s.createHref($.fullPath);return X($,u,{params:p(u.params),hash:br($.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=X({},m,{path:qr(n,m.path,P.path).path});else{const $=X({},m.params);for(const u in $)$[u]==null&&delete $[u];T=X({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),G=m.hash||"";k.params=f(p(k.params));const ee=gf(r,X({},m,{hash:td(G),path:k.path})),H=s.createHref(ee);return X({fullPath:ee,hash:G,query:r===Yi?od(m.query):m.query||{}},k,{redirectedFrom:void 0,href:H})}function F(m){return typeof m=="string"?qr(n,m,c.value.path):X({},m)}function j(m,P){if(l!==m)return tn(8,{from:P,to:m})}function z(m){return Ie(m)}function ce(m){return z(X(F(m),{replace:!0}))}function le(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=F(k):{path:k},k.params={}),X({query:m.query,hash:m.hash,params:"path"in k?{}:m.params},k)}}function Ie(m,P){const T=l=C(m),k=c.value,G=m.state,ee=m.force,H=m.replace===!0,$=le(T);if($)return Ie(X(F($),{state:G,force:ee,replace:H}),P||T);const u=T;u.redirectedFrom=P;let d;return!ee&&mf(r,k,T)&&(d=tn(16,{to:u,from:k}),Ft(k,k,!0,!1)),(d?Promise.resolve(d):ge(u,k)).catch(g=>Ke(g)?Ke(g,2)?g:_e(g):Z(g,u,k)).then(g=>{if(g){if(Ke(g,2))return Ie(X({replace:H},F(g.to),{state:G,force:ee}),P||u)}else g=We(u,k,!0,H,G);return De(u,k,g),g})}function et(m,P){const T=j(m,P);return T?Promise.reject(T):Promise.resolve()}function ge(m,P){let T;const[k,G,ee]=gd(m,P);T=Gr(k.reverse(),"beforeRouteLeave",m,P);for(const $ of k)$.leaveGuards.forEach(u=>{T.push(ot(u,m,P))});const H=et.bind(null,m,P);return T.push(H),$t(T).then(()=>{T=[];for(const $ of i.list())T.push(ot($,m,P));return T.push(H),$t(T)}).then(()=>{T=Gr(G,"beforeRouteUpdate",m,P);for(const $ of G)$.updateGuards.forEach(u=>{T.push(ot(u,m,P))});return T.push(H),$t(T)}).then(()=>{T=[];for(const $ of m.matched)if($.beforeEnter&&!P.matched.includes($))if(Me($.beforeEnter))for(const u of $.beforeEnter)T.push(ot(u,m,P));else T.push(ot($.beforeEnter,m,P));return T.push(H),$t(T)}).then(()=>(m.matched.forEach($=>$.enterCallbacks={}),T=Gr(ee,"beforeRouteEnter",m,P),T.push(H),$t(T))).then(()=>{T=[];for(const $ of o.list())T.push(ot($,m,P));return T.push(H),$t(T)}).catch($=>Ke($,8)?$:Promise.reject($))}function De(m,P,T){for(const k of a.list())k(m,P,T)}function We(m,P,T,k,G){const ee=j(m,P);if(ee)return ee;const H=P===nt,$=Vt?history.state:{};T&&(k||H?s.replace(m.fullPath,X({scroll:H&&$&&$.scroll},G)):s.push(m.fullPath,G)),c.value=m,Ft(m,P,T,H),_e()}let Re;function xt(){Re||(Re=s.listen((m,P,T)=>{if(!un.listening)return;const k=C(m),G=le(k);if(G){Ie(X(G,{replace:!0}),k).catch(wn);return}l=k;const ee=c.value;Vt&&Tf(Vi(ee.fullPath,T.delta),Ur()),ge(k,ee).catch(H=>Ke(H,12)?H:Ke(H,2)?(Ie(H.to,k).then($=>{Ke($,20)&&!T.delta&&T.type===Mn.pop&&s.go(-1,!1)}).catch(wn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(H,k,ee))).then(H=>{H=H||We(k,ee,!1),H&&(T.delta&&!Ke(H,8)?s.go(-T.delta,!1):T.type===Mn.pop&&Ke(H,20)&&s.go(-1,!1)),De(k,ee,H)}).catch(wn)}))}let Lt=hn(),Ut=hn(),se;function Z(m,P,T){_e(m);const k=Ut.list();return k.length?k.forEach(G=>G(m,P,T)):console.error(m),Promise.reject(m)}function q(){return se&&c.value!==nt?Promise.resolve():new Promise((m,P)=>{Lt.add([m,P])})}function _e(m){return se||(se=!m,xt(),Lt.list().forEach(([P,T])=>m?T(m):P()),Lt.reset()),m}function Ft(m,P,T,k){const{scrollBehavior:G}=t;if(!Vt||!G)return Promise.resolve();const ee=!T&&Rf(Vi(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Yo().then(()=>G(m,P,ee)).then(H=>H&&Ef(H)).catch(H=>Z(H,m,P))}const ze=m=>s.go(m);let xe;const we=new Set,un={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,hasRoute:O,getRoutes:U,resolve:C,options:t,push:z,replace:ce,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ut.add,isReady:q,install(m){const P=this;m.component("RouterLink",ud),m.component("RouterView",$a),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(c)}),Vt&&!xe&&c.value===nt&&(xe=!0,z(s.location).catch(G=>{}));const T={};for(const G in nt)T[G]=Ee(()=>c.value[G]);m.provide(qs,P),m.provide(Ba,Hn(T)),m.provide(Is,c);const k=m.unmount;we.add(m),m.unmount=function(){we.delete(m),we.size<1&&(l=nt,Re&&Re(),Re=null,c.value=nt,xe=!1,se=!1),k()}}};return un}function $t(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>en(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>en(l,c))||s.push(c))}return[n,r,s]}const md={data(){return{message:"Hello World"}},async created(){console.log("App created");const e=await(await fetch("/api/test")).json();console.log(e)}},_d=Object.assign(md,{__name:"App",setup(t){return(e,n)=>($e(),St("div",null,[oe(ff),oe(Rt($a))]))}}),vd="modulepreload",yd=function(t){return"/"+t},no={},Jr=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=yd(s),s in no)return;no[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":vd,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[f],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ha(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Id=function(t){const e=Ha(t);return ja.encodeByteArray(e,!0)},Va=function(t){return Id(t).replace(/\./g,"")},wd=function(t){try{return ja.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Rd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Od(){return typeof indexedDB=="object"}function Ad(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pd,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mt(s,a,r)}}function kd(t,e){return t.replace(Nd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nd=/\{\$([^}]+)}/g;function Md(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ro(i)&&ro(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ro(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function _n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dd(t,e){const n=new xd(t,e);return n.subscribe.bind(n)}class xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ld(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yr),s.error===void 0&&(s.error=Yr),s.complete===void 0&&(s.complete=Yr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ld(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ed;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bd(e))try{this.getOrInitializeService({instanceIdentifier:bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bt){return this.instances.has(e)}getOptions(e=bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bt){return this.component?this.component.multipleInstances?e:bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fd(t){return t===bt?void 0:t}function Bd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ud(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Hd={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},jd=te.INFO,Vd={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Wd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=jd,this._logHandler=Wd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const zd=(t,e)=>e.some(n=>t instanceof n);let so,io;function Kd(){return so||(so=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qd(){return io||(io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,ws=new WeakMap,Ka=new WeakMap,Xr=new WeakMap,Gs=new WeakMap;function Gd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&za.set(n,t)}).catch(()=>{}),Gs.set(e,t),e}function Jd(t){if(ws.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ws.set(t,e)}let Es={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ws.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ka.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yd(t){Es=t(Es)}function Xd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qr(this),e,...n);return Ka.set(r,e.sort?e.sort():[e]),pt(r)}:qd().includes(t)?function(...e){return t.apply(Qr(this),e),pt(za.get(this))}:function(...e){return pt(t.apply(Qr(this),e))}}function Qd(t){return typeof t=="function"?Xd(t):(t instanceof IDBTransaction&&Jd(t),zd(t,Kd())?new Proxy(t,Es):t)}function pt(t){if(t instanceof IDBRequest)return Gd(t);if(Xr.has(t))return Xr.get(t);const e=Qd(t);return e!==t&&(Xr.set(t,e),Gs.set(e,t)),e}const Qr=t=>Gs.get(t);function Zd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pt(o.result),c.oldVersion,c.newVersion,pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const eh=["get","getKey","getAll","getAllKeys","count"],th=["put","add","delete","clear"],Zr=new Map;function oo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zr.get(e))return Zr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=th.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||eh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Zr.set(e,i),i}Yd(t=>({...t,get:(e,n,r)=>oo(e,n)||t.get(e,n,r),has:(e,n)=>!!oo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",ao="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Wa("@firebase/app"),sh="@firebase/app-compat",ih="@firebase/analytics-compat",oh="@firebase/analytics",ah="@firebase/app-check-compat",ch="@firebase/app-check",lh="@firebase/auth",uh="@firebase/auth-compat",fh="@firebase/database",dh="@firebase/database-compat",hh="@firebase/functions",ph="@firebase/functions-compat",gh="@firebase/installations",mh="@firebase/installations-compat",_h="@firebase/messaging",vh="@firebase/messaging-compat",yh="@firebase/performance",bh="@firebase/performance-compat",Ih="@firebase/remote-config",wh="@firebase/remote-config-compat",Eh="@firebase/storage",Th="@firebase/storage-compat",Rh="@firebase/firestore",Sh="@firebase/firestore-compat",Ch="firebase",Oh="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="[DEFAULT]",Ah={[Ts]:"fire-core",[sh]:"fire-core-compat",[oh]:"fire-analytics",[ih]:"fire-analytics-compat",[ch]:"fire-app-check",[ah]:"fire-app-check-compat",[lh]:"fire-auth",[uh]:"fire-auth-compat",[fh]:"fire-rtdb",[dh]:"fire-rtdb-compat",[hh]:"fire-fn",[ph]:"fire-fn-compat",[gh]:"fire-iid",[mh]:"fire-iid-compat",[_h]:"fire-fcm",[vh]:"fire-fcm-compat",[yh]:"fire-perf",[bh]:"fire-perf-compat",[Ih]:"fire-rc",[wh]:"fire-rc-compat",[Eh]:"fire-gcs",[Th]:"fire-gcs-compat",[Rh]:"fire-fst",[Sh]:"fire-fst-compat","fire-js":"fire-js",[Ch]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Map,Rs=new Map;function Ph(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Rs.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,t);for(const n of wr.values())Ph(n,t);return!0}function Ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new jn("app","Firebase",kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=Oh;function Mh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});const s=wr.get(r);if(s){if(Ir(t,s.options)&&Ir(n,s.config))return s;throw kt.create("duplicate-app",{appName:r})}const i=new $d(r);for(const a of Rs.values())i.addComponent(a);const o=new Nh(t,n,i);return wr.set(r,o),o}function Dh(t=qa){const e=wr.get(t);if(!e)throw kt.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=Ah[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Dn(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="firebase-heartbeat-database",Lh=1,xn="firebase-heartbeat-store";let es=null;function Ja(){return es||(es=Zd(xh,Lh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xn)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),es}async function Uh(t){var e;try{return(await Ja()).transaction(xn).objectStore(xn).get(Ya(t))}catch(n){if(n instanceof mt)Pt.warn(n.message);else{const r=kt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Pt.warn(r.message)}}}async function co(t,e){var n;try{const s=(await Ja()).transaction(xn,"readwrite");return await s.objectStore(xn).put(e,Ya(t)),s.done}catch(r){if(r instanceof mt)Pt.warn(r.message);else{const s=kt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Pt.warn(s.message)}}}function Ya(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=1024,Bh=30*24*60*60*1e3;class $h{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Bh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lo(),{heartbeatsToSend:n,unsentEntries:r}=Hh(this._heartbeatsCache.heartbeats),s=Va(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lo(){return new Date().toISOString().substring(0,10)}function Hh(t,e=Fh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Od()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Uh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uo(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){Dn(new nn("platform-logger",e=>new nh(e),"PRIVATE")),Dn(new nn("heartbeat",e=>new $h(e),"PRIVATE")),Gt(Ts,ao,t),Gt(Ts,ao,"esm2017"),Gt("fire-js","")}Vh("");var Wh="firebase",zh="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(Wh,zh,"app");function Js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kh=Xa,Qa=new jn("auth","Firebase",Xa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Wa("@firebase/auth");function ur(t,...e){fo.logLevel<=te.ERROR&&fo.error(`Auth (${Fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw Ys(t,...e)}function He(t,...e){return Ys(t,...e)}function Za(t,e,n){const r=Object.assign(Object.assign({},Kh()),{[e]:n});return new jn("auth","Firebase",r).create(e,{appName:t.name})}function qh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Te(t,"argument-error"),Za(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qa.create(t,...e)}function x(t,e,...n){if(!t)throw Ys(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ur(e),new Error(e)}function Qe(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map;function Ye(t){Qe(t instanceof Function,"Expected a class definition");let e=ho.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ho.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){const n=Ga(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e!=null?e:{}))return s;Te(s,"already-initialized")}return n.initialize({options:e})}function Jh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yh(){return po()==="http:"||po()==="https:"}function po(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yh()||Rd()||"connection"in navigator)?navigator.onLine:!0}function Qh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=Td()||Sd()}get(){return Xh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Wn(3e4,6e4);function zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,s={}){return tc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ec.fetch()(nc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zh),e);try{const s=new tp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw rr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Za(t,f,l);Te(t,f)}}catch(s){if(s instanceof mt)throw s;Te(t,"network-request-failed")}}async function qn(t,e,n,r,s={}){const i=await Kn(t,e,n,r,s);return"mfaPendingCredential"in i&&Te(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xs(t.config,s):`${t.config.apiScheme}://${s}`}class tp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),ep.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function rp(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sp(t,e=!1){const n=Dt(t),r=await n.getIdToken(e),s=Qs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tn(ts(s.auth_time)),issuedAtTime:Tn(ts(s.iat)),expirationTime:Tn(ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ts(t){return Number(t)*1e3}function Qs(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const i=wd(r);return i?JSON.parse(i):(ur("Failed to decode base64 JWT payload"),null)}catch(i){return ur("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function ip(t){const e=Qs(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&op(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function op({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ln(t,rp(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?up(i.providerUserInfo):[],a=lp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function cp(t){const e=Dt(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function up(t){return t.map(e=>{var{providerId:n}=e,r=Js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t,e){const n=await tc(t,{},async()=>{const r=Vn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ec.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Un;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ap(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sp(this,e)}reload(){return cp(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ln(this,np(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,U=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:ce,providerData:le,stsTokenManager:Ie}=n;x(j&&Ie,e,"internal-error");const et=Un.fromJSON(this.name,Ie);x(typeof j=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),x(typeof z=="boolean",e,"internal-error"),x(typeof ce=="boolean",e,"internal-error"),rt(_,e.name),rt(S,e.name),rt(U,e.name),rt(O,e.name),rt(C,e.name),rt(F,e.name);const ge=new Ot({uid:j,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ce,photoURL:S,phoneNumber:_,tenantId:U,stsTokenManager:et,createdAt:C,lastLoginAt:F});return le&&Array.isArray(le)&&(ge.providerData=le.map(De=>Object.assign({},De))),O&&(ge._redirectEventId=O),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new Un;s.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Er(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sc.type="NONE";const go=sc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fr(this.userKey,s.apiKey,i),this.fullPersistenceKey=fr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jt(Ye(go),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ye(go);const o=fr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Ot._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(uc(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||oc(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ic(t=de()){return/firefox\//i.test(t)}function Zs(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oc(t=de()){return/crios\//i.test(t)}function ac(t=de()){return/iemobile/i.test(t)}function cc(t=de()){return/android/i.test(t)}function lc(t=de()){return/blackberry/i.test(t)}function uc(t=de()){return/webos/i.test(t)}function Br(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dp(t=de()){var e;return Br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hp(){return Cd()&&document.documentMode===10}function fc(t=de()){return Br(t)||cc(t)||uc(t)||lc(t)||/windows phone/i.test(t)||ac(t)}function pp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t,e=[]){let n;switch(t){case"Browser":n=mo(de());break;case"Worker":n=`${mo(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _o(this),this.idTokenSubscription=new _o(this),this.beforeStateQueue=new gp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Er(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Dt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gn(t){return Dt(t)}class _o{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dd(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function _p(t,e){return Kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e){return qn(t,"POST","/v1/accounts:signInWithPassword",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t,e){return qn(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}async function bp(t,e){return qn(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ei{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Fn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yp(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return _p(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bp(e,{idToken:n,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(t,e){return qn(t,"POST","/v1/accounts:signInWithIdp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="http://localhost";class Nt extends ei{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:Ip,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ep(t){const e=mn(_n(t)).link,n=e?mn(_n(e)).deep_link_id:null,r=mn(_n(t)).deep_link_id;return(r?mn(_n(r)).link:null)||r||n||e||t}class ti{constructor(e){var n,r,s,i,o,a;const c=mn(_n(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=wp((s=c.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ep(e);try{return new ti(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Fn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ti.parseLink(n);return x(r,"argument-error"),Fn._fromEmailAndCode(e,r.code,r.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ni{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Jn{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Oe.credential(n,r)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Jn{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Jn{constructor(){super("twitter.com")}static credential(e,n){return Nt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(t,e){return qn(t,"POST","/v1/accounts:signUp",zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=vo(r);return new Mt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vo(r);return new Mt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tr(e,n,r,s)}}function hc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,i,e,r):i})}async function Rp(t,e,n=!1){const r=await Ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Ln(t,hc(s,i,e,t),n);x(o.idToken,s,"internal-error");const a=Qs(o.idToken);x(a,s,"internal-error");const{sub:c}=a;return x(t.uid===c,s,"user-mismatch"),Mt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Te(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t,e,n=!1){const r="signIn",s=await hc(t,r,e),i=await Mt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Cp(t,e){return pc(Gn(t),e)}async function Op(t,e,n){const r=Gn(t),s=await Tp(r,{returnSecureToken:!0,email:e,password:n}),i=await Mt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ap(t,e,n){return Cp(Dt(t),ln.credential(e,n))}function Pp(t,e,n,r){return Dt(t).onAuthStateChanged(e,n,r)}function kp(t){return Dt(t).signOut()}const Rr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rr,"1"),this.storage.removeItem(Rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){const t=de();return Zs(t)||Br(t)}const Mp=1e3,Dp=10;class mc extends gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Np()&&pp(),this.fallbackToPolling=fc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Dp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const xp=mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_c.type="SESSION";const vc=_c;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $r(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Lp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$r.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ri("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function Fp(t){je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Bp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $p(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hp(){return yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="firebaseLocalStorageDb",jp=1,Sr="firebaseLocalStorage",Ic="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hr(t,e){return t.transaction([Sr],e?"readwrite":"readonly").objectStore(Sr)}function Vp(){const t=indexedDB.deleteDatabase(bc);return new Yn(t).toPromise()}function Cs(){const t=indexedDB.open(bc,jp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sr,{keyPath:Ic})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sr)?e(r):(r.close(),await Vp(),e(await Cs()))})})}async function yo(t,e,n){const r=Hr(t,!0).put({[Ic]:e,value:n});return new Yn(r).toPromise()}async function Wp(t,e){const n=Hr(t,!1).get(e),r=await new Yn(n).toPromise();return r===void 0?null:r.value}function bo(t,e){const n=Hr(t,!0).delete(e);return new Yn(n).toPromise()}const zp=800,Kp=3;class wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Kp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$r._getInstance(Hp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bp(),!this.activeServiceWorker)return;this.sender=new Up(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$p()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await yo(e,Rr,"1"),await bo(e,Rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hr(s,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wc.type="LOCAL";const qp=wc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Jp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Gp().appendChild(r)})}function Yp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e){return e?Ye(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends ei{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xp(t){return pc(t.auth,new si(t),t.bypassAuthState)}function Qp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Sp(n,new si(t),t.bypassAuthState)}async function Zp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Rp(n,new si(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xp;case"linkViaPopup":case"linkViaRedirect":return Zp;case"reauthViaPopup":case"reauthViaRedirect":return Qp;default:Te(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Wn(2e3,1e4);async function tg(t,e,n){const r=Gn(t);qh(t,e,ni);const s=Ec(r,n);return new Et(r,"signInViaPopup",e,s).executeNotNull()}class Et extends Tc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eg.get())};e()}}Et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="pendingRedirect",dr=new Map;class rg extends Tc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dr.get(this.auth._key());if(!e){try{const r=await sg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dr.set(this.auth._key(),e)}return this.bypassAuthState||dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sg(t,e){const n=ag(e),r=og(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ig(t,e){dr.set(t._key(),e)}function og(t){return Ye(t._redirectPersistence)}function ag(t){return fr(ng,t.config.apiKey,t.name)}async function cg(t,e,n=!1){const r=Gn(t),s=Ec(r,e),o=await new rg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=10*60*1e3;class ug{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Io(e))}saveEventToCache(e){this.cachedEventUids.add(Io(e)),this.lastProcessedEventTime=Date.now()}}function Io(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pg=/^https?/;async function gg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dg(t);for(const n of e)try{if(mg(n))return}catch{}Te(t,"unauthorized-domain")}function mg(t){const e=Ss(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pg.test(n))return!1;if(hg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Wn(3e4,6e4);function wo(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vg(t){return new Promise((e,n)=>{var r,s,i;function o(){wo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wo(),n(He(t,"network-request-failed"))},timeout:_g.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=Yp("iframefcb");return je()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},Jp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw hr=null,e})}let hr=null;function yg(t){return hr=hr||vg(t),hr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=new Wn(5e3,15e3),Ig="__/auth/iframe",wg="emulator/auth/iframe",Eg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xs(e,wg):`https://${t.config.authDomain}/${Ig}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=Tg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vn(r).slice(1)}`}async function Sg(t){const e=await yg(t),n=je().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Rg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Eg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},bg.get());function c(){je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Og=500,Ag=600,Pg="_blank",kg="http://localhost";class Eo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ng(t,e,n,r=Og,s=Ag){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=oc(l)?Pg:n),ic(l)&&(e=e||kg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(dp(l)&&a!=="_self")return Mg(e||"",a),new Eo(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new Eo(h)}function Mg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="__/auth/handler",xg="emulator/auth/handler";function To(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof ni){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Md(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Jn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Lg(t)}?${Vn(a).slice(1)}`}function Lg({config:t}){return t.emulator?Xs(t,xg):`https://${t.authDomain}/${Dg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="webStorageSupport";class Ug{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vc,this._completeRedirectFn=cg,this._overrideRedirectResult=ig}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=To(e,n,r,Ss(),s);return Ng(e,o,ri())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Fp(To(e,n,r,Ss(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sg(e),r=new ug(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ns,{type:ns},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ns];o!==void 0&&n(!!o),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fc()||Zs()||Br()}}const Fg=Ug;var Ro="@firebase/auth",So="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hg(t){Dn(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dc(t)},f=new mp(a,c,l);return Jh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new nn("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new Bg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Ro,So,$g(t)),Gt(Ro,So,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t=Dh()){const e=Ga(t,"auth");return e.isInitialized()?e.getImmediate():Gh(t,{popupRedirectResolver:Fg,persistence:[qp,xp,vc]})}Hg("Browser");const Vg={apiKey:"AIzaSyDJ99OyKVf439DSekIqo5MCvvUzfTs2CeQ",authDomain:"bugtracker-d927d.firebaseapp.com",projectId:"bugtracker-d927d",storageBucket:"bugtracker-d927d.appspot.com",messagingSenderId:"564128035217",appId:"1:564128035217:web:995f1585e455fe5da9aa30"},Wg=Mh(Vg),Xn=jg(Wg),zg=new Oe;function fm(){tg(Xn,zg).then(t=>{Oe.credentialFromResult(t).accessToken;const n=t.user;console.log(n)}).catch(t=>{t.code,t.message,t.customData.email,Oe.credentialFromError(t)})}function dm(t,e){Op(Xn,t,e).then(n=>{const r=n.user;console.log(r)}).catch(n=>{n.code,n.message})}function hm(t,e){Ap(Xn,t,e).then(n=>{const r=n.user;console.log(r)}).catch(n=>{n.code,n.message})}function Sc(t){Pp(Xn,e=>{e&&(e.uid,t(e))})}function pm(){kp(Xn).then(()=>{console.log("Logged Out")}).catch(t=>{})}const Kg={data(){return{bug:"",description:"",uid:"",submitted:!1}},methods:{submitBug(){const t=new Headers;t.append("Content-Type","application/json");const e=JSON.stringify({bug:this.bug,description:this.description,uid:this.uid});console.log(e),fetch("/api/report",{method:"POST",headers:t,body:e,redirect:"follow"}).then(r=>r.text()).then(r=>console.log(r)).catch(r=>console.log("error",r)),this.submitted=!0}},created(){Sc(t=>{this.uid=t.uid})}},qg={class:"bg-black/50 backdrop-blur fixed top-0 w-full h-full flex flex-col items-center justify-center"},Gg=ie("h3",{class:"text-white"},"Report a bug",-1),Jg=ie("input",{type:"submit",value:"Submit",class:"m-2 p-2 bg-primary text-white"},null,-1),Yg={key:1,class:"flex flex-col items-center justify-center text-white w-full"},Xg=ie("h3",null,"Thank you!",-1),Qg=ie("p",null,"Thank you for submitting a bug report. It has been received. You may close this popup",-1);function Zg(t,e,n,r,s,i){return $e(),St("div",qg,[s.submitted?In("",!0):($e(),St("form",{key:0,onSubmit:e[3]||(e[3]=qu((...o)=>i.submitBug&&i.submitBug(...o),["prevent"])),action:"",class:"w-full flex flex-col items-center justify-center"},[Gg,yi(ie("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.bug=o),type:"text",name:"bug",placeholder:"Bug",class:"m-2 w-1/4"},null,512),[[Ui,s.bug]]),yi(ie("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.description=o),type:"text",name:"description",placeholder:"Description",class:"m-2 w-1/4 h-1/4"},null,512),[[Ui,s.description]]),ie("span",null,[Jg,ie("button",{onClick:e[2]||(e[2]=o=>t.$emit("closePopup")),class:"m-2 p-2 bg-primary text-white"},"Cancel")])],32)),s.submitted?($e(),St("div",Yg,[Xg,Qg,ie("button",{onClick:e[4]||(e[4]=o=>t.$emit("closePopup")),class:"m-2 p-2 bg-primary text-white"},"Close")])):In("",!0)])}const em=Oa(Kg,[["render",Zg]]),tm={class:"flex flex-col items-center"},nm=cn("Login"),rm={key:1,class:"dark:text-white flex flex-col justify-center"},sm={class:"text-6xl"},im={data(){return{user:"",popupVisible:!1}},created(){Sc(t=>{this.user=t})},methods:{reset(){fetch("/api/reset")}}},om=Object.assign(im,{__name:"HomeView",setup(t){return(e,n)=>{const r=fa("router-link");return $e(),St("main",tm,[e.user?In("",!0):($e(),gs(r,{key:0,class:"m-2 p-2 bg-primary text-white",to:"/account"},{default:Wt(()=>[nm]),_:1})),e.user?($e(),St("div",rm,[ie("p",sm,"Hello, "+Dc(e.user.displayName.split(" ")[0]),1),ie("button",{onClick:n[0]||(n[0]=s=>e.popupVisible=!e.popupVisible),class:"m-2 p-2 bg-primary text-white"},"Report Bug")])):In("",!0),e.popupVisible?($e(),gs(em,{key:2,onClosePopup:n[1]||(n[1]=s=>e.popupVisible=!e.popupVisible)})):In("",!0),ie("button",{onClick:n[2]||(n[2]=(...s)=>e.reset&&e.reset(...s)),class:"fixed bottom-0"},"RESET DB")])}}}),am=pd({history:Pf(),routes:[{path:"/",name:"home",component:om},{path:"/about",name:"about",component:()=>Jr(()=>import("./AboutView.07472f32.js"),["assets/AboutView.07472f32.js","assets/AboutView.4d995ba2.css"])},{path:"/account",name:"account",component:()=>Jr(()=>import("./AccountView.680e7638.js"),[])},{path:"/bugs",name:"bugs",component:()=>Jr(()=>import("./BugsView.f11febc6.js"),[])}]});const Cc=Yu(_d);localStorage.getItem("darkmode")=="true"&&(console.log("darkmode"),document.querySelector("html").classList.add("dark"));Cc.use(am);Cc.mount("#app");export{qe as F,Oa as _,ie as a,In as b,St as c,lm as d,cn as e,dm as f,Sc as g,fm as h,fe as i,um as j,cm as k,pm as l,gs as m,$e as o,fa as r,hm as s,Dc as t,Rt as u,Ui as v,yi as w};
