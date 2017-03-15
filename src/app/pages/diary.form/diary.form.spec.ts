import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DiaryEntry, User, CheckedSymptom, RefSymptom } from '../../model/_model';
import { SymptomList, DiaryForm } from '../pages';

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
    entry = new DiaryEntry('', this.type, '', this.date, '1');
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

  describe('initType', () => {
    it('should redirect to symptom list page', () => {
      let type = ['SymptomCheck', 'Activity', 'FreeEntry'];
      let label = ['md-american-football', 'md-paper-plane', 'md-thermometer'];
      for (let i in type) {
        component.initType(type[i]);
        expect(component.labelD).toBe(label[i]);
      }
    });
  });

  describe('onSubmit', () => {
    it('should send the diary to the database', () => {
      params = { data: { type: 'SymptomCheck' }, get: null };
      component = new DiaryForm(params, altController, diaryServiceMock, navController, userServiceMock);
      component.onSubmit();
      if (type == 'SymptomCheck') {
        expect(component.reconvertArrayType).toHaveBeenCalled();
      }
      expect(diaryServiceMock.addNewEntry).toHaveBeenCalled();
      expect(navController.popToRoot).toHaveBeenCalled();
    });
  });

  describe('chooseSymptoms', () => {
    it('should redirect to symptom list page', () => {
      component.chooseSymptoms();
      expect(navController.push).toHaveBeenCalledWith(SymptomList, { symptoms: component.symptoms });
    });
  });

  describe('convertArrayType', () => {
    it('should convert a RefSymptom to CheckedSymptom', () => {
      let unchecked: RefSymptom[] = [new RefSymptom('', '')];
      let a = component.convertArrayType(unchecked);
      expect(a[0].checked).toBe(false);
    });
  });

  describe('reconvertArrayType', () => {
    it('should convert a CheckedSymptom to RefSymptom', () => {
      let checked: CheckedSymptom[] = [new CheckedSymptom('', '', true)];
      let a = component.reconvertArrayType(checked);
      expect(a[0].id).toBe('');
    });
  });

});