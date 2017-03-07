import { NewsForm } from './newsForm';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { //User,
   News } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('Page: News Form', () => {
  let component: NewsForm;
  let navController: NavController;
  let altController: AlertController;
  let params: NavParams;
  let userServiceMock: any;
  let newsServiceMock: any;
  let news: News;
  let d: Date = new Date();
  let date: string;
  let type: string;
  let label: string;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('userService', ['getUsers']);
    newsServiceMock = jasmine.createSpyObj('newsService', ['addNews']);
    navController = jasmine.createSpyObj('navController', ['push']);
    altController = jasmine.createSpyObj('altController', ['present']);
    params = { data: { type: 'Medication' }, get: null };
    date = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    type = params.data.type;
    news = new News (0, type, '', date, 1);
    label = 'md-analytics';
    component = new NewsForm(params, altController, newsServiceMock, navController, userServiceMock);
  });

  describe('at initialization', () => {/*
    it('should initialize the users as an empty array', () => {
      expect(component.users).toEqual([]);
    });*/
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
     let response: Observable<News>;

    it('should call the NewsService', () => {
      response = Observable.of(news).delay(1);
      newsServiceMock.addNews.and.returnValue(response);
      component.onSubmit();

      expect(newsServiceMock.addNews).toHaveBeenCalledWith(news);
    });

    describe('upon successful response', () => {
      beforeEach(() => {
        response = Observable.of(news).delay(1);
        newsServiceMock.addNews.and.returnValue(response);
        component.onSubmit();
      });

      it('should add the news', (done) => {
        response.subscribe(() => {
          expect(component.news.id_news).toBe(0);
          done();
        });
      });
    });

    describe('upon failure', () => {
      it('should set that an error occurred', (done) => {
        response = Observable.create((observer) => {
          observer.error();
        }).delay(1);
        newsServiceMock.addNews.and.returnValue(response);
        component.onSubmit();

        response.subscribe(() => { }, () => {
          expect(component.errorOccurred).toBe(true);
          done();
        });
      });
    });
  });

});
