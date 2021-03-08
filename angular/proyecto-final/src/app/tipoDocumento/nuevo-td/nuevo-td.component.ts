import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Subscriber } from 'rxjs';
import { Td_interface } from '../../modelos/td.interface';
import {ApiTdService} from '../../servicios/api_tipoDocumento/api-td.service';

@Component({
  selector: 'app-nuevo-td',
  templateUrl: './nuevo-td.component.html',
  styleUrls: ['./nuevo-td.component.css']
})
export class NuevoTdComponent implements OnInit {
  document!: Td_interface;
  nuevoForm = new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl('')
  });
  constructor(private router:Router,private api:ApiTdService) { }

  ngOnInit(): void {
  }
  //el metodo se debe llamar igual acá que en el html

  newDocument(form:Td_interface){
    this.api.saveTd(form).subscribe(data=>{
      this.document = data;
      this.router.navigate(['listarDocumentos']);
    });
    }

    goBack(){
      this.router.navigate(['listarDocumentos']);
    }
}
