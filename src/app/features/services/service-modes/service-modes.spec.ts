import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceModes } from './service-modes';

describe('ServiceModes', () => {
  let component: ServiceModes;
  let fixture: ComponentFixture<ServiceModes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceModes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceModes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
