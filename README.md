# Pilates Paula Pereira — site estático

Este projeto foi preparado para publicação no GitHub Pages. Não usa servidor, banco de dados ou dependências de build.

## Arquivos
- `index.html`: estrutura e textos das seções.
- `style.css`: cores, tipografia, espaçamentos, layout e responsividade.
- `script.js`: menu mobile e link do WhatsApp.
- `assets/`: fotos enviadas para este projeto.

## Antes de publicar
1. Abra `script.js`.
2. Troque `5531999999999` pelo número real do WhatsApp, incluindo código do Brasil (55) e DDD, sem `+`, espaços ou pontuação.
3. Revise os textos de `index.html` para refletirem os serviços reais e as informações profissionais da Paula.
4. Confira se todas as imagens podem ser publicadas e utilizadas no site.

## Publicar com GitHub Pages
1. Crie o repositório público `pilatespaulapereira`.
2. Envie o conteúdo desta pasta para a raiz do repositório (o arquivo `index.html` deve ficar na raiz).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione `main` e `/ (root)` e salve.
6. Aguarde a publicação e teste a URL `https://SEU-USUARIO.github.io/pilatespaulapereira/`.

## Domínio próprio
Depois de confirmar que o site funciona na URL do GitHub Pages:
1. Em **Settings → Pages → Custom domain**, informe `pilatespaulapereira.com.br` e salve.
2. No Registro.br, configure os DNS conforme os valores atuais indicados pela documentação oficial do GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. Ative **Enforce HTTPS** quando a opção aparecer. A emissão do certificado pode levar algum tempo.

## Edição visual
- Para mudar textos: `index.html`.
- Para mudar cores: variáveis no começo de `style.css` (`--paper`, `--ink`, `--sage`, etc.).
- Para trocar fotos: substitua os arquivos em `assets/` mantendo os nomes, ou altere os caminhos no HTML.
