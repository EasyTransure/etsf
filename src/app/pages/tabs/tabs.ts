import { Component } from '@angular/core';
import {  MyNewsList } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  infoRoot: any = "";
  journalRoot: any = MyNewsList;
  tabCount1 : number = 0;
  tabCount2 : number = 0;
  tabCount3 : number = 0;
  
  constructor ( ) { }

}
