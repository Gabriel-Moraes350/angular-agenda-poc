import { ContatosService } from './../shared/services/contatos.service';
import { Contato } from './../../models/Contato';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private localService: BsLocaleService,
              private contatoService: ContatosService,
              private toastr: ToastrService) {
    this.constroiForm();
    this.localService.use('pt-br');
   }

  ngOnInit() {
  }

  constroiForm(){
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      birthDate: ['', Validators.required]
    })
  }

  send(e: Event){
    e.preventDefault();
    this.contatoService.send(new Contato(this.formGroup.value))
    .subscribe(() => this.toastr.show("Contato criado com sucesso", "Sucesso"));
  }

}
