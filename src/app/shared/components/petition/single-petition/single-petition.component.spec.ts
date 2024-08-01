import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePetitionComponent } from './single-petition.component';

describe('SinglePetitionComponent', () => {
  let component: SinglePetitionComponent;
  let fixture: ComponentFixture<SinglePetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePetitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
