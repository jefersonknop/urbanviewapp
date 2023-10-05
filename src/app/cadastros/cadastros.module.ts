import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//import { CadastroListComponent } from './cadastro-list/cadastro-list.component';
//import { CadastroDetailComponent } from './cadastro-detail/cadastro-detail.component';

//const cadastrosRoutes: Routes = [
//  { path: '', component: CadastroListComponent },
//  { path: ':id', component: CadastroDetailComponent }
//];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    //RouterModule.forChild(cadastrosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastrosModule { }
export class CadastrosRoutingModule { }