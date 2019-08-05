import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastrConfig : Partial<IndividualConfig> = {
    positionClass: 'toast-bottom-center',
  }

  constructor(private toastr: ToastrService) { }

  public error(message, callback = undefined){
    this.clear();
    this.toastr.error(message, 'Erro', this.toastrConfig);
    if(callback){
      setTimeout(() => {
        this.clear();
        callback();
      }, 1500);
    }
  }

  public success(message, callback = undefined){
    this.clear();
    this.toastr.success(message, 'Sucesso', this.toastrConfig);
    if(callback){
      setTimeout(() => {
        this.clear()
        callback()
      }, 200);
    }
  }

  public clear(){
    this.toastr.clear();
  }
}
