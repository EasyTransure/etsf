import { MyNewsList } from './myNewsList';
import { NewsForm, NewsDescription } from '../pages';
import { NavController, ActionSheetController } from 'ionic-angular';
import { News } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('Page: My News List', () => {
  let component: MyNewsList;
  let navController: NavController;
  let actionSheetCtrl: ActionSheetController;
  //let actionSheet: ActionSheet;
  let newsServiceMock: any;

  beforeEach(() => {
    newsServiceMock = jasmine.createSpyObj('newsService', ['getMyNews']);
    navController = jasmine.createSpyObj('navController', ['push']);
    actionSheetCtrl = jasmine.createSpyObj('actionSheetCtrl', ['create']);
    //actionSheet = jasmine.createSpyObj('actionSheet', ['present']);
    component = new MyNewsList(navController, newsServiceMock, actionSheetCtrl);
  });

  describe('at initialization', () => {
    it('should initialize the news as an empty array', () => {
      expect(component.myNews).toEqual([]);
    });
    it('should initialize the type to empty', () => {
      expect(component.type).toEqual('');
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

  describe('ionViewWillEnter', () => {
    let response: Observable<News[]>;

    it('should call the NewsService', () => {
      response = Observable.of([]).delay(1);
      newsServiceMock.getMyNews.and.returnValue(response);
      component.ionViewWillEnter();

      expect(newsServiceMock.getMyNews).toHaveBeenCalled();
    });

    describe('upon successful response', () => {
      beforeEach(() => {
        response = Observable.of([new News(1, 'Title', 'Desc', 'now', 3)]).delay(1);
        newsServiceMock.getMyNews.and.returnValue(response);
        component.ionViewWillEnter();
      });

      it('should load all the news', (done) => {
        response.subscribe(() => {
          expect(component.myNews.length).toBe(1);
          expect(component.myNews[0].id_news).toBe(1);
          done();
        });
      });
    });

    describe('upon failure', () => {
      it('should set that an error occurred', (done) => {
        response = Observable.create((observer) => {
          observer.error();
        }).delay(1);
        newsServiceMock.getMyNews.and.returnValue(response);
        component.ionViewWillEnter();

        response.subscribe(() => { }, () => {
          expect(component.errorOccurred).toBe(true);
          done();
        });
      });
    });

  });

  describe('createANews', () => {
    it('should redirect to news creation page', () => {
      component.createANews();
      expect(actionSheetCtrl.create).toHaveBeenCalled();
      expect(navController.push).toHaveBeenCalledWith(NewsForm);
      //expect(actionSheet.present).toHaveBeenCalled();
    });
  });

  describe('goToDetails', () => {
    it('should go to the news description screen, passing in the news', () => {
      let news = new News(1, 't', 'd', 'date', 1);
      component.goToDetails(news);
      expect(navController.push).toHaveBeenCalledWith(NewsDescription, { newsInfo: news });
    });
  });
});
