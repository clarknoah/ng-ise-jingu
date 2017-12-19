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
    private factoryTwo: FactoryService = new FactoryService()) {
      this.factoryOne = new FactoryService();
      this.singletonOne.setString('Noah');
      this.singletonOne.setString('Leah');
      this.factoryOne.setString('Bob');
      this.factoryOne.setString('Alex');
      this.singletonTwo.setString('Frank');
      this.singletonTwo.setString('Ryan');
      this.factoryTwo.setString('Rob');
      this.factoryTwo.setString('Larray');
     }

  ngOnInit() {
  }

}
