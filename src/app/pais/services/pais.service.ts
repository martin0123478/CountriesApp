import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl : string = 'https://restcountries.eu/rest/v2'
  constructor(
    private http:HttpClient
  ) { }

  buscarPais(termino:string):Observable<Country[]>{
   return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`)
    
  }

  buscarCapital(termino:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`)
  }

  verPais(id:string):Observable<Country>{
    return this.http.get<Country>(`${this.apiUrl}/alpha/${id}`)
  }


}
