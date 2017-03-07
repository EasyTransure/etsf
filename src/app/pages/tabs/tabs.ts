import { Component } from '@angular/core';
import {  MyDiary } from '../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  infoRoot: any = "";
  journalRoot: any = MyDiary;
  tabCount1 : number = 0;
  tabCount2 : number = 0;
  tabCount3 : number = 0;
  
  constructor ( ) { }

}
