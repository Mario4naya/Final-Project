import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {persona_interface} from '../../modelos/persona.interface';
import {ApiPService} from '../../servicios/api_persona/api-p.service'
import { ApiTdService} from '../../servicios/api_tipoDocumento/api-td.service';
import { ApiCService} from '../../servicios/api_ciudad/api-c.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Ciudad_interface} from '../../modelos/ciudad.interface';
import { Td_interface} from '../../modelos/td.interface';
@Component({
  selector: 'app-nueva-p',
  templateUrl: './nueva-p.component.html',
  styleUrls: ['./nueva-p.component.css']
})
export class NuevaPComponent implements OnInit {
  persona!: persona_interface;
  nuevoForm = new FormGroup({
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
  constructor(private router:Router,private api:ApiPService, private apic:ApiCService, private apiT:ApiTdService) { }

  ngOnInit(): void {
    this.apic.getAllCities().subscribe(data=>{
      this.cities=data;
    });

    this.apiT.getAllTd().subscribe(data=>{
      this.tipos=data;
    });

  }


  //el metodo se debe llamar igual acá que en el html, debemos obtener apartir del id un objeto ciudadinterface y un objeto tdinterface
  newPerson(form:persona_interface){
    this.persona = form;
    this.apic.getCityById(form.city).subscribe(res=>{
      this.persona.city=res;

      this.apiT.getTdById(form.documentType).subscribe(data=>{
        this.persona.documentType=data;
        console.log(this.persona.documentType);
        this.persona.id=form.id;
        this.persona.name=form.name;
        this.persona.lastName=form.lastName;
        this.persona.document=form.document;
        this.persona.email=form.email;
        this.persona.phone=form.phone;
        this.persona.user=form.user;
        this.persona.password=form.password;
        this.persona.birthDate=form.birthDate;
        console.log(this.persona);
        this.api.saveP(this.persona).subscribe(
          ()=>{this.router.navigate(['listarPersonas']);}
        );

      });

    });
    

      
    
  
  }

  goBack(){
    this.router.navigate(['listarPersonas']);
  }
  

}
