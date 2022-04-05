import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { Unidad1Component } from './components/unidades/unidad1/unidad1.component';
import { Unidad2Component } from './components/unidades/unidad2/unidad2.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    NavegacionComponent,
    ContenidoComponent,
    Unidad1Component,
    Unidad2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
