import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakesComponent } from './bakes.component';

describe('BakesComponent', () => {
  let component: BakesComponent;
  let fixture: ComponentFixture<BakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
