import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizbereichComponent } from './quizbereich.component';

describe('QuizbereichComponent', () => {
  let component: QuizbereichComponent;
  let fixture: ComponentFixture<QuizbereichComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizbereichComponent]
    });
    fixture = TestBed.createComponent(QuizbereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
