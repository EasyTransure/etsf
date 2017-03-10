import { UserForm } from './userForm';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('Page: User Form', () => {
  let component: UserForm;
  let navController: NavController;
  let navParams: NavParams;
  let userServiceMock: any;
  let user: User;

  beforeEach(() => {
    user = new User ('1');
    userServiceMock = jasmine.createSpyObj('userService', ['updateUser']);
    navController = jasmine.createSpyObj('navController', ['push']);
    navParams = { data : { user : user}, get: null};
    component = new UserForm(navParams, navController, userServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the users', () => {
      expect(component.user).toEqual(user);
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

});
