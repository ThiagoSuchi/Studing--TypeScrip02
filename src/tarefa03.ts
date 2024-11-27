/* 3) Gerenciamento de Eventos
- Crie um sistema que exiba informações sobre eventos.
- Defina uma interface Event com os campos: id, name, date (string).
- Crie funções para gerenciar eventos (adicionar, listar, listar um específico e deletar).
- Crie uma função que receba um array de eventos e exiba os eventos futuros (data maior que a atual).
*/


interface Evento {
    id: number,
    name: string,
    date: Date | string
}

const eventos: Evento[] = []
let currentId = 0;

// Adcionando eventos
function adicionarEvent(nome: string, data:string) {
    // Gerador de id
    currentId += 1

    const arrayEventos: Evento[] = [
        {
         id: currentId,
         name: nome,
         date: data
        }
    ]
    eventos.push(arrayEventos[0])
}

//Deletar o evento
function deleteEvent(evento: Evento[], nome: Evento) {
    let listaAtualizada = []
    for(let i = 0, j = evento.length; i !== j; i++) {
        if(evento[i] !== nome) listaAtualizada.push(evento[i])
    }

    return listaAtualizada;
}

// Filtrando eventos com datas futuras
function eventFuturo() {
    console.log(eventos[0].date);
     
}

// Filtrando Eventos pelo id
function filtrarEvento (idEvent: number, events: Evento[]) {
    const eventoFiltrdo = events.filter((e) => {
        return e.id === idEvent
    })
    return eventoFiltrdo
}

// Listando os eventos
function listaEventos (): Evento[] {
    return eventos
}

adicionarEvent('Venom3 Nos Cinemas', '12/09/2024')
adicionarEvent('Show Projeto Sola', '01/02/2025')
adicionarEvent('Stand-up Afonso Padilha', '24/09/2024')
adicionarEvent('Inauguração Shopping', '11/11/2024')
adicionarEvent('Casamento Amigos', '22/10/2024')

console.log('--------------------------------------------------------------------------');
console.log(listaEventos());
console.log('-------------------- Lista Atualizada: --------------------------');
console.log(deleteEvent(eventos, eventos[1]));
console.log('------------------------- Evento Filtrado Pelo Id -----------------------');
console.log(...filtrarEvento(3, eventos));
console.log('--------------------------------------------------------------------------');



 
 