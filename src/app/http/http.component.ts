import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  httpValue: string;
  constructor(private http: Http) {
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(
        (data)=>{
          this.httpValue = data.json().title;
        }
      )
  }

  ngOnInit() {
  }

}
