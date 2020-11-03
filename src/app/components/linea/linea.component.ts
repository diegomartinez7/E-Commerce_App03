import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {

  constructor(private _productosService: ProductsService, private _ruta: Router) { }

  ArrayProductos: object = {};

  ngOnInit(): void {
    this.ArrayProductos = this._productosService.getProductos("Línea Blanca");
  }

  public Navegar(indice){
    this._ruta.navigate(['/producto',indice]);
  }

}
