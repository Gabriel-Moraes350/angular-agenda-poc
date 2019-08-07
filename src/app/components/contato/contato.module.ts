import { EnderecoComponent } from './../endereco/endereco.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato.component';
import { CommonModule } from '@angular/common';
import { contatoRoutes } from './contato.route';
import { SharedModule } from 'src/app/shared/modules/shared.module';


@NgModule({
  declarations: [ContatoComponent, EnderecoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contatoRoutes),
    SharedModule,
  ],
  exports: [
    RouterModule
  ],
  providers:[
    
  ]
})
export class ContatoModule { }
