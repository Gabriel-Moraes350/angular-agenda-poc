import { catchError } from 'rxjs/internal/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from './../../services/toast.service';
import { LoginService } from './../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  redirectRoute: string
  constructor(private fb: FormBuilder,
              private service: LoginService,
              private toast: ToastService,
              private route: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.constroiForm()
    this.redirectRoute = this.activeRoute.snapshot.paramMap.get('redirect')
  }

  constroiForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    },
    {
      updateOn: 'change'
    })
  }

  login(e: Event){
    e.preventDefault();
    const {email, password} = this.loginForm.value;
    this.service.login(email, password)
    .subscribe(res => {
      //seta novo token
      this.service.setToken(res.token);
      
      //redireciona
      this.toast.success("Login realizado com sucesso",
      () => this.route.navigateByUrl(`/${this.redirectRoute}`));
    }, err => {
      this.toast.error("Senha ou Usuário inválidos! Tente novamente!");
    });

  }

}
