import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusdComponent } from './plusd.component';

describe('PlusdComponent', () => {
  let component: PlusdComponent;
  let fixture: ComponentFixture<PlusdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlusdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
