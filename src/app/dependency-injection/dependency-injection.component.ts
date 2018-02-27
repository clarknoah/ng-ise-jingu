import { Component, OnInit } from '@angular/core';
import { FactoryService } from '../services/factory.service';
import { SingletonService } from '../services/singleton.service';
import { TEST_VARIABLE } from '../services/variable';

@Component({
  selector: 'dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  faca: FactoryService = new FactoryService();
  facb: FactoryService = new FactoryService();
  test_var = TEST_VARIABLE;
  constructor(
    private siga: SingletonService,
    private sigb: SingletonService,
  ) {
      this.faca.addToArray('FacA Noah');
      this.faca.addToArray('FacA Frank');
      this.faca.addToArray('FacA Jeff');

      this.facb.addToArray('FacB Noah');
      this.facb.addToArray('FacB Frank');
      this.facb.addToArray('FacB Jeff');

      this.siga.addToArray("SIG A Value");
      this.sigb.addToArray("SIG B Value");
     }

  ngOnInit() {
  }

}
