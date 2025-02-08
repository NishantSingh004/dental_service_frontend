import{$ as g,Aa as le,Ac as We,Bc as E,C as Ie,Ea as Ce,F as Pe,Fa as de,Ga as je,Ha as N,Hc as Y,Ja as ue,L as Ne,Na as B,Oa as k,Pa as L,Qa as Ue,Qc as Ye,Ra as Fe,Sa as Be,Sc as K,Ta as ze,Ua as Ve,Uc as q,V as Se,Va as $e,Wa as Xe,Xa as S,Z as M,a as U,ab as z,b as De,ca as w,ea as d,f as oe,fa as T,fb as Ge,i as ie,ia as ce,ka as _e,la as ke,ma as Le,o as Oe,p as ae,qc as Je,t as F,xa as xe,yc as he,za as P,zc as Ze}from"./chunk-ZDRYPNXQ.js";var $=class{},H=class{},R=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let s=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(s,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let s=(t.op==="a"?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":let o=t.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let i=this.headers.get(e);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,i)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),s=t.toLowerCase();this.headers.set(s,n),this.maybeSetNormalizedName(t,s)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var pe=class{encodeKey(t){return Ke(t)}encodeValue(t){return Ke(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Tt(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,o)),t.decodeValue(s.slice(o+1))],a=e.get(i)||[];a.push(c),e.set(i,a)}),e}var wt=/%(\d[a-f0-9])/gi,Rt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Ke(r){return encodeURIComponent(r).replace(wt,(t,e)=>Rt[e]??t)}function Q(r){return`${r}`}var D=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new pe,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Tt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],s=Array.isArray(n)?n.map(Q):[Q(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let s=t[n];Array.isArray(s)?s.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Q(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],s=n.indexOf(Q(t.value));s!==-1&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var me=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function bt(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function qe(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function Qe(r){return typeof Blob<"u"&&r instanceof Blob}function He(r){return typeof FormData<"u"&&r instanceof FormData}function Mt(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var V=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,n,s){this.url=e,this.method=t.toUpperCase();let o;if(bt(this.method)||s?(this.body=n!==void 0?n:null,o=s):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new R,this.context??=new me,!this.params)this.params=new D,this.urlWithParams=e;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||qe(this.body)||Qe(this.body)||He(this.body)||Mt(this.body)?this.body:this.body instanceof D?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||He(this.body)?null:Qe(this.body)?this.body.type||null:qe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof D?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,o=t.transferCache??this.transferCache,i=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,f=t.params||this.params,p=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((v,m)=>v.set(m,t.setHeaders[m]),l)),t.setParams&&(f=Object.keys(t.setParams).reduce((v,m)=>v.set(m,t.setParams[m]),f)),new r(e,n,i,{params:f,headers:l,context:p,reportProgress:a,responseType:s,withCredentials:c,transferCache:o})}},O=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(O||{}),X=class{headers;status;statusText;url;ok;type;constructor(t,e=200,n="OK"){this.headers=t.headers||new R,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ee=class r extends X{constructor(t={}){super(t)}type=O.ResponseHeader;clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},G=class r extends X{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=O.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},A=class extends X{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},rt=200,At=204;function fe(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Dt=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,s={}){let o;if(e instanceof V)o=e;else{let a;s.headers instanceof R?a=s.headers:a=new R(s.headers);let l;s.params&&(s.params instanceof D?l=s.params:l=new D({fromObject:s.params})),o=new V(e,n,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:l,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=ae(o).pipe(Pe(a=>this.handler.handle(a)));if(e instanceof V||s.observe==="events")return i;let c=i.pipe(Ie(a=>a instanceof G));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(F(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(F(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(F(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(F(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new D().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,fe(s,n))}post(e,n,s={}){return this.request("POST",e,fe(s,n))}put(e,n,s={}){return this.request("PUT",e,fe(s,n))}static \u0275fac=function(n){return new(n||r)(d($))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Ot=/^\)\]\}',?\n/,It="X-Request-URL";function et(r){if(r.url)return r.url;let t=It.toLocaleLowerCase();return r.headers.get(t)}var Pt=(()=>{class r{fetchImpl=T(ye,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=T(P);handle(e){return new ie(n=>{let s=new AbortController;return this.doRequest(e,s.signal,n).then(ge,o=>n.error(new A({error:o}))),()=>s.abort()})}doRequest(e,n,s){return oe(this,null,function*(){let o=this.createRequestInit(e),i;try{let m=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,U({signal:n},o)));Nt(m),s.next({type:O.Sent}),i=yield m}catch(m){s.error(new A({error:m,status:m.status??0,statusText:m.statusText,url:e.urlWithParams,headers:m.headers}));return}let c=new R(i.headers),a=i.statusText,l=et(i)??e.urlWithParams,f=i.status,p=null;if(e.reportProgress&&s.next(new ee({headers:c,status:f,statusText:a,url:l})),i.body){let m=i.headers.get("content-length"),x=[],u=i.body.getReader(),h=0,b,_,y=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>oe(this,null,function*(){for(;;){let{done:I,value:j}=yield u.read();if(I)break;if(x.push(j),h+=j.length,e.reportProgress){_=e.responseType==="text"?(_??"")+(b??=new TextDecoder).decode(j,{stream:!0}):void 0;let Ae=()=>s.next({type:O.DownloadProgress,total:m?+m:void 0,loaded:h,partialText:_});y?y.run(Ae):Ae()}}}));let C=this.concatChunks(x,h);try{let I=i.headers.get("Content-Type")??"";p=this.parseBody(e,C,I)}catch(I){s.error(new A({error:I,headers:new R(i.headers),status:i.status,statusText:i.statusText,url:et(i)??e.urlWithParams}));return}}f===0&&(f=p?rt:0),f>=200&&f<300?(s.next(new G({body:p,headers:c,status:f,statusText:a,url:l})),s.complete()):s.error(new A({error:p,headers:c,status:f,statusText:a,url:l}))})}parseBody(e,n,s){switch(e.responseType){case"json":let o=new TextDecoder().decode(n).replace(Ot,"");return o===""?null:JSON.parse(o);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:s});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},s=e.withCredentials?"include":void 0;if(e.headers.forEach((o,i)=>n[o]=i.join(",")),e.headers.has("Accept")||(n.Accept="application/json, text/plain, */*"),!e.headers.has("Content-Type")){let o=e.detectContentTypeHeader();o!==null&&(n["Content-Type"]=o)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:s}}concatChunks(e,n){let s=new Uint8Array(n),o=0;for(let i of e)s.set(i,o),o+=i.length;return s}static \u0275fac=function(n){return new(n||r)};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),ye=class{};function ge(){}function Nt(r){r.then(ge,ge)}function St(r,t){return t(r)}function _t(r,t,e){return(n,s)=>Le(e,()=>t(n,o=>r(o,s)))}var st=new w(""),kt=new w(""),Lt=new w("",{providedIn:"root",factory:()=>!0});var tt=(()=>{class r extends ${backend;injector;chain=null;pendingTasks=T(xe);contributeToStability=T(Lt);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(st),...this.injector.get(kt,[])]));this.chain=n.reduceRight((s,o)=>_t(s,o,this.injector),St)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,s=>this.backend.handle(s)).pipe(Ne(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||r)(d(H),d(ke))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})();var xt=/^\)\]\}',?\n/;function Ct(r){return"responseURL"in r&&r.responseURL?r.responseURL:/^X-Request-URL:/m.test(r.getAllResponseHeaders())?r.getResponseHeader("X-Request-URL"):null}var nt=(()=>{class r{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new M(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?Oe(n.\u0275loadImpl()):ae(null)).pipe(Se(()=>new ie(o=>{let i=n.build();if(i.open(e.method,e.urlWithParams),e.withCredentials&&(i.withCredentials=!0),e.headers.forEach((u,h)=>i.setRequestHeader(u,h.join(","))),e.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){let u=e.detectContentTypeHeader();u!==null&&i.setRequestHeader("Content-Type",u)}if(e.responseType){let u=e.responseType.toLowerCase();i.responseType=u!=="json"?u:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let u=i.statusText||"OK",h=new R(i.getAllResponseHeaders()),b=Ct(i)||e.url;return a=new ee({headers:h,status:i.status,statusText:u,url:b}),a},f=()=>{let{headers:u,status:h,statusText:b,url:_}=l(),y=null;h!==At&&(y=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=y?rt:0);let C=h>=200&&h<300;if(e.responseType==="json"&&typeof y=="string"){let I=y;y=y.replace(xt,"");try{y=y!==""?JSON.parse(y):null}catch(j){y=I,C&&(C=!1,y={error:j,text:y})}}C?(o.next(new G({body:y,headers:u,status:h,statusText:b,url:_||void 0})),o.complete()):o.error(new A({error:y,headers:u,status:h,statusText:b,url:_||void 0}))},p=u=>{let{url:h}=l(),b=new A({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});o.error(b)},v=!1,m=u=>{v||(o.next(l()),v=!0);let h={type:O.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),e.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),o.next(h)},x=u=>{let h={type:O.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),o.next(h)};return i.addEventListener("load",f),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),e.reportProgress&&(i.addEventListener("progress",m),c!==null&&i.upload&&i.upload.addEventListener("progress",x)),i.send(c),o.next({type:O.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",f),i.removeEventListener("timeout",p),e.reportProgress&&(i.removeEventListener("progress",m),c!==null&&i.upload&&i.upload.removeEventListener("progress",x)),i.readyState!==i.DONE&&i.abort()}})))}static \u0275fac=function(n){return new(n||r)(d(q))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),ot=new w(""),jt="XSRF-TOKEN",Ut=new w("",{providedIn:"root",factory:()=>jt}),Ft="X-XSRF-TOKEN",Bt=new w("",{providedIn:"root",factory:()=>Ft}),te=class{},zt=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,s){this.doc=e,this.platform=n,this.cookieName=s}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Y(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||r)(d(E),d(N),d(Ut))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})();function Vt(r,t){let e=r.url.toLowerCase();if(!T(ot)||r.method==="GET"||r.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(r);let n=T(te).getToken(),s=T(Bt);return n!=null&&!r.headers.has(s)&&(r=r.clone({headers:r.headers.set(s,n)})),t(r)}function Pn(...r){let t=[Dt,nt,tt,{provide:$,useExisting:tt},{provide:H,useFactory:()=>T(Pt,{optional:!0})??T(nt)},{provide:st,useValue:Vt,multi:!0},{provide:ot,useValue:!0},{provide:te,useClass:zt}];for(let e of r)t.push(...e.\u0275providers);return ce(t)}var Ee=class extends We{supportsDOMEvents=!0},Te=class r extends Ee{static makeCurrent(){Ze(new r)}onAndCancel(t,e,n){return t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Xt();return e==null?null:Gt(e)}resetBaseElement(){J=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Y(document.cookie,t)}},J=null;function Xt(){return J=J||document.querySelector("base"),J?J.getAttribute("href"):null}function Gt(r){return new URL(r,document.baseURI).pathname}var Jt=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),we=new w(""),ut=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,s){return this._findPluginFor(n).addEventListener(e,n,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new M(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||r)(d(we),d(P))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),re=class{_doc;constructor(t){this._doc=t}manager},ne="ng-app-id";function it(r){for(let t of r)t.remove()}function at(r,t){let e=t.createElement("style");return e.textContent=r,e}function Zt(r,t,e,n){let s=r.head?.querySelectorAll(`style[${ne}="${t}"],link[${ne}="${t}"]`);if(s)for(let o of s)o.removeAttribute(ne),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Re(r,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var ht=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,s,o={}){this.doc=e,this.appId=n,this.nonce=s,this.isServer=K(o),Zt(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let s of e)this.addUsage(s,this.inline,at);n?.forEach(s=>this.addUsage(s,this.external,Re))}removeStyles(e,n){for(let s of e)this.removeUsage(s,this.inline);n?.forEach(s=>this.removeUsage(s,this.external))}addUsage(e,n,s){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,s(e,this.doc)))})}removeUsage(e,n){let s=n.get(e);s&&(s.usage--,s.usage<=0&&(it(s.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])it(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:s}]of this.inline)s.push(this.addElement(e,at(n,this.doc)));for(let[n,{elements:s}]of this.external)s.push(this.addElement(e,Re(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(ne,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||r)(d(E),d(de),d(ue,8),d(N))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),ve={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Me=/%COMP%/g,ft="%COMP%",Wt=`_nghost-${ft}`,Yt=`_ngcontent-${ft}`,Kt=!0,qt=new w("",{providedIn:"root",factory:()=>Kt});function Qt(r){return Yt.replace(Me,r)}function Ht(r){return Wt.replace(Me,r)}function pt(r,t){return t.map(e=>e.replace(Me,r))}var ct=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,s,o,i,c,a,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=l,this.platformIsServer=K(c),this.defaultRenderer=new Z(e,i,a,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===B.ShadowDom&&(n=De(U({},n),{encapsulation:B.Emulated}));let s=this.getOrCreateRenderer(e,n);return s instanceof se?s.applyToHost(e):s instanceof W&&s.applyStyles(),s}getOrCreateRenderer(e,n){let s=this.rendererByCompId,o=s.get(n.id);if(!o){let i=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,p=this.platformIsServer;switch(n.encapsulation){case B.Emulated:o=new se(a,l,n,this.appId,f,i,c,p);break;case B.ShadowDom:return new be(a,l,e,n,i,c,this.nonce,p);default:o=new W(a,l,n,f,i,c,p);break}s.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(n){return new(n||r)(d(ut),d(ht),d(de),d(qt),d(E),d(N),d(P),d(ue))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),Z=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,s){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=s}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(ve[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(lt(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(lt(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new M(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,s){if(s){e=s+":"+e;let o=ve[s];o?t.setAttributeNS(o,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let s=ve[n];s?t.removeAttributeNS(s,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,s){s&(z.DashCase|z.Important)?t.style.setProperty(e,n,s&z.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&z.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n){if(typeof t=="string"&&(t=he().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(n))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function lt(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var be=class extends Z{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,s,o,i,c,a){super(t,o,i,a),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=pt(s.id,s.styles);for(let p of l){let v=document.createElement("style");c&&v.setAttribute("nonce",c),v.textContent=p,this.shadowRoot.appendChild(v)}let f=s.getExternalStyles?.();if(f)for(let p of f){let v=Re(p,o);c&&v.setAttribute("nonce",c),this.shadowRoot.appendChild(v)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},W=class extends Z{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,s,o,i,c,a){super(t,o,i,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s,this.styles=a?pt(a,n.styles):n.styles,this.styleUrls=n.getExternalStyles?.(a)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},se=class extends W{contentAttr;hostAttr;constructor(t,e,n,s,o,i,c,a){let l=s+"-"+n.id;super(t,e,n,o,i,c,a,l),this.contentAttr=Qt(l),this.hostAttr=Ht(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},en=(()=>{class r extends re{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,s){return e.addEventListener(n,s,!1),()=>this.removeEventListener(e,n,s)}removeEventListener(e,n,s){return e.removeEventListener(n,s)}static \u0275fac=function(n){return new(n||r)(d(E))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})(),dt=["alt","control","meta","shift"],tn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},nn={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},rn=(()=>{class r extends re{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,s){let o=r.parseEventName(n),i=r.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>he().onAndCancel(e,o.domEventName,i))}static parseEventName(e){let n=e.toLowerCase().split("."),s=n.shift();if(n.length===0||!(s==="keydown"||s==="keyup"))return null;let o=r._normalizeKey(n.pop()),i="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),i="code."),dt.forEach(l=>{let f=n.indexOf(l);f>-1&&(n.splice(f,1),i+=l+".")}),i+=o,n.length!=0||o.length===0)return null;let a={};return a.domEventName=s,a.fullKey=i,a}static matchEventFullKeyCode(e,n){let s=tn[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(s=e.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),dt.forEach(i=>{if(i!==s){let c=nn[i];c(e)&&(o+=i+".")}}),o+=s,o===n)}static eventCallback(e,n,s){return o=>{r.matchEventFullKeyCode(o,e)&&s.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||r)(d(E))};static \u0275prov=g({token:r,factory:r.\u0275fac})}return r})();function rr(r,t){return Je(U({rootComponent:r},sn(t)))}function sn(r){return{appProviders:[...dn,...r?.providers??[]],platformProviders:ln}}function on(){Te.makeCurrent()}function an(){return new le}function cn(){return Ce(document),document}var ln=[{provide:N,useValue:Ye},{provide:je,useValue:on,multi:!0},{provide:E,useFactory:cn,deps:[]}];var dn=[{provide:_e,useValue:"root"},{provide:le,useFactory:an,deps:[]},{provide:we,useClass:en,multi:!0,deps:[E,P,N]},{provide:we,useClass:rn,multi:!0,deps:[E]},ct,ht,ut,{provide:Ge,useExisting:ct},{provide:q,useClass:Jt,deps:[]},[]];var sr=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||r)(d(E))};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var un=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=g({token:r,factory:function(n){let s=null;return n?s=new(n||r):s=d(hn),s},providedIn:"root"})}return r})(),hn=(()=>{class r extends un{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case S.NONE:return n;case S.HTML:return L(n,"HTML")?k(n):Xe(this._doc,String(n)).toString();case S.STYLE:return L(n,"Style")?k(n):n;case S.SCRIPT:if(L(n,"Script"))return k(n);throw new M(5200,!1);case S.URL:return L(n,"URL")?k(n):$e(String(n));case S.RESOURCE_URL:if(L(n,"ResourceURL"))return k(n);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(e){return Ue(e)}bypassSecurityTrustStyle(e){return Fe(e)}bypassSecurityTrustScript(e){return Be(e)}bypassSecurityTrustUrl(e){return ze(e)}bypassSecurityTrustResourceUrl(e){return Ve(e)}static \u0275fac=function(n){return new(n||r)(d(E))};static \u0275prov=g({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{Dt as a,Pn as b,ct as c,rr as d,sr as e,un as f};
