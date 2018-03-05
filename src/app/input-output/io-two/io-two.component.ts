import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'io-two',
  templateUrl: './io-two.component.html',
  styleUrls: ['./io-two.component.css']
})
export class IoTwoComponent implements OnInit {

    @Input() ioInput: string;

    @Output() ioOutput: EventEmitter<string>;


    constructor() { }

    ngOnInit() {
      this.ioOutput.emit(this.reverseValue(this.ioInput));
    }

    reverseValue(variable){
      return variable.split("").reverse().join("")
    }

  }
