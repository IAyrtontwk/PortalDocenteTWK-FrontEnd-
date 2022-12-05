<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
=======
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentsService } from './students.service';

describe('Service: Students', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsService]
    });
  });

  it('should ...', inject([StudentsService], (service: StudentsService) => {
    expect(service).toBeTruthy();
  }));
>>>>>>> origin/Development
});
