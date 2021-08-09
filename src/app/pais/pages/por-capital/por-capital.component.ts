import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import {Country} from '../../interfaces/pais.interface'
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {
  termino:string='';
  hayError : boolean = false;
  pais : Country[] = []
  constructor(
    private paisservice:PaisService
  ) { }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.hayError=false;
    this.termino = termino;
    this.paisservice.buscarCapital(this.termino)
    .subscribe((data)=>{
      
      console.log(data)
      this.pais = data;
    },(err)=>{
      this.hayError = true;
    })
  }

  sugerencias(termino:string){
    this.hayError = false;
    //todo crear sugerencias
  }
}
