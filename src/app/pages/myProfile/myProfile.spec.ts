import { MyProfile } from './myProfile';
import { UserForm } from '../pages';
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
    userServiceMock = jasmine.createSpyObj('userService', ['getAUser']);
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
      userServiceMock.getAUser.and.returnValue(response);
      component.ionViewWillEnter();

      expect(userServiceMock.getAUser).toHaveBeenCalledWith(user.id_user);
    });

    describe('upon successful response', () => {
      beforeEach(() => {
        response = Observable.of(user).delay(1);
        userServiceMock.getAUser.and.returnValue(response);
        component.ionViewWillEnter();
      });

      it('should load the user', (done) => {
        response.subscribe(() => {
          expect(component.user.id_user).toBe('1');
          done();
        });
      });
    });

    describe('upon failure', () => {
      it('should set that an error occurred', (done) => {
        response = Observable.create((observer) => {
          observer.error();
        }).delay(1);
        userServiceMock.getAUser.and.returnValue(response);
        component.ionViewWillEnter();

        response.subscribe(() => { }, () => {
          expect(component.errorOccurred).toBe(true);
          done();
        });
      });
    });

  });

  describe('updateAUser', () => {
    it('should redirect to user edition page', () => {
      component.updateAUser(user);
      expect(navController.push).toHaveBeenCalledWith(UserForm, { user });
    });
  });

});
