import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl : string = 'https://restcountries.eu/rest/v2'
  constructor(
    private http:HttpClient
  ) { }

  buscarPais(termino:string):Observable<any>{
   return this.http.get(`${this.apiUrl}/name/${termino}`)
    
  }


}
