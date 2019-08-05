import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private toast: ToastService) { }

  ngOnInit() {
    this.loginService.setToken(undefined);
    this.toast.success("Logout realizado com sucesso", () => this.router.navigateByUrl("/"));
  }

}
