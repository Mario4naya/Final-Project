import { Component, OnInit } from '@angular/core';
import {persona_interface} from '../../modelos/persona.interface';
import {ApiPService} from '../../servicios/api_persona/api-p.service'
import { ApiTdService} from '../../servicios/api_tipoDocumento/api-td.service';
import { ApiCService} from '../../servicios/api_ciudad/api-c.service';
import { Ciudad_interface} from '../../modelos/ciudad.interface';
import { Td_interface} from '../../modelos/td.interface';
import {Router,ActivatedRoute} from '@angular/router';
import {AlertsService} from '../../servicios/toastr/alerts.service'
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {

  constructor(private router:Router,private api:ApiPService, private apic:ApiCService, private apiT:ApiTdService,private toast:AlertsService,private a:ActivatedRoute ) { }

  persona!: persona_interface;
  editForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    lastName:new FormControl(''),
    document:new FormControl(''),
    phone:new FormControl(''),
    user:new FormControl(''),
    password:new FormControl(''),
    email:new FormControl(''),
    birthDate: new FormControl(''),
    documentType:new FormControl(''),
    city:new FormControl('')
  });

  cities :Ciudad_interface[] = [];
  tipos :Td_interface[] = [];
  ngOnInit(): void {
    this.apic.getAllCities().subscribe(data=>{
      this.cities=data;
    });

    this.apiT.getAllTd().subscribe(data=>{
      this.tipos=data;
    });

    const id = this.a.snapshot.paramMap.get('id'); 
    this.api.getPById(id).subscribe(data=>{
      this.persona=data;
      this.editForm.setValue({
        id:this.persona.id,
        name: this.persona.name,
        lastName:this.persona.lastName,
        document:this.persona.document,
        phone:this.persona.phone,
        user:this.persona.user,
        password:this.persona.password,
        email:this.persona.email,
        birthDate: this.persona.birthDate,
        documentType:this.persona.documentType.id,
        city:this.persona.city.id
      });
    });
    console.log(this.editForm.value);
  }

  
actualizarPersona(form:persona_interface){

  this.persona = form;
    this.apic.getCityById(form.city).subscribe(res=>{
      this.persona.city=res;
    
      this.apiT.getTdById(form.documentType).subscribe(data=>{
        this.persona.documentType=data;
        this.persona.id=form.id;
        this.persona.name=form.name;
        this.persona.lastName=form.lastName;
        this.persona.document=form.document;
        this.persona.email=form.email;
        this.persona.phone=form.phone;
        this.persona.user=form.user;
        this.persona.password=form.password;
        this.persona.birthDate=form.birthDate;

      this.api.updateP(form).subscribe(data=>{
      const response:persona_interface = data;
      if(response!= null){
        this.toast.showSucces('La persona ' + response.name + ' fue editada exitosamente','Done');
        this.router.navigate(['listarPersonas']);
      }
      else{
        this.toast.showError("Se ha producido un error, la persona no se pudo editar","Error al editar");
           }
  });
  });
  });
}

goBack(){
  this.router.navigate(['listarPersonas']);
}

}




