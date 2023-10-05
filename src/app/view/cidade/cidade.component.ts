import { Component } from '@angular/core';
import { Cidade } from 'src/app/model/cidade/cidade';
import { Estado } from 'src/app/model/estado/estado';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent {
  public cidades: Cidade[] = new Array();
  
  ngOnInit(){
       this.cidades.push (new Cidade (1,
                                      "Canoinhas", 
                                      12,
                                      55000,
                                      10,
                                      "Canoinhense",
                                      1400,
                                      new Estado (1, 
                                                "SC", 
                                                "Santa Catarina")));
       
  }
}
