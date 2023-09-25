export class Functionality {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public priority: number,
    public project: string,
    public owner: string,
    public status: 'todo' | 'doing' | 'done'
  ) {}
}
