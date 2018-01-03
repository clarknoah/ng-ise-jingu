import { Component, OnInit, Input,
  OnChanges,
  SimpleChanges, SimpleChange, DoCheck,
  OnDestroy, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements DoCheck,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
   {

  @Input() incrementer: number;

  afterContentChecked: number = 0;
  constructor() {
    console.log(`
constructor: incrementer value = ${this.incrementer}
constructor: Lifecycle Value value = ${this.afterContentChecked}
constructor: Incrementing Lifecycle Value by 1
      `);

    this.afterContentChecked ++;
  }

  ngOnInit() {
    console.log(`
ngOnInit: incrementer value = ${this.incrementer}
ngOnInit: Lifecycle Value  value = ${this.afterContentChecked}
ngOnInit: Incrementing Lifecycle Value by 1
      `);
      this.afterContentChecked ++;
  }

  incrementValue(){
    this.incrementer = this.incrementer + 1;
  }

  ngDoCheck(){
    console.log('DoCheck: Change Detected');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(`
ngOnChanges: incrementer value = ${this.incrementer}
ngOnChanges:  Lifecycle value = ${this.afterContentChecked}
ngOnChanges: Incrementing Lifecycle Value by 1
`);

    this.afterContentChecked ++;
  }
  ngAfterContentInit(){
    console.log(`
ngAfterContentInit: incrementer value = ${this.incrementer}
ngAfterContentInit:  Lifecycle value = ${this.afterContentChecked}
ngAfterContentInit: Incrementing Lifecycle Value by 1
`);

    this.afterContentChecked ++;
  }
  ngAfterContentChecked(){
    console.log(`
ngAfterContentChecked: incrementer value = ${this.incrementer}
ngAfterContentChecked:  Lifecycle value = ${this.afterContentChecked}
ngAfterContentChecked: Incrementing Lifecycle Value by 1
`);
  this.afterContentChecked ++;
  }
  ngAfterViewInit(){
    console.log(`
ngAfterViewInit: incrementer value = ${this.incrementer}
ngAfterViewInit:  Lifecycle value = ${this.afterContentChecked}
ngAfterViewInit: Incrementing Lifecycle Value by 1
`);
  this.afterContentChecked ++;
  }
  ngAfterViewChecked(){
    console.log(`
ngAfterViewChecked: incrementer value = ${this.incrementer}
ngAfterViewChecked:  Lifecycle value = ${this.afterContentChecked}
ngAfterViewChecked: Incrementing Lifecycle Value by 1
`);
  this.afterContentChecked ++;
  }

  ngOnDestroy(){
    console.log("Good Bye!");
  }
}
