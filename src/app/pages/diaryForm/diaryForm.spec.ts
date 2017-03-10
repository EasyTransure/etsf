import { DiaryForm } from './diaryForm';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DiaryEntry, User, CheckedSymptom } from '../../model/_model';

describe('Page: Diary Form', () => {
  let component: DiaryForm;
  let navController: NavController;
  let altController: AlertController;
  let params: NavParams;
  let userServiceMock: any;
  let diaryServiceMock: any;
  let entry: DiaryEntry;
  let type: string;
  let label: string;
  let symptoms: CheckedSymptom[];

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userService', ['getUsers', 'getCurrentUser']);
    userServiceMock.getCurrentUser.and.returnValue(new User('1'));
    diaryServiceMock = jasmine.createSpyObj('diaryService', ['addNewEntry']);
    diaryServiceMock.addNewEntry.and.returnValue(null);
    navController = jasmine.createSpyObj('navController', ['push', 'popToRoot']);
    altController = jasmine.createSpyObj('altController', ['present']);
    params = { data: { type: 'Medication' }, get: null };
    type = params.data.type;
    entry = new DiaryEntry ('', this.type, '', this.date, '1');
    label = 'md-analytics';
    symptoms = [];
    component = new DiaryForm(params, altController, diaryServiceMock, navController, userServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
    it('should initialize the label to empty', () => {
      expect(component.labelD).toEqual(label);
    });
    it('should initialize the type to empty', () => {
      expect(component.type).toEqual(type);
    });
    it('should initialize the symptoms to empty', () => {
      expect(component.symptoms).toEqual(symptoms);
    });
  });

  describe('onSubmit', () => {
    it('should send the diary to the database', () =>{
      component.onSubmit();
      //expect(userService.getCurrentUser).toHaveBeenCalled();
      expect(diaryServiceMock.addNewEntry).toHaveBeenCalled();

    });
  });

  describe('chooseSymptoms', () => {
    xit('should redirect to symptom list page', () => {

    });
  });

  describe('convertArrayType', () => {
    it('should convert a RefSymptom to CheckedSymptom', () => {

    });
  });

});
