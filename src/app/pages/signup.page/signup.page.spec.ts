import { SignUpPage } from '../pages';
import { Observable } from 'rxjs/Rx';

describe('Page: sign up page', () => {

  let userServiceMock;
  let page;
  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userServiceMock', ['signUp']);
    page = new SignUpPage(userServiceMock);
  });

  describe('ionViewWillEnter', () => {
    it('should print if you entred.', () => {
      page.ionViewWillEnter();
    });
  });

  describe('sign up function', () => {
    beforeEach(() => {
      page.email = 'blabla@bla.fr';
      page.password = '1234';
    });

    it('should call signUp', () => {
      userServiceMock.signUp.and.returnValue(Observable.from([true]).delay(1));
      page.signUp();
      expect(userServiceMock.signUp).toHaveBeenCalled();
    });

    describe('upon success', () => {
      let obs: Observable<boolean>;
      beforeEach(() => {
        obs = Observable.from([true]).delay(1);
        userServiceMock.signUp.and.returnValue(obs);
        page.signUp();
      });

      it('should set false in login error variable', (done) => {
        obs.subscribe(() => {
          expect(page.loginError).toBe(false);
          done();
        });
      });
    });
  });
});
