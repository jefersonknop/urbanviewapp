import { Estado } from "./estado";

export class Cidade{
    id: number;
    nome:string;
    codigo_ibge: number;
    populacao_2010: number; 
    densidade_demo: number;
    gentilico: string;
    area:number;
    estado_id : Estado;

     constructor(){
         this.id = 0;
         this.nome = '';
         this.codigo_ibge = 0;
         this.populacao_2010 = 0;
         this.densidade_demo = 0;
         this.gentilico = '';
         this.area = 0;
         this.estado_id = new Estado (0, '','');
     }

    }
