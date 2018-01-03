import { Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked} from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  incrementor: number;
  showIncrementer: boolean;
    private numVal: number = 0;
  constructor() {
    this.incrementor = 0;
    this.showIncrementer = true;
  }

  toggleIncrementer(){
    this.showIncrementer = !this.showIncrementer;
  }

  increment(){
    this.numVal ++;
    console.log('Parent Component Initiated Change Detection');
  }

  ngOnInit() {
    console.log("Lifecycle Component NgInit has been run !");

  }

}
