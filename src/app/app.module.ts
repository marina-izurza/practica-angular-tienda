import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarouselComponent } from './tienda/carousel/carousel.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BannersComponent } from './tienda/banners/banners.component';
import { CategoriasComponent } from './tienda/categorias/categorias.component';
import { CategoriaComponent } from './tienda/categoria/categoria.component';
import { ArticuloComponent } from './tienda/articulo/articulo.component';

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
    CategoriaComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe,
    UpperCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
