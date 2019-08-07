import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  private enderecoGroup:FormGroup

  @Output()
  private formReady : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  @Input()
  private tipo: string = '';
  
  constructor(private fb:FormBuilder) { 
    this.enderecoGroup = this.fb.group({
      cep: [''],
      rua: [''],
      numero: [''],
      cidade: [''],
      uf: [''],
      bairro:  [''],
      complemento:  [''],
      tipoEndereco: [{value: '', disabled: true}]
    });
  }

  ngOnInit() {
   this.formReady.emit(this.enderecoGroup);
   this.enderecoGroup.patchValue({tipoEndereco: this.tipo})
  }


}
