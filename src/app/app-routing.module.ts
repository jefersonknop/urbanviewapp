import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CidadeComponent } from 'src/app/view/cidade/cidade.component'; // Importe o componente da página de cidades
import { EstadoComponent } from 'src/app/view/estado/estado.component'; // Importe o componente da página de cidades

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cidade',
    component: CidadeComponent // Adicione a rota para "cidades" com o componente correspondente
  },
  {
    path: 'estado',
    component: EstadoComponent // Adicione a rota para "cidades" com o componente correspondente
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
