import { TestBed, inject } from '@angular/core/testing';
import { AngularFire } from 'angularfire2';
import { ReferentialService } from './referential.service';

describe('ReferentialService', () => {
  let listFunction;

  beforeEach(() => {
    listFunction = jasmine.createSpy("list");
    listFunction.and.returnValue(null);
    let af = {
      database: { list: listFunction }
    };

    TestBed.configureTestingModule({
      providers: [ReferentialService,
        { provide: AngularFire, useValue: af }
      ]
    });
  });

  it('should ...', inject([ReferentialService], (service: ReferentialService) => {
    expect(service).toBeTruthy();
  }));

  describe('function getActivities', () => {
    it('should return refActivities', inject([ReferentialService], (service: ReferentialService) => {
      service.getActivities();
      expect(listFunction).toHaveBeenCalledWith('/ref/activity');
    }));
  });

  describe('function getSymptom', () => {
    it('should return referential symptoms', inject([ReferentialService], (service: ReferentialService) => {
      service.getSymptoms();
      expect(listFunction).toHaveBeenCalledWith('/ref/symptom');
    }));
  });


});
