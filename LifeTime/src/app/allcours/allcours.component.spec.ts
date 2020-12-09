import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcoursComponent } from './allcours.component';

describe('AllcoursComponent', () => {
  let component: AllcoursComponent;
  let fixture: ComponentFixture<AllcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
