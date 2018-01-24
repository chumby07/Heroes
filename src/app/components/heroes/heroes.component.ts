import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private HeroesService:HeroesService) { 

  }

  ngOnInit() {

    this.heroes = this.HeroesService.getHeroes();
    console.log(this.heroes);

  }

}
