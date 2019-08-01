import { ContatoListComponent } from './contato-list/contato-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contato', loadChildren: './contato/contato.module#ContatoModule'},
    {path: 'contato/lista', component: ContatoListComponent},
    {path: 'home', component: HomeComponent}
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
