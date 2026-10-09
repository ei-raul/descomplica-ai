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
  menta-soft: "#DCEBE4"
  rosa-soft: "#F3DDE0"
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
    fontSize: "12px"
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
  button-primary:
    backgroundColor: "{colors.brasa}"
    textColor: "{colors.tinta-ameixa}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "12px 26px"
  chip:
    backgroundColor: "{colors.jabuticaba-soft}"
    textColor: "{colors.jabuticaba-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 11px"
  nav-link:
    textColor: "{colors.nevoa}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  nav-toggle:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta-ameixa}"
    rounded: "{rounded.pill}"
    height: "44px"
    width: "44px"
  nav-link-active:
    backgroundColor: "{colors.brasa-soft}"
    textColor: "{colors.brasa-ink}"
---

# Design System: Descomplica AI

## Overview

**Creative North Star: "O Caderno de Oficina"**

O site é uma página de caderno de bancada aberta sobre papel de aveia: títulos grandes e redondos, anotações em mono pequeno, cartões brancos soltos sobre a página e duas tintas, laranja brasa e violeta jabuticaba. A voz visual é prática e próxima, de quem mostra como a coisa funciona ("mão na IA"), nunca de relatório institucional frio. O nome carrega o jogo AI / "aí" e o título o performa em itálico laranja sublinhado tracejado. O hero é literalmente a página do caderno: pauta horizontal de 32px em Fio Quente que esmaece para baixo e uma linha de margem em Rosa Suave à esquerda.

A densidade é média e arejada: seções de 66px de respiro verticais, cartões em grade, uma coluna de leitura de 760px nos textos longos. A tipografia faz a hierarquia; cor e sombra apoiam. A página tem dois eixos semânticos que não se misturam: **laranja = ação e destaque**; **violeta = apoio e reflexão** (é a cor da seção sobre uso consciente de IA).

**Key Characteristics:**
- Fundo de aveia quente (nunca branco puro); branco só nos cartões.
- Tinta ameixa no lugar de preto; nenhum `#000`.
- Títulos em Bricolage Grotesque com tracking apertado; rótulos e números em Space Mono caixa-alta.
- Cartões brancos com fio quente e sombra ambiente que só sobe no hover.
- Pílulas (999px) para navegação, botões e etiquetas.

## Colors

Duas tintas quentes sobre papel de aveia, com tintas escuras de ameixa para texto. Toda cor tem uma versão `soft` (fundo de etiqueta) e uma `ink` (texto sobre o soft), que garantem contraste legível.

### Primary
- **Laranja Brasa** (#E8641A): destaque e ação, só em fundos, bordas, ícones e texto grande (≥24px, ou ≥18,66px em negrito). Itálico "AI" do título e da marca, métricas, setas das listas, botão primário e pílula "Escolas".
- **Brasa Suave** (#FBE3D0): fundo de link ativo da navegação, ícone das frentes de oficinas e evento.
- **Tinta Brasa** (#9C3D07): todo texto laranja pequeno: números das seções e dos objetivos, link do rodapé, texto sobre Brasa Suave e destaques em negrito de rótulos (`.dual b`). Contraste de 6,2 a 6,8:1.

### Secondary
- **Violeta Jabuticaba** (#6B49B6): apoio e reflexão. Filete e borda da seção de uso consciente, numeração das avaliações, borda das colunas de resultados, ponto dos painéis.
- **Jabuticaba Suave** (#EBE3F8): fundo de chips de local e do caminho "Pensar com a IA".
- **Tinta Jabuticaba** (#4A2E86): negritos de destaque em leads e no subtítulo, texto sobre Jabuticaba Suave.

### Tertiary (categorias das frentes)
- **Menta Suave** (#DCEBE4) e **Rosa Suave** (#F3DDE0): ícones dos cartões das frentes Rodas de Conversa e IA & Segurança; o Rosa Suave também é a linha de margem do hero. Não há cores de legenda por frente: as outras frentes reaproveitam Tinta Ameixa, Brasa Suave e Jabuticaba Suave.

### Neutral
- **Aveia** (#FBF4EC): fundo da página e da barra de navegação (com 82% de opacidade e blur).
- **Papel** (#FFFFFF): superfície de cartões, painéis, recolhíveis e do caminho "Delegar tudo".
- **Tinta Ameixa** (#221A2B): texto principal e cartões escuros de objetivo geral e de convite.
- **Névoa** (#6E6478): texto secundário, rótulos mono, legendas.
- **Fio Quente** (#EEE1D3): todas as bordas e divisores de seção.

### Named Rules
**The Two Inks Rule.** Laranja significa ação e destaque; violeta significa apoio e reflexão. Nunca troque os papéis e nunca introduza uma terceira cor de destaque. Menta Suave e Rosa Suave só identificam a categoria da frente (ícones), nunca texto, ação nem estado.

**The Small Text Rule.** Texto laranja abaixo de 24px (ou 18,66px em negrito) usa Tinta Brasa, não o laranja puro: o laranja puro mede 3,1:1 sobre Aveia. Sobre o fundo laranja, o texto é Tinta Ameixa.

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
- **Label** (400–700, 12–13px, tracking 0.06–0.14em, caixa-alta): funções das frentes, rótulos dos caminhos, números de seção e de objetivo.

### Named Rules
**The Annotation Rule.** Space Mono entra para o que é dado e anotação (datas, números, rótulos, chips), nunca para parágrafos. Caixa-alta só em rótulos curtos de até quatro palavras.

**The Italic Signature Rule.** O itálico laranja de "AI" é a assinatura da marca. Não use itálico em nenhum outro título.

## Layout

Coluna única centrada de 1080px (padding lateral de 24px), com seções empilhadas separadas por fio horizontal de Fio Quente e respiro de 66px acima e abaixo. Grades de cartões: 3 colunas para frentes, avaliação e resultados; 4 para métricas; 2 para objetivos e público; 3 para fatos do hero. Intervalos de grade entre 14 e 26px. Cabeçalho de seção em linha: número mono laranja + título + subtítulo com até 560px.

A seção de uso consciente é a única com composição própria: três competências em linha (definição com filete violeta), um par de colunas comparando dois caminhos e uma frase de fecho em Bricolage.

Responsivo com `max-width`: abaixo de **860px** a navegação some (ficam a pílula "Escolas" e o botão de menu), grades viram uma coluna (frentes em duas) e métricas/fatos em duas; abaixo de **560px** tudo em uma coluna e o título do hero encolhe (`clamp(38px, 13.5vw, 60px)`).

## Elevation & Depth

Híbrido suave. Em repouso, a profundidade vem de **borda quente + cartão branco sobre aveia**; a sombra é ambiente e baixa. Só a interação levanta o cartão (frentes sobem 3px com sombra maior). Não há brilhos decorativos no hero (a pauta e a margem os substituem); só o cartão escuro tem um brilho laranja no canto.

### Shadow Vocabulary
- **Cartão ambiente** (`box-shadow: 0 1px 2px rgba(34,26,43,.05), 0 10px 30px -18px rgba(34,26,43,.35)`): todos os cartões, fatos, métricas e recolhíveis em repouso.
- **Cartão levantado** (`box-shadow: 0 1px 2px rgba(34,26,43,.05), 0 22px 40px -20px rgba(34,26,43,.5)`): frentes no hover, junto com `translateY(-3px)`.

### Named Rules
**The Quiet Rest Rule.** Nada flutua em repouso. Elevação é resposta a interação, não decoração.

## Shapes

Formas amigáveis e arredondadas, sem cantos agudos. Cartões grandes usam 16px (`--radius`); cartões menores e fatos, 14px; ícones de frente, 10px; todo controle (navegação, recolhíveis, chips, botões) é pílula (999px). Bordas de 1px em Fio Quente em quase tudo; o caminho "Pensar com a IA" tem borda violeta de 1px.

## Components

### Buttons
- **Primário (convite às escolas):** pílula Laranja Brasa com texto Tinta Ameixa, 48px de altura, 700/15px; é o único estilo de botão de conversão e aparece em três lugares: hero, cartão escuro da faixa "Convide sua escola" e rodapé. Hover sobe 2px com sombra maior; foco violeta (Brasa Suave sobre o cartão escuro). Variante discreta: "Copiar e-mail", pílula de contorno claro sobre o cartão escuro, criada pelo JS.
- **Recolher (`details.fold`):** pílula branca de 44px com `+` que gira ao abrir; recolhe "Como avaliamos". Links de âncora para a seção abrem o conteúdo.

### Chips
- **Local:** pílula Jabuticaba Suave com texto Tinta Jabuticaba, mono 12.5px.
- **Dual (AI / aí):** pílula branca com fio quente, mono 12.5px, destaque em Tinta Brasa.

### Cards / Containers
- **Corner Style:** 16px (frente, avaliação, painel, objetivo geral, caminhos) ou 14px (fato, objetivo, métrica).
- **Background:** Papel; o objetivo geral é Tinta Ameixa com texto branco e rótulo mono laranja.
- **Shadow Strategy:** ambiente em repouso; frentes sobem no hover (ver Elevation & Depth).
- **Border:** 1px Fio Quente.
- **Internal Padding:** 18–26px; 30px no cartão escuro.

### Navigation
Barra fixa de 64px sobre Aveia a 82% com blur de 12px e fio quente embaixo. Marca à esquerda em Bricolage 800/20px com "AI" em itálico laranja (20px o qualifica como texto grande). Links em pílulas de 13.5px/500 em Névoa; o link da seção visível ganha Brasa Suave e Tinta Brasa. Abaixo de 860px os links viram um painel que abre sob o cabeçalho por um botão de menu em pílula (44px, hambúrguer que vira ×), com `aria-expanded`; fecha ao tocar num link, fora do painel ou com Esc. Fora do painel, visível também no celular, há uma pílula preenchida "Escolas" ao lado do menu (no desktop é o último link, em Laranja Brasa com texto Tinta Ameixa, fora da detecção de seção ativa). Sem JavaScript, os links ficam escondidos e só a pílula "Escolas" permanece. O primeiro item da página é o link "Pular para o conteúdo", em pílula Tinta Ameixa, visível só no foco.

### Frente (cartão expansível)
Cartão com ícone quadrado colorido (34px, 10px de raio), título, função em mono caixa-alta e resumo; um `+` mono no canto vira `×` ao abrir e revela um texto extra por transição de altura. O título é um `<button>` com `aria-expanded` criado pelo JS e estendido ao cartão inteiro; o foco aparece como contorno violeta de 2px em volta do cartão. Sem JS, o texto extra fica sempre visível.

### Uso consciente de IA (signature)
Três competências (pensamento crítico, raciocínio, resolução de problemas) como lista de definição: filete de 3px no topo em violeta, termo em Bricolage 700/18px e descrição em Névoa. Abaixo, "Dois caminhos para a mesma tarefa": **Delegar tudo** (cartão branco, texto Névoa, marcadores vazados) contra **Pensar com a IA** (cartão Jabuticaba Suave com borda violeta, texto Tinta Ameixa, marcadores cheios). Quatro passos por caminho, sem numeral. O tom é de convite, não de bronca.

### Faixa "Convide sua escola"
Primeira seção depois do hero, sem número. Lista numerada de três passos separados por fios (sem cartões), painel "A escola oferece", três perguntas em `details` e o cartão escuro com o botão primário e o e-mail. É a principal conversão do site.

### Exemplo de conversa
Cartão branco com duas falas separadas por fio tracejado: "Você" em Space Mono (como texto digitado) e "IA" em Inter, com a legenda "Exemplo ilustrativo". Fica na seção Frentes e não faz afirmações sobre resultados.

## Do's and Don'ts

### Do:
- **Do** manter o duplo sentido AI / "aí" e a voz próxima e sem jargão em qualquer texto novo.
- **Do** usar laranja só para ação e destaque e violeta só para apoio e reflexão.
- **Do** usar as variáveis de `:root` (`--orange`, `--violet`, `--ink`, `--radius`, `--shadow`); nunca hex solto.
- **Do** fazer hierarquia com Bricolage + Inter + Space Mono, nesta ordem de papel: título, leitura, anotação.
- **Do** manter 12px como tamanho mínimo de qualquer texto, e usar Tinta Brasa em texto laranja pequeno.
- **Do** manter cartões brancos com borda de 1px em Fio Quente e sombra ambiente; levantar só no hover.
- **Do** manter o hero como página de caderno (pauta + margem) e sem brilhos radiais.
- **Do** usar pílula para qualquer controle, e `prefers-reduced-motion` para toda animação nova.

### Don't:
- **Don't** usar branco puro como fundo de página nem preto puro como texto.
- **Don't** adicionar uma terceira cor de destaque ou gradientes de texto.
- **Don't** usar o laranja puro (#E8641A) como cor de texto pequeno nem texto branco sobre fundo laranja.
- **Don't** usar itálico fora da assinatura "AI".
- **Don't** usar sombras pesadas em repouso nem cantos agudos.
- **Don't** usar Space Mono para parágrafos nem caixa-alta em frases longas.
- **Don't** usar faixas laterais coloridas em cartões: o destaque de um cartão vem de fundo, filete no topo ou borda inteira.
