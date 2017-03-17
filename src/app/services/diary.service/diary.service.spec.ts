import { TestBed, inject } from '@angular/core/testing';
import { AngularFire } from 'angularfire2';
import { User } from '../../model/_model';
import { DiaryService } from '../services';

describe('DiaryServiceService', () => {
  let afMock;
  let user;

  beforeEach(() => {
    afMock = jasmine.createSpyObj('afMock', ['list']);
    let afDatabase = {
      database: afMock
    }
    user = new User('1');
    TestBed.configureTestingModule({
      providers: [DiaryService, { provide: AngularFire, useValue: afDatabase }]
    });
  });

  it('should ...', inject([DiaryService], (service: DiaryService) => {
    expect(service).toBeTruthy();
  }));

  describe('function getEntriesForUser', () => {
    it('should return an observable', inject([DiaryService], (service: DiaryService) => {
      service.getEntriesForUser(user);
      expect(afMock.list).toHaveBeenCalledWith('/diary/1');
    }));
  });
});
