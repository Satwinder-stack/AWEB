import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomForm } from './custom-form';

describe('CustomForm', () => {
  let component: CustomForm;
  let fixture: ComponentFixture<CustomForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
