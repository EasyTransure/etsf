import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home, ConnectionLoginPage, SignUpPage, Base, UserForm } from './pages/pages';
import { UserService } from './services/services';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyA_-aXRWOHtfJijAJqFPq7okDhuCuB5E68",
  authDomain: "ets-back.firebaseapp.com",
  databaseURL: "https://ets-back.firebaseio.com",
  projectId: "ets-back",
  storageBucket: "ets-back.appspot.com",
  messagingSenderId: "395354565581"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    MyApp,
    Home,
    Base,
    SignUpPage,
    UserForm,
    ConnectionLoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Base,
    SignUpPage,
    UserForm,
    ConnectionLoginPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, UserService]
})

export class AppModule { }
