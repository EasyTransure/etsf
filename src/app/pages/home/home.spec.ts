import { NavController } from 'ionic-angular';
import { User } from '../../model/_model';
import { Home } from '../pages';
import { UserForm } from '../pages';

describe('Page: home', () => {
    let component: Home;
    let navController: NavController;
    let userServiceMock: any;
    let user: User;

    beforeEach(() => {
        user = new User('1');
        userServiceMock = jasmine.createSpyObj('userService', ['getCurrentUser', 'logout']);
        component = new Home(navController, userServiceMock);
    });

    describe('ion view will enter', () => {
        it('should set the root page', () => {
            component.ionViewWillEnter();
        });
    });

    describe('change picture', () => {
        it('should set the root page', () => {
            component.goToCamera();
        });
    });

    describe('updateUser', () => {
        it('should redirect to user edition page', () => {
            component.updateUser(user);
            expect(navController.push).toHaveBeenCalledWith(UserForm, { user });
        });
    });

    describe('log out', () => {
        it('should log out the user and redirect to connection', () => {
            component.logout();
            expect(userServiceMock.logout).toHaveBeenCalled();
        });
    });

})
