import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/static-data/models';
import { TodoItem } from '../../models/entity/todo-list';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  {
  inputText: string = "";
  displayAll: boolean = false;
  constructor() { 
    this.model.items = this.getItemsFromLocalStorage();
  }

  model = new Model();

  message: string = "merhaba";

  getItemsFromLocalStorage(): TodoItem[] {
    let items: TodoItem[] = [] ;
    let value = localStorage.getItem('items');
    if(value !== null ){
      items = JSON.parse(value);
    }
    return items;
  }
  addItem() {
    if(this.inputText!="") {
      let data: TodoItem = { description: this.inputText, action: false};
      this.model.items.push(data);

      let items: TodoItem[] = this.getItemsFromLocalStorage();
          items.push(data);
          localStorage.setItem('items',JSON.stringify(items));

      this.inputText = ""

    } else {
      alert("bilgi giriniz");
    }
  }

  onActionChange(item: TodoItem){
    console.table(item)
    let items = this.getItemsFromLocalStorage();
    //localStorage.clear();
    items.map( i => {
      if(i.description == item.description){
        i.action = item.action;
      }
    })
    localStorage.setItem('items',JSON.stringify(items));
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
