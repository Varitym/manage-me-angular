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

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTaskById(taskId: string): Task | undefined {
    return this.tasks.find((task) => task.id === parseInt(taskId));
  }

  editTask(index: number, updatedTask: Task) {
    this.tasks[index] = updatedTask;
  }
}
