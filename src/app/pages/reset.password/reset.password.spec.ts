import { ResetPassword } from '../pages';

describe('Page: reset password', () => {

  let userServiceMock, navControllerMock;
  let page;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userServiceMock', ['loginWithEmailAndPassword']);
    navControllerMock = jasmine.createSpyObj('navControllerMock', ['pop']);

    page = new ResetPassword(userServiceMock, navControllerMock);
  });

  describe('ionViewWillEnter', () => {
    it('should print if you entred.', () => {
      page.ionViewWillEnter();
    });
  });

  describe('reset', () => {
    it('should redirect to the connection page', () => {
      page.reset();
      expect(navControllerMock.pop).toHaveBeenCalledWith();
    });
  });
});
