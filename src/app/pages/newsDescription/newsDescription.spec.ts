import { NewsDescription } from './newsDescription';
import { NavParams } from 'ionic-angular';
import { News, Follow } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('Page: News Description', () => {
  let component: NewsDescription;
  let navParams: NavParams;
  let newsServiceMock: any;
  let news: News;
  let follow: Follow;

  beforeEach(() => {
    newsServiceMock = jasmine.createSpyObj('newsService', ['followNews']);
    news = new News(1, '', '', '', 0);
    follow = new Follow (1, 1);
    navParams = { data: { newsInfo: news }, get: null };
    component = new NewsDescription(navParams, newsServiceMock);
  });

  describe('at initialization', () => {
    it('should initialize the news', () => {
      expect(component.newsInfo).toEqual(news);
    });
    it('should initialize the follow', () => {
      expect(component.follow).toEqual(follow);
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });

  describe('followPerson', () => {
    let response: Observable<Follow>;

    it('should call the NewsService', () => {
      response = Observable.of(follow).delay(1);
      newsServiceMock.followNews.and.returnValue(response);
      component.followPerson(follow.id_user);

      expect(newsServiceMock.followNews).toHaveBeenCalled();
    });

    describe('upon successful response', () => {
      beforeEach(() => {
        response = Observable.of(follow).delay(1);
        newsServiceMock.followNews.and.returnValue(response);
        component.followPerson(follow.id_user);
      });

      it('should load all the news', (done) => {
        response.subscribe(() => {
          expect(component.follow.id_user).toBe(1);
          expect(component.follow.user).toBe(1);
          done();
        });
      });
    });

    describe('upon failure', () => {
      it('should set that an error occurred', (done) => {
        response = Observable.create((observer) => {
          observer.error();
        }).delay(1);
        newsServiceMock.followNews.and.returnValue(response);
        component.followPerson(follow.id_user);

        response.subscribe(() => { }, () => {
          expect(component.errorOccurred).toBe(true);
          done();
        });
      });
    });
  });

});
