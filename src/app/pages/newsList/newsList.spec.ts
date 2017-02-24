import { Observable } from 'rxjs/Observable';
import { NavController } from 'ionic-angular';
import { NewsService } from '../../services/services';
import { NewsList } from '../pages'

describe('News List', () => {
  let newsList: NewsList = null, mockHttp;
  let nav: NavController;
  let _newsService: NewsService;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    newsList = new NewsList(nav, _newsService);
  });
/*
  describe('getAllNews', () => {
    it('should return all the news', () => {
      mockHttp.get.and.returnValue(Observable.of([{}]));
      newsList.getAllNews();

      expect(mockHttp.get).toHaveBeenCalled();
    });
  });*/

});
