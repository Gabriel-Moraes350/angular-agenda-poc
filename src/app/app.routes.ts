import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ContatoListComponent } from './components/contato-list/contato-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contato', loadChildren: './components/contato/contato.module#ContatoModule', 
    canActivate: [AuthGuardService]},
    {path: 'contato/lista', component: ContatoListComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}
