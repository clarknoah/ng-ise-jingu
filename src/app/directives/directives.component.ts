import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  ifBoolean: boolean = false;
  forArray: string[] = ['noah','leah'];
  switchVariable: string;
  ngClass: string[];
  ngStyleFont: number = 10;
  constructor() { }

  ngOnInit() {
  }

}
