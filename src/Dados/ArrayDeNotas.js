export default class ArrayDeNotas{

    constructor(){
        let notas = new Array();
    }
    
    adicionarNota(name, mensagem, urlImagem){
        const novaNota = new Nota(name, mensagem, urlImagem);
        console.log(name, mensagem, urlImagem)
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => func(this.notas));
    }
}

class Nota{
    constructor(name, mensagem, urlImagem){
        this.name = name;
        this.mensagem = mensagem;
        this.urlImagem = urlImagem;
    }
}