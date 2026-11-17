import { TestBed } from '@angular/core/testing';
import { GeneratorStepGuard } from './generator-step.guard';

describe('GeneratorStepGuard', () => {
  let service: GeneratorStepGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratorStepGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
