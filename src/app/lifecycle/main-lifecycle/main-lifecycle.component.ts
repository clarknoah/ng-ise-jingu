import { Component,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    Input } from '@angular/core';

@Component({
  selector: 'main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterContentChecked,
AfterViewInit,
AfterViewChecked  {

  @Input() step: number;
  constructor() {
    console.log(`Child Constructor: ${this.stepper()}`)
  }
  ngOnInit() {
    console.log(`Child OnInit: ${this.stepper()}`);
  }

  ngDoCheck(){
    console.log(`Child DoCheck: ${this.stepper()}`);
  }

  ngAfterContentInit(){
    console.log('Called after ngDoCheck (only once)');
    console.log(`Child AfterContentInit: ${this.stepper()}`);
  }

  ngAfterContentChecked(){
    console.log('Called after AfterContentInit (every cycle)');
    console.log(`Child AfterContentChecked: ${this.stepper()}`);
  }

  ngAfterViewInit(){
    console.log('Called after AfterContentChecked (once)');
    console.log(`Child AfterContentChecked: ${this.stepper()}`);
  }

  ngAfterViewChecked(){
    console.log('Called after AfterViewInit (every cycle)');
    console.log(`Child AfterContentChecked: ${this.stepper()}`);
  }

  stepper(){
    this.step ++;
    return this.step;
  }

}
