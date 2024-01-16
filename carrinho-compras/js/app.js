let totalGeral = 0

function adicionar() {
    // Recuperar valores do nome do produto, quantidade e do valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Calcular o preço, o nosso subtotal 
    let preco = quantidade * valorUnitario;
    // Adicionar no carrinho 
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    // Atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('Valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
}


function limpar() {


}