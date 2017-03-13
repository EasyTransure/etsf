import { Observable } from 'rxjs/Observable';
import { ActivityList } from './activityList';
import { NavController, NavParams } from 'ionic-angular';
import { RefActivity } from '../../model/_model';
import { DiaryForm } from '../pages'

describe('Page: My Activity List', () => {
    let component: ActivityList;
    let navController: NavController;
    let navParams: NavParams;
    let refService: any;

    beforeEach(() => {
        navController = jasmine.createSpyObj('navController', ['push']);
        refService = jasmine.createSpyObj('refService', ['getActivities']);
        refService.getActivities.and.returnValue(Observable.from([]));
        navParams = { data: { type: 'Activity' }, get: null };
        component = new ActivityList(refService, navParams, navController);
    });

    describe('at initialization', () => {
        it('should initialize the activities as an empty array', () => {
            expect(component.activities).toEqual([]);
        });
        it('should initialize the temp to null', () => {
            expect(component.temp).toBe(null);
        });
        it('should initialize the type to an empty string', () => {
            expect(component.type).toBe(navParams.data.type);
        });
        it('should initialize the error indicator to false', () => {
            expect(component.errorOccurred).toBe(false);
        });
    });

    describe('ionViewWillEnter', () => {
        it('should initialize the activity list', () => {
            component.ionViewWillEnter();
            expect(refService.getActivities).toHaveBeenCalled();
        });
    });

    describe('chooseActivity', () => {
        it('should redirect to diary form with ctype and activity', () => {
            let act: RefActivity = new RefActivity('', '');
            component.chooseActivity(act);
            expect(navController.push).toHaveBeenCalledWith(DiaryForm, { type: component.type, activity: act });
        });
    });
    /*
        describe('initializeActivities', () => {
            it('initialise the activities', () => {
                let sympt: RefSymptom = new RefSymptom('', '');
                component.initializeActivities();
                component.temp = refService.getActivities();
                if (component.activities.length === 0) {
                    expect(component.activities.length).toBeGreaterThan(0);
                    expect(component.convertType).toHaveBeenCalledWith(sympt);
                } else {
    
                }
            });
        });
    
        describe('searchActivities', () => {
            it('should search through the activities', () => {
                component.searchActivities(event);
                component.temp = refService.getActivities();
                expect(component.initializeActivities).toHaveBeenCalled();
                expect(component.activities.filter).toHaveBeenCalled();
            });
        });
    */
});
