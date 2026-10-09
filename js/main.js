(function(){
"use strict";

/* ---------- frentes cards expand ---------- */
document.querySelectorAll(".frente").forEach(function(card){
  var title = card.querySelector("h3");
  var more = card.querySelector(".more");
  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "frente-btn";
  btn.setAttribute("aria-expanded","false");
  more.id = "more-"+card.getAttribute("data-frente");
  btn.setAttribute("aria-controls", more.id);
  while(title.firstChild) btn.appendChild(title.firstChild);
  title.appendChild(btn);
  card.classList.add("collapsible");
  btn.addEventListener("click", function(){
    btn.setAttribute("aria-expanded", card.classList.toggle("open"));
  });
});

/* ---------- active nav link on scroll ---------- */
var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a:not(.nav-pill)"));
var secs = links.map(function(a){return document.querySelector(a.getAttribute("href"));});
function onScroll(){
  var pos = window.scrollY + 90;
  var idx = 0;
  for(var i=0;i<secs.length;i++){ if(secs[i] && secs[i].offsetTop<=pos) idx=i; }
  links.forEach(function(l){l.classList.remove("active");});
  if(links[idx]) links[idx].classList.add("active");
}
window.addEventListener("scroll", onScroll, {passive:true});
onScroll();

/* ---------- menu mobile ---------- */
var navEl = document.querySelector("header.nav");
var navBtn = navEl.querySelector(".nav-toggle");
navEl.classList.add("js");
function setMenu(open){
  navEl.classList.toggle("open", open);
  navBtn.setAttribute("aria-expanded", open);
}
navBtn.addEventListener("click", function(){ setMenu(!navEl.classList.contains("open")); });
navEl.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", function(){ setMenu(false); }); });
document.addEventListener("click", function(e){
  if(navEl.classList.contains("open") && !navEl.contains(e.target)) setMenu(false);
});
document.addEventListener("keydown", function(e){
  if(e.key==="Escape" && navEl.classList.contains("open")){ setMenu(false); navBtn.focus(); }
});

/* ---------- abre a seção recolhida ao navegar para ela ---------- */
function openFold(hash){
  var t = hash.length>1 && document.querySelector(hash);
  var f = t && t.querySelector("details.fold");
  if(f) f.open = true;
}
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener("click", function(){ openFold(a.getAttribute("href")); });
});
openFold(location.hash);

/* ---------- copiar e-mail ---------- */
var mailEl = document.querySelector(".invite-mail");
if(mailEl && navigator.clipboard){
  var copyBtn = document.createElement("button");
  copyBtn.type = "button"; copyBtn.className = "copy-btn"; copyBtn.textContent = "Copiar e-mail";
  var copyMsg = document.createElement("span");
  copyMsg.className = "sr-only"; copyMsg.setAttribute("role","status");
  mailEl.insertAdjacentElement("afterend", copyBtn);
  copyBtn.insertAdjacentElement("afterend", copyMsg);
  copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(mailEl.textContent).then(function(){
      copyBtn.textContent = "E-mail copiado"; copyMsg.textContent = "E-mail copiado";
      setTimeout(function(){ copyBtn.textContent = "Copiar e-mail"; copyMsg.textContent = ""; }, 2500);
    });
  });
}

/* ---------- reveal on scroll ---------- */
var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduce && "IntersectionObserver" in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target);} });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el);});
} else {
  document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("in");});
}

})();
