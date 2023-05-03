import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CategoriaComponent } from './tienda/categoria/categoria.component';
import { ArticuloComponent } from './tienda/articulo/articulo.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'categoria/:idCategoria', component:  CategoriaComponent},
  { path: 'articulo/:idArticulo', component:  ArticuloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
