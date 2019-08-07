import { ActivatedRoute } from '@angular/router';
import { ContatosService } from './../../services/contatos.service';
import { Contato } from './../../models/Contato';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DateValidator } from 'src/app/shared/validators/DateValidator';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  formGroup: FormGroup;
  phoneGroup: FormGroup;
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

  constroiForm(){
    this.phoneGroup = this.fb.group({
      celular: ['', Validators.required],
      residencial: ['']
    })

    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      id: [''],
      lastName: ['', Validators.required],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      birthDate: ['', { validators: [Validators.required, DateValidator], updateOn: 'blur'}],
      enderecos: this.fb.array([]),
      phoneGroup: this.phoneGroup
    })
  }

  send(e: Event) : void{
    e.preventDefault(); 
    this.btnDisabled = true;

    this.contatoService.send(new Contato(this.formGroup.value, Number.parseInt(this.id)))
    .subscribe(() => this.formSuccess(), (error) => this.formSendError(error));
  }

  updateForm(contato: Contato) : void{
    this.phoneGroup.patchValue({
      celular: contato.phones[0],
      residencial: contato.phones[1]
    });
    
    this.formGroup.patchValue(contato);
  }

  addEnderecoForm(fg: FormGroup): void{
    const enderecosArray = this.formGroup.get('enderecos') as FormArray;
    enderecosArray.push(fg);
  }

  private formSuccess(){
    this.toastService.success("Contato criado com sucesso");
    this.formGroup.reset();
    this.btnDisabled = false
  }

  private formSendError(error){
    this.toastService.error("Ocorreu um erro ao criar o contato");
    this.btnDisabled = false

  }

}
