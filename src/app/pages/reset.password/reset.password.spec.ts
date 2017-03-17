import { ResetPassword } from '../pages';

describe('Page: reset password', () => {

  let userServiceMock, navControllerMock, toastCtrlMock;
  let page;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userServiceMock', ['loginWithEmailAndPassword']);
    navControllerMock = jasmine.createSpyObj('navControllerMock', ['pop']);
    toastCtrlMock = jasmine.createSpyObj('toastCtrlMock', ['create', 'present']);

    page = new ResetPassword(userServiceMock, navControllerMock, toastCtrlMock);
  });

  describe('ionViewWillEnter', () => {
    it('should print if you entred.', () => {
      page.ionViewWillEnter();
    });
  });

  describe('reset', () => {
    xit('should redirect to the connection page', () => {
      page.reset();
      expect(navControllerMock.pop).toHaveBeenCalled();
      expect(toastCtrlMock.create).toHaveBeenCalled();
    });
  });
});
