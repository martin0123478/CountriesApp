import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino:string='';
  hayError : boolean = false;
  constructor(private paisservice:PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.hayError=false;
    this.paisservice.buscarPais(this.termino)
    .subscribe((data)=>{
      
      console.log(data)
    },(err)=>{
      this.hayError = true;
    })
  }


}
