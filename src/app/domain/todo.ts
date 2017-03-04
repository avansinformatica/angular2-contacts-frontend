export class Todo {
  _id: number;
  title: string = '';
  description: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
