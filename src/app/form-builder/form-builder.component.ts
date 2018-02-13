import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  FormControl } from '@angular/forms';
@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  iseForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.iseForm = fb.group({
      email:[],
      age:[],
      boolean:[],
      birth:[]
    });
  }

  ngOnInit() {

  }

}
