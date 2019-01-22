import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  termino: string;
  heroes: Heroe[] = [];

  constructor( private activatedRout: ActivatedRoute,
               private _heroesService: HeroesService) {
    this.activatedRout.params.subscribe( params => {
    this.termino = params['name'];
    } );

  }

  ngOnInit() {
      this.heroes = this._heroesService.buscarHeroes( this.termino );
      // console.log(this.heroes);

  }


}
