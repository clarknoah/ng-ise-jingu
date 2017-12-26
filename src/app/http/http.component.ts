import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  serverData: string[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getServerData(){
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res:Response)=>{
        this.serverData.push(res.json().title);
    });
  }
}
