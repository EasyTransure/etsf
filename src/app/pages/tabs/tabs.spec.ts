import { MyDiary, Tabs } from '../pages';
import { User } from '../../model/_model';


describe('Page: Tabs', () => {
  let component: Tabs;
  let user: User;
  let userService: any;

  beforeEach(() => {
    user = new User('1', '', '', '', 1);
    userService = jasmine.createSpyObj('userService', ['getCurrentUser']);
    component = new Tabs(userService);
  });

  describe('at initialization', () => {
    it('should initialize the second tab to My news', () => {
      expect(component.infoRoot).toEqual("");
    });
    it('should initialize the third tab to My profile', () => {
      expect(component.journalRoot).toEqual(MyDiary);
    });
    it('should initialize the nomber of general news to 0', () => {
      expect(component.tabCount1).toEqual(0);
    });
    it('should initialize the nombre of my followed news to 0', () => {
      expect(component.tabCount2).toEqual(0);
    });
    it('should initialize the nombre of my news to 0', () => {
      expect(component.tabCount3).toEqual(0);
    });
  });

  describe('ion will enter', () => {
    it('should call the user service', () => {
      userService.getCurrentUser.and.returnValue(new User('1'));
      component.ionViewWillEnter();
      expect(userService.getCurrentUser).toHaveBeenCalled();
    });
  });
});