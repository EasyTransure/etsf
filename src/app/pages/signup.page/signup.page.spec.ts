import { SignUpPage } from '../pages';

describe('Page: sign up page', () => {

  let userServiceMock, navControllerMock;
  let page;
  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userServiceMock', ['loginWithEmailAndPassword']);
    navControllerMock = jasmine.createSpyObj('navControllerMock', ['pop']);

    page = new SignUpPage(userServiceMock, navControllerMock);
  });

  describe('ionViewWillEnter', () => {
    it('should print if you entred.', () => {
      page.ionViewWillEnter();
    });
  });

  describe('sign up', () => {
    it('should redirect to the connection page', () => {
      page.signUp();
      expect(navControllerMock.pop).toHaveBeenCalledWith();
    });
  });
});
