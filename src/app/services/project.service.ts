import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];

  addProject(project: Project) {
    this.projects.push(project);
  }

  getProjects() {
    return this.projects;
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }

  editProject(index: number, updatedProject: Project) {
    this.projects[index] = updatedProject;
  }
}
