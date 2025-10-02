import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import { HeaderComponent } from '../header/header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieComponent, HeaderComponent, StarRatingComponent],
      imports: [HttpClientTestingModule, NgbModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { type: '', id: '' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    // Mock movie data to avoid undefined errors
    component.movie = { name: 'Test Movie', rating: 5, cover: '', reviews: [] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
