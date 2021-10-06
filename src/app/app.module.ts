import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/navBar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumnos/alumno/alumno.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    AlumnosComponent,
    AlumnoComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
