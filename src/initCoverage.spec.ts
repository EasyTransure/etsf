// This is a little trick to load all the classes. Just ensure one class is loaded per package
import {Home} from './app/pages/pages';
//import * as components from './app/components/components';
import {News} from './app/model/_model';
import {NewsService} from './app/services/services';

/* tslint disable */
describe('Init coverage test', () =>{
  it('should just launch, but it will additionally ensure coverage is done on all files', () =>{
    // We are forced to instantiate at least one object, or Typescript compiler removes the import, as it is unused.
    let p = new Home(null);
    let s = new NewsService(null);
    let modelNews = new News(1, "t", "d", "d", 12);
    expect(true).toBe(true);
  })
})
