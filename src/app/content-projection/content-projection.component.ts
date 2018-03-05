import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PopupDirective } from './popup.directive';

@Component({
  selector: 'content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  popTitle1: string = 'Test 1';
  @ViewChild('popper1') popper: PopupDirective;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.popper.displayMessage();
  }

}
