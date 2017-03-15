import { UserForm, MyProfile } from '../pages';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('Page: My Profile', () => {
  let component: MyProfile;
  let navController: NavController;
  let navParams: NavParams;
  let userServiceMock: any;
  let user: User;

  beforeEach(() => {
    user = new User('1');
    userServiceMock = jasmine.createSpyObj('userService', ['getCurrentUser', 'logout']);
    navController = jasmine.createSpyObj('navController', ['push']);
    component = new MyProfile(navController, navParams, userServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the news as an empty array', () => {
      expect(component.user).toEqual(user);
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

  describe('ionViewWillEnter', () => {
    let response: Observable<User>;

    it('should call the NewsService', () => {
      response = Observable.of(user).delay(1);
      userServiceMock.getCurrentUser.and.returnValue(response);
      component.ionViewWillEnter();

      expect(userServiceMock.getCurrentUser).toHaveBeenCalled();
    });

  });

  describe('updateAUser', () => {
    it('should redirect to user edition page', () => {
      component.updateAUser(user);
      expect(navController.push).toHaveBeenCalledWith(UserForm, { user });
    });
  });

  describe('log out', () => {
    it('should log out the user and redirect to connection', () => {
      component.logout();
      expect(userServiceMock.logout).toHaveBeenCalled();
    });
  });

});
