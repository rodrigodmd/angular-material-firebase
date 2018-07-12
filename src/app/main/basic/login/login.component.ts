import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { mail: '', password:'' };
  error:String = "";
  
  constructor(
    private _fireAuth:AngularFireAuth,
    private _router:Router,
  ) { }

  ngOnInit() {
  }

  login = (form:NgForm) => {
    this._fireAuth.auth.signInWithEmailAndPassword(this.user.mail, this.user.password)
      .then(() => {
        form.reset();
        this._router.navigate(['/event']);
      })
      .catch(err => {
        this.error = err.message;
      });
  }

}
