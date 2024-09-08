import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoffseiteComponent } from './stoffseite.component';

describe('StoffseiteComponent', () => {
  let component: StoffseiteComponent;
  let fixture: ComponentFixture<StoffseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoffseiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoffseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
