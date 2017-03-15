import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConnectionLoginPage, Home, DiaryForm, UserForm, DiaryDescription, ResetPassword,
   MyDiary, Tabs, MyProfile, ActivityList, SymptomList, SignUpPage } from './pages/pages';
import { DiaryService, ReferentialService, UserService  } from './services/services';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { SymptomPipe } from './components/components';

export const firebaseConfig = {
  apiKey: "AIzaSyCKBUyON-7e8wmquWCSOonhqCxR58IYNoA",
  authDomain: "angegardienionic.firebaseapp.com",
  databaseURL: "https://angegardienionic.firebaseio.com",
  storageBucket: "angegardienionic.appspot.com",
  messagingSenderId: "476981943411"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    MyApp,
    ConnectionLoginPage,
    Home,
    MyDiary,
    DiaryDescription,
    DiaryForm,
    UserForm,
    Tabs,
    MyProfile,
    ActivityList,
    SymptomList,
    SymptomPipe,
    SignUpPage,
    ResetPassword
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnectionLoginPage,
    Home,
    MyDiary,
    DiaryDescription,
    DiaryForm,
    UserForm,
    Tabs,
    MyProfile,
    ActivityList,
    SymptomList,
    SignUpPage,
    ResetPassword
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, DiaryService, ReferentialService, UserService]
})
export class AppModule { }
