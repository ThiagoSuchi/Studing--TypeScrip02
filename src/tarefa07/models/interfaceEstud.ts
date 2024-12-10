import { Estados } from "./enum";
import { Cidades } from "./interfaceCity";


export interface Etudantes {
    id: string,
    nome: string,
    email: string,
    endereco: {
        cidade: Cidades,
        estado: Estados
    }
}