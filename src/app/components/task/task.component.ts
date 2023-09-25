import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() queryParams?: Params | null;
  taskId: string | null = null;
  task: Task | undefined = new Task(1, '', '', 1, null, 'todo', 'John Doe');
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.task = this.taskService
        .getTasks()
        .find((task) => task.id === parseInt(params['id']));

      if (!this.task) {
        return;
      }
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
