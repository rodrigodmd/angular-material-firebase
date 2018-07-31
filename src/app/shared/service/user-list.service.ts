import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface User { 
  id: string,
  name: string,
  mail: string,
  password: string,
  display?: string
};

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private COLLECTION = 'user';

  private _users: User[];

  constructor(
    private _store: AngularFirestore,
  ) { 
    this._store.collection(this.COLLECTION)
      .valueChanges()
      .subscribe(users => {
        this._users = users as User[];
        this._users.forEach((user, index) => this._users[index].display = `${user.name} - ${user.mail}`);
      });
  }

  addUser = (user) => this.editUser(user);

  editUser = (user) => {
    
    //TODO: Should validate ID
    return this._store.collection(this.COLLECTION).doc(user.id).set(user);
  }

  searchUser = (searchStr:string) => new Observable<User[]>((obs) => {
    let userList = this._users.filter((user) => user.name.includes(searchStr) || user.mail.includes(searchStr));
    obs.next(userList ? userList : []);
  });
  
  
}
