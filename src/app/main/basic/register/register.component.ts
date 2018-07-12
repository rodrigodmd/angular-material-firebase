import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = { 
    uid: '',
    name: '',
    mail: '', 
    password:''
  };
  password_reentered:String = '';
  error:String = "";

  constructor(
    private _fireAuth:AngularFireAuth,
    private _store: AngularFirestore,
    private _router:Router,
  ) { }

  ngOnInit() {
  }

  register = (form:NgForm) => {
    if (this.user.password != this.password_reentered) {
      this.error = "Password reingresado incorrecto";
      return;
    } else {
      this.error = "";
    }

    this._fireAuth.auth.createUserWithEmailAndPassword(this.user.mail, this.user.password)
      .then((data:any) => {
        if (!this.user.uid) { 
          this.user.uid = data.user.uid;
        }
        this._store.collection('user').add(this.user);
        this.login();
      })
      .catch(err => {
        this.error = err.message;
      });
  }

  login = () => {
    this._fireAuth.auth.signInWithEmailAndPassword(this.user.mail, this.user.password)
      .then(() => {
        this._router.navigate(['/event']);
      })
      .catch(err => {
        this.error = err.message;
      });
  }


}
