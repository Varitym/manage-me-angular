import { Functionality } from './functionality.model';

export class Task {
  constructor(
    public name: string,
    public description: string,
    public priority: number,
    public functionality: Functionality,
    public estimatedTime: number,
    public status: 'todo' | 'doing' | 'done',
    public dateAdded: Date,
    public responsibleUser: 'devops' | 'developer',
    public startDate?: Date,
    public endDate?: Date
  ) {}
}
