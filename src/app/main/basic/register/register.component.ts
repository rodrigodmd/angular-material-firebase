import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/service/login.service';

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
    private _router:Router,
    private _loginService:LoginService,
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

    this._loginService.register(this.user)
      .then((data:any) => {
          //do something
       //   form.reset();
          this.login();
      })
      .catch(err => {
        this.error = err.message;
      });
    }

    login = () => {
      this._loginService.signIn(this.user.mail, this.user.password)
        .then(() => {
          this._router.navigate(['/event']);
        })
        .catch(err => {
          this.error = err.message;
        });
    }

  


}
