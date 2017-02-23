import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newsDescription',
  templateUrl: 'newsDescription.html'
})

export class NewsDescription {
  newsInfo;

  constructor( public params: NavParams ) { 
    this.newsInfo = params.data.newsInfo;
  }  

}