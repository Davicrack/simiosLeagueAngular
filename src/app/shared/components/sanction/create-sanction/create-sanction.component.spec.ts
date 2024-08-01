import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSanctionComponent } from './create-sanction.component';

describe('CreateSanctionComponent', () => {
  let component: CreateSanctionComponent;
  let fixture: ComponentFixture<CreateSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSanctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
