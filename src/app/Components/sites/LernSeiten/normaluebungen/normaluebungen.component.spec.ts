import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaluebungenComponent } from './normaluebungen.component';

describe('NormaluebungenComponent', () => {
  let component: NormaluebungenComponent;
  let fixture: ComponentFixture<NormaluebungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormaluebungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormaluebungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
