import { Component } from '@angular/core';
import { NewsList, MyNewsList, MyProfile } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  tab1Root: any = NewsList;
  tab2Root: any = MyNewsList;
  tab3Root: any = MyProfile;

  constructor ( ) { }

}
