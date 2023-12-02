import { Component, OnInit } from '@angular/core';
import { Estado } from 'src/app/model/estado';
import { EstadoService } from 'src/app/model/estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss'],
})
export class EstadoComponent  implements OnInit {

  estados: Estado[] = new Array();
  titulo:string ="";

 constructor(private estadoService: EstadoService){}

 ngOnInit() {

   /*SETA O TÍTULO */
   this.titulo = "Estados";  
   this.estadoService.list().subscribe(response => this.estados = response);
 }


}
