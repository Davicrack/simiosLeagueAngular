import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRaceResultComponent } from './create-race-result.component';

describe('CreateRaceResultComponent', () => {
  let component: CreateRaceResultComponent;
  let fixture: ComponentFixture<CreateRaceResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRaceResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRaceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
