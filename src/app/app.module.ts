import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EstadoComponent } from './view/estado/estado.component';
import { EstadoService } from './model/estado.service';
import { CidadeComponent } from './view/cidade/cidade.component';
import { CidadeService } from './model/cidade.service';
import { HomePage } from './home/home.page';
import { EstadoCreateComponent } from './view/estado-create/estado-create.component';
import { FormsModule } from '@angular/forms';
import { CidadeCreateComponent } from './view/cidade-create/cidade-create.component';



@NgModule({
  declarations: [AppComponent, 
                EstadoComponent, 
                CidadeComponent, 
                HomePage,
                EstadoCreateComponent,
                CidadeCreateComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
             HttpClientModule, 
            FormsModule],//viabiliza DataBind
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
              EstadoService,
              CidadeService
             ] ,
  bootstrap: [AppComponent],
})
export class AppModule {}
