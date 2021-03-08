import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPComponent } from './persona/listar-p/listar-p.component';
import { EditarPComponent } from './persona/editar-p/editar-p.component';
import { NuevaPComponent } from './persona/nueva-p/nueva-p.component';
import { ListarCComponent } from './ciudad/listar-c/listar-c.component';
import { EditarCComponent } from './ciudad/editar-c/editar-c.component';
import { NuevaCComponent } from './ciudad/nueva-c/nueva-c.component';
import { ListarTdComponent } from './tipoDocumento/listar-td/listar-td.component';
import { EditarTdComponent } from './tipoDocumento/editar-td/editar-td.component';
import { NuevoTdComponent } from './tipoDocumento/nuevo-td/nuevo-td.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { HomeComponent } from './main/home/home.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
