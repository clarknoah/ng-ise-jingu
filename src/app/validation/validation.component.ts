import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  stringInput: FormControl = new FormControl(null,Validators.compose([Validators.required]));
  customStringInput:FormControl;
  customNumberInput: FormControl;
  constructor() {
    this.customStringInput = new FormControl('',Validators.compose([
      Validators.required, this.customStringValidation
    ]));

    this.customNumberInput = new FormControl(null,Validators.compose([
      Validators.required, this.customNumberValidation
    ]))
  }

  ngOnInit() {
  }

  customStringValidation(field:FormControl):{[s: string]:boolean}{
      var strVal: string;
      strVal = field.value;
      console.log(field.value);
      if(!strVal.match(/^cat/)){
        return {invalidField: true};
      }
  }

  customNumberValidation(field:FormControl):{[s: string]:boolean}{
      if(field.value < 10){
        return {invalidField: true};
      }
  }

}
