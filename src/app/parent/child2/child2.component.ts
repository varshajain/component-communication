import { Component, OnInit, Input } from '@angular/core';
import { ParentComponent } from '../parent.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() hero: ParentComponent;
  @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
  }

}
