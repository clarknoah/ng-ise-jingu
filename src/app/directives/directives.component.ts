import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  ngStyleColor = {color:'blue'};
  constructor() { }

  ngOnInit() {
  }

}
