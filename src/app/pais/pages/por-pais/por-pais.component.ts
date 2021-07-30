import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {
  termino:string=''
  constructor(private paisservice:PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.paisservice.buscarPais(this.termino)
    .subscribe((data)=>{
      console.log(data)
    })
  }


}
