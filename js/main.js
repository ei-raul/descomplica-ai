(function(){
"use strict";

/* ---------- data: as duas trilhas do cronograma ---------- */
var FRENTES = {
  coord:      {label:"Coordenação"},
  oficinas:   {label:"Oficinas"},
  conteudo:   {label:"Conteúdo"},
  rodas:      {label:"Rodas"},
  evento:     {label:"Evento/SATI"},
  seguranca:  {label:"Segurança"}
};

var ITEMS = [
  {sort:20260828, date:"28 ago – 17 set<br>2026", track:"confirmado", frente:"coord",
    title:"Estruturação e capacitação da equipe", desc:"Definição das equipes e líderes e formação inicial dos alunos executores."},
  {sort:20260910, date:"set – out<br>2026", track:"sugerido", frente:"conteudo",
    title:"Identidade visual da marca", desc:"Logo, cores e assinatura — explorando o duplo sentido AI / “aí”."},
  {sort:20260924, date:"24 set<br>2026", track:"confirmado", frente:"coord",
    title:"Reunião de estruturação", desc:"Apresentação do projeto e definição de equipes e líderes."},
  {sort:20261008, date:"08 out<br>2026", track:"confirmado", frente:"coord",
    title:"Capacitação das equipes", desc:"Formação dos alunos que irão compor as equipes de trabalho."},
  {sort:20261015, date:"out<br>2026", track:"sugerido", frente:"oficinas",
    title:"Ensaio-geral / oficina-piloto", desc:"As equipes apresentam a oficina entre si antes de ir a campo."},
  {sort:20261029, date:"29 out<br>2026", track:"confirmado", frente:"coord",
    title:"Firmar parcerias com escolas", desc:"Identificar escolas e setores, elaborar ofícios e agendar as ações."},
  {sort:20261101, date:"out – nov<br>2026", track:"sugerido", frente:"conteudo",
    title:"Lançar o canal nas redes", desc:"Estúdio de Conteúdo no ar, com meta de publicação semanal."},
  {sort:20261105, date:"05 nov<br>2026", track:"confirmado", frente:"oficinas",
    title:"1º ciclo de oficinas nas escolas", desc:"Visitas às escolas para compartilhar conhecimentos e experiências."},
  {sort:20261110, date:"nov<br>2026", track:"sugerido", frente:"coord",
    title:"Levantamento de expectativas", desc:"Ouvir o público: o que já sabem e o que querem aprender sobre IA."},
  {sort:20261126, date:"12 – 26 nov<br>2026", track:"confirmado", frente:"evento",
    title:"Descomplica AI na SATI", desc:"Ações do projeto na Semana Acadêmica, no campus da UniCatólica."},
  {sort:20270301, date:"mar<br>2027", track:"sugerido", frente:"rodas",
    title:"Roda de conversa: ética e desinformação", desc:"Debate reflexivo com o público; o conteúdo vira material para as redes."},
  {sort:20270315, date:"mar – mai<br>2027", track:"sugerido", frente:"oficinas",
    title:"Rotação temática das oficinas", desc:"IA para estudar · ética e deepfakes · profissões do futuro."},
  {sort:20270204, date:"04 fev – 25 mar<br>2027", track:"confirmado", frente:"evento",
    title:"Evento de IA no campus", desc:"Planejamento e realização do evento na UniCatólica com o ensino médio."},
  {sort:20270326, date:"25 mar<br>2027", track:"confirmado", frente:"oficinas",
    title:"Novas ações em outras escolas", desc:"Planejar e realizar o segundo ciclo, ampliando o alcance."},
  {sort:20270410, date:"abr<br>2027", track:"sugerido", frente:"seguranca",
    title:"IA e Segurança para a comunidade", desc:"Ação sobre golpes com IA, voltada a famílias e idosos (opcional)."},
  {sort:20270510, date:"mai<br>2027", track:"sugerido", frente:"rodas",
    title:"Roda de conversa: IA e o trabalho", desc:"As profissões vão acabar? Reflexão sobre o futuro do mundo do trabalho."},
  {sort:20270701, date:"jun – jul<br>2027", track:"sugerido", frente:"coord",
    title:"Avaliação e 2ª edição", desc:"Consolidar indicadores, relatório final e planejar o próximo ciclo."}
];

/* ---------- render timeline ---------- */
var timelineEl = document.getElementById("timeline");
var emptyEl = document.getElementById("tlEmpty");
var countEl = document.getElementById("tlCount");
ITEMS.sort(function(a,b){return a.sort-b.sort;});

ITEMS.forEach(function(it){
  var f = FRENTES[it.frente];
  var el = document.createElement("li");
  el.className = "tl-item";
  el.setAttribute("data-track", it.track);
  el.setAttribute("data-frente", it.frente);
  var d = it.date.split("<br>");
  el.innerHTML =
    '<div class="tl-date">'+d[0]+' <span class="tl-year">'+d[1]+'</span></div>'+
    '<div class="tl-card">'+
      '<div class="tl-meta">'+
        '<span class="tl-badge '+it.track+'">'+(it.track==="confirmado"?"Confirmado":"Sugerido")+'</span>'+
        '<span class="tl-frente"><span class="d"></span>'+f.label+'</span>'+
      '</div>'+
      '<h3>'+it.title+'</h3>'+
      '<p>'+it.desc+'</p>'+
    '</div>';
  timelineEl.appendChild(el);
});

/* ---------- frente filter buttons ---------- */
var frenteBar = document.getElementById("frenteBar");
var allBtn = document.createElement("button");
allBtn.className = "ff active"; allBtn.setAttribute("data-frente","all"); allBtn.setAttribute("aria-pressed","true");
allBtn.textContent = "Todas";
frenteBar.appendChild(allBtn);
Object.keys(FRENTES).forEach(function(key){
  var f = FRENTES[key];
  var b = document.createElement("button");
  b.className = "ff"; b.setAttribute("data-frente", key); b.setAttribute("aria-pressed","false");
  b.innerHTML = '<span class="d"></span>'+f.label;
  frenteBar.appendChild(b);
});

/* ---------- filtering logic ---------- */
var curTrack = "all", curFrente = "all";
function applyFilters(){
  var items = timelineEl.querySelectorAll(".tl-item");
  var shown = 0;
  items.forEach(function(el){
    var okT = (curTrack==="all") || el.getAttribute("data-track")===curTrack;
    var okF = (curFrente==="all") || el.getAttribute("data-frente")===curFrente;
    if(okT && okF){ el.classList.remove("hide"); shown++; }
    else { el.classList.add("hide"); }
  });
  countEl.textContent = shown===0 ? "" : shown+(shown===1?" ação exibida":" ações exibidas");
  emptyEl.style.display = shown===0 ? "block" : "none";
  timelineEl.style.display = shown===0 ? "none" : "";
}

function press(group, sel, btn){
  group.querySelectorAll(sel).forEach(function(s){
    s.classList.remove("active"); s.setAttribute("aria-pressed","false");
  });
  btn.classList.add("active"); btn.setAttribute("aria-pressed","true");
}

document.getElementById("trackBar").addEventListener("click", function(e){
  var btn = e.target.closest(".seg"); if(!btn) return;
  press(this, ".seg", btn);
  curTrack = btn.getAttribute("data-track");
  applyFilters();
});
frenteBar.addEventListener("click", function(e){
  var btn = e.target.closest(".ff"); if(!btn) return;
  press(this, ".ff", btn);
  curFrente = btn.getAttribute("data-frente");
  applyFilters();
});

document.getElementById("tlReset").addEventListener("click", function(){
  curTrack = "all"; curFrente = "all";
  press(document.getElementById("trackBar"), ".seg", document.querySelector('.seg[data-track="all"]'));
  press(frenteBar, ".ff", allBtn);
  applyFilters();
});

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
