# Bom Crepe Bistro — site publicado

Landing page estática, em português de Portugal, com menu bilingue pt-PT/EN.

Site público: https://bom-crepe-bistro.vercel.app/. Publicado na Vercel em 9 de outubro de 2026.

## Ver o site

Na raiz do projeto:

```sh
/usr/bin/python3 -m http.server 8765 --bind 127.0.0.1 --directory site
```

Abrir http://127.0.0.1:8765/. Não são necessários npm, compilação, contas ou variáveis de ambiente para esta pré-visualização.

## Estrutura

- `index.html`: apresentação, três motivos, quatro destaques, menu completo, reservas, história, avaliações, galeria, vídeo, mapa e rodapé.
- `style.css`: identidade creme/castanho, tipografia Bodoni Moda e adaptação a ecrãs de 320 px em diante.
- `app.js`: menu móvel com diálogo nativo, filtros do menu, reprodução do vídeo e ativação do mapa.
- `assets/`: derivados responsivos WebP, logótipos aprovados, fonte local e vídeo de quatro segundos sem áudio.
- `content/menu.json`: inventário gerado a partir de `../MENU_BILINGUE.md`; 28 produtos e 15 extras.

## Massas

Apenas as galettes têm massa fina de trigo-sarraceno. Os crepes doces têm massa tradicional, conforme correção do utilizador em 9 de outubro de 2026. Esta distinção aplica-se ao texto, ao inglês do menu, às descrições das imagens e às futuras atualizações.

## Atualizar o menu

Editar `../MENU_BILINGUE.md`, a fonte de conteúdo. Depois, na raiz do projeto:

```sh
/Users/sasha/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 tools/preparar_site.py --menu-only
```

O comando atualiza o HTML entre os marcadores `MENU:START` e `MENU:END` e o inventário JSON. O menu não depende de pedidos à rede ou de JavaScript para existir: sem JavaScript, as cinco categorias ficam visíveis. Os extras expandem-se com controlos HTML nativos.

Sem `--menu-only`, o comando também prepara as imagens com Pillow, a partir de `../output/imagens-bom-crepe/web/`. Não altera os originais nem `sources/`.

## Comportamentos

- O inglês permanece visível abaixo do português, com tamanho mínimo de 14 px no menu.
- O vídeo só é transferido e reproduzido após interação; não tem reprodução automática. O GIF aprovado fica no arquivo de referência, por ser mais pesado.
- O mapa real do Google é ativado pelo botão «Mostrar mapa». Há sempre uma ligação externa para direções.
- O menu móvel suporta Escape, contenção de foco do diálogo nativo e regresso do foco ao controlo ou à secção escolhida.
- As imagens abaixo da apresentação carregam de forma diferida. As versões de computador e telemóvel usam composições próprias.
- As reservas são pedidas por telefone, através de uma ligação `tel:` para +351 928 233 867, número público verificado na ficha Google em 8 de outubro de 2026. A equipa confirma a reserva; o site não envia pedidos automaticamente.
- Não há checkout, recolha de dados nem confirmação fictícia.

## Falta confirmar antes da publicação

1. Confirmar se o telefone público da ficha Google é o canal preferido para reservas, ou fornecer WhatsApp/e-mail para substituir esta opção. A tolerância de 10 minutos já está visível.
2. Se pretendido, obter uma ligação que abra diretamente a escrita de uma avaliação. A ligação curta atual, copiada do Google, abre a ficha do café: https://maps.app.goo.gl/pBwK5qqSG638h5Px6. Não se apresentam números antigos como atuais.
3. Revisão final de preços, textos, logótipo e seleção de fotografias.

A história de Yuliia remete para a reportagem da NiT. Horário de segunda-feira a sábado, das 10h às 21h; domingo encerrado, conforme correção do utilizador em 8 de outubro de 2026. Pagamento apenas no estabelecimento: numerário, cartão e contactless.

O vídeo é identificado como memória da inauguração, para não apresentar inscrições antigas do quadro como informação atual. Créditos e proveniência das imagens em `CREDITOS.md`.

## Publicação na Vercel

Projeto `bom-crepe-bistro`, conta `dk-laumann`, plano Hobby, conforme pedido do utilizador. Publicado pelo painel da Vercel, com os 50 ficheiros públicos da pasta `site/`, sem compilação. O endereço público é https://bom-crepe-bistro.vercel.app/.

A publicação atual não está ligada ao GitHub. Para ligar futuramente um repositório que inclua esta pasta, selecionar `site` como Root Directory; se o repositório contiver diretamente o conteúdo de `site/`, usar a raiz. Não é necessário comando de compilação. Não enviar as pastas de referências ou materiais originais para o alojamento.

O domínio `www.bomcrepebistro.com` não foi adquirido nem associado.
