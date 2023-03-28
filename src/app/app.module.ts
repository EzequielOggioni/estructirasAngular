import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { AdivinaNumeroComponent } from './componentes/adivina-numero/adivina-numero.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    EstructurasComponent,
    AdivinaNumeroComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
