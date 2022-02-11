var A=Object.defineProperty,y=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var D=(e,r,i)=>r in e?A(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,a=(e,r)=>{for(var i in r||(r={}))N.call(r,i)&&D(e,i,r[i]);if(f)for(var i of f(r))T.call(r,i)&&D(e,i,r[i]);return e},c=(e,r)=>y(e,I(r));import{j as m,r as L,R as w,a as C}from"./vendor.b8c9a8f3.js";const R=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};R();const o=m.exports.jsx,O=m.exports.jsxs;function d({addDigit:e,digit:r}){return o("button",{onClick:()=>e(r),children:r})}function p({chooseOperation:e,operation:r}){return o("button",{onClick:()=>e(r),children:r})}const l={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"},h=new Intl.NumberFormat("en-us",{maximumFractionDigits:0}),s={addDigit:(e,r)=>{var u;const i=(u=e.currentOperand)!=null?u:"";return r==="0"&&i==="0"||r==="."&&i.includes(".")?e:e.overwrite?c(a({},e),{currentOperand:r,overwrite:!1}):c(a({},e),{currentOperand:i+r})},chooseOperation:(e,r,i)=>e.currentOperand==null&&e.previousOperand==null?e:e.currentOperand==null?c(a({},e),{operation:r}):e.previousOperand==null?c(a({},e),{operation:r,previousOperand:e.currentOperand,currentOperand:null}):c(a({},e),{previousOperand:i(e),operation:r,currentOperand:null}),deleteDigit:e=>e.overwrite?c(a({},e),{overwrite:!1,currentOperand:null}):e.currentOperand==null?e:e.currentOperand.length===1?c(a({},e),{currentOperand:null}):c(a({},e),{currentOperand:e.currentOperand.slice(0,-1)}),evaluate:(e,r)=>e.operation==null||e.currentOperand==null||e.previousOperand==null?e:c(a({},e),{overwrite:!0,previousOperand:null,operation:null,currentOperand:r(e)})};function x(){const e={previousOperand:null,operation:null,currentOperand:null,overwrite:!1},[{currentOperand:r,previousOperand:i,operation:u},t]=L.exports.useReducer(S,e),n=b(t);return O("div",{className:"calculator-grid",children:[O("div",{className:"output",children:[O("div",{className:"previous-operand",children:[E(i)," ",u]}),o("div",{className:"current-operand",children:E(r)})]}),o("button",{className:"span-two",onClick:n.clear,children:"AC"}),o("button",{onClick:n.deleteDigit,children:"DEL"}),o(p,{operation:"\xF7",chooseOperation:n.chooseOperation}),o(d,{digit:"1",addDigit:n.addDigit}),o(d,{digit:"2",addDigit:n.addDigit}),o(d,{digit:"3",addDigit:n.addDigit}),o(p,{operation:"*",chooseOperation:n.chooseOperation}),o(d,{digit:"4",addDigit:n.addDigit}),o(d,{digit:"5",addDigit:n.addDigit}),o(d,{digit:"6",addDigit:n.addDigit}),o(p,{operation:"+",chooseOperation:n.chooseOperation}),o(d,{digit:"7",addDigit:n.addDigit}),o(d,{digit:"8",addDigit:n.addDigit}),o(d,{digit:"9",addDigit:n.addDigit}),o(p,{operation:"-",chooseOperation:n.chooseOperation}),o(d,{digit:".",addDigit:n.addDigit}),o(d,{digit:"0",addDigit:n.addDigit}),o("button",{className:"span-two",onClick:n.evaluate,children:"="})]})}const b=e=>({addDigit:r=>e({type:l.ADD_DIGIT,payload:{digit:r}}),chooseOperation:r=>e({type:l.CHOOSE_OPERATION,payload:{operation:r}}),clear:()=>e({type:l.CLEAR}),deleteDigit:()=>e({type:l.DELETE_DIGIT}),evaluate:()=>e({type:l.EVALUATE})});function S(e,{type:r,payload:i}){switch(r){case l.ADD_DIGIT:return s.addDigit(e,i.digit);case l.CHOOSE_OPERATION:return s.chooseOperation(e,i.operation,v);case l.CLEAR:return{};case l.DELETE_DIGIT:return s.deleteDigit(e);case l.EVALUATE:return s.evaluate(e,v);default:return e}}function v({currentOperand:e,previousOperand:r,operation:i}){const u=parseFloat(e),t=parseFloat(r);if(isNaN(t)||isNaN(u))return"";switch(i){case"+":return(t+u).toString();case"-":return(t-u).toString();case"*":return(t*u).toString();case"\xF7":return(t/u).toString();default:return""}}function E(e){if(e==null)return;const[r,i]=e.split(".");return i==null?h.format(r):h.format(r)+"."+i}w.render(o(C.StrictMode,{children:o(x,{})}),document.getElementById("root"));