import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { HomePage } from './home.page';
import { RickMortyApiService } from '../service/rick-morty-api.service';
import { interfazRickMortyMock } from '../mocks/interfazRickMortyMock';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let service: RickMortyApiService;

  beforeEach(waitForAsync( () => {
    let rickMortyApiServiceMock ={
      ObtenerPersonajes: jasmine.createSpy('ObtenerPersonajes').and.returnValue(of(interfazRickMortyMock))
    }
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{provide: RickMortyApiService, useValue: rickMortyApiServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    service = TestBed.inject(RickMortyApiService)
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Deberia cargar los personajes desde el local Storage si estan disponibles', () =>{
    localStorage.setItem('personajes', JSON.stringify(interfazRickMortyMock.results));
    fixture.detectChanges();
    expect(component.personajes).toEqual(interfazRickMortyMock.results);
  });
  it('deveria obtener personajes desde RickMortyApi si no hay personajes en local storage', fakeAsync(()=>{
    localStorage.removeItem('personajes');
    component.ngOnInit();
    tick();
    expect(component.personajes).toEqual(interfazRickMortyMock.results);
    expect(service.ObtenerPersonajes).toHaveBeenCalled();
  }));
});
