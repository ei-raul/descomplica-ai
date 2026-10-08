(function(){
"use strict";

/* ---------- data: as duas trilhas do cronograma ---------- */
var FRENTES = {
  coord:      {label:"Coordenação",  color:"#221A2B"},
  oficinas:   {label:"Oficinas",     color:"#E8641A"},
  conteudo:   {label:"Conteúdo",     color:"#6B49B6"},
  rodas:      {label:"Rodas",        color:"#3F9D74"},
  evento:     {label:"Evento/SATI",  color:"#D98A1E"},
  seguranca:  {label:"Segurança",    color:"#C0556B"}
};

var ITEMS = [
  {sort:20260828, date:"28 ago – 17 set<br>2026", track:"confirmado", frente:"coord",
    title:"Estruturação e capacitação da equipe", desc:"Definição das equipes e líderes e formação inicial dos alunos executores.", carga:"8h"},
  {sort:20260910, date:"set – out<br>2026", track:"sugerido", frente:"conteudo",
    title:"Identidade visual da marca", desc:"Logo, cores e assinatura — explorando o duplo sentido AI / “aí”.", carga:""},
  {sort:20260924, date:"24 set<br>2026", track:"confirmado", frente:"coord",
    title:"Reunião de estruturação", desc:"Apresentação do projeto e definição de equipes e líderes.", carga:""},
  {sort:20261008, date:"08 out<br>2026", track:"confirmado", frente:"coord",
    title:"Capacitação das equipes", desc:"Formação dos alunos que irão compor as equipes de trabalho.", carga:""},
  {sort:20261015, date:"out<br>2026", track:"sugerido", frente:"oficinas",
    title:"Ensaio-geral / oficina-piloto", desc:"As equipes apresentam a oficina entre si antes de ir a campo.", carga:""},
  {sort:20261029, date:"29 out<br>2026", track:"confirmado", frente:"coord",
    title:"Firmar parcerias com escolas", desc:"Identificar escolas e setores, elaborar ofícios e agendar as ações.", carga:"4h"},
  {sort:20261101, date:"out – nov<br>2026", track:"sugerido", frente:"conteudo",
    title:"Lançar o canal nas redes", desc:"Estúdio de Conteúdo no ar, com meta de publicação semanal.", carga:""},
  {sort:20261105, date:"05 nov<br>2026", track:"confirmado", frente:"oficinas",
    title:"1º ciclo de oficinas nas escolas", desc:"Visitas às escolas para compartilhar conhecimentos e experiências.", carga:"8h"},
  {sort:20261110, date:"nov<br>2026", track:"sugerido", frente:"coord",
    title:"Levantamento de expectativas", desc:"Ouvir o público: o que já sabem e o que querem aprender sobre IA.", carga:""},
  {sort:20261126, date:"12 – 26 nov<br>2026", track:"confirmado", frente:"evento",
    title:"Descomplica AI na SATI", desc:"Ações do projeto na Semana Acadêmica, no campus da UniCatólica.", carga:"4h"},
  {sort:20270301, date:"mar<br>2027", track:"sugerido", frente:"rodas",
    title:"Roda de conversa: ética e desinformação", desc:"Debate reflexivo com o público; o conteúdo vira material para as redes.", carga:""},
  {sort:20270315, date:"mar – mai<br>2027", track:"sugerido", frente:"oficinas",
    title:"Rotação temática das oficinas", desc:"IA para estudar · ética e deepfakes · profissões do futuro.", carga:""},
  {sort:20270325, date:"04 fev – 25 mar<br>2027", track:"confirmado", frente:"evento",
    title:"Evento de IA no campus", desc:"Planejamento e realização do evento na UniCatólica com o ensino médio.", carga:"8h"},
  {sort:20270326, date:"25 mar<br>2027", track:"confirmado", frente:"oficinas",
    title:"Novas ações em outras escolas", desc:"Planejar e realizar o segundo ciclo, ampliando o alcance.", carga:""},
  {sort:20270410, date:"abr<br>2027", track:"sugerido", frente:"seguranca",
    title:"IA e Segurança para a comunidade", desc:"Ação sobre golpes com IA, voltada a famílias e idosos (opcional).", carga:""},
  {sort:20270510, date:"mai<br>2027", track:"sugerido", frente:"rodas",
    title:"Roda de conversa: IA e o trabalho", desc:"As profissões vão acabar? Reflexão sobre o futuro do mundo do trabalho.", carga:""},
  {sort:20270701, date:"jun – jul<br>2027", track:"sugerido", frente:"coord",
    title:"Avaliação e 2ª edição", desc:"Consolidar indicadores, relatório final e planejar o próximo ciclo.", carga:""}
];

/* ---------- render timeline ---------- */
var timelineEl = document.getElementById("timeline");
var emptyEl = document.getElementById("tlEmpty");
ITEMS.sort(function(a,b){return a.sort-b.sort;});

ITEMS.forEach(function(it){
  var f = FRENTES[it.frente];
  var el = document.createElement("div");
  el.className = "tl-item";
  el.setAttribute("data-track", it.track);
  el.setAttribute("data-frente", it.frente);
  el.innerHTML =
    '<div class="tl-date">'+it.date+'</div>'+
    '<div class="tl-card">'+
      '<div class="tl-meta">'+
        '<span class="tl-badge '+it.track+'">'+(it.track==="confirmado"?"Confirmado":"Sugerido")+'</span>'+
        '<span class="tl-frente"><span class="d" style="background:'+f.color+'"></span>'+f.label+'</span>'+
      '</div>'+
      '<h4>'+it.title+'</h4>'+
      '<p>'+it.desc+'</p>'+
      (it.carga?'<span class="tl-carga">carga · '+it.carga+'</span>':'')+
    '</div>';
  timelineEl.appendChild(el);
});

/* ---------- frente filter buttons ---------- */
var frenteBar = document.getElementById("frenteBar");
var allBtn = document.createElement("button");
allBtn.className = "ff active"; allBtn.setAttribute("data-frente","all");
allBtn.textContent = "Todas";
frenteBar.appendChild(allBtn);
Object.keys(FRENTES).forEach(function(key){
  var f = FRENTES[key];
  var b = document.createElement("button");
  b.className = "ff"; b.setAttribute("data-frente", key);
  b.innerHTML = '<span class="d" style="background:'+f.color+'"></span>'+f.label;
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
  emptyEl.style.display = shown===0 ? "block" : "none";
  timelineEl.style.display = shown===0 ? "none" : "";
}

document.getElementById("trackBar").addEventListener("click", function(e){
  var btn = e.target.closest(".seg"); if(!btn) return;
  this.querySelectorAll(".seg").forEach(function(s){s.classList.remove("active");});
  btn.classList.add("active");
  curTrack = btn.getAttribute("data-track");
  applyFilters();
});
frenteBar.addEventListener("click", function(e){
  var btn = e.target.closest(".ff"); if(!btn) return;
  this.querySelectorAll(".ff").forEach(function(s){s.classList.remove("active");});
  btn.classList.add("active");
  curFrente = btn.getAttribute("data-frente");
  applyFilters();
});

/* ---------- frentes cards expand ---------- */
document.querySelectorAll(".frente").forEach(function(card){
  card.addEventListener("click", function(){ card.classList.toggle("open");
    card.querySelector(".toggle").textContent = card.classList.contains("open")?"+":"+";
  });
});

/* ---------- active nav link on scroll ---------- */
var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
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

/* ---------- count-up on numbers ---------- */
function countUp(el){
  var target = parseInt(el.getAttribute("data-count"),10);
  if(reduce){ el.textContent = target; return; }
  var start = null, dur = 1100;
  function step(ts){
    if(!start) start = ts;
    var p = Math.min((ts-start)/dur,1);
    var eased = 1-Math.pow(1-p,3);
    el.textContent = Math.round(eased*target);
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
if("IntersectionObserver" in window){
  var io2 = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ countUp(en.target); io2.unobserve(en.target);} });
  },{threshold:.5});
  document.querySelectorAll("[data-count]").forEach(function(el){io2.observe(el);});
} else {
  document.querySelectorAll("[data-count]").forEach(function(el){el.textContent=el.getAttribute("data-count");});
}
})();
