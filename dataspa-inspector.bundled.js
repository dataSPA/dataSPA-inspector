/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;let n=class{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(s)})(t):t,{is:h,defineProperty:o,getOwnPropertyDescriptor:c,getOwnPropertyNames:a,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,v=globalThis,u=v.trustedTypes,p=u?u.emptyScript:"",g=v.reactiveElementPolyfillSupport,f=(t,s)=>t,m={toAttribute(t,s){switch(s){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,s)=>!h(t,s),b={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&o(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:n}=c(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get:e,set(s){const r=e?.call(this);n?.call(this,s),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,s=[...a(t),...l(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(r(t))}else void 0!==t&&s.push(r(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(s,i.type);this._$Em=t,null==n?this.removeAttribute(e):this.setAttribute(e,n),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=e;const r=n.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,n=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??w)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:e,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,g?.({ReactiveElement:x}),(v.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,S=y.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+k,E=`<${M}>`,$=document,O=()=>$.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,P=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,V=/"/g,Z=/^(?:script|style|textarea|title)$/i,T=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),D=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),I=new WeakMap,z=$.createTreeWalker($,129);function q(t,s){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(s):s}const J=(t,s)=>{const i=t.length-1,e=[];let n,r=2===s?"<svg>":3===s?"<math>":"",h=U;for(let s=0;s<i;s++){const i=t[s];let o,c,a=-1,l=0;for(;l<i.length&&(h.lastIndex=l,c=h.exec(i),null!==c);)l=h.lastIndex,h===U?"!--"===c[1]?h=B:void 0!==c[1]?h=P:void 0!==c[2]?(Z.test(c[2])&&(n=RegExp("</"+c[2],"g")),h=L):void 0!==c[3]&&(h=L):h===L?">"===c[0]?(h=n??U,a=-1):void 0===c[1]?a=-2:(a=h.lastIndex-c[2].length,o=c[1],h=void 0===c[3]?L:'"'===c[3]?V:N):h===V||h===N?h=L:h===B||h===P?h=U:(h=L,n=void 0);const d=h===L&&t[s+1].startsWith("/>")?" ":"";r+=h===U?i+E:a>=0?(e.push(o),i.slice(0,a)+C+i.slice(a)+k+d):i+k+(-2===a?s:d)}return[q(t,r+(t[i]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),e]};class W{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let n=0,r=0;const h=t.length-1,o=this.parts,[c,a]=J(t,s);if(this.el=W.createElement(c,i),z.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=z.nextNode())&&o.length<h;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(C)){const s=a[r++],i=e.getAttribute(t).split(k),h=/([.?@])?(.*)/.exec(s);o.push({type:1,index:n,name:h[2],strings:i,ctor:"."===h[1]?Y:"?"===h[1]?_:"@"===h[1]?tt:Q}),e.removeAttribute(t)}else t.startsWith(k)&&(o.push({type:6,index:n}),e.removeAttribute(t));if(Z.test(e.tagName)){const t=e.textContent.split(k),s=t.length-1;if(s>0){e.textContent=S?S.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],O()),z.nextNode(),o.push({type:2,index:++n});e.append(t[s],O())}}}else if(8===e.nodeType)if(e.data===M)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(k,t+1));)o.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,s){const i=$.createElement("template");return i.innerHTML=t,i}}function K(t,s,i=t,e){if(s===D)return s;let n=void 0!==e?i._$Co?.[e]:i._$Cl;const r=H(s)?void 0:s._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,e)),void 0!==e?(i._$Co??=[])[e]=n:i._$Cl=n),void 0!==n&&(s=K(t,n._$AS(t,s.values),n,e)),s}class X{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??$).importNode(s,!0);z.currentNode=e;let n=z.nextNode(),r=0,h=0,o=i[0];for(;void 0!==o;){if(r===o.index){let s;2===o.type?s=new F(n,n.nextSibling,this,t):1===o.type?s=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(s=new st(n,this,t)),this._$AV.push(s),o=i[++h]}r!==o?.index&&(n=z.nextNode(),r++)}return z.currentNode=$,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class F{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,e){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=K(this,t,s),H(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new X(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=I.get(t.strings);return void 0===s&&I.set(t.strings,s=new W(t)),s}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const n of t)e===s.length?s.push(i=new F(this.O(O()),this.O(O()),this,this.options)):i=s[e],i._$AI(n),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,s=this,i,e){const n=this.strings;let r=!1;if(void 0===n)t=K(this,t,s,0),r=!H(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const e=t;let h,o;for(t=n[0],h=0;h<n.length-1;h++)o=K(this,e[i+h],s,h),o===D&&(o=this._$AH[h]),r||=!H(o)||o!==this._$AH[h],o===G?t=G:t!==G&&(t+=(o??"")+n[h+1]),this._$AH[h]=o}r&&!e&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class _ extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class tt extends Q{constructor(t,s,i,e,n){super(t,s,i,e,n),this.type=5}_$AI(t,s=this){if((t=K(this,t,s,0)??G)===D)return;const i=this._$AH,e=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==G&&(i===G||e);e&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=y.litHtmlPolyfillSupport;it?.(W,F),(y.litHtmlVersions??=[]).push("3.3.1");const et=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{const e=i?.renderBefore??s;let n=e._$litPart$;if(void 0===n){const t=i?.renderBefore??null;e._$litPart$=n=new F(s.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}nt._$litElement$=!0,nt.finalized=!0,et.litElementHydrateSupport?.({LitElement:nt});const rt=et.litElementPolyfillSupport;rt?.({LitElement:nt}),(et.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:w},ot=(t=ht,s,i)=>{const{kind:e,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===e&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const n=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,n,t)},init(s){return void 0!==s&&this.C(e,void 0,t,s),s}}}if("setter"===e){const{name:e}=i;return function(i){const n=this[e];s.call(this,i),this.requestUpdate(e,n,t)}}throw Error("Unsupported decorator location: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return(s,i)=>"object"==typeof i?ot(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return ct({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M4 7v2c0 .55-.45 1-1 1s-1 .45-1 1v2c0 .55.45 1 1 1s1 .45 1 1v2c0 1.66 1.34 3 3 3h2c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H7C5.34 4 4 5.34 4 7m17 3c-.55 0-1-.45-1-1V7c0-1.66-1.34-3-3-3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.66 0 3-1.34 3-3v-2c0-.55.45-1 1-1s1-.45 1-1v-2c0-.55-.45-1-1-1"
    />
  </svg>
`,dt=T` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5M7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
  />
</svg>`,vt=T` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"
  />
</svg>`,ut=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
    />
  </svg>
`,pt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
    />
  </svg>
`,gt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
    />
  </svg>
`,ft=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M4.255 6a7 7 0 1 1-1.242 3.568A.53.53 0 0 0 2.5 9a.474.474 0 0 0-.48.435q-.018.28-.02.565a8 8 0 1 0 1.5-4.665V3.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 3 7h3a.5.5 0 0 0 0-1zm5.236.88A1 1 0 0 0 8 7.751v4.501a1 1 0 0 0 1.49.872l3.998-2.25a1 1 0 0 0 0-1.743z"
    />
  </svg>
`,mt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"
    />
  </svg>
`,wt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621l-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621l.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621l-.707.707L8.5 9.208V11.5z"
    />
  </svg>
`,bt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 10.03A3.515 3.515 0 0 1 13.97 15" />
      <path
        stroke-linejoin="round"
        d="M4.853 19.147c3.196 3.196 8.06 3.707 11.789 1.533c.887-.517 1.33-.776 1.357-1.302s-.471-.89-1.468-1.618c-1.848-1.35-3.667-3-5.48-4.812C9.24 11.136 7.59 9.317 6.24 7.47c-.728-.997-1.092-1.495-1.618-1.468s-.785.47-1.302 1.357c-2.174 3.73-1.663 8.593 1.533 11.79Z"
      />
      <path
        stroke-linecap="round"
        d="M15.557 2c1.68.172 3.224.84 4.412 2.026c1.192 1.19 1.86 2.737 2.031 4.42M18.502 9a4.66 4.66 0 0 0-1.242-2.27A4.67 4.67 0 0 0 15 5.495"
      />
    </g>
  </svg>
`,xt=T`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="16"
    viewBox="0 0 14 16"
  >
    <path
      fill="currentColor"
      d="M5.5 10a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l6.5-6.49c.2-.2.51-.2.71 0s.2.51 0 .71l-6.5 6.5c-.1.1-.23.15-.35.15Z"
    />
    <path
      fill="currentColor"
      d="M9.5 10h-4c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5V9h3.5c.28 0 .5.22.5.5s-.22.5-.5.5"
    />
    <path
      fill="currentColor"
      d="M11.5 14h-9c-.83 0-1.5-.67-1.5-1.5v-9C1 2.67 1.67 2 2.5 2h5c.28 0 .5.22.5.5s-.22.5-.5.5h-5c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-5c0-.28.22-.5.5-.5s.5.22.5.5v5c0 .83-.67 1.5-1.5 1.5"
    />
  </svg>
`;var yt=function(t,s,i,e){for(var n,r=arguments.length,h=r<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(h=(r<3?n(h):r>3?n(s,i,h):n(s,i))||h);return r>3&&h&&Object.defineProperty(s,i,h),h};const St="datastar-fetch";let At=class extends nt{constructor(){super(...arguments),this.signals={},this.show=!1,this.panel="signals",this.highlightClassName="__dataSPAHighlight",this.elementPatchEvents=[],this.signalPatchEvents=[],this.maxPatchEvents=20,this.maxSignalEvents=20,this.signalTableNotObject=!1,this.datastarFetchHandler=t=>{const{detail:s}=t;if(s&&["datastar-patch-elements","datastar-patch-signals"].includes(s.type)&&!s.inspectorReplayed)switch(s.type){case"datastar-patch-elements":this.elementPatchEvents=[...this.elementPatchEvents,s],this.elementPatchEvents.length>this.maxPatchEvents&&(this.elementPatchEvents=this.elementPatchEvents.slice(1));break;case"datastar-patch-signals":this.signalPatchEvents=[...this.signalPatchEvents,s],this.signalPatchEvents.length>this.maxSignalEvents&&(this.signalPatchEvents=this.signalPatchEvents.slice(1))}}}connectedCallback(){if(super.connectedCallback(),!document.getElementById("__dataSPAHighlightStyle")){const t=document.createElement("style");t.id="__dataSPAHighlightStyle",t.textContent=`\n        .${this.highlightClassName} {\n          outline: 3px solid magenta !important;\n          outline-offset: -3px !important;\n        }\n      `,document.head.appendChild(t)}document.addEventListener(St,this.datastarFetchHandler),this.setAttribute("data-attr:signals","$")}replayEvent(t){return s=>{document.dispatchEvent(new CustomEvent(St,{detail:{...t,inspectorReplayed:!0}}))}}sendToConsole(t){return s=>{s.stopPropagation(),s.preventDefault(),console.table(t)}}sendToClipboard(t){return s=>{s.stopPropagation(),s.preventDefault(),navigator.clipboard&&navigator.clipboard.writeText(JSON.stringify(t,null,2))}}scrollToSignal(t){return s=>{if(!s.shiftKey)return;s.stopPropagation(),s.preventDefault();const i=`//*[ @*[starts-with(name(), 'data-') and contains(., '$${t}')] ]`,e=document.evaluate(i,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),n=[];for(let t=0;t<e.snapshotLength;t++){n.push(e.snapshotItem(t));e.snapshotItem(t).scrollIntoView({behavior:"smooth",block:"center"});break}}}highlightSignal(t){return()=>{const s=`//*[ @*[starts-with(name(), 'data-') and contains(., '$${t}')] ]`,i=document.evaluate(s,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),e=[];for(let t=0;t<i.snapshotLength;t++){e.push(i.snapshotItem(t));i.snapshotItem(t).classList.add(this.highlightClassName)}}}unhighlightSignal(){const t=document.getElementsByClassName(this.highlightClassName),s=Array.from(t);for(const t of s)t.classList.remove(this.highlightClassName)}signalDetails(t){return t&&t.argsRaw&&t.argsRaw.signals?JSON.stringify(JSON.parse(t.argsRaw.signals),null,2):""}documentFragmentFromEvent(t){if(!t)return null;if(!t.argsRaw)return null;if(!t.argsRaw.elements)return null;const s=t.argsRaw.elements,i=s.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,""),e=/<\/html>/.test(i),n=/<\/head>/.test(i),r=/<\/body>/.test(i),h=(new DOMParser).parseFromString(e||n||r?s:`<body><template>${s}</template></body>`,"text/html");let o=document.createDocumentFragment();return e?o.appendChild(h.documentElement):n&&r?(o.appendChild(h.head),o.appendChild(h.body)):n?o.appendChild(h.head):r?o.appendChild(h.body):o=h.querySelector("template").content,o}getSelectors(t){if(!t)return[];if(t.argsRaw&&t.argsRaw.selector)return[t.argsRaw.selector];let s=[];const i=this.documentFragmentFromEvent(t);if(!i)return s;for(const t of i.children)t instanceof HTMLHtmlElement?s.push("DOCUMENT"):t instanceof HTMLBodyElement?s.push("BODY"):t instanceof HTMLHeadElement?s.push("HEAD"):s.push(`#${t.id}`);return s}summaryForSignalEvent(t){if(!t)return"UNKNOWN";if(!t.argsRaw||!t.argsRaw.signals)return"UNKNOWN";const s=JSON.parse(t.argsRaw.signals),i=Object.keys(s).reduce(function(t,s){return t.concat([s])},[]);return i.join(", ")}summaryForElementEvent(t){return`${this.getSelectors(t).join(", ")}`}htmlFromEvent(t){const s=this.documentFragmentFromEvent(t);if(!s)return"";const i=new XMLSerializer,e=new RegExp(' xmlns="http://www.w3.org/1999/xhtml"',"g");let n=i.serializeToString(s);return n=n.replace(e,""),n}renderSSE(){return T`
      <div class="sse">
        ${this.elementPatchEvents.map(t=>T`
            <div class="event-row">
              <details>
                <summary>${this.summaryForElementEvent(t)}</summary>
                <pre>${this.htmlFromEvent(t)}</pre>
              </details>
              <div class="actions">
                <span @click="${this.replayEvent(t)}">${ft}</span>
                <span @click="${this.sendToConsole(t)}"
                  >${gt}</span
                >
                <span @click="${this.sendToClipboard(t)}"
                  >${pt}</span
                >
              </div>
            </div>
          `)}
      </div>
    `}renderServerSignals(){return T`
      <div class="sse">
        ${this.signalPatchEvents.map(t=>T`
            <div class="event-row">
              <details>
                <summary>${this.summaryForSignalEvent(t)}</summary>
                <pre>${this.signalDetails(t)}</pre>
              </details>
              <div class="actions">
                <span @click="${this.replayEvent(t)}">${ft}</span>
                <span @click="${this.sendToConsole(t)}"
                  >${gt}</span
                >
                <span @click="${this.sendToClipboard(t)}"
                  >${pt}</span
                >
              </div>
            </div>
          `)}
      </div>
    `}renderSignals(){return T`
      <div class="signals">
        ${this.signalTableNotObject?T`
              <pre>
${JSON.stringify(this.signals,null,2)}
            </pre
              >
            `:T`
              <table>
                <tbody>
                  ${function*(t,s){if(void 0!==t){let i=0;for(const e of t)yield s(e,i++)}}(Object.entries(this.signals),(t,s)=>T`
                      <tr
                        @touchstart="${this.highlightSignal(t[0])}"
                        @mouseenter="${this.highlightSignal(t[0])}"
                        @mouseleave="${this.unhighlightSignal}"
                        @click="${this.scrollToSignal(t[0])}"
                      >
                        <td>${t[0]}</td>
                        <td>
                          <div>${JSON.stringify(t[1])}</div>
                        </td>
                        <td class="actions">
                          <span @click="${this.sendToConsole(t[1])}"
                            >${gt}</span
                          >
                          <span @click="${this.sendToClipboard(t[1])}"
                            >${pt}</span
                          >
                        </td>
                      </tr>
                    `)}
                </tbody>
              </table>
            `}
      </div>
    `}setMaxSignalEvents(t){let s=parseInt(t.target.value);isNaN(s)||(s<this.maxSignalEvents&&this.signalPatchEvents.length>s&&(this.signalPatchEvents=this.signalPatchEvents.slice(this.maxSignalEvents-s)),this.maxSignalEvents=s)}setMaxSSEEvents(t){let s=parseInt(t.target.value);isNaN(s)||(s<this.maxPatchEvents&&this.elementPatchEvents.length>s&&(this.elementPatchEvents=this.elementPatchEvents.slice(this.maxPatchEvents-s)),this.maxPatchEvents=s)}clearSSEEvents(){this.elementPatchEvents=[]}clearSignalEvents(){this.signalPatchEvents=[]}renderSSEFooter(){return T`
      <div class="sse-footer">
        <label for="max-events"
          >Max Events:
          <input
            type="number"
            id="max-events"
            min="1"
            max="1000"
            value="${this.maxPatchEvents}"
            @input="${this.setMaxSSEEvents}"
          />
        </label>
        <button @click="${this.clearSSEEvents}">Clear</button>
      </div>
    `}renderSignalsFooter(){return T`
      <div
        class="signals-footer"
        @click="${()=>this.signalTableNotObject=!this.signalTableNotObject}"
      >
        ${lt}
        ${this.signalTableNotObject?dt:vt} ${ut}
      </div>
    `}renderServerSignalsFooter(){return T`
      <div class="sse-footer">
        <label for="max-events"
          >Max Events:
          <input
            type="number"
            id="max-events"
            min="1"
            max="1000"
            value="${this.maxSignalEvents}"
            @input="${this.setMaxSignalEvents}"
          />
        </label>
        <button @click="${this.clearSignalEvents}">Clear</button>
      </div>
    `}render(){if(!this.show)return T`
        <div class="minified" @click="${()=>this.show=!0}">
          <img src="data:image/webp;base64,${"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"}" />
        </div>
      `;let t,s;switch(this.panel){case"signals":default:t=this.renderSignals.bind(this),s=this.renderSignalsFooter.bind(this);break;case"server-signals":t=this.renderServerSignals.bind(this),s=this.renderServerSignalsFooter.bind(this);break;case"sse":t=this.renderSSE.bind(this),s=this.renderSSEFooter.bind(this)}return T`
      <div class="container">
        <header class="nav">
          <div>dataSPA Inspector</div>
          <div>
            <button
              @click="${()=>this.panel="signals"}"
              class=${"signals"===this.panel?"active":G}
            >
              ${bt}
            </button>
            <button
              @click="${()=>this.panel="server-signals"}"
              class=${"server-signals"===this.panel?"active":G}
            >
              ${wt} ${this.signalPatchEvents.length}
            </button>
            <button
              @click="${()=>this.panel="sse"}"
              class=${"sse"===this.panel?"active":G}
            >
              ${mt} ${this.elementPatchEvents.length}
            </button>
          </div>
        </header>
        <hr />
        ${t()}
        <hr />
        <footer>
          <div>${s()}</div>
          <div id="minimise-icon" @click=${()=>this.show=!1}>
            ${xt}
          </div>
        </footer>
      </div>
    `}};At.styles=((t,...s)=>{const e=1===t.length?t[0]:s.reduce((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1],t[0]);return new n(e,t,i)})`
    .minified {
      position: fixed;
      bottom: 5px;
      right: 5px;
      opacity: 0.85;
      z-index: 1000;
    }
    .minified img {
      width: 50px;
      border-radius: 50%;
      border: 3px solid rgba(200, 200, 200, 1);
    }
    .signals-footer {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding-top: 5px;
    }

    #minimise-icon {
      transform: scaleX(-1);
    }

    .active {
      background-color: #d55634;
      border: none;
    }

    header button {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    hr {
      margin: 1px;
      padding: 0;
      background-color: black;
      border: none;
      height: 1px;
    }

    .container {
      position: fixed;
      display: block;
      bottom: 5px;
      right: 5px;
      background: grey;
      opacity: 0.9;
      border-radius: 0.5rem;
      max-width: 50vw;
      z-index: 1000;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 3px 3px 3px;
    }
    footer {
      padding: 0 5px 0.5rem 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .nav > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .signals {
      overflow-x: scroll;
      padding: 0 5px;
    }

    .signals table {
      width: 100%;
      border-collapse: collapse;
      padding-top: 5px;
      margin-right: 5px;
    }

    .signals td {
      white-space: nowrap;
    }

    .sse {
      overflow: scroll;
      padding: 0 5px;
      min-height: 100px;
      max-height: 30vh;
    }

    .actions {
      display: flex;
      position: sticky;
      right: 0;
      background-color: grey;
      flex-direction: row;
      gap: 3px;
      height: 20px;
    }

    svg {
      height: 20px;
    }

    .event-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
    }

    .event-row pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      padding: 2px;
      margin: 0;
    }
  `,yt([ct({type:Object})],At.prototype,"signals",void 0),yt([at()],At.prototype,"show",void 0),yt([at()],At.prototype,"panel",void 0),yt([at()],At.prototype,"elementPatchEvents",void 0),yt([at()],At.prototype,"signalPatchEvents",void 0),yt([at()],At.prototype,"maxPatchEvents",void 0),yt([at()],At.prototype,"maxSignalEvents",void 0),yt([at()],At.prototype,"signalTableNotObject",void 0),At=yt([(t=>(s,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,s)}):customElements.define(t,s)})("dataspa-inspector")],At);export{At as DataSPAInspector};
