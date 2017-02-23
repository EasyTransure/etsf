import {UserService} from './userService';
import { Observable } from 'rxjs/Observable';

describe('User service', () => {
  let userService: UserService = null, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    userService = new UserService (mockHttp);
  });

  describe('getUsers', () => {
    it('should return all the users', () => {
      mockHttp.get.and.returnValue(Observable.of([]));
      userService.getUsers();

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });
});
