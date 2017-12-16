import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group({
      firstName:[''],
      lastName:[''],
      age:[],
      sex:[''],
      fEmail:[''],
      fDate:[],
      fBoolean:[],
      fColor:['']

    });
  }

  onSubmit(){
    console.log(this.form.controls);
  }

  logGroup(){
    console.log(this.form.controls);
  }
  ngOnInit() {
  }

}
