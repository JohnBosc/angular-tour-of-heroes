import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  jean: Hero = {
    id: 2,
    name: 'Jean'
  };

  bosco: Hero = {
    id: 3,
    name: 'Bosco'
  };

  mengue: Hero = {
    id: 4,
    name: 'Mengue'
  };

  junior: Hero = {
    id: 5,
    name: 'junior'
  };

  constructor() { }

  ngOnInit() {
  }

}
