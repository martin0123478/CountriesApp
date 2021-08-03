import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import {Country} from '../../interfaces/pais.interface'
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino:string='';
  hayError : boolean = false;
  pais : Country[] = []
  constructor(private paisservice:PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError=false;
    this.paisservice.buscarPais(this.termino)
    .subscribe((data)=>{
      
      console.log(data)
      this.pais = data;
    },(err)=>{
      this.hayError = true;
    })
  }


}
