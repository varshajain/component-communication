import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  master = 'Master';
  heroes: Array<string> = [];
  onVoted(agreed: boolean, name:string) {
    agreed ? this.agreed++ : this.disagreed++;
    console.log(name);
    this.heroes.push(name);
    console.log(this.heroes);
  }
}
