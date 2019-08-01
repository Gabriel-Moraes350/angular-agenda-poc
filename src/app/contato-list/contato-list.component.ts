import { ContatosService } from './../shared/services/contatos.service';
import { Contato } from './../../models/Contato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.scss']
})
export class ContatoListComponent implements OnInit {

  contatos: Contato[] = []

  constructor(private cs: ContatosService) { }

  ngOnInit() {
    this.cs.getItems().subscribe(items => this.contatos = items);
  }

}
