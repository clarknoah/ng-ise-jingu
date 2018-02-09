import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {

  serviceArray: any[];

  constructor() { }

  addToArray(value){
    this.serviceArray.push(value);
  }
}
