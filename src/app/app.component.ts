import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list-app';
  value: number = 0;
  getRandomInt() {
    this.value =  Math.floor(Math.random() * 10);
  }

}
