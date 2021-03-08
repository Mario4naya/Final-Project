import { Component, OnInit } from '@angular/core';
import { ApiCService} from '../../servicios/api_ciudad/api-c.service';
import { Ciudad_interface} from '../../modelos/ciudad.interface';
import {Router,ActivatedRoute} from '@angular/router';
import {AlertsService} from '../../servicios/toastr/alerts.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-editar-c',
  templateUrl: './editar-c.component.html',
  styleUrls: ['./editar-c.component.css']
})
export class EditarCComponent implements OnInit {

  constructor(private api:ApiCService,private router:Router,private toast:AlertsService,private a:ActivatedRoute) { }
  city!:Ciudad_interface;
  editarForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  });

  ngOnInit(): void {
    const id = this.a.snapshot.paramMap.get('id');
    this.api.getCityById(id).subscribe(data=>{
      this.city=data;
      this.editarForm.setValue({
        id: this.city.id,
        name:this.city.name,
        description: this.city.description
      });
      console.log(this.editarForm.value)

    });
  }

  actualizarCiudad(form:Ciudad_interface){
    this.api.updateCity(form).subscribe(data=>{
      const response:Ciudad_interface = data;
      if(response!= null){
        this.toast.showSucces('La ciudad ' + response.name + ' fue editada exitosamente','Done');
        this.router.navigate(['listarCiudades']);
      }
      else{
        this.toast.showError("Se ha producido un error, la ciudad no se pudo editar","Error al editar");
      }
    });
  }

  getBack(){
    this.router.navigate(['listarCiudades']);
  }

}
