import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",o=document.querySelector(".feedback-form");document.querySelector("input");document.querySelector("textarea");function m(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function l(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}o.addEventListener("input",()=>{const e=new FormData(o),t=e.get("email"),a=e.get("message");m(n,{email:t,message:a})});o.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(o),a=t.get("email").trim(),s=t.get("message").trim(),r={email:a,message:s};if(a===""||s===""){alert("Fill please all fields");return}else console.log(r);o.reset(),localStorage.removeItem(n)});window.addEventListener("DOMContentLoaded",()=>{const e=l(n);o.elements.email.value=(e==null?void 0:e.email)??"",o.elements.message.value=(e==null?void 0:e.message)??""});
//# sourceMappingURL=commonHelpers2.js.map