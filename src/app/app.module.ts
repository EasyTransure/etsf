import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from './pages/home/home';
import { NewsForm } from './pages/newsForm/newsForm';
import { UserForm } from './pages/userForm/userForm';
import { NewsList } from './pages/newsList/newsList';
import { NewsDescription } from './pages/newsDescription/newsDescription';
import { UserService } from './services/user/userService';
import { NewsService } from './services/news/newsService';

@NgModule({
  declarations: [
    MyApp,
    Home,
    NewsList,
    NewsDescription,
    NewsForm,
    UserForm
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    NewsList,
    NewsDescription,
    NewsForm,
    UserForm
  ],
  providers: [ {provide: ErrorHandler, useClass: IonicErrorHandler}, UserService, NewsService ]
})
export class AppModule {}
