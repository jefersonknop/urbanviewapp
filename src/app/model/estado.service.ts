import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Estado } from './estado';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  baseUrl: string = 'http://urbanview.knopti.com.br/api/estados';

  constructor(private http: HttpClient) {} 
  

     //método sincrono
   // list() {
     /// return this.http.get<Estado[]>(this.baseUrl);
  //  }

  //método assíncrono
   list(): Observable<Estado[]> {
     return this.http.get<Estado[]>(this.baseUrl);
   }

  
    getById(id: number) {
      return this.http.get<Estado>(this.baseUrl + '/' + id);
    }
  
    createOrUpdate(estado: Estado) {
        if (estado.id != 0){
           return this.http.put(this.baseUrl, estado);
        }
        else{
           return this.http.post(this.baseUrl, estado);
        }
    }
  
    
  
    delete(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
  }

