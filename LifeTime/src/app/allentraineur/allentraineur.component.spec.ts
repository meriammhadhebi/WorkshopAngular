import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllentraineurComponent } from './allentraineur.component';

describe('AllentraineurComponent', () => {
  let component: AllentraineurComponent;
  let fixture: ComponentFixture<AllentraineurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllentraineurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
