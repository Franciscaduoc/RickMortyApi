import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RickMortyApiService } from './rick-morty-api.service';
import { interfazRickMorty } from '../interfaces/personaje';
import { interfazRickMortyMock } from '../mocks/interfazRickMortyMock';

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
});
