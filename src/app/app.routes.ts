import { ContatoComponent } from './contato/contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    {path: 'contato', component: ContatoComponent}
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