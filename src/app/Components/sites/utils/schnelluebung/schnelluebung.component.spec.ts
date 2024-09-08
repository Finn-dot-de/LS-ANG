import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnelluebungComponent } from './schnelluebung.component';

describe('SchnelluebungComponent', () => {
  let component: SchnelluebungComponent;
  let fixture: ComponentFixture<SchnelluebungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchnelluebungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchnelluebungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
