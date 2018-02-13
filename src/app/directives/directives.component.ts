import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  ngIfShow: boolean = false;
  ngSwitchValue: string;
  nonBindingValue: string = "cat";
  ngForArray: string[] = ['noah','leah','hannah'];
  ngClass: string = 'bk-red';
  style: string = 'red';
  ngStyle: any = {
    'background-color': 'red'
  };

  constructor() { }

  ngOnInit() {
  }

}
