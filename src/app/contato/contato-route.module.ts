import { ContatoComponent } from './contato.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [

    {path: 'adicionar', component: ContatoComponent},
    {path: '', redirectTo: '/'},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ContatoRouteModule { }
