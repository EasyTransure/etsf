import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home, DiaryForm, UserForm, DiaryDescription, MyDiary, Tabs, MyProfile, ActivityList, SymptomList } from './pages/pages';
import { DiaryService, ReferentialService, UserService } from './services/services';
import { AngularFireModule } from 'angularfire2';
import { SymptomPipe } from './components/components';

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
    DiaryForm,
    UserForm,
    Tabs,
    MyProfile,
    ActivityList, 
    SymptomList,
    SymptomPipe
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
    DiaryForm,
    UserForm,
    Tabs,
    MyProfile,
    ActivityList,
    SymptomList
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, DiaryService, ReferentialService, UserService]
})
export class AppModule { }