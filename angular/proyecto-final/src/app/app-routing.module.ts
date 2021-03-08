import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ListarCComponent } from './ciudad/listar-c/listar-c.component';
import { EditarCComponent } from './ciudad/editar-c/editar-c.component';
import { NuevaCComponent } from './ciudad/nueva-c/nueva-c.component';
import { ListarTdComponent } from './tipoDocumento/listar-td/listar-td.component';
import { NuevoTdComponent } from './tipoDocumento/nuevo-td/nuevo-td.component';
import { EditarTdComponent } from './tipoDocumento/editar-td/editar-td.component';
import {ListarPComponent} from './persona/listar-p/listar-p.component';
import {NuevaPComponent} from './persona/nueva-p/nueva-p.component';
import {EditarPComponent} from './persona/editar-p/editar-p.component';
const routes: Routes = [
{path: '', redirectTo: 'principal', pathMatch: 'full'},
{path: 'principal', component: HomeComponent},
{path: 'listarCiudades', component: ListarCComponent},
{path: 'nuevaCiudad', component: NuevaCComponent},
{path: 'editarCiudad/:id', component: EditarCComponent},
{path: 'listarDocumentos', component: ListarTdComponent},
{path: 'nuevoDocumento', component: NuevoTdComponent},
{path: 'editarDocumento/:id', component: EditarTdComponent},
{path: 'listarPersonas', component: ListarPComponent},
{path: 'nuevaPersona', component: NuevaPComponent},
{path: 'editarPersona/:id', component: EditarPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  ListarCComponent,
  NuevaCComponent,
  EditarCComponent,
  ListarTdComponent,
  NuevoTdComponent,
  EditarTdComponent,
  ListarPComponent,
  NuevaPComponent,
  EditarPComponent
];
