import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ListaArticulosComponent } from './tienda/articulo/lista-articulos/lista-articulos.component';
import { FichaArticuloComponent } from './tienda/articulo/ficha-articulo/ficha-articulo.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'categoria/:idCategoria', component:  ListaArticulosComponent},
  { path: 'articulo-ficha/:idArticulo', component:  FichaArticuloComponent} //categoria/:idCategoria/articulo/:idArticulo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
