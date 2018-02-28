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
export class LifecycleComponent implements OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {

  showChild: boolean = true;
  step: number = 0;
  constructor() {
    console.log(`Lifecycle Constructor: ${this.stepper()}`);
  }

  ngOnInit() {
    console.log(`Lifecycle OnInit: ${this.stepper()}`);
  }

  ngDoCheck(){
    console.log(`Lifecycle DoCheck: ${this.stepper()}`);
  }

  ngAfterContentInit(){
    console.log('Called after ngDoCheck (only once)');
    console.log(`Lifecycle AfterContentInit: ${this.stepper()}`);
  }

  ngAfterContentChecked(){
    console.log('Called after AfterContentInit (every cycle)');
    console.log(`Lifecycle AfterContentChecked: ${this.stepper()}`);
  }

  ngAfterViewInit(){
    console.log('Called after AfterContentChecked (once)');
    console.log(`Lifecycle AfterViewInit: ${this.stepper()}`);
  }

  ngAfterViewChecked(){
    console.log('Called after AfterViewInit (every cycle)');
    console.log(`Lifecycle AfterViewChecked: ${this.stepper()}`);
    console.log('\n ******************* \n')
  }

  toggleChild(){
    this.showChild = !this.showChild;
  }

  stepper(){
    this.step ++;
    return this.step;
  }

}
