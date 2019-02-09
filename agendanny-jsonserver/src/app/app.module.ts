import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AvatarModule } from 'ng2-avatar';

import { CallNumber } from '@ionic-native/call-number';
import { NewPersonPage } from '../pages/new-person/new-person';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonProvider } from '../providers/person.provider';
import { IonicStorageModule } from '@ionic/storage';
import { EditPersonPage } from '../pages/edit-person/edit-person';
import { PersonJsonProvider } from '../providers/person-json.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewPersonPage,
    EditPersonPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    AvatarModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '_agendanny',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewPersonPage,
    EditPersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallNumber,
    PersonProvider,
    PersonJsonProvider
  ]
})
export class AppModule {}
