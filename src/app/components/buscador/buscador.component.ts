import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../service/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private heroesService:HeroesService, private active:ActivatedRoute, private route:Router) { }

  ngOnInit() {

    this.active.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroes = this.heroesService.buscarHeroeService( params['termino'] );
      }
    )

  }

  verHeroe( i:number ){
    this.route.navigate(['/heroe', i]);
  }

}
