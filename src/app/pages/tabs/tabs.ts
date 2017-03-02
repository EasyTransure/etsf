import { Component } from '@angular/core';
import { NewsList, MyNewsList, MyFollowedList } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  tab1Root: any = NewsList;
  tab2Root: any = MyFollowedList;
  tab3Root: any = MyNewsList;
  tabCount1 : number = 0;
  tabCount2 : number = 0;
  tabCount3 : number = 0;
  
  constructor ( ) { }

}
