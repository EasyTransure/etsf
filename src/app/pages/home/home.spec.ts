import { NavController } from 'ionic-angular';
import { Home } from './home';
import { Tabs } from '../pages';
import { Observable } from 'rxjs/Observable';

describe('Page: home', () => {
    let component: Home;
    let navController: NavController;
    let aFire;

    beforeEach(() => {
        navController = jasmine.createSpyObj('navController', ['push', 'setRoot']);
        aFire = { auth: Observable.of({ uid: 'ABC123' }) };
        component = new Home(navController, aFire);
    });

    describe('at initialization', () => {
    it('should set the root page', () => {
        expect(navController.setRoot).toHaveBeenCalledWith(Tabs);
    });
  });
})
