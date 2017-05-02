import { Home, Base } from '../pages';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';

describe('Page: base', () => {
    let component: Base;
    let navController: any;
    let aFire;
    let userService: any;

    beforeEach(() => {
        navController = jasmine.createSpyObj('navController', ['push', 'setRoot']);
        userService = jasmine.createSpyObj('userService', ['initUser']);
        component = new Base(userService, navController, aFire);
    });

    describe('ion view will enter', () => {
        describe('connected', () => {
            beforeEach(() => {
                aFire = { auth: Observable.of({ uid: 'ABC123' }) };
                component = new Base(userService, navController, aFire);
            });
            it('should set the root page', () => {
                userService.initUser.and.returnValue(Observable.of(new User('1')));
                component.ionViewWillEnter();
                expect(userService.initUser).toHaveBeenCalled();
                expect(navController.setRoot).toHaveBeenCalledWith(Home);
            });
        });
    });
});
