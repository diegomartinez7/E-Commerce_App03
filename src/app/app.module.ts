import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { LineaComponent } from './components/linea/linea.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    DepartamentoComponent,
    SmartphonesComponent,
    FotografiaComponent,
    LineaComponent,
    ProductoComponent,
    BuscadorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'departamentos', component: DepartamentoComponent},
      {path: 'smartphones', component: SmartphonesComponent},
      {path: 'fotografia', component: FotografiaComponent},
      {path: 'linea_blanca', component: LineaComponent},
      {path: 'producto/:id', component: ProductoComponent},
      {path: 'resultados/:termino', component: BuscadorComponent},
      {path: 'acerca_de_nosotros', component: AboutComponent},
      {path: '**', component: NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
