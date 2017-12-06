import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {

  stored_array: string[];
  constructor() { }

  getString(strVariable: string):void{
    this.stored_array.push(strVariable);
  }
}
