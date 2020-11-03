import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  constructor(private _productosService: ProductsService, private _ruta: Router) { }

  ArrayProductos: object = {};

  ngOnInit(): void {
    this.ArrayProductos = this._productosService.getProductos("Fotografía");
  }

  public Navegar(indice){
    this._ruta.navigate(['/producto',indice]);
  }

}
