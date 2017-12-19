import { Injectable } from '@angular/core';

@Injectable()
export class SingletonService {

  stored_array:Array<string>;
  constructor() {
    this.stored_array = [];
   }

  setString(strVariable: string):void{
    this.stored_array.push(strVariable);
  }
}
