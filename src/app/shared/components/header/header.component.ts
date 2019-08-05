import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isLogged: boolean = false
  public constructor(private service: LoginService){
    this.service.isLogged.subscribe(res => this.isLogged = res);
  }
  

}
