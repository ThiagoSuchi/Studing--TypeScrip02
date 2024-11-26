/* 3) Gerenciamento de Eventos
- Crie um sistema que exiba informações sobre eventos.
- Defina uma interface Event com os campos: id, name, date (string).
- Crie funções para gerenciar eventos (adicionar, listar, listar um específico e deletar).
- Crie uma função que receba um array de eventos e exiba os eventos futuros (data maior que a atual).
*/
import { v4 as uuidv4 } from "uuid"

interface Event {
    id: string,
    name: string,
    date: Date
}

const eventos: Event[] = []


// Adcionando eventos
function adicionarEvent(event: Event[]) {
    event.map((eve) => eventos.push(eve))
}

// Listando os eventos
function listaEventos () {
    const evento: Event[] = [
        { id: uuidv4(), name: 'Show Morada/Banda Gospel', date: new Date('2024-11-23') },
        { id: uuidv4(), name: 'Stand-up Murilo Couto', date: new Date('2024-10-24') },
        { id: uuidv4(), name: 'Inauguração Shopping Vilhena-RO', date: new Date('2024-10-28') },
        { id: uuidv4(), name: 'Stand-up Afonso Padilha', date: new Date('2024-02-10') },
        { id: uuidv4(), name: 'Show Projeto Sola', date: new Date('2024-12-03') },
        { id: uuidv4(), name: 'Inauguração Park Aquático', date: new Date('2024-11-27') },
    ]
    adicionarEvent(evento)
    return evento
}

console.log(`
Evento: ${listaEventos()[0].name}
Data: ${listaEventos()[0].date.getUTCDate()}/${listaEventos()[0].date.getUTCMonth() + 1}/${listaEventos()[0].date.getUTCFullYear()} 
`);
 