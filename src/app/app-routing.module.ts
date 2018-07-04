import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './main/event-list/event-list.component';

import { EventListEditComponent } from './main/event-list/event-list-edit/event-list-edit.component';
import { EventListDetailComponent } from './main/event-list/event-list-detail/event-list-detail.component';


const routes: Routes = [
  // { path: 'event', component: EventListComponent, children: [
  //     { path: 'detail/:id', component: EventListDetailComponent } ,
  //     { path: 'add', component: EventListEditComponent },
  //     { path: 'edit/:id', component: EventListEditComponent }  
  //   ]
  // },
  { path: 'event', component: EventListComponent },
  { path: 'event/add', component: EventListEditComponent },
  { path: 'event/edit/:id', component: EventListEditComponent },
  { path: 'event/detail/:id', component: EventListDetailComponent } ,
  { path: '', redirectTo: '/event', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
