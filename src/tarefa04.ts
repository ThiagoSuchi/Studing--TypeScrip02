/*
Implementação de um Sistema de Inventário
Crie uma aplicação em TypeScript para gerenciar o inventário de produtos de uma loja. Siga os requisitos abaixo:
- Crie uma interface Produto com os seguintes campos:
-->  id (UUID): um identificador único para o produto.
-->  nome (string): o nome do produto.
-->  preco (número): o preço do produto.
-->  quantidade (número): a quantidade disponível no estoque.
*/
/*
- Crie funções que implementem as seguintes funcionalidades:
--> Um método addProduto(produto: Produto): void para adicionar um produto ao inventário.
--> Um método removerProduto(id: number): void para remover um produto pelo ID.
--> Um método atualizarQuantidade(id: number, quantidade: number): void para atualizar a quantidade de um produto no estoque.
--> Um método getValorTotal(): number para calcular o valor total dos produtos no inventário.
*/
/*
- Teste as funcionalidades:
--> Adicione 3 produtos ao inventário.
--> Atualize a quantidade de um dos produtos.
--> Remova um produto.
Imprima o valor total do inventário.
*/

import { v4 as uuidv4 } from 'uuid';

interface Produto {
    id: string,
    nome: string,
    preco: number,
    quantidade: number
}

let produtos: Produto[] = []

// Método adicionar produto
const addProduto = (produto: Produto): void => {
    produtos.push(produto)
}
// Método para remover produto
const removerProduto = (id: string): void => {
    produtos.splice(0, produtos.length, ...produtos.filter(prod => prod.id !== id))
}
// Função para adicionar novos produtos
function novoProduto(nome: string, preco: number, qtd: number) {
    const adicionandoProd: Produto = {
        id: uuidv4(),
        nome: nome,
        preco: preco,
        quantidade: qtd
    }

    addProduto(adicionandoProd)
}

novoProduto('Filtro Mann - Óleo do motor - S10 2.8 2012/2020', 47.90, 120)
novoProduto('Filtro Mann - Combustível - S10 2.8 2012/2020', 157.30, 243)
novoProduto('Filtro Wega - Óleo do motor - GM Celta 1.0 2014/2020', 38.50, 300)
novoProduto('Filtro Wega - Ar Condicionado - Honda Civic 2.0 2013/2016', 157.30, 243)
removerProduto(produtos[1].id)
console.log(produtos);



