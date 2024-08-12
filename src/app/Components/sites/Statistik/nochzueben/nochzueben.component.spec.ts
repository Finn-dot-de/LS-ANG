import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NochzuebenComponent } from './nochzueben.component';

describe('NochzuebenComponent', () => {
  let component: NochzuebenComponent;
  let fixture: ComponentFixture<NochzuebenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NochzuebenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NochzuebenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
