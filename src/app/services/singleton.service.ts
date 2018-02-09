import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {


    serviceArray: any[];

    constructor() { }

    addToArray(value){
      this.serviceArray.push(value);
    }
  }
