import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPerfilPageRoutingModule {}