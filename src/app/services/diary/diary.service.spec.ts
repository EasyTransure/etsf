import { TestBed, inject } from '@angular/core/testing';
import { AngularFire } from 'angularfire2';

import { User } from '../../model/_model';
import { DiaryService } from './diary.service';

describe('DiaryServiceService', () => {
  let afMock;

  beforeEach(() => {
    afMock = jasmine.createSpyObj('mockaf', ['list']);
    afMock.list.and.returnValue(null);
    let afDatabase = {
      database: afMock
    }

    TestBed.configureTestingModule({
      providers: [DiaryService, { provide: AngularFire, useValue: afDatabase }]
    });
  });

  it('should ...', inject([DiaryService], (service: DiaryService) => {
    expect(service).toBeTruthy();
  }));

  describe('function getNews', () => {
    it('should return an observable', inject([DiaryService], (service: DiaryService) => {
      let user = new User('1');
      service.getEntriesForUser(user);
      expect(afMock.list).toHaveBeenCalledWith('/diary/1');
    }));
  });
});
