import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/model/cidade';
import { CidadeService } from 'src/app/model/cidade.service';
import { Estado } from 'src/app/model/estado';
import { EstadoService } from 'src/app/model/estado.service';

@Component({
  selector: 'app-cidade-create',
  templateUrl: './cidade-create.component.html',
  styleUrls: ['./cidade-create.component.scss'],
})
export class CidadeCreateComponent  implements OnInit {
  cidade: Cidade = new Cidade();
  estado: Estado = new Estado(0,"", "");
  id_estado: number = 0;

  constructor(private cidadeService: CidadeService,
              private estadoService: EstadoService) { }

    ngOnInit() { }
  
  salvar() {
    this.estadoService.getById(this.id_estado)
                .subscribe(response => this.estado = response);
     this.cidade.estado_id = this.estado;
   
       this.cidadeService.createOrUpdate(this.cidade)
                       .subscribe(response =>
                        {let res:Response =<Response>response           
                       //tratar erro
          alert ("Cidade cadastrada com sucesso");
        });   

    }

}
