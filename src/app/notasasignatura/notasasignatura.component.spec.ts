import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasasignaturaComponent } from './notasasignatura.component';

describe('NotasasignaturaComponent', () => {
  let component: NotasasignaturaComponent;
  let fixture: ComponentFixture<NotasasignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotasasignaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
