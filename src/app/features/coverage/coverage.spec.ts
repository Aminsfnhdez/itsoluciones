import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coverage } from './coverage';

describe('Coverage', () => {
  let component: Coverage;
  let fixture: ComponentFixture<Coverage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coverage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coverage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
