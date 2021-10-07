import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/navBar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumnos/alumno/alumno.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBarComponent,
    AlumnosComponent,
    AlumnoComponent,
    BindingComponent,
    NgIfComponent
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
