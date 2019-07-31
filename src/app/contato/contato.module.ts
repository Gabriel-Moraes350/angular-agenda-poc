import { ContatoRouteModule } from './contato-route.module';
import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    ContatoRouteModule
  ],
  providers: [],
})
export class ContatoModule { }
