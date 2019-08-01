import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { contatoRoutes } from './contato-route';


@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contatoRoutes),
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class ContatoModule { }
