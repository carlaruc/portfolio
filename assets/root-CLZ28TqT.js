import{r as s,U as y,j as n}from"./jsx-runtime-K0qf73fL.js";import{M as H,L as N,y as $,T as G,o as v,D,C as Q,c as Z,u as P,i as I,$ as ee,a as te,w as ne,W as A,b as se,x as re,R as oe,s as le,d as ae,e as j,F as ie}from"./XMarkIcon-CwS09QpG.js";import{l as ue,n as ce,o as de,p as me,_ as pe,L as fe,N as _,O as he,M as xe,q as ge,S as ye}from"./components-C9JJkDpc.js";import"./index-Dqky0Baf.js";/**
 * @remix-run/react v2.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let J="positions";function be({getKey:e,...t}){let{isSpaMode:r}=ue(),l=ce(),u=de();me({getKey:e,storageKey:J});let m=s.useMemo(()=>{if(!e)return null;let o=e(l,u);return o!==l.key?o:null},[]);if(r)return null;let p=((o,a)=>{if(!window.history.state||!window.history.state.key){let f=Math.random().toString(32).slice(2);window.history.replaceState({key:f},"")}try{let i=JSON.parse(sessionStorage.getItem(o)||"{}")[a||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(f){console.error(f),sessionStorage.removeItem(o)}}).toString();return s.createElement("script",pe({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(J)}, ${JSON.stringify(m)})`}}))}function ve(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let l=(t==null?void 0:t.getAttribute("disabled"))==="";return l&&Se(r)?!1:l}function Se(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function Ee(e,t){return s.useMemo(()=>{var r;if(e.type)return e.type;let l=(r=e.as)!=null?r:"button";if(typeof l=="string"&&l.toLowerCase()==="button"||(t==null?void 0:t.tagName)==="BUTTON"&&!t.hasAttribute("type"))return"button"},[e.type,e.as,t])}var U;let we=(U=y.startTransition)!=null?U:function(e){e()};var je=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(je||{}),ke=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.SetButtonElement=4]="SetButtonElement",e[e.SetPanelElement=5]="SetPanelElement",e))(ke||{});let Ie={0:e=>({...e,disclosureState:P(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}},4(e,t){return e.buttonElement===t.element?e:{...e,buttonElement:t.element}},5(e,t){return e.panelElement===t.element?e:{...e,panelElement:t.element}}},T=s.createContext(null);T.displayName="DisclosureContext";function C(e){let t=s.useContext(T);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}return t}let M=s.createContext(null);M.displayName="DisclosureAPIContext";function V(e){let t=s.useContext(M);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return t}let L=s.createContext(null);L.displayName="DisclosurePanelContext";function Ne(){return s.useContext(L)}function $e(e,t){return P(t.type,Ie,e,t)}let De=s.Fragment;function Pe(e,t){let{defaultOpen:r=!1,...l}=e,u=s.useRef(null),m=$(t,G(d=>{u.current=d},e.as===void 0||e.as===s.Fragment)),p=s.useReducer($e,{disclosureState:r?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:o,buttonId:a},f]=p,i=v(d=>{f({type:1});let h=ae(u);if(!h||!a)return;let g=d?d instanceof HTMLElement?d:d.current instanceof HTMLElement?d.current:h.getElementById(a):h.getElementById(a);g==null||g.focus()}),S=s.useMemo(()=>({close:i}),[i]),x=s.useMemo(()=>({open:o===0,close:i}),[o,i]),b={ref:m},E=D();return y.createElement(T.Provider,{value:p},y.createElement(M.Provider,{value:S},y.createElement(Q,{value:i},y.createElement(Z,{value:P(o,{0:I.Open,1:I.Closed})},E({ourProps:b,theirProps:l,slot:x,defaultTag:De,name:"Disclosure"})))))}let Te="button";function Ce(e,t){let r=s.useId(),{id:l=`headlessui-disclosure-button-${r}`,disabled:u=!1,autoFocus:m=!1,...p}=e,[o,a]=C("Disclosure.Button"),f=Ne(),i=f===null?!1:f===o.panelId,S=s.useRef(null),x=$(S,t,v(c=>{if(!i)return a({type:4,element:c})}));s.useEffect(()=>{if(!i)return a({type:2,buttonId:l}),()=>{a({type:2,buttonId:null})}},[l,a,i]);let b=v(c=>{var w;if(i){if(o.disclosureState===1)return;switch(c.key){case j.Space:case j.Enter:c.preventDefault(),c.stopPropagation(),a({type:0}),(w=o.buttonElement)==null||w.focus();break}}else switch(c.key){case j.Space:case j.Enter:c.preventDefault(),c.stopPropagation(),a({type:0});break}}),E=v(c=>{switch(c.key){case j.Space:c.preventDefault();break}}),d=v(c=>{var w;ve(c.currentTarget)||u||(i?(a({type:0}),(w=o.buttonElement)==null||w.focus()):a({type:0}))}),{isFocusVisible:h,focusProps:g}=ee({autoFocus:m}),{isHovered:k,hoverProps:O}=te({isDisabled:u}),{pressed:R,pressProps:F}=ne({disabled:u}),X=s.useMemo(()=>({open:o.disclosureState===0,hover:k,active:R,disabled:u,focus:h,autofocus:m}),[o,k,R,h,u,m]),B=Ee(e,o.buttonElement),Y=i?A({ref:x,type:B,disabled:u||void 0,autoFocus:m,onKeyDown:b,onClick:d},g,O,F):A({ref:x,id:l,type:B,"aria-expanded":o.disclosureState===0,"aria-controls":o.panelElement?o.panelId:void 0,disabled:u||void 0,autoFocus:m,onKeyDown:b,onKeyUp:E,onClick:d},g,O,F);return D()({ourProps:Y,theirProps:p,slot:X,defaultTag:Te,name:"Disclosure.Button"})}let Me="div",Le=H.RenderStrategy|H.Static;function Oe(e,t){let r=s.useId(),{id:l=`headlessui-disclosure-panel-${r}`,transition:u=!1,...m}=e,[p,o]=C("Disclosure.Panel"),{close:a}=V("Disclosure.Panel"),[f,i]=s.useState(null),S=$(t,v(k=>{we(()=>o({type:5,element:k}))}),i);s.useEffect(()=>(o({type:3,panelId:l}),()=>{o({type:3,panelId:null})}),[l,o]);let x=se(),[b,E]=re(u,f,x!==null?(x&I.Open)===I.Open:p.disclosureState===0),d=s.useMemo(()=>({open:p.disclosureState===0,close:a}),[p.disclosureState,a]),h={ref:S,id:l,...oe(E)},g=D();return y.createElement(le,null,y.createElement(L.Provider,{value:p.panelId},g({ourProps:h,theirProps:m,slot:d,defaultTag:Me,features:Le,visible:b,name:"Disclosure.Panel"})))}let Re=N(Pe),q=N(Ce),z=N(Oe),Fe=Object.assign(Re,{Button:q,Panel:z});function Be({title:e,titleId:t,...r},l){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const He=s.forwardRef(Be),K=[{name:"Resume",href:"/resume"},{name:"Projects",href:"/projects"},{name:"Contact",href:"/contact"}];function W(...e){return e.filter(Boolean).join(" ")}function Ae(){return n.jsxs(Fe,{as:"nav",className:"bg-gray-800",children:[n.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"relative flex h-16 items-center justify-between",children:[n.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:n.jsxs(q,{className:"group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[n.jsx("span",{className:"absolute -inset-0.5"}),n.jsx("span",{className:"sr-only",children:"Open main menu"}),n.jsx(He,{"aria-hidden":"true",className:"block h-6 w-6 group-data-[open]:hidden"}),n.jsx(ie,{"aria-hidden":"true",className:"hidden h-6 w-6 group-data-[open]:block"})]})}),n.jsxs("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[n.jsx("div",{className:"flex flex-shrink-0 items-center",children:n.jsx(fe,{to:"/",children:n.jsx("img",{alt:"Carla Rucian",src:"icons/home.png",className:"h-10 w-auto"})})}),n.jsx("div",{className:"hidden sm:ml-6 sm:block",children:n.jsx("div",{className:"flex space-x-4",children:K.map(e=>n.jsx(_,{to:e.href,className:({isActive:t,isPending:r})=>W(t?"bg-gray-900 text-white":r?"bg-gray-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),children:e.name},e.name))})})]})]})}),n.jsx(z,{className:"sm:hidden",children:n.jsx("div",{className:"space-y-1 px-2 pb-3 pt-2",children:K.map(e=>n.jsx(_,{to:e.href,className:({isActive:t,isPending:r})=>W(t?"bg-gray-900 text-white":r?"bg-gray-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),children:e.name},e.name))})})]})}const We=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function Ve({children:e}){return n.jsxs("html",{lang:"en",children:[n.jsxs("head",{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx("meta",{name:"robots",content:"noindex, nofollow"}),n.jsx(xe,{}),n.jsx(ge,{})]}),n.jsxs("body",{children:[e,n.jsx(be,{}),n.jsx(ye,{})]})]})}function qe(){return n.jsxs(n.Fragment,{children:[n.jsx(Ae,{}),n.jsx(he,{})]})}function ze(){return n.jsx("p",{children:"Loading..."})}export{ze as HydrateFallback,Ve as Layout,qe as default,We as links};
