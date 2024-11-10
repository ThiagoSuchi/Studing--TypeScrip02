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
    data: Date,
    hora: string,
    titulo: string,
    descricao: string,
    status: Status
}

// Guarda os compromissos neste array 
let gerenciamentDeCompromisso:Compromisso[] = [];

// Insere um novo compromisso
function inserirCompromisso (compromisso: Compromisso):void {
    gerenciamentDeCompromisso.push(compromisso);
}

// Listar os compromissos
function listarCompromisso ():Compromisso[] {
    return gerenciamentDeCompromisso;
}

// Listar os compromissos por status
function listarPorStatus (statusCompromisso: Status):any {
    const filtro = gerenciamentDeCompromisso.filter((filter) => {
        return filter.status == statusCompromisso
    })
    return filtro
}

// Alterar compromisso
function alterarCompromisso (comp:Compromisso):any {
    comp.titulo = 'Cinema - cinelaser'
}

// Deletar compromisso
function deletarCompromisso (arr: Compromisso[], id: Compromisso):Compromisso[] {
    let arrAtualizado = [];
    for(let i = 0, j = arr.length; i !== j; i++){
        if(arr[i] !== id) arrAtualizado.push(arr[i])
    }
    return arrAtualizado
}

let compro1:Compromisso = {
    data: new Date('2024-11-06'),
    hora: '19:30',
    titulo: 'Cinema',
    descricao: 'Ir ao cinema as 19:30, com a família assistir Venom',
    status: Status.Concluido
}

let compro2:Compromisso = {
    data: new Date('2024-11-02'),
    hora: '20:00',
    titulo: 'Academia',
    descricao: 'Treino as 20hr na academia atmus.',
    status: Status.Cancelado
}

let compro3:Compromisso = {
    data: new Date('2024-11-22'),
    hora: '15:30',
    titulo: 'Entrega',
    descricao: 'Fazer uma entrega de um kit de alimentos na igreja Batista Esperença as 15:30',
    status: Status.Pendente
}

inserirCompromisso(compro1)
inserirCompromisso(compro2)
inserirCompromisso(compro3)

alterarCompromisso(compro1)

// Formatando datas
console.log('---------------------Lista Atualizada---------------------------------------');
console.log(deletarCompromisso(gerenciamentDeCompromisso, gerenciamentDeCompromisso[1]));

console.log('---------------------Lista filtrada por status------------------------------');
console.log(listarPorStatus(Status.Pendente));


 