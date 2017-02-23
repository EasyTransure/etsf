import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class Login {
  

  constructor( public alertCtrl: AlertController, public navCtrl: NavController) { 
    
  }

  public onSubmit() {
    
    let alert = this.alertCtrl.create({
      title: 'New News',
      subTitle: 'News ajouté avec success!'
    });
    alert.present();
  } 
  
}