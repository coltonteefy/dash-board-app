import { Component, Input } from '@angular/core';

import { Hero } from './hero/hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
