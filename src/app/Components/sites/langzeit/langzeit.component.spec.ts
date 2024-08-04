import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangzeitComponent } from './langzeit.component';

describe('LangzeitComponent', () => {
  let component: LangzeitComponent;
  let fixture: ComponentFixture<LangzeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangzeitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LangzeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
