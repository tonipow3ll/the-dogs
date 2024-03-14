import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCardsComponent } from './dog-cards.component';

describe('DogCardsComponent', () => {
  let component: DogCardsComponent;
  let fixture: ComponentFixture<DogCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
