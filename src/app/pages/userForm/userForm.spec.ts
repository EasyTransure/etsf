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

  describe('onSubmit', () => {
     let response: Observable<User>;

    it('should call the UserService', () => {
      response = Observable.of(user).delay(1);
      userServiceMock.updateUser.and.returnValue(response);
      component.onSubmit();

      expect(userServiceMock.updateUser).toHaveBeenCalledWith('1', user);
    });

    describe('upon successful response', () => {
      beforeEach(() => {
        response = Observable.of(user).delay(1);
        userServiceMock.updateUser.and.returnValue(response);
        component.onSubmit();
      });

      it('should update the user', (done) => {
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
        userServiceMock.updateUser.and.returnValue(response);
        component.onSubmit();

        response.subscribe(() => { }, () => {
          expect(component.errorOccurred).toBe(true);
          done();
        });
      });
    });
  });

});
