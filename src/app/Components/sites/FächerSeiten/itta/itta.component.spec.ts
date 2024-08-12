import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IttaComponent } from './itta.component';

describe('IttaComponent', () => {
  let component: IttaComponent;
  let fixture: ComponentFixture<IttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IttaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
