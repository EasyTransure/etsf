import {UserService} from '../services';
import { User } from '../../model/_model';
import { AngularFire } from 'angularfire2';

class AngularFireMock extends AngularFire{
  constructor(public auth, public database){
    super(null, auth, database);
  }
}

describe('User service', () => {
  let userService: UserService = null;
  let user: User;
  let authSpy = jasmine.createSpyObj('authSpy', ['getAuth', 'login'])

  beforeEach(() => {
    let mockAf = new AngularFireMock(authSpy, null);
    userService = new UserService (mockAf);
    user = new User ('0');
  });

  describe('getCurrentUser', () => {
    it('should return null if user does not exist', () => {
      authSpy.getAuth.and.returnValue(null);
      expect(userService.getCurrentUser()).toBe(null);
    });
  });

  describe('loginWithEmailAndPassword', () => {
    let p: Promise<boolean>;

    describe('upon success', () => {
      beforeEach(() => {
        p = new Promise<boolean>(resolve => setTimeout(resolve(true), 1));
        authSpy.login.and.returnValue(p);
      });

      it('should resolve', (done) => {
        let res = userService.loginWithEmailAndPassword('em@il', 'pwd');
        res.subscribe(val => {
          expect(authSpy.login).toHaveBeenCalledWith({email: 'em@il', password: 'pwd'});
          expect(val).toBe(true);
          done();
        });
      });
    });

    describe('upon failure', () => {
      beforeEach(() => {
        p = new Promise<boolean>((resolve, reject) => setTimeout(reject(false), 1));
        authSpy.login.and.returnValue(p);
      });

      it('should return false', (done) => {
        let res = userService.loginWithEmailAndPassword('em@il', 'pwd');
        res.subscribe((res) => {
            expect(authSpy.login).toHaveBeenCalledWith({email: 'em@il', password: 'pwd'});
            expect(res).toBe(false);
            done();
        });
      });
    });
  });

});
