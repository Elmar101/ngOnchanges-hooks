import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sub-hooks',
  templateUrl: './sub-hooks.component.html',
  styleUrls: ['./sub-hooks.component.scss']
})
export class SubHooksComponent implements OnInit,OnChanges {
  @Input() changesObj!: number;
  hooks: any[] = [] ;
  changes!:SimpleChanges;
  constructor() { 
    this.hooks.push("Constructor Tetiklendi");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    this.changes = changes;
    this.hooks.push("ngOnChanges Tetiklendi");
  }

  ngOnInit(): void {
    this.hooks.push("ngOnInit Tetiklendi")
  }
}
