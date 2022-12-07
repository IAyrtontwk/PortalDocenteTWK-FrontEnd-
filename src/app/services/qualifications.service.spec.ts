/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QualificationsService } from './qualifications.service';

describe('Service: Qualifications', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QualificationsService]
    });
  });

  it('should ...', inject([QualificationsService], (service: QualificationsService) => {
    expect(service).toBeTruthy();
  }));
});
