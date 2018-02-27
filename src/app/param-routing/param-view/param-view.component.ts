import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'param-view',
  templateUrl: './param-view.component.html',
  styleUrls: ['./param-view.component.css']
})
export class ParamViewComponent implements OnInit {

  param: string;

  constructor( private route: ActivatedRoute ) {
    route.params.subscribe(
      (params)=>{
        this.param = params['param'];
      }
    )
  }

  ngOnInit() {
  }

}
