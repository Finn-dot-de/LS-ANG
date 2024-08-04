import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MischuebungenComponent } from './mischuebungen.component';

describe('MischuebungenComponent', () => {
  let component: MischuebungenComponent;
  let fixture: ComponentFixture<MischuebungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MischuebungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MischuebungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
