import { Component, OnInit, ElementRef, IterableDiffers,
  KeyValueDiffers, DoCheck} from '@angular/core';

import {Http, Response} from '@angular/http';

import { Observable
} from 'rxjs';


@Component({
  selector: 'misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit, DoCheck {

  inputValue: String;

  testArray: string [] = ['frank'];
  testObj: any = {firstName:'Noah',
                    lastName:'Clark'};
  testObjDiff: any;
  testArrDiff: any;
  staticNum: number = 0;

  constructor(private ele: ElementRef,
    private diff: KeyValueDiffers,
    private iter: IterableDiffers) {
      this.testObjDiff = diff.find([]).create(null);
      this.testArrDiff = iter.find([]).create(null);
     }

  ngOnInit() {
  }

  ngDoCheck(){
    const objChanges = this.testObjDiff.diff(this.testObj);
    const arrChanges = this.testArrDiff.diff(this.testArray);
    if(objChanges){
      console.log('wow, Object has changed!');
    }
    if(arrChanges){
      console.log('wow, array has Changed');
    }
  }

  getInput(event){
    console.log(event.value);

  }

  changeObject(name){
    this.testObj.firstName = name;
  }

  changeArray(value){
    this.testArray.push(value);
  }

  updateInputValue(){
  var input =  this.ele.nativeElement.querySelector('#eleRef');
    this.inputValue = input.value;
  }

}
