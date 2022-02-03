import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-view-child',
  templateUrl: './ng-view-child.component.html',
  styleUrls: ['./ng-view-child.component.scss']
})
export class NgViewChildComponent implements AfterViewInit {
  x = 6;
  constructor() { }
  @ViewChild('inpRef') inpRef!:ElementRef;

  ngAfterViewInit(): void {
    console.log(this.inpRef)
  }

}
