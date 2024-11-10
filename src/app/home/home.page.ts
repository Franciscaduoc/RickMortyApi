import { Component } from '@angular/core';
import { RickMortyApiService } from '../service/rick-morty-api.service';
import { interfazRickMorty, Result } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  personajes: Result[] = [];

  constructor(private readonly service : RickMortyApiService) {};

  ngOnInit() : void{

    const ListaPersonajes = localStorage.getItem('personajes');
    debugger;
    if(ListaPersonajes){
      this.personajes = JSON.parse(ListaPersonajes);
      console.log('Rick And Morty desde Local Storage')
    }else{
      this.service.ObtenerPersonajes().subscribe((data: interfazRickMorty)=>{
        localStorage.setItem('personajes', JSON.stringify(data.results));
        this.personajes = data.results;
        console.log('Rick And Morty desde la API')
      })
    }
  }

}
