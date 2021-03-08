import { Component, OnInit } from '@angular/core';
import { ApiTdService} from '../../servicios/api_tipoDocumento/api-td.service';
import { Td_interface } from '../../modelos/td.interface';
import {Router,ActivatedRoute} from '@angular/router';
import {AlertsService} from '../../servicios/toastr/alerts.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-td',
  templateUrl: './editar-td.component.html',
  styleUrls: ['./editar-td.component.css']
})
export class EditarTdComponent implements OnInit {

  constructor(private api:ApiTdService,private router:Router,private toast:AlertsService,private a:ActivatedRoute) { }
  td!:Td_interface;
  editarForm = new FormGroup({
    id: new FormControl(''),
    name:new FormControl(''),
    description: new FormControl('')
  });
  ngOnInit(): void {
    const id = this.a.snapshot.paramMap.get('id');
    this.api.getTdById(id).subscribe(data=>{
      this.td = data;
      this.editarForm.setValue({
        id: this.td.id,
        name: this.td.name,
        description: this.td.description 
      });

    });
  }

  actualizarTd(form:Td_interface){
    this.api.updateTd(form).subscribe(data=>{
      const response:Td_interface = data;
      if(response != null){
        this.toast.showSucces('El Tipo de documento' + response.name + ' fue editado correctamente','Done');
        this.router.navigate(['listarDocumentos']);
      }
      else{
        this.toast.showError("Se ha producido un error, el tipo de documento no se pudo modificar","Error al editar")
      }
    });
  }

  goBack(){
    this.router.navigate(['listarDocumentos']);
  }


}
