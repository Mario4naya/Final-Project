import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Td_interface} from '../../modelos/td.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiTdService {
  url = 'http://localhost:9191/';
  constructor(private http:HttpClient) { }

  getAllTd(): Observable<Td_interface[]>{
    const direccion = this.url + "Td/all";
    return this.http.get<Td_interface[]>(direccion);
  }

  getTdById(id:any):Observable<Td_interface>{
    const direccion = this.url + "Td/porID/"+id;
    return this.http.get<Td_interface>(direccion);
  }

  updateTd(td:Td_interface):Observable<Td_interface>
  {
    const direccion = this.url + "Td/actualizar";
    return this.http.put<Td_interface>(direccion,td);
  }

  saveTd(td:Td_interface):Observable<Td_interface>{
    const direccion = this.url + "Td/guardar";
    return this.http.post<Td_interface>(direccion,td);
  }


  deleteTdById(id:any):Observable<boolean>{
    const direccion = this.url +"Td/eliminar/"+id;
    return this.http.delete<boolean>(direccion);
  }

}
