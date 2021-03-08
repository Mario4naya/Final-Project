import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {persona_interface} from '../../modelos/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPService {
  url = 'http://localhost:9191/Persona/';
  constructor(private http:HttpClient) { }

  getAllP(): Observable<persona_interface[]>{
    const direccion = this.url + "all";
    return this.http.get<persona_interface[]>(direccion);
  }
  
  getPById(id:any):Observable<persona_interface>{
    const direccion = this.url + "porId/"+id;
    return this.http.get<persona_interface>(direccion);
  }
  
  updateP(person:persona_interface):Observable<persona_interface>
  {
    const direccion = this.url + "actualizar/";
    return this.http.put<persona_interface>(direccion,person);
  }
  
  saveP(person:persona_interface):Observable<persona_interface>{
    const direccion = this.url + "guardar/";
    return this.http.post<persona_interface>(direccion,person);
  }
  
  deletePById(id:any):Observable<boolean>{
    const direccion = this.url +"eliminar/"+id;
    return this.http.delete<boolean>(direccion);
  }
  getFirstByCiudad(id:any):Observable<persona_interface>{
    const direccion = this.url + "porciudad/" + id;
    return this.http.get<persona_interface>(direccion);
  }
  getFirstByTd(id:any):Observable<persona_interface>{
    const direccion = this.url + "portd/" + id;
    return this.http.get<persona_interface>(direccion);
  }

}




