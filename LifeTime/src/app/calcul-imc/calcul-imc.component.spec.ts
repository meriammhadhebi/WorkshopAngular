import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculIMCComponent } from './calcul-imc.component';

describe('CalculIMCComponent', () => {
  let component: CalculIMCComponent;
  let fixture: ComponentFixture<CalculIMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculIMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculIMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
