import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiCService} from '../../servicios/api_ciudad/api-c.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Ciudad_interface } from 'src/app/modelos/ciudad.interface';


@Component({
  selector: 'app-nueva-c',
  templateUrl: './nueva-c.component.html',
  styleUrls: ['./nueva-c.component.css']
})
export class NuevaCComponent implements OnInit {

  city!:Ciudad_interface;
  nuevoForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  });

  constructor(private router:Router,private api:ApiCService) { }

  ngOnInit(): void {

  }
  //el metodo se debe llamar igual acá que en el html
  newCity(form:Ciudad_interface){
    this.api.saveCity(form).subscribe(data=>{
      this.city=data;
      this.router.navigate(['listarCiudades']);
    })
  }

  goBack(){
    this.router.navigate(['listarCiudades']);
  }

}
