import { v4 as uuidv4 } from 'uuid';
const eventos = [];
console.log(eventos[1]);
function adicionarEvent(event) {
    eventos.push(event);
}
const evento = [
    { id: uuidv4(), name: 'Show Morada/Banda Gospel', date: new Date('2024-11-23') },
    { id: uuidv4(), name: 'Stand-up Murilo Couto', date: new Date('2024-10-24') },
    { id: uuidv4(), name: 'Inauguração Shopping Vilhena-RO', date: new Date('2024-10-28') },
    { id: uuidv4(), name: 'Stand-up Afonso Padilha', date: new Date('2024-02-10') },
    { id: uuidv4(), name: 'Show Projeto Sola', date: new Date('2024-12-03') },
    { id: uuidv4(), name: 'Inauguração Park Aquático', date: new Date('2024-11-27') },
];
adicionarEvent(evento[1]);
