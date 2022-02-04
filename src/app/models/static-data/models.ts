import { TodoItem } from "../entity/todo-list";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name ="Elmar";
    this.items = [
      { description: "Seher Yemeyi ", action: true },
      { description: "spor", action: true },
      { description: "alış-veriş", action: false }
    ];
  }
}