import { UserForm } from '../pages';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { MyProfile } from '../pages';

describe('Page: User Form', () => {
  let component: UserForm;
  let navController: NavController;
  let navParams: NavParams;
  let userServiceMock: any;
  let user: User;

  beforeEach(() => {
    user = new User('1');
    userServiceMock = jasmine.createSpyObj('userService', ['updateUser']);
    navController = jasmine.createSpyObj('navController', ['push']);
    navParams = { data: { user: user }, get: null };
    component = new UserForm(navParams, navController, userServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the users', () => {
      expect(component.user).toEqual(user);
    });
  });

  describe('onSubmit', () => {
    it('should log the user and bring back to my profile', () => {
      component.onSubmit();
      expect(userServiceMock.updateUser).toHaveBeenCalled();
      expect(navController.push).toHaveBeenCalledWith(MyProfile);
    });
  });

});
