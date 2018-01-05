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

  observableString: Observable<string>;
  test_array: string[] = [];
  test_obj: any = {};
  constructor(private el: ElementRef,private http: Http) {
        this.test_obj.name = "Noah";
        this.test_array.push['First Value!'];

   }

  ngOnInit() {
            this.getServerString();
  }

  ngDoCheck(){
    console.log()
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

  addToArray(){
      this.test_array.push("New Name");
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
