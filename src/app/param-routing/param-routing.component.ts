import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,
  Router } from '@angular/router';


@Component({
  selector: 'param-routing',
  templateUrl: './param-routing.component.html',
  styleUrls: ['./param-routing.component.css']
})
export class ParamRoutingComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goToRoute(param){
    console.log(`Main Router: ${this.route}`);
    this.router.navigate(['./',param], {relativeTo: this.route});
  }



}
