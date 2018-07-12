import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import { 
  MatToolbar, 
  MatButtonModule, 
  MatCheckboxModule
} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _fireAuth:AngularFireAuth,
  ) { }

  ngOnInit() {
    this._fireAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  }

}
