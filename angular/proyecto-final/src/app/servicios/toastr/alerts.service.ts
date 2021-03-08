import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private toastr:ToastrService) { }

  showSucces(text : string | undefined ,title: string | undefined){
    this.toastr.success(text,title);
  }
  showError(text : string | undefined ,title: string | undefined){
    this.toastr.error(text,title);
  }
}
