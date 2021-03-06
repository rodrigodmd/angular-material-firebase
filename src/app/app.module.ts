import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/components/header/header.component';

//import { MaterialModule } from './material.module';
import { 
  MatToolbarModule, 
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatMenuModule,
} from '@angular/material';
import { BodyComponent } from './layout/components/body/body.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UserListComponent } from './main/user-list/user-list.component';
import { UserListItemComponent } from './main/user-list/user-list-item/user-list-item.component';
import { EventListComponent } from './main/event-list/event-list.component';
import { EventListItemComponent } from './main/event-list/event-list-item/event-list-item.component';
import { EventListDetailComponent } from './main/event-list/event-list-detail/event-list-detail.component';
import { EventListEditComponent } from './main/event-list/event-list-edit/event-list-edit.component';
import { LoginComponent } from './main/basic/login/login.component';
import { RegisterComponent } from './main/basic/register/register.component';
import { UserListDetailComponent } from './main/user-list/user-list-detail/user-list-detail.component';
import { UserListEditComponent } from './main/user-list/user-list-edit/user-list-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatMenuModule,

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC-GscEPC6uAa3lvJZP-DjzWlje7DhzAjQ",
      authDomain: "asadomanager.firebaseapp.com",
      databaseURL: "https://asadomanager.firebaseio.com",
      projectId: "asadomanager",
      storageBucket: "asadomanager.appspot.com",
      messagingSenderId: "546665794706"
    }),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    UserListComponent,
    UserListItemComponent,
    EventListComponent,
    EventListItemComponent,
    EventListDetailComponent,
    EventListEditComponent,
    LoginComponent,
    RegisterComponent,
    UserListDetailComponent,
    UserListEditComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
