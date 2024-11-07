/* 
01) - Crie um codigo em typeScrypt para um sistema de Gerenciamento de compromissos onde cada compromisso tem uma data e hora, 
um titulo, uma descrição, e o status do compromisso (pendente, concluido, cancelado).

02) - Crie um array para armazenar os compromissos.

03) - Crie funções para inserir, listar todos, listar por status, listar um unico compromisso, alterar e deletar um compromisso.
*/


enum Status {
    Pendente = 'Pendente',
    Concluido = 'Concluído',
    Cancelado = 'Cancelado'
}

interface Compromisso {
    dataHora: Date,
    titulo: string,
    descricao: string,
    status: Status
}

let gerenciamentDeCompromisso:Compromisso[] = [];

function inserirCompromisso (compromisso: Compromisso):void {
    gerenciamentDeCompromisso.push(compromisso);
}

function listarCompromisso ():Compromisso[] {
    return gerenciamentDeCompromisso;
}

function listarPorStatus (statusCompromisso: Status):any {

    if(statusCompromisso === Status.Pendente) {
        const statusDoComp = gerenciamentDeCompromisso.filter((comp) => {
            return comp.status == Status.Pendente
        })    
        return statusDoComp
    }else if(statusCompromisso === Status.Concluido){
        const statusDoComp = gerenciamentDeCompromisso.filter((comp) => {
            return comp.status == Status.Concluido
        }) 
        return statusDoComp
    } else {
        const statusDoComp = gerenciamentDeCompromisso.filter((comp) => {
            return comp.status == Status.Cancelado
        }) 
        return statusDoComp
    }
    
}

let compro1:Compromisso = {
    dataHora: new Date('2024-11-06T19:30:00'),
    titulo: 'Cinema',
    descricao: 'Ir ao cinema as 19:30, com a família assistir Venom',
    status: Status.Concluido
}

let compro2:Compromisso = {
    dataHora: new Date('2024-11-02T20:00:00'),
    titulo: 'Academia',
    descricao: 'Treino as 20hr na academia atmus.',
    status: Status.Cancelado
}

let compro3:Compromisso = {
    dataHora: new Date('2024-11-22T15:30:00'),
    titulo: 'Entrega',
    descricao: 'Fazer uma entrega de um kit de alimentos na igreja Batista Esperença as 15:30',
    status: Status.Pendente
}

inserirCompromisso(compro1)
inserirCompromisso(compro2)
inserirCompromisso(compro3)

console.log(listarPorStatus(Status.Concluido));

 