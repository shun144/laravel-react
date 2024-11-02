var Y=e=>{throw TypeError(e)};var X=(e,t,s)=>t.has(e)||Y("Cannot "+s);var a=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u=(e,t,s,i)=>(X(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),M=(e,t,s)=>(X(e,t,"access private method"),s);var V=(e,t,s,i)=>({set _(r){u(e,t,r,s)},get _(){return a(e,t,i)}});import{S as ct,h as lt,a as dt,n as f,m as Z,R as ft,c as yt,b as $,d as b,e as pt,f as gt,g as mt,i as vt,o as tt,r as et,j as Pt,k as st,p as it,s as Qt}from"./useQuery-DiE9S0Se.js";var m,nt,bt=(nt=class extends ct{constructor(t={}){super();c(this,m);this.config=t,u(this,m,new Map)}build(t,s,i){const r=s.queryKey,o=s.queryHash??lt(r,s);let y=this.get(o);return y||(y=new dt({cache:this,queryKey:r,queryHash:o,options:t.defaultQueryOptions(s),state:i,defaultOptions:t.getQueryDefaults(r)}),this.add(y)),y}add(t){a(this,m).has(t.queryHash)||(a(this,m).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=a(this,m).get(t.queryHash);s&&(t.destroy(),s===t&&a(this,m).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){f.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return a(this,m).get(t)}getAll(){return[...a(this,m).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(i=>Z(s,i))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(i=>Z(t,i)):s}notify(t){f.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){f.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){f.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},m=new WeakMap,nt),v,l,T,P,D,ut,Ot=(ut=class extends ft{constructor(t){super();c(this,P);c(this,v);c(this,l);c(this,T);this.mutationId=t.mutationId,u(this,l,t.mutationCache),u(this,v,[]),this.state=t.state||wt(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){a(this,v).includes(t)||(a(this,v).push(t),this.clearGcTimeout(),a(this,l).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){u(this,v,a(this,v).filter(s=>s!==t)),this.scheduleGc(),a(this,l).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){a(this,v).length||(this.state.status==="pending"?this.scheduleGc():a(this,l).remove(this))}continue(){var t;return((t=a(this,T))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var r,o,y,O,q,x,j,G,N,B,_,Q,E,z,U,d,g,w,S,J;u(this,T,yt({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(h,R)=>{M(this,P,D).call(this,{type:"failed",failureCount:h,error:R})},onPause:()=>{M(this,P,D).call(this,{type:"pause"})},onContinue:()=>{M(this,P,D).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>a(this,l).canRun(this)}));const s=this.state.status==="pending",i=!a(this,T).canStart();try{if(!s){M(this,P,D).call(this,{type:"pending",variables:t,isPaused:i}),await((o=(r=a(this,l).config).onMutate)==null?void 0:o.call(r,t,this));const R=await((O=(y=this.options).onMutate)==null?void 0:O.call(y,t));R!==this.state.context&&M(this,P,D).call(this,{type:"pending",context:R,variables:t,isPaused:i})}const h=await a(this,T).start();return await((x=(q=a(this,l).config).onSuccess)==null?void 0:x.call(q,h,t,this.state.context,this)),await((G=(j=this.options).onSuccess)==null?void 0:G.call(j,h,t,this.state.context)),await((B=(N=a(this,l).config).onSettled)==null?void 0:B.call(N,h,null,this.state.variables,this.state.context,this)),await((Q=(_=this.options).onSettled)==null?void 0:Q.call(_,h,null,t,this.state.context)),M(this,P,D).call(this,{type:"success",data:h}),h}catch(h){try{throw await((z=(E=a(this,l).config).onError)==null?void 0:z.call(E,h,t,this.state.context,this)),await((d=(U=this.options).onError)==null?void 0:d.call(U,h,t,this.state.context)),await((w=(g=a(this,l).config).onSettled)==null?void 0:w.call(g,void 0,h,this.state.variables,this.state.context,this)),await((J=(S=this.options).onSettled)==null?void 0:J.call(S,void 0,h,t,this.state.context)),h}finally{M(this,P,D).call(this,{type:"error",error:h})}}finally{a(this,l).runNext(this)}}},v=new WeakMap,l=new WeakMap,T=new WeakMap,P=new WeakSet,D=function(t){const s=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),f.batch(()=>{a(this,v).forEach(i=>{i.onMutationUpdate(t)}),a(this,l).notify({mutation:this,type:"updated",action:t})})},ut);function wt(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var p,L,ht,Mt=(ht=class extends ct{constructor(t={}){super();c(this,p);c(this,L);this.config=t,u(this,p,new Map),u(this,L,Date.now())}build(t,s,i){const r=new Ot({mutationCache:this,mutationId:++V(this,L)._,options:t.defaultMutationOptions(s),state:i});return this.add(r),r}add(t){const s=W(t),i=a(this,p).get(s)??[];i.push(t),a(this,p).set(s,i),this.notify({type:"added",mutation:t})}remove(t){var i;const s=W(t);if(a(this,p).has(s)){const r=(i=a(this,p).get(s))==null?void 0:i.filter(o=>o!==t);r&&(r.length===0?a(this,p).delete(s):a(this,p).set(s,r))}this.notify({type:"removed",mutation:t})}canRun(t){var i;const s=(i=a(this,p).get(W(t)))==null?void 0:i.find(r=>r.state.status==="pending");return!s||s===t}runNext(t){var i;const s=(i=a(this,p).get(W(t)))==null?void 0:i.find(r=>r!==t&&r.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}clear(){f.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...a(this,p).values()].flat()}find(t){const s={exact:!0,...t};return this.getAll().find(i=>$(s,i))}findAll(t={}){return this.getAll().filter(s=>$(t,s))}notify(t){f.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){const t=this.getAll().filter(s=>s.state.isPaused);return f.batch(()=>Promise.all(t.map(s=>s.continue().catch(b))))}},p=new WeakMap,L=new WeakMap,ht);function W(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function at(e){return{onFetch:(t,s)=>{var j,G,N,B,_;const i=t.options,r=(N=(G=(j=t.fetchOptions)==null?void 0:j.meta)==null?void 0:G.fetchMore)==null?void 0:N.direction,o=((B=t.state.data)==null?void 0:B.pages)||[],y=((_=t.state.data)==null?void 0:_.pageParams)||[];let O={pages:[],pageParams:[]},q=0;const x=async()=>{let Q=!1;const E=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(t.signal.aborted?Q=!0:t.signal.addEventListener("abort",()=>{Q=!0}),t.signal)})},z=pt(t.options,t.fetchOptions),U=async(d,g,w)=>{if(Q)return Promise.reject();if(g==null&&d.pages.length)return Promise.resolve(d);const S={queryKey:t.queryKey,pageParam:g,direction:w?"backward":"forward",meta:t.options.meta};E(S);const J=await z(S),{maxPages:h}=t.options,R=w?gt:mt;return{pages:R(d.pages,J,h),pageParams:R(d.pageParams,g,h)}};if(r&&o.length){const d=r==="backward",g=d?Dt:rt,w={pages:o,pageParams:y},S=g(i,w);O=await U(w,S,d)}else{const d=e??o.length;do{const g=q===0?y[0]??i.initialPageParam:rt(i,O);if(q>0&&g==null)break;O=await U(O,g),q++}while(q<d)}return O};t.options.persister?t.fetchFn=()=>{var Q,E;return(E=(Q=t.options).persister)==null?void 0:E.call(Q,x,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=x}}}function rt(e,{pages:t,pageParams:s}){const i=t.length-1;return t.length>0?e.getNextPageParam(t[i],t,s[i],s):void 0}function Dt(e,{pages:t,pageParams:s}){var i;return t.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,s[0],s):void 0}var n,A,C,K,k,F,I,H,ot,Ft=(ot=class{constructor(e={}){c(this,n);c(this,A);c(this,C);c(this,K);c(this,k);c(this,F);c(this,I);c(this,H);u(this,n,e.queryCache||new bt),u(this,A,e.mutationCache||new Mt),u(this,C,e.defaultOptions||{}),u(this,K,new Map),u(this,k,new Map),u(this,F,0)}mount(){V(this,F)._++,a(this,F)===1&&(u(this,I,vt.subscribe(async e=>{e&&(await this.resumePausedMutations(),a(this,n).onFocus())})),u(this,H,tt.subscribe(async e=>{e&&(await this.resumePausedMutations(),a(this,n).onOnline())})))}unmount(){var e,t;V(this,F)._--,a(this,F)===0&&((e=a(this,I))==null||e.call(this),u(this,I,void 0),(t=a(this,H))==null||t.call(this),u(this,H,void 0))}isFetching(e){return a(this,n).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return a(this,A).findAll({...e,status:"pending"}).length}getQueryData(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=a(this,n).get(t.queryHash))==null?void 0:s.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const s=this.defaultQueryOptions(e),i=a(this,n).build(this,s);return e.revalidateIfStale&&i.isStaleByTime(et(s.staleTime,i))&&this.prefetchQuery(s),Promise.resolve(t)}}getQueriesData(e){return a(this,n).findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=this.defaultQueryOptions({queryKey:e}),r=a(this,n).get(i.queryHash),o=r==null?void 0:r.state.data,y=Pt(t,o);if(y!==void 0)return a(this,n).build(this,i).setData(y,{...s,manual:!0})}setQueriesData(e,t,s){return f.batch(()=>a(this,n).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=a(this,n).get(t.queryHash))==null?void 0:s.state}removeQueries(e){const t=a(this,n);f.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=a(this,n),i={type:"active",...e};return f.batch(()=>(s.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){const s={revert:!0,...t},i=f.batch(()=>a(this,n).findAll(e).map(r=>r.cancel(s)));return Promise.all(i).then(b).catch(b)}invalidateQueries(e={},t={}){return f.batch(()=>{if(a(this,n).findAll(e).forEach(i=>{i.invalidate()}),e.refetchType==="none")return Promise.resolve();const s={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){const s={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},i=f.batch(()=>a(this,n).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,s);return s.throwOnError||(o=o.catch(b)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(b)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=a(this,n).build(this,t);return s.isStaleByTime(et(t.staleTime,s))?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(b).catch(b)}fetchInfiniteQuery(e){return e.behavior=at(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(b).catch(b)}ensureInfiniteQueryData(e){return e.behavior=at(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return tt.isOnline()?a(this,A).resumePausedMutations():Promise.resolve()}getQueryCache(){return a(this,n)}getMutationCache(){return a(this,A)}getDefaultOptions(){return a(this,C)}setDefaultOptions(e){u(this,C,e)}setQueryDefaults(e,t){a(this,K).set(st(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...a(this,K).values()];let s={};return t.forEach(i=>{it(e,i.queryKey)&&(s={...s,...i.defaultOptions})}),s}setMutationDefaults(e,t){a(this,k).set(st(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...a(this,k).values()];let s={};return t.forEach(i=>{it(e,i.mutationKey)&&(s={...s,...i.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...a(this,C).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=lt(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===Qt&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...a(this,C).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){a(this,n).clear(),a(this,A).clear()}},n=new WeakMap,A=new WeakMap,C=new WeakMap,K=new WeakMap,k=new WeakMap,F=new WeakMap,I=new WeakMap,H=new WeakMap,ot);export{Ft as Q};
