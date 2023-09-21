import { Component, OnInit } from '@angular/core';
import {Genero} from './genero';
import {GenerosService} from '../services/generos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {


  public misgeneros? : Genero[];
  constructor(private generosService:GenerosService) { }

  getGeneros(): void {
    this.generosService.getGeneros().subscribe(generos => this.misgeneros = generos);
  }
  ngOnInit() {
    this.getGeneros();
  }

}