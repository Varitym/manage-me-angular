import { Project } from './project.model';

export class Functionality {
  constructor(
    public name: string,
    public description: string,
    public priority: number,
    public project: Project,
    public owner: string,
    public status: 'todo' | 'doing' | 'done'
  ) {}
}
