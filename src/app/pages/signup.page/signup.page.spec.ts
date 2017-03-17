import { SignUpPage } from '../pages';

describe('Page: sign up page', () => {

  let userServiceMock, navControllerMock, toastCtrlMock;
  let page;
  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userServiceMock', ['loginWithEmailAndPassword']);
    navControllerMock = jasmine.createSpyObj('navControllerMock', ['pop']);
    toastCtrlMock = jasmine.createSpyObj('toastCtrlMock', ['create', 'present']);
    page = new SignUpPage(userServiceMock, navControllerMock, toastCtrlMock);
  });

  describe('ionViewWillEnter', () => {
    it('should print if you entred.', () => {
      page.ionViewWillEnter();
    });
  });

  describe('sign up', () => {
    xit('should redirect to the connection page', () => {
      page.signUp();
      expect(navControllerMock.pop).toHaveBeenCalled();
      expect(toastCtrlMock.create).toHaveBeenCalled();
    });
  });
});
