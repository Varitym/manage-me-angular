import { Injectable } from '@angular/core';
import { Functionality } from '../models/functionality.model';

@Injectable({
  providedIn: 'root',
})
export class FunctionalityService {
  private functionalities: Functionality[] = [];

  addFunctionality(functionality: Functionality) {
    this.functionalities.push(functionality);
  }

  getFunctionalities() {
    return this.functionalities;
  }

  deleteFunctionality(index: number) {
    this.functionalities.splice(index, 1);
  }

  editFunctionality(index: number, updatedFunctionality: Functionality) {
    this.functionalities[index] = updatedFunctionality;
  }
}
