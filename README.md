# Catálogo de Perfumes — GitHub Pages

## 1. Onde editar
Abra `produtos.js`. No começo do arquivo há `CONFIG`:
- `nomeLoja`: nome da loja
- `whatsapp`: telefone com país + DDD, somente números
- `pix`: sua chave Pix
- `pixTipo`: tipo da chave

A lista `produtos` contém nome, marca, categoria, preço e imagem.

## 2. Como trocar uma foto
Coloque sua foto dentro da pasta `imagens` e altere, por exemplo:
`imagem:"imagens/meu-perfume.jpg"`

Use nomes simples, sem espaços e sem acentos.

## 3. Como adicionar produtos
Copie um objeto existente dentro de `const produtos = [...]`, altere os dados e dê a ele um novo `id`.

## 4. Testar no computador
Dê duplo clique em `index.html`. O catálogo abre no navegador.
Para testar o WhatsApp, troque primeiro o número de exemplo em `CONFIG`.

## 5. Publicar no GitHub
1. Crie uma conta em https://github.com/ (se ainda não tiver).
2. Crie um novo repositório, por exemplo `catalogo-perfumes`.
3. Escolha a opção de repositório público.
4. Envie todos os arquivos e pastas deste projeto, mantendo a estrutura.
5. Entre em Settings > Pages.
6. Em Source, selecione `Deploy from a branch`.
7. Escolha a branch `main` e a pasta `/ (root)`.
8. Salve.
9. Aguarde o GitHub gerar o endereço do site.

## 6. Fluxo de venda
O cliente acessa o catálogo, adiciona produtos ao carrinho e envia o pedido para seu WhatsApp.
Você informa/valida o total e o cliente paga via Pix. Ele envia o comprovante pelo WhatsApp.

## Atenção
Os produtos deste pacote são EXEMPLOS. Substitua pelos seus produtos, preços e imagens antes de divulgar.
Não use fotos ou marcas de terceiros sem ter direito de utilizá-las.
