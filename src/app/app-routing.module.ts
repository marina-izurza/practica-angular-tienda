import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CategoriaComponent } from './tienda/categorias/categoria/categoria.component';
import { DetalleComponent } from './tienda/categorias/categoria/detalle/detalle.component';

const routes: Routes = [
  { path: '', component: TiendaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'categoria', component:  CategoriaComponent},
  { path: 'detalle', component:  DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
