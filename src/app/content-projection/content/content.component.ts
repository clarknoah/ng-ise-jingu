import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() content_title:string;
  constructor() { }

  ngOnInit() {
  }

}
