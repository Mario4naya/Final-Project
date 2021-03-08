import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {persona_interface} from '../../modelos/persona.interface';
import {AlertsService} from '../../servicios/toastr/alerts.service';
import { ApiPService } from '../../servicios/api_persona/api-p.service'
import { ApiTdService} from '../../servicios/api_tipoDocumento/api-td.service';
import { ApiCService} from '../../servicios/api_ciudad/api-c.service';

@Component({
  selector: 'app-listar-p',
  templateUrl: './listar-p.component.html',
  styleUrls: ['./listar-p.component.css']
})
export class ListarPComponent implements OnInit {
  personas: persona_interface[] = [];
  constructor(private api:ApiPService, private router:Router, private toast:AlertsService) { }

  ngOnInit(): void {
    this.api.getAllP().subscribe(data=>{
      this.personas=data;
    });
  }
   //creamos distintos botones en esta parte para llevar a diferentes rutas
  // entonces un metodo redirige a crear persona y otro a editar y eliminar pues elimina
  nuevaPersona(){
    this.router.navigate([
      'nuevaPersona'
    ]);
  }

  editarPersona(id:any){
    this.router.navigate([
      'editarPersona',
      id
    ]);
  }
//es importante llamar ngOninit para refrescar los elementos, si no lo hacemos seguirá saliendo aunque se haya eliminado de la base

eliminarPersona(id:any){
  this.api.deletePById(id).subscribe(data=>{
    if(data){
      this.ngOnInit();
      this.toast.showSucces("Person has been deleted successfully","done")
    }
    else{
      this.toast.showError("Se ha producido un error, no es posible eliminar esta persona","Error");
    }
  });
}
}
