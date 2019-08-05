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
import { ReactiveFormsModule } from '@angular/forms';
defineLocale('pt-br', ptBrLocale);
import { NgxUiLoaderModule, NgxUiLoaderConfig } from  'ngx-ui-loader';


let optionsMask: Partial<IConfig> | (() => Partial<IConfig>);
let optionsLoader : NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 4,
  "delay": 0,
  "fgsColor": "red",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 250
}
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
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(optionsMask),
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    NgxUiLoaderModule.forRoot(optionsLoader)
  ],

  exports: [
    ReactiveFormsModule,
    BsDropdownModule,
    ModalModule,
    BsDatepickerModule,
    AlertModule,
    AccordionModule,
    HeaderComponent,
    InputRefDirective,
    InputTextComponent,
    NgxMaskModule,
    ToastrModule,
    NgxUiLoaderModule
  ]
})
export class SharedModule { }
