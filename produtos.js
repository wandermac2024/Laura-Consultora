/*
  EDITE ESTE ARQUIVO PARA TROCAR PRODUTOS, PREÇOS E FOTOS.
  Para adicionar produto, copie um bloco dentro da lista produtos.
*/
const CONFIG = {
  nomeLoja: "Minha Perfumaria",
  subtitulo: "Laura Nunes Consultora",
  whatsapp: "5511945662659", // somente números: país + DDD + telefone
  pix: "68352891715",
  pixTipo: "Chave Pix"
};

const produtos = [
  {id:1,marca:"O Boticário",categoria:"Hidratantes",nome:"Loção Desodorante Hidratante Corporal Cuide-se Bem Deleite 400ml",descricao:"Loção Hidratante",preco:74.90,imagem:"imagens/produto-01.png"},
  {id:2,marca:"O Boticário",categoria:"Perfumes",nome:"Body Splash Desodorante Colônia Viagem Encantada 200ml",descricao:"Body Splash",preco:119.90,imagem:"imagens/produto-02.png"},
  {id:3,marca:"O Boticário",categoria:"Perfumes",nome:"Body Splash Desodorante Colônia Cuide-se Bem Nuvem 200ml",descricao:"Body Splash",preco:92.90,imagem:"imagens/produto-03.png"},
  {id:4,marca:"O Boticário",categoria:"Perfumes",nome:"Body Splash Desodorante Colônia Cuide-se Bem Beijinho 200ml",descricao:"Body Splash",preco:92.90,imagem:"imagens/produto-04.png"},
  {id:5,marca:"O Boticário",categoria:"Hidratantes",nome:"Refil Deleite 350ml",descricao:"Loção Hidratante",preco:59.90,imagem:"imagens/produto-05.png"},
  {id:6,marca:"Avon",categoria:"Hidratantes",nome:"Loção Desodorante Corporal Aveia e Extrato de Baunilha",descricao:"Locão Hidratante",preco:17.90,imagem:"imagens/produto-06.png"},
  {id:7,marca:"Avon",categoria:"Sabonetes",nome:"Creme Gel De Limpeza",descricao:"Gel Hidratante",preco:12.90,imagem:"imagens/produto-07.png"},
  {id:8,marca:"Avon",categoria:"Hidratantes",nome:"Gel Hidratante Pós-Sol",descricao:"Gel Hidratante",preco:44.90,imagem:"imagens/produto-08.png"},
  {id:9,marca:"Eudora",categoria:"Perfumes",nome:"Body Splash Desodorante Colônia Instance Baunilha 200ml",descricao:"Body Splash",preco:72.90,imagem:"imagens/produto-09.png"},
  {id:10,marca:"Eudora",categoria:"Cosméticos",nome:"Paleta de Sombra Turbo SOUL 8g",descricao:"Cosméticos",preco:57.90,imagem:"imagens/produto-10.png"},
{id:11,marca:"Natura",categoria:"Perfumes",nome:"Deo Colônia Masculino Kaiak Urbe 100 ml",descricao:"Deo Colônia",preco:189.90,imagem:"imagens/produto-11.png"},
{id:12,marca:"Natura",categoria:"Perfumes",nome:"Deo Parfum Feminino Essencial Safran 100 ml",descricao:"Deo Parfum desenvolvido em Dubai",preco:289.90,imagem:"imagens/produto-12.png"},


];