import { Estado } from "src//app/model/estado/estado";

export class Cidade{
    id: number;
    nome:string;
    codigo_ibge: number;
    populacao_2010: number; 
    densidade_demo: number;
    gentilico: string;
    area:number;
    estado_id : Estado;

     constructor(id: number, nome: string, codigo_ibge: number, populacao_2010: number, densidade_demo: number, gentilico: string, area: number, estado_id: Estado){
         this.id = id;
         this.nome = nome;
         this.codigo_ibge = codigo_ibge;
         this.populacao_2010 = populacao_2010;
         this.densidade_demo = densidade_demo;
         this.gentilico = gentilico;
         this.area = area;
         this.estado_id = estado_id;
     }

    }
