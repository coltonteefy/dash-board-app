import { Component } from '@angular/core';
import { Hero }      from './hero/hero';

const HEROES: Hero[] = [
  {id: 1, name: 'ALLMIGHT'},
  {id: 2, name: 'Endevor'},
  {id: 3, name: 'Midoriya Iduki'},
  {id: 4, name: 'Ingenium'},
  {id: 5, name: 'Todoroki Shouto'},
  {id: 6, name: 'One Punch Man'},
  {id: 7, name: 'SunEater'},
  {id: 8, name: 'Froppy'},
  {id: 9, name: 'Uravity'},
  {id: 10, name: 'Tenya Iida'}
];


@Component({
  selector: 'my-second-app',
  template: ``,
})
export class SecondComponent  {
  title = 'Temp';
  heroes = HEROES
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
