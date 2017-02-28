import { NewsList } from './newsList';
import { NavController } from 'ionic-angular';
import { News } from '../../model/_model';
import {Observable} from 'rxjs/Observable';

describe('Page: News List', () => {
  let component: NewsList;
  let navController : NavController;
  let newsServiceMock: any;

  beforeEach(() => {
    newsServiceMock = jasmine.createSpyObj('newsService', ['getNews']);
    component = new NewsList(navController, newsServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the news as an empty array', () => {
      expect(component.myNews).toEqual([]);
    });
  });

  describe('ionViewWillEnter', () => {
    let response: Observable<News[]>;
    beforeEach(() => {
      response = Observable.of([new News(1, 'Title', 'Desc', 'now', 3)]).delay(10);
      newsServiceMock.getNews.and.returnValue(response);
      component.ionViewWillEnter();
    });

    it('should load all the news', (done) => {
      response.subscribe( () => {
        expect(component.myNews.length).toBe(1);
        expect(component.myNews[0].id_news).toBe(1);
        done();
      });
    });
  });
});
