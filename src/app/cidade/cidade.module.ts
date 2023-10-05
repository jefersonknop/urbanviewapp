import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CidadeComponent } from '../view/cidade/cidade.component';
import { Routes, RouterModule } from '@angular/router';

const cidadeRoutes: Routes = [
  { path: '', component: CidadeComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cidadeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CidadeModule { }
