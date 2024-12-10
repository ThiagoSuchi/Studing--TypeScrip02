import { Estados } from "./enum";
import { Cidades } from "./interfaceCity";


export interface Estudantes {
    id: string,
    nome: string,
    email: string,
    endereco: {
        cidade: Cidades,
        estado: Estados
    }
}