import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { mail: '', password:'' };
  error:String = "";
  hide = true;
  
  constructor(
    private _fireAuth:AngularFireAuth,
    private _loginService:LoginService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this._loginService.signOut();
  }

  login = (form:NgForm) => {
    this._loginService.signIn(this.user.mail, this.user.password)
      .then(() => {
        form.reset();
        this._router.navigate(['/event']);
      })
      .catch(err => {
        this.error = err.message;
      });
  }

}
