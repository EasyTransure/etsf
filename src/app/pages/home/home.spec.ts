import { NavController } from 'ionic-angular';
import { Tabs, Home } from '../pages';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/_model';

describe('Page: home', () => {
    let component: Home;
    let navController: NavController;
    let aFire;
    let userService: any;

    beforeEach(() => {
        navController = jasmine.createSpyObj('navController', ['push', 'setRoot']);
        userService = jasmine.createSpyObj('userService', ['initUser']);
        aFire = { auth: Observable.of({ uid: 'ABC123' }) };
        component = new Home(userService, navController, aFire);
    });

    describe('ion view will enter', () => {
        it('should set the root page', () => {
            userService.initUser.and.returnValue(Observable.of(new User('1')));
            component.ionViewWillEnter();
            expect(userService.initUser).toHaveBeenCalled();
            expect(navController.setRoot).toHaveBeenCalledWith(Tabs);
        });
    });
})
