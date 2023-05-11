import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import localES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localES);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselComponent } from './tienda/carousel/carousel.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BannersComponent } from './tienda/banners/banners.component';
import { CategoriasComponent } from './tienda/categorias/categorias.component';
import { ListaArticulosComponent } from './tienda/articulo/lista-articulos/lista-articulos.component';
import { CardArticuloComponent } from './tienda/articulo/card-articulo/card-articulo.component';
import { FichaArticuloComponent } from './tienda/articulo/ficha-articulo/ficha-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    NosotrosComponent,
    TiendaComponent,
    BannersComponent,
    CategoriasComponent,
    ListaArticulosComponent,
    CardArticuloComponent,
    FichaArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'es-ES' },
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
