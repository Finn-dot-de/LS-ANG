import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensiveuebungenComponent } from './intensiveuebungen.component';

describe('IntensiveuebungenComponent', () => {
  let component: IntensiveuebungenComponent;
  let fixture: ComponentFixture<IntensiveuebungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntensiveuebungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntensiveuebungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
