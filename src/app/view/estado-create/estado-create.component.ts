import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { EstadoService } from 'src/app/model/estado.service';

@Component({
  selector: 'app-estado-create',
  templateUrl: './estado-create.component.html',
  styleUrls: ['./estado-create.component.scss'],
})

export class EstadoCreateComponent  implements OnInit {
   estado: Estado= new Estado(0, "", "");

   constructor(private estadoService: EstadoService){}

  ngOnInit() {

  }
  
  salvar(){
    this.estadoService.createOrUpdate(this.estado).subscribe(response =>
       {let res:Response =<Response>response           
             //tratar erro
            
             alert ("Estado cadastrado com sucesso");
        });
       
  }


}
