import { Functionality } from './functionality.model';

export class Task {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public priority: number,
    public functionality: Functionality | null,
    public status: 'todo' | 'doing' | 'done',
    public responsibleUser: string,
    public dateAdded?: Date,
    public estimatedTime?: number,
    public startDate?: Date,
    public endDate?: Date
  ) {}
}
