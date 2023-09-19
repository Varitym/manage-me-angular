// functionality-list.component.ts
import { Component } from '@angular/core';
import { Functionality } from 'src/app/models/functionality.model';
import { FunctionalityService } from 'src/app/services/functionality.service';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.css'],
})
export class FunctionalityListComponent {
  functionalities: Functionality[] = [];
  newFunctionality: Functionality = new Functionality(
    '',
    '',
    1,
    '',
    '',
    'todo'
  );

  constructor(private functionalityService: FunctionalityService) {
    this.functionalities = this.functionalityService.getFunctionalities();
  }

  addFunctionality() {
    this.newFunctionality.project = 'Projekt 1';
    this.newFunctionality.owner = 'John Doe';
    this.functionalityService.addFunctionality(this.newFunctionality);

    this.newFunctionality = new Functionality(
      '',
      '',
      1,
      'Projekt 1',
      '',
      'todo'
    );
  }
}
