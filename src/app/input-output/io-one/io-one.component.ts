import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'io-one',
  templateUrl: './io-one.component.html',
  styleUrls: ['./io-one.component.css']
})
export class IoOneComponent implements OnInit {

  @Input() ioInput: string;

  @Output() ioOutput: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.reverseValue(this.ioInput));
    this.ioOutput.emit(this.reverseValue(this.ioInput));
  }

  reverseValue(variable){
    return variable.split("").reverse().join("");
  }

  reverseString(){
    var ioStr = this.reverseValue(this.ioInput);
    this.ioOutput.emit(ioStr);
  }

}
