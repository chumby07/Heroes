import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../service/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  resultado:any = {};
  constructor( private active:Router, private heroeService:HeroesService ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){

    this.active.navigate(['/buscador', termino]);

  }

}
