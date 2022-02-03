import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'ng-do-check',
  templateUrl: './ng-do-check.component.html'
})
export class NgDoCheckComponent implements DoCheck {
  val!: string;
  constructor() { }
  x: string = "";
  ngDoCheck(): void {
    this.val += "ngDoCheck Tetiklendi,"
  }

  metVal(val: string){
    this.x = val
  }

}
