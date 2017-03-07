import { Tabs } from './tabs';
import { MyDiary } from '../pages';


describe('Page: Tabs', () => {
  let component: Tabs;

  beforeEach(() => {
    component = new Tabs();
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
});