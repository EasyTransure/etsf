import { NavController } from 'ionic-angular';
import { Home } from './home';

describe('Page: home', () => {
    let navController: NavController;
    let component: Home;

    beforeEach(() => {
        navController = jasmine.createSpyObj('navController', ['navController']);
        component = new Home (navController);
    })
})