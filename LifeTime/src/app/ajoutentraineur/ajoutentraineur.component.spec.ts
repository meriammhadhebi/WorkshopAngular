import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutentraineurComponent } from './ajoutentraineur.component';

describe('AjoutentraineurComponent', () => {
  let component: AjoutentraineurComponent;
  let fixture: ComponentFixture<AjoutentraineurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutentraineurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutentraineurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
