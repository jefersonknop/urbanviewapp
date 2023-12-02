import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/model/cidade';
import { CidadeService } from 'src/app/model/cidade.service';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss'],
})
export class CidadeComponent  implements OnInit {
  cidades: Cidade[] = new Array();
  titulo:string ="";

 constructor(private cidadeService: CidadeService){}

 ngOnInit() {

   /*SETA O TÍTULO */
   this.titulo = "Cidades";  
   this.cidadeService.list().subscribe(response => this.cidades = response);
 }


}

