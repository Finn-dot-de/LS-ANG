import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IttkComponent } from './ittk.component';

describe('IttkComponent', () => {
  let component: IttkComponent;
  let fixture: ComponentFixture<IttkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IttkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IttkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
