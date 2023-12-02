import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EstadoComponent } from './view/estado/estado.component';
import { CidadeComponent } from './view/cidade/cidade.component';
import { HomePage } from './home/home.page';
import { EstadoCreateComponent } from './view/estado-create/estado-create.component';
import { CidadeCreateComponent } from './view/cidade-create/cidade-create.component';

const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'estados', component: EstadoComponent},
  {path: 'cidades', component: CidadeComponent},
  { path: 'estado_create', component: EstadoCreateComponent },
   {path: 'cidade_create', component: CidadeCreateComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
