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
  constructor() {
    console.log("Constructor has been run");
    this.incrementor = 0;
    this.showIncrementer = true;
  }

  toggleIncrementer(){
    this.showIncrementer = !this.showIncrementer;
  }

  ngOnInit() {
    console.log("NgInit has been run !");

  }

}
