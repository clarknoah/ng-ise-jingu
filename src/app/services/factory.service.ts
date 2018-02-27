import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {

  serviceArray: any[];

  constructor() {
    this.serviceArray = [];
  }

  addToArray(value){
    this.serviceArray.push(value);
  }
}
