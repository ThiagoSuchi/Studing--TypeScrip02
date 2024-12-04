import { produtos } from "../tarefa04"

// Valor total dos produtos no inventário
export const getValorTotal = ():number => {
    return produtos.map((prod) => prod.preco).reduce((acc, prod) => acc + prod)
}