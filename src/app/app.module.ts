import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home, NewsForm, UserForm, DiaryDescription, MyDiary, Tabs, MyProfile } from './pages/pages';
import { DiaryService, ReferentialService, UserService, NewsService } from './services/services';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCKBUyON-7e8wmquWCSOonhqCxR58IYNoA",
  authDomain: "angegardienionic.firebaseapp.com",
  databaseURL: "https://angegardienionic.firebaseio.com",
  storageBucket: "angegardienionic.appspot.com",
  messagingSenderId: "476981943411"
};

@NgModule({
  declarations: [
    MyApp,
    Home,
    MyDiary,
    DiaryDescription,
    NewsForm,
    UserForm,
    Tabs,
    MyProfile
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    MyDiary,
    DiaryDescription,
    NewsForm,
    UserForm,
    Tabs,
    MyProfile
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, DiaryService, ReferentialService, UserService, NewsService]
})
export class AppModule { }