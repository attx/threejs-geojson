var ch=Object.defineProperty;var uh=(n,e,t)=>e in n?ch(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xe=(n,e,t)=>(uh(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ko(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const hh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fh=Ko(hh);function Lc(n){return!!n||n===""}function Qo(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?mh(i):Qo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(dt(n))return n;if(tt(n))return n}}const dh=/;(?![^(]*\))/g,ph=/:(.+)/;function mh(n){const e={};return n.split(dh).forEach(t=>{if(t){const i=t.split(ph);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ea(n){let e="";if(dt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=ea(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gh=n=>dt(n)?n:n==null?"":Ie(n)||tt(n)&&(n.toString===Fc||!Ue(n.toString))?JSON.stringify(n,Pc,2):String(n),Pc=(n,e)=>e&&e.__v_isRef?Pc(n,e.value):Ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Dc(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Ie(e)&&!Ic(e)?String(e):e,Ze={},zi=[],$t=()=>{},_h=()=>!1,xh=/^on[^a-z]/,ms=n=>xh.test(n),ta=n=>n.startsWith("onUpdate:"),yt=Object.assign,na=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vh=Object.prototype.hasOwnProperty,Ve=(n,e)=>vh.call(n,e),Ie=Array.isArray,Ui=n=>gs(n)==="[object Map]",Dc=n=>gs(n)==="[object Set]",Ue=n=>typeof n=="function",dt=n=>typeof n=="string",ia=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Rc=n=>tt(n)&&Ue(n.then)&&Ue(n.catch),Fc=Object.prototype.toString,gs=n=>Fc.call(n),yh=n=>gs(n).slice(8,-1),Ic=n=>gs(n)==="[object Object]",ra=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,is=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_s=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Mh=/-(\w)/g,Hi=_s(n=>n.replace(Mh,(e,t)=>t?t.toUpperCase():"")),Sh=/\B([A-Z])/g,Ji=_s(n=>n.replace(Sh,"-$1").toLowerCase()),Nc=_s(n=>n.charAt(0).toUpperCase()+n.slice(1)),Rs=_s(n=>n?`on${Nc(n)}`:""),pr=(n,e)=>!Object.is(n,e),Fs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ls=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},bh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ra;const wh=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let en;class Eh{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}run(e){if(this.active){const t=en;try{return en=this,e()}finally{en=t}}}on(){en=this}off(){en=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Th(n,e=en){e&&e.active&&e.effects.push(n)}const sa=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Oc=n=>(n.w&Un)>0,zc=n=>(n.n&Un)>0,Ah=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Un},Ch=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Oc(r)&&!zc(r)?r.delete(n):e[t++]=r,r.w&=~Un,r.n&=~Un}e.length=t}},Ao=new WeakMap;let ar=0,Un=1;const Co=30;let Xt;const si=Symbol(""),Lo=Symbol("");class oa{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Th(this,i)}run(){if(!this.active)return this.fn();let e=Xt,t=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,In=!0,Un=1<<++ar,ar<=Co?Ah(this):Fa(this),this.fn()}finally{ar<=Co&&Ch(this),Un=1<<--ar,Xt=this.parent,In=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Fa(this),this.onStop&&this.onStop(),this.active=!1)}}function Fa(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let In=!0;const Uc=[];function Ki(){Uc.push(In),In=!1}function Qi(){const n=Uc.pop();In=n===void 0?!0:n}function Pt(n,e,t){if(In&&Xt){let i=Ao.get(n);i||Ao.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=sa()),Bc(r)}}function Bc(n,e){let t=!1;ar<=Co?zc(n)||(n.n|=Un,t=!Oc(n)):t=!n.has(Xt),t&&(n.add(Xt),Xt.deps.push(n))}function Mn(n,e,t,i,r,s){const o=Ao.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(n)?ra(t)&&a.push(o.get("length")):(a.push(o.get(si)),Ui(n)&&a.push(o.get(Lo)));break;case"delete":Ie(n)||(a.push(o.get(si)),Ui(n)&&a.push(o.get(Lo)));break;case"set":Ui(n)&&a.push(o.get(si));break}if(a.length===1)a[0]&&Po(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Po(sa(l))}}function Po(n,e){const t=Ie(n)?n:[...n];for(const i of t)i.computed&&Ia(i);for(const i of t)i.computed||Ia(i)}function Ia(n,e){(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Lh=Ko("__proto__,__v_isRef,__isVue"),Gc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ia)),Ph=aa(),Dh=aa(!1,!0),Rh=aa(!0),Na=Fh();function Fh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=He(this);for(let s=0,o=this.length;s<o;s++)Pt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(He)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ki();const i=He(this)[e].apply(this,t);return Qi(),i}}),n}function aa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Yh:Xc:e?Wc:Hc).get(i))return i;const o=Ie(i);if(!n&&o&&Ve(Na,r))return Reflect.get(Na,r,s);const a=Reflect.get(i,r,s);return(ia(r)?Gc.has(r):Lh(r))||(n||Pt(i,"get",r),e)?a:xt(a)?o&&ra(r)?a:a.value:tt(a)?n?qc(a):ua(a):a}}const Ih=Vc(),Nh=Vc(!0);function Vc(n=!1){return function(t,i,r,s){let o=t[i];if(Wi(o)&&xt(o)&&!xt(r))return!1;if(!n&&(!cs(r)&&!Wi(r)&&(o=He(o),r=He(r)),!Ie(t)&&xt(o)&&!xt(r)))return o.value=r,!0;const a=Ie(t)&&ra(i)?Number(i)<t.length:Ve(t,i),l=Reflect.set(t,i,r,s);return t===He(s)&&(a?pr(r,o)&&Mn(t,"set",i,r):Mn(t,"add",i,r)),l}}function Oh(n,e){const t=Ve(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Mn(n,"delete",e,void 0),i}function zh(n,e){const t=Reflect.has(n,e);return(!ia(e)||!Gc.has(e))&&Pt(n,"has",e),t}function Uh(n){return Pt(n,"iterate",Ie(n)?"length":si),Reflect.ownKeys(n)}const kc={get:Ph,set:Ih,deleteProperty:Oh,has:zh,ownKeys:Uh},Bh={get:Rh,set(n,e){return!0},deleteProperty(n,e){return!0}},Gh=yt({},kc,{get:Dh,set:Nh}),la=n=>n,xs=n=>Reflect.getPrototypeOf(n);function Cr(n,e,t=!1,i=!1){n=n.__v_raw;const r=He(n),s=He(e);t||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:o}=xs(r),a=i?la:t?fa:mr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Lr(n,e=!1){const t=this.__v_raw,i=He(t),r=He(n);return e||(n!==r&&Pt(i,"has",n),Pt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Pr(n,e=!1){return n=n.__v_raw,!e&&Pt(He(n),"iterate",si),Reflect.get(n,"size",n)}function Oa(n){n=He(n);const e=He(this);return xs(e).has.call(e,n)||(e.add(n),Mn(e,"add",n,n)),this}function za(n,e){e=He(e);const t=He(this),{has:i,get:r}=xs(t);let s=i.call(t,n);s||(n=He(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?pr(e,o)&&Mn(t,"set",n,e):Mn(t,"add",n,e),this}function Ua(n){const e=He(this),{has:t,get:i}=xs(e);let r=t.call(e,n);r||(n=He(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Mn(e,"delete",n,void 0),s}function Ba(){const n=He(this),e=n.size!==0,t=n.clear();return e&&Mn(n,"clear",void 0,void 0),t}function Dr(n,e){return function(i,r){const s=this,o=s.__v_raw,a=He(o),l=e?la:n?fa:mr;return!n&&Pt(a,"iterate",si),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Rr(n,e,t){return function(...i){const r=this.__v_raw,s=He(r),o=Ui(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?la:e?fa:mr;return!e&&Pt(s,"iterate",l?Lo:si),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wn(n){return function(...e){return n==="delete"?!1:this}}function Vh(){const n={get(s){return Cr(this,s)},get size(){return Pr(this)},has:Lr,add:Oa,set:za,delete:Ua,clear:Ba,forEach:Dr(!1,!1)},e={get(s){return Cr(this,s,!1,!0)},get size(){return Pr(this)},has:Lr,add:Oa,set:za,delete:Ua,clear:Ba,forEach:Dr(!1,!0)},t={get(s){return Cr(this,s,!0)},get size(){return Pr(this,!0)},has(s){return Lr.call(this,s,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Dr(!0,!1)},i={get(s){return Cr(this,s,!0,!0)},get size(){return Pr(this,!0)},has(s){return Lr.call(this,s,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:Dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Rr(s,!1,!1),t[s]=Rr(s,!0,!1),e[s]=Rr(s,!1,!0),i[s]=Rr(s,!0,!0)}),[n,t,e,i]}const[kh,Hh,Wh,Xh]=Vh();function ca(n,e){const t=e?n?Xh:Wh:n?Hh:kh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ve(t,r)&&r in i?t:i,r,s)}const qh={get:ca(!1,!1)},jh={get:ca(!1,!0)},Zh={get:ca(!0,!1)},Hc=new WeakMap,Wc=new WeakMap,Xc=new WeakMap,Yh=new WeakMap;function $h(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jh(n){return n.__v_skip||!Object.isExtensible(n)?0:$h(yh(n))}function ua(n){return Wi(n)?n:ha(n,!1,kc,qh,Hc)}function Kh(n){return ha(n,!1,Gh,jh,Wc)}function qc(n){return ha(n,!0,Bh,Zh,Xc)}function ha(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Jh(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Bi(n){return Wi(n)?Bi(n.__v_raw):!!(n&&n.__v_isReactive)}function Wi(n){return!!(n&&n.__v_isReadonly)}function cs(n){return!!(n&&n.__v_isShallow)}function jc(n){return Bi(n)||Wi(n)}function He(n){const e=n&&n.__v_raw;return e?He(e):n}function Zc(n){return ls(n,"__v_skip",!0),n}const mr=n=>tt(n)?ua(n):n,fa=n=>tt(n)?qc(n):n;function Yc(n){In&&Xt&&(n=He(n),Bc(n.dep||(n.dep=sa())))}function $c(n,e){n=He(n),n.dep&&Po(n.dep)}function xt(n){return!!(n&&n.__v_isRef===!0)}function Qh(n){return ef(n,!1)}function ef(n,e){return xt(n)?n:new tf(n,e)}class tf{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:He(e),this._value=t?e:mr(e)}get value(){return Yc(this),this._value}set value(e){const t=this.__v_isShallow||cs(e)||Wi(e);e=t?e:He(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:mr(e),$c(this))}}function Do(n){return xt(n)?n.value:n}const nf={get:(n,e,t)=>Do(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return xt(r)&&!xt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Jc(n){return Bi(n)?n:new Proxy(n,nf)}var Kc;class rf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Kc]=!1,this._dirty=!0,this.effect=new oa(e,()=>{this._dirty||(this._dirty=!0,$c(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=He(this);return Yc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Kc="__v_isReadonly";function sf(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=$t):(i=n.get,r=n.set),new rf(i,r,s||!r,t)}function Nn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){vs(s,e,t)}return r}function Ut(n,e,t,i){if(Ue(n)){const s=Nn(n,e,t,i);return s&&Rc(s)&&s.catch(o=>{vs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ut(n[s],e,t,i));return r}function vs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Nn(l,null,10,[n,o,a]);return}}of(n,t,r,i)}function of(n,e,t,i=!0){console.error(n)}let gr=!1,Ro=!1;const _t=[];let rn=0;const Gi=[];let pn=null,Kn=0;const Qc=Promise.resolve();let da=null;function af(n){const e=da||Qc;return n?e.then(this?n.bind(this):n):e}function lf(n){let e=rn+1,t=_t.length;for(;e<t;){const i=e+t>>>1;_r(_t[i])<n?e=i+1:t=i}return e}function pa(n){(!_t.length||!_t.includes(n,gr&&n.allowRecurse?rn+1:rn))&&(n.id==null?_t.push(n):_t.splice(lf(n.id),0,n),eu())}function eu(){!gr&&!Ro&&(Ro=!0,da=Qc.then(nu))}function cf(n){const e=_t.indexOf(n);e>rn&&_t.splice(e,1)}function uf(n){Ie(n)?Gi.push(...n):(!pn||!pn.includes(n,n.allowRecurse?Kn+1:Kn))&&Gi.push(n),eu()}function Ga(n,e=gr?rn+1:0){for(;e<_t.length;e++){const t=_t[e];t&&t.pre&&(_t.splice(e,1),e--,t())}}function tu(n){if(Gi.length){const e=[...new Set(Gi)];if(Gi.length=0,pn){pn.push(...e);return}for(pn=e,pn.sort((t,i)=>_r(t)-_r(i)),Kn=0;Kn<pn.length;Kn++)pn[Kn]();pn=null,Kn=0}}const _r=n=>n.id==null?1/0:n.id,hf=(n,e)=>{const t=_r(n)-_r(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function nu(n){Ro=!1,gr=!0,_t.sort(hf);const e=$t;try{for(rn=0;rn<_t.length;rn++){const t=_t[rn];t&&t.active!==!1&&Nn(t,null,14)}}finally{rn=0,_t.length=0,tu(),gr=!1,da=null,(_t.length||Gi.length)&&nu()}}function ff(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Ze;f&&(r=t.map(m=>m.trim())),h&&(r=t.map(bh))}let a,l=i[a=Rs(e)]||i[a=Rs(Hi(e))];!l&&s&&(l=i[a=Rs(Ji(e))]),l&&Ut(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ut(c,n,6,r)}}function iu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ue(n)){const l=c=>{const u=iu(c,e,!0);u&&(a=!0,yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>o[l]=null):yt(o,s),tt(n)&&i.set(n,o),o)}function ys(n,e){return!n||!ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(n,e[0].toLowerCase()+e.slice(1))||Ve(n,Ji(e))||Ve(n,e))}let sn=null,ru=null;function us(n){const e=sn;return sn=n,ru=n&&n.type.__scopeId||null,e}function df(n,e=sn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&$a(-1);const s=us(e);let o;try{o=n(...r)}finally{us(s),i._d&&$a(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Is(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:p}=n;let d,x;const A=us(n);try{if(t.shapeFlag&4){const b=r||i;d=tn(u.call(b,b,h,s,m,f,g)),x=l}else{const b=e;d=tn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),x=e.props?l:pf(l)}}catch(b){ur.length=0,vs(b,n,1),d=On(xn)}let w=d;if(x&&p!==!1){const b=Object.keys(x),{shapeFlag:T}=w;b.length&&T&7&&(o&&b.some(ta)&&(x=mf(x,o)),w=Bn(w,x))}return t.dirs&&(w=Bn(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),d=w,us(A),d}const pf=n=>{let e;for(const t in n)(t==="class"||t==="style"||ms(t))&&((e||(e={}))[t]=n[t]);return e},mf=(n,e)=>{const t={};for(const i in n)(!ta(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gf(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Va(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ys(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Va(i,o,c):!0:!!o;return!1}function Va(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ys(t,s))return!0}return!1}function _f({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const xf=n=>n.__isSuspense;function vf(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):uf(n)}function yf(n,e){if(ft){let t=ft.provides;const i=ft.parent&&ft.parent.provides;i===t&&(t=ft.provides=Object.create(i)),t[n]=e}}function Ns(n,e,t=!1){const i=ft||sn;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i.proxy):e}}const ka={};function Os(n,e,t){return su(n,e,t)}function su(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Ze){const a=ft;let l,c=!1,u=!1;if(xt(n)?(l=()=>n.value,c=cs(n)):Bi(n)?(l=()=>n,i=!0):Ie(n)?(u=!0,c=n.some(x=>Bi(x)||cs(x)),l=()=>n.map(x=>{if(xt(x))return x.value;if(Bi(x))return Ii(x);if(Ue(x))return Nn(x,a,2)})):Ue(n)?e?l=()=>Nn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ut(n,a,3,[f])}:l=$t,e&&i){const x=l;l=()=>Ii(x())}let h,f=x=>{h=d.onStop=()=>{Nn(x,a,4)}};if(vr)return f=$t,e?t&&Ut(e,a,3,[l(),u?[]:void 0,f]):l(),$t;let m=u?[]:ka;const g=()=>{if(!!d.active)if(e){const x=d.run();(i||c||(u?x.some((A,w)=>pr(A,m[w])):pr(x,m)))&&(h&&h(),Ut(e,a,3,[x,m===ka?void 0:m,f]),m=x)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>wt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),p=()=>pa(g));const d=new oa(l,p);return e?t?g():m=d.run():r==="post"?wt(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&na(a.scope.effects,d)}}function Mf(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?ou(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const o=ft;Xi(this);const a=su(r,s.bind(i),t);return o?Xi(o):oi(),a}function ou(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ii(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),xt(n))Ii(n.value,e);else if(Ie(n))for(let t=0;t<n.length;t++)Ii(n[t],e);else if(Dc(n)||Ui(n))n.forEach(t=>{Ii(t,e)});else if(Ic(n))for(const t in n)Ii(n[t],e);return n}function Sf(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ma(()=>{n.isMounted=!0}),hu(()=>{n.isUnmounting=!0}),n}const Ft=[Function,Array],bf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},setup(n,{slots:e}){const t=cd(),i=Sf();let r;return()=>{const s=e.default&&lu(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const p of s)if(p.type!==xn){o=p;break}}const a=He(n),{mode:l}=a;if(i.isLeaving)return zs(o);const c=Ha(o);if(!c)return zs(o);const u=Fo(c,a,i,t);Io(c,u);const h=t.subTree,f=h&&Ha(h);let m=!1;const{getTransitionKey:g}=c.type;if(g){const p=g();r===void 0?r=p:p!==r&&(r=p,m=!0)}if(f&&f.type!==xn&&(!Qn(c,f)||m)){const p=Fo(f,a,i,t);if(Io(f,p),l==="out-in")return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.update()},zs(o);l==="in-out"&&c.type!==xn&&(p.delayLeave=(d,x,A)=>{const w=au(i,f);w[String(f.key)]=f,d._leaveCb=()=>{x(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return o}}},wf=bf;function au(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Fo(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:d,onAfterAppear:x,onAppearCancelled:A}=e,w=String(n.key),b=au(t,n),T=(v,C)=>{v&&Ut(v,i,9,C)},P=(v,C)=>{const I=C[1];T(v,C),Ie(v)?v.every(K=>K.length<=1)&&I():v.length<=1&&I()},G={mode:s,persisted:o,beforeEnter(v){let C=a;if(!t.isMounted)if(r)C=p||a;else return;v._leaveCb&&v._leaveCb(!0);const I=b[w];I&&Qn(n,I)&&I.el._leaveCb&&I.el._leaveCb(),T(C,[v])},enter(v){let C=l,I=c,K=u;if(!t.isMounted)if(r)C=d||l,I=x||c,K=A||u;else return;let pe=!1;const W=v._enterCb=O=>{pe||(pe=!0,O?T(K,[v]):T(I,[v]),G.delayedLeave&&G.delayedLeave(),v._enterCb=void 0)};C?P(C,[v,W]):W()},leave(v,C){const I=String(n.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return C();T(h,[v]);let K=!1;const pe=v._leaveCb=W=>{K||(K=!0,C(),W?T(g,[v]):T(m,[v]),v._leaveCb=void 0,b[I]===n&&delete b[I])};b[I]=n,f?P(f,[v,pe]):pe()},clone(v){return Fo(v,e,t,i)}};return G}function zs(n){if(Ms(n))return n=Bn(n),n.children=null,n}function Ha(n){return Ms(n)?n.children?n.children[0]:void 0:n}function Io(n,e){n.shapeFlag&6&&n.component?Io(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function lu(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Wt?(o.patchFlag&128&&r++,i=i.concat(lu(o.children,e,a))):(e||o.type!==xn)&&i.push(a!=null?Bn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function cu(n){return Ue(n)?{setup:n,name:n.name}:n}const rs=n=>!!n.type.__asyncLoader,Ms=n=>n.type.__isKeepAlive;function Ef(n,e){uu(n,"a",e)}function Tf(n,e){uu(n,"da",e)}function uu(n,e,t=ft){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ss(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ms(r.parent.vnode)&&Af(i,e,t,r),r=r.parent}}function Af(n,e,t,i){const r=Ss(e,n,i,!0);fu(()=>{na(i[e],r)},t)}function Ss(n,e,t=ft,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ki(),Xi(t);const a=Ut(e,t,n,o);return oi(),Qi(),a});return i?r.unshift(s):r.push(s),s}}const Sn=n=>(e,t=ft)=>(!vr||n==="sp")&&Ss(n,(...i)=>e(...i),t),Cf=Sn("bm"),ma=Sn("m"),Lf=Sn("bu"),Pf=Sn("u"),hu=Sn("bum"),fu=Sn("um"),Df=Sn("sp"),Rf=Sn("rtg"),Ff=Sn("rtc");function If(n,e=ft){Ss("ec",n,e)}function Wn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ki(),Ut(l,t,8,[n.el,a,n,e]),Qi())}}const Nf=Symbol(),No=n=>n?wu(n)?ya(n)||n.proxy:No(n.parent):null,hs=yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>No(n.parent),$root:n=>No(n.root),$emit:n=>n.emit,$options:n=>ga(n),$forceUpdate:n=>n.f||(n.f=()=>pa(n.update)),$nextTick:n=>n.n||(n.n=af.bind(n.proxy)),$watch:n=>Mf.bind(n)}),Of={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Ze&&Ve(i,e))return o[e]=1,i[e];if(r!==Ze&&Ve(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ve(c,e))return o[e]=3,s[e];if(t!==Ze&&Ve(t,e))return o[e]=4,t[e];Oo&&(o[e]=0)}}const u=hs[e];let h,f;if(u)return e==="$attrs"&&Pt(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ze&&Ve(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Ve(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Ze&&Ve(r,e)?(r[e]=t,!0):i!==Ze&&Ve(i,e)?(i[e]=t,!0):Ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Ze&&Ve(n,o)||e!==Ze&&Ve(e,o)||(a=s[0])&&Ve(a,o)||Ve(i,o)||Ve(hs,o)||Ve(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Oo=!0;function zf(n){const e=ga(n),t=n.proxy,i=n.ctx;Oo=!1,e.beforeCreate&&Wa(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:x,beforeUnmount:A,destroyed:w,unmounted:b,render:T,renderTracked:P,renderTriggered:G,errorCaptured:v,serverPrefetch:C,expose:I,inheritAttrs:K,components:pe,directives:W,filters:O}=e;if(c&&Uf(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const ie in o){const k=o[ie];Ue(k)&&(i[ie]=k.bind(t))}if(r){const ie=r.call(t,t);tt(ie)&&(n.data=ua(ie))}if(Oo=!0,s)for(const ie in s){const k=s[ie],z=Ue(k)?k.bind(t,t):Ue(k.get)?k.get.bind(t,t):$t,H=!Ue(k)&&Ue(k.set)?k.set.bind(t):$t,le=md({get:z,set:H});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>le.value,set:ae=>le.value=ae})}if(a)for(const ie in a)du(a[ie],i,t,ie);if(l){const ie=Ue(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(k=>{yf(k,ie[k])})}u&&Wa(u,n,"c");function se(ie,k){Ie(k)?k.forEach(z=>ie(z.bind(t))):k&&ie(k.bind(t))}if(se(Cf,h),se(ma,f),se(Lf,m),se(Pf,g),se(Ef,p),se(Tf,d),se(If,v),se(Ff,P),se(Rf,G),se(hu,A),se(fu,b),se(Df,C),Ie(I))if(I.length){const ie=n.exposed||(n.exposed={});I.forEach(k=>{Object.defineProperty(ie,k,{get:()=>t[k],set:z=>t[k]=z})})}else n.exposed||(n.exposed={});T&&n.render===$t&&(n.render=T),K!=null&&(n.inheritAttrs=K),pe&&(n.components=pe),W&&(n.directives=W)}function Uf(n,e,t=$t,i=!1){Ie(n)&&(n=zo(n));for(const r in n){const s=n[r];let o;tt(s)?"default"in s?o=Ns(s.from||r,s.default,!0):o=Ns(s.from||r):o=Ns(s),xt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Wa(n,e,t){Ut(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function du(n,e,t,i){const r=i.includes(".")?ou(t,i):()=>t[i];if(dt(n)){const s=e[n];Ue(s)&&Os(r,s)}else if(Ue(n))Os(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>du(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&Os(r,s,n)}}function ga(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>fs(l,c,o,!0)),fs(l,e,o)),tt(e)&&s.set(e,l),l}function fs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&fs(n,s,t,!0),r&&r.forEach(o=>fs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Bf[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Bf={data:Xa,props:Yn,emits:Yn,methods:Yn,computed:Yn,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Yn,directives:Yn,watch:Vf,provide:Xa,inject:Gf};function Xa(n,e){return e?n?function(){return yt(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function Gf(n,e){return Yn(zo(n),zo(e))}function zo(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function St(n,e){return n?[...new Set([].concat(n,e))]:e}function Yn(n,e){return n?yt(yt(Object.create(null),n),e):e}function Vf(n,e){if(!n)return e;if(!e)return n;const t=yt(Object.create(null),n);for(const i in e)t[i]=St(n[i],e[i]);return t}function kf(n,e,t,i=!1){const r={},s={};ls(s,bs,1),n.propsDefaults=Object.create(null),pu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Kh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Hf(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=He(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ys(n.emitsOptions,f))continue;const m=e[f];if(l)if(Ve(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const g=Hi(f);r[g]=Uo(l,a,g,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{pu(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Ve(e,h)&&((u=Ji(h))===h||!Ve(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Uo(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Ve(e,h)&&!0)&&(delete s[h],c=!0)}c&&Mn(n,"set","$attrs")}function pu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(is(l))continue;const c=e[l];let u;r&&Ve(r,u=Hi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ys(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=He(t),c=a||Ze;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Uo(r,l,h,c[h],n,!Ve(c,h))}}return o}function Uo(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ve(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ue(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Xi(r),i=c[t]=l.call(null,e),oi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}function mu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ue(n)){const u=h=>{l=!0;const[f,m]=mu(h,e,!0);yt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,zi),zi;if(Ie(s))for(let u=0;u<s.length;u++){const h=Hi(s[u]);qa(h)&&(o[h]=Ze)}else if(s)for(const u in s){const h=Hi(u);if(qa(h)){const f=s[u],m=o[h]=Ie(f)||Ue(f)?{type:f}:f;if(m){const g=Ya(Boolean,m.type),p=Ya(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ve(m,"default"))&&a.push(h)}}}const c=[o,a];return tt(n)&&i.set(n,c),c}function qa(n){return n[0]!=="$"}function ja(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Za(n,e){return ja(n)===ja(e)}function Ya(n,e){return Ie(e)?e.findIndex(t=>Za(t,n)):Ue(e)&&Za(e,n)?0:-1}const gu=n=>n[0]==="_"||n==="$stable",_a=n=>Ie(n)?n.map(tn):[tn(n)],Wf=(n,e,t)=>{if(e._n)return e;const i=df((...r)=>_a(e(...r)),t);return i._c=!1,i},_u=(n,e,t)=>{const i=n._ctx;for(const r in n){if(gu(r))continue;const s=n[r];if(Ue(s))e[r]=Wf(r,s,i);else if(s!=null){const o=_a(s);e[r]=()=>o}}},xu=(n,e)=>{const t=_a(e);n.slots.default=()=>t},Xf=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=He(e),ls(e,"_",t)):_u(e,n.slots={})}else n.slots={},e&&xu(n,e);ls(n.slots,bs,1)},qf=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(yt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,_u(e,r)),o=e}else e&&(xu(n,e),o={default:1});if(s)for(const a in r)!gu(a)&&!(a in o)&&delete r[a]};function vu(){return{app:null,config:{isNativeTag:_h,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function Zf(n,e){return function(i,r=null){Ue(i)||(i=Object.assign({},i)),r!=null&&!tt(r)&&(r=null);const s=vu(),o=new Set;let a=!1;const l=s.app={_uid:jf++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:gd,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=On(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ya(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Bo(n,e,t,i,r=!1){if(Ie(n)){n.forEach((f,m)=>Bo(f,e&&(Ie(e)?e[m]:e),t,i,r));return}if(rs(i)&&!r)return;const s=i.shapeFlag&4?ya(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(dt(c)?(u[c]=null,Ve(h,c)&&(h[c]=null)):xt(c)&&(c.value=null)),Ue(l))Nn(l,a,12,[o,u]);else{const f=dt(l),m=xt(l);if(f||m){const g=()=>{if(n.f){const p=f?Ve(h,l)?h[l]:u[l]:l.value;r?Ie(p)&&na(p,s):Ie(p)?p.includes(s)||p.push(s):f?(u[l]=[s],Ve(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,Ve(h,l)&&(h[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,wt(g,t)):g()}}}const wt=vf;function Yf(n){return $f(n)}function $f(n,e){const t=wh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=$t,insertStaticContent:g}=n,p=(y,S,L,U=null,N=null,Z=null,te=!1,X=null,oe=!!S.dynamicChildren)=>{if(y===S)return;y&&!Qn(y,S)&&(U=De(y),ae(y,N,Z,!0),y=null),S.patchFlag===-2&&(oe=!1,S.dynamicChildren=null);const{type:Y,ref:M,shapeFlag:_}=S;switch(Y){case xa:d(y,S,L,U);break;case xn:x(y,S,L,U);break;case Us:y==null&&A(S,L,U,te);break;case Wt:pe(y,S,L,U,N,Z,te,X,oe);break;default:_&1?T(y,S,L,U,N,Z,te,X,oe):_&6?W(y,S,L,U,N,Z,te,X,oe):(_&64||_&128)&&Y.process(y,S,L,U,N,Z,te,X,oe,Ae)}M!=null&&N&&Bo(M,y&&y.ref,Z,S||y,!S)},d=(y,S,L,U)=>{if(y==null)i(S.el=a(S.children),L,U);else{const N=S.el=y.el;S.children!==y.children&&c(N,S.children)}},x=(y,S,L,U)=>{y==null?i(S.el=l(S.children||""),L,U):S.el=y.el},A=(y,S,L,U)=>{[y.el,y.anchor]=g(y.children,S,L,U,y.el,y.anchor)},w=({el:y,anchor:S},L,U)=>{let N;for(;y&&y!==S;)N=f(y),i(y,L,U),y=N;i(S,L,U)},b=({el:y,anchor:S})=>{let L;for(;y&&y!==S;)L=f(y),r(y),y=L;r(S)},T=(y,S,L,U,N,Z,te,X,oe)=>{te=te||S.type==="svg",y==null?P(S,L,U,N,Z,te,X,oe):C(y,S,N,Z,te,X,oe)},P=(y,S,L,U,N,Z,te,X)=>{let oe,Y;const{type:M,props:_,shapeFlag:D,transition:q,dirs:Q}=y;if(oe=y.el=o(y.type,Z,_&&_.is,_),D&8?u(oe,y.children):D&16&&v(y.children,oe,null,U,N,Z&&M!=="foreignObject",te,X),Q&&Wn(y,null,U,"created"),_){for(const _e in _)_e!=="value"&&!is(_e)&&s(oe,_e,null,_[_e],Z,y.children,U,N,$);"value"in _&&s(oe,"value",null,_.value),(Y=_.onVnodeBeforeMount)&&Qt(Y,U,y)}G(oe,y,y.scopeId,te,U),Q&&Wn(y,null,U,"beforeMount");const ce=(!N||N&&!N.pendingBranch)&&q&&!q.persisted;ce&&q.beforeEnter(oe),i(oe,S,L),((Y=_&&_.onVnodeMounted)||ce||Q)&&wt(()=>{Y&&Qt(Y,U,y),ce&&q.enter(oe),Q&&Wn(y,null,U,"mounted")},N)},G=(y,S,L,U,N)=>{if(L&&m(y,L),U)for(let Z=0;Z<U.length;Z++)m(y,U[Z]);if(N){let Z=N.subTree;if(S===Z){const te=N.vnode;G(y,te,te.scopeId,te.slotScopeIds,N.parent)}}},v=(y,S,L,U,N,Z,te,X,oe=0)=>{for(let Y=oe;Y<y.length;Y++){const M=y[Y]=X?Rn(y[Y]):tn(y[Y]);p(null,M,S,L,U,N,Z,te,X)}},C=(y,S,L,U,N,Z,te)=>{const X=S.el=y.el;let{patchFlag:oe,dynamicChildren:Y,dirs:M}=S;oe|=y.patchFlag&16;const _=y.props||Ze,D=S.props||Ze;let q;L&&Xn(L,!1),(q=D.onVnodeBeforeUpdate)&&Qt(q,L,S,y),M&&Wn(S,y,L,"beforeUpdate"),L&&Xn(L,!0);const Q=N&&S.type!=="foreignObject";if(Y?I(y.dynamicChildren,Y,X,L,U,Q,Z):te||k(y,S,X,null,L,U,Q,Z,!1),oe>0){if(oe&16)K(X,S,_,D,L,U,N);else if(oe&2&&_.class!==D.class&&s(X,"class",null,D.class,N),oe&4&&s(X,"style",_.style,D.style,N),oe&8){const ce=S.dynamicProps;for(let _e=0;_e<ce.length;_e++){const he=ce[_e],j=_[he],be=D[he];(be!==j||he==="value")&&s(X,he,j,be,N,y.children,L,U,$)}}oe&1&&y.children!==S.children&&u(X,S.children)}else!te&&Y==null&&K(X,S,_,D,L,U,N);((q=D.onVnodeUpdated)||M)&&wt(()=>{q&&Qt(q,L,S,y),M&&Wn(S,y,L,"updated")},U)},I=(y,S,L,U,N,Z,te)=>{for(let X=0;X<S.length;X++){const oe=y[X],Y=S[X],M=oe.el&&(oe.type===Wt||!Qn(oe,Y)||oe.shapeFlag&70)?h(oe.el):L;p(oe,Y,M,null,U,N,Z,te,!0)}},K=(y,S,L,U,N,Z,te)=>{if(L!==U){if(L!==Ze)for(const X in L)!is(X)&&!(X in U)&&s(y,X,L[X],null,te,S.children,N,Z,$);for(const X in U){if(is(X))continue;const oe=U[X],Y=L[X];oe!==Y&&X!=="value"&&s(y,X,Y,oe,te,S.children,N,Z,$)}"value"in U&&s(y,"value",L.value,U.value)}},pe=(y,S,L,U,N,Z,te,X,oe)=>{const Y=S.el=y?y.el:a(""),M=S.anchor=y?y.anchor:a("");let{patchFlag:_,dynamicChildren:D,slotScopeIds:q}=S;q&&(X=X?X.concat(q):q),y==null?(i(Y,L,U),i(M,L,U),v(S.children,L,M,N,Z,te,X,oe)):_>0&&_&64&&D&&y.dynamicChildren?(I(y.dynamicChildren,D,L,N,Z,te,X),(S.key!=null||N&&S===N.subTree)&&yu(y,S,!0)):k(y,S,L,M,N,Z,te,X,oe)},W=(y,S,L,U,N,Z,te,X,oe)=>{S.slotScopeIds=X,y==null?S.shapeFlag&512?N.ctx.activate(S,L,U,te,oe):O(S,L,U,N,Z,te,oe):ne(y,S,oe)},O=(y,S,L,U,N,Z,te)=>{const X=y.component=ld(y,U,N);if(Ms(y)&&(X.ctx.renderer=Ae),ud(X),X.asyncDep){if(N&&N.registerDep(X,se),!y.el){const oe=X.subTree=On(xn);x(null,oe,S,L)}return}se(X,y,S,L,N,Z,te)},ne=(y,S,L)=>{const U=S.component=y.component;if(gf(y,S,L))if(U.asyncDep&&!U.asyncResolved){ie(U,S,L);return}else U.next=S,cf(U.update),U.update();else S.el=y.el,U.vnode=S},se=(y,S,L,U,N,Z,te)=>{const X=()=>{if(y.isMounted){let{next:M,bu:_,u:D,parent:q,vnode:Q}=y,ce=M,_e;Xn(y,!1),M?(M.el=Q.el,ie(y,M,te)):M=Q,_&&Fs(_),(_e=M.props&&M.props.onVnodeBeforeUpdate)&&Qt(_e,q,M,Q),Xn(y,!0);const he=Is(y),j=y.subTree;y.subTree=he,p(j,he,h(j.el),De(j),y,N,Z),M.el=he.el,ce===null&&_f(y,he.el),D&&wt(D,N),(_e=M.props&&M.props.onVnodeUpdated)&&wt(()=>Qt(_e,q,M,Q),N)}else{let M;const{el:_,props:D}=S,{bm:q,m:Q,parent:ce}=y,_e=rs(S);if(Xn(y,!1),q&&Fs(q),!_e&&(M=D&&D.onVnodeBeforeMount)&&Qt(M,ce,S),Xn(y,!0),_&&Ne){const he=()=>{y.subTree=Is(y),Ne(_,y.subTree,y,N,null)};_e?S.type.__asyncLoader().then(()=>!y.isUnmounted&&he()):he()}else{const he=y.subTree=Is(y);p(null,he,L,U,y,N,Z),S.el=he.el}if(Q&&wt(Q,N),!_e&&(M=D&&D.onVnodeMounted)){const he=S;wt(()=>Qt(M,ce,he),N)}(S.shapeFlag&256||ce&&rs(ce.vnode)&&ce.vnode.shapeFlag&256)&&y.a&&wt(y.a,N),y.isMounted=!0,S=L=U=null}},oe=y.effect=new oa(X,()=>pa(Y),y.scope),Y=y.update=()=>oe.run();Y.id=y.uid,Xn(y,!0),Y()},ie=(y,S,L)=>{S.component=y;const U=y.vnode.props;y.vnode=S,y.next=null,Hf(y,S.props,U,L),qf(y,S.children,L),Ki(),Ga(),Qi()},k=(y,S,L,U,N,Z,te,X,oe=!1)=>{const Y=y&&y.children,M=y?y.shapeFlag:0,_=S.children,{patchFlag:D,shapeFlag:q}=S;if(D>0){if(D&128){H(Y,_,L,U,N,Z,te,X,oe);return}else if(D&256){z(Y,_,L,U,N,Z,te,X,oe);return}}q&8?(M&16&&$(Y,N,Z),_!==Y&&u(L,_)):M&16?q&16?H(Y,_,L,U,N,Z,te,X,oe):$(Y,N,Z,!0):(M&8&&u(L,""),q&16&&v(_,L,U,N,Z,te,X,oe))},z=(y,S,L,U,N,Z,te,X,oe)=>{y=y||zi,S=S||zi;const Y=y.length,M=S.length,_=Math.min(Y,M);let D;for(D=0;D<_;D++){const q=S[D]=oe?Rn(S[D]):tn(S[D]);p(y[D],q,L,null,N,Z,te,X,oe)}Y>M?$(y,N,Z,!0,!1,_):v(S,L,U,N,Z,te,X,oe,_)},H=(y,S,L,U,N,Z,te,X,oe)=>{let Y=0;const M=S.length;let _=y.length-1,D=M-1;for(;Y<=_&&Y<=D;){const q=y[Y],Q=S[Y]=oe?Rn(S[Y]):tn(S[Y]);if(Qn(q,Q))p(q,Q,L,null,N,Z,te,X,oe);else break;Y++}for(;Y<=_&&Y<=D;){const q=y[_],Q=S[D]=oe?Rn(S[D]):tn(S[D]);if(Qn(q,Q))p(q,Q,L,null,N,Z,te,X,oe);else break;_--,D--}if(Y>_){if(Y<=D){const q=D+1,Q=q<M?S[q].el:U;for(;Y<=D;)p(null,S[Y]=oe?Rn(S[Y]):tn(S[Y]),L,Q,N,Z,te,X,oe),Y++}}else if(Y>D)for(;Y<=_;)ae(y[Y],N,Z,!0),Y++;else{const q=Y,Q=Y,ce=new Map;for(Y=Q;Y<=D;Y++){const ve=S[Y]=oe?Rn(S[Y]):tn(S[Y]);ve.key!=null&&ce.set(ve.key,Y)}let _e,he=0;const j=D-Q+1;let be=!1,Le=0;const Me=new Array(j);for(Y=0;Y<j;Y++)Me[Y]=0;for(Y=q;Y<=_;Y++){const ve=y[Y];if(he>=j){ae(ve,N,Z,!0);continue}let Re;if(ve.key!=null)Re=ce.get(ve.key);else for(_e=Q;_e<=D;_e++)if(Me[_e-Q]===0&&Qn(ve,S[_e])){Re=_e;break}Re===void 0?ae(ve,N,Z,!0):(Me[Re-Q]=Y+1,Re>=Le?Le=Re:be=!0,p(ve,S[Re],L,null,N,Z,te,X,oe),he++)}const Te=be?Jf(Me):zi;for(_e=Te.length-1,Y=j-1;Y>=0;Y--){const ve=Q+Y,Re=S[ve],je=ve+1<M?S[ve+1].el:U;Me[Y]===0?p(null,Re,L,je,N,Z,te,X,oe):be&&(_e<0||Y!==Te[_e]?le(Re,L,je,2):_e--)}}},le=(y,S,L,U,N=null)=>{const{el:Z,type:te,transition:X,children:oe,shapeFlag:Y}=y;if(Y&6){le(y.component.subTree,S,L,U);return}if(Y&128){y.suspense.move(S,L,U);return}if(Y&64){te.move(y,S,L,Ae);return}if(te===Wt){i(Z,S,L);for(let _=0;_<oe.length;_++)le(oe[_],S,L,U);i(y.anchor,S,L);return}if(te===Us){w(y,S,L);return}if(U!==2&&Y&1&&X)if(U===0)X.beforeEnter(Z),i(Z,S,L),wt(()=>X.enter(Z),N);else{const{leave:_,delayLeave:D,afterLeave:q}=X,Q=()=>i(Z,S,L),ce=()=>{_(Z,()=>{Q(),q&&q()})};D?D(Z,Q,ce):ce()}else i(Z,S,L)},ae=(y,S,L,U=!1,N=!1)=>{const{type:Z,props:te,ref:X,children:oe,dynamicChildren:Y,shapeFlag:M,patchFlag:_,dirs:D}=y;if(X!=null&&Bo(X,null,L,y,!0),M&256){S.ctx.deactivate(y);return}const q=M&1&&D,Q=!rs(y);let ce;if(Q&&(ce=te&&te.onVnodeBeforeUnmount)&&Qt(ce,S,y),M&6)Pe(y.component,L,U);else{if(M&128){y.suspense.unmount(L,U);return}q&&Wn(y,null,S,"beforeUnmount"),M&64?y.type.remove(y,S,L,N,Ae,U):Y&&(Z!==Wt||_>0&&_&64)?$(Y,S,L,!1,!0):(Z===Wt&&_&384||!N&&M&16)&&$(oe,S,L),U&&ue(y)}(Q&&(ce=te&&te.onVnodeUnmounted)||q)&&wt(()=>{ce&&Qt(ce,S,y),q&&Wn(y,null,S,"unmounted")},L)},ue=y=>{const{type:S,el:L,anchor:U,transition:N}=y;if(S===Wt){Se(L,U);return}if(S===Us){b(y);return}const Z=()=>{r(L),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:te,delayLeave:X}=N,oe=()=>te(L,Z);X?X(y.el,Z,oe):oe()}else Z()},Se=(y,S)=>{let L;for(;y!==S;)L=f(y),r(y),y=L;r(S)},Pe=(y,S,L)=>{const{bum:U,scope:N,update:Z,subTree:te,um:X}=y;U&&Fs(U),N.stop(),Z&&(Z.active=!1,ae(te,y,S,L)),X&&wt(X,S),wt(()=>{y.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},$=(y,S,L,U=!1,N=!1,Z=0)=>{for(let te=Z;te<y.length;te++)ae(y[te],S,L,U,N)},De=y=>y.shapeFlag&6?De(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),Ee=(y,S,L)=>{y==null?S._vnode&&ae(S._vnode,null,null,!0):p(S._vnode||null,y,S,null,null,null,L),Ga(),tu(),S._vnode=y},Ae={p,um:ae,m:le,r:ue,mt:O,mc:v,pc:k,pbc:I,n:De,o:n};let ge,Ne;return e&&([ge,Ne]=e(Ae)),{render:Ee,hydrate:ge,createApp:Zf(Ee,ge)}}function Xn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function yu(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Rn(r[s]),a.el=o.el),t||yu(o,a))}}function Jf(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Kf=n=>n.__isTeleport,Wt=Symbol(void 0),xa=Symbol(void 0),xn=Symbol(void 0),Us=Symbol(void 0),ur=[];let Zt=null;function Mu(n=!1){ur.push(Zt=n?null:[])}function Qf(){ur.pop(),Zt=ur[ur.length-1]||null}let xr=1;function $a(n){xr+=n}function ed(n){return n.dynamicChildren=xr>0?Zt||zi:null,Qf(),xr>0&&Zt&&Zt.push(n),n}function Su(n,e,t,i,r,s){return ed(_n(n,e,t,i,r,s,!0))}function td(n){return n?n.__v_isVNode===!0:!1}function Qn(n,e){return n.type===e.type&&n.key===e.key}const bs="__vInternal",bu=({key:n})=>n!=null?n:null,ss=({ref:n,ref_key:e,ref_for:t})=>n!=null?dt(n)||xt(n)||Ue(n)?{i:sn,r:n,k:e,f:!!t}:n:null;function _n(n,e=null,t=null,i=0,r=null,s=n===Wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&bu(e),ref:e&&ss(e),scopeId:ru,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(va(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),xr>0&&!o&&Zt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Zt.push(l),l}const On=nd;function nd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Nf)&&(n=xn),td(n)){const a=Bn(n,e,!0);return t&&va(a,t),xr>0&&!s&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(n)]=a:Zt.push(a)),a.patchFlag|=-2,a}if(pd(n)&&(n=n.__vccOpts),e){e=id(e);let{class:a,style:l}=e;a&&!dt(a)&&(e.class=ea(a)),tt(l)&&(jc(l)&&!Ie(l)&&(l=yt({},l)),e.style=Qo(l))}const o=dt(n)?1:xf(n)?128:Kf(n)?64:tt(n)?4:Ue(n)?2:0;return _n(n,e,t,i,r,o,s,!0)}function id(n){return n?jc(n)||bs in n?yt({},n):n:null}function Bn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?sd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&bu(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(ss(e)):[r,ss(e)]:ss(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Wt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bn(n.ssContent),ssFallback:n.ssFallback&&Bn(n.ssFallback),el:n.el,anchor:n.anchor}}function rd(n=" ",e=0){return On(xa,null,n,e)}function tn(n){return n==null||typeof n=="boolean"?On(xn):Ie(n)?On(Wt,null,n.slice()):typeof n=="object"?Rn(n):On(xa,null,String(n))}function Rn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bn(n)}function va(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),va(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(bs in e)?e._ctx=sn:r===3&&sn&&(sn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),i&64?(t=16,e=[rd(e)]):t=8);n.children=e,n.shapeFlag|=t}function sd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ea([e.class,i.class]));else if(r==="style")e.style=Qo([e.style,i.style]);else if(ms(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Qt(n,e,t,i=null){Ut(n,e,7,[t,i])}const od=vu();let ad=0;function ld(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||od,s={uid:ad++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mu(i,r),emitsOptions:iu(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ff.bind(null,s),n.ce&&n.ce(s),s}let ft=null;const cd=()=>ft||sn,Xi=n=>{ft=n,n.scope.on()},oi=()=>{ft&&ft.scope.off(),ft=null};function wu(n){return n.vnode.shapeFlag&4}let vr=!1;function ud(n,e=!1){vr=e;const{props:t,children:i}=n.vnode,r=wu(n);kf(n,t,r,e),Xf(n,i);const s=r?hd(n,e):void 0;return vr=!1,s}function hd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Zc(new Proxy(n.ctx,Of));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?dd(n):null;Xi(n),Ki();const s=Nn(i,n,0,[n.props,r]);if(Qi(),oi(),Rc(s)){if(s.then(oi,oi),e)return s.then(o=>{Ja(n,o,e)}).catch(o=>{vs(o,n,0)});n.asyncDep=s}else Ja(n,s,e)}else Eu(n,e)}function Ja(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Jc(e)),Eu(n,t)}let Ka;function Eu(n,e,t){const i=n.type;if(!n.render){if(!e&&Ka&&!i.render){const r=i.template||ga(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=yt(yt({isCustomElement:s,delimiters:a},o),l);i.render=Ka(r,c)}}n.render=i.render||$t}Xi(n),Ki(),zf(n),Qi(),oi()}function fd(n){return new Proxy(n.attrs,{get(e,t){return Pt(n,"get","$attrs"),e[t]}})}function dd(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=fd(n))},slots:n.slots,emit:n.emit,expose:e}}function ya(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Jc(Zc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hs)return hs[t](n)}}))}function pd(n){return Ue(n)&&"__vccOpts"in n}const md=(n,e)=>sf(n,e,vr),gd="3.2.41",_d="http://www.w3.org/2000/svg",ei=typeof document<"u"?document:null,Qa=ei&&ei.createElement("template"),xd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ei.createElementNS(_d,n):ei.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ei.createTextNode(n),createComment:n=>ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Qa.innerHTML=i?`<svg>${n}</svg>`:n;const a=Qa.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function vd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function yd(n,e,t){const i=n.style,r=dt(t);if(t&&!r){for(const s in t)Go(i,s,t[s]);if(e&&!dt(e))for(const s in e)t[s]==null&&Go(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const el=/\s*!important$/;function Go(n,e,t){if(Ie(t))t.forEach(i=>Go(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Md(n,e);el.test(t)?n.setProperty(Ji(i),t.replace(el,""),"important"):n[i]=t}}const tl=["Webkit","Moz","ms"],Bs={};function Md(n,e){const t=Bs[e];if(t)return t;let i=Hi(e);if(i!=="filter"&&i in n)return Bs[e]=i;i=Nc(i);for(let r=0;r<tl.length;r++){const s=tl[r]+i;if(s in n)return Bs[e]=s}return e}const nl="http://www.w3.org/1999/xlink";function Sd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(nl,e.slice(6,e.length)):n.setAttributeNS(nl,e,t);else{const s=fh(e);t==null||s&&!Lc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function bd(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Lc(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function wd(n,e,t,i){n.addEventListener(e,t,i)}function Ed(n,e,t,i){n.removeEventListener(e,t,i)}function Td(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ad(e);if(i){const c=s[e]=Pd(i,r);wd(n,a,c,l)}else o&&(Ed(n,a,o,l),s[e]=void 0)}}const il=/(?:Once|Passive|Capture)$/;function Ad(n){let e;if(il.test(n)){e={};let i;for(;i=n.match(il);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let Gs=0;const Cd=Promise.resolve(),Ld=()=>Gs||(Cd.then(()=>Gs=0),Gs=Date.now());function Pd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ut(Dd(i,t.value),e,5,[i])};return t.value=n,t.attached=Ld(),t}function Dd(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rl=/^on[a-z]/,Rd=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?vd(n,i,r):e==="style"?yd(n,t,i):ms(e)?ta(e)||Td(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fd(n,e,i,r))?bd(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Sd(n,e,i,r))};function Fd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&rl.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||rl.test(e)&&dt(t)?!1:e in n}const Id={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wf.props;const Nd=yt({patchProp:Rd},xd);let sl;function Od(){return sl||(sl=Yf(Nd))}const zd=(...n)=>{const e=Od().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ud(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ud(n){return dt(n)?document.querySelector(n):n}const Bd="FeatureCollection",Gd=[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[7.082862197332219,5.786465236748871],[7.323216539883269,5.432274464984417],[7.249507874833331,5.382350432434947],[7.358869100692104,5.2217839492357],[7.420960639191868,5.263612192765848],[7.441390758305683,5.233252983739661],[8.03146066927367,5.63466919171381],[8.250183120998326,5.313536225315316],[8.507762858101064,5.488270339406235],[8.526991205502298,5.459935077670828],[8.952818982394326,5.748684887752354],[8.7112628681307,6.1035503086137375],[10.000000000004263,6.9799265102627714],[10.000000000004263,7.7518061407937395],[9.995956829075133,7.749019436797639],[9.958301315409631,7.8043406620745905],[9.84172945926828,7.724057420498934],[9.725157603126931,7.6437741788753435],[9.764014888512126,7.587103655404533],[8.573459711731445,6.767405012224788],[8.537807150915494,6.819352992065042],[8.41001875879246,6.73097396142213],[8.282230366669427,6.643269579828207],[8.319084699197955,6.5899723017940985],[7.546345487889749,6.057674170549959],[7.525514778200332,6.08735873047922],[7.082862197332219,5.786465236748871]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[.44547702772859665,-7.420465330350457],[.6349563677757928,-7.292956652517171],[.9678471322095294,-7.786125136618873],[1.605186730543636,-7.3563736669093185],[1.2342398618759098,-6.805860010239881],[1.6360322045092737,-6.53532572553572],[3.4294761905278044,-5.326354557982713],[3.152668106016714,-4.91549326274745],[.1306128389835166,-6.952933511644386],[.44547702772859665,-7.420465330350457]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.289800961793926,-7.034566051413897],[-8.484087388684317,-6.835544570169141],[-8.625095269652817,-6.973172984312532],[-8.639516530203746,-6.958330704371871],[-8.726444684092034,-7.043336489578083],[-8.710421061260043,-7.059528067712599],[-8.82739350796988,-7.173543763751143],[-8.796548034004239,-7.205252270971185],[-8.921131701565145,-7.32668910698006],[-8.786933860303622,-7.464317521171387],[-8.689590351570624,-7.369191999607134],[-8.661549011605741,-7.397527261342538],[-8.289800961793926,-7.034566051413897]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[4.240672096638484,-6.88816719910632],[4.680119952944468,-7.101356311242746],[4.597598295330885,-7.3233158615433585],[4.746617987711826,-7.467016117511161],[5.558214484405223,-6.917177109938652],[5.090725288134362,-6.229709688222751],[4.971349297999367,-6.052951626888987],[4.461798091788296,-6.438850905825548],[4.240672096638484,-6.88816719910632]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[1.8546075979893217,-10],[2.880266517787449,-9.312856025133673],[2.907106086039752,-9.353334970469964],[3.0012448702106216,-9.289917956125752],[3.1286326717651676,-9.204912170871603],[3.9120895346816287,-10],[5.39309282149053,-10],[5.478096370216798,-9.909920468915876],[4.756632751988047,-9.218405152666346],[4.443771516099638,-9.5294183827068],[3.4406927265094858,-8.446606594793225],[3.977484091548467,-8.017529774180598],[3.3834082748671452,-7.1087774512130775],[3.089775386379973,-7.2990284943415835],[3.0505175104334086,-7.245731216307476],[2.4504328351892006,-7.6390516352143685],[2.0021719863338063,-7.937921181653934],[2.0278097828664183,-7.977725477893298],[1.8215056388431368,-8.114679242987698],[2.305419048521598,-8.83048192648694],[.8208303926852594,-9.825589332806592],[.5936955389725611,-9.486240841030735],[-.17358268363473428,-10],[1.8546075979893217,-10]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[9.756804258229547,-9.446436544743435],[10.000000000004263,-9.647086804400313],[10.000000000004263,-9.1516209203024],[9.756804258229547,-9.446436544743435]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[8.7112628681307,6.1035503086137375],[8.952818982394326,5.748684887752354],[9.30373632252384,5.235951580079433],[10.000000000004263,5.712010802765466],[10.000000000004263,6.9799265102627714],[8.7112628681307,6.1035503086137375]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[6.326947790000094,5.39719271237561],[5.111956588392266,4.53499117656879],[6.393846415343056,2.9495658173403356],[7.511093517642287,3.738230602396966],[7.140947830111536,4.257035751894298],[6.697093477530846,4.878387562926214],[6.326947790000094,5.39719271237561]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[1.2346404524443972,.8352155722565087],[1.3892684128197352,.6328208455750524],[1.8435381202451318,.9876862663884989],[1.7814465817524816,1.0693188061580088],[1.8771877282044152,1.13948231142356],[1.4173097527846164,1.750039737000506],[.865295946057735,1.3047713382533637],[.9009485068665697,1.2717135328874036],[1.2346404524443972,.8352155722565087]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-3.2311432321903935,-2.23038988832604],[-3.460281038759759,-2.436157860492135],[-3.5083519072699687,-2.4044493533200297],[-3.5387967906600064,-2.504972067611768],[-3.741495619545554,-2.692524514352563],[-4.013897207774821,-2.9448432736314256],[-4.071181659417162,-2.9131347664593212],[-4.111240716507818,-3.027825111594792],[-4.321550766237317,-3.2261719437905567],[-4.373627540460863,-3.1715253675625954],[-4.558299793657752,-3.352331323429988],[-4.922436622625615,-3.6930291133997004],[-4.960492726859603,-3.763867267762179],[-4.970106900560223,-3.823236387572761],[-4.943667922883521,-3.871811121976311],[-4.898401188366953,-3.903519629196354],[-4.844722051862344,-3.894749191032167],[-4.797852955064711,-3.8670885783457543],[-4.4373214412345785,-4.244892068215057],[-4.473374592619015,-4.2968400481032445],[-4.480985813470082,-4.352161273380197],[-4.463359828342793,-4.400736007783747],[-4.412084235270454,-4.437841707683337],[-4.3495921062022,-4.430420567713007],[-4.285898205428484,-4.397362762347045],[-3.7370891232637327,-3.9251084000104175],[-3.8752928702314744,-3.7591447241316223],[-3.3385015051996128,-3.2605790473024365],[-3.304451306671843,-3.280818519970582],[-3.2499709890231436,-3.2835171163582917],[-3.1938883090933787,-3.257880450962663],[-3.159036929428636,-3.2086310674621856],[-3.1570339765719693,-3.1492619476036667],[-3.16945228426623,-3.114854844091787],[-2.56175638817807,-2.569063731052906],[-2.521697331087415,-2.5798581164599383],[-2.4560004774570316,-2.5737862746834628],[-2.4191461449356213,-2.5508482056276076],[-2.387499489833007,-2.508345313048469],[-2.3842947652637623,-2.450325491383806],[-2.3939089389643806,-2.415243738727062],[-2.054208134823668,-2.110302350511021],[-2.1371303830057364,-2.0064063907825815],[-2.5361185916383437,-1.5982436919350285],[-2.5970083584184165,-1.5705830792486157],[-2.6530910383481814,-1.7055128970522322],[-2.8946471526189246,-1.9261231492069264],[-3.13540208573846,-2.146733401313683],[-3.201098939368844,-2.122446034111908],[-3.2311432321903935,-2.23038988832604]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[9.415528441995168,-10],[9.107046352201177,-9.73046381124234],[8.874303230494082,-9.563150837169689],[8.802998108869296,-9.650855218763612],[8.49414277868711,-9.389091372175699],[8.165658510535192,-9.761497669365454],[8.323891786048264,-9.872140119967296],[8.216846016590736,-10],[6.640123477237736,-10],[6.0833887228798,-9.448460492034217],[5.536803602827177,-10],[9.415528441995168,-10]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[1.0740036335061713,6.405793100490005],[.561247702725856,5.99897969978837],[1.177356000802055,5.222458598332626],[1.2090026559046692,5.247420614631331],[1.690111931582372,5.629271998986326],[1.0740036335061713,6.405793100490005]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.025216893104397897,6.7518880831872],[.561247702725856,5.99897969978837],[1.0740036335061713,6.405793100490005],[.4863372659633409,7.150605694821579],[-.025216893104397897,6.7518880831872]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.2908084416266874,8.13154547024956],[-.7931490175622944,7.7308039113723375],[-.7034167296732488,7.618137513527646],[-1.2446145909869344,7.186362096527311],[-1.0563370226594309,6.942813775364698],[-.609277945509497,6.6581118598168025],[.312080367611161,7.376613139607883],[.16746717151204393,7.558093744572204],[.24558233283668862,7.620161460770493],[-.039237563086839344,7.977725477971653],[-.11815390555557315,7.914983112676431],[-.2908084416266874,8.13154547024956]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.88127894316316,8.90739192265631],[-1.3439610525765993,8.546454660018451],[-1.3563793602779768,8.537009572805275],[-1.2738577026643938,8.431089665786054],[-1.6163626408058658,8.155158188402343],[-1.6227720899372393,8.04586503594642],[-1.2333980550052512,7.545950060971315],[-.8732671317436065,7.826604082033516],[-.7931490175622944,7.7308039113723375],[-.2908084416266874,8.13154547024956],[-.4338192754447405,8.32044721518421],[-.36131238210738026,8.377117738702957],[-.6577494045881931,8.756945175815105],[-.7234462582185763,8.705671845023844],[-.88127894316316,8.90739192265631]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-1.8165134661571667,9.999999999982482],[-1.7593734746239171,9.107088053045931],[-1.3439610525765993,8.546454660018451],[-.88127894316316,8.90739192265631],[-1.5066008243714926,9.730463811320693],[-1.4316903876089775,9.785785036597645],[-1.595609953798654,9.999999999982482],[-1.8165134661571667,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[2.51452732653852,4.619322312726011],[2.5193344133888296,4.690835116137482],[2.1816365621047833,5.107768253197156],[2.125954472743505,5.067289307812928],[1.690111931582372,5.629271998986326],[1.2090026559046692,5.247420614631331],[1.5150538520861012,4.832511424862439],[1.5547123186082707,4.8196930921646235],[1.5615223583152478,4.719170377872885],[1.3087497080628214,4.532967229325944],[1.3532152614352988,4.488440389456024],[1.1240774548730492,4.315730222655889],[1.4733924327143821,3.8542702457262923],[2.0141897034595786,4.276600575465517],[2.0646641153949457,4.209810315684603],[2.5081178774071446,4.56062784196442],[2.51452732653852,4.619322312726011]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[.6854307797111581,3.2511339601196774],[.882521340602306,3.394834216087478],[.9245833505496304,3.339512990810526],[1.3259751026145068,3.643105080880648],[1.2783048246727837,3.7065220952248605],[1.4733924327143821,3.8542702457262923],[1.1240774548730492,4.315730222655889],[1.0187221347204982,4.236121630129224],[.6489770377582342,4.724567570600369],[.06772011934677735,4.284021715435847],[.4450764371601075,3.786130687751525],[.33932052643195476,3.700450253448384],[.6854307797111581,3.2511339601196774]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.11054268471162132,2.6466483763671427],[.10577622358788119,2.8132867013428626],[.15985595066097602,2.7431231960773133],[.5404169930364375,3.0365955498373314],[.49114435281365054,3.1013618623753985],[.6854307797111581,3.2511339601196774],[.33932052643195476,3.700450253448384],[.24758528569335425,3.6296120990859055],[-.1369816623883242,4.127503126818166],[-.7743212607295451,3.635683940862382],[-.3953625806351493,3.1445394040514625],[-.4578547097034029,3.0959646696479126],[-.11054268471162132,2.6466483763671427]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.9585929233508299,1.9753725327378202],[-.33046690814885693,2.4685410168395236],[-.736665747064043,2.9859968681429994],[-.7879413401363813,2.9461925719036337],[-.908519101983952,3.0993379150846145],[-.9553881987815842,3.062232215185025],[-1.1084137968758583,3.2578804510410144],[-1.5887218914094703,2.880751610268641],[-1.303901995485944,2.517790400339999],[-1.3539758168528202,2.4786607531975626],[-.9585929233508299,1.9753725327378202]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-4.504620657153142,.2550173557057498],[-4.281491709146662,.015516929076767383],[-4.352796830771445,-.05127333075208362],[-4.328761396519898,-.07690999609977567],[-3.8889129496454284,-.5484897093874146],[-3.1682505125536515,.1227861342419061],[-3.6373420711055804,.6260743546537118],[-3.710249555011428,.5586094457758719],[-3.9281708255919945,.7920380305804446],[-4.504620657153142,.2550173557057498]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-5.342656131516128,-.36835840256901164],[-4.641622632408308,-1.0855103842621094],[-4.514234830853761,-1.0855103842621094],[-3.8889129496454284,-.5484897093874146],[-4.328761396519898,-.07690999609977567],[-4.37402813102935,-.11873823962992347],[-4.448938567791865,-.03912964715119571],[-4.501816523152384,.018215525416540146],[-4.63961967955164,-.01754087628919443],[-4.6888923197744266,.02968455996843744],[-4.686088185780786,.05734517260691341],[-4.718135431451886,.08905367977901868],[-4.756191535692991,.10726920520431626],[-4.785835237938937,.07960859251790353],[-4.7714139773880095,.06409166348031547],[-4.921234850913039,-.07623534705078683],[-4.994542925387373,-.01011973631886498],[-5.342656131516128,-.36835840256901164]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-5.7344337098803875,-.024287367162598272],[-5.342656131516128,-.36835840256901164],[-4.994542925387373,-.01011973631886498],[-4.829900200742928,.15179604507423683],[-4.996946468812528,.3150611246132584],[-4.80346122305911,.5039628695479124],[-4.974112806273557,.6658786508930774],[-5.155580334901201,.4891205896072499],[-5.212063605399452,.5208290967793534],[-5.258932702197085,.4776515550553526],[-5.7344337098803875,-.024287367162598272]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-2.7067701748527906,8.779208595774033],[-2.19802014978581,8.466171418442798],[-1.9580663978032469,8.83318052285713],[-2.0037337228883025,8.85476929371913],[-1.8715388344834452,9.06795840585556],[-1.7593734746239171,9.107088053045931],[-1.8165134661571667,9.999999999982482],[-2.035394174873554,9.999999999982482],[-2.2068331423423384,9.740583547630798],[-2.1355280207175555,9.691334164130318],[-2.7067701748527906,8.779208595774033]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-3.2776117384195382,7.994591705203096],[-2.731606790248428,7.658616458863939],[-2.701161906858392,7.639726284341712],[-2.651889266635604,7.720684175062232],[-2.2228567651814473,7.4568963812314735],[-1.8703370627708686,8.006735388803982],[-1.9067908047237925,8.122100383036383],[-2.273731767685298,8.344059933336993],[-2.19802014978581,8.466171418442798],[-2.7067701748527906,8.779208595774033],[-2.77086466620211,8.818338242916468],[-3.2776117384195382,7.994591705203096]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-2.9835782593638793,6.125813728524729],[-4.030722011750905,6.768754310418647],[-4.281491709146662,6.367338102444496],[-3.7691363689419504,6.051602328773484],[-3.727875540131601,6.118392588554396],[-3.343709182618408,5.8815907583131235],[-3.318471976654285,5.922069703649415],[-3.1690516936977424,5.829642778472872],[-2.9835782593638793,6.125813728524729]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-7.1216788569837295,1.446447646930384],[-6.561653238837293,1.088883629729228],[-6.5223953628836115,1.0585244207509774],[-6.385793978196934,1.2744121292271782],[-6.072532151740036,1.7736524551053545],[-6.687438678103659,2.1534798922654392],[-7.1216788569837295,1.446447646930384]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.106181759699318,.36431050811373566],[-5.7344337098803875,-.024287367162598272],[-5.258932702197085,.4776515550553526],[-5.704790007634441,.9208960065596514],[-5.883853992836929,.7346928580127088],[-5.8253677694820105,.656433563679899],[-6.106181759699318,.36431050811373566]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.32650657370504,.6631800545533029],[-6.13822900537042,.8756945175928017],[-6.058912072326083,.965422846429572],[-6.385793978196934,1.2744121292271782],[-6.5223953628836115,1.0585244207509774],[-6.561653238837293,1.088883629729228],[-6.650584345582249,.9472073210522076],[-6.32650657370504,.6631800545533029]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-4.011493664349667,9.789158282034347],[-3.882990768542718,9.999999999982482],[-4.35714548095171,9.999999999982482],[-4.011493664349667,9.789158282034347]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-4.498611798590256,9.092920422154261],[-4.455748607498842,9.068633054952485],[-4.011493664349667,9.789158282034347],[-4.35714548095171,9.999999999982482],[-5.286653173763268,9.999999999982482],[-5.409955347434691,9.795230123858758],[-4.959691545715513,9.52402119005767],[-5.024987808777409,9.415402686698673],[-4.498611798590256,9.092920422154261]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-4.992139381962217,8.276595024411218],[-4.897600007222862,8.430415016737062],[-4.833906106449147,8.391285369546686],[-4.723343108877799,8.571416676317153],[-4.795850002208043,8.616618165284002],[-4.743372637423127,8.702298599587142],[-4.670064562941677,8.657097110620292],[-4.549887391662594,8.853419995525275],[-4.619590151006312,8.896597537249278],[-4.498611798590256,9.092920422154261],[-5.024987808777409,9.415402686698673],[-5.071856905575042,9.444412597531006],[-5.151574429187866,9.313530674261017],[-5.421973064560465,9.47949435018775],[-5.839388439464451,8.797424121151394],[-5.365089203493726,8.508674311069871],[-4.992139381962217,8.276595024411218]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.926614034573333,.09445087250650275],[-10,.13716508204756117],[-10,-.05474031578429717],[-9.926614034573333,.09445087250650275]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.926614034573333,.09445087250650275],[-9.423071686925148,.9890355645823554],[-10,1.3196338966648788],[-10,.13716508204756117],[-9.926614034573333,.09445087250650275]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-10,-3.687605508173175],[-9.871733126363262,-3.807719458535173],[-9.35056479358779,-3.2484353637015486],[-9.5284270070777,-3.0824716878227543],[-9.469940783722782,-3.020403971624461],[-9.889759702051922,-2.6291074999604156],[-10,-2.747402900865593],[-10,-3.687605508173175]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.889759702051922,-2.6291074999604156],[-9.469940783722782,-3.020403971624461],[-9.37500081841494,-2.9192066082837336],[-9.12903820786949,-3.1330703694691495],[-8.628299994222063,-2.639227236318458],[-8.86985610848569,-2.436157860492135],[-8.785331498022556,-2.347104180752294],[-9.278458490826033,-1.9099315710724092],[-9.889759702051922,-2.6291074999604156]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.278458490826033,-1.9099315710724092],[-8.785331498022556,-2.347104180752294],[-8.70040629698382,-2.251304010091113],[-8.476476167840367,-2.4496508422868777],[-8.438019473030774,-2.4064733006108128],[-8.407173999072251,-2.4334592641523614],[-8.327055884883825,-2.3430562862186655],[-8.357901358849464,-2.3153956735801886],[-8.0258117755527,-1.9402907800506597],[-8.294608048644236,-1.702139651615532],[-8.208080485324434,-1.604315533711505],[-8.655940743611342,-1.2076218693679106],[-9.278458490826033,-1.9099315710724092]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.655940743611342,-1.2076218693679106],[-8.208080485324434,-1.604315533711505],[-7.800279284121067,-1.1954781857670245],[-7.7141523113768695,-1.2885797600404931],[-7.207805829727927,-.7819182941919873],[-7.357226112684469,-.6105574255377704],[-7.435341274016229,-.6786969835604744],[-7.942488936802145,-.21386376119417783],[-8.101923984027794,-.2334285847653952],[-8.500111011523426,-.9465326718769269],[-8.589442708836868,-.8871635520663439],[-8.762097244907984,-1.1273386277443187],[-8.655940743611342,-1.2076218693679106]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-7.207805829727927,-.7819182941919873],[-7.7141523113768695,-1.2885797600404931],[-7.549910177300912,-1.4531941377733695],[-7.645651323745728,-1.5489943084345512],[-7.361632608966291,-1.8323469258365286],[-7.259482013382985,-1.7304749133509354],[-7.03314834080726,-1.956482358185177],[-6.588492807082482,-1.5112139594380345],[-6.509175874045261,-1.4322800160082974],[-6.70065816694201,-1.240005025636945],[-6.785983958549234,-1.3256854599400842],[-7.090032201881114,-1.0220933698699604],[-7.014320583974509,-.9458580228279363],[-7.130892440115861,-.8291437304016807],[-7.146114881810879,-.8439860103423431],[-7.207805829727927,-.7819182941919873]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.588492807082482,-1.5112139594380345],[-7.03314834080726,-1.956482358185177],[-6.699856985805036,-2.2978547972518175],[-7.079616847036405,-2.666213199860006],[-6.652987889007403,-3.106084405927602],[-6.352144370244767,-2.8139613503614385],[-6.281239839188473,-2.8868234519667624],[-5.926316593352739,-2.542752416560349],[-5.977992777000681,-2.4894551385262425],[-5.850204384877648,-2.3619464606929554],[-5.84900261316507,-2.242533571974864],[-6.075736876309282,-2.0084303380733646],[-6.043689630631064,-1.9767218308533216],[-6.400615829323464,-1.6090380773420616],[-6.447885516689585,-1.654914215405837],[-6.588492807082482,-1.5112139594380345]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-10,-6.284966263332423],[-9.659820714345582,-5.945007772626918],[-10,-5.592448846168839],[-10,-6.284966263332423]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.3181169573482,-4.775840901313276],[-10,-5.429564176469372],[-10,-5.592448846168839],[-9.659820714345582,-5.945007772626918],[-8.894692723881327,-5.227181141884831],[-9.3181169573482,-4.775840901313276]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.3181169573482,-4.775840901313276],[-8.894692723881327,-5.227181141884831],[-8.734055904943101,-5.076059745946697],[-8.678774406157428,-5.134754216660352],[-8.30021631663152,-4.779214146749977],[-8.355898405992797,-4.719845026939396],[-8.182042098209104,-4.560627841886067],[-8.62389349794024,-4.0944453213738505],[-8.640317711347837,-4.074205848705706],[-8.740865944650078,-4.168656721173031],[-9.005255721459791,-3.8873280510618367],[-9.526824644796635,-4.3771232896789005],[-9.229987031747335,-4.6928590633499105],[-9.3181169573482,-4.775840901313276]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.62389349794024,-4.0944453213738505],[-8.182042098209104,-4.560627841886067],[-7.363234971247356,-3.7841067404303255],[-7.80468578040289,-3.323996061694584],[-7.900426926854822,-3.415073688725209],[-8.231314738439007,-3.0656054605913097],[-8.869455517917203,-3.6707656934407717],[-8.541772430902263,-4.016860676137969],[-8.62389349794024,-4.0944453213738505]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-7.80468578040289,-3.323996061694584],[-7.363234971247356,-3.7841067404303255],[-6.652987889007403,-3.106084405927602],[-7.079616847036405,-2.666213199860006],[-7.171352087775003,-2.5683890819559787],[-7.267093234226936,-2.6608160071804585],[-7.483412142526438,-2.4354832113952076],[-8.002577522438129,-2.9340488882243942],[-7.783053889576497,-3.162080280301481],[-7.875189720883581,-3.2504593109923317],[-7.80468578040289,-3.323996061694584]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[3.024861448876317,9.999999999982482],[3.1246267660518328,9.872814769094639],[3.2027419273835918,9.934207836196006],[3.4847576893134775,9.574619871752002],[4.027074123190097,9.999999999982482],[3.024861448876317,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[3.7651710889551833,9.21233331092029],[4.434157342399018,8.356878266034812],[5.009004811671984,8.806869208412508],[4.340419148803754,9.66164960420106],[3.7651710889551833,9.21233331092029]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[10.000000000004263,9.999999999982482],[9.135188740179952,9.999999999982482],[9.044954813708529,9.936906432535778],[9.406688099244121,9.419450581232304],[10.000000000004263,9.83442995891204],[10.000000000004263,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[5.386761720046687,7.3874075250628515],[4.961334533730263,7.084490084089655],[5.308245968146441,6.599417389055212],[5.768925124710327,6.923923600890408],[5.691210553947055,7.033891402395323],[5.865868042867721,7.158701483888837],[6.552880872000216,7.641750231632496],[7.20904822717419,8.095114419446897],[7.885645701454859,8.564670185443752],[8.512169354375768,8.99712025149308],[8.715268773836918,9.137447262024182],[8.802196927725209,9.00926393509397],[9.349804238177384,9.380995583186792],[9.406688099244121,9.419450581232304],[9.044954813708529,9.936906432535778],[8.520982346939412,9.574619871752002],[8.420033523068685,9.718994776768795],[6.241621998392873,8.213178010067004],[5.446449715114184,7.663339002494496],[5.276198722475339,7.540552868291769],[5.386761720046687,7.3874075250628515]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[4.27392111402928,6.5919962490848825],[4.144930950193668,6.7350218559557575],[4.168565793876729,6.7539120304300475],[3.7884053420697565,7.238310076367561],[3.3265244138004064,6.895588339155005],[3.59371832460376,6.552191952797582],[4.182185873283565,5.7945610258161295],[4.518681952862151,6.034736101542041],[5.19808356114358,6.5204834456254765],[5.308245968146441,6.599417389055212],[4.961334533730263,7.084490084089655],[4.27392111402928,6.5919962490848825]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[3.7884053420697565,7.238310076367561],[3.2135578727967875,8.012132581531468],[2.7705047013601902,7.649846020699755],[3.3265244138004064,6.895588339155005],[3.7884053420697565,7.238310076367561]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[3.2135578727967875,8.012132581531468],[3.316910240092671,8.097138366737681],[2.9111119917530885,8.59233079808223],[2.9663934905387617,8.637532287049076],[2.8606375798177233,8.777859297580179],[2.2982084182390157,8.329217653348397],[2.2505381403044105,8.284690813478477],[2.7705047013601902,7.649846020699755],[3.2135578727967875,8.012132581531468]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[1.0000190387377437,9.999999999982482],[1.3163609289138893,9.576643818994846],[1.8536591775218554,9.999999999982482],[1.0000190387377437,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[1.8536591775218554,9.999999999982482],[1.3163609289138893,9.576643818994846],[1.8559564279465093,8.891874993618721],[2.416783227237037,9.333770146929162],[1.8917963751701468,9.999999999982482],[1.8536591775218554,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[2.8606375798177233,8.777859297580179],[2.416783227237037,9.333770146929162],[1.8559564279465093,8.891874993618721],[2.2982084182390157,8.329217653348397],[2.8606375798177233,8.777859297580179]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[1.4173097527846164,1.750039737000506],[1.8771877282044152,1.13948231142356],[2.432806850069028,.39062182260629363],[2.508518467975634,.4405458551557633],[2.571411187612373,.3487935790761476],[3.1975342499576804,.8298183795290264],[2.957580497975119,1.148252749587746],[2.975206483102406,1.1732147658864474],[2.100717266779382,2.3093238318341314],[1.4173097527846164,1.750039737000506]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-1.7725929634622677,-.9809397754367417],[-1.4969866506708733,-1.309493881805567],[-1.1777159656439746,-1.6987664061788301],[-1.2654453006763529,-1.783772191385042],[-.942569300511721,-2.1791165575827165],[-.4013714391980354,-1.8033370150041979],[-.7326598413507082,-1.3567193180152621],[-.8932966602889341,-1.1428555568298453],[-.8584452806241902,-1.1057498569302542],[-1.1781165562195781,-.7367168052251376],[-1.2225821095920555,-.7785450487073469],[-1.3491687300025106,-.6152799691683271],[-1.7725929634622677,-.9809397754367417]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[.22635398543545016,.1531453432201566],[.2932526107784117,.20711727035119054],[.36255477954652626,.12548473058167886],[.4318569483146426,.12346078333883348],[1.2346404524443972,.8352155722565087],[.9009485068665697,1.2717135328874036],[-.04404464993714896,.5005896241112104],[.22635398543545016,.1531453432201566]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.4013714391980354,-1.8033370150041979],[1.116065643453494,-.7292956652068696],[.6569888491777895,-.20104542849636076],[.1566512260917321,-.6227011091386583],[.06291303249646774,-.6962378598409096],[.03567287367567573,-.6739744399299177],[-.628105702342248,-1.2015500275434992],[-.5960584566711464,-1.2413543238307998],[-.7326598413507082,-1.3567193180152621],[-.4013714391980354,-1.8033370150041979]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[.6569888491777895,-.20104542849636076],[.5985026258228707,-.14167630868577952],[.5111738813589781,-.20104542849636076],[.22635398543545016,.1531453432201566],[-.04404464993714896,.5005896241112104],[-.46466474940326385,.14167630871619608],[.1566512260917321,-.6227011091386583],[.6569888491777895,-.20104542849636076]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.9585929233508299,1.9753725327378202],[-1.3539758168528202,2.4786607531975626],[-1.3960378268001445,2.5204889966797737],[-1.4801618466947914,2.4516747896080773],[-2.1695782192453255,1.8849695548041225],[-1.709299653257041,1.3439009853958002],[-1.0186815089939287,1.916003412927239],[-.9585929233508299,1.9753725327378202]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-1.709299653257041,1.3439009853958002],[-2.1695782192453255,1.8849695548041225],[-2.9126737283075848,1.2528233583651769],[-2.451994571750813,.7117547889568527],[-1.709299653257041,1.3439009853958002]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-2.451994571750813,.7117547889568527],[-2.9126737283075848,1.2528233583651769],[-3.6373420711055804,.6260743546537118],[-3.1682505125536515,.1227861342419061],[-2.451994571750813,.7117547889568527]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[5.489924422524677,9.999999999982482],[5.456063888814802,9.955796607058005],[5.253365059929253,9.691334164130318],[5.712441854204959,9.10034156212459],[6.413085332878332,9.999999999982482],[5.489924422524677,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-2.8085201798676094,6.411190293217487],[-3.283220006413938,6.702638699686723],[-3.2075083885073328,6.826099482986379],[-3.230742641621907,6.838243166587269],[-3.779952314355146,7.1796156056539076],[-4.030722011750905,6.768754310418647],[-2.9835782593638793,6.125813728524729],[-2.8085201798676094,6.411190293217487]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-3.6044936442903888,3.581712013779283],[-3.323279063504594,3.3334411489861147],[-2.2152455443303793,4.591661700039598],[-2.4968607156917777,4.839932564832768],[-3.6044936442903888,3.581712013779283]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-3.4630851727534004,2.917182661071303],[-3.192686537380802,2.6857780235095774],[-2.5493380804838104,3.4373371087145532],[-2.8197367158564095,3.668741746228344],[-3.4630851727534004,2.917182661071303]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-5.4556226725197465,4.543761614732976],[-5.26133624562224,4.42030083143332],[-4.848327367000075,4.161235581233116],[-4.393256478437704,4.879736861072132],[-4.896798826085888,5.1907500911125855],[-4.993741744243282,5.256865701844507],[-5.172405138877284,4.974862382636385],[-5.077865764137929,4.914818613728876],[-5.124334270367074,4.841956512075614],[-5.2252830942378035,4.90604817556469],[-5.4556226725197465,4.543761614732976]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-3.2776117384195382,7.994591705203096],[-3.779952314355146,7.1796156056539076],[-3.230742641621907,6.838243166587269],[-3.167849921985165,6.939440529927996],[-2.672319385756534,6.631800545324246],[-2.309384328501248,7.228864989154388],[-2.808119589299123,7.533806377370425],[-2.731606790248428,7.658616458863939],[-3.2776117384195382,7.994591705203096]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-4.896798826085888,5.1907500911125855],[-4.393256478437704,4.879736861072132],[-4.345986791064468,4.9573215063080145],[-3.8200113714458013,5.809403305804729],[-4.429309629815025,6.185182848383246],[-4.648432672115285,5.829642778472872],[-4.546682667100464,5.766900413177654],[-4.623596056712531,5.642090331684139],[-4.716132478595219,5.698760855202885],[-4.886784061809665,5.422829377771238],[-4.790642324789247,5.36346025791272],[-4.852733863281897,5.262262894571991],[-4.896798826085888,5.1907500911125855]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.687438678103659,2.1534798922654392],[-6.072532151740036,1.7736524551053545],[-5.63308429544117,2.4651677714028217],[-6.243183734954484,2.849043103048599],[-6.687438678103659,2.1534798922654392]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.243183734954484,2.849043103048599],[-5.63308429544117,2.4651677714028217],[-5.123533089222984,3.2747466782245223],[-5.73323193816781,3.658622009918238],[-6.243183734954484,2.849043103048599]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-5.73323193816781,3.658622009918238],[-5.123533089222984,3.2747466782245223],[-4.643625585257859,4.032377605253911],[-4.848327367000075,4.161235581233116],[-5.26133624562224,4.42030083143332],[-5.73323193816781,3.658622009918238]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-4.992139381962217,8.276595024411218],[-5.365089203493726,8.508674311069871],[-5.416765387141668,8.426367122203434],[-5.494880548466313,8.300207742516065],[-5.683959297945023,8.417596684039246],[-6.206329402425958,7.575634620900573],[-5.7760951292592235,7.308473581633116],[-5.644300831422854,7.226841041863604],[-5.54094846412697,7.393479366839326],[-5.582609883498691,7.460269626668175],[-5.496883501322979,7.60599382992676],[-5.411958300291359,7.6019459353931325],[-5.042613793897583,8.195637133738632],[-4.992139381962217,8.276595024411218]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-7.8118964106783535,8.747500088553991],[-7.491423953945993,8.550502554552082],[-7.575147383265036,8.414223438602548],[-7.18296921433229,8.173373713779707],[-6.8180312042274505,8.767064912173147],[-7.244660162256453,9.029503407810047],[-7.530681829892558,9.204912170949957],[-7.8118964106783535,8.747500088553991]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.206329402425958,7.575634620900573],[-6.3337172039805045,7.6518699679425985],[-6.8913392787017855,6.721528874161013],[-6.329310707698682,6.384878978724931],[-5.7760951292592235,7.308473581633116],[-6.206329402425958,7.575634620900573]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.8913392787017855,6.721528874161013],[-7.388071586642993,5.893734441914011],[-6.834455417635047,5.551687353750443],[-6.329310707698682,6.384878978724931],[-6.8913392787017855,6.721528874161013]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.291403324074992,4.269854084592113],[-8.766503741189807,3.5385344720552823],[-8.62870058479055,3.4488061432185155],[-8.135974182555563,3.1566830876523504],[-7.688915105405629,3.8981224364992855],[-8.291403324074992,4.269854084592113]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.663551964462409,3.382690532486592],[-8.838610043951563,3.5007541230587655],[-8.893490952168749,2.491479085847441],[-8.776117914890424,2.4051240024473746],[-8.601059835394155,2.4341339132797053],[-8.135974182555563,3.1566830876523504],[-8.62870058479055,3.4488061432185155],[-8.663551964462409,3.382690532486592]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-10,8.280181867829818],[-9.858513637517795,8.61391956894423],[-10,8.672058160784232],[-10,8.280181867829818]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.25121833200524,4.7252422196972965],[-9.616957523254168,4.947201769997909],[-9.950649468831996,4.271878031834959],[-9.647001816075718,4.085000234191089],[-9.25121833200524,4.7252422196972965]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.392626803535112,5.462633674010602],[-9.54885712619863,5.119237287701118],[-8.997243910040236,4.773816954100846],[-8.940360048966383,4.8439804593663975],[-8.461654316713835,4.518124949337345],[-8.390349195089053,4.622695558162713],[-8.226507651581581,4.887832650139391],[-8.182843279353195,4.963393348132426],[-9.302093334509092,5.661655155303295],[-9.392626803535112,5.462633674010602]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.878669101042219,6.592670898181808],[-9.084172063928525,6.141330657610254],[-7.875189720883581,5.4545378849433455],[-7.8687802717522075,5.478825252145118],[-7.672891482573636,5.795910324009984],[-7.616808802643872,5.904528827321045],[-8.181240917072131,6.251973108212098],[-8.154000758251339,6.295150649888161],[-8.830598232532008,6.698590805153096],[-8.878669101042219,6.592670898181808]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.414124279800975,9.999999999982482],[-9.308502783647581,9.957145905203927],[-9.290719531651627,9.999999999982482],[-9.414124279800975,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-10,8.672058160784232],[-9.858513637517795,8.61391956894423],[-9.580503781301244,9.28991795615617],[-10,9.459626113904445],[-10,8.672058160784232]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-10,9.999999999982482],[-10,9.459626113904445],[-9.580503781301244,9.28991795615617],[-9.308502783647581,9.957145905203927],[-9.414124279800975,9.999999999982482],[-10,9.999999999982482]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.536038227928767,2.8429712612721225],[-9.29448211366514,3.371221497982633],[-9.362983101289165,3.4015807070088204],[-9.223577582608845,3.7308094624266364],[-9.97107958794581,3.981104274462652],[-10,3.9172772441888917],[-10,3.03998457157787],[-9.536038227928767,2.8429712612721225]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.694271503441838,6.320787315283791],[-9.469540193154295,6.8470136047514565],[-10,7.064277924315604],[-10,6.4471690217948705],[-9.694271503441838,6.320787315283791]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.829648330777622,9.79118222932513],[-6.364162087370541,9.50513101558338],[-6.059839695405982,9.999999999982482],[-6.7013817564150475,9.999999999982482],[-6.829648330777622,9.79118222932513]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.29448211366514,3.371221497982633],[-9.536038227928767,2.8429712612721225],[-8.893490952168749,2.491479085847441],[-8.838610043951563,3.5007541230587655],[-8.951175994379579,3.302407290910935],[-9.250016560292663,3.4656723704499566],[-9.29448211366514,3.371221497982633]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-9.469540193154295,6.8470136047514565],[-9.694271503441838,6.320787315283791],[-9.112213403893406,6.079262941411962],[-9.084172063928525,6.141330657610254],[-8.878669101042219,6.592670898181808],[-9.469540193154295,6.8470136047514565]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-7.244660162256453,9.029503407810047],[-6.8180312042274505,8.767064912173147],[-6.364162087370541,9.50513101558338],[-6.829648330777622,9.79118222932513],[-7.13569952696617,9.979409325162855],[-7.3876709960745055,9.569897328121446],[-7.04276251450788,9.358057514130937],[-7.244660162256453,9.029503407810047]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-10,5.133948164276209],[-9.618559885535234,4.9660919444722005],[-9.54885712619863,5.119237287701118],[-9.392626803535112,5.462633674010602],[-10,5.709076847482526],[-10,5.133948164276209]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-7.688915105405629,3.8981224364992855],[-6.911368807247113,5.157017636697635],[-7.017124717975268,5.222458598332626],[-6.819633566508516,5.542242266537267],[-6.834455417635047,5.551687353750443],[-7.388071586642993,5.893734441914011],[-7.510251710778743,5.696062258815175],[-7.672891482573636,5.795910324009984],[-7.8687802717522075,5.478825252145118],[-7.70934522452656,5.380326485144165],[-8.072280281781847,4.792707128575138],[-8.226507651581581,4.887832650139391],[-8.390349195089053,4.622695558162713],[-8.1608107979512,4.481019249437757],[-8.291403324074992,4.269854084592113],[-7.688915105405629,3.8981224364992855]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-2.5361185916383437,-1.5982436919350285],[-2.1371303830057364,-2.0064063907825815],[-1.4997907846645155,-1.492323784915806],[-1.5174167697846883,-1.4201363324074094],[-1.5666894100145914,-1.3607672125488914],[-1.4969866506708733,-1.309493881805567],[-1.7725929634622677,-.9809397754367417],[-2.5361185916383437,-1.5982436919350285]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-8.785732088591043,6.768754310418647],[-8.139579497693294,6.347098629728414],[-7.942488936802145,6.66013580705965],[-8.577424991711096,7.060202716887879],[-8.785732088591043,6.768754310418647]]]}},{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-6.32650657370504,.6631800545533029],[-6.225157159258708,.5613080421156464],[-6.036078409787113,.7637027688450395],[-6.13822900537042,.8756945175928017],[-6.32650657370504,.6631800545533029]]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-1.5981012362152853,-10],[-1.0507287546650304,-9.61779741339765],[.6573894397462752,-8.425017823931224],[1.1216739114478926,-8.127497575685513],[1.3636306162800071,-7.723382771323653]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[7.240694882276802,1.0436821407623782],[7.340041343859351,.7400900506922561]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[5.792960558961875,2.7660612650852343],[5.476093417360131,3.088543529677583],[5.086318791859654,3.3894370233599957],[4.259499853471237,3.9143140146817395],[4.050391575454313,4.0991678650348256],[3.897365977360039,4.292117504503105],[3.7423374264162135,4.526220738404605]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[7.8131388081175,1.1064245060576],[10.000000000004263,2.628229843567345]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[5.792960558961875,2.7660612650852343],[7.240694882276802,1.0436821407623782]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[3.7423374264162135,4.526220738404605],[3.4174584733949143,4.961369400841642],[-.3455516261964604,9.999999999982482]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-8.84061299680823,-8.216551255425355],[-7.140106023247992,-8.854094644591786],[-6.501965243769797,-9.115183842034835]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[3.2331868107736295,4.138972161322126],[3.5232143841230688,3.8050208622258133],[4.824733149043583,2.1156995432689225]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[4.824733149043583,2.1156995432689225],[6.244426132393631,.43784725881598874]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[6.244426132393631,.43784725881598874],[6.488385790082411,.13155657240609386],[7.177401572071574,-.5269009385254133],[8.999287488623473,-2.486756542186468]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[5.258973327923652,-4.170680668415877],[4.519883724574729,-3.079773091435043]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[1.3636306162800071,-7.723382771323653],[2.1567999467091443,-7.180964903769411],[3.277251773577621,-6.43142976580728]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[3.277251773577621,-6.43142976580728],[8.999287488623473,-2.486756542186468],[9.363424317591338,-2.235787081053524]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[3.277251773577621,-6.43142976580728],[3.276050001857927,-5.574625422727947],[4.104471302527411,-4.980934224382444],[5.258973327923652,-4.170680668415877],[6.57130803826448,-3.254507205525961],[5.48330404764271,-1.682574828044313],[7.177401572071574,-.5269009385254133]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[1.6360322045092737,-6.53532572553572],[2.1567999467091443,-7.180964903769411]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[7.340041343859351,.7400900506922561],[7.7374271902180105,-.3353005972030516],[9.363424317591338,-2.235787081053524]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.629078389727836,-3.274072029097179],[-5.278161049598323,-2.9428193263885802],[-4.974112806273557,-2.65744276169582]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[.6573894397462752,-8.425017823931224],[-.964601781913716,-8.528239134562735],[-1.856316392788429,-8.883104555424119],[-2.61543552468268,-8.947870867962184],[-4.513033059141184,-8.577488518063213],[-5.136351987492848,-8.426367122125079]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-3.9570133467009674,-7.33073700151369],[-2.645880408072717,-6.211494162797451],[-1.5138114546469552,-5.29397140171368],[1.962914110380126,-2.9097615210226193],[6.13907081224108,-.10254666149540803]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[5.23714360187482,9.999999999982482],[5.021022528797758,9.714272233186175],[4.795216795792399,9.999999999982482]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.345986791064468,4.9573215063080145],[-3.248368626742079,4.299538644521373],[-2.802511321304724,4.856124142967284]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.0259149249005945,-1.7965905240828572],[-.519145067051964,1.300048794622807],[1.07961190150057,2.5096946112727423]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-8.84061299680823,-8.216551255425355],[-9.339748848174592,-7.948715567060966],[-9.655013627495272,-7.803666012947245],[-10,-7.672726256588217]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-10,1.9564736293258456],[-8.283792103223924,1.1860330985842626],[-8.003779294150705,1.0045524936199435],[-7.70373695653216,.7562816288267733],[-5.097494702114769,-1.738570702418194]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-10,-1.255339325047796],[-9.545251811060899,-.7286210161578808],[-8.283792103223924,1.1860330985842626]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-.519145067051964,1.300048794622807],[-1.0186815089939287,1.916003412927239]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[8.096356341759964,.7002857544528922],[8.854674292517238,1.1907556421668826],[9.37544203471711,1.4612899269189832],[9.97752966281087,1.5388745721548638],[10.000000000004263,1.5398585749989095]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[7.8131388081175,1.1064245060576],[8.096356341759964,.7002857544528922],[8.690832749009768,.045876138102954656],[9.124271746745748,-.2759314773924686],[9.492013890851347,-.37173164805365033],[9.869370208664677,-.22803139208584788],[10.000000000004263,-.13448253871978189]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.3543646212543745,-10],[-5.074661039575799,-9.70752574223442],[-5.70959709448475,-9.443063299306733],[-5.997621714977522,-9.323650410540704],[-6.309281179153354,-9.195467083658427],[-6.501965243769797,-9.115183842034835]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-1.0186815089939287,1.916003412927239],[-1.4801618466947914,2.4516747896080773]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-1.4801618466947914,2.4516747896080773],[-2.012546715444831,2.987346166336856],[-2.392306576683316,3.0642561624758073],[-2.841368606682801,2.627758201844914]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-8.283792103223924,1.1860330985842626],[-7.762623770455566,2.2202701520942885],[-5.607847089469931,5.715627082386392],[-4.3479897439211355,7.769258909465783],[-2.9781312952194003,9.999999999982482]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[2.1567999467091443,-7.180964903769411],[2.4504328351892006,-7.6390516352143685]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-1.0507287546650304,-9.61779741339765],[-.8002264983166683,-10]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.852733863281897,5.262262894571991],[-4.345986791064468,4.9573215063080145]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.607847089469931,5.715627082386392],[-4.852733863281897,5.262262894571991]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[9.363424317591338,-2.235787081053524],[9.438334754346734,-1.630626848204063],[9.729964689984357,-1.1138456459975128],[10.000000000004263,-.8575307717795297]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[3.7423374264162135,4.526220738404605],[4.246680955201372,4.85747344116114]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-10,-8.008416000613114],[-9.47194373657945,-8.123449681151884],[-8.84061299680823,-8.216551255425355]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.097494702114769,-1.738570702418194],[-4.971709262848403,-1.8593328893780772],[-4.558299793657752,-2.2668209391766396]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[4.987372920838478,5.376953239707463],[10.000000000004263,8.893093350940301]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[4.521486086855793,5.05042308062942],[4.987372920838478,5.376953239707463]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[4.246680955201372,4.85747344116114],[4.521486086855793,5.05042308062942]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[2.1960578226557104,3.3543552707511886],[2.896290140626556,3.883954805655552]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[2.896290140626556,3.883954805655552],[3.2331868107736295,4.138972161322126],[3.7423374264162135,4.526220738404605]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[1.07961190150057,2.5096946112727423],[2.1960578226557104,3.3543552707511886]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.974112806273557,-2.65744276169582],[-4.558299793657752,-2.2668209391766396]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.558299793657752,-2.2668209391766396],[-4.0259149249005945,-1.7965905240828572]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-7.802682827546222,-5.324330610691931],[-5.629078389727836,-3.274072029097179]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-9.415861056649685,-6.845664306479246],[-7.802682827546222,-5.324330610691931]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-10,-7.374834808293684],[-9.415861056649685,-6.845664306479246]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[6.13907081224108,-.10254666149540803],[6.488385790082411,.13155657240609386],[7.340041343859351,.7400900506922561],[7.8131388081175,1.1064245060576]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-6.568091280381873,-10],[-5.997621714977522,-9.323650410540704]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.997621714977522,-9.323650410540704],[-5.379510464044655,-8.679360530500869],[-5.136351987492848,-8.426367122125079],[-3.9570133467009674,-7.33073700151369]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[2.884616917892922,-10],[3.0401021555887002,-9.46937461379929],[3.0012448702106216,-9.289917956125752]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-10,6.058748089797934],[-9.93502643656849,6.00707548885563],[-9.729523473682184,5.909926020048529]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.416765387141668,8.426367122203434],[-5.9571620673112635,8.75829447400896]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.042613793897583,8.195637133738632],[-5.416765387141668,8.426367122203434]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-4.3479897439211355,7.769258909465783],[-5.042613793897583,8.195637133738632]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[3.2928748058411266,9.307458832484542],[4.206684719711955,9.999999999982482]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[5.021022528797758,9.714272233186175],[5.746091462164243,8.798098770248323],[4.462599272932389,7.909585919996886],[3.2928748058411266,9.307458832484542],[2.761476670571925,9.999999999982482]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[10.000000000004263,-2.9851080371168006],[9.363424317591338,-2.235787081053524]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.568589213516249,-8.591656148954883],[-6.212738851564447,-8.306279584262123]]}},{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-5.379510464044655,-8.679360530500869],[-5.568589213516249,-8.591656148954883]]}}],Vd={type:Bd,features:Gd};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="146",Vs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kd=0,ol=1,Hd=2,Tu=1,Au=2,lr=3,qi=0,Bt=1,Fn=2,zn=0,Vi=1,al=2,ll=3,cl=4,Wd=5,Fi=100,Xd=101,qd=102,ul=103,hl=104,jd=200,Zd=201,Yd=202,$d=203,Cu=204,Lu=205,Jd=206,Kd=207,Qd=208,ep=209,tp=210,np=0,ip=1,rp=2,Vo=3,sp=4,op=5,ap=6,lp=7,Sa=0,cp=1,up=2,vn=0,hp=1,fp=2,dp=3,pp=4,mp=5,Pu=300,ji=301,Zi=302,ko=303,Ho=304,ws=306,Wo=1e3,qt=1001,Xo=1002,Et=1003,fl=1004,dl=1005,Nt=1006,gp=1007,Es=1008,ci=1009,_p=1010,xp=1011,Du=1012,vp=1013,ni=1014,ii=1015,yr=1016,yp=1017,Mp=1018,ki=1020,Sp=1021,bp=1022,jt=1023,wp=1024,Ep=1025,ai=1026,Yi=1027,Tp=1028,Ap=1029,Cp=1030,Lp=1031,Pp=1033,ks=33776,Hs=33777,Ws=33778,Xs=33779,pl=35840,ml=35841,gl=35842,_l=35843,Dp=36196,xl=37492,vl=37496,yl=37808,Ml=37809,Sl=37810,bl=37811,wl=37812,El=37813,Tl=37814,Al=37815,Cl=37816,Ll=37817,Pl=37818,Dl=37819,Rl=37820,Fl=37821,Il=36492,ui=3e3,et=3001,Rp=3200,Fp=3201,Ru=0,Ip=1,mn="srgb",ri="srgb-linear",qs=7680,Np=519,Nl=35044,Ol="300 es",qo=1035;class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,zl=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function Op(n,e){return(n%e+e)%e}function Zs(n,e,t){return(1-t)*n+t*e}function Ul(n){return(n&n-1)===0&&n!==0}function jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],p=r[0],d=r[3],x=r[6],A=r[1],w=r[4],b=r[7],T=r[2],P=r[5],G=r[8];return s[0]=o*p+a*A+l*T,s[3]=o*d+a*w+l*P,s[6]=o*x+a*b+l*G,s[1]=c*p+u*A+h*T,s[4]=c*d+u*w+h*P,s[7]=c*x+u*b+h*G,s[2]=f*p+m*A+g*T,s[5]=f*d+m*w+g*P,s[8]=f*x+m*b+g*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Fu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ys={[mn]:{[ri]:li},[ri]:{[mn]:os}},Gt={legacyMode:!0,get workingColorSpace(){return ri},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ys[e]&&Ys[e][t]!==void 0){const i=Ys[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},Vt={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function $s(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Nr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ri){return this.r=e,this.g=t,this.b=i,Gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ri){if(e=Op(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$s(o,s,e+1/3),this.g=$s(o,s,e),this.b=$s(o,s,e-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Gt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Gt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Gt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Gt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Gt.fromWorkingColorSpace(Nr(this,st),e),gt(st.r*255,0,255)<<16^gt(st.g*255,0,255)<<8^gt(st.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ri){Gt.fromWorkingColorSpace(Nr(this,st),t);const i=st.r,r=st.g,s=st.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ri){return Gt.fromWorkingColorSpace(Nr(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=mn){return Gt.fromWorkingColorSpace(Nr(this,st),e),e!==mn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(Ir);const i=Zs(Vt.h,Ir.h,t),r=Zs(Vt.s,Ir.s,t),s=Zs(Vt.l,Ir.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ye.NAMES=Iu;let vi;class Nu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=ds("canvas")),vi.width=e.width,vi.height=e.height;const i=vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ds("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ou{constructor(e=null){this.isSource=!0,this.uuid=er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Js(r[o].image)):s.push(Js(r[o]))}else s=Js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class Jt extends mi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=qt,r=qt,s=Nt,o=Es,a=jt,l=ci,c=1,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=er(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Pu;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],p=l[2],d=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(m+1)/2,T=(x+1)/2,P=(u+f)/4,G=(h+p)/4,v=(g+d)/4;return w>b&&w>T?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=P/i,s=G/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=G/s,r=v/s),this.set(i,r,s,t),this}let A=Math.sqrt((d-g)*(d-g)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(d-g)/A,this.y=(h-p)/A,this.z=(f-u)/A,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends mi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Nt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zu extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Up extends Jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==f||c!==m||u!==g){let d=1-a;const x=l*f+c*m+u*g+h*p,A=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const T=Math.sqrt(w),P=Math.atan2(T,x*A);d=Math.sin(d*P)/T,a=Math.sin(a*P)/T}const b=a*A;if(l=l*d+f*b,c=c*d+m*b,u=u*d+g*b,h=h*d+p*b,d===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new F,Bl=new fi;class wr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<i&&(i=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)qn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox),Qs.applyMatrix4(e.matrixWorld),this.union(Qs);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Or.subVectors(this.max,ir),yi.subVectors(e.a,ir),Mi.subVectors(e.b,ir),Si.subVectors(e.c,ir),En.subVectors(Mi,yi),Tn.subVectors(Si,Mi),jn.subVectors(yi,Si);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-jn.z,jn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,jn.z,0,-jn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-jn.y,jn.x,0];return!eo(t,yi,Mi,Si,Or)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,yi,Mi,Si,Or))?!1:(zr.crossVectors(En,Tn),t=[zr.x,zr.y,zr.z],eo(t,yi,Mi,Si,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,Qs=new wr,yi=new F,Mi=new F,Si=new F,En=new F,Tn=new F,jn=new F,ir=new F,Or=new F,zr=new F,Zn=new F;function eo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zn.fromArray(n,s);const a=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bp=new wr,rr=new F,to=new F;class ba{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);const t=rr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(rr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(to)),this.expandByPoint(rr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new F,no=new F,Ur=new F,An=new F,io=new F,Br=new F,ro=new F;class Gp{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){no.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),An.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=An.dot(this.direction),l=-An.dot(Ur),c=An.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const p=1/u;h*=p,f*=p,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Ur).multiplyScalar(f).add(no),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,s){io.subVectors(t,e),Br.subVectors(i,e),ro.crossVectors(io,Br);let o=this.direction.dot(ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,e);const l=a*this.direction.dot(Br.crossVectors(An,Br));if(l<0)return null;const c=a*this.direction.dot(io.cross(An));if(c<0||l+c>o)return null;const u=-a*An.dot(ro);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,h,f,m,g,p,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=p,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),o=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,p=c*h;t[0]=f-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-p*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,kp)}lookAt(e,t,i){const r=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),Cn.crossVectors(i,Ct),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),Cn.crossVectors(i,Ct)),Cn.normalize(),Gr.crossVectors(Ct,Cn),r[0]=Cn.x,r[4]=Gr.x,r[8]=Ct.x,r[1]=Cn.y,r[5]=Gr.y,r[9]=Ct.y,r[2]=Cn.z,r[6]=Gr.z,r[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],p=i[6],d=i[10],x=i[14],A=i[3],w=i[7],b=i[11],T=i[15],P=r[0],G=r[4],v=r[8],C=r[12],I=r[1],K=r[5],pe=r[9],W=r[13],O=r[2],ne=r[6],se=r[10],ie=r[14],k=r[3],z=r[7],H=r[11],le=r[15];return s[0]=o*P+a*I+l*O+c*k,s[4]=o*G+a*K+l*ne+c*z,s[8]=o*v+a*pe+l*se+c*H,s[12]=o*C+a*W+l*ie+c*le,s[1]=u*P+h*I+f*O+m*k,s[5]=u*G+h*K+f*ne+m*z,s[9]=u*v+h*pe+f*se+m*H,s[13]=u*C+h*W+f*ie+m*le,s[2]=g*P+p*I+d*O+x*k,s[6]=g*G+p*K+d*ne+x*z,s[10]=g*v+p*pe+d*se+x*H,s[14]=g*C+p*W+d*ie+x*le,s[3]=A*P+w*I+b*O+T*k,s[7]=A*G+w*K+b*ne+T*z,s[11]=A*v+w*pe+b*se+T*H,s[15]=A*C+w*W+b*ie+T*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],p=e[7],d=e[11],x=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+p*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+d*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+x*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],p=e[13],d=e[14],x=e[15],A=h*d*c-p*f*c+p*l*m-a*d*m-h*l*x+a*f*x,w=g*f*c-u*d*c-g*l*m+o*d*m+u*l*x-o*f*x,b=u*p*c-g*h*c+g*a*m-o*p*m-u*a*x+o*h*x,T=g*h*l-u*p*l-g*a*f+o*p*f+u*a*d-o*h*d,P=t*A+i*w+r*b+s*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return e[0]=A*G,e[1]=(p*f*s-h*d*s-p*r*m+i*d*m+h*r*x-i*f*x)*G,e[2]=(a*d*s-p*l*s+p*r*c-i*d*c-a*r*x+i*l*x)*G,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*G,e[4]=w*G,e[5]=(u*d*s-g*f*s+g*r*m-t*d*m-u*r*x+t*f*x)*G,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*x-t*l*x)*G,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*G,e[8]=b*G,e[9]=(g*h*s-u*p*s-g*i*m+t*p*m+u*i*x-t*h*x)*G,e[10]=(o*p*s-g*a*s+g*i*c-t*p*c-o*i*x+t*a*x)*G,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*G,e[12]=T*G,e[13]=(u*p*r-g*h*r+g*i*f-t*p*f-u*i*d+t*h*d)*G,e[14]=(g*a*r-o*p*r-g*i*l+t*p*l+o*i*d-t*a*d)*G,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,g=s*h,p=o*u,d=o*h,x=a*h,A=l*c,w=l*u,b=l*h,T=i.x,P=i.y,G=i.z;return r[0]=(1-(p+x))*T,r[1]=(m+b)*T,r[2]=(g-w)*T,r[3]=0,r[4]=(m-b)*P,r[5]=(1-(f+x))*P,r[6]=(d+A)*P,r[7]=0,r[8]=(g+w)*G,r[9]=(d-A)*G,r[10]=(1-(f+p))*G,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),a=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),h=(t+e)*l,f=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new F,kt=new rt,Vp=new F(0,0,0),kp=new F(1,1,1),Cn=new F,Gr=new F,Ct=new F,Gl=new rt,Vl=new fi;class Er{constructor(e=0,t=0,i=0,r=Er.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Er.DefaultOrder="XYZ";Er.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hp=0;const kl=new F,wi=new fi,hn=new rt,Vr=new F,sr=new F,Wp=new F,Xp=new fi,Hl=new F(1,0,0),Wl=new F(0,1,0),Xl=new F(0,0,1),qp={type:"added"},ql={type:"removed"};class vt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DefaultUp.clone();const e=new F,t=new Er,i=new fi,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new zt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DefaultMatrixWorldAutoUpdate,this.layers=new Uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Hl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vr.copy(e):Vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(sr,Vr,this.up):hn.lookAt(Vr,sr,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(hn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ql)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DefaultUp=new F(0,1,0);vt.DefaultMatrixAutoUpdate=!0;vt.DefaultMatrixWorldAutoUpdate=!0;const Ht=new F,fn=new F,so=new F,dn=new F,Ei=new F,Ti=new F,jl=new F,oo=new F,ao=new F,lo=new F;class gn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ht.subVectors(r,t),fn.subVectors(i,t),so.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(fn),l=Ht.dot(so),c=fn.dot(fn),u=fn.dot(so),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l}static isFrontFacing(e,t,i,r){return Ht.subVectors(i,t),fn.subVectors(e,t),Ht.cross(fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ht.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return gn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ei.subVectors(r,i),Ti.subVectors(s,i),oo.subVectors(e,i);const l=Ei.dot(oo),c=Ti.dot(oo);if(l<=0&&c<=0)return t.copy(i);ao.subVectors(e,r);const u=Ei.dot(ao),h=Ti.dot(ao);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ei,o);lo.subVectors(e,s);const m=Ei.dot(lo),g=Ti.dot(lo);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ti,a);const d=u*g-m*h;if(d<=0&&h-u>=0&&m-g>=0)return jl.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(jl,a);const x=1/(d+p+f);return o=p*x,a=f*x,t.copy(i).addScaledVector(Ei,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jp=0;class Tr extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Vi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cu,this.blendDst=Lu,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wa extends Tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new F,kr=new de;class on{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Nl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bu extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gu extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yn extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zp=0;const It=new rt,co=new vt,Ai=new F,Lt=new wr,or=new wr,ut=new F;class Gn extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Gu:Bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new zt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,i){return It.makeTranslation(e,t,i),this.applyMatrix4(It),this}scale(e,t,i){return It.makeScale(e,t,i),this.applyMatrix4(It),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];or.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Lt.min,or.min),Lt.expandByPoint(ut),ut.addVectors(Lt.max,or.max),Lt.expandByPoint(ut)):(Lt.expandByPoint(or.min),Lt.expandByPoint(or.max))}Lt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(Ai.fromBufferAttribute(e,c),ut.add(Ai)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new F,u[I]=new F;const h=new F,f=new F,m=new F,g=new de,p=new de,d=new de,x=new F,A=new F;function w(I,K,pe){h.fromArray(r,I*3),f.fromArray(r,K*3),m.fromArray(r,pe*3),g.fromArray(o,I*2),p.fromArray(o,K*2),d.fromArray(o,pe*2),f.sub(h),m.sub(h),p.sub(g),d.sub(g);const W=1/(p.x*d.y-d.x*p.y);!isFinite(W)||(x.copy(f).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(W),A.copy(m).multiplyScalar(p.x).addScaledVector(f,-d.x).multiplyScalar(W),c[I].add(x),c[K].add(x),c[pe].add(x),u[I].add(A),u[K].add(A),u[pe].add(A))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let I=0,K=b.length;I<K;++I){const pe=b[I],W=pe.start,O=pe.count;for(let ne=W,se=W+O;ne<se;ne+=3)w(i[ne+0],i[ne+1],i[ne+2])}const T=new F,P=new F,G=new F,v=new F;function C(I){G.fromArray(s,I*3),v.copy(G);const K=c[I];T.copy(K),T.sub(G.multiplyScalar(G.dot(K))).normalize(),P.crossVectors(v,K);const W=P.dot(u[I])<0?-1:1;l[I*4]=T.x,l[I*4+1]=T.y,l[I*4+2]=T.z,l[I*4+3]=W}for(let I=0,K=b.length;I<K;++I){const pe=b[I],W=pe.start,O=pe.count;for(let ne=W,se=W+O;ne<se;ne+=3)C(i[ne+0]),C(i[ne+1]),C(i[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let x=0;x<u;x++)f[g++]=c[m++]}return new on(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new rt,Ci=new Gp,uo=new ba,Ln=new F,Pn=new F,Dn=new F,ho=new F,fo=new F,po=new F,Hr=new F,Wr=new F,Xr=new F,qr=new de,jr=new de,Zr=new de,mo=new F,Yr=new F;class Yt extends vt{constructor(e=new Gn,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),e.ray.intersectsSphere(uo)===!1)||(Zl.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(Zl),i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const x=m[p],A=r[x.materialIndex],w=Math.max(x.start,g.start),b=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let T=w,P=b;T<P;T+=3){const G=a.getX(T),v=a.getX(T+1),C=a.getX(T+2);o=$r(this,A,e,Ci,l,c,u,h,f,G,v,C),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let x=p,A=d;x<A;x+=3){const w=a.getX(x),b=a.getX(x+1),T=a.getX(x+2);o=$r(this,r,e,Ci,l,c,u,h,f,w,b,T),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const x=m[p],A=r[x.materialIndex],w=Math.max(x.start,g.start),b=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let T=w,P=b;T<P;T+=3){const G=T,v=T+1,C=T+2;o=$r(this,A,e,Ci,l,c,u,h,f,G,v,C),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let x=p,A=d;x<A;x+=3){const w=x,b=x+1,T=x+2;o=$r(this,r,e,Ci,l,c,u,h,f,w,b,T),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Yp(n,e,t,i,r,s,o,a){let l;if(e.side===Bt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Fn,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function $r(n,e,t,i,r,s,o,a,l,c,u,h){Ln.fromBufferAttribute(r,c),Pn.fromBufferAttribute(r,u),Dn.fromBufferAttribute(r,h);const f=n.morphTargetInfluences;if(s&&f){Hr.set(0,0,0),Wr.set(0,0,0),Xr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=f[g],x=s[g];d!==0&&(ho.fromBufferAttribute(x,c),fo.fromBufferAttribute(x,u),po.fromBufferAttribute(x,h),o?(Hr.addScaledVector(ho,d),Wr.addScaledVector(fo,d),Xr.addScaledVector(po,d)):(Hr.addScaledVector(ho.sub(Ln),d),Wr.addScaledVector(fo.sub(Pn),d),Xr.addScaledVector(po.sub(Dn),d)))}Ln.add(Hr),Pn.add(Wr),Dn.add(Xr)}n.isSkinnedMesh&&(n.boneTransform(c,Ln),n.boneTransform(u,Pn),n.boneTransform(h,Dn));const m=Yp(n,e,t,i,Ln,Pn,Dn,mo);if(m){a&&(qr.fromBufferAttribute(a,c),jr.fromBufferAttribute(a,u),Zr.fromBufferAttribute(a,h),m.uv=gn.getUV(mo,Ln,Pn,Dn,qr,jr,Zr,new de)),l&&(qr.fromBufferAttribute(l,c),jr.fromBufferAttribute(l,u),Zr.fromBufferAttribute(l,h),m.uv2=gn.getUV(mo,Ln,Pn,Dn,qr,jr,Zr,new de));const g={a:c,b:u,c:h,normal:new F,materialIndex:0};gn.getNormal(Ln,Pn,Dn,g.normal),m.face=g}return m}class Ar extends Gn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(h,2));function g(p,d,x,A,w,b,T,P,G,v,C){const I=b/G,K=T/v,pe=b/2,W=T/2,O=P/2,ne=G+1,se=v+1;let ie=0,k=0;const z=new F;for(let H=0;H<se;H++){const le=H*K-W;for(let ae=0;ae<ne;ae++){const ue=ae*I-pe;z[p]=ue*A,z[d]=le*w,z[x]=O,c.push(z.x,z.y,z.z),z[p]=0,z[d]=0,z[x]=P>0?1:-1,u.push(z.x,z.y,z.z),h.push(ae/G),h.push(1-H/v),ie+=1}}for(let H=0;H<v;H++)for(let le=0;le<G;le++){const ae=f+le+ne*H,ue=f+le+ne*(H+1),Se=f+(le+1)+ne*(H+1),Pe=f+(le+1)+ne*H;l.push(ae,ue,Pe),l.push(ue,Se,Pe),k+=6}a.addGroup(m,k,C),m+=k,f+=ie}}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const r in i)e[r]=i[r]}return e}function $p(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Jp={clone:$i,merge:bt};var Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Vu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=90,Pi=1;class e0 extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ot(Li,Pi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(1,0,0)),this.add(r);const s=new Ot(Li,Pi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);const o=new Ot(Li,Pi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new F(0,1,0)),this.add(o);const a=new Ot(Li,Pi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new Ot(Li,Pi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Ot(Li,Pi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class ku extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t0 extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ku(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ar(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:zn});s.uniforms.tEquirect.value=t;const o=new Yt(r,s),a=t.minFilter;return t.minFilter===Es&&(t.minFilter=Nt),new e0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const go=new F,n0=new F,i0=new zt;class $n{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=go.subVectors(i,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(go),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||i0.getNormalMatrix(e),r=this.coplanarPoint(go).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new ba,Jr=new F;class Ea{constructor(e=new $n,t=new $n,i=new $n,r=new $n,s=new $n,o=new $n){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],f=i[8],m=i[9],g=i[10],p=i[11],d=i[12],x=i[13],A=i[14],w=i[15];return t[0].setComponents(a-r,h-l,p-f,w-d).normalize(),t[1].setComponents(a+r,h+l,p+f,w+d).normalize(),t[2].setComponents(a+s,h+c,p+m,w+x).normalize(),t[3].setComponents(a-s,h-c,p-m,w-x).normalize(),t[4].setComponents(a-o,h-u,p-g,w-A).normalize(),t[5].setComponents(a+o,h+u,p+g,w+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jr.x=r.normal.x>0?e.max.x:e.min.x,Jr.y=r.normal.y>0?e.max.y:e.min.y,Jr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function r0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ts extends Gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],p=[],d=[];for(let x=0;x<u;x++){const A=x*f-o;for(let w=0;w<c;w++){const b=w*h-s;g.push(b,-A,0),p.push(0,0,1),d.push(w/a),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let A=0;A<a;A++){const w=A+c*x,b=A+c*(x+1),T=A+1+c*(x+1),P=A+1+c*x;m.push(w,b,P),m.push(b,T,P)}this.setIndex(m),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(p,3)),this.setAttribute("uv",new yn(d,2))}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0="vec3 transformed = vec3( position );",f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,p0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,E0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,vm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Um=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$m=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Km=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:a0,alphatest_pars_fragment:l0,aomap_fragment:c0,aomap_pars_fragment:u0,begin_vertex:h0,beginnormal_vertex:f0,bsdfs:d0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:v0,color_fragment:y0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:b0,common:w0,cube_uv_reflection_fragment:E0,defaultnormal_vertex:T0,displacementmap_pars_vertex:A0,displacementmap_vertex:C0,emissivemap_fragment:L0,emissivemap_pars_fragment:P0,encodings_fragment:D0,encodings_pars_fragment:R0,envmap_fragment:F0,envmap_common_pars_fragment:I0,envmap_pars_fragment:N0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Z0,envmap_vertex:z0,fog_vertex:U0,fog_pars_vertex:B0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:k0,lightmap_fragment:H0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:Y0,lights_toon_pars_fragment:$0,lights_phong_fragment:J0,lights_phong_pars_fragment:K0,lights_physical_fragment:Q0,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:um,map_particle_pars_fragment:hm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:dm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:xm,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,output_fragment:Cm,packing:Lm,premultiplied_alpha_fragment:Pm,project_vertex:Dm,dithering_fragment:Rm,dithering_pars_fragment:Fm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:zm,shadowmap_vertex:Um,shadowmask_pars_fragment:Bm,skinbase_vertex:Gm,skinning_pars_vertex:Vm,skinning_vertex:km,skinnormal_vertex:Hm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:jm,transmission_fragment:Zm,transmission_pars_fragment:Ym,uv_pars_fragment:$m,uv_pars_vertex:Jm,uv_vertex:Km,uv2_pars_fragment:Qm,uv2_pars_vertex:eg,uv2_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:rg,backgroundCube_vert:sg,backgroundCube_frag:og,cube_vert:ag,cube_frag:lg,depth_vert:cg,depth_frag:ug,distanceRGBA_vert:hg,distanceRGBA_frag:fg,equirect_vert:dg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:bg,meshnormal_frag:wg,meshphong_vert:Eg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Cg,meshtoon_vert:Lg,meshtoon_frag:Pg,points_vert:Dg,points_frag:Rg,shadow_vert:Fg,shadow_frag:Ig,sprite_vert:Ng,sprite_frag:Og},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},nn={basic:{uniforms:bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bt([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bt([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};nn.physical={uniforms:bt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new de(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function zg(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(d,x){let A=!1,w=x.isScene===!0?x.background:null;w&&w.isTexture&&(w=(x.backgroundBlurriness>0?t:e).get(w));const b=n.xr,T=b.getSession&&b.getSession();T&&T.environmentBlendMode==="additive"&&(w=null),w===null?p(a,l):w&&w.isColor&&(p(w,1),A=!0),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===ws)?(u===void 0&&(u=new Yt(new Ar(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:$i(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,G,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,(h!==w||f!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,m=n.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Yt(new Ts(2,2),new di({name:"BackgroundMaterial",uniforms:$i(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,x){i.buffers.color.setClear(d.r,d.g,d.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(d,x=1){a.set(d),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(a,l)},render:g}}function Ug(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function h(O,ne,se,ie,k){let z=!1;if(o){const H=p(ie,se,ne);c!==H&&(c=H,m(c.object)),z=x(O,ie,se,k),z&&A(O,ie,se,k)}else{const H=ne.wireframe===!0;(c.geometry!==ie.id||c.program!==se.id||c.wireframe!==H)&&(c.geometry=ie.id,c.program=se.id,c.wireframe=H,z=!0)}k!==null&&t.update(k,34963),(z||u)&&(u=!1,v(O,ne,se,ie),k!==null&&n.bindBuffer(34963,t.get(k).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function p(O,ne,se){const ie=se.wireframe===!0;let k=a[O.id];k===void 0&&(k={},a[O.id]=k);let z=k[ne.id];z===void 0&&(z={},k[ne.id]=z);let H=z[ie];return H===void 0&&(H=d(f()),z[ie]=H),H}function d(O){const ne=[],se=[],ie=[];for(let k=0;k<r;k++)ne[k]=0,se[k]=0,ie[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:se,attributeDivisors:ie,object:O,attributes:{},index:null}}function x(O,ne,se,ie){const k=c.attributes,z=ne.attributes;let H=0;const le=se.getAttributes();for(const ae in le)if(le[ae].location>=0){const Se=k[ae];let Pe=z[ae];if(Pe===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(Pe=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(Pe=O.instanceColor)),Se===void 0||Se.attribute!==Pe||Pe&&Se.data!==Pe.data)return!0;H++}return c.attributesNum!==H||c.index!==ie}function A(O,ne,se,ie){const k={},z=ne.attributes;let H=0;const le=se.getAttributes();for(const ae in le)if(le[ae].location>=0){let Se=z[ae];Se===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(Se=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(Se=O.instanceColor));const Pe={};Pe.attribute=Se,Se&&Se.data&&(Pe.data=Se.data),k[ae]=Pe,H++}c.attributes=k,c.attributesNum=H,c.index=ie}function w(){const O=c.newAttributes;for(let ne=0,se=O.length;ne<se;ne++)O[ne]=0}function b(O){T(O,0)}function T(O,ne){const se=c.newAttributes,ie=c.enabledAttributes,k=c.attributeDivisors;se[O]=1,ie[O]===0&&(n.enableVertexAttribArray(O),ie[O]=1),k[O]!==ne&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,ne),k[O]=ne)}function P(){const O=c.newAttributes,ne=c.enabledAttributes;for(let se=0,ie=ne.length;se<ie;se++)ne[se]!==O[se]&&(n.disableVertexAttribArray(se),ne[se]=0)}function G(O,ne,se,ie,k,z){i.isWebGL2===!0&&(se===5124||se===5125)?n.vertexAttribIPointer(O,ne,se,k,z):n.vertexAttribPointer(O,ne,se,ie,k,z)}function v(O,ne,se,ie){if(i.isWebGL2===!1&&(O.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const k=ie.attributes,z=se.getAttributes(),H=ne.defaultAttributeValues;for(const le in z){const ae=z[le];if(ae.location>=0){let ue=k[le];if(ue===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const Se=ue.normalized,Pe=ue.itemSize,$=t.get(ue);if($===void 0)continue;const De=$.buffer,Ee=$.type,Ae=$.bytesPerElement;if(ue.isInterleavedBufferAttribute){const ge=ue.data,Ne=ge.stride,y=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let S=0;S<ae.locationSize;S++)T(ae.location+S,ge.meshPerAttribute);O.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let S=0;S<ae.locationSize;S++)b(ae.location+S);n.bindBuffer(34962,De);for(let S=0;S<ae.locationSize;S++)G(ae.location+S,Pe/ae.locationSize,Ee,Se,Ne*Ae,(y+Pe/ae.locationSize*S)*Ae)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<ae.locationSize;ge++)T(ae.location+ge,ue.meshPerAttribute);O.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<ae.locationSize;ge++)b(ae.location+ge);n.bindBuffer(34962,De);for(let ge=0;ge<ae.locationSize;ge++)G(ae.location+ge,Pe/ae.locationSize,Ee,Se,Pe*Ae,Pe/ae.locationSize*ge*Ae)}}else if(H!==void 0){const Se=H[le];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(ae.location,Se);break;case 3:n.vertexAttrib3fv(ae.location,Se);break;case 4:n.vertexAttrib4fv(ae.location,Se);break;default:n.vertexAttrib1fv(ae.location,Se)}}}}P()}function C(){pe();for(const O in a){const ne=a[O];for(const se in ne){const ie=ne[se];for(const k in ie)g(ie[k].object),delete ie[k];delete ne[se]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const ne=a[O.id];for(const se in ne){const ie=ne[se];for(const k in ie)g(ie[k].object),delete ie[k];delete ne[se]}delete a[O.id]}function K(O){for(const ne in a){const se=a[ne];if(se[O.id]===void 0)continue;const ie=se[O.id];for(const k in ie)g(ie[k].object),delete ie[k];delete se[O.id]}}function pe(){W(),u=!0,c!==l&&(c=l,m(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:pe,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:K,initAttributes:w,enableAttribute:b,disableUnusedAttributes:P}}function Bg(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Gg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(G){if(G==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";G="mediump"}return G==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),x=n.getParameter(36348),A=n.getParameter(36349),w=f>0,b=o||e.has("OES_texture_float"),T=w&&b,P=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:T,maxSamples:P}}function Vg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new $n,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||i!==0||r;return r=f,t=u(h,m,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,p=h.clipIntersection,d=h.clipShadows,x=n.get(h);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const A=s?0:i,w=A*4;let b=x.clippingState||null;l.value=b,b=u(g,f,w,m);for(let T=0;T!==w;++T)b[T]=t[T];x.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,g){const p=h!==null?h.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const x=m+p*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(d===null||d.length<x)&&(d=new Float32Array(x));for(let w=0,b=m;w!==p;++w,b+=4)o.copy(h[w]).applyMatrix4(A,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function kg(n){let e=new WeakMap;function t(o,a){return a===ko?o.mapping=ji:a===Ho&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ko||a===Ho)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new t0(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wu extends Vu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,Yl=[.125,.215,.35,.446,.526,.582],ti=20,_o=new Wu,$l=new Ye;let xo=null;const Jn=(1+Math.sqrt(5))/2,Ri=1/Jn,Jl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Jn,Ri),new F(0,Jn,-Ri),new F(Ri,0,Jn),new F(-Ri,0,Jn),new F(Jn,Ri,0),new F(-Jn,Ri,0)];class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo),e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:yr,format:jt,encoding:ui,depthBuffer:!1},r=Ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(s)),this._blurMaterial=Wg(s,e,t)}return r}_compileMaterial(e){const t=new Yt(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,i,r){const a=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($l),u.toneMapping=vn,u.autoClear=!1;const m=new wa({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new Yt(new Ar,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy($l),p=!0);for(let x=0;x<6;x++){const A=x%3;A===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):A===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const w=this._cubeSize;Kr(r,A*w,x>2?w:0,w,w),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jl[(r-1)%Jl.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Yt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ti-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):ti;d>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ti}`);const x=[];let A=0;for(let G=0;G<ti;++G){const v=G/p,C=Math.exp(-v*v/2);x.push(C),G===0?A+=C:G<d&&(A+=2*C)}for(let G=0;G<x.length;G++)x[G]=x[G]/A;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=x,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const b=this._sizeLods[r],T=3*b*(r>w-Ni?r-w+Ni:0),P=4*(this._cubeSize-b);Kr(t,T,P,3*b,2*b),l.setRenderTarget(t),l.render(h,_o)}}function Hg(n){const e=[],t=[],i=[];let r=n;const s=n-Ni+1+Yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ni?l=Yl[o-n+Ni-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,d=2,x=1,A=new Float32Array(p*g*m),w=new Float32Array(d*g*m),b=new Float32Array(x*g*m);for(let P=0;P<m;P++){const G=P%3*2/3-1,v=P>2?0:-1,C=[G,v,0,G+2/3,v,0,G+2/3,v+1,0,G,v,0,G+2/3,v+1,0,G,v+1,0];A.set(C,p*g*P),w.set(f,d*g*P);const I=[P,P,P,P,P,P];b.set(I,x*g*P)}const T=new Gn;T.setAttribute("position",new on(A,p)),T.setAttribute("uv",new on(w,d)),T.setAttribute("faceIndex",new on(b,x)),e.push(T),r>Ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ql(n,e,t){const i=new hi(n,e,t);return i.texture.mapping=ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Wg(n,e,t){const i=new Float32Array(ti),r=new F(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ec(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ta(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ko||l===Ho,u=l===ji||l===Zi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Kl(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Kl(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function qg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jg(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let d=0,x=p.length;d<x;d++)e.update(p[d],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const A=m.array;p=m.version;for(let w=0,b=A.length;w<b;w+=3){const T=A[w+0],P=A[w+1],G=A[w+2];f.push(T,P,P,G,G,T)}}else{const A=g.array;p=g.version;for(let w=0,b=A.length/3-1;w<b;w+=3){const T=w+0,P=w+1,G=w+2;f.push(T,P,P,G,G,T)}}const d=new(Fu(f)?Gu:Bu)(f,1);d.version=p;const x=s.get(h);x&&e.remove(x),s.set(h,d)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zg(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,f*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Yg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $g(n,e){return n[0]-e[0]}function Jg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Kg(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let x=s.get(u);if(x===void 0||x.count!==d){let se=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",se)};var g=se;x!==void 0&&x.texture.dispose();const b=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,G=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let I=0;b===!0&&(I=1),T===!0&&(I=2),P===!0&&(I=3);let K=u.attributes.position.count*I,pe=1;K>e.maxTextureSize&&(pe=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const W=new Float32Array(K*pe*4*d),O=new zu(W,K,pe,d);O.type=ii,O.needsUpdate=!0;const ne=I*4;for(let ie=0;ie<d;ie++){const k=G[ie],z=v[ie],H=C[ie],le=K*pe*4*ie;for(let ae=0;ae<k.count;ae++){const ue=ae*ne;b===!0&&(o.fromBufferAttribute(k,ae),W[le+ue+0]=o.x,W[le+ue+1]=o.y,W[le+ue+2]=o.z,W[le+ue+3]=0),T===!0&&(o.fromBufferAttribute(z,ae),W[le+ue+4]=o.x,W[le+ue+5]=o.y,W[le+ue+6]=o.z,W[le+ue+7]=0),P===!0&&(o.fromBufferAttribute(H,ae),W[le+ue+8]=o.x,W[le+ue+9]=o.y,W[le+ue+10]=o.z,W[le+ue+11]=H.itemSize===4?o.w:1)}}x={count:d,texture:O,size:new de(K,pe)},s.set(u,x),u.addEventListener("dispose",se)}let A=0;for(let b=0;b<m.length;b++)A+=m[b];const w=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(n,"morphTargetBaseInfluence",w),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let T=0;T<p;T++)d[T]=[T,0];i[u.id]=d}for(let T=0;T<p;T++){const P=d[T];P[0]=T,P[1]=m[T]}d.sort(Jg);for(let T=0;T<8;T++)T<p&&d[T][1]?(a[T][0]=d[T][0],a[T][1]=d[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort($g);const x=u.morphAttributes.position,A=u.morphAttributes.normal;let w=0;for(let T=0;T<8;T++){const P=a[T],G=P[0],v=P[1];G!==Number.MAX_SAFE_INTEGER&&v?(x&&u.getAttribute("morphTarget"+T)!==x[G]&&u.setAttribute("morphTarget"+T,x[G]),A&&u.getAttribute("morphNormal"+T)!==A[G]&&u.setAttribute("morphNormal"+T,A[G]),r[T]=v,w+=v):(x&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),A&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const b=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Qg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Xu=new Jt,qu=new zu,ju=new Up,Zu=new ku,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),oc=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function at(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function As(n,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2fv(this.addr,e),at(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;n.uniform3fv(this.addr,e),at(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4fv(this.addr,e),at(t,e)}}function r1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;oc.set(i),n.uniformMatrix2fv(this.addr,!1,oc),at(t,i)}}function s1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),at(t,i)}}function o1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;rc.set(i),n.uniformMatrix4fv(this.addr,!1,rc),at(t,i)}}function a1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2iv(this.addr,e),at(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;n.uniform3iv(this.addr,e),at(t,e)}}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4iv(this.addr,e),at(t,e)}}function h1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2uiv(this.addr,e),at(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;n.uniform3uiv(this.addr,e),at(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4uiv(this.addr,e),at(t,e)}}function m1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Xu,r)}function g1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ju,r)}function _1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zu,r)}function x1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||qu,r)}function v1(n){switch(n){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return h1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}function y1(n,e){n.uniform1fv(this.addr,e)}function M1(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function S1(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function b1(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function w1(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function E1(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function T1(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A1(n,e){n.uniform1iv(this.addr,e)}function C1(n,e){n.uniform2iv(this.addr,e)}function L1(n,e){n.uniform3iv(this.addr,e)}function P1(n,e){n.uniform4iv(this.addr,e)}function D1(n,e){n.uniform1uiv(this.addr,e)}function R1(n,e){n.uniform2uiv(this.addr,e)}function F1(n,e){n.uniform3uiv(this.addr,e)}function I1(n,e){n.uniform4uiv(this.addr,e)}function N1(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Xu,s[o])}function O1(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ju,s[o])}function z1(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zu,s[o])}function U1(n,e,t){const i=this.cache,r=e.length,s=As(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||qu,s[o])}function B1(n){switch(n){case 5126:return y1;case 35664:return M1;case 35665:return S1;case 35666:return b1;case 35674:return w1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return L1;case 35669:case 35673:return P1;case 5125:return D1;case 36294:return R1;case 36295:return F1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return U1}}class G1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=v1(t.type)}}class V1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=B1(t.type)}}class k1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ac(n,e){n.seq.push(e),n.map[e.id]=e}function H1(n,e,t){const i=n.name,r=i.length;for(vo.lastIndex=0;;){const s=vo.exec(i),o=vo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ac(t,c===void 0?new G1(a,n,e):new V1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new k1(a),ac(t,h)),t=h}}}class as{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);H1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let W1=0;function X1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function q1(n){switch(n){case ui:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function cc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+X1(n.getShaderSource(e),o)}else return r}function j1(n,e){const t=q1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Z1(n,e){let t;switch(e){case hp:t="Linear";break;case fp:t="Reinhard";break;case dp:t="OptimizedCineon";break;case pp:t="ACESFilmic";break;case mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y1(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function $1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J1(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cr(n){return n!==""}function uc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(n){return n.replace(K1,Q1)}function Q1(n,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zo(t)}const e3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace(e3,t3)}function t3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function n3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function i3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Zi:e="ENVMAP_TYPE_CUBE";break;case ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function s3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case up:e="ENVMAP_BLENDING_ADD";break}return e}function o3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function a3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=n3(t),c=i3(t),u=r3(t),h=s3(t),f=o3(t),m=t.isWebGL2?"":Y1(t),g=$1(s),p=r.createProgram();let d,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(cr).join(`
`),d.length>0&&(d+=`
`),x=[m,g].filter(cr).join(`
`),x.length>0&&(x+=`
`)):(d=[dc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),x=[m,dc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?ze.tonemapping_pars_fragment:"",t.toneMapping!==vn?Z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,j1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=Zo(o),o=uc(o,t),o=hc(o,t),a=Zo(a),a=uc(a,t),a=hc(a,t),o=fc(o),a=fc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=A+d+o,b=A+x+a,T=lc(r,35633,w),P=lc(r,35632,b);if(r.attachShader(p,T),r.attachShader(p,P),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(T).trim(),K=r.getShaderInfoLog(P).trim();let pe=!0,W=!0;if(r.getProgramParameter(p,35714)===!1){pe=!1;const O=cc(r,T,"vertex"),ne=cc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+O+`
`+ne)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||K==="")&&(W=!1);W&&(this.diagnostics={runnable:pe,programLog:C,vertexShader:{log:I,prefix:d},fragmentShader:{log:K,prefix:x}})}r.deleteShader(T),r.deleteShader(P);let G;this.getUniforms=function(){return G===void 0&&(G=new as(r,p)),G};let v;return this.getAttributes=function(){return v===void 0&&(v=J1(r,p)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=P,this}let l3=0;class c3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u3(e),t.set(e,i)),i}}class u3{constructor(e){this.id=l3++,this.code=e,this.usedTimes=0}}function h3(n,e,t,i,r,s,o){const a=new Uu,l=new c3,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,C,I,K,pe){const W=K.fog,O=pe.geometry,ne=v.isMeshStandardMaterial?K.environment:null,se=(v.isMeshStandardMaterial?t:e).get(v.envMap||ne),ie=!!se&&se.mapping===ws?se.image.height:null,k=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,H=z!==void 0?z.length:0;let le=0;O.morphAttributes.position!==void 0&&(le=1),O.morphAttributes.normal!==void 0&&(le=2),O.morphAttributes.color!==void 0&&(le=3);let ae,ue,Se,Pe;if(k){const Ne=nn[k];ae=Ne.vertexShader,ue=Ne.fragmentShader}else ae=v.vertexShader,ue=v.fragmentShader,l.update(v),Se=l.getVertexShaderID(v),Pe=l.getFragmentShaderID(v);const $=n.getRenderTarget(),De=v.alphaTest>0,Ee=v.clearcoat>0,Ae=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:ae,fragmentShader:ue,defines:v.defines,customVertexShaderID:Se,customFragmentShaderID:Pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?n.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:ui,map:!!v.map,matcap:!!v.matcap,envMap:!!se,envMapMode:se&&se.mapping,envMapCubeUVHeight:ie,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ip,tangentSpaceNormalMap:v.normalMapType===Ru,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===et,clearcoat:Ee,clearcoatMap:Ee&&!!v.clearcoatMap,clearcoatRoughnessMap:Ee&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!v.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!v.iridescenceMap,iridescenceThicknessMap:Ae&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Vi,alphaMap:!!v.alphaMap,alphaTest:De,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!W,useFog:v.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:pe.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:vn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===Bt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)C.push(I),C.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(C,v),A(C,v),C.push(n.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function x(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function A(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),v.push(a.mask)}function w(v){const C=g[v.type];let I;if(C){const K=nn[C];I=Jp.clone(K.uniforms)}else I=v.uniforms;return I}function b(v,C){let I;for(let K=0,pe=c.length;K<pe;K++){const W=c[K];if(W.cacheKey===C){I=W,++I.usedTimes;break}}return I===void 0&&(I=new a3(n,C,v,s),c.push(I)),I}function T(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:w,acquireProgram:b,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:G}}function f3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function d3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,g,p,d){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:d},n[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=p,x.group=d),e++,x}function a(h,f,m,g,p,d){const x=o(h,f,m,g,p,d);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function l(h,f,m,g,p,d){const x=o(h,f,m,g,p,d);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function c(h,f){t.length>1&&t.sort(h||d3),i.length>1&&i.sort(f||pc),r.length>1&&r.sort(f||pc)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function p3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mc,n.set(i,[o])):r>=s.length?(o=new mc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function m3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function g3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _3=0;function x3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function v3(n,e){const t=new m3,i=g3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new rt,a=new rt;function l(u,h){let f=0,m=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let p=0,d=0,x=0,A=0,w=0,b=0,T=0,P=0,G=0,v=0;u.sort(x3);const C=h!==!0?Math.PI:1;for(let K=0,pe=u.length;K<pe;K++){const W=u[K],O=W.color,ne=W.intensity,se=W.distance,ie=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)f+=O.r*ne*C,m+=O.g*ne*C,g+=O.b*ne*C;else if(W.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(W.sh.coefficients[k],ne);else if(W.isDirectionalLight){const k=t.get(W);if(k.color.copy(W.color).multiplyScalar(W.intensity*C),W.castShadow){const z=W.shadow,H=i.get(W);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.directionalShadow[p]=H,r.directionalShadowMap[p]=ie,r.directionalShadowMatrix[p]=W.shadow.matrix,b++}r.directional[p]=k,p++}else if(W.isSpotLight){const k=t.get(W);k.position.setFromMatrixPosition(W.matrixWorld),k.color.copy(O).multiplyScalar(ne*C),k.distance=se,k.coneCos=Math.cos(W.angle),k.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),k.decay=W.decay,r.spot[x]=k;const z=W.shadow;if(W.map&&(r.spotLightMap[G]=W.map,G++,z.updateMatrices(W),W.castShadow&&v++),r.spotLightMatrix[x]=z.matrix,W.castShadow){const H=i.get(W);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,r.spotShadow[x]=H,r.spotShadowMap[x]=ie,P++}x++}else if(W.isRectAreaLight){const k=t.get(W);k.color.copy(O).multiplyScalar(ne),k.halfWidth.set(W.width*.5,0,0),k.halfHeight.set(0,W.height*.5,0),r.rectArea[A]=k,A++}else if(W.isPointLight){const k=t.get(W);if(k.color.copy(W.color).multiplyScalar(W.intensity*C),k.distance=W.distance,k.decay=W.decay,W.castShadow){const z=W.shadow,H=i.get(W);H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,r.pointShadow[d]=H,r.pointShadowMap[d]=ie,r.pointShadowMatrix[d]=W.shadow.matrix,T++}r.point[d]=k,d++}else if(W.isHemisphereLight){const k=t.get(W);k.skyColor.copy(W.color).multiplyScalar(ne*C),k.groundColor.copy(W.groundColor).multiplyScalar(ne*C),r.hemi[w]=k,w++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==p||I.pointLength!==d||I.spotLength!==x||I.rectAreaLength!==A||I.hemiLength!==w||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==P||I.numSpotMaps!==G)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=A,r.point.length=d,r.hemi.length=w,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=P+G-v,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=v,I.directionalLength=p,I.pointLength=d,I.spotLength=x,I.rectAreaLength=A,I.hemiLength=w,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=P,I.numSpotMaps=G,r.version=_3++)}function c(u,h){let f=0,m=0,g=0,p=0,d=0;const x=h.matrixWorldInverse;for(let A=0,w=u.length;A<w;A++){const b=u[A];if(b.isDirectionalLight){const T=r.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),f++}else if(b.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),g++}else if(b.isRectAreaLight){const T=r.rectArea[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(x),a.identity(),o.copy(b.matrixWorld),o.premultiply(x),a.extractRotation(o),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(x),m++}else if(b.isHemisphereLight){const T=r.hemi[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:r}}function gc(n,e){const t=new v3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function y3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gc(n,e),t.set(s,[l])):o>=a.length?(l=new gc(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class M3 extends Tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S3 extends Tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E3(n,e,t){let i=new Ea;const r=new de,s=new de,o=new ht,a=new M3({depthPacking:Fp}),l=new S3,c={},u=t.maxTextureSize,h={0:Bt,1:qi,2:Fn},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:b3,fragmentShader:w3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Yt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu,this.render=function(b,T,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const G=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(zn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let K=0,pe=b.length;K<pe;K++){const W=b[K],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ne=O.getFrameExtents();if(r.multiply(ne),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,O.mapSize.y=s.y)),O.map===null){const ie=this.type!==lr?{minFilter:Et,magFilter:Et}:{};O.map=new hi(r.x,r.y,ie),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const se=O.getViewportCount();for(let ie=0;ie<se;ie++){const k=O.getViewport(ie);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(o),O.updateMatrices(W,ie),i=O.getFrustum(),w(T,P,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===lr&&x(O,P),O.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(G,v,C)};function x(b,T){const P=e.update(p);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(T,null,P,m,p,null)}function A(b,T,P,G,v,C){let I=null;const K=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(K!==void 0?I=K:I=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const pe=I.uuid,W=T.uuid;let O=c[pe];O===void 0&&(O={},c[pe]=O);let ne=O[W];ne===void 0&&(ne=I.clone(),O[W]=ne),I=ne}return I.visible=T.visible,I.wireframe=T.wireframe,C===lr?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:h[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaTest,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,P.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(P.matrixWorld),I.nearDistance=G,I.farDistance=v),I}function w(b,T,P,G,v){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===lr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const K=e.update(b),pe=b.material;if(Array.isArray(pe)){const W=K.groups;for(let O=0,ne=W.length;O<ne;O++){const se=W[O],ie=pe[se.materialIndex];if(ie&&ie.visible){const k=A(b,ie,G,P.near,P.far,v);n.renderBufferDirect(P,null,K,k,b,se)}}}else if(pe.visible){const W=A(b,pe,G,P.near,P.far,v);n.renderBufferDirect(P,null,K,W,b,null)}}const I=b.children;for(let K=0,pe=I.length;K<pe;K++)w(I[K],T,P,G,v)}}function T3(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const ee=new ht;let fe=null;const ye=new ht(0,0,0,0);return{setMask:function(we){fe!==we&&!R&&(n.colorMask(we,we,we,we),fe=we)},setLocked:function(we){R=we},setClear:function(we,We,ct,pt,Vn){Vn===!0&&(we*=pt,We*=pt,ct*=pt),ee.set(we,We,ct,pt),ye.equals(ee)===!1&&(n.clearColor(we,We,ct,pt),ye.copy(ee))},reset:function(){R=!1,fe=null,ye.set(-1,0,0,0)}}}function s(){let R=!1,ee=null,fe=null,ye=null;return{setTest:function(we){we?De(2929):Ee(2929)},setMask:function(we){ee!==we&&!R&&(n.depthMask(we),ee=we)},setFunc:function(we){if(fe!==we){switch(we){case np:n.depthFunc(512);break;case ip:n.depthFunc(519);break;case rp:n.depthFunc(513);break;case Vo:n.depthFunc(515);break;case sp:n.depthFunc(514);break;case op:n.depthFunc(518);break;case ap:n.depthFunc(516);break;case lp:n.depthFunc(517);break;default:n.depthFunc(515)}fe=we}},setLocked:function(we){R=we},setClear:function(we){ye!==we&&(n.clearDepth(we),ye=we)},reset:function(){R=!1,ee=null,fe=null,ye=null}}}function o(){let R=!1,ee=null,fe=null,ye=null,we=null,We=null,ct=null,pt=null,Vn=null;return{setTest:function($e){R||($e?De(2960):Ee(2960))},setMask:function($e){ee!==$e&&!R&&(n.stencilMask($e),ee=$e)},setFunc:function($e,ln,Dt){(fe!==$e||ye!==ln||we!==Dt)&&(n.stencilFunc($e,ln,Dt),fe=$e,ye=ln,we=Dt)},setOp:function($e,ln,Dt){(We!==$e||ct!==ln||pt!==Dt)&&(n.stencilOp($e,ln,Dt),We=$e,ct=ln,pt=Dt)},setLocked:function($e){R=$e},setClear:function($e){Vn!==$e&&(n.clearStencil($e),Vn=$e)},reset:function(){R=!1,ee=null,fe=null,ye=null,we=null,We=null,ct=null,pt=null,Vn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,p=[],d=null,x=!1,A=null,w=null,b=null,T=null,P=null,G=null,v=null,C=!1,I=null,K=null,pe=null,W=null,O=null;const ne=n.getParameter(35661);let se=!1,ie=0;const k=n.getParameter(7938);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=ie>=2);let z=null,H={};const le=n.getParameter(3088),ae=n.getParameter(2978),ue=new ht().fromArray(le),Se=new ht().fromArray(ae);function Pe(R,ee,fe){const ye=new Uint8Array(4),we=n.createTexture();n.bindTexture(R,we),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let We=0;We<fe;We++)n.texImage2D(ee+We,0,6408,1,1,0,6408,5121,ye);return we}const $={};$[3553]=Pe(3553,3553,1),$[34067]=Pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(Vo),N(!1),Z(ol),De(2884),L(zn);function De(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function Ee(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function Ae(R,ee){return m[R]!==ee?(n.bindFramebuffer(R,ee),m[R]=ee,i&&(R===36009&&(m[36160]=ee),R===36160&&(m[36009]=ee)),!0):!1}function ge(R,ee){let fe=p,ye=!1;if(R)if(fe=g.get(ee),fe===void 0&&(fe=[],g.set(ee,fe)),R.isWebGLMultipleRenderTargets){const we=R.texture;if(fe.length!==we.length||fe[0]!==36064){for(let We=0,ct=we.length;We<ct;We++)fe[We]=36064+We;fe.length=we.length,ye=!0}}else fe[0]!==36064&&(fe[0]=36064,ye=!0);else fe[0]!==1029&&(fe[0]=1029,ye=!0);ye&&(t.isWebGL2?n.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Ne(R){return d!==R?(n.useProgram(R),d=R,!0):!1}const y={[Fi]:32774,[Xd]:32778,[qd]:32779};if(i)y[ul]=32775,y[hl]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(y[ul]=R.MIN_EXT,y[hl]=R.MAX_EXT)}const S={[jd]:0,[Zd]:1,[Yd]:768,[Cu]:770,[tp]:776,[Qd]:774,[Jd]:772,[$d]:769,[Lu]:771,[ep]:775,[Kd]:773};function L(R,ee,fe,ye,we,We,ct,pt){if(R===zn){x===!0&&(Ee(3042),x=!1);return}if(x===!1&&(De(3042),x=!0),R!==Wd){if(R!==A||pt!==C){if((w!==Fi||P!==Fi)&&(n.blendEquation(32774),w=Fi,P=Fi),pt)switch(R){case Vi:n.blendFuncSeparate(1,771,1,771);break;case al:n.blendFunc(1,1);break;case ll:n.blendFuncSeparate(0,769,0,1);break;case cl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Vi:n.blendFuncSeparate(770,771,1,771);break;case al:n.blendFunc(770,1);break;case ll:n.blendFuncSeparate(0,769,0,1);break;case cl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,T=null,G=null,v=null,A=R,C=pt}return}we=we||ee,We=We||fe,ct=ct||ye,(ee!==w||we!==P)&&(n.blendEquationSeparate(y[ee],y[we]),w=ee,P=we),(fe!==b||ye!==T||We!==G||ct!==v)&&(n.blendFuncSeparate(S[fe],S[ye],S[We],S[ct]),b=fe,T=ye,G=We,v=ct),A=R,C=null}function U(R,ee){R.side===Fn?Ee(2884):De(2884);let fe=R.side===Bt;ee&&(fe=!fe),N(fe),R.blending===Vi&&R.transparent===!1?L(zn):L(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ye=R.stencilWrite;c.setTest(ye),ye&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),X(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?De(32926):Ee(32926)}function N(R){I!==R&&(R?n.frontFace(2304):n.frontFace(2305),I=R)}function Z(R){R!==kd?(De(2884),R!==K&&(R===ol?n.cullFace(1029):R===Hd?n.cullFace(1028):n.cullFace(1032))):Ee(2884),K=R}function te(R){R!==pe&&(se&&n.lineWidth(R),pe=R)}function X(R,ee,fe){R?(De(32823),(W!==ee||O!==fe)&&(n.polygonOffset(ee,fe),W=ee,O=fe)):Ee(32823)}function oe(R){R?De(3089):Ee(3089)}function Y(R){R===void 0&&(R=33984+ne-1),z!==R&&(n.activeTexture(R),z=R)}function M(R,ee,fe){fe===void 0&&(z===null?fe=33984+ne-1:fe=z);let ye=H[fe];ye===void 0&&(ye={type:void 0,texture:void 0},H[fe]=ye),(ye.type!==R||ye.texture!==ee)&&(z!==fe&&(n.activeTexture(fe),z=fe),n.bindTexture(R,ee||$[R]),ye.type=R,ye.texture=ee)}function _(){const R=H[z];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function D(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(R){ue.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),ue.copy(R))}function ve(R){Se.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Se.copy(R))}function Re(R,ee){let fe=h.get(ee);fe===void 0&&(fe=new WeakMap,h.set(ee,fe));let ye=fe.get(R);ye===void 0&&(ye=n.getUniformBlockIndex(ee,R.name),fe.set(R,ye))}function je(R,ee){const ye=h.get(ee).get(R);u.get(R)!==ye&&(n.uniformBlockBinding(ee,ye,R.__bindingPointIndex),u.set(R,ye))}function lt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},z=null,H={},m={},g=new WeakMap,p=[],d=null,x=!1,A=null,w=null,b=null,T=null,P=null,G=null,v=null,C=!1,I=null,K=null,pe=null,W=null,O=null,ue.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:Ee,bindFramebuffer:Ae,drawBuffers:ge,useProgram:Ne,setBlending:L,setMaterial:U,setFlipSided:N,setCullFace:Z,setLineWidth:te,setPolygonOffset:X,setScissorTest:oe,activeTexture:Y,bindTexture:M,unbindTexture:_,compressedTexImage2D:D,compressedTexImage3D:q,texImage2D:Le,texImage3D:Me,updateUBOMapping:Re,uniformBlockBinding:je,texStorage2D:j,texStorage3D:be,texSubImage2D:Q,texSubImage3D:ce,compressedTexSubImage2D:_e,compressedTexSubImage3D:he,scissor:Te,viewport:ve,reset:lt}}function A3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(M,_){return x?new OffscreenCanvas(M,_):ds("canvas")}function w(M,_,D,q){let Q=1;if((M.width>q||M.height>q)&&(Q=q/Math.max(M.width,M.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ce=_?jo:Math.floor,_e=ce(Q*M.width),he=ce(Q*M.height);p===void 0&&(p=A(_e,he));const j=D?A(_e,he):p;return j.width=_e,j.height=he,j.getContext("2d").drawImage(M,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+he+")."),j}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function b(M){return Ul(M.width)&&Ul(M.height)}function T(M){return a?!1:M.wrapS!==qt||M.wrapT!==qt||M.minFilter!==Et&&M.minFilter!==Nt}function P(M,_){return M.generateMipmaps&&_&&M.minFilter!==Et&&M.minFilter!==Nt}function G(M){n.generateMipmap(M)}function v(M,_,D,q,Q=!1){if(a===!1)return _;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ce=_;return _===6403&&(D===5126&&(ce=33326),D===5131&&(ce=33325),D===5121&&(ce=33321)),_===33319&&(D===5126&&(ce=33328),D===5131&&(ce=33327),D===5121&&(ce=33323)),_===6408&&(D===5126&&(ce=34836),D===5131&&(ce=34842),D===5121&&(ce=q===et&&Q===!1?35907:32856),D===32819&&(ce=32854),D===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function C(M,_,D){return P(M,D)===!0||M.isFramebufferTexture&&M.minFilter!==Et&&M.minFilter!==Nt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function I(M){return M===Et||M===fl||M===dl?9728:9729}function K(M){const _=M.target;_.removeEventListener("dispose",K),W(_),_.isVideoTexture&&g.delete(_)}function pe(M){const _=M.target;_.removeEventListener("dispose",pe),ne(_)}function W(M){const _=i.get(M);if(_.__webglInit===void 0)return;const D=M.source,q=d.get(D);if(q){const Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(M),Object.keys(q).length===0&&d.delete(D)}i.remove(M)}function O(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const D=M.source,q=d.get(D);delete q[_.__cacheKey],o.memory.textures--}function ne(M){const _=M.texture,D=i.get(M),q=i.get(_);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(D.__webglFramebuffer[Q]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Q=0;Q<D.__webglColorRenderbuffer.length;Q++)D.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[Q]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,ce=_.length;Q<ce;Q++){const _e=i.get(_[Q]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(_[Q])}i.remove(_),i.remove(M)}let se=0;function ie(){se=0}function k(){const M=se;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),se+=1,M}function z(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.encoding),_.join()}function H(M,_){const D=i.get(M);if(M.isVideoTexture&&oe(M),M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){const q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(D,M,_);return}}t.bindTexture(3553,D.__webglTexture,33984+_)}function le(M,_){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ee(D,M,_);return}t.bindTexture(35866,D.__webglTexture,33984+_)}function ae(M,_){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ee(D,M,_);return}t.bindTexture(32879,D.__webglTexture,33984+_)}function ue(M,_){const D=i.get(M);if(M.version>0&&D.__version!==M.version){Ae(D,M,_);return}t.bindTexture(34067,D.__webglTexture,33984+_)}const Se={[Wo]:10497,[qt]:33071,[Xo]:33648},Pe={[Et]:9728,[fl]:9984,[dl]:9986,[Nt]:9729,[gp]:9985,[Es]:9987};function $(M,_,D){if(D?(n.texParameteri(M,10242,Se[_.wrapS]),n.texParameteri(M,10243,Se[_.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,Se[_.wrapR]),n.texParameteri(M,10240,Pe[_.magFilter]),n.texParameteri(M,10241,Pe[_.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(_.wrapS!==qt||_.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,I(_.magFilter)),n.texParameteri(M,10241,I(_.minFilter)),_.minFilter!==Et&&_.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(_.type===ii&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(M,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function De(M,_){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",K));const q=_.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const ce=z(_);if(ce!==M.__cacheKey){Q[ce]===void 0&&(Q[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Q[ce].usedTimes++;const _e=Q[M.__cacheKey];_e!==void 0&&(Q[M.__cacheKey].usedTimes--,_e.usedTimes===0&&O(_)),M.__cacheKey=ce,M.__webglTexture=Q[ce].texture}return D}function Ee(M,_,D){let q=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=35866),_.isData3DTexture&&(q=32879);const Q=De(M,_),ce=_.source;t.bindTexture(q,M.__webglTexture,33984+D);const _e=i.get(ce);if(ce.version!==_e.__version||Q===!0){t.activeTexture(33984+D),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const he=T(_)&&b(_.image)===!1;let j=w(_.image,he,!1,u);j=Y(_,j);const be=b(j)||a,Le=s.convert(_.format,_.encoding);let Me=s.convert(_.type),Te=v(_.internalFormat,Le,Me,_.encoding,_.isVideoTexture);$(q,_,be);let ve;const Re=_.mipmaps,je=a&&_.isVideoTexture!==!0,lt=_e.__version===void 0||Q===!0,R=C(_,j,be);if(_.isDepthTexture)Te=6402,a?_.type===ii?Te=36012:_.type===ni?Te=33190:_.type===ki?Te=35056:Te=33189:_.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ai&&Te===6402&&_.type!==Du&&_.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=ni,Me=s.convert(_.type)),_.format===Yi&&Te===6402&&(Te=34041,_.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ki,Me=s.convert(_.type))),lt&&(je?t.texStorage2D(3553,1,Te,j.width,j.height):t.texImage2D(3553,0,Te,j.width,j.height,0,Le,Me,null));else if(_.isDataTexture)if(Re.length>0&&be){je&&lt&&t.texStorage2D(3553,R,Te,Re[0].width,Re[0].height);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],je?t.texSubImage2D(3553,ee,0,0,ve.width,ve.height,Le,Me,ve.data):t.texImage2D(3553,ee,Te,ve.width,ve.height,0,Le,Me,ve.data);_.generateMipmaps=!1}else je?(lt&&t.texStorage2D(3553,R,Te,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,Le,Me,j.data)):t.texImage2D(3553,0,Te,j.width,j.height,0,Le,Me,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&lt&&t.texStorage3D(35866,R,Te,Re[0].width,Re[0].height,j.depth);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],_.format!==jt?Le!==null?je?t.compressedTexSubImage3D(35866,ee,0,0,0,ve.width,ve.height,j.depth,Le,ve.data,0,0):t.compressedTexImage3D(35866,ee,Te,ve.width,ve.height,j.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,ee,0,0,0,ve.width,ve.height,j.depth,Le,Me,ve.data):t.texImage3D(35866,ee,Te,ve.width,ve.height,j.depth,0,Le,Me,ve.data)}else{je&&lt&&t.texStorage2D(3553,R,Te,Re[0].width,Re[0].height);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],_.format!==jt?Le!==null?je?t.compressedTexSubImage2D(3553,ee,0,0,ve.width,ve.height,Le,ve.data):t.compressedTexImage2D(3553,ee,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,ee,0,0,ve.width,ve.height,Le,Me,ve.data):t.texImage2D(3553,ee,Te,ve.width,ve.height,0,Le,Me,ve.data)}else if(_.isDataArrayTexture)je?(lt&&t.texStorage3D(35866,R,Te,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,Le,Me,j.data)):t.texImage3D(35866,0,Te,j.width,j.height,j.depth,0,Le,Me,j.data);else if(_.isData3DTexture)je?(lt&&t.texStorage3D(32879,R,Te,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,Le,Me,j.data)):t.texImage3D(32879,0,Te,j.width,j.height,j.depth,0,Le,Me,j.data);else if(_.isFramebufferTexture){if(lt)if(je)t.texStorage2D(3553,R,Te,j.width,j.height);else{let ee=j.width,fe=j.height;for(let ye=0;ye<R;ye++)t.texImage2D(3553,ye,Te,ee,fe,0,Le,Me,null),ee>>=1,fe>>=1}}else if(Re.length>0&&be){je&&lt&&t.texStorage2D(3553,R,Te,Re[0].width,Re[0].height);for(let ee=0,fe=Re.length;ee<fe;ee++)ve=Re[ee],je?t.texSubImage2D(3553,ee,0,0,Le,Me,ve):t.texImage2D(3553,ee,Te,Le,Me,ve);_.generateMipmaps=!1}else je?(lt&&t.texStorage2D(3553,R,Te,j.width,j.height),t.texSubImage2D(3553,0,0,0,Le,Me,j)):t.texImage2D(3553,0,Te,Le,Me,j);P(_,be)&&G(q),_e.__version=ce.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ae(M,_,D){if(_.image.length!==6)return;const q=De(M,_),Q=_.source;t.bindTexture(34067,M.__webglTexture,33984+D);const ce=i.get(Q);if(Q.version!==ce.__version||q===!0){t.activeTexture(33984+D),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,j=[];for(let ee=0;ee<6;ee++)!_e&&!he?j[ee]=w(_.image[ee],!1,!0,c):j[ee]=he?_.image[ee].image:_.image[ee],j[ee]=Y(_,j[ee]);const be=j[0],Le=b(be)||a,Me=s.convert(_.format,_.encoding),Te=s.convert(_.type),ve=v(_.internalFormat,Me,Te,_.encoding),Re=a&&_.isVideoTexture!==!0,je=ce.__version===void 0||q===!0;let lt=C(_,be,Le);$(34067,_,Le);let R;if(_e){Re&&je&&t.texStorage2D(34067,lt,ve,be.width,be.height);for(let ee=0;ee<6;ee++){R=j[ee].mipmaps;for(let fe=0;fe<R.length;fe++){const ye=R[fe];_.format!==jt?Me!==null?Re?t.compressedTexSubImage2D(34069+ee,fe,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(34069+ee,fe,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+ee,fe,0,0,ye.width,ye.height,Me,Te,ye.data):t.texImage2D(34069+ee,fe,ve,ye.width,ye.height,0,Me,Te,ye.data)}}}else{R=_.mipmaps,Re&&je&&(R.length>0&&lt++,t.texStorage2D(34067,lt,ve,j[0].width,j[0].height));for(let ee=0;ee<6;ee++)if(he){Re?t.texSubImage2D(34069+ee,0,0,0,j[ee].width,j[ee].height,Me,Te,j[ee].data):t.texImage2D(34069+ee,0,ve,j[ee].width,j[ee].height,0,Me,Te,j[ee].data);for(let fe=0;fe<R.length;fe++){const we=R[fe].image[ee].image;Re?t.texSubImage2D(34069+ee,fe+1,0,0,we.width,we.height,Me,Te,we.data):t.texImage2D(34069+ee,fe+1,ve,we.width,we.height,0,Me,Te,we.data)}}else{Re?t.texSubImage2D(34069+ee,0,0,0,Me,Te,j[ee]):t.texImage2D(34069+ee,0,ve,Me,Te,j[ee]);for(let fe=0;fe<R.length;fe++){const ye=R[fe];Re?t.texSubImage2D(34069+ee,fe+1,0,0,Me,Te,ye.image[ee]):t.texImage2D(34069+ee,fe+1,ve,Me,Te,ye.image[ee])}}}P(_,Le)&&G(34067),ce.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function ge(M,_,D,q,Q){const ce=s.convert(D.format,D.encoding),_e=s.convert(D.type),he=v(D.internalFormat,ce,_e,D.encoding);i.get(_).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,he,_.width,_.height,_.depth,0,ce,_e,null):t.texImage2D(Q,0,he,_.width,_.height,0,ce,_e,null)),t.bindFramebuffer(36160,M),X(_)?f.framebufferTexture2DMultisampleEXT(36160,q,Q,i.get(D).__webglTexture,0,te(_)):(Q===3553||Q>=34069&&Q<=34074)&&n.framebufferTexture2D(36160,q,Q,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(M,_,D){if(n.bindRenderbuffer(36161,M),_.depthBuffer&&!_.stencilBuffer){let q=33189;if(D||X(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ii?q=36012:Q.type===ni&&(q=33190));const ce=te(_);X(_)?f.renderbufferStorageMultisampleEXT(36161,ce,q,_.width,_.height):n.renderbufferStorageMultisample(36161,ce,q,_.width,_.height)}else n.renderbufferStorage(36161,q,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(_.depthBuffer&&_.stencilBuffer){const q=te(_);D&&X(_)===!1?n.renderbufferStorageMultisample(36161,q,35056,_.width,_.height):X(_)?f.renderbufferStorageMultisampleEXT(36161,q,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const q=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<q.length;Q++){const ce=q[Q],_e=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),j=v(ce.internalFormat,_e,he,ce.encoding),be=te(_);D&&X(_)===!1?n.renderbufferStorageMultisample(36161,be,j,_.width,_.height):X(_)?f.renderbufferStorageMultisampleEXT(36161,be,j,_.width,_.height):n.renderbufferStorage(36161,j,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function y(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H(_.depthTexture,0);const q=i.get(_.depthTexture).__webglTexture,Q=te(_);if(_.depthTexture.format===ai)X(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,Q):n.framebufferTexture2D(36160,36096,3553,q,0);else if(_.depthTexture.format===Yi)X(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,Q):n.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function S(M){const _=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");y(_.__webglFramebuffer,M)}else if(D){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=n.createRenderbuffer(),Ne(_.__webglDepthbuffer[q],M,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),Ne(_.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function L(M,_,D){const q=i.get(M);_!==void 0&&ge(q.__webglFramebuffer,M,M.texture,36064,3553),D!==void 0&&S(M)}function U(M){const _=M.texture,D=i.get(M),q=i.get(_);M.addEventListener("dispose",pe),M.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,ce=M.isWebGLMultipleRenderTargets===!0,_e=b(M)||a;if(Q){D.__webglFramebuffer=[];for(let he=0;he<6;he++)D.__webglFramebuffer[he]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const he=M.texture;for(let j=0,be=he.length;j<be;j++){const Le=i.get(he[j]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&X(M)===!1){const he=ce?_:[_];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let j=0;j<he.length;j++){const be=he[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[j]);const Le=s.convert(be.format,be.encoding),Me=s.convert(be.type),Te=v(be.internalFormat,Le,Me,be.encoding,M.isXRRenderTarget===!0),ve=te(M);n.renderbufferStorageMultisample(36161,ve,Te,M.width,M.height),n.framebufferRenderbuffer(36160,36064+j,36161,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,q.__webglTexture),$(34067,_,_e);for(let he=0;he<6;he++)ge(D.__webglFramebuffer[he],M,_,36064,34069+he);P(_,_e)&&G(34067),t.unbindTexture()}else if(ce){const he=M.texture;for(let j=0,be=he.length;j<be;j++){const Le=he[j],Me=i.get(Le);t.bindTexture(3553,Me.__webglTexture),$(3553,Le,_e),ge(D.__webglFramebuffer,M,Le,36064+j,3553),P(Le,_e)&&G(3553)}t.unbindTexture()}else{let he=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?he=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,q.__webglTexture),$(he,_,_e),ge(D.__webglFramebuffer,M,_,36064,he),P(_,_e)&&G(he),t.unbindTexture()}M.depthBuffer&&S(M)}function N(M){const _=b(M)||a,D=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let q=0,Q=D.length;q<Q;q++){const ce=D[q];if(P(ce,_)){const _e=M.isWebGLCubeRenderTarget?34067:3553,he=i.get(ce).__webglTexture;t.bindTexture(_e,he),G(_e),t.unbindTexture()}}}function Z(M){if(a&&M.samples>0&&X(M)===!1){const _=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],D=M.width,q=M.height;let Q=16384;const ce=[],_e=M.stencilBuffer?33306:36096,he=i.get(M),j=M.isWebGLMultipleRenderTargets===!0;if(j)for(let be=0;be<_.length;be++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let be=0;be<_.length;be++){ce.push(36064+be),M.depthBuffer&&ce.push(_e);const Le=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Le===!1&&(M.depthBuffer&&(Q|=256),M.stencilBuffer&&(Q|=1024)),j&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[be]),Le===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),j){const Me=i.get(_[be]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Me,0)}n.blitFramebuffer(0,0,D,q,0,0,D,q,Q,9728),m&&n.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let be=0;be<_.length;be++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+be,36161,he.__webglColorRenderbuffer[be]);const Le=i.get(_[be]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+be,3553,Le,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function te(M){return Math.min(h,M.samples)}function X(M){const _=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function oe(M){const _=o.render.frame;g.get(M)!==_&&(g.set(M,_),M.update())}function Y(M,_){const D=M.encoding,q=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===qo||D!==ui&&(D===et?a===!1?e.has("EXT_sRGB")===!0&&q===jt?(M.format=qo,M.minFilter=Nt,M.generateMipmaps=!1):_=Nu.sRGBToLinear(_):(q!==jt||Q!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),_}this.allocateTextureUnit=k,this.resetTextureUnits=ie,this.setTexture2D=H,this.setTexture2DArray=le,this.setTexture3D=ae,this.setTextureCube=ue,this.rebindTextures=L,this.setupRenderTarget=U,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=X}function C3(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===ci)return 5121;if(s===yp)return 32819;if(s===Mp)return 32820;if(s===_p)return 5120;if(s===xp)return 5122;if(s===Du)return 5123;if(s===vp)return 5124;if(s===ni)return 5125;if(s===ii)return 5126;if(s===yr)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sp)return 6406;if(s===jt)return 6408;if(s===wp)return 6409;if(s===Ep)return 6410;if(s===ai)return 6402;if(s===Yi)return 34041;if(s===Tp)return 6403;if(s===bp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===qo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ap)return 36244;if(s===Cp)return 33319;if(s===Lp)return 33320;if(s===Pp)return 36249;if(s===ks||s===Hs||s===Ws||s===Xs)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pl||s===ml||s===gl||s===_l)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===pl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ml)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xl||s===vl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xl)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yl||s===Ml||s===Sl||s===bl||s===wl||s===El||s===Tl||s===Al||s===Cl||s===Ll||s===Pl||s===Dl||s===Rl||s===Fl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ml)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===El)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Al)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ll)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fl)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Il)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ki?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class L3 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P3={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const A=new Qr;A.matrixAutoUpdate=!1,A.visible=!1,c.joints[p.jointName]=A,c.add(A)}const x=c.joints[p.jointName];d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class D3 extends Jt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ai&&(i=ni),i===void 0&&u===Yi&&(i=ki),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class R3 extends mi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const x=[],A=[],w=new Ot;w.layers.enable(1),w.viewport=new ht;const b=new Ot;b.layers.enable(2),b.viewport=new ht;const T=[w,b],P=new L3;P.layers.enable(1),P.layers.enable(2);let G=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let H=x[z];return H===void 0&&(H=new yo,x[z]=H),H.getTargetRaySpace()},this.getControllerGrip=function(z){let H=x[z];return H===void 0&&(H=new yo,x[z]=H),H.getGripSpace()},this.getHand=function(z){let H=x[z];return H===void 0&&(H=new yo,x[z]=H),H.getHandSpace()};function C(z){const H=A.indexOf(z.inputSource);if(H===-1)return;const le=x[H];le!==void 0&&le.dispatchEvent({type:z.type,data:z.inputSource})}function I(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",K);for(let z=0;z<x.length;z++){const H=A[z];H!==null&&(A[z]=null,x[z].disconnect(H))}G=null,v=null,e.setRenderTarget(p),f=null,h=null,u=null,r=null,d=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",I),r.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:f}),d=new hi(f.framebufferWidth,f.framebufferHeight,{format:jt,type:ci,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let H=null,le=null,ae=null;g.depth&&(ae=g.stencil?35056:33190,H=g.stencil?Yi:ai,le=g.stencil?ki:ni);const ue={colorFormat:32856,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),d=new hi(h.textureWidth,h.textureHeight,{format:jt,type:ci,depthTexture:new D3(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Se=e.properties.get(d);Se.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function K(z){for(let H=0;H<z.removed.length;H++){const le=z.removed[H],ae=A.indexOf(le);ae>=0&&(A[ae]=null,x[ae].dispatchEvent({type:"disconnected",data:le}))}for(let H=0;H<z.added.length;H++){const le=z.added[H];let ae=A.indexOf(le);if(ae===-1){for(let Se=0;Se<x.length;Se++)if(Se>=A.length){A.push(le),ae=Se;break}else if(A[Se]===null){A[Se]=le,ae=Se;break}if(ae===-1)break}const ue=x[ae];ue&&ue.dispatchEvent({type:"connected",data:le})}}const pe=new F,W=new F;function O(z,H,le){pe.setFromMatrixPosition(H.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const ae=pe.distanceTo(W),ue=H.projectionMatrix.elements,Se=le.projectionMatrix.elements,Pe=ue[14]/(ue[10]-1),$=ue[14]/(ue[10]+1),De=(ue[9]+1)/ue[5],Ee=(ue[9]-1)/ue[5],Ae=(ue[8]-1)/ue[0],ge=(Se[8]+1)/Se[0],Ne=Pe*Ae,y=Pe*ge,S=ae/(-Ae+ge),L=S*-Ae;H.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(L),z.translateZ(S),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const U=Pe+S,N=$+S,Z=Ne-L,te=y+(ae-L),X=De*$/N*U,oe=Ee*$/N*U;z.projectionMatrix.makePerspective(Z,te,X,oe,U,N)}function ne(z,H){H===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(H.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;P.near=b.near=w.near=z.near,P.far=b.far=w.far=z.far,(G!==P.near||v!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),G=P.near,v=P.far);const H=z.parent,le=P.cameras;ne(P,H);for(let ue=0;ue<le.length;ue++)ne(le[ue],H);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),z.matrix.copy(P.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ae=z.children;for(let ue=0,Se=ae.length;ue<Se;ue++)ae[ue].updateMatrixWorld(!0);le.length===2?O(P,w,b):P.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let se=null;function ie(z,H){if(c=H.getViewerPose(l||o),m=H,c!==null){const le=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let ae=!1;le.length!==P.cameras.length&&(P.cameras.length=0,ae=!0);for(let ue=0;ue<le.length;ue++){const Se=le[ue];let Pe=null;if(f!==null)Pe=f.getViewport(Se);else{const De=u.getViewSubImage(h,Se);Pe=De.viewport,ue===0&&(e.setRenderTargetTextures(d,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let $=T[ue];$===void 0&&($=new Ot,$.layers.enable(ue),$.viewport=new ht,T[ue]=$),$.matrix.fromArray(Se.transform.matrix),$.projectionMatrix.fromArray(Se.projectionMatrix),$.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ue===0&&P.matrix.copy($.matrix),ae===!0&&P.cameras.push($)}}for(let le=0;le<x.length;le++){const ae=A[le],ue=x[le];ae!==null&&ue!==void 0&&ue.update(ae,H,l||o)}se&&se(z,H),m=null}const k=new Hu;k.setAnimationLoop(ie),this.setAnimationLoop=function(z){se=z},this.dispose=function(){}}}function F3(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,x,A,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,x,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Bt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Bt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let A;d.map?A=d.map:d.specularMap?A=d.specularMap:d.displacementMap?A=d.displacementMap:d.normalMap?A=d.normalMap:d.bumpMap?A=d.bumpMap:d.roughnessMap?A=d.roughnessMap:d.metalnessMap?A=d.metalnessMap:d.alphaMap?A=d.alphaMap:d.emissiveMap?A=d.emissiveMap:d.clearcoatMap?A=d.clearcoatMap:d.clearcoatNormalMap?A=d.clearcoatNormalMap:d.clearcoatRoughnessMap?A=d.clearcoatRoughnessMap:d.iridescenceMap?A=d.iridescenceMap:d.iridescenceThicknessMap?A=d.iridescenceThicknessMap:d.specularIntensityMap?A=d.specularIntensityMap:d.specularColorMap?A=d.specularColorMap:d.transmissionMap?A=d.transmissionMap:d.thicknessMap?A=d.thicknessMap:d.sheenColorMap?A=d.sheenColorMap:d.sheenRoughnessMap&&(A=d.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix));let w;d.aoMap?w=d.aoMap:d.lightMap&&(w=d.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,x,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=A*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let w;d.map?w=d.map:d.alphaMap&&(w=d.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function I3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(A,w){const b=w.program;i.uniformBlockBinding(A,b)}function c(A,w){let b=r[A.id];b===void 0&&(g(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",d));const T=w.program;i.updateUBOMapping(A,T);const P=e.render.frame;s[A.id]!==P&&(f(A),s[A.id]=P)}function u(A){const w=h();A.__bindingPointIndex=w;const b=n.createBuffer(),T=A.__size,P=A.usage;return n.bindBuffer(35345,b),n.bufferData(35345,T,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,w,b),b}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const w=r[A.id],b=A.uniforms,T=A.__cache;n.bindBuffer(35345,w);for(let P=0,G=b.length;P<G;P++){const v=b[P];if(m(v,P,T)===!0){const C=v.value,I=v.__offset;typeof C=="number"?(v.__data[0]=C,n.bufferSubData(35345,I,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):C.toArray(v.__data),n.bufferSubData(35345,I,v.__data))}}n.bindBuffer(35345,null)}function m(A,w,b){const T=A.value;if(b[w]===void 0)return typeof T=="number"?b[w]=T:b[w]=T.clone(),!0;if(typeof T=="number"){if(b[w]!==T)return b[w]=T,!0}else{const P=b[w];if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(A){const w=A.uniforms;let b=0;const T=16;let P=0;for(let G=0,v=w.length;G<v;G++){const C=w[G],I=p(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,G>0){P=b%T;const K=T-P;P!==0&&K-I.boundary<0&&(b+=T-P,C.__offset=b)}b+=I.storage}return P=b%T,P>0&&(b+=T-P),A.__size=b,A.__cache={},this}function p(A){const w=A.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function d(A){const w=A.target;w.removeEventListener("dispose",d);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function x(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:x}}function N3(){const n=ds("canvas");return n.style.display="block",n}function Yu(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:N3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,x=0,A=0,w=null,b=-1,T=null;const P=new ht,G=new ht;let v=null,C=e.width,I=e.height,K=1,pe=null,W=null;const O=new ht(0,0,C,I),ne=new ht(0,0,C,I);let se=!1;const ie=new Ea;let k=!1,z=!1,H=null;const le=new rt,ae=new de,ue=new F,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return w===null?K:1}let $=t;function De(E,V){for(let J=0;J<E.length;J++){const B=E[J],re=e.getContext(B,V);if(re!==null)return re}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ma}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Re,!1),$===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),$=De(V,E),$===null)throw De(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,Ae,ge,Ne,y,S,L,U,N,Z,te,X,oe,Y,M,_,D,q,Q,ce,_e,he,j,be;function Le(){Ee=new qg($),Ae=new Gg($,Ee,n),Ee.init(Ae),he=new C3($,Ee,Ae),ge=new T3($,Ee,Ae),Ne=new Yg,y=new f3,S=new A3($,Ee,ge,y,Ae,he,Ne),L=new kg(p),U=new Xg(p),N=new r0($,Ae),j=new Ug($,Ee,N,Ae),Z=new jg($,N,Ne,j),te=new Qg($,Z,N,Ne),Q=new Kg($,Ae,S),_=new Vg(y),X=new h3(p,L,U,Ee,Ae,j,_),oe=new F3(p,y),Y=new p3,M=new y3(Ee,Ae),q=new zg(p,L,U,ge,te,u,o),D=new E3(p,te,Ae),be=new I3($,Ne,Ae,ge),ce=new Bg($,Ee,Ne,Ae),_e=new Zg($,Ee,Ne,Ae),Ne.programs=X.programs,p.capabilities=Ae,p.extensions=Ee,p.properties=y,p.renderLists=Y,p.shadowMap=D,p.state=ge,p.info=Ne}Le();const Me=new R3(p,$);this.xr=Me,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(C,I,!1))},this.getSize=function(E){return E.set(C,I)},this.setSize=function(E,V,J){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,I=V,e.width=Math.floor(E*K),e.height=Math.floor(V*K),J!==!1&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(C*K,I*K).floor()},this.setDrawingBufferSize=function(E,V,J){C=E,I=V,K=J,e.width=Math.floor(E*J),e.height=Math.floor(V*J),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,V,J,B){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,V,J,B),ge.viewport(P.copy(O).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(ne)},this.setScissor=function(E,V,J,B){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,V,J,B),ge.scissor(G.copy(ne).multiplyScalar(K).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){ge.setScissorTest(se=E)},this.setOpaqueSort=function(E){pe=E},this.setTransparentSort=function(E){W=E},this.getClearColor=function(E){return E.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(E=!0,V=!0,J=!0){let B=0;E&&(B|=16384),V&&(B|=256),J&&(B|=1024),$.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),Y.dispose(),M.dispose(),y.dispose(),L.dispose(),U.dispose(),te.dispose(),j.dispose(),be.dispose(),X.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ye),Me.removeEventListener("sessionend",we),H&&(H.dispose(),H=null),We.stop()};function Te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Ne.autoReset,V=D.enabled,J=D.autoUpdate,B=D.needsUpdate,re=D.type;Le(),Ne.autoReset=E,D.enabled=V,D.autoUpdate=J,D.needsUpdate=B,D.type=re}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const V=E.target;V.removeEventListener("dispose",je),lt(V)}function lt(E){R(E),y.remove(E)}function R(E){const V=y.get(E).programs;V!==void 0&&(V.forEach(function(J){X.releaseProgram(J)}),E.isShaderMaterial&&X.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,J,B,re,Ce){V===null&&(V=Se);const Fe=re.isMesh&&re.matrixWorld.determinant()<0,Be=sh(E,V,J,B,re);ge.setMaterial(B,Fe);let Oe=J.index;const Xe=J.attributes.position;if(Oe===null){if(Xe===void 0||Xe.count===0)return}else if(Oe.count===0)return;let Ge=1;B.wireframe===!0&&(Oe=Z.getWireframeAttribute(J),Ge=2),j.setup(re,B,Be,J,Oe);let ke,Qe=ce;Oe!==null&&(ke=N.get(Oe),Qe=_e,Qe.setIndex(ke));const kn=Oe!==null?Oe.count:Xe.count,gi=J.drawRange.start*Ge,_i=J.drawRange.count*Ge,Kt=Ce!==null?Ce.start*Ge:0,qe=Ce!==null?Ce.count*Ge:1/0,xi=Math.max(gi,Kt),nt=Math.min(kn,gi+_i,Kt+qe)-1,Rt=Math.max(0,nt-xi+1);if(Rt!==0){if(re.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Pe()),Qe.setMode(1)):Qe.setMode(4);else if(re.isLine){let bn=B.linewidth;bn===void 0&&(bn=1),ge.setLineWidth(bn*Pe()),re.isLineSegments?Qe.setMode(1):re.isLineLoop?Qe.setMode(2):Qe.setMode(3)}else re.isPoints?Qe.setMode(0):re.isSprite&&Qe.setMode(4);if(re.isInstancedMesh)Qe.renderInstances(xi,Rt,re.count);else if(J.isInstancedBufferGeometry){const bn=Math.min(J.instanceCount,J._maxInstanceCount);Qe.renderInstances(xi,Rt,bn)}else Qe.render(xi,Rt)}},this.compile=function(E,V){function J(B,re,Ce){B.transparent===!0&&B.side===Fn?(B.side=Bt,B.needsUpdate=!0,Dt(B,re,Ce),B.side=qi,B.needsUpdate=!0,Dt(B,re,Ce),B.side=Fn):Dt(B,re,Ce)}f=M.get(E),f.init(),g.push(f),E.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(p.physicallyCorrectLights),E.traverse(function(B){const re=B.material;if(re)if(Array.isArray(re))for(let Ce=0;Ce<re.length;Ce++){const Fe=re[Ce];J(Fe,E,B)}else J(re,E,B)}),g.pop(),f=null};let ee=null;function fe(E){ee&&ee(E)}function ye(){We.stop()}function we(){We.start()}const We=new Hu;We.setAnimationLoop(fe),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(E){ee=E,Me.setAnimationLoop(E),E===null?We.stop():We.start()},Me.addEventListener("sessionstart",ye),Me.addEventListener("sessionend",we),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,V,w),f=M.get(E,g.length),f.init(),g.push(f),le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ie.setFromProjectionMatrix(le),z=this.localClippingEnabled,k=_.init(this.clippingPlanes,z,V),h=Y.get(E,m.length),h.init(),m.push(h),ct(E,V,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(pe,W),k===!0&&_.beginShadows();const J=f.state.shadowsArray;if(D.render(J,E,V),k===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(h,E),f.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const B=V.cameras;for(let re=0,Ce=B.length;re<Ce;re++){const Fe=B[re];pt(h,E,Fe,Fe.viewport)}}else pt(h,E,V);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(p,E,V),j.resetDefaultState(),b=-1,T=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ct(E,V,J,B){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){B&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Fe=te.update(E),Be=E.material;Be.visible&&h.push(E,Fe,Be,J,ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ne.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ne.render.frame),!E.frustumCulled||ie.intersectsObject(E))){B&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const Fe=te.update(E),Be=E.material;if(Array.isArray(Be)){const Oe=Fe.groups;for(let Xe=0,Ge=Oe.length;Xe<Ge;Xe++){const ke=Oe[Xe],Qe=Be[ke.materialIndex];Qe&&Qe.visible&&h.push(E,Fe,Qe,J,ue.z,ke)}}else Be.visible&&h.push(E,Fe,Be,J,ue.z,null)}}const Ce=E.children;for(let Fe=0,Be=Ce.length;Fe<Be;Fe++)ct(Ce[Fe],V,J,B)}function pt(E,V,J,B){const re=E.opaque,Ce=E.transmissive,Fe=E.transparent;f.setupLightsView(J),Ce.length>0&&Vn(re,V,J),B&&ge.viewport(P.copy(B)),re.length>0&&$e(re,V,J),Ce.length>0&&$e(Ce,V,J),Fe.length>0&&$e(Fe,V,J),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Vn(E,V,J){const B=Ae.isWebGL2;H===null&&(H=new hi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?yr:ci,minFilter:Es,samples:B&&s===!0?4:0})),p.getDrawingBufferSize(ae),B?H.setSize(ae.x,ae.y):H.setSize(jo(ae.x),jo(ae.y));const re=p.getRenderTarget();p.setRenderTarget(H),p.clear();const Ce=p.toneMapping;p.toneMapping=vn,$e(E,V,J),p.toneMapping=Ce,S.updateMultisampleRenderTarget(H),S.updateRenderTargetMipmap(H),p.setRenderTarget(re)}function $e(E,V,J){const B=V.isScene===!0?V.overrideMaterial:null;for(let re=0,Ce=E.length;re<Ce;re++){const Fe=E[re],Be=Fe.object,Oe=Fe.geometry,Xe=B===null?Fe.material:B,Ge=Fe.group;Be.layers.test(J.layers)&&ln(Be,V,J,Oe,Xe,Ge)}}function ln(E,V,J,B,re,Ce){E.onBeforeRender(p,V,J,B,re,Ce),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),re.onBeforeRender(p,V,J,B,E,Ce),re.transparent===!0&&re.side===Fn?(re.side=Bt,re.needsUpdate=!0,p.renderBufferDirect(J,V,B,re,E,Ce),re.side=qi,re.needsUpdate=!0,p.renderBufferDirect(J,V,B,re,E,Ce),re.side=Fn):p.renderBufferDirect(J,V,B,re,E,Ce),E.onAfterRender(p,V,J,B,re,Ce)}function Dt(E,V,J){V.isScene!==!0&&(V=Se);const B=y.get(E),re=f.state.lights,Ce=f.state.shadowsArray,Fe=re.state.version,Be=X.getParameters(E,re.state,Ce,V,J),Oe=X.getProgramCacheKey(Be);let Xe=B.programs;B.environment=E.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(E.isMeshStandardMaterial?U:L).get(E.envMap||B.environment),Xe===void 0&&(E.addEventListener("dispose",je),Xe=new Map,B.programs=Xe);let Ge=Xe.get(Oe);if(Ge!==void 0){if(B.currentProgram===Ge&&B.lightsStateVersion===Fe)return Pa(E,Be),Ge}else Be.uniforms=X.getUniforms(E),E.onBuild(J,Be,p),E.onBeforeCompile(Be,p),Ge=X.acquireProgram(Be,Oe),Xe.set(Oe,Ge),B.uniforms=Be.uniforms;const ke=B.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=_.uniform),Pa(E,Be),B.needsLights=ah(E),B.lightsStateVersion=Fe,B.needsLights&&(ke.ambientLightColor.value=re.state.ambient,ke.lightProbe.value=re.state.probe,ke.directionalLights.value=re.state.directional,ke.directionalLightShadows.value=re.state.directionalShadow,ke.spotLights.value=re.state.spot,ke.spotLightShadows.value=re.state.spotShadow,ke.rectAreaLights.value=re.state.rectArea,ke.ltc_1.value=re.state.rectAreaLTC1,ke.ltc_2.value=re.state.rectAreaLTC2,ke.pointLights.value=re.state.point,ke.pointLightShadows.value=re.state.pointShadow,ke.hemisphereLights.value=re.state.hemi,ke.directionalShadowMap.value=re.state.directionalShadowMap,ke.directionalShadowMatrix.value=re.state.directionalShadowMatrix,ke.spotShadowMap.value=re.state.spotShadowMap,ke.spotLightMatrix.value=re.state.spotLightMatrix,ke.spotLightMap.value=re.state.spotLightMap,ke.pointShadowMap.value=re.state.pointShadowMap,ke.pointShadowMatrix.value=re.state.pointShadowMatrix);const Qe=Ge.getUniforms(),kn=as.seqWithValue(Qe.seq,ke);return B.currentProgram=Ge,B.uniformsList=kn,Ge}function Pa(E,V){const J=y.get(E);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function sh(E,V,J,B,re){V.isScene!==!0&&(V=Se),S.resetTextureUnits();const Ce=V.fog,Fe=B.isMeshStandardMaterial?V.environment:null,Be=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:ui,Oe=(B.isMeshStandardMaterial?U:L).get(B.envMap||Fe),Xe=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!B.normalMap&&!!J.attributes.tangent,ke=!!J.morphAttributes.position,Qe=!!J.morphAttributes.normal,kn=!!J.morphAttributes.color,gi=B.toneMapped?p.toneMapping:vn,_i=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Kt=_i!==void 0?_i.length:0,qe=y.get(B),xi=f.state.lights;if(k===!0&&(z===!0||E!==T)){const Tt=E===T&&B.id===b;_.setState(B,E,Tt)}let nt=!1;B.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==xi.state.version||qe.outputEncoding!==Be||re.isInstancedMesh&&qe.instancing===!1||!re.isInstancedMesh&&qe.instancing===!0||re.isSkinnedMesh&&qe.skinning===!1||!re.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Oe||B.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==_.numPlanes||qe.numIntersection!==_.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ge||qe.morphTargets!==ke||qe.morphNormals!==Qe||qe.morphColors!==kn||qe.toneMapping!==gi||Ae.isWebGL2===!0&&qe.morphTargetsCount!==Kt)&&(nt=!0):(nt=!0,qe.__version=B.version);let Rt=qe.currentProgram;nt===!0&&(Rt=Dt(B,V,re));let bn=!1,nr=!1,Ls=!1;const Mt=Rt.getUniforms(),Hn=qe.uniforms;if(ge.useProgram(Rt.program)&&(bn=!0,nr=!0,Ls=!0),B.id!==b&&(b=B.id,nr=!0),bn||T!==E){if(Mt.setValue($,"projectionMatrix",E.projectionMatrix),Ae.logarithmicDepthBuffer&&Mt.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,nr=!0,Ls=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Tt=Mt.map.cameraPosition;Tt!==void 0&&Tt.setValue($,ue.setFromMatrixPosition(E.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Mt.setValue($,"isOrthographic",E.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||re.isSkinnedMesh)&&Mt.setValue($,"viewMatrix",E.matrixWorldInverse)}if(re.isSkinnedMesh){Mt.setOptional($,re,"bindMatrix"),Mt.setOptional($,re,"bindMatrixInverse");const Tt=re.skeleton;Tt&&(Ae.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),Mt.setValue($,"boneTexture",Tt.boneTexture,S),Mt.setValue($,"boneTextureSize",Tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=J.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Ae.isWebGL2===!0)&&Q.update(re,J,B,Rt),(nr||qe.receiveShadow!==re.receiveShadow)&&(qe.receiveShadow=re.receiveShadow,Mt.setValue($,"receiveShadow",re.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Hn.envMap.value=Oe,Hn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),nr&&(Mt.setValue($,"toneMappingExposure",p.toneMappingExposure),qe.needsLights&&oh(Hn,Ls),Ce&&B.fog===!0&&oe.refreshFogUniforms(Hn,Ce),oe.refreshMaterialUniforms(Hn,B,K,I,H),as.upload($,qe.uniformsList,Hn,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(as.upload($,qe.uniformsList,Hn,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Mt.setValue($,"center",re.center),Mt.setValue($,"modelViewMatrix",re.modelViewMatrix),Mt.setValue($,"normalMatrix",re.normalMatrix),Mt.setValue($,"modelMatrix",re.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Tt=B.uniformsGroups;for(let Ds=0,lh=Tt.length;Ds<lh;Ds++)if(Ae.isWebGL2){const Da=Tt[Ds];be.update(Da,Rt),be.bind(Da,Rt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rt}function oh(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function ah(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,V,J){y.get(E.texture).__webglTexture=V,y.get(E.depthTexture).__webglTexture=J;const B=y.get(E);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){const J=y.get(E);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,J=0){w=E,x=V,A=J;let B=!0,re=null,Ce=!1,Fe=!1;if(E){const Oe=y.get(E);Oe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),B=!1):Oe.__webglFramebuffer===void 0?S.setupRenderTarget(E):Oe.__hasExternalTextures&&S.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Fe=!0);const Ge=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(re=Ge[V],Ce=!0):Ae.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?re=y.get(E).__webglMultisampledFramebuffer:re=Ge,P.copy(E.viewport),G.copy(E.scissor),v=E.scissorTest}else P.copy(O).multiplyScalar(K).floor(),G.copy(ne).multiplyScalar(K).floor(),v=se;if(ge.bindFramebuffer(36160,re)&&Ae.drawBuffers&&B&&ge.drawBuffers(E,re),ge.viewport(P),ge.scissor(G),ge.setScissorTest(v),Ce){const Oe=y.get(E.texture);$.framebufferTexture2D(36160,36064,34069+V,Oe.__webglTexture,J)}else if(Fe){const Oe=y.get(E.texture),Xe=V||0;$.framebufferTextureLayer(36160,36064,Oe.__webglTexture,J||0,Xe)}b=-1},this.readRenderTargetPixels=function(E,V,J,B,re,Ce,Fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){ge.bindFramebuffer(36160,Be);try{const Oe=E.texture,Xe=Oe.format,Ge=Oe.type;if(Xe!==jt&&he.convert(Xe)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===yr&&(Ee.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ge!==ci&&he.convert(Ge)!==$.getParameter(35738)&&!(Ge===ii&&(Ae.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-B&&J>=0&&J<=E.height-re&&$.readPixels(V,J,B,re,he.convert(Xe),he.convert(Ge),Ce)}finally{const Oe=w!==null?y.get(w).__webglFramebuffer:null;ge.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(E,V,J=0){const B=Math.pow(2,-J),re=Math.floor(V.image.width*B),Ce=Math.floor(V.image.height*B);S.setTexture2D(V,0),$.copyTexSubImage2D(3553,J,0,0,E.x,E.y,re,Ce),ge.unbindTexture()},this.copyTextureToTexture=function(E,V,J,B=0){const re=V.image.width,Ce=V.image.height,Fe=he.convert(J.format),Be=he.convert(J.type);S.setTexture2D(J,0),$.pixelStorei(37440,J.flipY),$.pixelStorei(37441,J.premultiplyAlpha),$.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?$.texSubImage2D(3553,B,E.x,E.y,re,Ce,Fe,Be,V.image.data):V.isCompressedTexture?$.compressedTexSubImage2D(3553,B,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,Fe,V.mipmaps[0].data):$.texSubImage2D(3553,B,E.x,E.y,Fe,Be,V.image),B===0&&J.generateMipmaps&&$.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(E,V,J,B,re=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=E.max.x-E.min.x+1,Fe=E.max.y-E.min.y+1,Be=E.max.z-E.min.z+1,Oe=he.convert(B.format),Xe=he.convert(B.type);let Ge;if(B.isData3DTexture)S.setTexture3D(B,0),Ge=32879;else if(B.isDataArrayTexture)S.setTexture2DArray(B,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,B.flipY),$.pixelStorei(37441,B.premultiplyAlpha),$.pixelStorei(3317,B.unpackAlignment);const ke=$.getParameter(3314),Qe=$.getParameter(32878),kn=$.getParameter(3316),gi=$.getParameter(3315),_i=$.getParameter(32877),Kt=J.isCompressedTexture?J.mipmaps[0]:J.image;$.pixelStorei(3314,Kt.width),$.pixelStorei(32878,Kt.height),$.pixelStorei(3316,E.min.x),$.pixelStorei(3315,E.min.y),$.pixelStorei(32877,E.min.z),J.isDataTexture||J.isData3DTexture?$.texSubImage3D(Ge,re,V.x,V.y,V.z,Ce,Fe,Be,Oe,Xe,Kt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ge,re,V.x,V.y,V.z,Ce,Fe,Be,Oe,Kt.data)):$.texSubImage3D(Ge,re,V.x,V.y,V.z,Ce,Fe,Be,Oe,Xe,Kt),$.pixelStorei(3314,ke),$.pixelStorei(32878,Qe),$.pixelStorei(3316,kn),$.pixelStorei(3315,gi),$.pixelStorei(32877,_i),re===0&&B.generateMipmaps&&$.generateMipmap(Ge),ge.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){x=0,A=0,w=null,ge.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class O3 extends Yu{}O3.prototype.isWebGL1Renderer=!0;class _c extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,r=[],s=[],o=[],a=new F,l=new rt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(gt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Aa extends an{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class z3 extends Aa{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ca(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const es=new F,Mo=new Ca,So=new Ca,bo=new Ca;class $u extends an{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(es.subVectors(r[0],r[1]).add(r[0]),c=es);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(es.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=es),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(f),m),d=Math.pow(f.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),d<1e-4&&(d=p),Mo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,p,d),So.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,p,d),bo.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,p,d)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),So.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),bo.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Mo.calc(l),So.calc(l),bo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xc(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function U3(n,e){const t=1-n;return t*t*e}function B3(n,e){return 2*(1-n)*n*e}function G3(n,e){return n*n*e}function hr(n,e,t,i){return U3(n,e)+B3(n,t)+G3(n,i)}function V3(n,e){const t=1-n;return t*t*t*e}function k3(n,e){const t=1-n;return 3*t*t*n*e}function H3(n,e){return 3*(1-n)*n*n*e}function W3(n,e){return n*n*n*e}function fr(n,e,t,i,r){return V3(n,e)+k3(n,t)+H3(n,i)+W3(n,r)}class Ju extends an{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fr(e,r.x,s.x,o.x,a.x),fr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X3 extends an{constructor(e=new F,t=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fr(e,r.x,s.x,o.x,a.x),fr(e,r.y,s.y,o.y,a.y),fr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class La extends an{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new de;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q3 extends an{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ku extends an{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(hr(e,r.x,s.x,o.x),hr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j3 extends an{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(hr(e,r.x,s.x,o.x),hr(e,r.y,s.y,o.y),hr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qu extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(xc(a,l.x,c.x,u.x,h.x),xc(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var eh=Object.freeze({__proto__:null,ArcCurve:z3,CatmullRomCurve3:$u,CubicBezierCurve:Ju,CubicBezierCurve3:X3,EllipseCurve:Aa,LineCurve:La,LineCurve3:q3,QuadraticBezierCurve:Ku,QuadraticBezierCurve3:j3,SplineCurve:Qu});class Z3 extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new La(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new eh[r.type]().fromJSON(r))}return this}}class vc extends Z3{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new La(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Ku(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Ju(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Aa(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yo extends vc{constructor(e){super(e),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new vc().fromJSON(r))}return this}}const Y3={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=th(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(i&&(s=e2(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Mr(s,o,t,a,l,m,0),o}};function th(n,e,t,i,r){let s,o;if(r===h2(n,e,t,i)>0)for(s=e;s<t;s+=i)o=yc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=yc(s,n[s],n[s+1],o);return o&&Cs(o,o.next)&&(br(o),o=o.next),o}function pi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Cs(t,t.next)||Ke(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Mr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&s2(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?J3(n,i,r,s):$3(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),br(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=K3(pi(n),e,t),Mr(n,e,t,i,r,s,2)):o===2&&Q3(n,e,t,i,r,s):Mr(pi(n),e,t,i,r,s,1);break}}}function $3(n){const e=n.prev,t=n,i=n.next;if(Ke(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&Oi(r,a,s,l,o,c,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J3(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ke(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,p=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,x=$o(m,g,e,t,i),A=$o(p,d,e,t,i);let w=n.prevZ,b=n.nextZ;for(;w&&w.z>=x&&b&&b.z<=A;){if(w.x>=m&&w.x<=p&&w.y>=g&&w.y<=d&&w!==r&&w!==o&&Oi(a,u,l,h,c,f,w.x,w.y)&&Ke(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=m&&b.x<=p&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&Oi(a,u,l,h,c,f,b.x,b.y)&&Ke(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=x;){if(w.x>=m&&w.x<=p&&w.y>=g&&w.y<=d&&w!==r&&w!==o&&Oi(a,u,l,h,c,f,w.x,w.y)&&Ke(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=A;){if(b.x>=m&&b.x<=p&&b.y>=g&&b.y<=d&&b!==r&&b!==o&&Oi(a,u,l,h,c,f,b.x,b.y)&&Ke(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function K3(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Cs(r,s)&&nh(r,i,i.next,s)&&Sr(r,s)&&Sr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),br(i),br(i.next),i=n=s),i=i.next}while(i!==n);return pi(i)}function Q3(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l2(o,a)){let l=ih(o,a);o=pi(o,o.next),l=pi(l,l.next),Mr(o,e,t,i,r,s,0),Mr(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function e2(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=th(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(a2(c));for(r.sort(t2),s=0;s<r.length;s++)t=n2(r[s],t);return t}function t2(n,e){return n.x-e.x}function n2(n,e){const t=i2(n,e);if(!t)return e;const i=ih(t,n);return pi(i,i.next),pi(t,t.next)}function i2(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Oi(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Sr(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&r2(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function r2(n,e){return Ke(n.prev,n,e.prev)<0&&Ke(e.next,n,n.next)<0}function s2(n,e,t,i){let r=n;do r.z===0&&(r.z=$o(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,o2(r)}function o2(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function $o(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function a2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Oi(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function l2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!c2(n,e)&&(Sr(n,e)&&Sr(e,n)&&u2(n,e)&&(Ke(n.prev,n,e.prev)||Ke(n,e.prev,e))||Cs(n,e)&&Ke(n.prev,n,n.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Cs(n,e){return n.x===e.x&&n.y===e.y}function nh(n,e,t,i){const r=ns(Ke(n,e,t)),s=ns(Ke(n,e,i)),o=ns(Ke(t,i,n)),a=ns(Ke(t,i,e));return!!(r!==s&&o!==a||r===0&&ts(n,t,e)||s===0&&ts(n,i,e)||o===0&&ts(t,n,i)||a===0&&ts(t,e,i))}function ts(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ns(n){return n>0?1:n<0?-1:0}function c2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&nh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sr(n,e){return Ke(n.prev,n,n.next)<0?Ke(n,e,n.next)>=0&&Ke(n,n.prev,e)>=0:Ke(n,e,n.prev)<0||Ke(n,n.next,e)<0}function u2(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ih(n,e){const t=new Jo(n.i,n.x,n.y),i=new Jo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function yc(n,e,t,i){const r=new Jo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h2(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class dr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return dr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Mc(e),Sc(i,e);let o=e.length;t.forEach(Mc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Sc(i,t[l]);const a=Y3.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Sc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ps extends Gn{constructor(e=new Yo([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yn(r,3)),this.setAttribute("uv",new yn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:f2;let w,b=!1,T,P,G,v;x&&(w=x.getSpacedPoints(u),b=!0,f=!1,T=x.computeFrenetFrames(u,!1),P=new F,G=new F,v=new F),f||(d=0,m=0,g=0,p=0);const C=a.extractPoints(c);let I=C.shape;const K=C.holes;if(!dr.isClockWise(I)){I=I.reverse();for(let y=0,S=K.length;y<S;y++){const L=K[y];dr.isClockWise(L)&&(K[y]=L.reverse())}}const W=dr.triangulateShape(I,K),O=I;for(let y=0,S=K.length;y<S;y++){const L=K[y];I=I.concat(L)}function ne(y,S,L){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().multiplyScalar(L).add(y)}const se=I.length,ie=W.length;function k(y,S,L){let U,N,Z;const te=y.x-S.x,X=y.y-S.y,oe=L.x-y.x,Y=L.y-y.y,M=te*te+X*X,_=te*Y-X*oe;if(Math.abs(_)>Number.EPSILON){const D=Math.sqrt(M),q=Math.sqrt(oe*oe+Y*Y),Q=S.x-X/D,ce=S.y+te/D,_e=L.x-Y/q,he=L.y+oe/q,j=((_e-Q)*Y-(he-ce)*oe)/(te*Y-X*oe);U=Q+te*j-y.x,N=ce+X*j-y.y;const be=U*U+N*N;if(be<=2)return new de(U,N);Z=Math.sqrt(be/2)}else{let D=!1;te>Number.EPSILON?oe>Number.EPSILON&&(D=!0):te<-Number.EPSILON?oe<-Number.EPSILON&&(D=!0):Math.sign(X)===Math.sign(Y)&&(D=!0),D?(U=-X,N=te,Z=Math.sqrt(M)):(U=te,N=X,Z=Math.sqrt(M/2))}return new de(U/Z,N/Z)}const z=[];for(let y=0,S=O.length,L=S-1,U=y+1;y<S;y++,L++,U++)L===S&&(L=0),U===S&&(U=0),z[y]=k(O[y],O[L],O[U]);const H=[];let le,ae=z.concat();for(let y=0,S=K.length;y<S;y++){const L=K[y];le=[];for(let U=0,N=L.length,Z=N-1,te=U+1;U<N;U++,Z++,te++)Z===N&&(Z=0),te===N&&(te=0),le[U]=k(L[U],L[Z],L[te]);H.push(le),ae=ae.concat(le)}for(let y=0;y<d;y++){const S=y/d,L=m*Math.cos(S*Math.PI/2),U=g*Math.sin(S*Math.PI/2)+p;for(let N=0,Z=O.length;N<Z;N++){const te=ne(O[N],z[N],U);De(te.x,te.y,-L)}for(let N=0,Z=K.length;N<Z;N++){const te=K[N];le=H[N];for(let X=0,oe=te.length;X<oe;X++){const Y=ne(te[X],le[X],U);De(Y.x,Y.y,-L)}}}const ue=g+p;for(let y=0;y<se;y++){const S=f?ne(I[y],ae[y],ue):I[y];b?(G.copy(T.normals[0]).multiplyScalar(S.x),P.copy(T.binormals[0]).multiplyScalar(S.y),v.copy(w[0]).add(G).add(P),De(v.x,v.y,v.z)):De(S.x,S.y,0)}for(let y=1;y<=u;y++)for(let S=0;S<se;S++){const L=f?ne(I[S],ae[S],ue):I[S];b?(G.copy(T.normals[y]).multiplyScalar(L.x),P.copy(T.binormals[y]).multiplyScalar(L.y),v.copy(w[y]).add(G).add(P),De(v.x,v.y,v.z)):De(L.x,L.y,h/u*y)}for(let y=d-1;y>=0;y--){const S=y/d,L=m*Math.cos(S*Math.PI/2),U=g*Math.sin(S*Math.PI/2)+p;for(let N=0,Z=O.length;N<Z;N++){const te=ne(O[N],z[N],U);De(te.x,te.y,h+L)}for(let N=0,Z=K.length;N<Z;N++){const te=K[N];le=H[N];for(let X=0,oe=te.length;X<oe;X++){const Y=ne(te[X],le[X],U);b?De(Y.x,Y.y+w[u-1].y,w[u-1].x+L):De(Y.x,Y.y,h+L)}}}Se(),Pe();function Se(){const y=r.length/3;if(f){let S=0,L=se*S;for(let U=0;U<ie;U++){const N=W[U];Ee(N[2]+L,N[1]+L,N[0]+L)}S=u+d*2,L=se*S;for(let U=0;U<ie;U++){const N=W[U];Ee(N[0]+L,N[1]+L,N[2]+L)}}else{for(let S=0;S<ie;S++){const L=W[S];Ee(L[2],L[1],L[0])}for(let S=0;S<ie;S++){const L=W[S];Ee(L[0]+se*u,L[1]+se*u,L[2]+se*u)}}i.addGroup(y,r.length/3-y,0)}function Pe(){const y=r.length/3;let S=0;$(O,S),S+=O.length;for(let L=0,U=K.length;L<U;L++){const N=K[L];$(N,S),S+=N.length}i.addGroup(y,r.length/3-y,1)}function $(y,S){let L=y.length;for(;--L>=0;){const U=L;let N=L-1;N<0&&(N=y.length-1);for(let Z=0,te=u+d*2;Z<te;Z++){const X=se*Z,oe=se*(Z+1),Y=S+U+X,M=S+N+X,_=S+N+oe,D=S+U+oe;Ae(Y,M,_,D)}}}function De(y,S,L){l.push(y),l.push(S),l.push(L)}function Ee(y,S,L){ge(y),ge(S),ge(L);const U=r.length/3,N=A.generateTopUV(i,r,U-3,U-2,U-1);Ne(N[0]),Ne(N[1]),Ne(N[2])}function Ae(y,S,L,U){ge(y),ge(S),ge(U),ge(S),ge(L),ge(U);const N=r.length/3,Z=A.generateSideWallUV(i,r,N-6,N-3,N-2,N-1);Ne(Z[0]),Ne(Z[1]),Ne(Z[3]),Ne(Z[1]),Ne(Z[2]),Ne(Z[3])}function ge(y){r.push(l[y*3+0]),r.push(l[y*3+1]),r.push(l[y*3+2])}function Ne(y){s.push(y.x),s.push(y.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return d2(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new eh[r.type]().fromJSON(r)),new ps(i,e.options)}}const f2={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],m=e[r*3+1],g=e[r*3+2],p=e[s*3],d=e[s*3+1],x=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(f,1-g),new de(p,1-x)]:[new de(a,1-l),new de(u,1-h),new de(m,1-g),new de(d,1-x)]}};function d2(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bc extends Tr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rh extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const wo=new rt,wc=new F,Ec=new F;class p2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ec),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class m2 extends p2{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g2 extends rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DefaultUp),this.updateMatrix(),this.target=new vt,this.shadow=new m2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _2 extends rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},Ac={type:"change"},Eo={type:"start"},To={type:"end"},Cc=1e-6;class x2 extends mi{constructor(t,i,r){super();xe(this,"object");xe(this,"domElement");xe(this,"window");xe(this,"enabled");xe(this,"target");xe(this,"enableZoom");xe(this,"zoomSpeed");xe(this,"minDistance");xe(this,"maxDistance");xe(this,"enableRotate");xe(this,"rotateSpeed");xe(this,"enablePan");xe(this,"keyPanSpeed");xe(this,"autoRotate");xe(this,"autoRotateSpeed");xe(this,"minZoom");xe(this,"maxZoom");xe(this,"minPolarAngle");xe(this,"maxPolarAngle");xe(this,"minAzimuthAngle");xe(this,"maxAzimuthAngle");xe(this,"enableKeys");xe(this,"keys");xe(this,"mouseButtons");xe(this,"enableDamping");xe(this,"dampingFactor");xe(this,"spherical");xe(this,"sphericalDelta");xe(this,"scale");xe(this,"target0");xe(this,"position0");xe(this,"zoom0");xe(this,"state");xe(this,"panOffset");xe(this,"zoomChanged");xe(this,"rotateStart");xe(this,"rotateEnd");xe(this,"rotateDelta");xe(this,"panStart");xe(this,"panEnd");xe(this,"panDelta");xe(this,"dollyStart");xe(this,"dollyEnd");xe(this,"dollyDelta");xe(this,"updateLastPosition");xe(this,"updateOffset");xe(this,"updateQuat");xe(this,"updateLastQuaternion");xe(this,"updateQuatInverse");xe(this,"panLeftV");xe(this,"panUpV");xe(this,"panInternalOffset");xe(this,"onContextMenu");xe(this,"onMouseUp");xe(this,"onMouseDown");xe(this,"onMouseMove");xe(this,"onMouseWheel");xe(this,"onTouchStart");xe(this,"onTouchEnd");xe(this,"onTouchMove");xe(this,"onKeyDown");this.object=t,this.domElement=i!==void 0?i:document,this.window=r!==void 0?r:window,this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:Vs.LEFT,ZOOM:Vs.MIDDLE,PAN:Vs.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.updateOffset=new F,this.updateQuat=new fi().setFromUnitVectors(t.up,new F(0,1,0)),this.updateQuatInverse=this.updateQuat.clone().invert(),this.updateLastPosition=new F,this.updateLastQuaternion=new fi,this.state=Je.NONE,this.scale=1,this.spherical=new Tc,this.sphericalDelta=new Tc,this.panOffset=new F,this.zoomChanged=!1,this.rotateStart=new de,this.rotateEnd=new de,this.rotateDelta=new de,this.panStart=new de,this.panEnd=new de,this.panDelta=new de,this.dollyStart=new de,this.dollyEnd=new de,this.dollyDelta=new de,this.panLeftV=new F,this.panUpV=new F,this.panInternalOffset=new F,this.onMouseDown=s=>{if(this.enabled!==!1){if(s.preventDefault(),s.button===this.mouseButtons.ORBIT){if(this.enableRotate===!1)return;this.rotateStart.set(s.clientX,s.clientY),this.state=Je.ROTATE}else if(s.button===this.mouseButtons.ZOOM){if(this.enableZoom===!1)return;this.dollyStart.set(s.clientX,s.clientY),this.state=Je.DOLLY}else if(s.button===this.mouseButtons.PAN){if(this.enablePan===!1)return;this.panStart.set(s.clientX,s.clientY),this.state=Je.PAN}this.state!==Je.NONE&&(document.addEventListener("mousemove",this.onMouseMove,!1),document.addEventListener("mouseup",this.onMouseUp,!1),this.dispatchEvent(Eo))}},this.onMouseMove=s=>{if(this.enabled!==!1){if(s.preventDefault(),this.state===Je.ROTATE){if(this.enableRotate===!1)return;this.rotateEnd.set(s.clientX,s.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart);const o=this.domElement===document?this.domElement.body:this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/o.clientWidth*this.rotateSpeed),this.rotateUp(2*Math.PI*this.rotateDelta.y/o.clientHeight*this.rotateSpeed),this.rotateStart.copy(this.rotateEnd),this.update()}else if(this.state===Je.DOLLY){if(this.enableZoom===!1)return;this.dollyEnd.set(s.clientX,s.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyIn(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyOut(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}else if(this.state===Je.PAN){if(this.enablePan===!1)return;this.panEnd.set(s.clientX,s.clientY),this.panDelta.subVectors(this.panEnd,this.panStart),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.update()}}},this.onMouseUp=s=>{this.enabled!==!1&&(document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.dispatchEvent(To),this.state=Je.NONE)},this.onMouseWheel=s=>{this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE&&this.state!==Je.ROTATE||(s.preventDefault(),s.stopPropagation(),s.deltaY<0?this.dollyOut(this.getZoomScale()):s.deltaY>0&&this.dollyIn(this.getZoomScale()),this.update(),this.dispatchEvent(Eo),this.dispatchEvent(To))},this.onKeyDown=s=>{if(!(this.enabled===!1||this.enableKeys===!1||this.enablePan===!1))switch(s.keyCode){case this.keys.UP:this.pan(0,this.keyPanSpeed),this.update();break;case this.keys.BOTTOM:this.pan(0,-this.keyPanSpeed),this.update();break;case this.keys.LEFT:this.pan(this.keyPanSpeed,0),this.update();break;case this.keys.RIGHT:this.pan(-this.keyPanSpeed,0),this.update();break}},this.onTouchStart=s=>{if(this.enabled!==!1){switch(s.touches.length){case 1:{if(this.enableRotate===!1)return;this.rotateStart.set(s.touches[0].pageX,s.touches[0].pageY),this.state=Je.TOUCH_ROTATE}break;case 2:{if(this.enableZoom===!1)return;const o=s.touches[0].pageX-s.touches[1].pageX,a=s.touches[0].pageY-s.touches[1].pageY,l=Math.sqrt(o*o+a*a);this.dollyStart.set(0,l),this.state=Je.TOUCH_DOLLY}break;case 3:{if(this.enablePan===!1)return;this.panStart.set(s.touches[0].pageX,s.touches[0].pageY),this.state=Je.TOUCH_PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Eo)}},this.onTouchMove=s=>{if(this.enabled!==!1)switch(s.preventDefault(),s.stopPropagation(),s.touches.length){case 1:{if(this.enableRotate===!1||this.state!==Je.TOUCH_ROTATE)return;this.rotateEnd.set(s.touches[0].pageX,s.touches[0].pageY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart);const o=this.domElement===document?this.domElement.body:this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/o.clientWidth*this.rotateSpeed),this.rotateUp(2*Math.PI*this.rotateDelta.y/o.clientHeight*this.rotateSpeed),this.rotateStart.copy(this.rotateEnd),this.update()}break;case 2:{if(this.enableZoom===!1||this.state!==Je.TOUCH_DOLLY)return;const o=s.touches[0].pageX-s.touches[1].pageX,a=s.touches[0].pageY-s.touches[1].pageY,l=Math.sqrt(o*o+a*a);this.dollyEnd.set(0,l),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyOut(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyIn(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}break;case 3:{if(this.enablePan===!1||this.state!==Je.TOUCH_PAN)return;this.panEnd.set(s.touches[0].pageX,s.touches[0].pageY),this.panDelta.subVectors(this.panEnd,this.panStart),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.update()}break;default:this.state=Je.NONE}},this.onTouchEnd=s=>{this.enabled!==!1&&(this.dispatchEvent(To),this.state=Je.NONE)},this.onContextMenu=s=>{s.preventDefault()},this.domElement.addEventListener("contextmenu",this.onContextMenu,!1),this.domElement.addEventListener("mousedown",this.onMouseDown,!1),this.domElement.addEventListener("wheel",this.onMouseWheel,!1),this.domElement.addEventListener("touchstart",this.onTouchStart,!1),this.domElement.addEventListener("touchend",this.onTouchEnd,!1),this.domElement.addEventListener("touchmove",this.onTouchMove,!1),this.window.addEventListener("keydown",this.onKeyDown,!1),this.update()}update(){const t=this.object.position;return this.updateOffset.copy(t).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===Je.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),t.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>Cc||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>Cc?(this.dispatchEvent(Ac),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):!1}panLeft(t,i){this.panLeftV.setFromMatrixColumn(i,0),this.panLeftV.multiplyScalar(-t),this.panOffset.add(this.panLeftV)}panUp(t,i){this.panUpV.setFromMatrixColumn(i,1),this.panUpV.multiplyScalar(t),this.panOffset.add(this.panUpV)}pan(t,i){const r=this.domElement===document?this.domElement.body:this.domElement;if(this._checkPerspectiveCamera(this.object)){const s=this.object.position;this.panInternalOffset.copy(s).sub(this.target);let o=this.panInternalOffset.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*t*o/r.clientHeight,this.object.matrix),this.panUp(2*i*o/r.clientHeight,this.object.matrix)}else this._checkOrthographicCamera(this.object)?(this.panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this.panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}dollyIn(t){this._checkPerspectiveCamera(this.object)?this.scale/=t:this._checkOrthographicCamera(this.object)?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}dollyOut(t){this._checkPerspectiveCamera(this.object)?this.scale*=t:this._checkOrthographicCamera(this.object)?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}getAutoRotationAngle(){return 2*Math.PI/60/60*this.autoRotateSpeed}getZoomScale(){return Math.pow(.95,this.zoomSpeed)}rotateLeft(t){this.sphericalDelta.theta-=t}rotateUp(t){this.sphericalDelta.phi-=t}getPolarAngle(){return this.spherical.phi}getAzimuthalAngle(){return this.spherical.theta}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ac),this.update(),this.state=Je.NONE}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),(this._checkOrthographicCamera(this.object)||this._checkPerspectiveCamera(this.object))&&(this.zoom0=this.object.zoom)}get center(){return console.warn("OrbitControls: .center has been renamed to .target"),this.target}get noZoom(){return console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom}set noZoom(t){console.warn("OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!t}_checkPerspectiveCamera(t){return t.isPerspectiveCamera}_checkOrthographicCamera(t){return t.isOrthographicCamera}}class v2{constructor(){xe(this,"polygonHeight");xe(this,"lineStringWidth");xe(this,"lineStringHeight");xe(this,"lineStringSteps");return this}build(e,t){return this.polygonHeight=t.polygonHeight,this.lineStringWidth=t.lineStringWidth,this.lineStringHeight=t.lineStringHeight,this.lineStringSteps=t.lineStringSteps,this.createEntities(e)}createEntities(e){const t=[],i=[];return e.forEach(r=>{if(r.geometry.type==="Polygon"){const{coordinates:s}=r.geometry;s.forEach(o=>{i.push(this.createPolygonGeometry(o))})}if(r.geometry.type==="LineString"){const{coordinates:s}=r.geometry;t.push(this.createLineStringGeometry(s))}}),{lineStringGeometries:t,polygonGeometries:i}}createLineStringGeometry(e){const t=e.map(c=>new F(c[0],c[1],0)),i=new $u(t),r=[],s=4,o=1,a={steps:this.lineStringSteps,bevelEnabled:!1,extrudePath:i};for(let c=0;c<s;c++){const u=(2*c+o)/s*Math.PI;r.push(new de(Math.cos(u)*this.lineStringHeight,Math.sin(u)*this.lineStringWidth))}const l=new Yo(r);return new ps(l,a)}createPolygonGeometry(e){const t={steps:3,depth:this.polygonHeight,bevelEnabled:!1},i=new Yo;return e.forEach((r,s)=>{s?i.lineTo(r[0],r[1]):i.moveTo(r[0],r[1])}),new ps(i,t)}}const y2=cu({__name:"ExampleElement",props:{data:null},setup(n){const e=n,t=Qh(null);class i{constructor(s){xe(this,"element");xe(this,"scene",new _c);xe(this,"camera");xe(this,"renderer");this.element=s,this.scene=new _c,this.camera=this.createCamera(this.scene,s),this.renderer=this.createRenderer(s),this.createDirectionalLight(),new x2(this.camera,s),this.scene.add(new _2(16777215,.6)),window.addEventListener("resize",()=>{this.onResize()},!1)}add(...s){this.scene.add(...s)}createCamera(s,o){const a=new Ot(75,o.clientWidth/o.clientHeight,.1,3e3);return a.position.z=15,a.position.y=-15,s.add(a),a}createRenderer(s){const o=new Yu({antialias:!0});return o.setSize(s.clientWidth,s.clientHeight),o.setPixelRatio(2),o.setClearColor("#ececec",0),o.setAnimationLoop(()=>this.render()),o.shadowMap.enabled=!0,o.shadowMap.type=Au,o.localClippingEnabled=!0,o.domElement.removeAttribute("data-engine"),s.appendChild(o.domElement),o}createDirectionalLight(){const s=new g2(16777215,.3);s.position.set(50,30,50),s.castShadow=!0,s.shadow.mapSize.width=512,s.shadow.mapSize.height=512,s.shadow.camera.near=.1,s.shadow.camera.far=1e3,s.shadow.camera.top=200,s.shadow.camera.right=200,s.shadow.camera.bottom=-200,s.shadow.camera.left=-200,this.scene.add(s)}onResize(){this.renderer.setSize(this.element.clientWidth,this.element.clientHeight),this.camera.aspect=this.element.clientWidth/this.element.clientHeight,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera),this.camera.updateMatrixWorld()}}return ma(()=>{const r=JSON.parse(JSON.stringify(e.data.features));if(!t.value||!r.length)return;const s=new i(t.value);s.add(new Yt(new Ts(20,20,20,20),new wa({wireframe:!0,opacity:.3,transparent:!0})));const o=new bc({color:"lightgreen",emissive:"#000"}),a=new bc({color:"lightblue",emissive:"#000"}),l=new v2,{lineStringGeometries:c,polygonGeometries:u}=l.build(r,{polygonHeight:1,lineStringWidth:.25,lineStringHeight:.1,lineStringSteps:96}),h=c.map(m=>new Yt(m,o)),f=u.map(m=>new Yt(m,a));s.add(...h,...f)}),(r,s)=>(Mu(),Su("div",{class:"preview",ref_key:"previewElement",ref:t},null,512))}});const M2=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},S2=M2(y2,[["__scopeId","data-v-32cc2d4c"]]),b2=_n("div",{class:"row"},[_n("div",{class:"col-xs-12 text-center mb-32"},[_n("h1",null,"threejs-geojson")])],-1),w2={class:"row"},E2={class:"col-xs-12 col-md-6"},T2={class:"col-xs-12 col-md-6"},A2=cu({__name:"App",setup(n){const e=Vd,t=`
const roadMaterial = new MeshLambertMaterial({ color: 'lightgreen', emissive: '#000' });
const buildingMaterial = new MeshLambertMaterial({ color: 'lightblue', emissive: '#000' });

const preview = new GeoJsonPreview();
const { lineStringGeometries, polygonGeometries } = preview.build(features, {
  polygonHeight: 1,
  lineStringWidth: 0.25,
  lineStringHeight: 0.1,
  lineStringSteps: 96,
});

const roads = lineStringGeometries.map((feature) => new Mesh(feature, roadMaterial));
const buildings = polygonGeometries.map((feature) => new Mesh(feature, buildingMaterial));

scene.add(...roads, ...buildings);
`.trim();return(i,r)=>(Mu(),Su(Wt,null,[b2,_n("div",w2,[_n("div",E2,[On(S2,{data:Do(e)},null,8,["data"])]),_n("div",T2,[_n("pre",null,gh(Do(t)),1)])])],64))}});zd(A2).mount("#app");
