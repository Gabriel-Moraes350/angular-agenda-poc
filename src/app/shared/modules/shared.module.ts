import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, AccordionModule, BsDatepickerModule, AlertModule, BsDropdownModule    } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule
  ],

  exports: [
    BsDropdownModule,
    ModalModule,
    BsDatepickerModule,
    AlertModule,
    AccordionModule,
    HeaderComponent
  ]
})
export class SharedModule { }
