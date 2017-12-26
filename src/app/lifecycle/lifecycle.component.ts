import { Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input} from '@angular/core';

@Component({
  selector: 'lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges {

  incrementer: number = 0;
  constructor() {
    console.log("Constructor has been run");
    console.log(`Incrementer Value(Construct): ${this.incrementer}`);
  }

  ngOnInit() {
    console.log("NgInit has been run !");
    console.log(`Incrementer Value(OnInit): ${this.incrementer}`);

  }

  ngOnChanges(){
  console.log("You Changed Something!");
  console.log(`Incrementer Value(OnChanges): ${this.incrementer}`);

  }

  incrementValue(){
    this.incrementer = 0;
  }

}
