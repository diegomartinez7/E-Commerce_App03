import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  constructor(private _productosService: ProductsService, private _ruta: Router) { }

  ArrayProductos: object = {};

  ngOnInit(): void {
    this.ArrayProductos = this._productosService.getProductos("SmartPhones");
  }

  public Navegar(indice){
    this._ruta.navigate(['/producto',indice]);
  }

}
