import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './main/event-list/event-list.component';

import { EventListEditComponent } from './main/event-list/event-list-edit/event-list-edit.component';
import { LoginComponent } from './main/basic/login/login.component';
import { RegisterComponent } from './main/basic/register/register.component';
import { AuthenticationGuard } from './shared/authentication.guard';
import { UserListComponent } from './main/user-list/user-list.component';
import { EventListDetailComponent } from './main/event-list/event-list-detail/event-list-detail.component';
import { UserListEditComponent } from './main/user-list/user-list-edit/user-list-edit.component';


const routes: Routes = [
  // { path: 'event', component: EventListComponent, children: [
  //     { path: 'detail/:id', component: EventListDetailComponent } ,
  //     { path: 'add', component: EventListEditComponent },
  //     { path: 'edit/:id', component: EventListEditComponent }  
  //   ]
  // },
  { path: 'login'           , component: LoginComponent },
  { path: 'register'        , component: RegisterComponent },
  { path: 'event'           , component: EventListComponent       , canActivate: [ AuthenticationGuard ] },
  { path: 'event/detail/:id', component: EventListDetailComponent , canActivate: [ AuthenticationGuard ]  },
  { path: 'event/add'       , component: EventListEditComponent   , canActivate: [ AuthenticationGuard ]  },
  { path: 'event/:id'     , component: EventListEditComponent   , canActivate: [ AuthenticationGuard ], children: [
      { path: 'user'        , component: UserListComponent } ,
      { path: 'user/add'    , component: UserListEditComponent } ,
      { path: 'user/:id'    , component: UserListEditComponent } ,
    ]
  },
  { path: '', redirectTo: '/event', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
