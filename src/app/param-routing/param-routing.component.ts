import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'param-routing',
  templateUrl: './param-routing.component.html',
  styleUrls: ['./param-routing.component.css']
})
export class ParamRoutingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToPath(id:string){
    console.log(this.route);
    this.router.navigate(['./'], {relativeTo: this.route});
    this.router.navigate(['./',id], {relativeTo: this.route});
  }

}
