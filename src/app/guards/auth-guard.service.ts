import { AppSettings } from './../shared/AppSettings';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(private auth: LoginService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem(AppSettings.API_KEY)) {
      this.router.navigate(["/login", {queryParams: {redirect: state.url}}]);
      return false;
    }
    return true;
       
  }
}