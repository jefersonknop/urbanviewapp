import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from './cidade';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  baseUrl: string = 'http://urbanview.knopti.com.br/api/cidades';

  constructor(private http: HttpClient) {} 
  

     //método sincrono
   // list() {
     /// return this.http.get<Cidade[]>(this.baseUrl);
  //  }

  //método assíncrono
   list(): Observable<Cidade[]> {
     return this.http.get<Cidade[]>(this.baseUrl);
   }

  
    getById(id: number) {
      return this.http.get<Cidade>(this.baseUrl + '/' + id);
    }
  
    createOrUpdate(cidade: Cidade) {
        if (cidade.id != null){
           return this.http.put(this.baseUrl, cidade);
        }
        else{
           return this.http.post(this.baseUrl, cidade);
        }
    }
  
    
  
    delete(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
  }

