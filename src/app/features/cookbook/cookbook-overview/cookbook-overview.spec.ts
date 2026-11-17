import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookbookOverview } from './cookbook-overview';

describe('CookbookOverview', () => {
  let component: CookbookOverview;
  let fixture: ComponentFixture<CookbookOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookbookOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(CookbookOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
