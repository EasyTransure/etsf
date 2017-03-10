import { MyDiary } from './myDiary';
import { NavController } from 'ionic-angular';
import { User, DiaryEntry } from '../../model/_model';

describe('Page: My Diary List', () => {
  let component: MyDiary;
  let navController: NavController;
  let actionSheetCtrl: any;
  let diaryServiceMock: any;
  let userService: any;

  beforeEach(() => {
    navController = jasmine.createSpyObj('navController', ['push']);
    actionSheetCtrl = jasmine.createSpyObj('actionSheetCtrl', ['create']);
    diaryServiceMock = jasmine.createSpyObj('diaryService', ['getEntriesForUser']);
    diaryServiceMock.getEntriesForUser.and.returnValue(null);
    userService = jasmine.createSpyObj('userService', ['getCurrentUser']);
    userService.getCurrentUser.and.returnValue(new User('1'));
    component = new MyDiary(navController, diaryServiceMock, actionSheetCtrl, userService);
  });

  describe('at initialization', () => {
    it('should initialize the diary as an empty array', () => {
      expect(component.myDiaryEntries).toBe(undefined);
    });
    it('should initialize the type to empty', () => {
      expect(component.type).toEqual('');
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

  describe('ionViewWillEnter', () => {
    it('should call the DiaryService', () => {
      component.ionViewWillEnter();
      expect(userService.getCurrentUser).toHaveBeenCalled();
      expect(diaryServiceMock.getEntriesForUser).toHaveBeenCalled();
    });
  });

  describe('createDiary', () => {
    it('should redirect to diary creation page', () => {
      let present = jasmine.createSpy("present");
      actionSheetCtrl.create.and.returnValue({"test":true, "present": present });
      component.createDiary();
      expect(actionSheetCtrl.create).toHaveBeenCalled();
      expect(present).toHaveBeenCalled();
    });
  });

  describe('goToDetails', () => {
    it('should go to the diary description screen', () => {
      let entry = new DiaryEntry('', '', '', '', '');
      component.goToDetails(entry);
      expect(navController.push).toHaveBeenCalled();
    });
  });
});
