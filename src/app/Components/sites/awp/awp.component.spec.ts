import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwpComponent } from './awp.component';

describe('AwpComponent', () => {
  let component: AwpComponent;
  let fixture: ComponentFixture<AwpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
