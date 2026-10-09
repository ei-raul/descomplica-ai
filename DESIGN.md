---
name: Descomplica AI
description: Site de extensão em tom de caderno de oficina: papel de aveia, tinta ameixa, laranja brasa e violeta jabuticaba.
colors:
  brasa: "#E8641A"
  brasa-soft: "#FBE3D0"
  brasa-ink: "#9C3D07"
  jabuticaba: "#6B49B6"
  jabuticaba-soft: "#EBE3F8"
  jabuticaba-ink: "#4A2E86"
  aveia: "#FBF4EC"
  papel: "#FFFFFF"
  tinta-ameixa: "#221A2B"
  nevoa: "#6E6478"
  fio-quente: "#EEE1D3"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(54px, 10vw, 116px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(28px, 4vw, 40px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "14px"
  lg: "16px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "66px"
components:
  card:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta-ameixa}"
    rounded: "{rounded.lg}"
    padding: "22px"
  card-goal:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta-ameixa}"
    rounded: "{rounded.md}"
    padding: "18px 20px"
  card-dark:
    backgroundColor: "{colors.tinta-ameixa}"
    textColor: "{colors.papel}"
    rounded: "{rounded.lg}"
    padding: "30px 32px"
  segment:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.nevoa}"
    rounded: "{rounded.pill}"
    padding: "7px 15px"
  segment-active:
    backgroundColor: "{colors.tinta-ameixa}"
    textColor: "{colors.papel}"
  segment-confirmado-active:
    backgroundColor: "{colors.brasa}"
    textColor: "{colors.papel}"
  segment-sugerido-active:
    backgroundColor: "{colors.jabuticaba}"
    textColor: "{colors.papel}"
  chip:
    backgroundColor: "{colors.jabuticaba-soft}"
    textColor: "{colors.jabuticaba-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
  badge-confirmado:
    backgroundColor: "{colors.brasa-soft}"
    textColor: "{colors.brasa-ink}"
    rounded: "6px"
    padding: "3px 8px"
  badge-sugerido:
    backgroundColor: "{colors.jabuticaba-soft}"
    textColor: "{colors.jabuticaba-ink}"
    rounded: "6px"
    padding: "3px 8px"
  nav-link:
    textColor: "{colors.nevoa}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  nav-link-active:
    backgroundColor: "{colors.brasa-soft}"
    textColor: "{colors.brasa-ink}"
---

# Design System: Descomplica AI

## Overview

**Creative North Star: "O Caderno de Oficina"**

O site é uma página de caderno de bancada aberta sobre papel de aveia: títulos grandes e redondos, anotações em mono pequeno, cartões brancos soltos sobre a página e duas tintas, laranja brasa e violeta jabuticaba. A voz visual é prática e próxima, de quem mostra como a coisa funciona ("mão na IA"), nunca de relatório institucional frio. O nome carrega o jogo AI / "aí" e o título o performa em itálico laranja sublinhado tracejado.

A densidade é média e arejada: seções de 66px de respiro verticais, cartões em grade, uma coluna de leitura de 760px nos textos longos. A tipografia faz a hierarquia; cor e sombra apoiam. A página tem dois eixos semânticos que não se misturam: **laranja = confirmado, ação, destaque**; **violeta = sugerido, apoio, reflexão**.

**Key Characteristics:**
- Fundo de aveia quente (nunca branco puro); branco só nos cartões.
- Tinta ameixa no lugar de preto; nenhum `#000`.
- Títulos em Bricolage Grotesque com tracking apertado; rótulos e números em Space Mono caixa-alta.
- Cartões brancos com fio quente e sombra ambiente que só sobe no hover.
- Pílulas (999px) para toda ação de filtro, navegação e etiqueta.

## Colors

Duas tintas quentes sobre papel de aveia, com tintas escuras de ameixa para texto. Toda cor tem uma versão `soft` (fundo de etiqueta) e uma `ink` (texto sobre o soft), que garantem contraste legível.

### Primary
- **Laranja Brasa** (#E8641A): destaque e ação. Itálico "AI" do título e da marca, números das seções, métricas, setas das listas, ponto do eyebrow, trilha **confirmado** do cronograma e botão ativo dessa trilha.
- **Brasa Suave** (#FBE3D0): fundo de link ativo da navegação, badge confirmado, ícone da frente de oficinas.
- **Tinta Brasa** (#9C3D07): texto sobre Brasa Suave e destaques em negrito de rótulos (`.dual b`).

### Secondary
- **Violeta Jabuticaba** (#6B49B6): apoio e reflexão. Trilha **sugerido** (borda tracejada), numeração das avaliações, borda das colunas de resultados, ponto dos painéis.
- **Jabuticaba Suave** (#EBE3F8): fundo de chips de local e badge sugerido.
- **Tinta Jabuticaba** (#4A2E86): negritos de destaque em leads e no subtítulo, texto sobre Jabuticaba Suave.

### Neutral
- **Aveia** (#FBF4EC): fundo da página e da barra de navegação (com 82% de opacidade e blur).
- **Papel** (#FFFFFF): superfície de cartões, painéis, segmentos e chips de filtro.
- **Tinta Ameixa** (#221A2B): texto principal, cartão escuro de objetivo geral e estado ativo de filtros.
- **Névoa** (#6E6478): texto secundário, rótulos mono, legendas.
- **Fio Quente** (#EEE1D3): todas as bordas e divisores de seção.

### Named Rules
**The Two Inks Rule.** Laranja significa confirmado e ação; violeta significa sugerido e apoio. Nunca troque os papéis e nunca introduza uma terceira cor de destaque. A frente "IA & Segurança" e "Rodas de Conversa" usam tons soft próprios (rosado e verde-menta) apenas como ícone de categoria, nunca como cor de texto ou ação.

**The Oat Paper Rule.** O fundo é sempre Aveia ou Papel dentro de cartão. Nunca branco puro de página, nunca preto puro.

## Typography

**Display Font:** Bricolage Grotesque (com sans-serif)
**Body Font:** Inter (com system-ui, -apple-system, sans-serif)
**Label/Mono Font:** Space Mono (com ui-monospace, monospace)

**Character:** Bricolage dá corpo, curva e um toque de personalidade humana aos títulos; Inter segura a leitura sem competir; Space Mono funciona como a caligrafia técnica do caderno, em rótulos, datas e números.

### Hierarchy
- **Display** (800, `clamp(54px, 10vw, 116px)`, 0.95, tracking -0.035em): só o título "Descomplica AI" do hero.
- **Headline** (700, `clamp(28px, 4vw, 40px)`, 1.05, tracking -0.03em): títulos de seção (`h2`).
- **Title** (700, 15–18px, tracking -0.01 a -0.02em): títulos de cartão (`h3`, `h4`).
- **Body** (400, 14–15px, 1.6): texto de cartões e listas; o `lead` sobe para 18px e limita-se a 760px.
- **Label** (400–700, 10–13px, tracking 0.06–0.14em, caixa-alta): eyebrow, rótulos de filtro, funções das frentes, datas, badges, números de seção e de objetivo.

### Named Rules
**The Annotation Rule.** Space Mono entra para o que é dado e anotação (datas, números, rótulos, chips), nunca para parágrafos. Caixa-alta só em rótulos curtos de até quatro palavras.

**The Italic Signature Rule.** O itálico laranja de "AI" é a assinatura da marca. Não use itálico em nenhum outro título.

## Layout

Coluna única centrada de 1080px (padding lateral de 24px), com seções empilhadas separadas por fio horizontal de Fio Quente e respiro de 66px acima e abaixo. Grades de cartões: 3 colunas para frentes, avaliação e resultados; 4 para métricas; 2 para objetivos e público; 3 para fatos do hero. Intervalos de grade entre 14 e 26px. Cabeçalho de seção em linha: número mono laranja + título + subtítulo com até 560px.

O cronograma é a exceção estrutural: uma linha vertical em gradiente laranja→violeta (opacidade 28%) a 118px da esquerda, com data à esquerda (104px) e cartão à direita.

Responsivo com `max-width`: abaixo de **860px** a navegação some, grades viram uma coluna (frentes em duas) e métricas/fatos em duas; abaixo de **560px** tudo em uma coluna e o cronograma desloca a linha para a esquerda e empilha data sobre o cartão.

## Elevation & Depth

Híbrido suave. Em repouso, a profundidade vem de **borda quente + cartão branco sobre aveia**; a sombra é ambiente e baixa. Só a interação levanta o cartão (frentes sobem 3px com sombra maior). Há também dois brilhos radiais decorativos no hero (laranja à direita, violeta à esquerda) e um brilho laranja no canto do cartão escuro.

### Shadow Vocabulary
- **Cartão ambiente** (`box-shadow: 0 1px 2px rgba(34,26,43,.05), 0 10px 30px -18px rgba(34,26,43,.35)`): todos os cartões, fatos, métricas e segmentos em repouso.
- **Cartão levantado** (`box-shadow: 0 1px 2px rgba(34,26,43,.05), 0 22px 40px -20px rgba(34,26,43,.5)`): frentes no hover, junto com `translateY(-3px)`.

### Named Rules
**The Quiet Rest Rule.** Nada flutua em repouso. Elevação é resposta a interação, não decoração.

## Shapes

Formas amigáveis e arredondadas, sem cantos agudos. Cartões grandes usam 16px (`--radius`); cartões menores e fatos, 14px; ícones de frente, 10px; badges, 6px; todo controle (navegação, segmentos, filtros, chips) é pílula (999px). Bordas de 1px em Fio Quente em quase tudo; na trilha confirmado, o cartão do cronograma ganha borda esquerda sólida de 4px laranja, e na sugerida, **tracejada** violeta (a tracejada é o sinal visual de "ainda não confirmado").

## Components

### Buttons / Segmentos
- **Shape:** pílula (999px) dentro de uma barra pílula com padding de 4px.
- **Default:** fundo transparente, texto Névoa, 13px/600.
- **Hover:** texto passa a Tinta Ameixa.
- **Active:** fundo Tinta Ameixa e texto branco; os segmentos de trilha assumem a cor da própria trilha (laranja ou violeta) e o swatch fica branco.
- Interação de filtro: não há botão primário "grande"; ação é filtro, não conversão.

### Chips
- **Filtro de frente:** pílula branca com fio quente, texto mono 12px; ativo vira Tinta Ameixa com texto branco; ponto colorido da frente à esquerda.
- **Local:** pílula Jabuticaba Suave com texto Tinta Jabuticaba, mono 12.5px.
- **Dual (AI / aí):** pílula branca com fio quente, mono 12.5px, destaque em Tinta Brasa.

### Cards / Containers
- **Corner Style:** 16px (frente, avaliação, painel, objetivo geral) ou 14px (fato, objetivo, métrica, cronograma).
- **Background:** Papel; o objetivo geral é Tinta Ameixa com texto branco e rótulo mono laranja.
- **Shadow Strategy:** ambiente em repouso; frentes sobem no hover (ver Elevation & Depth).
- **Border:** 1px Fio Quente.
- **Internal Padding:** 18–26px; 30px no cartão escuro.

### Navigation
Barra fixa de 64px sobre Aveia a 82% com blur de 12px e fio quente embaixo. Marca à esquerda em Bricolage 800/18px com "AI" em itálico laranja. Links em pílulas de 13.5px/500 em Névoa; o link da seção visível ganha Brasa Suave e Tinta Brasa. Abaixo de 860px os links somem (ainda não há menu alternativo).

### Frente (cartão expansível)
Cartão com ícone quadrado colorido (34px, 10px de raio), título, função em mono caixa-alta e resumo; um `+` mono no canto vira `×` ao abrir e revela um texto extra por transição de altura.

### Cronograma (signature)
Linha vertical em gradiente laranja→violeta com marcadores circulares. **Confirmado**: marcador cheio laranja e borda esquerda sólida. **Sugerido**: marcador tracejado violeta, borda esquerda tracejada. Cada cartão tem badge de trilha, frente com ponto de cor, título, descrição e carga horária em caixa mono.

## Do's and Don'ts

### Do:
- **Do** manter o duplo sentido AI / "aí" e a voz próxima e sem jargão em qualquer texto novo.
- **Do** usar laranja só para confirmado/ação e violeta só para sugerido/apoio.
- **Do** usar as variáveis de `:root` (`--orange`, `--violet`, `--ink`, `--radius`, `--shadow`); nunca hex solto.
- **Do** fazer hierarquia com Bricolage + Inter + Space Mono, nesta ordem de papel: título, leitura, anotação.
- **Do** manter cartões brancos com borda de 1px em Fio Quente e sombra ambiente; levantar só no hover.
- **Do** usar pílula para qualquer controle, e `prefers-reduced-motion` para toda animação nova.

### Don't:
- **Don't** usar branco puro como fundo de página nem preto puro como texto.
- **Don't** adicionar uma terceira cor de destaque ou gradientes de texto.
- **Don't** usar itálico fora da assinatura "AI".
- **Don't** usar sombras pesadas em repouso nem cantos agudos.
- **Don't** usar Space Mono para parágrafos nem caixa-alta em frases longas.
- **Don't** usar faixas laterais coloridas como único recurso decorativo em cartões novos (a borda esquerda existe só no cronograma, onde significa trilha).
