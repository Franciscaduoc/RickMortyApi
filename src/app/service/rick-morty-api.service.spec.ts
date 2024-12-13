import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RickMortyApiService } from './rick-morty-api.service';
import { interfazRickMorty } from '../interfaces/personaje';
import { interfazRickMortyMock } from '../mocks/interfazRickMortyMock';
import { of } from 'rxjs';

describe('RickMortyApiService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: RickMortyApiService;
  let mock: interfazRickMorty;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    service = new RickMortyApiService(httpClientSpy);
    mock = interfazRickMortyMock;
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia obtener response', (done: DoneFn)=>{
    httpClientSpy.get.and.returnValue(of(mock));
    service.ObtenerPersonajes().subscribe({
      next: (InterfazRickMorty)=>{
        expect(InterfazRickMorty).toEqual(mock);
        expect(httpClientSpy.get.calls.count()).toBe(1);
        done();
      }
    });
  });
});
