import { Routes } from '@angular/router';
import { ContatoComponent } from './contato.component';


export const contatoRoutes: Routes = [

    {path: 'adicionar', component: ContatoComponent},
    {path: '', redirectTo: 'adicionar', pathMatch: 'full'},
]

