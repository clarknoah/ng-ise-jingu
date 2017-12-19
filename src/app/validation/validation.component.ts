import { Component, OnInit } from '@angular/core';
import {SingletonService} from '../service/singleton.service';
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  form:FormGroup;
  constructor(fb: FormBuilder, private singleton: SingletonService) {
    this.form = fb.group({
      regular_string:['', Validators.compose([Validators.required])],
      custom_string:['', Validators.compose([Validators.required,
        this.stringValidator
      ])],
      custom_number:['', Validators.compose([Validators.required,
        this.numberValidator
      ])]
    })

  }

  ngOnInit() {
  }

  stringValidator(field:FormControl): {[s:string]:boolean}{
    if(!field.value.match(/^cat/)){
      return {invalidField:true};
    }
  }

  numberValidator(field:FormControl): {[s:string]:boolean}{
    if(field.value !==42){
      return {invalidField:true};
    }
  }

}
