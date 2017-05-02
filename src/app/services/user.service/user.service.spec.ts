import { TestBed, inject } from '@angular/core/testing';
import { UserService } from '../services';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { User } from '../../model/_model';

class AngularFireMock extends AngularFire {
  constructor(public auth, public database) {
    super(null, auth, database);
  }
}

describe('Service: User service', () => {
  let userService: UserService = null;
  let user: User;
  let authSpy = jasmine.createSpyObj('authSpy', ['getAuth', 'subscribe', 'login', 'sendPasswordResetEmail', 'createUser', 'logout', 'subscribe'])
  let listFunction, objectFunction;
  let fire;

  beforeEach(() => {
    fire = jasmine.createSpyObj('fire', ['sendPasswordResetEmail']);
    user = new User('0');
    listFunction = jasmine.createSpy("list");
    objectFunction = jasmine.createSpy("object");
    listFunction.and.returnValue(null);
    objectFunction.and.returnValue(new User("0"));
    let af = {
      database: {
        list: listFunction,
        object: objectFunction
      }
    };

    TestBed.configureTestingModule({
      providers: [UserService,
        { provide: AngularFire, useValue: af }
      ]
    });
    let mockAf = new AngularFireMock(authSpy, af);
    userService = new UserService(mockAf);
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('getCurrentUser', () => {
    it('should return null if user does not exist', () => {
      expect(userService.getCurrentUser()).toBe(null);
    });

    it('should user if exist', () => {
      userService.user = new User("a");
      userService.uid = userService.user.uid;
      expect(userService.getCurrentUser()).toEqual(new User("a"));
    });
  });

  describe('updateUser', () => {
    xit('should update the current user', inject([UserService], (service: UserService) => {
      service.userOb = FirebaseListObservable.create((obser) => {
        obser.next(user);
        obser.complete();
      })
      service.updateUser(user);
      expect(service.userOb.update).toHaveBeenCalledWith(user);
    }));
  })

  describe('addUser', () => {
    let p: Promise<boolean>;

    describe('upon success', () => {
      beforeEach(() => {
        p = new Promise<boolean>(resolve => setTimeout(resolve(true), 1));
      });

      xit('should resolve', (done) => {
        userService.userAdd.push(user)
        userService.initAllUser();
        let res = userService.addUser(new User('1'));
        res.subscribe(val => {
          expect(userService.userAdd.push).toHaveBeenCalledWith(new User('1'));
          expect(val).toBe(true);
        });
      });
    });

    describe('upon failure', () => {
      beforeEach(() => {
        p = new Promise<boolean>((resolve, reject) => setTimeout(reject(false), 1));
      });

      xit('should return false', (done) => {
        userService.initAllUser();
        let res = userService.addUser(new User('1'));
        res.subscribe((res) => {
          expect(userService.userAdd.push).toHaveBeenCalledWith(new User('1'));
          expect(res).toBe(false);
        });
      });
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

  describe('signUp', () => {
    let p: Promise<boolean>;

    describe('upon success', () => {
      beforeEach(() => {
        p = new Promise<boolean>(resolve => setTimeout(resolve(true), 1));
        authSpy.createUser.and.returnValue(p);
      });

      it('should resolve', (done) => {
        let res = userService.signUp('em@il', 'pwd');
        res.subscribe(val => {
          expect(authSpy.createUser).toHaveBeenCalledWith({ email: 'em@il', password: 'pwd' });
          expect(val).toBe(true);
          done();
        });
      });
    });

    describe('upon failure', () => {
      beforeEach(() => {
        p = new Promise<boolean>((resolve, reject) => setTimeout(reject(false), 1));
        authSpy.createUser.and.returnValue(p);
      });

      it('should return false', (done) => {
        let res = userService.signUp('em@il', 'pwd');
        res.subscribe((res) => {
          expect(authSpy.createUser).toHaveBeenCalledWith({ email: 'em@il', password: 'pwd' });
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

  describe('init user', () => {
    xit('should init the connected user', () => {
      userService.initUser();
      expect(objectFunction).toHaveBeenCalled();
    });
  });

  describe('function initAllUser', () => {
    it('should return all users', inject([UserService], (service: UserService) => {
      service.initAllUser();
      expect(listFunction).toHaveBeenCalledWith('/user');
    }));
  });

});
