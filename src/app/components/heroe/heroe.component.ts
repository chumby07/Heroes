import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

  heroe:any = {};

  constructor(private active:ActivatedRoute, private service:HeroesService) {

    this.active.params.subscribe(
      params => {
        this.heroe = this.service.getHeroe( params['id'] );
      }
    )

  }

}
