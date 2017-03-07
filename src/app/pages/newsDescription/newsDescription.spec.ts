import { NewsDescription } from './newsDescription';
import { NavParams } from 'ionic-angular';
import { DiaryEntry } from '../../model/_model';

describe('Page: Diary Description', () => {
  let component: NewsDescription;
  let navParams: NavParams;
  let entry: DiaryEntry;

  beforeEach(() => {
    entry = new DiaryEntry('', '', '', '', '');
    navParams = { data: { entry: entry }, get: null };
    component = new NewsDescription(navParams);
  });

  describe('at initialization', () => {
    it('should initialize the entry', () => {
      expect(component.entry).toEqual(entry);
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

});
