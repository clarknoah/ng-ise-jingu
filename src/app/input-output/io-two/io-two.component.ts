import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'io-two',
  templateUrl: './io-two.component.html',
  styleUrls: ['./io-two.component.css']
})
export class IoTwoComponent implements OnInit {
  @Input() input_array: string[];
  @Output() return_array =  new EventEmitter();
  local_array: string[];
  constructor() { }

  ngOnInit() {
    console.log(this.local_array);
    this.local_array = _.cloneDeep(this.input_array);
    this.local_array.push('Jack');
    this.return_array.emit(this.local_array);
  }

}
