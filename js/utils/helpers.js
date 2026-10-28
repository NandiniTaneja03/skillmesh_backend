// Shared DOM and display helpers.
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function initials(name){return name.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}
function person(id){return state.people.find(p=>p.id===Number(id))}
function avatar(p,extra=""){return `<span class="avatar ${extra}" style="background:${p.color||'#ffd9d5'};color:#172b75">${esc(p.initials||initials(p.name))}</span>`}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
