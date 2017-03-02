import {UserService} from '../services';
import { User } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('User service', () => {
  let userService: UserService = null, mockHttp;
  let user: User;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'put', 'delete']);
    userService = new UserService (mockHttp);
    user = new User (0, '', '', '', '');
  });

  describe('getUsers', () => {
    it('should return all the users', () => {
      mockHttp.get.and.returnValue(Observable.of([]));
      userService.getUsers();

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });

  describe('getAUser', () => {
    it('should return the corresponding user', () => {
      mockHttp.get.and.returnValue(Observable.of());
      userService.getAUser(1);

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });

  describe('addUser', () => {
    it('should return the added user', () => {
      mockHttp.post.and.returnValue(Observable.of({}));
      userService.addUser(user);

      expect(mockHttp.post).toHaveBeenCalled();
    });
  });

  describe('updateUser', () => {
    it('should return the updated user', () => {
      mockHttp.put.and.returnValue(Observable.of({}));
      userService.updateUser(user.id_user, user);

      expect(mockHttp.put).toHaveBeenCalled();
    });
  });

  describe('deleteUser', () => {
    it('should return the deleted user', () => {
      mockHttp.delete.and.returnValue(Observable.of({}));
      userService.deleteUser(user.id_user);

      expect(mockHttp.delete).toHaveBeenCalled();
    });
  });
/*
  describe('extractData', () => {
    it('should return the corresponding user', () => {
      mockHttp.get.and.returnValue(Observable.of());
      userService.getAUser(1);

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });
*/
});
