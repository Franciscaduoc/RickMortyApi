import { Observable, of } from "rxjs";
import { interfazRickMorty } from "../interfaces/personaje";
import { interfazRickMortyMock } from "./interfazRickMortyMock";


export const RickMortyApiServiceMock :{
    ObtenerPersonajes: () => Observable<interfazRickMorty>}=
    {ObtenerPersonajes: () => of(interfazRickMortyMock)};