import { AppSettings } from './../shared/AppSettings';
import { ContatosService } from './../shared/services/contatos.service';
import { Contato } from './../../models/Contato';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.scss']
})
export class ContatoListComponent implements OnInit {
  config: any
  contatos: Contato[] = []

  constructor(private cs: ContatosService) {
  }

  ngOnInit() {
    this.cs.getItems(AppSettings.ITEMS_PER_PAGE).subscribe(res => this.responseList(res));
  }

  responseList(res) {
    //verifica se os items da response já existem na lista de contatos
    res.content.map(item => {
      if(!this.contatos.some(i => i.id === item.id)){
        this.contatos.push(item);
      }
    });

    //altera a config a cada request
    this.config = {
      itemsPerPage: AppSettings.ITEMS_PER_PAGE,
      currentPage: res.number + 1,
      totalItems: this.contatos.length
    };
  }

  pageChanged(e: Event){
    this.config.currentPage = e;

    //faz a busca da nova pagina
    this.cs.getItems(AppSettings.ITEMS_PER_PAGE, Number.parseFloat(e.toString())).subscribe(res => this.responseList(res))
  }

}
