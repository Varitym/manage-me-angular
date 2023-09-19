import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number, updatedTask: Task) {
    this.tasks[index] = updatedTask;
  }
}
