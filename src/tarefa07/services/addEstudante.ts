import { Estados } from "../models/enum";
import { Estudantes } from "../models/interfaceEstud";
import { v4 as uuidv4 } from 'uuid';


export function addEstudante(nome: string, email: string, cidade: string) {

    const estudanteNovo: Estudantes = {
        id: uuidv4(),
        nome: nome,
        email: email,
        endereco: {
            cidade: {nome: cidade},
            estado: Estados.RO
        }
    }
    return estudanteNovo
}
