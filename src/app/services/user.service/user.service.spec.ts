import { TestBed, inject } from '@angular/core/testing';
import { UserService } from '../services';
import { User } from '../../model/_model';
import { AngularFire } from 'angularfire2';

class AngularFireMock extends AngularFire {
  constructor(public auth, public database) {
    super(null, auth, database);
  }
}

describe('User service', () => {
  let userService: UserService = null;
  let user: User;
  let afMock;
  let authSpy = jasmine.createSpyObj('authSpy', ['getAuth', 'login', 'logout'])

  beforeEach(() => {
    afMock = jasmine.createSpyObj('afMock', ['object']);
    let afDatabase = {
      database: afMock
    }
    user = new User('0');
    TestBed.configureTestingModule({
      providers: [UserService, { provide: AngularFire, useValue: afDatabase }]
    });
    let mockAf = new AngularFireMock(authSpy, afDatabase);
    userService = new UserService(mockAf);
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCurrentUser', () => {
    it('should return null if user does not exist', () => {
      authSpy.getAuth.and.returnValue(null);
      expect(userService.getCurrentUser()).toBe(null);
    });
  });

  describe('updateUser', () => {
    xit('should update the current user', inject([UserService], (service: UserService) => {
      service.userOb = this.mockAf.afDatabase.object('/user/', + '1');
      service.updateUser(user);
      expect(service.userOb.update).toHaveBeenCalled();
    }));
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
          expect(authSpy.login).toHaveBeenCalledWith({ email: 'em@il', password: 'pwd' });
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
          expect(authSpy.login).toHaveBeenCalledWith({ email: 'em@il', password: 'pwd' });
          expect(res).toBe(false);
          done();
        });
      });
    });
  });

  describe('log out', () => {
    it('should log out the current user', () => {
      userService.logout();
      expect(authSpy.logout).toHaveBeenCalled();
    })
  });

  /*describe('init user', () => {
    it('should log out the current user', () => {
      userService.initUser();
      expect(afMock.list).toHaveBeenCalledWith('/user/0');
      //expect(authSpy.logout).toHaveBeenCalled();
    })
  });*/

});
