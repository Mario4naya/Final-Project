import { Component, OnInit } from '@angular/core';
import { ApiCService} from '../../servicios/api_ciudad/api-c.service';
import { Ciudad_interface} from '../../modelos/ciudad.interface';
import {Router} from '@angular/router';
import {AlertsService} from '../../servicios/toastr/alerts.service'
@Component({
  selector: 'app-listar-c',
  templateUrl: './listar-c.component.html',
  styleUrls: ['./listar-c.component.css']
})
export class ListarCComponent implements OnInit {
  cities:Ciudad_interface[]=[];
  constructor( private api:ApiCService,private router:Router,private toast:AlertsService) { }
  //este metodo siempre se ejecuta cuando el componente se carga o se llama
  ngOnInit(): void {
    this.api.getAllCities().subscribe(data=>{
      this.cities=data;
      console.log(this.cities);
    });
  }
  nuevaCiudad(){
    this.router.navigate([
      'nuevaCiudad'
    ]);
  }

  editarCiudad(id:any){
    this.router.navigate([
      'editarCiudad',
       id
    ]);
  }
  //es importante llamar ngOninit para refrescar los elementos, si no lo hacemos seguirá saliendo aunque se haya eliminado de la base
  eliminarCiudad(id:any){
    this.api.deleteCityById(id).subscribe(data=>{
      if (data){
        this.ngOnInit();
        this.toast.showSucces("City has been deleted successfully","Done")
      }
      else {
        this.toast.showError("Se ha producido un error, no es posible eliminar esta ciudad porque hay usuarios registrados en ella","Error en la eliminación");
      }
    });
  }




}
