let carrinho = JSON.parse(localStorage.getItem("carrinhoPerfumes") || "[]");

const dinheiro = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
function salvar(){localStorage.setItem("carrinhoPerfumes",JSON.stringify(carrinho));atualizarContador();}
function atualizarContador(){document.getElementById("contador").textContent=carrinho.reduce((s,i)=>s+i.qtd,0);}
function iniciarFiltros(){
  document.getElementById("nomeLoja").textContent=CONFIG.nomeLoja;
  document.getElementById("subtitulo").textContent=CONFIG.subtitulo;
  document.getElementById("footerNome").textContent=CONFIG.nomeLoja;
  document.getElementById("pixTexto").textContent=`${CONFIG.pixTipo}: ${CONFIG.pix}`;
  [...new Set(produtos.map(p=>p.marca))].sort().forEach(x=>marca.innerHTML+=`<option>${x}</option>`);
  [...new Set(produtos.map(p=>p.categoria))].sort().forEach(x=>categoria.innerHTML+=`<option>${x}</option>`);
  renderizarProdutos(); atualizarContador();
}
function renderizarProdutos(){
  const q=busca.value.toLowerCase(), m=marca.value, c=categoria.value;
  const lista=produtos.filter(p=>(!q||(p.nome+" "+p.marca+" "+p.categoria).toLowerCase().includes(q))&&(!m||p.marca===m)&&(!c||p.categoria===c));
  produtosEl=document.getElementById("produtos");
  produtosEl.innerHTML=lista.map(p=>`<article class="card">
    <img class="foto" src="${p.imagem}" alt="${p.nome}" loading="lazy">
    <div class="info"><div class="marca">${p.marca} • ${p.categoria}</div><h3>${p.nome}</h3>
    <div class="desc">${p.descricao}</div><div class="preco">${dinheiro(p.preco)}</div>
    <button class="btn add" onclick="adicionar(${p.id})">Adicionar ao carrinho</button></div></article>`).join("") || "<p>Nenhum produto encontrado.</p>";
}
function adicionar(id){
  const p=produtos.find(x=>x.id===id), item=carrinho.find(x=>x.id===id);
  item?item.qtd++:carrinho.push({id:p.id,qtd:1});
  salvar(); abrirCarrinho();
}
function remover(id){carrinho=carrinho.filter(x=>x.id!==id);salvar();renderCarrinho();}
function alterar(id,delta){const x=carrinho.find(i=>i.id===id);if(!x)return;x.qtd+=delta;if(x.qtd<=0)remover(id);else{salvar();renderCarrinho();}}
function renderCarrinho(){
  const el=document.getElementById("itensCarrinho");
  if(!carrinho.length){el.innerHTML="<p>Seu carrinho está vazio.</p>";total.textContent=dinheiro(0);return;}
  el.innerHTML=carrinho.map(i=>{const p=produtos.find(x=>x.id===i.id);return `<div class="item"><div><strong>${p.nome}</strong><br><small>${dinheiro(p.preco)} cada</small></div><div class="qty"><button onclick="alterar(${p.id},-1)">−</button> ${i.qtd} <button onclick="alterar(${p.id},1)">+</button><button onclick="remover(${p.id})">🗑️</button></div></div>`}).join("");
  total.textContent=dinheiro(carrinho.reduce((s,i)=>s+produtos.find(p=>p.id===i.id).preco*i.qtd,0));
}
function abrirCarrinho(){document.getElementById("carrinhoModal").style.display="block";renderCarrinho();}
function fecharCarrinho(){document.getElementById("carrinhoModal").style.display="none";}
function finalizarWhatsApp(){
  if(!carrinho.length)return alert("Adicione pelo menos um produto.");
  const nome=document.getElementById("clienteNome").value.trim()||"Cliente";
  const obs=document.getElementById("clienteObs").value.trim();
  let msg=`Olá! Sou ${nome}. Gostaria de fazer este pedido:\n\n`;
  carrinho.forEach(i=>{const p=produtos.find(x=>x.id===i.id);msg+=`• ${i.qtd}x ${p.nome} — ${dinheiro(p.preco*i.qtd)}\n`;});
  const totalPedido=carrinho.reduce((s,i)=>s+produtos.find(p=>p.id===i.id).preco*i.qtd,0);
  msg+=`\n*Total: ${dinheiro(totalPedido)}*`;
  if(obs)msg+=`\nObservação: ${obs}`;
  msg+="\n\nVou realizar o pagamento via Pix e enviar o comprovante por aqui.";
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`,"_blank");
}
async function copiarPix(){try{await navigator.clipboard.writeText(CONFIG.pix);alert("Chave Pix copiada!");}catch(e){alert("Copie manualmente a chave: "+CONFIG.pix)}}
window.onclick=e=>{if(e.target===document.getElementById("carrinhoModal"))fecharCarrinho()};
iniciarFiltros();