import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserListService } from './user-list.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private IS_LOGGED_IN = 'isLoggedIn';

  user = { 
    id: '',
    name: '',
    mail: '', 
    password:''
  };

  fireUser;

  constructor(
    private _fireAuth:AngularFireAuth,
    private userListService:UserListService,
  ) { 
    this._fireAuth.auth.onAuthStateChanged((user) => {
      this.fireUser = user;
      sessionStorage.setItem(this.IS_LOGGED_IN, user ? 'true' : 'false');
    });
  }

  signIn = (mail: string, password:string): Promise<firebase.auth.UserCredential> => {
    return this._fireAuth.auth.signInWithEmailAndPassword(mail, password);
  }

  signOut = () => {
    return this._fireAuth.auth.signOut();
  }

  register = (user) => {
    return this._fireAuth.auth.createUserWithEmailAndPassword(user.mail, user.password)
      .then((data:any) => {
        this.user = user;
        if (!this.user.id) { 
          this.user.id = data.user.uid;
        }
        this.userListService.addUser(this.user);
      });
  }

  isAuthenticated = () => sessionStorage.getItem(this.IS_LOGGED_IN) == 'true';

}
