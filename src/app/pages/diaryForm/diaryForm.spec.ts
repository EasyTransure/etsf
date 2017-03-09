import { DiaryForm } from './diaryForm';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DiaryEntry } from '../../model/_model';

describe('Page: News Form', () => {
  let component: DiaryForm;
  let navController: NavController;
  let altController: AlertController;
  let params: NavParams;
  let userServiceMock: any;
  let diaryServiceMock: any;
  let entry: DiaryEntry;
  let d: Date = new Date();
  let date: string;
  let type: string;
  let label: string;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userService', ['getUsers']);
    diaryServiceMock = jasmine.createSpyObj('diaryService', ['addNewEntry']);
    diaryServiceMock.addNewEntry.and.returnValue(null);
    navController = jasmine.createSpyObj('navController', ['push']);
    altController = jasmine.createSpyObj('altController', ['present']);
    params = { data: { type: 'Medication' }, get: null };
    date = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    type = params.data.type;
    entry = new DiaryEntry ('', this.type, '', this.date, '1');
    label = 'md-analytics';
    component = new DiaryForm(params, altController, diaryServiceMock, navController, userServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
    it('should initialize the date to sysdate', () => {
      expect(component.date).toBe(date);
    });
    it('should initialize the label to empty', () => {
      expect(component.labelD).toEqual(label);
    });
    it('should initialize the type to empty', () => {
      expect(component.type).toEqual(type);
    });
  });

  describe('onSubmit', () => {
     
  });

});
