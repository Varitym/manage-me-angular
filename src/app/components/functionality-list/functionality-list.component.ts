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

  constructor(private functionalityService: FunctionalityService) {
    this.functionalities = this.functionalityService.getFunctionalities();
  }
}
