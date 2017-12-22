import { Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
  initialArray: string[];
  finalArray: string[];
  io1: string[];
  io1Ready:boolean;
  io2Ready:boolean;
  io2: string[];
  constructor() {
    this.io1Ready = false;
    this.io2Ready = false;
  }

  ngOnInit() {
    this.initialArray = [
      'Noah'
    ];
    console.log(this.initialArray);
  }

  setBoolean(key){
    this[key] = true;
  }

  getIo1(event){
    console.log(event);
    console.log(this.io1);
    this.io1 = _.cloneDeep(event);
  //  this.setBoolean('io1Ready');
    //this.io1Ready = true;
  }

  getIo2(event){
    this.finalArray = event;
  //  this.setBoolean('io2Ready');
  }

}
