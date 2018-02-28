import { Component,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    OnDestroy,
    AfterViewChecked,
    Input } from '@angular/core';
import * as _ from 'lodash';

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
AfterViewChecked,
OnDestroy  {

  step: number;
  constructor() {
    console.log(`Child Constructor: ${this.stepper()}`)
    this.step = 0;
  }
  ngOnInit() {
    console.log(`Child OnInit: ${this.stepper()}`);
    this.step = _.cloneDeep(this.step);
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
    console.log(`Child AfterViewInit: ${this.stepper()}`);
  }

  ngAfterViewChecked(){
    console.log('Called after AfterViewInit (every cycle)');
    console.log(`Child AfterViewChecked: ${this.stepper()}`);
        console.log('\n ******************* \n')
  }

  ngOnDestroy(){
      console.log(`Child OnDestoryd: ${this.stepper()}`);
  }
  stepper(){
    this.step ++;
    return this.step;
  }


}
