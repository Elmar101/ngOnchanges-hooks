import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgViewChildComponent } from './components/ng-view-child/ng-view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(NgViewChildComponent, {static: true}) viewChild!: NgViewChildComponent;
  title = 'todo-list-app';
  value: number = 0;
  getRandomInt() {
    this.value =  Math.floor(Math.random() * 10);
    console.log("ngAfterViewInit x is : ", this.viewChild.x);
  }
  ngOnInit(){
    //console.log("ngAfterViewInit x is : ", this.viewChild.x) -> Error
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit x is : ", this.viewChild.x);
  }
}
