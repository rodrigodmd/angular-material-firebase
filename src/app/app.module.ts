import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  MatButtonModule,
  MatCardModule,
  MatListModule
} from '@angular/material';
import { BodyComponent } from './layout/components/body/body.component';
import { UserListComponent } from './main/user-list/user-list.component';
import { UserListItemComponent } from './main/user-list/user-list-item/user-list-item.component';
import { EventListComponent } from './main/event-list/event-list.component';
import { EventListItemComponent } from './main/event-list/event-list-item/event-list-item.component';
import { EventListDetailComponent } from './main/event-list/event-list-detail/event-list-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    UserListComponent,
    UserListItemComponent,
    EventListComponent,
    EventListItemComponent,
    EventListDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
