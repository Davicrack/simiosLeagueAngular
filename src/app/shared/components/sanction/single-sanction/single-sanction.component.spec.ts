import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSanctionComponent } from './single-sanction.component';

describe('SingleSanctionComponent', () => {
  let component: SingleSanctionComponent;
  let fixture: ComponentFixture<SingleSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSanctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
