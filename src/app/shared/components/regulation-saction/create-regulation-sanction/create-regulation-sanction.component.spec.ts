import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegulationSanctionComponent } from './create-regulation-sanction.component';

describe('CreateRegulationSanctionComponent', () => {
  let component: CreateRegulationSanctionComponent;
  let fixture: ComponentFixture<CreateRegulationSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRegulationSanctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRegulationSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
