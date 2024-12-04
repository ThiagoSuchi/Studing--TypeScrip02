import { produtos } from "../tarefa04";

// Método para remover produto
export const removerProduto = (id: string): void => {
    produtos.splice(0, produtos.length, ...produtos.filter(prod => prod.id !== id))
}