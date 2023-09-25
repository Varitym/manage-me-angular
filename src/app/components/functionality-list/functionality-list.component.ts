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
    this.functionalities.length + 1,
    '',
    '',
    1,
    '',
    '',
    'todo'
  );

  editedFunctionality: Functionality | null = null;

  constructor(
    private functionalityService: FunctionalityService,
    private taskService: TaskService
  ) {
    this.functionalities = this.functionalityService.getFunctionalities();
    this.tasks = this.taskService.getTasks();
  }
  ngOnInit() {
    this.functionalities.forEach((functionality) => {
      this.updateFunctionalityStatus(functionality);
    });
  }

  addFunctionality() {
    this.newFunctionality.project = 'Projekt 1';
    this.newFunctionality.owner = 'John Doe';
    this.functionalityService.addFunctionality(this.newFunctionality);

    this.newFunctionality = new Functionality(
      this.functionalities.length + 1,
      '',
      '',
      1,
      'Projekt 1',
      '',
      'todo'
    );
  }

  startEditing(functionality: Functionality) {
    this.editedFunctionality = functionality;
  }

  saveEditedFunctionality() {
    if (this.editedFunctionality) {
      this.editedFunctionality = null;
    }
  }

  cancelEdit() {
    this.editedFunctionality = null;
  }

  deleteFunctionality(functionality: Functionality) {
    this.functionalityService.deleteFunctionality(functionality);
  }

  updateFunctionalityStatus(functionality: Functionality) {
    const functionalityTasks = this.tasks.filter(
      (task) => task.functionality?.id === functionality.id
    );

    if (functionalityTasks.every((task) => task.status === 'done')) {
      functionality.status = 'done';
    } else if (functionalityTasks.every((task) => task.status === 'todo')) {
      functionality.status = 'todo';
    } else {
      functionality.status = 'doing';
    }
  }
}
