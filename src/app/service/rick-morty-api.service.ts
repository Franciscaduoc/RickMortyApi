import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { interfazRickMorty} from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {

  private readonly urlApi : string = 'https://rickandmortyapi.com/api/character/?page=19'

  constructor(private readonly http : HttpClient) { };

  ObtenerPersonajes() : Observable<interfazRickMorty>{
    return this.http.get<interfazRickMorty>(this.urlApi);
  }
}
