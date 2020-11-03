import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productosService: ProductsService, private _ruta: Router) { }

  ArrayProductos: object = {};

  ngOnInit(): void {
    this.ArrayProductos = this._productosService.muestra();
  }

  public Navegar(indice){
    this._ruta.navigate(['/producto',indice]);
  }

}
