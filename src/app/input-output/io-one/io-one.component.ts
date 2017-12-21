import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'io-one',
  templateUrl: './io-one.component.html',
  styleUrls: ['./io-one.component.css']
})
export class IoOneComponent implements OnInit {
  @Input() input_array: string[];
  @Output() return_array =  new EventEmitter();
  local_array: string[];
  constructor() { }

  ngOnInit() {
    this.local_array = _.cloneDeep(this.input_array);
    this.local_array.push('Leah');
    this.return_array.emit(_.cloneDeep(this.local_array));
  }

}
