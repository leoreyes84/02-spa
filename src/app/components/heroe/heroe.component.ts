import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRout: ActivatedRoute,
               private _heroesService: HeroesService
    ) {

    this.activatedRout.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    } );

   }

}