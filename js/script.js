// Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink)

// Ativar itens do orçamento

function ativarProduto(parametro){
  
}

parametros.forEach(ativarProduto)

const parametros = new URLSearchParams(location.search);

