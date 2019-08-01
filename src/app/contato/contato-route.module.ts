import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/modules/shared.module';
import { ContatoComponent } from './contato.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [

    {path: 'adicionar', component: ContatoComponent},
    {path: '', redirectTo: 'adicionar', pathMatch: 'full'},
]

@NgModule({
  declarations:[ContatoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class ContatoRouteModule { }
