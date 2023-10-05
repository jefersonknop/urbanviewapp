import { Component } from '@angular/core';
import { Estado } from 'src/app/model/estado/estado';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent {
  public estados: Estado[] = new Array();
  
  ngOnInit(){
       this.estados.push (new Estado (1, "PR", "PARANÁ"));
       this.estados.push (new Estado (2, "SC", "SANTA CATARINA"));
       this.estados.push (new Estado (3, "RS", "RIO GRANDE DO SUL"));
  }
    

}
