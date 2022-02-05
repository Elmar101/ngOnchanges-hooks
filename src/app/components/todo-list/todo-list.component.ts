import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/static-data/models';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  {
  inputText: string = "";
  displayAll: boolean = false;
  constructor() { }

  model = new Model();

  message: string = "merhaba";

  addItem() {
    if(this.inputText!="") {
      this.model.items.push({ description: this.inputText, action: false});
      this.inputText = ""
    } else {
      alert("bilgi giriniz");
    }
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if(this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  displayCount() {
    return this.model.items.filter(i=>i.action).length;
  }
}
