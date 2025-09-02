# Portfólio — GitHub Pages

Este repositório contém um site estático (HTML/CSS/JS) pronto para publicar no GitHub Pages.

## Como publicar

1. Faça um fork ou baixe os arquivos.
2. Suba tudo para um repositório público no seu GitHub (por exemplo, `portfolio`).
3. Vá em **Settings › Pages** e selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (ou `master`) e pasta `/root`.
4. Salve. A URL será algo como: `https://SEU_USUARIO.github.io/portfolio/`.

## Personalização rápida

- Edite `index.html` (nome, links, descrição).
- Troque `assets/img/cover.png` e `assets/img/favicon.svg`.
- Liste seus projetos em `assets/js/projects.json`.
- Substitua `assets/cv/AlbertLeme-CV.pdf` pelo seu CV.
- Atualize o email no `mailto:` dentro de `assets/js/main.js`.

> Observação: GitHub Pages não executa **ASP.NET server-side**. Este projeto é estático. Se quiser usar tecnologia .NET no front, uma alternativa é **Blazor WebAssembly** (que roda no navegador).

Bom deploy! 🚀
