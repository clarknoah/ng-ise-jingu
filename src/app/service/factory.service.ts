import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {

  stored_array: string[];
  constructor() { }

  getString(stringVar: string): void{
    this.stored_array.push(stringVar);
  }

}
