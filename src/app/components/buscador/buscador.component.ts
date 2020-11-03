import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(private _productosService: ProductsService, private _rutaActiva: ActivatedRoute, private _ruta: Router) { }

  ArrayResultados: any = [];
  strTermino = '';

  ngOnInit(): void {
    this._rutaActiva.params.subscribe(params => {
      this.strTermino = params['termino'];
      this.ArrayResultados = this._productosService.buscarProducto(params['termino']);
    });
  }

  public Navegar(indice){
    this._ruta.navigate(['/producto',indice]);
  }

}
