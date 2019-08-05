import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {

  constructor(private auth: LoginService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const ok = !!this.auth.token;
    if (!ok) {
      this.auth.setRoute(state.url);
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
       
  }
}