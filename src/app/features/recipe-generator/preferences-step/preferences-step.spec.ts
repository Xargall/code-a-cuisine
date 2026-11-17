import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferencesStep } from './preferences-step';

describe('PreferencesStep', () => {
  let component: PreferencesStep;
  let fixture: ComponentFixture<PreferencesStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferencesStep],
    }).compileComponents();

    fixture = TestBed.createComponent(PreferencesStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
