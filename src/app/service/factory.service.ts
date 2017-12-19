import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {

  stored_array: Array<string>;
  constructor() {
  this.stored_array = [];
 }

  public setString(stringVar: string): void{
    this.stored_array.push(stringVar);
  }

}
