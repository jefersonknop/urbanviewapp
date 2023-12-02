import { Cidade } from "./cidade";

export class Pessoa{
    id: number;
    nome: string;
    cpf: string;
    endereco: string;
    cidade_id: Cidade;
    email: string;

    constructor() {
        this.id = 0;
        this.nome = "";
        this.cpf = "";
        this.endereco = "";
        this.cidade_id = new Cidade();
        this.email = "";
    }

//Criar cidadeService. Usar url: http://urbanview.knopti.com.br/api/pessoas
}