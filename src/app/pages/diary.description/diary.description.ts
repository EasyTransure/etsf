import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DiaryEntry } from '../../model/_model';

@Component({
  selector: 'page-diaryDescription',
  templateUrl: 'diary.description.html'
})

export class DiaryDescription {
  public entry: DiaryEntry = new DiaryEntry('', '', '', '', '');
  public errorOccurred = false;     // Field is never really used, but it is to illustrate what happens when an async call fails.

  constructor( public params: NavParams ) { 
    this.entry = params.data.entry;
  }

}