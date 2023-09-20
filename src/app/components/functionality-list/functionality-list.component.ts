// functionality-list.component.ts
import { Component } from '@angular/core';
import { Functionality } from 'src/app/models/functionality.model';
import { Task } from 'src/app/models/task.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.css'],
})
export class FunctionalityListComponent {
  tasks: Task[] = [];
  functionalities: Functionality[] = [];
  newFunctionality: Functionality = new Functionality(
    '',
    '',
    1,
    '',
    '',
    'todo'
  );

  constructor(
    private functionalityService: FunctionalityService,
    private taskService: TaskService
  ) {
    this.functionalities = this.functionalityService.getFunctionalities();
    this.tasks = this.taskService.getTasks();
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
