const rifas = [];

//Limpar o array
function limpar(){
  rifas.length = 0;
}

// Adiciona uma nova rifa ao sistema
function adicionarRifa(id, nome, preco, quantidade) {
  if (!rifas[id] && quantidade>0 && preco>0) {
    rifas[id] = { nome, preco, quantidade };
  }
}

// Vende uma quantidade de rifas de um determinado tipo
function venderRifa(id, quantidade) {
    if (rifas[id] && quantidade>0 && rifas[id].preco>0) {
      if (rifas[id].quantidade >= quantidade) {
        rifas[id].quantidade -= quantidade;
        return quantidade * rifas[id].preco;
      }
    }
    return 0;
}

// Obtém o preço total de uma determinada quantidade de rifas
function calcularPreco(id, quantidade) {
    if (rifas[id] && quantidade>0 && rifas[id].preco>0) {
      if (rifas[id].quantidade >= quantidade){
        return quantidade * rifas[id].preco;
      }
    }
    return 0;
}


module.exports = { adicionarRifa, venderRifa, calcularPreco, rifas, limpar};