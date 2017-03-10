import { Observable } from 'rxjs/Observable';
import { MyDiary } from './myDiary';
import { ConnectionLoginPage } from '../pages';
import { NavController } from 'ionic-angular';
import { User } from '../../model/_model';

describe('Page: My diary', () => {
  let component: MyDiary;
  let navController: NavController;
  let actionSheetCtrl: any;
  let diaryServiceMock: any;
  let userService: any;

  beforeEach(() => {
    navController = jasmine.createSpyObj('navController', ['push']);
    actionSheetCtrl = jasmine.createSpyObj('actionSheetCtrl', ['create']);
    diaryServiceMock = jasmine.createSpyObj('diaryService', ['getEntriesForUser']);
    diaryServiceMock.getEntriesForUser.and.returnValue(Observable.from([]));
    userService = jasmine.createSpyObj('userService', ['getCurrentUser']);
    component = new MyDiary(navController, diaryServiceMock, actionSheetCtrl, userService);
  });

  describe('at initialization', () => {
    it('should initialize the diary entries as an empty array', () => {
      expect(component.myDiaryEntries).toEqual([]);
    });
    it('should initialize the type to empty', () => {
      expect(component.type).toEqual('');
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

  describe('ionViewWillEnter', () => {
    describe('when user is valid', () => {
      it('should call the DiaryService', () => {
        userService.getCurrentUser.and.returnValue(new User('1'));
        component.ionViewWillEnter();
        expect(userService.getCurrentUser).toHaveBeenCalled();
        expect(diaryServiceMock.getEntriesForUser).toHaveBeenCalled();
      });
    });

    describe('when user is not valid', () => {
      it('should navigate to the ConnectionLogin page', () => {
        userService.getCurrentUser.and.returnValue(null);
        component.ionViewWillEnter();
        expect (navController.push).toHaveBeenCalledWith(ConnectionLoginPage);
      });
    })

  });

  describe('createANews', () => {
    it('should redirect to news creation page', () => {
      let present = jasmine.createSpy("present");
      actionSheetCtrl.create.and.returnValue({ "test": true, "present": present });
      component.createDiary();
      expect(actionSheetCtrl.create).toHaveBeenCalled();
      expect(present).toHaveBeenCalled();
    });
  });

  /*describe('goToDetails', () => {
    it('should go to the news description screen, passing in the news', () => {
      let news = new News(1, 't', 'd', 'date', 1);
      component.goToDetails(entry);
      expect(navController.push).toHaveBeenCalledWith(DiaryDescription, { entry: entry });
    });
  });*/
});
