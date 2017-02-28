import { NewsService } from '../services';
import { Observable } from 'rxjs/Observable';

describe('News service', () => {
  let newsService: NewsService = null, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    newsService = new NewsService(mockHttp);
  });

  describe('getNews', () => {
    it('should return all the news', () => {
      mockHttp.get.and.returnValue(Observable.of([{id:'12'}]));
      newsService.getNews();

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });

  describe('getANews', () => {
    it('should return all the news of he connected user', () => {
      mockHttp.get.and.returnValue(Observable.of([{}]));
      newsService.getMyNews(1);

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });
});
