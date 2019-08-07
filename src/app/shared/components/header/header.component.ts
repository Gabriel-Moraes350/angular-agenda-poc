import { Observable } from 'rxjs';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
  public constructor(private service: LoginService){
    
  }
  

}
