(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Cs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=Cs(Sc);function To(t){return!!t||t===""}function Os(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?Pc(r):Os(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ae(t))return t;if(re(t))return t}}const Oc=/;(?![^(]*\))/g,Ac=/:(.+)/;function Pc(t){const e={};return t.split(Oc).forEach(n=>{if(n){const r=n.split(Ac);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function As(t){let e="";if(ae(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=As(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function kc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Er(t[r],e[r]);return n}function Er(t,e){if(t===e)return!0;let n=oi(t),r=oi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=En(t),r=En(e),n||r)return t===e;if(n=D(t),r=D(e),n||r)return n&&r?kc(t,e):!1;if(n=re(t),r=re(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Er(t[o],e[o]))return!1}}return String(t)===String(e)}function Ro(t,e){return t.findIndex(n=>Er(n,e))}const Nc=t=>ae(t)?t:t==null?"":D(t)||re(t)&&(t.toString===Oo||!B(t.toString))?JSON.stringify(t,So,2):String(t),So=(t,e)=>e&&e.__v_isRef?So(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Rr(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!D(e)&&!Ao(e)?String(e):e,Q={},zt=[],ke=()=>{},Mc=()=>!1,Dc=/^on[^a-z]/,Tr=t=>Dc.test(t),Ps=t=>t.startsWith("onUpdate:"),pe=Object.assign,ks=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xc=Object.prototype.hasOwnProperty,V=(t,e)=>xc.call(t,e),D=Array.isArray,Kt=t=>Ln(t)==="[object Map]",Rr=t=>Ln(t)==="[object Set]",oi=t=>Ln(t)==="[object Date]",B=t=>typeof t=="function",ae=t=>typeof t=="string",En=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Co=t=>re(t)&&B(t.then)&&B(t.catch),Oo=Object.prototype.toString,Ln=t=>Oo.call(t),Lc=t=>Ln(t).slice(8,-1),Ao=t=>Ln(t)==="[object Object]",Ns=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=Cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Uc=/-(\w)/g,Ve=Sr(t=>t.replace(Uc,(e,n)=>n?n.toUpperCase():"")),Fc=/\B([A-Z])/g,nn=Sr(t=>t.replace(Fc,"-$1").toLowerCase()),Cr=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),$r=Sr(t=>t?`on${Cr(t)}`:""),Tn=(t,e)=>!Object.is(t,e),tr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ur=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ts=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ai;const Bc=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Fe;class $c{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Fe&&(this.parent=Fe,this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Hc(t,e=Fe){e&&e.active&&e.effects.push(t)}const Ms=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Po=t=>(t.w&pt)>0,ko=t=>(t.n&pt)>0,jc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},Vc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Po(s)&&!ko(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},ns=new WeakMap;let dn=0,pt=1;const rs=30;let Ce;const Tt=Symbol(""),ss=Symbol("");class Ds{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hc(this,r)}run(){if(!this.active)return this.fn();let e=Ce,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ce,Ce=this,ut=!0,pt=1<<++dn,dn<=rs?jc(this):ci(this),this.fn()}finally{dn<=rs&&Vc(this),pt=1<<--dn,Ce=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ce===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const No=[];function rn(){No.push(ut),ut=!1}function sn(){const t=No.pop();ut=t===void 0?!0:t}function be(t,e,n){if(ut&&Ce){let r=ns.get(t);r||ns.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ms()),Mo(s)}}function Mo(t,e){let n=!1;dn<=rs?ko(t)||(t.n|=pt,n=!Po(t)):n=!t.has(Ce),n&&(t.add(Ce),Ce.deps.push(t))}function Xe(t,e,n,r,s,i){const o=ns.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&D(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":D(t)?Ns(n)&&a.push(o.get("length")):(a.push(o.get(Tt)),Kt(t)&&a.push(o.get(ss)));break;case"delete":D(t)||(a.push(o.get(Tt)),Kt(t)&&a.push(o.get(ss)));break;case"set":Kt(t)&&a.push(o.get(Tt));break}if(a.length===1)a[0]&&is(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);is(Ms(c))}}function is(t,e){const n=D(t)?t:[...t];for(const r of n)r.computed&&li(r);for(const r of n)r.computed||li(r)}function li(t,e){(t!==Ce||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Wc=Cs("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En)),zc=xs(),Kc=xs(!1,!0),qc=xs(!0),ui=Gc();function Gc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rn();const r=K(this)[e].apply(this,n);return sn(),r}}),t}function xs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?ul:Bo:e?Fo:Uo).get(r))return r;const o=D(r);if(!t&&o&&V(ui,s))return Reflect.get(ui,s,i);const a=Reflect.get(r,s,i);return(En(s)?Do.has(s):Wc(s))||(t||be(r,"get",s),e)?a:fe(a)?o&&Ns(s)?a:a.value:re(a)?t?$o(a):Un(a):a}}const Jc=xo(),Yc=xo(!0);function xo(t=!1){return function(n,r,s,i){let o=n[r];if(Rn(o)&&fe(o)&&!fe(s))return!1;if(!t&&!Rn(s)&&(os(s)||(s=K(s),o=K(o)),!D(n)&&fe(o)&&!fe(s)))return o.value=s,!0;const a=D(n)&&Ns(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?Tn(s,o)&&Xe(n,"set",r,s):Xe(n,"add",r,s)),c}}function Xc(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xe(t,"delete",e,void 0),r}function Qc(t,e){const n=Reflect.has(t,e);return(!En(e)||!Do.has(e))&&be(t,"has",e),n}function Zc(t){return be(t,"iterate",D(t)?"length":Tt),Reflect.ownKeys(t)}const Lo={get:zc,set:Jc,deleteProperty:Xc,has:Qc,ownKeys:Zc},el={get:qc,set(t,e){return!0},deleteProperty(t,e){return!0}},tl=pe({},Lo,{get:Kc,set:Yc}),Ls=t=>t,Or=t=>Reflect.getPrototypeOf(t);function Gn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&be(s,"get",e),be(s,"get",i));const{has:o}=Or(s),a=r?Ls:n?Bs:Sn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Jn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&be(r,"has",t),be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Yn(t,e=!1){return t=t.__v_raw,!e&&be(K(t),"iterate",Tt),Reflect.get(t,"size",t)}function fi(t){t=K(t);const e=K(this);return Or(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function di(t,e){e=K(e);const n=K(this),{has:r,get:s}=Or(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Tn(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function hi(t){const e=K(this),{has:n,get:r}=Or(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xe(e,"delete",t,void 0),i}function pi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function Xn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?Ls:t?Bs:Sn;return!t&&be(a,"iterate",Tt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Qn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Kt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ls:e?Bs:Sn;return!e&&be(i,"iterate",c?ss:Tt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function nl(){const t={get(i){return Gn(this,i)},get size(){return Yn(this)},has:Jn,add:fi,set:di,delete:hi,clear:pi,forEach:Xn(!1,!1)},e={get(i){return Gn(this,i,!1,!0)},get size(){return Yn(this)},has:Jn,add:fi,set:di,delete:hi,clear:pi,forEach:Xn(!1,!0)},n={get(i){return Gn(this,i,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Xn(!0,!1)},r={get(i){return Gn(this,i,!0,!0)},get size(){return Yn(this,!0)},has(i){return Jn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Xn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Qn(i,!1,!1),n[i]=Qn(i,!0,!1),e[i]=Qn(i,!1,!0),r[i]=Qn(i,!0,!0)}),[t,n,e,r]}const[rl,sl,il,ol]=nl();function Us(t,e){const n=e?t?ol:il:t?sl:rl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const al={get:Us(!1,!1)},cl={get:Us(!1,!0)},ll={get:Us(!0,!1)},Uo=new WeakMap,Fo=new WeakMap,Bo=new WeakMap,ul=new WeakMap;function fl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(t){return t.__v_skip||!Object.isExtensible(t)?0:fl(Lc(t))}function Un(t){return Rn(t)?t:Fs(t,!1,Lo,al,Uo)}function hl(t){return Fs(t,!1,tl,cl,Fo)}function $o(t){return Fs(t,!0,el,ll,Bo)}function Fs(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=dl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function qt(t){return Rn(t)?qt(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function os(t){return!!(t&&t.__v_isShallow)}function Ho(t){return qt(t)||Rn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function jo(t){return ur(t,"__v_skip",!0),t}const Sn=t=>re(t)?Un(t):t,Bs=t=>re(t)?$o(t):t;function Vo(t){ut&&Ce&&(t=K(t),Mo(t.dep||(t.dep=Ms())))}function Wo(t,e){t=K(t),t.dep&&is(t.dep)}function fe(t){return!!(t&&t.__v_isRef===!0)}function pl(t){return zo(t,!1)}function gl(t){return zo(t,!0)}function zo(t,e){return fe(t)?t:new ml(t,e)}class ml{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Sn(e)}get value(){return Vo(this),this._value}set value(e){e=this.__v_isShallow?e:K(e),Tn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Sn(e),Wo(this))}}function Rt(t){return fe(t)?t.value:t}const _l={get:(t,e,n)=>Rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ko(t){return qt(t)?t:new Proxy(t,_l)}class vl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ds(e,()=>{this._dirty||(this._dirty=!0,Wo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Vo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yl(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=ke):(r=t.get,s=t.set),new vl(r,s,i||!s,n)}function ft(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ar(i,e,n)}return s}function Ne(t,e,n,r){if(B(t)){const i=ft(t,e,n,r);return i&&Co(i)&&i.catch(o=>{Ar(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function Ar(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ft(c,null,10,[t,o,a]);return}}bl(t,n,s,r)}function bl(t,e,n,r=!0){console.error(t)}let fr=!1,as=!1;const ye=[];let Ge=0;const mn=[];let hn=null,Ht=0;const _n=[];let st=null,jt=0;const qo=Promise.resolve();let $s=null,cs=null;function Go(t){const e=$s||qo;return t?e.then(this?t.bind(this):t):e}function Il(t){let e=Ge+1,n=ye.length;for(;e<n;){const r=e+n>>>1;Cn(ye[r])<t?e=r+1:n=r}return e}function Jo(t){(!ye.length||!ye.includes(t,fr&&t.allowRecurse?Ge+1:Ge))&&t!==cs&&(t.id==null?ye.push(t):ye.splice(Il(t.id),0,t),Yo())}function Yo(){!fr&&!as&&(as=!0,$s=qo.then(Zo))}function wl(t){const e=ye.indexOf(t);e>Ge&&ye.splice(e,1)}function Xo(t,e,n,r){D(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Yo()}function El(t){Xo(t,hn,mn,Ht)}function Tl(t){Xo(t,st,_n,jt)}function Pr(t,e=null){if(mn.length){for(cs=e,hn=[...new Set(mn)],mn.length=0,Ht=0;Ht<hn.length;Ht++)hn[Ht]();hn=null,Ht=0,cs=null,Pr(t,e)}}function Qo(t){if(Pr(),_n.length){const e=[...new Set(_n)];if(_n.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>Cn(n)-Cn(r)),jt=0;jt<st.length;jt++)st[jt]();st=null,jt=0}}const Cn=t=>t.id==null?1/0:t.id;function Zo(t){as=!1,fr=!0,Pr(t),ye.sort((n,r)=>Cn(n)-Cn(r));const e=ke;try{for(Ge=0;Ge<ye.length;Ge++){const n=ye[Ge];n&&n.active!==!1&&ft(n,null,14)}}finally{Ge=0,ye.length=0,Qo(),fr=!1,$s=null,(ye.length||mn.length||_n.length)&&Zo(t)}}function Rl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p&&(s=n.map(_=>_.trim())),h&&(s=n.map(ts))}let a,c=r[a=$r(e)]||r[a=$r(Ve(e))];!c&&i&&(c=r[a=$r(nn(e))]),c&&Ne(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(l,t,6,s)}}function ea(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const c=l=>{const f=ea(l,e,!0);f&&(a=!0,pe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(D(i)?i.forEach(c=>o[c]=null):pe(o,i),r.set(t,o),o)}function kr(t,e){return!t||!Tr(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,nn(e))||V(t,e))}let Ae=null,ta=null;function dr(t){const e=Ae;return Ae=t,ta=t&&t.type.__scopeId||null,e}function Wt(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ri(-1);const i=dr(e),o=t(...s);return dr(i),r._d&&Ri(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:_,ctx:S,inheritAttrs:U}=t;let O,C;const F=dr(t);try{if(n.shapeFlag&4){const z=s||r;O=Be(f.call(z,z,h,i,_,p,S)),C=c}else{const z=e;O=Be(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),C=e.props?c:Sl(c)}}catch(z){vn.length=0,Ar(z,t,1),O=oe(At)}let j=O;if(C&&U!==!1){const z=Object.keys(C),{shapeFlag:ce}=j;z.length&&ce&7&&(o&&z.some(Ps)&&(C=Cl(C,o)),j=Xt(j,C))}return n.dirs&&(j=Xt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),O=j,dr(F),O}const Sl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Tr(n))&&((e||(e={}))[n]=t[n]);return e},Cl=(t,e)=>{const n={};for(const r in t)(!Ps(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ol(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?gi(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!kr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?gi(r,o,l):!0:!!o;return!1}function gi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!kr(n,i))return!0}return!1}function Al({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pl=t=>t.__isSuspense;function kl(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):Tl(t)}function nr(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function dt(t,e,n=!1){const r=ue||Ae;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r.proxy):e}}const mi={};function rr(t,e,n){return na(t,e,n)}function na(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){const a=ue;let c,l=!1,f=!1;if(fe(t)?(c=()=>t.value,l=os(t)):qt(t)?(c=()=>t,r=!0):D(t)?(f=!0,l=t.some(C=>qt(C)||os(C)),c=()=>t.map(C=>{if(fe(C))return C.value;if(qt(C))return wt(C);if(B(C))return ft(C,a,2)})):B(t)?e?c=()=>ft(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ne(t,a,3,[p])}:c=ke,e&&r){const C=c;c=()=>wt(C())}let h,p=C=>{h=O.onStop=()=>{ft(C,a,4)}};if(An)return p=ke,e?n&&Ne(e,a,3,[c(),f?[]:void 0,p]):c(),ke;let _=f?[]:mi;const S=()=>{if(!!O.active)if(e){const C=O.run();(r||l||(f?C.some((F,j)=>Tn(F,_[j])):Tn(C,_)))&&(h&&h(),Ne(e,a,3,[C,_===mi?void 0:_,p]),_=C)}else O.run()};S.allowRecurse=!!e;let U;s==="sync"?U=S:s==="post"?U=()=>me(S,a&&a.suspense):U=()=>El(S);const O=new Ds(c,U);return e?n?S():_=O.run():s==="post"?me(O.run.bind(O),a&&a.suspense):O.run(),()=>{O.stop(),a&&a.scope&&ks(a.scope.effects,O)}}function Nl(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?ra(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=ue;Qt(this);const a=na(s,i.bind(r),n);return o?Qt(o):Ct(),a}function ra(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function wt(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),fe(t))wt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if(Rr(t)||Kt(t))t.forEach(n=>{wt(n,e)});else if(Ao(t))for(const n in t)wt(t[n],e);return t}function sa(t){return B(t)?{setup:t,name:t.name}:t}const sr=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function Ml(t,e){oa(t,"a",e)}function Dl(t,e){oa(t,"da",e)}function oa(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ia(s.parent.vnode)&&xl(r,e,n,s),s=s.parent}}function xl(t,e,n,r){const s=Nr(e,t,r,!0);aa(()=>{ks(r[e],s)},n)}function Nr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rn(),Qt(n);const a=Ne(e,n,t,o);return Ct(),sn(),a});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=ue)=>(!An||t==="sp")&&Nr(t,e,n),Ll=Ze("bm"),Ul=Ze("m"),Fl=Ze("bu"),Bl=Ze("u"),$l=Ze("bum"),aa=Ze("um"),Hl=Ze("sp"),jl=Ze("rtg"),Vl=Ze("rtc");function Wl(t,e=ue){Nr("ec",t,e)}function _i(t,e){const n=Ae;if(n===null)return t;const r=Dr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Q]=e[i];B(o)&&(o={mounted:o,updated:o}),o.deep&&wt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rn(),Ne(c,n,8,[t.el,a,t,e]),sn())}}const ca="components";function la(t,e){return Kl(ca,t,!0,e)||t}const zl=Symbol();function Kl(t,e,n=!0,r=!1){const s=Ae||ue;if(s){const i=s.type;if(t===ca){const a=Iu(i,!1);if(a&&(a===e||a===Ve(e)||a===Cr(Ve(e))))return i}const o=vi(s[t]||i[t],e)||vi(s.appContext[t],e);return!o&&r?i:o}}function vi(t,e){return t&&(t[e]||t[Ve(e)]||t[Cr(Ve(e))])}function am(t,e,n,r){let s;const i=n&&n[r];if(D(t)||ae(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(re(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ls=t=>t?Ia(t)?Dr(t)||t.proxy:ls(t.parent):null,hr=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ls(t.parent),$root:t=>ls(t.root),$emit:t=>t.emit,$options:t=>fa(t),$forceUpdate:t=>t.f||(t.f=()=>Jo(t.update)),$nextTick:t=>t.n||(t.n=Go.bind(t.proxy)),$watch:t=>Nl.bind(t)}),ql={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Q&&V(r,e))return o[e]=1,r[e];if(s!==Q&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==Q&&V(n,e))return o[e]=4,n[e];us&&(o[e]=0)}}const f=hr[e];let h,p;if(f)return e==="$attrs"&&be(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Q&&V(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,V(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Q&&V(s,e)?(s[e]=n,!0):r!==Q&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Q&&V(t,o)||e!==Q&&V(e,o)||(a=i[0])&&V(a,o)||V(r,o)||V(hr,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let us=!0;function Gl(t){const e=fa(t),n=t.proxy,r=t.ctx;us=!1,e.beforeCreate&&yi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:S,activated:U,deactivated:O,beforeDestroy:C,beforeUnmount:F,destroyed:j,unmounted:z,render:ce,renderTracked:le,renderTriggered:Ie,errorCaptured:et,serverPrefetch:ge,expose:De,inheritAttrs:We,components:Re,directives:xt,filters:Lt}=e;if(l&&Jl(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Z in o){const q=o[Z];B(q)&&(r[Z]=q.bind(n))}if(s){const Z=s.call(n,n);re(Z)&&(t.data=Un(Z))}if(us=!0,i)for(const Z in i){const q=i[Z],_e=B(q)?q.bind(n,n):B(q.get)?q.get.bind(n,n):ke,Ft=!B(q)&&B(q.set)?q.set.bind(n):ke,ze=Ee({get:_e,set:Ft});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ze.value,set:xe=>ze.value=xe})}if(a)for(const Z in a)ua(a[Z],r,n,Z);if(c){const Z=B(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(q=>{nr(q,Z[q])})}f&&yi(f,t,"c");function se(Z,q){D(q)?q.forEach(_e=>Z(_e.bind(n))):q&&Z(q.bind(n))}if(se(Ll,h),se(Ul,p),se(Fl,_),se(Bl,S),se(Ml,U),se(Dl,O),se(Wl,et),se(Vl,le),se(jl,Ie),se($l,F),se(aa,z),se(Hl,ge),D(De))if(De.length){const Z=t.exposed||(t.exposed={});De.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:_e=>n[q]=_e})})}else t.exposed||(t.exposed={});ce&&t.render===ke&&(t.render=ce),We!=null&&(t.inheritAttrs=We),Re&&(t.components=Re),xt&&(t.directives=xt)}function Jl(t,e,n=ke,r=!1){D(t)&&(t=fs(t));for(const s in t){const i=t[s];let o;re(i)?"default"in i?o=dt(i.from||s,i.default,!0):o=dt(i.from||s):o=dt(i),fe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function yi(t,e,n){Ne(D(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ua(t,e,n,r){const s=r.includes(".")?ra(n,r):()=>n[r];if(ae(t)){const i=e[t];B(i)&&rr(s,i)}else if(B(t))rr(s,t.bind(n));else if(re(t))if(D(t))t.forEach(i=>ua(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&rr(s,i,t)}}function fa(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>pr(c,l,o,!0)),pr(c,e,o)),i.set(e,c),c}function pr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pr(t,i,n,!0),s&&s.forEach(o=>pr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Yl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yl={data:bi,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:vt,directives:vt,watch:Ql,provide:bi,inject:Xl};function bi(t,e){return e?t?function(){return pe(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Xl(t,e){return vt(fs(t),fs(e))}function fs(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function vt(t,e){return t?pe(pe(Object.create(null),t),e):e}function Ql(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function Zl(t,e,n,r=!1){const s={},i={};ur(i,Mr,1),t.propsDefaults=Object.create(null),da(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(kr(t.emitsOptions,p))continue;const _=e[p];if(c)if(V(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const S=Ve(p);s[S]=ds(c,a,S,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{da(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!V(e,h)&&((f=nn(h))===h||!V(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=ds(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!V(e,h)&&!0)&&(delete i[h],l=!0)}l&&Xe(t,"set","$attrs")}function da(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(er(c))continue;const l=e[c];let f;s&&V(s,f=Ve(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:kr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=ds(s,c,h,l[h],t,!V(l,h))}}return o}function ds(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Qt(s),r=l[n]=c.call(null,e),Ct())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}function ha(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!B(t)){const f=h=>{c=!0;const[p,_]=ha(h,e,!0);pe(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,zt),zt;if(D(i))for(let f=0;f<i.length;f++){const h=Ve(i[f]);Ii(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=Ve(f);if(Ii(h)){const p=i[f],_=o[h]=D(p)||B(p)?{type:p}:p;if(_){const S=Ti(Boolean,_.type),U=Ti(String,_.type);_[0]=S>-1,_[1]=U<0||S<U,(S>-1||V(_,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function Ii(t){return t[0]!=="$"}function wi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ei(t,e){return wi(t)===wi(e)}function Ti(t,e){return D(e)?e.findIndex(n=>Ei(n,t)):B(e)&&Ei(e,t)?0:-1}const pa=t=>t[0]==="_"||t==="$stable",Hs=t=>D(t)?t.map(Be):[Be(t)],tu=(t,e,n)=>{if(e._n)return e;const r=Wt((...s)=>Hs(e(...s)),n);return r._c=!1,r},ga=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pa(s))continue;const i=t[s];if(B(i))e[s]=tu(s,i,r);else if(i!=null){const o=Hs(i);e[s]=()=>o}}},ma=(t,e)=>{const n=Hs(e);t.slots.default=()=>n},nu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ur(e,"_",n)):ga(e,t.slots={})}else t.slots={},e&&ma(t,e);ur(t.slots,Mr,1)},ru=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ga(e,s)),o=e}else e&&(ma(t,e),o={default:1});if(i)for(const a in s)!pa(a)&&!(a in o)&&delete s[a]};function _a(){return{app:null,config:{isNativeTag:Mc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function iu(t,e){return function(r,s=null){B(r)||(r=Object.assign({},r)),s!=null&&!re(s)&&(s=null);const i=_a(),o=new Set;let a=!1;const c=i.app={_uid:su++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Eu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(c,...f)):B(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=oe(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Dr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function hs(t,e,n,r,s=!1){if(D(t)){t.forEach((p,_)=>hs(p,e&&(D(e)?e[_]:e),n,r,s));return}if(sr(r)&&!s)return;const i=r.shapeFlag&4?Dr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Q?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ae(l)?(f[l]=null,V(h,l)&&(h[l]=null)):fe(l)&&(l.value=null)),B(c))ft(c,a,12,[o,f]);else{const p=ae(c),_=fe(c);if(p||_){const S=()=>{if(t.f){const U=p?f[c]:c.value;s?D(U)&&ks(U,i):D(U)?U.includes(i)||U.push(i):p?(f[c]=[i],V(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,V(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,me(S,n)):S()}}}const me=kl;function ou(t){return au(t)}function au(t,e){const n=Bc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=ke,cloneNode:S,insertStaticContent:U}=t,O=(u,d,g,y=null,v=null,w=null,R=!1,I=null,E=!!d.dynamicChildren)=>{if(u===d)return;u&&!un(u,d)&&(y=k(u),we(u,v,w,!0),u=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:A}=d;switch(b){case js:C(u,d,g,y);break;case At:F(u,d,g,y);break;case jr:u==null&&j(d,g,y,R);break;case qe:xt(u,d,g,y,v,w,R,I,E);break;default:A&1?le(u,d,g,y,v,w,R,I,E):A&6?Lt(u,d,g,y,v,w,R,I,E):(A&64||A&128)&&b.process(u,d,g,y,v,w,R,I,E,ee)}N!=null&&v&&hs(N,u&&u.ref,w,d||u,!d)},C=(u,d,g,y)=>{if(u==null)r(d.el=a(d.children),g,y);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},F=(u,d,g,y)=>{u==null?r(d.el=c(d.children||""),g,y):d.el=u.el},j=(u,d,g,y)=>{[u.el,u.anchor]=U(u.children,d,g,y,u.el,u.anchor)},z=({el:u,anchor:d},g,y)=>{let v;for(;u&&u!==d;)v=p(u),r(u,g,y),u=v;r(d,g,y)},ce=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},le=(u,d,g,y,v,w,R,I,E)=>{R=R||d.type==="svg",u==null?Ie(d,g,y,v,w,R,I,E):De(u,d,v,w,R,I,E)},Ie=(u,d,g,y,v,w,R,I)=>{let E,b;const{type:N,props:A,shapeFlag:M,transition:L,patchFlag:W,dirs:J}=u;if(u.el&&S!==void 0&&W===-1)E=u.el=S(u.el);else{if(E=u.el=o(u.type,w,A&&A.is,A),M&8?f(E,u.children):M&16&&ge(u.children,E,null,y,v,w&&N!=="foreignObject",R,I),J&&mt(u,null,y,"created"),A){for(const ne in A)ne!=="value"&&!er(ne)&&i(E,ne,null,A[ne],w,u.children,y,v,T);"value"in A&&i(E,"value",null,A.value),(b=A.onVnodeBeforeMount)&&Ue(b,y,u)}et(E,u,u.scopeId,R,y)}J&&mt(u,null,y,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&L&&!L.persisted;Y&&L.beforeEnter(E),r(E,d,g),((b=A&&A.onVnodeMounted)||Y||J)&&me(()=>{b&&Ue(b,y,u),Y&&L.enter(E),J&&mt(u,null,y,"mounted")},v)},et=(u,d,g,y,v)=>{if(g&&_(u,g),y)for(let w=0;w<y.length;w++)_(u,y[w]);if(v){let w=v.subTree;if(d===w){const R=v.vnode;et(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},ge=(u,d,g,y,v,w,R,I,E=0)=>{for(let b=E;b<u.length;b++){const N=u[b]=I?it(u[b]):Be(u[b]);O(null,N,d,g,y,v,w,R,I)}},De=(u,d,g,y,v,w,R)=>{const I=d.el=u.el;let{patchFlag:E,dynamicChildren:b,dirs:N}=d;E|=u.patchFlag&16;const A=u.props||Q,M=d.props||Q;let L;g&&_t(g,!1),(L=M.onVnodeBeforeUpdate)&&Ue(L,g,d,u),N&&mt(d,u,g,"beforeUpdate"),g&&_t(g,!0);const W=v&&d.type!=="foreignObject";if(b?We(u.dynamicChildren,b,I,g,y,W,w):R||_e(u,d,I,null,g,y,W,w,!1),E>0){if(E&16)Re(I,d,A,M,g,y,v);else if(E&2&&A.class!==M.class&&i(I,"class",null,M.class,v),E&4&&i(I,"style",A.style,M.style,v),E&8){const J=d.dynamicProps;for(let Y=0;Y<J.length;Y++){const ne=J[Y],Se=A[ne],Bt=M[ne];(Bt!==Se||ne==="value")&&i(I,ne,Se,Bt,v,u.children,g,y,T)}}E&1&&u.children!==d.children&&f(I,d.children)}else!R&&b==null&&Re(I,d,A,M,g,y,v);((L=M.onVnodeUpdated)||N)&&me(()=>{L&&Ue(L,g,d,u),N&&mt(d,u,g,"updated")},y)},We=(u,d,g,y,v,w,R)=>{for(let I=0;I<d.length;I++){const E=u[I],b=d[I],N=E.el&&(E.type===qe||!un(E,b)||E.shapeFlag&70)?h(E.el):g;O(E,b,N,null,y,v,w,R,!0)}},Re=(u,d,g,y,v,w,R)=>{if(g!==y){for(const I in y){if(er(I))continue;const E=y[I],b=g[I];E!==b&&I!=="value"&&i(u,I,b,E,R,d.children,v,w,T)}if(g!==Q)for(const I in g)!er(I)&&!(I in y)&&i(u,I,g[I],null,R,d.children,v,w,T);"value"in y&&i(u,"value",g.value,y.value)}},xt=(u,d,g,y,v,w,R,I,E)=>{const b=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:L}=d;L&&(I=I?I.concat(L):L),u==null?(r(b,g,y),r(N,g,y),ge(d.children,g,N,v,w,R,I,E)):A>0&&A&64&&M&&u.dynamicChildren?(We(u.dynamicChildren,M,g,v,w,R,I),(d.key!=null||v&&d===v.subTree)&&va(u,d,!0)):_e(u,d,g,N,v,w,R,I,E)},Lt=(u,d,g,y,v,w,R,I,E)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,y,R,E):Ut(d,g,y,v,w,R,E):se(u,d,E)},Ut=(u,d,g,y,v,w,R)=>{const I=u.component=mu(u,y,v);if(ia(u)&&(I.ctx.renderer=ee),_u(I),I.asyncDep){if(v&&v.registerDep(I,Z),!u.el){const E=I.subTree=oe(At);F(null,E,d,g)}return}Z(I,u,d,g,v,w,R)},se=(u,d,g)=>{const y=d.component=u.component;if(Ol(u,d,g))if(y.asyncDep&&!y.asyncResolved){q(y,d,g);return}else y.next=d,wl(y.update),y.update();else d.el=u.el,y.vnode=d},Z=(u,d,g,y,v,w,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:A,u:M,parent:L,vnode:W}=u,J=N,Y;_t(u,!1),N?(N.el=W.el,q(u,N,R)):N=W,A&&tr(A),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(Y,L,N,W),_t(u,!0);const ne=Hr(u),Se=u.subTree;u.subTree=ne,O(Se,ne,h(Se.el),k(Se),u,v,w),N.el=ne.el,J===null&&Al(u,ne.el),M&&me(M,v),(Y=N.props&&N.props.onVnodeUpdated)&&me(()=>Ue(Y,L,N,W),v)}else{let N;const{el:A,props:M}=d,{bm:L,m:W,parent:J}=u,Y=sr(d);if(_t(u,!1),L&&tr(L),!Y&&(N=M&&M.onVnodeBeforeMount)&&Ue(N,J,d),_t(u,!0),A&&$){const ne=()=>{u.subTree=Hr(u),$(A,u.subTree,u,v,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ne()):ne()}else{const ne=u.subTree=Hr(u);O(null,ne,g,y,u,v,w),d.el=ne.el}if(W&&me(W,v),!Y&&(N=M&&M.onVnodeMounted)){const ne=d;me(()=>Ue(N,J,ne),v)}(d.shapeFlag&256||J&&sr(J.vnode)&&J.vnode.shapeFlag&256)&&u.a&&me(u.a,v),u.isMounted=!0,d=g=y=null}},E=u.effect=new Ds(I,()=>Jo(b),u.scope),b=u.update=()=>E.run();b.id=u.uid,_t(u,!0),b()},q=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,eu(u,d.props,y,g),ru(u,d.children,g),rn(),Pr(void 0,u.update),sn()},_e=(u,d,g,y,v,w,R,I,E=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,A=d.children,{patchFlag:M,shapeFlag:L}=d;if(M>0){if(M&128){ze(b,A,g,y,v,w,R,I,E);return}else if(M&256){Ft(b,A,g,y,v,w,R,I,E);return}}L&8?(N&16&&T(b,v,w),A!==b&&f(g,A)):N&16?L&16?ze(b,A,g,y,v,w,R,I,E):T(b,v,w,!0):(N&8&&f(g,""),L&16&&ge(A,g,y,v,w,R,I,E))},Ft=(u,d,g,y,v,w,R,I,E)=>{u=u||zt,d=d||zt;const b=u.length,N=d.length,A=Math.min(b,N);let M;for(M=0;M<A;M++){const L=d[M]=E?it(d[M]):Be(d[M]);O(u[M],L,g,null,v,w,R,I,E)}b>N?T(u,v,w,!0,!1,A):ge(d,g,y,v,w,R,I,E,A)},ze=(u,d,g,y,v,w,R,I,E)=>{let b=0;const N=d.length;let A=u.length-1,M=N-1;for(;b<=A&&b<=M;){const L=u[b],W=d[b]=E?it(d[b]):Be(d[b]);if(un(L,W))O(L,W,g,null,v,w,R,I,E);else break;b++}for(;b<=A&&b<=M;){const L=u[A],W=d[M]=E?it(d[M]):Be(d[M]);if(un(L,W))O(L,W,g,null,v,w,R,I,E);else break;A--,M--}if(b>A){if(b<=M){const L=M+1,W=L<N?d[L].el:y;for(;b<=M;)O(null,d[b]=E?it(d[b]):Be(d[b]),g,W,v,w,R,I,E),b++}}else if(b>M)for(;b<=A;)we(u[b],v,w,!0),b++;else{const L=b,W=b,J=new Map;for(b=W;b<=M;b++){const ve=d[b]=E?it(d[b]):Be(d[b]);ve.key!=null&&J.set(ve.key,b)}let Y,ne=0;const Se=M-W+1;let Bt=!1,ri=0;const ln=new Array(Se);for(b=0;b<Se;b++)ln[b]=0;for(b=L;b<=A;b++){const ve=u[b];if(ne>=Se){we(ve,v,w,!0);continue}let Le;if(ve.key!=null)Le=J.get(ve.key);else for(Y=W;Y<=M;Y++)if(ln[Y-W]===0&&un(ve,d[Y])){Le=Y;break}Le===void 0?we(ve,v,w,!0):(ln[Le-W]=b+1,Le>=ri?ri=Le:Bt=!0,O(ve,d[Le],g,null,v,w,R,I,E),ne++)}const si=Bt?cu(ln):zt;for(Y=si.length-1,b=Se-1;b>=0;b--){const ve=W+b,Le=d[ve],ii=ve+1<N?d[ve+1].el:y;ln[b]===0?O(null,Le,g,ii,v,w,R,I,E):Bt&&(Y<0||b!==si[Y]?xe(Le,g,ii,2):Y--)}}},xe=(u,d,g,y,v=null)=>{const{el:w,type:R,transition:I,children:E,shapeFlag:b}=u;if(b&6){xe(u.component.subTree,d,g,y);return}if(b&128){u.suspense.move(d,g,y);return}if(b&64){R.move(u,d,g,ee);return}if(R===qe){r(w,d,g);for(let A=0;A<E.length;A++)xe(E[A],d,g,y);r(u.anchor,d,g);return}if(R===jr){z(u,d,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(w),r(w,d,g),me(()=>I.enter(w),v);else{const{leave:A,delayLeave:M,afterLeave:L}=I,W=()=>r(w,d,g),J=()=>{A(w,()=>{W(),L&&L()})};M?M(w,W,J):J()}else r(w,d,g)},we=(u,d,g,y=!1,v=!1)=>{const{type:w,props:R,ref:I,children:E,dynamicChildren:b,shapeFlag:N,patchFlag:A,dirs:M}=u;if(I!=null&&hs(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const L=N&1&&M,W=!sr(u);let J;if(W&&(J=R&&R.onVnodeBeforeUnmount)&&Ue(J,d,u),N&6)P(u.component,g,y);else{if(N&128){u.suspense.unmount(g,y);return}L&&mt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,v,ee,y):b&&(w!==qe||A>0&&A&64)?T(b,d,g,!1,!0):(w===qe&&A&384||!v&&N&16)&&T(E,d,g),y&&cn(u)}(W&&(J=R&&R.onVnodeUnmounted)||L)&&me(()=>{J&&Ue(J,d,u),L&&mt(u,null,d,"unmounted")},g)},cn=u=>{const{type:d,el:g,anchor:y,transition:v}=u;if(d===qe){m(g,y);return}if(d===jr){ce(u);return}const w=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,E=()=>R(g,w);I?I(u.el,w,E):E()}else w()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:y,scope:v,update:w,subTree:R,um:I}=u;y&&tr(y),v.stop(),w&&(w.active=!1,we(R,u,d,g)),I&&me(I,d),me(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,y=!1,v=!1,w=0)=>{for(let R=w;R<u.length;R++)we(u[R],d,g,y,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),G=(u,d,g)=>{u==null?d._vnode&&we(d._vnode,null,null,!0):O(d._vnode||null,u,d,null,null,null,g),Qo(),d._vnode=u},ee={p:O,um:we,m:xe,r:cn,mt:Ut,mc:ge,pc:_e,pbc:We,n:k,o:t};let H,$;return e&&([H,$]=e(ee)),{render:G,hydrate:H,createApp:iu(G,H)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function va(t,e,n=!1){const r=t.children,s=e.children;if(D(r)&&D(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=it(s[i]),a.el=o.el),n||va(o,a))}}function cu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lu=t=>t.__isTeleport,qe=Symbol(void 0),js=Symbol(void 0),At=Symbol(void 0),jr=Symbol(void 0),vn=[];let Pe=null;function $e(t=!1){vn.push(Pe=t?null:[])}function uu(){vn.pop(),Pe=vn[vn.length-1]||null}let On=1;function Ri(t){On+=t}function ya(t){return t.dynamicChildren=On>0?Pe||zt:null,uu(),On>0&&Pe&&Pe.push(t),t}function St(t,e,n,r,s,i){return ya(ie(t,e,n,r,s,i,!0))}function ps(t,e,n,r,s){return ya(oe(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Mr="__vInternal",ba=({key:t})=>t!=null?t:null,ir=({ref:t,ref_key:e,ref_for:n})=>t!=null?ae(t)||fe(t)||B(t)?{i:Ae,r:t,k:e,f:!!n}:t:null;function ie(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ba(e),ref:e&&ir(e),scopeId:ta,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Vs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),On>0&&!o&&Pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pe.push(c),c}const oe=fu;function fu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zl)&&(t=At),gs(t)){const a=Xt(t,e,!0);return n&&Vs(a,n),On>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag|=-2,a}if(wu(t)&&(t=t.__vccOpts),e){e=du(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=As(a)),re(c)&&(Ho(c)&&!D(c)&&(c=pe({},c)),e.style=Os(c))}const o=ae(t)?1:Pl(t)?128:lu(t)?64:re(t)?4:B(t)?2:0;return ie(t,e,n,r,s,o,i,!0)}function du(t){return t?Ho(t)||Mr in t?pe({},t):t:null}function Xt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?hu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ba(a),ref:e&&e.ref?n&&s?D(s)?s.concat(ir(e)):[s,ir(e)]:ir(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xt(t.ssContent),ssFallback:t.ssFallback&&Xt(t.ssFallback),el:t.el,anchor:t.anchor}}function on(t=" ",e=0){return oe(js,null,t,e)}function yn(t="",e=!1){return e?($e(),ps(At,null,t)):oe(At,null,t)}function Be(t){return t==null||typeof t=="boolean"?oe(At):D(t)?oe(qe,null,t.slice()):typeof t=="object"?it(t):oe(js,null,String(t))}function it(t){return t.el===null||t.memo?t:Xt(t)}function Vs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Mr in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function hu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=As([e.class,r.class]));else if(s==="style")e.style=Os([e.style,r.style]);else if(Tr(s)){const i=e[s],o=r[s];o&&i!==o&&!(D(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ue(t,e,n,r=null){Ne(t,e,7,[n,r])}const pu=_a();let gu=0;function mu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||pu,i={uid:gu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ha(r,s),emitsOptions:ea(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rl.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const Qt=t=>{ue=t,t.scope.on()},Ct=()=>{ue&&ue.scope.off(),ue=null};function Ia(t){return t.vnode.shapeFlag&4}let An=!1;function _u(t,e=!1){An=e;const{props:n,children:r}=t.vnode,s=Ia(t);Zl(t,n,s,e),nu(t,r);const i=s?vu(t,e):void 0;return An=!1,i}function vu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jo(new Proxy(t.ctx,ql));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?bu(t):null;Qt(t),rn();const i=ft(r,t,0,[t.props,s]);if(sn(),Ct(),Co(i)){if(i.then(Ct,Ct),e)return i.then(o=>{Si(t,o,e)}).catch(o=>{Ar(o,t,0)});t.asyncDep=i}else Si(t,i,e)}else wa(t,e)}function Si(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Ko(e)),wa(t,n)}let Ci;function wa(t,e,n){const r=t.type;if(!t.render){if(!e&&Ci&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=Ci(s,l)}}t.render=r.render||ke}Qt(t),rn(),Gl(t),sn(),Ct()}function yu(t){return new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}})}function bu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=yu(t))},slots:t.slots,emit:t.emit,expose:e}}function Dr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ko(jo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hr)return hr[n](t)}}))}function Iu(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function wu(t){return B(t)&&"__vccOpts"in t}const Ee=(t,e)=>yl(t,e,An);function Ea(t,e,n){const r=arguments.length;return r===2?re(e)&&!D(e)?gs(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),oe(t,e,n))}const Eu="3.2.37",Tu="http://www.w3.org/2000/svg",bt=typeof document<"u"?document:null,Oi=bt&&bt.createElement("template"),Ru={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(Tu,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oi.innerHTML=r?`<svg>${t}</svg>`:t;const a=Oi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Su(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cu(t,e,n){const r=t.style,s=ae(n);if(n&&!s){for(const i in n)ms(r,i,n[i]);if(e&&!ae(e))for(const i in e)n[i]==null&&ms(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ai=/\s*!important$/;function ms(t,e,n){if(D(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ou(t,e);Ai.test(n)?t.setProperty(nn(r),n.replace(Ai,""),"important"):t[r]=n}}const Pi=["Webkit","Moz","ms"],Vr={};function Ou(t,e){const n=Vr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Vr[e]=r;r=Cr(r);for(let s=0;s<Pi.length;s++){const i=Pi[s]+r;if(i in t)return Vr[e]=i}return e}const ki="http://www.w3.org/1999/xlink";function Au(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ki,e.slice(6,e.length)):t.setAttributeNS(ki,e,n);else{const i=Cc(e);n==null||i&&!To(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Pu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=To(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ta,ku]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let _s=0;const Nu=Promise.resolve(),Mu=()=>{_s=0},Du=()=>_s||(Nu.then(Mu),_s=Ta());function It(t,e,n,r){t.addEventListener(e,n,r)}function xu(t,e,n,r){t.removeEventListener(e,n,r)}function Lu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Uu(e);if(r){const l=i[e]=Fu(r,s);It(t,a,l,c)}else o&&(xu(t,a,o,c),i[e]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Uu(t){let e;if(Ni.test(t)){e={};let n;for(;n=t.match(Ni);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[nn(t.slice(2)),e]}function Fu(t,e){const n=r=>{const s=r.timeStamp||Ta();(ku||s>=n.attached-1)&&Ne(Bu(r,n.value),e,5,[r])};return n.value=t,n.attached=Du(),n}function Bu(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mi=/^on[a-z]/,$u=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Su(t,r,s):e==="style"?Cu(t,n,r):Tr(e)?Ps(e)||Lu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hu(t,e,r,s))?Pu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Au(t,e,r,s))};function Hu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mi.test(e)&&B(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mi.test(e)&&ae(n)?!1:e in t}const gr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>tr(e,n):e};function ju(t){t.target.composing=!0}function Di(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=gr(s);const i=r||s.props&&s.props.type==="number";It(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ts(a)),t._assign(a)}),n&&It(t,"change",()=>{t.value=t.value.trim()}),e||(It(t,"compositionstart",ju),It(t,"compositionend",Di),It(t,"change",Di))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=gr(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ts(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},cm={deep:!0,created(t,e,n){t._assign=gr(n),It(t,"change",()=>{const r=t._modelValue,s=Vu(t),i=t.checked,o=t._assign;if(D(r)){const a=Ro(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Rr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Ra(t,i))})},mounted:Li,beforeUpdate(t,e,n){t._assign=gr(n),Li(t,e,n)}};function Li(t,{value:e,oldValue:n},r){t._modelValue=e,D(e)?t.checked=Ro(e,r.props.value)>-1:Rr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Er(e,Ra(t,!0)))}function Vu(t){return"_value"in t?t._value:t.value}function Ra(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Wu=["ctrl","shift","alt","meta"],zu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Wu.some(n=>t[`${n}Key`]&&!e.includes(n))},Ku=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=zu[e[s]];if(i&&i(n,e))return}return t(n,...r)},qu=pe({patchProp:$u},Ru);let Ui;function Gu(){return Ui||(Ui=ou(qu))}const Ju=(...t)=>{const e=Gu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yu(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Yu(t){return ae(t)?document.querySelector(t):t}const Sa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Xu={},Qu={class:"p-5 bg-primary dark:bg-zinc-800 text-white flex items-center w-full justify-evenly shadow"},Zu=ie("h1",{class:"text-2xl"},"Izac's Bug Tracker",-1),ef={class:"flex-grow flex justify-center"},tf={class:"m-2"},nf=on("Home"),rf={class:"m-2"},sf=on("Bugs"),of={class:"m-2"},af=on("Users"),cf=on("My Account");function lf(t,e){const n=la("router-link");return $e(),St("header",Qu,[Zu,ie("ul",ef,[ie("li",tf,[oe(n,{to:"/"},{default:Wt(()=>[nf]),_:1})]),ie("li",rf,[oe(n,{to:"/bugs"},{default:Wt(()=>[sf]),_:1})]),ie("li",of,[oe(n,{to:"/bugs"},{default:Wt(()=>[af]),_:1})])]),oe(n,{to:"/account"},{default:Wt(()=>[cf]),_:1})])}const uf=Sa(Xu,[["render",lf]]);/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vt=typeof window<"u";function ff(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Wr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const bn=()=>{},Me=Array.isArray,df=/\/$/,hf=t=>t.replace(df,"");function zr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_f(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function pf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zt(e.matched[r],n.matched[s])&&Ca(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ca(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mf(t[n],e[n]))return!1;return!0}function mf(t,e){return Me(t)?Bi(t,e):Me(e)?Bi(e,t):t===e}function Bi(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _f(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Pn;(function(t){t.pop="pop",t.push="push"})(Pn||(Pn={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function vf(t){if(!t)if(Vt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hf(t)}const yf=/^[^#]+#/;function bf(t,e){return t.replace(yf,"#")+e}function If(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xr=()=>({left:window.pageXOffset,top:window.pageYOffset});function wf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=If(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function $i(t,e){return(history.state?history.state.position-e:-1)+t}const vs=new Map;function Ef(t,e){vs.set(t,e)}function Tf(t){const e=vs.get(t);return vs.delete(t),e}let Rf=()=>location.protocol+"//"+location.host;function Oa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Fi(c,"")}return Fi(n,t)+r+s}function Sf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Oa(t,location),S=n.value,U=e.value;let O=0;if(p){if(n.value=_,e.value=p,o&&o===S){o=null;return}O=U?p.position-U.position:0}else r(_);s.forEach(C=>{C(n.value,S,{delta:O,type:Pn.pop,direction:O?O>0?In.forward:In.back:In.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:p}=window;!p.state||p.replaceState(X({},p.state,{scroll:xr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Hi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xr():null}}function Cf(t){const{history:e,location:n}=window,r={value:Oa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Rf()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=X({},e.state,Hi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=X({},s.value,e.state,{forward:c,scroll:xr()});i(f.current,f,!0);const h=X({},Hi(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Of(t){t=vf(t);const e=Cf(t),n=Sf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:bf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Af(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Of(t)}function Pf(t){return typeof t=="string"||t&&typeof t=="object"}function Aa(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pa=Symbol("");var ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ji||(ji={}));function en(t,e){return X(new Error,{type:t,[Pa]:!0},e)}function Ke(t,e){return t instanceof Error&&Pa in t&&(e==null||!!(t.type&e))}const Vi="[^/]+?",kf={sensitive:!1,strict:!1,start:!0,end:!0},Nf=/[.+*?^${}()[\]/\\]/g;function Mf(t,e){const n=X({},kf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Nf,"\\$&"),_+=40;else if(p.type===1){const{value:S,repeatable:U,optional:O,regexp:C}=p;i.push({name:S,repeatable:U,optional:O});const F=C||Vi;if(F!==Vi){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${F}): `+z.message)}}let j=U?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(j=O&&l.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),U&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",S=i[p-1];h[S.name]=_&&S.repeatable?_.split("/"):_}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:U,optional:O}=_,C=S in l?l[S]:"";if(Me(C)&&!U)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const F=Me(C)?C.join("/"):C;if(!F)if(O)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Df(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Df(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wi(r))return 1;if(Wi(s))return-1}return s.length-r.length}function Wi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lf={type:0,value:""},Uf=/[a-zA-Z0-9_]/;function Ff(t){if(!t)return[[]];if(t==="/")return[[Lf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Uf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Bf(t,e,n){const r=Mf(Ff(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $f(t,e){const n=[],r=new Map;e=Ki({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const _=!p,S=jf(f);S.aliasOf=p&&p.record;const U=Ki(e,f),O=[S];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of j)O.push(X({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let C,F;for(const j of O){const{path:z}=j;if(h&&z[0]!=="/"){const ce=h.record.path,le=ce[ce.length-1]==="/"?"":"/";j.path=h.record.path+(z&&le+z)}if(C=Bf(j,h,U),p?p.alias.push(C):(F=F||C,F!==C&&F.alias.push(C),_&&f.name&&!zi(C)&&o(f.name)),S.children){const ce=S.children;for(let le=0;le<ce.length;le++)i(ce[le],C,p&&p.children[le])}p=p||C,c(C)}return F?()=>{o(F)}:bn}function o(f){if(Aa(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&xf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!ka(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!zi(f)&&r.set(f.record.name,f)}function l(f,h){let p,_={},S,U;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw en(1,{location:f});U=p.record.name,_=X(Hf(h.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),f.params),S=p.stringify(_)}else if("path"in f)S=f.path,p=n.find(F=>F.re.test(S)),p&&(_=p.parse(S),U=p.record.name);else{if(p=h.name?r.get(h.name):n.find(F=>F.re.test(h.path)),!p)throw en(1,{location:f,currentLocation:h});U=p.record.name,_=X({},h.params,f.params),S=p.stringify(_)}const O=[];let C=p;for(;C;)O.unshift(C.record),C=C.parent;return{name:U,path:S,params:_,matched:O,meta:Wf(O)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Hf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Vf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Wf(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Ki(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ka(t,e){return e.children.some(n=>n===t||ka(t,n))}const Na=/#/g,zf=/&/g,Kf=/\//g,qf=/=/g,Gf=/\?/g,Ma=/\+/g,Jf=/%5B/g,Yf=/%5D/g,Da=/%5E/g,Xf=/%60/g,xa=/%7B/g,Qf=/%7C/g,La=/%7D/g,Zf=/%20/g;function Ws(t){return encodeURI(""+t).replace(Qf,"|").replace(Jf,"[").replace(Yf,"]")}function ed(t){return Ws(t).replace(xa,"{").replace(La,"}").replace(Da,"^")}function ys(t){return Ws(t).replace(Ma,"%2B").replace(Zf,"+").replace(Na,"%23").replace(zf,"%26").replace(Xf,"`").replace(xa,"{").replace(La,"}").replace(Da,"^")}function td(t){return ys(t).replace(qf,"%3D")}function nd(t){return Ws(t).replace(Na,"%23").replace(Gf,"%3F")}function rd(t){return t==null?"":nd(t).replace(Kf,"%2F")}function mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function sd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ma," "),o=i.indexOf("="),a=mr(o<0?i:i.slice(0,o)),c=o<0?null:mr(i.slice(o+1));if(a in e){let l=e[a];Me(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function qi(t){let e="";for(let n in t){const r=t[n];if(n=td(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&ys(i)):[r&&ys(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function id(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const od=Symbol(""),Gi=Symbol(""),zs=Symbol(""),Ua=Symbol(""),bs=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(en(4,{from:n,to:e})):h instanceof Error?a(h):Pf(h)?a(en(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Kr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ad(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ot(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=ff(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ot(p,n,r,i,o)()}))}}return s}function ad(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ji(t){const e=dt(zs),n=dt(Ua),r=Ee(()=>e.resolve(Rt(t.to))),s=Ee(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Zt.bind(null,f));if(p>-1)return p;const _=Yi(c[l-2]);return l>1&&Yi(f)===_&&h[h.length-1].path!==_?h.findIndex(Zt.bind(null,c[l-2])):p}),i=Ee(()=>s.value>-1&&fd(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&Ca(n.params,r.value.params));function a(c={}){return ud(c)?e[Rt(t.replace)?"replace":"push"](Rt(t.to)).catch(bn):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const cd=sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ji,setup(t,{slots:e}){const n=Un(Ji(t)),{options:r}=dt(zs),s=Ee(()=>({[Xi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ea("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ld=cd;function ud(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Yi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xi=(t,e,n)=>t!=null?t:e!=null?e:n,dd=sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dt(bs),s=Ee(()=>t.route||r.value),i=dt(Gi,0),o=Ee(()=>{let l=Rt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Ee(()=>s.value.matched[o.value]);nr(Gi,Ee(()=>o.value+1)),nr(od,a),nr(bs,s);const c=pl();return rr(()=>[c.value,a.value,t.name],([l,f,h],[p,_,S])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!Zt(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(U=>U(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Qi(n.default,{Component:p,route:l});const _=h.props[f],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,O=Ea(p,X({},S,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return Qi(n.default,{Component:O,route:l})||O}}});function Qi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fa=dd;function hd(t){const e=$f(t.routes,t),n=t.parseQuery||sd,r=t.stringifyQuery||qi,s=t.history,i=fn(),o=fn(),a=fn(),c=gl(nt);let l=nt;Vt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Wr.bind(null,m=>""+m),h=Wr.bind(null,rd),p=Wr.bind(null,mr);function _(m,P){let T,k;return Aa(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function S(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function U(){return e.getRoutes().map(m=>m.record)}function O(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=X({},P||c.value),typeof m=="string"){const $=zr(n,m,P.path),u=e.resolve({path:$.path},P),d=s.createHref($.fullPath);return X($,u,{params:p(u.params),hash:mr($.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=X({},m,{path:zr(n,m.path,P.path).path});else{const $=X({},m.params);for(const u in $)$[u]==null&&delete $[u];T=X({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),G=m.hash||"";k.params=f(p(k.params));const ee=pf(r,X({},m,{hash:ed(G),path:k.path})),H=s.createHref(ee);return X({fullPath:ee,hash:G,query:r===qi?id(m.query):m.query||{}},k,{redirectedFrom:void 0,href:H})}function F(m){return typeof m=="string"?zr(n,m,c.value.path):X({},m)}function j(m,P){if(l!==m)return en(8,{from:P,to:m})}function z(m){return Ie(m)}function ce(m){return z(X(F(m),{replace:!0}))}function le(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=F(k):{path:k},k.params={}),X({query:m.query,hash:m.hash,params:"path"in k?{}:m.params},k)}}function Ie(m,P){const T=l=C(m),k=c.value,G=m.state,ee=m.force,H=m.replace===!0,$=le(T);if($)return Ie(X(F($),{state:G,force:ee,replace:H}),P||T);const u=T;u.redirectedFrom=P;let d;return!ee&&gf(r,k,T)&&(d=en(16,{to:u,from:k}),Ft(k,k,!0,!1)),(d?Promise.resolve(d):ge(u,k)).catch(g=>Ke(g)?Ke(g,2)?g:_e(g):Z(g,u,k)).then(g=>{if(g){if(Ke(g,2))return Ie(X({replace:H},F(g.to),{state:G,force:ee}),P||u)}else g=We(u,k,!0,H,G);return De(u,k,g),g})}function et(m,P){const T=j(m,P);return T?Promise.reject(T):Promise.resolve()}function ge(m,P){let T;const[k,G,ee]=pd(m,P);T=Kr(k.reverse(),"beforeRouteLeave",m,P);for(const $ of k)$.leaveGuards.forEach(u=>{T.push(ot(u,m,P))});const H=et.bind(null,m,P);return T.push(H),$t(T).then(()=>{T=[];for(const $ of i.list())T.push(ot($,m,P));return T.push(H),$t(T)}).then(()=>{T=Kr(G,"beforeRouteUpdate",m,P);for(const $ of G)$.updateGuards.forEach(u=>{T.push(ot(u,m,P))});return T.push(H),$t(T)}).then(()=>{T=[];for(const $ of m.matched)if($.beforeEnter&&!P.matched.includes($))if(Me($.beforeEnter))for(const u of $.beforeEnter)T.push(ot(u,m,P));else T.push(ot($.beforeEnter,m,P));return T.push(H),$t(T)}).then(()=>(m.matched.forEach($=>$.enterCallbacks={}),T=Kr(ee,"beforeRouteEnter",m,P),T.push(H),$t(T))).then(()=>{T=[];for(const $ of o.list())T.push(ot($,m,P));return T.push(H),$t(T)}).catch($=>Ke($,8)?$:Promise.reject($))}function De(m,P,T){for(const k of a.list())k(m,P,T)}function We(m,P,T,k,G){const ee=j(m,P);if(ee)return ee;const H=P===nt,$=Vt?history.state:{};T&&(k||H?s.replace(m.fullPath,X({scroll:H&&$&&$.scroll},G)):s.push(m.fullPath,G)),c.value=m,Ft(m,P,T,H),_e()}let Re;function xt(){Re||(Re=s.listen((m,P,T)=>{if(!cn.listening)return;const k=C(m),G=le(k);if(G){Ie(X(G,{replace:!0}),k).catch(bn);return}l=k;const ee=c.value;Vt&&Ef($i(ee.fullPath,T.delta),xr()),ge(k,ee).catch(H=>Ke(H,12)?H:Ke(H,2)?(Ie(H.to,k).then($=>{Ke($,20)&&!T.delta&&T.type===Pn.pop&&s.go(-1,!1)}).catch(bn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(H,k,ee))).then(H=>{H=H||We(k,ee,!1),H&&(T.delta&&!Ke(H,8)?s.go(-T.delta,!1):T.type===Pn.pop&&Ke(H,20)&&s.go(-1,!1)),De(k,ee,H)}).catch(bn)}))}let Lt=fn(),Ut=fn(),se;function Z(m,P,T){_e(m);const k=Ut.list();return k.length?k.forEach(G=>G(m,P,T)):console.error(m),Promise.reject(m)}function q(){return se&&c.value!==nt?Promise.resolve():new Promise((m,P)=>{Lt.add([m,P])})}function _e(m){return se||(se=!m,xt(),Lt.list().forEach(([P,T])=>m?T(m):P()),Lt.reset()),m}function Ft(m,P,T,k){const{scrollBehavior:G}=t;if(!Vt||!G)return Promise.resolve();const ee=!T&&Tf($i(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Go().then(()=>G(m,P,ee)).then(H=>H&&wf(H)).catch(H=>Z(H,m,P))}const ze=m=>s.go(m);let xe;const we=new Set,cn={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,hasRoute:O,getRoutes:U,resolve:C,options:t,push:z,replace:ce,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ut.add,isReady:q,install(m){const P=this;m.component("RouterLink",ld),m.component("RouterView",Fa),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(c)}),Vt&&!xe&&c.value===nt&&(xe=!0,z(s.location).catch(G=>{}));const T={};for(const G in nt)T[G]=Ee(()=>c.value[G]);m.provide(zs,P),m.provide(Ua,Un(T)),m.provide(bs,c);const k=m.unmount;we.add(m),m.unmount=function(){we.delete(m),we.size<1&&(l=nt,Re&&Re(),Re=null,c.value=nt,xe=!1,se=!1),k()}}};return cn}function $t(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function pd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zt(l,c))||s.push(c))}return[n,r,s]}const gd={data(){return{message:"Hello World"}},async created(){console.log("App created");const e=await(await fetch("/api/test")).json();console.log(e)}},md=Object.assign(gd,{__name:"App",setup(t){return(e,n)=>($e(),St("div",null,[oe(uf),oe(Rt(Fa))]))}}),_d="modulepreload",vd=function(t){return"/"+t},Zi={},qr=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=vd(s),s in Zi)return;Zi[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":_d,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
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
 */const Ba=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[f],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ba(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},bd=function(t){const e=Ba(t);return $a.encodeByteArray(e,!0)},Ha=function(t){return bd(t).replace(/\./g,"")},Id=function(t){try{return $a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class wd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Td(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cd(){return typeof indexedDB=="object"}function Od(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ad="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ad,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,r)}}function Pd(t,e){return t.replace(kd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kd=/\{\$([^}]+)}/g;function Nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(eo(i)&&eo(o)){if(!_r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function eo(t){return t!==null&&typeof t=="object"}/**
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
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Md(t,e){const n=new Dd(t,e);return n.subscribe.bind(n)}class Dd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gr),s.error===void 0&&(s.error=Gr),s.complete===void 0&&(s.complete=Gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gr(){}/**
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
 */function Dt(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class Ld{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fd(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ud(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ud(t){return t===yt?void 0:t}function Fd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ld(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const $d={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Hd=te.INFO,jd={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Vd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=Hd,this._logHandler=Vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Wd=(t,e)=>e.some(n=>t instanceof n);let to,no;function zd(){return to||(to=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kd(){return no||(no=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,Is=new WeakMap,Wa=new WeakMap,Jr=new WeakMap,Ks=new WeakMap;function qd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ht(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Va.set(n,t)}).catch(()=>{}),Ks.set(e,t),e}function Gd(t){if(Is.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Is.set(t,e)}let ws={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Is.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jd(t){ws=t(ws)}function Yd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yr(this),e,...n);return Wa.set(r,e.sort?e.sort():[e]),ht(r)}:Kd().includes(t)?function(...e){return t.apply(Yr(this),e),ht(Va.get(this))}:function(...e){return ht(t.apply(Yr(this),e))}}function Xd(t){return typeof t=="function"?Yd(t):(t instanceof IDBTransaction&&Gd(t),Wd(t,zd())?new Proxy(t,ws):t)}function ht(t){if(t instanceof IDBRequest)return qd(t);if(Jr.has(t))return Jr.get(t);const e=Xd(t);return e!==t&&(Jr.set(t,e),Ks.set(e,t)),e}const Yr=t=>Ks.get(t);function Qd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ht(o.result),c.oldVersion,c.newVersion,ht(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Zd=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],Xr=new Map;function ro(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xr.get(e))return Xr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Xr.set(e,i),i}Jd(t=>({...t,get:(e,n,r)=>ro(e,n)||t.get(e,n,r),has:(e,n)=>!!ro(e,n)||t.has(e,n)}));/**
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
 */class th{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Es="@firebase/app",so="0.7.30";/**
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
 */const Pt=new ja("@firebase/app"),rh="@firebase/app-compat",sh="@firebase/analytics-compat",ih="@firebase/analytics",oh="@firebase/app-check-compat",ah="@firebase/app-check",ch="@firebase/auth",lh="@firebase/auth-compat",uh="@firebase/database",fh="@firebase/database-compat",dh="@firebase/functions",hh="@firebase/functions-compat",ph="@firebase/installations",gh="@firebase/installations-compat",mh="@firebase/messaging",_h="@firebase/messaging-compat",vh="@firebase/performance",yh="@firebase/performance-compat",bh="@firebase/remote-config",Ih="@firebase/remote-config-compat",wh="@firebase/storage",Eh="@firebase/storage-compat",Th="@firebase/firestore",Rh="@firebase/firestore-compat",Sh="firebase",Ch="9.9.2";/**
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
 */const za="[DEFAULT]",Oh={[Es]:"fire-core",[rh]:"fire-core-compat",[ih]:"fire-analytics",[sh]:"fire-analytics-compat",[ah]:"fire-app-check",[oh]:"fire-app-check-compat",[ch]:"fire-auth",[lh]:"fire-auth-compat",[uh]:"fire-rtdb",[fh]:"fire-rtdb-compat",[dh]:"fire-fn",[hh]:"fire-fn-compat",[ph]:"fire-iid",[gh]:"fire-iid-compat",[mh]:"fire-fcm",[_h]:"fire-fcm-compat",[vh]:"fire-perf",[yh]:"fire-perf-compat",[bh]:"fire-rc",[Ih]:"fire-rc-compat",[wh]:"fire-gcs",[Eh]:"fire-gcs-compat",[Th]:"fire-fst",[Rh]:"fire-fst-compat","fire-js":"fire-js",[Sh]:"fire-js-all"};/**
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
 */const vr=new Map,Ts=new Map;function Ah(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if(Ts.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,t);for(const n of vr.values())Ah(n,t);return!0}function Ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ph={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new Fn("app","Firebase",Ph);/**
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
 */class kh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Lr=Ch;function Nh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:za,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});const s=vr.get(r);if(s){if(_r(t,s.options)&&_r(n,s.config))return s;throw kt.create("duplicate-app",{appName:r})}const i=new Bd(r);for(const a of Ts.values())i.addComponent(a);const o=new kh(t,n,i);return vr.set(r,o),o}function Mh(t=za){const e=vr.get(t);if(!e)throw kt.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=Oh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}kn(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dh="firebase-heartbeat-database",xh=1,Nn="firebase-heartbeat-store";let Qr=null;function qa(){return Qr||(Qr=Qd(Dh,xh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),Qr}async function Lh(t){var e;try{return(await qa()).transaction(Nn).objectStore(Nn).get(Ga(t))}catch(n){if(n instanceof gt)Pt.warn(n.message);else{const r=kt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Pt.warn(r.message)}}}async function io(t,e){var n;try{const s=(await qa()).transaction(Nn,"readwrite");return await s.objectStore(Nn).put(e,Ga(t)),s.done}catch(r){if(r instanceof gt)Pt.warn(r.message);else{const s=kt.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Pt.warn(s.message)}}}function Ga(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uh=1024,Fh=30*24*60*60*1e3;class Bh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oo(),{heartbeatsToSend:n,unsentEntries:r}=$h(this._heartbeatsCache.heartbeats),s=Ha(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function oo(){return new Date().toISOString().substring(0,10)}function $h(t,e=Uh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ao(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ao(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cd()?Od().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return io(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ao(t){return Ha(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jh(t){kn(new tn("platform-logger",e=>new th(e),"PRIVATE")),kn(new tn("heartbeat",e=>new Bh(e),"PRIVATE")),Gt(Es,so,t),Gt(Es,so,"esm2017"),Gt("fire-js","")}jh("");var Vh="firebase",Wh="9.9.2";/**
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
 */Gt(Vh,Wh,"app");function qs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ja(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zh=Ja,Ya=new Fn("auth","Firebase",Ja());/**
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
 */const co=new ja("@firebase/auth");function or(t,...e){co.logLevel<=te.ERROR&&co.error(`Auth (${Lr}): ${t}`,...e)}/**
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
 */function Te(t,...e){throw Gs(t,...e)}function He(t,...e){return Gs(t,...e)}function Xa(t,e,n){const r=Object.assign(Object.assign({},zh()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function Kh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Te(t,"argument-error"),Xa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ya.create(t,...e)}function x(t,e,...n){if(!t)throw Gs(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function Qe(t,e){t||Je(e)}/**
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
 */const lo=new Map;function Ye(t){Qe(t instanceof Function,"Expected a class definition");let e=lo.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lo.set(t,e),e)}/**
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
 */function qh(t,e){const n=Ka(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_r(i,e!=null?e:{}))return s;Te(s,"already-initialized")}return n.initialize({options:e})}function Gh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Rs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jh(){return uo()==="http:"||uo()==="https:"}function uo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Yh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jh()||Td()||"connection"in navigator)?navigator.onLine:!0}function Xh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||Rd()}get(){return Yh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Js(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Zh=new $n(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,r,s={}){return Za(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qa.fetch()(ec(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Za(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qh),e);try{const s=new ep(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xa(t,f,l);Te(t,f)}}catch(s){if(s instanceof gt)throw s;Te(t,"network-request-failed")}}async function Vn(t,e,n,r,s={}){const i=await jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Te(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ec(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Js(t.config,s):`${t.config.apiScheme}://${s}`}class ep{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),Zh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function tp(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function np(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rp(t,e=!1){const n=Dt(t),r=await n.getIdToken(e),s=Ys(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wn(Zr(s.auth_time)),issuedAtTime:wn(Zr(s.iat)),expirationTime:wn(Zr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zr(t){return Number(t)*1e3}function Ys(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const i=Id(r);return i?JSON.parse(i):(or("Failed to decode base64 JWT payload"),null)}catch(i){return or("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function sp(t){const e=Ys(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&ip(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ip({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class op{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wn(this.lastLoginAt),this.creationTime=wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function yr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mn(t,np(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lp(i.providerUserInfo):[],a=cp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function ap(t){const e=Dt(t);await yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lp(t){return t.map(e=>{var{providerId:n}=e,r=qs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function up(t,e){const n=await Za(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ec(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qa.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await up(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Dn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function rt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new op(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rp(this,e)}reload(){return ap(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mn(this,tp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,U=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:ce,providerData:le,stsTokenManager:Ie}=n;x(j&&Ie,e,"internal-error");const et=Dn.fromJSON(this.name,Ie);x(typeof j=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),x(typeof z=="boolean",e,"internal-error"),x(typeof ce=="boolean",e,"internal-error"),rt(_,e.name),rt(S,e.name),rt(U,e.name),rt(O,e.name),rt(C,e.name),rt(F,e.name);const ge=new Ot({uid:j,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ce,photoURL:S,phoneNumber:_,tenantId:U,stsTokenManager:et,createdAt:C,lastLoginAt:F});return le&&Array.isArray(le)&&(ge.providerData=le.map(De=>Object.assign({},De))),O&&(ge._redirectEventId=O),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new Dn;s.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yr(i),i}}/**
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
 */class nc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nc.type="NONE";const fo=nc;/**
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
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class Jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ar(this.userKey,s.apiKey,i),this.fullPersistenceKey=ar("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Jt(Ye(fo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ye(fo);const o=ar(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Ot._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Jt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Jt(i,e,r))}}/**
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
 */function ho(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ic(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ac(e))return"Blackberry";if(cc(e))return"Webos";if(Xs(e))return"Safari";if((e.includes("chrome/")||sc(e))&&!e.includes("edge/"))return"Chrome";if(oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rc(t=de()){return/firefox\//i.test(t)}function Xs(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sc(t=de()){return/crios\//i.test(t)}function ic(t=de()){return/iemobile/i.test(t)}function oc(t=de()){return/android/i.test(t)}function ac(t=de()){return/blackberry/i.test(t)}function cc(t=de()){return/webos/i.test(t)}function Ur(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fp(t=de()){var e;return Ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dp(){return Sd()&&document.documentMode===10}function lc(t=de()){return Ur(t)||oc(t)||cc(t)||ac(t)||/windows phone/i.test(t)||ic(t)}function hp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function uc(t,e=[]){let n;switch(t){case"Browser":n=ho(de());break;case"Worker":n=`${ho(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
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
 */class pp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class gp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new po(this),this.idTokenSubscription=new po(this),this.beforeStateQueue=new pp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ya,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await yr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Dt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wn(t){return Dt(t)}class po{constructor(e){this.auth=e,this.observer=null,this.addObserver=Md(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function mp(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function _p(t,e){return Vn(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}/**
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
 */async function vp(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function yp(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
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
 */class xn extends Qs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _p(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vp(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return mp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yp(e,{idToken:n,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yt(t,e){return Vn(t,"POST","/v1/accounts:signInWithIdp",Hn(t,e))}/**
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
 */const bp="http://localhost";class Nt extends Qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yt(e,n)}buildRequest(){const e={requestUri:bp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
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
 */function Ip(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wp(t){const e=pn(gn(t)).link,n=e?pn(gn(e)).deep_link_id:null,r=pn(gn(t)).deep_link_id;return(r?pn(gn(r)).link:null)||r||n||e||t}class Zs{constructor(e){var n,r,s,i,o,a;const c=pn(gn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Ip((s=c.mode)!==null&&s!==void 0?s:null);x(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wp(e);try{return new Zs(n)}catch{return null}}}/**
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
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,n){return xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zs.parseLink(n);return x(r,"argument-error"),xn._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class at extends zn{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
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
 */class Oe extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Oe.credential(n,r)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
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
 */class ct extends zn{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
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
 */class lt extends zn{constructor(){super("twitter.com")}static credential(e,n){return Nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
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
 */async function Ep(t,e){return Vn(t,"POST","/v1/accounts:signUp",Hn(t,e))}/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=go(r);return new Mt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=go(r);return new Mt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function go(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class br extends gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new br(e,n,r,s)}}function fc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(t,i,e,r):i})}async function Tp(t,e,n=!1){const r=await Mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",r)}/**
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
 */async function Rp(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await Mn(t,fc(s,i,e,t),n);x(o.idToken,s,"internal-error");const a=Ys(o.idToken);x(a,s,"internal-error");const{sub:c}=a;return x(t.uid===c,s,"user-mismatch"),Mt._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Te(s,"user-mismatch"),o}}/**
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
 */async function dc(t,e,n=!1){const r="signIn",s=await fc(t,r,e),i=await Mt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Sp(t,e){return dc(Wn(t),e)}async function Cp(t,e,n){const r=Wn(t),s=await Ep(r,{returnSecureToken:!0,email:e,password:n}),i=await Mt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Op(t,e,n){return Sp(Dt(t),an.credential(e,n))}function Ap(t,e,n,r){return Dt(t).onAuthStateChanged(e,n,r)}function Pp(t){return Dt(t).signOut()}const Ir="__sak";/**
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
 */class hc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ir,"1"),this.storage.removeItem(Ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kp(){const t=de();return Xs(t)||Ur(t)}const Np=1e3,Mp=10;class pc extends hc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kp()&&hp(),this.fallbackToPolling=lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Np)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pc.type="LOCAL";const Dp=pc;/**
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
 */class gc extends hc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gc.type="SESSION";const mc=gc;/**
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
 */function xp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
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
 */function ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ti("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function Up(t){je().location.href=t}/**
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
 */function _c(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Fp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $p(){return _c()?self:null}/**
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
 */const vc="firebaseLocalStorageDb",Hp=1,wr="firebaseLocalStorage",yc="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Br(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function jp(){const t=indexedDB.deleteDatabase(vc);return new Kn(t).toPromise()}function Ss(){const t=indexedDB.open(vc,Hp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wr,{keyPath:yc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wr)?e(r):(r.close(),await jp(),e(await Ss()))})})}async function mo(t,e,n){const r=Br(t,!0).put({[yc]:e,value:n});return new Kn(r).toPromise()}async function Vp(t,e){const n=Br(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function _o(t,e){const n=Br(t,!0).delete(e);return new Kn(n).toPromise()}const Wp=800,zp=3;class bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ss(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _c()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance($p()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fp(),!this.activeServiceWorker)return;this.sender=new Lp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ss();return await mo(e,Ir,"1"),await _o(e,Ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Br(s,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bc.type="LOCAL";const Kp=bc;/**
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
 */function qp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qp().appendChild(r)})}function Jp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new $n(3e4,6e4);/**
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
 */function Ic(t,e){return e?Ye(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ni extends Qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yp(t){return dc(t.auth,new ni(t),t.bypassAuthState)}function Xp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Rp(n,new ni(t),t.bypassAuthState)}async function Qp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Tp(n,new ni(t),t.bypassAuthState)}/**
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
 */class wc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yp;case"linkViaPopup":case"linkViaRedirect":return Qp;case"reauthViaPopup":case"reauthViaRedirect":return Xp;default:Te(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zp=new $n(2e3,1e4);async function eg(t,e,n){const r=Wn(t);Kh(t,e,ei);const s=Ic(r,n);return new Et(r,"signInViaPopup",e,s).executeNotNull()}class Et extends wc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zp.get())};e()}}Et.currentPopupAction=null;/**
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
 */const tg="pendingRedirect",cr=new Map;class ng extends wc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const r=await rg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rg(t,e){const n=og(e),r=ig(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sg(t,e){cr.set(t._key(),e)}function ig(t){return Ye(t._redirectPersistence)}function og(t){return ar(tg,t.config.apiKey,t.name)}async function ag(t,e,n=!1){const r=Wn(t),s=Ic(r,e),o=await new ng(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cg=10*60*1e3;class lg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ug(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ec(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cg&&this.cachedEventUids.clear(),this.cachedEventUids.has(vo(e))}saveEventToCache(e){this.cachedEventUids.add(vo(e)),this.lastProcessedEventTime=Date.now()}}function vo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ec({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ug(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ec(t);default:return!1}}/**
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
 */async function fg(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
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
 */const dg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hg=/^https?/;async function pg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fg(t);for(const n of e)try{if(gg(n))return}catch{}Te(t,"unauthorized-domain")}function gg(t){const e=Rs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hg.test(n))return!1;if(dg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mg=new $n(3e4,6e4);function yo(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _g(t){return new Promise((e,n)=>{var r,s,i;function o(){yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yo(),n(He(t,"network-request-failed"))},timeout:mg.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=Jp("iframefcb");return je()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},Gp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw lr=null,e})}let lr=null;function vg(t){return lr=lr||_g(t),lr}/**
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
 */const yg=new $n(5e3,15e3),bg="__/auth/iframe",Ig="emulator/auth/iframe",wg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Js(e,Ig):`https://${t.config.authDomain}/${bg}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},s=Eg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function Rg(t){const e=await vg(t),n=je().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Tg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},yg.get());function c(){je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Sg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cg=500,Og=600,Ag="_blank",Pg="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kg(t,e,n,r=Cg,s=Og){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(a=sc(l)?Ag:n),rc(l)&&(e=e||Pg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,S])=>`${p}${_}=${S},`,"");if(fp(l)&&a!=="_self")return Ng(e||"",a),new bo(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new bo(h)}function Ng(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mg="__/auth/handler",Dg="emulator/auth/handler";function Io(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:s};if(e instanceof ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof zn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${xg(t)}?${Bn(a).slice(1)}`}function xg({config:t}){return t.emulator?Js(t,Dg):`https://${t.authDomain}/${Mg}`}/**
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
 */const es="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mc,this._completeRedirectFn=ag,this._overrideRedirectResult=sg}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Io(e,n,r,Rs(),s);return kg(e,o,ti())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Up(Io(e,n,r,Rs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rg(e),r=new lg(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(es,{type:es},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[es];o!==void 0&&n(!!o),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lc()||Xs()||Ur()}}const Ug=Lg;var wo="@firebase/auth",Eo="0.20.5";/**
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
 */class Fg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $g(t){kn(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uc(t)},f=new gp(a,c,l);return Gh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kn(new tn("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(r=>new Fg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(wo,Eo,Bg(t)),Gt(wo,Eo,"esm2017")}/**
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
 */function Hg(t=Mh()){const e=Ka(t,"auth");return e.isInitialized()?e.getImmediate():qh(t,{popupRedirectResolver:Ug,persistence:[Kp,Dp,mc]})}$g("Browser");const jg={apiKey:"AIzaSyDJ99OyKVf439DSekIqo5MCvvUzfTs2CeQ",authDomain:"bugtracker-d927d.firebaseapp.com",projectId:"bugtracker-d927d",storageBucket:"bugtracker-d927d.appspot.com",messagingSenderId:"564128035217",appId:"1:564128035217:web:995f1585e455fe5da9aa30"},Vg=Nh(jg),qn=Hg(Vg),Wg=new Oe;function lm(){eg(qn,Wg).then(t=>{Oe.credentialFromResult(t).accessToken;const n=t.user;console.log(n)}).catch(t=>{t.code,t.message,t.customData.email,Oe.credentialFromError(t)})}function um(t,e){Cp(qn,t,e).then(n=>{const r=n.user;console.log(r)}).catch(n=>{n.code,n.message})}function fm(t,e){Op(qn,t,e).then(n=>{const r=n.user;console.log(r)}).catch(n=>{n.code,n.message})}function Tc(t){Ap(qn,e=>{e&&(e.uid,t(e))})}function dm(){Pp(qn).then(()=>{console.log("Logged Out")}).catch(t=>{})}const zg={data(){return{bug:"",description:"",uid:"",submitted:!1}},methods:{submitBug(){const t=new Headers;t.append("Content-Type","application/json");const e=JSON.stringify({bug:this.bug,description:this.description,uid:this.uid});console.log(e),fetch("/api/report",{method:"POST",headers:t,body:e,redirect:"follow"}).then(r=>r.text()).then(r=>console.log(r)).catch(r=>console.log("error",r)),this.submitted=!0}},created(){Tc(t=>{this.uid=t.uid})}},Kg={class:"bg-black/50 backdrop-blur fixed top-0 w-full h-full flex flex-col items-center justify-center"},qg=ie("h3",{class:"text-white"},"Report a bug",-1),Gg=ie("input",{type:"submit",value:"Submit",class:"m-2 p-2 bg-primary text-white"},null,-1),Jg={key:1,class:"flex flex-col items-center justify-center text-white w-full"},Yg=ie("h3",null,"Thank you!",-1),Xg=ie("p",null,"Thank you for submitting a bug report. It has been received. You may close this popup",-1);function Qg(t,e,n,r,s,i){return $e(),St("div",Kg,[s.submitted?yn("",!0):($e(),St("form",{key:0,onSubmit:e[3]||(e[3]=Ku((...o)=>i.submitBug&&i.submitBug(...o),["prevent"])),action:"",class:"w-full flex flex-col items-center justify-center"},[qg,_i(ie("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.bug=o),type:"text",name:"bug",placeholder:"Bug",class:"m-2 w-1/4"},null,512),[[xi,s.bug]]),_i(ie("textarea",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.description=o),type:"text",name:"description",placeholder:"Description",class:"m-2 w-1/4 h-1/4"},null,512),[[xi,s.description]]),ie("span",null,[Gg,ie("button",{onClick:e[2]||(e[2]=o=>t.$emit("closePopup")),class:"m-2 p-2 bg-primary text-white"},"Cancel")])],32)),s.submitted?($e(),St("div",Jg,[Yg,Xg,ie("button",{onClick:e[4]||(e[4]=o=>t.$emit("closePopup")),class:"m-2 p-2 bg-primary text-white"},"Close")])):yn("",!0)])}const Zg=Sa(zg,[["render",Qg]]),em={class:"flex flex-col items-center"},tm=on("Login"),nm={key:1,class:"dark:text-white flex flex-col justify-center"},rm={class:"text-6xl"},sm={data(){return{user:"",popupVisible:!1}},created(){Tc(t=>{this.user=t})},methods:{reset(){fetch("/api/reset")}}},im=Object.assign(sm,{__name:"HomeView",setup(t){return(e,n)=>{const r=la("router-link");return $e(),St("main",em,[e.user?yn("",!0):($e(),ps(r,{key:0,class:"m-2 p-2 bg-primary text-white",to:"/account"},{default:Wt(()=>[tm]),_:1})),e.user?($e(),St("div",nm,[ie("p",rm,"Hello, "+Nc(e.user.displayName.split(" ")[0]),1),ie("button",{onClick:n[0]||(n[0]=s=>e.popupVisible=!e.popupVisible),class:"m-2 p-2 bg-primary text-white"},"Report Bug")])):yn("",!0),e.popupVisible?($e(),ps(Zg,{key:2,onClosePopup:n[1]||(n[1]=s=>e.popupVisible=!e.popupVisible)})):yn("",!0),ie("button",{onClick:n[2]||(n[2]=(...s)=>e.reset&&e.reset(...s)),class:"fixed bottom-0"},"RESET DB")])}}}),om=hd({history:Af(),routes:[{path:"/",name:"home",component:im},{path:"/about",name:"about",component:()=>qr(()=>import("./AboutView.68453ffe.js"),["assets/AboutView.68453ffe.js","assets/AboutView.4d995ba2.css"])},{path:"/account",name:"account",component:()=>qr(()=>import("./AccountView.a315fc96.js"),[])},{path:"/bugs",name:"bugs",component:()=>qr(()=>import("./BugsView.5eabe18c.js"),[])}]});const Rc=Ju(md);localStorage.getItem("darkmode")=="true"&&(console.log("darkmode"),document.querySelector("html").classList.add("dark"));Rc.use(om);Rc.mount("#app");export{qe as F,Sa as _,ie as a,yn as b,St as c,cm as d,on as e,um as f,Tc as g,lm as h,fe as i,am as j,ps as k,dm as l,$e as o,la as r,fm as s,Nc as t,Rt as u,xi as v,_i as w};
