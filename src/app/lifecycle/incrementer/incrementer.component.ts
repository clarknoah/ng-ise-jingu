import { Component, OnInit, Input,
  OnChanges,
  SimpleChanges,
  OnDestroy,} from '@angular/core';

@Component({
  selector: 'incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {

  @Input() incrementer: number;
  constructor() { }

  ngOnInit() {
    console.log(`this is the value of the child increment value: ${this.incrementer}`);
  }

  incrementValue(){
    this.incrementer = this.incrementer + 1;
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['incrementer']){
        console.log('CHanged Increment Value');
    }
  }
  ngOnDestroy(){
    console.log("Good Bye!");
  }
}
