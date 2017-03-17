import { Observable } from 'rxjs/Observable';
import { NavController, NavParams } from 'ionic-angular';
import { CheckedSymptom, RefSymptom } from '../../model/_model';
import { DiaryForm, SymptomList } from '../pages'

describe('Page: My Symptom List', () => {
    let component: SymptomList;
    let navController: NavController;
    let navParams: NavParams;
    let refService: any;
    let sympts: CheckedSymptom[] = [];

    beforeEach(() => {
        navController = jasmine.createSpyObj('navController', ['popTo']);
        refService = jasmine.createSpyObj('refService', ['getSymptoms']);
        refService.getSymptoms.and.returnValue(Observable.from([]));
        component = new SymptomList(refService, navController, navParams);
        navParams = { data: { symptoms: sympts }, get: null };
    });

    describe('at initialization', () => {
        it('should initialize the symptoms as an empty array', () => {
            expect(component.symptoms).toEqual([]);
        });
        it('should initialize the temp as an empty array', () => {
            expect(component.temp).toBe(null);
        });
        it('should initialize the error indicator to false', () => {
            expect(component.errorOccurred).toBe(false);
        });
    });

    describe('ionViewWillEnter', () => {
        it('should initialize the symptom list', () => {
            refService.getSymptoms.and.returnValue(Observable.from([]));
            component.ionViewWillEnter();
            expect(component.symptoms).toBe(navParams.data.symptoms);
            expect(refService.getSymptoms).toHaveBeenCalled();
        });
    });

    describe('selectSymptom', () => {
        it('should select the symptom choosen', () => {
            let symptom: CheckedSymptom = new CheckedSymptom('', '');
            component.selectSymptom(symptom);
            component.symptoms.filter((data) => {
                if (data.id === symptom.id) {
                    expect(data.checked).toBe(!data.checked);
                }
            })
        });
    });

    describe('on submit', () => {
        it('should redirect to diary form with checked symptoms', () => {
            component.onSubmit();
            expect(navController.popTo).toHaveBeenCalledWith(DiaryForm, { symptoms: component.symptoms });
        });
    });
/*
    describe('initialize the symptoms', () => {
        it('initialise the symptoms', () => {
            let sympt: RefSymptom = new RefSymptom('', '');
            component.temp = refService.getSymptoms;
            component.initializeSymptoms();
            if (component.symptoms.length === 0) {
                expect(component.symptoms.length).toBeGreaterThan(0);
                expect(component.convertType).toHaveBeenCalledWith(sympt);
            } else {
                ;
            }
        });
    });

    describe('search through symptoms', () => {
        it('should redirect to diary creation page', () => {
            component.temp = refService.getSymptoms;
            component.searchSymptoms(event);
            expect(component.initializeSymptoms).toHaveBeenCalled();
            expect(component.symptoms.filter).toHaveBeenCalled();
        });
    });
*/
    describe('convertType', () => {
        it('should return a checked symptom', () => {
            let sympt: RefSymptom = new RefSymptom('', '');
            let a = component.convertType(sympt);
            expect(a.checked).toBe(false);
        });
    });
});
