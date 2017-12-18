import { Component, OnInit } from '@angular/core';
import {FactoryService} from '../service/factory.service';
import {SingletonService} from '../service/singleton.service';
import {ise_variable} from '../service/variable.service';

@Component({
  selector: 'dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {


  constructor(
    private singletonOne: SingletonService,
    private factoryOne: FactoryService,
    private singletonTwo: SingletonService,
    private factoryTwo: FactoryService) { }

  ngOnInit() {
  }

}
