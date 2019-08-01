import { InputTextComponent } from './../components/input-text/input-text.component';
import { InputRefDirective } from './../directives/input-ref.directive';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, AccordionModule, BsDatepickerModule, AlertModule, BsDropdownModule    } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaskModule, IConfig} from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ContatosService } from '../services/contatos.service';
defineLocale('pt-br', ptBrLocale);

let optionsMask: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  declarations: [
    HeaderComponent,
    InputRefDirective,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forRoot(optionsMask),
    ToastrModule.forRoot(),
  ],

  exports: [
    BsDropdownModule,
    ModalModule,
    BsDatepickerModule,
    AlertModule,
    AccordionModule,
    HeaderComponent,
    InputRefDirective,
    InputTextComponent,
    NgxMaskModule,
    ToastrModule
  ],
  providers: [
    ContatosService
  ]
})
export class SharedModule { }
