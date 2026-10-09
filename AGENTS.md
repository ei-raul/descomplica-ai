# Descomplica AI — guia para agentes de código

Site estático do projeto de extensão **Descomplica AI** (UniCatólica, Sistemas de Informação), em português (pt-BR).
Publicado no GitHub Pages por `.github/workflows/pages.yml` a cada push na `main`.

## Stack e princípios

- HTML, CSS e JS puros. **Sem build, sem npm, sem framework.** Só adicione dependência se não houver alternativa nativa, e justifique no PR.
- Os arquivos são servidos como estão: o que está no repositório é o que vai ao ar.
- Caminhos **relativos** (`css/style.css`, não `/css/style.css`): o site fica em `/descomplica-ai/`, não na raiz do domínio.
- Fontes vêm do Google Fonts (único recurso externo). Não adicione CDNs de scripts.

## Estrutura

```
index.html        marcação (uma página, seções com id: sobre, objetivos, frentes, ...)
css/              estilos; style.css é o ponto de entrada
js/               scripts; main.js é o ponto de entrada
img/              imagens e favicon
```

Novas páginas: `nome-da-pagina.html` na raiz, reutilizando `css/` e `js/`. Páginas novas devem repetir o `<head>` e o cabeçalho/rodapé de `index.html`.

## HTML

- Semântico: `header`, `nav`, `main`, `section`, `footer`, `button` para ações, `a` para navegação. Não use `div` clicável.
- Um `h1` por página; níveis de título em ordem.
- `lang="pt-BR"`, `alt` descritivo em toda imagem (vazio se decorativa), `width`/`height` ou `aspect-ratio` para evitar salto de layout, `loading="lazy"` abaixo da dobra.
- Links externos com `target="_blank"` levam `rel="noopener noreferrer"`.
- **Sem `style="..."` nem `onclick="..."` novos.** Estilo vai no CSS, comportamento no JS.
- Todo controle interativo precisa funcionar por teclado e ter foco visível.

## CSS

- Cores, raio e sombra são variáveis em `:root` (`--orange`, `--violet`, `--ink`, `--radius`...). Use-as; não escreva hex solto.
- Nomes de classe curtos e em minúsculas com hífen (`.tl-card`, `.signup-copy`), escopados pelo componente. Não estilize por id.
- Mobile-first não é regra aqui: o arquivo usa `@media (max-width:...)` no fim. Mantenha os breakpoints existentes (860px, 560px).
- Respeite `prefers-reduced-motion`: toda animação nova tem versão desativada no bloco existente.
- Organize por seção com o comentário `/* ---------- nome ---------- */`. Se `style.css` passar de ~500 linhas, divida em arquivos por componente e importe via `<link>` (evite `@import`).

## JavaScript

- Código novo: `const`/`let`, funções pequenas, sem globais. Para vários arquivos, `<script type="module" src="...">`.
- `js/main.js` é legado em estilo ES5 dentro de um IIFE: edite-o no estilo dele e **não reescreva em massa** junto de outra mudança.
- Selecione elementos por classe/`data-*`, não por texto ou posição. Dados da página (listas de conteúdo etc.) ficam em constantes no topo do arquivo, separados da lógica.
- Nunca use `innerHTML` com texto que não seja constante do repositório (XSS). Prefira `textContent`/`createElement`.
- A página deve continuar legível sem JS (conteúdo no HTML; JS só melhora). Use `IntersectionObserver` com fallback, como já é feito.

## Qualidade antes de commitar

Sem ferramenta de teste: verifique à mão.

1. `node --check js/*.js` (sintaxe do JS).
2. Servir localmente: `python3 -m http.server 8000` e abrir `http://localhost:8000/`. Não abra via `file://`.
3. Conferir console sem erros, layout em ~375px e ~1280px, navegação por teclado.
4. Nenhum caminho absoluto, nenhum arquivo referenciado inexistente (`grep -rn 'src=\|href=' *.html`).

## Git

- Commits pequenos, mensagem no imperativo e em português (`Adiciona seção X`).
- Não commitar arquivos grandes sem necessidade: otimize imagens (< 300 KB, WebP/PNG comprimido) antes.
