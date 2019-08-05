import { ActivatedRoute } from '@angular/router';
import { ContatosService } from './../../services/contatos.service';
import { Contato } from './../../models/Contato';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DateValidator } from 'src/app/shared/validators/DateValidator';
import { unescapeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formGroup: FormGroup;
  btnDisabled = false;
  id:string = undefined;


  constructor(private fb: FormBuilder,
              private contatoService: ContatosService,
              private toastService: ToastrService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.constroiForm();
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id !== null){
      this.contatoService.getItem(Number.parseInt(this.id)).subscribe(c => this.updateForm(c));
    }
  }

  updateForm(contato: Contato){
    console.log(contato);
    this.formGroup.patchValue(contato);
  }

  constroiForm(){
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      id: [''],
      lastName: ['', Validators.required],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      birthDate: ['', { validators: [Validators.required, DateValidator], updateOn: 'blur'}]
    })
  }

  send(e: Event){
    e.preventDefault(); 
    this.btnDisabled = true;

    this.contatoService.send(new Contato(this.formGroup.value, Number.parseInt(this.id)))
    .subscribe(() => this.formSuccess(), (error) => this.formSendError(error));
  }

  formSuccess(){
    this.toastService.success("Contato criado com sucesso");
    this.formGroup.reset();
    this.btnDisabled = false
  }

  formSendError(error){
    console.error(error);
    this.toastService.error("Ocorreu um erro ao criar o contato");
    this.btnDisabled = false

  }

}
