import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketbookingComponent } from './movie-ticketbooking.component';

describe('MovieTicketbookingComponent', () => {
  let component: MovieTicketbookingComponent;
  let fixture: ComponentFixture<MovieTicketbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTicketbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTicketbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
