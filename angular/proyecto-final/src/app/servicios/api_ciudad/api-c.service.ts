import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Ciudad_interface} from '../../modelos/ciudad.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiCService {
  url = 'http://localhost:9191/';
  constructor(private http:HttpClient) { }

  //dentro del observable va el tipo de de dato que obtenemos
  getAllCities(): Observable<Ciudad_interface[]> {
    //estas direcciones van con las rutas del api
    const direccion = this.url + "Ciudad/all";
    return this.http.get<Ciudad_interface[]>(direccion);
  }

  getCityById(id:any):Observable<Ciudad_interface>
  {
    const direccion= this.url + "Ciudad/porId/"+ id;
    return this.http.get<Ciudad_interface>(direccion);
  }

  updateCity(city:Ciudad_interface):Observable<Ciudad_interface>
  {
    const direccion = this.url + "Ciudad/actualizar/";
    return this.http.put<Ciudad_interface>(direccion,city);
  }
  saveCity(city:Ciudad_interface):Observable<Ciudad_interface>
  {
    const direccion = this.url + "Ciudad/guardar/";
    return this.http.post<Ciudad_interface>(direccion,city);
  }

  deleteCityById(id:any):Observable<boolean>
  {
    const direccion = this.url + "Ciudad/eliminar/"+id;
    return this.http.delete<boolean>(direccion);
  }

}

