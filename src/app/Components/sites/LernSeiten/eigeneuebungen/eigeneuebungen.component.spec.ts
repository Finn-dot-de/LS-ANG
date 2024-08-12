import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EigeneuebungenComponent } from './eigeneuebungen.component';

describe('EigeneuebungenComponent', () => {
  let component: EigeneuebungenComponent;
  let fixture: ComponentFixture<EigeneuebungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EigeneuebungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EigeneuebungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
