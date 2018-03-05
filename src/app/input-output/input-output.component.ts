import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  io1Input: string;
  io2Input: string;

  io1Result: string;
  io2Result: string;

  io1Output: string;
  io2Output: string;

  constructor() {
    this.io1Input = "Noah Clark";
    this.io2Input = "Leah Clark";

   }

  ngOnInit() {
  }

  io1Out(event){
    console.log(event);
    this.io1Result = event;


  }

  io2Out(event){
    this.io2Result = event;
  }

}
