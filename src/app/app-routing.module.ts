import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './main/event-list/event-list.component';
import { EventListAddComponent } from './main/event-list/event-list-add/event-list-add.component';
import { UserListItemComponent } from './main/user-list/user-list-item/user-list-item.component';

const routes: Routes = [
  { path: 'event', component: EventListComponent, children: [
      { path: 'detail/:id', component: EventListAddComponent } ,
      { path: 'add', component: EventListAddComponent } 
    ]
  },
  { path: '', redirectTo: '/event', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
