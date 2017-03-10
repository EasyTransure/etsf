import { Observable } from 'rxjs/Rx';

import { ConnectionLoginPage } from './connectionLogin';

describe('Page: ConnectionLogin', () => {

  let userServiceMock, navControllerMock;
  let page;
  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userServiceMock', ['loginWithEmailAndPassword']);
    navControllerMock = jasmine.createSpyObj('navControllerMock', ['pop']);

    page = new ConnectionLoginPage(userServiceMock, navControllerMock);
  });

  describe('Login function', () => {
    beforeEach(() => {
      page.email = 'blabla@bla.fr';
      page.password='1234';
    });

    it('should call login', () => {
      userServiceMock.loginWithEmailAndPassword.and.returnValue(Observable.from([true]).delay(1));
      page.login();
      expect(userServiceMock.loginWithEmailAndPassword).toHaveBeenCalled();
    });

    describe('upon success', () => {
      let obs: Observable<boolean>;
      beforeEach(() => {
        obs = Observable.from([true]).delay(1);
        userServiceMock.loginWithEmailAndPassword.and.returnValue(obs);
        page.login();
      });

      it('should set false in login error variable', (done) => {
        obs.subscribe(() => {
          expect(page.loginError).toBe(false);
          done();
        });
      });
    });
  });

  describe('upon error', () => {
    let obs: Observable<boolean>;
      beforeEach(() => {
        obs = Observable.from([false]).delay(1);
        userServiceMock.loginWithEmailAndPassword.and.returnValue(obs);
        page.login();
      });

    it('should set loginError to true', (done) => {
      obs.subscribe(() => {
        expect(page.loginError).toBe(true);
        done();
      });
    });
  });
});
