import { NewsService } from '../services';
import { News } from '../../model/_model';
import { Observable } from 'rxjs/Observable';

describe('News service', () => {
  let newsService: NewsService = null, mockHttp;
  let news: News;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post', 'put', 'delete']);
    newsService = new NewsService(mockHttp);
    news = new News (1, '', '', '', 1);
  });

  describe('getNews', () => {
    it('should return all the news', () => {
      mockHttp.get.and.returnValue(Observable.of([{id:'12'}]));
      newsService.getNews();

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });

  describe('getFollowedNews', () => {
    it('should return all the news followed by the connected user', () => {
      mockHttp.get.and.returnValue(Observable.of([{}]));
      newsService.getFollowedNews(1);

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });

  describe('getMyNews', () => {
    it('should return all the news of the connected user', () => {
      mockHttp.get.and.returnValue(Observable.of([{}]));
      newsService.getMyNews(1);

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });

  describe('addNews', () => {
    it('should return the added news', () => {
      mockHttp.post.and.returnValue(Observable.of({}));
      newsService.addNews(news);

      expect(mockHttp.post).toHaveBeenCalled();
    });
  });

  describe('updateNews', () => {
    it('should return the updated news', () => {
      mockHttp.put.and.returnValue(Observable.of({}));
      newsService.updateNews(news.id_news, news);

      expect(mockHttp.put).toHaveBeenCalled();
    });
  });

  describe('deleteNews', () => {
    it('should return the deleted news', () => {
      mockHttp.delete.and.returnValue(Observable.of({}));
      newsService.deleteNews(news.id_news);

      expect(mockHttp.delete).toHaveBeenCalled();
    });
  });

  describe('followNews', () => {
    it('should return the person followed', () => {
      mockHttp.post.and.returnValue(Observable.of({}));
      newsService.followNews(news.id_news, news);

      expect(mockHttp.post).toHaveBeenCalled();
    });
  });
});
