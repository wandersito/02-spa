import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService ) { 
}

  ngOnInit(): void {

      this.activateRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
      this.termino = params.termino;

    } );
  }

}
