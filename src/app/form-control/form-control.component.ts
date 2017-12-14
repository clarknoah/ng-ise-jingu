import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  formField: FormControl;
  constructor() {
    this.formField = new FormControl;
  }

  ngOnInit() {
  }

}
