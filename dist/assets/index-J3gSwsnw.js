import{j as s,r as a,R as de}from"./react-BfF-YriY.js";import{c as me}from"./react-dom-BtsWHkds.js";import{L as I,B as ue}from"./react-router-dom-CwyG1y9u.js";import{c as T}from"./effector-react-J5fJEP_j.js";import{p as m,h as Z}from"./effector-wP0dD7uT.js";import{B as D,H as P,Q as pe}from"./react-toastify-CI28Nflv.js";import{p as K}from"./effector-localstorage-CBAVYhXj.js";import{u as he}from"./uid-CpW6Dhpp.js";import{i as ge}from"./echarts-ChS4Rbe6.js";import{d as fe,e as Q}from"./react-router-CTtfvnJ8.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-hZcSYCqI.js";import"./use-sync-external-store-CZSEbpyg.js";import"./clsx-B-dksMZM.js";import"./zrender-BAl-H0iw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function e(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=e(i);fetch(i.href,c)}})();const xe="_header_zklth_1",Ce="_logo_zklth_13",ve="_stat_zklth_21",M={header:xe,logo:Ce,stat:ve},ke="/pomodoro/assets/logo-DnHTeJrR.png",ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgB7dnBCYBQDMDQKE4izuHwziGuokPIByV5IwR6aDsx2LmvNy9sxzUx0IxcAZArAHIFQK4AyBUAuQIgVwDkCoBcAZBb+Lm3N8dGALkCIFcA5AqAXAGQaxf4+v9+tEYAuQIgVwDkCoBcAZArAHIFQK4AyBUAuQIgVwDkCoBcAZArAHIFQE4f4AHjkgq/+5aZiQAAAABJRU5ErkJggg==",we=()=>s.jsxs("div",{className:M.header,children:[s.jsx("div",{children:s.jsx(I,{to:"/pomodoro/",children:s.jsx("img",{className:M.logo,src:ke,alt:"logo"})})}),s.jsxs(I,{to:"/pomodoro/stat",className:M.stat,children:[s.jsx("img",{src:ye,alt:""}),"статистика"]})]}),je="_task_5ntdp_1",_e="_pomidoroQuantity_5ntdp_25",Te="_inputChange_5ntdp_47",Ae="_saveButton_5ntdp_59",N={task:je,pomidoroQuantity:_e,inputChange:Te,saveButton:Ae},Ne="data:image/svg+xml,%3csvg%20width='26'%20height='6'%20viewBox='0%200%2026%206'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='3'%20cy='3'%20r='3'%20fill='%23C4C4C4'/%3e%3ccircle%20cx='13'%20cy='3'%20r='3'%20fill='%23C4C4C4'/%3e%3ccircle%20cx='23'%20cy='3'%20r='3'%20fill='%23C4C4C4'/%3e%3c/svg%3e",Be="_sets_fz3wp_1",be={sets:Be},Se="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_35_546)'%3e%3cpath%20d='M10.545%206.765L11.235%207.455L4.44%2014.25H3.75V13.56L10.545%206.765ZM13.245%202.25C13.0575%202.25%2012.8625%202.325%2012.72%202.4675L11.3475%203.84L14.16%206.6525L15.5325%205.28C15.825%204.9875%2015.825%204.515%2015.5325%204.2225L13.7775%202.4675C13.6275%202.3175%2013.44%202.25%2013.245%202.25ZM10.545%204.6425L2.25%2012.9375V15.75H5.0625L13.3575%207.455L10.545%204.6425Z'%20fill='%23A8B64F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_35_546'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Ee="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_35_537)'%3e%3cpath%20d='M9.75%205.25H8.25V8.25H5.25V9.75H8.25V12.75H9.75V9.75H12.75V8.25H9.75V5.25ZM9%201.5C4.8675%201.5%201.5%204.8675%201.5%209C1.5%2013.1325%204.8675%2016.5%209%2016.5C13.1325%2016.5%2016.5%2013.1325%2016.5%209C16.5%204.8675%2013.1325%201.5%209%201.5ZM9%2015C5.6925%2015%203%2012.3075%203%209C3%205.6925%205.6925%203%209%203C12.3075%203%2015%205.6925%2015%209C15%2012.3075%2012.3075%2015%209%2015Z'%20fill='%23A8B64F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_35_537'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Re="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_35_540)'%3e%3cpath%20d='M9%201.5C4.8675%201.5%201.5%204.8675%201.5%209C1.5%2013.1325%204.8675%2016.5%209%2016.5C13.1325%2016.5%2016.5%2013.1325%2016.5%209C16.5%204.8675%2013.1325%201.5%209%201.5ZM9%2015C5.6925%2015%203%2012.3075%203%209C3%205.6925%205.6925%203%209%203C12.3075%203%2015%205.6925%2015%209C15%2012.3075%2012.3075%2015%209%2015Z'%20fill='%23A8B64F'/%3e%3cpath%20d='M5.25%208.25H8.25H9.75H12.75V9.75H9.75H8.25H5.25V8.25Z'%20fill='%23A8B64F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_35_540'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Qe="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_35_551)'%3e%3cpath%20d='M12%206.75V14.25H6V6.75H12ZM10.875%202.25H7.125L6.375%203H3.75V4.5H14.25V3H11.625L10.875%202.25ZM13.5%205.25H4.5V14.25C4.5%2015.075%205.175%2015.75%206%2015.75H12C12.825%2015.75%2013.5%2015.075%2013.5%2014.25V5.25Z'%20fill='%23A8B64F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_35_551'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",j=3,Me=5,Y=m(),S=m(),q=m(),B=m(),b=m(),X=m(),J=m(),ee=m(),te=m(),w=m(),se=m(),E=Z([]).on(Y,(t,r)=>[...t,r]).on(S,(t,r)=>t.filter(e=>e.id!==r)).on(q,(t,r)=>t.map(e=>e.id===r.id?(D("Задача отредактирована",{position:"bottom-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:P}),{...e,task:r.task}):e)).on(B,(t,r)=>t.map(e=>e.id===r.id?{...e,taskTimeRemaining:r.secondsRemaining}:e)).on(b,(t,r)=>t.map(e=>e.id===r.id?{...e,breakTimeRemaining:r.secondsRemaining}:e)).on(X,(t,r)=>t.map(e=>e.id===r.id?{...e,pomidoroQuantity:e.pomidoroQuantity+=1}:e)).on(J,(t,r)=>t.map(e=>e.id===r.id?e.pomidoroQuantity===1?(D.error("Нельзя просто взять и сделать меньше одного помидорро!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:P}),e):{...e,pomidoroQuantity:e.pomidoroQuantity-=1}:e)).on(ee,(t,r)=>t.map(e=>e.id===r.id?{...e,pomidoroQuantity:e.pomidoroQuantity-=1}:e)).on(te,(t,r)=>t.map(e=>e.id===r.id?{...e,taskTimeRemaining:e.taskTimeRemaining+=60}:e)).on(w,(t,r)=>t.map(e=>e.id===r.id?{...e,isTaskStarted:r.isStarted}:e)).on(se,(t,r)=>t.map(e=>e.id===r?{...e,taskTimeRemaining:j}:e));K({store:E,key:"tasks"});const Le=t=>{const{id:r,onClose:e,setEditMode:o}=t,i=a.useRef(null);return s.jsx("div",{className:be.sets,ref:i,children:s.jsxs("ul",{children:[s.jsxs("li",{onClick:()=>{X({id:r})},children:[s.jsx("img",{src:Ee,alt:""}),"Добавить помидор"]}),s.jsxs("li",{onClick:()=>{J({id:r})},children:[s.jsx("img",{src:Re,alt:""}),"Убрать помидор"]}),s.jsxs("li",{onClick:()=>{o(),e()},children:[s.jsx("img",{src:Se,alt:""}),"Редактировать задачу"]}),s.jsxs("li",{onClick:()=>{S(r),e()},children:[s.jsx("img",{src:Qe,alt:""}),"Удалить задачу"]})]})})},He=({ref:t,handler:r})=>{const e=a.useCallback(o=>{t.current&&o.target instanceof Node&&!t.current.contains(o.target)&&r()},[r,t]);a.useEffect(()=>(document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}),[e])},$e=t=>{const{task:r,id:e,pomidoroQuantity:o}=t,[i,c]=a.useState(!1),[u,p]=a.useState(!1),h=a.useRef(null),d=a.useRef(null);He({ref:d,handler:()=>{c(!1)}});const n=()=>{var l;h.current&&(q({id:e,task:((l=h.current)==null?void 0:l.value)??""}),p(!1))};return s.jsxs("div",{className:N.task,ref:d,children:[s.jsxs("div",{className:"df gap10",children:[s.jsx("div",{className:N.pomidoroQuantity,children:o}),u?s.jsxs(s.Fragment,{children:[s.jsx("input",{type:"text",defaultValue:r,ref:h,className:N.inputChange}),s.jsx("button",{className:N.saveButton,onClick:()=>n(),children:"сохранить"})]}):r]}),s.jsx("button",{onClick:()=>c(!0),children:s.jsx("img",{src:Ne,alt:""})}),i&&s.jsx(Le,{id:e,onClose:()=>c(!1),setEditMode:()=>p(!0)})]})},_=(t,r)=>{const e=["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"],o=r??new Date;if(t)switch(t){case"dayNumber":return o.getDay()===0?7:o.getDay()}return e[o.getDay()===0?6:o.getDay()-1]},re=t=>{const r=t??new Date,e=r.getDate().toString().padStart(2,"0"),o=(r.getMonth()+1).toString().padStart(2,"0"),i=r.getFullYear();return`${e}.${o}.${i}`},O=t=>{const r=t.split(".");return new Date(`${r[1]}.${r[0]}.${r[2]}`)},R=t=>t?{hours:Math.floor(t/3600),min:Math.floor(t%3600/60)}:{hours:0,min:0},Ie=()=>{const t=T(E),r=t.reduce((i,c)=>i+c.pomidoroQuantity,0),{hours:e,min:o}=R(r*j);return s.jsxs("div",{children:[t.length>0&&t.slice(0).reverse().map(i=>s.jsx($e,{id:i.id,task:i.task,timeSpent:i.timeSpent,pomidoroQuantity:i.pomidoroQuantity,taskTimeRemaining:i.taskTimeRemaining,breakTimeRemaining:i.breakTimeRemaining,isTaskStarted:i.isTaskStarted},i.id)),r>0&&s.jsxs("div",{style:{fontSize:"12px",color:"var(--grey500)"},children:[`${e?e+"ч.":""}`,`${o?o+"мин.":""}`]})]})},De=()=>s.jsxs("div",{className:"df fd-c",style:{color:"var(--text-color)"},children:[s.jsx("div",{className:"fs24 fw-b",children:"Ура! Теперь можно начать работать:"}),s.jsxs("ul",{className:"df fd-c gap10 faq",children:[s.jsxs("li",{className:"fs18",children:["Выберите категорию и напишите название текущей задачи"," "]}),s.jsx("li",{className:"fs18",children:"Запустите таймер («помидор»)"}),s.jsx("li",{className:"fs18",children:"Работайте пока «помидор» не прозвонит Сделайте короткий перерыв (3-5 минут)"}),s.jsx("li",{className:"fs18",children:"Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена."}),s.jsx("li",{className:"fs18",children:"Каждые 4 «помидора» делайте длинный перерыв (15-30 минут)."})]})]}),Pe="_button_vko5c_1",Fe="_red_vko5c_23",Ve="_green_vko5c_37",Ze="_greyBorder_vko5c_55",Oe="_redBorder_vko5c_63",U={button:Pe,red:Fe,green:Ve,greyBorder:Ze,redBorder:Oe},F=t=>{const{style:r,onClick:e,children:o,disabled:i}=t;return s.jsx("button",{disabled:!!i,onClick:e,className:`${U.button} ${r?U[r]:""}`,children:o&&o})},W=m(),ie=Z("").on(W,(t,r)=>r),We="_input_19gpp_1",Ue={input:We},ze=t=>{const[r,e]=T([ie,W]),{placeholder:o}=t;return s.jsx("input",{type:"text",value:r,placeholder:o??"Текст",className:Ue.input,onChange:i=>e(i.currentTarget.value)})};var k=(t=>(t.Green="green",t.Red="red",t.GreyBorder="greyBorder",t.RedBorder="redBorder",t))(k||{});const Ge=()=>{const[t,r]=T([ie,W]),e=()=>{if(r(""),t!==""){const o={id:he(),task:t,pomidoroQuantity:1,taskTimeRemaining:j,isTaskStarted:!1,breakTimeRemaining:0};Y(o)}};return s.jsxs("div",{className:"df gap20 fd-c",children:[s.jsx(ze,{placeholder:"Название задачи"}),s.jsx(F,{style:k.Green,onClick:e,children:"Добавить"})]})},Ke="_timer_1kdxc_1",Ye="_timerHeader_1kdxc_9",qe="_timerBody_1kdxc_23",Xe="_addMinutes_1kdxc_43",Je="_timerCounts_1kdxc_85",et="_timerControls_1kdxc_93",v={timer:Ke,timerHeader:Ye,timerBody:qe,addMinutes:Xe,timerCounts:Je,timerControls:et},tt=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...t},a.createElement("path",{d:"M4 12H20M12 4V20",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),st=()=>{const t=r=>String(r).padStart(2,"0");return r=>{const e=Math.floor(r/60),o=r%60;return`${t(e)}:${t(o)}`}},rt="/pomodoro/assets/notasks-1UaZawsQ.gif",it="/pomodoro/assets/dzin-Bi7iuZBF.mp3",z=()=>{const t=new Audio;t.src=it,t.autoplay=!0},ot=()=>{const t=T(E),r=st(),[e,o]=a.useState(!1),[i,c]=a.useState(!1),[u,p]=a.useState("00:00"),[h,d]=a.useState(null),n=t.at(-1);a.useEffect(()=>{p(r(((n==null?void 0:n.breakTimeRemaining)||(n==null?void 0:n.taskTimeRemaining))??0)),e&&n&&!n.isTaskStarted?w({id:n.id,isStarted:!0}):!e&&h&&clearInterval(h)},[n,n==null?void 0:n.isTaskStarted,h,e,r,u]),a.useEffect(()=>{p(r(((n==null?void 0:n.breakTimeRemaining)||(n==null?void 0:n.taskTimeRemaining))??0));const x=E.watch(A=>{const y=A.at(-1);(y==null?void 0:y.pomidoroQuantity)===0&&(S(y.id),D.info(`Задача ${y.task} успешно заверешена. Вы большой М-О-Л-О-Д-Е-Ц`,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:P}),l()),A.length===0&&l()});return()=>x()},[]);const l=()=>{o(!1),c(!1)};if(!n)return s.jsx("div",{className:"df jc-c ai-c",children:s.jsx("img",{src:rt,alt:""})});const g=()=>{if(p(r(n.taskTimeRemaining)),n.taskTimeRemaining===0){ee({id:n.id}),console.log(t),z(),o(!1),c(!0),b({id:n.id,secondsRemaining:Me});return}B({id:n.id,secondsRemaining:n.taskTimeRemaining-=1})},f=()=>{if(p(r(n.breakTimeRemaining)),n.breakTimeRemaining===0){z(),o(!1),c(!1),w({id:n.id,isStarted:!1}),B({id:n.id,secondsRemaining:j});return}b({id:n.id,secondsRemaining:n.breakTimeRemaining-=1})},C=x=>{const A=ae(x);d(A)},ae=x=>setInterval(()=>x(),1e3),ce=()=>{if(i){o(!1),c(!1),w({id:n.id,isStarted:!1}),B({id:n.id,secondsRemaining:j}),b({id:n.id,secondsRemaining:0});return}S(n.id)},le=()=>{o(!1),se(n.id),w({id:n.id,isStarted:!1})};return s.jsxs("div",{className:v.timer,children:[s.jsxs("div",{className:v.timerHeader,style:e?i?{backgroundColor:"var(--green600)",color:"white!important"}:{backgroundColor:"var(--red500)",color:"white!important"}:{},children:[s.jsx("span",{style:{color:"inherit"},children:n==null?void 0:n.task}),s.jsx("span",{style:{color:"inherit"},children:i?"Перерыв":`Помидор ${n==null?void 0:n.pomidoroQuantity}`})]}),s.jsxs("div",{className:v.timerBody,children:[s.jsxs("div",{className:"df gap20 ai-c",children:[s.jsx("div",{className:v.timerCounts,style:e?i?{color:"var(--green600)"}:{color:"var(--red500)"}:{},children:u}),s.jsx("div",{className:v.addMinutes,onClick:()=>te({id:n.id}),children:s.jsx(tt,{})})]}),s.jsxs("div",{className:`${v.timerControls}`,children:[s.jsx(F,{style:k.Green,onClick:()=>{!e&&C(i?f:g),o(x=>!x)},children:e?"Пауза":n.isTaskStarted?"Продолжить":"Старт"}),s.jsx(F,{disabled:!e&&!n.isTaskStarted,style:n.isTaskStarted?e?k.RedBorder:k.Red:k.GreyBorder,onClick:()=>{n.isTaskStarted&&!e&&ce(),n.isTaskStarted&&e&&le()},children:!e&&n.isTaskStarted?"Сделано":"Стоп"})]})]})]})},nt="_taskPage_3zhap_1",at="_tasksBlock_3zhap_11",ct="_timerBlock_3zhap_23",L={taskPage:nt,tasksBlock:at,timerBlock:ct},lt=()=>s.jsxs("div",{className:`${L.taskPage} scaleIn`,children:[s.jsxs("div",{className:L.tasksBlock,children:[s.jsx(De,{}),s.jsx(Ge,{}),s.jsx(Ie,{})]}),s.jsx("div",{className:L.timerBlock,children:s.jsx(ot,{})})]}),V=(t,r)=>{t=Math.abs(t)%100;const e=t%10;return t>10&&t<20?r[2]:e>1&&e<5?r[1]:e==1?r[0]:r[2]},dt=t=>{const{dayName:r,workTime:e}=t,{hours:o,min:i}=R(e);return s.jsxs("div",{className:"df fd-c f-g gap20 card",children:[s.jsx("span",{className:"fw-b fs24",children:r?r.toUpperCase():_().toUpperCase()}),s.jsx("span",{className:"fs18",children:e?`Вы работали над задачами в течение ${o} ${V(o,["час","часов","часов"])} ${i} ${V(i,["минуты","минут","минут"])}`:"нет данных"})]})},mt=[{date:"19.02.2024",workTime:1e4,pauseTime:3e3,pomidoroQ:5,stopsQ:10,dayNumber:1},{date:"20.02.2024",workTime:15e3,pauseTime:4e3,pomidoroQ:8,stopsQ:12,dayNumber:2},{date:"22.02.2024",workTime:18e3,pauseTime:5e3,pomidoroQ:10,stopsQ:16,dayNumber:4},{date:"23.02.2024",workTime:22e3,pauseTime:7e3,pomidoroQ:12,stopsQ:18,dayNumber:5},{date:"24.02.2024",workTime:2e4,pauseTime:6e3,pomidoroQ:11,stopsQ:17,dayNumber:6},{date:"26.02.2024",workTime:13e3,pauseTime:3500,pomidoroQ:6,stopsQ:11,dayNumber:1},{date:"28.02.2024",workTime:19e3,pauseTime:6500,pomidoroQ:10,stopsQ:16,dayNumber:3},{date:"01.03.2024",workTime:23e3,pauseTime:8e3,pomidoroQ:14,stopsQ:20,dayNumber:5},{date:"02.03.2024",workTime:24e3,pauseTime:9e3,pomidoroQ:15,stopsQ:20,dayNumber:6},{date:"03.03.2024",workTime:2e4,pauseTime:6e3,pomidoroQ:11,stopsQ:17,dayNumber:7},{date:"04.03.2024",workTime:18e3,pauseTime:5e3,pomidoroQ:10,stopsQ:16,dayNumber:1},{date:"05.03.2024",workTime:14e3,pauseTime:4e3,pomidoroQ:7,stopsQ:14,dayNumber:2}];m();const ut=m();localStorage.removeItem("progress");const H=re(),oe=Z(mt).on(ut,(t,r)=>{var o;if(!t||t.length===0)t.push({date:H,[r.type]:r.value,dayNumber:_("dayNumber")});else if(((o=t.at(-1))==null?void 0:o.date)!==H)t.push({date:H,[r.type]:r.value,dayNumber:_("dayNumber")});else{const i=t[t.length-1][r.type];i&&(t[t.length-1][r.type]=i+r.value)}return[...t]});K({store:oe,key:"progress"});const ne=t=>{const r=t.getDay(),e=r===0?-6:1-r,o=new Date(t);return o.setDate(o.getDate()+e),o},pt=t=>{const r=ne(t),e=new Date(r);return e.setDate(e.getDate()+6),e},ht=(t,r)=>{for(let e=0;e<=6;e++){const o=new Date(t);o.setDate(o.getDate()+1*e),r.some(c=>O(c.date).getTime()===o.getTime())||r.push({date:re(o),dayNumber:_("dayNumber",o)})}return r.sort((e,o)=>e.dayNumber-o.dayNumber)},gt=(t,r)=>{const[e,o]=a.useState([]);return a.useEffect(()=>{const i=new Date;i.setHours(0,0,0,0),i.setDate(i.getDate()+7*r);const c=ne(i),u=pt(i),p=t.filter(h=>{const d=O(h.date);return d>=c&&d<=u});o(ht(c,p))},[r,t]),e},ft=({chosenWeek:t,setSelectedDate:r})=>{const e=T(oe),o=gt(e,typeof t=="number"?t:0),i=a.useRef(null);return a.useEffect(()=>{if(!i.current)return;i.current.style.height="450px";const c=o.map(l=>({value:l.workTime??0})),u=Math.max(...c.map(l=>l.value)),p=(()=>{switch(!0){case u<1e3:return 1800;case u<7200:return 1500;default:return 3600}})(),h=Math.ceil(Math.max(...c.map(l=>l.value))/p)*p,d=ge(i.current),n={margin:0,tooltip:{},xAxis:{data:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"]},yAxis:{position:"right",interval:p,max:h,axisLabel:{formatter:function(l){const g=Math.floor(l/3600),f=l%3600,C=Math.floor(f/60);return g?`${g}ч ${C} мин`:`${C} мин`}}},series:[{name:"Отработано Часов",type:"bar",data:c,color:"red",itemStyle:{color:"#EA8A79"},emphasis:{itemStyle:{color:"#DC3E22"}}}],responsive:!0};return window.addEventListener("resize",function(){d.resize()}),d.setOption(n),d.on("click",function(l){var g;(g=n==null?void 0:n.series[0])==null||g.data.forEach((f,C)=>{l.dataIndex===C?f.itemStyle={color:"#DC3E22"}:f.itemStyle={color:"#EA8A79"}}),r(o[l.dataIndex]),d.setOption(n)}),d.getZr().on("click",l=>{var g;l.target||(r(null),(g=n==null?void 0:n.series[0])==null||g.data.forEach(f=>{f.itemStyle={color:"#EA8A79"}}),d.setOption(n))}),()=>{d.dispose()}},[o]),s.jsx("div",{className:"df f-g card",ref:i})},xt="_statCard_bptg7_1",Ct="_orange_bptg7_37",vt="_violet_bptg7_51",kt="_blue_bptg7_65",G={statCard:xt,orange:Ct,violet:vt,blue:kt},$=t=>{const{Img:r,title:e,info:o,style:i}=t;return s.jsxs("div",{className:`${G.statCard} card ${i?G[i]:""}`,style:{flex:1},children:[s.jsxs("div",{className:"df fd-c gap20",children:[s.jsx("span",{className:"fs24 fw-b",children:e}),s.jsx("span",{className:"fs64 fw-400",children:o})]}),s.jsx(r,{})]})},yt=({setChoosenWeek:t})=>s.jsxs("div",{className:"df jc-sb",children:[s.jsx("div",{className:"fs18",children:"Ваша активность"}),s.jsxs("select",{name:"",id:"",onChange:r=>t(Number(r.target.value)),children:[s.jsx("option",{value:"0",children:"Эта неделя"}),s.jsx("option",{value:"-1",children:"Прошлая"}),s.jsx("option",{value:"-2",children:"2 недели назад"})]})]}),wt=t=>a.createElement("svg",{width:115,height:115,viewBox:"0 0 115 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("g",{clipPath:"url(#clip0_16_527)"},a.createElement("path",{d:"M111.881 66.9398C111.881 96.9041 87.5898 115 57.6255 115C27.6603 115 3.36914 90.7089 3.36914 60.7437C3.36914 30.7794 28.4192 12.3571 58.3836 12.3571C88.3488 12.3571 111.881 36.9746 111.881 66.9398Z",fill:"#DC3E22"}),a.createElement("path",{d:"M81.185 36.2439C78.5489 33.5598 74.284 31.0639 71.1081 30.3341C72.8534 28.7865 73.2046 28.7355 75.391 27.6522C80.9932 24.8793 89.2913 24.624 89.2913 24.624C89.2913 24.624 79.497 19.5621 72.3358 19.8797C70.5127 19.9599 68.5898 20.604 66.7346 21.5166C67.7807 20.0403 68.7719 18.5725 69.4056 17.4698C71.3442 14.0981 73.3822 9.85057 73.3822 9.85057C73.3822 9.85057 65.8733 10.2515 62.3903 14.42C61.0676 16.0036 60.0691 18.0155 59.3384 19.9029C58.0406 18.4121 56.6082 17.0845 55.1756 16.0481C48.0129 10.8645 36.5683 11.986 36.5683 11.986C36.5683 11.986 45.2138 16.8902 49.1036 21.7826C50.6224 23.6932 52.1638 24.5767 53.0852 26.7189C49.9003 26.0293 42.7142 26.265 39.1867 27.5729C30.1222 30.9348 26.2164 44.4617 26.2164 44.4617C26.2164 44.4617 35.0618 38.3648 47.0968 34.0876C49.743 33.1475 52.5406 32.8983 54.9789 32.9411C53.872 34.6654 52.6628 36.9045 51.7478 39.5446C49.5215 45.9724 52.4634 61.2701 52.4634 61.2701C52.4634 61.2701 58.9082 52.2234 61.5343 44.8951C62.8821 41.1335 63.2157 37.3568 63.2231 34.5698C65.6131 35.6302 68.4281 37.1793 70.5319 38.5193C81.3038 45.3826 86.4576 57.9127 86.4576 57.9127C86.4576 57.9127 87.9585 43.1422 81.185 36.2439Z",fill:"#899441"}),a.createElement("path",{d:"M58.9395 29.6396C58.9053 29.6396 58.8711 29.6388 58.8368 29.6379C56.7066 29.5826 55.0246 27.8121 55.0764 25.6835C55.0808 25.4993 55.2668 12.5386 48.067 6.90318C46.3877 5.58886 46.0911 3.16203 47.4054 1.48184C48.7206 -0.197465 51.1475 -0.49402 52.8268 0.821175C63.1229 8.87817 62.8158 25.1887 62.7982 25.8792C62.7429 27.9761 61.025 29.6396 58.9395 29.6396Z",fill:"#A8B64F"}),a.createElement("circle",{cx:41.5,cy:64.5,r:2.5,fill:"black"}),a.createElement("g",{filter:"url(#filter0_f_16_527)"},a.createElement("circle",{cx:29.5,cy:75.5,r:5.5,fill:"#EA8979"})),a.createElement("g",{filter:"url(#filter1_f_16_527)"},a.createElement("circle",{cx:85.5,cy:75.5,r:5.5,fill:"#EA8979"})),a.createElement("circle",{cx:73.5,cy:64.5,r:2.5,fill:"black"}),a.createElement("path",{d:"M46 78C50 82 64.5 83 68.5 78",stroke:"black"})),a.createElement("defs",null,a.createElement("filter",{id:"filter0_f_16_527",x:20,y:66,width:19,height:19,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:2,result:"effect1_foregroundBlur_16_527"})),a.createElement("filter",{id:"filter1_f_16_527",x:76,y:66,width:19,height:19,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),a.createElement("feGaussianBlur",{stdDeviation:2,result:"effect1_foregroundBlur_16_527"})),a.createElement("clipPath",{id:"clip0_16_527"},a.createElement("rect",{width:115,height:115,fill:"white"})))),jt="_tomatoCard_16b04_1",_t={tomatoCard:jt},Tt=({tomatoQuantity:t})=>s.jsxs("div",{className:`${_t.tomatoCard} card`,style:{padding:0},children:[s.jsxs("div",{className:"df gap20 ai-c jc-c",style:{padding:"10px"},children:[s.jsx(wt,{}),t&&s.jsxs("span",{className:"fs24",children:["х",t]})]}),t&&s.jsx("div",{className:"df jc-c ai-c",style:{background:"var(--red500)",color:"white",padding:"10px"},children:`${t}
          ${V(t,["помидор","помидора","помидоров"])}
        `})]}),At=t=>a.createElement("svg",{width:115,height:115,viewBox:"0 0 115 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M21 20L95 94",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),Nt=t=>a.createElement("svg",{width:115,height:115,viewBox:"0 0 115 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M57.3154 30.1579V57.3158L70.8944 70.8947",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),Bt=t=>a.createElement("svg",{width:115,height:115,viewBox:"0 0 115 115",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),bt=()=>{const[t,r]=a.useState(0),[e,o]=a.useState(null);return a.useEffect(()=>{o(null)},[t]),s.jsxs("div",{className:"scaleIn df fd-c gap20",children:[s.jsx(yt,{setChoosenWeek:r}),s.jsxs("div",{className:"df gap20",children:[s.jsxs("div",{className:"df fd-c gap20",style:{width:"25%"},children:[s.jsx(dt,{dayName:e!=null&&e.dayNumber?_("",O(e==null?void 0:e.date)):"",workTime:e==null?void 0:e.workTime}),s.jsx(Tt,{tomatoQuantity:e==null?void 0:e.pomidoroQ})]}),s.jsx(ft,{chosenWeek:t,setSelectedDate:i=>o(i)})]}),s.jsxs("div",{className:"df gap20",children:[s.jsx($,{title:"Фокус",info:`${(((e==null?void 0:e.pauseTime)??0+((e==null?void 0:e.workTime)??0))/((e==null?void 0:e.workTime)??1)).toFixed(2)}%`,style:e!=null&&e.workTime?"orange":"",Img:Bt}),s.jsx($,{title:"Время на паузе",info:`${e!=null&&e.pauseTime?`${R(e.pauseTime).hours}ч.${R(e.pauseTime).min}м.`:0}`,Img:Nt,style:e!=null&&e.workTime?"violet":""}),s.jsx($,{title:"Остановки",info:`${(e==null?void 0:e.stopsQ)??0}`,Img:At,style:e!=null&&e.workTime?"blue":""})]})]})},St=()=>s.jsxs("div",{children:["Упс...нет такой страницы ",s.jsx(I,{to:"/",children:"перейти на главную"})]});function Et(){return s.jsx(s.Fragment,{children:s.jsxs(ue,{children:[s.jsx(we,{}),s.jsx("div",{className:"content",children:s.jsxs(fe,{children:[s.jsx(Q,{path:"/pomodoro/",element:s.jsx(lt,{})}),s.jsx(Q,{path:"/pomodoro/stat",element:s.jsx(bt,{})}),s.jsx(Q,{path:"*",element:s.jsx(St,{})})]})}),s.jsx(pe,{})]})})}me.createRoot(document.getElementById("root")).render(s.jsx(de.StrictMode,{children:s.jsx(Et,{})}));