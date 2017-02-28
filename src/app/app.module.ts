import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home, NewsForm, UserForm, NewsList, NewsDescription, MyNewsList, Tabs, MyProfile } from './pages/pages';
import { UserService, NewsService } from './services/services';


@NgModule({
  declarations: [
    MyApp,
    Home,
    NewsList,
    MyNewsList,
    NewsDescription,
    NewsForm,
    UserForm,
    Tabs,
    MyProfile
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    NewsList,
    MyNewsList,
    NewsDescription,
    NewsForm,
    UserForm,
    Tabs,
    MyProfile
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, UserService, NewsService]
})
export class AppModule { }
