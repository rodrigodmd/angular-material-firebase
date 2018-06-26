import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyHeaderComponent } from './main/my-header/my-header.component';
import { MyBodyComponent } from './main/my-body/my-body.component';
import { MyFooterComponent } from './main/my-footer/my-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyBodyComponent,
    MyFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
