import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuadernoComponent } from './components/cuaderno/cuaderno.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';
import { LibrosComponent } from './components/libros/libros.component';
import { ContenidosComponent } from './components/contenidos/contenidos.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadernoComponent,
    PersonalizacionComponent,
    LibrosComponent,
    ContenidosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
