import { Component, OnInit } from '@angular/core';
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
  io2: string[];
  constructor() {

  }

  ngOnInit() {
    this.initialArray = [
      'Noah'
    ];
    console.log(this.initialArray);
  }

  getIo1(event){
    console.log(event);
    this.io1 = _.cloneDeep(event);
  }

  getIo2(event){
    this.finalArray = event;
  }

}
