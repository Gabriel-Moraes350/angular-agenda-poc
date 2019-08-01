import { InputRefDirective } from './../../directives/input-ref.directive';
import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
})
export class InputTextComponent implements OnInit{
    @Input() label: string = undefined;
    @Input() validations:  { [index: string]: string} = {};
    @Input() info: string;

    @ContentChild(InputRefDirective, {static: true}) input: InputRefDirective;
   
    get isError() {
      return this.input.hasError;
    }
   
     get errorMessages() {
      const errors = this.input.errors;
      const messages = []; 
      const keys = Object.keys(this.validations);
   
      keys.forEach(key => {
          if (errors[key]) {
            messages.push(this.validations[key]);
          }
        });

      if(keys.length === 0  && errors['required'])
        messages.push("Campo Obrigatório");

      return messages;
    }
   
    ngOnInit() {}
   
    constructor() { }

}
