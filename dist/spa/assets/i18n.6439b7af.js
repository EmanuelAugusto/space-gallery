import{h as Xe,e as wt,r as Q,c as q,w as ce,F as Ut,i as Wt,g as Ye,a as Vt,o as xt,b as jt,d as Gt,T as $t,f as Ht}from"./index.fa48dc01.js";/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const ie=typeof window!="undefined",Bt=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",j=e=>Bt?Symbol(e):e,Kt=(e,t,n)=>Xt({l:e,k:t,s:n}),Xt=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),R=e=>typeof e=="number"&&isFinite(e),Yt=e=>he(e)==="[object Date]",ae=e=>he(e)==="[object RegExp]",re=e=>T(e)&&Object.keys(e).length===0;function zt(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const w=Object.assign;function Ae(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Jt=Object.prototype.hasOwnProperty;function Ee(e,t){return Jt.call(e,t)}const C=Array.isArray,v=e=>typeof e=="function",_=e=>typeof e=="string",F=e=>typeof e=="boolean",L=e=>e!==null&&typeof e=="object",ze=Object.prototype.toString,he=e=>ze.call(e),T=e=>he(e)==="[object Object]",Qt=e=>e==null?"":C(e)||T(e)&&e.toString===ze?JSON.stringify(e,null,2):String(e);/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const Je={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};function Qe(e,t,n={}){const{domain:a,messages:r,args:s}=n,l=e,i=new SyntaxError(String(l));return i.code=e,t&&(i.location=t),i.domain=a,i}/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const qt={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const G=[];G[0]={w:[0],i:[3,0],["["]:[4],o:[7]};G[1]={w:[1],["."]:[2],["["]:[4],o:[7]};G[2]={w:[2],i:[3,0],[0]:[3,0]};G[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};G[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};G[5]={["'"]:[4,0],o:8,l:[5,0]};G[6]={['"']:[4,0],o:8,l:[6,0]};const Zt=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function en(e){return Zt.test(e)}function tn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function nn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function an(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:en(t)?tn(t):"*"+t}function rn(e){const t=[];let n=-1,a=0,r=0,s,l,i,c,m,d,b;const g=[];g[0]=()=>{l===void 0?l=i:l+=i},g[1]=()=>{l!==void 0&&(t.push(l),l=void 0)},g[2]=()=>{g[0](),r++},g[3]=()=>{if(r>0)r--,a=4,g[0]();else{if(r=0,l===void 0||(l=an(l),l===!1))return!1;g[1]()}};function E(){const N=e[n+1];if(a===5&&N==="'"||a===6&&N==='"')return n++,i="\\"+N,g[0](),!0}for(;a!==null;)if(n++,s=e[n],!(s==="\\"&&E())){if(c=nn(s),b=G[a],m=b[c]||b.l||8,m===8||(a=m[0],m[1]!==void 0&&(d=g[m[1]],d&&(i=s,d()===!1))))return;if(a===7)return t}}const Fe=new Map;function ln(e,t){return L(e)?e[t]:null}function sn(e,t){if(!L(e))return null;let n=Fe.get(t);if(n||(n=rn(t),n&&Fe.set(t,n)),!n)return null;const a=n.length;let r=e,s=0;for(;s<a;){const l=r[n[s]];if(l===void 0)return null;r=l,s++}return r}const on=e=>e,cn=e=>"",un="text",mn=e=>e.length===0?"":e.join(""),fn=Qt;function Ce(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function _n(e){const t=R(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(R(e.named.count)||R(e.named.n))?R(e.named.count)?e.named.count:R(e.named.n)?e.named.n:t:t}function gn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function dn(e={}){const t=e.locale,n=_n(e),a=L(e.pluralRules)&&_(t)&&v(e.pluralRules[t])?e.pluralRules[t]:Ce,r=L(e.pluralRules)&&_(t)&&v(e.pluralRules[t])?Ce:void 0,s=h=>h[a(n,h.length,r)],l=e.list||[],i=h=>l[h],c=e.named||{};R(e.pluralIndex)&&gn(n,c);const m=h=>c[h];function d(h){const y=v(e.messages)?e.messages(h):L(e.messages)?e.messages[h]:!1;return y||(e.parent?e.parent.message(h):cn)}const b=h=>e.modifiers?e.modifiers[h]:on,g=T(e.processor)&&v(e.processor.normalize)?e.processor.normalize:mn,E=T(e.processor)&&v(e.processor.interpolate)?e.processor.interpolate:fn,N=T(e.processor)&&_(e.processor.type)?e.processor.type:un,O={list:i,named:m,plural:s,linked:(h,...y)=>{const[D,I]=y;let f="text",A="";y.length===1?L(D)?(A=D.modifier||A,f=D.type||f):_(D)&&(A=D||A):y.length===2&&(_(D)&&(A=D||A),_(I)&&(f=I||f));let M=d(h)(O);return f==="vnode"&&C(M)&&A&&(M=M[0]),A?b(A)(M,f):M},message:d,type:N,interpolate:E,normalize:g};return O}let bn=null;qt.FunctionTranslate;function En(e){return t=>bn}const hn={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};function Nn(e,t,n){return[...new Set([n,...C(t)?t:L(t)?Object.keys(t):_(t)?[t]:[n]])]}function qe(e,t,n){const a=_(n)?n:Ne,r=e;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(a);if(!s){s=[];let l=[n];for(;C(l);)l=De(s,l,t);const i=C(t)||!T(t)?t:t.default?t.default:null;l=_(i)?[i]:i,C(l)&&De(s,l,!1),r.__localeChainCache.set(a,s)}return s}function De(e,t,n){let a=!0;for(let r=0;r<t.length&&F(a);r++){const s=t[r];_(s)&&(a=Tn(e,t[r],n))}return a}function Tn(e,t,n){let a;const r=t.split("-");do{const s=r.join("-");a=In(e,s,n),r.splice(-1,1)}while(r.length&&a===!0);return a}function In(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const r=t.replace(/!/g,"");e.push(r),(C(n)||T(n))&&n[r]&&(a=n[r])}return a}const pn="9.2.2",le=-1,Ne="en-US",Se="",Re=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function yn(){return{upper:(e,t)=>t==="text"&&_(e)?e.toUpperCase():t==="vnode"&&L(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&_(e)?e.toLowerCase():t==="vnode"&&L(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&_(e)?Re(e):t==="vnode"&&L(e)&&"__v_isVNode"in e?Re(e.children):e}}let Ln,Ze;function On(e){Ze=e}let et;function An(e){et=e}let ve=0;function Fn(e={}){const t=_(e.version)?e.version:pn,n=_(e.locale)?e.locale:Ne,a=C(e.fallbackLocale)||T(e.fallbackLocale)||_(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,r=T(e.messages)?e.messages:{[n]:{}},s=T(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},l=T(e.numberFormats)?e.numberFormats:{[n]:{}},i=w({},e.modifiers||{},yn()),c=e.pluralRules||{},m=v(e.missing)?e.missing:null,d=F(e.missingWarn)||ae(e.missingWarn)?e.missingWarn:!0,b=F(e.fallbackWarn)||ae(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,E=!!e.unresolving,N=v(e.postTranslation)?e.postTranslation:null,p=T(e.processor)?e.processor:null,O=F(e.warnHtmlMessage)?e.warnHtmlMessage:!0,h=!!e.escapeParameter,y=v(e.messageCompiler)?e.messageCompiler:Ln,D=v(e.messageResolver)?e.messageResolver:Ze||ln,I=v(e.localeFallbacker)?e.localeFallbacker:et||Nn,f=L(e.fallbackContext)?e.fallbackContext:void 0,A=v(e.onWarn)?e.onWarn:zt,M=e,X=L(M.__datetimeFormatters)?M.__datetimeFormatters:new Map,Y=L(M.__numberFormatters)?M.__numberFormatters:new Map,z=L(M.__meta)?M.__meta:{};ve++;const V={version:t,cid:ve,locale:n,fallbackLocale:a,messages:r,modifiers:i,pluralRules:c,missing:m,missingWarn:d,fallbackWarn:b,fallbackFormat:g,unresolving:E,postTranslation:N,processor:p,warnHtmlMessage:O,escapeParameter:h,messageCompiler:y,messageResolver:D,localeFallbacker:I,fallbackContext:f,onWarn:A,__meta:z};return V.datetimeFormats=s,V.numberFormats=l,V.__datetimeFormatters=X,V.__numberFormatters=Y,V}function Te(e,t,n,a,r){const{missing:s,onWarn:l}=e;if(s!==null){const i=s(e,n,t,r);return _(i)?i:t}else return t}function Z(e,t,n){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let tt=Je.__EXTEND_POINT__;const oe=()=>++tt,B={INVALID_ARGUMENT:tt,INVALID_DATE_ARGUMENT:oe(),INVALID_ISO_DATE_ARGUMENT:oe(),__EXTEND_POINT__:oe()};function K(e){return Qe(e,null,void 0)}const Me=()=>"",$=e=>v(e);function ke(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:r,messageCompiler:s,fallbackLocale:l,messages:i}=e,[c,m]=ue(...t),d=F(m.missingWarn)?m.missingWarn:e.missingWarn,b=F(m.fallbackWarn)?m.fallbackWarn:e.fallbackWarn,g=F(m.escapeParameter)?m.escapeParameter:e.escapeParameter,E=!!m.resolvedMessage,N=_(m.default)||F(m.default)?F(m.default)?s?c:()=>c:m.default:n?s?c:()=>c:"",p=n||N!=="",O=_(m.locale)?m.locale:e.locale;g&&Cn(m);let[h,y,D]=E?[c,O,i[O]||{}]:nt(e,c,O,l,b,d),I=h,f=c;if(!E&&!(_(I)||$(I))&&p&&(I=N,f=I),!E&&(!(_(I)||$(I))||!_(y)))return r?le:c;let A=!1;const M=()=>{A=!0},X=$(I)?I:at(e,c,y,I,f,M);if(A)return I;const Y=Rn(e,y,D,m),z=dn(Y),V=Dn(e,X,z);return a?a(V,c):V}function Cn(e){C(e.list)?e.list=e.list.map(t=>_(t)?Ae(t):t):L(e.named)&&Object.keys(e.named).forEach(t=>{_(e.named[t])&&(e.named[t]=Ae(e.named[t]))})}function nt(e,t,n,a,r,s){const{messages:l,onWarn:i,messageResolver:c,localeFallbacker:m}=e,d=m(e,a,n);let b={},g,E=null;const N="translate";for(let p=0;p<d.length&&(g=d[p],b=l[g]||{},(E=c(b,t))===null&&(E=b[t]),!(_(E)||v(E)));p++){const O=Te(e,t,g,s,N);O!==t&&(E=O)}return[E,g,b]}function at(e,t,n,a,r,s){const{messageCompiler:l,warnHtmlMessage:i}=e;if($(a)){const m=a;return m.locale=m.locale||n,m.key=m.key||t,m}if(l==null){const m=()=>a;return m.locale=n,m.key=t,m}const c=l(a,Sn(e,n,r,a,i,s));return c.locale=n,c.key=t,c.source=a,c}function Dn(e,t,n){return t(n)}function ue(...e){const[t,n,a]=e,r={};if(!_(t)&&!R(t)&&!$(t))throw K(B.INVALID_ARGUMENT);const s=R(t)?String(t):($(t),t);return R(n)?r.plural=n:_(n)?r.default=n:T(n)&&!re(n)?r.named=n:C(n)&&(r.list=n),R(a)?r.plural=a:_(a)?r.default=a:T(a)&&w(r,a),[s,r]}function Sn(e,t,n,a,r,s){return{warnHtmlMessage:r,onError:l=>{throw s&&s(l),l},onCacheKey:l=>Kt(t,n,l)}}function Rn(e,t,n,a){const{modifiers:r,pluralRules:s,messageResolver:l,fallbackLocale:i,fallbackWarn:c,missingWarn:m,fallbackContext:d}=e,g={locale:t,modifiers:r,pluralRules:s,messages:E=>{let N=l(n,E);if(N==null&&d){const[,,p]=nt(d,E,t,i,c,m);N=l(p,E)}if(_(N)){let p=!1;const h=at(e,E,t,N,E,()=>{p=!0});return p?Me:h}else return $(N)?N:Me}};return e.processor&&(g.processor=e.processor),a.list&&(g.list=a.list),a.named&&(g.named=a.named),R(a.plural)&&(g.pluralIndex=a.plural),g}function Pe(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__datetimeFormatters:i}=e,[c,m,d,b]=me(...t),g=F(d.missingWarn)?d.missingWarn:e.missingWarn;F(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const E=!!d.part,N=_(d.locale)?d.locale:e.locale,p=l(e,r,N);if(!_(c)||c==="")return new Intl.DateTimeFormat(N,b).format(m);let O={},h,y=null;const D="datetime format";for(let A=0;A<p.length&&(h=p[A],O=n[h]||{},y=O[c],!T(y));A++)Te(e,c,h,g,D);if(!T(y)||!_(h))return a?le:c;let I=`${h}__${c}`;re(b)||(I=`${I}__${JSON.stringify(b)}`);let f=i.get(I);return f||(f=new Intl.DateTimeFormat(h,w({},y,b)),i.set(I,f)),E?f.formatToParts(m):f.format(m)}const rt=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function me(...e){const[t,n,a,r]=e,s={};let l={},i;if(_(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw K(B.INVALID_ISO_DATE_ARGUMENT);const m=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();i=new Date(m);try{i.toISOString()}catch{throw K(B.INVALID_ISO_DATE_ARGUMENT)}}else if(Yt(t)){if(isNaN(t.getTime()))throw K(B.INVALID_DATE_ARGUMENT);i=t}else if(R(t))i=t;else throw K(B.INVALID_ARGUMENT);return _(n)?s.key=n:T(n)&&Object.keys(n).forEach(c=>{rt.includes(c)?l[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:T(a)&&(l=a),T(r)&&(l=r),[s.key||"",i,s,l]}function we(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__datetimeFormatters.has(s)||a.__datetimeFormatters.delete(s)}}function Ue(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:r,onWarn:s,localeFallbacker:l}=e,{__numberFormatters:i}=e,[c,m,d,b]=fe(...t),g=F(d.missingWarn)?d.missingWarn:e.missingWarn;F(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn;const E=!!d.part,N=_(d.locale)?d.locale:e.locale,p=l(e,r,N);if(!_(c)||c==="")return new Intl.NumberFormat(N,b).format(m);let O={},h,y=null;const D="number format";for(let A=0;A<p.length&&(h=p[A],O=n[h]||{},y=O[c],!T(y));A++)Te(e,c,h,g,D);if(!T(y)||!_(h))return a?le:c;let I=`${h}__${c}`;re(b)||(I=`${I}__${JSON.stringify(b)}`);let f=i.get(I);return f||(f=new Intl.NumberFormat(h,w({},y,b)),i.set(I,f)),E?f.formatToParts(m):f.format(m)}const lt=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function fe(...e){const[t,n,a,r]=e,s={};let l={};if(!R(t))throw K(B.INVALID_ARGUMENT);const i=t;return _(n)?s.key=n:T(n)&&Object.keys(n).forEach(c=>{lt.includes(c)?l[c]=n[c]:s[c]=n[c]}),_(a)?s.locale=a:T(a)&&(l=a),T(r)&&(l=r),[s.key||"",i,s,l]}function We(e,t,n){const a=e;for(const r in n){const s=`${t}__${r}`;!a.__numberFormatters.has(s)||a.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const vn="9.2.2";hn.__EXTEND_POINT__;let st=Je.__EXTEND_POINT__;const P=()=>++st,U={UNEXPECTED_RETURN_TYPE:st,INVALID_ARGUMENT:P(),MUST_BE_CALL_SETUP_TOP:P(),NOT_INSLALLED:P(),NOT_AVAILABLE_IN_LEGACY_MODE:P(),REQUIRED_VALUE:P(),INVALID_VALUE:P(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:P(),NOT_INSLALLED_WITH_PROVIDE:P(),UNEXPECTED_ERROR:P(),NOT_COMPATIBLE_LEGACY_VUE_I18N:P(),BRIDGE_SUPPORT_VUE_2_ONLY:P(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:P(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:P(),__EXTEND_POINT__:P()};function W(e,...t){return Qe(e,null,void 0)}const _e=j("__transrateVNode"),ge=j("__datetimeParts"),de=j("__numberParts"),Mn=j("__setPluralRules");j("__intlifyMeta");const kn=j("__injectWithOption");function be(e){if(!L(e))return e;for(const t in e)if(!!Ee(e,t))if(!t.includes("."))L(e[t])&&be(e[t]);else{const n=t.split("."),a=n.length-1;let r=e;for(let s=0;s<a;s++)n[s]in r||(r[n[s]]={}),r=r[n[s]];r[n[a]]=e[t],delete e[t],L(r[n[a]])&&be(r[n[a]])}return e}function ot(e,t){const{messages:n,__i18n:a,messageResolver:r,flatJson:s}=t,l=T(n)?n:C(a)?{}:{[e]:{}};if(C(a)&&a.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:m}=i;c?(l[c]=l[c]||{},ee(m,l[c])):ee(m,l)}else _(i)&&ee(JSON.parse(i),l)}),r==null&&s)for(const i in l)Ee(l,i)&&be(l[i]);return l}const ne=e=>!L(e)||C(e);function ee(e,t){if(ne(e)||ne(t))throw W(U.INVALID_VALUE);for(const n in e)Ee(e,n)&&(ne(e[n])||ne(t[n])?t[n]=e[n]:ee(e[n],t[n]))}function Pn(e){return e.type}function wn(e,t,n){let a=L(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=ot(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const r=Object.keys(a);r.length&&r.forEach(s=>{e.mergeLocaleMessage(s,a[s])});{if(L(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(l=>{e.mergeDateTimeFormat(l,t.datetimeFormats[l])})}if(L(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(l=>{e.mergeNumberFormat(l,t.numberFormats[l])})}}}function Ve(e){return Gt($t,null,e,0)}let xe=0;function je(e){return(t,n,a,r)=>e(n,a,Ye()||void 0,r)}function ct(e={},t){const{__root:n}=e,a=n===void 0;let r=F(e.inheritLocale)?e.inheritLocale:!0;const s=Q(n&&r?n.locale.value:_(e.locale)?e.locale:Ne),l=Q(n&&r?n.fallbackLocale.value:_(e.fallbackLocale)||C(e.fallbackLocale)||T(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),i=Q(ot(s.value,e)),c=Q(T(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),m=Q(T(e.numberFormats)?e.numberFormats:{[s.value]:{}});let d=n?n.missingWarn:F(e.missingWarn)||ae(e.missingWarn)?e.missingWarn:!0,b=n?n.fallbackWarn:F(e.fallbackWarn)||ae(e.fallbackWarn)?e.fallbackWarn:!0,g=n?n.fallbackRoot:F(e.fallbackRoot)?e.fallbackRoot:!0,E=!!e.fallbackFormat,N=v(e.missing)?e.missing:null,p=v(e.missing)?je(e.missing):null,O=v(e.postTranslation)?e.postTranslation:null,h=n?n.warnHtmlMessage:F(e.warnHtmlMessage)?e.warnHtmlMessage:!0,y=!!e.escapeParameter;const D=n?n.modifiers:T(e.modifiers)?e.modifiers:{};let I=e.pluralRules||n&&n.pluralRules,f;f=(()=>{const o={version:vn,locale:s.value,fallbackLocale:l.value,messages:i.value,modifiers:D,pluralRules:I,missing:p===null?void 0:p,missingWarn:d,fallbackWarn:b,fallbackFormat:E,unresolving:!0,postTranslation:O===null?void 0:O,warnHtmlMessage:h,escapeParameter:y,messageResolver:e.messageResolver,__meta:{framework:"vue"}};return o.datetimeFormats=c.value,o.numberFormats=m.value,o.__datetimeFormatters=T(f)?f.__datetimeFormatters:void 0,o.__numberFormatters=T(f)?f.__numberFormatters:void 0,Fn(o)})(),Z(f,s.value,l.value);function M(){return[s.value,l.value,i.value,c.value,m.value]}const X=q({get:()=>s.value,set:o=>{s.value=o,f.locale=s.value}}),Y=q({get:()=>l.value,set:o=>{l.value=o,f.fallbackLocale=l.value,Z(f,s.value,o)}}),z=q(()=>i.value),V=q(()=>c.value),ye=q(()=>m.value);function mt(){return v(O)?O:null}function ft(o){O=o,f.postTranslation=o}function _t(){return N}function gt(o){o!==null&&(p=je(o)),N=o,f.missing=p}const H=(o,u,x,k,se,te)=>{M();let J;if(J=o(f),R(J)&&J===le){const[Pt,na]=u();return n&&g?k(n):se(Pt)}else{if(te(J))return J;throw W(U.UNEXPECTED_RETURN_TYPE)}};function Le(...o){return H(u=>Reflect.apply(ke,null,[u,...o]),()=>ue(...o),"translate",u=>Reflect.apply(u.t,u,[...o]),u=>u,u=>_(u))}function dt(...o){const[u,x,k]=o;if(k&&!L(k))throw W(U.INVALID_ARGUMENT);return Le(u,x,w({resolvedMessage:!0},k||{}))}function bt(...o){return H(u=>Reflect.apply(Pe,null,[u,...o]),()=>me(...o),"datetime format",u=>Reflect.apply(u.d,u,[...o]),()=>Se,u=>_(u))}function Et(...o){return H(u=>Reflect.apply(Ue,null,[u,...o]),()=>fe(...o),"number format",u=>Reflect.apply(u.n,u,[...o]),()=>Se,u=>_(u))}function ht(o){return o.map(u=>_(u)||R(u)||F(u)?Ve(String(u)):u)}const Nt={normalize:ht,interpolate:o=>o,type:"vnode"};function Tt(...o){return H(u=>{let x;const k=u;try{k.processor=Nt,x=Reflect.apply(ke,null,[k,...o])}finally{k.processor=null}return x},()=>ue(...o),"translate",u=>u[_e](...o),u=>[Ve(u)],u=>C(u))}function It(...o){return H(u=>Reflect.apply(Ue,null,[u,...o]),()=>fe(...o),"number format",u=>u[de](...o),()=>[],u=>_(u)||C(u))}function pt(...o){return H(u=>Reflect.apply(Pe,null,[u,...o]),()=>me(...o),"datetime format",u=>u[ge](...o),()=>[],u=>_(u)||C(u))}function yt(o){I=o,f.pluralRules=I}function Lt(o,u){const x=_(u)?u:s.value,k=Oe(x);return f.messageResolver(k,o)!==null}function Ot(o){let u=null;const x=qe(f,l.value,s.value);for(let k=0;k<x.length;k++){const se=i.value[x[k]]||{},te=f.messageResolver(se,o);if(te!=null){u=te;break}}return u}function At(o){const u=Ot(o);return u!=null?u:n?n.tm(o)||{}:{}}function Oe(o){return i.value[o]||{}}function Ft(o,u){i.value[o]=u,f.messages=i.value}function Ct(o,u){i.value[o]=i.value[o]||{},ee(u,i.value[o]),f.messages=i.value}function Dt(o){return c.value[o]||{}}function St(o,u){c.value[o]=u,f.datetimeFormats=c.value,we(f,o,u)}function Rt(o,u){c.value[o]=w(c.value[o]||{},u),f.datetimeFormats=c.value,we(f,o,u)}function vt(o){return m.value[o]||{}}function Mt(o,u){m.value[o]=u,f.numberFormats=m.value,We(f,o,u)}function kt(o,u){m.value[o]=w(m.value[o]||{},u),f.numberFormats=m.value,We(f,o,u)}xe++,n&&ie&&(ce(n.locale,o=>{r&&(s.value=o,f.locale=o,Z(f,s.value,l.value))}),ce(n.fallbackLocale,o=>{r&&(l.value=o,f.fallbackLocale=o,Z(f,s.value,l.value))}));const S={id:xe,locale:X,fallbackLocale:Y,get inheritLocale(){return r},set inheritLocale(o){r=o,o&&n&&(s.value=n.locale.value,l.value=n.fallbackLocale.value,Z(f,s.value,l.value))},get availableLocales(){return Object.keys(i.value).sort()},messages:z,get modifiers(){return D},get pluralRules(){return I||{}},get isGlobal(){return a},get missingWarn(){return d},set missingWarn(o){d=o,f.missingWarn=d},get fallbackWarn(){return b},set fallbackWarn(o){b=o,f.fallbackWarn=b},get fallbackRoot(){return g},set fallbackRoot(o){g=o},get fallbackFormat(){return E},set fallbackFormat(o){E=o,f.fallbackFormat=E},get warnHtmlMessage(){return h},set warnHtmlMessage(o){h=o,f.warnHtmlMessage=o},get escapeParameter(){return y},set escapeParameter(o){y=o,f.escapeParameter=o},t:Le,getLocaleMessage:Oe,setLocaleMessage:Ft,mergeLocaleMessage:Ct,getPostTranslationHandler:mt,setPostTranslationHandler:ft,getMissingHandler:_t,setMissingHandler:gt,[Mn]:yt};return S.datetimeFormats=V,S.numberFormats=ye,S.rt=dt,S.te=Lt,S.tm=At,S.d=bt,S.n=Et,S.getDateTimeFormat=Dt,S.setDateTimeFormat=St,S.mergeDateTimeFormat=Rt,S.getNumberFormat=vt,S.setNumberFormat=Mt,S.mergeNumberFormat=kt,S[kn]=e.__injectWithOption,S[_e]=Tt,S[ge]=pt,S[de]=It,S}const Ie={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Un({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((a,r)=>a=[...a,...C(r.children)?r.children:[r]],[]):t.reduce((n,a)=>{const r=e[a];return r&&(n[a]=r()),n},{})}function it(e){return Ut}const Ge={name:"i18n-t",props:w({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>R(e)||!isNaN(e)}},Ie),setup(e,t){const{slots:n,attrs:a}=t,r=e.i18n||pe({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(b=>b!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=_(e.plural)?+e.plural:e.plural);const i=Un(t,s),c=r[_e](e.keypath,i,l),m=w({},a),d=_(e.tag)||L(e.tag)?e.tag:it();return Xe(d,m,c)}}};function Wn(e){return C(e)&&!_(e[0])}function ut(e,t,n,a){const{slots:r,attrs:s}=t;return()=>{const l={part:!0};let i={};e.locale&&(l.locale=e.locale),_(e.format)?l.key=e.format:L(e.format)&&(_(e.format.key)&&(l.key=e.format.key),i=Object.keys(e.format).reduce((g,E)=>n.includes(E)?w({},g,{[E]:e.format[E]}):g,{}));const c=a(e.value,l,i);let m=[l.key];C(c)?m=c.map((g,E)=>{const N=r[g.type],p=N?N({[g.type]:g.value,index:E,parts:c}):[g.value];return Wn(p)&&(p[0].key=`${g.type}-${E}`),p}):_(c)&&(m=[c]);const d=w({},s),b=_(e.tag)||L(e.tag)?e.tag:it();return Xe(b,d,m)}}const $e={name:"i18n-n",props:w({value:{type:Number,required:!0},format:{type:[String,Object]}},Ie),setup(e,t){const n=e.i18n||pe({useScope:"parent",__useComponent:!0});return ut(e,t,lt,(...a)=>n[de](...a))}},He={name:"i18n-d",props:w({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ie),setup(e,t){const n=e.i18n||pe({useScope:"parent",__useComponent:!0});return ut(e,t,rt,(...a)=>n[ge](...a))}};function Vn(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function xn(e){const t=l=>{const{instance:i,modifiers:c,value:m}=l;if(!i||!i.$)throw W(U.UNEXPECTED_ERROR);const d=Vn(e,i.$),b=Be(m);return[Reflect.apply(d.t,d,[...Ke(b)]),d]};return{created:(l,i)=>{const[c,m]=t(i);ie&&e.global===m&&(l.__i18nWatcher=ce(m.locale,()=>{i.instance&&i.instance.$forceUpdate()})),l.__composer=m,l.textContent=c},unmounted:l=>{ie&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:i})=>{if(l.__composer){const c=l.__composer,m=Be(i);l.textContent=Reflect.apply(c.t,c,[...Ke(m)])}},getSSRProps:l=>{const[i]=t(l);return{textContent:i}}}}function Be(e){if(_(e))return{path:e};if(T(e)){if(!("path"in e))throw W(U.REQUIRED_VALUE,"path");return e}else throw W(U.INVALID_VALUE)}function Ke(e){const{path:t,locale:n,args:a,choice:r,plural:s}=e,l={},i=a||{};return _(n)&&(l.locale=n),R(r)&&(l.plural=r),R(s)&&(l.plural=s),[t,i,l]}function jn(e,t,...n){const a=T(n[0])?n[0]:{},r=!!a.useI18nComponentName;(F(a.globalInstall)?a.globalInstall:!0)&&(e.component(r?"i18n":Ge.name,Ge),e.component($e.name,$e),e.component(He.name,He)),e.directive("t",xn(t))}const Gn=j("global-vue-i18n");function $n(e={},t){const n=F(e.globalInjection)?e.globalInjection:!0,a=!0,r=new Map,[s,l]=Hn(e),i=j("");function c(b){return r.get(b)||null}function m(b,g){r.set(b,g)}function d(b){r.delete(b)}{const b={get mode(){return"composition"},get allowComposition(){return a},async install(g,...E){g.__VUE_I18N_SYMBOL__=i,g.provide(g.__VUE_I18N_SYMBOL__,b),n&&qn(g,b.global),jn(g,b,...E);const N=g.unmount;g.unmount=()=>{b.dispose(),N()}},get global(){return l},dispose(){s.stop()},__instances:r,__getInstance:c,__setInstance:m,__deleteInstance:d};return b}}function pe(e={}){const t=Ye();if(t==null)throw W(U.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw W(U.NOT_INSLALLED);const n=Bn(t),a=Xn(n),r=Pn(t),s=Kn(e,r);if(s==="global")return wn(a,e,r),a;if(s==="parent"){let c=Yn(n,t,e.__useComponent);return c==null&&(c=a),c}const l=n;let i=l.__getInstance(t);if(i==null){const c=w({},e);"__i18n"in r&&(c.__i18n=r.__i18n),a&&(c.__root=a),i=ct(c),zn(l,t),l.__setInstance(t,i)}return i}function Hn(e,t,n){const a=wt();{const r=a.run(()=>ct(e));if(r==null)throw W(U.UNEXPECTED_ERROR);return[a,r]}}function Bn(e){{const t=Vt(e.isCE?Gn:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw W(e.isCE?U.NOT_INSLALLED_WITH_PROVIDE:U.UNEXPECTED_ERROR);return t}}function Kn(e,t){return re(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Xn(e){return e.mode==="composition"?e.global:e.global.__composer}function Yn(e,t,n=!1){let a=null;const r=t.root;let s=t.parent;for(;s!=null;){const l=e;if(e.mode==="composition"&&(a=l.__getInstance(s)),a!=null||r===s)break;s=s.parent}return a}function zn(e,t,n){xt(()=>{},t),jt(()=>{e.__deleteInstance(t)},t)}const Jn=["locale","fallbackLocale","availableLocales"],Qn=["t","rt","d","n","tm"];function qn(e,t){const n=Object.create(null);Jn.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r)throw W(U.UNEXPECTED_ERROR);const s=Wt(r.value)?{get(){return r.value.value},set(l){r.value.value=l}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,a,s)}),e.config.globalProperties.$i18n=n,Qn.forEach(a=>{const r=Object.getOwnPropertyDescriptor(t,a);if(!r||!r.value)throw W(U.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,r)})}On(sn);An(qe);var Zn={earthDescription:"Earth \u2013 our home and the only astronomical object known to harbor life. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands.",moonDescription:"The Moon is a natural satellite, or a space object that orbits around something else. Our Moon is Earth\u2019s natural satellite. In general, a moon is a natural satellite of a planet, and a planet is a special kind of natural satellite that orbits a star and also meets other conditions.",sunDescription:"The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit. It is by far the most important source of energy for life on Earth.",mercuryDescription:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Although the daylight temperature at the surface of Mercury is generally extremely high, observations strongly suggest that ice (frozen water) exists on Mercury.",issDescription:"Definition: The International Space Station (ISS) is a space station that keeps moving in low earth orbit. It is habitable and the largest artificial satellite that can be seen with the naked eye from Earth. It acts as a factory, observatory and laboratory.",webbDescription:"Webb and Hubble captured views of a unique NASA experiment designed to intentionally smash a spacecraft into a small asteroid in the world\u2019s first-ever in-space test for planetary defense.",failed:"Action failed",success:"Action was successful"},ea={"en-US":Zn},ra=Ht(({app:e})=>{const t=$n({locale:"en-US",globalInjection:!0,messages:ea});e.use(t)});export{ra as default};