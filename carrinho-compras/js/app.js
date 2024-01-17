let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

let listaDeProdutosPermitidos = ["Fone de ouvido", "Celular", "Oculus VR"];

function adicionar() {
    // Recuperar valores do nome do produto, quantidade e do valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    if (listaDeProdutosPermitidos.includes(nomeProduto)) {
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (isNaN(quantidade) || quantidade <= 0) {
      alert("Quantidade inválida. Insira uma quantidade válida.");
    }
    // Calcular o preço, o nosso subtotal 
    let preco = quantidade * valorUnitario;
    // Adicionar no carrinho 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    // Atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
  } else {
    alert("Produto inválido. Selecione um produto da lista permitida.");
  }
}


function limpar() {
  totalGeral = 0
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0';  
}
  

