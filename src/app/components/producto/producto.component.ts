import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  Product: object = {};

  constructor(private _rutaActiva: ActivatedRoute, private _productosService: ProductsService) { 
    this._rutaActiva.params.subscribe(param => {
      this.Product = this._productosService.getProducto(param['id']);
    })
  }

  ngOnInit(): void {
  }

  public mesesSinIntereses(){
    return this.Product['msi'];
  }
}
