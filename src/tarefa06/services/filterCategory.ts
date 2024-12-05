import { Product } from "../models/interface";
import { Category } from "../models/enum";

export function filtrarPorCategoria(produtos: Product[], categoria: string): Product[] {
    // O Find - Retorna o primeiro elemento que atende à condição ou undefined.
    const proFiltrado = Object.values(Category).find((cat) => {
        return cat.toLocaleLowerCase() === categoria.toLocaleLowerCase()
    })

    return produtos.filter(prod => prod.categoria === proFiltrado)
}


 