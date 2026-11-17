import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingStep } from './loading-step';

describe('LoadingStep', () => {
  let component: LoadingStep;
  let fixture: ComponentFixture<LoadingStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingStep],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
