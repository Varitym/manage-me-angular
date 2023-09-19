// task-list.component.ts
import { Component } from '@angular/core';
import { Functionality } from 'src/app/models/functionality.model';
import { Task } from 'src/app/models/task.model';
import { FunctionalityService } from 'src/app/services/functionality.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTask: Task = new Task('', '', 3, null, 'todo');
  availableFunctionalities: Functionality[] = [];

  constructor(
    private taskService: TaskService,
    private functionalityService: FunctionalityService
  ) {
    this.tasks = this.taskService.getTasks();
    this.availableFunctionalities =
      this.functionalityService.getFunctionalities();
  }

  editedTask: Task | null = null;

  startEditing(task: Task) {
    this.editedTask = task;
    console.log(task, this.editedTask);
    console.log(this.editedTask.name === task.name);
  }

  saveEditedTask() {
    if (this.editedTask) {
      this.editedTask = null;
    }
  }

  cancelEdit() {
    this.editedTask = null;
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
  }

  addTask() {
    if (!this.newTask.responsibleUser) {
      this.newTask.responsibleUser = 'developer';
    }

    if (!this.newTask.startDate) {
      this.newTask.startDate = new Date();
    }

    this.taskService.addTask(this.newTask);
    this.newTask = new Task('', '', 3, null, 'todo');
  }
}
