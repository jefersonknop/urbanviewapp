import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoComponent } from '../view/estado/estado.component';
import { Routes, RouterModule } from '@angular/router';

const cidadeRoutes: Routes = [
  { path: '', component: EstadoComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cidadeRoutes)
  ]
})
export class EstadoModule { }
