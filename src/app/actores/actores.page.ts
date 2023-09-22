import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap,Params } from '@angular/router';
import { Pelicula } from '../pelicula';
import { PeliculService } from '../services/pelicul.service';
import {Actor} from '../actor';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit {

  id:any;
  seleccionado?:Pelicula;
  public actores?:Actor[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculService,
    private actorService: ActorService
  ) { }
  

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.peliculaService.getUnaPelicula(params['id']).subscribe(selecionado => {
        this.seleccionado = selecionado;
      });
    this.actorService.getActoresPorPelicula(params["id"])?.subscribe(actores => {
      this.actores = actores;
    })
    });
  }

  regresar(){
    this.router.navigate(['/tabs/peliculas']); 
  }


}
