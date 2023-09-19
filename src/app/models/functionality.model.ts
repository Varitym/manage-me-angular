export class Functionality {
  constructor(
    public name: string,
    public description: string,
    public priority: number,
    public project: string,
    public owner: string,
    public status: 'todo' | 'doing' | 'done'
  ) {}
}
