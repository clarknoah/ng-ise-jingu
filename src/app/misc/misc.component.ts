import { Component, OnInit, ElementRef,
  IterableDiffers, KeyValueDiffers, DoCheck} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit, DoCheck {

  testArray: string[] = ['frank'];
  testObj: any = {firstName:'Noah',lastName:'Clark'};


  observableString: Observable<string>;
  test_array: string[] = [];
  test_obj: any = {firstName:'Charlie'};
  staticNum: number = 0;
  testObjDiff: any;
  arrDiff: any;
  constructor(private el: ElementRef,
    private http: Http,
    private diff: KeyValueDiffers,
    private iter: IterableDiffers) {

        this.test_obj.name = "Noah";
        this.test_array.push['First Value!'];
        this.testObjDiff = diff.find([]).create(null);
      this.arrDiff = iter.find([]).create(null);

   }

  updateStatic(){
    this.staticNum ++;
  }

  ngOnInit() {
            this.getServerString();
  }

  addToArray(){
    this.test_array.push('New Value');
  }

  changeObj(){
    this.test_obj.name = "frank";
  }

  ngDoCheck(){
    const objChanges =this.testObjDiff.diff(this.test_obj);
    const arrChanges = this.arrDiff.diff(this.test_array);
    if(objChanges){
      console.log("Object Changed");
    }
    if(arrChanges){
      console.log("wow");
    }
  //  if(){}
  }

  changeInputValue(){
    console.log(this.el.nativeElement.querySelector('#eleRef'));
    var input = this.el.nativeElement.querySelector('#eleRef');
    input.value = "OMG WOW";
    //this.el.nativeElement.getElementById('eleRef').value = "Selected!";
  }

  enterPressed(event){
    console.log(event.target.value);
  }

  getServerString(){
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
          .subscribe((res:Response)=>{
            console.log(res.json().title);
            this.observableString = res.json().title;
            console.log(this.observableString);
          })
  }

  removeFromArray(){
      this.test_array.splice(0,1);
  }
}
