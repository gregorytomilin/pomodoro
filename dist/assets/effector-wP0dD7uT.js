function Ke(e,t){for(const r in e)t(e[r],r)}function A(e,t){e.forEach(t)}function N(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function C({node:e=[],from:t,source:r,parent:n=t||r,to:o,target:s,child:c=o||s,scope:i={},meta:l={},family:a={type:"regular"},regional:h}={}){const g=X(n),p=X(a.links),m=X(a.owners),k=[];A(e,S=>S&&I(k,S));const d={id:ot(),seq:k,next:X(c),meta:l,scope:i,family:{type:a.type||"crosslink",links:p,owners:m}};return A(p,S=>I(ae(S),d)),A(m,S=>I(se(S),d)),A(g,S=>I(S.next,d)),h&&j&&Fe(B(j),[d]),d}function Oe(e,t,r){let n,o=M,s=null,c=b;if(e.target&&(t=e.params,r=e.defer,n=e.meta,o="page"in e?e.page:o,e.stack&&(s=e.stack),c=U(e)||c,e=e.target),c&&b&&c!==b&&(b=null),Array.isArray(e))for(let k=0;k<e.length;k++)P("pure",o,R(e[k]),s,t[k],c,n);else P("pure",o,R(e),s,t,c,n);if(r&&!Y)return;const i={isRoot:Y,currentPage:M,scope:b,isWatch:pe,isPure:ee};let l,a,h,g,p,m;Y=0;e:for(;g=mt();){const{idx:k,stack:d,type:S}=g;h=d.node,M=p=d.page,b=U(d),p?m=p.reg:b&&(m=b.reg);const f=!!p,w=!!b,v={fail:0,scope:h.scope};l=a=0;for(let x=k;x<h.seq.length&&!l;x++){const y=h.seq[x];if(y.order){const{priority:$,barrierID:u}=y.order,z=u?p?`${p.fullID}_${u}`:u:0;if(x!==k||S!==$){u?ue.has(z)||(ue.add(z),ye(x,d,$,u)):ye(x,d,$,0);continue e}u&&ue.delete(z)}switch(y.type){case"mov":{const u=y.data;let z;switch(u.from){case"stack":z=B(d);break;case"a":case"b":z=d[u.from];break;case"value":z=u.store;break;case"store":if(m&&!m[u.store.id])if(f){const fe=Be(p,u.store.id);d.page=p=fe,fe?m=fe.reg:w?(q(b,u.store,0,1,u.softRead),m=b.reg):m=void 0}else w&&q(b,u.store,0,1,u.softRead);z=We(m&&m[u.store.id]||u.store)}switch(u.to){case"stack":d.value=z;break;case"a":case"b":d[u.to]=z;break;case"store":ht(p,b,u.target,0).current=z}break}case"compute":const $=y.data;if($.fn){pe=h.meta.op==="watch",ee=$.pure;const u=$.safe?(0,$.fn)(B(d),v.scope,d):vt(v,$.fn,d);$.filter?a=!u:d.value=u,pe=i.isWatch,ee=i.isPure}}l=v.fail||a}if(!l){const x=B(d),y=U(d);if(A(h.next,$=>{P("child",p,$,d,x,y)}),y){h.meta.needFxCounter&&P("child",p,y.fxCount,d,x,y),h.meta.storeChange&&P("child",p,y.storeChange,d,x,y),h.meta.warnSerialize&&P("child",p,y.warnSerializeNode,d,x,y);const $=y.additionalLinks[h.id];$&&A($,u=>{P("child",p,u,d,x,y)})}}}Y=i.isRoot,M=i.currentPage,b=U(i)}function Qe(e,t){let r,n;const o=e;if(t){const s=Ze(t);e.length===0?(r=s.path,n=s.fullName):(r=s.path.concat([e]),n=s.fullName.length===0?e:s.fullName+"/"+e)}else r=e.length===0?[]:[e],n=e;return{shortName:o,fullName:n,path:r}}function Ve(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const n=t.named||t.name;n&&(r+=` unit '${n}'`);const o=t.loc;return!n&&o&&(r+=` (${o.file}:${o.line}:${o.column})`),r}function ge(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function W(e,...t){const r=De();if(r){const n=r.handlers[e];if(n)return n(r,...t)}}function te(e,t){const r=J({or:t,and:typeof e=="string"?{name:e}:e}),n=Ve("event",r),o=(i,...l)=>(N(!_(o,"derived"),"call of derived event is not supported, use createEvent instead",n),N(!ee,"unit call from pure function is not supported, use operators like sample instead",n),M?((a,h,g,p)=>{const m=M;let k=null;if(h)for(k=M;k&&k.template!==h;)k=G(k);Ce(k);const d=a.create(g,p);return Ce(m),d})(o,s,i,l):o.create(i,l)),s=De(),c=Object.assign(o,{graphite:C({meta:He(r.actualOp||"event",o,r),regional:1}),create:i=>(Oe({target:o,params:i,scope:b}),i),watch:i=>Ge(o,i),map:i=>me(o,"map",i,[O()]),filter:i=>me(o,"filter",i.fn?i:i.fn,[O(ce,1)]),filterMap:i=>me(o,"filterMap",i,[O(),ve(l=>!L(l),1)]),prepend(i){N(o.targetable,".prepend of derived event is not supported, call source event instead",n);const l=te("* → "+o.shortName,{parent:G(o)});return W("eventPrepend",R(l)),Ne(l,o,[O()],"prepend",i),yt(o,l),l}});return r!=null&&r.domain&&r.domain.hooks.event(c),T(c,"id",c.graphite.id),qe(c.graphite),c}function Ae(e,t,r,n,o){return it(r,`${o} ${t}`,"first argument"),N(E(n),"second argument should be a function",o),oe(!_(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,o),A(Array.isArray(r)?r:[r],s=>{e.off(s),ne(e).set(s,Le(Je(s,e,"on",lt,n)))}),e}function Ue(e,t){const r=J(t),n=ut(e),o=Ve("store",r),s=te({named:"updates",derived:1});W("storeBase",n);const c=n.id,i="skipVoid"in r,l=i&&!r.skipVoid;oe(!(i&&r.skipVoid),"{skipVoid: true}","updateFilter",o);const a={subscribers:new Map,updates:s,defaultState:e,stateRef:n,getState(){let f,w=n;if(M){let v=M;for(;v&&!v.reg[c];)v=G(v);v&&(f=v)}return!f&&b&&(q(b,n,1),f=b),f&&(w=f.reg[c]),We(w)},setState:f=>Oe({target:a,params:f,defer:1,scope:b}),reset:(...f)=>(N(a.targetable,".reset of derived store is not supported",o),A(f,w=>Ae(a,".reset",w,()=>a.defaultState,o)),a),on:(f,w)=>(N(a.targetable,".on of derived store is not supported",o),Ae(a,".on",f,w,o)),off(f){const w=ne(a).get(f);return w&&(w(),ne(a).delete(f)),a},map(f,w){let v,x;D(f)&&(v=f,f=f.fn);const y=a.getState(),$=L(y);(!$||$&&l)&&(x=f(y));const u=Ue(x,{name:`${a.shortName} → *`,derived:1,...w,and:v}),z=Je(a,u,"map",ce,f);return pt(re(u),{type:"map",fn:f,from:n}),re(u).noInit=1,W("storeMap",n,z),u},watch(f,w){if(oe(!w,"watch second argument","sample",o),!w||!ie(f)){const v=Ge(a,f);return W("storeWatch",n,f)||f(a.getState()),v}return N(E(w),"second argument should be a function",o),f.watch(v=>w(a.getState(),v))}},h=He("store",a,r),g=a.defaultConfig.updateFilter;a.graphite=C({scope:{state:n,fn:g},node:[ve((f,w,v)=>(v.scope&&!v.scope.reg[n.id]&&(v.b=1),f)),dt(n),ve((f,w,{a:v,b:x})=>{const y=L(f);return y&&!i&&console.error(`${o}: ${he}`),(y&&l||!y)&&(f!==v||x)},1),g&&O(ct,1),le({from:"stack",target:n})],child:s,meta:{...h,defaultState:e},regional:1}),T(a,"id",a.graphite.id),T(a,"rootStateRefId",c);const p=_(a,"serialize"),m=_(a,"derived"),k=p==="ignore",d=_(a,"sid");d&&(T(a,"storeChange",1),n.sid=d),d||k||m||T(a,"warnSerialize",1);const S=L(e);return N(m||!S||S&&l,he,o),m&&S&&!i&&console.error(`${o}: ${he}`),Fe(a,[s]),r!=null&&r.domain&&r.domain.hooks.store(a),m||(a.reinit=te({named:"reinit"}),a.reset(a.reinit)),n.meta=a.graphite.meta,qe(a.graphite),a}function bt(e,{scope:t,safe:r}={}){N(t||b||r,"scopeBind: scope not found");const n=t||b;return o=>{function s(){Pe(l)}let c,i=0;const l=b;Pe(n);try{c=e(o)}catch(a){c=a,i=1}if(s(),i)throw c;return c instanceof Promise&&c.then(s,s),c}}function kt({unit:e,fn:t,scope:r,batch:n}){const o=[Z.run({fn:c=>t(c)})];n&&o.unshift(Z.compute({priority:"sampler",batch:1})),Q(e)&&o.unshift(Z.mov({store:e.stateRef,to:"stack"}));const s=Array.isArray(e)?e:[e];if(r){const c=[],i=r.additionalLinks;return s.forEach(l=>{const a=i[l.graphite.id]||[];i[l.graphite.id]=a;const h=C({node:Xe(o,l),meta:{watchOp:l.kind}});a.push(h),c.push(()=>{const g=a.indexOf(h);g!==-1&&a.splice(g,1),we(h)})}),ge(()=>{c.forEach(l=>l())})}{const c=C({node:o,parent:s,family:{owners:s}});return ge(()=>{we(c)})}}function Xe(e,t){return Q(t)?[Z.mov({store:t.stateRef,to:"stack"}),...e]:e}const Ye=typeof Symbol<"u"&&Symbol.observable||"@@observable",R=e=>e.graphite||e,ae=e=>e.family.owners,se=e=>e.family.links,re=e=>e.stateRef,B=e=>e.value,ne=e=>e.subscribers,G=e=>e.parent,U=e=>e.scope,_=(e,t)=>R(e).meta[t],T=(e,t,r)=>R(e).meta[t]=r,Ze=e=>e.compositeName,ie=e=>(E(e)||D(e))&&"kind"in e,K=e=>t=>ie(t)&&t.kind===e,Q=K("store"),et=K("event"),Me=K("effect"),tt=e=>ie(e)&&!!e.targetable,_e=K("domain"),rt=K("scope");var wt={__proto__:null,unit:ie,store:Q,event:et,effect:Me,targetable:tt,domain:_e,scope:rt,attached:e=>Me(e)&&_(e,"attached")==1};const de=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},I=(e,t)=>e.push(t),oe=(e,t,r,n)=>!e&&console.error(`${n?n+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),$e=()=>{let e=0;return()=>""+ ++e},nt=$e(),je=$e(),ot=$e();let j=null;const qe=e=>{},De=()=>j,at=e=>(e&&j&&j.sidRoot&&(e=`${j.sidRoot}|${e}`),e),Fe=(e,t)=>{const r=R(e);A(t,n=>{const o=R(n);r.family.type!=="domain"&&(o.family.type="crosslink"),I(ae(o),r),I(se(r),o)})},X=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(R),D=e=>typeof e=="object"&&e!==null,E=e=>typeof e=="function",L=e=>e===void 0,st=e=>N(D(e)||E(e),"expect first argument be an object"),Re=(e,t,r,n)=>N(!(!D(e)&&!E(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${n}`),it=(e,t,r)=>{Array.isArray(e)?A(e,(n,o)=>Re(n,t,`${o} item of ${r}`,"")):Re(e,t,r," or array of units")},ct=(e,{fn:t},{a:r})=>t(e,r),lt=(e,{fn:t},{a:r})=>t(r,e),ce=(e,{fn:t})=>t(e),Te=(e,t,r,n)=>{const o={id:je(),type:e,data:t};return r&&(o.order={priority:r},n&&(o.order.barrierID=++ft)),o};let ft=0;const le=({from:e="store",store:t,target:r,to:n=r?"store":"stack",batch:o,priority:s})=>Te("mov",{from:e,store:t,to:n,target:r},s,o),H=({fn:e,batch:t,priority:r,safe:n=0,filter:o=0,pure:s=0})=>Te("compute",{fn:e,safe:n,filter:o,pure:s},r,t),xe=({fn:e})=>H({fn:e,priority:"effect"}),ve=(e,t,r)=>H({fn:e,safe:1,filter:t,priority:r&&"effect"}),dt=(e,t,r)=>le({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),O=(e=ce,t)=>H({fn:e,pure:1,filter:t}),Z={mov:le,compute:H,filter:({fn:e,pure:t})=>H({fn:e,filter:1,pure:t}),run:xe},ut=e=>({id:je(),current:e,initial:e}),We=({current:e})=>e,pt=(e,t)=>{e.before||(e.before=[]),I(e.before,t)};let V=null;const Se=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||be(e.v.type)>be(t.v.type))&&(r=e,e=t,t=r),r=Se(e.r,t),e.r=e.l,e.l=r,e},ze=[];let Ie=0;for(;Ie<6;)I(ze,{first:null,last:null,size:0}),Ie+=1;const mt=()=>{for(let e=0;e<6;e++){const t=ze[e];if(t.size>0){if(e===3||e===4){t.size-=1;const n=V.v;return V=Se(V.l,V.r),n}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},P=(e,t,r,n,o,s,c)=>ye(0,{a:null,b:null,node:r,parent:n,value:o,page:t,scope:s,meta:c},e,0),ye=(e,t,r,n)=>{const o=be(r),s=ze[o],c={v:{idx:e,stack:t,type:r,id:n},l:null,r:null};o===3||o===4?V=Se(V,c):(s.size===0?s.first=c:s.last.r=c,s.last=c),s.size+=1},be=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},ue=new Set;let b,Y=1,pe=0,ee=0,M=null;const Pe=e=>{b=e},Ce=e=>{M=e},Be=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},ht=(e,t,r,n)=>{const o=Be(e,r.id);return o?o.reg[r.id]:t?(q(t,r,n),t.reg[r.id]):r},gt=e=>e,q=(e,t,r,n,o)=>{const s=e.reg;if(s[t.id])return;const c=t.sid,i={id:t.id,current:t.initial,meta:t.meta};if(i.id in e.values.idMap)i.current=e.values.idMap[i.id];else if(c&&c in e.values.sidMap&&!(c in e.sidIdMap)){var l;const a=t==null||(l=t.meta)===null||l===void 0?void 0:l.serialize;i.current=(e.fromSerialize&&a!=="ignore"&&(a==null?void 0:a.read)||gt)(e.values.sidMap[c])}else if(t.before&&!o){let a=0;const h=r||!t.noInit||n;A(t.before,g=>{switch(g.type){case"map":{const p=g.from;if((p||g.fn)&&(p&&q(e,p,r,n),h)){const m=p&&s[p.id].current;i.current=g.fn?g.fn(m):m}break}case"field":q(e,g.from,r,n),a||(a=1,i.current=Array.isArray(i.current)?[...i.current]:{...i.current}),h&&(i.current[g.field]=s[s[g.from.id].id].current)}})}c&&(e.sidIdMap[c]=t.id),s[t.id]=i},vt=(e,t,r)=>{try{return t(B(r),e.scope,r)}catch(n){console.error(n),e.fail=1,e.failReason=n}},J=(e,t={})=>(D(e)&&(J(e.or,t),Ke(e,(r,n)=>{L(r)||n==="or"||n==="and"||(t[n]=r)}),J(e.and,t)),t),Ee=(e,t)=>{de(e.next,t),de(ae(e),t),de(se(e),t)},ke=(e,t,r)=>{let n;e.next.length=0,e.seq.length=0,e.scope=null;let o=se(e);for(;n=o.pop();)Ee(n,e),(t||r&&e.meta.op!=="sample"||n.family.type==="crosslink")&&ke(n,t,n.meta.op!=="on"&&r);for(o=ae(e);n=o.pop();)Ee(n,e),r&&n.family.type==="crosslink"&&ke(n,t,n.meta.op!=="on"&&r)},F=e=>e.clear(),we=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),Q(e))F(ne(e));else if(_e(e)){r=1;const n=e.history;F(n.events),F(n.effects),F(n.stores),F(n.domains)}ke(R(e),!!t,r)},Le=e=>ge(()=>we(e)),Ne=(e,t,r,n,o)=>C({node:r,parent:e,child:t,scope:{fn:o},meta:{op:n},family:{owners:[e,t],links:t},regional:1}),Ge=(e,t)=>(N(E(t),".watch argument should be a function"),Le(C({scope:{fn:t},node:[xe({fn:ce})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),yt=(e,t,r="event")=>{G(e)&&G(e).hooks[r](t)},He=(e,t,r)=>{const n=J(r),o=e==="domain",s=nt(),{sid:c=null,named:i=null,domain:l=null,parent:a=l}=n,h=i||n.name||(o?"":s),g=Qe(h,a),p={op:t.kind=e,name:t.shortName=h,sid:t.sid=at(c),named:i,unitId:t.id=s,serialize:n.serialize,derived:n.derived,config:n};return t.targetable=!n.derived,t.parent=a,t.compositeName=g,t.defaultConfig=n,t.getType=()=>(oe(0,"getType","compositeName.fullName"),g.fullName),!o&&(t.subscribe=m=>(st(m),t.watch(E(m)?m:k=>m.next&&m.next(k))),t[Ye]=()=>t),p},me=(e,t,r,n)=>{let o;D(r)&&(o=r,r=r.fn);const s=te({name:`${e.shortName} → *`,derived:1,and:o});return Ne(e,s,n,t,r),s},he="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",Je=(e,t,r,n,o)=>{const s=re(t),c=le({store:s,to:"a",priority:"read"});r==="map"&&(c.data.softRead=1);const i=[c,O(n)];return W("storeOnMap",s,i,Q(e)&&re(e)),Ne(e,t,i,r,o)};C({node:[xe({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});export{kt as D,bt as F,wt as a,Ue as h,te as p};