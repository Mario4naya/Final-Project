import { Component, OnInit } from '@angular/core';
import { ApiTdService } from '../../servicios/api_tipoDocumento/api-td.service';
import { Td_interface} from '../../modelos/td.interface';
import { Router} from '@angular/router';
import {AlertsService} from '../../servicios/toastr/alerts.service';

@Component({
  selector: 'app-listar-td',
  templateUrl: './listar-td.component.html',
  styleUrls: ['./listar-td.component.css']
})
export class ListarTdComponent implements OnInit {
  documents: Td_interface[] = [];
  constructor( private api:ApiTdService, private router:Router, private toast:AlertsService) { }
 //este metodo siempre se ejecuta cuando el componente se carga o se llama
  ngOnInit(): void {
    this.api.getAllTd().subscribe(data=>{
      this.documents=data;
    });
  }
  
  //creamos distintos botones en esta parte para llevar a diferentes rutas
  // entonces un metodo redirige a crear tipo documento y otro a editar y otro a eliminar

  nuevoDocumento(){
    this.router.navigate([
      'nuevoDocumento'
    ]);
  }

  editarDocumento(id:any){
    this.router.navigate([
      'editarDocumento',
      id
    ]);
  }
  //es importante llamar ngOninit para refrescar los elementos, si no lo hacemos seguirá saliendo aunque se haya eliminado de la base

  eliminarDocumento(id:any){
    this.api.deleteTdById(id).subscribe(data=>{
      if(data){
        this.ngOnInit();
        this.toast.showSucces("City has been deleted successfully","done")
      }
      else{
        this.toast.showError("Se ha producido un error, no es posible eliminar esta documento porque hay usuarios usandolo","Error");
      }
    });
  }
}
