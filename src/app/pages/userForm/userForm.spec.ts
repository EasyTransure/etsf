import { UserForm } from './userForm';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { MyProfile } from '../myProfile/myProfile';

describe('Page: User Form', () => {
  let component: UserForm;
  let navController: NavController;
  let navParams: NavParams;
  let userServiceMock: any;
  let user: User;
  let con: Console;

  beforeEach(() => {
    user = new User('1');
    userServiceMock = jasmine.createSpyObj('userService', ['updateUser']);
    navController = jasmine.createSpyObj('navController', ['push']);
    con = jasmine.createSpyObj('con', ['log']);
    navParams = { data: { user: user }, get: null };
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

  describe('onSubmit', () => {
    it('should log the user and bring back to my profile', () => {
      component.onSubmit();
      expect(navController.push).toHaveBeenCalledWith(MyProfile);
    });
  });
});
